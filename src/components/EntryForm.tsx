"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { number, z } from "zod";
import React, { useRef } from "react";
import { entrySchema } from "@/lib/schema";

import { Button } from "@/components/ui/button";
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
import { newEntry } from "@/server/actions";
import { useFormState } from "react-dom";

export default function EntryForm() {
  const [state, formAction] = useFormState(newEntry, {
    message: "",
  });

  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<z.infer<typeof entrySchema>>({
    resolver: zodResolver(entrySchema),
    defaultValues: {
      title: "",
      subtitle: "",
      authors: "",
      category: "",
      ISBN: "",
      publishedDate: "",
      publisher: "",
      distribution_expense: "0.00",
    },
  });

  // async function onSubmit(values: z.infer<typeof entrySchema>) {
  //   const formData = new FormData();
  //   formData.append("title", values.title),
  //     formData.append("subtitle", values.subtitle ?? ""),
  //     formData.append("authors", values.authors),
  //     formData.append("category", values.category),
  //     formData.append("ISBN", values.ISBN),
  //     formData.append("publishedDate", values.publishedDate),
  //     formData.append("publisher", values.publisher);

  //   await newEntry(formData);
  //   console.log(values);
  // }

  return (
    <Form {...form}>
      {!!state?.message && (
        <div className="text-2xl text-red-600">{state.message}</div>
      )}
      <form
        ref={formRef}
        action={formAction}
        onSubmit={form.handleSubmit(() => formRef.current?.submit())}
        className=""
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="ISBN"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">ISBN</FormLabel>
                <FormControl>
                  <Input
                    required
                    className="h-12"
                    placeholder="Enter the book's ISBN"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Title</FormLabel>
                <FormControl>
                  <Input
                    required
                    className="h-12"
                    placeholder="Enter the book's title"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subtitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Subtitle</FormLabel>
                <FormControl>
                  <Input
                    className="h-12"
                    placeholder="Enter the book's subtitle"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="authors"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Authors</FormLabel>
                <FormControl>
                  <Input
                    required
                    className="h-12"
                    placeholder="Enter the book's authors"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Enter multiple author with seperation of commas
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Category</FormLabel>
                <FormControl>
                  <Input
                    required
                    className="h-12"
                    placeholder="Enter the book's category"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="publishedDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Published Date</FormLabel>
                <FormControl>
                  <Input
                    required
                    className="h-12"
                    type="date"
                    max={new Date().toISOString().split("T")[0]}
                    placeholder="Enter the book's published date"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="publisher"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Publisher</FormLabel>
                <FormControl>
                  <Input
                    required
                    className="h-12"
                    placeholder="Enter the book's publisher"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="distribution_expense"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Expense</FormLabel>
                <FormControl>
                  <Input
                    required
                    type="number"
                    className="h-12"
                    placeholder="Enter the book's distribution_expense"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="mt-10 w-full py-6 text-xl " type="submit">
          Save your Entry
        </Button>
      </form>
    </Form>
  );
}
