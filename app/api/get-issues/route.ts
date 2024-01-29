import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import NodeCache from "node-cache";
//  node-cache init
const nodeCache = new NodeCache();
export const GET = async (req: NextRequest, res: NextResponse) => {
  let issues;
  try {
    // node caching added for better UI Experience
    if (nodeCache.has("issues")) {
      issues = nodeCache.get("issues")!;
    } else {
      issues = await prisma.issue.findMany();
      nodeCache.set("issues", issues);
    }

    return NextResponse.json(issues);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
