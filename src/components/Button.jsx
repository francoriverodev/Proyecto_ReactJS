export function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600"
    >
      {children}
    </button>
  );
}