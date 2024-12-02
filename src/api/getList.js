import React from "react";
import instance from "./index";

async function getAllTransactions() {
  const response = await instance.get("/mini-project/api/transactions/my");
  console.log(response);
  return response;
}

// const getList = async () => {
//   const response = await instance.get("http://mini-project/api/auth/users");
//   console.log(response);
//   return response;
// };
export { getAllTransactions };
//   <div>
//     {/* {" "}
//     <link to="/Users"> Users</link> */}
//   </div>
// //
