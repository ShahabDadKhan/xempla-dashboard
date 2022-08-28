import "../Header.scss";
import { Button } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
import TuneIcon from "@mui/icons-material/Tune";
import Avatar from "@mui/material/Avatar";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MenuPopupState from "../../PositionedMenus/FilterPositionedMenu";
// import Lowerheader from "./LowerHeader/LowerHeader";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const searchValue = function (event) {
  console.log(event.target.value);
};

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const filterBtn = (
  <Button
    variant="contained"
    startIcon={<TuneIcon />}
    sx={{ bgcolor: "#0097DA", fontSize: 10, padding: "10px" }}
  >
    Filter
    <Avatar
      sx={{
        color: "black",
        bgcolor: "white",
        width: 20,
        height: 20,
        fontSize: "12px",
        marginLeft: "10px",
      }}
    >
      03
    </Avatar>
  </Button>
);
export default function Lowerheader() {
  return (
    <div className="LowerHeader">
      <div className="Buttons-Cont">
        <MenuPopupState text={filterBtn}></MenuPopupState>
        {/* <Button
          variant="contained"
          startIcon={<TuneIcon />}
          sx={{ bgcolor: "#0097DA", fontSize: 10, padding: "10px" }}
        >
          Filter
          <Avatar
            sx={{
              color: "black",
              bgcolor: "white",
              width: 20,
              height: 20,
              fontSize: "12px",
              marginLeft: "10px",
            }}
          >
            03
          </Avatar>
        </Button> */}
        {/* <Button
          variant="outlined"
          sx={{
            color: "white",
            bgcolor: "#0097DA",
          }}
          className="FilterBtn"
          startIcon={<TuneIcon />}
          size="small"
        >
          
          <Avatar
            sx={{
              color: "black",
              bgcolor: "white",
              width: 20,
              height: 20,
              fontSize: "12px",
              marginLeft: "10px",
            }}
          >
            03
          </Avatar>
        </Button> */}
        <Search
          className="SearchBox"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              searchValue(e);
              //   console.log(e.target.value);
            }
          }}
          // onChange={searchValue}
        >
          <SearchIconWrapper>
            <SearchIcon sx={{ color: "#707070" }} />
            {/* <SearchIcon /> */}
          </SearchIconWrapper>
          <StyledInputBase
            // sx={{ color: "gray" }}
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </div>
    </div>
  );
}
