import { GoHome, GoSearch } from "react-icons/go";
import { VscLibrary } from "react-icons/vsc";
import { Navlink } from "components/Navbar/Navlink";
import { NavLinkContainer } from "components/Navbar/NavLinkContainer";
import { FaListUl, FaPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { NavButton } from "components/Navbar/NavButton";
import { LibraryFilter } from "components/Navbar/LibraryFilter";
import { playlists } from "../../lib/data";
import { PlaylistButton } from "components/Navbar/PlaylistButton";
import styles from "./styles.module.css";

export const Navbar = () => {
  return (
    <nav className={`[grid-area:aside] justify-between gap-2 ${styles.nav}`}>
      <NavLinkContainer className="[grid-area:start] row-span-1 justify-around">
        <Navlink href="/">
          <GoHome size={30} />
          Inicio
        </Navlink>
        <Navlink href="/prueba">
          <GoSearch size={30} />
          Buscar
        </Navlink>
      </NavLinkContainer>

      <NavLinkContainer className="[grid-area:library] row-span-5">
        <Navlink
          href="#"
          className="flex items-center justify-between"
          sideContent={
            <div className="flex gap-4">
              <NavButton
                className="hover:bg-zinc-800"
                popOverContent={<p>Crea una playlist o una carpeta</p>}
              >
                <FaPlus size={18} />
              </NavButton>
              <NavButton
                className="hover:bg-zinc-800"
                popOverContent={<p>Mostrar más</p>}
              >
                <FaArrowRight size={18} />
              </NavButton>
            </div>
          }
        >
          <VscLibrary size={30} />
          Biblioteca
        </Navlink>
        <LibraryFilter></LibraryFilter>

        <div className="overflow-auto">
          <div className="flex items-center justify-between text-zinc-400 px-2">
            <NavButton>
              <GoSearch size={18} />
            </NavButton>
            <button className="flex items-center gap-2 font-light text-sm mt-1 hover:text-white">
              <p className="">Recientes</p>{" "}
              <FaListUl className="mt-[2px]" size={17} />
            </button>
          </div>
          {playlists.map(({ id, title, cover, songs,albumId,color }) => (
            <PlaylistButton
              albumId={albumId}
              id={id}
              color={color}
              href={`/playlist/${id}`}
              key={id}
              title={title}
              cover={cover}
              songs={songs}

            />
          ))}
        </div>
      </NavLinkContainer>
    </nav>
  );
};
