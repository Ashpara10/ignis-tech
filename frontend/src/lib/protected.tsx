import React, { useEffect } from "react";
import { redirect, useLocation, useNavigate } from "react-router-dom";

const Protected = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const user = typeof window !== "undefined" && localStorage.getItem("token");
  console.log({ user });
  useEffect(() => {
    if (pathname === "/" && !user) {
      navigate("/");
    } else if (pathname.includes("/auth") && user) {
      navigate("/");
    }
  }, [pathname]);
  return children;
};

export default Protected;
