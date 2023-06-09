import React from "react";
import { getDataQrUsage, getResponseRate, getFeedbackRate } from "@/db";
import { useEffect, useState } from "react";

const TopCards = () => {
  const [smedata, setSMEData] = useState({});
  const [qrdata, setQRData] = useState({});
  const [feedbackdata, setFeedbackData] = useState({});
  const [smeloading, setSMELoading] = useState(true);
  const [qrloading, setQRLoading] = useState(true);
  const [feedbackloading, setFeedbackLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const smeresult = await getResponseRate();
      const qrresult = await getDataQrUsage();
      const feedbackResult = await getFeedbackRate();
      setSMEData(smeresult);
      setQRData(qrresult);
      setFeedbackData(feedbackResult);

      setSMELoading(false);
      setQRLoading(false);
      setFeedbackLoading(false);
    };
    fetchData();
  }, []);

  if (smeloading && qrloading && feedbackloading) {
    return null;
  }

  return (
    <div className="grid lg:grid-cols-4 gap-4 p-4">
      <div className="lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">{smedata.respondedSme} / 7000</p>
          <p className="text-gray-600">Responded</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg">
            {smedata.respondedSmePerc}
          </span>
        </p>
      </div>
      <div className="lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">{qrdata.respondedUseQR} / 2000</p>
          <p className="text-gray-600">Currently used QR</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg">
            {qrdata.respondedUseQRPerc}
          </span>
        </p>
      </div>
      <div className="lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">
            {feedbackdata.respondWithYes} / 255
          </p>
          <p className="text-gray-600">Agree for assistance</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg">
            {feedbackdata.respondPercYes}
          </span>
        </p>
      </div>
      <div className="lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">
            {feedbackdata.respondWithNo} / 255
          </p>
          <p className="text-gray-600">Does not need assistance</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg">
            {feedbackdata.respondPercNo}
          </span>
        </p>
      </div>
    </div>
  );
};

export default TopCards;
