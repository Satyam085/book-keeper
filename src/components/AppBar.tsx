import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import Link from "next/link";

export default function AppBar() {
  const username = "Satyam";
  const session = true;
  return (
    <div className="flex items-center justify-between border border-b-slate-200 p-4 shadow-sm ">
      <Link href={"/"}>
        <div className="text-3xl font-extrabold">Book Keeper</div>
      </Link>
      <div className="flex items-center gap-6">
        <div className="hidden text-xl font-semibold md:flex">Welcome</div>
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>{username[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div>{!!session && <Button>Logout</Button>}</div>
      </div>
    </div>
  );
}
