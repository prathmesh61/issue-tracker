"use client";
import { IssueType } from "@/utils/types";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  issue: IssueType;
};

const Modal = ({ issue }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const bgPrority = `${
    issue.order === "HIGH"
      ? "bg-red-200"
      : issue.order === "MEDIUM"
      ? "bg-purple-200"
      : "bg-green-200"
  }`;
  return (
    <>
      <div
        className={`shadow-md cursor-pointer rounded-md flex flex-col  items-start w-fit ${bgPrority} font-bold capitalize text-sm px-6 py-3 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
        onClick={() => setShowModal(true)}
      >
        <h4 className="text-md font-bold whitespace-nowrap">{issue.title}</h4>
        <h4 className="text-[10px] text-zinc-500 font-semibold">
          Email - {issue.email}
        </h4>
        <h4 className="text-[10px] text-zinc-500 font-semibold">
          prority - {issue.order}
        </h4>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex flex-col gap-3 items-start justify-between p-5 border-b border-solid  rounded-t">
                  <h3 className="text-2xl font-semibold">{issue.title}</h3>
                  <div className="flex items-center gap-3">
                    <h3
                      className={`text-xs font-semibold ${bgPrority} px-2 py-1 `}
                    >
                      Importance :- {issue.order}
                    </h3>
                    <h3
                      className={`text-xs font-semibold bg-lime-200 px-2 py-1 `}
                    >
                      Email :- {issue.email}
                    </h3>
                  </div>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto w-fit">
                  <code className="my-4 text-blueGray-500 text-lg w-fit">
                    {issue.description}
                  </code>
                </div>
                <div className="relative p-6 flex-auto w-fit">
                  <Link
                    href={issue.link}
                    target="_blank"
                    className=" bg-purple-300 px-2 py-1  text-xs w-fit"
                  >
                    Issue Link - {issue.link}
                  </Link>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
