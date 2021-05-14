/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light"
                style={{position: "fixed", width: "100%", background: "white"}}>
                <button className="navbar-toggler"
                        type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">
                        <img src="http://cdn.onlinewebfonts.com/svg/img_438616.png"
                            style={{
                                width: "2em",
                                marginTop: "-0.7em"
                            }}
                            alt="logo-catmash"/>
                        CatMash
                    </a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to="/catmash" >
                                <span className="nav-link">Home</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/scores" >
                                <span className="nav-link">Scores</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Header;