import {isMobile} from "react-device-detect";
import MobileNav from "./NavigationMobile";
import DesktopNav from "./NavigationDesktop";

export default function Navigation() {
  return (
    <>
      {
        isMobile && <MobileNav/>
      }
      {
        !isMobile && <DesktopNav/>
      }
    </>
  );
}
