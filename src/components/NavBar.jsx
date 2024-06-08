import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                                    <div className="container-fluid">
                                        <a className="navbar-brand" to="#">PHOTO</a>
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarNav">
                                            <ul className="navbar-nav">
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/">Home</Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/DeleteAlbum">Delete</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/SearchAlbum">Search</Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/ViewAlbum">View</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NavBar