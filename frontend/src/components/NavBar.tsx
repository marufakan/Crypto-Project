import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
function navbar() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate()
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="/"><h6 className="display-6 fw-bolder">Crypto App</h6></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
                            className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="detail">About</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default navbar