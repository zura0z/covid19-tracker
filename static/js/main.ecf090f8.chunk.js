(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{103:function(e,t,c){},104:function(e,t,c){},202:function(e,t,c){},203:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(0),s=c(7),r=c.n(s),o=c(23),i=c.n(o),l=c(37),u=c(12),d=c(238),j=c(239),f=c(240),h=c(230),b=c(234),O=c(10),m=c.n(O),v=c(21),x=c(235),p=(c(99),function(e){var t=e.title,c=e.cases,n=e.isRed,s=e.active,r=e.total,o=Object(v.a)(e,["title","cases","isRed","active","total"]);return Object(a.jsx)(h.a,{className:"infoBox ".concat(s&&"infoBox--selected"," ").concat(n&&"infoBox--red"),onClick:o.onClick,children:Object(a.jsxs)(b.a,{children:[Object(a.jsx)(x.a,{className:"infoBox__title",color:"textSecondary",children:t}),Object(a.jsx)("h2",{className:"infoBox__cases ".concat(!n&&"infoBox__cases--green"),children:c}),Object(a.jsxs)(x.a,{className:"infoBox__total",color:"textSecondary",children:[r," Total"]})]})})}),y=(c(103),c(237)),g=c(242),N=c(86),C=c(241),_=c(236),k={cases:{rgba:"rgba(204,16,52, 0.7)",hex:"#CC1034",multiplier:300},recovered:{rgba:"rgba(34,139,34, 0.7)",hex:"#228B22",multiplier:240},deaths:{rgba:"rgba(0,0,0, 0.7)",hex:"#000000",multiplier:600}},w=function(e){return Object(N.a)(e).sort((function(e,t){return e.cases>t.cases?-1:1}))},I=function(e){return e&&e>=1e3?"+".concat(m()(e).format("0.0a")):e&&e<=1e3?"".concat(m()(e).format("0")):"0"},S=function(e){var t=e.countries,c=e.casesType,n=e.center,s=e.zoom,r=null,o=null,i=null;return"cases"===c&&(r=function(e,t){return e.map((function(e,c){return Object(a.jsx)(C.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:"#CC1034",fillColor:"rgba(204,16,52, 0.7)",fillOpacity:.4,radius:Math.sqrt(e[t])*k[t].multiplier,children:Object(a.jsx)(_.a,{children:Object(a.jsxs)("div",{className:"info-container",children:[Object(a.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(a.jsx)("div",{className:"info-name",children:e.country}),Object(a.jsxs)("div",{className:"info",children:["Cases: ",m()(e.cases).format("0,0")]}),Object(a.jsxs)("div",{className:"info",children:["Recovered: ",m()(e.recovered).format("0,0")]}),Object(a.jsxs)("div",{className:"info",children:["Deaths: ",m()(e.deaths).format("0,0")]})]})})},c)}))}(t,c)),"recovered"===c&&(o=function(e,t){return e.map((function(e,c){return Object(a.jsx)(C.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:"#228B22",fillColor:"rgba(34,139,34, 0.7)",fillOpacity:.4,radius:Math.sqrt(e[t])*k[t].multiplier,children:Object(a.jsx)(_.a,{children:Object(a.jsxs)("div",{className:"info-container",children:[Object(a.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(a.jsx)("div",{className:"info-name",children:e.country}),Object(a.jsxs)("div",{className:"info",children:["Cases: ",m()(e.cases).format("0,0")]}),Object(a.jsxs)("div",{className:"info",children:["Recovered: ",m()(e.recovered).format("0,0")]}),Object(a.jsxs)("div",{className:"info",children:["Deaths: ",m()(e.deaths).format("0,0")]})]})})},c)}))}(t,c)),"deaths"===c&&(i=function(e,t){return e.map((function(e,c){return Object(a.jsx)(C.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:"#000000",fillColor:"rgba(0,0,0, 0.7)",fillOpacity:.4,radius:Math.sqrt(e[t])*k[t].multiplier,children:Object(a.jsx)(_.a,{children:Object(a.jsxs)("div",{className:"info-container",children:[Object(a.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(a.jsx)("div",{className:"info-name",children:e.country}),Object(a.jsxs)("div",{className:"info",children:["Cases: ",m()(e.cases).format("0,0")]}),Object(a.jsxs)("div",{className:"info",children:["Recovered: ",m()(e.recovered).format("0,0")]}),Object(a.jsxs)("div",{className:"info",children:["Deaths: ",m()(e.deaths).format("0,0")]})]})})},c)}))}(t,c)),Object(a.jsx)("div",{className:"map",children:Object(a.jsxs)(y.a,{center:n,zoom:s,children:[Object(a.jsx)(g.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r,o,i]})})};c(104);var B=function(e){var t=e.countries;return Object(a.jsx)("div",{className:"table",children:t.map((function(e){var t=e.country,c=e.cases;return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t}),Object(a.jsx)("strong",{children:Object(a.jsx)("td",{children:m()(c).format("0,0")})})]},t)}))})},D=c(85),R={legend:{display:!1},elements:{point:{radius:!1}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return m()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:0},ticks:{callback:function(e,t,c){return m()(e).format("0a")}}}]}},M=function(e,t){var c,a=[];if(void 0!==e)for(var n in e.cases){if(c){var s={x:n,y:e[t][n]-c};a.push(s)}c=e[t][n]}return a};var T=function(e){var t=e.casesType,c=e.country,s=e.days,r=Object(n.useState)({}),o=Object(u.a)(r,2),d=o[0],j=o[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"worldwide"===c&&(c="all"),a="https://disease.sh/v3/covid-19/historical/".concat(c,"?lastdays=").concat(s),e.next=4,fetch(a).then((function(e){return e.json()})).then((function(e){var a=null;a=M("all"===c?e:e.timeline,t),j(a),M(a)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,c,s]),Object(a.jsx)("div",{children:d&&d.length>0&&Object(a.jsx)(D.Line,{data:{datasets:[{backgroundColor:k[t].rgba,borderColor:k[t].hex,data:d}]},options:R})})},A=(c(201),c(202),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)("worldwide"),o=Object(u.a)(r,2),O=o[0],v=o[1],x=Object(n.useState)({}),y=Object(u.a)(x,2),g=y[0],N=y[1],C=Object(n.useState)([]),_=Object(u.a)(C,2),k=_[0],D=_[1],R=Object(n.useState)({lat:40,lng:20}),M=Object(u.a)(R,2),A=M[0],z=M[1],E=Object(n.useState)(3),L=Object(u.a)(E,2),q=L[0],J=L[1],U=Object(n.useState)([]),V=Object(u.a)(U,2),Y=V[0],F=V[1],G=Object(n.useState)("cases"),W=Object(u.a)(G,2),H=W[0],K=W[1],P=Object(n.useState)(150),Q=Object(u.a)(P,2),X=Q[0],Z=Q[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){N(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),c=w(e);D(c),F(e),s(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var $=function(){var e=Object(l.a)(i.a.mark((function e(t){var c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.value,a="worldwide"===c?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(c),e.next=4,fetch(a).then((function(e){return e.json()})).then((function(e){v(c),N(e),void 0!==e.countryInfo&&(z([e.countryInfo.lat,e.countryInfo.long]),J(5))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"app",children:[Object(a.jsxs)("div",{className:"app__left",children:[Object(a.jsxs)("div",{className:"app__header",children:[Object(a.jsx)("h1",{className:"title",children:"COVID-19 Tracker"}),Object(a.jsx)(d.a,{className:"app__dropdown",children:Object(a.jsxs)(j.a,{className:"select",variant:"outlined",onChange:$,value:O,children:[Object(a.jsx)(f.a,{value:"worldwide",children:"Worldwide"}),c.map((function(e,t){return Object(a.jsx)(f.a,{value:e.value,children:e.name},t)}))]})})]}),Object(a.jsxs)("div",{className:"app__stats",children:[Object(a.jsx)(p,{isRed:!0,active:"cases"===H,onClick:function(e){return K("cases")},title:"COVID-19 Cases",cases:I(g.todayCases),total:m()(g.cases).format("0,0")}),Object(a.jsx)(p,{active:"recovered"===H,onClick:function(e){return K("recovered")},title:"Recovered",cases:I(g.todayRecovered),total:m()(g.recovered).format("0,0")}),Object(a.jsx)(p,{isRed:!0,active:"deaths"===H,onClick:function(e){return K("deaths")},title:"Deaths",cases:I(g.todayDeaths),total:m()(g.deaths).format("0,0")})]}),Object(a.jsx)(S,{casesType:H,countries:Y,center:A,zoom:q})]}),Object(a.jsx)(h.a,{className:"app__right",children:Object(a.jsxs)(b.a,{children:[Object(a.jsxs)("div",{className:"app__table",children:[Object(a.jsx)("h3",{children:"Live Cases by Country"}),Object(a.jsx)(B,{countries:k})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("h3",{className:"new_cases",children:["".concat(O.charAt(0).toUpperCase()+O.slice(1)," New ").concat(H.charAt(0).toUpperCase()+H.slice(1)," In Last "),Object(a.jsx)("input",{className:"days_input",type:"number",onChange:function(e){Z(e.target.value)},value:X})," ","Days"]}),Object(a.jsx)(T,{className:"lineGraph",casesType:H,country:O,days:X})]})]})})]})});r.a.render(Object(a.jsx)(A,{}),document.getElementById("root"))},99:function(e,t,c){}},[[203,1,2]]]);
//# sourceMappingURL=main.ecf090f8.chunk.js.map