"use client"
import React, { useState } from "react";
import { ArrowBigLeftIcon, ArrowBigRightIcon } from "lucide-react";
import { Lato } from "next/font/google";
import { useRouter } from "next/navigation";
const lato = Lato({ subsets: ["latin"], weight: "400" });


const Pagination = () => {
    const [value, setValue] = useState(1);
    const router = useRouter();
    
    const handleLeftArrow = () => {
      if (value > 1) {
        setValue(value - 1);
        router.push(`/products?page=${value - 1}`);
      }
    };
    
    const handleRightArrow = () => {
      if(value < 2){
        setValue(value + 1);
        router.push(`/products?page=${value + 1}`);
      }
    };
  return (
    <>
      <button
        className="bg-gray-200 px-5 py-2 rounded-md"
        onClick={handleLeftArrow}
      >
        <ArrowBigLeftIcon />
      </button>
      <div className="textcontainer">
        <h1 className={lato.className}>Page {value} Of 2</h1>
      </div>
      <button
        className="bg-gray-200 px-5 py-2 rounded-md"
        onClick={handleRightArrow}
      >
        <ArrowBigRightIcon />
      </button>
    </>
  );
};

export default Pagination;
