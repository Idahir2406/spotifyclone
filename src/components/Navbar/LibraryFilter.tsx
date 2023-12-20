"use client";
import { FilterButton } from "./FilterButton";
import { NavButton } from "./NavButton";
import {  FaArrowLeft,FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { useState } from "react";
import styles from "./styles.module.css";
export const LibraryFilter = () => {
  const [translate, setTranslate] = useState(0);

  const options = [
    {
      name: "Playlists",
    },
    {
      name: "Artistas",
    },
    {
      name: "Álbumes",
    },
    {
      name: "Podcasts y programas",
    },
  ];

  const percent = () => {
    return translate * 0.3;
  };

  const moveToRight = () => {
    if (translate === -150) return;
    setTranslate(translate - 150);
  };

  const moveToLeft = () => {
    if (translate === 0) return;
    setTranslate(translate + 150);
  };

  return (
    <div className="flex items-center relative">

      {translate != 0 && (
        <NavButton
          className={`absolute transition-colors bg-[#242424] hover:bg-[#2a2a2a] z-10`}
          onClick={moveToLeft}
        >
          <FaArrowLeft size={18} />
        </NavButton>
      )}

      <div className={`flex gap-2 w-full transition-all overflow-hidden  rounded-full ${translate ===0 ? styles.sliderGradient:styles.slider}`}>
        {options.map((option) => (
          <FilterButton
            style={{
              transform: `translateX(${translate}px)`,
              transition: "transform 1s ease",
            }}
            className={`${styles.translate}`}
            key={option.name}
          >
            {option.name}
          </FilterButton>
        ))}
      </div>

      {
        translate != -150 && (
          <NavButton className="absolute right-0 z-10 bg-[#242424] hover:bg-[#2a2a2a]" onClick={moveToRight}>
        <FaChevronRight size={18}/>
      </NavButton>
        )
      }
    </div>
  );
};
