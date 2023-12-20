import { FaRegSquareCaretRight } from "react-icons/fa6";
import { songs } from "lib/data";
import Link from "next/link";
import Image from "next/image";
import { PlayerButton } from "./PlayerButton";
import { TbMicrophone2 } from "react-icons/tb";
import { HiOutlineQueueList } from "react-icons/hi2";
import { PiDevicesBold } from "react-icons/pi";
import styles from "./player.module.css";
import { PlayerControls } from "./PlayerControls";
import { VolumeSlider } from "./VolumeSlider";
import { AiOutlineExpandAlt } from "react-icons/ai";
import { useRef } from "react";
export const PlayerBar = () => {
  const song = songs[2];
  const audioRef = useRef(null);
  return (
    <footer className="[grid-area:player] sticky  bottom-0 bg-black flex items-center justify-between px-4  rounded-md overflow-hidden ">
      <div className="flex items-center gap-3">
        <Image
          className="rounded-md"
          alt="cover"
          src={song.image}
          width={50}
          height={50}
        />
        <div>
          <Link href="#">
            <h3 className="text-sm hover:underline">{song.title}</h3>
          </Link>
          <Link href="#">
            <p className="text-xs hover:underline">{song.artists}</p>
          </Link>
        </div>
      </div>
      <PlayerControls />
      <div className="flex items-center gap-4">
        <PlayerButton>
          <FaRegSquareCaretRight size={18} />
        </PlayerButton>
        <PlayerButton>
          <TbMicrophone2 size={18} />
        </PlayerButton>
        <PlayerButton>
          <HiOutlineQueueList size={18} />
        </PlayerButton>

        <PlayerButton>
          <PiDevicesBold />
        </PlayerButton>
        <VolumeSlider />
        <PlayerButton>
          <AiOutlineExpandAlt className="text-gray-500 " size={18} />
        </PlayerButton>
      </div>
    </footer>
  );
};
