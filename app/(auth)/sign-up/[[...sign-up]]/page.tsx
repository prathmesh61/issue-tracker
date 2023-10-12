import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-purple-500">
      <SignUp />
    </div>
  );
}
