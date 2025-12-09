import FeesCard from "@/components/FeesCard";
import PaymentChart from "@/components/PaymentChart";
import PaymentTable from "@/components/PaymentTable";
import React from "react";

const Paymentpage = () => {
  return (
    <div className="m-4 flex flex-col gap-8">
      {/* Top */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="w-full col-span-1 md:col-span-2 h-80 ">
          <PaymentChart />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FeesCard />
          <FeesCard />
          <FeesCard />
          <FeesCard />
        </div>
      </div>
      {/* Bottom */}
      <div>
        <PaymentTable />
      </div>
    </div>
  );
};

export default Paymentpage;
