import Logo from "../Logo";
import Nav from "../Nav";

import "./index.css";

const Footer = () => <>
    <hr />
    <footer>
        <div>
            <Logo />
            <Nav />
        </div>
        <p>Developed and Designed by Amr.</p>
        <p>All rights reserved &copy; {new Date().getFullYear()}.</p>
    </footer>
</>;

export default Footer;