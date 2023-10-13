import ChartLayout from "@/components/ChartLayout";
import PreviousIssueLayout from "@/components/PreviousIssueLayout";

export default function Home() {
  return (
    <main className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-4 max-w-7xl mx-auto px-4 place-items-center place-content-center mt-16">
      <ChartLayout />
      <PreviousIssueLayout />
    </main>
  );
}
