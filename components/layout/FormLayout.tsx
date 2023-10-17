"use client";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Textarea from "@/components/common/Textarea";
import Dropdown from "@/components/common/Dropdown";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const FormLayout = () => {
  const { user } = useUser();
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [link, setLink] = useState<string>();
  const [prority, setPrority] = useState<"NORMAL" | "MEDIUM" | "HIGH">(
    "NORMAL"
  );
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      title,
      description,
      link,
      email: user?.primaryEmailAddress?.emailAddress,
      prority,
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
      onSubmit={handleSubmit}
    >
      <Input
        lable="Title"
        placeholder="give title for bug..."
        type="text"
        setvalue={setTitle}
      />
      <Textarea
        lable="Description"
        placeholder="give detail description for bug..."
        setvalue={setDescription}
      />
      <Dropdown setvalue={setPrority} />
      <Input
        lable="Link"
        placeholder="www.buglink.com"
        type="text"
        setvalue={setLink}
      />
      <Button text="Continue" type="submit" />
    </form>
  );
};

export default FormLayout;
