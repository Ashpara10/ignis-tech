import React from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const path = useLocation();
  const isAuth = typeof window !== "undefined" && localStorage.getItem("token");
  const logout = () => {
    const user =
      typeof window !== "undefined" && localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <header className="w-full z-40 fixed top-0 bg-white border-b border-gray-200 flex items-center justify-center px-4 py-2">
      <nav className="w-full flex items-center justify-between">
        <div className="box gap-x-4">
          <span className="text-orange-600  text-3xl font-black">
            Eventbrite
          </span>
          <div className="box gap-x-2">
            <input
              type="text"
              className="border focus-within:outline-none px-4 py-2 border-gray-200 rounded-2xl  max-w-2xl w-full"
            />
            <button className="rounded-full border border-gray-200 p-2">
              <CiSearch className="size-7 " />
            </button>
          </div>
          <div className="box">
            <ul className="box gap-x-2 font-medium">
              <li
                onClick={() => navigate("/")}
                className={`hover:bg-gray-300/80  rounded-full px-3 py-1.5 ${
                  path.pathname === "/" && "bg-gray-300/60"
                }`}
              >
                Find Events
              </li>
              <li
                onClick={() => navigate("/events")}
                className={`hover:bg-gray-300/80  rounded-full px-3 py-1.5 ${
                  path.pathname === "/events" && "bg-gray-300/60"
                }`}
              >
                Your Events
              </li>
            </ul>
          </div>
        </div>
        <div>
          {isAuth && (
            <button
              onClick={() => logout()}
              className="px-4 py-2 text-lg rounded-full bg-orange-500 text-white font-medium"
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
