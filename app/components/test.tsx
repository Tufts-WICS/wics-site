import Link from "next/link";

export default function TestComponent() {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <p className="text-lg font-semibold mb-2">This is a test component</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2">
        Example Button
      </button>
      <Link href="/" className="text-blue-500 underline hover:text-blue-700">
        Example Link
      </Link>
    </div>
  );
}