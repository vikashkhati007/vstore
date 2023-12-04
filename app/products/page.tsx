import React from "react";
import { Lato } from "next/font/google";
import CollectionItems from "@/components/body/NewCollectionItems/CollectionItems";
import FeaturesSection from "@/components/body/FeaturesSection";

const lato = Lato({ subsets: ["latin"], weight: "400" });
const page = () => {
  return (
    <section className="w-4/5 max-h-fit m-auto">
      <div className="filtercategoriescontainer">
        <div className={lato.className}>
          <h1 className="font-bold text-2xl py-5">Filter Categories</h1>
        </div>
        <div className="checkboxcontainer flex gap-5 font-semibold justify-start items-center">
          <div className="checkboxes flex gap-2">
            <input className="scale-150" type="checkbox" />
            <label>Watches</label>
          </div>
          <div className="checkboxes flex gap-2">
            <input className="scale-150" type="checkbox" />
            <label>TV & Homes</label>
          </div>
          <div className="checkboxes flex gap-2">
            <input className="scale-150" type="checkbox" />
            <label>I Pads</label>
          </div>
          <div className="checkboxes flex gap-2">
            <input className="scale-150" type="checkbox" />
            <label>Accessories</label>
          </div>
          <div className="checkboxes flex gap-2">
            <input className="scale-150" type="checkbox" />
            <label>Laptops</label>
          </div>
          <div className="checkboxes flex gap-2">
            <input className="scale-150" type="checkbox" />
            <label>Phones</label>
          </div>
        </div>
        <div className="sortcontainer my-2">
        <div className={lato.className}>
            <h1 className="font-bold text-xl py-5">Sort By</h1>
            </div>
        <div className="checkboxes flex gap-2 font-semibold">
            <input className="scale-150" type="radio" />
            <label>Latest</label>
          </div>
          <div className="checkboxes flex gap-2 font-semibold">
            <input className="scale-150" type="radio" />
            <label>Old</label>
          </div>
        </div>
      </div>
      <div className="showingproductscontainer">
        <div className="font-bold text-xl py-5">
            <h1>Showing 1-9 of 15 Products</h1>
        </div>
        <div className="productscontainer grid grid-cols-1 md:grid-cols-3 space-y-5">
            <CollectionItems/>
            <CollectionItems/>
            <CollectionItems/>
            <CollectionItems/>
            <CollectionItems/>
            <CollectionItems/>
        </div>
      </div>
      <div className="featurescotainer mt-10">
        <hr/>
      <FeaturesSection/>
      </div>
    </section>
  );
};

export default page;
