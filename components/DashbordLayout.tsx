"use client";
import React from "react";
import Modal from "./common/Modal";
import { useFetch } from "@/hooks/useFetch";
import Spinner from "./common/Spinner";

const DashbordLayout = () => {
  const { data, error, loading } = useFetch("/api/get-issues");
  console.log(data);

  if (loading) {
    return (
      <>
        <Spinner />
      </>
    );
  }
  return (
    <div>
      {error ? (
        <p className="bg-red-400 text-white rounded-md p-2 mt-4">
          Please Try Again...
        </p>
      ) : (
        <Modal />
      )}
    </div>
  );
};

export default DashbordLayout;
