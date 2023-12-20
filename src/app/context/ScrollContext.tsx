"use client"
import { createContext,useState, useContext } from "react";
interface ScrollContextProps {
  scrollPosition: ScrollPosition;
  setScrollPosition: React.Dispatch<React.SetStateAction<ScrollPosition>>;
}

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll debe estar dentro del proveedor ScrollProvider");
  }
  return context;
}

export const ScrollContext = createContext<ScrollContextProps | null>(null);

interface ScrollPosition {
  left: number;
  top: number;
}

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    left: 0,
    top: 0,
  });

  return (
    <ScrollContext.Provider value={{ scrollPosition, setScrollPosition }}>
      {children}
    </ScrollContext.Provider>
  );
};
