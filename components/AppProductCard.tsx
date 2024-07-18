import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
type Props = {
  imgScr:string
}

const AppProductCard = ({imgScr}: Props) => {
  return (
    <div className=' border-yellow-400 border p-10 bg-gray-200 rounded-tl-3xl text-center text-gray-500 flex flex-col justify-between'>
      <img src={imgScr}  alt="phone" />
      <Link href='/' className=' mt-5 hover:text-yellow-400 hover:font-bold hover:underline'>
        View Detail
      </Link>
    </div>
  )
}

export default AppProductCard