import Socials from "./socials";

function Header() {
  return (
    <div className="flex-space-between header background_white">
      <h1 className="black name">celineleplongeon</h1>
      <Socials />
    </div>
  );
}

export default Header;
