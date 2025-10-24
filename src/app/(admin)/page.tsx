import React from "react";
import { EcommerceMetrics } from "@/components/dashboard/EcommerceMetrics";
import MonthlySalesChart from "@/components/dashboard/MonthlySalesChart";
import MonthlyTarget from "@/components/dashboard/MonthlyTarget";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-7">
        <EcommerceMetrics />
      </div>
      <div className="col-span-12 xl:col-span-5">
        <MonthlyTarget />
      </div>
      <div className="col-span-12">
        <MonthlySalesChart />
      </div>
    </div>
  );
}
