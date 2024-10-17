import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../Homepage/ButtonComponent";
import axios from "axios";

const PropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("http://localhost:8000/admin/properties"); // API call to get properties
        setProperties(response.data); // Set properties to the fetched data
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  const handleViewClick = (propertyId) => {
    navigate(`/property/${propertyId}`);
  };
  
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Properties List</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Property Name</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Location</th>
            <th className="py-2 px-4 border-b">Furnished</th>
            <th className="py-2 px-4 border-b">Gender Allowed</th>
            <th className="py-2 px-4 border-b">Occupancy Type</th>
            <th className="px-2 py-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property._id} className="text-center border-t">
              <td className="py-2 px-4">{property.name}</td>
              <td className="py-2 px-4">R {property.price.toLocaleString()}</td>
              <td className="py-2 px-4">{property.location}</td>
              <td className="py-2 px-4">{property.furnished ? "Yes" : "No"}</td>
              <td className="py-2 px-4 capitalize">{property.genderAllowed}</td>
              <td className="py-2 px-4 capitalize">{property.occupancyType}</td>
              <td className="px-6 py-4 border-gray-300">
                <div className="flex space-x-2">
                <ButtonComponent
                    text="View"
                    variant="edit"
                    onClick={() => handleViewClick(property._id)}  // Navigate on click
                  />             
                </div></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertiesPage;
