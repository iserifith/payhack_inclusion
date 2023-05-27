"use client";
import { getSmeInfo } from "@/db";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const Page = () => {
  // totalSmeAvailable: "2000",
  // totalSmeWithContact: "800",
  // totalInquiriesSent: "100",
  const smesInfo = getSmeInfo();
  return (
    <div>
      <Pie
        data={{
          labels: [
            "Total SME Available",
            "Total SME with Contact",
            "Total Inquiries Sent",
          ],
          datasets: [
            {
              label: "SME Info",
              data: [
                smesInfo.totalSmeAvailable,
                smesInfo.totalSmeWithContact,
                smesInfo.totalInquiriesSent,
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

export default Page;
