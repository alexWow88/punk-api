(this["webpackJsonppunk-api"]=this["webpackJsonppunk-api"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(4),s=c.n(a),i=(c(9),c(2)),l=(c(10),c(11),c(0)),u=function(e){var t=e.searchText,c=e.setSearchText,n=e.filterSearchArr;return Object(l.jsx)("div",{className:"nav",children:Object(l.jsxs)("form",{className:"nav__form",children:[Object(l.jsx)("label",{children:"Search: "}),Object(l.jsx)("input",{type:"text",value:t,onChange:function(e){e.preventDefault(),c(e.target.value),n(e.target.value)}})]})})},j=(c(13),function(e){e.beerInfo;var t=e.searchArray,c=(e.searchText,t.map((function(e){return Object(l.jsxs)("div",{className:"beer-card",children:[Object(l.jsx)("img",{src:e.image_url,className:"beer-card__img"}),Object(l.jsx)("div",{className:"beer-card__name",children:e.name}),Object(l.jsx)("div",{className:"beer-card__tagline",children:e.tagline}),Object(l.jsxs)("ul",{className:"beer-card__list",children:[Object(l.jsx)("li",{className:"beer-card__list__pairing-header",children:"Food Pairings"}),e.food_pairing.map((function(e){return Object(l.jsx)("li",{children:e})}))]})]})})));return Object(l.jsx)("div",{className:"card-grid",children:c})}),o=(c(14),function(e){var t=e.beerInfo,c=e.searchArray;return Object(l.jsxs)("div",{className:"main",children:[Object(l.jsx)("div",{className:"main__title",children:"PUNK-API"}),Object(l.jsx)("div",{className:"main__phrase",children:"Find the beer for you!"}),Object(l.jsx)(j,{beerInfo:t,searchArray:c})]})});var b=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),s=Object(i.a)(a,2),j=s[0],b=s[1],d=Object(n.useState)([]),h=Object(i.a)(d,2),f=h[0],m=h[1];return Object(n.useEffect)((function(){fetch("https://api.punkapi.com/v2/beers").then((function(e){return e.json()})).then((function(e){return r(e)})).catch((function(e){return console.log("err")}))}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(u,{searchText:j,setSearchText:b,filterSearchArr:function(e){m(c.filter((function(t){return t.name.includes(e)}))),console.log(f)}}),c&&Object(l.jsx)(o,{beerInfo:c,searchArray:f,searchText:j})]})},d=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),d()}],[[15,1,2]]]);
//# sourceMappingURL=main.80b0e8fb.chunk.js.map