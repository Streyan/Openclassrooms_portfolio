import { NavLink } from "react-router";

function Footer() {
  return (
    <div className="flex-column footer">
      <h1>celineleplongeon</h1>
      <nav className="flex-row">
        <NavLink to="/">Linkedin</NavLink>
        <NavLink to="/about">Github</NavLink>
      </nav>
    </div>
  );
}

export default Footer;
