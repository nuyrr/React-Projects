import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';




function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome</h1>
      <div className="space-x-4">
        <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">Login</Link>
        <Link to="/signup" className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md">Signup</Link>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input type="text" placeholder="Username" className="mb-2 p-2 border rounded" />
      <input type="password" placeholder="Password" className="mb-4 p-2 border rounded" />
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">Submit</button>
    </div>
  );
}

function Signup() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      <input type="text" placeholder="Full Name" className="mb-2 p-2 border rounded" />
      <input type="email" placeholder="Email" className="mb-2 p-2 border rounded" />
      <input type="password" placeholder="Password" className="mb-4 p-2 border rounded" />
      <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md">Register</button>
    </div>
  );
}

function App() {
  return (
      <Router>
    <Routes>
  <Route path="/" element={<Home />} />
  
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  </Routes>
</Router>


  );
}

export default App;

