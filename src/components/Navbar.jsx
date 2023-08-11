import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-base-200 rounded-xl px-10 fixed top-0 z-10">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          HMS
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="btn btn-primary">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
