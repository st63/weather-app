(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{68:function(n,e,t){"use strict";t.r(e);var a,i,r,c,o,d,p,l,x,s,b,h,u,j,m,g,f,O,w,y,v,C,D,k,S,A=t(2),z=t(0),F=t.n(z),E=t(16),I=t.n(E),L=t(3),B=t(5),M=t(22),H=L.b.select(a||(a=Object(A.a)(["\n  display: block;\n  color: ",";\n  font-size: 16px;\n  height: 48px;\n  padding: 13px 34px 13px 10px;\n  margin-left: 4px;\n  width: 251px;\n  max-width: 100%;\n  border: 2px solid rgba(128, 131, 164, 0.2);\n  border-radius: 8px;\n  outline: none;\n  background: rgba(128, 131, 164, 0.06);\n  transition: background-color 0.7s ease;\n  position: relative;\n\n  &:hover {\n    cursor: pointer;\n    border: 2px solid #8083A4;\n  }\n\n  &:active {\n    border: 2px solid #373AF5;\n  }\n\n  @media "," {\n    margin-left: 0px;\n    width: 100%;\n  }\n"])),(function(n){return n.isCitySelected?"#2C2D76":"#8083A4"}),"(max-width: 730px)"),K=L.b.option(i||(i=Object(A.a)(["\n  color:#2C2D76;\n  background-color: #fff;\n  border-radius: 5px;\n"]))),T=[{name:"Samara",value:"lat=53.19&lon=50.10"},{value:"lat=53.50&lon=49.42",name:"Toliatty"},{value:"lat=51.53&lon=46.03",name:"Saratov"},{value:"lat=55.79&lon=49.10",name:"Kazan"},{value:"lat=45.03&lon=38.97",name:"Krasnodar"}],G="04160438ae6d577745ad287cda3d9bca",J=t(1),P=function(n){var e=n.value,t=n.name;return Object(J.jsx)(K,{value:e,children:t},e)},R=function(n){var e=n.city,t=n.selectCity;return Object(J.jsxs)(H,{value:e,onChange:t,placeholder:"Select city",isCitySelected:!!e,children:[Object(J.jsx)(K,{selected:!e,disabled:!0,children:"Select city"}),T.map(P)]})},U=L.b.div(r||(r=Object(A.a)(["\n  background-color: #373AF5;\n  border-radius: 6px;\n  width: ",";\n  height: 237px;\n  padding: 20px 21px 24px 19px;\n  margin: 55px 5px 0px 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  @media "," {\n    margin-top: 30px;\n  }\n  \n  @media "," {\n    border: 2px solid #2C2D76;\n    margin-right: 16px;\n  }\n"])),(function(n){return n.width}),"(max-width: 730px)","(max-width: 359px)"),q=L.b.div(c||(c=Object(A.a)(["\n  font-weight: 700;\n  text-transform: lowercase;\n"]))),N=L.b.img(o||(o=Object(A.a)(["\n  height: ",";\n  align-self: center;\n"])),(function(n){return n.heightIcon})),V=L.b.div(d||(d=Object(A.a)(["\n  font-size: 32px;\n  font-weight: 700;\n  align-self: flex-end;\n"]))),W=function(n){var e=n.date,t=n.weather,a=n.width,i=n.heightIcon,r=t.temp>0?"+":"";return Object(J.jsxs)(U,{width:a,children:[Object(J.jsx)(q,{children:e}),Object(J.jsx)(N,{heightIcon:i,src:"http://openweathermap.org/img/wn/".concat(t.icon,".png")}),Object(J.jsxs)(V,{children:[r,t.temp,"\xb0"]})]})},Y=L.b.div(p||(p=Object(A.a)(["\n  width: 660px;\n  height: 524px;\n  padding: 54px 54px;\n  background: #fff;\n  box-shadow: 0px 4px 4px rgba(4, 5, 73, 0.25), 14px 14px 20px rgba(5, 6, 114, 0.2);\n  border-radius: 8px;\n\n  @media "," {\n    margin-bottom: 34px;\n  }\n  \n  @media "," {\n    width: 100%;\n    padding: 32px 54px 60px 54px;\n    height: auto;\n  }\n\n  @media "," {\n    padding: 32px 24px 60px 24px;\n    margin-bottom: 10px;\n  }\n"])),"(max-width: 1470px)","(max-width: 730px)","(max-width: 359px)"),Q=L.b.h1(l||(l=Object(A.a)(["\n  margin-bottom: 36px;\n  margin-left: 4px;\n  color: #2C2D76;\n  font-weight: bold;\n  font-size: 32px;\n\n  @media "," {\n    margin-left: 0px;\n    line-height: 32px;\n  }\n  \n  @media "," {\n    margin-left: 0px;\n    line-height: 32px;\n    font-size: 25px;\n  }\n"])),"(max-width: 730px)","(max-width: 390px)"),X=L.b.div(x||(x=Object(A.a)(["\n  font-weight: bold;\n  text-align: center;\n  margin-top: 60px;\n"]))),Z=L.b.img(s||(s=Object(A.a)(["\n  margin-bottom: 22px;\n"]))),$=L.b.p(b||(b=Object(A.a)(["\n  color:#8083A4;\n"]))),_=L.b.div(h||(h=Object(A.a)(["\n  display: flex;\n\n  @media "," {\n    overflow-y: hidden;\n  }\n"])),"(max-width: 705px)"),nn=L.b.button(u||(u=Object(A.a)(["\n  position: relative;\n  top: 21px;\n  left: -33px;\n  border: none;\n  outline: none;\n  opacity: 0.6;\n\n  @media "," {\n    display: none;\n  }\n\n  &:hover {\n      cursor: pointer;\n      opacity: 1;\n  }\n\n  &:after {\n    content: '';\n    position: absolute;\n    display: block;\n    border-right: solid 2px #8083A4;\n    border-top: solid 2px #8083A4;\n    width: 10px;\n    height: 10px;\n    transform: translate(12px, 0px) rotate(-135deg);\n  }\n"])),"(max-width: 705px)"),en=L.b.button(j||(j=Object(A.a)(["\n  position: relative;\n  top: 21px;\n  right: 1px;\n  border: none;\n  outline: none;\n  opacity: 0.6;\n\n  @media "," {\n    display: none;\n  }\n\n  &:hover {\n      cursor: pointer;\n      opacity: 1;\n  }\n  \n  &:after {\n    content: '';\n    position: absolute;\n    display: block;\n    border-right: solid 2px #8083A4;\n    border-top: solid 2px #8083A4;\n    width: 10px;\n    height: 10px;\n    transform: translate(8px, 0px) rotate(45deg);\n  }\n"])),"(max-width: 705px)"),tn=t.p+"static/media/placeholder-icon.1a743710.svg",an=function(){var n=Object(z.useState)(),e=Object(B.a)(n,2),t=e[0],a=e[1],i=Object(z.useState)(),r=Object(B.a)(i,2),c=r[0],o=r[1];return{city:t,selectCity:function(n){a(n.target.value)},date:c,selectDate:function(n){o(n.target.value)}}},rn=t(14),cn=t.n(rn),on=t(20),dn=t(21),pn=t.n(dn),ln=function(n){return n.toISOString().slice(0,10)},xn=function(n){return new Date(1e3*n).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}).toLowerCase()+""},sn=function(n){return{date:xn(n.dt),temp:Math.round(n.temp.day),icon:n.weather[0].icon}},bn=function(){var n=Object(on.a)(cn.a.mark((function n(e){var t,a;return cn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,pn.a.get("https://api.openweathermap.org/data/2.5/onecall?".concat(e,"&exclude=current,minutely,hourly,alerts&units=metric&appid=").concat(G));case 2:return t=n.sent,a=t.data,n.abrupt("return",a.daily.map(sn));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),hn=function(){var n=Object(on.a)(cn.a.mark((function n(e,t){var a,i,r;return cn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=new Date(t).getTime()/1e3,n.next=3,pn.a.get("https://api.openweathermap.org/data/2.5/onecall/timemachine?".concat(e,"&dt=").concat(a,"&units=metric&appid=").concat(G));case 3:return i=n.sent,r=i.data,n.abrupt("return",{city:e,date:t,weather:(c=r.current,{date:xn(c.dt),temp:Math.round(c.temp),icon:c.weather[0].icon})});case 6:case"end":return n.stop()}var c}),n)})));return function(e,t){return n.apply(this,arguments)}}(),un=function(n){return Object(J.jsx)(W,{date:n.date,weather:n,heightIcon:"115px",width:"174px"},n.date)},jn=3,mn=7,gn=function(){var n=function(){var n=Object(z.useState)(),e=Object(B.a)(n,2),t=e[0],a=e[1],i=an(),r=i.city,c=i.selectCity;return Object(z.useEffect)((function(){r&&bn(r).then(a)}),[r]),{weathers:t,city:r,selectCity:c}}(),e=n.city,t=n.selectCity,a=n.weathers,i=function(n){var e=Object(M.a)("(min-width: 706px)"),t=Object(M.a)("(max-width: 705px)"),a=Object(z.useState)(0),i=Object(B.a)(a,2),r=i[0],c=i[1],o=Object(z.useState)(jn),d=Object(B.a)(o,2),p=d[0],l=d[1];Object(z.useEffect)((function(){t&&l(mn),e&&l(jn)}),[e,t]);var x=n?n.slice(r,r+p):[];return{position:r,next:function(){c(r+1)},prev:function(){c(r-1)},list:x,pageSize:p}}(a),r=i.position,c=i.next,o=i.prev,d=i.list,p=i.pageSize;return Object(J.jsxs)(Y,{children:[Object(J.jsx)(Q,{children:"7 Days Forecast"}),Object(J.jsx)(R,{city:e,selectCity:t}),a&&d?Object(J.jsxs)(_,{children:[Object(J.jsx)(nn,{disabled:0===r,onClick:o}),d.map(un),Object(J.jsx)(en,{disabled:r===a.length-p,onClick:c})]}):Object(J.jsxs)(X,{children:[Object(J.jsx)(Z,{src:tn}),Object(J.jsx)($,{children:"Fill in all the fields and the weather will be displayed"})]})]})},fn=L.b.input(m||(m=Object(A.a)(["\n  width: 251px;\n  max-width: 100%;\n  height: 48px;\n  margin-right: 5px;\n  border: 2px solid rgba(128, 131, 164, 0.2);\n  border-radius: 8px;\n  outline: none;\n  font-size: 16px;\n  font-weight: 400;\n  color:#8083A4;\n  padding: 14px 9px 13px 15px;\n  background: rgba(128, 131, 164, 0.06);\n\n  &:hover {\n    border: 2px solid #8083A4;\n  }\n\n  &:active {\n    border: 2px solid #373AF5;\n  }\n  \n  &::placeholder {\n    color:#8083A4;\n    font-weight: 400;\n  }\n  \n  @media "," {\n    width: 100%;\n    margin-top: 24px;\n  }\n"])),"(max-width: 730px)"),On=function(n){var e=n.date,t=n.selectDate,a=F.a.useState("text"),i=Object(B.a)(a,2),r=i[0],c=i[1],o=new Date,d=ln(new Date((new Date).setDate(o.getDate()-5))),p=ln(o);return Object(J.jsx)(fn,{onChange:t,onFocus:function(){"date"!==r&&c("date")},onBlur:function(){e||"text"===r||c("text")},onKeyDown:function(){},type:r,min:d,max:p,value:e,placeholder:"Select date",required:!0})},wn=L.b.div(g||(g=Object(A.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  @media "," {\n    flex-direction: column;\n  }\n"])),"(max-width: 730px)"),yn=t(8),vn=t(38),Cn=Object(vn.a)((function(n){return n.weather}),(function(n){return n.list})),Dn=t(70),kn=Object(Dn.a)("weathers/save"),Sn=Object(Dn.a)("weather/save"),An=function(){var n,e=an(),t=e.city,a=e.selectCity,i=e.date,r=e.selectDate,c=Object(yn.c)(Cn),o=t&&i&&(null===c||void 0===c||null===(n=c[t])||void 0===n?void 0:n[i]);return function(n,e,t){var a=Object(yn.b)();Object(z.useEffect)((function(){n&&e&&!t&&hn(n,e).then((function(n){return a(Sn(n))}))}),[n,e])}(t,i,!!o),{weather:o,city:t,selectCity:a,date:i,selectDate:r}},zn=function(){var n=An(),e=n.city,t=n.selectCity,a=n.date,i=n.selectDate,r=n.weather,c=function(n){if(n)return new Date(n).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}).toLowerCase()+""}(a);return Object(J.jsxs)(Y,{children:[Object(J.jsx)(Q,{children:"Forecast for a Date in the Past"}),Object(J.jsxs)(wn,{children:[Object(J.jsx)(R,{city:e,selectCity:t}),Object(J.jsx)(On,{date:a,selectDate:i})]}),r?Object(J.jsx)(W,{date:c,weather:r,heightIcon:"146px",width:"98.5%"}):Object(J.jsxs)(X,{children:[Object(J.jsx)(Z,{src:tn}),Object(J.jsx)($,{children:"Fill in all the fields and the weather will be displayed"})]})]})},Fn=L.b.div(f||(f=Object(A.a)([""]))),En=L.b.header(O||(O=Object(A.a)(["\n  width: 775px;\n  margin: 0 auto 72px auto;\n\n  @media "," {\n    width: 100%;\n  }\n\n  @media "," {\n    width: 245px;\n    margin-bottom: 24px;\n  }\n"])),"(max-width: 880px)","(max-width: 730px)"),In=L.b.h1(w||(w=Object(A.a)(["\n  font-weight: bold;\n  font-size: 102px;\n  line-height: ",";\n  text-align: ",";\n\n  @media "," {\n    font-size: 32px;\n    line-height: 32px;\n  }\n"])),(function(n){return n.lineHeight}),(function(n){return n.textAlign}),"(max-width: 730px)"),Ln=L.b.footer(y||(y=Object(A.a)(["\n  color: #fff;\n  margin-top: 199px;\n  text-align: center;\n  font-size: 14px;\n  line-height: 18px;\n  opacity: 0.6;\n  \n  @media "," {\n    margin-top: 12px;\n  }\n"])),"(max-width: 1470px)"),Bn=L.b.div(v||(v=Object(A.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  @media "," {\n    flex-direction: column;\n    align-items: center;\n  }\n"])),"(max-width: 1470px)"),Mn=function(){return Object(J.jsxs)(Fn,{children:[Object(J.jsxs)(En,{children:[Object(J.jsx)(In,{lineHeight:"83px",textAlign:"left",children:"Weather"}),Object(J.jsx)(In,{lineHeight:"97px",textAlign:"right",children:"forecast"})]}),Object(J.jsxs)(Bn,{children:[Object(J.jsx)(gn,{}),Object(J.jsx)(zn,{})]}),Object(J.jsx)(Ln,{children:"C \u041b\u042e\u0411\u041e\u0412\u042c\u042e \u041e\u0422 MERCURY DEVELOPMENT"})]})},Hn=t.p+"static/media/background-bottom.6be33a07.png",Kn=t.p+"static/media/background-top.1b9e0722.png",Tn=L.b.div(C||(C=Object(A.a)(["\n  background-color: #373AF5;\n  background-image: url(","), url(",");\n  background-position: 0% 100%,100% 0%;\n"])),Hn,Kn),Gn=L.b.div(D||(D=Object(A.a)(["\n  margin: 0 auto;\n  padding: 84px 43px 16px 43px;\n  max-width: 1440px;\n  @media "," {\n    padding-top: 32px;\n  }\n"])),"(max-width: 730px)"),Jn=(L.b.div(k||(k=Object(A.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),function(){return Object(J.jsx)(Tn,{children:Object(J.jsx)(Gn,{children:Object(J.jsx)(Mn,{})})})}),Pn=t(15),Rn=t(39),Un=t(10),qn=t(6),Nn=t(69),Vn=Object(Nn.a)((S={},Object(Un.a)(S,"".concat(kn),(function(n,e){var t=e.payload;return Object(qn.a)(Object(qn.a)({},n),{},{list:{samara:{d:t[0]}}})})),Object(Un.a)(S,"".concat(Sn),(function(n,e){var t,a=e.payload,i=a.city,r=a.date,c=a.weather;return Object(qn.a)(Object(qn.a)({},n),{},{list:Object(qn.a)(Object(qn.a)({},n.list),{},Object(Un.a)({},i,Object(qn.a)(Object(qn.a)({},null===(t=n.list)||void 0===t?void 0:t[i]),{},Object(Un.a)({},r,c))))})})),S),{list:{}}),Wn=Object(Pn.b)({weather:Vn}),Yn=Object(Pn.a)(Rn.a);var Qn,Xn=Object(Pn.d)(Wn,Yn),Zn=Object(L.a)(Qn||(Qn=Object(A.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-size: 16px;\n    color: #fff;\n    line-height: 24px;\n    font-family: Ubuntu;\n  }\n"])));I.a.render(Object(J.jsxs)(yn.a,{store:Xn,children:[Object(J.jsx)(Zn,{}),Object(J.jsx)(Jn,{})]}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.66e843ff.chunk.js.map