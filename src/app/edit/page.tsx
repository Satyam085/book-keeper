import EditForm from "@/components/EditForm";
import React from "react";

export default function page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  return (
    <div className="flex min-w-full flex-col items-center justify-center gap-10 p-10">
      <div className="text-3xl font-semibold">Update book entry </div>
      <EditForm ISBN={searchParams?.query ?? ""} />
    </div>
  );
}
