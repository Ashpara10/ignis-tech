import React from "react";
import { Tevent } from "./event-feed";
import { CiShare2, CiHeart } from "react-icons/ci";

const EventCard = ({ data }: { data: Tevent }) => {
  return (
    <div className="max-w-md hover:shadow-md shadow-black/60 hover:-translate-y-3 hover:translate-x-2 transition-all rounded-2xl border border-gray-300/80 group overflow-hidden min-h-[250px] w-full relative flex flex-col">
      <div className="relative rounded-t-2xl">
        <img src={data?.image} className="group-hover:saturate-50" />
        <div className="group-hover:flex hidden absolute bottom-2 items-center gap-x-2 right-2">
          <span className="bg-white  p-2 rounded-full text-gray-900">
            <CiHeart className="size-5" />
          </span>
          <span className="bg-white  p-2 rounded-full text-gray-900">
            <CiShare2 className="size-5" />
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start px-3 py-4">
        <span className="w-full text-left text-xl leading-tight font-semibold tracking-tighter">
          {data?.event_name}
        </span>
        <div className="w-full mt-2 flex items-center justify-start">
          <span className="text-sm px-3 py-1 rounded-full border border-gray-400/80 text-black font-medium ">
            {new Date().toLocaleTimeString()}
          </span>
        </div>
        <p className="text-black/80 px-1 mt-2 text-sm">
          {data?.body.slice(0, 120)}..
        </p>
      </div>
    </div>
  );
};

export default EventCard;
