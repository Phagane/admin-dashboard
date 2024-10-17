import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const PropertyDetails = () => {
  const { id } = useParams(); // Get property ID from the URL
  const [property, setProperty] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/admin/properties/${id}`);
        setProperty(response.data); // Set property data
      } catch (error) {
        console.error("Error fetching property details:", error);
      }
    };
console.log(property)
    fetchProperty();
  }, [id]);

  // Handle delete action
  const handleDelete = async () => {
      console.log("Error deleting property:");
  };

  // Handle manage action
  const handleManage = () => {
    
    console.log("Manage property:", property);
  };

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Property Details</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-semibold">Name:</p>
          <p>{property[0].name}</p>
        </div>
        <div>
          <p className="font-semibold">Price:</p>
          <p>R {property[0].price.toLocaleString()}</p>
        </div>
        <div>
          <p className="font-semibold">Location:</p>
          <p>{property[0].location}</p>
        </div>
        <div>
          <p className="font-semibold">Furnished:</p>
          <p>{property[0].furnished ? "Yes" : "No"}</p>
        </div>
        <div>
          <p className="font-semibold">Gender Allowed:</p>
          <p className="capitalize">{property[0].genderAllowed}</p>
        </div>
        <div>
          <p className="font-semibold">Occupancy Type:</p>
          <p className="capitalize">{property[0].occupancyType}</p>
        </div>
        <div className="col-span-2">
          <p className="font-semibold">Description:</p>
          <p>{property[0].description}</p>
        </div>
      </div>

      <div className="mt-6 flex space-x-4">
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Delete
        </button>
        <button
          onClick={handleManage}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Manage
        </button>
      </div>
    </div>
  );
};

export default PropertyDetails;
