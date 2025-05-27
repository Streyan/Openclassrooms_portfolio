import Separator from "./separator";
import Socials from "./socials";

function Footer() {
  return (
    <div className="flex-column footer background_light-grey ">
      <Separator />
      <div className="flex-space-between footer background_light-grey black">
        <h1 className="black headingM">celineleplongeon</h1>
        <Socials />
      </div>
    </div>
  );
}

export default Footer;
