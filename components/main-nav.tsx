"use client"

import Link from "next/link";
import { RiSearchLine } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import { CgMenu } from "react-icons/cg";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { mobileNavVariants } from "@/animations/home/mainNavAnimations";
import useDimension from "@/hooks/useDimensions";

const navLinksInit = [
  { id: 1, name: "Home", href: "/", active: true },
  { id: 1, name: "Exclusive Interviews", href: "/", active: false },
  { id: 2, name: "Movie Promotions", href: "/", active: false },
  { id: 3, name: "Telugu Big Boss", href: "/", active: false },
  { id: 4, name: "Events", href: "/", active: false },
  { id: 5, name: "News", href: "/", active: false },
  { id: 5, name: "Lifestyle", href: "/", active: false },
];

export default function MainNav() {
  const { width } = useDimension();
  const [navLinks, setNavLinks] = useState(navLinksInit);
  const [showMenu, setShowMenu] = useState(false);

  const mobileMenuProps = {
    navLinks, setShowMenu
  }

  useEffect(() => {
    setShowMenu(false);
  }, [width])

  const canDisplayMenu = showMenu && width < 1024;

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
          <CgMenu onClick={() => setShowMenu(true)} className="lg:hidden w-[1.5rem] h-[1.8rem] text-[#ADADAD] cursor-pointer" />
          <AnimatePresence>
            {canDisplayMenu && (
              <MobileNavDrawer {...mobileMenuProps} />
            )}
          </AnimatePresence>
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

function MobileNavDrawer({ navLinks, setShowMenu }: any) {
  return (
    <motion.nav variants={mobileNavVariants} initial="initial" animate="animate" exit="exit" key="mobileNav" className="fixed top-0 right-0 w-[15rem] h-full bg-[#242424] z-[999]">
      <IoClose onClick={() => setShowMenu(false)} className="text-[#fff] text-right absolute right-5 top-8 w-[25px] h-[25px]" />
      <ul className="flex flex-col gap-y-5 justify-end pr-[1.63rem] pt-[6.13rem]">
        {navLinks.map((link: any, index: number) => (
          <li key={index} className={`text-[0.88rem] text-right ${link.active ? "text-[#fff]" : "text-[#7F7F7F]"}`}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
