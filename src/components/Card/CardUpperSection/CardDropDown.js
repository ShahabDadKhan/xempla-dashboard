import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./CardUpperSection.scss";
import ChatImg from "../../../assets/images/Image 18.png";
import TeamImg from "../../../assets/images/teams.png";
import SlackImg from "../../../assets/images/slack.png";
import Divider from "@mui/material/Divider";

export default function PositionedMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
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
      >
        <MenuItem onClick={handleClose}>
          <p className="ShareIn">Share in</p>
        </MenuItem>
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
