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
const PostCard = ({ _id, title, author, views, createdAt }: PostProps) => {
  return (
    <div className="text-black mt-3 rounded-[50px] p-9 sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className=" text-black line-clamp-1 flex sm:hidden">
            {getTimeStamp(createdAt)}
          </span>
          <Link href={`/post/${_id}`}>
            <h3 className="text-black line-clamp-1 flex-1">{title}</h3>
          </Link>
        </div>
      </div>

      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          imgUrl={author.picture}
          alt="user"
          value={author.name}
          title={`• wrote ${getTimeStamp(createdAt)}`}
          isAuthor
          textStyles="text-black"
        />
        <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start">
          <Metric
            imgUrl="/icons/eye.svg"
            alt="eye"
            value={formatNumber(views)}
            title="Views"
            textStyles="text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
