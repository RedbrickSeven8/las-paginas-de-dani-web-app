import React from 'react';

export const HeroAnimation: React.FC = () => {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video flex items-center justify-center">
      <video
        src="/hero_video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
};
