import ParcelCard from '../components/ParcelCard'
import { StatusBadge } from '../components/StatusBadge'

const mockParcels = [
  { tracking: 'ICY123456789', status: 'Arrived in Zambia', origin: 'Guangzhou, CN', destination: 'Lusaka, ZM', eta: 'Today', weight: '2.3 kg' },
  { tracking: 'ICY987654321', status: 'In Transit', origin: 'Dubai, AE', destination: 'Ndola, ZM', eta: 'Aug 21', weight: '1.0 kg' },
]

export default function Customer() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100 p-4">
      {/* Smartphone container */}
      <div className="w-[390px] max-h-[800px] bg-white border-4 border-slate-300 rounded-[2.5rem] shadow-2xl overflow-y-auto relative">
        
        {/* Fake phone notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>

        <main className="px-4 py-8 space-y-6">
          <div className="rounded-2xl bg-white border p-5 shadow-soft">
            <h2 className="text-xl font-bold">Track a parcel</h2>
            <div className="mt-3 flex gap-2">
              <input className="flex-1 rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-icypeed-blue" placeholder="Enter tracking number e.g. ICY123456789" />
              <button className="px-5 py-3 rounded-xl bg-icypeed-blue text-white font-semibold">Track</button>
            </div>
            <p className="mt-2 text-xs text-slate-500">Demo only — shows static data below.</p>
          </div>

          <section className="space-y-4">
            {mockParcels.map((p) => <ParcelCard key={p.tracking} parcel={p} />)}
          </section>

          <section className="rounded-2xl bg-white border p-5 shadow-soft">
            <h3 className="text-lg font-semibold">Request Local Delivery</h3>
            <p className="text-sm text-slate-600 mt-1">
              Once your parcel has <StatusBadge status="Arrived in Zambia" />, you can schedule delivery to your address.
            </p>
            <div className="mt-4 space-y-3">
              <input className="w-full rounded-xl border px-4 py-3" placeholder="Full name" />
              <input className="w-full rounded-xl border px-4 py-3" placeholder="Delivery address" />
              <input className="w-full rounded-xl border px-4 py-3" placeholder="Phone number" />
              <input className="w-full rounded-xl border px-4 py-3" placeholder="Preferred date" />
              <input className="w-full rounded-xl border px-4 py-3" placeholder="Time window" />
              <select className="w-full rounded-xl border px-4 py-3">
                <option>Payment on delivery</option>
                <option>Prepaid</option>
              </select>
            </div>
            <button className="mt-4 w-full px-5 py-3 rounded-2xl bg-icypeed-red text-white font-semibold shadow-soft">
              Submit Request
            </button>
          </section>
        </main>
      </div>
    </div>
  )
}