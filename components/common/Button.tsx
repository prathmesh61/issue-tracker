"use client";
import React from "react";

type Props = {
  type?: "button" | "submit" | "reset" | undefined;
  text: string;
};

const Button = ({ text, type }: Props) => {
  return (
    <button
      type={type}
      className="bg-purple-500 hover:bg-purple-400 text-white rounded-md cursor-pointer w-full py-2"
    >
      {text}
    </button>
  );
};

export default Button;
