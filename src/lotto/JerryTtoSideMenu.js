import React, {Component} from "react";
import "./JerryTtoStyle.css";
import NumberPlateComponent from "./plate/NumberPlateComponent";
import CrawlerTemplate from "./crawler/CrawlerTemplate"

class JerryTtoSideMenu extends Component {

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
                {/*<CrawlerTemplate></CrawlerTemplate>*/}
            </div>
        );
    }
}

export default JerryTtoSideMenu;