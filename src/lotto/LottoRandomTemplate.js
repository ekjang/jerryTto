import React, { Component } from 'react';
import LottoRandomHeader from "./LottoRandomHeader";
import LottoRandomSideMenu from "./LottoRandomSideMenu";
import LottoRandomContents from "./LottoRandomContents";
import "./LottoRandomStyle.css";

class LottoRandomTemplate extends Component {

    state = {
        allCheck : {},
        optionVal : {},
        selected : [],
        lottoNumbers : []
    }

    componentDidMount() {
        const {selected, allCheck, optionVal} = this.state;
        for(let i=1; i<46; i++) {
            selected.push(false);
        }
        this.allCheck = true //기본 ALL 체크
        this.optionVal = "Include" //기본 숫자 Include
        this.allHandleChange(true);
        this.setState({allCheck: this.allCheck, optionVal: this.optionVal, selected});
    }

    //전체 체크
    allHandleChange = (checked) => {
        const {selected} = this.state;
        for(let i=1; i<46; i++) {
            this.numberHandleChange(checked, i)
        }
        this.setState({allCheck: checked, selected: selected})
    }

    //숫자 포함/제외 옵션 선택 클릭
    optionHandleChange = (value) => {
        this.optionVal = value
        this.setState({optionVal: value})
    }

    //Clear 버튼 클릭
    clearButtonOnClick = () => {
        const {lottoNumbers} = this.state
        if(lottoNumbers.length > 0) {
            while (lottoNumbers.length > 0) {
                lottoNumbers.pop()
            }
        }
        this.setState({lottoNumbers})
    }

    //숫자 선택 이벤트 발생
    numberHandleChange = (checked, number) => {
        const {selected} = this.state;
        selected[number-1] = checked;
        this.setState({selected})
    ;}

    //Generate 버튼 클릭
    handleButtonOnClick = () => {
        const {selected, lottoNumbers, optionVal} = this.state
        const numbers = [];
        let selectedNumberCount = 0;

        selected.forEach((s, i) => {
            if(s) {
                selectedNumberCount++;
                numbers.push(i+1)
            }
        })

        console.log(optionVal)
        ///////////////////////////////////////////
        //선택 숫자 포함일 때
        if(optionVal === "Include") {
            if (selectedNumberCount < 7) {
                alert("7개 이상(보너스 번호 포함)의 번호를 선택해야 합니다.")
                return;
            } else {
                alert("번호를 5개 생성합니다.")
                this.selectBundle(0, 0, numbers)
            }

        ///////////////////////////////////////////
        //선택 숫자 제외일 때
        } else if(optionVal === "Exclude") {
            if (selectedNumberCount > 38) {
                alert("7개 이상(보너스 번호 포함)의 번호를 제외할 수 없습니다.")
            } else {
                alert("번호를 5개 생성합니다.")
                this.selectBundle(1, 0, numbers)
            }
        }
    }

    //몇개 보여줄지.?
    selectBundle = (flag, bundle, numbers) => {
        const {lottoNumbers} = this.state
        if(flag === 0) {
            for (let i = 0; i < (bundle + 1) * 5; i++) {
                const lotto = this.selectLotto([], numbers);
                lottoNumbers.push(lotto);
                this.setState({lottoNumbers});
            }
        } else if(flag === 1) {
            alert("아직 구현 안했지롱 ~")
            console.log("아직 구현 안했지롱 ~")
            // const lotto = this.unSelectLotto([], numbers);
            // lottoNumbers.push(lotto);
            // this.setState({lottoNumbers});
        }
    }

    //선택한 번호를 기준으로 생성하는 랜덤 알고리즘
    selectLotto = (lottoNumber, numbers) => {
        if(lottoNumber.length === 7) {
            const temp = lottoNumber.slice(0, 6);
            temp.sort((a,b)=>a-b);
            temp.push(lottoNumber[6]);
            return temp;
        }
        let n = numbers[Math.floor(Math.random() * numbers.length)];
        if(lottoNumber.indexOf(n) < 0) {
            lottoNumber.push(n);
        }
        return this.selectLotto(lottoNumber, numbers);
    }


    render() {
        return (
            <div className="lotto-random-template">
                <LottoRandomHeader />
                <div className="lott-random-main">
                    <LottoRandomSideMenu
                        allCheck={this.state.allCheck}
                        selected={this.state.selected}
                        allHandleChange={this.allHandleChange}
                        numberHandleChange={this.numberHandleChange}
                        handleButtonOnClick={this.handleButtonOnClick}
                        optionVal={this.optionVal}
                        optionHandleChange={this.optionHandleChange}
                    />
                    <LottoRandomContents
                        lottoNumbers={this.state.lottoNumbers}
                        clearButtonOnClick={this.clearButtonOnClick}
                    />
                </div>
                {/*<CrawlerTemplate />*/}
            </div>
        );
    }

}

export default LottoRandomTemplate;