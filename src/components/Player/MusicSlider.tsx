"use client";
import { Slider } from "./Slider";

export const MusicSlider = ({
  max,
  min,
  onChange,
  defaultValue,
  currentTime,
  duration,
}: {
  max: number;
  min: number;
  onChange: (e: any) => void;
  defaultValue: number[];
  currentTime: number;
  duration: number;
}) => {

  return (
    <>
      <div className="flex items-center gap-2 text-gray-300 text-xs">
        <p>{currentTime ? currentTime : "0:00"}</p>
        <Slider
          defaultValue={defaultValue}
          max={max}
          min={min}
          step={1}
          onValueChange={onChange}
        />
        <p>{duration}</p>
      </div>
    </>
  );
};
