import { time, timeStamp } from "console";
import Image from "next/image";

const data = [
  {
    id: 1,
    sender: "Dr. Lila Ramirez",
    message:
      "Please ensure the monthly attendance report is accurate before the April 30th deadline.",
    timestamp: "9:30 AM",
    profilePic: "/avatar.png",
  },
  {
    id: 2,
    sender: "Ms. Heather Morris",
    message:
      "Please ensure the monthly attendance report is accurate before the April 30th deadline.",
    timestamp: "10:15 AM",
    profilePic: "/avatar.png",
  },
  {
    id: 3,
    sender: "Mr. Carl Jenkins",
    message:
      "Please ensure the monthly attendance report is accurate before the April 30th deadline.",
    timestamp: "11:00 AM",
    profilePic: "/avatar.png",
  },
  {
    id: 4,
    sender: "Mr. Carl Jenkins",
    message:
      "Please ensure the monthly attendance report is accurate before the April 30th deadline.",
    timestamp: "11:00 AM",
    profilePic: "/avatar.png",
  },
  {
    id: 5,
    sender: "Mr. Carl Jenkins",
    message:
      "Please ensure the monthly attendance report is accurate before the April 30th deadline.",
    timestamp: "11:00 AM",
    profilePic: "/avatar.png",
  },
];
const ChatBox = () => {
  return (
    <div className="bg-white p-4 rounded-2xl ">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold  ">Messages</h1>
        <div className="text-sm text-gray-500">View All</div>
      </div>

      <div className="flex flex-col gap-4 ">
        {data.map((chat) => (
          <div
            key={chat.id}
            className=" flex items-start justify-between gap-4"
          >
            <div>
              <Image
                src={chat.profilePic}
                alt=""
                width={70}
                height={70}
                className="  rounded-full "
              />
            </div>
            <div>
              <div className=" flex items-center justify-between gap-4">
                <h1 className="text-sm font-semibold "> {chat.sender} </h1>
                <span className="text-xs text-gray-500 font-semibold">
                  {chat.timestamp}{" "}
                </span>
              </div>
              <p className="text-sm text-gray-500"> {chat.message} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatBox;
