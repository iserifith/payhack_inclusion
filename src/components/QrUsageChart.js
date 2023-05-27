"use client";
import { getQRUsage} from "@/db";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const QrUsageChart = () => {
  const qrUsage = getQRUsage();

  return (
    <div
      style={{
        float: "left",
        width: "50%",
      }}
    >
      <Pie
        data={{
          labels: [
            "Responded Percentage",
            "Not Responded Percentage"      
          ],
          datasets: [
            {
              label: "SME Responses",
              data: [
                qrUsage.respondedUseQRPerc,
                qrUsage.noRespondedUseQrPerc 
              ],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
};

export default QrUsageChart;