import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-900 text-white flex flex-col">
      <div className="p-4 text-2xl font-bold border-b border-blue-700">
        Wallet Dashboard
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2 mt-4">
          <li>
            <Link
              to="/withdrawal"
              className="block px-4 py-2 hover:bg-blue-700 rounded"
            >
              Withdrawal
            </Link>
          </li>
          <li>
            <Link
              to="/transfer"
              className="block px-4 py-2 hover:bg-blue-700 rounded"
            >
              Transfer
            </Link>
          </li>
          <li>
            <Link
              to="/bill-payment"
              className="block px-4 py-2 hover:bg-blue-700 rounded"
            >
              Bill Payment
            </Link>
          </li>
          <li>
            <Link
              to="/transaction-history"
              className="block px-4 py-2 hover:bg-blue-700 rounded"
            >
              Transaction History
            </Link>
          </li>
          <li>
            <Link
              to="/expensetracker"
              className="block px-4 py-2 hover:bg-blue-700 rounded"
            >
                Expense Tracker
            </Link>
            </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
