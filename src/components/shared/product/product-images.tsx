'use client';
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
const ProductImages = ({images}:{images:string[]}) => {
const [current , setCurrent] = useState(0);

  return (
    <div className="space-y-4">
      <Image src={images[current]} width={10} height={10} layout="responsive" alt="product image" className="min-h-[300px] object-cover object-center"/>
      <div className="flex">
        {images.map((image, index) => (
          <div key={index} className={cn('border mr-2 cursor-pointer hover:boder-orange-600' , current === index && 'border-orange-500')} onClick={() => setCurrent(index)}>
            <Image src={image} width={10} height={10} layout="responsive" alt="product image" className="object-cover object-center"/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductImages