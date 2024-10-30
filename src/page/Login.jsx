import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginWithEmailAndPassword, signInWithGoogle } from "../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      await loginWithEmailAndPassword(email, password);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginWithGoogle = async (event) => {
    event.preventDefault();
    try {
      await signInWithGoogle();
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-12 mx-24 flex flex-col items-center ">
      <h2 className="text-3xl font-bold mb-8">Login</h2>
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
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          className="bg-green-500 border rounded-md p-2 m-1"
          type="submit"
          onClick={handleLoginWithGoogle}
        >
          Login with google
        </button>
      </form>
      <p className="mt-5">
        No Account ?{" "}
        <NavLink className="underline" to="/register">
          Registration
        </NavLink>
      </p>
      <p className="mt-5">
        Forgot password ?{" "}
        <NavLink className="underline" to="/reset">
          Please reset password
        </NavLink>
      </p>
    </div>
  );
}
