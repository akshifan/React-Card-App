import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const Navbar = () => {

    const { user, logout } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <nav className="bg-gray-600 px-4 py-3 shadow-md sticky top-0 z-50">

            <div className="flex justify-between items-center relative">

            {!user ? (
                <h1 className="text-white text-xl font-bold flex flex-col leading-loose">
                    <span>Hello</span>
                    <span className='text-sm font-normal'>by A.K.Shifan😊</span>
                </h1>
            ) : (<h1 className="text-white text-xl font-bold flex flex-col leading-loose">
                    Welcome <span className='text-sm font-normal'>{user.email}</span>
                </h1>
                )}

                {!user ? (

                    <div className="flex gap-4 text-white font-bold">

                        <Link to="/">HOME</Link>
                        <Link to="/login">LOGIN</Link>
                        <Link to="/signup">SIGNUP</Link>

                    </div>

                ) : (

                    <>
                        <div className="hidden md:flex gap-5 text-white font-bold">

                            <Link to="/app/home">HOME</Link>
                            <Link to="/app/search">SEARCH</Link>
                            <Link to="/app/matches">MATCHES</Link>

                            <button onClick={logout}>
                                LOGOUT
                            </button>

                        </div>

                        <div className="relative md:hidden">

                            <button
                                className="text-white text-3xl"
                                onClick={() => setMenuOpen(!menuOpen)}
                            >
                                ☰
                            </button>

                            {menuOpen && (

                                <div className="absolute right-0 mt-2 bg-gray-500 text-white font-bold border border-[hsl(0,0%,49%)]  shadow-[0_5px_10px_hsla(0,0%,50%,0.727)] flex flex-col gap-3 p-4 rounded ">

                                    <Link
                                        to="/app/home"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        HOME
                                    </Link>

                                    <Link
                                        to="/app/search"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        SEARCH
                                    </Link>

                                    <Link
                                        to="/app/matches"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        MATCHES
                                    </Link>

                                    <button
                                        onClick={() => {
                                            logout();
                                            setMenuOpen(false);
                                        }}
                                        className="text-left"
                                    >
                                        LOGOUT
                                    </button>

                                </div>
                            )}

                        </div>
                    </>
                )}

            </div>

        </nav>
    );
};