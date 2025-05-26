import { NavLink } from "react-router";

function Header() {
  return (
    <div className="flex-space-between header">
      <h1>celineleplongeon</h1>
      <nav className="flex-row">
        <NavLink to="/">Linkedin</NavLink>
        <NavLink to="/about">Github</NavLink>
      </nav>
    </div>
  );
}

export default Header;
