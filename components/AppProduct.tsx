import React from 'react'
import AppProductCard from './AppProductCard'
import { product_cards } from '@/data'

export const AppProduct = () => {
    return (
        <div className=' justify-between gap-8 w-[80%] lg:w-[60%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {
                product_cards.map((item) => {
                    return <AppProductCard imgScr={item} key={item} />
                })
            }
        </div>
    )
}
