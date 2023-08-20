import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <main className="drawer lg:drawer-open">
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
      <aside className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="p-4 menu w-80 h-full pt-28 bg-base-200 text-base-content text-lg">
          <li>
            <Link
              to="/dash/welcome"
              className="text-base-content/50 hover:text-blue-900 flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m3.9 6.1c-.4-.4-1.1-1.1-2.4-1.1H11C8.2 7 6 4.8 6 2H4c0 3.2 2.1 5.8 5 6.7V22h2v-6h2v6h2V10.1l4 3.9l1.4-1.4l-4.5-4.5Z"
                />
              </svg>
              Welcome
            </Link>
          </li>
          <li>
            <Link
              to="/dash/patients"
              className="text-base-content/50 hover:text-blue-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22.102 11.147v1.731H1.904V6.672H0v12.414h1.904v-2.837h20.198v3.074H24v-8.178z"
                />
                <path
                  fill="currentColor"
                  d="M8.709 11.165v.001c0 .564-.457 1.022-1.022 1.022H3.793a1.022 1.022 0 0 1-1.022-1.022v-.002c0-.564.457-1.022 1.022-1.022h3.894c.564 0 1.022.457 1.022 1.022zm11.034-4.001h-2.37V4.8h-1.68v2.365h-2.365v1.68h2.364v2.365h1.68V8.845h2.37z"
                />
              </svg>
              Patients
            </Link>
          </li>
          <li>
            <Link
              to="/dash/invoice"
              className="text-base-content/50 hover:text-blue-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <g fill="none" fillRule="evenodd">
                  <path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                  <path
                    fill="currentColor"
                    fillRule="nonzero"
                    d="M9 15v-1h1v1z"
                  />
                  <path
                    fill="currentColor"
                    d="M18 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12Zm-7.5 10h-2A1.5 1.5 0 0 0 7 13.5v2A1.5 1.5 0 0 0 8.5 17h2a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5Zm5.5 1.5h-2a1 1 0 0 0-.117 1.993L14 15.5h2a1 1 0 0 0 .117-1.993L16 13.5Zm-5.866-6.737L8.72 8.177l-.354-.354a1 1 0 1 0-1.414 1.414l.884.884a1.25 1.25 0 0 0 1.768 0l1.944-1.944a1 1 0 0 0-1.414-1.414ZM16 8h-2a1 1 0 0 0-.117 1.993L14 10h2a1 1 0 0 0 .117-1.993L16 8Z"
                  />
                </g>
              </svg>
              Inventory System
            </Link>
          </li>
          <li>
            <Link
              to="/dash/invoice"
              className="text-base-content/50 hover:text-blue-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="w-5 h-5"
              >
                <path
                  fill="currentColor"
                  d="M37.852 51.571L22.388 42.64l1.532-2.651l15.461 8.931z"
                />
                <path
                  fill="currentColor"
                  d="M53.631 56.656c4.466-4.218 7.296-10.144 7.296-16.758c0-8.149-4.28-15.499-10.935-19.627l7.456-12.906l-1.171-.675l1.839-3.198L53.295.709l-1.843 3.193l-1.233-.712l-18.33 31.752l1.601.924l-2.273 3.932l4.028 2.326l2.274-3.934l1.599.924l7.708-13.349a16.775 16.775 0 0 1 7.759 14.134c0 9.24-7.522 16.758-16.763 16.758H24.316v6.345h38.018v-6.345h-8.701zM19.883 7.865V2.828h.62l-.009-1.208h-5.649l.009 1.208h.666v5.037h-4.215V2.828h.618l-.007-1.208H6.262l.011 1.208h.666v5.037H.75v25.231h25.269V7.865h-6.134zm3.996 23.095H2.887V10.001h4.051v16.12c0 1.22.997 2.211 2.2 2.211c1.205-.005 2.166-.993 2.166-2.211v-16.12h4.215v16.12c0 1.22.998 2.211 2.201 2.211c1.205-.005 2.166-.993 2.164-2.211v-16.12h3.995V30.96z"
                />
              </svg>
              Laboratory
            </Link>
          </li>
          <li>
            <Link
              to="/dash/invoice"
              className="text-base-content/50 hover:text-blue-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="w-6 h-6"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m13.249 4.518l18.133 2.57l.007 36.412l-18.144-2.57Z"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m13.245 4.5l21.51.073l-.073 35.781l-3.22.074"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M29.594 26.018c.058 1.54-.644 2.547-1.375 2.265c-.594-.228-1.014-1.222-1.042-2.275c-.027-1.039.281-2.225.903-2.298c.839-.099 1.457.796 1.514 2.308Z"
                />
              </svg>
              Rooms
            </Link>
          </li>
          <li>
            <Link
              to="/dash/invoice"
              className="text-base-content/50 hover:text-blue-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 48 48"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M16.096 11.105a3.771 3.771 0 0 0-5.333-.002l-.704.704a3.953 3.953 0 0 0-3.892 1.021a4.034 4.034 0 0 0 0 5.676l.833.839V30H4v2h2.05a3.5 3.5 0 1 0 4.899 0h26.102a3.5 3.5 0 1 0 4.899 0H44v-2h-4v-3.113a3.962 3.962 0 0 0 3-3.854c0-2.19-1.761-3.967-3.934-3.967H18.11a.307.307 0 0 1-.218-.09l-.366-.37l.369-.367a3.77 3.77 0 0 0 .001-5.333l-1.8-1.8Zm.02 6.083l.365-.364a1.77 1.77 0 0 0 0-2.504l-1.8-1.8a1.771 1.771 0 0 0-2.504-.002l-.35.35l4.29 4.32ZM38 30H9v-8.644l5.275 5.311c.212.213.498.333.797.333H38v3Z"
                  clipRule="evenodd"
                />
              </svg>
              In-patient
            </Link>
          </li>
          <li>
            <Link
              to="/dash/invoice"
              className="text-base-content/50 hover:text-blue-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M3 5q-.425 0-.713-.288T2 4q0-.425.288-.713T3 3h10q.425 0 .713.288T14 4q0 .425-.288.713T13 5H3Zm5 12.5q.625 0 1.063-.438T9.5 16v-1h1q.625 0 1.063-.438T12 13.5q0-.625-.438-1.063T10.5 12h-1v-1q0-.625-.438-1.063T8 9.5q-.625 0-1.063.438T6.5 11v1h-1q-.625 0-1.063.438T4 13.5q0 .625.438 1.063T5.5 15h1v1q0 .625.438 1.063T8 17.5ZM3 21q-.825 0-1.413-.588T1 19V8q0-.825.588-1.413T3 6h10q.825 0 1.413.588T15 8v11q0 .825-.588 1.413T13 21H3Zm15.775-6.2q-.3-.3-.3-.713t.3-.712L19.15 13H17q-.425 0-.713-.288T16 12q0-.425.288-.713T17 11h2.15l-.375-.375q-.3-.3-.3-.7t.3-.7q.3-.3.713-.3t.712.3l2.1 2.075q.3.3.3.7t-.3.7l-2.1 2.1q-.3.3-.713.3t-.712-.3Z"
                />
              </svg>
              Out-patient
            </Link>
          </li>
          <li>
            <Link
              to="/dash/invoice"
              className="text-base-content/50 hover:text-blue-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 64 64"
              >
                <path
                  fill="currentColor"
                  d="M40.067 20.573c0 4.557-3.699 8.25-8.26 8.25c-4.556 0-8.249-3.694-8.249-8.25s3.693-8.25 8.249-8.25c4.561 0 8.26 3.694 8.26 8.25z"
                />
                <path
                  fill="currentColor"
                  d="M31.82.524c-3.818 0-9.151 1.522-13.014 5.385l4.588 8.359a10.703 10.703 0 0 1 8.426-4.09c3.459 0 6.537 1.634 8.498 4.175l4.5-8.636C41.475 2.064 35.48.525 31.82.525zm3.4 6.138h-2.136v2.134h-2.566V6.662h-2.136V4.097h2.136V1.954h2.566v2.143h2.136v2.565zM20.966 43.651h2.113l-3.018 10.344h23.581l-3.004-10.344h2.115l3.023 10.344h6.939l-4.736-15.672c-.74-2.587-3.984-7.142-9.582-7.28l-12.87-.011c-5.725.028-9.037 4.672-9.786 7.29l-4.828 15.672h7.037l3.016-10.343zM.947 57.293h61.73v5.873H.947v-5.873z"
                />
              </svg>
              Staff
            </Link>
          </li>
          <li>
            <Link
              to="/dash/invoice"
              className="text-base-content/50 hover:text-blue-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
                className="w-6 h-6"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="10.5" height="8" x=".5" y="1.75" rx="1" />
                  <circle cx="5.75" cy="5.75" r="1.5" />
                  <path d="M3.5 12.25h9a1 1 0 0 0 1-1v-5" />
                </g>
              </svg>
              Billing
            </Link>
          </li>
        </ul>
      </aside>
    </main>
  );
}
