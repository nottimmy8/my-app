import FeesCard from "@/components/FeesCard";
import PaymentChart from "@/components/PaymentChart";
import PaymentTable from "@/components/PaymentTable";
import React from "react";

const Paymentpage = () => {
  return (
    <div className="m-4 flex flex-col gap-4">
      {/* Top */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3">
        <div className="w-full col-span-1 md:col-span-2 h-[400px] ">
          <PaymentChart />
        </div>
        <div>
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
