"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import IssueProrityCountBox from "../common/IssueProrityCountBox";
import { getIssueCount } from "@/utils/api-request";
import { useEffect, useState } from "react";
import { ChartIssueCount } from "@/utils/types";

const ChartLayout = () => {
  const [count, setCount] = useState<ChartIssueCount | undefined>();

  useEffect(() => {
    const issueCountFun = async () => {
      const data = await getIssueCount();
      // Check if data is not void before setting the count
      if (data) {
        setCount(data);
      }
    };
    issueCountFun();
  }, []);

  return (
    <section className="w-full h-full flex flex-col  gap-5">
      {/* @ts-ignore */}
      {count && <IssueProrityCountBox prorityCount={count} />}
      {count && (
        <div className="w-[450px] h-[500px] relative border-2 border-zinc-300 rounded-lg p-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={count}>
              <Bar dataKey="count" fill="#9333EA" />
              <YAxis dataKey="count" />
              <XAxis dataKey="order" />
              <Tooltip />
              <Legend />
              <CartesianGrid />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </section>
  );
};

export default ChartLayout;
