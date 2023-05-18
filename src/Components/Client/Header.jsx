import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="contain">
            <h1>Logo</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}> Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}> About</Link>
                    </li>
                    <li>
                        <Link to={"/products"}> Products</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header