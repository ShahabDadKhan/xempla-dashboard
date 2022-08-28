// import { Button } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import TuneIcon from "@mui/icons-material/Tune";
// import Avatar from "@mui/material/Avatar";
// import { styled, alpha } from "@mui/material/styles";
// import InputBase from "@mui/material/InputBase";
// import SearchIcon from "@mui/icons-material/Search";
// import { styled } from '@mui/material/styles';
import "./Header.scss";
import Lowerheader from "./LowerHeader/LowerHeader";
import Badge from "@mui/material/Badge";
import CloseIcon from "@mui/icons-material/Close";
import DnsIcon from "@mui/icons-material/Dns";

// const StyledBadge = styled(Badge)(({ theme }) => ({
//   '& .MuiBadge-badge': {
//     right: -3,
//     top: 13,
//     border: `2px solid ${theme.palette.background.paper}`,
//     padding: '0 4px',
//   },
// }));

export default function Header() {
  return (
    <div className="Container">
      <div className="UpperHeader">
        <h2>Manage Alerts</h2>
        <p>Filter and snooze your alerts as per your requirement.</p>
      </div>
      <Lowerheader />
      <div className="AppliedFilterContainer">
        <div className="AppliedFilterLeft">
          {/* <div> */}
          Applied
          <Badge
            badgeContent={<CloseIcon sx={{ fontSize: 10 }} />}
            color="primary"
            className="Crossbadge"
          >
            {/* <MailIcon color="action" /> */}
          </Badge>
          {/* </div> */}
        </div>
        <div className="AppliedFilterRight">
          <span className="BoardView">Board View</span>
          <DnsIcon sx={{ color: "#0097DA" }} />
        </div>
      </div>
    </div>
  );
}

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));
