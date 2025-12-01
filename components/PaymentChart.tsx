"use client";
import Image from "next/image";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const data = [
  {
    name: "",
    uv: 4000,
    pv: 0,
    amt: 2400,
  },
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 6800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    uv: 3490,
    pv: 5300,
    amt: 2100,
  },
  {
    name: "Sep",
    uv: 3490,
    pv: 4700,
    amt: 2100,
  },
  {
    name: "Oct",
    uv: 3490,
    pv: 4000,
    amt: 2100,
  },
  {
    name: "Nov",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Dec",
    uv: 3490,
    pv: 3700,
    amt: 2100,
  },
];
const PaymentChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold ">Fees Collection</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <AreaChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 40,
            right: 30,
            left: 20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#c0c1c0" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            type="number"
            ticks={[0, 1000, 2500, 5000, 7500]}
            tick={{ fill: "#c0c1c0" }}
            tickLine={false}
            tickCount={6}
            axisLine={false}
          />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="pv"
            stroke="#f9dd79"
            fill="#fcf4ca"
            strokeWidth={4}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PaymentChart;
