import { useState, useEffect } from "react";

import "./index.css";

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

    return <>{
        alert && <div className={(alert.state ? "success" : "") + " alert"}>
            <i className={alert.state ? "fas fa-check-circle" : "fas fa-times-circle"}></i>
            <p>{(alert.state ? "Success: " : "Error: ") + alert.msg}</p>
        </div>
    }</>;
}

export default Alert;