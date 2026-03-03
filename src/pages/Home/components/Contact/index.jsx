import { useState, useRef } from "react";

import Alert from "../../../../components/Alert";

import mail from "../../../../scripts";

import "./index.css";

const Contact = () => {
    const [alert, setAlert] = useState(null);

    const form = useRef(null);

    const handler = e => {
        e.preventDefault();

        const data = new FormData(form.current);
        const obj = Object.fromEntries(data.entries());

        if (obj.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(obj.email) && obj.message) {
            mail.send(obj);
            form.current.reset();
            setAlert({
                msg: "Your message has been sent successfully, We will send you an auto-reply Mail to your inputed email address.",
                state: true
            });
        } else {
            setAlert({
                msg: "All fields are required, Please put a vaild email address!",
                state: false
            });
        }
    }

    return <>
        <section className="contact">
            <div className="content">
                <h1>Contact</h1>
                <p>Feel free to get in touch with me at any time.</p>
            </div>
            <div className="container">
                <form ref={form} onSubmit={handler} action="#">
                    <input placeholder="Email" name="email" type="email" required autoComplete="email" />
                    <textarea placeholder="Message" name="message" rows="6" required></textarea>
                    <input type="submit" className="btn" />
                </form>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/_amrnour/" target="_blank" rel="noopener" aria-label="instagram">
                            <i className="fa-brands fa-square-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/amr-noor/" target="_blank" rel="noopener" aria-label="linkedin">
                            <i className="fa-brands fa-square-linkedin"></i>
                        </a>
                    </li>

                    <li>
                        <a href="https://github.com/amr-noor/" target="_blank" rel="noopener" aria-label="github">
                            <i className="fa-brands fa-square-github"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </section>

        <Alert data={alert} />
    </>;
}

export default Contact;