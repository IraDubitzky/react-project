import { FunctionComponent } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ThemeToggleButton from "../components/ThemeToggleButton";

interface NavbarProps {
    user: any;
    setUser: (user: any) => void;
}

const Navbar: FunctionComponent<NavbarProps> = ({ user, setUser }) => {
    const navigate = useNavigate();
    const isLoggedIn = !!user;

    const logOut = () => {
        localStorage.removeItem("token");
        setUser(null);
        navigate("/");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info px-5 w-100">
            <div className="container-fluid">
                <div className="d-flex align-items-center">
                    <NavLink className="navbar-brand text-white" to="/">
                        <strong>BCard</strong>
                    </NavLink>

                    {isLoggedIn && (
                        <>
                            <NavLink className="nav-link text-white ms-3 px-3" to="/liked">
                                <i className="fa-regular fa-thumbs-up"></i> Cards
                            </NavLink>

                            {user?.isBusiness && (
                                <>
                                    <NavLink className="nav-link text-white ms-3 px-2" to="/my-cards">
                                        <i className="fa-regular fa-file-lines"></i> My Cards
                                    </NavLink>
                                    <NavLink className="nav-link text-white ms-3 px-2" to="/profile">
                                        <i className="fa-solid fa-id-badge"></i> Profile
                                    </NavLink>
                                </>
                            )}
                        </>
                    )}
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item active mx-3">
                            <NavLink className="nav-link text-white" to="/about">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item active mx-3">
                            <ThemeToggleButton />
                        </li>
                        {!isLoggedIn ? (
                            <>
                                <li className="nav-item active mx-3">
                                    <NavLink className="nav-link text-white" to="/login">
                                        Login
                                    </NavLink>
                                </li>
                                <li className="nav-item active mx-3">
                                    <NavLink className="nav-link text-white" to="/register">
                                        Register
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item active mx-3">
                                    <span className="nav-link text-white">Hello, {user.email}</span>
                                </li>
                                <li className="nav-item active mx-3">
                                    <button className="btn btn-danger btn-sm" onClick={logOut}>
                                        Logout
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
