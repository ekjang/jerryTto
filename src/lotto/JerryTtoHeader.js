import React, {Component} from "react";
import "./JerryTtoStyle.css";
import main from "../png/main_jerry.svg"

class JerryTtoHeader extends Component {
    render() {
        return (
            <div className="lotto-random-header">
                <b>Hello JERRYtto</b>
                <img className="image-style" src={main} />
            </div>
        );
    }
}

export default JerryTtoHeader;