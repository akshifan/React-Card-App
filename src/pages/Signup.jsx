import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });

  const handleSignup = () => {
    signup(form);
    alert("Account Created");
  };

  return (
    <div className="flex flex-col items-center gap-4 landing login rounded-2xl border border-[hsl(0,0%,82%)] bg-[hsl(0,0%,91%)] shadow-[0_5px_10px_hsla(0,0%,50%,0.727)] m-8 p-8">
      <h1 className="text-xl font-bold">Already have account? Login</h1>
      <h1 className="text-xl font-bold">Dummy Signup</h1>
      <input placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})}/>
      <input type="password" placeholder="Password" onChange={(e) => setForm({...form, password: e.target.value})}/>
      <button className="border border-[hsl(0,0%,92%)] bg-[hsl(0,0%,95%)] shadow-[0_5px_10px_hsla(0,0%,50%,0.727)] p-3 rounded-2xl"
       onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default Signup;