"use client"

import {
  FaBackwardStep,
  FaForwardStep,
  FaPause,
  FaRepeat,
  FaShuffle,
  FaPlay
} from "react-icons/fa6";
import { MusicSlider } from "./MusicSlider"; 
import { PlayerButton } from "./PlayerButton";
import { useState,useRef, useEffect } from "react";
export const PlayerControls = ({
  audioRef
}:
{
  audioRef: React.MutableRefObject<HTMLAudioElement>
}) => {

  const [isPlaying, setIsPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    audioRef.current?.addEventListener("timeupdate", (e) => {
      
      setCurrentTime(formatTime(e.target.currentTime));
    });
    audioRef.current?.addEventListener("loadedmetadata", (e) => {
      setDuration(formatTime(e.target.duration));
    });
  },[]);

  const formatTime = (time:number) => {
    if(!time) return "0:00";
    const seconds =  Math.floor(time % 60);
    const minutes = Math.floor(time / 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  }

  const handlePlayPause = () => {

    setIsPlaying(!isPlaying);
    isPlaying ? audioRef.current.pause() : audioRef.current?.play();
  };

  const onSliderChange = (e) => {
    audioRef.current.currentTime = e;
    setCurrentTime(formatTime(e));
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-6">
        <PlayerButton>
          <FaShuffle />
        </PlayerButton>
        <PlayerButton className="active:text-zinc-400">
          <FaBackwardStep size={25} />
        </PlayerButton>
        <button onClick={handlePlayPause} className="text-black bg-white p-2 rounded-full hover:scale-105 active:scale-100">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <PlayerButton className="active:text-zinc-400">
          <FaForwardStep size={25} />
        </PlayerButton>
        <PlayerButton>
          <FaRepeat />
        </PlayerButton>
      </div>
      <MusicSlider onChange={onSliderChange} min={0} max={audioRef?.current?.duration} currentTime={currentTime} duration={formatTime(audioRef?.current?.duration)}/>
      
    </div>
  );
};
