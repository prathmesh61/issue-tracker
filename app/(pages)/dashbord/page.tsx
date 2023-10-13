import DashbordLayout from "@/components/DashbordLayout";

type Props = {};

const Dashbord = (props: Props) => {
  return (
    <div className="max-w-7xl mx-auto p-2 mt-10">
      <h1 className="text-2xl font-bold font-mono text-zinc-500">
        Filter,Sort Issue Solve Them.
      </h1>
      <DashbordLayout />
    </div>
  );
};

export default Dashbord;
