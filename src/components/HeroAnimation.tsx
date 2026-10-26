import React, { useRef, useEffect } from 'react';

export const HeroAnimation: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Aumentar un poco la velocidad de reproducción (1.25x)
      videoRef.current.playbackRate = 1.25;
    }
  }, []);

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-black">
      <video
        ref={videoRef}
        src="/hero-video.mp4"
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover block"
      />
    </div>
  );
};
