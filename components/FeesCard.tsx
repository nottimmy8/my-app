import { Activity, ArrowUp } from "lucide-react";

const FeesCard = () => {
  return (
    // <div className="grid grid-cols-2 gap-4">
    <div className="rounded-2xl shadow-md bg-[#c4ebfa] p-4  flex-1 min-w-[130px]">
      <div className="flex items-center justify-between mb-8">
        <Activity size={24} color="white" />
        <span className="flex items-center  bg-white  px-2 py-1 rounded-full text-xs font-semibold">
          <ArrowUp size={14} />
          15%
        </span>
      </div>
      <span className=" ">
        <h1 className="text-2xl font-semibold ">$126,450</h1>
        <p className=" text-sm font-medium text-gray-600">Total Amount</p>
      </span>
    </div>
    // </div>
  );
};

export default FeesCard;
