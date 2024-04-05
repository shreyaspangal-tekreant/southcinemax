"use client";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { BiSolidChevronRight } from "react-icons/bi";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { prevBtnVariants, nextBtnVariants, exploreBtnVariants } from "@/animations/home/suggestionsAnimations";

export default function Suggestions({ title, slides: slidesInit, type = "horizontal" }: any) {
  const horizontalCardStyles = "md:basis-1/2 lg:basis-1/3 h-[15.75rem]";
  const verticalCardStyles = "min-[425px]:basis-1/2 md:basis-1/3 lg:basis-1/6 h-[15.75rem]";
  const CarouselItemStyles = type === "horizontal" ? horizontalCardStyles : verticalCardStyles;

  const [api, setApi] = React.useState<CarouselApi>();
  const [slides, setSlides] = React.useState(slidesInit);
  const [hovered, setHovered] = React.useState(false);
  const [slidePrev, setSlidePrev] = React.useState(false);
  const [slideNext, setSlideNext] = React.useState(false);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    if (slidePrev) {
      api.scrollPrev();
      setSlidePrev(false);
    }
    if (slideNext) {
      api.scrollNext();
      setSlideNext(false);
    }
  }, [api, slidePrev, slideNext]);

  function handlePrevBtn() {
    setSlidePrev(true);
  }

  function handleNextBtn() {
    setSlideNext(true);
  }

  return (
    <section className="suggestions max-w-[1440px] mx-auto p-[1.5rem] pt-[3rem] xl:py-[2.88rem] xl:px-[4.38rem]">
      <div className="flex items-center gap-2">
        <h2 className="text-[0.88rem] md:text-[1rem] lg:text-[1.25rem] text-[#E5E5E5]">{title}</h2>
        <motion.button whileHover="hover" variants={exploreBtnVariants} type="button" className="text-[0.88rem] md:text-[1rem] text-[#D49941] flex items-center">
          Explore All
          <motion.div variants={exploreBtnVariants}>
            <BiSolidChevronRight className="text-[#D49941] w-[25px] h-[25px] object-cover" />
          </motion.div>
        </motion.button>
      </div>
      <motion.div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="overflow-hidden pt-[0.81rem]">
        <Carousel setApi={setApi} className="relative">
          <CarouselContent>
            {slides.map((slide: any, index: number) => (
              <CarouselItem key={slide.id} className={CarouselItemStyles}>
                <img alt="Banner" src={slide.src} className="w-full h-full rounded-[5px] object-cover" />
                {/* whileHover={{ scale: 1.2, transition: { duration: 0.2 } }} */}
              </CarouselItem>
            ))}
          </CarouselContent>
          <AnimatePresence>{hovered && <PreviousBtn handlePrevBtn={handlePrevBtn} />}</AnimatePresence>
          <AnimatePresence>{hovered && <NextBtn handleNextBtn={handleNextBtn} />}</AnimatePresence>
        </Carousel>
      </motion.div>
    </section>
  );
}

function PreviousBtn({ handlePrevBtn }: any) {
  return (
    <motion.div
      variants={prevBtnVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      key="prevBtn"
      className="absolute top-0 left-0 w-[40px] md:w-[68px] h-full bg-gray-900/50 hover:bg-gray-900/75"
    >
      <button type="button" onClick={handlePrevBtn} className="h-full w-full flex items-center justify-center">
        <CgChevronLeft className="text-[#fff] w-[50px] h-[50px]" />
      </button>
    </motion.div>
  );
}

function NextBtn({ handleNextBtn }: any) {
  return (
    <motion.div
      variants={nextBtnVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      key="NextBtn"
      className="absolute top-0 right-0 w-[40px] md:w-[68px] h-full bg-gray-900/50 hover:bg-gray-900/75"
    >
      <button type="button" onClick={handleNextBtn} className="h-full w-full flex items-center justify-center">
        <CgChevronRight className="text-[#fff] w-[50px] h-[50px]" />
      </button>
    </motion.div>
  );
}
