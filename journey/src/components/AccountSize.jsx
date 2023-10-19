import React, { useState } from 'react';

function AccountSize() {
  const [selectedAccountSize, setSelectedAccountSize] = useState(''); // Initialize the selected option state

  // Event handler to update the selected option
  const handleSelectChange = (event) => {
    setSelectedAccountSize(event.target.value);
  };

  return (
    <div className="account-size">
      <select value={selectedAccountSize} onChange={handleSelectChange}>
        <option value="">Select Account Size</option>
        <option value="5000">5000</option>
        <option value="10000">10000</option>
        <option value="25000">25000</option>
        <option value="50000">50000</option>
        <option value="100000">100000</option>
        <option value="200000">200000</option>
        <option value="300000">300000</option>
        <option value="400000">400000</option>
      </select>
    </div>
  );
}

export default AccountSize;
