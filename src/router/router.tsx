import Layout from "../layout/Layout"
import RoleLoginSection from "../sections/RoleLoginSection"
import Adminlogin from "../sections/AdminLogin"
import CustomerCareLogin from "../sections/CustomerCareLogin"
import AccountOwner from "../sections/AccountOwner"
import Otpverification from "../sections/Otpverification"
import Login from "../sections/Login"
import DrectLogin from "../sections/DirectLogin"
import Layout2 from "../layout/Layout2"
import VerifyEmail from "../sections/VerifyEmail"
import UserDashBoard from "../userdashBoard/UserDashBoard"
import BillPayment from "../userdashBoard/BillPayment"
import ManageCategories from "../userdashBoard/ManageCategory"
import Reports from "../userdashBoard/ReportSection"
import Transfer from "../userdashBoard/Transafer"
import Withdrawal from "../userdashBoard/Wtihdrawal"
import TransactionHistory from "../userdashBoard/TransactionsHistory"
import ExpenseTracker from "../expenseTracker/ExpenseTracker"

const ROUTES = [
    {
        path: '/',
        element: <Layout/>
    },
    {
      path: '/',
      element: <Layout2/>
    },
    {
        path:"/roleloginsection",
        element: <RoleLoginSection/>
    },
     {
         path:"/adminlogin",
         element: <Adminlogin/>

     },
     {
        path:"/customercarelogin",
        element: <CustomerCareLogin />
     },
     {
        path: "/openaccount",
        element: <AccountOwner />
     },
     {
        path: "/otpverification",
        element: <Otpverification />
     },
     {
        path: "/derictlogin",
        element: <DrectLogin />
     },
     {
      path: "/verifyEmail",
      element: <VerifyEmail />
   },
   {
      path: "/userdashboard",
      element: <UserDashBoard />
   },
   {
      path: "/billpayment",
      element: <BillPayment />
   },
   {
      path: "/managecategory",
      element: <ManageCategories />
   },
   {
      path: "/reports",
      element: <Reports />
   },
   {
      path: "/transfer",
      element: <Transfer />
   },
   {
      path: "/withdrawal",
      element: <Withdrawal />
   },
   {
      path: "/transactionhistory",
      element: <TransactionHistory />
   },
   {
      path: "/expense-tracke",
      element: <ExpenseTracker />
   },
  
]

export default ROUTES