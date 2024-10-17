// src/pages/Homepage.js
import React, { useState, useEffect } from "react";
import TableComponent from "./TableComponent";
import SearchBarComponent from "./SearchBarComponent";
import PaginationComponent from "./PaginationComponent";

const Homepage = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 100;

  // Fetch users (dummy data for now)
  useEffect(() => {
    // Dummy data for users (replace with real data fetching)
    const dummyUsers = Array.from({ length: 500 }, (_, i) => ({
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      phone: `123-456-789${i}`,
      role: i % 2 === 0 ? "tenant" : "landlord",
    }));
    setUsers(dummyUsers);
  }, []);

  // Calculate users for current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Handle edit and delete actions
  const handleEdit = (user) => {
    console.log("Edit user:", user);
  };

  const handleDelete = (user) => {
    console.log("Delete user:", user);
  };

  // Filter users based on search term
  const filteredUsers = currentUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <SearchBarComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TableComponent users={filteredUsers} onEdit={handleEdit} onDelete={handleDelete} />
      {/* <PaginationComponent
        currentPage={currentPage}
        totalPages={Math.ceil(users.length / usersPerPage)}
        onPageChange={(page) => setCurrentPage(page)}
      /> */}
    </div>
  );
};

export default Homepage;
