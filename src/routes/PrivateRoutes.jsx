import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../firebase";

export default function PrivateRoutes() {
  const [user, loading] = useAuthState(auth);

  if (loading)
    return (
      <p className="mt-12 mx-24 text-3xl font-bold text-center">
        User info loading...
      </p>
    );

  return <> {user ? <Outlet /> : <Navigate to="/login" />} </>;
}
