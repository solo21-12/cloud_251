'use client'

import { AppInstagramCard, AppStorySection } from '@/components';
import { feedItems } from '@/data';
import { useSession } from 'next-auth/react';
import { LinearProgress } from '@mui/material';
import React from 'react';

function App() {
  const { data: session } = useSession()

  return (
    <>
      {
        session ? (
          <div className=" w-[80%] mx-auto grid grid-cols-1 gap-5 mt-20">
            <AppStorySection />
            <div>
              {feedItems.map((item) => (
                <AppInstagramCard
                  key={item.id}
                  image={item.image}
                  alt={item.alt}
                  user={item.user}
                />
              ))}

            </div>
          </div>
        )
          : (
            <div className=' h-[50vh] flex flex-col justify-center items-center align-middle'>
              <LinearProgress />
            </div>
          )
      }
    </>
  );
}

export default App;