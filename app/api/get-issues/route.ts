import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const issues = await prisma.issue.findMany();
    return NextResponse.json(issues);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
