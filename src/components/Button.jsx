export const Button = ({ children }) => {
  return (
    <button className="w-64 text-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-lg font-medium px-5 py-2.5 mr-2 mb-2">
      {children}
    </button>
  );
};
