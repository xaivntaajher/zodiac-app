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
    },
    Taurus: {
      description: "Taurus is patient, reliable, and loves luxury and comfort.",
      stone: "Emerald",
    },
    Gemini: {
      description: "Gemini is curious, adaptable, and loves to communicate.",
      stone: "Agate",
    },
    Cancer: {
      description: "Cancer is nurturing, protective, and deeply intuitive.",
      stone: "Moonstone",
    },
    Leo: {
      description:
        "Leo is proud, generous, and loves to be the center of attention.",
      stone: "Onyx",
    },
    Virgo: {
      description:
        "Virgo is detail-oriented, practical, and loves to help others.",
      stone: "Carnelian",
    },
    Libra: {
      description: "Libra values harmony, fairness, and beautiful things.",
      stone: "Opal",
    },
    Scorpio: {
      description: "Scorpio is intense, determined, and mysterious.",
      stone: "Topaz",
    },
    Sagittarius: {
      description: "Sagittarius is optimistic, adventurous, and loves freedom.",
      stone: "Turquoise",
    },
    Capricorn: {
      description: "Capricorn is ambitious, disciplined, and practical.",
      stone: "Ruby",
    },
    Aquarius: {
      description: "Aquarius is inventive, independent, and values equality.",
      stone: "Amethyst",
    },
    Pisces: {
      description: "Pisces is compassionate, creative, and deeply emotional.",
      stone: "Aquamarine",
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
      </div>
    </div>
  );
}

export default App;
