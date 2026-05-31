export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          AI-MATE
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-8">
          AI-powered WhatsApp Assistant for Small Businesses.
          Automate customer support, answer FAQs, capture leads, and book appointments 24/7.
        </p>

        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold">
            Start Free
          </button>

          <button className="border border-white px-6 py-3 rounded-lg">
            <a
  href="https://wa.me/919039553864"
  target="_blank"
  className="bg-green-600 px-6 py-3 rounded-lg"
>
  Chat on WhatsApp\
</a>
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Powerful AI Features
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">
              🤖 AI Chat Support
            </h3>
            <p className="text-gray-400">
              Answer customer questions 24/7 automatically.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">
              📱 WhatsApp Automation
            </h3>
            <p className="text-gray-400">
              Reply instantly to WhatsApp messages.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">
              🎯 Lead Generation
            </h3>
            <p className="text-gray-400">
              Capture and qualify leads automatically.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">
              📅 Appointment Booking
            </h3>
            <p className="text-gray-400">
              Let customers schedule meetings instantly.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl mb-4">1️⃣</div>
              <h3 className="font-bold text-xl mb-2">
                Customer Messages
              </h3>
              <p className="text-gray-400">
                Customers contact your business.
              </p>
            </div>

            <div>
              <div className="text-5xl mb-4">2️⃣</div>
              <h3 className="font-bold text-xl mb-2">
                AI Responds
              </h3>
              <p className="text-gray-400">
                AI handles questions instantly.
              </p>
            </div>

            <div>
              <div className="text-5xl mb-4">3️⃣</div>
              <h3 className="font-bold text-xl mb-2">
                Business Grows
              </h3>
              <p className="text-gray-400">
                More leads and appointments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Pricing
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Starter</h3>
            <p className="text-4xl font-bold mb-4">$29</p>
            <p className="text-gray-400">Perfect for small businesses.</p>
          </div>

          <div className="bg-blue-600 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Pro</h3>
            <p className="text-4xl font-bold mb-4">$79</p>
            <p>Most popular plan.</p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Business</h3>
            <p className="text-4xl font-bold mb-4">$199</p>
            <p className="text-gray-400">Advanced automation.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 bg-zinc-950 text-center px-6">
        <h2 className="text-4xl font-bold mb-6">
          Ready To Automate Your Business?
        </h2>

        <p className="text-gray-400 mb-8">
          Book a demo and see how AI can grow your business.
        </p>

        <button className="bg-blue-600 px-8 py-4 rounded-lg text-lg font-semibold">
          Book Demo
        </button>
      </section>
    </main>
  );
}