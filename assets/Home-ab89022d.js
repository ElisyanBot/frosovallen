import{_ as i,M as w,a as B,F}from"./FooterImgBanner-d369daca.js";import{o as s,c as r,a as e,b as n,u as y,F as A,t as x,r as g,d as c,w as I,e as _,f as v,n as j,g as X,h as S,p as u,i as f,j as C,k as M,l as $}from"./index-edca62f8.js";const K="/frosovallen/img/line-green.svg",E="/frosovallen/img/line-green__arrow.svg",H={class:"info-icon__background"},R=["src"],D={class:"info-icon__text"},p={__name:"InfoIcon",props:{bgSrc:{type:String,required:!0},text:{type:String,required:!0},iconClass:{type:String,required:!1}},emits:["handleClick"],setup(t,{emit:a}){const o=()=>{a("handleClick")};return(d,k)=>(s(),r("div",{class:"info-icon",onClick:o},[e("div",H,[e("img",{src:t.bgSrc,alt:"info-icon icon background"},null,8,R),e("div",null,[n(y(A),{class:"test",icon:["fas",t.iconClass]},null,8,["icon"])])]),e("div",D,[e("p",null,x(t.text),1)])]))}},P={class:"info-text__container"},Q=["innerHTML"],N={__name:"InfoText",props:{headerTxt:{type:String,required:!0},infoTxt:{type:String,required:!0}},setup(t){return(a,o)=>(s(),r("div",P,[e("h4",null,x(t.headerTxt),1),e("span",{innerHTML:t.infoTxt},null,8,Q)]))}},V={},q={class:"info-text__layout"};function z(t,a){return s(),r("div",q,[g(t.$slots,"default",{},void 0,!0)])}const L=i(V,[["render",z],["__scopeId","data-v-f7ffd8ac"]]),U={cafe:[{headerTxt:"öppettider 19 juni - 20 augusti",infoTxt:"varje dag kl 12:00 - 17:00"},{headerTxt:"kvällsöppet",infoTxt:"torsdagar & lördagar har vi kvällsöppet till kl 19:00"},{headerTxt:"hitta hit",infoTxt:"Stockevägen 3, 832 93 FRÖSÖN <a href='https://www.google.com/maps/place/Stockev%C3%A4gen+3,+832+96+Fr%C3%B6s%C3%B6n/data=!4m2!3m1!1s0x466fb7a8e0574df3:0x20bf172f27e94663?sa=X&ved=2ahUKEwiCkpXQwuP9AhXPzYsKHXDjAXwQ8gF6BAgKEAI'>maps</a>"}],vandrarhem:[{headerTxt:"Boka boende",infoTxt:"<b>073-091 72 49</b> <a href='mailto:info@frosovallen.se'>info@frosovallen.se</a> "},{headerTxt:"Bankgiro | Swish",infoTxt:"818 - 0556 | 123 421 83 27"},{headerTxt:"hitta hit",infoTxt:"Stockevägen 3, 832 93 FRÖSÖN <a href='https://www.google.com/maps/place/Stockev%C3%A4gen+3,+832+96+Fr%C3%B6s%C3%B6n/data=!4m2!3m1!1s0x466fb7a8e0574df3:0x20bf172f27e94663?sa=X&ved=2ahUKEwiCkpXQwuP9AhXPzYsKHXDjAXwQ8gF6BAgKEAI'>maps</a>"}],event:[{headerTxt:"kommande",infoTxt:" hitta kalender på facebook <a href='https://www.facebook.com'>klicka här</a> "},{headerTxt:"Boka lokal",infoTxt:"<b>073-091 72 49</b> <a href='mailto:info@frosovallen.se'>info@frosovallen.se</a> "},{headerTxt:"hitta hit",infoTxt:"Stockevägen 3, 832 93 FRÖSÖN <a href='https://www.google.com/maps/place/Stockev%C3%A4gen+3,+832+96+Fr%C3%B6s%C3%B6n/data=!4m2!3m1!1s0x466fb7a8e0574df3:0x20bf172f27e94663?sa=X&ved=2ahUKEwiCkpXQwuP9AhXPzYsKHXDjAXwQ8gF6BAgKEAI'>maps</a>"}],gudstjänster:[{headerTxt:"söndagar",infoTxt:"Välkommen kl.10 varje söndag. <a href='https://www.efsostersund.se'> EFS-kyrkans</a>"},{headerTxt:"hitta hit",infoTxt:"Stockevägen 3, 832 93 FRÖSÖN <a href='https://www.google.com/maps/place/Stockev%C3%A4gen+3,+832+96+Fr%C3%B6s%C3%B6n/data=!4m2!3m1!1s0x466fb7a8e0574df3:0x20bf172f27e94663?sa=X&ved=2ahUKEwiCkpXQwuP9AhXPzYsKHXDjAXwQ8gF6BAgKEAI'>maps</a>"}]},Y={class:"icon__container"},O={class:"info-text__line-animation"},W=e("img",{src:K,alt:"animation"},null,-1),G={__name:"LearnMoreFeature",setup(t){const a=c("cafe"),o=c(U),d=c(null);return I(()=>{a.value==="cafe"&&(d.value=6),a.value==="vandrarhem"&&(d.value=34),a.value==="event"&&(d.value=59.8),a.value==="gudstjänster"&&(d.value=87.1)}),(k,l)=>(s(),_(w,null,{default:v(()=>[e("div",Y,[n(p,{"bg-src":"./img/learn-more__cafe-img.png",text:"cafe","icon-class":"utensils",onHandleClick:l[0]||(l[0]=()=>a.value="cafe")}),n(p,{"bg-src":"./img/learn-more__vandrarhem-img.png",text:"vandrarhem","icon-class":"house",onHandleClick:l[1]||(l[1]=()=>a.value="vandrarhem")}),n(p,{"bg-src":"./img/learn-more__event-img.png",text:"event","icon-class":"calendar",onHandleClick:l[2]||(l[2]=()=>a.value="event")}),n(p,{"bg-src":"./img/learn-more__gudstjänst-img.png",text:"gudstjänst","icon-class":"church",onHandleClick:l[3]||(l[3]=()=>a.value="gudstjänster")})]),e("div",O,[W,e("img",{style:j({left:d.value+"%"}),class:"line-green__arrow",src:E,alt:"animation"},null,4)]),n(L,null,{default:v(()=>[(s(!0),r(S,null,X(o.value[a.value],(b,m)=>(s(),_(N,{key:m,"header-txt":b.headerTxt,"info-txt":b.infoTxt},null,8,["header-txt","info-txt"]))),128))]),_:1})]),_:1}))}},J="/frosovallen/img/frosovallenHouse.png",Z=e("section",{id:"about-us"},[e("div",{class:"about-us__outer-div"},[e("h2",null,"Frösövallen"),e("div",{class:"about-us__inner-div"},[e("article",{class:"about-us__info-txt"},[e("h3",null,"om oss"),e("p",null," Frösövallen är mötesplatsen för goda möten och upplevelser i en unik miljö. Caféet är hjärtat i verksamheten och serverar smakupplevelser med lokal prägel. Tar du dig upp i vårt utsiktstorn väntar den jämtländska fjällvärldens bedårande panorama. Men Frösövallen är också mycket mer. "),e("p",null," EFS-kyrkan i Östersund som driver Frösövallen kallar det för sin sommarkyrka och erbjuder en mosaik av aktiva samlingar under hela sommaren: Konsertkvällar med en blandad musikalisk palett, konst- o hantverkskvällar, Quizpromenader, sportkvällar, samtalsgrupper och sommargudstjänster. ")]),e("div",{class:"about-us__img-container"},[e("img",{src:J,alt:"bild på försvallen"})])]),e("div",{class:"about-us__background-shape"})])],-1),ee={__name:"AboutUs",setup(t){return(a,o)=>(s(),_(w,null,{default:v(()=>[Z]),_:1}))}},te="/frosovallen/img/boka-boende.png",h=t=>(u("data-v-35938709"),t=t(),f(),t),ae={class:"book-cta"},oe=h(()=>e("picture",null,[e("img",{src:te})],-1)),se=h(()=>e("div",{class:"book-cta__green-background"},null,-1)),ne={class:"book-cta__text-container"},re=h(()=>e("h2",null," bo på frösövallen ",-1)),de=h(()=>e("h3",null," vandrarhem ",-1)),le={__name:"BookCta",emits:["bookRoomAction"],setup(t){return(a,o)=>(s(),r("section",ae,[oe,se,e("div",ne,[re,de,e("button",{onClick:o[0]||(o[0]=d=>a.$emit("bookRoomAction"))}," boka rum här ")])]))}},ie=i(le,[["__scopeId","data-v-35938709"]]),ce={},_e=t=>(u("data-v-5f57051d"),t=t(),f(),t),ve={class:"book-room__bottom-divider"},ue=_e(()=>e("div",{class:"divider__green-corner"},null,-1)),fe=[ue];function me(t,a){return s(),r("div",ve,fe)}const pe=i(ce,[["render",me],["__scopeId","data-v-5f57051d"]]),he={},ke=t=>(u("data-v-d670a793"),t=t(),f(),t),be={class:"book-room__upper-divider"},ge=ke(()=>e("div",{class:"divider__green-corner"},null,-1)),xe=[ge];function $e(t,a){return s(),r("div",be,xe)}const we=i(he,[["render",$e],["__scopeId","data-v-d670a793"]]),Se={class:"book-room__display-rooms"},Ce=C('<div class="display-rooms__green-section" data-v-e5572dfb><div class="green-section__text-container" data-v-e5572dfb><h3 data-v-e5572dfb> våra rum </h3><div class="info-text" data-v-e5572dfb><p data-v-e5572dfb> Frösövallens vandrarhem erbjuder två- eller fyrbäddsrum i enkel standard. </p><p data-v-e5572dfb> Totalt finns tjugosex bäddar i åtta rum. </p><p data-v-e5572dfb> I närliggande servicehus finns toaletter, dusch, tvättmaskin och ett välutrustat kök för självhushåll. </p></div><div class="price-info" data-v-e5572dfb><div class="header" data-v-e5572dfb><h4 data-v-e5572dfb> pris </h4><div class="divider" data-v-e5572dfb></div></div><div class="content" data-v-e5572dfb><p data-v-e5572dfb><b data-v-e5572dfb>vuxna</b><span data-v-e5572dfb>270 kr</span></p><p data-v-e5572dfb><b data-v-e5572dfb>barn 6-15 år</b><span data-v-e5572dfb>100 kr</span></p><p data-v-e5572dfb><b data-v-e5572dfb>husvagn</b><span data-v-e5572dfb>250 kr</span></p><p data-v-e5572dfb><b data-v-e5572dfb>tältplats</b><span data-v-e5572dfb>195 kr </span></p></div></div></div></div>',1),Te=[Ce],Be={__name:"DisplayRooms",props:{rooms:Array},setup(t){return(a,o)=>(s(),r("section",Se,Te))}},Fe=i(Be,[["__scopeId","data-v-e5572dfb"]]),ye={},Ae=t=>(u("data-v-4c083da0"),t=t(),f(),t),Ie={class:"book-room-form__focus"},je={class:"book-room-form__header"},Xe=Ae(()=>e("h2",null," boka boende ",-1)),Me=C('<div class="text-info" data-v-4c083da0><p data-v-4c083da0> Vad kul att du vill bo på Frösövallen. Skicka ett mail eller hör av dig via telefon för bokning av boende. Vårat kontor har öppet: <b data-v-4c083da0> 10:00 - 18:00 </b> varje dag. </p><h3 class="book-room-form__second-header" data-v-4c083da0> Kontaktuppgifter </h3><p class="book-room-form__info-text" data-v-4c083da0><b data-v-4c083da0> Mailadress: </b> <a href="mailto:info@frosovallen.se" data-v-4c083da0> info@frosovallen.se</a></p><p class="book-room-form__info-text" href="tel:0767923889" data-v-4c083da0><b data-v-4c083da0> telefon: </b><a data-v-4c083da0>076-792 38 89 </a></p></div>',1);function Ke(t,a){return s(),r("div",Ie,[e("form",{class:"book-room-form",onSubmit:a[1]||(a[1]=M((...o)=>t.reserve&&t.reserve(...o),["prevent"]))},[e("div",je,[Xe,e("button",{onClick:a[0]||(a[0]=o=>t.$emit("closeBookForm"))}," x ")]),Me],32)])}const Ee=i(ye,[["render",Ke],["__scopeId","data-v-4c083da0"]]),He={class:"model model--small"},Re={class:"model__header"},De={class:"model__body"},Pe={class:"model__btns"},Qe={__name:"Model",props:{title:{type:String,required:!0}},emits:["closeModel"],setup(t){return(a,o)=>(s(),r("section",{class:"model__focus-background",onClick:o[0]||(o[0]=d=>a.$emit("closeModel"))},[e("div",He,[e("div",Re,[e("h3",null,x(t.title),1)]),e("div",De,[g(a.$slots,"default",{},void 0,!0)]),e("div",Pe,[g(a.$slots,"btns",{},void 0,!0)])])]))}},Ne=i(Qe,[["__scopeId","data-v-3908448e"]]),T=t=>(u("data-v-063cb29d"),t=t(),f(),t),Ve={id:"book-room"},qe=T(()=>e("p",null," Du har nu skapat en reservation på frösövallens vandrarhem, vi kommer att ta kontakt med dig så snart vi har kontrollerat vi har plats för din önskade bokning. ",-1)),ze=T(()=>e("button",{class:"btn--cta"}," stäng ",-1)),Le={__name:"BookRoom",props:{rooms:Array},setup(t){const a=c(!1),o=c(!1),d=()=>{a.value=!0},k=()=>{a.value=!1,o.value=!0},l=()=>{o.value=!1};return(b,m)=>(s(),r("section",Ve,[a.value?(s(),_(Ee,{key:0,onCloseBookForm:m[0]||(m[0]=Oe=>a.value=!1),onCloseBookFormSuccess:k})):$("",!0),o.value&&!a.value?(s(),_(Ne,{key:1,title:"Tack för att du väljer frösövallen",onCloseModel:l},{btns:v(()=>[ze]),default:v(()=>[qe]),_:1})):$("",!0),n(we),n(ie,{onBookRoomAction:d}),n(Fe),n(pe)]))}},Ue=i(Le,[["__scopeId","data-v-063cb29d"]]),Ye=e("footer",null,null,-1),Je={__name:"Home",props:{foodItems:Array,rooms:Array},setup(t){return(a,o)=>(s(),r(S,null,[n(B),e("main",null,[n(ee),n(G),n(F),n(Ue,{rooms:t.rooms},null,8,["rooms"])]),Ye],64))}};export{Je as default};
