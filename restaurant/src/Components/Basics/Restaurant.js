import React, { useState } from "react";
import "./styles.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);

    return (
        <>
			<Navbar/>

            <MenuCard menuData={menuData} />
        </>
    );
};

export default Restaurant;
