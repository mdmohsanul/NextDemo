import { monuments } from '@/data/monuments'
import React from 'react'
import Image from 'next/image'

const ImagePage = async({params}:{params:Promise<{id:string}>}) => {
    const {id} = await params
 const monumentsMap = new Map(monuments.map(m => [m.id, m]));

    const find = monumentsMap.get(parseInt(id))
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className='flex items-center justify-center'>
{find ? (
    <div>
        <Image src={find.src} className="object-fill" alt={find.name} />
         <p>{find.name}</p>
         <p>{find.location}</p>
        </div>
      ) : (
        <p>Not found</p>
      )}
        </div>
      
    </div>
    </>
  )
}

export default ImagePage