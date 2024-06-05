import { useMatch, Link } from "react-router-dom";

function NavLink({ to, children }) {
  let match = useMatch(to);
  return (
    <Link
      to={to}
      style={{
        color: "white",
        textDecoration: "none",
        borderBottom: match ? "2px solid red" : "none"
      }}
    >
      {children}
    </Link>
  );
}

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-6 bg-gray-900 text-white">
        <h1 className="font-bold text-2xl">Dune Bookstore</h1>
        <div className="flex space-x-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/books">Books</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
