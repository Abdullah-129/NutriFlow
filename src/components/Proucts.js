/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Proucts() {
  const [products, setProducts] = useState([]);
  const [apiUrl, setApiUrl] = useState("http://localhost:4000/api/products");

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [apiUrl]);
  const getRandomProducts = (products, count) => {
    const shuffledProducts = products.sort(() => 0.5 - Math.random());
    return shuffledProducts.slice(0, count);
  };

  const randomProducts = getRandomProducts(products, 8);

  return (
    <div>
    <div className="pt-11 pb-11 bg-white">
      <h1 className="text-center text-2xl font-bold text-gray-800">
        Our Products
      </h1>
    </div>
    
    {/* Product List */}
    <section className="py-10 bg-gray-100">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {randomProducts.map((product) => (
          <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300" key={product.id}>
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
                {/* <p className="mt-1 text-sm text-slate-400">{product.description}</p> */}
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
      <Link to="/ProductsPage">
        <div className="flex justify-center items-center">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Browse More</button>
        </div>
      </Link>
    </section>
  </div>
  )
}

export default Proucts