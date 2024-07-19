'use client'

import React from 'react';
import { useSession } from "next-auth/react";
import { AppNavBar, AppSecondNavBar } from "@/components/";

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {

    return (
        <>
            <AppNavBar>
                <AppSecondNavBar />
                <div>
                    {children}
                </div>
            </AppNavBar>
        </>
    );
};

