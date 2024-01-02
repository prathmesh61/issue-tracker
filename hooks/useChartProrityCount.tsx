import { IssueType } from "@/utils/types";

// export const useChartProrityCount = (data: IssueType[]) => {
//   const prorityObjWithKeyValue = data?.reduce((acc, curr) => {
//     const key = curr.order;
//     acc[key] = (acc[key] || 0) + 1;
//     return acc;
//   }, {} as { [key: string]: number });

//   // Convert the result into an array
//   const prorityCount = prorityObjWithKeyValue
//     ? Object.entries(prorityObjWithKeyValue).map(([order, count]) => ({
//         order,
//         count,
//       }))
//     : [];

//   return { prorityCount };
// };
export const useChartProrityCount = (data: IssueType[]) => {
  const prorityObjWithKeyValue = data?.reduce((acc, curr) => {
    const key = String(curr.order); // Ensure the key is a string
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {} as { [key: string]: number });

  // Convert the result into an array
  const prorityCount = prorityObjWithKeyValue
    ? Object.entries(prorityObjWithKeyValue).map(([order, count]) => ({
        order,
        count,
      }))
    : [];

  return { prorityCount };
};
