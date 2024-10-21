const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="border-b text-center bg-yellow-400 p-3 font-semibold">
        20% off for the next 3 days
      </div>
      {children}
    </div>
  );
};

export default layout;
