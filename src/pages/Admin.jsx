const rows = [
  { tracking: 'ICY123456789', customer: 'Chileshe Banda', status: 'Arrived in Zambia', driver: 'Mutale', city: 'Lusaka' },
  { tracking: 'ICY987654321', customer: 'Faith Mwape', status: 'In Transit', driver: '-', city: 'Ndola' },
  { tracking: 'ICY555222111', customer: 'John Phiri', status: 'Out for Delivery', driver: 'Mwansa', city: 'Lusaka' },
]

export default function Admin() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Operations Overview</h2>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-xl border">Assign Driver</button>
          <button className="px-4 py-2 rounded-xl bg-icypeed-blue text-white">Create Shipment</button>
        </div>
      </div>
      <div className="mt-6 overflow-x-auto rounded-2xl border bg-white shadow-soft">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50 text-left">
            <tr className="text-slate-600">
              <th className="px-4 py-3">Tracking</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Driver</th>
              <th className="px-4 py-3">City</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.tracking} className="border-t">
                <td className="px-4 py-3 font-medium">{r.tracking}</td>
                <td className="px-4 py-3">{r.customer}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 rounded-full bg-slate-100">{r.status}</span>
                </td>
                <td className="px-4 py-3">{r.driver}</td>
                <td className="px-4 py-3">{r.city}</td>
                <td className="px-4 py-3">
                  <button className="px-3 py-1 rounded-lg bg-icypeed-red text-white">Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
