import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './layout/Sidebar';
import DashboardPage from './pages/DashboardPage';
import ClientListPage from './pages/ClientListPage';
import AddClientPage from './pages/AddClientPage';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-gray-100 min-h-screen">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/clients" element={<ClientListPage />} />
            <Route path="/ajout" element={<AddClientPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
