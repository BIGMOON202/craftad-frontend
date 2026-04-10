import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  const goToDashboard = () => navigate("/dashboard");

  return (
    <div className="min-h-screen flex" dir="rtl">
      {/* Right side - Form */}
      <div className="w-full lg:w-[40%] flex flex-col items-center justify-center px-6 py-12 bg-card relative">
        {/* Pink right border line */}
        {/* <div className="absolute top-0 left-0 w-1 h-full bg-primary hidden lg:block" /> */}

        <div className="w-full max-w-md text-start">
          {/* Logo — align to inline start (right in RTL) */}
          <div className="mb-6 flex w-full justify-start">
            <img
              src="/images/logo.png"
              alt="Craftad"
              className="h-9 w-auto max-w-full object-contain sm:h-10"
              decoding="async"
            />
          </div>

          {/* Heading — RTL: align to inline start (right in dir="rtl") */}
          <div className="mb-2 w-full text-start">
            <h2 className="text-[40px] font-bold text-foreground leading-snug text-start">
              ברוכים השבים,
              <br />
              התחברו כדי להתחיל
            </h2>
          </div>

          {/* Create account link */}
          <p
            style={{ fontFamily: '"Ploni DL 1.1 AAA", sans-serif' }}
            className="flex flex-1 justify-start mb-8 text-center text-[18px] font-normal not-italic leading-[32px] tracking-[0.02em] text-[#596778] [leading-trim:none]"
          >
            <>
              {"אין לך חשבון?"}
              <button
                type="button"
                onClick={goToDashboard}
                style={{ fontFamily: '"Ploni DL 1.1 AAA", sans-serif' }}
                className="pr-1 m-0 cursor-pointer border-0 bg-transparent p-0 align-baseline text-[18px] font-semibold not-italic leading-[32px] tracking-[0.02em] text-[#CC3366] [leading-trim:none] hover:underline"
              >
                צרו חשבון חדש
              </button>
            </>
          </p>

          {/* Google — text at inline start, icon follows (RTL) */}
          <button
            type="button"
            onClick={goToDashboard}
            className="mb-5 flex w-full items-center justify-center gap-3 rounded-xl border border-[#AEB3B8] bg-[#FDEEF2] px-6 py-3.5 font-medium text-foreground transition-colors hover:bg-[#f6e5ea]"
          >
            <img
              src="/images/google_icon.png"
              alt=""
              className="h-5 w-5 shrink-0 object-contain"
              width={20}
              height={20}
              decoding="async"
            />
            <span className="text-[#5A5A5A]">התחברות באמצעות גוגל</span>
          </button>

          {/* Divider — flex follows RTL: lines + label flow right-to-left */}
          <div className="mb-6 flex items-center gap-4">
            <div className="h-[2px] flex-1 bg-[#CECECE]" />
            <span className="whitespace-nowrap text-sm text-muted-foreground">או התחברו באמצעות סיסמה</span>
            <div className="h-[2px] flex-1 bg-[#CECECE]" />
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              goToDashboard();
            }}
            className="space-y-5"
          >
            {/* Email — LTR value, RTL layout: icon right, text aligned to icon */}
            <div>
              <label htmlFor="signup-email" className="text-[#596778] mb-2 block text-sm font-bold">
                כתובת אימייל או שם משתמש
              </label>
              <div className="relative">
                <input
                  id="signup-email"
                  type="email"
                  placeholder="Tali@acme.co.il"
                  autoComplete="email"
                  dir="ltr"
                  style={{ fontFamily: '"Ploni DL 1.1 AAA", sans-serif' }}
                  className="w-full rounded-xl border border-[#E8E8E8] bg-card py-3.5 pl-4 pr-11 text-right text-[18px] font-normal not-italic leading-[24px] tracking-normal text-[#757575] [leading-trim:none] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <img
                  src="/images/email_icon.png"
                  alt=""
                  className="pointer-events-none absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 object-contain"
                  width={20}
                  height={20}
                  decoding="async"
                />
              </div>
            </div>

            {/* Password — same chrome + typography as email; icon right (Hebrew RTL) */}
            <div>
              <label htmlFor="signup-password" className="text-[#596778] mb-2 block text-sm font-bold">
                סיסמה
              </label>
              <div className="relative">
                <input
                  id="signup-password"
                  type="password"
                  placeholder="סיסמה"
                  autoComplete="current-password"
                  style={{ fontFamily: '"Ploni DL 1.1 AAA", sans-serif' }}
                  className="w-full rounded-xl border border-[#E8E8E8] bg-card py-3.5 pl-4 pr-11 text-start text-[18px] font-normal not-italic leading-[24px] tracking-normal text-[#757575] [leading-trim:none] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <img
                  src="/images/pwd_icon.png"
                  alt=""
                  className="pointer-events-none absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 object-contain"
                  width={20}
                  height={20}
                  decoding="async"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl py-4 text-center text-lg font-bold text-primary-foreground transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(to left, hsl(340 80% 60%), hsl(350 90% 75%))",
              }}
            >
              התחברות
            </button>
          </form>

          {/* Bottom links — justify-between respects RTL: first at start (right), second at end (left) */}
          <div className="mt-5 flex items-center justify-between gap-3">
          <button type="button" onClick={goToDashboard} className="text-sm font-bold text-primary hover:underline">
              שכחתם את הסיסמה?
            </button>
            <button type="button" onClick={goToDashboard} className="text-sm font-bold text-primary hover:underline">
              כניסה כאורח
            </button>
          </div>
        </div>
      </div>

      {/* Left side — full-bleed hero (hidden on small screens) */}
      <div className="hidden lg:block relative w-[60%] min-h-screen shrink-0 overflow-hidden">
        <img
          src="/images/login_bg.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          decoding="async"
        />
      </div>
    </div>
  );
};

export default SignupPage;
