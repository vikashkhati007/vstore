import { cn } from "@/lib/utils";
import { Didact_Gothic } from "next/font/google";
import React from "react";
const didact = Didact_Gothic({ subsets: ["latin"], weight: "400" });

const NewCollection = () => {
  return (
    <section className={cn("w-4/5 m-auto max-h-fit", didact.className)}>
      <div className="textcontainer">
        <h1 className={cn("font-semibold text-2xl text-center")}>New Collection</h1>
      </div>
    </section>
  );
};

export default NewCollection;
