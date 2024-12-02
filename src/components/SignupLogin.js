import React, { useContext, useState } from "react";
import "./SignupLogin.css";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { login, register } from "../api/auth";
const SignupLogin = () => {
  const [query, setQuery] = useState("Sign Up");
  const [useInfo, setuseInfo] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const { mutate: registerMutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(useInfo),
    onSuccess: () => {
      navigate("/home");
    },
  });

  const { mutate: loginMutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(useInfo),
    onSuccess: () => {
      navigate("/home");
    },
  });

  const handleSubmit = () => {
    // e.preventDefault();
    console.log("first");
    if (query === "Login") {
      loginMutate();
    } else {
      registerMutate();
    }
  };

  return (
    <>
      <div className="container">
        <img
          className="pic"
          src="https://i.pinimg.com/736x/13/f5/1e/13f51ee509396550d2c01f7b43150988.jpg"
        ></img>
        <div className="text"> {query}</div>
        {/* <div className="inputs"></div> */}
        <div className="input">
          <input
            onChange={(e) => {
              setuseInfo({ ...useInfo, username: e.target.value });
            }}
            type="text"
            placeholder="Username"
          ></input>
        </div>
        <div className="input">
          <div className="input">
            <input
              onChange={(e) => {
                setuseInfo({ ...useInfo, password: e.target.value });
              }}
              type="Password"
              placeholder="Password"
            ></input>
          </div>
        </div>
        {query === "Sign Up" ? (
          <div
            className="forget-password"
            onClick={() => {
              setQuery("Login");
            }}
          >
            Already have an account? <span>Login !</span>
          </div>
        ) : (
          <div
            className="forget-password"
            onClick={() => {
              setQuery("Sign Up");
            }}
          >
            Don't have an account? <span>Sign Up !</span>
          </div>
        )}
        <div className="submit-container">
          <button
            className={query === "Login" ? "submit gray" : "submit"}
            onClick={() => handleSubmit()}
          >
            {query}
          </button>
        </div>
      </div>
    </>
  );
};

export default SignupLogin;
