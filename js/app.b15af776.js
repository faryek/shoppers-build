(function(){"use strict";var t={7879:function(t,e,n){var s=n(9242),a=n(3396);function r(t,e,n,r,o,i){const l=(0,a.up)("MainPage"),c=(0,a.up)("ShoppingCartPage");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.wy)((0,a._)("div",null,[(0,a.Wm)(l,{onToGeneral:e[0]||(e[0]=t=>{o.main=!0,o.cart=!1}),onToCart:e[1]||(e[1]=t=>{o.main=!1,o.cart=!0}),onAdd:i.count},null,8,["onAdd"])],512),[[s.F8,o.main]]),(0,a.wy)((0,a._)("div",null,[(0,a.Wm)(c,{onToGeneral:e[2]||(e[2]=t=>{o.main=!0,o.cart=!1}),onToCart:e[3]||(e[3]=t=>{o.main=!1,o.cart=!0}),items:o.currentItems},null,8,["items"])],512),[[s.F8,o.cart]])],64)}n(560);var o=n(7139);const i={class:"main wrap"},l={class:"pages"},c=["value"],d={class:"page_buttons"},u=["textContent","onClick"],m={class:"page_buttons"},g=["textContent","onClick"];function p(t,e,n,r,p,h){const _=(0,a.up)("BigCardBlock"),w=(0,a.up)("HeaderBlock"),v=(0,a.up)("PageBlock"),C=(0,a.up)("FooterBlock");return(0,a.wg)(),(0,a.iD)("div",i,[p.mask?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"mask",onClick:e[0]||(e[0]=t=>{p.mask=!1,p.showCardDesc=!1})})):(0,a.kq)("",!0),p.showCardDesc?((0,a.wg)(),(0,a.j4)(_,{key:1,descCard:p.descCard,class:"card-desc"},null,8,["descCard"])):(0,a.kq)("",!0),(0,a.Wm)(w,{onToGeneral:e[1]||(e[1]=e=>t.$emit("toGeneral")),onToCart:e[2]||(e[2]=e=>t.$emit("toCart"))}),(0,a._)("div",l,[(0,a.wy)((0,a._)("select",{class:"categories","onUpdate:modelValue":e[3]||(e[3]=t=>p.sel_cat=t),onChange:e[4]||(e[4]=t=>h.getItems(p.sel_cat))},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(p.all_categories.length,(t=>((0,a.wg)(),(0,a.iD)("option",{key:t,value:t-1},(0,o.zw)(p.all_categories[t-1]),9,c)))),128))],544),[[s.bM,p.sel_cat]]),(0,a._)("div",d,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(p.btns,(t=>(0,a.wy)(((0,a.wg)(),(0,a.iD)("button",{key:t,textContent:(0,o.zw)(t.btnText),class:(0,o.C_)(["btn",{active:p.currentPage===t.btnClass}]),onClick:e=>h.swap(t.btnText,t.btnClass)},null,10,u)),[[s.F8,10==p.len]]))),128))]),1==p.page?((0,a.wg)(),(0,a.j4)(v,{key:0,class:"page",id:"1",items:p.all_items.slice(0,p.len),onClicked:h.showDesc,onCount:e[5]||(e[5]=(e,n)=>{t.$emit("add",e,n)})},null,8,["items","onClicked"])):(0,a.kq)("",!0),2==p.page&&10==p.len?((0,a.wg)(),(0,a.j4)(v,{key:1,class:"page",id:"2",items:p.all_items.slice(p.len,p.all_items.lenght),onClicked:h.showDesc},null,8,["items","onClicked"])):(0,a.kq)("",!0),(0,a._)("div",m,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(p.btns,(t=>(0,a.wy)(((0,a.wg)(),(0,a.iD)("button",{key:t,textContent:(0,o.zw)(t.btnText),class:(0,o.C_)(["btn",{active:p.currentPage===t.btnClass}]),onClick:e=>h.swap(t.btnText,t.btnClass)},null,10,g)),[[s.F8,10==p.len]]))),128))])]),(0,a.Wm)(C)])}n(8858),n(1318),n(3228);var h=n.p+"img/logo.e1a92971.jpg";const _={class:"header"},w=(0,a._)("div",{class:"left"},[(0,a._)("img",{src:h,alt:""}),(0,a._)("h1",null,"elitno")],-1),v={class:"right"};function C(t,e,n,s,r,o){return(0,a.wg)(),(0,a.iD)("div",_,[w,(0,a._)("div",v,[(0,a._)("button",{onClick:e[0]||(e[0]=e=>t.$emit("toGeneral"))},"General"),(0,a._)("button",{onClick:e[1]||(e[1]=e=>t.$emit("toCart"))},"Cart")])])}var f={},k=n(89);const b=(0,k.Z)(f,[["render",C]]);var y=b;const D=(0,a._)("div",{style:{"background-color":"black",height:"1px",width:"100%"}},null,-1),I=(0,a._)("div",{class:"footer"}," жоский футер ",-1);function x(t,e,n,s,r,o){return(0,a.wg)(),(0,a.iD)(a.HY,null,[D,I],64)}var B={};const T=(0,k.Z)(B,[["render",x]]);var z=T;const O={class:"page"};function P(t,e,n,s,r,o){const i=(0,a.up)("CardBlock");return(0,a.wg)(),(0,a.iD)("div",O,[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(3,(e=>(0,a._)("div",{class:"row",key:e},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.items.slice(4*(e-1),4*(e-1)+4),(e=>((0,a.wg)(),(0,a.j4)(i,{key:e,name:e.title,img:e.image,price:e.price,category:e.category,rate:e.rating.rate,onClicker:n=>t.$emit("clicked",e.id),onAdd:n=>{t.$emit("count",n,e)}},null,8,["name","img","price","category","rate","onClicker","onAdd"])))),128))]))),64))])}const $={class:"card"},j={class:"upper"},H=["src"],S={style:{display:"flex","flex-direction":"column",gap:"0"}},F={class:"add"},Y={class:"lower"},G={style:{"text-align":"left"}},Z={style:{"text-align":"right"}};function K(t,e,n,s,r,i){return(0,a.wg)(),(0,a.iD)("div",$,[(0,a._)("div",j,[(0,a._)("img",{class:"img",src:n.img,alt:"404"},null,8,H),(0,a._)("p",null,(0,o.zw)(n.name),1),(0,a._)("p",null,(0,o.zw)(n.price)+"$",1)]),(0,a._)("div",S,[(0,a._)("div",F,[(0,a._)("button",{onClick:e[0]||(e[0]=t=>r.counter--)},"-"),(0,a._)("p",null,(0,o.zw)(r.counter),1),(0,a._)("button",{onClick:e[1]||(e[1]=t=>r.counter++)},"+")]),(0,a._)("button",{class:"adder",onClick:e[2]||(e[2]=e=>t.$emit("add",r.counter))},"add to cart")]),(0,a._)("div",Y,[(0,a._)("p",G,(0,o.zw)(n.category),1),(0,a._)("button",{onClick:e[3]||(e[3]=e=>t.$emit("clicker"))},"more"),(0,a._)("p",Z,(0,o.zw)(n.rate),1)])])}var W={props:["img","name","price","category","rate"],data(){return{counter:0}},methods:{}};const A=(0,k.Z)(W,[["render",K]]);var M=A,q={name:"PageBlock",components:{CardBlock:M},props:["items"],data(){return{}}};const U=(0,k.Z)(q,[["render",P]]);var J=U;const L={class:"card"},N={class:"card-top"},R={class:"card-mid"},E=["src"],V={class:"card-bot"},Q={class:"card-rate"},X={class:"rate"},tt={class:"count"};function et(t,e,n,s,r,i){return(0,a.wg)(),(0,a.iD)("div",L,[(0,a._)("div",N,[(0,a._)("h2",null,(0,o.zw)(n.descCard.title),1),(0,a._)("p",null,(0,o.zw)(n.descCard.category),1)]),(0,a._)("div",R,[(0,a._)("img",{src:n.descCard.image,alt:""},null,8,E),(0,a._)("p",null,(0,o.zw)(n.descCard.description),1)]),(0,a._)("div",V,[(0,a._)("p",null,(0,o.zw)(n.descCard.price)+"$",1),(0,a._)("div",Q,[(0,a._)("p",X,(0,o.zw)(n.descCard.rating.rate)+"/",1),(0,a._)("p",tt,(0,o.zw)(n.descCard.rating.count)+" votes",1)])])])}var nt={props:["descCard"]};const st=(0,k.Z)(nt,[["render",et]]);var at=st,rt={name:"MainPage",components:{HeaderBlock:y,FooterBlock:z,PageBlock:J,BigCardBlock:at},data(){return{all_items:[],all_categories:[],page:1,currentPage:"btn1",len:0,mask:!1,sel_item:{},showCardDesc:!1,btns:[{btnText:"1",btnClass:"btn1"},{btnText:"2",btnClass:"btn2"}],descCard:{},sel_cat:4}},methods:{getItems(t){this.all_items=[];let e=new URL("https://fakestoreapi.com/products");void 0!==t&&4!==t&&(e=new URL("https://fakestoreapi.com/products/category/"+this.all_categories[t])),fetch(e).then((t=>t.json())).then((t=>{this.all_items=t,this.all_items.length<10?this.len=this.all_items.length:this.len=10}))},getCategories(){this.all_categories=[];const t=new URL("https://fakestoreapi.com/products/categories");fetch(t).then((t=>t.json())).then((t=>{this.all_categories=t,this.all_categories.push("none")}))},swap(t,e){this.page=t,window.scrollTo(0,0),this.currentPage=e},showDesc(t){this.mask=!0,this.showCardDesc=!0;for(let e=0;e<this.all_items.length;e++)this.all_items[e].id===t&&(this.descCard=this.all_items[e])}},created(){this.getItems(),this.getCategories()}};const ot=(0,k.Z)(rt,[["render",p]]);var it=ot;const lt={class:"cart wrap"},ct=(0,a._)("h2",null,"Cart",-1),dt={style:{width:"33%"}},ut={style:{width:"33%"}},mt=["onClick"];function gt(t,e,n,s,r,i){const l=(0,a.up)("HeaderBlock"),c=(0,a.up)("FooterBlock");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(l,{onToGeneral:e[0]||(e[0]=e=>t.$emit("toGeneral")),onToCart:e[1]||(e[1]=e=>t.$emit("toCart"))}),(0,a._)("div",lt,[ct,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.items,(t=>((0,a.wg)(),(0,a.iD)("div",{class:"line",key:t},[(0,a._)("p",dt,(0,o.zw)(t.title),1),(0,a._)("p",ut,(0,o.zw)(t.counter),1),(0,a._)("button",{style:{width:"33%"},onClick:e=>i.removeItem(n.items.indexOf(t))},"delete",8,mt)])))),128))]),(0,a.Wm)(c)],64)}var pt={name:"ShoppingCartPage",components:{HeaderBlock:y,FooterBlock:z},props:["items"],data(){return{}},mounted(){},methods:{removeItem(t){this.$props.items.splice(t,1),this.saveItems()},saveItems(){const t=JSON.stringify(this.currentItems);localStorage.setItem("items",t)}}};const ht=(0,k.Z)(pt,[["render",gt]]);var _t=ht,wt={name:"App",components:{MainPage:it,ShoppingCartPage:_t},data(){return{main:!0,cart:!1,sel_card:{},currentItems:[]}},methods:{count(t,e){this.sel_card=e,this.sel_card.counter=t,this.addItem()},addItem(){this.sel_card&&(this.currentItems.push(this.sel_card),this.sel_card={},this.saveItems())},saveItems(){const t=JSON.stringify(this.currentItems);localStorage.setItem("items",t)}},mounted(){if(localStorage.getItem("items"))try{this.currentItems=JSON.parse(localStorage.getItem("items"))}catch(t){localStorage.removeItem("items")}}};const vt=(0,k.Z)(wt,[["render",r]]);var Ct=vt;(0,s.ri)(Ct).mount("#app")}},e={};function n(s){var a=e[s];if(void 0!==a)return a.exports;var r=e[s]={exports:{}};return t[s].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,s,a,r){if(!s){var o=1/0;for(d=0;d<t.length;d++){s=t[d][0],a=t[d][1],r=t[d][2];for(var i=!0,l=0;l<s.length;l++)(!1&r||o>=r)&&Object.keys(n.O).every((function(t){return n.O[t](s[l])}))?s.splice(l--,1):(i=!1,r<o&&(o=r));if(i){t.splice(d--,1);var c=a();void 0!==c&&(e=c)}}return e}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[s,a,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var a,r,o=s[0],i=s[1],l=s[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(l)var d=l(n)}for(e&&e(s);c<o.length;c++)r=o[c],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(d)},s=self["webpackChunkshoppers"]=self["webpackChunkshoppers"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(7879)}));s=n.O(s)})();
//# sourceMappingURL=app.b15af776.js.map