"use client";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import React from "react";

export default function HeroSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  //   React.useEffect(() => {
  //     if (!api) {
  //       return;
  //     }

  //     setCurrent(api.selectedScrollSnap() + 1);
  //     console.log(api.selectedScrollSnap());

  //     api.on("select", () => {
  //       setCurrent(api.selectedScrollSnap() + 1);
  //       console.log(api.selectedScrollSnap());
  //     });
  //   }, [api]);

  const slides = [
    { id: 1, src: "/images/home/hero-banner-img.webp", active: true },
    { id: 2, src: "/images/home/hero-banner-img.webp", active: false },
    { id: 3, src: "/images/home/hero-banner-img.webp", active: false },
  ];

  return (
    <section className="max-w-[1440px] mx-auto p-[1.5rem] xl:py-[2.88rem] xl:px-[4.38rem]">
      <Carousel>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id}>
              <img alt="Banner" src={slide.src} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <NavDots slides={slides} />
      </Carousel>
    </section>
  );
}

function NavDots({ slides }: any) {
  return (
    <div className="max-w-[300px] mx-auto relative flex justify-center items-center gap-2 mt-[-50px]">
      {slides.map((slide: any, index: number) => (
        <div key={slide.id} className={`w-3 h-3 rounded-full ${slide.active ? "bg-[#D39841]" : "bg-[#666666]"}`}></div>
      ))}
    </div>
  );
}
