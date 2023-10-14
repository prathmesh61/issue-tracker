import CallToAction from "@/components/CallToAction";
import ChartLayout from "@/components/ChartLayout";
import PreviousIssueLayout from "@/components/PreviousIssueLayout";
import Footer from "@/components/base/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full gap-10">
      <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-1 lg:gap-40 gap-16 max-w-7xl mx-auto px-4 place-content-between mt-16 mb-16">
        <ChartLayout />
        <PreviousIssueLayout />
      </div>
      <CallToAction />
    </main>
  );
}
