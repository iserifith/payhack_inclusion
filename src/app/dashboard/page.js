"use client";

import ChallengesBarChart from "@/components/challengesBarChart";
import Header from "@/components/shared/Header";
import TopCards from "@/components/shared/TopCards";
import SMEInfoPieChart from "@/components/SMEInfoPieChart";
import ResponseRateChart from "@/components/ResponseRateChart";
import QrUsageChart from "@/components/QrUsageChart";
import ReviewerList from "@/components/shared/ReviewerList";
import { getBusinesses, getResponseRate } from "@/db";
import { useEffect, useState } from "react";
import QRDistribution from "@/components/QRDistribution";

const Page = () => {
  return (
    <>
      <main className="bg-gray-100 min-h-screen">
        <Header />
        <TopCards />
        <div className="p-4 grid md:grid-cols-2 grid-cols-1 gap-4">
          {/* <ResponseRateChart /> */}
          {/* <SMEInfoPieChart /> */}
          <QrUsageChart />
          {/* <ReviewerList /> */}
          <QRDistribution />
          <ChallengesBarChart />
        </div>
      </main>
    </>
  );
};

export default Page;
