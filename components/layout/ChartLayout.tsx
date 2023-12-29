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
import Link from "next/link";
import { useChartProrityCount } from "@/hooks/useChartProrityCount";
import IssueProrityCountBox from "../common/IssueProrityCountBox";

const ChartLayout = () => {
  const { data, error, loading } = useFetch("/api/get-issues");
  const { prorityCount } = useChartProrityCount(data!);

  if (loading) {
    return (
      <>
        <ChartSpinner />
      </>
    );
  } else if (error) {
    return (
      <Link
        href={"/dashbord"}
        className="bg-blue-400 w-fit text-white text-xs rounded-md p-2 mt-4"
      >
        Click here
      </Link>
    );
  }
  return (
    <section className="w-full h-full flex flex-col  gap-5">
      {/* @ts-ignore */}
      <IssueProrityCountBox prorityCount={prorityCount} />
      <div className="w-[450px] h-[500px] relative border-2 border-zinc-300 rounded-lg p-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={prorityCount}>
            <Bar dataKey="count" fill="#9333EA" />
            <YAxis dataKey="count" />
            <XAxis dataKey="order" />
            <Tooltip />
            <Legend />
            <CartesianGrid />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default ChartLayout;
