'use client';

export default function VideoBackground() {
  return (
    <div className="absolute left-0 w-full h-full overflow-hidden ">
      <div className="absolute inset-0  z-10"></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover "
      >
        <source src="/backvideo.mp4" type="video/mp4" />
      </video>
      {/* Mobile Fallback Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#000A18]/60 to-[#000A18]/20 z-0 sm:hidden"
        aria-hidden="true"
      ></div>
    </div>
  );
}
