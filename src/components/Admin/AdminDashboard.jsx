// src/components/Admin/AdminDashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
import useUserRole from "../../hooks/useUserRole";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { role, loading } = useUserRole();

  if (loading) return <div className="text-center mt-20">Loading...</div>;

  if (!auth.currentUser || role !== "admin") {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>
      <p className="text-lg text-gray-600">Welcome, {auth.currentUser.email}!</p>
      <div className="mt-6 space-x-4">
        <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Manage Sessions
        </button>
        <button className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
          View Payouts
        </button>
        <button className="px-6 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700">
          View Audit Logs
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
