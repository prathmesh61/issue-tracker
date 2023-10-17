import CallToAction from "@/components/base/CallToAction";
import ChartLayout from "@/components/layout/ChartLayout";
import PreviousIssueLayout from "@/components/layout/PreviousIssueLayout";
import Footer from "@/components/base/Footer";

export default function Home() {
  return (
    <main className="flex flex-col justify-between w-full h-full gap-10">
      <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-1 lg:gap-40 gap-16 max-w-7xl mx-auto px-4 place-content-between mt-16 mb-16 flex-1 ">
        <ChartLayout />
        <PreviousIssueLayout />
      </div>
      <div className="flex flex-col justify-end">
        <CallToAction />
        <Footer />
      </div>
    </main>
  );
}
