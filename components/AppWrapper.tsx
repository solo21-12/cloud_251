'use client'

import React from 'react';
import { useSession } from "next-auth/react";
import { AppNavBar, AppSecondNavBar } from "@/components/";

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
    const { data: session } = useSession();

    return (
        <>
            {session ? (
                <AppNavBar>
                    <AppSecondNavBar />
                    <div className="h-screen">
                        {children}
                    </div>
                </AppNavBar>
            ) : children}
        </>
    );
};

