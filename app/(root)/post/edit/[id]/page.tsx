import Post from "@/components/Post";
import { getPostById } from "@/lib/actions/post.action";
import { getUserById } from "@/lib/actions/user.action";
import { ParamsProps } from "@/types";
import { auth } from "@clerk/nextjs/server";

const Page = async ({ params }: ParamsProps) => {
  // params is coming from ParamsProps
  const { userId } = auth(); // get the userId from clerk

  if (!userId) return null; // if user does not exist,return nothing

  const mongoUser = await getUserById({ userId }); // passed in an object containing the userId
  const result = await getPostById({ postId: params.id }); // passed in the postId which has the value of params id

  if (userId !== result.author.clerkId) {
    return (
      <p className=" text-[18px] font-bold leading-[140%] text-red-600">
        You&apos;re not the right person to edit this content
      </p>
    );
  }

  return (
    <>
      <div className="text-[30px] mt-[-35px] ml-[-20px] max-sm:ml-[10px] max-sm:mt-[-50px]">
        <h1 className="font-extrabold tracking-tighter text-blue-700 mb-[20px]">
          Edit Post
        </h1>
      </div>
      <div className="mt-9">
        <Post
          type="Edit"
          mongoUserId={mongoUser._id} // to know who is editing the post so that only the author can edit it
          postDetails={JSON.stringify(result)} // passed all the details of the specific post so that we can edit it
        />
      </div>
    </>
  );
};

export default Page;
