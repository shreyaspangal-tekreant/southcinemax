"use client";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import useDimension from "@/hooks/useDimensions";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

interface SlideInterface {
  id: number;
  mobileSrc: string;
  desktopSrc: string;
  active: boolean;
}

const slidesInit: SlideInterface[] = [
  { id: 1, mobileSrc: "/images/home/hero-banner-sm.webp", desktopSrc: "/images/home/hero-banner.webp", active: true },
  { id: 2, mobileSrc: "/images/home/hero-banner-sm.webp", desktopSrc: "/images/home/hero-banner.webp", active: false },
  { id: 3, mobileSrc: "/images/home/hero-banner-sm.webp", desktopSrc: "/images/home/hero-banner.webp", active: false },
];

export default function HeroSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [slides, setSlides] = React.useState(slidesInit);
  const { width } = useDimension();
  const bannerWidth = width < 768 && width !== 0 ? 342 : 1300;
  const bannerHeight = width < 768 && width !== 0 ? 240 : 480;

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setSlides(updateSlides(api));
    });
  }, [api]);

  function updateSlides(api: any) {
    return slides.map((slide) => (slide.id === api.selectedScrollSnap() + 1 ? { ...slide, active: true } : { ...slide, active: false }));
  }

  const getBannerImg = (slide: SlideInterface) => (width < 768 && width !== 0 ? slide.mobileSrc : slide.desktopSrc);

  return (
    <section className="max-w-[1440px] mx-auto p-[1.5rem] xl:py-[2.88rem] xl:px-[4.38rem]">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id}>
              {width === 0 && <Skeleton className="w-full h-[265px] lg:h-[480px]" />}
              {width > 0 && <Image alt="Banner" src={getBannerImg(slide)} width={bannerWidth} height={bannerHeight} className="w-full rounded-[15px] object-cover" />}
            </CarouselItem>
          ))}
        </CarouselContent>
        <NavDots slides={slides} handleActiveSlideBtn={updateSlides} />
      </Carousel>
    </section>
  );
}

function NavDots({ slides }: any) {
  return (
    <div className="max-w-[300px] mx-auto absolute left-1/2 -translate-x-2/4 flex justify-center items-center gap-2 mt-[15px] lg:mt-[-30px]">
      {slides.map((slide: any, index: number) => (
        <div key={slide.id} className={`w-[9px] h-[9px] lg:w-3 lg:h-3 rounded-full ${slide.active ? "bg-[#D39841]" : "bg-[#666666]"}`}></div>
      ))}
    </div>
  );
}
