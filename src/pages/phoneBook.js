import React, { useState } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { rows, columns } from '../components/tableUsers';
import NavBar from '../components/nav';
// import '../css/phonebook.css';


export default function PhoneBook() {
    const [searchTerm, setSearchTerm] = useState('');
  
    const filteredRows = rows.filter(row =>
      row.col1.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.col2.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.col3.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.col4.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <>
      <NavBar />
        <section className="phonebook">
        <h1 className="welcome">Bienvenue sur l'annuaire de HarvestCorp</h1>
        <div className="intro">Rechercher un collaborateur par son nom, service ou site:</div>
  
        <div style={{ height: 300, width: '100%', backgroundColor: 'white', marginTop: 80, paddingBottom: 50 }}>
          <input
            type="text"
            placeholder="Rechercher par nom/prénom, site ou service"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '280px' }}
          />
          <DataGrid rows={filteredRows} columns={columns} />
        </div>
        </section>
      </>
    );
  }
  