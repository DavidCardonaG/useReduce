import React from 'react'
import{Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">UseReducer</a>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page"to='/'>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='/login'>Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#">Counter</Link>
                        </li>
                    </ul>
                    <div class="d-flex">
                        <button class="btn btn-outline-success" type="submit">Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
