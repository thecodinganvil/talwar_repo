import Header from "./components/header";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Simple Content */}
      <div className="pt-20 px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Welcome to Talwar Interiors
        </h1>
        <p className="text-center text-gray-600 mt-4">
          Your trusted partner in interior design and construction
        </p>
      </div>
    </main>
  );
}
