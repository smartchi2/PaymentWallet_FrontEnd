import React, { useState, useEffect } from "react";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const ExpenseTracker = () => {
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState(() => JSON.parse(localStorage.getItem("categories")) || ["General", "Groceries", "Utilities", "Entertainment"]);
  const [newCategory, setNewCategory] = useState("");

  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("income");
  const [category, setCategory] = useState("General");

  const [selectedMonth, setSelectedMonth] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterType, setFilterType] = useState("All");

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  const handleAddTransaction = () => {
    if (amount && description && date && type && category) {
      setTransactions([
        ...transactions,
        { amount: parseFloat(amount), description, date, type, category },
      ]);
      setAmount("");
      setDescription("");
      setDate("");
      setType("income");
      setCategory("General");
    }
  };

  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  const handleRemoveCategory = (categoryToRemove) => {
    setCategories(categories.filter((cat) => cat !== categoryToRemove));
  };

  const getFilteredTransactions = () => {
    return transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date);
      const isMonthMatch =
        selectedMonth === "" ||
        (transactionDate.getFullYear() === parseInt(selectedMonth.split("-")[0]) &&
          transactionDate.getMonth() + 1 === parseInt(selectedMonth.split("-")[1]));

      const isTypeMatch = filterType === "All" || transaction.type === filterType;
      const isCategoryMatch = filterCategory === "All" || transaction.category === filterCategory;

      return isMonthMatch && isTypeMatch && isCategoryMatch;
    });
  };

  const filteredTransactions = getFilteredTransactions();

  const totalIncome = filteredTransactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const totalExpenses = filteredTransactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const netSavings = totalIncome - totalExpenses;

  const pieChartData = {
    labels: ["Income", "Expenses"],
    datasets: [
      {
        label: "Transaction Breakdown",
        data: [totalIncome, totalExpenses],
        backgroundColor: ["#4CAF50", "#F44336"],
        borderColor: ["#4CAF50", "#F44336"],
        borderWidth: 1,
      },
    ],
  };

  const barChartData = {
    labels: categories,
    datasets: [
      {
        label: "Income",
        data: categories.map((cat) =>
          filteredTransactions
            .filter((transaction) => transaction.type === "income" && transaction.category === cat)
            .reduce((total, transaction) => total + transaction.amount, 0)
        ),
        backgroundColor: "#4CAF50",
      },
      {
        label: "Expenses",
        data: categories.map((cat) =>
          filteredTransactions
            .filter((transaction) => transaction.type === "expense" && transaction.category === cat)
            .reduce((total, transaction) => total + transaction.amount, 0)
        ),
        backgroundColor: "#F44336",
      },
    ],
  };

  return (

    <div >
      <h1 className="text-2xl font-bold mb-4">Expense Tracker</h1>

      {/* Add Transaction Form */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-lg font-semibold mb-2">Add Transaction</h2>
        <div className="flex flex-col gap-4">
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border p-2 rounded w-full"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-2 rounded w-full"
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <button
            onClick={handleAddTransaction}
            className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Transaction
          </button>
        </div>
      </div>

      {/* Manage Categories */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-lg font-semibold mb-2">Manage Categories</h2>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="New Category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <button
            onClick={handleAddCategory}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
          >
            Add Category
          </button>
        </div>
        <ul className="mt-4">
          {categories.map((cat, idx) => (
            <li key={idx} className="flex justify-between items-center">
              {cat}
              <button
                onClick={() => handleRemoveCategory(cat)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Filter Transactions */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-lg font-semibold mb-2">Filter Transactions</h2>
        <div className="flex flex-wrap gap-4">
          <input
            type="month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="border p-2 rounded"
          />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="All">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="All">All</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div> f
      </div>
      {/* Monthly Summary */}
      <div className="bg-white p-4 rounded" />
      </div>
  )
};
export default ExpenseTracker;

      

