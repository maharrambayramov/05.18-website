import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="contain">
            <h1>Logo</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}> Dashboard</Link>
                    </li>
                    <li>
                        <Link to={"/add-products"}> AddProducts</Link>
                    </li>
                    <li>
                        <Link to={"/products-table"}> Productstable</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header