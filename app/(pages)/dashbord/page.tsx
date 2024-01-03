import DashbordLayout from "@/components/layout/DashbordLayout";

const Dashbord = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4  mt-10">
      <h1 className="text-xl whitespace-nowrap font-bold font-mono text-zinc-500">
        -Filter,Sort
      </h1>
      <div className="mt-10">
        <DashbordLayout searchParams={searchParams} />
      </div>
    </section>
  );
};

export default Dashbord;
