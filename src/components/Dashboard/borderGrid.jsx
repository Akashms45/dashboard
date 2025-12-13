export const BorderGrid = ({ children }) => {
  return (
    <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-4">
      {children}
    </div>
  );
};
