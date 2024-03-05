import EntryForm from "@/components/EntryForm";
import React from "react";

export default function page() {
  return (
    <div className="flex min-w-full flex-col items-center justify-center gap-10 p-10">
      <div className="text-3xl font-semibold">Create your new book entry </div>
      <EntryForm />
    </div>
  );
}
