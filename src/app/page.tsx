import { recentlyPlayed } from "../lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import { allPlaylists } from "../lib/data";
import { SongCard } from "components/SongCard";
export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold text-white">Buenos días</h1>
      <section className="grid grid-cols-2 lg:grid-cols-3 gap-2">
        {recentlyPlayed.map((playlist) => (
          <Link
            href="#"
            key={playlist.id}
            className="grid grid-cols-4 lg:grid-cols-12 rounded-md bg-zinc-700 overflow-hidden gap-3 bg-opacity-40 hover:bg-zinc-600 transition-colors recent-played-card h-[3rem]"
          >
            <picture className="col-span-1 lg:col-span-2 w-[3rem] h-[3rem]">
              <Image
                alt="Cover"
                width={100}
                height={100}
                src={playlist.cover}
              />
            </picture>
            <div className="lg:ml-2 col-span-2 lg:col-span-8 font-semibold text-sm flex items-center">
              <h3 className="text-white">{playlist.title}</h3>
            </div>
            <div className="lg:col-span-2 flex play  items-center justify-center">
              <div className="flex items-center justify-center bg-green-500 rounded-full p-2 hover:scale-110 active:scale-100">
                <FaPlay className=" text-black" />
              </div>
            </div>
          </Link>
        ))}
      </section>
      <Link href="#" className="text-2xl font-bold text-white hover:underline">
        Hecho para Irving
      </Link>
      <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-6">
        {allPlaylists.map((playlist) => (
          <SongCard
            key={playlist.id}
            src={playlist.cover}
            title={playlist.title}

          />
        ))}
      </section>
    </>
  );
}
