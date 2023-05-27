"use client";
import { getResponse_rate} from "@/db";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const ResponseRateChart = () => {
  const smeResponded = getResponse_rate();

  return (
    <div className='w-full md:col-span-1 relative lg:h-[30vh] h-[50vh] m-auto p-1 border rounded-lg bg-white'
      style={{
        width: "55%",
      }}
    >
      <Pie
        data={{
          labels: [
            "Responded Percentage",
            "Not Responded "      
          ],
          datasets: [
            {
              label: "SME Responses",
              data: [
                smeResponded.respondedSmePerc,
                smeResponded.noResponSmePerc 
              ],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
};

export default ResponseRateChart;