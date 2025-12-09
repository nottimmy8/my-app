import Table from "@/components/Table";
import TableNav from "@/components/TableNav";
import { RectangleEllipsis, SquarePen, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";

const studentData = [
  {
    id: 1,
    identity: {
      name: "Sandra Okafor",
      photo: "/avatars/student1.jpg",
      email: "sandra.okafor@edugrowth.edu",
    },
    schoolID: "STU001",
    gender: "Female",
    class: "SS2A",
    attendance: "92%",
    parentPhone: "(234) 801-110-2200",
    address: "12 Adeola Street, Lagos",
  },
  {
    id: 2,
    identity: {
      name: "Emmanuel Johnson",
      photo: "/avatars/student2.jpg",
      email: "emmanuel.johnson@edugrowth.edu",
    },
    schoolID: "STU002",
    gender: "Male",
    class: "SS1B",
    attendance: "88%",
    parentPhone: "(234) 802-330-4500",
    address: "45 Unity Road, Abuja",
  },
  {
    id: 3,
    identity: {
      name: "Mary Abiola",
      photo: "/avatars/student3.jpg",
      email: "mary.abiola@edugrowth.edu",
    },
    schoolID: "STU003",
    gender: "Female",
    class: "JSS3A",
    attendance: "95%",
    parentPhone: "(234) 803-440-5500",
    address: "Lekki Phase 2, Lagos",
  },
  {
    id: 4,
    identity: {
      name: "Taiwo Adeyemi",
      photo: "/avatars/student4.jpg",
      email: "taiwo.adeyemi@edugrowth.edu",
    },
    schoolID: "STU004",
    gender: "Male",
    class: "JSS2C",
    attendance: "89%",
    parentPhone: "(234) 805-660-7700",
    address: "18 Unity Avenue, Ibadan",
  },
  {
    id: 5,
    identity: {
      name: "Chinedu Nwankwo",
      photo: "/avatars/student5.jpg",
      email: "chinedu.nwankwo@edugrowth.edu",
    },
    schoolID: "STU005",
    gender: "Male",
    class: "SS3C",
    attendance: "93%",
    parentPhone: "(234) 807-880-9900",
    address: "Zik Avenue, Enugu",
  },
  {
    id: 6,
    identity: {
      name: "Aisha Suleiman",
      photo: "/avatars/student6.jpg",
      email: "aisha.suleiman@edugrowth.edu",
    },
    schoolID: "STU006",
    gender: "Female",
    class: "JSS1B",
    attendance: "90%",
    parentPhone: "(234) 809-221-3344",
    address: "35 Ibrahim Taiwo Road, Kano",
  },
  {
    id: 7,
    identity: {
      name: "Victor Adebanjo",
      photo: "/avatars/student7.jpg",
      email: "victor.adebanjo@edugrowth.edu",
    },
    schoolID: "STU007",
    gender: "Male",
    class: "SS2C",
    attendance: "87%",
    parentPhone: "(234) 810-556-7788",
    address: "4 Omole Estate, Ikeja, Lagos",
  },
  {
    id: 8,
    identity: {
      name: "Blessing Osei",
      photo: "/avatars/student8.jpg",
      email: "blessing.osei@edugrowth.edu",
    },
    schoolID: "STU008",
    gender: "Female",
    class: "JSS3B",
    attendance: "96%",
    parentPhone: "(234) 811-667-8899",
    address: "22 GRA Phase 2, Port Harcourt",
  },
  {
    id: 9,
    identity: {
      name: "Samuel Okon",
      photo: "/avatars/student9.jpg",
      email: "samuel.okon@edugrowth.edu",
    },
    schoolID: "STU009",
    gender: "Male",
    class: "SS1A",
    attendance: "91%",
    parentPhone: "(234) 812-778-9911",
    address: "Ibagwa Street, Uyo",
  },
  {
    id: 10,
    identity: {
      name: "Precious Balogun",
      photo: "/avatars/student10.jpg",
      email: "precious.balogun@edugrowth.edu",
    },
    schoolID: "STU010",
    gender: "Female",
    class: "JSS2A",
    attendance: "94%",
    parentPhone: "(234) 813-889-2233",
    address: "12 Oluyole Estate, Ibadan",
  },
];

const StudentPage = () => {
  const columns = [
    {
      key: "identity",
      label: (
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="w-4 h-4 rounded-2xl" />
          <span className="text-xs font-semibold text-[#667085]">
            Student Name
          </span>
        </label>
      ),
      render: (_: any, data: any) => (
        <div className="flex items-center gap-3">
          <input type="checkbox" className="w-4 h-4 rounded-2xl" />
          <Image
            src={data.identity.photo}
            alt={data.identity.name}
            width={40}
            height={40}
            className="rounded-full object-cover "
          />
          <div className="leading-tight flex flex-col ">
            <span className="font-semibold text-xs ">
              {" "}
              {data.identity.name}{" "}
            </span>
            <span className="text-xs text-gray-500 italic">
              {data.identity.email}{" "}
            </span>
          </div>
        </div>
      ),
    },
    {
      key: "schoolID",
      label: "School ID",
      render: (_: any, data: any) => (
        <span className="text-sm font-medium"> {data.schoolID} </span>
      ),
    },
    {
      key: "gender",
      label: "Gender",
      render: (_: any, data: any) => (
        <span className="text-sm font-medium"> {data.gender} </span>
      ),
    },
    {
      key: "class",
      label: "Class(es)",
      render: (_: any, data: any) => (
        <span className="text-sm font-medium"> {data.class} </span>
      ),
    },
    {
      key: "attendance",
      label: "Attendance",
      render: (_: any, data: any) => (
        <span className="text-sm font-medium"> {data.attendance} </span>
      ),
    },
    {
      key: "parentPhone",
      label: "Parent Number",
      render: (_: any, data: any) => (
        <span className="text-sm font-medium"> {data.parentPhone} </span>
      ),
    },
    {
      key: "address",
      label: "Adress",
      render: (_: any, data: any) => (
        <span className="text-sm font-medium"> {data.address} </span>
      ),
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
    <div className="m-4 bg-white rounded-md  shadow-md space-y-4 ">
      <TableNav title="All Student List" />
      <div className="overflow-x-auto">
        <Table column={columns} data={studentData} rowKey="id" />
      </div>
    </div>
  );
};

export default StudentPage;
