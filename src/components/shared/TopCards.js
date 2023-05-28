import React from 'react'
import { getDataQrUsage, getResponseRate } from "@/db";
import { useEffect, useState } from "react";


const TopCards = () => {
    const [smedata, setSMEData] = useState({});
    const [qrdata, setQRData] = useState({});
    const [smeloading, setSMELoading] = useState(true);
    const [qrloading, setQRLoading] = useState(true)
    useEffect(() => {
      const fetchData = async () => {
        const smeresult = await getResponseRate();
        const qrresult = await getDataQrUsage();
        setSMEData(smeresult);
        setQRData(qrresult);
        setSMELoading(false);
        setQRLoading(false);
      };
      fetchData();
    }, []);
  
    if (smeloading && qrloading)  {
      return null
    }
    
  return (
    <div className='grid lg:grid-cols-4 gap-4 p-4'>
        <div className='lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                
                <p className='text-2xl font-bold'>{smedata.respondedSme}</p>
                <p className='text-gray-600'>responded SME </p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>{smedata.respondedSmePerc}</span>
            </p>
        </div>
        <div className='lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>{qrdata.respondedUseQR}</p>
                <p className='text-gray-600'>responded use QR</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>{qrdata.respondedUseQRPerc}</span>
            </p>
        </div>
        <div className='lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>2000</p>
                <p className='text-gray-600'>Responded SME</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>30%</span>
            </p>
        </div>
        <div className='lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>1000</p>
                <p className='text-gray-600'>responded use QR</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>50%</span>
            </p>
        </div>
    </div>
  )
}


export default TopCards