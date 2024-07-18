import React from 'react';
import StoryCard from './AppStoryCard';
import { stories } from '@/data';

export const AppStorySection = () => {

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

