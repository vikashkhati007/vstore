import { cn } from "@/lib/utils";
import { Didact_Gothic } from "next/font/google";
import React from "react";
import CollectionItems from "./NewCollectionItems/CollectionItems";
import { Button } from "../ui/button";
import Link from "next/link";
const didact = Didact_Gothic({ subsets: ["latin"], weight: "400" });

const NewCollection = async () => {
  const d = fetch(`https://e-commerce-payload-8e26543.payloadcms.app/api/products?sort=-createdAt&limit=9&page=1&depth=1`);
  const data = await (await d).json();
  return (
    <section className={cn("w-4/5 m-auto max-h-fit", didact.className)}>
      <div className="textcontainer">
        <h1 className={cn("font-semibold text-2xl text-center")}>New Collection</h1>
      </div>
      <div className="productshowing font-semibold text-lg p-5">
      <p>Showing 1-3 of 15 Products</p>
      </div>
      <div className="productscontainer flex flex-shrink flex-wrap gap-10">
          {data.docs.map((item: any) => (
            <CollectionItems
              key={item.id}
              image={item.meta.image.url}
              title={item.meta.title.substring(0, 20) + "..."}
              description={item.meta.description.substring(0, 100) + "..."}
            />
          ))}
        </div>
        <div className="buttoncontainer flex justify-center items-center py-5">
        <Link href={"/products"} className="font-semibold bg-gray-300 px-3 py-2 rounded-md"> Show More</Link>
        </div>
    </section>
  );
};

export default NewCollection;
