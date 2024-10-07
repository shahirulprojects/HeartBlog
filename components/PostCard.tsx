// import { formatNumber, getTimeStamp } from "@/lib/utils";
import { getTimeStamp } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Metric from "./Metric";

interface PostProps {
  _id: string;
  title: string;
  author: {
    _id: string;
    name: string;
    picture: string;
    clerkId: string;
  };
  views: number;
  createdAt: Date;
}

// const colors = ["#770737", "#800080", "	#630330", "#AA336A", "	#9F2B68"]; // Add your desired colors here
// // "#00ffd2", "#fdff00", "	#ff00f4", "#ff3155", "#50ff40"
// const getRandomColor = () => {
//   const randomIndex = Math.floor(Math.random() * colors.length);
//   return colors[randomIndex];
// };

const PostCard = ({ _id, title, author, createdAt }: PostProps) => {
  // const backgroundColor = getRandomColor(); // Get a random background color

  return (
    <Link href={`/post/${_id}`}>
      <div
        className="mt-3 rounded-[50px] p-9 sm:px-11 bg-blue-700 outline outline-black hover:bg-blue-800 w-[400px]"
        // style={{ backgroundColor }} // Apply the random background color
      >
        <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
          <div>
            <h3 className="text-white font-bold line-clamp-2 flex-1">
              {title}
            </h3>
          </div>
        </div>

        <div className="flex items-center justify-start mt-10">
          <Metric
            imgUrl={author.picture}
            alt="user"
            value={author.name}
            title={`• posted ${getTimeStamp(createdAt)}`}
            isAuthor
            textStyles="ml-[10px] lg:text-[14px] max-sm:text-[18px] font-medium leading-[18.2px] text-white"
          />
          <div className="max-sm:hidden">
            <span className=" text-white max-sm:text-[12px] line-clamp-1 flex sm:hidden">
              {getTimeStamp(createdAt)}
            </span>
          </div>
          {/* <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start">
            <Metric
              imgUrl="/icons/eye.svg"
              alt="eye"
              value={formatNumber(views)}
              title="Views"
              textStyles="text-[12px] font-medium leading-[15.6px] text-white"
            />
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
