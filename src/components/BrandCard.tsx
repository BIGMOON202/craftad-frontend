import { ChevronLeft } from "lucide-react";

interface BrandCardProps {
  name: string;
  logo?: string;
  logoText?: string;
  /** Top strip background image, e.g. /images/bar1.png */
  headerBarImage?: string;
  /** Fallback when headerBarImage is not set (e.g. create card) */
  gradientStyle?: string;
  projectCount?: string;
  lastModified?: string;
  isCreateCard?: boolean;
  badgeText?: string;
  /** Logo badge image in header (default Accenture) */
  logoImage?: string;
}

const BrandCard = ({
  name,
  headerBarImage,
  gradientStyle,
  projectCount,
  lastModified,
  isCreateCard,
  badgeText,
  logoImage = "/images/accenture-icon.png",
}: BrandCardProps) => {
  if (isCreateCard) {
    return (
      <div className="h-[290px] rounded-2xl overflow-hidden border border-border bg-card shadow-md transition-shadow hover:shadow-lg">
        <div
          className="flex h-16 items-center justify-center bg-cover bg-center bg-no-repeat"
          style={
            gradientStyle
              ? { background: gradientStyle }
              : undefined
          }
        >
          <img
            src="/images/plus-brand.png"
            alt=""
            className="h-[52px] w-[52px] object-contain"
            width={52}
            height={52}
            decoding="async"
          />
        </div>
        <div className="p-4 text-right">
          <h3 className="text-lg font-bold text-foreground">{name}</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[290px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-md transition-shadow hover:shadow-lg">
      <div
        className="relative h-[60px] bg-cover bg-center bg-no-repeat"
        style={
          headerBarImage
            ? { backgroundImage: `url("${headerBarImage}")` }
            : gradientStyle
              ? { background: gradientStyle }
              : undefined
        }
      >
        <div className="absolute bottom-0 right-4 translate-y-1/2 pt-[60px] ">
          <div className="w-[190px] h-[140px] flex items-center justify-center">
            <img
              src={logoImage}
              alt=""
              className="h-[140px] w-[190px] object-contain"
              width={48}
              height={48}
              decoding="async"
            />
          </div>
        </div>
      </div>
      <div className="mt-auto px-[48px] pb-[40px] pt-10">
        <div className="flex items-end justify-between gap-4">
          <div className="space-y-2 text-right pr-[8px]">
            <h3 className="font-bold text-[#0A1F30] text-[28px]">{name}</h3>
            <div className="flex items-center justify-start gap-2 text-xs">
              {projectCount && <span className="text-[#5A5A5A] font-medium text-[16px]">{projectCount}</span>}
              {badgeText && (
                <span className="rounded-[16px] bg-[#FCE7EF] px-[12px] py-[8px] text-[16px] font-medium text-[#CC3366]">{badgeText}</span>
              )}
            </div>
            {lastModified && <p className="text-[16px] text-[#767676] font-regular">{lastModified}</p>}
          </div>
          <button className="inline-flex items-center justify-between gap-1 rounded-[12px] border-[1px] border-[#AEB3B8] px-4 py-2 text-sm transition-colors hover:bg-secondary/50 w-[138px] h-[44px]">
            <span className="text-[14px] font-medium text-[#5A5A5A]">פרויקט חדש</span>
            <ChevronLeft className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
