import { useEffect, useState } from "react";
import EventCard from "./event-card";
import { Tevent, getAllEvents } from "../lib/utils";
import toast from "react-hot-toast";

const EventFeed = () => {
  const [data, setData] = useState<Tevent[]>();
  const getData = async () => {
    const res = await getAllEvents();
    res?.error && toast.error(JSON.stringify(res?.error));
    setData(res?.data as Tevent[]);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="w-full flex items-center justify-center min-h-screen">
      <div className="grid gap-3 w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4  px-5 my-6">
        {data?.map((e, i) => {
          return <EventCard key={i} data={e} />;
        })}
      </div>
    </div>
  );
};

export default EventFeed;
