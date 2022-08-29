import PositionedMenu from "./CardDropDown";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import ShareIcon from "@mui/icons-material/Share";
import SharePositionedMenu from "../../../view/PositionedMenus/SharePositionedMenu";

export default function CardUpperSection() {
  return (
    <div className="CardUpperSection">
      <div className="SectionLeft">
        <span className="CardType">New</span>
        <span className="CardDemo">Demo-1</span>
        <span className="CardDate">2021-07-16 15:52:41</span>
      </div>
      <div className="SectionRight">
        <PositionedMenu text="Acknowledged"></PositionedMenu>
        <PositionedMenu text={<AccessAlarmsIcon />}></PositionedMenu>
        <SharePositionedMenu text={<ShareIcon />}></SharePositionedMenu>
      </div>
    </div>
  );
}
