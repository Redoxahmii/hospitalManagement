import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <>
      <div className=" w-[80vw] flex pt-10 flex-col items-center justify-center gap-5">
        <img
          className="w-1/3 rounded-xl mt-24 animate-fade-up"
          src="https://images.unsplash.com/photo-1550791871-0bcd47c97881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <h1 className="text-4xl font-bold mt-10">
          Welcome to the Dashboard Admin!
        </h1>
        <p className=" text-lg">You can start looking at patient records</p>
        <Link to="/dash/patients">
          <button className="btn btn-primary px-5">Patient Records</button>
        </Link>
      </div>
    </>
  );
}
