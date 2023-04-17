import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import styles from "./NavBar.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Avatar from "@mui/material/Avatar";
import Drawer from "../drawer/Drawer";
import Cart from "../cart/Cart";

const collections = ["Collections", "Men", "Women", "About", "Contact"];

const NavBar = ({addingToCart, setaddingToCart}) => {
  const [isOpenCart, setIsOpenCart] = useState(false);

  const handleToggleCart = () => {
    setIsOpenCart(!isOpenCart);
  };

  return (
    <AppBar position="static" id={styles.header}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <div className={styles.hamburguer}>
          <Drawer collections={collections} />
          <h1 className={styles.name}>sneakers</h1>
        </div>
        <div className={styles.leftNav}>
          <h1 className={styles.name}>sneakers</h1>
          <ul className={styles.collections}>
            {collections.map((item) => {
              return (
                <li className={styles.item} key={item}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.icons}>
          <IconButton size="large" 
          style={{ padding: "0" }} 
          color="inherit"
          onClick={handleToggleCart}
          >
            <ShoppingCartOutlinedIcon style={{fontSize:'1.8rem'}}/>
          </IconButton>
          <IconButton size="large" style={{ padding: "0", width:'3rem', height:'3rem' }}>
            <Avatar alt="Remy Sharp" src="src\assets\images\image-avatar.png" style={{fontSize:'2rem', width:'3rem', height:'3rem'}}/>
          </IconButton>
        </div>
        {isOpenCart ? <Cart addingToCart={addingToCart} setaddingToCart={setaddingToCart} handleToggleCart={handleToggleCart}/>:null}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
