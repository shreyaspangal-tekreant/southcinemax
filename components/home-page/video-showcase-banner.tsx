export default function VideoSchowcaseBanner() {
  return (
    <section className="max-w-[1440px] mx-auto p-[1.5rem] pt-[3rem] xl:py-[2.88rem] xl:px-[4.38rem]">
      <div className="relative rounded-[25px] overflow-hidden">
        <button type="button" className="absolute left-1/2 -translate-x-1/2 top-16 rounded-full bg-[#D49941] px-[1.75rem] py-[0.31rem] font-bold hover:opacity-75">
          Play Video
        </button>
        <img alt="Banner" src="/images/home/events-banner.webp" className="min-h-[400px] h-full w-full object-cover" />
      </div>
    </section>
  );
}
