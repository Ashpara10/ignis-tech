import { useEffect, useState } from "react";
import EventCard from "./event-card";

export type Tevent = {
  event_name: string;
  body: string;
  time: string;
  location: string;
  image: string;
  user_id: {
    username: string;
  };
  is_liked: boolean;
};

const EventFeed = () => {
  const [data, setData] = useState<Tevent[]>();
  const getData = async () => {
    const res = await fetch("../../data.json");
    const data = await res.json();
    setData(data);
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
