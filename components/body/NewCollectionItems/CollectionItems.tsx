import Image from "next/image";


interface Props {
    title: string;
    image: string;
    description: string;
}
const CollectionItems = ({title, image, description}:Props) => {
  return (
    <div className="collectioncontainer w-[293px] h-fit overflow-hidden">
      <div className="imagecontainer overflow-hidden w-[293px] h-[293px] rounded-md bg-[#F3F3F3] border mb-2">
        <Image
          src={`${image}`}
          alt="category"
          className="scale-125"
          width={293}
          height={293}
        />
      </div>
      <div className="descriptioncontainer font-semibold flex flex-col gap-1 justify-center items-start">
        <h1 className="text-2xl">{title}</h1>
        <p>{description}</p>
        <blockquote className="text-lg">$499</blockquote>
      </div>
    </div>
  );
};

export default CollectionItems;
