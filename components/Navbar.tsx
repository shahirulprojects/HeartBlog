"use client";
import { Heart } from "lucide-react";
import Link from "next/link";
import React from "react";
// import MobileNav from "./MobileNav";
import { SignedIn, useAuth, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Image from "next/image";

const Navbar = () => {
  const { userId } = useAuth();
  return (
    <nav className="flex justify-between fixed z-50 w-full px-6 py-4 lg:px-10 bg-[#FAF9F6] border-b border-gray-300 shadow">
      <Link href="/view-post" className="flex items-center gap-1">
        <Heart
          width={50}
          height={50}
          className=" text-[#A594F9] fill-[#A594F9]"
        />
        <div className="flex items-center justify-center">
          <p className="text-[35px] text-[#A594F9] max-sm:hidden font-thin tracking-tighter">
            Heart Blog
          </p>
        </div>
      </Link>

      <div className="flex items-center gap-5 ml-auto">
        <SignedIn>
          <UserButton />
        </SignedIn>
        {/* <MobileNav /> */}
      </div>

      {userId ? (
        ""
      ) : (
        <div className="flex gap-5 justify-center items-center">
          {/* <Link href="/sign-up">
            <Button className="bg-[#FAF9F6] hover:bg-[#FAF9F6] border-none shadow-none text-black hover:text-purple-400 font-extralight">
              Sign Up
            </Button>
          </Link> */}
          <Link href="/sign-in">
            <Button className="max-sm:hidden mr-[-30px] text-[18px] bg-[#FAF9F6] hover:bg-[#FAF9F6] border-none shadow-none text-[#A594F9] hover:text-purple-600  font-extralight">
              Log In
            </Button>
          </Link>
          <Link href="/sign-in">
            <Button className=" lg:hidden bg-[#A594F9] hover:bg-purple-600 w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/icons/account.svg"
                alt="login"
                width={20}
                height={20}
              />
              <span className=" text-purple-800 max-lg:hidden">Log In</span>
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
