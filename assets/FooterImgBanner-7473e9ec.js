import{o as i,c as _,r as k,d as b,v as h,a as e,b as n,u as d,F as g,f as l,l as x,m as w,t as p,x as $,h as C,p as S,i as y}from"./index-5b85a7a8.js";const f=(t,o)=>{const a=t.__vccOpts||t;for(const[s,r]of o)a[s]=r;return a},A={},B={class:"layout__main-width"};function I(t,o){return i(),_("section",B,[k(t.$slots,"default")])}const X=f(A,[["render",I]]),m="/img/berg.png",F="/img/main-header__img.jpg",v="/img/logo.svg",L={class:"mobile-menu"},N={class:"logo-container"},q=e("picture",null,[e("img",{src:v})],-1),H={key:0,class:"mobile-menu__background"},K={class:"mobile-menu__list"},E=e("li",{class:"mobile-menu__item"},[e("a",{href:"https://www.google.com/maps/place/Stockev%C3%A4gen+3,+832+96+Fr%C3%B6s%C3%B6n/data=!4m2!3m1!1s0x466fb7a8e0574df3:0x20bf172f27e94663?sa=X&ved=2ahUKEwiCkpXQwuP9AhXPzYsKHXDjAXwQ8gF6BAgKEAI",target:"_blank"}," hitta hit ")],-1),M={__name:"MobileMenu",setup(t){const o=b(!1);return(a,s)=>{const r=h("RouterLink");return i(),_("div",L,[e("div",N,[q,e("button",{onClick:s[0]||(s[0]=()=>o.value=!0)},[n(d(g),{icon:["fas","bars"]})])]),o.value?(i(),_("div",H,[e("button",{class:"mobile-menu__close-btn",onClick:s[1]||(s[1]=()=>o.value=!1)}," x "),e("ul",K,[n(r,{to:{name:"home"},class:"mobile-menu__item"},{default:l(()=>[e("a",{href:"/",onClick:s[2]||(s[2]=()=>o.value=!1)}," start ")]),_:1}),n(r,{to:{name:"home",hash:"#boende"},class:"mobile-menu__item"},{default:l(()=>[e("a",{href:"/",onClick:s[3]||(s[3]=()=>o.value=!1)}," boende ")]),_:1}),n(r,{to:{name:"events"},class:"mobile-menu__item"},{default:l(()=>[e("a",{href:"/events",onClick:s[4]||(s[4]=()=>o.value=!1)}," kalender ")]),_:1}),E])])):x("",!0)])}}},c={__name:"NavItem",props:{text:{type:String,required:!0},goTo:{type:String},toHash:{type:String,required:!1,default:""}},emits:["handleClick"],setup(t){return(o,a)=>{const s=h("RouterLink");return i(),_("li",{class:"header-nav-item",onClick:a[0]||(a[0]=(...r)=>o.handleClick&&o.handleClick(...r))},[n(s,{to:{path:t.goTo,hash:t.toHash}},{default:l(()=>[w(p(t.text),1)]),_:1},8,["to"])])}}},R={class:"header-nav-item header-nav-item__link"},P=["target","href"],Q={__name:"NavLinkItem",props:{text:{type:String,required:!0},aLink:{type:String,required:!0},target:{type:String,required:!1}},setup(t){return(o,a)=>(i(),_("li",R,[e("a",{target:t.target,href:t.aLink},p(t.text),9,P),n(d(g),{icon:"arrow-up-right-from-square"})]))}},V=e("picture",{class:"main-header__img"},[e("img",{src:F,alt:""})],-1),j={class:"header-nav"},D={class:"header-nav__desktop-menu-row"},T={class:"header-nav__logo"},z={class:"header-nav__desktop-menu-row"},oe={__name:"HeaderNav",setup(t){const o=$();return(a,s)=>(i(),_(C,null,[V,n(X,null,{default:l(()=>[e("header",j,[e("ul",D,[n(c,{text:"start","go-to":"/"}),n(c,{text:"vandrarhem","go-to":"/",toHash:"#boende"})]),e("div",T,[e("img",{src:v,alt:"logo",onClick:s[0]||(s[0]=()=>d(o).push({name:"home"}))})]),e("ul",z,[n(c,{text:"kalender","go-to":"/events"}),n(Q,{target:"_blank",text:"hitta hit","a-link":"https://www.google.com/maps/place/Stockev%C3%A4gen+3,+832+96+Fr%C3%B6s%C3%B6n/data=!4m2!3m1!1s0x466fb7a8e0574df3:0x20bf172f27e94663?sa=X&ved=2ahUKEwiCkpXQwuP9AhXPzYsKHXDjAXwQ8gF6BAgKEAI"})])])]),_:1}),n(M)],64))}},U={},u=t=>(S("data-v-ed6b11a3"),t=t(),y(),t),Y=m,O=m,W={id:"footer-img"},G=u(()=>e("source",{media:"(min-width:650px)",srcset:Y},null,-1)),J=u(()=>e("source",{media:"(min-width:465px)",srcset:O},null,-1)),Z=u(()=>e("img",{src:m,alt:"berg"},null,-1)),ee=[G,J,Z];function te(t,o){return i(),_("picture",W,ee)}const ne=f(U,[["render",te],["__scopeId","data-v-ed6b11a3"]]);export{ne as F,X as M,f as _,oe as a};
