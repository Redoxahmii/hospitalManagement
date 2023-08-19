import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Welcome from "./pages/Dashboard/Welcome";
import Patients from "./pages/Dashboard/Patients";
import Error from "./pages/Dashboard/Error";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dash/*" element={<Dashboard />}>
          <Route path="welcome" element={<Welcome />}></Route>
          <Route path="patients" element={<Patients />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>

        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}
