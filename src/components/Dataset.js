import React from 'react';

function Dataset({ bmi }) {
  let message = '';

  if (bmi >= 18.5 && bmi <= 23.9) {
    message = "According to your BMI, you should consider maintaining your weight.";
  } else if (bmi < 18.5) {
    message = "According to your BMI, you should consider gaining weight.";
  } else {
    message = "According to your BMI, you should consider losing weight.";
  }

  return (
    <div className="text-center pt-11">
      <p className="mb-4 font-bold">BMI: {bmi.toFixed(2)}</p>
      <p>{message}</p>
    </div>
  );
}

export default Dataset;
