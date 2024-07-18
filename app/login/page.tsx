"use client";

import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <p className="text-2xl mb-2 font-bold">Well Come</p>
            <button className="bg-yellow-400 py-2 px-6 rounded-md mb-2 hover:bg-yellow-500 text-gray-700" onClick={() => signIn('google')}>Sign in with google</button>
        </div>
    )

}