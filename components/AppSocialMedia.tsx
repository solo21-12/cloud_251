import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

type Props = {}

type social = {
    icon: JSX.Element,
    link: string

}

const social_media_list: social[] = [
    {
        icon: <CiLinkedin />,
        link: 'https://www.linkedin.com/'
    },
    {
        icon: <BsTwitterX />,
        link: 'https://twitter.com/'
    },
    {
        icon: <FaFacebookF />,
        link: 'https://www.facebook.com/'
    },
    {
        icon: <FaInstagram />,
        link: 'https://www.instagram.com/'
    }
]

const AppSocialMedia = (props: Props) => {
    return (
        <div>
            {
                social_media_list.map((social, index) => (
                    <a key={index} href={social.link} target='_blank' rel='noreferrer'>
                        <div className='m-3 hover:text-yellow-400 cursor-pointer hover:font-bold text-gray-500 text-base '>
                            {social.icon}
                        </div>
                    </a>
                ))}
        </div>
    )
}

export default AppSocialMedia