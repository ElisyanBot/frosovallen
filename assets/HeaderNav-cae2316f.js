import{o as i,c as l,r as f,d as p,i as u,a as e,b as o,u as c,F as d,f as _,k,l as v,t as h,y as b,h as C}from"./index-d4c51dad.js";const w=(a,s)=>{const n=a.__vccOpts||a;for(const[t,r]of s)n[t]=r;return n},x={},$={class:"layout__main-width"};function y(a,s){return i(),l("section",$,[f(a.$slots,"default")])}const A=w(x,[["render",y]]),D="/img/berg.png",S="/img/main-header__img.jpg",g="/img/logo.svg",X={class:"mobile-menu"},B={class:"logo-container"},L=e("picture",null,[e("img",{src:g})],-1),F={key:0,class:"mobile-menu__background"},N={class:"mobile-menu__list"},q=e("li",{class:"mobile-menu__item"},[e("a",{href:"https://www.google.com/maps/place/Stockev%C3%A4gen+3,+832+96+Fr%C3%B6s%C3%B6n/data=!4m2!3m1!1s0x466fb7a8e0574df3:0x20bf172f27e94663?sa=X&ved=2ahUKEwiCkpXQwuP9AhXPzYsKHXDjAXwQ8gF6BAgKEAI",target:"_blank"}," hitta hit ")],-1),H={__name:"MobileMenu",setup(a){const s=p(!1);return(n,t)=>{const r=u("RouterLink");return i(),l("div",X,[e("div",B,[L,e("button",{onClick:t[0]||(t[0]=()=>s.value=!0)},[o(c(d),{icon:["fas","bars"]})])]),s.value?(i(),l("div",F,[e("button",{class:"mobile-menu__close-btn",onClick:t[1]||(t[1]=()=>s.value=!1)}," x "),e("ul",N,[o(r,{to:{name:"home"},class:"mobile-menu__item"},{default:_(()=>[e("a",{href:"/",onClick:t[2]||(t[2]=()=>s.value=!1)}," start ")]),_:1}),o(r,{to:{name:"home",hash:"#boende"},class:"mobile-menu__item"},{default:_(()=>[e("a",{href:"/",onClick:t[3]||(t[3]=()=>s.value=!1)}," vandrarhem ")]),_:1}),o(r,{to:{name:"events"},class:"mobile-menu__item"},{default:_(()=>[e("a",{href:"/events",onClick:t[4]||(t[4]=()=>s.value=!1)}," kalender ")]),_:1}),q])])):k("",!0)])}}},m={__name:"NavItem",props:{text:{type:String,required:!0},goTo:{type:String},toHash:{type:String,required:!1,default:""}},emits:["handleClick"],setup(a){return(s,n)=>{const t=u("RouterLink");return i(),l("li",{class:"header-nav-item",onClick:n[0]||(n[0]=(...r)=>s.handleClick&&s.handleClick(...r))},[o(t,{to:{path:a.goTo,hash:a.toHash}},{default:_(()=>[v(h(a.text),1)]),_:1},8,["to"])])}}},K={class:"header-nav-item header-nav-item__link"},E=["target","href"],I={__name:"NavLinkItem",props:{text:{type:String,required:!0},aLink:{type:String,required:!0},target:{type:String,required:!1}},setup(a){return(s,n)=>(i(),l("li",K,[e("a",{target:a.target,href:a.aLink},h(a.text),9,E),o(c(d),{icon:"arrow-up-right-from-square"})]))}},M=e("picture",{class:"main-header__img"},[e("img",{src:S,alt:""})],-1),R={class:"header-nav"},P={class:"header-nav__desktop-menu-row"},Q={class:"header-nav__logo"},V={class:"header-nav__desktop-menu-row"},T={__name:"HeaderNav",setup(a){const s=b();return(n,t)=>(i(),l(C,null,[M,o(A,null,{default:_(()=>[e("header",R,[e("ul",P,[o(m,{text:"start","go-to":"/"}),o(m,{text:"vandrarhem","go-to":"/",toHash:"#boende"})]),e("div",Q,[e("img",{src:g,alt:"logo",onClick:t[0]||(t[0]=()=>c(s).push({name:"home"}))})]),e("ul",V,[o(m,{text:"kalender","go-to":"/events"}),o(I,{target:"_blank",text:"hitta hit","a-link":"https://www.google.com/maps/place/Stockev%C3%A4gen+3,+832+96+Fr%C3%B6s%C3%B6n/data=!4m2!3m1!1s0x466fb7a8e0574df3:0x20bf172f27e94663?sa=X&ved=2ahUKEwiCkpXQwuP9AhXPzYsKHXDjAXwQ8gF6BAgKEAI"})])])]),_:1}),o(H)],64))}};export{A as M,w as _,D as a,T as b};
