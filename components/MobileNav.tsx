"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            alt="hamburger"
            width={36}
            height={36}
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-[#A594F9]">
          <Link href="/" className="flex items-center gap-1">
            <div className="gap-3 flex items-center justify-center">
              <Heart
                width={50}
                height={50}
                className="max-sm:size-20 text-white"
              />
              <p className="text-[35px] text-white font-thin tracking-tighter">
                Heart Blog
              </p>
            </div>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-6 text-white">
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route;
                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg justify-start",
                          { "bg-blue-200 text-white": isActive }
                        )}
                      >
                        <Image
                          src={item.imgUrl}
                          alt={item.label}
                          width={20}
                          height={20}
                          className={isActive ? "invert" : ""}
                        />
                      </Link>
                      <p className="font-semibold">{item.label}</p>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
