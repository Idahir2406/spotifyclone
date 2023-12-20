"use client"
import { NavButton } from "./NavButton";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { SlUser } from "react-icons/sl";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useScroll } from "app/context/ScrollContext";


export const Header = () => {

  const { scrollPosition } = useScroll();

  return (
    <header  className={`flex items-center justify-between sticky  rounded-t-md top-0 px-6 py-4 transition-all  ${scrollPosition.top >= 300 ? "bg-[#201060]":"bg-transparent"}`}>
      <div className="flex gap-4">
        <NavButton
          popOverContent={<>Retroceder</>}
          className="bg-black text-white "
        >
          <FaChevronLeft />
        </NavButton>
        <NavButton
          popOverContent={<>Avanzar</>}
          className="bg-black text-white "
        >
          <FaChevronRight />
        </NavButton>
      </div>
      <div className="flex items-center gap-4">
        <NavButton className="bg-black gap-2 text-sm font-bold text-white hover:scale-105">
          <IoArrowDownCircleOutline size={20} />
          Instalar aplicación
        </NavButton>
        <NavButton className="bg-black gap-2 text-sm font-bold text-white hover:scale-105">
          <IoMdNotificationsOutline size={20} />
        </NavButton>
        <NavButton className="bg-black gap-2 text-sm font-bold text-white hover:scale-105">
          <SlUser size={20} />
        </NavButton>
      </div>
    </header>
  );
};
