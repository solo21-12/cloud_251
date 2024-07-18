import { deviceIcon_types } from '@/types';
import React, { useEffect, useState } from 'react';
import { CiDesktop, CiMobile1 } from "react-icons/ci";
import { IoIosTabletLandscape } from "react-icons/io";


const deviceIcons: deviceIcon_types[] = [
    {
        icon: <CiDesktop />,
        name: 'Desktop',
        minWidth: 1024
    },
    {
        icon: <IoIosTabletLandscape />,
        name: 'Tablet',
        minWidth: 768
    },
    {
        icon: <CiMobile1 />,
        name: 'Mobile',
        minWidth: 0
    }
];

const ResponsiveIcons = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add event listener only when window is defined (client-side)
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);

            // Cleanup function to remove event listener
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    const getCurrentIcon = () => {
        // Find the icon that matches the current screen width
        for (let i = 0; i < deviceIcons.length; i++) {
            if (windowWidth >= deviceIcons[i].minWidth) {
                return deviceIcons[i].icon;
            }
        }
        return null;
    };

    return (
        <div className='m-3 hover:text-yellow-400 cursor-pointer hover:font-bold text-yellow-300 text-2xl xl:text-4xl'>
            {getCurrentIcon()}
        </div>
    );
};

export default ResponsiveIcons;
