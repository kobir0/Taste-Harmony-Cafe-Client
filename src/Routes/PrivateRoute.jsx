// @ts-nocheck
import loadingAnimation from "../assets/loadinAnimation.json";
import propTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Lottie from "lottie-react";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="w-[400px] flex ml-96 items-center h-screen">
        <Lottie animationData={loadingAnimation}></Lottie>
      </div>
    );
  }
  if (currentUser) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
  children: propTypes.mode,
};

export default PrivateRoute;
