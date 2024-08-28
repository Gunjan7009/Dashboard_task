import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppliancesTable from './Components/AppliancesTable';
import ApplianceDetails from './Components/ApplianceDetails';


const App = () => {
  return (
    <div>
 <Router>
      <div>
        <Routes>
          <Route path="/" element={<AppliancesTable />} />
          <Route path="/:serialNo" element={<ApplianceDetails />} />
        </Routes>
      </div>
    </Router>
    </div>

  );
}

export default App
