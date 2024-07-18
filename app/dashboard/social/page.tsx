import { AppInstagramCard, AppStorySection } from '@/components';
import React from 'react';

function App() {
  const feedItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1718839932371-7adaf5edc96a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Post 1',
      user: { name: 'User1', profileImage: 'https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uc3xlbnwwfHwwfHx8MA%3D%3D' }
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1721265250302-c02ea398a73c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
      alt: 'Post 2',
      user: { name: 'User2', profileImage: 'https://plus.unsplash.com/premium_photo-1674112877123-c8419badc6a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29uc3xlbnwwfHwwfHx8MA%3D%3D' }
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1721152839656-3e13e2ceef29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Post 3',
      user: { name: 'User3', profileImage: 'https://plus.unsplash.com/premium_photo-1668989224643-6b79eaea2108?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29uc3xlbnwwfHwwfHx8MA%3D%3D' }
    },
  ];

  return (
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
  );
}

export default App;