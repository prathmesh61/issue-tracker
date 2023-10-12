import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
type Props = {};
const Header = ({}: Props) => {
  return (
    <header className="px-8 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center justify-center gap-x-10 ">
          <Link
            href={"/"}
            className="text-2xl font-bold bg-purple-400 px-4 rounded-md text-white"
          >
            IManager
          </Link>
          <Link href={"/dashbord"}>Dashbord</Link>
          <Link href={"/issue"}>Issue</Link>
        </div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
};

export default Header;
