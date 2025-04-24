"use client"
import React,{useState, useRef, useEffect} from 'react'
import { BiVolumeMute, BiVolumeFull } from "react-icons/bi";

const States = () => {
  const[isMuted, setIsMuted] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null);


  const handleClick = ()=>{
    setIsMuted((prevState) => !prevState)
    if(videoRef.current){
      videoRef.current.muted = !videoRef.current.muted
      if(videoRef.current.paused){
        videoRef.current.play()
      }
    }
  }
  useEffect(()=>{
    if(videoRef.current){
      videoRef.current.muted = isMuted
    }
  },[isMuted])
  return (
    <div className='relative h-dvh w-full'>
        <video autoPlay loop loading="lazy" ref={videoRef} className='h-full w-full object-cover object-center' src="/states.mp4" />
        <button onClick={handleClick} className='absolute bottom-10 right-10 text-2xl text-white hover:cursor-pointer'>{isMuted? <BiVolumeFull />: <BiVolumeMute />}</button>
    </div>
  )
}

export default States