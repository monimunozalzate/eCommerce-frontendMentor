import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";;
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import styles from "./NavBar.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Avatar from "@mui/material/Avatar";
import Drawer from "../drawer/Drawer";

const collections = ["Collections", "Men", "Women", "About", "Contact"];

const NavBar = () => {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" id={styles.header}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <div className={styles.hamburguer}>
       <Drawer collections={collections}/>
          <h1 className={styles.name}>sneakers</h1>
        </div>
        
        <div className={styles.leftNav}>
          <h1 className={styles.name}>sneakers</h1>
          <ul className={styles.collections}>
            {collections.map((item) => {
              return <li className={styles.item} key={item}>{item}</li>;
            })}
          </ul>
        </div>
        <div className={styles.icons}>
          <IconButton size="large">
            <ShoppingCartOutlinedIcon style={{padding:'0'}}/>
          </IconButton>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Avatar alt="Remy Sharp" src="assets/images/image-avatar.png" />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
