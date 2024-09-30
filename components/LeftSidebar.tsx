"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0 flex h-screen items-center justify-between p-6 w-fit flex-col text-black bg-[#A594F9] max-sm:hidden lg:w-[264px] overflow-y-hidden">
      <div className="flex flex-1 flex-col justify-start items-center mt-[100px] min-h-screen gap-6 ">
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                "flex gap-4 items-center justify-start w-full p-4 rounded-lg",
                { "bg-blue-200 text-white": isActive }
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
    </section>
  );
};

export default LeftSidebar;
