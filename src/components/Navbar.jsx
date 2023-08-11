import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar bg-base-200 rounded-xl px-10 fixed top-0 z-10">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          HMS
        </Link>
      </div>
      <div className="flex-none">
        <ul className="px-1 flex items-center justify-center gap-10">
          <li>
            <button
              onClick={() => navigate("/login")}
              className="btn btn-primary"
            >
              Login
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
