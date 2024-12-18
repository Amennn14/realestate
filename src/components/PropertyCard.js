import React from 'react';
import { Link } from 'react-router-dom';

function PropertyCard({ property }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{property.title}</h2>
        <p className="text-gray-600">{property.location}</p>
        <p className="text-lg font-bold mt-2">${property.price} / month</p>
        <Link to={`/property/${property.id}`} className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default PropertyCard;
