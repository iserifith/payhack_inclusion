import React from 'react'

const TopCards = ({data}) => {
    
  return (
    <div className='grid lg:grid-cols-4 gap-4 p-4'>
        <div className='lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>{data.respondedSme}</p>
                <p className='text-gray-600'>responded SME </p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>{data.respondedSmePerc}</span>
            </p>
        </div>
        <div className='lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>300</p>
                <p className='text-gray-600'>responded SME Percentage</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>18%</span>
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