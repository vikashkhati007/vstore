import { cn } from "@/lib/utils";
import { Didact_Gothic } from "next/font/google";
import React from "react";
import CollectionItems from "./NewCollectionItems/CollectionItems";
const didact = Didact_Gothic({ subsets: ["latin"], weight: "400" });

const NewCollection = () => {
  return (
    <section className={cn("w-4/5 m-auto max-h-fit", didact.className)}>
      <div className="textcontainer">
        <h1 className={cn("font-semibold text-2xl text-center")}>New Collection</h1>
      </div>
      <div className="productshowing font-semibold text-lg p-5">
      <p>Showing 1-3 of 15 Products</p>
      </div>
      <div className="productscontainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-14">
      <CollectionItems/>
      <CollectionItems/>
      <CollectionItems/>
      </div>
    </section>
  );
};

export default NewCollection;
