"use server";

import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";

export const getIssues = async () => {
  try {
    const issues = await prisma.issue.findMany();
    revalidatePath("/");
    return issues;
  } catch (error) {
    throw new Error("internal server error on issue");
  }
};
