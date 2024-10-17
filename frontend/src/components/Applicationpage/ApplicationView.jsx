import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "../Homepage/ButtonComponent";

const ApplicationView = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Dummy data for applications (landlords)
    const dummyApplications = [
      {
        _id: "1",
        name: "John Doe",
        email: "john@example.com",
        mobile: "0712345678",
        numProperties: 2,
        idNumber: "1234567890",
        address: "123 Main Street, Cape Town",
        listingFee: "R500",
      },
      {
        _id: "2",
        name: "Jane Smith",
        email: "jane@example.com",
        mobile: "0798765432",
        numProperties: 1,
        idNumber: "0987654321",
        address: "456 Oak Drive, Johannesburg",
        listingFee: "R700",
      },
    ];

    // Simulating fetch applications
    setApplications(dummyApplications);
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Landlord Applications</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Mobile</th>
            <th className="py-2 px-4 border-b">Number of Properties</th>
            <th className="py-2 px-4 border-b">ID Number</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Listing Fee</th>
            <th className="px-2 py-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app._id} className="text-center border-t">
              <td className="py-2 px-4">{app.name}</td>
              <td className="py-2 px-4">{app.email}</td>
              <td className="py-2 px-4">{app.mobile}</td>
              <td className="py-2 px-4">{app.numProperties}</td>
              <td className="py-2 px-4">{app.idNumber}</td>
              <td className="py-2 px-4">{app.address}</td>
              <td className="py-2 px-4">{app.listingFee}</td>
              <td className="px-6 py-4 border-gray-300">
                <div className="flex space-x-2">
                  {/* Link to property details page */}
                  <Link to={`/applications/${app._id}`}>
                    <ButtonComponent text="View" variant="edit" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationView;
