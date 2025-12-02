import { Activity, ArrowUp } from "lucide-react";
import React from "react";

const FeesCard = () => {
  return (
    <div className=" bg-blue-400">
      <div className="flex items-center justify-between">
        <Activity />
        <span className="flex items-center  bg-white  p-1 px-2 rounded-xl w-max text-xs font-semibold">
          <ArrowUp />
          15%
        </span>
      </div>
      <h1>$126,450</h1>
      <p>Total Amount</p>
    </div>
  );
};

export default FeesCard;
