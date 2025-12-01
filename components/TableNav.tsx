import Image from "next/image";
import React from "react";
import { FaFilter } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { LuPlus } from "react-icons/lu";

interface TableNavProps {
  title: string;
  icon1?: React.ReactNode;
  icon2?: React.ReactNode;
  icon3?: React.ReactNode;
}

const TableNav = ({ title, icon1, icon2, icon3 }: TableNavProps) => {
  return (
    <div className="flex items-center justify-between p-4 ">
      <h1 className="font-semibold text-gray-600 text-sm md:text-base ">
        {title}
      </h1>
      <div className=" flex items-center justify-center gap-4 ">
        <span className="flex items-center gap-2 text-xs rounded-full ring-[1px] ring-gray-300 px-2 py-1.5 md:py-0  ">
          <Image src="/search.png" alt="search" width={14} height={14} />
          <input
            type="text"
            placeholder="Search by ID Name or Subject"
            className="hidden md:block w-[100px] md:w-[200px] p-1.5 bg-transparent outline-none "
          />
        </span>
        <div className="gap-2 flex">
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
  );
};

export default TableNav;
