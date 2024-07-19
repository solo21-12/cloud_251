import { navbar_items } from '@/types'
import Link from 'next/link'
import React from 'react'

type Props = {}

const current_active_routes: navbar_items[] = [
    {
        name: "Product",
        link: "/dashboard/product",
    },
    {
        name: "Social Media Feed",
        link: "/dashboard/social",
    },
]

const DashboardPage = (props: Props) => {
    return (
        <div className='justify-center flex items-center h-[70vh] align-middle flex-col gap-5'>

            <h1 className=' text-3xl font-bold'>
                Well come to cloud 251 test project
            </h1>

            <h1 className=' text-xl '>The current active links are the following</h1>
            <div className=' flex flex-col gap-2'>
                {current_active_routes.map((item, index) => (
                    <Link href={item.link} className=' text-gray-500 hover:text-yellow-400 hover:underLinke cursor-pointer' key={index}> {item.name} </Link>
                ))}
            </div>
        </div>
    )
}

export default DashboardPage