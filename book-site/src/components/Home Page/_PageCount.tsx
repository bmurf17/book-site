import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const numbers = [100, 150, 240, 88, 91, 280, 340, 88, 124, 422, 88, 444];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: numbers,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export function PageCount() {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
