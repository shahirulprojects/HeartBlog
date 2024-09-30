import { Heart } from "lucide-react";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full px-6 py-4 lg:px-10 bg-[#A594F9]">
      <Link href="/" className="flex items-center gap-1">
        <Heart
          width={50}
          height={50}
          className="max-sm:hidden text-white fill-white"
        />
        <div className="flex items-center justify-center">
          <p className="text-[35px] text-white max-sm:hidden font-thin tracking-tighter">
            Heart Blog
          </p>
        </div>
      </Link>
      <div className="flex-between gap-5">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
