"use client";
import { useFetch } from "@/hooks/useFetch";
import React from "react";
import ListSpinner from "../common/ListSpinner";
import Link from "next/link";
import { IssueType } from "@/utils/types";

const PreviousIssueLayout = () => {
  const { data, error, loading } = useFetch("/api/get-issues");
  // const issues=Array.from(data!)?.slice(0, 6) || []
  if (loading) {
    return (
      <>
        <ListSpinner />
      </>
    );
  } else if (error) {
    return (
      <Link
        href={"/dashbord"}
        className="bg-blue-400 w-fit text-white text-xs rounded-md p-2 mt-4"
      >
        Click here for better experience...
      </Link>
    );
  }
  return (
    <section className="w-full h-full flex flex-col border-2 border-zinc-300 rounded-lg p-2">
      <h1 className="text-xl font-bold ">Latest Issue</h1>
      <div className=" flex flex-col gap-5 items-start mt-5">
        {data &&
          Array.from(data)
            ?.slice(0, 6)
            .map((issue: IssueType) => (
              <div
                key={issue.id}
                className="flex flex-col border-b-2 space-y-2 p-2 border-zinc-300 w-full last-of-type:border-none"
              >
                <p className="text-sm  font-medium">{issue.title}</p>
                <p
                  className={`text-xs whitespace-nowrap font-medium w-fit py-1 px-2 rounded-md mb-4 ${
                    issue.order === "HIGH"
                      ? "bg-red-200"
                      : issue.order === "MEDIUM"
                      ? "bg-purple-200"
                      : "bg-green-200"
                  }`}
                >
                  {issue.order}
                </p>
              </div>
            ))}
      </div>
    </section>
  );
};

export default PreviousIssueLayout;
