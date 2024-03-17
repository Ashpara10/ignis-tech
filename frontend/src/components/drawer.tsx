import React, { useState } from "react";
import { LuUpload, LuX } from "react-icons/lu";
import { BASE_URL, Tevent, token } from "../lib/utils";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../App";

const Drawer = ({ open, setOpen }: { open: boolean; setOpen: any }) => {
  const { mutate } = useMutation({
    mutationFn: async ({ event }: { event: Tevent }) => {
      const resp = await fetch(`${BASE_URL}/events/create/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: ` Bearer ${token}`,
        },
        body: JSON.stringify(event),
      });
      const res = await resp.json();
      return res;
    },
  });
  const [event, setEvent] = useState<Tevent>({
    event_name: "",
    data: "",
    image: "",
    location: "",
  });
  const onChange = (e: any) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };
  const handleImage = async (e: any) => {
    setEvent({
      ...event,
      image: URL.createObjectURL(e.target.files[0] as File),
    });
  };
  return (
    <aside
      className={`${
        open ? "translate-x-0" : "translate-x-[500px]"
      } fixed border-l overflow-y-scroll py-5 flex flex-col items-center justify-start border-gray-300/80 bg-white top-0 bottom-0 right-0 min-h-screen min-w-[350px] z-50 transition-all `}
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
            <img src={event?.image as string} />
          </div>
        )}
        <label className="font-medium flex items-center justify-center border border-gray-300/80 py-2 rounded-lg gap-y-1.5">
          <LuUpload /> Upload Image
          <input
            type="file"
            onChange={(e) => e.target.files && handleImage(e)}
            className="hidden"
          />
        </label>
        <hr className="w-full text-gray-300/80" />
        <label className="font-medium flex flex-col  gap-y-1.5">
          * Image link
          <input
            type="text"
            name="image"
            onChange={onChange}
            className="form-input"
          />
        </label>
        <label className="font-medium flex flex-col gap-y-1.5">
          * Event name
          <input
            onChange={onChange}
            value={event?.event_name}
            className="form-input"
            name="event_name"
          />
        </label>
        <label className="font-medium flex flex-col gap-y-1.5">
          * Content
          <textarea
            onChange={onChange}
            value={event?.data}
            rows={6}
            name="data"
            className="form-input"
          />
        </label>

        <label className="w-full font-medium flex flex-col gap-y-1.5">
          * Location
          <input
            onChange={onChange}
            value={event?.location}
            type="text"
            name="location"
            className="form-input"
          />
        </label>

        <button
          onClick={async () => {
            console.log({ event });
            mutate(
              { event },
              {
                onError(error) {
                  toast.error(error?.message);
                },
                onSuccess(data) {
                  console.log({ data });
                  toast.success("Event added");
                  queryClient.refetchQueries({ queryKey: ["my-events"] });
                  setOpen(false);
                },
              }
            );
          }}
          className="w-full bg-orange-500 text-lg font-medium px-4 py-2 rounded-xl text-white box gap-2"
        >
          Create Event
        </button>
      </div>
    </aside>
  );
};

export default Drawer;
