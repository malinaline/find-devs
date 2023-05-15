import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//IMPORTS
import FrontendTable from './pages/frontendtable'
import AllTable from './pages/alltable';
import BackendTable from './pages/backendtable';
import DevopsTable from './pages/devops';
import Layout from './pages/layout';
import NoPage from './pages/nopage';


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="all" element={<AllTable />} />
      <Route path="frontend" element={<FrontendTable />} />
      <Route path="backend" element={<BackendTable />} />
      <Route path="devops" element={<DevopsTable />} />
      <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
}

export default App


