import { NavLink } from "react-router";

import "./index.css";

const Nav = () => <nav>
    <ul>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
            <NavLink to="/certs">Certs</NavLink>
        </li>
    </ul>
</nav>;

export default Nav;