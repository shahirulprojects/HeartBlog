"use client";
import React from "react";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ViewPost = () => {
  const { userId } = useAuth();
  return (
    <div className="text-[30px] mt-[-35px] ml-[-20px] max-sm:ml-[10px] max-sm:mt-[-50px]">
      <h1 className="font-extrabold tracking-tighter text-purple-700 mb-[20px]">
        Explore Blogs
      </h1>
      {userId && (
        <Link href="/create-post">
          <Button className="bg-purple-960 rounded-full bg-[#7A1CAC] hover:bg-[#640D5F] p-7 fixed bottom-5 right-5">
            <Image src="/icons/pen.svg" alt="pen" width={30} height={30} />
          </Button>
        </Link>
      )}
    </div>
  );
};

export default ViewPost;
