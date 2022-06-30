import React from "react";
import Menu from "./menuApi";
import "./styles.css";

const Navbar = ({filtercategory, setMenuData, categories}) => {
    return (
        <div>
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
        </div>
    );
};

export default Navbar;
