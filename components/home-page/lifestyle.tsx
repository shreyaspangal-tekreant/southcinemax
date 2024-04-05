"use client";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { ctaArrowVariants, ctaButtonVariants } from "@/animations/home/lifestyleAnimations";

export default function Lifestyle({ list }: any) {
  return (
    <section className="bg-[#161616]">
      <div className="max-w-[1440px] mx-auto p-[1.5rem] pt-[3rem] xl:py-[2.88rem] xl:px-[4.06rem] ">
        <div className="flex flex-col 2xl:flex-row justify-between items-start gap-10">
          <div className="left-block">
            <p className="text-[#6B6B6B] text-[4rem] font-semibold">Lifestyle</p>
            <motion.button
              whileHover="hover"
              variants={ctaButtonVariants}
              type="button"
              className="flex items-center gap-1.5 ring-1 ring-inset ring-[#D49941] text-[#D49941] text-[1.25rem] px-[0.5rem] py-[0.2rem]"
            >
              See All
              <motion.div variants={ctaArrowVariants}>
                <FiArrowRight className="w-[20px] h-[20px]" />
              </motion.div>
            </motion.button>
          </div>
          <div className="right-block">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[19.38rem_19.38rem_19.38rem] gap-10">
              {list.map((card: any, index: number) => (
                <div key={index} className="">
                  <img src={card.src} alt="" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
