// src/pages/AdminDashboard.js
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import "../styles/Dashboard.css";

function AdminDashboard() {
  const [sessions, setSessions] = useState([]);
  const [formData, setFormData] = useState({
    mentor: "",
    type: "",
    date: "",
    duration: "",
    rate: ""
  });

  const fetchSessions = async () => {
    const querySnapshot = await getDocs(collection(db, "sessions"));
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setSessions(data);
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await addDoc(collection(db, "sessions"), {
      ...formData,
      duration: parseFloat(formData.duration),
      rate: parseFloat(formData.rate),
      createdAt: new Date().toISOString()
    });
    setFormData({ mentor: "", type: "", date: "", duration: "", rate: "" });
    fetchSessions();
  };

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      <form onSubmit={handleSubmit} className="session-form">
        <input name="mentor" placeholder="Mentor Email" onChange={handleChange} value={formData.mentor} required />
        <input name="type" placeholder="Session Type" onChange={handleChange} value={formData.type} required />
        <input name="date" type="date" onChange={handleChange} value={formData.date} required />
        <input name="duration" type="number" placeholder="Duration (hours)" onChange={handleChange} value={formData.duration} required />
        <input name="rate" type="number" placeholder="Rate/hour" onChange={handleChange} value={formData.rate} required />
        <button type="submit">Add Session</button>
      </form>

      <div className="session-list">
        <h3>Sessions</h3>
        <table>
          <thead>
            <tr>
              <th>Mentor</th>
              <th>Type</th>
              <th>Date</th>
              <th>Duration</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map(session => (
              <tr key={session.id}>
                <td>{session.mentor}</td>
                <td>{session.type}</td>
                <td>{session.date}</td>
                <td>{session.duration}</td>
                <td>{session.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;