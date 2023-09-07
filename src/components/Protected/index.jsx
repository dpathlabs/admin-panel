import { Navigate } from "react-router-dom";

const Protected = ({ user, children }) => {
  if (user == null) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default Protected;
