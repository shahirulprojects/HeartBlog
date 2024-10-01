"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { SignedOut, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

const LeftSidebar = () => {
  const { userId } = useAuth();
  const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0 flex h-screen items-center justify-between p-6 w-fit flex-col text-black bg-[#A594F9] max-sm:hidden lg:w-[264px] overflow-y-hidden">
      <div className="flex flex-1 flex-col justify-start items-center mt-[100px] min-h-screen gap-6 ">
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          if (item.route === "/create-post") {
            if (!userId) {
              return null;
            }
          }
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                "flex gap-4 items-center justify-start w-full p-4 rounded-lg",
                {
                  "w-[200px]": !userId,
                  "w-full": userId,
                  "bg-blue-200 text-white": isActive,
                }
              )}
            >
              <Image
                src={item.imgUrl}
                alt={item.label}
                width={30}
                height={30}
                className={isActive ? "invert" : ""}
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
      <SignedOut>
        <div className="flex flex-col gap-3">
          <Link href="/sign-in">
            <Button className="mt-5 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/icons/account.svg"
                alt="login"
                width={20}
                height={20}
                className="lg:hidden"
              />
              <span className="text-purple-800 max-lg:hidden">Log In</span>
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="min-h-[41px] w-full rounded-lg px-4 py-3 text-purple-600 shadow-none">
              <Image
                src="/icons/sign-up.svg"
                alt="sign up"
                width={20}
                height={20}
                className="lg:hidden"
              />
              <span className="max-lg:hidden">Sign Up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
};

export default LeftSidebar;
