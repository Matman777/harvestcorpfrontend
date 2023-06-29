import React, { useState } from 'react';
import Home from './pages/home';
import { rows, columns } from './components/tableUsers';
import './css/home.css';
import './App.css';
import { DataGrid } from "@mui/x-data-grid";




function App() {

  const [searchTerm, setSearchTerm] = useState('');

  const filteredRows = rows.filter(row =>
    row.col1.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.col2.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.col3.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.col4.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <>
      <Home />
      
      <div style={{ height: 300, width: '100%', backgroundColor: 'white', marginTop: 80, paddingBottom: 50 }}>
        <input
          type="text"
          placeholder="Rechercher par nom/prénom, site ou service"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '280px' }}
        />
        <DataGrid rows={filteredRows} columns={columns} />
        {/* <DataGrid rows={rows} columns={columns} /> */}
      </div>
      </>

  );
}

export default App;