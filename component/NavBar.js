import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div> 
            <ul className="navbar">
                <li> <NavLink className="nav-bar-link" to="/counter" >Counter</NavLink> </li>
                <li><NavLink  className="nav-bar-link"  to="/Stopwatch" >Stopwatch</NavLink> </li>
                <li><NavLink className="nav-bar-link"  to="/Countdown" >Countdown</NavLink> </li>
            </ul>

        </div>
    )
};
export default NavBar;