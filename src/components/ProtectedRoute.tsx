import { Navigate } from "react-router-dom";
import { GetStatus } from "../fetch/GetStatus";
export const ProtectedRoute = ({ children }: any) => {
  const { status } = GetStatus();
  if (status === false) {
    return <Navigate to={"/login"} />;
  }
  return children;
};
