export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex flex-col items-center justify-center h-screen px-6 text-center">
        <h1 className="text-6xl font-bold mb-6">
          AI Agent For Small Businesses
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl">
          Automate WhatsApp replies, customer support, lead generation
          and appointment booking using AI.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-blue-600 px-6 py-3 rounded-lg">
            Start Free
          </button>

          <button className="border border-white px-6 py-3 rounded-lg">
            Book Demo
          </button>
        </div>
      </section>
    </main>
  );
}