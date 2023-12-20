"use client";

import { useScroll } from "app/context/ScrollContext";

export const Main = ({ children }: { children: React.ReactNode }) => {

  const { setScrollPosition } = useScroll();

  const handleScroll = (
    e: any
  ) => {
    const { scrollLeft, scrollTop } = e.target;
    setScrollPosition({ left: scrollLeft, top: scrollTop });
 
  };
  return (
    <main onScroll={(e)=>{
      handleScroll(e);
      console.log("se ejecuta");
    }} className="[grid-area:main] overflow-y-auto  bg-zinc-950 rounded-md flex flex-col  bg-gradient-to-b from-[#20125a] mainContainer">
      {children}
    </main>
  );
};
