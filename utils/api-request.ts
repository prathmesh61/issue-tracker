"use server";
import prisma from "@/prisma/client";

export const getIssueCount = async () => {
  try {
    const priorityCounts = await prisma.issue.groupBy({
      by: ["order"],
      _count: true,
    });
    const count = priorityCounts.map(({ order, _count }) => ({
      order,
      count: _count,
    }));
    return count;
  } catch (error) {
    return console.log(error, "error in getIssueCount");
  }
};
