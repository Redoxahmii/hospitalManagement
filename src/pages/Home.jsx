import { useNavigate } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="flex w-screen h-screen items-center justify-center">
      <section className="flex w-full max-w-8xl px-5 sm:px-10 lg:px-20">
        <div className="flex md:flex-row flex-col">
          <div className="w-full md:w-1/2 mt-10">
            <h1 className="text-7xl font-bold tracking-tighter text-base-content/40">
              Simplify
            </h1>
            <h1 className="text-7xl font-bold tracking-tighter">Streamline</h1>
            <h1 className="text-7xl font-bold tracking-tighter text-base-content/40">
              Succeed.
            </h1>
            <div className="w-full max-w-lg mt-5 leading-relaxed">
              <p>
                Enhance hospital efficiency: Streamline operations, Focus on
                care. Join us in shaping Healthcare management's future.
              </p>
            </div>
            <div>
              <button
                className="btn btn-primary mt-6"
                onClick={() => navigate("/login")}
              >
                Explore our solution
              </button>
            </div>
          </div>
          <div className=" md:w-1/2 mt-20 md:mt-0">
            <img
              className="object-cover w-full h-full rounded-xl shadow-xl"
              src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
              alt="hospital"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
