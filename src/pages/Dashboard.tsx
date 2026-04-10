import { useEffect, useRef, useState } from "react";
import Sidebar from "@/components/Sidebar";
import BrandCard from "@/components/BrandCard";

const Dashboard = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [thumb, setThumb] = useState({ top: 0, height: 0, visible: false });

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const TOP_INSET = 36;
    const BOTTOM_INSET = 22;
    const MIN_THUMB = 48;

    const updateThumb = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const trackHeight = Math.max(clientHeight - TOP_INSET - BOTTOM_INSET, 0);

      if (scrollHeight <= clientHeight || trackHeight <= 0) {
        setThumb({ top: 0, height: 0, visible: false });
        return;
      }

      const thumbHeight = Math.max(MIN_THUMB, trackHeight * (clientHeight / scrollHeight));
      const maxThumbTop = Math.max(trackHeight - thumbHeight, 0);
      const progress = scrollTop / Math.max(scrollHeight - clientHeight, 1);
      const thumbTop = progress * maxThumbTop;

      setThumb({ top: thumbTop, height: thumbHeight, visible: true });
    };

    updateThumb();
    el.addEventListener("scroll", updateThumb, { passive: true });
    window.addEventListener("resize", updateThumb);
    const observer = new ResizeObserver(updateThumb);
    observer.observe(el);

    return () => {
      el.removeEventListener("scroll", updateThumb);
      window.removeEventListener("resize", updateThumb);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="flex h-screen min-h-0 w-full overflow-hidden bg-gradient-to-b from-[#F5F6FA] to-[#EAEFF5]"
      dir="rtl"
    >
      {/* Sidebar — viewport height, scrolls when content overflows */}
      <Sidebar />

      {/* Red accent line */}
      {/* <div className="w-1 shrink-0 self-stretch bg-destructive/60" aria-hidden /> */}

      {/* Main column: header + search stay put; only card list scrolls */}
      <main className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <div className="flex shrink-0 items-center justify-between border border-white bg-[#FFFFFF33] px-8 py-[12px] backdrop-blur-[4px]">
          <h2
            style={{ fontFamily: '"Ploni DL 1.1 AAA", sans-serif' }}
            className="text-right text-[28px] font-medium not-italic leading-[24px] tracking-normal text-[#303030] [leading-trim:none]"
          >
            המותגים שלי
          </h2>
          <button
            type="button"
            className="flex justify-between h-[48px] w-[153px] shrink-0 items-center gap-2 rounded-[12px] border border-[#AEB3B8] bg-white px-4 py-3 text-sm text-foreground hover:bg-secondary/50"
          >
            <img
              src="/images/video-replay.png"
              alt=""
              className="h-[20px] w-[20px] shrink-0 object-contain"
              // width={24}
              // height={24}
              decoding="async"
            />
            <span className="min-w-0 text-[#5A5A5A] text-[16px]">סרטון הדרכה</span>
          </button>
        </div>

        {/* Content body under top bar */}
        <div className="relative flex min-h-0 flex-1 flex-col">
          <div
            className="pointer-events-none absolute inset-0 bg-[url('/images/dashboard_bg.png')] bg-cover bg-center bg-no-repeat opacity-20"
            aria-hidden
          />
          <div className="relative z-10 flex min-h-0 flex-1 flex-col">
            {/* Welcome text */}
            <div className="mb-6 shrink-0 px-8 text-right pt-[40px] pr-[80px]">
              <h1 className="mb-2 flex items-center justify-start gap-2 text-2xl font-bold text-[#1E1E1E] pb-[4px]">
                <span className="text-[30px]">ברוכים השבים! הגדירו כאן את המותגים שלכם</span>
                <img
                  src="/images/ai-magic.png"
                  alt=""
                  className="h-5 w-5 shrink-0 object-contain"
                  width={20}
                  height={20}
                  decoding="async"
                />
              </h1>
              <p className="text-sm text-muted-foreground text-[#5A5A5A] text-[16px]">
                זה השלב הראשון בדרך ליצירת התכנים עבור המותג שלכם. זה רק כמה צעדים פשוטים, לא יותר מ3 דקות!
              </p>
            </div>

            {/* Search */}
            <div className="mb-8 flex shrink-0 justify-start px-8 pt-[10px] pr-[80px]">
              <div className="flex h-[40px] w-[239px] items-center gap-3 rounded-[12px] border border-[#E8E8E8] bg-[#FFFFFFCC] px-4 py-2 opacity-100">
                <img
                  src="/images/search-01.png"
                  alt=""
                  className="h-4 w-4 shrink-0 object-contain"
                  width={16}
                  height={16}
                  decoding="async"
                />
                <input
                  type="text"
                  placeholder="חיפוש מותגים"
                  className="m-0 w-full border-0 bg-transparent p-0 text-right text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
              </div>
            </div>

            {/* Cards area: custom left scrollbar (top 36 / bottom 22), no native arrows */}
            <div className="relative min-h-0 px-[80px]">
              <div
                className="pointer-events-none absolute left-[80px] top-[36px] bottom-[22px] w-[3px] rounded-full bg-[#D9D9D9]"
                aria-hidden
              />
              {thumb.visible && (
                <div
                  className="pointer-events-none absolute left-[80px] w-[4px] rounded-full bg-[#CC3366]"
                  style={{ top: `calc(36px + ${thumb.top}px)`, height: thumb.height }}
                  aria-hidden
                />
              )}
              <div ref={scrollRef} className="dashboard-main-scroll-manual h-full" dir="rtl">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 pl-[80px]">
                  <div className="cursor-pointer overflow-hidden rounded-2xl border border-border bg-card shadow-md transition-shadow hover:shadow-lg h-[290px]">
                    <div className="relative h-[209px] bg-[url('/images/plus-card-bg.png')] bg-cover bg-center bg-no-repeat">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img
                          src="/images/plus-brand.png"
                          alt=""
                          className="h-[110px] w-[110px] object-contain"
                          width={110}
                          height={110}
                          decoding="async"
                        />
                      </div>
                    </div>
                    <div className="px-4 pt-[16px] text-right">
                      <h3 className="text-lg font-bold text-[#0A1F30] text-[28px]">צרו מותג חדש</h3>
                    </div>
                  </div>
                  <BrandCard
                    name="accenture"
                    logoText="accenture"
                    headerBarImage="/images/bar1.png"
                    projectCount="פרויקט אחד קיים"
                    lastModified="תאריך שינוי אחרון: 4.7.2024"
                    badgeText="מומלץ להגדיר אווטארים"
                  />
                  <BrandCard
                    name="JFrog"
                    logoText="JFrog"
                    headerBarImage="/images/bar2.png"
                    projectCount="2 פרויקטים קיימים"
                    lastModified="תאריך שינוי אחרון: 1.8.2024"
                  />
                  <BrandCard
                    name="Q2 Israel"
                    logoText="Q2"
                    headerBarImage="/images/bar3.png"
                    projectCount="5 פרויקטים קיימים"
                    lastModified="תאריך שינוי אחרון: 10.8.2024"
                  />
                  <BrandCard
                    name="Q2 Israel"
                    logoText="Q2"
                    headerBarImage="/images/bar3.png"
                    projectCount="5 פרויקטים קיימים"
                    lastModified="תאריך שינוי אחרון: 10.8.2024"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
