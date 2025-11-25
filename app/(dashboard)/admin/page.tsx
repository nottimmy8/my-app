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
      <div className="lg:w-2/3  grid grid-cols-1 lg:grid-cols-3  gap-4">
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

        <div className="w-full lg:col-span-3 grid grid-cols-3 gap-4">
          {/* Count Chart  */}
          <div className="w-full md:col-span-1 col-span-3  h-[400px]  ">
            <RadialChart />
          </div>
          {/* Attendance Chart */}
          <div className="w-full   md:col-span-2 col-span-3 h-[400px]  ">
            <AttendanceChart />
          </div>
        </div>

        {/* Bottom Chart */}
        <div className="w-full md:col-span-2 col-span-3  h-[450px] ">
          <FinanceChart />
        </div>
        <div className="md:col-span-1 col-span-3 flex    md:flex-col max-h-[450px] gap-4">
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
