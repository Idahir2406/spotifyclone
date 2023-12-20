"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import styles from "./player.module.css";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={`relative flex w-full bg-gray-600 rounded-full touch-none select-none items-center ${styles.slider} ${className}`}
    {...props}
  >
    <SliderPrimitive.Track
      className={`relative h-[5px] w-[100px] overflow-hidden rounded-full ${styles.sliderTrack}`}
    >
      <SliderPrimitive.Range
        className={`absolute h-full bg-gray-300 rounded-full  ${styles.sliderRange}`}
      />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className={`${styles.sliderDot}`} />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };

export const VolumeSlider = ({
  max,
  min,
  onChange,
  defaultValue,
}: {
  max: number;
  min: number;
  onChange: (e: any) => void;
  defaultValue: number[];
}) => {
  return (
    <>
      <div className="flex items-center gap-2 text-gray-300 text-xs">
        <Slider
          defaultValue={defaultValue}
          max={max}
          min={min}
          step={1}
          onValueChange={onChange}
        />
      </div>
    </>
  );
};
