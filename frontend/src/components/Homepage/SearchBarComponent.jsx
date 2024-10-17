import React from "react";

const SearchBarComponent = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex justify-start mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by name or email"
        className="border rounded-md p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/3"
      />
    </div>
  );
};

export default SearchBarComponent;
