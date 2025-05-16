import { BrowserRouter, Route, Routes } from "react-router-dom";
// import SessionForm from "./components/Admin/SessionForm";
// import PayoutTable from "./components/Admin/PayoutTable";
// import ReceiptGenerator from "./components/Admin/ReceiptGenerator";
// import AuditLogs from "./components/Admin/AuditLogs";
// import Dashboard from "./components/Mentor/Dashboard";
import Signup from "./components/auth/Signup";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin/sessions" element={<SessionForm />} />
        <Route path="/admin/payouts" element={<PayoutTable />} />
        <Route path="/admin/receipt" element={<ReceiptGenerator />} />
        <Route path="/admin/audit" element={<AuditLogs />} />
        <Route path="/mentor/dashboard" element={<Dashboard />} />
        <Route path="/mentor/receipt" element={<ReceiptViewer />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
