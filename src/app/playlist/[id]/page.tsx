import { PlayerButton } from "components/Player/PlayerButton";
import { playlists, songs, Playlist } from "lib/data";
import Image from "next/image";
import { IoTimeOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Page({ params }: { params: { id: string } }) {
  const playlist: Playlist | undefined = playlists.find(
    (playlist) => playlist.id === params.id
  );

  return (
    <section className="flex flex-col gap-6 ">
      <div className="flex items-center gap-5">
        {playlist && (
          <Image
            className="rounded-md"
            alt="cover"
            src={playlist.cover}
            width={240}
            height={240}
          />
        )}

        <div>
          <p className="text-sm">Playlist</p>
          <h1 className="font-extrabold text-7xl">{playlist?.title}</h1>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <PlayerButton className="bg-green-500 p-5 rounded-full hover:scale-105 active:scale-100">
          <FaPlay className="text-black" />
        </PlayerButton>
        <button className="flex items-center gap-2 font-light text-sm">
          <p>Lista</p>
          <AiOutlineUnorderedList className="" />
        </button>
      </div>
      <div className="w-full grid grid-cols-12 font-light text-sm text-[#a1a1a2] border-b border-[#302d3c] p-5">
        <label className="col-span-1">#</label>
        <label className="col-span-4">Título</label>
        <label className="col-span-3">Álbum</label>
        <label className="col-span-3">Fecha en que se agregó</label>
        <label className="col-span-1">
          <IoTimeOutline />
        </label>
        {/* ------------------------------------------- */}
      </div>

      <div>
        {songs.map(
          (song, index) =>
            song.albumId.toString() === params.id && (
              <div
                key={index}
                className={`w-full grid grid-cols-12 gap-2 items-center px-5 py-2 hover:bg-gray-700 hover:bg-opacity-50 rounded-md ${styles.songContainer}`}
              >
                <div className="relative col-span-1 ">
                  <span className={`text-[#a1a1a2] ${styles.index}`}>
                    {index + 1}
                  </span>

                  <FaPlay
                    className={`text-[#d8d8d8] absolute bottom-1 cursor-pointer ${styles.playIcon}`}
                  />
                </div>
                <div className="col-span-4 flex items-center gap-3">
                  <Image
                    className="rounded-sm"
                    width={40}
                    height={40}
                    alt="cover"
                    src={song.image}
                  />
                  <Link className="hover:underline" href={`/song/${song.id}`}>
                    {song.title}
                  </Link>
                </div>
                <Link
                  href="#"
                  className="col-span-3 text-[#a1a1a2] text-xs hover:underline"
                >
                  {song.album}
                </Link>
                <label className="col-span-3 text-[#a1a1a2] text-xs">
                  Fecha
                </label>
                <label className="col-span-1 text-[#a1a1a2] text-xs">
                  {song.duration}
                </label>
              </div>
            )
        )}
      </div>

      {/* <div>
        <table className="table-auto w-full">
          <thead className="border-b border-[#302d3c] text-[#a1a1a2] text-sm">
            <tr className="">
              <th className="font-light p-2 text-start">#</th>
              <th className="font-light p-2 text-start">Título</th>
              <th className="font-light p-2 text-start">Álbum</th>
              <th className="font-light p-2 text-start">
                Fecha en que se agregó
              </th>
              <th className="font-light ">
                <IoTimeOutline />
              </th>
            </tr>
          </thead>
          <tbody>
            {songs.map(
              (song, index) =>
                song.albumId.toString() === params.id && (
                  <tr
                    className="hover:bg-gray-600 rounded-md bg-opacity-60"
                    key={song.id}
                  >
                    <td className="p-2">{index + 1}</td>
                    <td className="flex items-center gap-3 p-2">
                      <Image
                        className="rounded-md"
                        src={song.image}
                        width={50}
                        height={50}
                        alt="cover"
                      />
                      {song.title}
                    </td>
                    <td className="p-2">{song.album}</td>
                    <td className="p-2">Fecha</td>
                    <td className="p-2">{song.duration}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div> */}
    </section>
  );
}
