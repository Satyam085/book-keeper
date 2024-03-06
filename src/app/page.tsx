import { columns } from "@/components/DataTable/colums";
import { DataTable } from "@/components/DataTable/data-table";
import HeaderSection from "@/components/HeaderSection";
import SearchBar from "@/components/SearchBar";
import { getData } from "@/server/actions";

export default async function HomePage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    option?: string;
    page?: string;
  };
}) {
  const username = "Satyam";
  const data = await getData();
  
  const query = searchParams?.query || ""
  const option = searchParams?.option || " " 

  return (
    <main className="flex justify-around">
      <div className="flex w-full flex-col lg:w-4/5">
        <div className="p-4">
          <HeaderSection username={username} />
        </div>
        <div>
          {/* <SearchBar /> */}
        </div>
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data} query={query} option={option}/>
        </div>
      </div>
    </main>
  );
}
