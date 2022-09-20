"use strict";(self.webpackChunkbutterflix=self.webpackChunkbutterflix||[]).push([[712],{3354:function(e,n,t){t(2791);var r=t(8735),c=t(3046),i=(t(6355),t(3504)),s=t(184);n.Z=function(e){var n,t,o=e.movie;return(0,s.jsx)(r.kC,{alignItems:"center",justifyContent:"center",children:(0,s.jsx)(i.rU,{to:"/movie/".concat(o.id),children:(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("p",{className:"card__title pb-3",children:(n=o.title,t=32,(null===n||void 0===n?void 0:n.length)>t?n.substr(0,t-1)+"...":n)}),(0,s.jsx)(c.Ee,{className:"card__poster",src:"".concat("https://image.tmdb.org/t/p/original/").concat(o.poster_path||o.backdrop_path),layout:"fill",objectFit:"cover"})]})})})}},6712:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var r=t(885),c=t(8735),i=t(2791),s=t(9434),o=t(3472),a=t(3354),l=t(8017),d=t(184);function u(){var e=(0,i.useState)([]),n=(0,r.Z)(e,2),t=n[0],u=n[1],f=(0,s.I0)();return(0,i.useEffect)((function(){f((0,l.EG)({get_url:"https://api.themoviedb.org/3",setMovies:u}))}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.Z,{}),(0,d.jsx)(c.MI,{minChildWidth:"300px",spacing:"30px",children:t.map((function(e,n){return(0,d.jsx)(a.Z,{movie:e},n)}))})]})}},3472:function(e,n,t){t.d(n,{Z:function(){return S}});var r=t(168),c=t(885),i=t(2791),s=t(3046),o=t(8762);var a=t.p+"static/media/home-icon.b6a11f9b406f2f13cd82608a276428e5.svg";var l=t.p+"static/media/chat.4d410db656710c14710332d27cec00a9.svg";var d=t.p+"static/media/series-icon.1a6f6ada8d37edf9c4a59f7ad16816f5.svg";var u=t.p+"static/media/search-icon.46aff20f64bfe1a300ddd5ef420fc006.svg";var f,h,x=t.p+"static/media/group-icon.bd400f646ed537fc3c6ab38da19ad7ad.svg",m=t(3504),p=t(6871),v=t(6031),g=t(4318),b=t(1028),j=t(9434),w=t(7219),N=t(3789),k=t(8102),E=t(184);var Z=v.ZP.div(f||(f=(0,r.Z)(["\n  width: 50px;\n  height: 50px;\n  object-position: center;\n\n  img {\n    width: 100%;\n    height: auto;\n    object-fit: cover;\n    border-radius: 100px;\n  }\n\n  :hover {\n    cursor: pointer;\n  }\n"]))),C=v.ZP.div(h||(h=(0,r.Z)(["\n  background-color: #040714;\n  border-radius: 0.345rem;\n  border: 1.3px solid rgba(151,151,151,1);\n  box-shadow: rgb(0 0 0 / 50%) 0px 0px 0px 0px;\n  opacity: .85;\n\n  margin-top: 20px;\n  \n  display: ",";\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n\n  position: absolute;\n  top: 4vh;\n  right: .8rem;\n"])),(function(e){return e.activeState?"flex":"none"})),S=function(){var e=(0,i.useState)({}),n=(0,c.Z)(e,2),t=n[0],r=n[1],f=(0,j.v9)((function(e){return e.users})),h=(0,p.s0)(),v=(0,j.I0)(),S=(0,i.useState)(!1),L=(0,c.Z)(S,2),U=L[0],R=L[1],_=(0,i.useState)(!1),I=(0,c.Z)(_,2),M=I[0],y=I[1];return(0,i.useEffect)((function(){var e=function(){window.scrollY>100?y(!0):y(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),(0,i.useEffect)((function(){v((0,k.PR)({id:f.id,setUser:r}))}),[]),(0,E.jsxs)("nav",{className:"nav ".concat(M&&"bg-[#090b13]"),children:[(0,E.jsxs)("div",{className:"flex items-center space-x-2 md:space-x-10 sm:space-x-2",children:[(0,E.jsx)("a",{href:"/home",children:(0,E.jsx)(s.Ee,{className:"nav__logo cursor-pointer object-contain",src:o,width:45,height:45,alt:"Butterflix Logo"})}),(0,E.jsxs)("ul",{className:"hidden space-x-4 md:flex",children:[(0,E.jsx)(m.rU,{to:"/home",children:(0,E.jsx)("li",{className:"",children:(0,E.jsxs)("div",{className:"btn",children:[(0,E.jsx)("img",{src:a,alt:""}),(0,E.jsx)("label",{children:"HOME"})]})})}),(0,E.jsx)(m.rU,{to:"/search",children:(0,E.jsx)("li",{className:"",children:(0,E.jsxs)("div",{className:"btn",children:[(0,E.jsx)("img",{src:u,alt:""}),(0,E.jsx)("label",{children:"SEARCH"})]})})}),(0,E.jsx)("li",{className:"",children:(0,E.jsxs)("div",{className:"btn",children:[(0,E.jsx)("img",{src:l,alt:""}),(0,E.jsx)("label",{children:"CHAT"})]})}),(0,E.jsx)(m.rU,{to:"/users",children:(0,E.jsx)("li",{className:"",children:(0,E.jsxs)("div",{className:"btn",children:[(0,E.jsx)("img",{src:x,alt:""}),(0,E.jsx)("label",{children:"USERS"})]})})}),(0,E.jsx)(m.rU,{to:"/favorites",children:(0,E.jsx)("li",{className:"",children:(0,E.jsxs)("div",{className:"btn",children:[(0,E.jsx)("img",{src:d,alt:""}),(0,E.jsx)("label",{children:"MY LIST"})]})})})]})]}),(0,E.jsx)(Z,{onClick:function(){return R(!U)},children:(0,E.jsx)("img",{src:t.pic,style:{height:"50px"},alt:"profileIcon"})}),(0,E.jsxs)(C,{activeState:U,children:[(0,E.jsxs)("div",{className:"btn flex dropmenu",children:[(0,E.jsx)(g.Z,{className:"dropicons"}),(0,E.jsx)(m.rU,{to:"/myprofile",children:(0,E.jsx)("label",{children:"PROFILE"})})]}),(0,E.jsxs)("div",{className:"btn flex dropmenu",children:[(0,E.jsx)(b.Z,{className:"dropicons"}),(0,E.jsx)("label",{onClick:function(){v((0,w.ni)()),(0,N.Vp)("logged out"),h("/")},children:"LOG OUT"})]})]})]})}},3789:function(e,n,t){t.d(n,{Vp:function(){return c},cM:function(){return r},vU:function(){return i}});var r=function(e){console.log("%c".concat(e),"color:blue; font-weight:bold")},c=function(e){console.log("%c------------------------\n%cSUCCESS%c ".concat(e,"\n------------------------"),"color:green; font-weight:bold","background-color:green; color: white; font-weight:bold","color:green; font-weight:bold")},i=function(e,n){console.log("%c------------------------\n%cAPI ERROR ".concat(e,"%c ").concat(n,"\n------------------------"),"color:red; font-weight:bold","background-color:red; color: white; font-weight:bold","color:red; font-weight:bold")}},6355:function(){},8762:function(e,n,t){e.exports=t.p+"static/media/butterLogo3.0b6d5dd8dba78db3ccd9.png"},1028:function(e,n,t){var r=t(2791);var c=r.forwardRef((function(e,n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:n},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"}))}));n.Z=c},4318:function(e,n,t){var r=t(2791);var c=r.forwardRef((function(e,n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:n},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"}))}));n.Z=c}}]);
//# sourceMappingURL=712.1898248c.chunk.js.map