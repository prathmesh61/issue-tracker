import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
type Props = {};
const Header = ({}: Props) => {
  return (
    <header className="px-4 py-2">
      <div className="max-w-7xl mx-auto flex  items-center justify-between gap-4">
        <div className="flex items-center justify-center gap-x-10 ">
          <Link
            href={"/"}
            className="text-md md:text-xl whitespace-nowrap font-medium font-mono bg-purple-600 px-4 rounded-md text-white"
          >
            +Bug-Manager
          </Link>
          <Link href={"/dashbord"} className="text-sm font-light">
            Dashbord
          </Link>
          <Link href={"/issue"} className="text-sm font-light">
            Issue
          </Link>
        </div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
};

export default Header;
