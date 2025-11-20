"use client";

import Image from "next/image";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 60,
    absent: 40,
  },
  {
    name: "Tue",
    present: 70,
    absent: 60,
  },
  {
    name: "Wed",
    present: 90,
    absent: 75,
  },
  {
    name: "Thu",
    present: 80,
    absent: 75,
  },
  {
    name: "Fri",
    present: 65,
    absent: 55,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg h-full p-4">
      {/* title */}
      <div className="flex items-center justify-between ">
        <h1>Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      {/* Chart */}

      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} barSize={20} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar dataKey="present" fill="#fae27c" legendType="circle" />
          <Bar dataKey="absent" fill="#c3ebfa" legendType="circle" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
