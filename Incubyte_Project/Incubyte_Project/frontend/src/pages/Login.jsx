import { useState } from "react";
import { login } from "../api/api";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(data);
    localStorage.setItem("token", res.data.token);
    alert("Login Successful");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Email"
        onChange={(e) => setData({ ...data, email: e.target.value })} />
      <input type="password" placeholder="Password"
        onChange={(e) => setData({ ...data, password: e.target.value })} />
      <button>Login</button>
    </form>
  );
}
