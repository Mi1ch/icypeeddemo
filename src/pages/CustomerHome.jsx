// src/pages/CustomerHome.jsx
import { Link } from "react-router-dom";
import PhoneWrapper from "../components/PhoneWrapper";

export default function CustomerHome() {
  return (
    <PhoneWrapper>
      <h1 className="text-2xl font-bold text-center mb-4">Customer Dashboard</h1>
      <p className="text-center mb-6 text-slate-600">Choose an option:</p>

      <div className="flex flex-col gap-4">
        <Link
          to="/customer/track"
          className="w-full py-4 rounded-2xl bg-icypeed-blue text-white font-semibold text-lg shadow-md text-center"
        >
          📦 Track Parcels
        </Link>
        <Link
          to="/customer/request"
          className="w-full py-4 rounded-2xl bg-icypeed-red text-white font-semibold text-lg shadow-md text-center"
        >
          🚚 Request Delivery
        </Link>
      </div>
    </PhoneWrapper>
  );
}
