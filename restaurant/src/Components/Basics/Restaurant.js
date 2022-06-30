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

    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    {categories.map((curElem) => {
                        return (
                            <button key={curElem} className="btn-group__item" onClick={() => filtercategory(curElem)}>
                                {curElem}
                            </button>
                        );
                    })}
                    <button className="btn-group__item" onClick={() => setMenuData(Menu)}>
                        All
                    </button>
                </div>
            </nav>

            <MenuCard menuData={menuData} />
        </>
    );
};

export default Restaurant;
