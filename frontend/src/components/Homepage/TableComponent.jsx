import React from "react";
import ButtonComponent from "./ButtonComponent";

const TableComponent = ({ users, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-4 border border-gray-300 text-left text-sm font-medium text-gray-700">Name</th>
            <th className="px-6 py-4 border border-gray-300 text-left text-sm font-medium text-gray-700">Email</th>
            <th className="px-6 py-4 border border-gray-300 text-left text-sm font-medium text-gray-700">Phone Number</th>
            <th className="px-6 py-4 border border-gray-300 text-left text-sm font-medium text-gray-700">Role</th>
            <th className="px-6 py-4 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="bg-white border-b transition duration-200 hover:bg-gray-100">
              <td className="px-6 py-4 border border-gray-300 text-sm text-gray-800">{user.name}</td>
              <td className="px-6 py-4 border border-gray-300 text-sm text-gray-800">{user.email}</td>
              <td className="px-6 py-4 border border-gray-300 text-sm text-gray-800">{user.phoneNumber}</td>
              <td className="px-6 py-4 border border-gray-300 text-sm text-gray-800">{user.role}</td>
              <td className="px-6 py-4 border border-gray-300">
                <div className="flex space-x-2">
                  <ButtonComponent onClick={() => onEdit(user)} text="Edit" variant="edit" />
                  <ButtonComponent onClick={() => onDelete(user)} text="Delete" variant="delete" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
