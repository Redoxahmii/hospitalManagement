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

  const users1 = [
    {
      firstName: "John",
      lastName: "Doe",
      address: {
        city: "London",
      },
      height: 180,
      age: 25,
      weight: 80,
      bloodGroup: "A+",
      image:
        "https://surgassociates.com/wp-content/uploads/610-6104451_image-placeholder-png-user-profile-placeholder-image-png-600x629.jpg",
    },
    {
      firstName: "Bob",
      lastName: "the Builder",
      address: {
        city: "Paris",
      },
      height: 143,
      age: 21,
      weight: 100,
      bloodGroup: "B+",
      image:
        "https://surgassociates.com/wp-content/uploads/610-6104451_image-placeholder-png-user-profile-placeholder-image-png-600x629.jpg",
    },
  ];

  return (
    <div className=" mt-20">
      <div className=" items-center flex justify-center">
        <h1 className="text-4xl font-bold mb-10 ">Patient Records</h1>
      </div>
      <div className=" animate-fade">
        <Table users={users1} />
      </div>
    </div>
  );
}
