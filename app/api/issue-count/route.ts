import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const priorityCounts = await prisma.issue.groupBy({
      by: ["order"],
      _count: true,
    });
    const count = priorityCounts.map(({ order, _count }) => ({
      order,
      count: _count,
    }));
    return NextResponse.json(count);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
