import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

function PrivateRoute({ children }) {
  const { state } = useContext(AppContext);
  if (!state.isAuth) {
    <Navigate to="/login" />;
  }
  return children;
}
export default PrivateRoute;
