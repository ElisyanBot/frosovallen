import{_ as d,M as x,a as B,F}from"./FooterImgBanner-14bb2179.js";import{o as s,c as r,a as e,b as n,u as y,F as A,t as $,r as g,d as m,w as I,e as c,f as _,n as j,g as X,h as S,p as u,i as v,j as C,k as M,l as w,m as K}from"./index-5c354f86.js";const H="/img/line-green.svg",E="/img/line-green__arrow.svg",R={class:"info-icon__background"},D=["src"],L={class:"info-icon__text"},p={__name:"InfoIcon",props:{bgSrc:{type:String,required:!0},text:{type:String,required:!0},iconClass:{type:String,required:!1}},emits:["handleClick"],setup(a,{emit:t}){const o=()=>{t("handleClick")};return(l,h)=>(s(),r("div",{class:"info-icon",onClick:o},[e("div",R,[e("img",{src:a.bgSrc,alt:"info-icon icon background"},null,8,D),e("div",null,[n(y(A),{class:"test",icon:["fas",a.iconClass]},null,8,["icon"])])]),e("div",L,[e("p",null,$(a.text),1)])]))}},P={class:"info-text__container"},N=["innerHTML"],Q={__name:"InfoText",props:{headerTxt:{type:String,required:!0},infoTxt:{type:String,required:!0}},setup(a){return(t,o)=>(s(),r("div",P,[e("h4",null,$(a.headerTxt),1),e("span",{innerHTML:a.infoTxt},null,8,N)]))}},U={},V={class:"info-text__layout"};function q(a,t){return s(),r("div",V,[g(a.$slots,"default",{},void 0,!0)])}const z=d(U,[["render",q],["__scopeId","data-v-f7ffd8ac"]]),Y={cafe:[{headerTxt:"öppettider 19 juni - 20 augusti",infoTxt:"varje dag kl 12:00 - 17:00"},{headerTxt:"kvällsöppet",infoTxt:"torsdagar & lördagar har vi kvällsöppet till kl 19:00"},{headerTxt:"hitta hit",infoTxt:"Stockevägen 3, 832 93 FRÖSÖN <a href='https://www.google.com/maps/place/Stockev%C3%A4gen+3,+832+96+Fr%C3%B6s%C3%B6n/data=!4m2!3m1!1s0x466fb7a8e0574df3:0x20bf172f27e94663?sa=X&ved=2ahUKEwiCkpXQwuP9AhXPzYsKHXDjAXwQ8gF6BAgKEAI'>maps</a>"}],vandrarhem:[{headerTxt:"Boka boende",infoTxt:"<b>073-091 72 49</b> <a href='mailto:info@frosovallen.se'>info@frosovallen.se</a> "},{headerTxt:"Bankgiro | Swish",infoTxt:"818 - 0556 | 123 421 83 27"},{headerTxt:"hitta hit",infoTxt:"Stockevägen 3, 832 93 FRÖSÖN <a href='https://www.google.com/maps/place/Stockev%C3%A4gen+3,+832+96+Fr%C3%B6s%C3%B6n/data=!4m2!3m1!1s0x466fb7a8e0574df3:0x20bf172f27e94663?sa=X&ved=2ahUKEwiCkpXQwuP9AhXPzYsKHXDjAXwQ8gF6BAgKEAI'>maps</a>"}],event:[{headerTxt:"kommande",infoTxt:" hitta kalender på facebook <a href='https://www.facebook.com/frosovallen'>klicka här</a> "},{headerTxt:"Boka lokal",infoTxt:"<b>073-091 72 49</b> <a href='mailto:info@frosovallen.se'>info@frosovallen.se</a> "},{headerTxt:"hitta hit",infoTxt:"Stockevägen 3, 832 93 FRÖSÖN <a href='https://www.google.com/maps/place/Stockev%C3%A4gen+3,+832+96+Fr%C3%B6s%C3%B6n/data=!4m2!3m1!1s0x466fb7a8e0574df3:0x20bf172f27e94663?sa=X&ved=2ahUKEwiCkpXQwuP9AhXPzYsKHXDjAXwQ8gF6BAgKEAI'>maps</a>"}],gudstjänster:[{headerTxt:"välkommen på gudstjänst",infoTxt:"alla söndagar kl 10:00 <a href='https://www.efsostersund.se'> mer info på EFS Östersund</a>"},{headerTxt:"hitta hit",infoTxt:"Stockevägen 3, 832 93 FRÖSÖN <a href='https://www.google.com/maps/place/Stockev%C3%A4gen+3,+832+96+Fr%C3%B6s%C3%B6n/data=!4m2!3m1!1s0x466fb7a8e0574df3:0x20bf172f27e94663?sa=X&ved=2ahUKEwiCkpXQwuP9AhXPzYsKHXDjAXwQ8gF6BAgKEAI'>maps</a>"}]},O={class:"icon__container"},W={class:"info-text__line-animation"},G=e("img",{src:H,alt:"animation"},null,-1),J={__name:"LearnMoreFeature",setup(a){const t=m("cafe"),o=m(Y),l=m(null);return I(()=>{t.value==="cafe"&&(l.value=6),t.value==="vandrarhem"&&(l.value=34),t.value==="event"&&(l.value=59.8),t.value==="gudstjänster"&&(l.value=87.1)}),(h,i)=>(s(),c(x,null,{default:_(()=>[e("div",O,[n(p,{"bg-src":"./img/learn-more__cafe-img.png",text:"cafe","icon-class":"utensils",onHandleClick:i[0]||(i[0]=()=>t.value="cafe")}),n(p,{"bg-src":"./img/learn-more__vandrarhem-img.png",text:"vandrarhem","icon-class":"house",onHandleClick:i[1]||(i[1]=()=>t.value="vandrarhem")}),n(p,{"bg-src":"./img/learn-more__event-img.png",text:"event","icon-class":"calendar",onHandleClick:i[2]||(i[2]=()=>t.value="event")}),n(p,{"bg-src":"./img/learn-more__gudstjänst-img.png",text:"gudstjänst","icon-class":"church",onHandleClick:i[3]||(i[3]=()=>t.value="gudstjänster")})]),e("div",W,[G,e("img",{style:j({left:l.value+"%"}),class:"line-green__arrow",src:E,alt:"animation"},null,4)]),n(z,null,{default:_(()=>[(s(!0),r(S,null,X(o.value[t.value],(k,f)=>(s(),c(Q,{key:f,"header-txt":k.headerTxt,"info-txt":k.infoTxt},null,8,["header-txt","info-txt"]))),128))]),_:1})]),_:1}))}},Z="/img/frosovallenHouse.png",ee=e("section",{id:"about-us"},[e("div",{class:"about-us__outer-div"},[e("h2",null,"Frösövallen"),e("div",{class:"about-us__inner-div"},[e("article",{class:"about-us__info-txt"},[e("h3",null,"om oss"),e("p",null," Frösövallen är mötesplatsen för goda möten och upplevelser i en unik miljö. Caféet är hjärtat i verksamheten och serverar smakupplevelser med lokal prägel. Tar du dig upp i vårt utsiktstorn väntar den jämtländska fjällvärldens bedårande panorama. Men Frösövallen är också mycket mer. "),e("p",null," EFS-kyrkan i Östersund som driver Frösövallen kallar det för sin sommarkyrka och erbjuder en mosaik av aktiva samlingar under hela sommaren: Konsertkvällar med en blandad musikalisk palett, konst- o hantverkskvällar, Quizpromenader, sportkvällar, samtalsgrupper och sommargudstjänster. ")]),e("div",{class:"about-us__img-container"},[e("img",{src:Z,alt:"bild på försvallen"})])]),e("div",{class:"about-us__background-shape"})])],-1),ae={__name:"AboutUs",setup(a){return(t,o)=>(s(),c(x,null,{default:_(()=>[ee]),_:1}))}},te="/img/boka-boende.png",b=a=>(u("data-v-52663bee"),a=a(),v(),a),oe={class:"book-cta"},se=b(()=>e("picture",null,[e("img",{src:te})],-1)),ne=b(()=>e("div",{class:"book-cta__green-background"},null,-1)),re={class:"book-cta__text-container"},le=b(()=>e("h2",null," bo på frösövallen ",-1)),ie=b(()=>e("h3",null," vandrarhem ",-1)),de={__name:"BookCta",emits:["bookRoomAction"],setup(a){return(t,o)=>(s(),r("section",oe,[se,ne,e("div",re,[le,ie,e("button",{onClick:o[0]||(o[0]=l=>t.$emit("bookRoomAction"))}," boka rum här ")])]))}},ce=d(de,[["__scopeId","data-v-52663bee"]]),_e={},ue=a=>(u("data-v-f49da1ce"),a=a(),v(),a),ve={class:"book-room__bottom-divider"},me=ue(()=>e("div",{class:"divider__green-corner"},null,-1)),fe=[me];function pe(a,t){return s(),r("div",ve,fe)}const be=d(_e,[["render",pe],["__scopeId","data-v-f49da1ce"]]),he={},ke=a=>(u("data-v-9a3ec5cf"),a=a(),v(),a),ge={class:"book-room__upper-divider"},xe=ke(()=>e("div",{class:"divider__green-corner"},null,-1)),$e=[xe];function we(a,t){return s(),r("div",ge,$e)}const Se=d(he,[["render",we],["__scopeId","data-v-9a3ec5cf"]]),Ce={class:"book-room__display-rooms"},Te=C('<div class="display-rooms__green-section" data-v-0e2e2b7b><div class="green-section__text-container" data-v-0e2e2b7b><h3 data-v-0e2e2b7b> våra rum </h3><div class="info-text" data-v-0e2e2b7b><p data-v-0e2e2b7b> Frösövallens vandrarhem erbjuder två- eller fyrbäddsrum i enkel standard. </p><p data-v-0e2e2b7b> Totalt finns tjugosex bäddar i åtta rum. </p><p data-v-0e2e2b7b> I närliggande servicehus finns toaletter, dusch, tvättmaskin och ett välutrustat kök för självhushåll. </p></div><div class="price-info" data-v-0e2e2b7b><div class="header" data-v-0e2e2b7b><h4 data-v-0e2e2b7b> pris </h4><div class="divider" data-v-0e2e2b7b></div></div><div class="content" data-v-0e2e2b7b><p data-v-0e2e2b7b><b data-v-0e2e2b7b>vuxna</b><span data-v-0e2e2b7b>270 kr</span></p><p data-v-0e2e2b7b><b data-v-0e2e2b7b>barn 6-15 år</b><span data-v-0e2e2b7b>100 kr</span></p><p data-v-0e2e2b7b><b data-v-0e2e2b7b>husvagn</b><span data-v-0e2e2b7b>250 kr</span></p><p data-v-0e2e2b7b><b data-v-0e2e2b7b>tältplats</b><span data-v-0e2e2b7b>195 kr </span></p></div></div></div></div>',1),Be=[Te],Fe={__name:"DisplayRooms",props:{rooms:Array},setup(a){return(t,o)=>(s(),r("section",Ce,Be))}},ye=d(Fe,[["__scopeId","data-v-0e2e2b7b"]]),Ae={},Ie=a=>(u("data-v-4c083da0"),a=a(),v(),a),je={class:"book-room-form__focus"},Xe={class:"book-room-form__header"},Me=Ie(()=>e("h2",null," boka boende ",-1)),Ke=C('<div class="text-info" data-v-4c083da0><p data-v-4c083da0> Vad kul att du vill bo på Frösövallen. Skicka ett mail eller hör av dig via telefon för bokning av boende. Vårat kontor har öppet: <b data-v-4c083da0> 10:00 - 18:00 </b> varje dag. </p><h3 class="book-room-form__second-header" data-v-4c083da0> Kontaktuppgifter </h3><p class="book-room-form__info-text" data-v-4c083da0><b data-v-4c083da0> Mailadress: </b> <a href="mailto:info@frosovallen.se" data-v-4c083da0> info@frosovallen.se</a></p><p class="book-room-form__info-text" href="tel:0767923889" data-v-4c083da0><b data-v-4c083da0> telefon: </b><a data-v-4c083da0>076-792 38 89 </a></p></div>',1);function He(a,t){return s(),r("div",je,[e("form",{class:"book-room-form",onSubmit:t[1]||(t[1]=M((...o)=>a.reserve&&a.reserve(...o),["prevent"]))},[e("div",Xe,[Me,e("button",{onClick:t[0]||(t[0]=o=>a.$emit("closeBookForm"))}," x ")]),Ke],32)])}const Ee=d(Ae,[["render",He],["__scopeId","data-v-4c083da0"]]),Re={class:"model model--small"},De={class:"model__header"},Le={class:"model__body"},Pe={class:"model__btns"},Ne={__name:"Model",props:{title:{type:String,required:!0}},emits:["closeModel"],setup(a){return(t,o)=>(s(),r("section",{class:"model__focus-background",onClick:o[0]||(o[0]=l=>t.$emit("closeModel"))},[e("div",Re,[e("div",De,[e("h3",null,$(a.title),1)]),e("div",Le,[g(t.$slots,"default",{},void 0,!0)]),e("div",Pe,[g(t.$slots,"btns",{},void 0,!0)])])]))}},Qe=d(Ne,[["__scopeId","data-v-3908448e"]]),T=a=>(u("data-v-063cb29d"),a=a(),v(),a),Ue={id:"book-room"},Ve=T(()=>e("p",null," Du har nu skapat en reservation på frösövallens vandrarhem, vi kommer att ta kontakt med dig så snart vi har kontrollerat vi har plats för din önskade bokning. ",-1)),qe=T(()=>e("button",{class:"btn--cta"}," stäng ",-1)),ze={__name:"BookRoom",props:{rooms:Array},setup(a){const t=m(!1),o=m(!1),l=()=>{t.value=!0},h=()=>{t.value=!1,o.value=!0},i=()=>{o.value=!1};return(k,f)=>(s(),r("section",Ue,[t.value?(s(),c(Ee,{key:0,onCloseBookForm:f[0]||(f[0]=aa=>t.value=!1),onCloseBookFormSuccess:h})):w("",!0),o.value&&!t.value?(s(),c(Qe,{key:1,title:"Tack för att du väljer frösövallen",onCloseModel:i},{btns:_(()=>[qe]),default:_(()=>[Ve]),_:1})):w("",!0),n(Se),n(ce,{onBookRoomAction:l}),n(ye),n(be)]))}},Ye=d(ze,[["__scopeId","data-v-063cb29d"]]),Oe="/img/bookLocal.png",We=a=>(u("data-v-d2ba1597"),a=a(),v(),a),Ge=We(()=>e("section",{id:"book-local"},[e("section",{class:"book-local__section"},[e("div",{class:"book-local__left"},[e("div",{class:"book-local__background-shape"},[e("div",{class:"book-local__img-container"},[e("img",{src:Oe,alt:"bild på försvallen"})])])]),e("div",{class:"book-local__right"},[e("article",{class:"book-local__info-txt"},[e("h2",null,"Hyr Samlingsalen för viktiga stunder"),e("p",null," Frösövallens stora samlingslokal med oslagbara utsikt passar för olika typer av arrangemang. Lokalen rymmer upp till 120 sittande personer och är lätt att möblera om för fest, konferens, bröllop, dop, begravning, konsert mm. Utrustad med ljudanläggning, piano, hörslinga och videoprojektor. Alkoholfritt. "),e("p",null,[e("b",null,"Priser: "),e("i",null,"2 500 kr/ dygn"),e("i",null,"minst 1 500 kr/tillfälle"),e("i",null,[K("Boka genom att maila "),e("a",{href:"mailto:info@frosovallen.se"},"info@frosovallen.se")])])])])])],-1)),Je={__name:"BookLocal",setup(a){return(t,o)=>(s(),c(x,null,{default:_(()=>[Ge]),_:1}))}},Ze=d(Je,[["__scopeId","data-v-d2ba1597"]]),ea=e("footer",null,null,-1),sa={__name:"Home",props:{foodItems:Array,rooms:Array},setup(a){return(t,o)=>(s(),r(S,null,[n(B),e("main",null,[n(ae),n(J),n(F),n(Ye,{rooms:a.rooms},null,8,["rooms"]),n(Ze)]),ea],64))}};export{sa as default};