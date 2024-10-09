"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { createPost, editPost } from "@/lib/actions/post.action";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";

interface Props {
  type?: string;
  mongoUserId: string;
  postDetails?: string;
}
const Post = ({ type, mongoUserId, postDetails }: Props) => {
  const pathname = usePathname(); // to know on which URL that we are at right now
  const router = useRouter(); // to navigate
  const [isLoading, setIsLoading] = useState(false);

  const parsedPostDetails = postDetails && JSON.parse(postDetails as string); // will show the postDetails if it exist or just display an empty string. This is for the edit option,we want to get the post details since it already exists

  const formSchema = z.object({
    title: z.string().min(10, {
      message: "Title must be at least 10 characters.",
    }),
    content: z.string().min(30, {
      message: "Content must be at least 30 characters.",
    }),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: parsedPostDetails?.title || "",
      content: parsedPostDetails?.content || "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      if (type === "Edit") {
        await editPost({
          postId: parsedPostDetails._id, // passed the id of the post that we want to edit
          title: values.title, // pass the title that we want to update
          content: values.content, // pass the content that we want to update
          path: pathname, // pass the path that we want to revalidate
        });
        toast({
          title: "Blog Edited!",
          description: "Blog has been successfully edited.",
        });
        // navigate to view-post to see the post
        router.push(`/post/${parsedPostDetails._id}`);
        form.reset(); // reset form fields after successful submission
      } else {
        await createPost({
          title: values.title,
          content: values.content,
          author: JSON.parse(mongoUserId), // since we used JSON.stringify before
          path: pathname,
        });

        toast({
          title: "Blog Posted!",
          description: "Blog has been successfully posted.",
        });
        // navigate to view-post to see the post
        router.push("/view-post");
        form.reset(); // reset form fields after successful submission
      }
    } catch (error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with the request.",
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="text-blue-600">Blog Title</FormLabel>
                <FormControl className="mt-3.5">
                  <Input className="min-h-[56px] bg-blue-200" {...field} />
                </FormControl>
                <FormDescription className="body-regular mt-2.5 text-slate-400">
                  Choose a title that sparks curiosity and excitement.
                </FormDescription>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="text-blue-600">Blog Content</FormLabel>
                <FormControl className="mt-3.5">
                  <Textarea className="bg-blue-200 min-h-[200px]" {...field} />
                </FormControl>
                <FormDescription className="body-regular mt-2.5 text-slate-400">
                  Share your insights and let your creativity take center stage.
                </FormDescription>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="rounded-2xl bg-blue-600 hover:bg-blue-700"
          >
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                {type === "Edit" ? "Editing..." : "Posting..."}
              </>
            ) : (
              <>{type === "Edit" ? "Edit Blog" : "Submit Blog"}</>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Post;
