import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { resetPassword } from "../firebase";

export default function Reset() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async (event) => {
    event.preventDefault();
    try {
      const response = await resetPassword(email);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-12 mx-24 flex flex-col items-center ">
      <h2 className="text-3xl font-bold mb-8">Reset your password </h2>
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
        <button
          className="bg-slate-400 border rounded-md p-2 m-1"
          type="submit"
          onClick={handleResetPassword}
        >
          Reset password reset email
        </button>
      </form>
      <p className="mt-5">
        Don't you Have an Account ?{" "}
        <NavLink className=" underline" to="/register">
          Register
        </NavLink>
      </p>
    </div>
  );
}
