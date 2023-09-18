import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar(props) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      <div
        className={`min-h-screen bg-white border-gray-100 ${
          isSidebarVisible ? "md:block" : "md:hidden"
        }`}
      >
        <div
          className="md:hidden p-2 text-gray-500 hover:text-orange-300 cursor-pointer"
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isSidebarVisible
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </div>
        <div
          className={`w-56 bg-white rounded-r-lg overflow-hidden ${
            isSidebarVisible ? "block" : "hidden"
          }`}
        >
          <h1 className="text-center font-bold mt-14 text-lg text-black">
            {" "}
            Categories{" "}
          </h1>
          <ul className="flex flex-col py-4 space-y-2">
            <li>
              <div  onClick={props.click1} >
              <Link
                to={props.link1}
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-orange-300"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-home" />
                </span>
                <span className="text-sm font-medium">{props.h1}</span>
               
              </Link>
              </div>
            </li>
            <div onClick={props.click2}>
            <li>
              <Link
                to={props.link2}
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-orange-300"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-home" />
                </span>
                <span className="text-sm font-medium">{props.h2}</span>
              </Link>
            </li>
            </div>
            <div onClick={props.click3}>
            <li>
              <Link
                to={props.link3}
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-orange-300"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-home" />
                </span>
                <span className="text-sm font-medium">{props.h3}</span>
              </Link>
            </li>
            </div>
            <div onClick={props.click4}>
            <li>
              <Link
                to={props.link4}
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-orange-300"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-home" />
                </span>
                <span className="text-sm font-medium">{props.h4}</span>
              </Link>
            </li>
            </div>
            <div onClick={props.click5}>
            <li>
              <Link
                to={props.link5}
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-orange-300"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-home" />
                </span>
                <span className="text-sm font-medium">{props.h5}</span>
              </Link>
            </li>
            </div>
            <div onClick={props.click6}>
            <li>
              <Link
                to={props.link6}
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-orange-300"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-home" />
                </span>
                <span className="text-sm font-medium">{props.h6}</span>
              </Link>
            </li>
            </div>
            <div onClick={props.click7}>
            <li>
              <Link
                to={props.link7}
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-orange-300"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-home" />
                </span>
                <span className="text-sm font-medium">{props.h7}</span>
              </Link>
            </li>
            </div>
            <div onClick={props.click8}>
            <li>
              <Link
                to={props.link8}
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-orange-300"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-home" />
                </span>
                <span className="text-sm font-medium">{props.h8}</span>
              </Link>
            </li>
            </div>
            <div onClick={props.click9}>
            <li>
              <Link
                to={props.link9}
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-orange-300"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-home" />
                </span>
                <span className="text-sm font-medium">{props.h9}</span>
              </Link>
            </li>
            </div>
            <div onClick={props.click10}>
            <li>
              <Link
                to={props.link10}
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-orange-300"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-home" />
                </span>
                <span className="text-sm font-medium">{props.h10}</span>
              </Link>
            </li>
            </div>
            <div onClick={props.click11}>
            <li>
              <Link
                to={props.link11}
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-orange-300"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-home" />
                </span>
                <span className="text-sm font-medium">{props.h11}</span>
              </Link>
            </li>
            </div>
            <div onClick={props.click11}>
            <li>
              <Link
                to={props.link12}
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-orange-300"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-home" />
                </span>
                <span className="text-sm font-medium">{props.h12}</span>
              </Link>
            </li>
            </div>
            <div onClick={props.click13}>
            <li>
              <div
                
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-orange-300"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-home" />
                </span>
                <span className="text-sm font-medium">{props.h13}</span>
              </div>
            </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
