import Metric from "@/components/Metric";
import { getPostById } from "@/lib/actions/post.action";
// import { formatNumber, getTimeStamp } from "@/lib/utils";
import { getTimeStamp } from "@/lib/utils";
import { URLProps } from "@/types";
import Image from "next/image";
import React from "react";

const Page = async ({ params }: URLProps) => {
  const result = await getPostById({ postId: params.id }); // the params is coming from the url bar
  return (
    <>
      <div className="flex justify-start items-center w-full flex-col">
        <div className="flex w-full flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2">
          <div className="flex items-center justify-start gap-3">
            <Image
              src={result.author.picture}
              className="rounded-full"
              width={35}
              height={35}
              alt="profile"
            />
            <p className="text-[16px] font-semibold leading-[20.8px] text-black">
              {result.author.name}
            </p>
          </div>
        </div>
        <h2 className="text-[24px] font-semibold leading-[31.2px] text-black mt-3.5 w-full text-left">
          {result.title}
        </h2>
      </div>

      <div className="text-black mb-8 mt-5 flex flex-wrap gap-4">
        <Metric
          imgUrl="/icons/clock.svg"
          alt="clock icon"
          value={` Posted ${getTimeStamp(result.createdAt)}`}
          title=""
          textStyles="text-[12px] font-medium leading-[15.6px] text-black"
        />
        {/* <Metric
          imgUrl="/icons/eye.svg"
          alt="eye"
          value={formatNumber(result.views)}
          title="Views"
          textStyles="text-[12px] font-medium leading-[15.6px] text-black"
        /> */}
      </div>

      <div className=" text-black bg-[#FAF9F6] outline outline-blue-700 outline-1 mt-7 w-full rounded-2xl px-7 py-10 ">
        <div className="whitespace-pre-line text-justify leading-relaxed">
          {result.content}
        </div>
      </div>
    </>
  );
};

export default Page;
