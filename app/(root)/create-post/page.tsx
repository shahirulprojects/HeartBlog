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

const CreatePost = () => {
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
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="text-[30px] mt-[-35px] ml-[-20px] max-sm:ml-[10px] max-sm:mt-[-50px]">
      <h1 className="font-extrabold tracking-tighter text-purple-700 mb-[20px]">
        Create Post
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel>Blog Title</FormLabel>
                <FormControl className="mt-3.5">
                  <Input className="min-h-[56px] bg-blue-200" {...field} />
                </FormControl>
                <FormDescription className="body-regular mt-2.5 text-[#7E60BF]">
                  Choose a title that sparks curiosity and excitement.
                </FormDescription>
                {/* FormMessage is for displaying success or error messages,in this case we want to display error message */}
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel>Blog Content</FormLabel>
                <FormControl className="mt-3.5">
                  <Textarea className="bg-blue-200 min-h-[200px]" {...field} />
                </FormControl>
                <FormDescription className="body-regular mt-2.5 text-[#7E60BF]">
                  Share your insights and let your creativity take center stage.
                </FormDescription>
                {/* FormMessage is for displaying success or error messages,in this case we want to display error message */}
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

export default CreatePost;
