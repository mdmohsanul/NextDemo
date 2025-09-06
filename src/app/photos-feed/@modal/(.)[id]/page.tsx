import { monuments } from '@/data/monuments'
import React from 'react'
import Image from 'next/image'
import Modal from '@/components/modal'

const InterceptedImagePage = async({params}:{params:Promise<{id:string}>}) => {
    const {id} = await params
 const monumentsMap = new Map(monuments.map(m => [m.id, m]));

    const photo = monumentsMap.get(parseInt(id))
  return (
    <>
    {photo ? 
     <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />

      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </Modal>: <p>Not found</p>} 
    </>
  )
}



export default InterceptedImagePage