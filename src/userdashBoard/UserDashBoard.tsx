import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Importing your components
import ExpenseTracker from "../expenseTracker/ExpenseTracker";
import Transfer from "../userdashBoard/Transafer";
import Withdrawal from "../userdashBoard/Wtihdrawal";
import BillPayment from "../userdashBoard/BillPayment";
import Reports from "../userdashBoard/ReportSection";
import ManageCategories from "../userdashBoard/ManageCategory";

const Dashboard: React.FC = () => {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-1/4 bg-blue-900 text-white p-6">
          <h1 className="text-2xl font-bold mb-6">Expense Dashboard</h1>
          <nav className="flex flex-col gap-4">
            <Link
              to="/expense-tracker"
              className="py-2 px-4 text-left rounded hover:bg-blue-800"
            >
              Expense Tracker
            </Link>
            <Link
              to="/transfer"
              className="py-2 px-4 text-left rounded hover:bg-blue-800"
            >
              Transfer
            </Link>
            <Link
              to="/withdrawal"
              className="py-2 px-4 text-left rounded hover:bg-blue-800"
            >
              Withdrawal
            </Link>
            <Link
              to="/bill-payment"
              className="py-2 px-4 text-left rounded hover:bg-blue-800"
            >
              Bill Payment
            </Link>
            <Link
              to="/reports"
              className="py-2 px-4 text-left rounded hover:bg-blue-800"
            >
              Reports
            </Link>
            <Link
              to="/categories"
              className="py-2 px-4 text-left rounded hover:bg-blue-800"
            >
              Manage Categories
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          <Routes>
            <Route path="/expense-tracker" element={<ExpenseTracker />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/withdrawal" element={<Withdrawal />} />
            <Route path="/bill-payment" element={<BillPayment />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/categories" element={<ManageCategories />} />
            {/* Fallback Route */}
            <Route path="*" element={<div>404 - Page Not Found</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default Dashboard;
