import Image from "next/image";
import React from "react";
import { FaFilter } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { LuPlus } from "react-icons/lu";

const page = () => {
  return (
    <div className="p-4">
      {/* header */}
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-gray-600">All Teachers List</h1>
        <div className=" flex items-center justify-center gap-4 ">
          <span className="flex items-center gap-2 text-xs rounded-full ring-[1px] ring-gray-300 px-2  ">
            <Image src="/search.png" alt="search" width={14} height={14} />
            <input
              type="text"
              placeholder="Search by ID Name or Subject"
              className="w-[200px] p-1.5 bg-transparent outline-none "
            />
          </span>
          <div className="gap-2 flex">
            <span className="p-2 rounded-full bg-[#fae27c]">
              <HiAdjustmentsHorizontal size={15} />
            </span>
            <span className="p-2 rounded-full bg-[#fae27c]">
              <FaFilter size={15} className="" />
            </span>
            <span className="p-2 rounded-full bg-[#fae27c]">
              <LuPlus size={15} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
