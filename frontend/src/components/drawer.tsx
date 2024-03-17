import React, { useState } from "react";
import { LuUpload, LuX } from "react-icons/lu";

type Tevent = {
  event_name: string;
  location: string;
  time: Date | null;
  body: string;
  user_id?: string;
  image: File | null;
};
const Drawer = ({ open, setOpen }: { open: boolean; setOpen: any }) => {
  const [event, setEvent] = useState<Tevent>({
    event_name: "",
    body: "",
    image: null,
    location: "",
    time: null,
  });
  return (
    <aside
      className={`${
        open ? "translate-x-0" : "translate-x-[500px]"
      } fixed border-l flex flex-col items-center justify-start border-gray-300/80 bg-white top-0 bottom-0 right-0 min-h-screen min-w-[350px] z-50 transition-all `}
    >
      <div className="w-full flex border-b border-gray-300/80 px-3 py-2 my-2 items-center justify-between">
        <span className="tracking-tight text-2xl font-bold">Create Event</span>
        <button className="" onClick={() => setOpen(false)}>
          <LuX />
        </button>
      </div>
      <div className="w-full flex flex-col px-4 gap-y-3">
        {event?.image && (
          <div className="relative max-w-sm max-h-[300px] rounded-md overflow-hidden group">
            <button
              onClick={() => setEvent({ ...event, image: null })}
              className="absolute top-3 right-3 bg-white group-hover:visible invisible rounded-full text-black p-1.5"
            >
              <LuX />
            </button>
            <img src={URL.createObjectURL(event?.image)} />
          </div>
        )}
        <label className="font-medium flex items-center justify-center border border-gray-300/80 py-2 rounded-lg gap-y-1.5">
          <LuUpload /> Upload Image
          <input
            type="file"
            onChange={(e) =>
              e.target.files &&
              setEvent({ ...event, image: e.target.files[0] as File })
            }
            className="hidden"
          />
        </label>
        <label className="font-medium flex flex-col gap-y-1.5">
          * Event name
          <input className="form-input" />
        </label>
        <label className="font-medium flex flex-col gap-y-1.5">
          * Content
          <textarea rows={6} className="form-input" />
        </label>
        <div className="box gap-3">
          <label className="w-full font-medium flex flex-col gap-y-1.5">
            * Location
            <input type="text" id="time-input" className="form-input" />
          </label>
          <label className="w-full font-medium flex flex-col gap-y-1.5">
            * Time
            <input type="time" id="time-input" className="form-input" />
          </label>
        </div>
        <button className="w-full bg-orange-500 text-lg font-medium px-4 py-2 rounded-xl text-white box gap-2">
          Create Event
        </button>
      </div>
    </aside>
  );
};

export default Drawer;
