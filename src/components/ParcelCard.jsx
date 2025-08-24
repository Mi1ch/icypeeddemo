import { StatusBadge } from './StatusBadge'

export default function ParcelCard({ parcel }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
      <div className="flex items-center justify-between">
        <div className="text-sm text-slate-500">Tracking</div>
        <StatusBadge status={parcel.status} />
      </div>
      <div className="mt-1 text-lg font-semibold">{parcel.tracking}</div>
      <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="text-slate-500">Origin</div>
          <div className="font-medium">{parcel.origin}</div>
        </div>
        <div>
          <div className="text-slate-500">Destination</div>
          <div className="font-medium">{parcel.destination}</div>
        </div>
        <div>
          <div className="text-slate-500">ETA</div>
          <div className="font-medium">{parcel.eta}</div>
        </div>
        <div>
          <div className="text-slate-500">Weight</div>
          <div className="font-medium">{parcel.weight}</div>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <button className="px-4 py-2 rounded-xl bg-icypeed-blue text-white text-sm font-medium hover:opacity-90">
          View Timeline
        </button>
        <button className="px-4 py-2 rounded-xl border border-slate-300 text-sm font-medium hover:bg-slate-50">
          Download Receipt
        </button>
      </div>
    </div>
  )
}
