import React from "react";

type Props = {
  componentType: boolean;
  type: string;
  lable: string;
  placeholder: string;
};

function Input({ componentType = true, lable, placeholder, type }: Props) {
  return (
    <>
      {componentType ? (
        <div className="flex flex-col gap-2 w-full ">
          <label className="text-md font-medium">{lable} :-</label>
          <input
            type={type}
            placeholder={placeholder}
            className="border-2 border-zinc-400 rounded-md text-sm shadow-md  p-2"
          />
        </div>
      ) : (
        <div className="flex flex-col gap-2 w-full ">
          <label htmlFor="description" className="text-md font-medium">
            Description :-
          </label>
          <textarea
            rows={5}
            cols={50}
            name="description"
            placeholder="give detail description for bug..."
            className="border-2 border-zinc-400 rounded-md text-sm shadow-md p-2"
          />
        </div>
      )}
    </>
  );
}

export default Input;
