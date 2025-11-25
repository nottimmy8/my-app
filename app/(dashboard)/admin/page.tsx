import ActivityStats from "@/components/ActivityStats";
import AttendanceChart from "@/components/AttendanceChart";
import ChatBox from "@/components/ChatBox";
import EventCalendar from "@/components/EventCalendar";
import Calendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import { RadialChart } from "@/components/RadialChart";
import UserCard from "@/components/UserCard";
import { FaAddressCard } from "react-icons/fa";

import { HiPresentationChartLine } from "react-icons/hi";
import { BiSolidChart } from "react-icons/bi";
import React from "react";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row ">
      {/* LEFT */}
      <div className="  grid grid-cols-1 lg:grid-cols-3  gap-4">
        {/* user card */}
        <div className="col-span-3">
          <div className=" flex gap-4 justify-between flex-wrap ">
            <UserCard type="Students" />
            <UserCard type="Teachers" />
            <UserCard type="Staffs" />
            <UserCard type="Awards" />
          </div>
        </div>
        {/* Chart */}

        {/* Count Chart  */}
        <div className="sm:col-span-1 col-span-3  h-[400px]  ">
          <RadialChart />
        </div>
        {/* Attendance Chart */}
        <div className="   sm:col-span-2 col-span-3 h-[400px]  ">
          <AttendanceChart />
        </div>

        {/* Bottom Chart */}
        <div className=" sm:col-span-2 col-span-3  h-[500px] ">
          <FinanceChart />
        </div>
        <div className="sm:col-span-1 col-span-3 flex   sm:flex-col h-[500px] gap-4">
          <ActivityStats
            icon={<FaAddressCard />}
            icon2={<BiSolidChart />}
            value="24,680"
            label="Olympics Students"
            percentage="15"
          />
          <ActivityStats
            icon={<HiPresentationChartLine />}
            icon2={<BiSolidChart />}
            value="3,000"
            label="Competition"
            percentage="8"
          />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <ChatBox />
      </div>
    </div>
  );
};

export default AdminPage;
