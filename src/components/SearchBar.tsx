"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(value: string) {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  function handleSelect(value: string) {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("option", value);
    } else {
      params.delete("option");
      params.set("option", "Any");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="mx-4 flex gap-2">
      
      <Select
        defaultValue={searchParams.get("option")?.toString()}
        onValueChange={(e) => {
          handleSelect(e);
        }}
      >
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Select a field" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="title">Title</SelectItem>
          <SelectItem value="Author">Author</SelectItem>
          <SelectItem value="Category.category">Category</SelectItem>
          <SelectItem value="publisher">Publisher</SelectItem>
          <SelectItem value="ISBN">ISBN</SelectItem>
        </SelectContent>
      </Select>

      <Input
        className="grow"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
        placeholder="Enter your search criteria ..."
      />
    </div>
  );
}
