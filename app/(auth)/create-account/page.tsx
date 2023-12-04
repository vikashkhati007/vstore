"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Archivo, Jost } from "next/font/google";
import { cn } from "@/lib/utils";

const aoboshi = Archivo({ subsets: ["latin"], weight: "400" });
const jost = Jost({ subsets: ["latin"], weight: "400" });
const page = () => {
  const handleSubmit = () => {};
  return (
    <section className="w-full h-screen grid grid-cols-3 place-items-start">
      <div className="imagecontainer relative col-span-2 hidden md:block">
        <Image
          src="/logreg/bg2.svg"
          alt="hero"
          className="object-cover h-screen"
          width={780}
          height={780}
        />
      </div>
      <div className="createaccount col-span-3 w-full flex flex-col justify-center md:col-span-1 h-screen px-5">
        <div className="firstcontainer py-5">
          <h1 className={cn("text-4xl text-bold font-bold", aoboshi.className)}>
            Create Account 👋
          </h1>
          <p className={cn("text-gray-400", jost.className)}>
            Please enter details
          </p>
        </div>
        <form
          className={cn("flex flex-col gap-2", jost.className)}
          onSubmit={handleSubmit}
        >
          <label className="text-xs">
            Full Name <span className="text-red-500 ">*</span>
          </label>
          <input type="text" className="px-2 py-3 border rounded-md" />
          <label className="text-xs">
            Email <span className="text-red-500">*</span>
          </label>
          <input type="email" className="px-2 py-3 border rounded-md" />
          <label className="text-xs">
            Password <span className="text-red-500">*</span>
          </label>
          <input type="password" className="px-2 py-3 border rounded-md" />
          <label className="text-xs">
            Current Password <span className="text-red-500">*</span>
          </label>
          <input type="password" className="px-2 py-3 border rounded-md" />
          <Button> Login </Button>
        </form>
        <div
          className={cn(
            "otherthing flex justify-start items-center py-2",
            jost.className
          )}
        >
          <Link href={"/login"}>Already Have an Account !Login</Link>
        </div>
      </div>
    </section>
  );
};

export default page;
