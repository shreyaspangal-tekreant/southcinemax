"use client";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import React from "react";

const slidesInit = [
  { id: 1, src: "/images/home/hero-banner-img.webp", active: true },
  { id: 2, src: "/images/home/hero-banner-img.webp", active: false },
  { id: 3, src: "/images/home/hero-banner-img.webp", active: false },
];

export default function HeroSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [slides, setSlides] = React.useState(slidesInit);

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

  return (
    <section className="max-w-[1440px] mx-auto p-[1.5rem] xl:py-[2.88rem] xl:px-[4.38rem]">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id}>
              <img alt="Banner" src={slide.src} className="min-h-[200px] object-cover" />
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
    <div className="max-w-[300px] mx-auto absolute left-1/2 -translate-x-2/4 flex justify-center items-center gap-2 mt-[-30px]">
      {slides.map((slide: any, index: number) => (
        <div key={slide.id} className={`w-3 h-3 rounded-full ${slide.active ? "bg-[#D39841]" : "bg-[#666666]"}`}></div>
      ))}
    </div>
  );
}
