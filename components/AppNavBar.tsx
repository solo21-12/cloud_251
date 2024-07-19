'use client'

import React, { useState, useEffect } from 'react';
import { IoIosMenu } from "react-icons/io";
import { IoClose } from 'react-icons/io5';
import ResponsiveIcons from './AppResponsiveIcons';
import AppSocialMedia from './AppSocialMedia';
import { navbar_items } from '@/types';
import Divider from '@mui/material/Divider';
import { useSession, signIn, signOut } from "next-auth/react"


const navBar_items: navbar_items[] = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Culture',
        link: '/culture'
    },
    {
        name: 'About',
        link: '/about'
    },
    {
        name: 'Clients',
        link: '/clients'
    },
    {
        name: 'News',
        link: '/news'
    },
    {
        name: 'Contact',
        link: '/contact'
    },
    {
        name: 'Career',
        link: '/career'
    },
];

export const AppNavBar = ({ children }: { children: React.ReactNode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    const { data: session } = useSession()

    useEffect(() => {
        const handleResize = () => setIsMobileView(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='flex flex-col'>
            <div >
                <div className='md:flex justify-between my-5 px-10 items-center  hidden'>
                    <div className=' text-2xl lg:text-4xl text-yellow-400 font-bold'>logo</div>
                    <div >
                        {session && navBar_items.map((item, index) => (
                            <a key={index} href={item.link} className='m-3 hover:text-yellow-400 cursor-pointer hover:font-bold text-gray-600 xl:text-xl'>{item.name}</a>
                        ))}

                    </div>
                    <div className='flex items-center align-middle justify-between'>
                        <ResponsiveIcons />
                        <Divider orientation="vertical" flexItem />
                        <div className='text-gray-700 hover:text-yellow-400 cursor-pointer mx-3'>

                            {session ? (
                                <div onClick={() => signOut()}>
                                    Sign out
                                </div>
                            ) : (
                                <div onClick={() => signIn('google')}>
                                    Sign in
                                </div>
                            )}
                        </div>
                        <AppSocialMedia />
                    </div>

                </div>
                <div className='md:hidden flex justify-between my-5 px-10 items-center'>
                    <div>
                        <div className=' text-yellow-400 text-xl'>logo</div>
                    </div>

                    <div className=' flex justify-between items-center gap-2'>
                        <ResponsiveIcons />
                        <Divider orientation="vertical" flexItem className=' h-10' />
                        <IoIosMenu className='text-3xl cursor-pointer' onClick={toggleMenu} />
                        <div className='text-gray-700 hover:text-yellow-400 cursor-pointer ml-3'>
                            {session ? (
                                <div onClick={() => signOut()}>
                                    Sign out
                                </div>
                            ) : (
                                <div onClick={() => signIn('google')}>
                                    Sign in
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
            {session && isMobileView && isMenuOpen && (
                <div className='fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center'>
                    <IoClose className='absolute top-5 right-5 text-3xl cursor-pointer' onClick={toggleMenu} />
                    {navBar_items.map((item, index) => (
                        <a key={index} href={item.link} className='m-3 text-2xl hover:text-yellow-400 cursor-pointer' onClick={toggleMenu}>
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
            <div>
                {children}
            </div>
        </div>
    );
};

export default AppNavBar;
