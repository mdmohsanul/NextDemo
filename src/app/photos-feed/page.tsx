import React from 'react'
import { monuments } from "@/data/monuments";
import Image from "next/image";
import Link from 'next/link';

const PhotosFeed = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-xl py-5">Images</h2>
      <div className="grid grid-cols-3 gap-4">
        {monuments?.map((item) => (
          <div key={item.id} className="w-full h-60 relative">
            <Link href={`/photos-feed/${item.id}`}>
            <Image
              src={item.src}
              alt={item.name}
              fill
              className="object-cover rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
            /></Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PhotosFeed