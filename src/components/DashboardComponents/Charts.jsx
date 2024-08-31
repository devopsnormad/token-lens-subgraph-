/* eslint-disable react/prop-types */
import { Bar } from "react-chartjs-2";

// BarChart Component
export const BarChart = ({ chartData, options }) => {
  let date = new Date();
  let today = `${date.getDate()} ${date.toLocaleString("default", {
    month: "long",
  })}, ${date.getFullYear()}`;

  // Modify chart data to customize appearance
  const modifiedChartData = {
    ...chartData,
    datasets: chartData.datasets.map((dataset) => ({
      ...dataset,
      barThickness: 80,
      borderRadius: 10,
      backgroundColor: ["rgba(167, 110, 240, 1)"],
    })),
  };
  return (
    <div className="chart-container">
      <Bar
        data={modifiedChartData} // Use the modified chart data
        options={
          options || {
            plugins: {
              title: {
                display: true,
                text: `Transactions Today: ${today}`,
              },
              legend: {
                display: false,
              },
            },
          }
        }
      />

      <h2
      
        className="text-primary-100 text-center text-bold text-xl"
      >
        Transactions Stat
      </h2>
    </div>
  );
};
