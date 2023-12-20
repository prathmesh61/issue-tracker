import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="flex justify-center items-center overflow-x-hidden h-screen ">
      <SignIn />
    </section>
  );
}
