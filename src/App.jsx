import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Footer from "./Components/Footer";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        
      </Routes>
      
      {/* Add more components or content here */}
    </Router>
  );
}

export default App;
