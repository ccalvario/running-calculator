(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(37)},23:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),i=a(9),r=a.n(i),c=(a(21),a(23),a(4)),s=a(5),o=a(7),u=a(6),h=a(8),m=(a(25),a(27),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleSecondsChange",value:function(e){var t=e.target.value,a=Math.floor(this.props.time/3600),n=Math.floor(this.props.time%3600/60);if(!isNaN(t)){var l=Number(3600*a)+Number(60*n)+Number(t);this.props.onChange(l)}}},{key:"handleMinutesChange",value:function(e){var t=Math.floor(this.props.time/3600),a=Math.floor(this.props.time%3600%60),n=e.target.value;if(!isNaN(n)){var l=Number(3600*t)+Number(60*n)+Number(a);this.props.onChange(l)}}},{key:"handleHoursChange",value:function(e){var t=Math.floor(this.props.time%3600/60),a=Math.floor(this.props.time%3600%60),n=e.target.value;if(!isNaN(n)){var l=3600*n+60*t+a;this.props.onChange(l)}}},{key:"render",value:function(){var e=this,t=Math.floor(this.props.time/3600),a=Math.floor(this.props.time%3600/60),n=Math.floor(this.props.time%3600%60),i=l.a.createElement("input",{type:"text",className:"form-control display-time",placeholder:"0",onChange:function(t){return e.handleHoursChange(t)},value:t,maxLength:"2"});return l.a.createElement("div",{className:"display"},l.a.createElement("div",null,l.a.createElement("div",{className:"display-label"},this.props.showHours?l.a.createElement("div",null,"H"):null,l.a.createElement("div",null,"M"),l.a.createElement("div",null,"S"))),l.a.createElement("div",null,l.a.createElement("div",{className:"display-row"},this.props.showHours?i:null,l.a.createElement("input",{type:"text",className:"form-control display-time",placeholder:"0",onChange:function(t){return e.handleMinutesChange(t)},value:a,maxLength:"2"}),l.a.createElement("input",{type:"text",className:"form-control display-time",placeholder:"0",onChange:function(t){return e.handleSecondsChange(t)},value:n,maxLength:"2"}))))}}]),t}(n.Component)),p=(a(29),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={distance:e.distance},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleDistanceChange",value:function(e){var t=e.target.value;isNaN(t)||this.setState({distance:t}),this.props.onChange(t)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("input",{type:"text",className:"form-control display-distance",placeholder:"0",onChange:function(t){return e.handleDistanceChange(t)},value:this.state.distance}))}}]),t}(n.Component)),d=(a(31),a(3)),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={distance:5e3,time:0,pace:0},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"calculatePace",value:function(e,t){return 1e3*t/e}},{key:"calculateTime",value:function(e,t){return e*t/1e3}},{key:"handleTimeChange",value:function(e){var t=e;isNaN(t)||this.setState({time:t,pace:this.calculatePace(this.state.distance,t)}),console.log("****handleTimeChange "+e)}},{key:"handlePaceChange",value:function(e){var t=e;isNaN(t)||this.setState({pace:t,time:this.calculateTime(this.state.distance,t)}),console.log("****handlePaceChange "+e)}},{key:"handleDistanceChange",value:function(e){var t=e;isNaN(t)||this.setState({distance:t,pace:this.calculatePace(t,this.state.time)})}},{key:"render",value:function(){var e=this;return l.a.createElement(d.b,{className:"board"},l.a.createElement(d.c,null,l.a.createElement(d.a,{xs:"4",className:"label"},"Distance:"),l.a.createElement(d.a,{xs:"auto"},l.a.createElement(p,{distance:this.state.distance,onChange:function(t){return e.handleDistanceChange(t)}}))),l.a.createElement(d.c,null,l.a.createElement(d.a,{xs:"4",className:"label"},"Time:"),l.a.createElement(d.a,{xs:"auto"},l.a.createElement(m,{time:this.state.time,showHours:!0,onChange:function(t){return e.handleTimeChange(t)}}))),l.a.createElement(d.c,null,l.a.createElement(d.a,{xs:"4",className:"label"},"Pace:"),l.a.createElement(d.a,{xs:"auto"},l.a.createElement(m,{time:this.state.pace,showHours:!1,onChange:function(t){return e.handlePaceChange(t)}}))))}}]),t}(n.Component),v=(a(35),function(e){return l.a.createElement("nav",{className:"header"},l.a.createElement("div",{className:"title"},"Running Calculator"))}),g=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(v,null),l.a.createElement(f,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.fc0a808c.chunk.js.map