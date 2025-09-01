// src/pages/TrackParcels.jsx
import ParcelCard from "../components/ParcelCard";
import PhoneWrapper from "../components/PhoneWrapper";
import { useNavigate } from "react-router-dom";

const mockParcels = [
  { tracking: "ICY123456789", status: "Arrived in Zambia", origin: "UK", destination: "Lusaka", eta: "Today", weight: "2.3 kg" },
  { tracking: "ICY987654321", status: "In Transit", origin: "China", destination: "Ndola", eta: "Aug 21", weight: "1.0 kg" },
];

export default function TrackParcels() {
  const navigate = useNavigate();

  return (
    <PhoneWrapper>
      <h2 className="text-xl font-bold mb-4">My Parcels</h2>
      <div className="space-y-4">
        {mockParcels.map((p) => (
          <div key={p.tracking}>
            <ParcelCard parcel={p} />
            {p.status === "Arrived in Zambia" && (
              <button
                onClick={() => navigate("/customer/request", { state: { parcel: p } })}
                className="mt-3 w-full rounded-xl bg-icypeed-blue text-white py-2 font-semibold"
              >
                Request Delivery
              </button>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("/customer")}
        className="mt-6 w-full py-3 rounded-xl bg-slate-200 font-semibold"
      >
        ⬅ Back
      </button>
    </PhoneWrapper>
  );
}
