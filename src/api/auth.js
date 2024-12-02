import instance from "./index";
import { setToken } from "./storge";

const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const register = async (userInfo) => {
  const formData = new FormData();
  for (const key in userInfo) {
    formData.append(key, userInfo[key]);
  }
  const response = await instance.post(
    "/mini-project/api/auth/register",
    formData
  );

  setToken(response.token);
  return response.token;
};
const login = async (userInfo) => {
  const response = await instance.post(
    "/mini-project/api/auth/login",
    userInfo
  );

  setToken(response.token);
  return response.token;
};

const getAllUsers = async () => {
  const data = await instance.get("/mini-project/api/auth/users");
  return data;
};

const getAllTransactions = async () => {
  const data = await instance.get("/mini-project/api/transactions");
  return data;
};

const getUser = async () => {
  const data = await instance.get("/mini-project/api/auth/me");
  return data;
};
const deposit = async (amount) => {
  const data = await instance.put(
    "/mini-project/api/transactions/deposit",
    amount
  );
  return data;
};
const withdraw = async (amount) => {
  const data = await instance.put(
    "/mini-project/api/transactions/withdraw",
    amount
  );
  return data;
};

// export { register, login };
// const checkToken = () => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     const decode = jwt_decode(token);
//     const cureentTime = Date.now() / 1000;
//     if (decode.exp < cureentTime) {
//       localStorage.removeItem("token");
//       return false;
//     }
//     return true;
//   }
//   return false;
// };
export {
  register,
  login,
  getAllUsers,
  storeToken,
  getAllTransactions,
  getUser,
  deposit,
  withdraw,
};
