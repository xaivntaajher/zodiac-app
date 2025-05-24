import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [birthData, setBirthData] = useState({
    month: "",
    day: "",
    year: "",
  });

  const handleChange = (e) => {
    setBirthData({
      ...birthData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(birthData);
  };

  return (
    <div className="min-h-screen by-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded shadow w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Zodiac Finder</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <select
            name="month"
            className="border p-2 rounded"
            onChange={handleChange}
            value={birthData.month}
            required
          >
            <option value="">Month</option>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select
            name="day"
            className="border p-2 rounded"
            onChange={handleChange}
            value={birthData.day}
            required
          >
            <option value="">Day</option>
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <input
            type="number"
            name="year"
            placeholder="Year"
            className="border p-2 rounded"
            onChange={handleChange}
            value={birthData.year}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Find Zodiac
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
