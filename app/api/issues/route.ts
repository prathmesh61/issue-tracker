import prisma from "@/prisma/client";
import { formSchema } from "@/utils/validation/formSchema";
import { NextRequest, NextResponse } from "next/server";
import NodeCache from "node-cache";

const nodeCache = new NodeCache();
type IssueBody = {
  title: string;
  description: string;
  link: string;
  email: string;
  prority: "NORMAL" | "MEDIUM" | "HIGH";
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  const body: IssueBody = await req.json();
  const validation = formSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  try {
    const newIssue = await prisma.issue.create({
      data: {
        title: body.title,
        description: body.description,
        link: body.link,
        email: body.email,
        order: body.prority,
      },
    });
    // cache delete for changes in UI
    nodeCache.del("issues");
    return NextResponse.json(newIssue, { status: 201 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
