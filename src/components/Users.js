import React from "react";

import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../api/auth";

const Users = () => {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  return (
    <div className="bg-gray-900 min-h-screen h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <div className="max-w-[90%] overflow-scroll w-full px-6 py-8 bg-gray-800 rounded-md shadow-md max-h-[80%]">
        <h2 className="text-3xl text-white font-semibold mb-6 ">Users</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {users?.map((user) => (
            <div
              key={user.id}
              style={{
                width: 200,
                height: 200,
                border: "solid",
                borderColor: "gray",
                margin: 5,
              }}
            >
              <div className="text-center">
                <img
                  src={
                    "https://react-bank-project.eapi.joincoded.com/" +
                    user.image
                  }
                  style={{ width: 100, height: 100 }}
                />
                <h3 className="text-lg text-white font-semibold mb-2">
                  {user.username}
                </h3>
                <h3 className="text-lg text-white font-semibold mb-2">
                  {user.balance} KWD
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
