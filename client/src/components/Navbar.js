import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <div className="nav-bar">
            <Link to= "/">Home</Link>
            <Link to= "/teachers">Teachers</Link>
            <Link to= "/students">Students</Link>
        </div>
    )
}

export default Navbar
