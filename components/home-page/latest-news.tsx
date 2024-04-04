export default function LatestNews() {
  const list = [
    { src: "/images/home/latestNews-01.webp" },
    { src: "/images/home/latestNews-02.webp" },
    { src: "/images/home/latestNews-03.webp" },
    { src: "/images/home/latestNews-04.webp" },
    { src: "/images/home/latestNews-05.webp" },
    { src: "/images/home/latestNews-06.webp" },
    { src: "/images/home/latestNews-07.webp" },
    { src: "/images/home/latestNews-08.webp" },
    { src: "/images/home/latestNews-09.webp" },
    { src: "/images/home/latestNews-10.webp" },
  ];

  return (
    <section className="max-w-[1440px] mx-auto p-[1.5rem] pt-[3rem] xl:py-[2.88rem] xl:px-[4.38rem]">
      <h2 className="text-[#6B6B6B] text-[1.6rem] lg:text-[3rem] mb-0 text-center">Latest News</h2>
      <div className="mt-[2.38rem]">
        <div className="grid justify-center grid-cols-1 sm:grid-cols-[15.25rem_15.25rem] lg:grid-cols-[12rem_12rem_12rem_12rem] min-[1440px]:grid-cols-[15.25rem_15.25rem_15.25rem_15.25rem_15.25rem] gap-5">
          {list.map((card, index) => (
            <div key={index} className="">
              <img src={card.src} alt="Banner" className="mx-auto object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
