import { ComponentProps } from "react";
import { NavLink as DefaultNavLink } from "react-router-dom";

function NavLink({
  children,
  to,
}: Omit<ComponentProps<typeof DefaultNavLink>, "className">) {
  return (
    <DefaultNavLink
      to={to}
      className={({ isActive }) => (isActive ? "underline" : "")}
    >
      {children}
    </DefaultNavLink>
  );
}

export function Nav() {
  return (
    <nav className="font-sans flex justify-center align-center">
      <ul className="list-none flex gap-3">
        <li className="hover:underline">
          <NavLink to="/">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/workshop">Workshop</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
