import { AiOutlineFacebook } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { GrCheckmark } from "react-icons/gr";
import Link from "next/link";

const linksSet1 = [
  { name: "Southcinemax", href: "/" },
  { name: "About", href: "/" },
  { name: "Contact", href: "/" },
  { name: "FAQs", href: "/" },
  { name: "Privacy Policy", href: "/" },
  { name: "Terms & Conditions", href: "/" },
  { name: "Return & Refund Policy", href: "/" },
];

const linksSet2 = [
  { name: "Events", href: "/" },
  { name: "Register", href: "/" },
  { name: "Login", href: "/" },
  { name: "Gallery", href: "/" },
  { name: "Latest News", href: "/" },
];

export default function MainFooter() {
  return (
    <footer className="bg-[#1A1A1A]">
      <div className="max-w-[1440px] mx-auto p-[1.5rem] pt-[3rem] xl:py-[2.88rem] xl:px-[4.38rem]">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          <div className="follow-us-on order-2 md:order-0">
            <p className="mb-[0.38rem] text-[0.88rem] text-[#D49941] font-bold">Follow us on</p>
            <div className="flex items-center gap-[2rem] md:gap-[15px]">
              <AiOutlineFacebook className="text-[#666666] w-[30px] h-[30px] cursor-pointer" />
              <BsTwitterX className="text-[#666666] w-[30px] h-[30px] cursor-pointer" />
              <BsInstagram className="text-[#666666] w-[30px] h-[30px] cursor-pointer" />
              <AiOutlineLinkedin className="text-[#666666] w-[30px] h-[30px] cursor-pointer" />
            </div>
          </div>
          <div className="quick-links order-1 md:order-1">
            <p className="mb-[0.38rem] text-[0.88rem] text-[#D49941] font-bold">Quick Links</p>
            <div className="flex flex-col sm:flex-row sm:gap-20">
              <ul className="">
                {linksSet1.map((link, index) => (
                  <li key={index} className="text-[#CDCDCD] mb-[0.5rem]">
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
              <ul className="">
                {linksSet2.map((link, index) => (
                  <li key={index} className="text-[#CDCDCD] mb-[0.5rem]">
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="newsletter w-full md:w-auto order-0 md:order-2">
            <p className="text-[1.13rem] text-[#6A6A6A] mb-[1rem]">Newsletter Subscription:</p>
            <div className="relative w-full sm:w-[350px] ring-1 ring-[#999999] rounded-[5px]">
              <img alt="Email" src="/images/email-icon.png" className="absolute left-3 top-3 w-[30px] h-[20px] object-contain" />
              <input className="outline-none border-0 text-[#999999] h-[44px] bg-transparent w-full pl-[3.69rem] pr-14" type="email" placeholder="Your Email Address..." />
              <button type="button" className="w-[49px] hover:bg-[#2a2a2a] h-full flex items-center justify-center absolute right-0 top-0 ring-1 ring-[#999999] rounded-tr-[5px] rounded-br-[5px]">
                <GrCheckmark className="text-[#D49941]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
