import React, { useState, useEffect } from 'react';

export default function Container({ children }) {
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  const handleVideoLoaded = () => {
    setIsVideoLoading(false);
  };

  return (
    <div className="relative w-full text-white font-android min-h-screen">
      {/* Video Background with Cyberpunk Overlay */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-[-2]"
        src="/asset/video/bg.mp4"
        autoPlay
        loop
        muted
        onCanPlayThrough={handleVideoLoaded}
      />
      
      {/* Cyberpunk Grid Overlay */}
      <div className="fixed top-0 left-0 w-full h-full z-[-1]" 
           style={{
             background: `
               linear-gradient(rgba(10, 10, 15, 0.8) 1px, transparent 1px),
               linear-gradient(90deg, rgba(10, 10, 15, 0.8) 1px, transparent 1px),
               linear-gradient(rgba(0, 245, 255, 0.03) 0%, transparent 100%)
             `,
             backgroundSize: '50px 50px, 50px 50px, 100% 100%'
           }}>
      </div>
      
      {/* Dark Overlay with Cyberpunk Gradient */}
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900/90 via-purple-900/20 to-cyan-900/30 z-0"></div>
      
      {/* Skeleton Video Loader */}
      {isVideoLoading && (
        <div className="absolute top-0 left-0 w-full h-full bg-slate-800 opacity-70 z-10">
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400"></div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}