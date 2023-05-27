"use client"

import ChallengesBarChart from "@/components/challengesBarChart";
import Header from "@/components/shared/Header";
import TopCards from "@/components/shared/TopCards";


const Page = () => {
  return (
    <>

      <main className='bg-gray-100 min-h-screen'>
        <Header />
        <TopCards />
        <div className='p-4 grid md:grid-cols-1 grid-cols-1 gap-4'>
          <ChallengesBarChart />
 
         
        </div>
      </main>
    </>
  );
}


export default Page;


