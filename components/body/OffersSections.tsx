import Image from "next/image";
import React from "react";
import { Kanit } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const kanit = Kanit({ subsets: ["latin"], weight: "400" });
const OffersSections = () => {
  return (
    <section className="w-4/5 m-auto max-h-fit py-10 flex flex-col lg:flex-row gap-5">
      <div className="textcontainer space-y-5">
        <h1 className="text-3xl font-bold">Deals of the Month</h1>
        <p className="text-md">
          Get ready for a shopping experience like never before with our Deals
          of the Month! Every purchase comes with exclusive perks and offers,
          making this month a celebration of savvy choices and amazing deals.
          Don&#39;t miss out! 🎁🛒
        </p>
        <ul className={cn("grid grid-cols-2 gap-3", kanit.className)}>
          <li className="border text-center rounded-md p-5 font-semibold text-3xl gap-2 flex flex-col justify-center items-center">
            -3 <p className="text-lg">Days</p>
          </li>
          <li className="border text-center rounded-md p-5 font-semibold text-3xl gap-2 flex flex-col justify-center items-center">
            3 <p className="text-lg">Hours</p>
          </li>
          <li className="border text-center rounded-md p-5 font-semibold text-3xl gap-2 flex flex-col justify-center items-center">
            3 <p className="text-lg">Mins</p>
          </li>
          <li className="border text-center rounded-md p-5 font-semibold text-3xl gap-2 flex flex-col justify-center items-center">
            3 <p className="text-lg">Seconds</p>
          </li>
        </ul>
        <Button>View Products</Button>
      </div>
      <div className="imagecotainer">
        <Image src="/Offers.svg" alt="offers" width={1400} height={400} />
      </div>
    </section>
  );
};

export default OffersSections;
