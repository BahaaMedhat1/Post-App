function Header({ children }) {
  return (
    <div className="header flex justify-between items-center  bg-white p-4 text-xl font-semibold capitalize">
      {children}
    </div>
  );
}

export default Header;
