import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"


export default function Sponsers() {
  return (
    <section className="">
      <div className="max-w-[1440px] mx-auto p-[1.5rem] pt-[3rem] xl:py-[2.88rem] xl:px-[4.38rem]">
        <h2 className="text-[#D39841] text-[1.6rem] lg:text-[3rem] font-semibold text-center">Our Sponsers</h2>
      </div>
      <div className="flex items-center w-full h-[5rem] lg:h-[11.81rem] bg-gradient-to-b from-[#121212] to-[#000000] px-[1rem] lg:px-[5rem] xl:px-[10.63rem] md:py-[4.38rem]">
        <Carousel opts={{
          loop: true,
          dragFree: true,
        }} className="w-full">
          <CarouselContent className="flex gap-2 md:gap-5 lg:gap-10">
            {Array.from({ length: 10 }).map((item, index) => (
              <CarouselItem key={index} className="basis-1/2 min-[390px]:basis-1/3 lg:basis-1/5">
                <img key={index} src="/images/logo-with-text.webp" alt="Brand logo" className="mx-auto grayscale w-full h-[3.06rem] object-contain" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
