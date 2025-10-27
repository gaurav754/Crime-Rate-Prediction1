// src/pages/Dashboard.jsx
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import '../css/Dashboard.css';

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const stats = [
    { title: 'Total Reports', value: '1,234', change: '+12%', color: 'blue' },
    { title: 'High Risk Areas', value: '23', change: '-5%', color: 'red' },
    { title: 'Safe Zones', value: '156', change: '+8%', color: 'green' },
    { title: 'Active Alerts', value: '7', change: '+2%', color: 'orange' }
  ];

  const quickActions = [
    { title: 'Crime Prediction', desc: 'Predict crime risk for any area', action: () => navigate('/prediction'), icon: '🔮' },
    { title: 'Community Reports', desc: 'View and share safety reports', action: () => navigate('/community'), icon: '👥' },
    { title: 'Safety Tips', desc: 'Get personalized safety advice', action: () => {}, icon: '🛡️' },
    { title: 'Emergency Contacts', desc: 'Quick access to help', action: () => {}, icon: '🚨' }
  ];

  const recentActivity = [
    { type: 'prediction', desc: 'Crime risk predicted for Delhi Central', time: '2 hours ago' },
    { type: 'report', desc: 'Safety report submitted for Connaught Place', time: '5 hours ago' },
    { type: 'alert', desc: 'High crime alert issued for Karol Bagh', time: '1 day ago' }
  ];

  return (
    <div className="dashboard">
      <motion.div 
        className="dashboard-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Welcome back, {user?.name || 'User'}!</h1>
        <p>Here's your crime safety overview</p>
      </motion.div>

      <motion.div 
        className="stats-grid"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {stats.map((stat, i) => (
          <div key={i} className={`stat-card ${stat.color}`}>
            <h3>{stat.value}</h3>
            <p>{stat.title}</p>
            <span className={`change ${stat.change.startsWith('+') ? 'positive' : 'negative'}`}>
              {stat.change}
            </span>
          </div>
        ))}
      </motion.div>

      <div className="dashboard-content">
        <motion.div 
          className="quick-actions"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2>Quick Actions</h2>
          <div className="actions-grid">
            {quickActions.map((action, i) => (
              <div key={i} className="action-card" onClick={action.action}>
                <span className="action-icon">{action.icon}</span>
                <h3>{action.title}</h3>
                <p>{action.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="recent-activity"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2>Recent Activity</h2>
          <div className="activity-list">
            {recentActivity.map((activity, i) => (
              <div key={i} className="activity-item">
                <div className={`activity-type ${activity.type}`}></div>
                <div className="activity-content">
                  <p>{activity.desc}</p>
                  <span>{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}