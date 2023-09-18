import React, { useState, useEffect } from 'react';

function OrderPlaced() {
  const [orderNumber, setOrderNumber] = useState('');

  // Generate a random order number when the component mounts
  useEffect(() => {
    const randomOrderNumber = Math.floor(1000 + Math.random() * 9000); // Generate a 4-digit random number
    setOrderNumber(randomOrderNumber);
  }, []);

  return (
    <div className="text-center mt-11 mb-96">
      <h1 className="text-3xl font-semibold mb-4">Order Placed!</h1>
      <p className="text-lg">Your order with order number:</p>
      <p className="text-4xl font-bold text-blue-500 mb-2">{orderNumber}</p>
      <p className="text-lg">has been successfully placed.</p>
      <p className="text-lg">Thank you for shopping with us!</p>
    </div>
  );
}

export default OrderPlaced;
