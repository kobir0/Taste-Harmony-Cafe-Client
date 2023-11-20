// @ts-nocheck
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const handleSocialLogin = (media) => {
    media()
      .then(() => {
        toast.success("Registration has been successful");
        Navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("Registration failed");
      });
  };
  return (
    <>
      <div className="divider">Continue With</div>
      <div className="text-center">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-outline btn-sm"
        >
          <FcGoogle />
          Google
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
