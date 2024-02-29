import { Order } from "@prisma/client";

export type ValidationForm = {
  title: string;
  description: string;
  link: string;
  prority: "NORMAL" | "MEDIUM" | "HIGH";
};

export type IssueType = {
  description: string;
  title: string;
  link: string;
  order: string;
  email: string;
  id: number;
};

export type TypeChartPrority = Array<{
  order: string;
  count: number;
}>;
export type ChartIssueCount = Array<{ order: Order; count: number }>;
