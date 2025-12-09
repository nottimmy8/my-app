"use client";
import Table from "@/components/Table";
import TableNav from "@/components/TableNav";
import { SquarePen, Trash2 } from "lucide-react";
import Image from "next/image";

const BookData = [
  {
    id: 1,
    bookID: "2024-LIT-001-01",
    bookImg: "/NftDrawing.jpg",
    bookName: "Great Expectations",
    writer: "Charles Dickens",
    subject: "English Literature",
    class: "Class 12",
    publishDate: "1861",
    status: "Available",
  },
  {
    id: 2,
    bookID: "2024-SCI-002-01",
    bookImg: "/avatars",
    bookName: "Brief History of Time",
    writer: "Stephen Hawking",
    subject: "Science",
    class: "Class 10–12",
    publishDate: "1988",
    status: "Checked Out",
  },
  {
    id: 3,
    bookID: "2024-HIS-003-01",
    bookImg: "/avatars/student10.jpg",
    bookName: "A People's History of the United States",
    writer: "Howard Zinn",
    subject: "History",
    class: "Class 11–12",
    publishDate: "1980",
    status: "Available",
  },
  {
    id: 4,
    bookID: "2024-MATH-004-01",
    bookImg: "/avatars/student10.jpg",
    bookName: "Calculus Made Easy",
    writer: "Silvanus P. Thompson",
    subject: "Mathematics",
    class: "Class 12",
    publishDate: "1910",
    status: "Available",
  },
  {
    id: 5,
    bookID: "2024-BIO-005-01",
    bookImg: "/avatars/student10.jpg",
    bookName: "The Selfish Gene",
    writer: "Richard Dawkins",
    subject: "Biology",
    class: "Class 11",
    publishDate: "1976",
    status: "Checked Out",
  },
  {
    id: 6,
    bookID: "2024-ART-006-01",
    bookImg: "/avatars/student10.jpg",
    bookName: "The Story of Art",
    writer: "E.H. Gombrich",
    subject: "Art History",
    class: "Class 9–12",
    publishDate: "1950",
    status: "Available",
  },

  {
    id: 7,
    bookID: "2024-LIT-007-01",
    bookImg: "/avatars/student10.jpg",
    bookName: "To Kill a Mockingbird",
    writer: "Harper Lee",
    subject: "English Literature",
    class: "Class 10–12",
    publishDate: "1960",
    status: "Available",
  },
  {
    id: 8,
    bookID: "2024-SCI-008-01",
    bookImg: "/avatars/student10.jpg",
    bookName: "The Gene: An Intimate History",
    writer: "Siddhartha Mukherjee",
    subject: "Science",
    class: "Class 11–12",
    publishDate: "2016",
    status: "Checked Out",
  },
  {
    id: 9,
    bookID: "2024-HIS-009-01",
    bookImg: "/avatars/student10.jpg",
    bookName: "Sapiens: A Brief History of Humankind",
    writer: "Yuval Noah Harari",
    subject: "History",
    class: "Class 10–12",
    publishDate: "2011",
    status: "Available",
  },
  {
    id: 10,
    bookID: "2024-MATH-010-01",
    bookImg: "/avatars/student10.jpg",
    bookName: "Introduction to Algebra",
    writer: "Israel M. Gelfand",
    subject: "Mathematics",
    class: "Class 9–12",
    publishDate: "1969",
    status: "Available",
  },
];

const Librarypage = () => {
  const columns = [
    {
      Key: "bookID",
      label: (
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="w-4 h-4 rounded-2xl" />
          <span className="text-xs font-semibold text-[#667085]">Book ID</span>
        </label>
      ),
      render: (_: any, data: any) => (
        <span className="flex items-center gap-3">
          <input type="checkbox" className="w-4 h-4 rounded-2xl" />
          <span>{data.bookID}</span>
        </span>
      ),
    },

    {
      key: "bookName",
      label: "Book Name",
      render: (_: any, data: any) => (
        <div className="flex items-center gap-3">
          <Image
            src={data.bookImg}
            alt=""
            width={40}
            height={40}
            className="object-cover"
          />
          <span className="text-sm font-medium"> {data.bookName} </span>
        </div>
      ),
    },
    {
      key: "writer",
      label: "Writer",
      render: (_: any, data: any) => (
        <span className="text-sm font-medium"> {data.writer} </span>
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
      key: "class",
      label: "Class",
      render: (_: any, data: any) => (
        <span className="text-sm font-medium"> {data.class} </span>
      ),
    },
    {
      key: "publishDate",
      label: "Publish Date",
      render: (_: any, data: any) => (
        <span className="text-sm font-medium"> {data.publishDate} </span>
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
            status === "Available"
              ? "bg-green-100 text-green-700"
              : status === "Checked Out"
              ? "bg-red-100 text-red-700"
              : "bg-yellow-100 text-yellow-700"
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
        </div>
      ),
    },
  ] as any;

  return (
    <div className="m-4 bg-white rounded-md  shadow-md space-y-4">
      <TableNav title="All Books" />
      <div className="overflow-x-auto">
        <Table rowKey="id" column={columns} data={BookData} />
      </div>
    </div>
  );
};

export default Librarypage;
