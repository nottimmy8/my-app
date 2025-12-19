import BigCalendar from "@/components/BigCalendar";
import ChatBox from "@/components/ChatBox";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";

const TeacherDetailPage = () => {
  return (
    <div className="p-4 flex-1 flex flex-col gap-4 xl:flex-row ">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO */}
          <div className=" bg-[#c3ebfa] py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="rounded-full object-cover w-36 h-36"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Leonard Snyder</h1>
              <p className="text-sm text-gray-500 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className=" w-full md:w-1/3 lg:w-full 2xl:w-1/3  flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className=" w-full md:w-1/3 lg:w-full 2xl:w-1/3  flex items-center gap-2">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>January 2025</span>
                </div>
                <div className=" w-full md:w-1/3 lg:w-full 2xl:w-1/3  flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>user@gmail.com</span>
                </div>
                <div className=" w-full md:w-1/3 lg:w-full 2xl:w-1/3  flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>123-456-7890</span>
                </div>
              </div>
            </div>
          </div>
          {/* small card */}
          <div className=" flex-1 flex gap-4 justify-between flex-wrap">
            <div className="w-full bg-white p-4 rounded-md flex gap-4 md:w-[ 48%] xl:w-[45%] 2xl:w-[48%] ">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400 ">Attendance</span>
              </div>
            </div>

            <div className="w-full  bg-white p-4 rounded-md flex gap-4 md:w-[ 48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm text-gray-400 ">Branches</span>
              </div>
            </div>

            <div className="w-full  bg-white p-4 rounded-md flex gap-4 md:w-[ 48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">6%</h1>
                <span className="text-sm text-gray-400 ">Lessons</span>
              </div>
            </div>

            <div className="w-full  bg-white p-4 rounded-md flex gap-4 md:w-[ 48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400 ">Classes</span>
              </div>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px] ">
          <h1>Teacher Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold ">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-blue-200 " href="/">
              Teachers Classes
            </Link>
            <Link className="p-3 rounded-md bg-purple-200 " href="/">
              Teachers Students
            </Link>
            <Link className="p-3 rounded-md bg-yellow-200 " href="/">
              Teachers Lessons
            </Link>
            <Link className="p-3 rounded-md bg-pink-200" href="/">
              Teachers Exams
            </Link>
            <Link className="p-3 rounded-md bg-blue-200" href="/">
              Teachers Assignment
            </Link>
          </div>
        </div>
        <Performance />
        <ChatBox />
      </div>
    </div>
  );
};

export default TeacherDetailPage;
