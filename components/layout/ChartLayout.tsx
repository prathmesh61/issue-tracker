"use client";
import { useFetch } from "@/hooks/useFetch";
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
import ChartSpinner from "../common/ChartSpinner";
import IssueProrityCountBox from "../common/IssueProrityCountBox";

const ChartLayout = () => {
  const { data: count, loading } = useFetch("/api/issue-count");

  if (loading) {
    return (
      <>
        <ChartSpinner />
      </>
    );
  }
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
