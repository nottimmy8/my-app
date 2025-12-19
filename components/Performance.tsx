"use client";
import Image from "next/image";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

// #region Sample data
const data = [
  { name: "Group A", value: 92, fill: "#c3ebfa" },
  { name: "Group B", value: 8, fill: "#fae27c" },
];
const Performance = () => {
  return (
    <div className="bg-white p-4 rounded-md h-80">
      <div className=" flex items-center justify-between mb-4 ">
        <h1 className="text-xl font-semibold">Performance</h1>
        <Image
          src="/moreDark.png"
          alt=""
          width={16}
          height={16}
          className="float-right"
        />
      </div>

      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          aspectRatio: 2,
        }}
        responsive
      >
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          fill="#8884d8"
        />
      </PieChart>
    </div>
  );
};

export default Performance;
