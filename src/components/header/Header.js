import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from './logo.png';
import Menu from './menu.png';

const Header = () => {
    return (
        <div class="header" >
            <a href="#default" class="logo"><Link to="/"><img className="header__icon" src={Logo} /></Link></a>
            <div class="header-right">
                <a id="js-menu" className="menu" href="#"><img className="header__icon" src={Menu} /></a>
                <div id="js-open" class="navbar">
                    <div className="screen-manage">
                        <a href="#home">MOVIE</a>
                        <a href="#news">SERIES</a>
                        <div class="dropdown">
                            <button class="dropbtn">SHOW
                                <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="dropdown-content">
                                <Link to="/movies/popular" style={{ textDecoration: "none" }}><span>Popular</span></Link>
                                <Link to="/movies/top_rated" style={{ textDecoration: "none" }}><span>Top Rated</span></Link>
                                <Link to="/movies/upcoming" style={{ textDecoration: "none" }}><span>Upcoming</span></Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Header