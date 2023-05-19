import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function AuthorChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Top Authors",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: numbers,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white">
      <div className="flex items-center justify-center px-6 py-4 h-80">
        <Bar className="h-80" options={options} data={data} />
      </div>
    </div>
  );
}
