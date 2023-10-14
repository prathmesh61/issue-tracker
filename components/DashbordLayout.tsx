"use client";
import React from "react";
import Modal from "./common/Modal";
import { useFetch } from "@/hooks/useFetch";
import Spinner from "./common/Spinner";
import { IssueType } from "@/utils/types";
import { displayDataByFilterPrority, filterPrority } from "@/utils/Fetcher";
import Link from "next/link";

const DashbordLayout = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { data, error, loading } = useFetch("/api/get-issues");
  const prorityFilterLable: string[] = filterPrority(data!);
  const prorityFilterArrData = displayDataByFilterPrority(data!, searchParams);

  if (loading) {
    return (
      <>
        <Spinner />
      </>
    );
  } else if (error) {
    return (
      <Link
        href={"/"}
        className="bg-red-400 text-white text-xs rounded-md p-2 mt-4"
      >
        Click here for better experience...
      </Link>
    );
  }
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-2 ">
        <Link
          href={`/dashbord`}
          className="bg-black text-sm cursor-pointer text-white rounded-md px-4 py-1 whitespace-nowrap"
        >
          All
        </Link>
        {prorityFilterLable.map((item: string) => (
          <Link
            href={`?prority=${item}`}
            key={item}
            className="bg-black text-sm cursor-pointer text-white rounded-md px-4 py-1 whitespace-nowrap"
          >
            {item}
          </Link>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 items-center ">
        {prorityFilterArrData?.map((issue: IssueType) => (
          <Modal issue={issue} key={issue.id} />
        ))}
      </div>
    </div>
  );
};

export default DashbordLayout;
