import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [err, seterr] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (password === "admin" && email === "admin") {
      setSuccess("Login Successful");
      setTimeout(() => {
        navigate("/dash/welcome");
      }, 1000);
    } else {
      seterr("Invalid Credentials");
      setTimeout(() => {
        seterr("");
      }, 3000);
    }
  };

  return (
    <div className=" w-screen items-center justify-center h-screen flex">
      <div className="w-full flex-col max-w-lg bg-base-300 animate-fade-up flex items-center justify-center rounded-xl p-14">
        <h1 className="text-4xl font-bold">Login</h1>
        <div className="flex mt-5 flex-col">
          <label className="label label-text" htmlFor="Email">
            Email
          </label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            className=" input input-primary "
            name="email"
          />
          <label className="label label-text" htmlFor="Password">
            Password
          </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="input input-primary"
            name="password"
          />
          <div className=" items-center justify-center flex mt-10">
            <button
              className="btn btn-primary normal-case rounded-xl"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          {success && (
            <div className="alert alert-success mt-2 animate-fade">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{success}</span>
            </div>
          )}
          {err && (
            <div className="alert alert-error mt-2 animate-fade">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{err}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
