(this.webpackJsonpfeedback=this.webpackJsonpfeedback||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(3),o=n.n(r),s=n(4),i=n(5),b=n(6),d=n(8),u=n(7),j=(n(13),n(0)),l=function(e){var t=e.title,n=e.children;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{children:t}),n]})},h=(n(15),function(e){var t=e.options,n=e.onLeaveFeedback;return Object(j.jsx)("div",{children:t.map((function(e,t){return Object(j.jsx)("button",{type:"button",class:"button",name:e,onClick:n,children:e},t+e)}))})}),O=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,r=e.positivePercentage;return Object(j.jsxs)(j.Fragment,{children:["Good: ",t,Object(j.jsx)("br",{}),"Neutral: ",n,Object(j.jsx)("br",{}),"Bad: ",a,Object(j.jsx)("br",{}),"Total: ",c,Object(j.jsx)("br",{}),"Positive feedback: ",r," %"]})},v=function(e){var t=e.message;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("p",{children:t})})},f=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback(),n=0;return t>0&&(n=Math.round(e.state.good/t*100)),n},e.onLeaveFeedback=function(t){var n=t.target.name;e.setState((function(e){return Object(s.a)({},n,e[n]+1)}))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=Object.keys(this.state);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l,{title:"Please leave feedback",children:Object(j.jsx)(h,{options:c,onLeaveFeedback:this.onLeaveFeedback})}),this.countTotalFeedback()>0?Object(j.jsx)(l,{title:"Statistics",children:Object(j.jsx)(O,{good:t,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})}):Object(j.jsx)(v,{message:"There is no feedback"})]})}}]),n}(c.a.Component);o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7e9c3604.chunk.js.map