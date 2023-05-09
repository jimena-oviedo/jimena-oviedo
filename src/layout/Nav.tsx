import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Projects</Link>
        </li>
        <li>
          <Link to="/workshop">Workshop</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
