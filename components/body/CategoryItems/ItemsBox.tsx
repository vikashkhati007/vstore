import Image from "next/image"

const ItemsBox = () => {
  return (
    <div className="border w-fit h-fit bg-[#F3F3F3] rounded-md">
      <Image src="/Category/watches.png" className="relative object-cover min-h-fit scale-125" alt="category" width={293} height={360}/>
      <p className="w-3/4 m-auto rounded-md bg-background p-5 text-center relative bottom-10 border">Watches</p>
    </div>
  )
}

export default ItemsBox
