import { FiInstagram } from "react-icons/fi";
import { FaImdb } from "react-icons/fa";
import { ComponentProps } from "react";
import { NavLink as DefaultNavLink } from "react-router-dom";

function NavLink({
  children,
  to,
}: Omit<ComponentProps<typeof DefaultNavLink>, "className">) {
  return (
    <DefaultNavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-gray-400" : "hover:text-gray-500"
      }
    >
      {children}
    </DefaultNavLink>
  );
}

export function Nav() {
  return (
    <nav className="font-serif flex justify-center align-center text-lg mt-6 text-gray-600">
      <ul className="list-none flex gap-3">
        <li>
          <NavLink to="/">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/workshop">Workshop</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="mt-1">
          <a
            title="@texturatextil (Instagram)"
            href="https://www.instagram.com/texturatextil/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram />
          </a>
        </li>
        <li className="mt-1">
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
    </nav>
  );
}
