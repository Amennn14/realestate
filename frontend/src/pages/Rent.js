import React, { useState } from "react";
import { Link } from "react-router-dom";

function RentPage() {
  const [rentOffers, setRentOffers] = useState([
    {
      id: 1,
      title: "Dar 1",
      price: 1200,
      location: "Tunis,TN",
      description: "S+3.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      id: 2,
      title: "Dar 2",
      price: 1234,
      location: "Tunis,TN",
      description: "S+4.",
      image: "https://images.unsplash.com/photo-1594662261249-9e6b5d0e9d6f",
    },
  ]);

  const [newOffer, setNewOffer] = useState({
    title: "",
    price: "",
    location: "",
    description: "",
    image: "",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    location: "",
  });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOffer((prevOffer) => ({
      ...prevOffer,
      [name]: value,
    }));
  };

  const handleSubmitOffer = (e) => {
    e.preventDefault();
    if (
      newOffer.title &&
      newOffer.price &&
      newOffer.location &&
      newOffer.description &&
      newOffer.image
    ) {
      setRentOffers([
        ...rentOffers,
        { ...newOffer, id: rentOffers.length + 1 },
      ]);
      setNewOffer({
        title: "",
        price: "",
        location: "",
        description: "",
        image: "",
      });
    }
  };

  // Updated handlePriceChange function
  const handlePriceChange = (e) => {
    const value = e.target.value.replace(",", "."); // Replace commas with dots
    if (/^\d*\.?\d*$/.test(value)) { // Allow numbers with one dot
      setNewOffer((prevOffer) => ({
        ...prevOffer,
        price: value,
      }));
    }
  };

  const filteredOffers = rentOffers.filter((offer) => {
    const matchesSearchQuery =
      offer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      offer.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesMinPrice = filters.minPrice
      ? offer.price >= filters.minPrice
      : true;
    const matchesMaxPrice = filters.maxPrice
      ? offer.price <= filters.maxPrice
      : true;
    const matchesLocation = filters.location
      ? offer.location.toLowerCase().includes(filters.location.toLowerCase())
      : true;

    return matchesSearchQuery && matchesMinPrice && matchesMaxPrice && matchesLocation;
  });

  return (
    <div className="relative bg-gray-100">
      <nav className="fixed top-0 left-0 right-0 z-20 bg-transparent text-white shadow-md py-4 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold cursor-pointer">RealEstate</h1>
          <div className="space-x-6">
            <button className="text-lg hover:text-yellow-400 transition">Rent</button>
            <button className="text-lg hover:text-yellow-400 transition">Buy</button>
            <button className="text-lg hover:text-yellow-400 transition">Sell</button>
          </div>
        </div>
      </nav>

      {/* Available Rent Offers Section */}
      <section className="py-12 px-6 bg-white mt-20">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">Available Rent Offers</h2>
        <div className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Search by title or location"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full sm:w-1/2 px-4 py-3 border border-gray-300 rounded-lg"
          />
          <div className="flex gap-4">
            <input
              type="text"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleFilterChange}
              placeholder="Min Price"
              className="px-4 py-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleFilterChange}
              placeholder="Max Price"
              className="px-4 py-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
              placeholder="Location"
              className="px-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>
        </div>
        <div className="space-y-8">
          {filteredOffers.map((offer) => (
            <Link
              to={`/offer/${offer.id}`}
              key={offer.id}
              className="flex items-center space-x-6 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <img src={offer.image} alt={offer.title} className="w-32 h-32 object-cover rounded-lg" />
              <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">{offer.title}</h3>
                <p className="text-gray-600">{offer.location}</p>
                <p className="text-gray-500">{offer.description}</p>
                <span className="text-lg font-bold text-gray-800">${offer.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
{/* Post Rent Offer Section */}
      <section className="py-12 px-6 bg-gray-200">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">Post a Rent Offer</h2>
        <form onSubmit={handleSubmitOffer} className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 text-lg font-semibold mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={newOffer.title}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-lg font-semibold mb-2">Price</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="text"
                  name="price"
                  value={newOffer.price}
                  onChange={handlePriceChange}
                  className="w-full px-12 py-3 border border-gray-300 rounded-lg"
                  placeholder="Enter price (e.g., 1200.50)"
                  required
                />
              </div>
            </div>
            <div>
<label className="block text-gray-700 text-lg font-semibold mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={newOffer.location}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-lg font-semibold mb-2">Description</label>
              <textarea
                name="description"
                value={newOffer.description}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700 text-lg font-semibold mb-2">Image URL</label>
              <input
                type="text"
                name="image"
                value={newOffer.image}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
            >
              Post Offer
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default RentPage;