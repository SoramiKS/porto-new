import React, { useState, useEffect } from 'react';

export default function Container({ children }) {
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  // Menunggu video dimuat, bisa dengan onCanPlayThrough atau setTimeout untuk simulasi
  const handleVideoLoaded = () => {
    setIsVideoLoading(false);
  };

  return (
    <div className="relative w-full text-white font-android">
      {/* Video Background */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/asset/video/bg.mp4"
        autoPlay
        loop
        muted
        onCanPlayThrough={handleVideoLoaded} // Menunggu video siap diputar
      />
      {/* Overlay Gelap */}
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
      
      {/* Skeleton Video Loader */}
      {isVideoLoading && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-500 opacity-70 z-10 animate-pulse"></div>
      )}

      {/* Konten */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
