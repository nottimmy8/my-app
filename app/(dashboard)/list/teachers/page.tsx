import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, teachersData } from "@/lib/data";
import { Key, RectangleEllipsis, SquarePen, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEdit, FaFilter } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { LuPlus } from "react-icons/lu";

const TeacherListPage = () => {
  const columns = [
    {
      key: "id",
      label: (
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="w-4 h-4 rounded-2xl" />
          <span className="text-xs font-semibold text-[#667085]">
            Teacher Name
          </span>
        </label>
      ),
      render: (_: any, data: any) => (
        <div className="flex items-center gap-3">
          <input type="checkbox" className="w-4 h-4 rounded-2xl" />

          <Image
            src={data.photo}
            alt="photo"
            width={40}
            height={40}
            className="rounded-full object-cover w-10 h-10 "
          />

          <div className="leading-tight flex flex-col ">
            <span className="font-semibold text-xs "> {data.name} </span>
            <span className="text-xs text-gray-500 italic">{data.email} </span>
          </div>
        </div>
      ),
    },
    {
      key: "teacherId",
      label: "School ID",
      render: (_: any, data: any) => (
        <span className="text-sm font-medium"> {data.teacherId} </span>
      ),
    },
    {
      key: "subjects",
      label: "Subject",
      render: (_: any, data: any) => (
        <span className="text-sm font-medium"> {data.subjects.join(",")} </span>
      ),
    },
    {
      key: "classes",
      label: "Class(es)",
      render: (_: any, data: any) => (
        <span className="text-sm font-medium"> {data.classes.join(",")} </span>
      ),
    },
    {
      key: "phone",
      label: "Phone Number",
      render: (_: any, data: any) => (
        <span className="text-sm font-medium"> {data.phone} </span>
      ),
    },
    {
      key: "address",
      label: "Adress",
      render: (_: any, data: any) => (
        <span className="text-sm font-medium"> {data.address} </span>
      ),
    },
    {
      key: "actions",
      label: "Action",
      render: (_: any, data: any) => (
        <div className="flex items-center justify-center gap-2">
          {role === "admin" && <SquarePen color="#b0a6a6" size={17} />}
          {role === "admin" && <Trash2 color="#b0a6a6" size={17} />}
          <Link href={`/list/teachers/${data.id}`}>
            <RectangleEllipsis color="#b0a6a6" size={17} />
          </Link>
        </div>
      ),
    },
  ] as any;

  return (
    <div className="m-4 bg-white rounded-md  shadow-md space-y-4 ">
      {/* header */}
      <div className="flex items-center justify-between p-4 ">
        <h1 className="hidden md:block font-semibold text-gray-600 text-sm md:text-base ">
          All Teachers List
        </h1>
        <div className="w-full md:w-auto flex  items-center justify-center gap-4 ">
          <TableSearch />
          <div className="gap-2 flex items-center self-end">
            <span className="p-1.5 md:p-2 rounded-full bg-[#fae27c]">
              <HiAdjustmentsHorizontal size={15} />
            </span>
            <span className="p-1.5 md:p-2 rounded-full bg-[#fae27c]">
              <FaFilter size={14} />
            </span>
            <span className="p-1.5 md:p-2 rounded-full bg-[#fae27c]">
              <LuPlus size={15} />
            </span>
          </div>
        </div>
      </div>
      {/* table content */}
      <div className="w-full overflow-hidden overflow-x-auto">
        <Table column={columns} data={teachersData} rowKey="id" />
      </div>
      {/* pagination */}
      <Pagination />
    </div>
  );
};

export default TeacherListPage;
