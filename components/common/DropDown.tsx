import React from "react";

type Props = {};

const DropDown = (props: Props) => {
  return (
    <div className="flex flex-col gap-2 w-full ">
      <label className="text-md font-medium">Prority :-</label>

      <select className="bg-purple-500 border-none active:border-none text-white p-2">
        <option value="NORMAL">NORMAL</option>
        <option value="MEDIUM">MEDIUM</option>
        <option value="HIGH">HIGH</option>
      </select>
    </div>
  );
};

export default DropDown;
