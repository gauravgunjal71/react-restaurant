import React from "react";
import "./styles.css";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="btn-group">
                    <button className="btn-group__item">Breakfast</button>
                    <button className="btn-group__item">Lunch</button>
                    <button className="btn-group__item">Evening</button>
                    <button className="btn-group__item">Dinner</button>
                    <button className="btn-group__item">All</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
