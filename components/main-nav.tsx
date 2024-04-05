import Link from "next/link";
import { RiSearchLine } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import { CgMenu } from "react-icons/cg";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function MainNav() {
  const navLinks = [
    { id: 1, name: "Exclusive Interviews", active: false },
    { id: 2, name: "Movie Promotions", active: false },
    { id: 3, name: "Telugu Big Boss", active: false },
    { id: 4, name: "Events", active: false },
    { id: 5, name: "News", active: false },
    { id: 5, name: "Lifestyle", active: false },
  ];
  return (
    <header className="max-w-[1440px] mx-auto">
      <div className="flex justify-between items-center gap-2 p-[1.5rem] xl:py-[2.88rem] xl:px-[4.38rem]">
        <div className="logo">
          <Link href="/">
            <img alt="Banner" src="/images/logo-with-text.webp" className="w-[12.38rem] h-[2.56rem] object-contain" />
          </Link>
        </div>
        <nav>
          <ul className="hidden xl:flex items-center gap-5">
            {navLinks.map((link, index) => (
              <li key={index} className="cursor-pointer text-[#F7F7F7] text-[1rem] opacity-50 hover:opacity-100">
                {link.name}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-7">
          <CgMenu className="lg:hidden w-[1.5rem] h-[1.8rem] text-[#ADADAD] cursor-pointer" />
          <div className="searchbar-block hidden lg:block relative w-[7.69rem]">
            <RiSearchLine className="absolute top-[6px] text-[#ADADAD] w-[0.91rem] h-[0.91rem]" />
            <input className="border-0 outline-0 border-b-[1px] border-[#ADADAD] bg-transparent text-[#ADADAD] w-full text-[0.81rem] pl-[1.06rem] pb-[0.31rem]" placeholder="Search..." />
          </div>
          <div className="profile-icon hidden lg:block">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <GoPerson className="w-[1.5rem] h-[1.8rem] text-[#ADADAD] cursor-pointer" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Billing</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Team</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <button type="button" className="hidden lg:block rounded-[50px] bg-[#D49941] px-[1.75rem] py-[0.31rem] font-bold hover:opacity-75">
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}
