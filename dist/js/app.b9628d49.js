(function(){"use strict";var t={2672:function(t,e,r){var o=r(9242),n=r(3396);function a(t,e,r,o,a,i){const s=(0,n.up)("BasketIcon"),c=(0,n.up)("router-link"),u=(0,n.up)("TipModal"),l=(0,n.up)("v-row"),d=(0,n.up)("router-view"),m=(0,n.up)("v-container");return(0,n.wg)(),(0,n.j4)(m,{class:"app"},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{"no-gutters":"",justify:"end",class:"my-10"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{to:"/basketpage",class:"route-link-basketpage"},{default:(0,n.w5)((()=>[(0,n.Wm)(s)])),_:1}),(0,n.Wm)(u)])),_:1}),(0,n.Wm)(l,{"no-gutter":""},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{to:"/",class:"route-link-home"}),(0,n.Wm)(d)])),_:1})])),_:1})}function i(t,e,r,o,a,i){const s=(0,n.up)("v-icon"),c=(0,n.up)("router-link");return(0,n.wg)(),(0,n.j4)(c,{to:"/basketpage",class:"route-link-icon"},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{icon:"mdi-cart",class:"cart-icon",value:i.cartItemCount,color:"#c8102e"},null,8,["value"])])),_:1})}var s=r(7139);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e=d(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function d(t){var e=m(t,"string");return"symbol"===typeof e?e:String(e)}function m(t,e){if("object"!==typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var p={computed:u(u({},s.rn(["cartItems","cartItemsStorage"])),{},{cartItemCount(){return this.cartItemsStorage.length}})},f=r(89);const g=(0,f.Z)(p,[["render",i],["__scopeId","data-v-25204bf1"]]);var y=g,b=r(2268);const v={class:"title-p"};function w(t,e,r,o,a,i){const s=(0,n.up)("v-card-title"),c=(0,n.up)("v-card-actions"),u=(0,n.up)("v-card"),l=(0,n.up)("v-dialog");return(0,n.wg)(),(0,n.j4)(l,{modelValue:i.isOpen,"onUpdate:modelValue":e[0]||(e[0]=t=>i.isOpen=t),class:"model-dialog"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s,{class:"model-message"},{default:(0,n.w5)((()=>[(0,n._)("p",v,(0,b.zw)(i.message),1)])),_:1}),(0,n.Wm)(c)])),_:1})])),_:1},8,["modelValue"])}var h={computed:{isOpen(){return this.$store.state.isOpen},message(){return this.$store.state.message}},methods:{closeModal(){this.$store.commit("closeModal")}}};const O=(0,f.Z)(h,[["render",w]]);var j=O,S={name:"App",components:{TipModal:j,BasketIcon:y}};const I=(0,f.Z)(S,[["render",a]]);var k=I,_=r(8957),P=(r(8556),r(9773),r(6918)),C=r(8600),W=r(678),x=r(3289),Q=r(3369),D=r(596),T=r(3504);function q(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function $(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?q(Object(r),!0).forEach((function(e){F(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function F(t,e,r){return e=E(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function E(t){var e=z(t,"string");return"symbol"===typeof e?e:String(e)}function z(t,e){if("object"!==typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var M=(0,_.Rd)({icons:{defaultSet:"mdi",aliases:T.j,sets:{mdi:T.t,fa:D.fa}},components:$($({},P),{},{VTooltip:W.N,VIcon:x.t,VContainer:Q.K}),directives:C}),N=r(302);const L=t=>((0,n.dD)("data-v-3333fe3a"),t=t(),(0,n.Cn)(),t),U=L((()=>(0,n._)("h2",null,"Your basket is empty.",-1))),J={class:"price"},V=["value","onInput"];function Z(t,e,r,o,a,i){const s=(0,n.up)("v-card-title"),c=(0,n.up)("v-col"),u=(0,n.up)("router-link"),l=(0,n.up)("v-row"),d=(0,n.up)("v-img"),m=(0,n.up)("v-btn"),p=(0,n.up)("v-icon"),f=(0,n.up)("v-divider"),g=(0,n.up)("v-container");return(0,n.wg)(),(0,n.j4)(g,{class:"pa-0"},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{"no-gutters":""},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{cols:"12",md:"9"},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{"no-gutters":"",justify:"space-between",class:"my-6 bg-grey-lighten-3"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{cols:"5"},{default:(0,n.w5)((()=>[(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Products")])),_:1})])),_:1}),(0,n.Wm)(c,{cols:"4",class:"pt-2"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{to:"/",class:"back-router"},{default:(0,n.w5)((()=>[(0,n.Uk)(" < Continue Shopping ")])),_:1})])),_:1})])),_:1}),(0,n.Wm)(l,{"no-gutters":"",class:"m-4"},{default:(0,n.w5)((()=>[0===i.cart.length?((0,n.wg)(),(0,n.j4)(c,{key:0,cols:"12"},{default:(0,n.w5)((()=>[U])),_:1})):((0,n.wg)(!0),(0,n.iD)(n.HY,{key:1},(0,n.Ko)(t.cartItemsStorage,(e=>((0,n.wg)(),(0,n.j4)(c,{class:"basket-item",cols:"12",key:e.id},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{"no-gutters":""},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{cols:"12",md:"4"},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{width:"240",height:"240",src:e.imageUrl,alt:"240x240",cover:"",class:"mx-auto product-image"},null,8,["src"])])),_:2},1024),(0,n.Wm)(c,{cols:"12",md:"3",class:"mt-10 my-auto pl-2 $vuetify.breakpoint.xl ? 'text-left' : 'text-center'"},{default:(0,n.w5)((()=>[(0,n._)("h3",null,(0,b.zw)(e.name),1),(0,n._)("p",null,"Size: "+(0,b.zw)(e.size),1),(0,n._)("p",null,"Color: "+(0,b.zw)(e.color),1),(0,n._)("p",J,"$"+(0,b.zw)(e.amount),1)])),_:2},1024),(0,n.Wm)(c,{cols:"12",md:"3",class:"ma-auto"},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{onClick:r=>t.decreaseQuantity(e),class:"d-block w-100 my-4 pl-2 basket-btn"},{default:(0,n.w5)((()=>[(0,n.Uk)("-")])),_:2},1032,["onClick"]),(0,n._)("input",{type:"number",value:e.quantity,onInput:t=>i.updateQuantity(e,t.target.value),class:"d-block w-100 input-group"},null,40,V),(0,n.Wm)(m,{onClick:r=>t.increaseQuantity(e),class:"d-block w-100 my-4 pl-2 basket-btn"},{default:(0,n.w5)((()=>[(0,n.Uk)("+")])),_:2},1032,["onClick"])])),_:2},1024),(0,n.Wm)(c,{md:"2",class:"ma-auto text-center"},{default:(0,n.w5)((()=>[(0,n.Wm)(p,{color:"red",onClick:t=>i.removeFromCart(e)},{default:(0,n.w5)((()=>[(0,n.Uk)(" mdi-delete ")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024),(0,n.Wm)(f,{class:"my-4"})])),_:2},1024)))),128))])),_:1})])),_:1}),(0,n.Wm)(c,{cols:"12",md:"3",class:"mt-6"},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{"no-gutters":"",justify:"center",class:"bg-grey-lighten-3"},{default:(0,n.w5)((()=>[(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Subtotal")])),_:1})])),_:1}),(0,n.Wm)(l,{"no-gutters":"",justify:"center",class:"mt-8"},{default:(0,n.w5)((()=>[(0,n._)("h2",null,"$"+(0,b.zw)(i.total),1)])),_:1})])),_:1})])),_:1})])),_:1})}function A(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function B(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?A(Object(r),!0).forEach((function(e){H(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function H(t,e,r){return e=K(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function K(t){var e=Y(t,"string");return"symbol"===typeof e?e:String(e)}function Y(t,e){if("object"!==typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var R={name:"BasketPage",computed:B(B({},s.rn(["cartItems","cartItemsStorage"])),{},{cart(){return this.$store.state.cartItemsStorage},total(){let t=0;for(let e=0;e<this.cart.length;e++)t+=this.cart[e].amount*this.cart[e].quantity;return t}}),methods:B(B({},s.OI(["increaseQuantity","decreaseQuantity","removeFromCart","updateQuantity"])),{},{subtotal(t){return t.amount*t.quantity},updateQuantity(t,e){this.$store.commit("updateQuantity",{item:t,quantity:e})},removeFromCart(t){this.$store.dispatch("removeFromCart",t),this.$store.dispatch("open","Product removed from basket")}})};const G=(0,f.Z)(R,[["render",Z],["__scopeId","data-v-3333fe3a"]]);var X=G;const tt=t=>((0,n.dD)("data-v-49dc2d6e"),t=t(),(0,n.Cn)(),t),et=tt((()=>(0,n._)("h1",null,"Loading...",-1))),rt={class:"my-2"},ot=["onClick"],nt=["value","onChange"],at=["onClick"];function it(t,e,r,o,a,i){const s=(0,n.up)("v-container"),c=(0,n.up)("v-img"),u=(0,n.up)("v-card-title"),l=(0,n.up)("v-card-text"),d=(0,n.up)("v-btn"),m=(0,n.up)("v-card-actions"),p=(0,n.up)("v-col"),f=(0,n.up)("v-row"),g=(0,n.up)("v-card");return t.isLoading?((0,n.wg)(),(0,n.j4)(s,{key:0,fluid:"",class:"ma-auto d-flex flex-column justif-center align-center text-center h-100"},{default:(0,n.w5)((()=>[et])),_:1})):((0,n.wg)(),(0,n.j4)(s,{key:1,fluid:""},{default:(0,n.w5)((()=>[(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.products,(e=>((0,n.wg)(),(0,n.j4)(p,{key:e.id,cols:"12",sm:"6",md:"4",lg:"3"},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{class:"mx-auto","max-width":"240",product:e},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{class:"align-end text-black",style:(0,b.j5)({backgroundColor:e.color}),width:"240",height:"240",src:e.imageUrl,alt:"240x240",cover:""},null,8,["style","src"]),(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,b.zw)(e.name),1)])),_:2},1024),(0,n.Wm)(l,null,{default:(0,n.w5)((()=>[(0,n._)("p",null,"Size: "+(0,b.zw)(e.size),1),(0,n._)("p",rt,"Color: "+(0,b.zw)(e.color),1),(0,n._)("p",null,"$"+(0,b.zw)(e.amount),1)])),_:2},1024),e.showInput?((0,n.wg)(),(0,n.j4)(m,{key:1,class:"d-flex flex-column justif-center align-center w-100 mb-4"},{default:(0,n.w5)((()=>[(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,{cols:"12",class:"d-flex justify-center align-center"},{default:(0,n.w5)((()=>[(0,n._)("button",{onClick:r=>t.decreaseQuantity(e),class:"btn-product"}," - ",8,ot),(0,n._)("input",{type:"number",value:i.inputQuantity(e),onChange:t=>i.updateQuantity(e,t.target.value),class:"d-block input-product"},null,40,nt),(0,n._)("button",{onClick:r=>t.increaseQuantity(e),class:"btn-product"}," + ",8,at)])),_:2},1024)])),_:2},1024)])),_:2},1024)):((0,n.wg)(),(0,n.j4)(m,{key:0},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{onClick:t=>i.addToCart(e),class:"btn-add",id:`btn-add-${e.id}`},{default:(0,n.w5)((()=>[(0,n.Uk)("Add to Cart ")])),_:2},1032,["onClick","id"])])),_:2},1024))])),_:2},1032,["product"])])),_:2},1024)))),128))])),_:1})])),_:1}))}function st(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function ct(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?st(Object(r),!0).forEach((function(e){ut(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):st(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function ut(t,e,r){return e=lt(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function lt(t){var e=dt(t,"string");return"symbol"===typeof e?e:String(e)}function dt(t,e){if("object"!==typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var mt={data(){return{showTooltip:!1}},computed:ct(ct({},s.rn(["products","cartItems","isLoading","cartItemsStorage","images"])),{},{products(){return this.$store.getters.getData}}),methods:ct(ct({},s.nv(["fetchProducts","addToCart","removeFromCart","increaseQuantity","decreaseQuantity","updateQuantity"])),{},{updateQuantity(t,e){this.$store.commit("updateQuantity",{item:t,quantity:e})},inputQuantity(t){const e=this.cartItemsStorage.find((e=>e.name===t.name));return e&&e.quantity>0?e.quantity:0},removeFromCart(t){this.$store.dispatch("removeFromCart",t),this.$store.dispatch("open","Product removed from basket")},addToCart(t){this.$store.dispatch("addToCart",t)}}),created(){this.$store.dispatch("initializeCartItemsFromLocalStorage")},async mounted(){await this.$store.dispatch("fetchProducts")}};const pt=(0,f.Z)(mt,[["render",it],["__scopeId","data-v-49dc2d6e"]]);var ft=pt;const gt=[{path:"/",name:"Home",component:ft},{path:"/basketpage",name:"BasketPage",component:X}],yt=(0,N.p7)({history:(0,N.PO)(),routes:gt});var bt=yt;function vt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function wt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?vt(Object(r),!0).forEach((function(e){ht(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):vt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function ht(t,e,r){return e=Ot(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Ot(t){var e=jt(t,"string");return"symbol"===typeof e?e:String(e)}function jt(t,e){if("object"!==typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}const St=(t,e)=>{localStorage.setItem(t,JSON.stringify(e))},It=(0,s.MT)({namespaced:!0,state:{products:[],cartItems:[],cartItemsStorage:[],isLoading:!1,isFetched:!1,images:["https://cdn.shopify.com/s/files/1/0597/7853/1477/files/mlm-home_360x.png?v=1655992541","https://cdn.shopify.com/s/files/1/0597/7853/1477/files/hitting-home_360x.png?v=1655993152","https://cdn.shopify.com/s/files/1/0597/7853/1477/files/pitching-home_360x.png?v=1655993240","https://cdn.shopify.com/s/files/1/0597/7853/1477/files/pro3-home_360x.png?v=1655993277"],isOpen:!1,message:""},mutations:{openModal(t){t.isOpen=!0,t.message},closeModal(t){t.isOpen=!1,t.message=""},setProducts(t,e){t.products=e},setCartItemsFromLocalStorage(t){const e=JSON.parse(localStorage.getItem("cartItems"))||[];t.cartItemsStorage=e},setisLoading(t,e){t.isLoading=e},setIsFetched(t,e){t.isFetched=e},
//!!!For refractoring, try send index as a argument instead of defining index inside the functions.!!!
addToCart(t,e){const r=t.cartItemsStorage.findIndex((t=>t.name===e.name));if(-1!==r){if(t.cartItemsStorage[r].quantity+1>e.stock)return t.isOpen=!0,void(t.message="Stock limit reached!");t.cartItemsStorage[r].quantity++}else{if(e.quantity>e.stock)return t.isOpen=!0,void(t.message="Out Of Stock!");t.cartItemsStorage.push(wt(wt({},e),{},{quantity:e.quantity}))}t.isOpen=!0,t.message=`${e.name} added to the cart.`,St("cartItems",t.cartItemsStorage)},increaseQuantity(t,e){const r=t.cartItemsStorage.findIndex((t=>t.name===e.name));t.cartItemsStorage[r].quantity+1>e.stock?alert("Stock limit reached!"):(t.cartItemsStorage[r].quantity++,St("cartItems",t.cartItemsStorage))},decreaseQuantity(t,e){const r=t.cartItemsStorage.findIndex((t=>t.name===e.name));if(t.cartItemsStorage[r]&&t.cartItemsStorage[r].quantity>1)t.cartItemsStorage[r].quantity--;else{const r=t.cartItemsStorage.findIndex((t=>t.name===e.name));t.cartItemsStorage.splice(r,1);const o=t.products.findIndex((t=>t.id===e.id));let n=[...this.state.products];n[o].showInput=!1,St("productsStorage",n)}St("cartItems",t.cartItemsStorage)},removeFromCart(t,e){const r=t.cartItemsStorage.findIndex((t=>t.id===e.id));t.cartItemsStorage.splice(r,1),t.isOpen=!0,t.message=`${e.name} removed from the cart.`;const o=t.products.findIndex((t=>t.id===e.id));let n=[...this.state.products];n[o].showInput=!1,St("productsStorage",n),St("cartItems",t.cartItemsStorage)},updateQuantity(t,e){let{item:r,quantity:o}=e;const n=t.products.find((t=>t.id===r.id)),a=t.cartItemsStorage.find((t=>t.id===r.id));if(n&&a){if(o>0&&o<=n.stock)a.quantity=Number(o);else if(o<=0){const e=t.cartItemsStorage.findIndex((t=>t.name===r.name));t.cartItemsStorage.splice(e,1);const o=t.products.findIndex((t=>t.id===r.id));let n=[...this.state.products];n[o].showInput=!1,St("productsStorage",n)}St("cartItems",t.cartItemsStorage)}}},actions:{async fetchProducts(t){let{commit:e,state:r}=t;if(e("setisLoading",!0),r.isFetched){const t=JSON.parse(localStorage.getItem("productsStorage"));e("setProducts",t),e("setisLoading",!1)}else try{const t=await fetch("https://fe-test-case-eeca77cfvq-ue.a.run.app");if(!t.ok)throw new Error("Network response was not ok");const r=await t.json();if(!Array.isArray(r))throw new Error("Invalid response data format");this.products=r.map(((t,e)=>wt(wt({},t),{},{showInput:!1,quantity:1,id:e+1,showTooltip:!1,imageUrl:this.state.images[Math.floor(4*Math.random())]}))),St("productsStorage",this.products);const o=JSON.parse(localStorage.getItem("productsStorage"));e("setProducts",o),e("setIsFetched",!0),e("setisLoading",!1)}catch(o){console.error(o)}},addToCart(t,e){let{commit:r}=t;const o=this.state.products.find((t=>t.id===e.id)),n=this.state.products.findIndex((t=>t.id===e.id));if(o.stock>0){o.showInput=!0;let t=[...this.state.products];t[n].showInput=!0,St("productsStorage",t);const e=JSON.parse(localStorage.getItem("productsStorage"));r("setProducts",e)}r("addToCart",e),r("openModal"),setTimeout((()=>{r("closeModal")}),2e3)},initializeCartItemsFromLocalStorage(t){let{commit:e}=t;const r=JSON.parse(localStorage.getItem("cartItems"))||[];e("setCartItemsFromLocalStorage",r)},increaseQuantity(t,e){let{commit:r}=t;r("increaseQuantity",e)},decreaseQuantity(t,e){let{commit:r}=t;r("decreaseQuantity",e)},removeFromCart(t,e){let{commit:r}=t;r("removeFromCart",e),setTimeout((()=>{r("closeModal")}),2e3)},updateQuantity(t,e){let{commit:r}=t,{item:o,quantity:n}=e;r("updateQuantity",{item:o,quantity:n})}},getters:{itemCount:t=>t.cartItems.length,getData(t){return t.products}}});var kt=It;const _t=(0,o.ri)(k);_t.use(M),_t.use(bt),_t.use(kt),_t.mount("#app")}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,r),a.exports}r.m=t,function(){var t=[];r.O=function(e,o,n,a){if(!o){var i=1/0;for(l=0;l<t.length;l++){o=t[l][0],n=t[l][1],a=t[l][2];for(var s=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(r.O).every((function(t){return r.O[t](o[c])}))?o.splice(c--,1):(s=!1,a<i&&(i=a));if(s){t.splice(l--,1);var u=n();void 0!==u&&(e=u)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[o,n,a]}}(),function(){r.d=function(t,e){for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,a,i=o[0],s=o[1],c=o[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(c)var l=c(r)}for(e&&e(o);u<i.length;u++)a=i[u],r.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return r.O(l)},o=self["webpackChunkrapsodo_fed_test_case"]=self["webpackChunkrapsodo_fed_test_case"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(2672)}));o=r.O(o)})();
//# sourceMappingURL=app.b9628d49.js.map