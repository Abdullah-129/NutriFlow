/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function RecommendedProducts({ cat, message }) {
  const [products, setProducts] = useState([]);
  const apiUrl = `http://localhost:4000/api/products/cat/${cat}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [apiUrl]);

  // Function to shuffle an array
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  // Shuffle the products array and take the first 4 elements
  const shuffledProducts = shuffleArray(products).slice(0, 4);

  return (

    <div>
         
      <section className="py-10 bg-gray-50">
      <h1 className="text-3xl font-bold tracking-tight text-gray-600 text-center mt-11 relative">
            These Product Help You Alot To {message} Weight
          </h1>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {shuffledProducts.map((product) => (
            <article
              className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
              key={product.id}
            >
              <Link to={`/ProductsPage/${product.id}`}>
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <img
                    src={product.image}
                    alt={`Product Photo for ${product.title}`}
                    className="max-w-full rounded-lg object-contain"
                  />
                  <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <button className="text-sm">Add to cart</button>
                  </div>
                </div>
                <div className="mt-1 p-2">
                  <h2 className="text-slate-700">{product.title}</h2>
                  <div className="mt-3 flex items-end justify-between">
                    <p className="text-lg font-bold text-blue-500">${product.price}</p>
                    <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default RecommendedProducts;
