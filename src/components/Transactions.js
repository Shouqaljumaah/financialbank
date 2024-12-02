import React from "react";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllTransactions } from "../api/getList";

const Transactions = () => {
  const [query, setQuery] = useState();
  const { data: transactions } = useQuery({
    queryKey: ["transactions"],
    queryFn: getAllTransactions,
  });

  return (
    <div className="bg-gray-900 min-h-screen h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <div className="text-center">
        <input
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Search"
        ></input>
        <button onClick={() => {}}>Search</button>
        <h3 className="text-lg text-white font-semibold mb-2">Filter:</h3>
        <h3 className="text-lg text-white font-semibold mb-2">All</h3>
        <h3 className="text-lg text-white font-semibold mb-2">Deposit</h3>
        <h3 className="text-lg text-white font-semibold mb-2">Withdraw</h3>
        <h3 className="text-lg text-white font-semibold mb-2">Transfer</h3>
        <h3 className="text-lg text-white font-semibold mb-2">By Date</h3>
      </div>

      <div className="max-w-[90%] overflow-scroll w-full px-6 py-8 bg-gray-800 rounded-md shadow-md max-h-[80%]">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {transactions?.map((transaction) => (
            <div
              key={transaction.id}
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "90%",
                height: 50,
                border: "solid",
                borderColor: "gray",
                margin: 5,
              }}
            >
              <p>{transaction.type}</p>
              <p>{transaction.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;

// export const Transactions = () => {
//   const [query, setQuery] = useState("");
//   return (
//     <div>
//       <input
//         onChange={(e) => {
//           setQuery(e.target.value);
//         }}
//         placeholder="Search"
//       ></input>
//       <button onClick={() => {}}>Search</button>
//     </div>
//   );
// };
