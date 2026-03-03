import { useState, useEffect } from "react";

import "./index.css";

const STATES = {
    0: {
        class: "",
        icon: "fas fa-times-circle",
        prefix: "Error: "
    },
    1: {
        class: "success",
        icon: "fas fa-check-circle",
        prefix: "Success: "
    }
}

const Alert = props => {
    const [alert, setAlert] = useState(null);

    useEffect(() => {
        if (props.data) {
            setAlert(props.data);

            setTimeout(() => {
                setAlert(null);
            }, 5000);
        }
    }, [props.data]);

    return alert && <div className={STATES[alert.state].class + " alert"}>
        <i className={STATES[alert.state].icon}></i>
        <p>{STATES[alert.state].prefix + alert.msg}</p>
    </div>;
}

export default Alert;