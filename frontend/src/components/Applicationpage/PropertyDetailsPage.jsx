import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const PropertyDetailsPage = () => {
  const { id } = useParams(); // Get the application id from URL params
  const navigate = useNavigate(); // To redirect after approval/rejection

  // Dummy data (should be replaced with fetched data)
  const applications = [
    {
      _id: "1",
      name: "John Doe",
      email: "john@example.com",
      mobile: "0712345678",
      numProperties: 2,
      idNumber: "1234567890",
      address: "123 Main Street, Cape Town",
      listingFee: "R500",
      propertyDocuments: "document1.pdf",
      proofOfOwnership: "ownership1.pdf",
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
      propertyDocuments: "document2.pdf",
      proofOfOwnership: "ownership2.pdf",
    },
  ];

  const application = applications.find((app) => app._id === id);

  if (!application) {
    return <div>No application found</div>;
  }

  // Handlers for Approve and Reject buttons
  const handleApprove = () => {
    console.log(`Application ${id} has been approved.`);
    // Simulate an API call to approve the application
    // After approving, you can redirect or show a success message
    alert(`Application for ${application.name} has been approved.`);
    navigate("/applications");
  };

  const handleReject = () => {
    console.log(`Application ${id} has been rejected.`);
    // Simulate an API call to reject the application
    // After rejecting, you can redirect or show a rejection message
    alert(`Application for ${application.name} has been rejected.`);
    navigate("/applications");
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Application Details</h1>
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <p><strong>Name:</strong> {application.name}</p>
        <p><strong>Email:</strong> {application.email}</p>
        <p><strong>Mobile:</strong> {application.mobile}</p>
        <p><strong>Number of Properties:</strong> {application.numProperties}</p>
        <p><strong>ID Number:</strong> {application.idNumber}</p>
        <p><strong>Address:</strong> {application.address}</p>
        <p><strong>Listing Fee:</strong> {application.listingFee}</p>
        <p><strong>Property Documents:</strong> {application.propertyDocuments}</p>
        <p><strong>Proof of Ownership:</strong> {application.proofOfOwnership}</p>

        {/* Approve and Reject Buttons */}
        <div className="mt-6 flex space-x-4">
          <button
            onClick={handleApprove}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Approve
          </button>
          <button
            onClick={handleReject}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
