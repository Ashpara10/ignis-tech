import { useNavigate } from "react-router-dom";
import EventFeed from "../components/event-feed";
import { LuPlus } from "react-icons/lu";
import { useState } from "react";
import Drawer from "../components/drawer";

const Events = () => {
  const navigate = useNavigate();
  const isAuth = typeof window !== "undefined" && localStorage.getItem("token");
  const [open, setOpen] = useState(false);
  return (
    <div className="box min-h-screen flex-col gap-3 mt-36 ">
      {!isAuth ? (
        <>
          <span className="text-lg">
            Register to create and access your events
          </span>
          <button
            onClick={() => navigate("/auth")}
            className="bg-orange-500 px-4 py-2 rounded-full text-white"
          >
            Signup
          </button>
        </>
      ) : (
        <>
          <div className="w-full flex items-center px-4 justify-between">
            <span className="text-3xl mx-2 font-bold tracking-tight">
              Manage Your Events
            </span>
            <button
              onClick={() => setOpen(true)}
              className="bg-orange-500 text-lg font-medium px-4 py-2 rounded-full text-white box gap-2"
            >
              <LuPlus />
              Create Event
            </button>
          </div>

          <Drawer open={open} setOpen={setOpen} />
          {open && (
            <div className="fixed bg-black/70 top-0 bottom-0 right-0 left-0 z-40 " />
          )}
          <EventFeed />
        </>
      )}
    </div>
  );
};

export default Events;
