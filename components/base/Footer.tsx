import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-full h-fit p-2 text-center bg-black text-white flex flex-col items-center justify-center">
      <p className="text-sm font-mono">
        © 2023, +Bug Manager Pvt. Ltd. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
