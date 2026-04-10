import { useState } from "react";
import { ChevronDown } from "lucide-react";

const navIcon = (src: string) => (
  <img src={src} alt="" className="h-[28px] w-[28px] shrink-0 object-contain" width={28} height={28} decoding="async" />
);

interface SidebarProps {
  activeBrand?: string;
  userEmail?: string;
}

const Sidebar = ({ activeBrand = "accenture", userEmail = "Talia@acme.co.il" }: SidebarProps) => {
  const [avatarFailed, setAvatarFailed] = useState(true);

  return (
    <aside
      className="dashboard-sidebar-scroll flex min-h-0 w-[340px] shrink-0 flex-col self-stretch border-r border-border bg-[#FFFFFF33]/5 backdrop-blur-[4px]"
      style={{ boxShadow: "-4px 4px 24px 0px #0000000F" }}
      dir="rtl"
    >
      {/* Logo */}
      <div className="flex justify-start pt-[32px] px-[32px]">
        <img
          src="/images/logo.png"
          alt="Craftad"
          className="h-[30px] w-[108px] max-w-full object-contain"
          width={108}
          height={30}
          decoding="async"
        />
      </div>

      {/* Create button */}
      <div className="px-[32px] mb-4 pt-[48px]">
        <button
          className="w-full flex items-center justify-between gap-2 rounded-xl py-3 pr-[12px] pl-[14px] text-primary-foreground font-bold text-base w-[270px] h-[48px]"
          style={{ background: "linear-gradient(to left, hsl(340 80% 60%), hsl(350 90% 75%))" }}
        >
          <div className="flex items-center gap-[16px]">
            <img
              src="/images/add-square.png"
              alt=""
              className="h-[28px] w-[28px] shrink-0 object-contain"
              width={28}
              height={28}
              decoding="async"
            />
            <span className="text-[20px] font-bold text-[#FDF2F6]">יצירה</span>
          </div>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Nav items */}
      <nav className="flex-1 space-y-1 px-[32px]">
        <NavItem icon={navIcon("/images/stars-select.png")} label="מותגים" active />
        <NavItem icon={navIcon("/images/projects.png")} label="פרוייקטים" />
        <NavItem icon={navIcon("/images/ai-user.png")} label="אווטארים" />
        <NavItem icon={navIcon("/images/dashboard-speed-02.png")} label="ציון קריאייטיב" />
        <NavItem icon={navIcon("/images/settings-02.png")} label="הגדרות" hasChevron />
      </nav>

      {/* Bottom section */}
      <div className="px-[32px] pb-[32px]">
        {/* Active brand */}
        <div className="text-[16px] text-[#1E1E1E] text-right py-1">מותג פעיל:</div>
        <div className="flex w-full h-[48px] items-center justify-between gap-3 rounded-[12px] px-[16px] py-3 text-[18px] font-medium text-foreground transition-colors bg-[#FFFFFF] hover:bg-secondary/50">
          <span className="font-bold">{activeBrand}</span>
          <ChevronDown className="mr-auto h-4 w-4 text-[#CC3366]" />
        </div>
        <div className="h-5" />

        {/* User + plan card (images: sidebar-avatar.png, premium-rocket.png) */}
        <div className="rounded-[16px] border border-[#E8E8E8] bg-white p-4 shadow-sm">
          <div className="flex items-center justify-start gap-3">
            {!avatarFailed ? (
              <img
                src="/images/sidebar-avatar.png"
                alt=""
                className="h-12 w-12 shrink-0 rounded-xl object-cover"
                width={48}
                height={48}
                decoding="async"
                onError={() => setAvatarFailed(true)}
              />
            ) : (
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D31973] text-lg font-bold text-white"
                aria-hidden
              >
                T
              </div>
            )}
            <div className="min-w-0 flex-1 text-right">
              <div className="text-base font-bold text-[#1E1E1E]">טלי למדן</div>
              <div className="text-sm text-[#767676]">{userEmail}</div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3 rounded-[12px] border border-[#E8E8E8] px-4 py-3">
            <div className="flex min-w-0 items-center justify-start gap-2">
              <img
                src="/images/rocket-01.png"
                alt=""
                className="h-5 w-5 shrink-0 object-contain"
                width={20}
                height={20}
                decoding="async"
              />
              <span className="text-sm font-medium text-[#1E1E1E]">תכנית פרימיום</span>
            </div>
            <button type="button" className="shrink-0 text-sm font-bold text-[#CC3366] hover:underline">
              לשנות
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

const NavItem = ({ icon, label, active, hasChevron }: { icon: React.ReactNode; label: string; active?: boolean; hasChevron?: boolean }) => (
  <button
    className={`w-full flex items-center justify-start gap-3 rounded-xl px-4 py-3 text-[18px] font-medium transition-colors ${active ? "text-[#CC3366] bg-[#0000000A] font-bold" : "text-foreground hover:bg-secondary/50"
      }`}
  >
    {icon}
    <span>{label}</span>
    {hasChevron && <ChevronDown className="w-4 h-4 text-muted-foreground mr-auto" />}
  </button>
);

export default Sidebar;
