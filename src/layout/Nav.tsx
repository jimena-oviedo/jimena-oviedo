import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav className="font-sans flex justify-center align-center">
      <ul className="list-none flex gap-3">
        <li className="hover:underline">
          <Link to="/">Projects</Link>
        </li>
        <li className="hover:underline">
          <Link to="/workshop">Workshop</Link>
        </li>
        <li className="hover:underline">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
