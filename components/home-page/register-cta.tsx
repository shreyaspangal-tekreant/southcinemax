import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function RegisterCtaBlock() {
  return (
    <section className="max-w-[1440px] mx-auto p-[1.5rem] pt-[3rem] xl:py-[2.88rem] xl:px-[4.38rem]">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
        <div className="left-block max-w-[31.06rem] w-full">
          <p className="mb-[1.1rem] uppercase text-[1.56rem] text-[#fff] font-normal">Register Now</p>
          <p className="mb-0 text-[3rem] text-[#fff] font-extrabold leading-[1.2]">
            SECURE YOUR SPOT <br />{" "}
            <span className="text-[#D39841]">
              AT OUR UPCOMING <br /> EVENT
            </span>
          </p>
        </div>
        <div className="right-block max-w-[44.94rem] min-h-[15.5rem] w-full h-full bg-[#2E2E2E] rounded-[25px] px-[2.44rem] py-[1.81rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <input className="inline-block border-0 outline-0 border-b-[1px] border-[#ADADAD] bg-transparent text-[#ADADAD] w-full text-[1.13rem] pb-[0.31rem]" placeholder="Write Your Name" />
            <input className="inline-block border-0 outline-0 border-b-[1px] border-[#ADADAD] bg-transparent text-[#ADADAD] w-full text-[1.13rem] pb-[0.31rem]" placeholder="Write Email Address" />
            <input className="inline-block border-0 outline-0 border-b-[1px] border-[#ADADAD] bg-transparent text-[#ADADAD] w-full text-[1.13rem] pb-[0.31rem]" placeholder="Write Your Phone Number" />
            <Select>
              <SelectTrigger className="w-full outline-0 border-0 border-b-[1px] border-[#ADADAD] rounded-none focus:ring-0 bg-transparent text-[#ADADAD] px-0 text-[1.13rem]">
                <SelectValue placeholder="Select Event" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {/* <SelectLabel>Fruits</SelectLabel> */}
                  <SelectItem value="Event 1">Event 1</SelectItem>
                  <SelectItem value="Event 2">Event 2</SelectItem>
                  <SelectItem value="Event 3">Event 3</SelectItem>
                  <SelectItem value="Event 4">Event 4</SelectItem>
                  <SelectItem value="Event 5">Event 5</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* my-[2.19rem] */}
          <div className="flex justify-center lg:justify-end items-center mt-[2.19rem]">
            <button type="button" className="rounded-[50px] bg-[#585858] text-[#fff] px-[3.81rem] py-[0.75rem] font-bold hover:opacity-75">
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
