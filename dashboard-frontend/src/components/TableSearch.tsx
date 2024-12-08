"use client";
import Image from "next/image";
const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex gap-2 items-center rounded-full ring-[1.6px] ring-gray-300 px-2">
      <Image src="/search.png" alt="" width={14} height={14} />
      <input
        type="text"
        placeholder="Search..."
        className="w-[200px] p-1 bg-transparent outline-none"
        suppressHydrationWarning
      />
    </div>
  );
};

export default TableSearch;
