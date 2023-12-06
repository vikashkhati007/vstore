import { cn } from "@/lib/utils";
import { FacebookIcon, TwitterIcon, InstagramIcon } from "lucide-react";
import { Chakra_Petch } from "next/font/google";
import Link from "next/link";
import React from "react";
const chakra = Chakra_Petch({ subsets: ["latin"], weight: "400" });

const Footer = () => {
  return (
    <footer className="w-full bg-black flex justify-around items-center text-white h-24">
      <div className={cn("text-2xl", chakra.className)}>
        <Link href={"/"}>VK STORE</Link>
      </div>
      <p className="hidden md:block">©2023 VK STORE. All Rights are reserved</p>
      <div className="socials flex justify-center items-center gap-5">
        <Link href={"/"}>
          <FacebookIcon />
        </Link>
        <Link href={"/"}>
          <TwitterIcon />
        </Link>
        <Link href={"/"}>
          <InstagramIcon />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
