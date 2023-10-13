import FormLayout from "@/components/FormLayout";
import React from "react";

type Props = {};

const Issue = (props: Props) => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col px-4 mt-10">
      <h1 className="text-2xl font-bold font-mono text-zinc-500">
        Tell About The Bug Here...!
      </h1>
      <FormLayout />
    </div>
  );
};

export default Issue;
