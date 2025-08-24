const jobs = [
  { id: 'JOB-1023', name: 'Chileshe Banda', address: 'Rhodes Park, Lusaka', tracking: 'ICY123456789', status: 'Out for Delivery' },
  { id: 'JOB-1024', name: 'Faith Mwape', address: 'Woodlands, Lusaka', tracking: 'ICY987654321', status: 'Picked Up' },
]

export default function Driver() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100 p-4">
      {/* Smartphone container */}
      <div className="w-[390px] max-h-[800px] border-4 border-slate-300 rounded-[2.5rem] shadow-2xl overflow-y-auto relative bg-icypeed-blue/20">
        
        {/* Fake phone notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>

        <main className="px-4 py-8 space-y-6">
          <div className="flex items-center justify-between text-slate-800">
            <h2 className="text-xl font-bold">Today&apos;s Deliveries</h2>
            <div className="text-xs opacity-70">Demo UI</div>
          </div>

          <div className="space-y-4">
            {jobs.map(j => (
              <div key={j.id} className="rounded-2xl border bg-white p-5 shadow-soft">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">{j.id}</div>
                  <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-700">
                    {j.status}
                  </span>
                </div>
                <div className="mt-2 text-sm text-slate-600">
                  {j.name} • {j.address}
                </div>
                <div className="mt-1 text-xs text-slate-500">Tracking: {j.tracking}</div>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 px-4 py-2 rounded-xl bg-icypeed-blue text-white text-sm">
                    Start Route
                  </button>
                  <button className="flex-1 px-4 py-2 rounded-xl border text-sm">
                    Mark Delivered
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
