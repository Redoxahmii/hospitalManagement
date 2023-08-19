import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <div className=" flex w-screen h-screen items-center justify-center gap-52 px-20">
      <div className=" flex flex-col w-full max-w-xl animate-fade-right">
        <h1 className="text-7xl font-bold tracking-tighter text-base-content/40">
          Simplify
        </h1>
        <h1 className="text-7xl font-bold tracking-tighter">Streamline</h1>
        <h1 className="text-7xl font-bold tracking-tighter text-base-content/40">
          Succeed.
        </h1>
        <div className="w-full max-w-lg mt-5 leading-relaxed">
          <p>
            Enhance hospital efficiency: Streamline operations, Focus on care.
            Join us in shaping Healthcare management's future.
          </p>
        </div>
        <div>
          <Link to="/login">
            <button className="btn btn-primary mt-6">
              Explore our solution
            </button>
          </Link>
        </div>
      </div>
      <div className=" w-1/2 h-1/2 -mt-20 animate-fade-up">
        <img
          className=" rounded-xl"
          src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
          alt="hospital"
        />
      </div>
    </div>
  );
}
