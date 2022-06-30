import React, { useState } from "react";
import "./styles.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);

	const filtercategory = (category) => {
		const updatedData = Menu.filter(curElem => {
			if (category === "all") return curElem
			return curElem.category === category
		})
		setMenuData(updatedData);
	}

    return (
        <>
			<nav className="navbar">
                <div className="btn-group">
                    <button className="btn-group__item" onClick={() => filtercategory("breakfast")}>Breakfast</button>
                    <button className="btn-group__item" onClick={() => filtercategory("lunch")}>Lunch</button>
                    <button className="btn-group__item" onClick={() => filtercategory("evening")}>Evening</button>
                    <button className="btn-group__item" onClick={() => filtercategory("dinner")}>Dinner</button>
                    <button className="btn-group__item" onClick={() => filtercategory("all")}>All</button>
                </div>
            </nav>

            <MenuCard menuData={menuData} />
        </>
    );
};

export default Restaurant;
