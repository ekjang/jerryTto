import React, {Component} from "react";
import {MenuItem, Select} from "@material-ui/core";

class SelectBoxTemplate extends Component {

    selectHandleChange = (e) => {
        this.props.selectHandelChange(e)
    };

    render() {
        return (
            <div className="lotto-select-style">
                {/*<InputLabel className={this.state.useStyles.formControl} id="recommend-select-box-name">추천 종류 선택</InputLabel>*/}
                <Select
                    // labelId="recommend-select-box-name"
                    value={this.props.recommend}
                    onChange={this.selectHandleChange}
                >
                    <MenuItem value={0}>랜덤 번호</MenuItem>
                    <MenuItem value={1}>많이 당첨된 번호</MenuItem>
                    <MenuItem value={2}>많이 당첨되지 않은 번호</MenuItem>
                    <MenuItem value={3}>추천 번호</MenuItem>
                </Select>
                {/*<select value={this.props.recommend} onChange={this.selectHandleChange}>*/}
                {/*    <option value={0}>랜덤 번호</option>*/}
                {/*    <option value={1}>많이 당첨된 번호</option>*/}
                {/*    <option value={2}>많이 당첨되지 않은 번호</option>*/}
                {/*    <option value={3}>추천 번호</option>*/}
                {/*</select>*/}
            </div>
        );
    }
}

export default SelectBoxTemplate;