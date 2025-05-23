// src/components/Mentor/Dashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
import useUserRole from "../../hooks/useUserRole";

const Dashboard = () => {
  const navigate = useNavigate();
  const { role, loading } = useUserRole();

  if (loading) return <div className="text-center mt-20">Loading...</div>;

  if (!auth.currentUser) {
    navigate("/login");
    return null;
  }

  if (role !== "mentor") {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Mentor Dashboard</h1>
      <p className="text-lg text-gray-600">Welcome, {auth.currentUser.email}!</p>
      <div className="mt-6 space-x-4">
        <button className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700">
          View Sessions
        </button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Download Receipts
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
