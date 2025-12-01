import Table from "@/components/Table";
import { Key, RectangleEllipsis, SquarePen, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaEdit, FaFilter } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { LuPlus } from "react-icons/lu";
export const teacherdata = [
  {
    id: 1,
    identity: {
      name: "Ms. Elizabeth Johnson",
      photo: "/NftDrawing.jpg",
      email: "johnson@edugrowth.edu",
    },
    schoolID: "SI-ENG-123",
    subject: "English Literature",
    classAssigned: "9A, 10B",
    phone: "(555) 101-0100",
    address: "123 Elm St, Springfield, IL",
  },
  {
    id: 2,
    identity: {
      name: "Mr. Carlos Garcia",
      photo: "/NftDrawing.jpg",
      email: "cgarcia@edugrowth.edu",
    },
    schoolID: "GRC-HIS-456",
    subject: "History",
    classAssigned: "8C, 11A",
    phone: "(555) 101-0102",
    address: "456 Oak Ave., Springfield, IL",
  },
  {
    id: 3,
    identity: {
      name: "Ms. Angela Jackson",
      photo: "/NftDrawing.jpg",
      email: "ajackson@edugrowth.edu",
    },
    schoolID: "JCK-MATH-789",
    subject: "Math",
    classAssigned: "7A, 12AP Calculus",
    phone: "(555) 101-0103",
    address: "789 Pine Rd., Springfield, IL",
  },
  {
    id: 4,
    identity: {
      name: "Mr. Luis Rodrig",
      photo: "/NftDrawing.jpg",
      email: "lrodrig@edugrowth.edu",
    },
    schoolID: "ROD-DRA-012",
    subject: "Drama",
    classAssigned: "Drama Club",
    phone: "(555) 101-0104",
    address: "012 Maple Dr., Springfield, IL",
  },
  {
    id: 5,
    identity: {
      name: "Ms. Susan Chen",
      photo: "/NftDrawing.jpg",
      email: "schen@edugrowth.edu",
    },
    schoolID: "CHN-SCI-345",
    subject: "Science",
    classAssigned: "8B, 9B Biology",
    phone: "(555) 101-0105",
    address: "345 Birch Ln., Springfield, IL",
  },
  {
    id: 6,
    identity: {
      name: "Mr. William Blake",
      photo: "/NftDrawing.jpg",
      email: "wblake@edugrowth.edu",
    },
    schoolID: "THM-HIS-678",
    subject: "History",
    classAssigned: "10A, 11AP World History",
    phone: "(555) 101-0106",
    address: "678 Cedar Blvd, Springfield, IL",
  },
  {
    id: 7,
    identity: {
      name: "Ms. Emily Lee",
      photo: "/NftDrawing.jpg",
      email: "elee@edugrowth.edu",
    },
    schoolID: "LEE-ENG-901",
    subject: "English",
    classAssigned: "7B, 8A",
    phone: "(555) 101-0107",
    address: "091 Walnut St., Springfield, IL",
  },
  {
    id: 8,
    identity: {
      name: "Mr. Fernando Davis",
      photo: "/NftDrawing.jpg",
      email: "fdavis@edugrowth.edu",
    },
    schoolID: "HER-SPA-234",
    subject: "Spanish",
    classAssigned: "Spanish I, Spanish II",
    phone: "(555) 101-0108",
    address: "234 Spruce Way, Springfield, IL",
  },
  {
    id: 9,
    identity: {
      name: "Ms. Laura Lopez",
      photo: "/NftDrawing.jpg",
      email: "llopez@edugrowth.edu",
    },
    schoolID: "LOP-MATH-567",
    subject: "Math",
    classAssigned: "7C, Pre-Algebra",
    phone: "(555) 101-0109",
    address: "567 Redwood Ct., Springfield, IL",
  },
  {
    id: 10,
    identity: {
      name: "Mr. Daniel Kim",
      photo: "/NftDrawing.jpg",
      email: "dkim@edugrowth.edu",
    },
    schoolID: "KIM-ART-890",
    subject: "Art",
    classAssigned: "Art I, Art II",
    phone: "(555) 101-0110",
    address: "890 Fir St., Springfield, IL",
  },
];
const page = () => {
  const columns = [
    {
      key: "identity",
      label: (
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="w-4 h-4 rounded-2xl" />
          <span className="text-xs font-semibold text-[#667085]">
            Teacher Name
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
      key: "subject",
      label: "Subject",
      render: (_: any, data: any) => (
        <span className="text-sm font-medium"> {data.subject} </span>
      ),
    },
    {
      key: "classAssigned",
      label: "Class(es)",
      render: (_: any, data: any) => (
        <span className="text-sm font-medium"> {data.classAssigned} </span>
      ),
    },
    {
      key: "phone",
      label: "Phone Number",
      render: (_: any, data: any) => (
        <span className="text-sm font-medium"> {data.phone} </span>
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
      {/* header */}
      <div className="flex items-center justify-between p-4 ">
        <h1 className="font-semibold text-gray-600 text-sm md:text-base ">
          All Teachers List
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
      {/* table content */}
      <div className="w-full overflow-hidden overflow-x-auto">
        <Table column={columns} data={teacherdata} rowKey="id" />
      </div>
    </div>
  );
};

export default page;
