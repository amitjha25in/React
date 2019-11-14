import React from 'react';

const Navigation = () => {
    return (
        <>
            <img className="logo_" src={process.env.PUBLIC_URL + '/images/logo.png'} />
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <div className="navBar" id="navbarResponsive">
                        <ul className="navbar-nav">
                            <li className="navItem active">
                                <a className="nav-link" href="#">Jewellery</a>
                            </li>
                            <li className="navItem">
                                <a className="nav-link" href="#">Diamond</a>
                            </li>
                            <li className="navItem">
                                <a className="nav-link" href="#">Golod</a>
                            </li>
                            <li className="navItem">
                                <a className="nav-link" href="#">Gemstone</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navigation;