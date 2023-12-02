import Image from "next/image";

const CollectionItems = () => {
  return (
    <div className="collectioncontainer w-[293px] h-fit overflow-hidden">
      <div className="imagecontainer overflow-hidden w-[293px] h-[293px] rounded-md bg-[#F3F3F3] border mb-2">
        <Image
          src="/Category/watches.png"
          alt="category"
          className="scale-125"
          width={293}
          height={293}
        />
      </div>
      <div className="descriptioncontainer font-semibold flex flex-col gap-1 justify-center items-start">
        <h1 className="text-2xl">Apple Watch Series 9 Solo Loop (Aluminum) - Mindnight</h1>
        <p>Introducing the Apple Watch Series 9 Solo Loop in Midnight Aluminum. Elevate your fitness and style with seamless design, advanced health features, and the convenience of the Solo Loop band.</p>
        <blockquote className="text-lg">$499</blockquote>
      </div>
    </div>
  );
};

export default CollectionItems;
