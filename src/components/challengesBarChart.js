import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChallengesBarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const challenges = {
    "Technical challenges in QR app.": 223,
    "Connectivity issues affecting QR app.": 11,
    "Security concerns in QR app.": 3,
    "Integration challenges with accounting systems.": 90,
    "Transaction fees for QR payments.": 50,
  };

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: Object.keys(challenges),
      // datasets: [
      //   {
      //     label: "Sales $",
      //     data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
      //     borderColor: "rgb(53, 162, 235)",
      //     backgroundColor: "rgb(53, 162, 235, 0.4",
      //   },
      // ],
      datasets: [
        {
          label: "Challenges",
          data: Object.values(challenges),
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgb(53, 162, 235, 0.4",
        },
      ],
    });
    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Users challenges with QR payments.",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);

  return (
    <>
      <div className="w-full md:col-span-4 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default ChallengesBarChart;
