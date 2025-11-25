"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/admin",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        href: "/teacher",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/student",
        visible: ["admin", "teacher"],
      },

      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/message",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];
const Menu = () => {
  const pathname = usePathname();
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span
            className=" text-gray-400 font-light 
            opacity-0 group-hover:opacity-100 
            transition-opacity duration-300"
          >
            {i.title}{" "}
          </span>
          {i.items.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className={`flex items-center gap-4 py-2 px-2 rounded-md transition-colors duration-300 ${
                pathname === item.href ||
                pathname.startsWith(item.href + "/admin")
                  ? "bg-[#F7F8FA] font-semibold text-gray-600"
                  : "text-gray-500 hover:bg-[#F7F8FA] hover:font-semibold"
              }`}
            >
              <Image src={item.icon} alt="" width={20} height={20} />
              <span
                className=" opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300
                  whitespace-nowrap"
              >
                {item.label}{" "}
              </span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
