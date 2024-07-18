import React from 'react';
import StoryCard from './AppStoryCard';

export const AppStorySection = () => {
    const stories = [
        { id: 1, image: 'https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uc3xlbnwwfHwwfHx8MA%3D%3D', alt: 'Story 1', isFirst: true, userName: 'User1' },
        { id: 2, image: 'https://plus.unsplash.com/premium_photo-1674112877123-c8419badc6a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29uc3xlbnwwfHwwfHx8MA%3D%3D', alt: 'Story 2', userName: 'User2' },
        { id: 3, image: 'https://plus.unsplash.com/premium_photo-1668989224643-6b79eaea2108?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29uc3xlbnwwfHwwfHx8MA%3D%3D', alt: 'Story 3', userName: 'User3' },
        { id: 4, image: 'https://plus.unsplash.com/premium_photo-1664541336692-e931d407ba88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnN8ZW58MHx8MHx8fDA%3D', alt: 'Story 4', userName: 'User4' },
    ];

    return (
        <div className="flex justify-center my-1">
            {stories.map((story) => (
                <StoryCard
                    key={story.id}
                    image={story.image}
                    alt={story.alt}
                    isFirst={story.isFirst}
                    userName={story.userName}
                />
            ))}
        </div>
    );
};

