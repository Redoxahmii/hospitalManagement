import { useEffect, useState } from "react";
import Table from "../../components/Table";
export default function Patients() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUsers(data.users);
    };
    fetchUsers();
  }, []);

  return (
    <div className=" mt-20">
      <div className=" items-center flex justify-center">
        <h1 className="text-4xl font-bold mb-10 ">Patient Records</h1>
      </div>
      <div className=" animate-fade">
        <Table users={users} />
      </div>
    </div>
  );
}
