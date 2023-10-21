import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="flex justify-center items-center w-screen h-screen bg-purple-500">
      <SignUp />
    </section>
  );
}
