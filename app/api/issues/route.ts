import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
type IssueBody = {
  title: string;
  description: string;
  link: string;
  email: string;
  prority: "NORMAL" | "MEDIUM" | "HIGH";
};
const createIssueSchema = z.object({
  title: z.string().min(1, "Title is required").max(255),
  description: z.string().min(1, "Description is required"),
  email: z.string(),
  link: z.string(),
  prority: z.enum(["NORMAL", "MEDIUM", "HIGH"]).default("NORMAL"),
});
export const POST = async (req: NextRequest, res: NextResponse) => {
  const body: IssueBody = await req.json();
  const validation = createIssueSchema.safeParse(body);
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
    return NextResponse.json(newIssue, { status: 201 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
