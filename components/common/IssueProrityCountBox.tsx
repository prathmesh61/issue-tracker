import { TypeChartPrority } from "@/utils/types";
import React from "react";

type Props = {
  prorityCount: TypeChartPrority;
};
const IssueProrityCountBox = ({ prorityCount }: Props) => {
  return (
    <div className="flex flex-wrap gap-3">
      {prorityCount &&
        Array.from(prorityCount)?.map((item) => (
          <div
            key={item.order}
            className={`border-2 flex flex-col items-center w-20 border-zinc-300 p-2 rounded-lg cursor-pointer ${
              item.order === "HIGH"
                ? "bg-red-200"
                : item.order === "MEDIUM"
                ? "bg-purple-200"
                : "bg-green-200"
            }`}
          >
            <p className="text-sm whitespace-nowrap"> {item.order}</p>
            <p className="text-md"> {item.count}</p>
          </div>
        ))}
    </div>
  );
};

export default IssueProrityCountBox;
