"use client";
import Issue from "@/app/(pages)/issue/page";
import { useFetch } from "@/hooks/useFetch";
import { IssueType } from "@/utils/types";
import { BarChart, Bar, Cell, XAxis, YAxis } from "recharts";

const datas = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const ChartLayout = () => {
  const { data, error, loading } = useFetch("/api/get-issues");
  const prorityArray = data?.reduce((acc: any, curr: IssueType) => {
    const key = curr.order;
    const valueIfExsist = acc[key] || 0;
    return { ...acc, [key]: valueIfExsist + 1 };
  }, {});

  return (
    <div className="w-full h-full relative">
      <BarChart width={450} height={500} data={datas}>
        <YAxis />
        <XAxis />
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default ChartLayout;
