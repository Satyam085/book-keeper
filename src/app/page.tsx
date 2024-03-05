import HeaderSection from "@/components/HeaderSection";
import SearchBar from "@/components/SearchBar";

export default function HomePage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    option?: string;
    page?: string;
  };
}) {
  const username = "Satyam";
  return (
    <main className="flex justify-around">
      <div className="flex w-full flex-col lg:w-4/5">
        <div className="p-4">
          <HeaderSection username={username} />
        </div>
        <div>
          <SearchBar />
        </div>
        <div>Data Table</div>
      </div>
    </main>
  );
}
