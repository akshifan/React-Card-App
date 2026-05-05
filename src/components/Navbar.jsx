import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

export const Navbar = () => {

    const { user, logout } = useContext(AuthContext);


    return (
        <nav className="flex bg-gray-600 justify-between items-center px-4 py-3 shadow-md sticky top-0 z-50">
            <h1 className='font-bold text-xl'>Welcome</h1><br />
            
            <div className='flex gap-4 text-white font-bold'>
                {!user ? (
                    <>
                    <Link to="/">HOME</Link>
                    <Link to="/login">login</Link>
                    <Link to="/signup">signup</Link>
                    </>
                ) : (
                    <>
                <Link to="/app/home">HOME</Link>
                <Link to="/app/search">SEARCH</Link>
                <Link to="/app/matches">MATCHES</Link>
                <button onClick={logout}>Logout</button>
                </>
                )}
                
            </div>
        </nav>
    )
}
