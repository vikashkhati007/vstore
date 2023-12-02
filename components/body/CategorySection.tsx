import { cn } from "@/lib/utils"
import { Didact_Gothic } from "next/font/google"
import Link from "next/link"
import ItemsBox from "./CategoryItems/ItemsBox"

const didact = Didact_Gothic({subsets: ["latin"], weight: "400"})
const CategorySection = () => {
  return (
    <section className={cn("w-3/4 m-auto h-screen py-10", didact.className)}>
      <div className="textcontainer flex w-full justify-between py-5">
      <h1 className={"text-bold text-2xl"}>Shop By Categories</h1>
      <Link href={"/viewall"} className="hidden md:block text-lg">Show All</Link>
      </div>
      <div className="itemsboxcontainer">
        <ItemsBox/>
      </div>
    </section>
  )
}

export default CategorySection
