import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { classesData, role } from "@/lib/data";
import { RectangleEllipsis, SquarePen, Trash2 } from "lucide-react";

import Link from "next/link";

import { FaFilter } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { LuPlus } from "react-icons/lu";

const ClassListPage = () => {
  const columns = [
    {
      key: "name",
      label: "Class Name",
      render: (_: any, data: any) => (
        <span className="text-sm font-medium"> {data.name}</span>
      ),
    },

    {
      key: "capacity",
      label: "Capacity",
      render: (_: any, data: any) => (
        <span className="text-sm font-medium">{data.capacity}</span>
      ),
    },
    {
      key: "id",
      label: "Grade",
      render: (_: any, data: any) => (
        <span className="text-sm font-medium">{data.grade}</span>
      ),
    },
    {
      key: "supervisor",
      label: "Supervisor",
      render: (_: any, data: any) => (
        <span className="text-sm font-medium">{data.supervisor}</span>
      ),
    },

    {
      key: "actions",
      label: "Action",
      render: (_: any, data: any) => (
        <div className="flex items-center justify-start gap-2">
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
          All Classes
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
        <Table column={columns} data={classesData} rowKey="id" />
      </div>
      {/* pagination */}
      <Pagination />
    </div>
  );
};

export default ClassListPage;
