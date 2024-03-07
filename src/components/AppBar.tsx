import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { ModeToggle } from "./ModeToggle";

export default async function AppBar() {
  const session = await getServerSession();
  const username = session?.user.name ?? "D";

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
        <div>
          <ModeToggle />
        </div>
        <div>
          {!!session && (
            <Link href={"/api/auth/signout"}>
              <Button>Logout</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
