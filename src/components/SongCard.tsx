import Image from "next/image";
import Link from "next/link";

export const SongCard = ({ src, title }: { src: string; title: string }) => {
  return (
    <Link
      className="flex flex-col p-4 bg-zinc-900  rounded-lg gap-3 text-sm bg-opacity-50 hover:bg-zinc-800"
      href="#"
    >
      <Image
        className="rounded-md"
        alt="cover"
        width={150}
        height={150}
        src={src}
      />
      <div>
        <h2 className="font-bold">{title}</h2>
      </div>
    </Link>
  );
};
