export default function HomeScreen({ onNavigate }) {
  return (
    <main className="px-6 py-12 space-y-8">
      <h1 className="text-2xl font-bold text-center text-icypeed-blue">
        Welcome to ICYPEED
      </h1>
      <p className="text-center text-slate-500">Choose an option below:</p>

      <div className="space-y-5">
        <button
          onClick={() => onNavigate("track")}
          className="w-full py-4 rounded-2xl bg-icypeed-blue text-white font-semibold text-lg shadow-md"
        >
          📦 Track Parcels
        </button>
        <button
          onClick={() => onNavigate("request")}
          className="w-full py-4 rounded-2xl bg-icypeed-red text-white font-semibold text-lg shadow-md"
        >
          🚚 Request Delivery
        </button>
      </div>
    </main>
  );
}