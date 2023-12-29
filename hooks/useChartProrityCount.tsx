import { IssueType } from "@/utils/types";

type Props = {
  data: IssueType[];
};

export const useChartProrityCount = (data: IssueType[]) => {
  const prorityObjWithKeyValue = data?.reduce((acc: any, curr: IssueType) => {
    const key = curr.order;
    const valueIfExsist = acc[key] || 0;
    return { ...acc, [key]: valueIfExsist + 1 };
  }, {});
  // Convert the result into an array
  const prorityCount = prorityObjWithKeyValue
    ? Object.entries(prorityObjWithKeyValue)?.map(([key, value]) => ({
        order: key,
        count: value,
      }))
    : [];

  return { prorityCount };
};
