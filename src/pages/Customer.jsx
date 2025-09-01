import { useState } from "react";
import HomeScreen from "./HomeScreen";
import TrackParcels from "./TrackParcels";
import RequestDelivery from "./RequestDelivery";

export default function Customer() {
  const [screen, setScreen] = useState("home");
  const [selectedParcel, setSelectedParcel] = useState(null);

  const goToTrack = () => setScreen("track");
  const goToRequest = (parcel = null) => {
    setSelectedParcel(parcel);
    setScreen("request");
  };
  const goHome = () => setScreen("home");

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100 p-4">
      {/* Smartphone container */}
      <div className="w-[390px] max-h-[800px] bg-white border-4 border-slate-300 rounded-[2.5rem] shadow-2xl overflow-y-auto relative">
        
        {/* Fake phone notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>

        <main className="px-4 py-8 space-y-6">
          {screen === "home" && <HomeScreen goToTrack={goToTrack} goToRequest={goToRequest} />}
          {screen === "track" && <TrackParcels goHome={goHome} goToRequest={goToRequest} />}
          {screen === "request" && <RequestDelivery goHome={goHome} parcel={selectedParcel} />}
        </main>
      </div>
    </div>
  );
}