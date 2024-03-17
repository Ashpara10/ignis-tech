import { useNavigate } from "react-router-dom";
import { LuPlus } from "react-icons/lu";
import { useEffect, useState } from "react";
import Drawer from "../components/drawer";
import { BASE_URL, Tevent, token } from "../lib/utils";
import EventCard from "../components/event-card";
import { useQuery } from "@tanstack/react-query";

const MyEventFeed = () => {
  // const [events, setEvents] = useState<Tevent[]>([]);
  const { data: events, error } = useQuery({
    queryKey: ["my-events"],
    queryFn: async () => {
      const resp = await fetch(`${BASE_URL}/events/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: ` Bearer ${token}`,
        },
      });
      const res = await resp.json();
      return res;
    },
  });
  console.log({ events, error });

  return (
    <div className="w-full min-h-screen gap-3 my-10 px-4  grid grid-cols-4">
      {events?.length === 0 && (
        <span className="text-lg font-medium my-4 w-full text-center">
          You have no Active events
        </span>
      )}
      {events?.map((data: Tevent, i: number) => {
        return <EventCard data={data} key={i} />;
      })}
    </div>
  );
};

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
          <MyEventFeed />
        </>
      )}
    </div>
  );
};

export default Events;
