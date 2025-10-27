// src/pages/Community.jsx
import { useState } from 'react';
import ReportForm from '../components/ReportForm.jsx';
import ReportsList from '../components/ReportsList.jsx';
import SafetyTips from '../components/SafetyTips.jsx';

export default function Community() {
  const [reports, setReports] = useState([
    {
      id: 1,
      title: "Suspicious Activity",
      description: "Noticed unusual activity near the park",
      location: "Central Park Area",
      type: "suspicious",
      timestamp: new Date().toISOString(),
      author: "Community Member"
    },
    {
      id: 2,
      title: "Street Light Out",
      description: "Street light not working, area is dark at night",
      location: "Main Street",
      type: "infrastructure",
      timestamp: new Date(Date.now() - 86400000).toISOString(),
      author: "Local Resident"
    }
  ]);

  const safetyTips = [
    "Always stay aware of your surroundings",
    "Travel in well-lit areas at night",
    "Keep emergency contacts readily available",
    "Report suspicious activities immediately",
    "Avoid displaying valuable items in public"
  ];

  const addReport = (payload) => {
    setReports([{ id: Date.now(), ...payload }, ...reports]);
  };

  return (
    <div className="container">
      <h2>Community Reports</h2>
      <ReportForm onSubmit={addReport} />
      <ReportsList reports={reports} />
      <SafetyTips tips={safetyTips} />
    </div>
  );
}
