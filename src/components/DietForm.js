import React, { useState } from 'react';
import High from './High';
import Low from './Low';
import Maintain from './Maintain';
import Dataset from './Dataset';
import RecomendedProducts from './RecomendedProducts';

function DietForm() {
    const [response, setResponse] = useState(null);
    const [bmiValue, setBmiValue] = useState(null);
    const [formData, setFormData] = useState({
        age: '',
        weight: '',
        height: '',
        gender: '',
        goal: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:4001/api/diet-plan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                setResponse(data);
                setBmiValue(data.bmi);
                console.log(bmiValue) 
            })
            .catch((error) => console.error('Error:', error));
    };


    return (
        <div className=''>
            <div className="my-8 mx-auto w-full max-w-screen-lg">
                <h1 className="text-3xl font-semibold text-center">Enter Your Details</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="age" className="block text-sm font-medium text-gray-900">
                            Age
                        </label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="weight" className="block text-sm font-medium text-gray-900">
                            Weight (kg)
                        </label>
                        <input
                            type="number"
                            id="weight"
                            name="weight"
                            value={formData.weight}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="height" className="block text-sm font-medium text-gray-900">
                            Height (m)
                        </label>
                        <input
                            type="number"
                            step="0.01"
                            id="height"
                            name="height"
                            value={formData.height}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="gender" className="block text-sm font-medium text-gray-900">
                            Gender
                        </label>
                        <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500"
                            required
                        >
                            <option value="" disabled>
                                Choose your gender
                            </option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="goal" className="block text-sm font-medium text-gray-900">
                            Goal
                        </label>
                        <select
                            id="goal"
                            name="goal"
                            value={formData.goal}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500"
                            required
                        >
                            <option value="" disabled>
                                Choose your goal
                            </option>
                            <option value="lose weight">Lose Weight</option>
                            <option value="gain weight">Gain Weight</option>
                            <option value="maintain weight">Maintain Weight</option>
                        </select>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                {response && (
                    <div>
                        {response.dietPlan === "High Protein" && <>
                            <Dataset bmi={bmiValue} />
                            <High />
                            <RecomendedProducts cat={"gain"} message={"Gain"}/>
                        </>}
                    </div>
                )}
                {response && (
                    <div>
                        {response.dietPlan === "Low Calorie" && <>
                            <Dataset bmi={bmiValue} />
                            <Low />
                            <RecomendedProducts cat={"lose"} message={"Lose"}/>
                        </>}
                    </div>
                )}
                {response && (
                    <div>
                        {response.dietPlan === "Maintain Weight" && <>
                            <Dataset bmi={bmiValue} />
                            <Maintain />
                            <RecomendedProducts cat={"maintain"} message={"Maintain"}/>
                        </>}
                    </div>
                )}

            </div>

        </div>
    );
}

export default DietForm;
