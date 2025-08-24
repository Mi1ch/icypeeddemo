export function StatusBadge({ status='In Transit' }) {
  const color = {
    'In Transit': 'bg-blue-100 text-blue-700',
    'Arrived in Zambia': 'bg-amber-100 text-amber-700',
    'Out for Delivery': 'bg-purple-100 text-purple-700',
    'Delivered': 'bg-emerald-100 text-emerald-700',
    'Pending': 'bg-slate-100 text-slate-700',
  }[status] || 'bg-slate-100 text-slate-700'

  return <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${color}`}>{status}</span>
}
