"use client";
import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, lessonsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Lessons = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];
const LessonsListPage = () => {
  const [userRole, setRole] = useState<string | null>(null);
  useEffect(() => {
    const fetchRole = async () => {
      setRole(role);
    };
    fetchRole();
  }, []);
  const renderRow = (item: Lessons) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="rounded-full w-7 h-7 items-center justify-center bg-lamaSky">
              <Image
                src="/edit.png"
                alt=""
                height={16}
                width={16}
                className="mx-auto"
              />
            </button>
          </Link>

          {userRole && (
            <button className="rounded-full w-7 h-7 items-center justify-center bg-lamaPurple">
              <Image
                src="/delete.png"
                alt=""
                height={16}
                width={16}
                className="mx-auto"
              />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="rounded-md bg-white p-4 flex-1 m-4 mt-0">
      {/* TOP  */}
      <div className=" flex items-center justify-between ">
        <h1 className="hidden md:block text-lg font-semibold">All Lessons</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>

            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/plus.png" alt="" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
      {/* LIST  */}
      <Table columns={columns} renderRow={renderRow} data={lessonsData} />
      {/* PAGINATION  */}
      <Pagination />
    </div>
  );
};
export default LessonsListPage;
