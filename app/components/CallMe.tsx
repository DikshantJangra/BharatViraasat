"use client";
import React, { useRef, useState } from 'react';
import { BiVolumeMute, BiVolumeFull } from "react-icons/bi";

const CallMe = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true)
  const handlePlayWithAudio = () => {
      if (videoRef.current) {
        const newMutedState =  !videoRef.current.muted
        videoRef.current.muted = newMutedState
        setIsMuted(!isMuted)
        videoRef.current.play();
    }
  };

  return (
    <div className='flex'>
      {/* Video Container */}
      <div className='relative w-180 h-160 aspect-video overflow-hidden rounded-br-2xl bg-zinc-400'>
        <video
          ref={videoRef}
          src="/some_call_me.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
            <button className='absolute bottom-4 right-4 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-md transition-all' onClick={handlePlayWithAudio}>
            {isMuted? <BiVolumeFull size={24} />: <BiVolumeMute size={24} />}</button>
      </div>
      <div>
        <p className="font-bold text-3xl p-4">The heartbeat of a timeless identity,</p>
      </div>
    </div>
  );
};

export default CallMe;
