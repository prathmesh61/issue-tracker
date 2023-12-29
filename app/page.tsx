import CallToAction from "@/components/base/CallToAction";
import ChartLayout from "@/components/layout/ChartLayout";
import PreviousIssueLayout from "@/components/layout/PreviousIssueLayout";
import Footer from "@/components/base/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col justify-between w-full h-screen gap-10">
      <div className="flex flex-col lg:flex-row justify-between gap-10 max-w-7xl mx-auto p-4  mt-16 mb-16 flex-2 ">
        <ChartLayout />
        <PreviousIssueLayout />
      </div>
      <div className="w-full flex flex-col justify-end  flex-1">
        <CallToAction />
        <Footer />
      </div>
    </main>
  );
}
