"use client";
import { getQRUsage } from "@/db";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const QrUsageChart = () => {
  const qrUsage = getQRUsage();

  return (
    <div className="w-full md:col-span-1 relative lg:h-[50vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
      <Pie
        data={{
          labels: [
            "Responded used QR Percentage",
            "Responded not used QR Percentage",
          ],
          datasets: [
            {
              label: "",
              data: [qrUsage.respondedUseQRPerc, qrUsage.noRespondedUseQrPerc],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              ],
              borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
};

export default QrUsageChart;
