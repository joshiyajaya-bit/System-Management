export default function Card({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <h4 className="text-gray-500 text-sm">
        {title}
      </h4>

      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>
    </div>
  );
}