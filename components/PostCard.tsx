import { formatNumber, getTimeStamp } from "@/lib/utils";
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

const PostCard = ({ _id, title, author, views, createdAt }: PostProps) => {
  // const backgroundColor = getRandomColor(); // Get a random background color

  return (
    <div className="flex-row">
      <div
        className="mt-3 rounded-[50px] p-9 sm:px-11 bg-purple-300 outline-dashed outline-purple-600 w-[400px]"
        // style={{ backgroundColor }} // Apply the random background color
      >
        <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
          <div>
            <span className=" text-white line-clamp-1 flex sm:hidden">
              {getTimeStamp(createdAt)}
            </span>
            <Link href={`/post/${_id}`}>
              <h3 className="text-white font-bold line-clamp-1 flex-1">
                {title}
              </h3>
            </Link>
          </div>
        </div>

        <div className="mt-6 w-full gap-3">
          <Metric
            imgUrl={author.picture}
            alt="user"
            value={author.name}
            title={`• wrote ${getTimeStamp(createdAt)}`}
            isAuthor
            textStyles="text-white"
          />
          <div className="items-center gap-3 max-sm:flex-wrap max-sm:justify-start">
            <Metric
              imgUrl="/icons/eye.svg"
              alt="eye"
              value={formatNumber(views)}
              title="Views"
              textStyles="text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
