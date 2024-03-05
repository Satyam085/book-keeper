import React from "react";
import { Button } from "./ui/button";
import PlusIcon from "./icons/PlusIcon";

export default function HeaderSection(props: { username: string }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="hidden text-xl font-semibold md:flex">
          Hello! {props.username}
        </div>
      </div>
      <div>
        <Button
          variant={"outline"}
          className="space-x-2 px-4 py-6 text-xl shadow-sm"
          size={"lg"}
        >
          <PlusIcon />
          <div>Add Record</div>
        </Button>
      </div>
    </div>
  );
}
