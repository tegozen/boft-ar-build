(this["webpackJsonpthreejs-osora-cli"]=this["webpackJsonpthreejs-osora-cli"]||[]).push([[0],{33:function(e,t,a){e.exports=a(51)},42:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),s=a.n(c),o=a(21),i=a(20),l=(a(42),a(9)),u=a(10),m=a(12),p=a(11),d=a(14),v=a(3),f=a(7),h=a.n(f),b=a(15),E=a(32),g=a(13),k=a.n(g),N={setRedux:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign({type:"redux"},e)}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.assign({},e,t)},O={isPreloader:!1},y={actions:N,reducers:j,initialState:O},_=Math.floor,x=Math.random,w={Main:{path:"/"},Desktop:{path:"/desktop"},Mobile:{path:"/mobile"}},S={connect:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=function(e){var a={};return t.length?t.forEach((function(t){a[t]=e[t]})):Object.keys(e).forEach((function(t){"type"!==t&&(a[t]=e[t])})),a};return Object(o.b)(a,(function(e){return{setRedux:function(t){return e(y.actions.setRedux(t))}}}))(e)},dispatchEvent:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0,n=new CustomEvent(e,{detail:t});a?a.dispatchEvent(n):document.dispatchEvent(n)},randomInt:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return _(x()*(t-e+1))+e},setClasses:function(){var e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[];(t&&(n=t),a)&&(e=n).push.apply(e,Object(E.a)(Object.keys(a).map((function(e){return a[e]&&e})).filter((function(e){return e}))));return n.join(" ")},store:{get:k.a.getItem,gets:function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var a={};Promise.all(t.map(function(){var e=Object(b.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.getItem(t);case 2:return n=e.sent,a[t]=n,e.abrupt("return");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(){e(a)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),set:k.a.setItem,sets:function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(Object.keys(t).map((function(e){return k.a.setItem(e,t[e])})));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),remove:k.a.removeItem,removes:function(e){return Promise.all(e.map(function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k.a.removeItem(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},clear:k.a.clear}},C={BASESUF:window.BASESUF||""},A=["676x676","676x849","923x568","923x602"],P=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onClickPrev=function(){var e=n.state.count;if(0===e)return!1;--e>=0&&n.setState({count:e})},n.onClickNext=function(){var e=n.state.count;if(3===e)return!1;++e<4&&n.setState({count:e})},n.state={count:0},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.count;return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"header"},r.a.createElement("img",{alt:"",src:"./img/logo.png"})),r.a.createElement("div",{className:"fullSpace"},r.a.createElement("div",{className:"markerWrapper"},r.a.createElement("div",{className:S.setClasses(["marker","marker_".concat(e)])},r.a.createElement("img",{className:"marker__img",alt:"",src:"/marker/".concat(A[e],"/").concat(A[e],".png")}),r.a.createElement("img",{className:"marker__qrcode",alt:"",src:""}))),r.a.createElement("div",{className:"buttons"},r.a.createElement(d.b,{className:"button",to:C.BASESUF+w.Main.path},"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"),r.a.createElement("div",{className:S.setClasses(["button"],{button_disabled:0===e}),onClick:this.onClickPrev},"\u041f\u0440\u0435\u0434. \u041c\u0430\u043a\u0435\u0442"),r.a.createElement("div",{className:S.setClasses(["button"],{button_disabled:3===e}),onClick:this.onClickNext},"\u0421\u043b. \u041c\u0430\u043a\u0435\u0442"))))}}]),a}(r.a.Component);function q(e){var t=e.children,a=e.onClose,n=e.className;return r.a.createElement("div",{className:S.setClasses(["overlay",n])},r.a.createElement("div",{className:"overlay__closer",onClick:a}),t)}q.defaultProps={className:"",onClose:function(){return!1}};var D=q,M=a(29),I=a(30),R=a(31),U=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onClose=function(){var t=e.props,a=t.isActiveName,n=t.onClose,r=Object(M.a)({},a,!1);n?n(r):e.props.setRedux(r)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.className;return!!t&&a.html({className:n})}}]),a}(r.a.Component);U.defaultProps={isActive:!0,isActiveName:"",onClose:!1,className:""},U.html=function(e){var t=e.className;return r.a.createElement(D,{className:t},r.a.createElement("div",{className:"preloader"},r.a.createElement(I.a,{icon:R.a,spin:!0,size:"3x"})))};var B=S.connect(U,[""]),F={Header:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("img",{alt:"",src:"./img/logo.png"}))},Overlay:D,Preloader:B},T=(a(48),{Desktop:P,Mobile:function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).permissionStatus=Object(b.a)(h.a.mark((function e(){var t,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.prev=1,e.next=4,navigator.permissions.query({name:"camera"});case 4:a=e.sent,r=a.state,e.t0=r,e.next="prompt"===e.t0?9:"denied"===e.t0?11:13;break;case 9:return t.isAccess=!1,e.abrupt("break",15);case 11:return t.isAccess=r,e.abrupt("break",15);case 13:return t.isAccess=!0,e.abrupt("break",15);case 15:e.next=20;break;case 17:e.prev=17,e.t1=e.catch(1),t.isAccess=!0;case 20:n.setState(t);case 21:case"end":return e.stop()}}),e,null,[[1,17]])}))),n.requestPermission=function(){return navigator.mediaDevices.getUserMedia({video:!0}).then(n.permissionStatus).catch(n.permissionStatus)},n.renderError=function(){return r.a.createElement("div",{className:"request"},r.a.createElement("img",{className:"request__img",src:"/img/error.png",alt:""}),r.a.createElement("div",{className:"request__text"},"\u0412\u044b \u0437\u0430\u043f\u0440\u0435\u0442\u0438\u043b\u0438 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043a\u0430\u043c\u0435\u0440\u0435 \u0440\u0430\u043d\u0435\u0435. \u0412\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0434\u043e\u0441\u0442\u0443\u043f \u0432\u0440\u0443\u0447\u043d\u0443\u044e"),r.a.createElement("div",{className:"button button_center",onClick:n.requestPermission},"\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043a\u0430\u043c\u0435\u0440\u0435"))},n.renderDetection=function(){return r.a.createElement(r.a.Fragment,null,F.Preloader.html({className:"arjs-loader"}),r.a.createElement("a-scene",{"vr-mode-ui":"enabled: false;",renderer:"logarithmicDepthBuffer: true;",embedded:!0,arjs:"trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"},r.a.createElement("a-nft",{type:"nft",url:"./marker/676x676",smooth:"true",smoothCount:"10",smoothTolerance:".01",smoothThreshold:"5"},r.a.createElement("a-entity",{"gltf-model":"https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf",position:"0 0 0"})),r.a.createElement("a-entity",{camera:!0})))},n.renderRequest=function(){return r.a.createElement("div",{className:"request"},r.a.createElement("img",{className:"request__img",src:"/img/error.png",alt:""}),r.a.createElement("div",{className:"request__text"},"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u0431\u0435\u0437 \u043a\u0430\u043c\u0435\u0440\u044b, \u0432\u044b \u043d\u0435 \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u0432\u043e\u0435 \u0432\u0438\u0434\u0435\u043e"),r.a.createElement("div",{className:"button button_center",onClick:n.requestPermission},"\u0414\u0430\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043a\u0430\u043c\u0435\u0440\u0435"))},n.state={isAccess:!0},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.permissionStatus()}},{key:"render",value:function(){var e=this.state.isAccess;return r.a.createElement("div",{className:"page page_camera"},e?"denied"===e?this.renderError():this.renderDetection():this.renderRequest())}}]),a}(r.a.Component),Main:function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"page"},r.a.createElement(F.Header,null),r.a.createElement("div",{className:"fullSpace"},r.a.createElement("div",{className:"buttons"},r.a.createElement(d.b,{className:"button",to:C.BASESUF+w.Desktop.path},"\u041f\u041a"),r.a.createElement(d.b,{className:"button",to:C.BASESUF+w.Mobile.path},"\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0439"))))}}]),a}(r.a.Component)}),X=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(F.Preloader,{isActive:this.props.isPreloader,isActiveName:"isPreloader"}),r.a.createElement(d.a,null,r.a.createElement(v.c,null,Object.keys(w).map((function(e){return r.a.createElement(v.a,Object.assign({exact:!0},w[e],{path:C.BASESUF+w[e].path,key:e,component:!!T[e]&&T[e]}))})))))}}]),a}(r.a.Component),W=S.connect(X);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(50);var H=Object(i.b)(y.reducers,y.initialState,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__({trace:!0}));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:H},r.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.fb0cdba5.chunk.js.map