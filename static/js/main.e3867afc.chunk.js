(this.webpackJsonpjerry=this.webpackJsonpjerry||[]).push([[0],{110:function(e,t,n){},208:function(e,t,n){},209:function(e,t,n){},210:function(e,t,n){},246:function(e,t){},248:function(e,t){},258:function(e,t){},260:function(e,t){},285:function(e,t){},287:function(e,t){},288:function(e,t){},293:function(e,t){},295:function(e,t){},314:function(e,t){},326:function(e,t){},329:function(e,t){},334:function(e,t){},336:function(e,t){},359:function(e,t){},450:function(e,t,n){},451:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(4),o=n.n(c),l=n(200),r=n.n(l),s=(n(208),n(209),n(10)),i=n(11),u=n(13),h=n(12),d=(n(59),n.p+"static/media/main_jerry.d4f4113a.svg"),p=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"lotto-random-header",children:[Object(a.jsx)("b",{children:"Hello JERRYtto"}),Object(a.jsx)("img",{className:"image-style",src:d})]})}}]),n}(c.Component),b=(n(110),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).handleChange=function(t){var n=t.target.checked;e.props.numberHandleChange(n,e.props.number)},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"number-plate-box-contents",children:Object(a.jsxs)("div",{className:"number-plate-box",children:[Object(a.jsx)("input",{type:"checkbox",checked:this.props.selected,onChange:this.handleChange}),Object(a.jsx)("span",{children:this.props.number})]})})}}]),n}(c.Component)),j=(n(210),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).optionHandleChange=function(t){e.props.optionHandleChange(t.target.value)},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"radio-box-style",children:[Object(a.jsx)("b",{children:"\uc22b\uc790"}),Object(a.jsxs)("span",{children:[Object(a.jsx)("input",{type:"radio",id:"option1",name:"Include",value:"Include",checked:"Include"===this.props.optionVal,onChange:this.optionHandleChange}),"\ub123\uc5b4",Object(a.jsx)("input",{type:"radio",id:"option2",name:"Exclude",value:"Exclude",checked:"Exclude"===this.props.optionVal,onChange:this.optionHandleChange}),"\ube7c"]})]})}}]),n}(c.Component)),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).allHandleChange=function(t){var n=t.target.checked;e.props.allHandleChange(n)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"number-plate-all-box",children:Object(a.jsx)(j,{optionVal:this.props.optionVal,optionHandleChange:this.props.optionHandleChange})}),Object(a.jsxs)("div",{className:"number-plate-all-box",children:[Object(a.jsx)("input",{type:"checkbox",checked:this.props.allCheck,onChange:this.allHandleChange}),Object(a.jsx)("span",{children:"ALL"}),Object(a.jsx)("button",{className:"number-button",onClick:this.props.handleButtonOnClick,children:"\ub9cc\ub4e4\uc5b4"})]}),Object(a.jsx)("div",{className:"number-plate-contents",children:this.props.selected.map((function(t,n){return Object(a.jsx)(b,{number:n+1,selected:t,numberHandleChange:e.props.numberHandleChange},n)}))})]})}}]),n}(c.Component),f=(n(107),n(108),n(201),n(109),n(229),n(202)),O=n.n(f),C=(c.Component,function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"lotto-random-sidemenu",children:Object(a.jsx)(m,{allCheck:this.props.allCheck,selected:this.props.selected,allHandleChange:this.props.allHandleChange,numberHandleChange:this.props.numberHandleChange,handleButtonOnClick:this.props.handleButtonOnClick,optionVal:this.props.optionVal,optionHandleChange:this.props.optionHandleChange})})}}]),n}(c.Component)),v=(n(450),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={numbers:[1,2,3,4,5,6],b_number:7},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.lottoNumber.slice(0,6),t=this.props.lottoNumber[6];return Object(a.jsx)("div",{className:"lotto-contents",children:Object(a.jsxs)("div",{className:"lotto-box",children:[e.map((function(e){return Object(a.jsx)("div",{className:"lotto-box-number",children:e},e)})),Object(a.jsx)("div",{className:"lotto-box-plus",children:"+"}),Object(a.jsx)("div",{className:"lotto-box-number",children:t})]})})}}]),n}(c.Component)),g=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.lottoNumbers;return Object(a.jsxs)("div",{className:"lotto-random-contents",children:[Object(a.jsx)("div",{className:"blank-style",children:Object(a.jsx)("button",{className:"clear-button",onClick:this.props.clearButtonOnClick,children:"\uc9c0\uc6cc"})}),Object(a.jsx)("div",{children:e.map((function(e,t){return Object(a.jsx)(v,{lottoNumber:e},t)}))})]})}}]),n}(c.Component),x=(c.Component,function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={allCheck:{},optionVal:{},selected:[],lottoNumbers:[]},e.allHandleChange=function(t){for(var n=e.state.selected,a=1;a<46;a++)e.numberHandleChange(t,a);e.setState({allCheck:t,selected:n})},e.optionHandleChange=function(t){e.optionVal=t,e.setState({optionVal:t})},e.clearButtonOnClick=function(){var t=e.state.lottoNumbers;if(t.length>0)for(;t.length>0;)t.pop();e.setState({lottoNumbers:t})},e.numberHandleChange=function(t,n){var a=e.state,c=a.allCheck,o=a.selected,l=c;o[n-1]=t;var r=0;o.forEach((function(e,t){e&&r++})),r>=45?l=!0:!1===t&&(l=!1),e.setState({allCheck:l,selected:o})},e.handleButtonOnClick=function(){var t=e.state,n=t.selected,a=(t.lottoNumbers,t.optionVal),c=[];if(console.log(a),n.forEach((function(e,t){"Include"===a?e&&(c.push(t+1)):"Exclude"===a&&(e||(c.push(t+1)))})),"Include"===a){if(c.length<7)return void alert("7\uac1c \uc774\uc0c1(\ubcf4\ub108\uc2a4 \ubc88\ud638 \ud3ec\ud568)\uc758 \ubc88\ud638\ub97c \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4.");alert("\ubc88\ud638\ub97c 5\uac1c \uc0dd\uc131\ud569\ub2c8\ub2e4."),e.selectBundle(0,c)}else"Exclude"===a&&(c.length<7?alert("39\uac1c \uc774\uc0c1(\ubcf4\ub108\uc2a4 \ubc88\ud638 \ud3ec\ud568)\uc758 \ubc88\ud638\ub97c \uc81c\uc678\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."):(alert("\ubc88\ud638\ub97c 5\uac1c \uc0dd\uc131\ud569\ub2c8\ub2e4."),e.selectBundle(0,c)))},e.selectBundle=function(t,n){console.log(n);for(var a=e.state.lottoNumbers,c=0;c<5*(t+1);c++){var o=e.selectLotto([],n);a.push(o),e.setState({lottoNumbers:a})}},e.selectLotto=function(t,n){if(7===t.length){var a=t.slice(0,6);return a.sort((function(e,t){return e-t})),a.push(t[6]),a}var c=n[Math.floor(Math.random()*n.length)];return t.indexOf(c)<0&&t.push(c),e.selectLotto(t,n)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){for(var e=this.state,t=e.selected,n=(e.allCheck,e.optionVal,1);n<46;n++)t.push(!1);this.allCheck=!0,this.optionVal="Include",this.allHandleChange(!0),this.setState({allCheck:this.allCheck,optionVal:this.optionVal,selected:t})}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"lotto-random-template",children:[Object(a.jsx)(p,{}),Object(a.jsxs)("div",{className:"lotto-random-main",children:[Object(a.jsx)(C,{allCheck:this.state.allCheck,selected:this.state.selected,allHandleChange:this.allHandleChange,numberHandleChange:this.numberHandleChange,handleButtonOnClick:this.handleButtonOnClick,optionVal:this.optionVal,optionHandleChange:this.optionHandleChange}),Object(a.jsx)(g,{lottoNumbers:this.state.lottoNumbers,clearButtonOnClick:this.clearButtonOnClick})]})]})}}]),n}(c.Component)),k=n.p+"static/media/bg_jerry.91fe4125.svg";var y=function(){return Object(a.jsx)("div",{className:"bg-style",style:{backgroundImage:"url(".concat(k,")")},children:Object(a.jsx)("div",{className:"lotto-random-template",children:Object(a.jsx)(x,{})})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,452)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),o(e),l(e)}))};r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),N()},59:function(e,t,n){}},[[451,1,2]]]);
//# sourceMappingURL=main.e3867afc.chunk.js.map