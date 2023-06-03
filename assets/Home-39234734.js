import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";import{o as w,c as P,r as Me,a as ft,b as v,d as x,t as ge,e as ae,w as Ln,f as ce,g as Q,n as Fn,h as Rn,F as ct,i as Ve,j as ut,k as jn,l as zn,m as ee,p as Dn,q as Bn,u as Yn,s as be,v as he,x as Un}from"./index-e28b54b4.js";const Hn=""+new URL("../img/line-green.svg",import.meta.url).href,Xn=""+new URL("../img/line-green__arrow.svg",import.meta.url).href;const Wn={},Kn={class:"layout__main-width"};function qn(e,t){return w(),P("section",Kn,[Me(e.$slots,"default")])}const mt=Y(Wn,[["render",qn]]);const Gn={class:"info-icon__background"},Vn=["src"],Qn={class:"info-icon__text"},xe={__name:"InfoIcon",props:{bgSrc:{type:String,required:!0},text:{type:String,required:!0},iconClass:{type:String,required:!1}},emits:["handleClick"],setup(e,{emit:t}){const n=()=>{t("handleClick")};return(a,r)=>{const i=ft("FontAwesomeIcon");return w(),P("div",{class:"info-icon",onClick:n},[v("div",Gn,[v("img",{src:e.bgSrc,alt:"info-icon icon background"},null,8,Vn),v("div",null,[x(i,{class:"test",icon:["fas",e.iconClass]},null,8,["icon"])])]),v("div",Qn,[v("p",null,ge(e.text),1)])])}}};const Zn={class:"info-text__container"},Jn=["innerHTML"],ea={__name:"InfoText",props:{headerTxt:{type:String,required:!0},infoTxt:{type:String,required:!0}},setup(e){return(t,n)=>(w(),P("div",Zn,[v("h4",null,ge(e.headerTxt),1),v("span",{innerHTML:e.infoTxt},null,8,Jn)]))}};const ta={},na={class:"info-text__layout"};function aa(e,t){return w(),P("div",na,[Me(e.$slots,"default",{},void 0,!0)])}const ra=Y(ta,[["render",aa],["__scopeId","data-v-f7ffd8ac"]]),ia={cafe:[{headerTxt:"öppettider ",infoTxt:"Café har öppet mellan 23 juni - 20 augusti | kl 12:00 - 17:00"},{headerTxt:"hitta hit",infoTxt:"Stockevägen 3, 832 93 FRÖSÖN <a href='https://www.google.com/maps/place/Stockev%C3%A4gen+3,+832+96+Fr%C3%B6s%C3%B6n/data=!4m2!3m1!1s0x466fb7a8e0574df3:0x20bf172f27e94663?sa=X&ved=2ahUKEwiCkpXQwuP9AhXPzYsKHXDjAXwQ8gF6BAgKEAI'>maps</a>"}],vandrarhem:[{headerTxt:"Boka boende",infoTxt:"<b>073-091 72 49</b> <a href='mailto:info@frosovallen.se'>info@frosovallen.se</a> "},{headerTxt:"Bankgiro | Swish",infoTxt:"818 - 0556 | 123 421 83 27"},{headerTxt:"hitta hit",infoTxt:"Stockevägen 3, 832 93 FRÖSÖN <a href='https://www.google.com/maps/place/Stockev%C3%A4gen+3,+832+96+Fr%C3%B6s%C3%B6n/data=!4m2!3m1!1s0x466fb7a8e0574df3:0x20bf172f27e94663?sa=X&ved=2ahUKEwiCkpXQwuP9AhXPzYsKHXDjAXwQ8gF6BAgKEAI'>maps</a>"}],event:[{headerTxt:"kommande",infoTxt:" hitta kalender på facebook <a href='https://www.facebook.com'>klicka här</a> "},{headerTxt:"Boka lokal",infoTxt:"<b>073-091 72 49</b> <a href='mailto:info@frosovallen.se'>info@frosovallen.se</a> "},{headerTxt:"hitta hit",infoTxt:"Stockevägen 3, 832 93 FRÖSÖN <a href='https://www.google.com/maps/place/Stockev%C3%A4gen+3,+832+96+Fr%C3%B6s%C3%B6n/data=!4m2!3m1!1s0x466fb7a8e0574df3:0x20bf172f27e94663?sa=X&ved=2ahUKEwiCkpXQwuP9AhXPzYsKHXDjAXwQ8gF6BAgKEAI'>maps</a>"}],gudstjänster:[{headerTxt:"söndagar",infoTxt:"detta är ett test <a href='#'>länk</a>"},{headerTxt:"hitta hit",infoTxt:"Stockevägen 3, 832 93 FRÖSÖN <a href='https://www.google.com/maps/place/Stockev%C3%A4gen+3,+832+96+Fr%C3%B6s%C3%B6n/data=!4m2!3m1!1s0x466fb7a8e0574df3:0x20bf172f27e94663?sa=X&ved=2ahUKEwiCkpXQwuP9AhXPzYsKHXDjAXwQ8gF6BAgKEAI'>maps</a>"}]};const oa={class:"icon__container"},sa={class:"info-text__line-animation"},la=v("img",{src:Hn,alt:"animation"},null,-1),fa={__name:"LearnMoreFeature",setup(e){const t=ae("cafe"),n=ae(ia),a=ae(null);return Ln(()=>{t.value==="cafe"&&(a.value=6),t.value==="vandrarhem"&&(a.value=34),t.value==="event"&&(a.value=59.8),t.value==="gudstjänster"&&(a.value=87.1)}),(r,i)=>(w(),ce(mt,null,{default:Q(()=>[v("div",oa,[x(xe,{"bg-src":"/img/learn-more__cafe-img.png",text:"cafe","icon-class":"utensils",onHandleClick:i[0]||(i[0]=()=>t.value="cafe")}),x(xe,{"bg-src":"/img/learn-more__vandrarhem-img.png",text:"vandrarhem","icon-class":"house",onHandleClick:i[1]||(i[1]=()=>t.value="vandrarhem")}),x(xe,{"bg-src":"/img/learn-more__event-img.png",text:"event","icon-class":"calendar",onHandleClick:i[2]||(i[2]=()=>t.value="event")}),x(xe,{"bg-src":"/img/learn-more__gudstjänst-img.png",text:"gudstjänst","icon-class":"church",onHandleClick:i[3]||(i[3]=()=>t.value="gudstjänster")})]),v("div",sa,[la,v("img",{style:Fn({left:a.value+"%"}),class:"line-green__arrow",src:Xn,alt:"animation"},null,4)]),x(ra,null,{default:Q(()=>[(w(!0),P(ct,null,Rn(n.value[t.value],(o,s)=>(w(),ce(ea,{key:s,"header-txt":o.headerTxt,"info-txt":o.infoTxt},null,8,["header-txt","info-txt"]))),128))]),_:1})]),_:1}))}};const ca=""+new URL("../img/frosovallenHouse.png",import.meta.url).href;const ua=v("section",{id:"about-us"},[v("div",{class:"about-us__outer-div"},[v("h2",null,"Frösövallen"),v("div",{class:"about-us__inner-div"},[v("article",{class:"about-us__info-txt"},[v("h3",null,"om oss"),v("p",null," Vivamus orci purus, semper et euismod id, vestibulum ut risus. Morbi diam ante, varius eget lorem et, accumsan sodales dolor. Aliquam sollicitudin nibh quis turpis tincidunt imperdiet. Donec ut volutpat ipsum. Duis posuere diam ut urna pretium, nec eleifend velit. "),v("p",null," Pellentesque. Vestibulum et sagittis nunc, sed bibendum justo. Etiam posuere dui et porta sagittis. Praesent vitae risus ornare, cursus dolor sit amet, aliquet velit. Etiam molestie magna interdum lobortis mollis. Maecenas sem elit, hendrerit nec dolor sed. ")]),v("div",{class:"about-us__img-container"},[v("img",{src:ca,alt:"bild på försvallen"})])]),v("div",{class:"about-us__background-shape"})])],-1),ma={__name:"AboutUs",setup(e){return(t,n)=>(w(),ce(mt,null,{default:Q(()=>[ua]),_:1}))}},da=""+new URL("../img/main-header__img.jpg",import.meta.url).href,tn=""+new URL("../img/logo.svg",import.meta.url).href;const va={class:"mobile-menu"},pa={class:"logo-container"},ga=v("picture",null,[v("img",{src:tn})],-1),ba=v("i",{class:"fa-solid fa-bars"},null,-1),ha=[ba],ya={key:0,class:"mobile-menu__background"},_a=ut('<ul class="mobile-menu__list"><li class="mobile-menu__item"><a href="/"> cafe </a></li><li class="mobile-menu__item"><a href="/events"> evenemang </a></li><li class="mobile-menu__item"><a href="#" target="_blank"> hitta hit </a></li></ul>',1),ka={__name:"MobileMenu",setup(e){const t=ae(!1);return(n,a)=>(w(),P("div",va,[v("div",pa,[ga,v("button",{onClick:a[0]||(a[0]=()=>t.value=!0)},ha)]),t.value?(w(),P("div",ya,[v("button",{class:"mobile-menu__close-btn",onClick:a[1]||(a[1]=()=>t.value=!1)}," x "),_a])):Ve("",!0)]))}},Ct={__name:"NavItem",props:{text:{type:String,required:!0},goTo:{type:String}},emits:["handleClick"],setup(e){return(t,n)=>{const a=ft("RouterLink");return w(),P("li",{class:"header-nav-item",onClick:n[0]||(n[0]=(...r)=>t.handleClick&&t.handleClick(...r))},[x(a,{to:{path:e.goTo}},{default:Q(()=>[jn(ge(e.text),1)]),_:1},8,["to"])])}}};function Ot(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ot(Object(n),!0).forEach(function(a){O(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ot(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Le(e){"@babel/helpers - typeof";return Le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Le(e)}function xa(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Pt(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function wa(e,t,n){return t&&Pt(e.prototype,t),n&&Pt(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function dt(e,t){return Sa(e)||Oa(e,t)||nn(e,t)||Ia()}function ye(e){return Aa(e)||Ca(e)||nn(e)||Pa()}function Aa(e){if(Array.isArray(e))return Qe(e)}function Sa(e){if(Array.isArray(e))return e}function Ca(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Oa(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(e);!(r=(o=n.next()).done)&&(a.push(o.value),!(t&&a.length===t));r=!0);}catch(l){i=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function nn(e,t){if(e){if(typeof e=="string")return Qe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qe(e,t)}}function Qe(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Pa(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ia(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var It=function(){},vt={},an={},rn=null,on={mark:It,measure:It};try{typeof window<"u"&&(vt=window),typeof document<"u"&&(an=document),typeof MutationObserver<"u"&&(rn=MutationObserver),typeof performance<"u"&&(on=performance)}catch{}var Ea=vt.navigator||{},Et=Ea.userAgent,Tt=Et===void 0?"":Et,W=vt,k=an,Nt=rn,we=on;W.document;var U=!!k.documentElement&&!!k.head&&typeof k.addEventListener=="function"&&typeof k.createElement=="function",sn=~Tt.indexOf("MSIE")||~Tt.indexOf("Trident/"),Ae,Se,Ce,Oe,Pe,z="___FONT_AWESOME___",Ze=16,ln="fa",fn="svg-inline--fa",Z="data-fa-i2svg",Je="data-fa-pseudo-element",Ta="data-fa-pseudo-element-pending",pt="data-prefix",gt="data-icon",$t="fontawesome-i2svg",Na="async",$a=["HTML","HEAD","STYLE","SCRIPT"],cn=function(){try{return!0}catch{return!1}}(),_="classic",A="sharp",bt=[_,A];function _e(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[_]}})}var ue=_e((Ae={},O(Ae,_,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),O(Ae,A,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Ae)),me=_e((Se={},O(Se,_,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),O(Se,A,{solid:"fass",regular:"fasr",light:"fasl"}),Se)),de=_e((Ce={},O(Ce,_,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),O(Ce,A,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Ce)),Ma=_e((Oe={},O(Oe,_,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),O(Oe,A,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Oe)),La=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,un="fa-layers-text",Fa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ra=_e((Pe={},O(Pe,_,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),O(Pe,A,{900:"fass",400:"fasr",300:"fasl"}),Pe)),mn=[1,2,3,4,5,6,7,8,9,10],ja=mn.concat([11,12,13,14,15,16,17,18,19,20]),za=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],G={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ve=new Set;Object.keys(me[_]).map(ve.add.bind(ve));Object.keys(me[A]).map(ve.add.bind(ve));var Da=[].concat(bt,ye(ve),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",G.GROUP,G.SWAP_OPACITY,G.PRIMARY,G.SECONDARY]).concat(mn.map(function(e){return"".concat(e,"x")})).concat(ja.map(function(e){return"w-".concat(e)})),le=W.FontAwesomeConfig||{};function Ba(e){var t=k.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ya(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(k&&typeof k.querySelector=="function"){var Ua=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ua.forEach(function(e){var t=dt(e,2),n=t[0],a=t[1],r=Ya(Ba(n));r!=null&&(le[a]=r)})}var dn={styleDefault:"solid",familyDefault:"classic",cssPrefix:ln,replacementClass:fn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};le.familyPrefix&&(le.cssPrefix=le.familyPrefix);var ie=u(u({},dn),le);ie.autoReplaceSvg||(ie.observeMutations=!1);var m={};Object.keys(dn).forEach(function(e){Object.defineProperty(m,e,{enumerable:!0,set:function(n){ie[e]=n,fe.forEach(function(a){return a(m)})},get:function(){return ie[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){ie.cssPrefix=t,fe.forEach(function(n){return n(m)})},get:function(){return ie.cssPrefix}});W.FontAwesomeConfig=m;var fe=[];function Ha(e){return fe.push(e),function(){fe.splice(fe.indexOf(e),1)}}var X=Ze,R={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Xa(e){if(!(!e||!U)){var t=k.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=k.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return k.head.insertBefore(t,a),e}}var Wa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function pe(){for(var e=12,t="";e-- >0;)t+=Wa[Math.random()*62|0];return t}function oe(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ht(e){return e.classList?oe(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function vn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ka(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(vn(e[n]),'" ')},"").trim()}function ze(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function yt(e){return e.size!==R.size||e.x!==R.x||e.y!==R.y||e.rotate!==R.rotate||e.flipX||e.flipY}function qa(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:c}}function Ga(e){var t=e.transform,n=e.width,a=n===void 0?Ze:n,r=e.height,i=r===void 0?Ze:r,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&sn?l+="translate(".concat(t.x/X-a/2,"em, ").concat(t.y/X-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/X,"em), calc(-50% + ").concat(t.y/X,"em)) "):l+="translate(".concat(t.x/X,"em, ").concat(t.y/X,"em) "),l+="scale(".concat(t.size/X*(t.flipX?-1:1),", ").concat(t.size/X*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Va=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function pn(){var e=ln,t=fn,n=m.cssPrefix,a=m.replacementClass,r=Va;if(n!==e||a!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var Mt=!1;function Xe(){m.autoAddCss&&!Mt&&(Xa(pn()),Mt=!0)}var Qa={mixout:function(){return{dom:{css:pn,insertCss:Xe}}},hooks:function(){return{beforeDOMElementCreation:function(){Xe()},beforeI2svg:function(){Xe()}}}},D=W||{};D[z]||(D[z]={});D[z].styles||(D[z].styles={});D[z].hooks||(D[z].hooks={});D[z].shims||(D[z].shims=[]);var L=D[z],gn=[],Za=function e(){k.removeEventListener("DOMContentLoaded",e),Fe=1,gn.map(function(t){return t()})},Fe=!1;U&&(Fe=(k.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(k.readyState),Fe||k.addEventListener("DOMContentLoaded",Za));function Ja(e){U&&(Fe?setTimeout(e,0):gn.push(e))}function ke(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?vn(e):"<".concat(t," ").concat(Ka(a),">").concat(i.map(ke).join(""),"</").concat(t,">")}function Lt(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var er=function(t,n){return function(a,r,i,o){return t.call(n,a,r,i,o)}},We=function(t,n,a,r){var i=Object.keys(t),o=i.length,s=r!==void 0?er(n,r):n,l,c,f;for(a===void 0?(l=1,f=t[i[0]]):(l=0,f=a);l<o;l++)c=i[l],f=s(f,t[c],c,t);return f};function tr(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function et(e){var t=tr(e);return t.length===1?t[0].toString(16):null}function nr(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Ft(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function tt(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Ft(t);typeof L.hooks.addPack=="function"&&!r?L.hooks.addPack(e,Ft(t)):L.styles[e]=u(u({},L.styles[e]||{}),i),e==="fas"&&tt("fa",t)}var Ie,Ee,Te,te=L.styles,ar=L.shims,rr=(Ie={},O(Ie,_,Object.values(de[_])),O(Ie,A,Object.values(de[A])),Ie),_t=null,bn={},hn={},yn={},_n={},kn={},ir=(Ee={},O(Ee,_,Object.keys(ue[_])),O(Ee,A,Object.keys(ue[A])),Ee);function or(e){return~Da.indexOf(e)}function sr(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!or(r)?r:null}var xn=function(){var t=function(i){return We(te,function(o,s,l){return o[l]=We(s,i,{}),o},{})};bn=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),hn=t(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),kn=t(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in te||m.autoFetchSvg,a=We(ar,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});yn=a.names,_n=a.unicodes,_t=De(m.styleDefault,{family:m.familyDefault})};Ha(function(e){_t=De(e.styleDefault,{family:m.familyDefault})});xn();function kt(e,t){return(bn[e]||{})[t]}function lr(e,t){return(hn[e]||{})[t]}function V(e,t){return(kn[e]||{})[t]}function wn(e){return yn[e]||{prefix:null,iconName:null}}function fr(e){var t=_n[e],n=kt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function K(){return _t}var xt=function(){return{prefix:null,iconName:null,rest:[]}};function De(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,a=n===void 0?_:n,r=ue[a][e],i=me[a][e]||me[a][r],o=e in L.styles?e:null;return i||o||null}var Rt=(Te={},O(Te,_,Object.keys(de[_])),O(Te,A,Object.keys(de[A])),Te);function Be(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(t={},O(t,_,"".concat(m.cssPrefix,"-").concat(_)),O(t,A,"".concat(m.cssPrefix,"-").concat(A)),t),o=null,s=_;(e.includes(i[_])||e.some(function(c){return Rt[_].includes(c)}))&&(s=_),(e.includes(i[A])||e.some(function(c){return Rt[A].includes(c)}))&&(s=A);var l=e.reduce(function(c,f){var d=sr(m.cssPrefix,f);if(te[f]?(f=rr[s].includes(f)?Ma[s][f]:f,o=f,c.prefix=f):ir[s].indexOf(f)>-1?(o=f,c.prefix=De(f,{family:s})):d?c.iconName=d:f!==m.replacementClass&&f!==i[_]&&f!==i[A]&&c.rest.push(f),!r&&c.prefix&&c.iconName){var b=o==="fa"?wn(c.iconName):{},h=V(c.prefix,c.iconName);b.prefix&&(o=null),c.iconName=b.iconName||h||c.iconName,c.prefix=b.prefix||c.prefix,c.prefix==="far"&&!te.far&&te.fas&&!m.autoFetchSvg&&(c.prefix="fas")}return c},xt());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===A&&(te.fass||m.autoFetchSvg)&&(l.prefix="fass",l.iconName=V(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=K()||"fas"),l}var cr=function(){function e(){xa(this,e),this.definitions={}}return wa(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=u(u({},n.definitions[s]||{}),o[s]),tt(s,o[s]);var l=de[_][s];l&&tt(l,o[s]),xn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][l]=c}),n}}]),e}(),jt=[],ne={},re={},ur=Object.keys(re);function mr(e,t){var n=t.mixoutsTo;return jt=e,ne={},Object.keys(re).forEach(function(a){ur.indexOf(a)===-1&&delete re[a]}),jt.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Le(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){ne[o]||(ne[o]=[]),ne[o].push(i[o])})}a.provides&&a.provides(re)}),n}function nt(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=ne[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(a))}),t}function J(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=ne[e]||[];r.forEach(function(i){i.apply(null,n)})}function B(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return re[e]?re[e].apply(null,t):void 0}function at(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||K();if(t)return t=V(n,t)||t,Lt(An.definitions,n,t)||Lt(L.styles,n,t)}var An=new cr,dr=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,J("noAuto")},vr={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return U?(J("beforeI2svg",t),B("pseudoElements2svg",t),B("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Ja(function(){gr({autoReplaceSvgRoot:n}),J("watch",t)})}},pr={icon:function(t){if(t===null)return null;if(Le(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:V(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=De(t[0]);return{prefix:a,iconName:V(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(La))){var r=Be(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||K(),iconName:V(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=K();return{prefix:i,iconName:V(i,t)||t}}}},$={noAuto:dr,config:m,dom:vr,parse:pr,library:An,findIconDefinition:at,toHtml:ke},gr=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?k:n;(Object.keys(L.styles).length>0||m.autoFetchSvg)&&U&&m.autoReplaceSvg&&$.dom.i2svg({node:a})};function Ye(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return ke(a)})}}),Object.defineProperty(e,"node",{get:function(){if(U){var a=k.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function br(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(yt(o)&&n.found&&!a.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};r.style=ze(u(u({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function hr(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:a}]}]}function wt(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,d=e.extra,b=e.watchable,h=b===void 0?!1:b,I=a.found?a:n,E=I.width,T=I.height,p=r==="fak",g=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(H){return d.classes.indexOf(H)===-1}).filter(function(H){return H!==""||!!H}).concat(d.classes).join(" "),y={children:[],attributes:u(u({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:g,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(T)})},S=p&&!~d.classes.indexOf("fa-fw")?{width:"".concat(E/T*16*.0625,"em")}:{};h&&(y.attributes[Z]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(f||pe())},children:[l]}),delete y.attributes.title);var C=u(u({},y),{},{prefix:r,iconName:i,main:n,mask:a,maskId:c,transform:o,symbol:s,styles:u(u({},S),d.styles)}),F=a.found&&n.found?B("generateAbstractMask",C)||{children:[],attributes:{}}:B("generateAbstractIcon",C)||{children:[],attributes:{}},M=F.children,He=F.attributes;return C.children=M,C.attributes=He,s?hr(C):br(C)}function zt(e){var t=e.content,n=e.width,a=e.height,r=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[Z]="");var f=u({},o.styles);yt(r)&&(f.transform=Ga({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);var d=ze(f);d.length>0&&(c.style=d);var b=[];return b.push({tag:"span",attributes:c,children:[t]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function yr(e){var t=e.content,n=e.title,a=e.extra,r=u(u(u({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=ze(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ke=L.styles;function rt(e){var t=e[0],n=e[1],a=e.slice(4),r=dt(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(G.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(G.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(G.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var _r={found:!1,width:512,height:512};function kr(e,t){!cn&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function it(e,t){var n=t;return t==="fa"&&m.styleDefault!==null&&(t=K()),new Promise(function(a,r){if(B("missingIconAbstract"),n==="fa"){var i=wn(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ke[t]&&Ke[t][e]){var o=Ke[t][e];return a(rt(o))}kr(e,t),a(u(u({},_r),{},{icon:m.showMissingIcons&&e?B("missingIconAbstract")||{}:{}}))})}var Dt=function(){},ot=m.measurePerformance&&we&&we.mark&&we.measure?we:{mark:Dt,measure:Dt},se='FA "6.4.0"',xr=function(t){return ot.mark("".concat(se," ").concat(t," begins")),function(){return Sn(t)}},Sn=function(t){ot.mark("".concat(se," ").concat(t," ends")),ot.measure("".concat(se," ").concat(t),"".concat(se," ").concat(t," begins"),"".concat(se," ").concat(t," ends"))},At={begin:xr,end:Sn},Ne=function(){};function Bt(e){var t=e.getAttribute?e.getAttribute(Z):null;return typeof t=="string"}function wr(e){var t=e.getAttribute?e.getAttribute(pt):null,n=e.getAttribute?e.getAttribute(gt):null;return t&&n}function Ar(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function Sr(){if(m.autoReplaceSvg===!0)return $e.replace;var e=$e[m.autoReplaceSvg];return e||$e.replace}function Cr(e){return k.createElementNS("http://www.w3.org/2000/svg",e)}function Or(e){return k.createElement(e)}function Cn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?Cr:Or:n;if(typeof e=="string")return k.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(Cn(o,{ceFn:a}))}),r}function Pr(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var $e={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(Cn(r),n)}),n.getAttribute(Z)===null&&m.keepOriginalSource){var a=k.createComment(Pr(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~ht(n).indexOf(m.replacementClass))return $e.replace(t);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return ke(s)}).join(`
`);n.setAttribute(Z,""),n.innerHTML=o}};function Yt(e){e()}function On(e,t){var n=typeof t=="function"?t:Ne;if(e.length===0)n();else{var a=Yt;m.mutateApproach===Na&&(a=W.requestAnimationFrame||Yt),a(function(){var r=Sr(),i=At.begin("mutate");e.map(r),i(),n()})}}var St=!1;function Pn(){St=!0}function st(){St=!1}var Re=null;function Ut(e){if(Nt&&m.observeMutations){var t=e.treeCallback,n=t===void 0?Ne:t,a=e.nodeCallback,r=a===void 0?Ne:a,i=e.pseudoElementsCallback,o=i===void 0?Ne:i,s=e.observeMutationsRoot,l=s===void 0?k:s;Re=new Nt(function(c){if(!St){var f=K();oe(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Bt(d.addedNodes[0])&&(m.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Bt(d.target)&&~za.indexOf(d.attributeName))if(d.attributeName==="class"&&wr(d.target)){var b=Be(ht(d.target)),h=b.prefix,I=b.iconName;d.target.setAttribute(pt,h||f),I&&d.target.setAttribute(gt,I)}else Ar(d.target)&&r(d.target)})}}),U&&Re.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ir(){Re&&Re.disconnect()}function Er(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Tr(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=Be(ht(e));return r.prefix||(r.prefix=K()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=lr(r.prefix,e.innerText)||kt(r.prefix,et(e.innerText))),!r.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Nr(e){var t=oe(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return m.autoA11y&&(n?t["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||pe()):(t["aria-hidden"]="true",t.focusable="false")),t}function $r(){return{iconName:null,title:null,titleId:null,prefix:null,transform:R,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ht(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Tr(e),a=n.iconName,r=n.prefix,i=n.rest,o=Nr(e),s=nt("parseNodeAttributes",{},e),l=t.styleParser?Er(e):[];return u({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:R,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Mr=L.styles;function In(e){var t=m.autoReplaceSvg==="nest"?Ht(e,{styleParser:!1}):Ht(e);return~t.extra.classes.indexOf(un)?B("generateLayersText",e,t):B("generateSvgReplacementMutation",e,t)}var q=new Set;bt.map(function(e){q.add("fa-".concat(e))});Object.keys(ue[_]).map(q.add.bind(q));Object.keys(ue[A]).map(q.add.bind(q));q=ye(q);function Xt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!U)return Promise.resolve();var n=k.documentElement.classList,a=function(d){return n.add("".concat($t,"-").concat(d))},r=function(d){return n.remove("".concat($t,"-").concat(d))},i=m.autoFetchSvg?q:bt.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Mr));i.includes("fa")||i.push("fa");var o=[".".concat(un,":not([").concat(Z,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(Z,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=oe(e.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=At.begin("onTree"),c=s.reduce(function(f,d){try{var b=In(d);b&&f.push(b)}catch(h){cn||h.name==="MissingIcon"&&console.error(h)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(b){On(b,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(b){l(),d(b)})})}function Lr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;In(e).then(function(n){n&&On([n],t)})}function Fr(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:at(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:at(r||{})),e(a,u(u({},n),{},{mask:r}))}}var Rr=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?R:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,d=n.title,b=d===void 0?null:d,h=n.titleId,I=h===void 0?null:h,E=n.classes,T=E===void 0?[]:E,p=n.attributes,g=p===void 0?{}:p,y=n.styles,S=y===void 0?{}:y;if(t){var C=t.prefix,F=t.iconName,M=t.icon;return Ye(u({type:"icon"},t),function(){return J("beforeDOMElementCreation",{iconDefinition:t,params:n}),m.autoA11y&&(b?g["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(I||pe()):(g["aria-hidden"]="true",g.focusable="false")),wt({icons:{main:rt(M),mask:l?rt(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:F,transform:u(u({},R),r),symbol:o,title:b,maskId:f,titleId:I,extra:{attributes:g,styles:S,classes:T}})})}},jr={mixout:function(){return{icon:Fr(Rr)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Xt,n.nodeCallback=Lr,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?k:a,i=n.callback,o=i===void 0?function(){}:i;return Xt(r,o)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,l=a.transform,c=a.symbol,f=a.mask,d=a.maskId,b=a.extra;return new Promise(function(h,I){Promise.all([it(r,s),f.iconName?it(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var T=dt(E,2),p=T[0],g=T[1];h([n,wt({icons:{main:p,mask:g},prefix:s,iconName:r,transform:l,symbol:c,maskId:d,title:i,titleId:o,extra:b,watchable:!0})])}).catch(I)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,l=ze(s);l.length>0&&(r.style=l);var c;return yt(o)&&(c=B("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(c||i.icon),{children:a,attributes:r}}}},zr={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Ye({type:"layer"},function(){J("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(ye(i)).join(" ")},children:o}]})}}}},Dr={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,c=l===void 0?{}:l,f=a.styles,d=f===void 0?{}:f;return Ye({type:"counter",content:n},function(){return J("beforeDOMElementCreation",{content:n,params:a}),yr({content:n.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(ye(s))}})})}}}},Br={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?R:r,o=a.title,s=o===void 0?null:o,l=a.classes,c=l===void 0?[]:l,f=a.attributes,d=f===void 0?{}:f,b=a.styles,h=b===void 0?{}:b;return Ye({type:"text",content:n},function(){return J("beforeDOMElementCreation",{content:n,params:a}),zt({content:n,transform:u(u({},R),i),title:s,extra:{attributes:d,styles:h,classes:["".concat(m.cssPrefix,"-layers-text")].concat(ye(c))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,l=null;if(sn){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return m.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,zt({content:n.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},Yr=new RegExp('"',"ug"),Wt=[1105920,1112319];function Ur(e){var t=e.replace(Yr,""),n=nr(t,0),a=n>=Wt[0]&&n<=Wt[1],r=t.length===2?t[0]===t[1]:!1;return{value:et(r?t[0]:t),isSecondary:a||r}}function Kt(e,t){var n="".concat(Ta).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var i=oe(e.children),o=i.filter(function(M){return M.getAttribute(Je)===t})[0],s=W.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Fa),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),a();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),b=~["Sharp"].indexOf(l[2])?A:_,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?me[b][l[2].toLowerCase()]:Ra[b][c],I=Ur(d),E=I.value,T=I.isSecondary,p=l[0].startsWith("FontAwesome"),g=kt(h,E),y=g;if(p){var S=fr(E);S.iconName&&S.prefix&&(g=S.iconName,h=S.prefix)}if(g&&!T&&(!o||o.getAttribute(pt)!==h||o.getAttribute(gt)!==y)){e.setAttribute(n,y),o&&e.removeChild(o);var C=$r(),F=C.extra;F.attributes[Je]=t,it(g,h).then(function(M){var He=wt(u(u({},C),{},{icons:{main:M,mask:xt()},prefix:h,iconName:y,extra:F,watchable:!0})),H=k.createElement("svg");t==="::before"?e.insertBefore(H,e.firstChild):e.appendChild(H),H.outerHTML=He.map(function(Mn){return ke(Mn)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Hr(e){return Promise.all([Kt(e,"::before"),Kt(e,"::after")])}function Xr(e){return e.parentNode!==document.head&&!~$a.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Je)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function qt(e){if(U)return new Promise(function(t,n){var a=oe(e.querySelectorAll("*")).filter(Xr).map(Hr),r=At.begin("searchPseudoElements");Pn(),Promise.all(a).then(function(){r(),st(),t()}).catch(function(){r(),st(),n()})})}var Wr={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=qt,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?k:a;m.searchPseudoElements&&qt(r)}}},Gt=!1,Kr={mixout:function(){return{dom:{unwatch:function(){Pn(),Gt=!0}}}},hooks:function(){return{bootstrap:function(){Ut(nt("mutationObserverCallbacks",{}))},noAuto:function(){Ir()},watch:function(n){var a=n.observeMutationsRoot;Gt?st():Ut(nt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Vt=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},qr={mixout:function(){return{parse:{transform:function(n){return Vt(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Vt(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(f)},b={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:d,path:b};return{tag:"g",attributes:u({},h.outer),children:[{tag:"g",attributes:u({},h.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),h.path)}]}]}}}},qe={x:0,y:0,width:"100%",height:"100%"};function Qt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Gr(e){return e.tag==="g"?e.children:[e]}var Vr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?Be(r.split(" ").map(function(o){return o.trim()})):xt();return i.prefix||(i.prefix=K()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,d=o.width,b=o.icon,h=qa({transform:l,containerWidth:d,iconWidth:c}),I={tag:"rect",attributes:u(u({},qe),{},{fill:"white"})},E=f.children?{children:f.children.map(Qt)}:{},T={tag:"g",attributes:u({},h.inner),children:[Qt(u({tag:f.tag,attributes:u(u({},f.attributes),h.path)},E))]},p={tag:"g",attributes:u({},h.outer),children:[T]},g="mask-".concat(s||pe()),y="clip-".concat(s||pe()),S={tag:"mask",attributes:u(u({},qe),{},{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,p]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:Gr(b)},S]};return a.push(C,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(g,")")},qe)}),{children:a,attributes:r}}}},Qr={provides:function(t){var n=!1;W.matchMedia&&(n=W.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Zr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Jr=[Qa,jr,zr,Dr,Br,Wr,Kr,qr,Vr,Qr,Zr];mr(Jr,{mixoutsTo:$});$.noAuto;$.config;$.library;$.dom;var lt=$.parse;$.findIconDefinition;$.toHtml;var ei=$.icon;$.layer;$.text;$.counter;function Zt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zt(Object(n),!0).forEach(function(a){N(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zt(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function je(e){"@babel/helpers - typeof";return je=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},je(e)}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ti(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function ni(e,t){if(e==null)return{};var n=ti(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var ai=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},En={exports:{}};(function(e){(function(t){var n=function(p,g,y){if(!c(g)||d(g)||b(g)||h(g)||l(g))return g;var S,C=0,F=0;if(f(g))for(S=[],F=g.length;C<F;C++)S.push(n(p,g[C],y));else{S={};for(var M in g)Object.prototype.hasOwnProperty.call(g,M)&&(S[p(M,y)]=n(p,g[M],y))}return S},a=function(p,g){g=g||{};var y=g.separator||"_",S=g.split||/(?=[A-Z])/;return p.split(S).join(y)},r=function(p){return I(p)?p:(p=p.replace(/[\-_\s]+(.)?/g,function(g,y){return y?y.toUpperCase():""}),p.substr(0,1).toLowerCase()+p.substr(1))},i=function(p){var g=r(p);return g.substr(0,1).toUpperCase()+g.substr(1)},o=function(p,g){return a(p,g).toLowerCase()},s=Object.prototype.toString,l=function(p){return typeof p=="function"},c=function(p){return p===Object(p)},f=function(p){return s.call(p)=="[object Array]"},d=function(p){return s.call(p)=="[object Date]"},b=function(p){return s.call(p)=="[object RegExp]"},h=function(p){return s.call(p)=="[object Boolean]"},I=function(p){return p=p-0,p===p},E=function(p,g){var y=g&&"process"in g?g.process:g;return typeof y!="function"?p:function(S,C){return y(S,p,C)}},T={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(p,g){return n(E(r,g),p)},decamelizeKeys:function(p,g){return n(E(o,g),p,g)},pascalizeKeys:function(p,g){return n(E(i,g),p)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=T:t.humps=T})(ai)})(En);var ri=En.exports,ii=["class","style"];function oi(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=ri.camelize(n.slice(0,a)),i=n.slice(a+1).trim();return t[r]=i,t},{})}function si(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Tn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(l){return Tn(l)}),r=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.class=si(f);break;case"style":l.style=oi(f);break;default:l.attrs[c]=f}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=ni(n,ii);return Bn(e.tag,j(j(j({},t),{},{class:r.class,style:j(j({},r.style),o)},r.attrs),s),a)}var Nn=!1;try{Nn=!0}catch{}function li(){if(!Nn&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ge(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?N({},e,t):{}}function fi(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},N(t,"fa-".concat(e.size),e.size!==null),N(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),N(t,"fa-pull-".concat(e.pull),e.pull!==null),N(t,"fa-swap-opacity",e.swapOpacity),N(t,"fa-bounce",e.bounce),N(t,"fa-shake",e.shake),N(t,"fa-beat",e.beat),N(t,"fa-fade",e.fade),N(t,"fa-beat-fade",e.beatFade),N(t,"fa-flash",e.flash),N(t,"fa-spin-pulse",e.spinPulse),N(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function Jt(e){if(e&&je(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(lt.icon)return lt.icon(e);if(e===null)return null;if(je(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var ci=zn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var a=n.attrs,r=ee(function(){return Jt(t.icon)}),i=ee(function(){return Ge("classes",fi(t))}),o=ee(function(){return Ge("transform",typeof t.transform=="string"?lt.transform(t.transform):t.transform)}),s=ee(function(){return Ge("mask",Jt(t.mask))}),l=ee(function(){return ei(r.value,j(j(j(j({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Dn(l,function(f){if(!f)return li("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var c=ee(function(){return l.value?Tn(l.value.abstract[0],{},a):null});return function(){return c.value}}});const ui={class:"header-nav-item header-nav-item__link"},mi=["target","href"],en={__name:"NavLinkItem",props:{text:{type:String,required:!0},aLink:{type:String,required:!0},target:{type:String,required:!1}},setup(e){return(t,n)=>(w(),P("li",ui,[v("a",{target:e.target,href:e.aLink},ge(e.text),9,mi),x(Yn(ci),{icon:"arrow-up-right-from-square"})]))}};const di=v("picture",{class:"main-header__img"},[v("img",{src:da,alt:""})],-1),vi={class:"header-nav"},pi={class:"header-nav__desktop-menu-row"},gi=v("div",{class:"header-nav__logo"},[v("img",{src:tn,alt:"logo"})],-1),bi={class:"header-nav__desktop-menu-row"},hi={__name:"HeaderNav",setup(e){return(t,n)=>(w(),P(ct,null,[di,x(mt,null,{default:Q(()=>[v("header",vi,[v("ul",pi,[x(Ct,{text:"cafe","go-to":"/"}),x(Ct,{text:"events","go-to":"/events"})]),gi,v("ul",bi,[x(en,{text:"evenemang","a-link":"/events"}),x(en,{target:"_blank",text:"hitta hit","a-link":"https://facebook.com"})])])]),_:1}),x(ka)],64))}},yi=""+new URL("../img/boka-boende.png",import.meta.url).href;const Ue=e=>(be("data-v-35938709"),e=e(),he(),e),_i={class:"book-cta"},ki=Ue(()=>v("picture",null,[v("img",{src:yi})],-1)),xi=Ue(()=>v("div",{class:"book-cta__green-background"},null,-1)),wi={class:"book-cta__text-container"},Ai=Ue(()=>v("h2",null," bo på frösövallen ",-1)),Si=Ue(()=>v("h3",null," vandrarhem ",-1)),Ci={__name:"BookCta",emits:["bookRoomAction"],setup(e){return(t,n)=>(w(),P("section",_i,[ki,xi,v("div",wi,[Ai,Si,v("button",{onClick:n[0]||(n[0]=a=>t.$emit("bookRoomAction"))}," boka rum här ")])]))}},Oi=Y(Ci,[["__scopeId","data-v-35938709"]]);const Pi={},Ii=e=>(be("data-v-5f57051d"),e=e(),he(),e),Ei={class:"book-room__bottom-divider"},Ti=Ii(()=>v("div",{class:"divider__green-corner"},null,-1)),Ni=[Ti];function $i(e,t){return w(),P("div",Ei,Ni)}const Mi=Y(Pi,[["render",$i],["__scopeId","data-v-5f57051d"]]);const Li={},Fi=e=>(be("data-v-516eb3d1"),e=e(),he(),e),Ri={class:"book-room__upper-divider"},ji=Fi(()=>v("div",{class:"divider__green-corner"},null,-1)),zi=[ji];function Di(e,t){return w(),P("div",Ri,zi)}const Bi=Y(Li,[["render",Di],["__scopeId","data-v-516eb3d1"]]);const Yi={class:"book-room__display-rooms"},Ui={class:"display-rooms__green-section"},Hi=ut('<div class="green-section__text-container" data-v-a9c9d273><h3 data-v-a9c9d273> våra rum </h3><div class="info-text" data-v-a9c9d273><p data-v-a9c9d273> Frösövallens vandrarhem erbjuder två- eller fyrbäddsrum i enkel standard. </p><p data-v-a9c9d273> Totalt finns tjugosex bäddar i åtta rum. </p><p data-v-a9c9d273> I närliggande servicehus finns toaletter, dusch, tvättmaskin och ett välutrustat kök för självhushåll. </p></div><div class="price-info" data-v-a9c9d273><div class="header" data-v-a9c9d273><h4 data-v-a9c9d273> pris </h4><div class="divider" data-v-a9c9d273></div></div><div class="content" data-v-a9c9d273><p data-v-a9c9d273><b data-v-a9c9d273>vuxna</b><span data-v-a9c9d273>270 kr</span></p><p data-v-a9c9d273><b data-v-a9c9d273>barn 6-15 år</b><span data-v-a9c9d273>100 kr</span></p><p data-v-a9c9d273><b data-v-a9c9d273>husvagn</b><span data-v-a9c9d273>250 kr</span></p><p data-v-a9c9d273><b data-v-a9c9d273>tältplats</b><span data-v-a9c9d273>195 kr </span></p></div></div></div>',1),Xi={__name:"DisplayRooms",props:{rooms:Array},setup(e){return(t,n)=>{const a=ft("RoomCards");return w(),P("section",Yi,[v("div",Ui,[Hi,x(a,{rooms:e.rooms},null,8,["rooms"])])])}}},Wi=Y(Xi,[["__scopeId","data-v-a9c9d273"]]);const Ki={},qi=e=>(be("data-v-6482e03d"),e=e(),he(),e),Gi={class:"book-room-form__focus"},Vi={class:"book-room-form__header"},Qi=qi(()=>v("h2",null," boka boende ",-1)),Zi=ut('<div class="text-info" data-v-6482e03d><p data-v-6482e03d> Tack för att du vill boka boende hos försövallen, skicka gärna ett mail eller hör av er på telefon vid bokning av boende. Vårat kontor har öppet: <b data-v-6482e03d> 05:00 - 16:00 </b> varje vardag. </p><h3 class="book-room-form__second-header" data-v-6482e03d> Kontaktuppgifter </h3><p class="book-room-form__info-text" data-v-6482e03d><b data-v-6482e03d> Mailadress: </b> <a href="mailto:info@frosovallen.se" data-v-6482e03d> info@frosovallen.se</a></p><p class="book-room-form__info-text" data-v-6482e03d><b data-v-6482e03d> telefon: </b> <a data-v-6482e03d> 070-0000000 </a></p></div>',1);function Ji(e,t){return w(),P("div",Gi,[v("form",{class:"book-room-form",onSubmit:t[1]||(t[1]=Un((...n)=>e.reserve&&e.reserve(...n),["prevent"]))},[v("div",Vi,[Qi,v("button",{onClick:t[0]||(t[0]=n=>e.$emit("closeBookForm"))}," x ")]),Zi],32)])}const eo=Y(Ki,[["render",Ji],["__scopeId","data-v-6482e03d"]]);const to={class:"model model--small"},no={class:"model__header"},ao={class:"model__body"},ro={class:"model__btns"},io={__name:"Model",props:{title:{type:String,required:!0}},emits:["closeModel"],setup(e){return(t,n)=>(w(),P("section",{class:"model__focus-background",onClick:n[0]||(n[0]=a=>t.$emit("closeModel"))},[v("div",to,[v("div",no,[v("h3",null,ge(e.title),1)]),v("div",ao,[Me(t.$slots,"default",{},void 0,!0)]),v("div",ro,[Me(t.$slots,"btns",{},void 0,!0)])])]))}},oo=Y(io,[["__scopeId","data-v-3908448e"]]);const $n=e=>(be("data-v-c13ed0c1"),e=e(),he(),e),so={id:"book-room"},lo=$n(()=>v("p",null," Du har nu skapat en reservation på frösövallens vandrarhem, vi kommer att ta kontakt med dig så snart vi har kontrollerat vi har plats för din önskade bokning. ",-1)),fo=$n(()=>v("button",{class:"btn--cta"}," stäng ",-1)),co={__name:"BookRoom",props:{rooms:Array},setup(e){const t=ae(!1),n=ae(!1),a=()=>{t.value=!0},r=()=>{t.value=!1,n.value=!0},i=()=>{n.value=!1};return(o,s)=>(w(),P("section",so,[t.value?(w(),ce(eo,{key:0,onCloseBookForm:s[0]||(s[0]=l=>t.value=!1),onCloseBookFormSuccess:r})):Ve("",!0),n.value&&!t.value?(w(),ce(oo,{key:1,title:"Tack för att du väljer frösövallen",onCloseModel:i},{btns:Q(()=>[fo]),default:Q(()=>[lo]),_:1})):Ve("",!0),x(Bi),x(Oi,{onBookRoomAction:a}),x(Wi,{rooms:e.rooms},null,8,["rooms"]),x(Mi)]))}},uo=Y(co,[["__scopeId","data-v-c13ed0c1"]]);const mo=v("footer",null,null,-1),go={__name:"Home",props:{foodItems:Array,rooms:Array},setup(e){return(t,n)=>(w(),P(ct,null,[x(hi),v("main",null,[x(ma),x(fa),x(uo,{rooms:e.rooms},null,8,["rooms"])]),mo],64))}};export{go as default};
