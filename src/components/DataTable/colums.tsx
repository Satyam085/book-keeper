"use client";

import type { ColumnDef } from "@tanstack/react-table";
import type { Books } from "@prisma/client";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteBook } from "@/server/actions";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

interface BookTable extends Books {
  authors: {
    author: string;
  }[];
}

export const columns: ColumnDef<BookTable>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "ISBN",
    header: "ISBN",
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "subtitle",
    header: "Sub Title",
  },
  {
    id: "author",
    accessorFn: (row) => {
      // console.log(row.authors[0]?.author);
      return row.authors[0]?.author;
    },
    header: "Author",
  },
  {
    id: "publisher",
    accessorKey: "Publisher.publisher",
    header: "Publisher",
  },
  {
    id: "category",
    accessorKey: "Category.category",
    header: "Category",
  },
  {
    accessorKey: "publishedDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Published Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("publishedDate"));
      // console.log(date)
      const day = ("0" + date.getDate()).slice(-2);
      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const year = date.getFullYear();

      const formattedDate = `${day}-${month}-${year}`;

      return formattedDate;
    },
  },
  {
    accessorKey: "distribution_expense",
    header: () => <div className="text-right">Expense</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("distribution_expense")) / 100;
      const formatted = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const book = row.original;
      const searchParams = useSearchParams();
      const pathname = usePathname();
      const { replace } = useRouter();

      function handleEdit(term: string) {
        const params = new URLSearchParams(searchParams);
        if (term) {
          params.set("query", term);
        } else {
          params.delete("query");
        }
        replace(`edit?${params.toString()}`);
        console.log(term);
      }
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(book.ISBN)}
            >
              Copy Book ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleEdit(book.ISBN)}>
              Edit details
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={async () => {
                await deleteBook(book.ISBN);
              }}
            >
              Delete Entry
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
