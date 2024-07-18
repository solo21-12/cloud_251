import React from 'react'
import AppProductCard from './AppProductCard'

const cards = [
    "https://verisinvestments.com/storage/uploads/2023/05/346060997_650076296948045_7181771277680153598_n.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfmKHTkmolOdBWttmijMDdfzPSzS2hihEAGF1uXa5VE-urIUTdAf3VkUboSw40ZY4muMA&usqp=CAU",
    "https://media.licdn.com/dms/image/C4E22AQH25wr76njxAQ/feedshare-shrink_800/0/1643615471412?e=2147483647&v=beta&t=0NHiq0x7hXrE_m2e7pMIrY_jjpXk6Ab3vTir8CmWVvY"]

export const AppProduct = () => {
    return (
        <div className=' justify-between gap-8 w-[80%] lg:w-[60%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {
                cards.map((item) => {
                    return <AppProductCard imgScr={item} key={item} />
                })
            }
        </div>
    )
}
