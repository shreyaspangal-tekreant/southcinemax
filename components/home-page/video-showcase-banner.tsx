"use client";
import useDimension from "@/hooks/useDimensions";

export default function VideoSchowcaseBanner() {
  const { width } = useDimension();

  return (
    <section className="max-w-[1440px] mx-auto p-[1.5rem] pt-[3rem] xl:py-[2.88rem] xl:px-[4.38rem]">
      <div className="relative rounded-[25px] overflow-hidden">
        <button type="button" className="absolute left-1/2 -translate-x-1/2 top-16 rounded-full bg-[#D49941] px-[1rem] sm:px-[1.75rem] py-[0.31rem] font-bold hover:opacity-75">
          Play Video
        </button>
        <div className="h-full w-full">
          <img alt="Banner" src={width < 1024 ? "/images/home/events-banner-sm.webp" : "/images/home/events-banner.webp"} className="min-h-[400px] h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
