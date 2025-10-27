// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import Navbar from "./components/Navbar.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Prediction from "./pages/Prediction";
import Community from "./pages/Community.jsx";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const publicRoutes = [
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/prediction", element: <Prediction /> },
    { path: "/community", element: <Community /> },
  ];

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
        <Navbar />

        <main className="w-full px-4 py-6">
          <AnimatePresence mode="wait">
            <Routes>
              {/* Home is now public + default */}
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/home" element={<PageWrapper><Home /></PageWrapper>} />

              {/* Auth pages */}
              <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
              <Route path="/signup" element={<PageWrapper><Signup /></PageWrapper>} />
              <Route path="/dashboard" element={<PageWrapper><Dashboard /></PageWrapper>} />

              {/* Public pages */}
              {publicRoutes.map(({ path, element }) => (
                <Route
                  key={path}
                  path={path}
                  element={<PageWrapper>{element}</PageWrapper>}
                />
              ))}

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </AuthProvider>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl shadow-lg bg-white/80 dark:bg-gray-900/80 p-6 backdrop-blur"
    >
      {children}
    </motion.div>
  );
}
