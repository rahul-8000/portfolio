// components/Loader.tsx
export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-400 text-white transition-opacity duration-700 ease-in-out">
      <div className="animate-spin h-12 w-12 rounded-full border-t-4 border-primary-500 border-solid"></div>
    </div>
  );
}
