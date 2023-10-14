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

export const chartDynamicData = (data: IssueType[]) => {
  const prorityObjWithKeyValue = data?.reduce((acc: any, curr: IssueType) => {
    const key = curr.order;
    const valueIfExsist = acc[key] || 0;
    return { ...acc, [key]: valueIfExsist + 1 };
  }, {});
  // Convert the result into an array
  const prorityObjAsArray = prorityObjWithKeyValue
    ? Object.entries(prorityObjWithKeyValue)?.map(([key, value]) => ({
        order: key,
        count: value,
      }))
    : [];

  return { prorityObjAsArray };
};
