import data from "./data.json";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import "./App.css";

import logo from "./images/logo.svg";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

function App() {
  const bar = {
    labels: data.map((row) => row.day),
    datasets: [
      {
        label: "",
        backgroundColor: "hsl(10, 79%, 65%)",
        hoverBackgroundColor: "hsl(186, 34%, 60%)",
        borderRadius: 4,
        data: data.map((row) => row.amount),
      },
    ],
  };

  return (
    <>
      <div className="max-w-xl mx-auto p-5 flex flex-col justify-center h-screen">
        <header className="bg-soft-red p-5 flex justify-between items-cente rounded-2xl shadow-xl">
          <h1 className="text-white font-semibold text-3xl">
            <span className="block font-normal text-base mb-2">My balance</span>
            $921.48
          </h1>
          <img src={logo} alt="logo" />
        </header>
        <section className="bg-white p-8 shadow-2xl rounded-2xl mt-5">
          <div className="mb-5">
            <h1 className="text-2xl font-bold text-dark-brown py-2 my-1">
              Spending - Last 7 Days
            </h1>
            <Bar data={bar} />
          </div>
          <div className=" border-t-2 border-slate-500/5 flex justify-between items-end pt-5">
            <h3 className="font-bold text-3xl text-dark-brown">
              <span className="block font-normal text-base text-slate-400">
                Total this month
              </span>
              $478.33
            </h3>
            <h3 className="text-right font-bold text-dark-brown">
              +2.4%{" "}
              <span className="block text-slate-400 font-normal text-base">
                from last month
              </span>
            </h3>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
