// src/pages/Signup.jsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext.jsx';
import '../css/Auth.css';

export default function Signup() {
  const [form, setForm] = useState({ 
    firstName: '', 
    lastName: '', 
    username: '', 
    email: '', 
    phone: '', 
    address: '', 
    city: '', 
    state: '', 
    zipCode: '', 
    password: '', 
    confirm: '' 
  });
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = ['firstName', 'lastName', 'username', 'email', 'phone', 'address', 'city', 'state', 'zipCode', 'password'];
    const missingFields = requiredFields.filter(field => !form[field]);
    if (missingFields.length > 0) return setErr('All fields are required');
    if (form.password !== form.confirm) return setErr('Passwords do not match');
    if (form.password.length < 6) return setErr('Password must be at least 6 characters');
    
    setLoading(true);
    setErr('');
    try {
      const userData = {
        name: `${form.firstName} ${form.lastName}`,
        username: form.username,
        email: form.email,
        phone: form.phone,
        address: form.address,
        city: form.city,
        state: form.state,
        zipCode: form.zipCode,
        password: form.password
      };
      await signup(userData);
      navigate('/home', { replace: true });
    } catch (error) {
      setErr('Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-background">
        <div className="auth-shapes">
          <div className="auth-shape auth-shape-1"></div>
          <div className="auth-shape auth-shape-2"></div>
          <div className="auth-shape auth-shape-3"></div>
        </div>
      </div>
      
      <motion.div 
        className="auth-container signup-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="auth-card">
          <motion.div 
            className="auth-header"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="auth-title">Create Account</h2>
            <p className="auth-subtitle">Join our community safety network</p>
          </motion.div>

          {err && (
            <motion.div 
              className="auth-error"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="error-icon">!</span>
              {err}
            </motion.div>
          )}

          <motion.form 
            className="auth-form landscape-form"
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="form-columns">
              <div className="form-column">
                <h3 className="column-title">Personal Information</h3>
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input 
                    className="form-input"
                    placeholder="First name" 
                    value={form.firstName} 
                    onChange={(e)=>setForm({...form,firstName:e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input 
                    className="form-input"
                    placeholder="Last name" 
                    value={form.lastName} 
                    onChange={(e)=>setForm({...form,lastName:e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Username</label>
                  <input 
                    className="form-input"
                    placeholder="Choose a username" 
                    value={form.username} 
                    onChange={(e)=>setForm({...form,username:e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="form-column">
                <h3 className="column-title">Contact Details</h3>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input 
                    className="form-input"
                    placeholder="your@email.com" 
                    type="email" 
                    value={form.email} 
                    onChange={(e)=>setForm({...form,email:e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input 
                    className="form-input"
                    placeholder="(555) 123-4567" 
                    type="tel" 
                    value={form.phone} 
                    onChange={(e)=>setForm({...form,phone:e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="form-column">
                <h3 className="column-title">Location</h3>
                <div className="form-group">
                  <label className="form-label">Street Address</label>
                  <input 
                    className="form-input"
                    placeholder="123 Main Street" 
                    value={form.address} 
                    onChange={(e)=>setForm({...form,address:e.target.value})}
                    required
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">City</label>
                    <input 
                      className="form-input"
                      placeholder="City" 
                      value={form.city} 
                      onChange={(e)=>setForm({...form,city:e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">State</label>
                    <input 
                      className="form-input"
                      placeholder="State" 
                      value={form.state} 
                      onChange={(e)=>setForm({...form,state:e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">ZIP Code</label>
                  <input 
                    className="form-input"
                    placeholder="12345" 
                    value={form.zipCode} 
                    onChange={(e)=>setForm({...form,zipCode:e.target.value})}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="password-section">
              <h3 className="column-title">Security</h3>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Password</label>
                  <input 
                    className="form-input"
                    placeholder="Password" 
                    type="password" 
                    value={form.password} 
                    onChange={(e)=>setForm({...form,password:e.target.value})}
                    required
                    minLength={6}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Confirm Password</label>
                  <input 
                    className="form-input"
                    placeholder="Confirm password" 
                    type="password" 
                    value={form.confirm} 
                    onChange={(e)=>setForm({...form,confirm:e.target.value})}
                    required
                  />
                </div>
              </div>
            </div>

            <motion.button 
              type="submit" 
              className="auth-button"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? (
                <>
                  <span className="loading-spinner"></span>
                  Creating account...
                </>
              ) : (
                "Create Account"
              )}
            </motion.button>
          </motion.form>

          <motion.div 
            className="auth-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="auth-link-text">
              Already have an account? 
              <Link to="/login" className="auth-link">Sign in</Link>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
