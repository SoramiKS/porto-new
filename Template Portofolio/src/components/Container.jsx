export default function Container({ children }) {
  return (
    <div className="relative w-full text-white font-android">
      {/* Video Background */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/asset/video/bg.mp4"
        autoPlay
        loop
        muted
      />
      {/* Overlay Gelap */}
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
      {/* Konten */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
