"use client";
import { Eye } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaFilter } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { LuPlus } from "react-icons/lu";

interface data {
  paragraph: string;
  index: string;
}

const announcementData = [
  {
    id: 1,
    image: "/backtosck.jpg",
    title: "Welcome Back to School!",
    author: "Principal Linda Carter",
    date: "August 1, 2024",
    views: "1.2K",
    summary:
      "As we embark on another exciting academic year, let’s embrace the opportunities that lie ahead. We’re thrilled to welcome new faces and reunite with returning students. Don’t miss our opening assembly on August 5th!",
    description: [
      "As we embark on another exciting academic year, let’s embrace the opportunities that lie ahead. We’re thrilled to welcome new faces and reunite with returning students. Don’t miss our opening assembly on August 5th! ",
      "Attention students! To support your exam preparation, the library will offer extended hours starting September 15th. Join us fo additionall study sessions and access thousands of resources.Please bring and collect over 2,000 pounds of food for local food banks. ",
      "Attention students! To support your exam preparation, the library will offer extended hours starting September 15th. Join us fo additionall study sessions and access thousands of resources.Please bring and collect over 2,000 pounds of food for local food banks. ",
    ],
    tag: ["School", "Academic", "Student"],
  },
  {
    id: 2,
    image: "/sport.jpg",
    title: "Fall Sports Tryouts Schedule",
    author: "Coach Michael Jordan",
    date: "August 15, 2024",
    views: "850",
    summary:
      "Get ready to show your spirit and skills! Tryouts for soccer, volleyball, and football start next week. Check the gym bulletin board for exact dates and required gear. Go Eagles!",
    description: [
      "Get ready to show your spirit and skills! Tryouts for soccer, volleyball, and football start next week. Check the gym bulletin board for exact dates and required gear. Go Eagles!",
      "Get ready to show your spirit and skills! Tryouts for soccer, volleyball, and football start next week. Check the gym bulletin board for exact dates and required gear. Go Eagles!",
    ],
    tag: ["School", "Academic", "Student"],
  },
  {
    id: 3,
    image: "/NftDrawing.jpg",
    title: "Library Hours Extension",
    author: "Librarian Sarah Knox",
    date: "September 5, 2024",
    views: "500",
    summary:
      "Attention students! To support your exam preparation, the library will offer extended hours starting September 15th. Join us for additional study sessions and access thousands of resources!",
    description:
      "Attention students! To support your exam preparation, the library will offer extended hours starting September 15th. Join us for additional study sessions and access thousands of resources!",
  },
  {
    id: 4,
    image: "/NftDrawing.jpg",
    title: "Flu Vaccination Clinic",
    author: "Nurse Emily White",
    date: "October 10, 2024",
    views: "920",
    summary:
      "Protect yourself this flu season! The school nurse’s office will host a vaccination clinic on October 20th. Sign up in the main office. Vaccines are free and available to all students and staff.",
    description: [
      "Protect yourself this flu season! The school nurse’s office will host a vaccination clinic on October 20th. Sign up in the main office. Vaccines are free and available to all students and staff.",
      "Protect yourself this flu season! The school nurse’s office will host a vaccination clinic on October 20th. Sign up in the main office. Vaccines are free and available to all students and staff.",
    ],
    tag: ["School", "Academic", "Student"],
  },
  {
    id: 5,
    image: "/NftDrawing.jpg",
    title: "Annual Food Drive Kickoff",
    author: "Head of Student Council, Tom Briggs",
    date: "November 1, 2024",
    views: "400",
    summary:
      "Let’s make a difference together! Our annual food drive starts November 5th. Please bring non-perishable food items to Room 108. Help us reach our goal to collect over 2,000 pounds of food for local food banks.",
    description: [
      "Let’s make a difference together! Our annual food drive starts November 5th. Please bring non-perishable food items to Room 108. Help us reach our goal to collect over 2,000 pounds of food for local food banks.",
    ],
    tag: ["School", "Academic", "Student"],
  },
  {
    id: 6,
    image: "/NftDrawing.jpg",
    title: "Annual Food Drive Kickoff",
    author: "Head of Student Council, Tom Briggs",
    date: "November 1, 2024",
    views: "400",
    summary:
      "Let’s make a difference together! Our annual food drive starts November 5th. Please bring non-perishable food items to Room 108. Help us reach our goal to collect over 2,000 pounds of food for local food banks.",
    description: [
      "Let’s make a difference together! Our annual food drive starts November 5th. Please bring non-perishable food items to Room 108. Help us reach our goal to collect over 2,000 pounds of food for local food banks.",
    ],
    tag: ["School", "Academic", "Student"],
  },
  {
    id: 7,
    image: "/NftDrawing.jpg",
    title: "Annual Food Drive Kickoff",
    author: "Head of Student Council, Tom Briggs",
    date: "November 1, 2024",
    views: "400",
    summary:
      "Let’s make a difference together! Our annual food drive starts November 5th. Please bring non-perishable food items to Room 108. Help us reach our goal to collect over 2,000 pounds of food for local food banks.",
    description: [
      "Let’s make a difference together! Our annual food drive starts November 5th. Please bring non-perishable food items to Room 108. Help us reach our goal to collect over 2,000 pounds of food for local food banks.",
    ],
    tag: ["School", "Academic", "Student"],
  },
];

const Noticepage = () => {
  const [selected, setSelected] = React.useState(announcementData[0]);
  return (
    <div className="m-4 bg-white rounded-md  shadow-md space-y-4 ">
      {/* top */}
      <div className="flex items-center justify-between p-5 ">
        <h1 className="font-semibold text-gray-600 text-sm md:text-base ">
          Notice Board
        </h1>
        <div className=" flex items-center justify-center gap-4 ">
          <span className="flex items-center gap-2 text-xs rounded-full ring-[1px] ring-gray-300 px-2 py-1.5 md:py-0  ">
            <Image src="/search.png" alt="search" width={14} height={14} />
            <input
              type="text"
              placeholder="Search by Title or Author"
              className="hidden md:block w-[100px] md:w-[200px] p-1.5 bg-transparent outline-none "
            />
          </span>
          <div className="gap-2 flex">
            <span className="p-1.5 md:p-2 rounded-full bg-[#fae27c]">
              <HiAdjustmentsHorizontal size={15} />
            </span>

            <span className="p-1.5 md:p-2 rounded-full bg-[#fae27c]">
              <LuPlus size={15} />
            </span>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full px-4 pb-4  ">
        {/* bottom right */}
        <div className="col-span-2   space-y-4  h-screen overflow-y-auto  ">
          {announcementData.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelected(item)}
              className={`border rounded-2xl p-4 shadow-sm cursor-pointer
  ${selected.id === item.id ? "bg-[#EEF3FF]" : "hover:bg-[#F7F8FA] "}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  {/* <Image src={} alt=""/> */}
                  <span className="flex flex-col  ">
                    <span className="font-semibold text-gray-900">
                      {item.title}
                    </span>
                    <span className="text-gray-600 text-xs">
                      By {item.author}
                    </span>
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span
                    className={`text-gray-600  p-1 px-3 rounded-xl w-max text-xs font-semibold  ${
                      selected.date === item.date ? "bg-white" : "bg-gray-100"
                    }`}
                  >
                    {item.date}
                  </span>
                  <span className=" text-gray-600  font-semibold text-xs flex items-center gap-1  ">
                    <Eye size={15} />
                    {item.views}
                  </span>
                </div>
              </div>
              {/*  */}
              <div className="text-sm font-normal text-gray-600">
                {item.summary}
              </div>
            </div>
          ))}
        </div>
        {/* bottom left */}
        <div className="  hidden md:flex md:flex-col col-span-1 p-3 border rounded-2xl shadow-sm space-y-2">
          <Image
            src={selected.image}
            alt={selected.title}
            width={400}
            height={200}
            className="rounded-md mb-3 w-full h-[200px] object-cover "
          />

          <div className="flex flex-col mb-3">
            <h2 className=" font-semibold text-gray-900">{selected.title} </h2>
            <p className="text-gray-600 text-xs">By {selected.author} </p>
          </div>
          <div className="flex items-center text-xs gap-2 mb-3">
            <p className="p-1 px-3 rounded-xl w-max text-xs font-semibold text-gray-600  bg-gray-100">
              {" "}
              {selected.date}{" "}
            </p>
            <span className="text-gray-600  flex items-center gap-1 font-semibold text-xs">
              <Eye size={14} /> {selected.views}
            </span>
          </div>

          <div className="w-full h-[220px] overflow-y-auto ">
            {(Array.isArray(selected.description)
              ? selected.description
              : [selected.description]
            ).map((paragraph: string, index: number) => (
              <p key={index} className="text-sm text-gray-600 mb-2">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-2 mt-4  ">
            <h6 className="font-semibold text-sm text-gray-600 "> Tag </h6>
            <span className="flex items-center gap-2">
              {selected.tag?.map((tags, index) => (
                <div
                  key={index}
                  className={`p-1 px-3 rounded-full text-xs shadow-xs 
                     ${
                       tags === "School"
                         ? "bg-blue-100 text-blue-700"
                         : tags === "Academic"
                         ? "bg-red-100 text-red-700"
                         : "bg-yellow-100 text-yellow-700"
                     }`}
                >
                  {tags}
                </div>
              ))}
            </span>
          </div>
          <button className="text-xs text-gray-600 mt-4 font-semibold rounded-full w-full p-2.5 px-4 bg-[#EEF3FF] hover:bg-[#F7F8FA] ">
            Read Full Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Noticepage;
