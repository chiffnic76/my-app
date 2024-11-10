import React, { useState } from 'react';

const EquipmentTab = () => {
  // Sample data
  const data = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' },
    { id: 4, name: 'Diana Prince', email: 'diana@example.com' },
  ];

  // State for search input and filtered data
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  // Handle search input change
  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Filter data based on search term
    const filtered = data.filter(item => 
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <input 
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EquipmentTab;
