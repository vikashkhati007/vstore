import Image from "next/image"

const CollectionItems = () => {
  return (
    <div className="border w-fit h-fit bg-[#F3F3F3] rounded-md">
    <Image src="/Category/watches.png" className="relative object-cover min-h-fit" alt="category" width={293} height={360}/>
  </div>
  )
}

export default CollectionItems
