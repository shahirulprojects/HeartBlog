/* eslint-disable no-unused-vars */
import Post from "@/components/Post";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const { userId } = auth(); // get the current userId from clerk

  if (!userId) redirect("/sign-in"); // if we dont currently have a userId,it will redirect to the sign in page

  const mongoUser = await getUserById({ userId }); // call the user server action and pass the userId

  return (
    <div className="text-[30px] mt-[-35px] ml-[-20px] max-sm:ml-[10px] max-sm:mt-[-50px]">
      <h1 className="font-extrabold tracking-tighter text-blue-700 mb-[20px]">
        Create Post
      </h1>

      <div className="mt-9">
        {/* pass the mongoUser to the Post form.It is always a good thing to use JSON.stringify things that we get because we dont know what they are */}
        <Post mongoUserId={JSON.stringify(mongoUser?._id)} />
      </div>
    </div>
  );
};

export default Page;
