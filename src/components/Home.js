import React from "react";
import { Navigate } from "react-router-dom";
import { checkToken } from "../api/storge";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deposit, getUser, withdraw } from "../api/auth";

const Home = () => {
  const [balance, setBalance] = useState(0); // Initial balance is 0
  const [amount, setAmount] = useState(""); // Amount entered by the user
  const [transactionType, setTransactionType] = useState("deposit"); // "deposit" or "withdraw"
  const queryClient = useQueryClient();
  // State to track the balance and input

  // Function to handle the transaction
  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: getUser,
  });
  const value = parseFloat(amount);

  const handleTransaction = () => {
    if (transactionType === "deposit") {
      depositMutate();
      // return setBalance(balance + value); // Increase the balance
    } else if (transactionType === "withdraw") {
      withdrawMutate();
      // setBalance(balance - value); // Decrease the balance
    }
    // setAmount(""); // Clear the input field
  };
  const { mutate: depositMutate } = useMutation({
    mutationKey: ["deposit"],
    mutationFn: () => deposit({ amount: amount }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      setAmount("");
    },
  });

  const { mutate: withdrawMutate } = useMutation({
    mutationKey: ["withdraw"],
    mutationFn: () => withdraw({ amount: amount }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      setAmount("");
    },
  });
  if (!checkToken()) {
    return <Navigate to="/" />;
  }
  console.log(profile?.balance);
  return (
    // <Balance />

    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "400px",
        margin: "20px auto",
        textAlign: "center",
      }}
    >
      <h2>Your Available Balance:</h2>

      <h1 style={{ color: "green" }}>{profile?.balance.toFixed(2)} KWD</h1>

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <label>
            <input
              type="radio"
              name="transactionType"
              value="deposit"
              checked={transactionType === "deposit"}
              onChange={() => setTransactionType("deposit")}
            />
            Deposit
          </label>

          <label style={{ marginLeft: "20px" }}>
            <input
              type="radio"
              name="transactionType"
              value="withdraw"
              checked={transactionType === "withdraw"}
              onChange={() => setTransactionType("withdraw")}
            />
            Withdraw
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="amount">Amount:</label>

          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            style={{
              marginLeft: "10px",
              padding: "5px",
              width: "70%",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />
        </div>

        <button
          onClick={handleTransaction}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Home;
