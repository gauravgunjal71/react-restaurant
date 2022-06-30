import React, { useState } from "react";
import "./styles.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);

    const filtercategory = (category) => {
        const updatedData = Menu.filter((curElem) => {
            return curElem.category === category;
        });

        setMenuData(updatedData);
    };

    const categories = [];

    Menu.map((curElem) => {
        if (!categories.includes(curElem.category)) categories.push(curElem.category);
    });

	const [uniqueCategories, setUniqueCategories] = useState(categories);

    return (
        <>
            <Navbar filtercategory={filtercategory} setMenuData={setMenuData} categories={uniqueCategories}/>

            <MenuCard menuData={menuData} />
        </>
    );
};

export default Restaurant;
