export default function App() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-white font-sans p-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">When Trees Tremble</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          A living archive of anxiety, memory, and trees at night.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        <div className="bg-[#161b22] rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2">
            “My heart races and my mind goes blank.”
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            When I feel anxiety, all I can think about is escaping. I become irritable and extremely sensitive.
          </p>
          <p className="text-gray-500 text-xs">— Anonymous (Self-interview)</p>
        </div>

        <div className="bg-[#161b22] rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2">
            “They were so big and terrifying.”
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            As a child, I spent time at my grandmother’s house near giant ginkgo trees. I had recurring dreams of trees chasing or falling.
          </p>
          <p className="text-gray-500 text-xs">— Anonymous</p>
        </div>
      </div>
    </main>
  );
}