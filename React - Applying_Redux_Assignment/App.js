// App.js
import React, { useState } from 'react';
import Table from './Table';
import data from './data';

const App = () => {
  const [tableData, setTableData] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');

  const handleEdit = (selectedData) => {
    // Implement edit functionality
    console.log('Edit:', selectedData);
  };

  const handleDelete = (selectedId) => {
    // Implement delete functionality
    const newData = tableData.filter(item => item.id !== selectedId);
    setTableData(newData);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = tableData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='col-md-4 offset-md-4' style={{marginTop:"150px"}}>
      <h4>Search a Name :</h4>
      <input
        className='form-control my-3'
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <Table
        data={filteredData}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
