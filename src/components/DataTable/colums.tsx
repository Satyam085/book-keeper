"use client";

import type { ColumnDef } from "@tanstack/react-table";

export type Book = {
  title: string;
  subtitle: string;
  author: string;
  publisher: string;
  category: string;
  publishedDate: string;
};

export const columns: ColumnDef<Book>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "subtitle",
    header: "Sub Title",
  },
  {
    accessorKey: "author",
    header: "Author",
  },
  {
    accessorKey: "publisher",
    header: "Publisher",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "publishedDate",
    header: "publishedDate",
  },
];
