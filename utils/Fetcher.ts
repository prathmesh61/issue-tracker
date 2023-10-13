"use client";

import { IssueType } from "./types";

export const filterPrority = (arr: IssueType[]) => {
  let orderArr = arr?.map((item) => item.order);
  return orderArr?.filter((item, index) => orderArr.indexOf(item) === index);
};

export const displayDataByFilterPrority = (
  arr: IssueType[],
  searchParams: { [key: string]: string | string[] | undefined }
) => {
  if (searchParams["prority"]) {
    return arr?.filter((item) => item.order === searchParams["prority"]);
  }
  return arr;
};
