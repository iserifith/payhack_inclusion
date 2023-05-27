"use client";

import ChallengesBarChart from "@/components/challengesBarChart";
import Header from "@/components/shared/Header";
import TopCards from "@/components/shared/TopCards";
import SMEInfoPieChart from "@/components/SMEInfoPieChart";
import ResponseRateChart from "@/components/ResponseRateChart";
import QrUsageChart from "@/components/QrUsageChart";
import ReviewerList from "@/components/shared/ReviewerList";
import { getResponseRate } from "@/db";
import { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      const result = await getResponseRate();
      setData(result);
      setLoading(false)
    };
    fetchData();
  }, []);

  if (loading) {
    return null
  }

  return (
    <>
      <main className="bg-gray-100 min-h-screen">
        <Header />
        <TopCards data = {data}/>
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          <ResponseRateChart />
          <ResponseRateChart  />
          <ReviewerList data = {data}/> 
          <ChallengesBarChart data = {data} />
        
        </div>
      </main>
    </>
  );
};

export default Page;
