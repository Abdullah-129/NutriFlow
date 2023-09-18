import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import Starsvg from "./Starsvg";

function ProductPage() {
  const [product, setProduct] = useState({});
  const [currentImage, setCurrentImage] = useState(product.image);
  const { id } = useParams();
  console.log(id)
  useEffect(() => {
    fetch(`http://localhost:4000/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <>
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <nav className="flex">
            <ol role="list" className="flex items-center">
              <li className="text-left">
                <div className="-m-1">
                  <Link
                    to="/Home"
                    className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                  >
                    {" "}
                    Home{" "}
                  </Link>
                </div>
              </li>
              <li className="text-left">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <div className="-m-1">
                    <Link
                      to="/ProductsPage"
                      className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                    >
                      {" "}
                      Products{" "}
                    </Link>
                  </div>
                </div>
              </li>
              <li className="text-left">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <div className="-m-1">
                    <a
                      href="#"
                      className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                      aria-current="page"
                    >
                      {product.title}{" "}
                    </a>
                  </div>
                </div>
              </li>
            </ol>
          </nav>
          <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3 lg:row-end-1">
              <div className="lg:flex lg:items-start">
                <div className="lg:order-2 lg:ml-5">
                  <div className="max-w-xl overflow-hidden rounded-lg">
                    {currentImage && (
                      <img
                        className="h-full w-full max-w-full object-cover"
                        src={currentImage}
                        alt=""
                      />
                    )}
                  </div>
                </div>
                <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                  <div className="flex flex-row items-start lg:flex-col">
                    <button
                      type="button"
                      className={`flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 ${currentImage === product.image ? "border-gray-900" : "border-transparent"
                        } text-center`}
                      onClick={() => setCurrentImage(product.image)}
                    >
                      <img
                        className="h-full w-full object-cover"
                        src={product.image}
                        alt=""
                      />
                    </button>
                    <button
                      type="button"
                      className={`flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 ${currentImage === product.image2 ? "border-gray-900" : "border-transparent"
                        } text-center`}
                      onClick={() => setCurrentImage(product.image2)}
                    >
                      <img
                        className="h-full w-full object-cover"
                        src={product.image2}
                        alt=""
                      />
                    </button>
                    <button
                      type="button"
                      className={`flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 ${currentImage === product.image3 ? "border-gray-900" : "border-transparent"
                        } text-center`}
                      onClick={() => setCurrentImage(product.image3)}
                    >
                      <img
                        className="h-full w-full object-cover"
                        src={product.image3}
                        alt=""
                      />
                    </button>
                    <button
                      type="button"
                      className={`flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 ${currentImage === product.image4 ? "border-gray-900" : "border-transparent"
                        } text-center`}
                      onClick={() => setCurrentImage(product.image4)}
                    >
                      <img
                        className="h-full w-full object-cover"
                        src={product.image4}
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
              <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
                {product.title}
              </h1>
              <div className="mt-5 flex items-center">
                <div className="flex items-center">
                  {/* <Starsvg />
                  <Starsvg />
                  <Starsvg /> */}
                </div>
                <p className="ml-2 text-sm font-medium text-gray-500">
                  {product.rating}
                </p>
              </div>
              <h2 className="mt-8 text-base text-gray-900">{product.category}</h2>
              {/* <h2 className="mt-8 text-base text-gray-900">Coffee Type</h2> */}
              <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                {/* <label className="">
                  <input
                    type="radio"
                    name="type"
                    defaultValue="Powder"
                    className="peer sr-only"
                    defaultChecked=""
                  />
                  <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                    Powder
                  </p>
                </label> */}
                {/* <label className="">
                  <input
                    type="radio"
                    name="type"
                    defaultValue="Whole Bean"
                    className="peer sr-only"
                  />
                  <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                    Whole Bean
                  </p>
                </label> */}
                {/* <label className="">
                  <input
                    type="radio"
                    name="type"
                    defaultValue="Groud"
                    className="peer sr-only"
                  />
                  <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                    Groud
                  </p>
                </label>
              </div>
              <h2 className="mt-8 text-base text-gray-900">
                Choose subscription
              </h2>
              <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                <label className="">
                  <input
                    type="radio"
                    name="subscription"
                    defaultValue="4 Months"
                    className="peer sr-only"
                  />
                  <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                    4 Months
                  </p>
                  <span className="mt-1 block text-center text-xs">$80/mo</span>
                </label>
                <label className="">
                  <input
                    type="radio"
                    name="subscription"
                    defaultValue="8 Months"
                    className="peer sr-only"
                    defaultChecked=""
                  />
                  <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                    8 Months
                  </p>
                  <span className="mt-1 block text-center text-xs">$60/mo</span>
                </label>
                <label className="">
                  <input
                    type="radio"
                    name="subscription"
                    defaultValue="12 Months"
                    className="peer sr-only"
                  />
                  <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                    12 Months
                  </p>
                  <span className="mt-1 block text-center text-xs">$40/mo</span>
                </label> */}
              </div>
              <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                <div className="flex items-end">
                  <h1 className="text-3xl font-bold">${product.price}</h1>
                </div>
                <Link to="/Cart">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 mr-3 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    Buy Now
                  </button>
                </Link>
              </div>
              <ul className="mt-8 space-y-2">
                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <svg
                    className="mr-2 block h-5 w-5 align-middle text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      className=""
                    />
                  </svg>
                  Shipping Worldwide
                </li>
                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <svg
                    className="mr-2 block h-5 w-5 align-middle text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      className=""
                    />
                  </svg>
                  Cancel Anytime
                </li>
                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <svg
                    className="mr-2 block h-5 w-5 align-middle text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      className=""
                    />
                  </svg>
                  Premium Quality
                </li>
              </ul>
            </div>
            <div className="lg:col-span-3">
              <div className="border-b border-gray-300"></div>
              <div className="mt-8 flow-root sm:mt-12">
                <h1 className="text-3xl font-bold">Description</h1>
                <p className="mt-4">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPage;
