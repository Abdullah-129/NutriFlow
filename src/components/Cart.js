import React from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <div className="max-w-screen-2xl mx-auto flex justify-center items-center pt-11 pb-11">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Checkout</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Name@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 text-sm font-medium mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="10 Street XYZ 654"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-gray-700 text-sm font-medium mb-2">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Sialkot"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="state" className="block text-gray-700 text-sm font-medium mb-2">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Punjab"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="postal_code" className="block text-gray-700 text-sm font-medium mb-2">
              ZIP
            </label>
            <input
              type="text"
              id="postal_code"
              name="postal_code"
              className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="51310"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block text-gray-700 text-sm font-medium mb-2">
              Country
            </label>
            <select
            
              id="country"
              name="country"
              className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="AU">Australia</option>
              <option value="BE">Belgium</option>
              <option value="BR">Brazil</option>
              <option value="CA">Canada</option>
              <option value="CN">China</option>
              <option value="DK">Denmark</option>
              <option value="FI">Finland</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
              <option value="HK">Hong Kong</option>
              <option value="IE">Ireland</option>
              <option value="IT">Italy</option>
              <option value="JP">Japan</option>
              <option value="LU">Luxembourg</option>
              <option value="MX">Mexico</option>
              <option value="NL">Netherlands</option>
              <option value="PL">Poland</option>
              <option value="PT">Portugal</option>
              <option value="SG">Singapore</option>
              <option value="ES">Spain</option>
              <option value="TN">Tunisia</option>
              <option value="PK" selected>
                Pakistan
              </option>
            </select>
          </div>
          <hr className="my-6" />
          <Link to="/OrderPlaced">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 w-full">
            Pay (Cash on Delivery)
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Cart;
