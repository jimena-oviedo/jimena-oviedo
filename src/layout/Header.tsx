import { FiInstagram } from "react-icons/fi";
import { FaImdb } from "react-icons/fa";

export function Header() {
  return (
    <header className="py-12 text-center leading-loose">
      <h1 className="font-serif text-5xl">Jimena Oviedo</h1>
      <div className="flex justify-center">
        <p className="font-sans">Breakdown Artist</p>
        <aside className="absolute pt-1 right-0">
          <ul className="list-none flex gap-2 text-2xl">
            <li>
              <a
                title="@texturatextil (Instagram)"
                href="https://www.instagram.com/texturatextil/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram />
              </a>
            </li>
            <li>
              <a
                title="Jimena Oviedo (IMDb)"
                href="https://www.imdb.com/name/nm12105291/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaImdb />
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </header>
  );
}
