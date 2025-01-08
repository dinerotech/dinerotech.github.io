import React from "react";
import Image from "next/image";
import DashboardPNG from "@/assets/pngs/dashboard.png";

export default function View() {
  return (
    <div className="flex items-start justify-end lg:order-first">
      <Image
        src={DashboardPNG}
        alt="dashboard screenshot"
        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
        width="2432"
        height="1442"
      />
    </div>
  );
}
