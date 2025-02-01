import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import { LoaderData } from "../context/loaderContext";
import Loader from "../components/Loader/Loader";
const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { isLoading } = LoaderData();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="bg-black flex items-center justify-center my-auto h-[100%]">
      {isLogin ? (
        <Login setIsLogin={setIsLogin} />
      ) : (
        <Register setIsLogin={setIsLogin} />
      )}
      {/* <div className="absolute top-5 right-5">
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
        >
          Switch to {isLogin ? "Register" : "Login"}
        </button>
      </div> */}
    </div>
  );
};

export default AuthPage;
