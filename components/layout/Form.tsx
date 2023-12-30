"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FC } from "react";

interface FormData {
  title: string;
  description: string;
  link: string;
  priority: "NORMAL" | "MEDIUM" | "HIGH";
}

const Form: FC = () => {
  const { user } = useUser();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const body = {
      title: data.title,
      description: data.description,
      link: data.link,
      email: user?.primaryEmailAddress?.emailAddress,
      priority: data.priority,
    };

    try {
      await axios.post("/api/issues", body);
      toast.success("created issue");
      router.push("/dashbord");
    } catch (error) {
      toast.warning("Try Again.");
    }
  };

  return (
    <form
      className="flex flex-col items-start gap-8 mt-10 w-[500px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="text-md font-medium flex flex-col w-full gap-y-2">
        Title :-
        <input
          type="text"
          {...register("title", { required: "Title is required" })}
          placeholder="Title"
          className="border-2 border-zinc-400 rounded-md text-sm shadow-md  p-2 w-full"
        />
        {errors.title && <p className="error">{errors.title.message}</p>}
      </label>

      <label className="text-md font-medium flex flex-col w-full gap-y-2">
        Description :-
        <textarea
          rows={5}
          cols={50}
          {...register("description", { required: "Description is required" })}
          placeholder="Description"
          className="border-2 border-zinc-400 rounded-md text-sm shadow-md p-2 w-full"
        />
        {errors.description && (
          <p className="error">{errors.description.message}</p>
        )}
      </label>

      <select
        {...register("priority", { required: "Priority is required" })}
        className="border-2 border-zinc-500 text-black p-2 w-full"
      >
        <option value="NORMAL">NORMAL</option>
        <option value="MEDIUM">MEDIUM</option>
        <option value="HIGH">HIGH</option>
      </select>
      {errors.priority && <p className="error">{errors.priority.message}</p>}

      <label className="text-md font-medium flex flex-col gap-y-2 w-full">
        Link :-
        <input
          type="text"
          {...register("link")}
          placeholder="Link"
          className="border-2 border-zinc-400 rounded-md text-sm shadow-md  p-2 w-full"
        />
        {errors.link && <p className="error">{errors.link.message}</p>}
      </label>

      <button
        type="submit"
        disabled={isLoading}
        className="bg-purple-500 hover:bg-purple-400 text-white rounded-md cursor-pointer w-full py-2"
      >
        {isLoading ? "Loading.." : "Continue"}
      </button>
    </form>
  );
};

export default Form;
