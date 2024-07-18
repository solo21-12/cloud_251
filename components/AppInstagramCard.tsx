'use client'

import React, { useState } from 'react';
import { CiBookmark } from "react-icons/ci";
import { LuSend } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { CiMenuKebab } from "react-icons/ci";

export const AppInstagramCard = ({ image, alt, user }: any) => {
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md my-2">
            {/* User Info */}
            <div className="flex justify-between items-center p-4">
                <div className="flex items-center">
                    <img
                        src={user.profileImage}
                        alt={user.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="ml-4 font-semibold text-gray-800">{user.name}</span>
                </div>
                <button className="focus:outline-none text-2xl">
                    <CiMenuKebab />
                </button>
            </div>

            {/* Image */}
            <img src={image} alt={alt} className="w-full h-auto" />

            {/* Actions */}
            <div className="flex justify-between items-center p-4">
                <div className="flex space-x-4">
                    <button onClick={handleLike} className="focus:outline-none text-2xl">
                        {liked ? (
                            <FaHeart className="text-red-500" />
                        ) : (
                            <FaRegHeart className="text-red-500" />
                        )}
                    </button>
                    <button className="focus:outline-none text-2xl">
                        <FiMessageCircle />
                    </button>
                    <button className="focus:outline-none text-2xl">
                        <LuSend />
                    </button>
                </div>
                <button className="focus:outline-none text-2xl">
                    <CiBookmark />
                </button>
            </div>
        </div>
    );
};

