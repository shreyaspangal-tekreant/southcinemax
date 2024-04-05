import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { BiSolidChevronRight } from "react-icons/bi";

export default function Suggestions({ title, slides, type = "horizontal" }: any) {
  const horizontalCardStyles = "md:basis-1/2 lg:basis-1/3 h-[15.75rem]";
  const verticalCardStyles = "min-[425px]:basis-1/2 md:basis-1/3 lg:basis-1/6 h-[15.75rem]";
  const CarouselItemStyles = type === "horizontal" ? horizontalCardStyles : verticalCardStyles;

  return (
    <section className="suggestions max-w-[1440px] mx-auto p-[1.5rem] pt-[3rem] xl:py-[2.88rem] xl:px-[4.38rem]">
      <div className="flex items-center gap-2">
        <h2 className="text-[0.88rem] md:text-[1rem] lg:text-[1.25rem] text-[#E5E5E5]">{title}</h2>
        <button type="button" className="text-[0.88rem] md:text-[1rem] text-[#D49941] flex items-center">
          Explore All
          <BiSolidChevronRight className="text-[#D49941] w-[25px] h-[25px] object-cover" />
        </button>
      </div>
      <div className="pt-[0.81rem]">
        <Carousel>
          <CarouselContent>
            {slides.map((slide: any, index: number) => (
              <CarouselItem key={slide.id} className={CarouselItemStyles}>
                <img alt="Banner" src={slide.src} className="w-full h-full rounded-[5px] object-cover" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
