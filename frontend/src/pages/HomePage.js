import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // slide pictures
  const images = [
    "https://www.bankrate.com/2023/03/09124248/how-to-invest-in-real-estate-in-2024.jpeg",
    "https://www.jll.co.uk/images/global/jll-future-vision-real-estate-social-1200x628.jpg",
    "https://imarat.com.pk/wp-content/uploads/2024/08/Safe-and-Profitable-Real-Estate-Investments-min.jpg",
    "https://anywhere.re/wp-content/uploads/2023/05/633f08923c4c51e97e723cde_State-of-Luxury-Real-Estate-in-Partnership-with-AREAA-2048x1406-1-1024x703.jpeg",
    "https://vantagedevelopers.com.pk/wp-content/uploads/2024/03/the-ultimate-guide-to-real-estate-pakistan-1400x800.jpg"
  ];

  // Next slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 2000); // 2sec

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative bg-gray-100 overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-20 bg-transparent text-white shadow-md py-4 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold cursor-pointer" onClick={() => navigate('/')}>RealEstate</h1>
          <div className="space-x-6">
            <button
              onClick={() => navigate('/rent')}
              className="text-lg hover:text-yellow-400 transition"
            >
              Rent
            </button>
            <button
              onClick={() => navigate('/buy')}
              className="text-lg hover:text-yellow-400 transition"
            >
              Buy
            </button>
            <button
              onClick={() => navigate('/sell')}
              className="text-lg hover:text-yellow-400 transition"
            >
              Sell
            </button>
          </div>
        </div>
      </nav>

      {/* hero */}
      <section
        className="relative w-full h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://www.construction21.org/data/sources/users/44110/breno-assis-r3wawu5fi5q-unsplash.jpg')`, // Add your desired background image URL here
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Find Your Dream Home</h1>
          <p className="text-lg mb-6 animate-fade-in-delay">Explore the best properties tailored to your needs</p>
          <button
            onClick={() => navigate('/explore')}
            className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition transform hover:scale-105"
          >
            Explore Offers
          </button>
        </div>
      </section>


      <section className="relative py-12 px-6 bg-white">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">Explore Our Offers</h2>
        <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">

          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="w-full h-full flex-shrink-0">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">What Are You Looking For?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/669/669033.png"
              alt="Rent"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Rent a Home</h3>
            <p className="text-lg text-gray-600 mb-4">Browse a wide selection of rental properties that suit your needs and budget.</p>
            <button
              onClick={() => navigate('/rent')}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Browse Rentals
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/569/569703.png"
              alt="Buy"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Buy a Home</h3>
            <p className="text-lg text-gray-600 mb-4">Explore a variety of homes for sale, from affordable to luxurious options.</p>
            <button
              onClick={() => navigate('/buy')}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Browse Homes
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2509/2509775.png"
              alt="Sell"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sell a Home</h3>
            <p className="text-lg text-gray-600 mb-4">List your property for sale and connect with potential buyers quickly.</p>
            <button
              onClick={() => navigate('/sell')}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              List Your Property
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-white text-center">
        <p>&copy; 2024 amenn RealEstate. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;