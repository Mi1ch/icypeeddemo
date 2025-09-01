// src/components/PhoneWrapper.jsx
export default function PhoneWrapper({ children }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100 p-4">
      <div className="w-[390px] max-h-[800px] bg-white border-4 border-slate-300 rounded-[2.5rem] shadow-2xl overflow-y-auto relative">
        {/* Fake phone notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
        <main className="px-4 py-8">{children}</main>
      </div>
    </div>
  );
}