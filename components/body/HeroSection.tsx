import React from "react";
import Image from "next/image";
import { Tajawal } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";

const tajawal = Tajawal({
  subsets: ["latin"],
  weight: "400",
});
const HeroSection = () => {
  return (
    <section className="w-full h-screen bg-[#F3F3F3] border overflow-hidden">
      <div className="herocontainerpara absolute md:p-20 p-5 space-y-5 font-semibold text-primary z-10">
        <div className="textcontainer space-y-5">
          <h1 className="font-bold text-6xl ">
            Unleash Innovation <br /> in Every Byte{" "}
          </h1>
          <p
            className={cn(
              "font-semibold text-lg md:text-2xl",
              tajawal.className
            )}
          >
            Expore a World By Cutting Edge
          </p>
          <Button>
            <Link href={"/shop"}>SHOP NOW</Link>
          </Button>
        </div>
      </div>
      <Image
        className="relative object-cover min-h-screen"
        src="/HeroSection/Hero-image-1.png"
        alt="hero"
        width={1700}
        height={1500}
      />
    </section>
  );
};

export default HeroSection;
