import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="relative h-screen w-screen bg-greeting bg-cover lg:bg-center bg-no-repeat">
      {/* Overlay */}
      <div className="absolute inset-0 z-10"></div>

      {/* Content container */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-purple-800 text-[48px] max-sm:text-[25px] max-sm:mt-[80px] font-extrabold mb-4">
          Welcome to Heart Blog!
        </h1>
        <p className="font-light italic text-pink-500 text-[24px] max-sm:text-[20px] mb-6">
          &quot;A space to explore your emotions, share your stories, and hear
          from others.&quot;
        </p>
        <p className="text-pink-600 font-bold text-[18px] mb-8">
          Join our community of passionate writers and readers today!
        </p>
        <Link href="/view-post">
          <Button className="bg-purple-960 rounded-full bg-yellow-300 hover:bg-yellow-400 p-4 text-white">
            Explore Blogs
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
