import Header from "./components/header";
import Homepage from "./components/homepage";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Homepage Component */}
      <Homepage />
    </main>
  );
}
