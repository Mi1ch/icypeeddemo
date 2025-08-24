import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Seamless <span className="text-icypeed-blue">import tracking</span> &
            fast <span className="text-icypeed-red">local delivery</span>.
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Show this interactive demo to clients. It includes customer, driver, and admin views
            with the Icypeed look & feel.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/customer" className="px-5 py-3 rounded-2xl bg-icypeed-blue text-white font-semibold shadow-soft">
              Customer App
            </Link>
            <Link to="/driver" className="px-5 py-3 rounded-2xl bg-white border border-slate-300 font-semibold hover:bg-slate-50">
              Driver App
            </Link>
            <Link to="/admin" className="px-5 py-3 rounded-2xl bg-white border border-slate-300 font-semibold hover:bg-slate-50">
              Admin
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border bg-white p-6 shadow-soft">
          <img src="/logo.png" alt="Icypeed" className="h-10 mb-4" />
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-slate-50 p-4">
              <div className="text-sm text-slate-500">Tracking</div>
              <div className="font-semibold">ICY123456789</div>
              <div className="mt-2 text-xs text-slate-500">Arrived in Zambia</div>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <div className="text-sm text-slate-500">Next Step</div>
              <div className="font-semibold">Request Local Delivery</div>
              <div className="mt-2 text-xs text-slate-500">Same-day within Lusaka</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
