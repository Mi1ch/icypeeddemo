import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import PhoneWrapper from "../components/PhoneWrapper";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function RequestDelivery() {
  const location = useLocation();
  const navigate = useNavigate();
  const parcel = location.state?.parcel || null;
  const [method, setMethod] = useState("bike");

  const methods = [
    { id: "bike", label: "Motorbike (fast)", price: "K5" },
    { id: "van", label: "Van (medium)", price: "K8" },
    { id: "truck", label: "Truck (heavy)", price: "K12" },
  ];

  return (
    <PhoneWrapper>
      <h2 className="text-xl font-bold mb-4">Request Delivery</h2>
      {parcel && (
        <p className="text-sm text-slate-600 mb-4">
          Parcel: <span className="font-semibold">{parcel.tracking}</span>
        </p>
      )}

      <div className="h-64 rounded-xl overflow-hidden border mb-4">
        <MapContainer
          center={[-15.3875, 28.3228]} // Lusaka, Zambia
          zoom={6}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[-15.3875, 28.3228]}>
            <Popup>Parcel location</Popup>
          </Marker>
        </MapContainer>
      </div>

      <input
        className="w-full rounded-xl border px-4 py-3 mb-4"
        placeholder="Enter destination address"
      />

      <div className="space-y-3">
        {methods.map((m) => (
          <label
            key={m.id}
            className={`block rounded-xl px-4 py-3 cursor-pointer ${
              method === m.id ? "bg-icypeed-blue text-white" : "bg-white text-black"
            }`}
            onClick={() => setMethod(m.id)}
          >
            {m.label} — {m.price}
          </label>
        ))}
      </div>

      <button className="mt-4 w-full py-3 rounded-xl bg-icypeed-red font-semibold">
        Confirm Request
      </button>

      <button
        onClick={() => navigate("/customer")}
        className="mt-4 w-full py-3 rounded-xl bg-slate-200 text-black font-semibold"
      >
        ⬅ Back
      </button>
    </PhoneWrapper>
  );
}
