const rows = [
    { id: 1, col1: 'James', col2: 'Bond', col3: 'Paris', col4: 'Comptabilité', col5: '0625241548' },
    { id: 2, col1: 'Bruce', col2: 'Wayne', col3: 'Nice', col4: 'Accueil', col5: '0621368748' },
    { id: 3, col1: 'Peter', col2: 'Parker', col3: 'Nantes', col4: 'RH', col5: '0785469525' },
];

const columns = [
    { field: 'col1', headerName: 'Prénom', width: 150 },
    { field: 'col2', headerName: 'Nom', width: 150 },
    { field: 'col3', headerName: 'Site', width: 150 },
    { field: 'col4', headerName: 'Service', width: 150 },
    { field: 'col5', headerName: 'Téléphone portable', width: 200 }
];

export { rows, columns };