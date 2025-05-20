import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex w-full h-screen justify-center items-center flex-col">
      <div className="flex items-center gap-5 mb-2">
        <h1 className="text-5xl font-bold border-r-2 pr-4 border-red-800">
          404
        </h1>
        <h2 className="text-xl font-bold">NOT FOUND</h2>
      </div>
      <p className="text-gray-400">
        Sorry the page you were looking for was not found
      </p>
      <Link
        href={"/"}
        className="mt-8 border-2 border-white/10 px-4 py-1 rounded-md hover:bg-red-600"
      >
        Volte a home
      </Link>
    </div>
  );
}
