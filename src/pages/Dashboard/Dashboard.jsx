import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col pt-10">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full pt-20 bg-base-200 text-base-content text-lg ">
          {/* Sidebar content here */}
          <li>
            <Link to="/dash/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/dash/patients">Patients</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
