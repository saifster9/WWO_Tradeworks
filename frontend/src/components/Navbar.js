import { Link, useNavigate, useLocation } from 'react-router-dom';
import textLogo from '../assets/logo-text.png';
import '../styles/new_styles.css';
import React from 'react';

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation(); // Use useLocation to get the current path

    // Function to handle logout
    const handleLogout = () => {
        localStorage.removeItem('rememberUser');
        localStorage.removeItem('firstName');
        navigate('/');
    };

    return (
        <nav>
            <Link to="/" style={{ marginRight: 'auto' }}> {/* Push other links right */}
               <img src={textLogo} alt="WWO Tradeworks" style={{ height: '30px', verticalAlign: 'middle' }} /> {/* Adjust height/styling */}
            </Link>
            
            {/* Conditionally render links based on the route */}  
            {location.pathname === '/user-dashboard' || location.pathname === '/portfolio' || location.pathname === '/transaction-history' ? (
                <>
                    <Link to="/user-dashboard">Dashboard</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/transaction-history">History</Link>
                    <Link to="/login" onClick={handleLogout} className="logout-button">
                        Logout
                    </Link>
                </>
            ) : location.pathname === '/admin-dashboard' || location.pathname === '/manage-stocks' || location.pathname === '/manage-market' ? (
                <>
                    <Link to="/admin-dashboard">Dashboard</Link>
                    <Link to="/manage-stocks">Manage Stocks</Link>
                    <Link to="/manage-market">Manage Market</Link>
                    <Link to="/" onClick={handleLogout} className="logout-button">
                        Logout
                    </Link>
                </>
            ) : (
                <>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            )}
        </nav>
    );
}

export default Navbar;