import React, { useState, useEffect } from "react";
import ButtonComponent from "../Homepage/ButtonComponent";
const PropertiesPage = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Using dummy data for properties
    const dummyData = [
      {
        _id: "1",
        name: "Sunny Apartment",
        price: 3500,
        location: "Cape Town",
        furnished: true,
        genderAllowed: "any",
        occupancyType: "single",
      },
      {
        _id: "2",
        name: "Luxury Loft",
        price: 5500,
        location: "Johannesburg",
        furnished: false,
        genderAllowed: "male",
        occupancyType: "sharing",
      },
      {
        _id: "3",
        name: "Garden Cottage",
        price: 4500,
        location: "Durban",
        furnished: true,
        genderAllowed: "female",
        occupancyType: "single",
      },
      {
        _id: "4",
        name: "Modern Studio",
        price: 3000,
        location: "Pretoria",
        furnished: false,
        genderAllowed: "any",
        occupancyType: "sharing",
      },
    ];

    // Simulating data fetch with dummy data
    setProperties(dummyData);
  }, []);

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
                  <ButtonComponent text="View" variant="edit" />
                </div></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertiesPage;
