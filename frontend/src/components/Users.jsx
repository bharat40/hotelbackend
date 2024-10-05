import React from "react";
import { useEffect, useState } from "react";

const Users = () => {
  const [userData, setUserData] = useState([]);
  const fetchapi = async () => {
    const res = await fetch("http://localhost:3000/person");
    const data = await res.json();
    setUserData(data);
    console.log(data);
  };
  useEffect(() => {
    fetchapi();
  }, []);
  return (
    <div>
      <h1 className="font-extrabold text-2xl text-center">Users Data</h1>
      <div className="flex flex-wrap gap-3 justify-center my-5 ">
        {userData.map((user) => {
          return (
            <div
              key={user._id}
              className="w-[300px] bg-cyan-300  text-center border hover:scale-105 duration-200 shadow-sm "
            >
              <img
                src={user.avatar}
                alt="avatar"
                className="rounded-full h-[200px] w-[200px]"
              />
              <h1 className="text-xl font-bold">Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Work: {user.work}</h1>
              <h1>Mobile: {user.mobile}</h1>
              <h1>Email: {user.email}</h1>
              <h1>Address: {user.address}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
