(this.webpackJsonpjerry=this.webpackJsonpjerry||[]).push([[0],{12:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),l=n.n(c),r=n(21),s=n.n(r),o=(n(28),n(29),n(2)),i=n(3),h=n(5),u=n(4),d=(n(7),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"lotto-random-header",children:Object(a.jsx)("b",{children:"Hello Jerrytto"})})}}]),n}(c.Component)),b=(n(12),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).handleChange=function(t){var n=t.target.checked;e.props.handleChange(n,e.props.number)},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"number-plate-box-contents",children:Object(a.jsxs)("div",{className:"number-plate-box",children:[Object(a.jsx)("input",{type:"checkbox",checked:this.props.selected,onChange:this.handleChange}),Object(a.jsx)("span",{children:this.props.number})]})})}}]),n}(c.Component)),j=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).allHandleChange=function(t){var n=t.target.checked;e.props.allHandleChange(n)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"text-style",children:"\ud3ec\ud568\ud558\uace0 \uc2f6\uc740 \uc22b\uc790\ub97c \uc120\ud0dd\ud558\uc138\uc694\ud83d\ude0a"}),Object(a.jsxs)("div",{className:"number-plate-all-box",children:[Object(a.jsx)("input",{type:"checkbox",checked:this.props.allCheck,onChange:this.allHandleChange}),Object(a.jsx)("span",{children:"ALL"}),Object(a.jsx)("button",{className:"number-button",onClick:this.props.handleButtonOnClick,children:"Generate"})]}),Object(a.jsx)("div",{className:"number-plate-contents",children:this.props.selected.map((function(t,n){return Object(a.jsx)(b,{number:n+1,selected:t,handleChange:e.props.handleChange},n)}))})]})}}]),n}(c.Component),p=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"lotto-random-sidemenu",children:Object(a.jsx)(j,{allCheck:this.props.allCheck,selected:this.props.selected,allHandleChange:this.props.allHandleChange,handleChange:this.props.handleChange,handleButtonOnClick:this.props.handleButtonOnClick})})}}]),n}(c.Component),O=(n(30),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={numbers:[1,2,3,4,5,6],b_number:7},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.lottoNumber.slice(0,6),t=this.props.lottoNumber[6];return Object(a.jsx)("div",{className:"lotto-contents",children:Object(a.jsxs)("div",{className:"lotto-box",children:[e.map((function(e){return Object(a.jsx)("div",{className:"lotto-box-number",children:e},e)})),Object(a.jsx)("div",{className:"lotto-box-plus",children:"+"}),Object(a.jsx)("div",{className:"lotto-box-number",children:t})]})})}}]),n}(c.Component)),m=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.lottoNumbers;return Object(a.jsxs)("div",{className:"lotto-random-contents",children:[Object(a.jsx)("div",{className:"blank-style",children:Object(a.jsx)("button",{className:"clear-button",onClick:this.props.clearButtonOnClick,children:"Clear"})}),Object(a.jsx)("div",{children:e.map((function(e,t){return Object(a.jsx)(O,{lottoNumber:e},t)}))})]})}}]),n}(c.Component),f=(n(9),n(10),n(22),n(11)),v=function(){var e=Object(c.useState)(null),t=Object(f.a)(e,2),n=t[0],l=(t[1],Object(c.useState)(!1)),r=Object(f.a)(l,2);r[0],r[1];return Object(c.useEffect)((function(){}),[]),Object(a.jsxs)("div",{children:["Response : ",n]})},C=(c.Component,function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={allCheck:!0,selected:[],lottoNumbers:[]},e.allHandleChange=function(t){for(var n=e.state.selected,a=1;a<46;a++)e.handleChange(t,a);e.setState({selected:n})},e.clearButtonOnClick=function(){var t=e.state.lottoNumbers;if(t.length>0)for(;t.length>0;)t.pop();e.setState({lottoNumbers:t})},e.handleChange=function(t,n){var a=e.state.selected;a[n-1]=t,e.setState({selected:a})},e.selectBundle=function(t,n){for(var a=e.state.lottoNumbers,c=0;c<5*(t+1);c++){var l=e.selectLotto([],n);a.push(l),e.setState({lottoNumbers:a})}},e.handleButtonOnClick=function(){var t=e.state,n=t.selected,a=(t.lottoNumbers,[]),c=0;n.forEach((function(e,t){e&&(c++,a.push(t+1))})),c<7?alert("7\uac1c \uc774\uc0c1\uc758 \ubc88\ud638\ub97c \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4."):(alert("\ubc88\ud638\ub97c 5\uac1c \uc0dd\uc131\ud569\ub2c8\ub2e4."),e.selectBundle(0,a))},e.selectLotto=function(t,n){if(7===t.length){var a=t.slice(0,6);return a.sort((function(e,t){return e-t})),a.push(t[6]),a}var c=n[Math.floor(Math.random()*n.length)];return t.indexOf(c)<0&&t.push(c),e.selectLotto(t,n)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){for(var e=this.state,t=e.selected,n=e.allCheck,a=1;a<46;a++)t.push(!1);this.allCheck=n,this.allHandleChange(!0),this.setState({allCheck:n,selected:t})}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"lotto-random-template",children:[Object(a.jsx)(d,{}),Object(a.jsxs)("div",{className:"lott-random-main",children:[Object(a.jsx)(p,{allCheck:this.state.allCheck,selected:this.state.selected,allHandleChange:this.allHandleChange,handleChange:this.handleChange,handleButtonOnClick:this.handleButtonOnClick}),Object(a.jsx)(m,{lottoNumbers:this.state.lottoNumbers,clearButtonOnClick:this.clearButtonOnClick})]})]})}}]),n}(c.Component));var x=function(){return Object(a.jsx)("div",{className:"lotto-random-template",children:Object(a.jsx)(C,{})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),l(e),r(e)}))};s.a.render(Object(a.jsx)(l.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),g()},7:function(e,t,n){}},[[50,1,2]]]);
//# sourceMappingURL=main.35d6293a.chunk.js.map