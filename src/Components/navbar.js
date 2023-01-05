import React, { Component } from 'react';


class Navbar extends Component {
    render() {
        return (


<nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Trial Routing</Link>
            <div className="navbar-nav">
                 <Link className="nav-item nav-link" to="/">Home</Link>
                 <Link className="nav-item nav-link" to="/premium">Premium</Link>
                 <Link className="nav-item nav-link" to="/devschool">DevSchool</Link>
               </div>
           </nav>
        )
    }
}

export default Navbar;