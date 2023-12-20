import Image from "next/image";
import { Playlist } from "lib/data";
import Link from "next/link";

interface LinkProps extends Playlist {
  href: string;
}
import { PiPushPinFill } from "react-icons/pi";

export const PlaylistButton: React.FC<LinkProps> = ({
  cover,
  title,
  songs,
  href,
}) => {
  return (
    <Link
      href={href}
      className="flex gap-3 hover:bg-zinc-900 p-2 rounded-md items-center"
    >
      <Image
        className="rounded-md"
        width="50"
        height="50"
        alt="Cover"
        src={cover}
      ></Image>
      <div className="font-normal text-sm">
        <p>{title}</p>
        <p className="text-xs flex items-center gap-1">
          <span><PiPushPinFill className="text-green-500" size={13} /></span>
          <span>Playlist • {songs} canciones</span>
        </p>
      </div>
    </Link>
  );
};
