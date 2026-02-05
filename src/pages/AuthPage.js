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
    <div className="w-full flex items-center justify-center px-4"
         style={{ minHeight: "calc(100vh - 80px)", paddingTop: "40px" }}>
      {isLogin ? (
        <Login setIsLogin={setIsLogin} />
      ) : (
        <Register setIsLogin={setIsLogin} />
      )}
    </div>
  );
};

export default AuthPage;
