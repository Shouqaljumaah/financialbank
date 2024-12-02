import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/auth";

const User = () => {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });
  return (
    <div
      key={user?.id}
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
          src={"https://react-bank-project.eapi.joincoded.com/" + user?.image}
          style={{ width: 100, height: 100 }}
        />
        <h3 className="text-lg text-white font-semibold mb-2">
          {user?.username}
        </h3>
        <h3 className="text-lg text-white font-semibold mb-2">
          {user?.balance} KWD
        </h3>
      </div>
    </div>
  );
};
export default User;
