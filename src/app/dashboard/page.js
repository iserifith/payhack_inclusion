import ResponseRateChart from "@/components/ResponseRateChart";
import SMEInfoPieChart from "@/components/SMEInfoPieChart";
import QrUsageChart from "@components/QrUsageChart"

const Page = () => {
  return (
    <div>
      <SMEInfoPieChart />
      <ResponseRateChart />
      <QrUsageChart />
    </div>
  );
};

export default Page;