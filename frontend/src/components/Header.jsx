import React from "react";
import '../styles/Header.css';
function Header({ headerInfo }) {
    return (
        <>
            <header>
                    <div className="icon">
                        <img src={headerInfo.iconPath} alt="" className='icon-image'/>
                    </div>
                    <div className="header-text">
                        <a href="index.html">
                            <h1>{headerInfo.headerText}</h1>
                        </a>
                    </div>
            </header>
        </>
    );
}

export default Header