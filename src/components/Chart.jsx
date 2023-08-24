import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJs.register(LineElement, CategoryScale, LinearScale, PointElement);
function Chart() {
  const data = {
    labels: [
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
    ],
    datasets: [
      {
        data: [40, 40, 62, 40, 58, 56, 82, 45, 50, 68, 62, 47, 61, 52, 60],
        borderColor: "blue",
        pointBorderColor: "transparent",
        backgroundGradientFrom: "Blue",
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legends: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 20,
        max: 100,
        ticks: {
          stepSize: 20,
          callback: (value) => value + "K",
        },
      },
    },
  };
  return (
    <div className="sm:w-full sm:h-[25rem] flex flex-col  lg:h-[20.835rem] lg:w-[47.78rem]  ml-[1rem] mt-[1.5rem] bg-white rounded-3xl border border-gray-200 shadow-2xl">
      <div className="font-bold text-2xl   m-[2rem] flex  justify-between">
        <p>Sales Funnel</p>
        <button class="text-blue-900  bg-neutral-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm  px-4 py-2.5 text-center inline-flex items-center ">
          This Month
          <svg
            class="w-2.5 h-2.5 ml-2.5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
      </div>
      <div className="flex-1 sm:w-[90%] lg:w-[43rem] lg:h-[10rem] ml-[1.5rem]">
        <Line data={data} options={options}></Line>
      </div>
    </div>
  );
}

export default Chart;
