"use client";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  setvalue: Dispatch<SetStateAction<"NORMAL" | "MEDIUM" | "HIGH">>;
};

const Dropdown = ({ setvalue }: Props) => {
  return (
    <div className="flex flex-col gap-2 w-full ">
      <label className="text-md font-medium">Prority :-</label>

      <select
        className="border-2 border-zinc-500 text-black p-2"
        onChange={(e) => setvalue(e.target.value as "NORMAL")}
      >
        <option value="NORMAL">NORMAL</option>
        <option value="MEDIUM">MEDIUM</option>
        <option value="HIGH">HIGH</option>
      </select>
    </div>
  );
};

export default Dropdown;
