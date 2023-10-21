import React from "react";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="flex flex-wrap gap-3 bg-purple-500 p-7 items-center justify-around">
      <h2 className="text-md font-bold  text-white text-center">
        A simple, fast and scalable bug tracking system that helps you manage
        <br />
        bugs easily and deliver great products on time.
      </h2>
      <Link
        href={"/dashbord"}
        className="text-sm bg-black py-1 px-4 text-white w-[150px] text-center rounded-md h-fit"
      >
        Dashbord
      </Link>
    </section>
  );
};

export default CallToAction;
