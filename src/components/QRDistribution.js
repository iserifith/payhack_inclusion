"use client";
import { getQRDist, getSmeInfo } from "@/db";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const QRDistribution = () => {
  const qrDist = getQRDist();

  return (
    <div className="w-full md:col-span-1 relative lg:h-[50vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
      <Pie
        data={{
          labels: [
            "DuitNow QR",
            "GrabPay",
            "Maybank QRPay",
            "Touch 'n Go eWallet",
          ],
          datasets: [
            {
              label: "Payment Method",
              data: [qrDist.DuitNow, qrDist.GrabPay, qrDist.MAE, qrDist.TNG],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(153, 102, 255, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(153, 102, 255, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
};

export default QRDistribution;
