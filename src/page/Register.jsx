import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { registerWithEmailAndPassword } from "../firebase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await registerWithEmailAndPassword(email, password);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-12 mx-24 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-8">Registration</h2>
      <form action="">
        <div className="border rounded-md p-2 m-1">
          <label htmlFor="email">Email</label>
          <input
            className="p-2 px-4 ml-4 rounded-3xl outline-none"
            type="email"
            id="email"
            value={email}
            placeholder="Enter email address"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="border rounded-md p-2 m-1">
          <label htmlFor="email">Password</label>
          <input
            className="p-2 px-4 ml-4 rounded-3xl outline-none"
            type="password"
            id="password"
            value={password}
            placeholder="Enter password"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button
          className="bg-slate-400 border rounded-md p-2 m-1"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      <p className="mt-5">
        Already Have an Account ?{" "}
        <NavLink className=" underline" to="/login">
          Login
        </NavLink>
      </p>
    </div>
  );
}
