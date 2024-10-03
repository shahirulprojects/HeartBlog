import Metric from "@/components/Metric";
import { getPostById } from "@/lib/actions/post.action";
import { formatNumber, getTimeStamp } from "@/lib/utils";
import { URLProps } from "@/types";
import Image from "next/image";
import React from "react";

const Page = async ({ params }: URLProps) => {
  const result = await getPostById({ postId: params.id }); // the params is coming from the url bar
  return (
    <>
      <div className="flex-start w-full flex-col">
        <div className="flex w-full flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2">
          <Image
            src={result.author.picture}
            className="rounded-full"
            width={35}
            height={35}
            alt="profile"
          />
          <p className="paragraph-semibold text-black">{result.author.name}</p>
        </div>
        <h2 className="h2-semibold text-black mt-3.5 w-full text-left">
          {result.title}
        </h2>
      </div>

      <div className="text-black mb-8 mt-5 flex flex-wrap gap-4">
        <Metric
          imgUrl="/icons/clock.svg"
          alt="clock icon"
          value={` Asked ${getTimeStamp(result.createdAt)}`}
          title=""
          textStyles="small-medium text-black"
        />
        <Metric
          imgUrl="/icons/eye.svg"
          alt="eye"
          value={formatNumber(result.views)}
          title="Views"
          textStyles="small-medium text-black"
        />
      </div>

      <div className=" mt-7 w-full rounded-2xl px-7 py-10 ">
        {result.content}
      </div>
    </>
  );
};

export default Page;
