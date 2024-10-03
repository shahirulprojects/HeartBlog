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
import { createPost } from "@/lib/actions/post.action";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  mongoUserId: string;
}
const Post = ({ mongoUserId }: Props) => {
  const pathname = usePathname(); // to know on which URL that we are at right now
  const router = useRouter(); // to navigate
  const [isLoading, setIsLoading] = useState(false);
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
      title: "",
      content: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      await createPost({
        title: values.title,
        content: values.content,
        author: JSON.parse(mongoUserId), // since we used JSON.stringify before (at ask-question>page.tsx)
        path: pathname,
      });
      // navigate to view-post to see the question
      router.push("/view-post");
      form.reset(); // reset form fields after successful submission
    } catch (error) {
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
                <FormDescription className="body-regular mt-2.5 text-[#7E60BF]">
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
                <FormDescription className="body-regular mt-2.5 text-[#7E60BF]">
                  Share your insights and let your creativity take center stage.
                </FormDescription>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="rounded-2xl bg-[#7E60BF] hover:bg-[#433979]"
          >
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                &nbsp;Loading...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Post;
