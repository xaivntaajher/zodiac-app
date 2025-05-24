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

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setBirthData({
      ...birthData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const westernZodiac = getWesternZodiac(
      Number(birthData.month),
      Number(birthData.day)
    );

    const westernData = westernZodiacData[westernZodiac];

    const chineseSign = getChineseZodiac(Number(birthData.year));
    const chineseData = chineseZodiacData[chineseSign];

    setResult({
      western: westernZodiac,
      westernDesc: westernData.description,
      stone: westernData.stone,
      stoneColor: westernData.stoneColor,
      chinese: chineseSign,
      chineseDesc: chineseData.description,
      avoid: chineseData.avoid,
      reason: chineseData.reason,
    });
  };

  const westernZodiacData = {
    Aries: {
      description:
        "Aries is known for being energetic, assertive, and independent.",
      stone: "Diamond",
      stoneColor: "#b9f2ff",
    },
    Taurus: {
      description: "Taurus is patient, reliable, and loves luxury and comfort.",
      stone: "Emerald",
      stoneColor: "#50c878",
    },
    Gemini: {
      description: "Gemini is curious, adaptable, and loves to communicate.",
      stone: "Agate",
      stoneColor: "#dcdcdc",
    },
    Cancer: {
      description: "Cancer is nurturing, protective, and deeply intuitive.",
      stone: "Moonstone",
      stoneColor: "#aad9d9",
    },
    Leo: {
      description:
        "Leo is proud, generous, and loves to be the center of attention.",
      stone: "Onyx",
      stoneColor: "#353839",
    },
    Virgo: {
      description:
        "Virgo is detail-oriented, practical, and loves to help others.",
      stone: "Carnelian",
      stoneColor: "#b31b1b",
    },
    Libra: {
      description: "Libra values harmony, fairness, and beautiful things.",
      stone: "Opal",
      stoneColor: "#a8c3bc",
    },
    Scorpio: {
      description: "Scorpio is intense, determined, and mysterious.",
      stone: "Topaz",
      stoneColor: "#ffcc00",
    },
    Sagittarius: {
      description: "Sagittarius is optimistic, adventurous, and loves freedom.",
      stone: "Turquoise",
      stoneColor: "#40e0d0",
    },
    Capricorn: {
      description: "Capricorn is ambitious, disciplined, and practical.",
      stone: "Ruby",
      stoneColor: "#e0115f",
    },
    Aquarius: {
      description: "Aquarius is inventive, independent, and values equality.",
      stone: "Amethyst",
      stoneColor: "#9966cc",
    },
    Pisces: {
      description: "Pisces is compassionate, creative, and deeply emotional.",
      stone: "Aquamarine",
      stoneColor: "#7fffd4",
    },
  };

  const chineseZodiacData = {
    Rat: {
      description: "Rats are quick-witted, resourceful, and smart.",
      avoid: "Horse",
      reason:
        "Rats and Horses are seen as conflicting in personality and lifestyle, leading to misunderstandings.",
    },
    Ox: {
      description: "Oxen are strong, reliable, and determined.",
      avoid: "Goat",
      reason:
        "Ox and Goat clash due to differences in work style and communication.",
    },
    Tiger: {
      description: "Tigers are brave, confident, and competitive.",
      avoid: "Monkey",
      reason:
        "Tigers and Monkeys can compete and create tension rather than harmony.",
    },
    Rabbit: {
      description: "Rabbits are gentle, elegant, and alert.",
      avoid: "Rooster",
      reason:
        "Rabbit and Rooster may struggle to understand each other's priorities.",
    },
    Dragon: {
      description: "Dragons are confident, intelligent, and enthusiastic.",
      avoid: "Dog",
      reason:
        "Dragon and Dog can be too stubborn and clash in decision-making.",
    },
    Snake: {
      description: "Snakes are wise, discreet, and mysterious.",
      avoid: "Pig",
      reason:
        "Snake and Pig have different values and can find it hard to agree.",
    },
    Horse: {
      description: "Horses are active, energetic, and love freedom.",
      avoid: "Rat",
      reason: "Horse and Rat can feel controlled or restricted by each other.",
    },
    Goat: {
      description: "Goats are calm, gentle, and creative.",
      avoid: "Ox",
      reason: "Goat and Ox have very different views on life and work.",
    },
    Monkey: {
      description: "Monkeys are witty, intelligent, and curious.",
      avoid: "Tiger",
      reason: "Monkey and Tiger both want to be leaders, causing friction.",
    },
    Rooster: {
      description: "Roosters are observant, hardworking, and courageous.",
      avoid: "Rabbit",
      reason:
        "Rooster and Rabbit can misunderstand each other’s methods and goals.",
    },
    Dog: {
      description:
        "Dogs are loyal, honest, and have a strong sense of justice.",
      avoid: "Dragon",
      reason:
        "Dog and Dragon can both be very headstrong and find compromise hard.",
    },
    Pig: {
      description: "Pigs are compassionate, generous, and diligent.",
      avoid: "Snake",
      reason: "Pig and Snake may find it hard to align their personal values.",
    },
  };

  const getWesternZodiac = (month, day) => {
    const zodiacSigns = [
      { sign: "Capricorn", start: [12, 22], end: [1, 19] },
      { sign: "Aquarius", start: [1, 20], end: [2, 18] },
      { sign: "Pisces", start: [2, 19], end: [3, 20] },
      { sign: "Aries", start: [3, 21], end: [4, 19] },
      { sign: "Taurus", start: [4, 20], end: [5, 20] },
      { sign: "Gemini", start: [5, 21], end: [6, 20] },
      { sign: "Cancer", start: [6, 21], end: [7, 22] },
      { sign: "Leo", start: [7, 23], end: [8, 22] },
      { sign: "Virgo", start: [8, 23], end: [9, 22] },
      { sign: "Libra", start: [9, 23], end: [10, 22] },
      { sign: "Scorpio", start: [10, 23], end: [11, 21] },
      { sign: "Sagittarius", start: [11, 22], end: [12, 21] },
    ];

    for (const zodiac of zodiacSigns) {
      const [startMonth, startDay] = zodiac.start;
      const [endMonth, endDay] = zodiac.end;

      if (
        (month === startMonth && day >= startDay) ||
        (month === endMonth && day <= endDay)
      ) {
        return zodiac.sign;
      }
    }

    // If not found, default to Capricorn
    return "Capricorn";
  };

  const getChineseZodiac = (year) => {
    const animals = [
      "Rat",
      "Ox",
      "Tiger",
      "Rabbit",
      "Dragon",
      "Snake",
      "Horse",
      "Goat",
      "Monkey",
      "Rooster",
      "Dog",
      "Pig",
    ];
    const index = (year - 4) % 12;
    return animals[index];
  };

  console.log("Result Object:", result);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded shadow w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">MyZodiac</h1>
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
        {/* Display result */}
        {result && (
          <div className="mt-6 text-center space-y-4">
            <div>
              <p className="text-xl font-bold">Your Western Zodiac:</p>
              <p className="text-2xl">{result.western}</p>
              <p className="text-sm text-gray-600">{result.westernDesc}</p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="text-sm font-semibold">Stone:</span>
                <span
                  className="inline-block w-6 h-6 rounded-full border border-gray-800"
                  style={{ backgroundColor: "red" }}
                ></span>
                <span className="text-sm">{result.stone}</span>
              </div>
            </div>
            <div>
              <p className="text-xl font-bold">Your Chinese Zodiac:</p>
              <p className="text-2xl">{result.chinese}</p>
              <p className="text-sm text-gray-600">{result.chineseDesc}</p>
              <p className="text-sm font-semibold text-red-600 mt-2">
                Avoid: {result.avoid}
              </p>
              <p className="text-xs text-gray-500">{result.reason}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
