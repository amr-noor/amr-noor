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
        <p>You can check out this portfolio on <a href="https://github.com/amr-noor/amr-noor" target="_blank" rel="noopener">GitHub repository</a>.</p>
        <p>Developed and Designed by Amr.</p>
        <p>All rights reserved &copy; {new Date().getFullYear()}.</p>
    </footer>
</>;

export default Footer;