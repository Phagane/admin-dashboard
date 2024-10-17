// src/pages/Homepage.js
import React, { useState, useEffect } from "react";
import TableComponent from "./TableComponent";
import SearchBarComponent from "./SearchBarComponent";
import axios from "axios";

const Homepage = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/admin/users"); // Assuming your backend is at the root
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = (user) => {
    console.log("Edit user:", user);
  };

  const handleDelete = (user) => {
    console.log("Delete user:", user);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <SearchBarComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TableComponent users={filteredUsers} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Homepage;
