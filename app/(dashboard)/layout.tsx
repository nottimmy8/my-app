import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logoo.png";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-screen flex">
      {/* Left */}
      <div
        className="  group
          p-4 
          bg-white 
          transition-all duration-300 
          w-[70px] hover:w-60 
          overflow-hidden
          shadow-md"
      >
        <Link href="/" className="flex items-center  gap-2">
          {/* <Image src={logo} alt="logo" width={40} height={40} /> */}
          <span className="text-gray-800 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Eduva
          </span>
        </Link>
        <Menu />
      </div>

      {/* Right */}
      <div className="flex-1 bg-[#F7F8FA] overflow-y-auto ">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
