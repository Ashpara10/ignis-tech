import { CiShare2, CiHeart } from "react-icons/ci";
import { BASE_URL, Tevent, token, toogleLike } from "../lib/utils";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

const EventCard = ({ data }: { data: Tevent }) => {
  const [liked, setLiked] = useState(data?.is_liked);

  useEffect(() => {
    toogleLike(data?.id as number);
  }, [liked]);

  return (
    <div className="max-w-md hover:shadow-md max-h-[450px] shadow-black/60 hover:-translate-y-3 hover:translate-x-2 transition-all rounded-2xl border border-gray-300/80 group overflow-hidden min-h-[250px] w-full relative flex flex-col">
      <div className="relative rounded-t-2xl">
        <img src={data?.image as string} className="group-hover:saturate-50" />
        <div className="group-hover:flex hidden absolute bottom-2 items-center gap-x-2 right-2">
          <span
            onClick={() => setLiked(!liked)}
            className="bg-white  p-2 rounded-full text-gray-900"
          >
            {liked ? (
              <FaHeart className="text-red-600 size-5" />
            ) : (
              <CiHeart className="size-5" />
            )}
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
        <p className="w-full text-left text-black/80 px-1 mt-2 text-sm">
          {data?.data.slice(0, 120)}..
        </p>
      </div>
    </div>
  );
};

export default EventCard;
