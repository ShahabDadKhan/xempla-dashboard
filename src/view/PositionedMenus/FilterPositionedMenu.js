import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "../../components/Card/CardLowerSection/CardLowerSection.scss";
import ChatImg from "../../assets/images/Image 18.png";
import TeamImg from "../../assets/images/teams.png";
import SlackImg from "../../assets/images/slack.png";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import "./FilterPositionedMenu.scss";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export default function PositionedMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

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

  const searchValue = function (event) {
    console.log(event.target.value);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ minWidth: "auto" }}
      >
        {props.text}
      </Button>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        // onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            width: "100%",
            left: "50px !important",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            // "&:before": {
            //   content: '""',
            //   display: "block",
            //   position: "absolute",
            //   top: 0,
            //   right: 14,
            //   width: 10,
            //   height: 10,
            //   bgcolor: "background.paper",
            //   transform: "translateY(-50%) rotate(45deg)",
            //   zIndex: 0,
            // },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        className="FilterContainer"
      >
        <MenuItem
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "600",
            opacity: "1",
          }}
          onClick={handleClose}
        >
          <p className="ShareIn">Filter by</p>
          <p className="ResetFilter">Reset Filters</p>
        </MenuItem>
        <Divider />
        <Search
          className="SearchBox"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              searchValue(e);
            }
          }}
        >
          <SearchIconWrapper>
            <SearchIcon sx={{ color: "#707070" }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <MenuItem onClick={handleClose}>In-App Chat</MenuItem>
        <MenuItem onClick={handleClose}>Annotation</MenuItem>
        <Divider />
        <MenuItem sx={{ gap: "5px" }} onClick={handleClose}>
          <img src={ChatImg} alt="Img"></img>G - Chat
        </MenuItem>
        <MenuItem sx={{ gap: "5px" }} onClick={handleClose}>
          <img src={TeamImg} alt="Img"></img>
          Teams
        </MenuItem>
        <MenuItem sx={{ gap: "5px" }} onClick={handleClose}>
          <img src={SlackImg} alt="Img"></img>
          Slack
        </MenuItem>
      </Menu>
      {/* <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      > */}
      {/* </Menu> */}
    </div>
  );
}
