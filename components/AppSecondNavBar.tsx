'use client'
import { navbar_items } from '@/types'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { find_current_index } from '@/utils'
import { useSession } from 'next-auth/react'
type Props = {}

const navbar_items_list: navbar_items[] = [
    {
        name: 'Experimental',
        link: '/'
    },
    {
        name: 'Creative',
        link: '/dashboard/product'
    },
    {
        name: 'Digital',
        link: '/dashboard/social'
    },
    {
        name: 'PR & Media',
        link: '/'
    },
    {
        name: 'Production',
        link: '/'
    },
    {
        name: 'Research',
        link: '/'
    },
    {
        name: 'Communication',
        link: '/'
    }
]

export const AppSecondNavBar = (props: Props) => {
    const [selectedItem, setSelectedItem] = React.useState(1)
    const [dropdownOpen, setDropdownOpen] = React.useState(false)
    const { data: session } = useSession();

    const router = useRouter()
    const path = usePathname()

    useEffect(() => {
        const cur_index = find_current_index(path, navbar_items_list)
        setSelectedItem(cur_index)
    }, [path])

    return (
        <>
            {
                session && <div className=" w-[85%] lg:w-[70%] mx-auto border border-yellow-400">
                    {/* Desktop View */}
                    <div className="hidden md:flex justify-between items-center">
                        {
                            navbar_items_list.map((item, index) => (
                                <div
                                    onClick={() => {
                                        router.push(item.link)
                                        setSelectedItem(index)
                                    }}
                                    className={`border-r cursor-pointer w-full text-gray-600 hover:bg-black hover:text-yellow-400 p-1 lg:p-2 text-center align-middle ${selectedItem == index && "bg-black text-yellow-400"}`} key={index}>
                                    {item.name}
                                </div>
                            ))
                        }
                    </div>

                    {/* Mobile View */}
                    <div className="md:hidden flex flex-col items-center">
                        <div
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="cursor-pointe hover:bg-black hover:text-yellow-400 p-2 text-center align-middle bg-black text-yellow-400 w-full rounded-sm">
                            {navbar_items_list[selectedItem].name}
                        </div>
                        {dropdownOpen && (
                            <div className="flex flex-col w-full">
                                {
                                    navbar_items_list.map((item, index) => (
                                        <div
                                            onClick={() => {
                                                router.push(item.link)
                                                setSelectedItem(index)
                                                setDropdownOpen(false)
                                            }}
                                            className={`cursor-pointer text-gray-600 hover:bg-black hover:text-yellow-400 p-2 text-center align-middle ${selectedItem == index && "bg-black text-yellow-400"}`} key={index}>
                                            {item.name}
                                        </div>
                                    ))
                                }
                            </div>
                        )}
                    </div>
                </div>
            }
        </>
    )
}
