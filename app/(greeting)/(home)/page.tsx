// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import React from "react";

// const Home = () => {
//   return (
//     <div className="relative h-screen w-screen bg-greeting bg-cover lg:bg-center bg-no-repeat">
//       {/* Overlay */}
//       <div className="absolute inset-0 z-10"></div>

//       {/* Content container */}
//       <div className="fade-in relative z-20 flex flex-col justify-center items-center h-full text-center">
//         <h1 className=" text-purple-800 text-[60px] max-sm:text-[30px] max-sm:mt-[80px] font-bold mb-4">
//           Heart Blog
//         </h1>
//         <p className="font-light text-pink-500 text-[24px] max-sm:text-[20px] mb-6">
//           &quot;A space to explore your emotions, share your stories, and hear
//           from others.&quot;
//         </p>
//         {/* <p className="text-pink-600 font-bold text-[18px] mb-8">
//           Join our community of passionate writers and readers today!
//         </p> */}
//         <Link href="/view-post">
//           <Button className="bg-purple-960 rounded-full bg-yellow-400 hover:bg-yellow-500 p-4 text-white">
//             Explore Blogs
//           </Button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/icons/heartbg.mp4" type="video/mp4" />
        </video>

        <div className="absolute bottom-0  justify-center flex flex-col min-h-screen right-0 z-10 p-8 text-white">
          <h1 className="text-4xl font-bold">Heart Blog</h1>

          <p className="text-xl mt-2">Write from the light of your heart</p>
          <Link href="/view-post">
            <Button className="mt-4 rounded-full bg-yellow-400 hover:bg-yellow-500 p-4 text-white">
              Explore Blogs
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
