export default function Sponsers() {
  return (
    <section className="">
      <div className="max-w-[1440px] mx-auto p-[1.5rem] pt-[3rem] xl:py-[2.88rem] xl:px-[4.38rem]">
        <h2 className="text-[#D39841] text-[1.6rem] lg:text-[3rem] font-semibold text-center">Our Sponsers</h2>
      </div>
      <div className="w-full min-h-[11.81rem] bg-gradient-to-b from-[#121212] to-[#000000] lg:px-[5rem] xl:px-[10.63rem] py-[4.38rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center">
          {[1, 2, 3, 4].map((item, index) => (
            <img key={index} src="/images/logo-with-text.webp" alt="Brand logo" className="mx-auto grayscale w-[12.5rem] h-[3.06rem] object-contain" />
          ))}
        </div>
      </div>
    </section>
  );
}
