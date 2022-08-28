import { Button } from "@mui/material";
import "./CardLowerSection.scss";

export default function CardLowerSection() {
  return (
    <div className="CardLowerContainer">
      <Button variant="outlined" sx={{ fontSize: 10, padding: "5px" }}>
        View All
      </Button>
      <div className="ViewAllRightSection">
        <Button variant="contained" sx={{ fontSize: 10, padding: "5px" }}>
          Timeline
        </Button>
        <Button disabled>Work Order Generated</Button>
      </div>
    </div>
  );
}
