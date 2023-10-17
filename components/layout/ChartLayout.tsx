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
import { chartDynamicData } from "@/utils/Fetcher";
import ChartSpinner from "../common/ChartSpinner";
import Link from "next/link";
import IssueProrityLayout from "../common/IssueProrityLayout";

const ChartLayout = () => {
  const { data, error, loading } = useFetch("/api/get-issues");
  const { prorityObjAsArray } = chartDynamicData(data!);
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
        className="bg-red-400 text-white text-xs rounded-md p-2 mt-4"
      >
        Click here for better experience...
      </Link>
    );
  }
  return (
    <div className="w-full h-full flex flex-col  gap-5">
      {/* @ts-ignore */}
      <IssueProrityLayout prorityObjAsArray={prorityObjAsArray} />
      <div className="w-[450px] h-[500px] relative border-2 border-zinc-300 rounded-lg p-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={prorityObjAsArray}>
            <Bar dataKey="count" fill="#9333EA" />
            <YAxis dataKey="count" />
            <XAxis dataKey="order" />
            <Tooltip />
            <Legend />
            <CartesianGrid />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartLayout;
