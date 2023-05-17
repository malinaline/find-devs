import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


//IMPORTS

import NoPage from "./pages/nopage";
import DevelopersList from "./pages/developerslist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DevelopersList />}>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
