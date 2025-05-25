export default function TestSquare() {
  return (
    <div className="flex justify-center items-center mt-10 bg-gray-300 p-4 rounded">
      <span
        className="inline-block w-10 h-10 border border-gray-800"
        style={{ backgroundColor: "#b9f2ff" }}
      ></span>
      <span className="ml-2">Should show a light blue square</span>
    </div>
  );
}
