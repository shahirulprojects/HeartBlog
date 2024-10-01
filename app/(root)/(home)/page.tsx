"use client";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  const { userId } = useAuth();
  return (
    <div className="relative min-h-screen">
      {" "}
      {/* Content container */}
      <div className="text-[30px] tracking-tighter font-extrabold max-sm:ml-[10px] max-sm:mt-[-50px] mt-[-35px] ml-[-20px] text-purple-950">
        Home
      </div>
      {userId ? (
        <>
          <Link href="/create-post">
            <Button className="bg-purple-960 rounded-full bg-[#7A1CAC] hover:bg-[#640D5F] p-7 fixed bottom-5 right-5">
              {" "}
              {/* Changed absolute to fixed */}
              <Image src="/icons/pen.svg" alt="pen" width={30} height={30} />
            </Button>
          </Link>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
