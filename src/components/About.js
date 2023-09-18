/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

function About() {
  return (
    <div>
      <>
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
        />
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
        />
        <section className="relative  bg-blueGray-50">
          <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80")'
              }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-75 bg-black"
              />
            </div>
            <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12">
                    <h1 className="text-white font-semibold text-5xl">
                      Welcome To Our Website
                    </h1>
                    <p className="mt-4 text-lg text-blueGray-200">
                      your ultimate destination for high-quality protein products and personalized diet planning. We are passionate about helping you achieve your fitness and health goals through a combination of premium protein supplements and customized diet plans. Our mission is to empower individuals like you to lead healthier, happier lives by providing you with the tools and knowledge you need to succeed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
              style={{ transform: "translateZ(0px)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x={0}
                y={0}
              >
                <polygon
                  className="text-blueGray-200 fill-current"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </div>
          <section className="pb-10 bg-blueGray-200 -mt-24">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
                <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                        <i className="fas fa-award" />
                      </div>
                      <h6 className="text-xl font-semibold">Protein Products</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                        we offer a wide range of protein supplements, including whey protein, plant-based protein, and more. Our products are sourced from reputable manufacturers and are designed to support muscle growth, recovery, and overall well-being.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                        <i className="fas fa-retweet" />
                      </div>
                      <h6 className="text-xl font-semibold">Diet Generator</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                        We understand that one size does not fit all when it comes to nutrition. That's why we have developed a state-of-the-art Diet Generator tool. By entering your age, gender, height, weight, and fitness goals, our Diet Generator will create a personalized meal plan just for you. Whether you're looking to lose weight, gain muscle, or maintain your current physique, our tool has got you covered.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                        <i className="fas fa-fingerprint" />
                      </div>
                      <h6 className="text-xl font-semibold">Why Choose Us</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                        We are committed to delivering products that meet the highest quality standards. All our protein supplements undergo rigorous testing to ensure purity and effectiveness.Our team of nutritionists and fitness experts are here to provide you with guidance and advice on the best protein products and diet plans to achieve your specific goals. We have designed our website to be user-friendly, making it easy for you to browse our products, use the Diet Generator, and access valuable fitness resources.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="relative  pt-8 pb-6 mt-1">
                <div className="container mx-auto px-4">
                  <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                      <div className="text-sm text-blueGray-500 font-semibold py-1">
                        Made with{" "}
                        <a
                          href=""
                          className="text-blueGray-500 hover:text-gray-800"
                          target="_blank"
                        >
                          Love
                        </a>{" "}
                        by{" "}
                        <a
                          href=""
                          className="text-blueGray-500 hover:text-blueGray-800"
                          target="_blank" rel="noreferrer"
                        >
                          {" "}
                          USKT Students
                        </a>
                        .
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </section>
        </section>
      </>

    </div>
  )
}

export default About