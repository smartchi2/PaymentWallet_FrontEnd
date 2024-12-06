import React from "react";
import { Pie, Bar } from "react-chartjs-2";

const Reports = ({ transactions, categories }) => {
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  // Chart Data
  const pieChartData = {
    labels: ["Income", "Expenses"],
    datasets: [
      {
        data: [totalIncome, totalExpenses],
        backgroundColor: ["#4CAF50", "#F44336"],
      },
    ],
  };

  const barChartData = {
    labels: categories,
    datasets: [
      {
        label: "Income",
        data: categories.map(
          (cat) => transactions.filter((t) => t.category === cat && t.type === "income").reduce((sum, t) => sum + t.amount, 0)
        ),
        backgroundColor: "#4CAF50",
      },
      {
        label: "Expenses",
        data: categories.map(
          (cat) => transactions.filter((t) => t.category === cat && t.type === "expense").reduce((sum, t) => sum + t.amount, 0)
        ),
        backgroundColor: "#F44336",
      },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Reports</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Income vs Expenses</h3>
          <Pie data={pieChartData} />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Category Breakdown</h3>
          <Bar data={barChartData} />
        </div>
      </div>
    </div>
  );
};

export default Reports;
