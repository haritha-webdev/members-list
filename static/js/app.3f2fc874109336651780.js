webpackJsonp([1],{"3qUk":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header"},[s("div",{staticClass:"inputWrap"},[s("i",{staticClass:"bi bi-search"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.searchText},on:{keyup:function(e){return t.$emitter.$emit("searchEvent",t.searchText)},input:function(e){e.target.composing||(t.searchText=e.target.value)}}})])])},staticRenderFns:[]},a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("p",{staticClass:"companyName"},[this._v("Talentship.io")]),this._v(" "),e("p",{staticClass:"infoTexts"},[this._v("Social Media Links")]),this._v(" "),e("div",{staticClass:"iconsWrap"},[e("i",{staticClass:"bi bi-facebook"}),this._v(" "),e("i",{staticClass:"bi bi-linkedin"}),this._v(" "),e("i",{staticClass:"bi bi-instagram"})])])}]},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contentWrap"},[e("div",{staticClass:"breadCrumb"},[e("router-link",{attrs:{to:"/"}},[this._v("Home")]),this._v(" "),this.$route.path.indexOf("/members")>-1?e("router-link",{attrs:{to:"/members"}},[this._v("Members")]):this._e()],1),this._v(" "),e("router-view")],1)},staticRenderFns:[]},o={components:{HeaderContent:s("VU/8")({data:function(){return{searchText:""}}},r,!1,null,null,null).exports,FooterContent:s("VU/8")({},a,!1,null,null,null).exports,BodyContent:s("VU/8")({},n,!1,null,null,null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("header-content"),this._v(" "),e("body-content"),this._v(" "),e("footer-content")],1)},staticRenderFns:[]};var l=s("VU/8")(o,c,!1,function(t){s("oEF+")},null,null).exports,d=s("/ocq"),u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"homeView"},[e("router-link",{staticClass:"btn btn-primary",attrs:{tag:"button",to:"/members"}},[this._v("List of Members")]),this._v(" "),e("button",{staticClass:"btn btn-warning"},[this._v("Some Other Info")]),this._v(" "),e("button",{staticClass:"btn btn-danger"},[this._v("Some Other Info")])],1)},staticRenderFns:[]},h=s("VU/8")({},u,!1,null,null,null).exports,v=s("YsDo"),m=s.n(v),p={render:function(){var t=this.$createElement,e=this._self._c||t;return this.loading?e("div",{attrs:{id:"loading-wrapper"}},[e("div",{attrs:{id:"loading-text"}},[this._v("LOADING")]),this._v(" "),e("div",{attrs:{id:"loading-content"}})]):this._e()},staticRenderFns:[]};var f=s("VU/8")({props:["loading"]},p,!1,function(t){s("3qUk")},"data-v-2d87463c",null).exports,_={components:{JwPagination:m.a,PageLoader:f},data:function(){return{profiles:[],pageOfItems:[],pageLength:6,searchTerm:"",mode:"name",sortMode:"name",viewMore:!1,isLoading:!1}},computed:{filteredProfiles:function(){var t=this,e=this;return this.searchTerm?this.profiles.filter(function(e){var s=e.name.toLowerCase();"city"===t.mode&&(s=e.address.city.toLowerCase());var i=t.searchTerm.toLowerCase();return s.includes(i)}):this.profiles.slice().sort(function(t,s){return"street"===e.sortMode?t.address.street>s.address.street?1:-1:"city"===e.sortMode?t.address.city>s.address.city?1:-1:t.name>s.name?1:-1})}},created:function(){var t=this,e=this;e.isLoading=!0,e.$store.dispatch("fetchProfiles").then(function(){e.profiles=e.$store.state.userProfiles,e.isLoading=!1}),this.$emitter.$on("searchEvent",function(e){t.searchTerm=e})},methods:{onChangePage:function(t){this.pageOfItems=t},filterCity:function(t){t.target.checked?(this.mode="city",this.searchTerm=t.target.value):(this.mode="name",this.searchTerm="")},orderBySelection:function(t){var e=t.target.value;this.sortMode=e,this.searchTerm=""}}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.profiles.length>0?s("div",{staticClass:"memberView"},[s("h3",[t._v("List a member")]),t._v(" "),s("div",{staticClass:"contentLayout col-xs-12 col-sm-2 col-md-2"},[s("div",{staticClass:"layoutWrap"},[s("h5",[t._v("Location")]),t._v(" "),t._l(t.profiles,function(e,i){return s("div",{key:"filter_"+e.id,staticClass:"form-check",class:i>=5&&!t.viewMore?"hideChks":""},[i<5||t.viewMore?s("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"chk_"+e.id},domProps:{value:e.address.city},on:{change:function(e){return t.filterCity(e)}}}):t._e(),t._v(" "),i<5||t.viewMore?s("label",{staticClass:"form-check-label",class:i>=5&&!t.viewMore?"hideChks":"",attrs:{for:"chk_"+e.id}},[t._v("\n          "+t._s(e.address.city)+"\n        ")]):t._e()])}),t._v(" "),s("p",{staticClass:"viewMore",on:{click:function(e){t.viewMore=!t.viewMore}}},[t._v("\n        "+t._s(t.viewMore?"View Less":"View More")+"\n      ")])],2)]),t._v(" "),s("div",{staticClass:"contentLayout col-xs-12 col-sm-9 col-md-9"},[s("div",{staticClass:"layoutWrap controlPanel"},[s("span",[t._v("showing "+t._s(t.pageOfItems.length)+" out of\n        "+t._s(t.profiles.length)+" items")]),t._v(" "),s("div",{staticClass:"orderFilter"},[s("span",[t._v("Order By: ")]),t._v(" "),s("select",{staticClass:"form-select",attrs:{"aria-label":"Default select example"},on:{change:t.orderBySelection}},[s("option",{attrs:{selected:"",value:"name"}},[t._v("Name")]),t._v(" "),s("option",{attrs:{value:"street"}},[t._v("Street")]),t._v(" "),s("option",{attrs:{value:"city"}},[t._v("City")])])])])]),t._v(" "),s("div",{staticClass:"contentLayout col-xs-12 col-sm-9 col-md-9"},[s("ul",{staticClass:"memberList"},t._l(t.pageOfItems,function(e){return s("li",{key:e.id,staticClass:"col-xs-12 col-sm-4 col-md-4"},[s("div",{staticClass:"members"},[s("div",{staticClass:"img"}),t._v(" "),s("p",{staticClass:"profileName"},[t._v(t._s(e.name))]),t._v(" "),s("p",{staticClass:"profileEmail"},[t._v(t._s(e.email))]),t._v(" "),s("p",{staticClass:"profileAddress"},[t._v("\n            "+t._s(e.address.suite)+", "+t._s(e.address.street)+"\n          ")]),t._v(" "),s("p",{staticClass:"profileCity"},[t._v("\n            "+t._s(e.address.city)+" - "+t._s(e.address.zipcode)+"\n          ")])])])}),0),t._v(" "),s("div",{staticClass:"paginationWrap"},[s("jw-pagination",{attrs:{items:t.filteredProfiles,pageSize:t.pageLength},on:{changePage:t.onChangePage}})],1)])]):s("div",[s("page-loader",{attrs:{loading:t.isLoading}})],1)},staticRenderFns:[]},g=s("VU/8")(_,C,!1,null,null,null).exports;i.a.use(d.a);var b=new d.a({mode:"history",routes:[{path:"/",component:h},{path:"/members",component:g}]}),y=s("Xxa5"),w=s.n(y),x=s("exGp"),k=s.n(x),L=s("NYxO");i.a.use(L.a);var E=new L.a.Store({state:{userProfiles:[]},mutations:{SET_PROFILES:function(t,e){return t.userProfiles=e}},actions:{fetchProfiles:function(t){var e=this,s=t.commit;return k()(w.a.mark(function t(){return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s("SET_PROFILES",[]),t.next=3,fetch("https://jsonplaceholder.typicode.com/users").then(function(t){return t.json().then(function(t){s("SET_PROFILES",t)})});case 3:case"end":return t.stop()}},t,e)}))()}}});i.a.config.productionTip=!1;var P=new i.a;i.a.prototype.$emitter=P,new i.a({el:"#app",router:b,store:E,mode:"history",components:{App:l},template:"<App/>"})},"oEF+":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3f2fc874109336651780.js.map