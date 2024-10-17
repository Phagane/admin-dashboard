import React, { useState } from "react";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    numProperties: 1,
    idNumber: "",
    address: "",
    listingFee: "",
  });

  const [propertyDocuments, setPropertyDocuments] = useState(null);
  const [proofOfOwnership, setProofOfOwnership] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e, setFileFunction) => {
    setFileFunction(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.idNumber ||
      !formData.address ||
      !formData.listingFee ||
      !propertyDocuments ||
      !proofOfOwnership
    ) {
      setError("Please fill in all required fields and upload all documents.");
      return;
    }

    // Form submission logic
    console.log("Form Submitted", formData, propertyDocuments, proofOfOwnership);
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Property Application Form</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Names */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-600">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-600">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Mobile Number */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-600">Mobile Number:</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Number of Properties */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-600">Number of Properties:</label>
            <input
              type="number"
              name="numProperties"
              value={formData.numProperties}
              onChange={handleChange}
              min="1"
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* ID Number or Passport */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-600">ID Number or Passport:</label>
            <input
              type="text"
              name="idNumber"
              value={formData.idNumber}
              onChange={handleChange}
              placeholder="Enter your ID number or Passport"
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Address */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-600">Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Listing Fee */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-600">Listing Fee:</label>
            <input
              type="text"
              name="listingFee"
              value={formData.listingFee}
              onChange={handleChange}
              placeholder="Enter listing fee amount"
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Property Documents */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-600">Property Documents:</label>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, setPropertyDocuments)}
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Proof of Ownership */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-600">Proof of Ownership:</label>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, setProofOfOwnership)}
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
