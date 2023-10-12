import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
type Props = {};
const Header = ({}: Props) => {
  return (
    <header className="px-8 py-2">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <div className="flex items-center justify-center gap-x-10 ">
          <Link
            href={"/"}
            className="text-2xl font-extrabold bg-purple-500 px-4 rounded-lg text-white"
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
