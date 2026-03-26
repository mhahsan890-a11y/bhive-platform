export default function Stats() {
  return (
    <div className="grid grid-cols-4 gap-4 mt-6">
      <div className="p-5 bg-[#0f1629] rounded-xl">
        <h3 className="text-3xl font-bold">243</h3>
        <p className="text-green-400 text-sm">+18%</p>
      </div>

      <div className="p-5 bg-[#0f1629] rounded-xl">
        <h3 className="text-3xl font-bold">41</h3>
        <p className="text-green-400 text-sm">+9%</p>
      </div>

      <div className="p-5 bg-[#0f1629] rounded-xl">
        <h3 className="text-3xl font-bold">89</h3>
        <p className="text-green-400 text-sm">+34%</p>
      </div>

      <div className="p-5 bg-[#0f1629] rounded-xl">
        <h3 className="text-3xl font-bold">AED 18,420</h3>
        <p className="text-red-400 text-sm">-3%</p>
      </div>
    </div>
  );
}