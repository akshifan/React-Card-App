import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = () => {
  const success = login(form.email, form.password);

    if (success) {
      alert("Login Successful");
      const lastPath = localStorage.getItem("lastPath") || "/app/home";
      navigate(lastPath);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-[hsl(0,0%,82%)] bg-[hsl(0,0%,91%)] shadow-[0_5px_10px_hsla(0,0%,50%,0.727)] landing gap-4 m-8 p-8 login">
      <h1 className="text-xl font-bold">Don't have account? Signup</h1>
      <h1 className="text-xl font-bold">Dummy Login</h1>
      <input placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})}/>
      <input type="password" placeholder="Password" onChange={(e) => setForm({...form, password: e.target.value})}/>
      <button className="border border-[hsl(0,0%,92%)] bg-[hsl(0,0%,95%)] shadow-[0_5px_10px_hsla(0,0%,50%,0.727)] p-3 rounded-2xl"
      onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;