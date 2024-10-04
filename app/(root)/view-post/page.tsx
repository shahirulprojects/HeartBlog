import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import PostCard from "@/components/PostCard";
import { getPosts } from "@/lib/actions/post.action";
import { auth } from "@clerk/nextjs/server";
import { SearchParamsProps } from "@/types";

export default async function ViewPost({ searchParams }: SearchParamsProps) {
  const result = await getPosts({
    searchQuery: searchParams.q,
    filter: searchParams.filter,
  });
  const { userId } = auth();
  return (
    <div className="text-[30px] mt-[-35px] ml-[-20px] max-sm:ml-[10px] max-sm:mt-[-50px]">
      <h1 className="font-extrabold tracking-tighter text-purple-700 mb-[20px]">
        Explore Blogs
      </h1>
      <div className="text-black mt-10 flex flex-wrap w-full grid-cols-3 gap-[100px] max-sm:gap-5 justify-center items-center">
        {/* Looping through posts */}
        {/* checks whether there is a post or not.If there is a post,it will map it to the PostCard component */}
        {
          result.posts.length > 0
            ? result.posts.map((post) => (
                <PostCard
                  key={post._id}
                  _id={post._id}
                  title={post.title}
                  author={post.author}
                  views={post.views}
                  createdAt={post.createdAt}
                />
              ))
            : ""
          // <div className="min-h-screen justify-center items-center flex flex-col">
          //   <h3 className="text-black">It is a ghost town here..</h3>
          //   <Link href="/create-post">
          //     <Button className="mt-4 rounded-2xl bg-[#7E60BF] hover:bg-[#433979]">
          //       Break The Silence!
          //     </Button>
          //   </Link>
          // </div>
        }
      </div>
      {userId && (
        <Link href="/create-post">
          <Button className="rounded-full bg-[#7A1CAC] hover:bg-[#640D5F] p-7 fixed bottom-5 right-5">
            <Image src="/icons/pen.svg" alt="pen" width={30} height={30} />
          </Button>
        </Link>
      )}
    </div>
  );
}
