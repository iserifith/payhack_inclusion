"use client"

import ChallengesBarChart from "@/components/challengesBarChart";
import Header from "@/components/shared/Header";
import TopCards from "@/components/shared/TopCards";
import SMEInfoPieChart from "@/components/SMEInfoPieChart";
import ResponseRateChart from "@/components/ResponseRateChart";
import QrUsageChart from "@/components/QrUsageChart";
import ReviewerList from "@/components/shared/ReviewerList";


const Page = () => {
  return (
    <>

      <main className='bg-gray-100 min-h-screen'>
        <Header />
        <TopCards />
        <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
        <ResponseRateChart/>
        <ResponseRateChart/>
        <ReviewerList/>
        <ChallengesBarChart />
        
 
         
        </div>
        
      </main>
    </>
  );
}


export default Page;


