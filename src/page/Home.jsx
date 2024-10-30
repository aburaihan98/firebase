import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Home() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  if (loading)
    return (
      <div className="mt-12 mx-24 text-3xl font-bold text-center">
        User info loading...
      </div>
    );
  return (
    <div className="mt-12 mx-24 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-8">Home page</h2>
      <h3 className="text-xl font-bold ">Welcome, {user?.email}</h3>
      <button
        className="bg-slate-400 border rounded-md p-2 m-3"
        type="submit"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
