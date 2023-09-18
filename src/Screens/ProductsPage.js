import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import Sidebar from '../components/Sidebar';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const productsPerPage = 16;
  const [apiUrl, setApiUrl] = useState("http://localhost:4000/api/products/cat/lose");
  const heading = "OUR PRODUCTS";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [apiUrl]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [apiUrl]);

  function handlePrevClick() {
    if (startIndex >= productsPerPage) {
      setStartIndex(startIndex - productsPerPage);
    }
  }

  const handleNextClick = () => {
    if (startIndex + productsPerPage < products.length) {
      setStartIndex(startIndex + productsPerPage);
    }
  };
  const visibleProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <div className='flex'>
      <Sidebar
        h1="FOR GAINING WEIGHT"
        click1={() => setApiUrl("http://localhost:4000/api/products/cat/gain")}
        h2="FOR MAINTAIN WEIGHT"
        click2={() => setApiUrl("http://localhost:4000/api/products/cat/maintain")}
        h3="FOR LOSING WEIGHT"
        click3={() => setApiUrl("http://localhost:4000/api/products/cat/lose")}
      />
      <div className="flex-1">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 text-center mt-11 relative">
            {heading}
          </h1>
          <div className="mt-6 mr-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {visibleProducts.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={`/ProductsPage/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-bold text-gray-900">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="container mx-auto mt-11">
            <div className="mx-auto mr-10 md:mx-96 mb-11 grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                className="join-item btn btn-outline w-full"
                onClick={handlePrevClick}
              >
                Previous page
              </button>
              <button
                className="join-item btn btn-outline w-full"
                onClick={handleNextClick}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
