import React from "react";
import TableNav from "./TableNav";
import Image from "next/image";
import { Key, RectangleEllipsis, SquarePen, Trash2 } from "lucide-react";
import Table from "./Table";

const paymentData = [
  {
    id: 1,
    stuName: "Sophia Wilson",
    class: "11A",
    tuttionfess: "$4,500",
    activityfees: "$300",
    miscellenous: "$200",
    amount: "$5,000",
    status: "Paid",
  },
  {
    id: 2,
    stuName: "Ethan Lee",
    class: "10B",
    tuttionfess: "$4,500",
    activityfees: "$250",
    miscellenous: "$150",
    amount: "$4,900",
    status: "Pending",
  },
  {
    id: 3,
    stuName: "Michael Brown",
    class: "12 AP Calculus",
    tuttionfess: "$4,800",
    activityfees: "$300",
    miscellenous: "$200",
    amount: "$5,300",
    status: "Paid",
  },
  {
    id: 4,
    stuName: "Ava Smith",
    class: "9B",
    tuttionfess: "$4,500",
    activityfees: "$250",
    miscellenous: "$100",
    amount: "$4,850",
    status: "Overdue",
  },
  {
    id: 5,
    stuName: "Lucas Johnson",
    class: "11A",
    tuttionfess: "$4,500",
    activityfees: "$300",
    miscellenous: "$200",
    amount: "$5,000",
    status: "Paid",
  },

  {
    id: 6,
    stuName: "Grace Martinez",
    class: "10A",
    tuttionfess: "$4,600",
    activityfees: "$280",
    miscellenous: "$150",
    amount: "$5,030",
    status: "Pending",
  },
  {
    id: 7,
    stuName: "Henry Adams",
    class: "12B",
    tuttionfess: "$4,900",
    activityfees: "$320",
    miscellenous: "$210",
    amount: "$5,430",
    status: "Paid",
  },
  {
    id: 8,
    stuName: "Chloe Bennett",
    class: "9A",
    tuttionfess: "$4,400",
    activityfees: "$250",
    miscellenous: "$160",
    amount: "$4,810",
    status: "Overdue",
  },
  {
    id: 9,
    stuName: "Noah Carter",
    class: "11C",
    tuttionfess: "$4,700",
    activityfees: "$310",
    miscellenous: "$190",
    amount: "$5,200",
    status: "Paid",
  },
  {
    id: 10,
    stuName: "Isabella Turner",
    class: "10C",
    tuttionfess: "$4,550",
    activityfees: "$295",
    miscellenous: "$175",
    amount: "$5,020",
    status: "Pending",
  },
];

const PaymentTable = () => {
  const columns = [
    {
      Key: "stuName",
      label: (
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="w-4 h-4 rounded-2xl" />
          <span className="text-xs font-semibold text-[#667085]">
            Student Name
          </span>
        </label>
      ),
      render: (_: any, data: any) => (
        <span className="flex items-center gap-3">
          <input type="checkbox" className="w-4 h-4 rounded-2xl" />
          <span>{data.stuName}</span>
        </span>
      ),
    },

    {
      key: "class",
      label: "Class",
      render: (_: any, data: any) => (
        <span className="text-sm font-medium"> {data.class} </span>
      ),
    },
    {
      key: "tuttionfess",
      label: "Tuition Fee",
      render: (_: any, data: any) => (
        <span className="text-sm font-medium"> {data.tuttionfess} </span>
      ),
    },
    {
      key: "activityfees",
      label: "Activity Fee",
      render: (_: any, data: any) => (
        <span className="text-sm font-medium"> {data.activityfees} </span>
      ),
    },
    {
      key: "miscellenous",
      label: "Miscellenous",
      render: (_: any, data: any) => (
        <span className="text-sm font-medium"> {data.miscellenous} </span>
      ),
    },
    {
      key: "amount",
      label: "Amount",
      render: (_: any, data: any) => (
        <span className="text-sm font-medium"> {data.amount} </span>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (_: any, data: any) => {
        const status = data.status.toLowerCase(); // "Paid", "Pending", "Overdue"

        return (
          <div
            className={`
          p-1 px-3 rounded-xl w-max text-xs font-semibold
          ${
            status === "paid"
              ? "bg-green-100 text-green-700"
              : status === "pending"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }
        `}
          >
            {data.status}
          </div>
        );
      },
    },
    {
      key: "actions",
      label: "Action",
      render: (_: any, data: any) => (
        <div className="flex items-center gap-2">
          <SquarePen color="#b0a6a6" size={17} />
          <Trash2 color="#b0a6a6" size={17} />
          <RectangleEllipsis color="#b0a6a6" size={17} />
        </div>
      ),
    },
  ] as any;
  return (
    <div className="bg-white rounded-md shadow-md space-y-4">
      <div className="flex items-center justify-between p-4 ">
        <h1 className="font-semibold text-gray-600 text-sm md:text-base ">
          Fees Collection
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
          <div className="gap-2 flex"></div>
        </div>
      </div>
      <Table column={columns} data={paymentData} rowKey="id" />
    </div>
  );
};

export default PaymentTable;
