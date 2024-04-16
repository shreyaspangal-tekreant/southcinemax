"use client";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { BiSolidChevronRight } from "react-icons/bi";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { prevBtnVariants, nextBtnVariants, seeAllTextVariants, seeAllIconVariants } from "@/animations/home/suggestionsAnimations";
import useDimension from "@/hooks/useDimensions";
import Image from "next/image";
import DATA from "@/data/home.json";
import { Skeleton } from "../ui/skeleton";

export default function Suggestions({ title, slides: slidesInit, type = "horizontal" }: any) {
  const { width } = useDimension();

  const horizontalCardStyles = "md:basis-1/2 lg:basis-1/3 h-[15.75rem]";
  const verticalCardStyles = "basis-1/2 min-[390px]:basis-1/3 lg:basis-1/6 h-[15.75rem]";
  const CarouselItemStyles = type === "vertical" || (width < 1024 && width !== 0) ? verticalCardStyles : horizontalCardStyles;

  const [api, setApi] = React.useState<CarouselApi>();
  const [slides, setSlides] = React.useState(slidesInit);
  const [videoHovered, setVideoHovered] = React.useState(false);
  const [isTitleHovered, setIsTitleHovered] = React.useState(false);
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

  const getBannerImg = (slide: any) => (width < 768 && width !== 0 ? slide.mobileSrc : slide.desktopSrc);
  const bannerWidth = width < 768 && width !== 0 ? 110 : 420;
  const bannerHeight = width < 768 && width !== 0 ? 208 : 252;

  return (
    <section className="suggestions max-w-[1440px] mx-auto p-[1.5rem] pt-[3rem] xl:py-[2.88rem] xl:px-[4.38rem]">
      <div className="header">
        <motion.div onHoverStart={() => setIsTitleHovered(true)} onHoverEnd={() => setIsTitleHovered(false)} className="w-full lg:w-fit flex items-end justify-between lg:justify-start gap-2">
          <h2 className="text-[1.13rem] lg:text-[1.25rem] text-[#E5E5E5] truncate">{title}</h2>
          <button type="button" className="flex items-center">
            <motion.p
              key="seeAllText"
              variants={width > 1023 ? seeAllTextVariants : undefined}
              animate={isTitleHovered ? "animate" : "initial"}
              className="lg:opacity-0 mb-0 text-[0.88rem] md:text-[1rem] text-[#D49941] shrink-0"
            >
              See All
            </motion.p>
            <motion.div variants={width > 1023 ? seeAllIconVariants : undefined} initial="initial" animate={isTitleHovered ? "animate" : "initial"}>
              <BiSolidChevronRight className="text-[#D49941] w-[25px] h-[25px] object-cover" />
            </motion.div>
          </button>
        </motion.div>
      </div>
      <motion.div onMouseEnter={() => setVideoHovered(true)} onMouseLeave={() => setVideoHovered(false)} className="overflow-hidden pt-[0.81rem]">
        <Carousel setApi={setApi} className="relative">
          <CarouselContent>
            {slides.map((slide: any, index: number) => (
              <CarouselItem key={slide.id} className={CarouselItemStyles}>
                {width === 0 && <Skeleton className="w-full h-full" />}
                {width > 0 && (
                  <Image
                    alt="Banner"
                    src={getBannerImg(slide)}
                    placeholder="blur"
                    blurDataURL={DATA.blurImg}
                    width={bannerWidth}
                    height={bannerHeight}
                    className="w-full h-full rounded-[5px] object-cover"
                    loading="lazy"
                  />
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
          <AnimatePresence>{videoHovered && <PreviousBtn handlePrevBtn={handlePrevBtn} />}</AnimatePresence>
          <AnimatePresence>{videoHovered && <NextBtn handleNextBtn={handleNextBtn} />}</AnimatePresence>
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
