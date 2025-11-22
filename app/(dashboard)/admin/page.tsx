import AttendanceChart from "@/components/AttendanceChart";
import EventCalendar from "@/components/EventCalendar";
import Calendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import { RadialChart } from "@/components/RadialChart";
import UserCard from "@/components/UserCard";
import React from "react";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row ">
      {/* LEFT */}
      <div className="w-full   lg:w-2/3 flex flex-col gap-8">
        {/* user card */}
        <div className="flex gap-4 justify-between flex-wrap ">
          <UserCard type="Students" />
          <UserCard type="Teachers" />
          <UserCard type="Staffs" />
          <UserCard type="Awards" />
        </div>
        {/* Chart */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Count Chart  */}
          <div className="w-full lg:w-1/3 h-[450px] ">
            <RadialChart />
          </div>
          {/* Attendance Chart */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* Bottom Chart */}
        <div className="w-full h-[500px] ">
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
      </div>
    </div>
  );
};

export default AdminPage;
