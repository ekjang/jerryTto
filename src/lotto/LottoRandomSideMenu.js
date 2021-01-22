import React, {Component} from "react";
import "./LottoRandomStyle.css";
import NumberPlateComponent from "./plate/NumberPlateComponent";
import OptionPlateComponent from "./plate/OptionPlateComponent";

class LottoRandomSideMenu extends Component {

    render() {
        return (
            <div className="lotto-random-sidemenu">
                <NumberPlateComponent
                    allCheck={this.props.allCheck}
                    selected={this.props.selected}
                    allHandleChange={this.props.allHandleChange}
                    numberHandleChange={this.props.numberHandleChange}
                    handleButtonOnClick={this.props.handleButtonOnClick}
                    optionVal={this.props.optionVal}
                    optionHandleChange={this.props.optionHandleChange}
                />
            </div>
        );
    }
}

export default LottoRandomSideMenu;