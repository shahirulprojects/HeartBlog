// import LeftSidebar from "@/components/LeftSidebar";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-[#FFFF] relative">
      <Navbar />
      <div className="flex">
        {/* <LeftSidebar /> */}

        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full">{children}</div>
        </section>
      </div>
      <Toaster />
    </main>
  );
};

export default Layout;
