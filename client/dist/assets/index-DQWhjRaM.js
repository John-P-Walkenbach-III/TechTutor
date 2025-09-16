(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function i_(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Df={exports:{}},ml={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv;function oS(){if(Iv)return ml;Iv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,a,u){var d=null;if(u!==void 0&&(d=""+u),a.key!==void 0&&(d=""+a.key),"key"in a){u={};for(var p in a)p!=="key"&&(u[p]=a[p])}else u=a;return a=u.ref,{$$typeof:r,type:s,key:d,ref:a!==void 0?a:null,props:u}}return ml.Fragment=e,ml.jsx=n,ml.jsxs=n,ml}var kv;function aS(){return kv||(kv=1,Df.exports=oS()),Df.exports}var E=aS(),Nf={exports:{}},Re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv;function lS(){if(xv)return Re;xv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),S=Symbol.iterator;function k(x){return x===null||typeof x!="object"?null:(x=S&&x[S]||x["@@iterator"],typeof x=="function"?x:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,$={};function G(x,J,ae){this.props=x,this.context=J,this.refs=$,this.updater=ae||L}G.prototype.isReactComponent={},G.prototype.setState=function(x,J){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,J,"setState")},G.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function re(){}re.prototype=G.prototype;function ee(x,J,ae){this.props=x,this.context=J,this.refs=$,this.updater=ae||L}var ne=ee.prototype=new re;ne.constructor=ee,W(ne,G.prototype),ne.isPureReactComponent=!0;var he=Array.isArray,ce={H:null,A:null,T:null,S:null,V:null},ve=Object.prototype.hasOwnProperty;function M(x,J,ae,ie,pe,Ie){return ae=Ie.ref,{$$typeof:r,type:x,key:J,ref:ae!==void 0?ae:null,props:Ie}}function A(x,J){return M(x.type,J,void 0,void 0,void 0,x.props)}function R(x){return typeof x=="object"&&x!==null&&x.$$typeof===r}function N(x){var J={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ae){return J[ae]})}var O=/\/+/g;function V(x,J){return typeof x=="object"&&x!==null&&x.key!=null?N(""+x.key):J.toString(36)}function I(){}function Ot(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(I,I):(x.status="pending",x.then(function(J){x.status==="pending"&&(x.status="fulfilled",x.value=J)},function(J){x.status==="pending"&&(x.status="rejected",x.reason=J)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function st(x,J,ae,ie,pe){var Ie=typeof x;(Ie==="undefined"||Ie==="boolean")&&(x=null);var Te=!1;if(x===null)Te=!0;else switch(Ie){case"bigint":case"string":case"number":Te=!0;break;case"object":switch(x.$$typeof){case r:case e:Te=!0;break;case _:return Te=x._init,st(Te(x._payload),J,ae,ie,pe)}}if(Te)return pe=pe(x),Te=ie===""?"."+V(x,0):ie,he(pe)?(ae="",Te!=null&&(ae=Te.replace(O,"$&/")+"/"),st(pe,J,ae,"",function(jn){return jn})):pe!=null&&(R(pe)&&(pe=A(pe,ae+(pe.key==null||x&&x.key===pe.key?"":(""+pe.key).replace(O,"$&/")+"/")+Te)),J.push(pe)),1;Te=0;var Ct=ie===""?".":ie+":";if(he(x))for(var Je=0;Je<x.length;Je++)ie=x[Je],Ie=Ct+V(ie,Je),Te+=st(ie,J,ae,Ie,pe);else if(Je=k(x),typeof Je=="function")for(x=Je.call(x),Je=0;!(ie=x.next()).done;)ie=ie.value,Ie=Ct+V(ie,Je++),Te+=st(ie,J,ae,Ie,pe);else if(Ie==="object"){if(typeof x.then=="function")return st(Ot(x),J,ae,ie,pe);throw J=String(x),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Te}function Y(x,J,ae){if(x==null)return x;var ie=[],pe=0;return st(x,ie,"","",function(Ie){return J.call(ae,Ie,pe++)}),ie}function oe(x){if(x._status===-1){var J=x._result;J=J(),J.then(function(ae){(x._status===0||x._status===-1)&&(x._status=1,x._result=ae)},function(ae){(x._status===0||x._status===-1)&&(x._status=2,x._result=ae)}),x._status===-1&&(x._status=0,x._result=J)}if(x._status===1)return x._result.default;throw x._result}var fe=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function je(){}return Re.Children={map:Y,forEach:function(x,J,ae){Y(x,function(){J.apply(this,arguments)},ae)},count:function(x){var J=0;return Y(x,function(){J++}),J},toArray:function(x){return Y(x,function(J){return J})||[]},only:function(x){if(!R(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},Re.Component=G,Re.Fragment=n,Re.Profiler=a,Re.PureComponent=ee,Re.StrictMode=s,Re.Suspense=g,Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ce,Re.__COMPILER_RUNTIME={__proto__:null,c:function(x){return ce.H.useMemoCache(x)}},Re.cache=function(x){return function(){return x.apply(null,arguments)}},Re.cloneElement=function(x,J,ae){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var ie=W({},x.props),pe=x.key,Ie=void 0;if(J!=null)for(Te in J.ref!==void 0&&(Ie=void 0),J.key!==void 0&&(pe=""+J.key),J)!ve.call(J,Te)||Te==="key"||Te==="__self"||Te==="__source"||Te==="ref"&&J.ref===void 0||(ie[Te]=J[Te]);var Te=arguments.length-2;if(Te===1)ie.children=ae;else if(1<Te){for(var Ct=Array(Te),Je=0;Je<Te;Je++)Ct[Je]=arguments[Je+2];ie.children=Ct}return M(x.type,pe,void 0,void 0,Ie,ie)},Re.createContext=function(x){return x={$$typeof:d,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:u,_context:x},x},Re.createElement=function(x,J,ae){var ie,pe={},Ie=null;if(J!=null)for(ie in J.key!==void 0&&(Ie=""+J.key),J)ve.call(J,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(pe[ie]=J[ie]);var Te=arguments.length-2;if(Te===1)pe.children=ae;else if(1<Te){for(var Ct=Array(Te),Je=0;Je<Te;Je++)Ct[Je]=arguments[Je+2];pe.children=Ct}if(x&&x.defaultProps)for(ie in Te=x.defaultProps,Te)pe[ie]===void 0&&(pe[ie]=Te[ie]);return M(x,Ie,void 0,void 0,null,pe)},Re.createRef=function(){return{current:null}},Re.forwardRef=function(x){return{$$typeof:p,render:x}},Re.isValidElement=R,Re.lazy=function(x){return{$$typeof:_,_payload:{_status:-1,_result:x},_init:oe}},Re.memo=function(x,J){return{$$typeof:y,type:x,compare:J===void 0?null:J}},Re.startTransition=function(x){var J=ce.T,ae={};ce.T=ae;try{var ie=x(),pe=ce.S;pe!==null&&pe(ae,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(je,fe)}catch(Ie){fe(Ie)}finally{ce.T=J}},Re.unstable_useCacheRefresh=function(){return ce.H.useCacheRefresh()},Re.use=function(x){return ce.H.use(x)},Re.useActionState=function(x,J,ae){return ce.H.useActionState(x,J,ae)},Re.useCallback=function(x,J){return ce.H.useCallback(x,J)},Re.useContext=function(x){return ce.H.useContext(x)},Re.useDebugValue=function(){},Re.useDeferredValue=function(x,J){return ce.H.useDeferredValue(x,J)},Re.useEffect=function(x,J,ae){var ie=ce.H;if(typeof ae=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ie.useEffect(x,J)},Re.useId=function(){return ce.H.useId()},Re.useImperativeHandle=function(x,J,ae){return ce.H.useImperativeHandle(x,J,ae)},Re.useInsertionEffect=function(x,J){return ce.H.useInsertionEffect(x,J)},Re.useLayoutEffect=function(x,J){return ce.H.useLayoutEffect(x,J)},Re.useMemo=function(x,J){return ce.H.useMemo(x,J)},Re.useOptimistic=function(x,J){return ce.H.useOptimistic(x,J)},Re.useReducer=function(x,J,ae){return ce.H.useReducer(x,J,ae)},Re.useRef=function(x){return ce.H.useRef(x)},Re.useState=function(x){return ce.H.useState(x)},Re.useSyncExternalStore=function(x,J,ae){return ce.H.useSyncExternalStore(x,J,ae)},Re.useTransition=function(){return ce.H.useTransition()},Re.version="19.1.1",Re}var Dv;function Tp(){return Dv||(Dv=1,Nf.exports=lS()),Nf.exports}var j=Tp();const ri=i_(j);var Mf={exports:{}},yl={},Of={exports:{}},Pf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv;function uS(){return Nv||(Nv=1,(function(r){function e(Y,oe){var fe=Y.length;Y.push(oe);e:for(;0<fe;){var je=fe-1>>>1,x=Y[je];if(0<a(x,oe))Y[je]=oe,Y[fe]=x,fe=je;else break e}}function n(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var oe=Y[0],fe=Y.pop();if(fe!==oe){Y[0]=fe;e:for(var je=0,x=Y.length,J=x>>>1;je<J;){var ae=2*(je+1)-1,ie=Y[ae],pe=ae+1,Ie=Y[pe];if(0>a(ie,fe))pe<x&&0>a(Ie,ie)?(Y[je]=Ie,Y[pe]=fe,je=pe):(Y[je]=ie,Y[ae]=fe,je=ae);else if(pe<x&&0>a(Ie,fe))Y[je]=Ie,Y[pe]=fe,je=pe;else break e}}return oe}function a(Y,oe){var fe=Y.sortIndex-oe.sortIndex;return fe!==0?fe:Y.id-oe.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now();r.unstable_now=function(){return d.now()-p}}var g=[],y=[],_=1,S=null,k=3,L=!1,W=!1,$=!1,G=!1,re=typeof setTimeout=="function"?setTimeout:null,ee=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;function he(Y){for(var oe=n(y);oe!==null;){if(oe.callback===null)s(y);else if(oe.startTime<=Y)s(y),oe.sortIndex=oe.expirationTime,e(g,oe);else break;oe=n(y)}}function ce(Y){if($=!1,he(Y),!W)if(n(g)!==null)W=!0,ve||(ve=!0,V());else{var oe=n(y);oe!==null&&st(ce,oe.startTime-Y)}}var ve=!1,M=-1,A=5,R=-1;function N(){return G?!0:!(r.unstable_now()-R<A)}function O(){if(G=!1,ve){var Y=r.unstable_now();R=Y;var oe=!0;try{e:{W=!1,$&&($=!1,ee(M),M=-1),L=!0;var fe=k;try{t:{for(he(Y),S=n(g);S!==null&&!(S.expirationTime>Y&&N());){var je=S.callback;if(typeof je=="function"){S.callback=null,k=S.priorityLevel;var x=je(S.expirationTime<=Y);if(Y=r.unstable_now(),typeof x=="function"){S.callback=x,he(Y),oe=!0;break t}S===n(g)&&s(g),he(Y)}else s(g);S=n(g)}if(S!==null)oe=!0;else{var J=n(y);J!==null&&st(ce,J.startTime-Y),oe=!1}}break e}finally{S=null,k=fe,L=!1}oe=void 0}}finally{oe?V():ve=!1}}}var V;if(typeof ne=="function")V=function(){ne(O)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,Ot=I.port2;I.port1.onmessage=O,V=function(){Ot.postMessage(null)}}else V=function(){re(O,0)};function st(Y,oe){M=re(function(){Y(r.unstable_now())},oe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Y){Y.callback=null},r.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<Y?Math.floor(1e3/Y):5},r.unstable_getCurrentPriorityLevel=function(){return k},r.unstable_next=function(Y){switch(k){case 1:case 2:case 3:var oe=3;break;default:oe=k}var fe=k;k=oe;try{return Y()}finally{k=fe}},r.unstable_requestPaint=function(){G=!0},r.unstable_runWithPriority=function(Y,oe){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var fe=k;k=Y;try{return oe()}finally{k=fe}},r.unstable_scheduleCallback=function(Y,oe,fe){var je=r.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?je+fe:je):fe=je,Y){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=fe+x,Y={id:_++,callback:oe,priorityLevel:Y,startTime:fe,expirationTime:x,sortIndex:-1},fe>je?(Y.sortIndex=fe,e(y,Y),n(g)===null&&Y===n(y)&&($?(ee(M),M=-1):$=!0,st(ce,fe-je))):(Y.sortIndex=x,e(g,Y),W||L||(W=!0,ve||(ve=!0,V()))),Y},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(Y){var oe=k;return function(){var fe=k;k=oe;try{return Y.apply(this,arguments)}finally{k=fe}}}})(Pf)),Pf}var Mv;function cS(){return Mv||(Mv=1,Of.exports=uS()),Of.exports}var Vf={exports:{}},Wt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov;function hS(){if(Ov)return Wt;Ov=1;var r=Tp();function e(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)y+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},a=Symbol.for("react.portal");function u(g,y,_){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:S==null?null:""+S,children:g,containerInfo:y,implementation:_}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Wt.createPortal=function(g,y){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return u(g,y,null,_)},Wt.flushSync=function(g){var y=d.T,_=s.p;try{if(d.T=null,s.p=2,g)return g()}finally{d.T=y,s.p=_,s.d.f()}},Wt.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(g,y))},Wt.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Wt.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var _=y.as,S=p(_,y.crossOrigin),k=typeof y.integrity=="string"?y.integrity:void 0,L=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;_==="style"?s.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:S,integrity:k,fetchPriority:L}):_==="script"&&s.d.X(g,{crossOrigin:S,integrity:k,fetchPriority:L,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Wt.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var _=p(y.as,y.crossOrigin);s.d.M(g,{crossOrigin:_,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(g)},Wt.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var _=y.as,S=p(_,y.crossOrigin);s.d.L(g,_,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Wt.preloadModule=function(g,y){if(typeof g=="string")if(y){var _=p(y.as,y.crossOrigin);s.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:_,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(g)},Wt.requestFormReset=function(g){s.d.r(g)},Wt.unstable_batchedUpdates=function(g,y){return g(y)},Wt.useFormState=function(g,y,_){return d.H.useFormState(g,y,_)},Wt.useFormStatus=function(){return d.H.useHostTransitionStatus()},Wt.version="19.1.1",Wt}var Pv;function dS(){if(Pv)return Vf.exports;Pv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Vf.exports=hS(),Vf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vv;function fS(){if(Vv)return yl;Vv=1;var r=cS(),e=Tp(),n=dS();function s(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function d(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(s(188))}function g(t){var i=t.alternate;if(!i){if(i=u(t),i===null)throw Error(s(188));return i!==t?null:t}for(var o=t,l=i;;){var h=o.return;if(h===null)break;var f=h.alternate;if(f===null){if(l=h.return,l!==null){o=l;continue}break}if(h.child===f.child){for(f=h.child;f;){if(f===o)return p(h),t;if(f===l)return p(h),i;f=f.sibling}throw Error(s(188))}if(o.return!==l.return)o=h,l=f;else{for(var w=!1,b=h.child;b;){if(b===o){w=!0,o=h,l=f;break}if(b===l){w=!0,l=h,o=f;break}b=b.sibling}if(!w){for(b=f.child;b;){if(b===o){w=!0,o=f,l=h;break}if(b===l){w=!0,l=f,o=h;break}b=b.sibling}if(!w)throw Error(s(189))}}if(o.alternate!==l)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?t:i}function y(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=y(t),i!==null)return i;t=t.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),re=Symbol.for("react.provider"),ee=Symbol.for("react.consumer"),ne=Symbol.for("react.context"),he=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),ve=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),O=Symbol.iterator;function V(t){return t===null||typeof t!="object"?null:(t=O&&t[O]||t["@@iterator"],typeof t=="function"?t:null)}var I=Symbol.for("react.client.reference");function Ot(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===I?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case W:return"Fragment";case G:return"Profiler";case $:return"StrictMode";case ce:return"Suspense";case ve:return"SuspenseList";case R:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case L:return"Portal";case ne:return(t.displayName||"Context")+".Provider";case ee:return(t._context.displayName||"Context")+".Consumer";case he:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case M:return i=t.displayName||null,i!==null?i:Ot(t.type)||"Memo";case A:i=t._payload,t=t._init;try{return Ot(t(i))}catch{}}return null}var st=Array.isArray,Y=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},je=[],x=-1;function J(t){return{current:t}}function ae(t){0>x||(t.current=je[x],je[x]=null,x--)}function ie(t,i){x++,je[x]=t.current,t.current=i}var pe=J(null),Ie=J(null),Te=J(null),Ct=J(null);function Je(t,i){switch(ie(Te,i),ie(Ie,t),ie(pe,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?nv(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=nv(i),t=iv(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ae(pe),ie(pe,t)}function jn(){ae(pe),ae(Ie),ae(Te)}function Zi(t){t.memoizedState!==null&&ie(Ct,t);var i=pe.current,o=iv(i,t.type);i!==o&&(ie(Ie,t),ie(pe,o))}function fi(t){Ie.current===t&&(ae(pe),ae(Ie)),Ct.current===t&&(ae(Ct),hl._currentValue=fe)}var Gr=Object.prototype.hasOwnProperty,Wr=r.unstable_scheduleCallback,Yr=r.unstable_cancelCallback,la=r.unstable_shouldYield,su=r.unstable_requestPaint,mn=r.unstable_now,xh=r.unstable_getCurrentPriorityLevel,ua=r.unstable_ImmediatePriority,js=r.unstable_UserBlockingPriority,Kr=r.unstable_NormalPriority,Dh=r.unstable_LowPriority,Bs=r.unstable_IdlePriority,ca=r.log,ou=r.unstable_setDisableYieldValue,ot=null,He=null;function on(t){if(typeof ca=="function"&&ou(t),He&&typeof He.setStrictMode=="function")try{He.setStrictMode(ot,t)}catch{}}var Ft=Math.clz32?Math.clz32:Qr,au=Math.log,Nh=Math.LN2;function Qr(t){return t>>>=0,t===0?32:31-(au(t)/Nh|0)|0}var Xr=256,$r=4194304;function Dn(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function qs(t,i,o){var l=t.pendingLanes;if(l===0)return 0;var h=0,f=t.suspendedLanes,w=t.pingedLanes;t=t.warmLanes;var b=l&134217727;return b!==0?(l=b&~f,l!==0?h=Dn(l):(w&=b,w!==0?h=Dn(w):o||(o=b&~t,o!==0&&(h=Dn(o))))):(b=l&~f,b!==0?h=Dn(b):w!==0?h=Dn(w):o||(o=l&~t,o!==0&&(h=Dn(o)))),h===0?0:i!==0&&i!==h&&(i&f)===0&&(f=h&-h,o=i&-i,f>=o||f===32&&(o&4194048)!==0)?i:h}function Jr(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function ha(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function da(){var t=Xr;return Xr<<=1,(Xr&4194048)===0&&(Xr=256),t}function fa(){var t=$r;return $r<<=1,($r&62914560)===0&&($r=4194304),t}function pi(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function gi(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function pa(t,i,o,l,h,f){var w=t.pendingLanes;t.pendingLanes=o,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=o,t.entangledLanes&=o,t.errorRecoveryDisabledLanes&=o,t.shellSuspendCounter=0;var b=t.entanglements,C=t.expirationTimes,B=t.hiddenUpdates;for(o=w&~o;0<o;){var K=31-Ft(o),X=1<<K;b[K]=0,C[K]=-1;var q=B[K];if(q!==null)for(B[K]=null,K=0;K<q.length;K++){var H=q[K];H!==null&&(H.lane&=-536870913)}o&=~X}l!==0&&Bn(t,l,0),f!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=f&~(w&~i))}function Bn(t,i,o){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Ft(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|o&4194090}function ga(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-Ft(o),h=1<<l;h&i|t[l]&i&&(t[l]|=i),o&=~h}}function er(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Hs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function tr(){var t=oe.p;return t!==0?t:(t=window.event,t===void 0?32:Tv(t.type))}function lu(t,i){var o=oe.p;try{return oe.p=t,i()}finally{oe.p=o}}var et=Math.random().toString(36).slice(2),_t="__reactFiber$"+et,gt="__reactProps$"+et,yn="__reactContainer$"+et,ma="__reactEvents$"+et,Mh="__reactListeners$"+et,nr="__reactHandles$"+et,uu="__reactResources$"+et,Zr="__reactMarker$"+et;function ir(t){delete t[_t],delete t[gt],delete t[ma],delete t[Mh],delete t[nr]}function mi(t){var i=t[_t];if(i)return i;for(var o=t.parentNode;o;){if(i=o[yn]||o[_t]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=av(t);t!==null;){if(o=t[_t])return o;t=av(t)}return i}t=o,o=t.parentNode}return null}function qn(t){if(t=t[_t]||t[yn]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function Hn(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(s(33))}function $t(t){var i=t[uu];return i||(i=t[uu]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ct(t){t[Zr]=!0}var ya=new Set,Fs={};function Nn(t,i){yi(t,i),yi(t+"Capture",i)}function yi(t,i){for(Fs[t]=i,t=0;t<i.length;t++)ya.add(i[t])}var cu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),hu={},es={};function du(t){return Gr.call(es,t)?!0:Gr.call(hu,t)?!1:cu.test(t)?es[t]=!0:(hu[t]=!0,!1)}function rr(t,i,o){if(du(i))if(o===null)t.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+o)}}function Fn(t,i,o){if(o===null)t.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+o)}}function Pt(t,i,o,l){if(l===null)t.removeAttribute(o);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(o);return}t.setAttributeNS(i,o,""+l)}}var ts,fu;function vi(t){if(ts===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);ts=i&&i[1]||"",fu=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ts+t+fu}var Gs=!1;function Ws(t,i){if(!t||Gs)return"";Gs=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(H){var q=H}Reflect.construct(t,[],X)}else{try{X.call()}catch(H){q=H}t.call(X.prototype)}}else{try{throw Error()}catch(H){q=H}(X=t())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(H){if(H&&q&&typeof H.stack=="string")return[H.stack,q.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),w=f[0],b=f[1];if(w&&b){var C=w.split(`
`),B=b.split(`
`);for(h=l=0;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;for(;h<B.length&&!B[h].includes("DetermineComponentFrameRoot");)h++;if(l===C.length||h===B.length)for(l=C.length-1,h=B.length-1;1<=l&&0<=h&&C[l]!==B[h];)h--;for(;1<=l&&0<=h;l--,h--)if(C[l]!==B[h]){if(l!==1||h!==1)do if(l--,h--,0>h||C[l]!==B[h]){var K=`
`+C[l].replace(" at new "," at ");return t.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",t.displayName)),K}while(1<=l&&0<=h);break}}}finally{Gs=!1,Error.prepareStackTrace=o}return(o=t?t.displayName||t.name:"")?vi(o):""}function va(t){switch(t.tag){case 26:case 27:case 5:return vi(t.type);case 16:return vi("Lazy");case 13:return vi("Suspense");case 19:return vi("SuspenseList");case 0:case 15:return Ws(t.type,!1);case 11:return Ws(t.type.render,!1);case 1:return Ws(t.type,!0);case 31:return vi("Activity");default:return""}}function Ys(t){try{var i="";do i+=va(t),t=t.return;while(t);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function Jt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wa(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Oh(t){var i=wa(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,f=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(w){l=""+w,f.call(this,w)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(w){l=""+w},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ks(t){t._valueTracker||(t._valueTracker=Oh(t))}function _a(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=wa(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function ns(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ph=/[\n"\\]/g;function mt(t){return t.replace(Ph,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function an(t,i,o,l,h,f,w,b){t.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.type=w:t.removeAttribute("type"),i!=null?w==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+Jt(i)):t.value!==""+Jt(i)&&(t.value=""+Jt(i)):w!=="submit"&&w!=="reset"||t.removeAttribute("value"),i!=null?sr(t,w,Jt(i)):o!=null?sr(t,w,Jt(o)):l!=null&&t.removeAttribute("value"),h==null&&f!=null&&(t.defaultChecked=!!f),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+Jt(b):t.removeAttribute("name")}function is(t,i,o,l,h,f,w,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),i!=null||o!=null){if(!(f!=="submit"&&f!=="reset"||i!=null))return;o=o!=null?""+Jt(o):"",i=i!=null?""+Jt(i):o,b||i===t.value||(t.value=i),t.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=b?t.checked:!!l,t.defaultChecked=!!l,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(t.name=w)}function sr(t,i,o){i==="number"&&ns(t.ownerDocument)===t||t.defaultValue===""+o||(t.defaultValue=""+o)}function wi(t,i,o,l){if(t=t.options,i){i={};for(var h=0;h<o.length;h++)i["$"+o[h]]=!0;for(o=0;o<t.length;o++)h=i.hasOwnProperty("$"+t[o].value),t[o].selected!==h&&(t[o].selected=h),h&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Jt(o),i=null,h=0;h<t.length;h++){if(t[h].value===o){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function Ye(t,i,o){if(i!=null&&(i=""+Jt(i),i!==t.value&&(t.value=i),o==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=o!=null?""+Jt(o):""}function rs(t,i,o,l){if(i==null){if(l!=null){if(o!=null)throw Error(s(92));if(st(l)){if(1<l.length)throw Error(s(93));l=l[0]}o=l}o==null&&(o=""),i=o}o=Jt(i),t.defaultValue=o,l=t.textContent,l===o&&l!==""&&l!==null&&(t.value=l)}function vn(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var ss=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pu(t,i,o){var l=i.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,o):typeof o!="number"||o===0||ss.has(i)?i==="float"?t.cssFloat=o:t[i]=(""+o).trim():t[i]=o+"px"}function ba(t,i,o){if(i!=null&&typeof i!="object")throw Error(s(62));if(t=t.style,o!=null){for(var l in o)!o.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&o[h]!==l&&pu(t,h,l)}else for(var f in i)i.hasOwnProperty(f)&&pu(t,f,i[f])}function Ta(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Lh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qs(t){return Lh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var _i=null;function wn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bi=null,Ti=null;function Ea(t){var i=qn(t);if(i&&(t=i.stateNode)){var o=t[gt]||null;e:switch(t=i.stateNode,i.type){case"input":if(an(t,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+mt(""+i)+'"][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var h=l[gt]||null;if(!h)throw Error(s(90));an(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<o.length;i++)l=o[i],l.form===t.form&&_a(l)}break e;case"textarea":Ye(t,o.value,o.defaultValue);break e;case"select":i=o.value,i!=null&&wi(t,!!o.multiple,i,!1)}}}var Gn=!1;function gu(t,i,o){if(Gn)return t(i,o);Gn=!0;try{var l=t(i);return l}finally{if(Gn=!1,(bi!==null||Ti!==null)&&(lc(),bi&&(i=bi,t=Ti,Ti=bi=null,Ea(i),t)))for(i=0;i<t.length;i++)Ea(t[i])}}function os(t,i){var o=t.stateNode;if(o===null)return null;var l=o[gt]||null;if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(s(231,i,typeof o));return o}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_n=!1;if(Mn)try{var as={};Object.defineProperty(as,"passive",{get:function(){_n=!0}}),window.addEventListener("test",as,as),window.removeEventListener("test",as,as)}catch{_n=!1}var Wn=null,or=null,Ei=null;function Sa(){if(Ei)return Ei;var t,i=or,o=i.length,l,h="value"in Wn?Wn.value:Wn.textContent,f=h.length;for(t=0;t<o&&i[t]===h[t];t++);var w=o-t;for(l=1;l<=w&&i[o-l]===h[f-l];l++);return Ei=h.slice(t,1<l?1-l:void 0)}function Yn(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Kn(){return!0}function Aa(){return!1}function It(t){function i(o,l,h,f,w){this._reactName=o,this._targetInst=h,this.type=l,this.nativeEvent=f,this.target=w,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(o=t[b],this[b]=o?o(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Kn:Aa,this.isPropagationStopped=Aa,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Kn)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Kn)},persist:function(){},isPersistent:Kn}),i}var qe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xs=It(qe),ls=_({},qe,{view:0,detail:0}),mu=It(ls),$s,Js,Qn,us=_({},ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ds,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qn&&(Qn&&t.type==="mousemove"?($s=t.screenX-Qn.screenX,Js=t.screenY-Qn.screenY):Js=$s=0,Qn=t),$s)},movementY:function(t){return"movementY"in t?t.movementY:Js}}),bn=It(us),yu=_({},us,{dataTransfer:0}),Uh=It(yu),cs=_({},ls,{relatedTarget:0}),Zs=It(cs),Ra=_({},qe,{animationName:0,elapsedTime:0,pseudoElement:0}),eo=It(Ra),vu=_({},qe,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),to=It(vu),zh=_({},qe,{data:0}),Ca=It(zh),hs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_u={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ia(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=_u[t])?!!i[t]:!1}function ds(){return Ia}var bu=_({},ls,{key:function(t){if(t.key){var i=hs[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Yn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ds,charCode:function(t){return t.type==="keypress"?Yn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),no=It(bu),Tu=_({},us,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ka=It(Tu),Si=_({},ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ds}),Eu=It(Si),Su=_({},qe,{propertyName:0,elapsedTime:0,pseudoElement:0}),Au=It(Su),Ru=_({},us,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),io=It(Ru),Zt=_({},qe,{newState:0,oldState:0}),Cu=It(Zt),Iu=[9,13,27,32],Xn=Mn&&"CompositionEvent"in window,c=null;Mn&&"documentMode"in document&&(c=document.documentMode);var m=Mn&&"TextEvent"in window&&!c,v=Mn&&(!Xn||c&&8<c&&11>=c),T=" ",U=!1;function F(t,i){switch(t){case"keyup":return Iu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function se(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Oe=!1;function bt(t,i){switch(t){case"compositionend":return se(i);case"keypress":return i.which!==32?null:(U=!0,T);case"textInput":return t=i.data,t===T&&U?null:t;default:return null}}function Pe(t,i){if(Oe)return t==="compositionend"||!Xn&&F(t,i)?(t=Sa(),Ei=or=Wn=null,Oe=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return v&&i.locale!=="ko"?null:i.data;default:return null}}var kt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tt(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!kt[t.type]:i==="textarea"}function Ai(t,i,o,l){bi?Ti?Ti.push(l):Ti=[l]:bi=l,i=pc(i,"onChange"),0<i.length&&(o=new Xs("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var Vt=null,$n=null;function xa(t){$y(t,0)}function ku(t){var i=Hn(t);if(_a(i))return t}function vg(t,i){if(t==="change")return i}var wg=!1;if(Mn){var jh;if(Mn){var Bh="oninput"in document;if(!Bh){var _g=document.createElement("div");_g.setAttribute("oninput","return;"),Bh=typeof _g.oninput=="function"}jh=Bh}else jh=!1;wg=jh&&(!document.documentMode||9<document.documentMode)}function bg(){Vt&&(Vt.detachEvent("onpropertychange",Tg),$n=Vt=null)}function Tg(t){if(t.propertyName==="value"&&ku($n)){var i=[];Ai(i,$n,t,wn(t)),gu(xa,i)}}function VT(t,i,o){t==="focusin"?(bg(),Vt=i,$n=o,Vt.attachEvent("onpropertychange",Tg)):t==="focusout"&&bg()}function LT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ku($n)}function UT(t,i){if(t==="click")return ku(i)}function zT(t,i){if(t==="input"||t==="change")return ku(i)}function jT(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ln=typeof Object.is=="function"?Object.is:jT;function Da(t,i){if(ln(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var h=o[l];if(!Gr.call(i,h)||!ln(t[h],i[h]))return!1}return!0}function Eg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sg(t,i){var o=Eg(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Eg(o)}}function Ag(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Ag(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Rg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=ns(t.document);i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=ns(t.document)}return i}function qh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var BT=Mn&&"documentMode"in document&&11>=document.documentMode,ro=null,Hh=null,Na=null,Fh=!1;function Cg(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Fh||ro==null||ro!==ns(l)||(l=ro,"selectionStart"in l&&qh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Na&&Da(Na,l)||(Na=l,l=pc(Hh,"onSelect"),0<l.length&&(i=new Xs("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=ro)))}function fs(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var so={animationend:fs("Animation","AnimationEnd"),animationiteration:fs("Animation","AnimationIteration"),animationstart:fs("Animation","AnimationStart"),transitionrun:fs("Transition","TransitionRun"),transitionstart:fs("Transition","TransitionStart"),transitioncancel:fs("Transition","TransitionCancel"),transitionend:fs("Transition","TransitionEnd")},Gh={},Ig={};Mn&&(Ig=document.createElement("div").style,"AnimationEvent"in window||(delete so.animationend.animation,delete so.animationiteration.animation,delete so.animationstart.animation),"TransitionEvent"in window||delete so.transitionend.transition);function ps(t){if(Gh[t])return Gh[t];if(!so[t])return t;var i=so[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Ig)return Gh[t]=i[o];return t}var kg=ps("animationend"),xg=ps("animationiteration"),Dg=ps("animationstart"),qT=ps("transitionrun"),HT=ps("transitionstart"),FT=ps("transitioncancel"),Ng=ps("transitionend"),Mg=new Map,Wh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wh.push("scrollEnd");function On(t,i){Mg.set(t,i),Nn(i,[t])}var Og=new WeakMap;function Tn(t,i){if(typeof t=="object"&&t!==null){var o=Og.get(t);return o!==void 0?o:(i={value:t,source:i,stack:Ys(i)},Og.set(t,i),i)}return{value:t,source:i,stack:Ys(i)}}var En=[],oo=0,Yh=0;function xu(){for(var t=oo,i=Yh=oo=0;i<t;){var o=En[i];En[i++]=null;var l=En[i];En[i++]=null;var h=En[i];En[i++]=null;var f=En[i];if(En[i++]=null,l!==null&&h!==null){var w=l.pending;w===null?h.next=h:(h.next=w.next,w.next=h),l.pending=h}f!==0&&Pg(o,h,f)}}function Du(t,i,o,l){En[oo++]=t,En[oo++]=i,En[oo++]=o,En[oo++]=l,Yh|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Kh(t,i,o,l){return Du(t,i,o,l),Nu(t)}function ao(t,i){return Du(t,null,null,i),Nu(t)}function Pg(t,i,o){t.lanes|=o;var l=t.alternate;l!==null&&(l.lanes|=o);for(var h=!1,f=t.return;f!==null;)f.childLanes|=o,l=f.alternate,l!==null&&(l.childLanes|=o),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(h=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,h&&i!==null&&(h=31-Ft(o),t=f.hiddenUpdates,l=t[h],l===null?t[h]=[i]:l.push(i),i.lane=o|536870912),f):null}function Nu(t){if(50<il)throw il=0,ef=null,Error(s(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var lo={};function GT(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function un(t,i,o,l){return new GT(t,i,o,l)}function Qh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ri(t,i){var o=t.alternate;return o===null?(o=un(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&65011712,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o.refCleanup=t.refCleanup,o}function Vg(t,i){t.flags&=65011714;var o=t.alternate;return o===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=o.childLanes,t.lanes=o.lanes,t.child=o.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=o.memoizedProps,t.memoizedState=o.memoizedState,t.updateQueue=o.updateQueue,t.type=o.type,i=o.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Mu(t,i,o,l,h,f){var w=0;if(l=t,typeof t=="function")Qh(t)&&(w=1);else if(typeof t=="string")w=YE(t,o,pe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case R:return t=un(31,o,i,h),t.elementType=R,t.lanes=f,t;case W:return gs(o.children,h,f,i);case $:w=8,h|=24;break;case G:return t=un(12,o,i,h|2),t.elementType=G,t.lanes=f,t;case ce:return t=un(13,o,i,h),t.elementType=ce,t.lanes=f,t;case ve:return t=un(19,o,i,h),t.elementType=ve,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case re:case ne:w=10;break e;case ee:w=9;break e;case he:w=11;break e;case M:w=14;break e;case A:w=16,l=null;break e}w=29,o=Error(s(130,t===null?"null":typeof t,"")),l=null}return i=un(w,o,i,h),i.elementType=t,i.type=l,i.lanes=f,i}function gs(t,i,o,l){return t=un(7,t,l,i),t.lanes=o,t}function Xh(t,i,o){return t=un(6,t,null,i),t.lanes=o,t}function $h(t,i,o){return i=un(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var uo=[],co=0,Ou=null,Pu=0,Sn=[],An=0,ms=null,Ci=1,Ii="";function ys(t,i){uo[co++]=Pu,uo[co++]=Ou,Ou=t,Pu=i}function Lg(t,i,o){Sn[An++]=Ci,Sn[An++]=Ii,Sn[An++]=ms,ms=t;var l=Ci;t=Ii;var h=32-Ft(l)-1;l&=~(1<<h),o+=1;var f=32-Ft(i)+h;if(30<f){var w=h-h%5;f=(l&(1<<w)-1).toString(32),l>>=w,h-=w,Ci=1<<32-Ft(i)+h|o<<h|l,Ii=f+t}else Ci=1<<f|o<<h|l,Ii=t}function Jh(t){t.return!==null&&(ys(t,1),Lg(t,1,0))}function Zh(t){for(;t===Ou;)Ou=uo[--co],uo[co]=null,Pu=uo[--co],uo[co]=null;for(;t===ms;)ms=Sn[--An],Sn[An]=null,Ii=Sn[--An],Sn[An]=null,Ci=Sn[--An],Sn[An]=null}var en=null,at=null,Be=!1,vs=null,Jn=!1,ed=Error(s(519));function ws(t){var i=Error(s(418,""));throw Pa(Tn(i,t)),ed}function Ug(t){var i=t.stateNode,o=t.type,l=t.memoizedProps;switch(i[_t]=t,i[gt]=l,o){case"dialog":De("cancel",i),De("close",i);break;case"iframe":case"object":case"embed":De("load",i);break;case"video":case"audio":for(o=0;o<sl.length;o++)De(sl[o],i);break;case"source":De("error",i);break;case"img":case"image":case"link":De("error",i),De("load",i);break;case"details":De("toggle",i);break;case"input":De("invalid",i),is(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Ks(i);break;case"select":De("invalid",i);break;case"textarea":De("invalid",i),rs(i,l.value,l.defaultValue,l.children),Ks(i)}o=l.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||i.textContent===""+o||l.suppressHydrationWarning===!0||tv(i.textContent,o)?(l.popover!=null&&(De("beforetoggle",i),De("toggle",i)),l.onScroll!=null&&De("scroll",i),l.onScrollEnd!=null&&De("scrollend",i),l.onClick!=null&&(i.onclick=gc),i=!0):i=!1,i||ws(t)}function zg(t){for(en=t.return;en;)switch(en.tag){case 5:case 13:Jn=!1;return;case 27:case 3:Jn=!0;return;default:en=en.return}}function Ma(t){if(t!==en)return!1;if(!Be)return zg(t),Be=!0,!1;var i=t.tag,o;if((o=i!==3&&i!==27)&&((o=i===5)&&(o=t.type,o=!(o!=="form"&&o!=="button")||yf(t.type,t.memoizedProps)),o=!o),o&&at&&ws(t),zg(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(o=t.data,o==="/$"){if(i===0){at=Vn(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++;t=t.nextSibling}at=null}}else i===27?(i=at,Tr(t.type)?(t=bf,bf=null,at=t):at=i):at=en?Vn(t.stateNode.nextSibling):null;return!0}function Oa(){at=en=null,Be=!1}function jg(){var t=vs;return t!==null&&(sn===null?sn=t:sn.push.apply(sn,t),vs=null),t}function Pa(t){vs===null?vs=[t]:vs.push(t)}var td=J(null),_s=null,ki=null;function ar(t,i,o){ie(td,i._currentValue),i._currentValue=o}function xi(t){t._currentValue=td.current,ae(td)}function nd(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function id(t,i,o,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var f=h.dependencies;if(f!==null){var w=h.child;f=f.firstContext;e:for(;f!==null;){var b=f;f=h;for(var C=0;C<i.length;C++)if(b.context===i[C]){f.lanes|=o,b=f.alternate,b!==null&&(b.lanes|=o),nd(f.return,o,t),l||(w=null);break e}f=b.next}}else if(h.tag===18){if(w=h.return,w===null)throw Error(s(341));w.lanes|=o,f=w.alternate,f!==null&&(f.lanes|=o),nd(w,o,t),w=null}else w=h.child;if(w!==null)w.return=h;else for(w=h;w!==null;){if(w===t){w=null;break}if(h=w.sibling,h!==null){h.return=w.return,w=h;break}w=w.return}h=w}}function Va(t,i,o,l){t=null;for(var h=i,f=!1;h!==null;){if(!f){if((h.flags&524288)!==0)f=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var w=h.alternate;if(w===null)throw Error(s(387));if(w=w.memoizedProps,w!==null){var b=h.type;ln(h.pendingProps.value,w.value)||(t!==null?t.push(b):t=[b])}}else if(h===Ct.current){if(w=h.alternate,w===null)throw Error(s(387));w.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(hl):t=[hl])}h=h.return}t!==null&&id(i,t,o,l),i.flags|=262144}function Vu(t){for(t=t.firstContext;t!==null;){if(!ln(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function bs(t){_s=t,ki=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Gt(t){return Bg(_s,t)}function Lu(t,i){return _s===null&&bs(t),Bg(t,i)}function Bg(t,i){var o=i._currentValue;if(i={context:i,memoizedValue:o,next:null},ki===null){if(t===null)throw Error(s(308));ki=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ki=ki.next=i;return o}var WT=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(o,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(o){return o()})}},YT=r.unstable_scheduleCallback,KT=r.unstable_NormalPriority,Et={$$typeof:ne,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rd(){return{controller:new WT,data:new Map,refCount:0}}function La(t){t.refCount--,t.refCount===0&&YT(KT,function(){t.controller.abort()})}var Ua=null,sd=0,ho=0,fo=null;function QT(t,i){if(Ua===null){var o=Ua=[];sd=0,ho=lf(),fo={status:"pending",value:void 0,then:function(l){o.push(l)}}}return sd++,i.then(qg,qg),i}function qg(){if(--sd===0&&Ua!==null){fo!==null&&(fo.status="fulfilled");var t=Ua;Ua=null,ho=0,fo=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function XT(t,i){var o=[],l={status:"pending",value:null,reason:null,then:function(h){o.push(h)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<o.length;h++)(0,o[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<o.length;h++)(0,o[h])(void 0)}),l}var Hg=Y.S;Y.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&QT(t,i),Hg!==null&&Hg(t,i)};var Ts=J(null);function od(){var t=Ts.current;return t!==null?t:Ze.pooledCache}function Uu(t,i){i===null?ie(Ts,Ts.current):ie(Ts,i.pool)}function Fg(){var t=od();return t===null?null:{parent:Et._currentValue,pool:t}}var za=Error(s(460)),Gg=Error(s(474)),zu=Error(s(542)),ad={then:function(){}};function Wg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ju(){}function Yg(t,i,o){switch(o=t[o],o===void 0?t.push(i):o!==i&&(i.then(ju,ju),i=o),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Qg(t),t;default:if(typeof i.status=="string")i.then(ju,ju);else{if(t=Ze,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Qg(t),t}throw ja=i,za}}var ja=null;function Kg(){if(ja===null)throw Error(s(459));var t=ja;return ja=null,t}function Qg(t){if(t===za||t===zu)throw Error(s(483))}var lr=!1;function ld(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ud(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ur(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function cr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Fe&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Nu(t),Pg(t,null,o),i}return Du(t,l,i,o),Nu(t)}function Ba(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,ga(t,o)}}function cd(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var h=null,f=null;if(o=o.firstBaseUpdate,o!==null){do{var w={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};f===null?h=f=w:f=f.next=w,o=o.next}while(o!==null);f===null?h=f=i:f=f.next=i}else h=f=i;o={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}var hd=!1;function qa(){if(hd){var t=fo;if(t!==null)throw t}}function Ha(t,i,o,l){hd=!1;var h=t.updateQueue;lr=!1;var f=h.firstBaseUpdate,w=h.lastBaseUpdate,b=h.shared.pending;if(b!==null){h.shared.pending=null;var C=b,B=C.next;C.next=null,w===null?f=B:w.next=B,w=C;var K=t.alternate;K!==null&&(K=K.updateQueue,b=K.lastBaseUpdate,b!==w&&(b===null?K.firstBaseUpdate=B:b.next=B,K.lastBaseUpdate=C))}if(f!==null){var X=h.baseState;w=0,K=B=C=null,b=f;do{var q=b.lane&-536870913,H=q!==b.lane;if(H?(Ve&q)===q:(l&q)===q){q!==0&&q===ho&&(hd=!0),K!==null&&(K=K.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var _e=t,ge=b;q=i;var Xe=o;switch(ge.tag){case 1:if(_e=ge.payload,typeof _e=="function"){X=_e.call(Xe,X,q);break e}X=_e;break e;case 3:_e.flags=_e.flags&-65537|128;case 0:if(_e=ge.payload,q=typeof _e=="function"?_e.call(Xe,X,q):_e,q==null)break e;X=_({},X,q);break e;case 2:lr=!0}}q=b.callback,q!==null&&(t.flags|=64,H&&(t.flags|=8192),H=h.callbacks,H===null?h.callbacks=[q]:H.push(q))}else H={lane:q,tag:b.tag,payload:b.payload,callback:b.callback,next:null},K===null?(B=K=H,C=X):K=K.next=H,w|=q;if(b=b.next,b===null){if(b=h.shared.pending,b===null)break;H=b,b=H.next,H.next=null,h.lastBaseUpdate=H,h.shared.pending=null}}while(!0);K===null&&(C=X),h.baseState=C,h.firstBaseUpdate=B,h.lastBaseUpdate=K,f===null&&(h.shared.lanes=0),vr|=w,t.lanes=w,t.memoizedState=X}}function Xg(t,i){if(typeof t!="function")throw Error(s(191,t));t.call(i)}function $g(t,i){var o=t.callbacks;if(o!==null)for(t.callbacks=null,t=0;t<o.length;t++)Xg(o[t],i)}var po=J(null),Bu=J(0);function Jg(t,i){t=Li,ie(Bu,t),ie(po,i),Li=t|i.baseLanes}function dd(){ie(Bu,Li),ie(po,po.current)}function fd(){Li=Bu.current,ae(po),ae(Bu)}var hr=0,Ce=null,Ke=null,yt=null,qu=!1,go=!1,Es=!1,Hu=0,Fa=0,mo=null,$T=0;function ht(){throw Error(s(321))}function pd(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!ln(t[o],i[o]))return!1;return!0}function gd(t,i,o,l,h,f){return hr=f,Ce=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Y.H=t===null||t.memoizedState===null?Pm:Vm,Es=!1,f=o(l,h),Es=!1,go&&(f=em(i,o,l,h)),Zg(t),f}function Zg(t){Y.H=Qu;var i=Ke!==null&&Ke.next!==null;if(hr=0,yt=Ke=Ce=null,qu=!1,Fa=0,mo=null,i)throw Error(s(300));t===null||xt||(t=t.dependencies,t!==null&&Vu(t)&&(xt=!0))}function em(t,i,o,l){Ce=t;var h=0;do{if(go&&(mo=null),Fa=0,go=!1,25<=h)throw Error(s(301));if(h+=1,yt=Ke=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}Y.H=rE,f=i(o,l)}while(go);return f}function JT(){var t=Y.H,i=t.useState()[0];return i=typeof i.then=="function"?Ga(i):i,t=t.useState()[0],(Ke!==null?Ke.memoizedState:null)!==t&&(Ce.flags|=1024),i}function md(){var t=Hu!==0;return Hu=0,t}function yd(t,i,o){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~o}function vd(t){if(qu){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}qu=!1}hr=0,yt=Ke=Ce=null,go=!1,Fa=Hu=0,mo=null}function nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Ce.memoizedState=yt=t:yt=yt.next=t,yt}function vt(){if(Ke===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var i=yt===null?Ce.memoizedState:yt.next;if(i!==null)yt=i,Ke=t;else{if(t===null)throw Ce.alternate===null?Error(s(467)):Error(s(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},yt===null?Ce.memoizedState=yt=t:yt=yt.next=t}return yt}function wd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ga(t){var i=Fa;return Fa+=1,mo===null&&(mo=[]),t=Yg(mo,t,i),i=Ce,(yt===null?i.memoizedState:yt.next)===null&&(i=i.alternate,Y.H=i===null||i.memoizedState===null?Pm:Vm),t}function Fu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ga(t);if(t.$$typeof===ne)return Gt(t)}throw Error(s(438,String(t)))}function _d(t){var i=null,o=Ce.updateQueue;if(o!==null&&(i=o.memoCache),i==null){var l=Ce.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),o===null&&(o=wd(),Ce.updateQueue=o),o.memoCache=i,o=i.data[i.index],o===void 0)for(o=i.data[i.index]=Array(t),l=0;l<t;l++)o[l]=N;return i.index++,o}function Di(t,i){return typeof i=="function"?i(t):i}function Gu(t){var i=vt();return bd(i,Ke,t)}function bd(t,i,o){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=o;var h=t.baseQueue,f=l.pending;if(f!==null){if(h!==null){var w=h.next;h.next=f.next,f.next=w}i.baseQueue=h=f,l.pending=null}if(f=t.baseState,h===null)t.memoizedState=f;else{i=h.next;var b=w=null,C=null,B=i,K=!1;do{var X=B.lane&-536870913;if(X!==B.lane?(Ve&X)===X:(hr&X)===X){var q=B.revertLane;if(q===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),X===ho&&(K=!0);else if((hr&q)===q){B=B.next,q===ho&&(K=!0);continue}else X={lane:0,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},C===null?(b=C=X,w=f):C=C.next=X,Ce.lanes|=q,vr|=q;X=B.action,Es&&o(f,X),f=B.hasEagerState?B.eagerState:o(f,X)}else q={lane:X,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},C===null?(b=C=q,w=f):C=C.next=q,Ce.lanes|=X,vr|=X;B=B.next}while(B!==null&&B!==i);if(C===null?w=f:C.next=b,!ln(f,t.memoizedState)&&(xt=!0,K&&(o=fo,o!==null)))throw o;t.memoizedState=f,t.baseState=w,t.baseQueue=C,l.lastRenderedState=f}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Td(t){var i=vt(),o=i.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=t;var l=o.dispatch,h=o.pending,f=i.memoizedState;if(h!==null){o.pending=null;var w=h=h.next;do f=t(f,w.action),w=w.next;while(w!==h);ln(f,i.memoizedState)||(xt=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),o.lastRenderedState=f}return[f,l]}function tm(t,i,o){var l=Ce,h=vt(),f=Be;if(f){if(o===void 0)throw Error(s(407));o=o()}else o=i();var w=!ln((Ke||h).memoizedState,o);w&&(h.memoizedState=o,xt=!0),h=h.queue;var b=rm.bind(null,l,h,t);if(Wa(2048,8,b,[t]),h.getSnapshot!==i||w||yt!==null&&yt.memoizedState.tag&1){if(l.flags|=2048,yo(9,Wu(),im.bind(null,l,h,o,i),null),Ze===null)throw Error(s(349));f||(hr&124)!==0||nm(l,i,o)}return o}function nm(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ce.updateQueue,i===null?(i=wd(),Ce.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function im(t,i,o,l){i.value=o,i.getSnapshot=l,sm(i)&&om(t)}function rm(t,i,o){return o(function(){sm(i)&&om(t)})}function sm(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!ln(t,o)}catch{return!0}}function om(t){var i=ao(t,2);i!==null&&pn(i,t,2)}function Ed(t){var i=nn();if(typeof t=="function"){var o=t;if(t=o(),Es){on(!0);try{o()}finally{on(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Di,lastRenderedState:t},i}function am(t,i,o,l){return t.baseState=o,bd(t,Ke,typeof l=="function"?l:Di)}function ZT(t,i,o,l,h){if(Ku(t))throw Error(s(485));if(t=i.action,t!==null){var f={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){f.listeners.push(w)}};Y.T!==null?o(!0):f.isTransition=!1,l(f),o=i.pending,o===null?(f.next=i.pending=f,lm(i,f)):(f.next=o.next,i.pending=o.next=f)}}function lm(t,i){var o=i.action,l=i.payload,h=t.state;if(i.isTransition){var f=Y.T,w={};Y.T=w;try{var b=o(h,l),C=Y.S;C!==null&&C(w,b),um(t,i,b)}catch(B){Sd(t,i,B)}finally{Y.T=f}}else try{f=o(h,l),um(t,i,f)}catch(B){Sd(t,i,B)}}function um(t,i,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(l){cm(t,i,l)},function(l){return Sd(t,i,l)}):cm(t,i,o)}function cm(t,i,o){i.status="fulfilled",i.value=o,hm(i),t.state=o,i=t.pending,i!==null&&(o=i.next,o===i?t.pending=null:(o=o.next,i.next=o,lm(t,o)))}function Sd(t,i,o){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=o,hm(i),i=i.next;while(i!==l)}t.action=null}function hm(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function dm(t,i){return i}function fm(t,i){if(Be){var o=Ze.formState;if(o!==null){e:{var l=Ce;if(Be){if(at){t:{for(var h=at,f=Jn;h.nodeType!==8;){if(!f){h=null;break t}if(h=Vn(h.nextSibling),h===null){h=null;break t}}f=h.data,h=f==="F!"||f==="F"?h:null}if(h){at=Vn(h.nextSibling),l=h.data==="F!";break e}}ws(l)}l=!1}l&&(i=o[0])}}return o=nn(),o.memoizedState=o.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dm,lastRenderedState:i},o.queue=l,o=Nm.bind(null,Ce,l),l.dispatch=o,l=Ed(!1),f=kd.bind(null,Ce,!1,l.queue),l=nn(),h={state:i,dispatch:null,action:t,pending:null},l.queue=h,o=ZT.bind(null,Ce,h,f,o),h.dispatch=o,l.memoizedState=t,[i,o,!1]}function pm(t){var i=vt();return gm(i,Ke,t)}function gm(t,i,o){if(i=bd(t,i,dm)[0],t=Gu(Di)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Ga(i)}catch(w){throw w===za?zu:w}else l=i;i=vt();var h=i.queue,f=h.dispatch;return o!==i.memoizedState&&(Ce.flags|=2048,yo(9,Wu(),eE.bind(null,h,o),null)),[l,f,t]}function eE(t,i){t.action=i}function mm(t){var i=vt(),o=Ke;if(o!==null)return gm(i,o,t);vt(),i=i.memoizedState,o=vt();var l=o.queue.dispatch;return o.memoizedState=t,[i,l,!1]}function yo(t,i,o,l){return t={tag:t,create:o,deps:l,inst:i,next:null},i=Ce.updateQueue,i===null&&(i=wd(),Ce.updateQueue=i),o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t),t}function Wu(){return{destroy:void 0,resource:void 0}}function ym(){return vt().memoizedState}function Yu(t,i,o,l){var h=nn();l=l===void 0?null:l,Ce.flags|=t,h.memoizedState=yo(1|i,Wu(),o,l)}function Wa(t,i,o,l){var h=vt();l=l===void 0?null:l;var f=h.memoizedState.inst;Ke!==null&&l!==null&&pd(l,Ke.memoizedState.deps)?h.memoizedState=yo(i,f,o,l):(Ce.flags|=t,h.memoizedState=yo(1|i,f,o,l))}function vm(t,i){Yu(8390656,8,t,i)}function wm(t,i){Wa(2048,8,t,i)}function _m(t,i){return Wa(4,2,t,i)}function bm(t,i){return Wa(4,4,t,i)}function Tm(t,i){if(typeof i=="function"){t=t();var o=i(t);return function(){typeof o=="function"?o():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Em(t,i,o){o=o!=null?o.concat([t]):null,Wa(4,4,Tm.bind(null,i,t),o)}function Ad(){}function Sm(t,i){var o=vt();i=i===void 0?null:i;var l=o.memoizedState;return i!==null&&pd(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function Am(t,i){var o=vt();i=i===void 0?null:i;var l=o.memoizedState;if(i!==null&&pd(i,l[1]))return l[0];if(l=t(),Es){on(!0);try{t()}finally{on(!1)}}return o.memoizedState=[l,i],l}function Rd(t,i,o){return o===void 0||(hr&1073741824)!==0?t.memoizedState=i:(t.memoizedState=o,t=Iy(),Ce.lanes|=t,vr|=t,o)}function Rm(t,i,o,l){return ln(o,i)?o:po.current!==null?(t=Rd(t,o,l),ln(t,i)||(xt=!0),t):(hr&42)===0?(xt=!0,t.memoizedState=o):(t=Iy(),Ce.lanes|=t,vr|=t,i)}function Cm(t,i,o,l,h){var f=oe.p;oe.p=f!==0&&8>f?f:8;var w=Y.T,b={};Y.T=b,kd(t,!1,i,o);try{var C=h(),B=Y.S;if(B!==null&&B(b,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var K=XT(C,l);Ya(t,i,K,fn(t))}else Ya(t,i,l,fn(t))}catch(X){Ya(t,i,{then:function(){},status:"rejected",reason:X},fn())}finally{oe.p=f,Y.T=w}}function tE(){}function Cd(t,i,o,l){if(t.tag!==5)throw Error(s(476));var h=Im(t).queue;Cm(t,h,i,fe,o===null?tE:function(){return km(t),o(l)})}function Im(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Di,lastRenderedState:fe},next:null};var o={};return i.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Di,lastRenderedState:o},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function km(t){var i=Im(t).next.queue;Ya(t,i,{},fn())}function Id(){return Gt(hl)}function xm(){return vt().memoizedState}function Dm(){return vt().memoizedState}function nE(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var o=fn();t=ur(o);var l=cr(i,t,o);l!==null&&(pn(l,i,o),Ba(l,i,o)),i={cache:rd()},t.payload=i;return}i=i.return}}function iE(t,i,o){var l=fn();o={lane:l,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},Ku(t)?Mm(i,o):(o=Kh(t,i,o,l),o!==null&&(pn(o,t,l),Om(o,i,l)))}function Nm(t,i,o){var l=fn();Ya(t,i,o,l)}function Ya(t,i,o,l){var h={lane:l,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(Ku(t))Mm(i,h);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var w=i.lastRenderedState,b=f(w,o);if(h.hasEagerState=!0,h.eagerState=b,ln(b,w))return Du(t,i,h,0),Ze===null&&xu(),!1}catch{}finally{}if(o=Kh(t,i,h,l),o!==null)return pn(o,t,l),Om(o,i,l),!0}return!1}function kd(t,i,o,l){if(l={lane:2,revertLane:lf(),action:l,hasEagerState:!1,eagerState:null,next:null},Ku(t)){if(i)throw Error(s(479))}else i=Kh(t,o,l,2),i!==null&&pn(i,t,2)}function Ku(t){var i=t.alternate;return t===Ce||i!==null&&i===Ce}function Mm(t,i){go=qu=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Om(t,i,o){if((o&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,ga(t,o)}}var Qu={readContext:Gt,use:Fu,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useLayoutEffect:ht,useInsertionEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useSyncExternalStore:ht,useId:ht,useHostTransitionStatus:ht,useFormState:ht,useActionState:ht,useOptimistic:ht,useMemoCache:ht,useCacheRefresh:ht},Pm={readContext:Gt,use:Fu,useCallback:function(t,i){return nn().memoizedState=[t,i===void 0?null:i],t},useContext:Gt,useEffect:vm,useImperativeHandle:function(t,i,o){o=o!=null?o.concat([t]):null,Yu(4194308,4,Tm.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Yu(4194308,4,t,i)},useInsertionEffect:function(t,i){Yu(4,2,t,i)},useMemo:function(t,i){var o=nn();i=i===void 0?null:i;var l=t();if(Es){on(!0);try{t()}finally{on(!1)}}return o.memoizedState=[l,i],l},useReducer:function(t,i,o){var l=nn();if(o!==void 0){var h=o(i);if(Es){on(!0);try{o(i)}finally{on(!1)}}}else h=i;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=iE.bind(null,Ce,t),[l.memoizedState,t]},useRef:function(t){var i=nn();return t={current:t},i.memoizedState=t},useState:function(t){t=Ed(t);var i=t.queue,o=Nm.bind(null,Ce,i);return i.dispatch=o,[t.memoizedState,o]},useDebugValue:Ad,useDeferredValue:function(t,i){var o=nn();return Rd(o,t,i)},useTransition:function(){var t=Ed(!1);return t=Cm.bind(null,Ce,t.queue,!0,!1),nn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,o){var l=Ce,h=nn();if(Be){if(o===void 0)throw Error(s(407));o=o()}else{if(o=i(),Ze===null)throw Error(s(349));(Ve&124)!==0||nm(l,i,o)}h.memoizedState=o;var f={value:o,getSnapshot:i};return h.queue=f,vm(rm.bind(null,l,f,t),[t]),l.flags|=2048,yo(9,Wu(),im.bind(null,l,f,o,i),null),o},useId:function(){var t=nn(),i=Ze.identifierPrefix;if(Be){var o=Ii,l=Ci;o=(l&~(1<<32-Ft(l)-1)).toString(32)+o,i="«"+i+"R"+o,o=Hu++,0<o&&(i+="H"+o.toString(32)),i+="»"}else o=$T++,i="«"+i+"r"+o.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:Id,useFormState:fm,useActionState:fm,useOptimistic:function(t){var i=nn();i.memoizedState=i.baseState=t;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=o,i=kd.bind(null,Ce,!0,o),o.dispatch=i,[t,i]},useMemoCache:_d,useCacheRefresh:function(){return nn().memoizedState=nE.bind(null,Ce)}},Vm={readContext:Gt,use:Fu,useCallback:Sm,useContext:Gt,useEffect:wm,useImperativeHandle:Em,useInsertionEffect:_m,useLayoutEffect:bm,useMemo:Am,useReducer:Gu,useRef:ym,useState:function(){return Gu(Di)},useDebugValue:Ad,useDeferredValue:function(t,i){var o=vt();return Rm(o,Ke.memoizedState,t,i)},useTransition:function(){var t=Gu(Di)[0],i=vt().memoizedState;return[typeof t=="boolean"?t:Ga(t),i]},useSyncExternalStore:tm,useId:xm,useHostTransitionStatus:Id,useFormState:pm,useActionState:pm,useOptimistic:function(t,i){var o=vt();return am(o,Ke,t,i)},useMemoCache:_d,useCacheRefresh:Dm},rE={readContext:Gt,use:Fu,useCallback:Sm,useContext:Gt,useEffect:wm,useImperativeHandle:Em,useInsertionEffect:_m,useLayoutEffect:bm,useMemo:Am,useReducer:Td,useRef:ym,useState:function(){return Td(Di)},useDebugValue:Ad,useDeferredValue:function(t,i){var o=vt();return Ke===null?Rd(o,t,i):Rm(o,Ke.memoizedState,t,i)},useTransition:function(){var t=Td(Di)[0],i=vt().memoizedState;return[typeof t=="boolean"?t:Ga(t),i]},useSyncExternalStore:tm,useId:xm,useHostTransitionStatus:Id,useFormState:mm,useActionState:mm,useOptimistic:function(t,i){var o=vt();return Ke!==null?am(o,Ke,t,i):(o.baseState=t,[t,o.queue.dispatch])},useMemoCache:_d,useCacheRefresh:Dm},vo=null,Ka=0;function Xu(t){var i=Ka;return Ka+=1,vo===null&&(vo=[]),Yg(vo,t,i)}function Qa(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function $u(t,i){throw i.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(i),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Lm(t){var i=t._init;return i(t._payload)}function Um(t){function i(P,D){if(t){var z=P.deletions;z===null?(P.deletions=[D],P.flags|=16):z.push(D)}}function o(P,D){if(!t)return null;for(;D!==null;)i(P,D),D=D.sibling;return null}function l(P){for(var D=new Map;P!==null;)P.key!==null?D.set(P.key,P):D.set(P.index,P),P=P.sibling;return D}function h(P,D){return P=Ri(P,D),P.index=0,P.sibling=null,P}function f(P,D,z){return P.index=z,t?(z=P.alternate,z!==null?(z=z.index,z<D?(P.flags|=67108866,D):z):(P.flags|=67108866,D)):(P.flags|=1048576,D)}function w(P){return t&&P.alternate===null&&(P.flags|=67108866),P}function b(P,D,z,Q){return D===null||D.tag!==6?(D=Xh(z,P.mode,Q),D.return=P,D):(D=h(D,z),D.return=P,D)}function C(P,D,z,Q){var le=z.type;return le===W?K(P,D,z.props.children,Q,z.key):D!==null&&(D.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===A&&Lm(le)===D.type)?(D=h(D,z.props),Qa(D,z),D.return=P,D):(D=Mu(z.type,z.key,z.props,null,P.mode,Q),Qa(D,z),D.return=P,D)}function B(P,D,z,Q){return D===null||D.tag!==4||D.stateNode.containerInfo!==z.containerInfo||D.stateNode.implementation!==z.implementation?(D=$h(z,P.mode,Q),D.return=P,D):(D=h(D,z.children||[]),D.return=P,D)}function K(P,D,z,Q,le){return D===null||D.tag!==7?(D=gs(z,P.mode,Q,le),D.return=P,D):(D=h(D,z),D.return=P,D)}function X(P,D,z){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=Xh(""+D,P.mode,z),D.return=P,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case k:return z=Mu(D.type,D.key,D.props,null,P.mode,z),Qa(z,D),z.return=P,z;case L:return D=$h(D,P.mode,z),D.return=P,D;case A:var Q=D._init;return D=Q(D._payload),X(P,D,z)}if(st(D)||V(D))return D=gs(D,P.mode,z,null),D.return=P,D;if(typeof D.then=="function")return X(P,Xu(D),z);if(D.$$typeof===ne)return X(P,Lu(P,D),z);$u(P,D)}return null}function q(P,D,z,Q){var le=D!==null?D.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return le!==null?null:b(P,D,""+z,Q);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case k:return z.key===le?C(P,D,z,Q):null;case L:return z.key===le?B(P,D,z,Q):null;case A:return le=z._init,z=le(z._payload),q(P,D,z,Q)}if(st(z)||V(z))return le!==null?null:K(P,D,z,Q,null);if(typeof z.then=="function")return q(P,D,Xu(z),Q);if(z.$$typeof===ne)return q(P,D,Lu(P,z),Q);$u(P,z)}return null}function H(P,D,z,Q,le){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return P=P.get(z)||null,b(D,P,""+Q,le);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case k:return P=P.get(Q.key===null?z:Q.key)||null,C(D,P,Q,le);case L:return P=P.get(Q.key===null?z:Q.key)||null,B(D,P,Q,le);case A:var ke=Q._init;return Q=ke(Q._payload),H(P,D,z,Q,le)}if(st(Q)||V(Q))return P=P.get(z)||null,K(D,P,Q,le,null);if(typeof Q.then=="function")return H(P,D,z,Xu(Q),le);if(Q.$$typeof===ne)return H(P,D,z,Lu(D,Q),le);$u(D,Q)}return null}function _e(P,D,z,Q){for(var le=null,ke=null,de=D,we=D=0,Nt=null;de!==null&&we<z.length;we++){de.index>we?(Nt=de,de=null):Nt=de.sibling;var Ue=q(P,de,z[we],Q);if(Ue===null){de===null&&(de=Nt);break}t&&de&&Ue.alternate===null&&i(P,de),D=f(Ue,D,we),ke===null?le=Ue:ke.sibling=Ue,ke=Ue,de=Nt}if(we===z.length)return o(P,de),Be&&ys(P,we),le;if(de===null){for(;we<z.length;we++)de=X(P,z[we],Q),de!==null&&(D=f(de,D,we),ke===null?le=de:ke.sibling=de,ke=de);return Be&&ys(P,we),le}for(de=l(de);we<z.length;we++)Nt=H(de,P,we,z[we],Q),Nt!==null&&(t&&Nt.alternate!==null&&de.delete(Nt.key===null?we:Nt.key),D=f(Nt,D,we),ke===null?le=Nt:ke.sibling=Nt,ke=Nt);return t&&de.forEach(function(Cr){return i(P,Cr)}),Be&&ys(P,we),le}function ge(P,D,z,Q){if(z==null)throw Error(s(151));for(var le=null,ke=null,de=D,we=D=0,Nt=null,Ue=z.next();de!==null&&!Ue.done;we++,Ue=z.next()){de.index>we?(Nt=de,de=null):Nt=de.sibling;var Cr=q(P,de,Ue.value,Q);if(Cr===null){de===null&&(de=Nt);break}t&&de&&Cr.alternate===null&&i(P,de),D=f(Cr,D,we),ke===null?le=Cr:ke.sibling=Cr,ke=Cr,de=Nt}if(Ue.done)return o(P,de),Be&&ys(P,we),le;if(de===null){for(;!Ue.done;we++,Ue=z.next())Ue=X(P,Ue.value,Q),Ue!==null&&(D=f(Ue,D,we),ke===null?le=Ue:ke.sibling=Ue,ke=Ue);return Be&&ys(P,we),le}for(de=l(de);!Ue.done;we++,Ue=z.next())Ue=H(de,P,we,Ue.value,Q),Ue!==null&&(t&&Ue.alternate!==null&&de.delete(Ue.key===null?we:Ue.key),D=f(Ue,D,we),ke===null?le=Ue:ke.sibling=Ue,ke=Ue);return t&&de.forEach(function(sS){return i(P,sS)}),Be&&ys(P,we),le}function Xe(P,D,z,Q){if(typeof z=="object"&&z!==null&&z.type===W&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case k:e:{for(var le=z.key;D!==null;){if(D.key===le){if(le=z.type,le===W){if(D.tag===7){o(P,D.sibling),Q=h(D,z.props.children),Q.return=P,P=Q;break e}}else if(D.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===A&&Lm(le)===D.type){o(P,D.sibling),Q=h(D,z.props),Qa(Q,z),Q.return=P,P=Q;break e}o(P,D);break}else i(P,D);D=D.sibling}z.type===W?(Q=gs(z.props.children,P.mode,Q,z.key),Q.return=P,P=Q):(Q=Mu(z.type,z.key,z.props,null,P.mode,Q),Qa(Q,z),Q.return=P,P=Q)}return w(P);case L:e:{for(le=z.key;D!==null;){if(D.key===le)if(D.tag===4&&D.stateNode.containerInfo===z.containerInfo&&D.stateNode.implementation===z.implementation){o(P,D.sibling),Q=h(D,z.children||[]),Q.return=P,P=Q;break e}else{o(P,D);break}else i(P,D);D=D.sibling}Q=$h(z,P.mode,Q),Q.return=P,P=Q}return w(P);case A:return le=z._init,z=le(z._payload),Xe(P,D,z,Q)}if(st(z))return _e(P,D,z,Q);if(V(z)){if(le=V(z),typeof le!="function")throw Error(s(150));return z=le.call(z),ge(P,D,z,Q)}if(typeof z.then=="function")return Xe(P,D,Xu(z),Q);if(z.$$typeof===ne)return Xe(P,D,Lu(P,z),Q);$u(P,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,D!==null&&D.tag===6?(o(P,D.sibling),Q=h(D,z),Q.return=P,P=Q):(o(P,D),Q=Xh(z,P.mode,Q),Q.return=P,P=Q),w(P)):o(P,D)}return function(P,D,z,Q){try{Ka=0;var le=Xe(P,D,z,Q);return vo=null,le}catch(de){if(de===za||de===zu)throw de;var ke=un(29,de,null,P.mode);return ke.lanes=Q,ke.return=P,ke}finally{}}}var wo=Um(!0),zm=Um(!1),Rn=J(null),Zn=null;function dr(t){var i=t.alternate;ie(St,St.current&1),ie(Rn,t),Zn===null&&(i===null||po.current!==null||i.memoizedState!==null)&&(Zn=t)}function jm(t){if(t.tag===22){if(ie(St,St.current),ie(Rn,t),Zn===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(Zn=t)}}else fr()}function fr(){ie(St,St.current),ie(Rn,Rn.current)}function Ni(t){ae(Rn),Zn===t&&(Zn=null),ae(St)}var St=J(0);function Ju(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||_f(o)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function xd(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:_({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Dd={enqueueSetState:function(t,i,o){t=t._reactInternals;var l=fn(),h=ur(l);h.payload=i,o!=null&&(h.callback=o),i=cr(t,h,l),i!==null&&(pn(i,t,l),Ba(i,t,l))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=fn(),h=ur(l);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=cr(t,h,l),i!==null&&(pn(i,t,l),Ba(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=fn(),l=ur(o);l.tag=2,i!=null&&(l.callback=i),i=cr(t,l,o),i!==null&&(pn(i,t,o),Ba(i,t,o))}};function Bm(t,i,o,l,h,f,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,f,w):i.prototype&&i.prototype.isPureReactComponent?!Da(o,l)||!Da(h,f):!0}function qm(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Dd.enqueueReplaceState(i,i.state,null)}function Ss(t,i){var o=i;if("ref"in i){o={};for(var l in i)l!=="ref"&&(o[l]=i[l])}if(t=t.defaultProps){o===i&&(o=_({},o));for(var h in t)o[h]===void 0&&(o[h]=t[h])}return o}var Zu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Hm(t){Zu(t)}function Fm(t){console.error(t)}function Gm(t){Zu(t)}function ec(t,i){try{var o=t.onUncaughtError;o(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Wm(t,i,o){try{var l=t.onCaughtError;l(o.value,{componentStack:o.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Nd(t,i,o){return o=ur(o),o.tag=3,o.payload={element:null},o.callback=function(){ec(t,i)},o}function Ym(t){return t=ur(t),t.tag=3,t}function Km(t,i,o,l){var h=o.type.getDerivedStateFromError;if(typeof h=="function"){var f=l.value;t.payload=function(){return h(f)},t.callback=function(){Wm(i,o,l)}}var w=o.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(t.callback=function(){Wm(i,o,l),typeof h!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function sE(t,i,o,l,h){if(o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=o.alternate,i!==null&&Va(i,o,h,!0),o=Rn.current,o!==null){switch(o.tag){case 13:return Zn===null?nf():o.alternate===null&&lt===0&&(lt=3),o.flags&=-257,o.flags|=65536,o.lanes=h,l===ad?o.flags|=16384:(i=o.updateQueue,i===null?o.updateQueue=new Set([l]):i.add(l),sf(t,l,h)),!1;case 22:return o.flags|=65536,l===ad?o.flags|=16384:(i=o.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},o.updateQueue=i):(o=i.retryQueue,o===null?i.retryQueue=new Set([l]):o.add(l)),sf(t,l,h)),!1}throw Error(s(435,o.tag))}return sf(t,l,h),nf(),!1}if(Be)return i=Rn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==ed&&(t=Error(s(422),{cause:l}),Pa(Tn(t,o)))):(l!==ed&&(i=Error(s(423),{cause:l}),Pa(Tn(i,o))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=Tn(l,o),h=Nd(t.stateNode,l,h),cd(t,h),lt!==4&&(lt=2)),!1;var f=Error(s(520),{cause:l});if(f=Tn(f,o),nl===null?nl=[f]:nl.push(f),lt!==4&&(lt=2),i===null)return!0;l=Tn(l,o),o=i;do{switch(o.tag){case 3:return o.flags|=65536,t=h&-h,o.lanes|=t,t=Nd(o.stateNode,l,t),cd(o,t),!1;case 1:if(i=o.type,f=o.stateNode,(o.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(wr===null||!wr.has(f))))return o.flags|=65536,h&=-h,o.lanes|=h,h=Ym(h),Km(h,t,o,l),cd(o,h),!1}o=o.return}while(o!==null);return!1}var Qm=Error(s(461)),xt=!1;function Lt(t,i,o,l){i.child=t===null?zm(i,null,o,l):wo(i,t.child,o,l)}function Xm(t,i,o,l,h){o=o.render;var f=i.ref;if("ref"in l){var w={};for(var b in l)b!=="ref"&&(w[b]=l[b])}else w=l;return bs(i),l=gd(t,i,o,w,f,h),b=md(),t!==null&&!xt?(yd(t,i,h),Mi(t,i,h)):(Be&&b&&Jh(i),i.flags|=1,Lt(t,i,l,h),i.child)}function $m(t,i,o,l,h){if(t===null){var f=o.type;return typeof f=="function"&&!Qh(f)&&f.defaultProps===void 0&&o.compare===null?(i.tag=15,i.type=f,Jm(t,i,f,l,h)):(t=Mu(o.type,null,l,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(f=t.child,!jd(t,h)){var w=f.memoizedProps;if(o=o.compare,o=o!==null?o:Da,o(w,l)&&t.ref===i.ref)return Mi(t,i,h)}return i.flags|=1,t=Ri(f,l),t.ref=i.ref,t.return=i,i.child=t}function Jm(t,i,o,l,h){if(t!==null){var f=t.memoizedProps;if(Da(f,l)&&t.ref===i.ref)if(xt=!1,i.pendingProps=l=f,jd(t,h))(t.flags&131072)!==0&&(xt=!0);else return i.lanes=t.lanes,Mi(t,i,h)}return Md(t,i,o,l,h)}function Zm(t,i,o){var l=i.pendingProps,h=l.children,f=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=f!==null?f.baseLanes|o:o,t!==null){for(h=i.child=t.child,f=0;h!==null;)f=f|h.lanes|h.childLanes,h=h.sibling;i.childLanes=f&~l}else i.childLanes=0,i.child=null;return ey(t,i,l,o)}if((o&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Uu(i,f!==null?f.cachePool:null),f!==null?Jg(i,f):dd(),jm(i);else return i.lanes=i.childLanes=536870912,ey(t,i,f!==null?f.baseLanes|o:o,o)}else f!==null?(Uu(i,f.cachePool),Jg(i,f),fr(),i.memoizedState=null):(t!==null&&Uu(i,null),dd(),fr());return Lt(t,i,h,o),i.child}function ey(t,i,o,l){var h=od();return h=h===null?null:{parent:Et._currentValue,pool:h},i.memoizedState={baseLanes:o,cachePool:h},t!==null&&Uu(i,null),dd(),jm(i),t!==null&&Va(t,i,l,!0),null}function tc(t,i){var o=i.ref;if(o===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(t===null||t.ref!==o)&&(i.flags|=4194816)}}function Md(t,i,o,l,h){return bs(i),o=gd(t,i,o,l,void 0,h),l=md(),t!==null&&!xt?(yd(t,i,h),Mi(t,i,h)):(Be&&l&&Jh(i),i.flags|=1,Lt(t,i,o,h),i.child)}function ty(t,i,o,l,h,f){return bs(i),i.updateQueue=null,o=em(i,l,o,h),Zg(t),l=md(),t!==null&&!xt?(yd(t,i,f),Mi(t,i,f)):(Be&&l&&Jh(i),i.flags|=1,Lt(t,i,o,f),i.child)}function ny(t,i,o,l,h){if(bs(i),i.stateNode===null){var f=lo,w=o.contextType;typeof w=="object"&&w!==null&&(f=Gt(w)),f=new o(l,f),i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Dd,i.stateNode=f,f._reactInternals=i,f=i.stateNode,f.props=l,f.state=i.memoizedState,f.refs={},ld(i),w=o.contextType,f.context=typeof w=="object"&&w!==null?Gt(w):lo,f.state=i.memoizedState,w=o.getDerivedStateFromProps,typeof w=="function"&&(xd(i,o,w,l),f.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(w=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),w!==f.state&&Dd.enqueueReplaceState(f,f.state,null),Ha(i,l,f,h),qa(),f.state=i.memoizedState),typeof f.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){f=i.stateNode;var b=i.memoizedProps,C=Ss(o,b);f.props=C;var B=f.context,K=o.contextType;w=lo,typeof K=="object"&&K!==null&&(w=Gt(K));var X=o.getDerivedStateFromProps;K=typeof X=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=i.pendingProps!==b,K||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||B!==w)&&qm(i,f,l,w),lr=!1;var q=i.memoizedState;f.state=q,Ha(i,l,f,h),qa(),B=i.memoizedState,b||q!==B||lr?(typeof X=="function"&&(xd(i,o,X,l),B=i.memoizedState),(C=lr||Bm(i,o,C,l,q,B,w))?(K||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(i.flags|=4194308)):(typeof f.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=B),f.props=l,f.state=B,f.context=w,l=C):(typeof f.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{f=i.stateNode,ud(t,i),w=i.memoizedProps,K=Ss(o,w),f.props=K,X=i.pendingProps,q=f.context,B=o.contextType,C=lo,typeof B=="object"&&B!==null&&(C=Gt(B)),b=o.getDerivedStateFromProps,(B=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(w!==X||q!==C)&&qm(i,f,l,C),lr=!1,q=i.memoizedState,f.state=q,Ha(i,l,f,h),qa();var H=i.memoizedState;w!==X||q!==H||lr||t!==null&&t.dependencies!==null&&Vu(t.dependencies)?(typeof b=="function"&&(xd(i,o,b,l),H=i.memoizedState),(K=lr||Bm(i,o,K,l,q,H,C)||t!==null&&t.dependencies!==null&&Vu(t.dependencies))?(B||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,H,C),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,H,C)),typeof f.componentDidUpdate=="function"&&(i.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof f.componentDidUpdate!="function"||w===t.memoizedProps&&q===t.memoizedState||(i.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&q===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=H),f.props=l,f.state=H,f.context=C,l=K):(typeof f.componentDidUpdate!="function"||w===t.memoizedProps&&q===t.memoizedState||(i.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&q===t.memoizedState||(i.flags|=1024),l=!1)}return f=l,tc(t,i),l=(i.flags&128)!==0,f||l?(f=i.stateNode,o=l&&typeof o.getDerivedStateFromError!="function"?null:f.render(),i.flags|=1,t!==null&&l?(i.child=wo(i,t.child,null,h),i.child=wo(i,null,o,h)):Lt(t,i,o,h),i.memoizedState=f.state,t=i.child):t=Mi(t,i,h),t}function iy(t,i,o,l){return Oa(),i.flags|=256,Lt(t,i,o,l),i.child}var Od={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Pd(t){return{baseLanes:t,cachePool:Fg()}}function Vd(t,i,o){return t=t!==null?t.childLanes&~o:0,i&&(t|=Cn),t}function ry(t,i,o){var l=i.pendingProps,h=!1,f=(i.flags&128)!==0,w;if((w=f)||(w=t!==null&&t.memoizedState===null?!1:(St.current&2)!==0),w&&(h=!0,i.flags&=-129),w=(i.flags&32)!==0,i.flags&=-33,t===null){if(Be){if(h?dr(i):fr(),Be){var b=at,C;if(C=b){e:{for(C=b,b=Jn;C.nodeType!==8;){if(!b){b=null;break e}if(C=Vn(C.nextSibling),C===null){b=null;break e}}b=C}b!==null?(i.memoizedState={dehydrated:b,treeContext:ms!==null?{id:Ci,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},C=un(18,null,null,0),C.stateNode=b,C.return=i,i.child=C,en=i,at=null,C=!0):C=!1}C||ws(i)}if(b=i.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return _f(b)?i.lanes=32:i.lanes=536870912,null;Ni(i)}return b=l.children,l=l.fallback,h?(fr(),h=i.mode,b=nc({mode:"hidden",children:b},h),l=gs(l,h,o,null),b.return=i,l.return=i,b.sibling=l,i.child=b,h=i.child,h.memoizedState=Pd(o),h.childLanes=Vd(t,w,o),i.memoizedState=Od,l):(dr(i),Ld(i,b))}if(C=t.memoizedState,C!==null&&(b=C.dehydrated,b!==null)){if(f)i.flags&256?(dr(i),i.flags&=-257,i=Ud(t,i,o)):i.memoizedState!==null?(fr(),i.child=t.child,i.flags|=128,i=null):(fr(),h=l.fallback,b=i.mode,l=nc({mode:"visible",children:l.children},b),h=gs(h,b,o,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,wo(i,t.child,null,o),l=i.child,l.memoizedState=Pd(o),l.childLanes=Vd(t,w,o),i.memoizedState=Od,i=h);else if(dr(i),_f(b)){if(w=b.nextSibling&&b.nextSibling.dataset,w)var B=w.dgst;w=B,l=Error(s(419)),l.stack="",l.digest=w,Pa({value:l,source:null,stack:null}),i=Ud(t,i,o)}else if(xt||Va(t,i,o,!1),w=(o&t.childLanes)!==0,xt||w){if(w=Ze,w!==null&&(l=o&-o,l=(l&42)!==0?1:er(l),l=(l&(w.suspendedLanes|o))!==0?0:l,l!==0&&l!==C.retryLane))throw C.retryLane=l,ao(t,l),pn(w,t,l),Qm;b.data==="$?"||nf(),i=Ud(t,i,o)}else b.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=C.treeContext,at=Vn(b.nextSibling),en=i,Be=!0,vs=null,Jn=!1,t!==null&&(Sn[An++]=Ci,Sn[An++]=Ii,Sn[An++]=ms,Ci=t.id,Ii=t.overflow,ms=i),i=Ld(i,l.children),i.flags|=4096);return i}return h?(fr(),h=l.fallback,b=i.mode,C=t.child,B=C.sibling,l=Ri(C,{mode:"hidden",children:l.children}),l.subtreeFlags=C.subtreeFlags&65011712,B!==null?h=Ri(B,h):(h=gs(h,b,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,b=t.child.memoizedState,b===null?b=Pd(o):(C=b.cachePool,C!==null?(B=Et._currentValue,C=C.parent!==B?{parent:B,pool:B}:C):C=Fg(),b={baseLanes:b.baseLanes|o,cachePool:C}),h.memoizedState=b,h.childLanes=Vd(t,w,o),i.memoizedState=Od,l):(dr(i),o=t.child,t=o.sibling,o=Ri(o,{mode:"visible",children:l.children}),o.return=i,o.sibling=null,t!==null&&(w=i.deletions,w===null?(i.deletions=[t],i.flags|=16):w.push(t)),i.child=o,i.memoizedState=null,o)}function Ld(t,i){return i=nc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function nc(t,i){return t=un(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Ud(t,i,o){return wo(i,t.child,null,o),t=Ld(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function sy(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),nd(t.return,i,o)}function zd(t,i,o,l,h){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:h}:(f.isBackwards=i,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=o,f.tailMode=h)}function oy(t,i,o){var l=i.pendingProps,h=l.revealOrder,f=l.tail;if(Lt(t,i,l.children,o),l=St.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sy(t,o,i);else if(t.tag===19)sy(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(ie(St,l),h){case"forwards":for(o=i.child,h=null;o!==null;)t=o.alternate,t!==null&&Ju(t)===null&&(h=o),o=o.sibling;o=h,o===null?(h=i.child,i.child=null):(h=o.sibling,o.sibling=null),zd(i,!1,h,o,f);break;case"backwards":for(o=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&Ju(t)===null){i.child=h;break}t=h.sibling,h.sibling=o,o=h,h=t}zd(i,!0,o,null,f);break;case"together":zd(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Mi(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),vr|=i.lanes,(o&i.childLanes)===0)if(t!==null){if(Va(t,i,o,!1),(o&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(s(153));if(i.child!==null){for(t=i.child,o=Ri(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Ri(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function jd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Vu(t)))}function oE(t,i,o){switch(i.tag){case 3:Je(i,i.stateNode.containerInfo),ar(i,Et,t.memoizedState.cache),Oa();break;case 27:case 5:Zi(i);break;case 4:Je(i,i.stateNode.containerInfo);break;case 10:ar(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(dr(i),i.flags|=128,null):(o&i.child.childLanes)!==0?ry(t,i,o):(dr(i),t=Mi(t,i,o),t!==null?t.sibling:null);dr(i);break;case 19:var h=(t.flags&128)!==0;if(l=(o&i.childLanes)!==0,l||(Va(t,i,o,!1),l=(o&i.childLanes)!==0),h){if(l)return oy(t,i,o);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ie(St,St.current),l)break;return null;case 22:case 23:return i.lanes=0,Zm(t,i,o);case 24:ar(i,Et,t.memoizedState.cache)}return Mi(t,i,o)}function ay(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps)xt=!0;else{if(!jd(t,o)&&(i.flags&128)===0)return xt=!1,oE(t,i,o);xt=(t.flags&131072)!==0}else xt=!1,Be&&(i.flags&1048576)!==0&&Lg(i,Pu,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")Qh(l)?(t=Ss(l,t),i.tag=1,i=ny(null,i,l,t,o)):(i.tag=0,i=Md(null,i,l,t,o));else{if(l!=null){if(h=l.$$typeof,h===he){i.tag=11,i=Xm(null,i,l,t,o);break e}else if(h===M){i.tag=14,i=$m(null,i,l,t,o);break e}}throw i=Ot(l)||l,Error(s(306,i,""))}}return i;case 0:return Md(t,i,i.type,i.pendingProps,o);case 1:return l=i.type,h=Ss(l,i.pendingProps),ny(t,i,l,h,o);case 3:e:{if(Je(i,i.stateNode.containerInfo),t===null)throw Error(s(387));l=i.pendingProps;var f=i.memoizedState;h=f.element,ud(t,i),Ha(i,l,null,o);var w=i.memoizedState;if(l=w.cache,ar(i,Et,l),l!==f.cache&&id(i,[Et],o,!0),qa(),l=w.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:w.cache},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){i=iy(t,i,l,o);break e}else if(l!==h){h=Tn(Error(s(424)),i),Pa(h),i=iy(t,i,l,o);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(at=Vn(t.firstChild),en=i,Be=!0,vs=null,Jn=!0,o=zm(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Oa(),l===h){i=Mi(t,i,o);break e}Lt(t,i,l,o)}i=i.child}return i;case 26:return tc(t,i),t===null?(o=hv(i.type,null,i.pendingProps,null))?i.memoizedState=o:Be||(o=i.type,t=i.pendingProps,l=mc(Te.current).createElement(o),l[_t]=i,l[gt]=t,zt(l,o,t),ct(l),i.stateNode=l):i.memoizedState=hv(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Zi(i),t===null&&Be&&(l=i.stateNode=lv(i.type,i.pendingProps,Te.current),en=i,Jn=!0,h=at,Tr(i.type)?(bf=h,at=Vn(l.firstChild)):at=h),Lt(t,i,i.pendingProps.children,o),tc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Be&&((h=l=at)&&(l=OE(l,i.type,i.pendingProps,Jn),l!==null?(i.stateNode=l,en=i,at=Vn(l.firstChild),Jn=!1,h=!0):h=!1),h||ws(i)),Zi(i),h=i.type,f=i.pendingProps,w=t!==null?t.memoizedProps:null,l=f.children,yf(h,f)?l=null:w!==null&&yf(h,w)&&(i.flags|=32),i.memoizedState!==null&&(h=gd(t,i,JT,null,null,o),hl._currentValue=h),tc(t,i),Lt(t,i,l,o),i.child;case 6:return t===null&&Be&&((t=o=at)&&(o=PE(o,i.pendingProps,Jn),o!==null?(i.stateNode=o,en=i,at=null,t=!0):t=!1),t||ws(i)),null;case 13:return ry(t,i,o);case 4:return Je(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=wo(i,null,l,o):Lt(t,i,l,o),i.child;case 11:return Xm(t,i,i.type,i.pendingProps,o);case 7:return Lt(t,i,i.pendingProps,o),i.child;case 8:return Lt(t,i,i.pendingProps.children,o),i.child;case 12:return Lt(t,i,i.pendingProps.children,o),i.child;case 10:return l=i.pendingProps,ar(i,i.type,l.value),Lt(t,i,l.children,o),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,bs(i),h=Gt(h),l=l(h),i.flags|=1,Lt(t,i,l,o),i.child;case 14:return $m(t,i,i.type,i.pendingProps,o);case 15:return Jm(t,i,i.type,i.pendingProps,o);case 19:return oy(t,i,o);case 31:return l=i.pendingProps,o=i.mode,l={mode:l.mode,children:l.children},t===null?(o=nc(l,o),o.ref=i.ref,i.child=o,o.return=i,i=o):(o=Ri(t.child,l),o.ref=i.ref,i.child=o,o.return=i,i=o),i;case 22:return Zm(t,i,o);case 24:return bs(i),l=Gt(Et),t===null?(h=od(),h===null&&(h=Ze,f=rd(),h.pooledCache=f,f.refCount++,f!==null&&(h.pooledCacheLanes|=o),h=f),i.memoizedState={parent:l,cache:h},ld(i),ar(i,Et,h)):((t.lanes&o)!==0&&(ud(t,i),Ha(i,null,null,o),qa()),h=t.memoizedState,f=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),ar(i,Et,l)):(l=f.cache,ar(i,Et,l),l!==h.cache&&id(i,[Et],o,!0))),Lt(t,i,i.pendingProps.children,o),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Oi(t){t.flags|=4}function ly(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!mv(i)){if(i=Rn.current,i!==null&&((Ve&4194048)===Ve?Zn!==null:(Ve&62914560)!==Ve&&(Ve&536870912)===0||i!==Zn))throw ja=ad,Gg;t.flags|=8192}}function ic(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?fa():536870912,t.lanes|=i,Eo|=i)}function Xa(t,i){if(!Be)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function nt(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var h=t.child;h!==null;)o|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)o|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function aE(t,i,o){var l=i.pendingProps;switch(Zh(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(i),null;case 1:return nt(i),null;case 3:return o=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),xi(Et),jn(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(Ma(i)?Oi(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,jg())),nt(i),null;case 26:return o=i.memoizedState,t===null?(Oi(i),o!==null?(nt(i),ly(i,o)):(nt(i),i.flags&=-16777217)):o?o!==t.memoizedState?(Oi(i),nt(i),ly(i,o)):(nt(i),i.flags&=-16777217):(t.memoizedProps!==l&&Oi(i),nt(i),i.flags&=-16777217),null;case 27:fi(i),o=Te.current;var h=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Oi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return nt(i),null}t=pe.current,Ma(i)?Ug(i):(t=lv(h,l,o),i.stateNode=t,Oi(i))}return nt(i),null;case 5:if(fi(i),o=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Oi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return nt(i),null}if(t=pe.current,Ma(i))Ug(i);else{switch(h=mc(Te.current),t){case 1:t=h.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:t=h.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":t=h.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":t=h.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":t=h.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?h.createElement(o,{is:l.is}):h.createElement(o)}}t[_t]=i,t[gt]=l;e:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)t.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break e;for(;h.sibling===null;){if(h.return===null||h.return===i)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=t;e:switch(zt(t,o,l),o){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Oi(i)}}return nt(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Oi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(t=Te.current,Ma(i)){if(t=i.stateNode,o=i.memoizedProps,l=null,h=en,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[_t]=i,t=!!(t.nodeValue===o||l!==null&&l.suppressHydrationWarning===!0||tv(t.nodeValue,o)),t||ws(i)}else t=mc(t).createTextNode(l),t[_t]=i,i.stateNode=t}return nt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=Ma(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[_t]=i}else Oa(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;nt(i),h=!1}else h=jg(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Ni(i),i):(Ni(i),null)}if(Ni(i),(i.flags&128)!==0)return i.lanes=o,i;if(o=l!==null,t=t!==null&&t.memoizedState!==null,o){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var f=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==h&&(l.flags|=2048)}return o!==t&&o&&(i.child.flags|=8192),ic(i,i.updateQueue),nt(i),null;case 4:return jn(),t===null&&df(i.stateNode.containerInfo),nt(i),null;case 10:return xi(i.type),nt(i),null;case 19:if(ae(St),h=i.memoizedState,h===null)return nt(i),null;if(l=(i.flags&128)!==0,f=h.rendering,f===null)if(l)Xa(h,!1);else{if(lt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(f=Ju(t),f!==null){for(i.flags|=128,Xa(h,!1),t=f.updateQueue,i.updateQueue=t,ic(i,t),i.subtreeFlags=0,t=o,o=i.child;o!==null;)Vg(o,t),o=o.sibling;return ie(St,St.current&1|2),i.child}t=t.sibling}h.tail!==null&&mn()>oc&&(i.flags|=128,l=!0,Xa(h,!1),i.lanes=4194304)}else{if(!l)if(t=Ju(f),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,ic(i,t),Xa(h,!0),h.tail===null&&h.tailMode==="hidden"&&!f.alternate&&!Be)return nt(i),null}else 2*mn()-h.renderingStartTime>oc&&o!==536870912&&(i.flags|=128,l=!0,Xa(h,!1),i.lanes=4194304);h.isBackwards?(f.sibling=i.child,i.child=f):(t=h.last,t!==null?t.sibling=f:i.child=f,h.last=f)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=mn(),i.sibling=null,t=St.current,ie(St,l?t&1|2:t&1),i):(nt(i),null);case 22:case 23:return Ni(i),fd(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(o&536870912)!==0&&(i.flags&128)===0&&(nt(i),i.subtreeFlags&6&&(i.flags|=8192)):nt(i),o=i.updateQueue,o!==null&&ic(i,o.retryQueue),o=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==o&&(i.flags|=2048),t!==null&&ae(Ts),null;case 24:return o=null,t!==null&&(o=t.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),xi(Et),nt(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function lE(t,i){switch(Zh(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return xi(Et),jn(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return fi(i),null;case 13:if(Ni(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Oa()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ae(St),null;case 4:return jn(),null;case 10:return xi(i.type),null;case 22:case 23:return Ni(i),fd(),t!==null&&ae(Ts),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return xi(Et),null;case 25:return null;default:return null}}function uy(t,i){switch(Zh(i),i.tag){case 3:xi(Et),jn();break;case 26:case 27:case 5:fi(i);break;case 4:jn();break;case 13:Ni(i);break;case 19:ae(St);break;case 10:xi(i.type);break;case 22:case 23:Ni(i),fd(),t!==null&&ae(Ts);break;case 24:xi(Et)}}function $a(t,i){try{var o=i.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var h=l.next;o=h;do{if((o.tag&t)===t){l=void 0;var f=o.create,w=o.inst;l=f(),w.destroy=l}o=o.next}while(o!==h)}}catch(b){$e(i,i.return,b)}}function pr(t,i,o){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var f=h.next;l=f;do{if((l.tag&t)===t){var w=l.inst,b=w.destroy;if(b!==void 0){w.destroy=void 0,h=i;var C=o,B=b;try{B()}catch(K){$e(h,C,K)}}}l=l.next}while(l!==f)}}catch(K){$e(i,i.return,K)}}function cy(t){var i=t.updateQueue;if(i!==null){var o=t.stateNode;try{$g(i,o)}catch(l){$e(t,t.return,l)}}}function hy(t,i,o){o.props=Ss(t.type,t.memoizedProps),o.state=t.memoizedState;try{o.componentWillUnmount()}catch(l){$e(t,i,l)}}function Ja(t,i){try{var o=t.ref;if(o!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof o=="function"?t.refCleanup=o(l):o.current=l}}catch(h){$e(t,i,h)}}function ei(t,i){var o=t.ref,l=t.refCleanup;if(o!==null)if(typeof l=="function")try{l()}catch(h){$e(t,i,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(h){$e(t,i,h)}else o.current=null}function dy(t){var i=t.type,o=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":o.autoFocus&&l.focus();break e;case"img":o.src?l.src=o.src:o.srcSet&&(l.srcset=o.srcSet)}}catch(h){$e(t,t.return,h)}}function Bd(t,i,o){try{var l=t.stateNode;kE(l,t.type,o,i),l[gt]=i}catch(h){$e(t,t.return,h)}}function fy(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Tr(t.type)||t.tag===4}function qd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||fy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Tr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hd(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(t,i):(i=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,i.appendChild(t),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=gc));else if(l!==4&&(l===27&&Tr(t.type)&&(o=t.stateNode,i=null),t=t.child,t!==null))for(Hd(t,i,o),t=t.sibling;t!==null;)Hd(t,i,o),t=t.sibling}function rc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(l===27&&Tr(t.type)&&(o=t.stateNode),t=t.child,t!==null))for(rc(t,i,o),t=t.sibling;t!==null;)rc(t,i,o),t=t.sibling}function py(t){var i=t.stateNode,o=t.memoizedProps;try{for(var l=t.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);zt(i,l,o),i[_t]=t,i[gt]=o}catch(f){$e(t,t.return,f)}}var Pi=!1,dt=!1,Fd=!1,gy=typeof WeakSet=="function"?WeakSet:Set,Dt=null;function uE(t,i){if(t=t.containerInfo,gf=Tc,t=Rg(t),qh(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var h=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{o.nodeType,f.nodeType}catch{o=null;break e}var w=0,b=-1,C=-1,B=0,K=0,X=t,q=null;t:for(;;){for(var H;X!==o||h!==0&&X.nodeType!==3||(b=w+h),X!==f||l!==0&&X.nodeType!==3||(C=w+l),X.nodeType===3&&(w+=X.nodeValue.length),(H=X.firstChild)!==null;)q=X,X=H;for(;;){if(X===t)break t;if(q===o&&++B===h&&(b=w),q===f&&++K===l&&(C=w),(H=X.nextSibling)!==null)break;X=q,q=X.parentNode}X=H}o=b===-1||C===-1?null:{start:b,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(mf={focusedElem:t,selectionRange:o},Tc=!1,Dt=i;Dt!==null;)if(i=Dt,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,Dt=t;else for(;Dt!==null;){switch(i=Dt,f=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,o=i,h=f.memoizedProps,f=f.memoizedState,l=o.stateNode;try{var _e=Ss(o.type,h,o.elementType===o.type);t=l.getSnapshotBeforeUpdate(_e,f),l.__reactInternalSnapshotBeforeUpdate=t}catch(ge){$e(o,o.return,ge)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,o=t.nodeType,o===9)wf(t);else if(o===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":wf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=i.sibling,t!==null){t.return=i.return,Dt=t;break}Dt=i.return}}function my(t,i,o){var l=o.flags;switch(o.tag){case 0:case 11:case 15:gr(t,o),l&4&&$a(5,o);break;case 1:if(gr(t,o),l&4)if(t=o.stateNode,i===null)try{t.componentDidMount()}catch(w){$e(o,o.return,w)}else{var h=Ss(o.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(h,i,t.__reactInternalSnapshotBeforeUpdate)}catch(w){$e(o,o.return,w)}}l&64&&cy(o),l&512&&Ja(o,o.return);break;case 3:if(gr(t,o),l&64&&(t=o.updateQueue,t!==null)){if(i=null,o.child!==null)switch(o.child.tag){case 27:case 5:i=o.child.stateNode;break;case 1:i=o.child.stateNode}try{$g(t,i)}catch(w){$e(o,o.return,w)}}break;case 27:i===null&&l&4&&py(o);case 26:case 5:gr(t,o),i===null&&l&4&&dy(o),l&512&&Ja(o,o.return);break;case 12:gr(t,o);break;case 13:gr(t,o),l&4&&wy(t,o),l&64&&(t=o.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(o=vE.bind(null,o),VE(t,o))));break;case 22:if(l=o.memoizedState!==null||Pi,!l){i=i!==null&&i.memoizedState!==null||dt,h=Pi;var f=dt;Pi=l,(dt=i)&&!f?mr(t,o,(o.subtreeFlags&8772)!==0):gr(t,o),Pi=h,dt=f}break;case 30:break;default:gr(t,o)}}function yy(t){var i=t.alternate;i!==null&&(t.alternate=null,yy(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&ir(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tt=null,rn=!1;function Vi(t,i,o){for(o=o.child;o!==null;)vy(t,i,o),o=o.sibling}function vy(t,i,o){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(ot,o)}catch{}switch(o.tag){case 26:dt||ei(o,i),Vi(t,i,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:dt||ei(o,i);var l=tt,h=rn;Tr(o.type)&&(tt=o.stateNode,rn=!1),Vi(t,i,o),al(o.stateNode),tt=l,rn=h;break;case 5:dt||ei(o,i);case 6:if(l=tt,h=rn,tt=null,Vi(t,i,o),tt=l,rn=h,tt!==null)if(rn)try{(tt.nodeType===9?tt.body:tt.nodeName==="HTML"?tt.ownerDocument.body:tt).removeChild(o.stateNode)}catch(f){$e(o,i,f)}else try{tt.removeChild(o.stateNode)}catch(f){$e(o,i,f)}break;case 18:tt!==null&&(rn?(t=tt,ov(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,o.stateNode),gl(t)):ov(tt,o.stateNode));break;case 4:l=tt,h=rn,tt=o.stateNode.containerInfo,rn=!0,Vi(t,i,o),tt=l,rn=h;break;case 0:case 11:case 14:case 15:dt||pr(2,o,i),dt||pr(4,o,i),Vi(t,i,o);break;case 1:dt||(ei(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"&&hy(o,i,l)),Vi(t,i,o);break;case 21:Vi(t,i,o);break;case 22:dt=(l=dt)||o.memoizedState!==null,Vi(t,i,o),dt=l;break;default:Vi(t,i,o)}}function wy(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{gl(t)}catch(o){$e(i,i.return,o)}}function cE(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new gy),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new gy),i;default:throw Error(s(435,t.tag))}}function Gd(t,i){var o=cE(t);i.forEach(function(l){var h=wE.bind(null,t,l);o.has(l)||(o.add(l),l.then(h,h))})}function cn(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var h=o[l],f=t,w=i,b=w;e:for(;b!==null;){switch(b.tag){case 27:if(Tr(b.type)){tt=b.stateNode,rn=!1;break e}break;case 5:tt=b.stateNode,rn=!1;break e;case 3:case 4:tt=b.stateNode.containerInfo,rn=!0;break e}b=b.return}if(tt===null)throw Error(s(160));vy(f,w,h),tt=null,rn=!1,f=h.alternate,f!==null&&(f.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)_y(i,t),i=i.sibling}var Pn=null;function _y(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:cn(i,t),hn(t),l&4&&(pr(3,t,t.return),$a(3,t),pr(5,t,t.return));break;case 1:cn(i,t),hn(t),l&512&&(dt||o===null||ei(o,o.return)),l&64&&Pi&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(o=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=o===null?l:o.concat(l))));break;case 26:var h=Pn;if(cn(i,t),hn(t),l&512&&(dt||o===null||ei(o,o.return)),l&4){var f=o!==null?o.memoizedState:null;if(l=t.memoizedState,o===null)if(l===null)if(t.stateNode===null){e:{l=t.type,o=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":f=h.getElementsByTagName("title")[0],(!f||f[Zr]||f[_t]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=h.createElement(l),h.head.insertBefore(f,h.querySelector("head > title"))),zt(f,l,o),f[_t]=t,ct(f),l=f;break e;case"link":var w=pv("link","href",h).get(l+(o.href||""));if(w){for(var b=0;b<w.length;b++)if(f=w[b],f.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&f.getAttribute("rel")===(o.rel==null?null:o.rel)&&f.getAttribute("title")===(o.title==null?null:o.title)&&f.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){w.splice(b,1);break t}}f=h.createElement(l),zt(f,l,o),h.head.appendChild(f);break;case"meta":if(w=pv("meta","content",h).get(l+(o.content||""))){for(b=0;b<w.length;b++)if(f=w[b],f.getAttribute("content")===(o.content==null?null:""+o.content)&&f.getAttribute("name")===(o.name==null?null:o.name)&&f.getAttribute("property")===(o.property==null?null:o.property)&&f.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&f.getAttribute("charset")===(o.charSet==null?null:o.charSet)){w.splice(b,1);break t}}f=h.createElement(l),zt(f,l,o),h.head.appendChild(f);break;default:throw Error(s(468,l))}f[_t]=t,ct(f),l=f}t.stateNode=l}else gv(h,t.type,t.stateNode);else t.stateNode=fv(h,l,t.memoizedProps);else f!==l?(f===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):f.count--,l===null?gv(h,t.type,t.stateNode):fv(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Bd(t,t.memoizedProps,o.memoizedProps)}break;case 27:cn(i,t),hn(t),l&512&&(dt||o===null||ei(o,o.return)),o!==null&&l&4&&Bd(t,t.memoizedProps,o.memoizedProps);break;case 5:if(cn(i,t),hn(t),l&512&&(dt||o===null||ei(o,o.return)),t.flags&32){h=t.stateNode;try{vn(h,"")}catch(H){$e(t,t.return,H)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,Bd(t,h,o!==null?o.memoizedProps:h)),l&1024&&(Fd=!0);break;case 6:if(cn(i,t),hn(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,o=t.stateNode;try{o.nodeValue=l}catch(H){$e(t,t.return,H)}}break;case 3:if(wc=null,h=Pn,Pn=yc(i.containerInfo),cn(i,t),Pn=h,hn(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{gl(i.containerInfo)}catch(H){$e(t,t.return,H)}Fd&&(Fd=!1,by(t));break;case 4:l=Pn,Pn=yc(t.stateNode.containerInfo),cn(i,t),hn(t),Pn=l;break;case 12:cn(i,t),hn(t);break;case 13:cn(i,t),hn(t),t.child.flags&8192&&t.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&($d=mn()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Gd(t,l)));break;case 22:h=t.memoizedState!==null;var C=o!==null&&o.memoizedState!==null,B=Pi,K=dt;if(Pi=B||h,dt=K||C,cn(i,t),dt=K,Pi=B,hn(t),l&8192)e:for(i=t.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(o===null||C||Pi||dt||As(t)),o=null,i=t;;){if(i.tag===5||i.tag===26){if(o===null){C=o=i;try{if(f=C.stateNode,h)w=f.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{b=C.stateNode;var X=C.memoizedProps.style,q=X!=null&&X.hasOwnProperty("display")?X.display:null;b.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(H){$e(C,C.return,H)}}}else if(i.tag===6){if(o===null){C=i;try{C.stateNode.nodeValue=h?"":C.memoizedProps}catch(H){$e(C,C.return,H)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;o===i&&(o=null),i=i.return}o===i&&(o=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(o=l.retryQueue,o!==null&&(l.retryQueue=null,Gd(t,o))));break;case 19:cn(i,t),hn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Gd(t,l)));break;case 30:break;case 21:break;default:cn(i,t),hn(t)}}function hn(t){var i=t.flags;if(i&2){try{for(var o,l=t.return;l!==null;){if(fy(l)){o=l;break}l=l.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var h=o.stateNode,f=qd(t);rc(t,f,h);break;case 5:var w=o.stateNode;o.flags&32&&(vn(w,""),o.flags&=-33);var b=qd(t);rc(t,b,w);break;case 3:case 4:var C=o.stateNode.containerInfo,B=qd(t);Hd(t,B,C);break;default:throw Error(s(161))}}catch(K){$e(t,t.return,K)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function by(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;by(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function gr(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)my(t,i.alternate,i),i=i.sibling}function As(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:pr(4,i,i.return),As(i);break;case 1:ei(i,i.return);var o=i.stateNode;typeof o.componentWillUnmount=="function"&&hy(i,i.return,o),As(i);break;case 27:al(i.stateNode);case 26:case 5:ei(i,i.return),As(i);break;case 22:i.memoizedState===null&&As(i);break;case 30:As(i);break;default:As(i)}t=t.sibling}}function mr(t,i,o){for(o=o&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=t,f=i,w=f.flags;switch(f.tag){case 0:case 11:case 15:mr(h,f,o),$a(4,f);break;case 1:if(mr(h,f,o),l=f,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(B){$e(l,l.return,B)}if(l=f,h=l.updateQueue,h!==null){var b=l.stateNode;try{var C=h.shared.hiddenCallbacks;if(C!==null)for(h.shared.hiddenCallbacks=null,h=0;h<C.length;h++)Xg(C[h],b)}catch(B){$e(l,l.return,B)}}o&&w&64&&cy(f),Ja(f,f.return);break;case 27:py(f);case 26:case 5:mr(h,f,o),o&&l===null&&w&4&&dy(f),Ja(f,f.return);break;case 12:mr(h,f,o);break;case 13:mr(h,f,o),o&&w&4&&wy(h,f);break;case 22:f.memoizedState===null&&mr(h,f,o),Ja(f,f.return);break;case 30:break;default:mr(h,f,o)}i=i.sibling}}function Wd(t,i){var o=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==o&&(t!=null&&t.refCount++,o!=null&&La(o))}function Yd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&La(t))}function ti(t,i,o,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Ty(t,i,o,l),i=i.sibling}function Ty(t,i,o,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:ti(t,i,o,l),h&2048&&$a(9,i);break;case 1:ti(t,i,o,l);break;case 3:ti(t,i,o,l),h&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&La(t)));break;case 12:if(h&2048){ti(t,i,o,l),t=i.stateNode;try{var f=i.memoizedProps,w=f.id,b=f.onPostCommit;typeof b=="function"&&b(w,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(C){$e(i,i.return,C)}}else ti(t,i,o,l);break;case 13:ti(t,i,o,l);break;case 23:break;case 22:f=i.stateNode,w=i.alternate,i.memoizedState!==null?f._visibility&2?ti(t,i,o,l):Za(t,i):f._visibility&2?ti(t,i,o,l):(f._visibility|=2,_o(t,i,o,l,(i.subtreeFlags&10256)!==0)),h&2048&&Wd(w,i);break;case 24:ti(t,i,o,l),h&2048&&Yd(i.alternate,i);break;default:ti(t,i,o,l)}}function _o(t,i,o,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var f=t,w=i,b=o,C=l,B=w.flags;switch(w.tag){case 0:case 11:case 15:_o(f,w,b,C,h),$a(8,w);break;case 23:break;case 22:var K=w.stateNode;w.memoizedState!==null?K._visibility&2?_o(f,w,b,C,h):Za(f,w):(K._visibility|=2,_o(f,w,b,C,h)),h&&B&2048&&Wd(w.alternate,w);break;case 24:_o(f,w,b,C,h),h&&B&2048&&Yd(w.alternate,w);break;default:_o(f,w,b,C,h)}i=i.sibling}}function Za(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var o=t,l=i,h=l.flags;switch(l.tag){case 22:Za(o,l),h&2048&&Wd(l.alternate,l);break;case 24:Za(o,l),h&2048&&Yd(l.alternate,l);break;default:Za(o,l)}i=i.sibling}}var el=8192;function bo(t){if(t.subtreeFlags&el)for(t=t.child;t!==null;)Ey(t),t=t.sibling}function Ey(t){switch(t.tag){case 26:bo(t),t.flags&el&&t.memoizedState!==null&&QE(Pn,t.memoizedState,t.memoizedProps);break;case 5:bo(t);break;case 3:case 4:var i=Pn;Pn=yc(t.stateNode.containerInfo),bo(t),Pn=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=el,el=16777216,bo(t),el=i):bo(t));break;default:bo(t)}}function Sy(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function tl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var o=0;o<i.length;o++){var l=i[o];Dt=l,Ry(l,t)}Sy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ay(t),t=t.sibling}function Ay(t){switch(t.tag){case 0:case 11:case 15:tl(t),t.flags&2048&&pr(9,t,t.return);break;case 3:tl(t);break;case 12:tl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,sc(t)):tl(t);break;default:tl(t)}}function sc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var o=0;o<i.length;o++){var l=i[o];Dt=l,Ry(l,t)}Sy(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:pr(8,i,i.return),sc(i);break;case 22:o=i.stateNode,o._visibility&2&&(o._visibility&=-3,sc(i));break;default:sc(i)}t=t.sibling}}function Ry(t,i){for(;Dt!==null;){var o=Dt;switch(o.tag){case 0:case 11:case 15:pr(8,o,i);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var l=o.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:La(o.memoizedState.cache)}if(l=o.child,l!==null)l.return=o,Dt=l;else e:for(o=t;Dt!==null;){l=Dt;var h=l.sibling,f=l.return;if(yy(l),l===o){Dt=null;break e}if(h!==null){h.return=f,Dt=h;break e}Dt=f}}}var hE={getCacheForType:function(t){var i=Gt(Et),o=i.data.get(t);return o===void 0&&(o=t(),i.data.set(t,o)),o}},dE=typeof WeakMap=="function"?WeakMap:Map,Fe=0,Ze=null,xe=null,Ve=0,Ge=0,dn=null,yr=!1,To=!1,Kd=!1,Li=0,lt=0,vr=0,Rs=0,Qd=0,Cn=0,Eo=0,nl=null,sn=null,Xd=!1,$d=0,oc=1/0,ac=null,wr=null,Ut=0,_r=null,So=null,Ao=0,Jd=0,Zd=null,Cy=null,il=0,ef=null;function fn(){if((Fe&2)!==0&&Ve!==0)return Ve&-Ve;if(Y.T!==null){var t=ho;return t!==0?t:lf()}return tr()}function Iy(){Cn===0&&(Cn=(Ve&536870912)===0||Be?da():536870912);var t=Rn.current;return t!==null&&(t.flags|=32),Cn}function pn(t,i,o){(t===Ze&&(Ge===2||Ge===9)||t.cancelPendingCommit!==null)&&(Ro(t,0),br(t,Ve,Cn,!1)),gi(t,o),((Fe&2)===0||t!==Ze)&&(t===Ze&&((Fe&2)===0&&(Rs|=o),lt===4&&br(t,Ve,Cn,!1)),ni(t))}function ky(t,i,o){if((Fe&6)!==0)throw Error(s(327));var l=!o&&(i&124)===0&&(i&t.expiredLanes)===0||Jr(t,i),h=l?gE(t,i):rf(t,i,!0),f=l;do{if(h===0){To&&!l&&br(t,i,0,!1);break}else{if(o=t.current.alternate,f&&!fE(o)){h=rf(t,i,!1),f=!1;continue}if(h===2){if(f=i,t.errorRecoveryDisabledLanes&f)var w=0;else w=t.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){i=w;e:{var b=t;h=nl;var C=b.current.memoizedState.isDehydrated;if(C&&(Ro(b,w).flags|=256),w=rf(b,w,!1),w!==2){if(Kd&&!C){b.errorRecoveryDisabledLanes|=f,Rs|=f,h=4;break e}f=sn,sn=h,f!==null&&(sn===null?sn=f:sn.push.apply(sn,f))}h=w}if(f=!1,h!==2)continue}}if(h===1){Ro(t,0),br(t,i,0,!0);break}e:{switch(l=t,f=h,f){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:br(l,i,Cn,!yr);break e;case 2:sn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=$d+300-mn(),10<h)){if(br(l,i,Cn,!yr),qs(l,0,!0)!==0)break e;l.timeoutHandle=rv(xy.bind(null,l,o,sn,ac,Xd,i,Cn,Rs,Eo,yr,f,2,-0,0),h);break e}xy(l,o,sn,ac,Xd,i,Cn,Rs,Eo,yr,f,0,-0,0)}}break}while(!0);ni(t)}function xy(t,i,o,l,h,f,w,b,C,B,K,X,q,H){if(t.timeoutHandle=-1,X=i.subtreeFlags,(X&8192||(X&16785408)===16785408)&&(cl={stylesheets:null,count:0,unsuspend:KE},Ey(i),X=XE(),X!==null)){t.cancelPendingCommit=X(Ly.bind(null,t,i,f,o,l,h,w,b,C,K,1,q,H)),br(t,f,w,!B);return}Ly(t,i,f,o,l,h,w,b,C)}function fE(t){for(var i=t;;){var o=i.tag;if((o===0||o===11||o===15)&&i.flags&16384&&(o=i.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var l=0;l<o.length;l++){var h=o[l],f=h.getSnapshot;h=h.value;try{if(!ln(f(),h))return!1}catch{return!1}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function br(t,i,o,l){i&=~Qd,i&=~Rs,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var h=i;0<h;){var f=31-Ft(h),w=1<<f;l[f]=-1,h&=~w}o!==0&&Bn(t,o,i)}function lc(){return(Fe&6)===0?(rl(0),!1):!0}function tf(){if(xe!==null){if(Ge===0)var t=xe.return;else t=xe,ki=_s=null,vd(t),vo=null,Ka=0,t=xe;for(;t!==null;)uy(t.alternate,t),t=t.return;xe=null}}function Ro(t,i){var o=t.timeoutHandle;o!==-1&&(t.timeoutHandle=-1,DE(o)),o=t.cancelPendingCommit,o!==null&&(t.cancelPendingCommit=null,o()),tf(),Ze=t,xe=o=Ri(t.current,null),Ve=i,Ge=0,dn=null,yr=!1,To=Jr(t,i),Kd=!1,Eo=Cn=Qd=Rs=vr=lt=0,sn=nl=null,Xd=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var h=31-Ft(l),f=1<<h;i|=t[h],l&=~f}return Li=i,xu(),o}function Dy(t,i){Ce=null,Y.H=Qu,i===za||i===zu?(i=Kg(),Ge=3):i===Gg?(i=Kg(),Ge=4):Ge=i===Qm?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,dn=i,xe===null&&(lt=1,ec(t,Tn(i,t.current)))}function Ny(){var t=Y.H;return Y.H=Qu,t===null?Qu:t}function My(){var t=Y.A;return Y.A=hE,t}function nf(){lt=4,yr||(Ve&4194048)!==Ve&&Rn.current!==null||(To=!0),(vr&134217727)===0&&(Rs&134217727)===0||Ze===null||br(Ze,Ve,Cn,!1)}function rf(t,i,o){var l=Fe;Fe|=2;var h=Ny(),f=My();(Ze!==t||Ve!==i)&&(ac=null,Ro(t,i)),i=!1;var w=lt;e:do try{if(Ge!==0&&xe!==null){var b=xe,C=dn;switch(Ge){case 8:tf(),w=6;break e;case 3:case 2:case 9:case 6:Rn.current===null&&(i=!0);var B=Ge;if(Ge=0,dn=null,Co(t,b,C,B),o&&To){w=0;break e}break;default:B=Ge,Ge=0,dn=null,Co(t,b,C,B)}}pE(),w=lt;break}catch(K){Dy(t,K)}while(!0);return i&&t.shellSuspendCounter++,ki=_s=null,Fe=l,Y.H=h,Y.A=f,xe===null&&(Ze=null,Ve=0,xu()),w}function pE(){for(;xe!==null;)Oy(xe)}function gE(t,i){var o=Fe;Fe|=2;var l=Ny(),h=My();Ze!==t||Ve!==i?(ac=null,oc=mn()+500,Ro(t,i)):To=Jr(t,i);e:do try{if(Ge!==0&&xe!==null){i=xe;var f=dn;t:switch(Ge){case 1:Ge=0,dn=null,Co(t,i,f,1);break;case 2:case 9:if(Wg(f)){Ge=0,dn=null,Py(i);break}i=function(){Ge!==2&&Ge!==9||Ze!==t||(Ge=7),ni(t)},f.then(i,i);break e;case 3:Ge=7;break e;case 4:Ge=5;break e;case 7:Wg(f)?(Ge=0,dn=null,Py(i)):(Ge=0,dn=null,Co(t,i,f,7));break;case 5:var w=null;switch(xe.tag){case 26:w=xe.memoizedState;case 5:case 27:var b=xe;if(!w||mv(w)){Ge=0,dn=null;var C=b.sibling;if(C!==null)xe=C;else{var B=b.return;B!==null?(xe=B,uc(B)):xe=null}break t}}Ge=0,dn=null,Co(t,i,f,5);break;case 6:Ge=0,dn=null,Co(t,i,f,6);break;case 8:tf(),lt=6;break e;default:throw Error(s(462))}}mE();break}catch(K){Dy(t,K)}while(!0);return ki=_s=null,Y.H=l,Y.A=h,Fe=o,xe!==null?0:(Ze=null,Ve=0,xu(),lt)}function mE(){for(;xe!==null&&!la();)Oy(xe)}function Oy(t){var i=ay(t.alternate,t,Li);t.memoizedProps=t.pendingProps,i===null?uc(t):xe=i}function Py(t){var i=t,o=i.alternate;switch(i.tag){case 15:case 0:i=ty(o,i,i.pendingProps,i.type,void 0,Ve);break;case 11:i=ty(o,i,i.pendingProps,i.type.render,i.ref,Ve);break;case 5:vd(i);default:uy(o,i),i=xe=Vg(i,Li),i=ay(o,i,Li)}t.memoizedProps=t.pendingProps,i===null?uc(t):xe=i}function Co(t,i,o,l){ki=_s=null,vd(i),vo=null,Ka=0;var h=i.return;try{if(sE(t,h,i,o,Ve)){lt=1,ec(t,Tn(o,t.current)),xe=null;return}}catch(f){if(h!==null)throw xe=h,f;lt=1,ec(t,Tn(o,t.current)),xe=null;return}i.flags&32768?(Be||l===1?t=!0:To||(Ve&536870912)!==0?t=!1:(yr=t=!0,(l===2||l===9||l===3||l===6)&&(l=Rn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Vy(i,t)):uc(i)}function uc(t){var i=t;do{if((i.flags&32768)!==0){Vy(i,yr);return}t=i.return;var o=aE(i.alternate,i,Li);if(o!==null){xe=o;return}if(i=i.sibling,i!==null){xe=i;return}xe=i=t}while(i!==null);lt===0&&(lt=5)}function Vy(t,i){do{var o=lE(t.alternate,t);if(o!==null){o.flags&=32767,xe=o;return}if(o=t.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!i&&(t=t.sibling,t!==null)){xe=t;return}xe=t=o}while(t!==null);lt=6,xe=null}function Ly(t,i,o,l,h,f,w,b,C){t.cancelPendingCommit=null;do cc();while(Ut!==0);if((Fe&6)!==0)throw Error(s(327));if(i!==null){if(i===t.current)throw Error(s(177));if(f=i.lanes|i.childLanes,f|=Yh,pa(t,o,f,w,b,C),t===Ze&&(xe=Ze=null,Ve=0),So=i,_r=t,Ao=o,Jd=f,Zd=h,Cy=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,_E(Kr,function(){return qy(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=Y.T,Y.T=null,h=oe.p,oe.p=2,w=Fe,Fe|=4;try{uE(t,i,o)}finally{Fe=w,oe.p=h,Y.T=l}}Ut=1,Uy(),zy(),jy()}}function Uy(){if(Ut===1){Ut=0;var t=_r,i=So,o=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||o){o=Y.T,Y.T=null;var l=oe.p;oe.p=2;var h=Fe;Fe|=4;try{_y(i,t);var f=mf,w=Rg(t.containerInfo),b=f.focusedElem,C=f.selectionRange;if(w!==b&&b&&b.ownerDocument&&Ag(b.ownerDocument.documentElement,b)){if(C!==null&&qh(b)){var B=C.start,K=C.end;if(K===void 0&&(K=B),"selectionStart"in b)b.selectionStart=B,b.selectionEnd=Math.min(K,b.value.length);else{var X=b.ownerDocument||document,q=X&&X.defaultView||window;if(q.getSelection){var H=q.getSelection(),_e=b.textContent.length,ge=Math.min(C.start,_e),Xe=C.end===void 0?ge:Math.min(C.end,_e);!H.extend&&ge>Xe&&(w=Xe,Xe=ge,ge=w);var P=Sg(b,ge),D=Sg(b,Xe);if(P&&D&&(H.rangeCount!==1||H.anchorNode!==P.node||H.anchorOffset!==P.offset||H.focusNode!==D.node||H.focusOffset!==D.offset)){var z=X.createRange();z.setStart(P.node,P.offset),H.removeAllRanges(),ge>Xe?(H.addRange(z),H.extend(D.node,D.offset)):(z.setEnd(D.node,D.offset),H.addRange(z))}}}}for(X=[],H=b;H=H.parentNode;)H.nodeType===1&&X.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<X.length;b++){var Q=X[b];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}Tc=!!gf,mf=gf=null}finally{Fe=h,oe.p=l,Y.T=o}}t.current=i,Ut=2}}function zy(){if(Ut===2){Ut=0;var t=_r,i=So,o=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||o){o=Y.T,Y.T=null;var l=oe.p;oe.p=2;var h=Fe;Fe|=4;try{my(t,i.alternate,i)}finally{Fe=h,oe.p=l,Y.T=o}}Ut=3}}function jy(){if(Ut===4||Ut===3){Ut=0,su();var t=_r,i=So,o=Ao,l=Cy;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Ut=5:(Ut=0,So=_r=null,By(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(wr=null),Hs(o),i=i.stateNode,He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(ot,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Y.T,h=oe.p,oe.p=2,Y.T=null;try{for(var f=t.onRecoverableError,w=0;w<l.length;w++){var b=l[w];f(b.value,{componentStack:b.stack})}}finally{Y.T=i,oe.p=h}}(Ao&3)!==0&&cc(),ni(t),h=t.pendingLanes,(o&4194090)!==0&&(h&42)!==0?t===ef?il++:(il=0,ef=t):il=0,rl(0)}}function By(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,La(i)))}function cc(t){return Uy(),zy(),jy(),qy()}function qy(){if(Ut!==5)return!1;var t=_r,i=Jd;Jd=0;var o=Hs(Ao),l=Y.T,h=oe.p;try{oe.p=32>o?32:o,Y.T=null,o=Zd,Zd=null;var f=_r,w=Ao;if(Ut=0,So=_r=null,Ao=0,(Fe&6)!==0)throw Error(s(331));var b=Fe;if(Fe|=4,Ay(f.current),Ty(f,f.current,w,o),Fe=b,rl(0,!1),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(ot,f)}catch{}return!0}finally{oe.p=h,Y.T=l,By(t,i)}}function Hy(t,i,o){i=Tn(o,i),i=Nd(t.stateNode,i,2),t=cr(t,i,2),t!==null&&(gi(t,2),ni(t))}function $e(t,i,o){if(t.tag===3)Hy(t,t,o);else for(;i!==null;){if(i.tag===3){Hy(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(wr===null||!wr.has(l))){t=Tn(o,t),o=Ym(2),l=cr(i,o,2),l!==null&&(Km(o,l,i,t),gi(l,2),ni(l));break}}i=i.return}}function sf(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new dE;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(o)||(Kd=!0,h.add(o),t=yE.bind(null,t,i,o),i.then(t,t))}function yE(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&o,t.warmLanes&=~o,Ze===t&&(Ve&o)===o&&(lt===4||lt===3&&(Ve&62914560)===Ve&&300>mn()-$d?(Fe&2)===0&&Ro(t,0):Qd|=o,Eo===Ve&&(Eo=0)),ni(t)}function Fy(t,i){i===0&&(i=fa()),t=ao(t,i),t!==null&&(gi(t,i),ni(t))}function vE(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Fy(t,o)}function wE(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(o=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),Fy(t,o)}function _E(t,i){return Wr(t,i)}var hc=null,Io=null,of=!1,dc=!1,af=!1,Cs=0;function ni(t){t!==Io&&t.next===null&&(Io===null?hc=Io=t:Io=Io.next=t),dc=!0,of||(of=!0,TE())}function rl(t,i){if(!af&&dc){af=!0;do for(var o=!1,l=hc;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var f=0;else{var w=l.suspendedLanes,b=l.pingedLanes;f=(1<<31-Ft(42|t)+1)-1,f&=h&~(w&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(o=!0,Ky(l,f))}else f=Ve,f=qs(l,l===Ze?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||Jr(l,f)||(o=!0,Ky(l,f));l=l.next}while(o);af=!1}}function bE(){Gy()}function Gy(){dc=of=!1;var t=0;Cs!==0&&(xE()&&(t=Cs),Cs=0);for(var i=mn(),o=null,l=hc;l!==null;){var h=l.next,f=Wy(l,i);f===0?(l.next=null,o===null?hc=h:o.next=h,h===null&&(Io=o)):(o=l,(t!==0||(f&3)!==0)&&(dc=!0)),l=h}rl(t)}function Wy(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var w=31-Ft(f),b=1<<w,C=h[w];C===-1?((b&o)===0||(b&l)!==0)&&(h[w]=ha(b,i)):C<=i&&(t.expiredLanes|=b),f&=~b}if(i=Ze,o=Ve,o=qs(t,t===i?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,o===0||t===i&&(Ge===2||Ge===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Yr(l),t.callbackNode=null,t.callbackPriority=0;if((o&3)===0||Jr(t,o)){if(i=o&-o,i===t.callbackPriority)return i;switch(l!==null&&Yr(l),Hs(o)){case 2:case 8:o=js;break;case 32:o=Kr;break;case 268435456:o=Bs;break;default:o=Kr}return l=Yy.bind(null,t),o=Wr(o,l),t.callbackPriority=i,t.callbackNode=o,i}return l!==null&&l!==null&&Yr(l),t.callbackPriority=2,t.callbackNode=null,2}function Yy(t,i){if(Ut!==0&&Ut!==5)return t.callbackNode=null,t.callbackPriority=0,null;var o=t.callbackNode;if(cc()&&t.callbackNode!==o)return null;var l=Ve;return l=qs(t,t===Ze?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(ky(t,l,i),Wy(t,mn()),t.callbackNode!=null&&t.callbackNode===o?Yy.bind(null,t):null)}function Ky(t,i){if(cc())return null;ky(t,i,!0)}function TE(){NE(function(){(Fe&6)!==0?Wr(ua,bE):Gy()})}function lf(){return Cs===0&&(Cs=da()),Cs}function Qy(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Qs(""+t)}function Xy(t,i){var o=i.ownerDocument.createElement("input");return o.name=i.name,o.value=i.value,t.id&&o.setAttribute("form",t.id),i.parentNode.insertBefore(o,i),t=new FormData(t),o.parentNode.removeChild(o),t}function EE(t,i,o,l,h){if(i==="submit"&&o&&o.stateNode===h){var f=Qy((h[gt]||null).action),w=l.submitter;w&&(i=(i=w[gt]||null)?Qy(i.formAction):w.getAttribute("formAction"),i!==null&&(f=i,w=null));var b=new Xs("action","action",null,l,h);t.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Cs!==0){var C=w?Xy(h,w):new FormData(h);Cd(o,{pending:!0,data:C,method:h.method,action:f},null,C)}}else typeof f=="function"&&(b.preventDefault(),C=w?Xy(h,w):new FormData(h),Cd(o,{pending:!0,data:C,method:h.method,action:f},f,C))},currentTarget:h}]})}}for(var uf=0;uf<Wh.length;uf++){var cf=Wh[uf],SE=cf.toLowerCase(),AE=cf[0].toUpperCase()+cf.slice(1);On(SE,"on"+AE)}On(kg,"onAnimationEnd"),On(xg,"onAnimationIteration"),On(Dg,"onAnimationStart"),On("dblclick","onDoubleClick"),On("focusin","onFocus"),On("focusout","onBlur"),On(qT,"onTransitionRun"),On(HT,"onTransitionStart"),On(FT,"onTransitionCancel"),On(Ng,"onTransitionEnd"),yi("onMouseEnter",["mouseout","mouseover"]),yi("onMouseLeave",["mouseout","mouseover"]),yi("onPointerEnter",["pointerout","pointerover"]),yi("onPointerLeave",["pointerout","pointerover"]),Nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sl));function $y(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],h=l.event;l=l.listeners;e:{var f=void 0;if(i)for(var w=l.length-1;0<=w;w--){var b=l[w],C=b.instance,B=b.currentTarget;if(b=b.listener,C!==f&&h.isPropagationStopped())break e;f=b,h.currentTarget=B;try{f(h)}catch(K){Zu(K)}h.currentTarget=null,f=C}else for(w=0;w<l.length;w++){if(b=l[w],C=b.instance,B=b.currentTarget,b=b.listener,C!==f&&h.isPropagationStopped())break e;f=b,h.currentTarget=B;try{f(h)}catch(K){Zu(K)}h.currentTarget=null,f=C}}}}function De(t,i){var o=i[ma];o===void 0&&(o=i[ma]=new Set);var l=t+"__bubble";o.has(l)||(Jy(i,t,2,!1),o.add(l))}function hf(t,i,o){var l=0;i&&(l|=4),Jy(o,t,l,i)}var fc="_reactListening"+Math.random().toString(36).slice(2);function df(t){if(!t[fc]){t[fc]=!0,ya.forEach(function(o){o!=="selectionchange"&&(RE.has(o)||hf(o,!1,t),hf(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[fc]||(i[fc]=!0,hf("selectionchange",!1,i))}}function Jy(t,i,o,l){switch(Tv(i)){case 2:var h=ZE;break;case 8:h=eS;break;default:h=Rf}o=h.bind(null,i,o,t),h=void 0,!_n||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(i,o,{capture:!0,passive:h}):t.addEventListener(i,o,!0):h!==void 0?t.addEventListener(i,o,{passive:h}):t.addEventListener(i,o,!1)}function ff(t,i,o,l,h){var f=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var w=l.tag;if(w===3||w===4){var b=l.stateNode.containerInfo;if(b===h)break;if(w===4)for(w=l.return;w!==null;){var C=w.tag;if((C===3||C===4)&&w.stateNode.containerInfo===h)return;w=w.return}for(;b!==null;){if(w=mi(b),w===null)return;if(C=w.tag,C===5||C===6||C===26||C===27){l=f=w;continue e}b=b.parentNode}}l=l.return}gu(function(){var B=f,K=wn(o),X=[];e:{var q=Mg.get(t);if(q!==void 0){var H=Xs,_e=t;switch(t){case"keypress":if(Yn(o)===0)break e;case"keydown":case"keyup":H=no;break;case"focusin":_e="focus",H=Zs;break;case"focusout":_e="blur",H=Zs;break;case"beforeblur":case"afterblur":H=Zs;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=bn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Uh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=Eu;break;case kg:case xg:case Dg:H=eo;break;case Ng:H=Au;break;case"scroll":case"scrollend":H=mu;break;case"wheel":H=io;break;case"copy":case"cut":case"paste":H=to;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=ka;break;case"toggle":case"beforetoggle":H=Cu}var ge=(i&4)!==0,Xe=!ge&&(t==="scroll"||t==="scrollend"),P=ge?q!==null?q+"Capture":null:q;ge=[];for(var D=B,z;D!==null;){var Q=D;if(z=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||z===null||P===null||(Q=os(D,P),Q!=null&&ge.push(ol(D,Q,z))),Xe)break;D=D.return}0<ge.length&&(q=new H(q,_e,null,o,K),X.push({event:q,listeners:ge}))}}if((i&7)===0){e:{if(q=t==="mouseover"||t==="pointerover",H=t==="mouseout"||t==="pointerout",q&&o!==_i&&(_e=o.relatedTarget||o.fromElement)&&(mi(_e)||_e[yn]))break e;if((H||q)&&(q=K.window===K?K:(q=K.ownerDocument)?q.defaultView||q.parentWindow:window,H?(_e=o.relatedTarget||o.toElement,H=B,_e=_e?mi(_e):null,_e!==null&&(Xe=u(_e),ge=_e.tag,_e!==Xe||ge!==5&&ge!==27&&ge!==6)&&(_e=null)):(H=null,_e=B),H!==_e)){if(ge=bn,Q="onMouseLeave",P="onMouseEnter",D="mouse",(t==="pointerout"||t==="pointerover")&&(ge=ka,Q="onPointerLeave",P="onPointerEnter",D="pointer"),Xe=H==null?q:Hn(H),z=_e==null?q:Hn(_e),q=new ge(Q,D+"leave",H,o,K),q.target=Xe,q.relatedTarget=z,Q=null,mi(K)===B&&(ge=new ge(P,D+"enter",_e,o,K),ge.target=z,ge.relatedTarget=Xe,Q=ge),Xe=Q,H&&_e)t:{for(ge=H,P=_e,D=0,z=ge;z;z=ko(z))D++;for(z=0,Q=P;Q;Q=ko(Q))z++;for(;0<D-z;)ge=ko(ge),D--;for(;0<z-D;)P=ko(P),z--;for(;D--;){if(ge===P||P!==null&&ge===P.alternate)break t;ge=ko(ge),P=ko(P)}ge=null}else ge=null;H!==null&&Zy(X,q,H,ge,!1),_e!==null&&Xe!==null&&Zy(X,Xe,_e,ge,!0)}}e:{if(q=B?Hn(B):window,H=q.nodeName&&q.nodeName.toLowerCase(),H==="select"||H==="input"&&q.type==="file")var le=vg;else if(Tt(q))if(wg)le=zT;else{le=LT;var ke=VT}else H=q.nodeName,!H||H.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?B&&Ta(B.elementType)&&(le=vg):le=UT;if(le&&(le=le(t,B))){Ai(X,le,o,K);break e}ke&&ke(t,q,B),t==="focusout"&&B&&q.type==="number"&&B.memoizedProps.value!=null&&sr(q,"number",q.value)}switch(ke=B?Hn(B):window,t){case"focusin":(Tt(ke)||ke.contentEditable==="true")&&(ro=ke,Hh=B,Na=null);break;case"focusout":Na=Hh=ro=null;break;case"mousedown":Fh=!0;break;case"contextmenu":case"mouseup":case"dragend":Fh=!1,Cg(X,o,K);break;case"selectionchange":if(BT)break;case"keydown":case"keyup":Cg(X,o,K)}var de;if(Xn)e:{switch(t){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Oe?F(t,o)&&(we="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(we="onCompositionStart");we&&(v&&o.locale!=="ko"&&(Oe||we!=="onCompositionStart"?we==="onCompositionEnd"&&Oe&&(de=Sa()):(Wn=K,or="value"in Wn?Wn.value:Wn.textContent,Oe=!0)),ke=pc(B,we),0<ke.length&&(we=new Ca(we,t,null,o,K),X.push({event:we,listeners:ke}),de?we.data=de:(de=se(o),de!==null&&(we.data=de)))),(de=m?bt(t,o):Pe(t,o))&&(we=pc(B,"onBeforeInput"),0<we.length&&(ke=new Ca("onBeforeInput","beforeinput",null,o,K),X.push({event:ke,listeners:we}),ke.data=de)),EE(X,t,B,o,K)}$y(X,i)})}function ol(t,i,o){return{instance:t,listener:i,currentTarget:o}}function pc(t,i){for(var o=i+"Capture",l=[];t!==null;){var h=t,f=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||f===null||(h=os(t,o),h!=null&&l.unshift(ol(t,h,f)),h=os(t,i),h!=null&&l.push(ol(t,h,f))),t.tag===3)return l;t=t.return}return[]}function ko(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Zy(t,i,o,l,h){for(var f=i._reactName,w=[];o!==null&&o!==l;){var b=o,C=b.alternate,B=b.stateNode;if(b=b.tag,C!==null&&C===l)break;b!==5&&b!==26&&b!==27||B===null||(C=B,h?(B=os(o,f),B!=null&&w.unshift(ol(o,B,C))):h||(B=os(o,f),B!=null&&w.push(ol(o,B,C)))),o=o.return}w.length!==0&&t.push({event:i,listeners:w})}var CE=/\r\n?/g,IE=/\u0000|\uFFFD/g;function ev(t){return(typeof t=="string"?t:""+t).replace(CE,`
`).replace(IE,"")}function tv(t,i){return i=ev(i),ev(t)===i}function gc(){}function Qe(t,i,o,l,h,f){switch(o){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||vn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&vn(t,""+l);break;case"className":Fn(t,"class",l);break;case"tabIndex":Fn(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Fn(t,o,l);break;case"style":ba(t,l,f);break;case"data":if(i!=="object"){Fn(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||o!=="href")){t.removeAttribute(o);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(o);break}l=Qs(""+l),t.setAttribute(o,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(o==="formAction"?(i!=="input"&&Qe(t,i,"name",h.name,h,null),Qe(t,i,"formEncType",h.formEncType,h,null),Qe(t,i,"formMethod",h.formMethod,h,null),Qe(t,i,"formTarget",h.formTarget,h,null)):(Qe(t,i,"encType",h.encType,h,null),Qe(t,i,"method",h.method,h,null),Qe(t,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(o);break}l=Qs(""+l),t.setAttribute(o,l);break;case"onClick":l!=null&&(t.onclick=gc);break;case"onScroll":l!=null&&De("scroll",t);break;case"onScrollEnd":l!=null&&De("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(o=l.__html,o!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=o}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}o=Qs(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(o,""+l):t.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(o,""):t.removeAttribute(o);break;case"capture":case"download":l===!0?t.setAttribute(o,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(o,l):t.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(o,l):t.removeAttribute(o);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(o):t.setAttribute(o,l);break;case"popover":De("beforetoggle",t),De("toggle",t),rr(t,"popover",l);break;case"xlinkActuate":Pt(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Pt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Pt(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Pt(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Pt(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Pt(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Pt(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Pt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Pt(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":rr(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Vh.get(o)||o,rr(t,o,l))}}function pf(t,i,o,l,h,f){switch(o){case"style":ba(t,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(o=l.__html,o!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=o}}break;case"children":typeof l=="string"?vn(t,l):(typeof l=="number"||typeof l=="bigint")&&vn(t,""+l);break;case"onScroll":l!=null&&De("scroll",t);break;case"onScrollEnd":l!=null&&De("scrollend",t);break;case"onClick":l!=null&&(t.onclick=gc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fs.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(h=o.endsWith("Capture"),i=o.slice(2,h?o.length-7:void 0),f=t[gt]||null,f=f!=null?f[o]:null,typeof f=="function"&&t.removeEventListener(i,f,h),typeof l=="function")){typeof f!="function"&&f!==null&&(o in t?t[o]=null:t.hasAttribute(o)&&t.removeAttribute(o)),t.addEventListener(i,l,h);break e}o in t?t[o]=l:l===!0?t.setAttribute(o,""):rr(t,o,l)}}}function zt(t,i,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",t),De("load",t);var l=!1,h=!1,f;for(f in o)if(o.hasOwnProperty(f)){var w=o[f];if(w!=null)switch(f){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Qe(t,i,f,w,o,null)}}h&&Qe(t,i,"srcSet",o.srcSet,o,null),l&&Qe(t,i,"src",o.src,o,null);return;case"input":De("invalid",t);var b=f=w=h=null,C=null,B=null;for(l in o)if(o.hasOwnProperty(l)){var K=o[l];if(K!=null)switch(l){case"name":h=K;break;case"type":w=K;break;case"checked":C=K;break;case"defaultChecked":B=K;break;case"value":f=K;break;case"defaultValue":b=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,i));break;default:Qe(t,i,l,K,o,null)}}is(t,f,b,C,B,w,h,!1),Ks(t);return;case"select":De("invalid",t),l=w=f=null;for(h in o)if(o.hasOwnProperty(h)&&(b=o[h],b!=null))switch(h){case"value":f=b;break;case"defaultValue":w=b;break;case"multiple":l=b;default:Qe(t,i,h,b,o,null)}i=f,o=w,t.multiple=!!l,i!=null?wi(t,!!l,i,!1):o!=null&&wi(t,!!l,o,!0);return;case"textarea":De("invalid",t),f=h=l=null;for(w in o)if(o.hasOwnProperty(w)&&(b=o[w],b!=null))switch(w){case"value":l=b;break;case"defaultValue":h=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Qe(t,i,w,b,o,null)}rs(t,l,h,f),Ks(t);return;case"option":for(C in o)if(o.hasOwnProperty(C)&&(l=o[C],l!=null))switch(C){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Qe(t,i,C,l,o,null)}return;case"dialog":De("beforetoggle",t),De("toggle",t),De("cancel",t),De("close",t);break;case"iframe":case"object":De("load",t);break;case"video":case"audio":for(l=0;l<sl.length;l++)De(sl[l],t);break;case"image":De("error",t),De("load",t);break;case"details":De("toggle",t);break;case"embed":case"source":case"link":De("error",t),De("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in o)if(o.hasOwnProperty(B)&&(l=o[B],l!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Qe(t,i,B,l,o,null)}return;default:if(Ta(i)){for(K in o)o.hasOwnProperty(K)&&(l=o[K],l!==void 0&&pf(t,i,K,l,o,void 0));return}}for(b in o)o.hasOwnProperty(b)&&(l=o[b],l!=null&&Qe(t,i,b,l,o,null))}function kE(t,i,o,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,f=null,w=null,b=null,C=null,B=null,K=null;for(H in o){var X=o[H];if(o.hasOwnProperty(H)&&X!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":C=X;default:l.hasOwnProperty(H)||Qe(t,i,H,null,l,X)}}for(var q in l){var H=l[q];if(X=o[q],l.hasOwnProperty(q)&&(H!=null||X!=null))switch(q){case"type":f=H;break;case"name":h=H;break;case"checked":B=H;break;case"defaultChecked":K=H;break;case"value":w=H;break;case"defaultValue":b=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,i));break;default:H!==X&&Qe(t,i,q,H,l,X)}}an(t,w,b,C,B,K,f,h);return;case"select":H=w=b=q=null;for(f in o)if(C=o[f],o.hasOwnProperty(f)&&C!=null)switch(f){case"value":break;case"multiple":H=C;default:l.hasOwnProperty(f)||Qe(t,i,f,null,l,C)}for(h in l)if(f=l[h],C=o[h],l.hasOwnProperty(h)&&(f!=null||C!=null))switch(h){case"value":q=f;break;case"defaultValue":b=f;break;case"multiple":w=f;default:f!==C&&Qe(t,i,h,f,l,C)}i=b,o=w,l=H,q!=null?wi(t,!!o,q,!1):!!l!=!!o&&(i!=null?wi(t,!!o,i,!0):wi(t,!!o,o?[]:"",!1));return;case"textarea":H=q=null;for(b in o)if(h=o[b],o.hasOwnProperty(b)&&h!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Qe(t,i,b,null,l,h)}for(w in l)if(h=l[w],f=o[w],l.hasOwnProperty(w)&&(h!=null||f!=null))switch(w){case"value":q=h;break;case"defaultValue":H=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==f&&Qe(t,i,w,h,l,f)}Ye(t,q,H);return;case"option":for(var _e in o)if(q=o[_e],o.hasOwnProperty(_e)&&q!=null&&!l.hasOwnProperty(_e))switch(_e){case"selected":t.selected=!1;break;default:Qe(t,i,_e,null,l,q)}for(C in l)if(q=l[C],H=o[C],l.hasOwnProperty(C)&&q!==H&&(q!=null||H!=null))switch(C){case"selected":t.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:Qe(t,i,C,q,l,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in o)q=o[ge],o.hasOwnProperty(ge)&&q!=null&&!l.hasOwnProperty(ge)&&Qe(t,i,ge,null,l,q);for(B in l)if(q=l[B],H=o[B],l.hasOwnProperty(B)&&q!==H&&(q!=null||H!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,i));break;default:Qe(t,i,B,q,l,H)}return;default:if(Ta(i)){for(var Xe in o)q=o[Xe],o.hasOwnProperty(Xe)&&q!==void 0&&!l.hasOwnProperty(Xe)&&pf(t,i,Xe,void 0,l,q);for(K in l)q=l[K],H=o[K],!l.hasOwnProperty(K)||q===H||q===void 0&&H===void 0||pf(t,i,K,q,l,H);return}}for(var P in o)q=o[P],o.hasOwnProperty(P)&&q!=null&&!l.hasOwnProperty(P)&&Qe(t,i,P,null,l,q);for(X in l)q=l[X],H=o[X],!l.hasOwnProperty(X)||q===H||q==null&&H==null||Qe(t,i,X,q,l,H)}var gf=null,mf=null;function mc(t){return t.nodeType===9?t:t.ownerDocument}function nv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function iv(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function yf(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var vf=null;function xE(){var t=window.event;return t&&t.type==="popstate"?t===vf?!1:(vf=t,!0):(vf=null,!1)}var rv=typeof setTimeout=="function"?setTimeout:void 0,DE=typeof clearTimeout=="function"?clearTimeout:void 0,sv=typeof Promise=="function"?Promise:void 0,NE=typeof queueMicrotask=="function"?queueMicrotask:typeof sv<"u"?function(t){return sv.resolve(null).then(t).catch(ME)}:rv;function ME(t){setTimeout(function(){throw t})}function Tr(t){return t==="head"}function ov(t,i){var o=i,l=0,h=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(0<l&&8>l){o=l;var w=t.ownerDocument;if(o&1&&al(w.documentElement),o&2&&al(w.body),o&4)for(o=w.head,al(o),w=o.firstChild;w;){var b=w.nextSibling,C=w.nodeName;w[Zr]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&w.rel.toLowerCase()==="stylesheet"||o.removeChild(w),w=b}}if(h===0){t.removeChild(f),gl(i);return}h--}else o==="$"||o==="$?"||o==="$!"?h++:l=o.charCodeAt(0)-48;else l=0;o=f}while(o);gl(i)}function wf(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var o=i;switch(i=i.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":wf(o),ir(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}t.removeChild(o)}}function OE(t,i,o,l){for(;t.nodeType===1;){var h=o;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Zr])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var f=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Vn(t.nextSibling),t===null)break}return null}function PE(t,i,o){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!o||(t=Vn(t.nextSibling),t===null))return null;return t}function _f(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function VE(t,i){var o=t.ownerDocument;if(t.data!=="$?"||o.readyState==="complete")i();else{var l=function(){i(),o.removeEventListener("DOMContentLoaded",l)};o.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Vn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var bf=null;function av(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}function lv(t,i,o){switch(i=mc(o),t){case"html":if(t=i.documentElement,!t)throw Error(s(452));return t;case"head":if(t=i.head,!t)throw Error(s(453));return t;case"body":if(t=i.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function al(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ir(t)}var In=new Map,uv=new Set;function yc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ui=oe.d;oe.d={f:LE,r:UE,D:zE,C:jE,L:BE,m:qE,X:FE,S:HE,M:GE};function LE(){var t=Ui.f(),i=lc();return t||i}function UE(t){var i=qn(t);i!==null&&i.tag===5&&i.type==="form"?km(i):Ui.r(t)}var xo=typeof document>"u"?null:document;function cv(t,i,o){var l=xo;if(l&&typeof i=="string"&&i){var h=mt(i);h='link[rel="'+t+'"][href="'+h+'"]',typeof o=="string"&&(h+='[crossorigin="'+o+'"]'),uv.has(h)||(uv.add(h),t={rel:t,crossOrigin:o,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),zt(i,"link",t),ct(i),l.head.appendChild(i)))}}function zE(t){Ui.D(t),cv("dns-prefetch",t,null)}function jE(t,i){Ui.C(t,i),cv("preconnect",t,i)}function BE(t,i,o){Ui.L(t,i,o);var l=xo;if(l&&t&&i){var h='link[rel="preload"][as="'+mt(i)+'"]';i==="image"&&o&&o.imageSrcSet?(h+='[imagesrcset="'+mt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(h+='[imagesizes="'+mt(o.imageSizes)+'"]')):h+='[href="'+mt(t)+'"]';var f=h;switch(i){case"style":f=Do(t);break;case"script":f=No(t)}In.has(f)||(t=_({rel:"preload",href:i==="image"&&o&&o.imageSrcSet?void 0:t,as:i},o),In.set(f,t),l.querySelector(h)!==null||i==="style"&&l.querySelector(ll(f))||i==="script"&&l.querySelector(ul(f))||(i=l.createElement("link"),zt(i,"link",t),ct(i),l.head.appendChild(i)))}}function qE(t,i){Ui.m(t,i);var o=xo;if(o&&t){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+mt(l)+'"][href="'+mt(t)+'"]',f=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=No(t)}if(!In.has(f)&&(t=_({rel:"modulepreload",href:t},i),In.set(f,t),o.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(ul(f)))return}l=o.createElement("link"),zt(l,"link",t),ct(l),o.head.appendChild(l)}}}function HE(t,i,o){Ui.S(t,i,o);var l=xo;if(l&&t){var h=$t(l).hoistableStyles,f=Do(t);i=i||"default";var w=h.get(f);if(!w){var b={loading:0,preload:null};if(w=l.querySelector(ll(f)))b.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":i},o),(o=In.get(f))&&Tf(t,o);var C=w=l.createElement("link");ct(C),zt(C,"link",t),C._p=new Promise(function(B,K){C.onload=B,C.onerror=K}),C.addEventListener("load",function(){b.loading|=1}),C.addEventListener("error",function(){b.loading|=2}),b.loading|=4,vc(w,i,l)}w={type:"stylesheet",instance:w,count:1,state:b},h.set(f,w)}}}function FE(t,i){Ui.X(t,i);var o=xo;if(o&&t){var l=$t(o).hoistableScripts,h=No(t),f=l.get(h);f||(f=o.querySelector(ul(h)),f||(t=_({src:t,async:!0},i),(i=In.get(h))&&Ef(t,i),f=o.createElement("script"),ct(f),zt(f,"link",t),o.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(h,f))}}function GE(t,i){Ui.M(t,i);var o=xo;if(o&&t){var l=$t(o).hoistableScripts,h=No(t),f=l.get(h);f||(f=o.querySelector(ul(h)),f||(t=_({src:t,async:!0,type:"module"},i),(i=In.get(h))&&Ef(t,i),f=o.createElement("script"),ct(f),zt(f,"link",t),o.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(h,f))}}function hv(t,i,o,l){var h=(h=Te.current)?yc(h):null;if(!h)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(i=Do(o.href),o=$t(h).hoistableStyles,l=o.get(i),l||(l={type:"style",instance:null,count:0,state:null},o.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){t=Do(o.href);var f=$t(h).hoistableStyles,w=f.get(t);if(w||(h=h.ownerDocument||h,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,w),(f=h.querySelector(ll(t)))&&!f._p&&(w.instance=f,w.state.loading=5),In.has(t)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},In.set(t,o),f||WE(h,t,o,w.state))),i&&l===null)throw Error(s(528,""));return w}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=o.async,o=o.src,typeof o=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=No(o),o=$t(h).hoistableScripts,l=o.get(i),l||(l={type:"script",instance:null,count:0,state:null},o.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Do(t){return'href="'+mt(t)+'"'}function ll(t){return'link[rel="stylesheet"]['+t+"]"}function dv(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function WE(t,i,o,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),zt(i,"link",o),ct(i),t.head.appendChild(i))}function No(t){return'[src="'+mt(t)+'"]'}function ul(t){return"script[async]"+t}function fv(t,i,o){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+mt(o.href)+'"]');if(l)return i.instance=l,ct(l),l;var h=_({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),ct(l),zt(l,"style",h),vc(l,o.precedence,t),i.instance=l;case"stylesheet":h=Do(o.href);var f=t.querySelector(ll(h));if(f)return i.state.loading|=4,i.instance=f,ct(f),f;l=dv(o),(h=In.get(h))&&Tf(l,h),f=(t.ownerDocument||t).createElement("link"),ct(f);var w=f;return w._p=new Promise(function(b,C){w.onload=b,w.onerror=C}),zt(f,"link",l),i.state.loading|=4,vc(f,o.precedence,t),i.instance=f;case"script":return f=No(o.src),(h=t.querySelector(ul(f)))?(i.instance=h,ct(h),h):(l=o,(h=In.get(f))&&(l=_({},o),Ef(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),ct(h),zt(h,"link",l),t.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,vc(l,o.precedence,t));return i.instance}function vc(t,i,o){for(var l=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,f=h,w=0;w<l.length;w++){var b=l[w];if(b.dataset.precedence===i)f=b;else if(f!==h)break}f?f.parentNode.insertBefore(t,f.nextSibling):(i=o.nodeType===9?o.head:o,i.insertBefore(t,i.firstChild))}function Tf(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Ef(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var wc=null;function pv(t,i,o){if(wc===null){var l=new Map,h=wc=new Map;h.set(o,l)}else h=wc,l=h.get(o),l||(l=new Map,h.set(o,l));if(l.has(t))return l;for(l.set(t,null),o=o.getElementsByTagName(t),h=0;h<o.length;h++){var f=o[h];if(!(f[Zr]||f[_t]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var w=f.getAttribute(i)||"";w=t+w;var b=l.get(w);b?b.push(f):l.set(w,[f])}}return l}function gv(t,i,o){t=t.ownerDocument||t,t.head.insertBefore(o,i==="title"?t.querySelector("head > title"):null)}function YE(t,i,o){if(o===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function mv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var cl=null;function KE(){}function QE(t,i,o){if(cl===null)throw Error(s(475));var l=cl;if(i.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Do(o.href),f=t.querySelector(ll(h));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=_c.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=f,ct(f);return}f=t.ownerDocument||t,o=dv(o),(h=In.get(h))&&Tf(o,h),f=f.createElement("link"),ct(f);var w=f;w._p=new Promise(function(b,C){w.onload=b,w.onerror=C}),zt(f,"link",o),i.instance=f}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=_c.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function XE(){if(cl===null)throw Error(s(475));var t=cl;return t.stylesheets&&t.count===0&&Sf(t,t.stylesheets),0<t.count?function(i){var o=setTimeout(function(){if(t.stylesheets&&Sf(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(o)}}:null}function _c(){if(this.count--,this.count===0){if(this.stylesheets)Sf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var bc=null;function Sf(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,bc=new Map,i.forEach($E,t),bc=null,_c.call(t))}function $E(t,i){if(!(i.state.loading&4)){var o=bc.get(t);if(o)var l=o.get(null);else{o=new Map,bc.set(t,o);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<h.length;f++){var w=h[f];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(o.set(w.dataset.precedence,w),l=w)}l&&o.set(null,l)}h=i.instance,w=h.getAttribute("data-precedence"),f=o.get(w)||l,f===l&&o.set(null,h),o.set(w,h),this.count++,l=_c.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),f?f.parentNode.insertBefore(h,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),i.state.loading|=4}}var hl={$$typeof:ne,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function JE(t,i,o,l,h,f,w,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pi(0),this.hiddenUpdates=pi(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=f,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function yv(t,i,o,l,h,f,w,b,C,B,K,X){return t=new JE(t,i,o,w,b,C,B,X),i=1,f===!0&&(i|=24),f=un(3,null,null,i),t.current=f,f.stateNode=t,i=rd(),i.refCount++,t.pooledCache=i,i.refCount++,f.memoizedState={element:l,isDehydrated:o,cache:i},ld(f),t}function vv(t){return t?(t=lo,t):lo}function wv(t,i,o,l,h,f){h=vv(h),l.context===null?l.context=h:l.pendingContext=h,l=ur(i),l.payload={element:o},f=f===void 0?null:f,f!==null&&(l.callback=f),o=cr(t,l,i),o!==null&&(pn(o,t,i),Ba(o,t,i))}function _v(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Af(t,i){_v(t,i),(t=t.alternate)&&_v(t,i)}function bv(t){if(t.tag===13){var i=ao(t,67108864);i!==null&&pn(i,t,67108864),Af(t,67108864)}}var Tc=!0;function ZE(t,i,o,l){var h=Y.T;Y.T=null;var f=oe.p;try{oe.p=2,Rf(t,i,o,l)}finally{oe.p=f,Y.T=h}}function eS(t,i,o,l){var h=Y.T;Y.T=null;var f=oe.p;try{oe.p=8,Rf(t,i,o,l)}finally{oe.p=f,Y.T=h}}function Rf(t,i,o,l){if(Tc){var h=Cf(l);if(h===null)ff(t,i,l,Ec,o),Ev(t,l);else if(nS(h,t,i,o,l))l.stopPropagation();else if(Ev(t,l),i&4&&-1<tS.indexOf(t)){for(;h!==null;){var f=qn(h);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var w=Dn(f.pendingLanes);if(w!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;w;){var C=1<<31-Ft(w);b.entanglements[1]|=C,w&=~C}ni(f),(Fe&6)===0&&(oc=mn()+500,rl(0))}}break;case 13:b=ao(f,2),b!==null&&pn(b,f,2),lc(),Af(f,2)}if(f=Cf(l),f===null&&ff(t,i,l,Ec,o),f===h)break;h=f}h!==null&&l.stopPropagation()}else ff(t,i,l,null,o)}}function Cf(t){return t=wn(t),If(t)}var Ec=null;function If(t){if(Ec=null,t=mi(t),t!==null){var i=u(t);if(i===null)t=null;else{var o=i.tag;if(o===13){if(t=d(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Ec=t,null}function Tv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xh()){case ua:return 2;case js:return 8;case Kr:case Dh:return 32;case Bs:return 268435456;default:return 32}default:return 32}}var kf=!1,Er=null,Sr=null,Ar=null,dl=new Map,fl=new Map,Rr=[],tS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ev(t,i){switch(t){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":dl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fl.delete(i.pointerId)}}function pl(t,i,o,l,h,f){return t===null||t.nativeEvent!==f?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:f,targetContainers:[h]},i!==null&&(i=qn(i),i!==null&&bv(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function nS(t,i,o,l,h){switch(i){case"focusin":return Er=pl(Er,t,i,o,l,h),!0;case"dragenter":return Sr=pl(Sr,t,i,o,l,h),!0;case"mouseover":return Ar=pl(Ar,t,i,o,l,h),!0;case"pointerover":var f=h.pointerId;return dl.set(f,pl(dl.get(f)||null,t,i,o,l,h)),!0;case"gotpointercapture":return f=h.pointerId,fl.set(f,pl(fl.get(f)||null,t,i,o,l,h)),!0}return!1}function Sv(t){var i=mi(t.target);if(i!==null){var o=u(i);if(o!==null){if(i=o.tag,i===13){if(i=d(o),i!==null){t.blockedOn=i,lu(t.priority,function(){if(o.tag===13){var l=fn();l=er(l);var h=ao(o,l);h!==null&&pn(h,o,l),Af(o,l)}});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Cf(t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);_i=l,o.target.dispatchEvent(l),_i=null}else return i=qn(o),i!==null&&bv(i),t.blockedOn=o,!1;i.shift()}return!0}function Av(t,i,o){Sc(t)&&o.delete(i)}function iS(){kf=!1,Er!==null&&Sc(Er)&&(Er=null),Sr!==null&&Sc(Sr)&&(Sr=null),Ar!==null&&Sc(Ar)&&(Ar=null),dl.forEach(Av),fl.forEach(Av)}function Ac(t,i){t.blockedOn===i&&(t.blockedOn=null,kf||(kf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,iS)))}var Rc=null;function Rv(t){Rc!==t&&(Rc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Rc===t&&(Rc=null);for(var i=0;i<t.length;i+=3){var o=t[i],l=t[i+1],h=t[i+2];if(typeof l!="function"){if(If(l||o)===null)continue;break}var f=qn(o);f!==null&&(t.splice(i,3),i-=3,Cd(f,{pending:!0,data:h,method:o.method,action:l},l,h))}}))}function gl(t){function i(C){return Ac(C,t)}Er!==null&&Ac(Er,t),Sr!==null&&Ac(Sr,t),Ar!==null&&Ac(Ar,t),dl.forEach(i),fl.forEach(i);for(var o=0;o<Rr.length;o++){var l=Rr[o];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Rr.length&&(o=Rr[0],o.blockedOn===null);)Sv(o),o.blockedOn===null&&Rr.shift();if(o=(t.ownerDocument||t).$$reactFormReplay,o!=null)for(l=0;l<o.length;l+=3){var h=o[l],f=o[l+1],w=h[gt]||null;if(typeof f=="function")w||Rv(o);else if(w){var b=null;if(f&&f.hasAttribute("formAction")){if(h=f,w=f[gt]||null)b=w.formAction;else if(If(h)!==null)continue}else b=w.action;typeof b=="function"?o[l+1]=b:(o.splice(l,3),l-=3),Rv(o)}}}function xf(t){this._internalRoot=t}Cc.prototype.render=xf.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(s(409));var o=i.current,l=fn();wv(o,l,t,i,null,null)},Cc.prototype.unmount=xf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;wv(t.current,2,null,t,null,null),lc(),i[yn]=null}};function Cc(t){this._internalRoot=t}Cc.prototype.unstable_scheduleHydration=function(t){if(t){var i=tr();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Rr.length&&i!==0&&i<Rr[o].priority;o++);Rr.splice(o,0,t),o===0&&Sv(t)}};var Cv=e.version;if(Cv!=="19.1.1")throw Error(s(527,Cv,"19.1.1"));oe.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(i),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var rS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ic.isDisabled&&Ic.supportsFiber)try{ot=Ic.inject(rS),He=Ic}catch{}}return yl.createRoot=function(t,i){if(!a(t))throw Error(s(299));var o=!1,l="",h=Hm,f=Fm,w=Gm,b=null;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(f=i.onCaughtError),i.onRecoverableError!==void 0&&(w=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(b=i.unstable_transitionCallbacks)),i=yv(t,1,!1,null,null,o,l,h,f,w,b,null),t[yn]=i.current,df(t),new xf(i)},yl.hydrateRoot=function(t,i,o){if(!a(t))throw Error(s(299));var l=!1,h="",f=Hm,w=Fm,b=Gm,C=null,B=null;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onUncaughtError!==void 0&&(f=o.onUncaughtError),o.onCaughtError!==void 0&&(w=o.onCaughtError),o.onRecoverableError!==void 0&&(b=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(C=o.unstable_transitionCallbacks),o.formState!==void 0&&(B=o.formState)),i=yv(t,1,!0,i,o??null,l,h,f,w,b,C,B),i.context=vv(null),o=i.current,l=fn(),l=er(l),h=ur(l),h.callback=null,cr(o,h,l),o=l,i.current.lanes=o,gi(i,o),ni(i),t[yn]=i.current,df(t),new Cc(i)},yl.version="19.1.1",yl}var Lv;function pS(){if(Lv)return Mf.exports;Lv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Mf.exports=fS(),Mf.exports}var gS=pS();const mS=i_(gS);/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Uv="popstate";function yS(r={}){function e(s,a){let{pathname:u,search:d,hash:p}=s.location;return Jf("",{pathname:u,search:d,hash:p},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(s,a){return typeof a=="string"?a:Nl(a)}return wS(e,n,null,r)}function it(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function ui(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function vS(){return Math.random().toString(36).substring(2,10)}function zv(r,e){return{usr:r.state,key:r.key,idx:e}}function Jf(r,e,n=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Xo(e):e,state:n,key:e&&e.key||s||vS()}}function Nl({pathname:r="/",search:e="",hash:n=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function Xo(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substring(n),r=r.substring(0,n));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function wS(r,e,n,s={}){let{window:a=document.defaultView,v5Compat:u=!1}=s,d=a.history,p="POP",g=null,y=_();y==null&&(y=0,d.replaceState({...d.state,idx:y},""));function _(){return(d.state||{idx:null}).idx}function S(){p="POP";let G=_(),re=G==null?null:G-y;y=G,g&&g({action:p,location:$.location,delta:re})}function k(G,re){p="PUSH";let ee=Jf($.location,G,re);y=_()+1;let ne=zv(ee,y),he=$.createHref(ee);try{d.pushState(ne,"",he)}catch(ce){if(ce instanceof DOMException&&ce.name==="DataCloneError")throw ce;a.location.assign(he)}u&&g&&g({action:p,location:$.location,delta:1})}function L(G,re){p="REPLACE";let ee=Jf($.location,G,re);y=_();let ne=zv(ee,y),he=$.createHref(ee);d.replaceState(ne,"",he),u&&g&&g({action:p,location:$.location,delta:0})}function W(G){return _S(G)}let $={get action(){return p},get location(){return r(a,d)},listen(G){if(g)throw new Error("A history only accepts one active listener");return a.addEventListener(Uv,S),g=G,()=>{a.removeEventListener(Uv,S),g=null}},createHref(G){return e(a,G)},createURL:W,encodeLocation(G){let re=W(G);return{pathname:re.pathname,search:re.search,hash:re.hash}},push:k,replace:L,go(G){return d.go(G)}};return $}function _S(r,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),it(n,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Nl(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=n+s),new URL(s,n)}function r_(r,e,n="/"){return bS(r,e,n,!1)}function bS(r,e,n,s){let a=typeof e=="string"?Xo(e):e,u=Gi(a.pathname||"/",n);if(u==null)return null;let d=s_(r);TS(d);let p=null;for(let g=0;p==null&&g<d.length;++g){let y=MS(u);p=DS(d[g],y,s)}return p}function s_(r,e=[],n=[],s="",a=!1){let u=(d,p,g=a,y)=>{let _={relativePath:y===void 0?d.path||"":y,caseSensitive:d.caseSensitive===!0,childrenIndex:p,route:d};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(s)&&g)return;it(_.relativePath.startsWith(s),`Absolute route path "${_.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(s.length)}let S=qi([s,_.relativePath]),k=n.concat(_);d.children&&d.children.length>0&&(it(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${S}".`),s_(d.children,e,k,S,g)),!(d.path==null&&!d.index)&&e.push({path:S,score:kS(S,d.index),routesMeta:k})};return r.forEach((d,p)=>{if(d.path===""||!d.path?.includes("?"))u(d,p);else for(let g of o_(d.path))u(d,p,!0,g)}),e}function o_(r){let e=r.split("/");if(e.length===0)return[];let[n,...s]=e,a=n.endsWith("?"),u=n.replace(/\?$/,"");if(s.length===0)return a?[u,""]:[u];let d=o_(s.join("/")),p=[];return p.push(...d.map(g=>g===""?u:[u,g].join("/"))),a&&p.push(...d),p.map(g=>r.startsWith("/")&&g===""?"/":g)}function TS(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:xS(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var ES=/^:[\w-]+$/,SS=3,AS=2,RS=1,CS=10,IS=-2,jv=r=>r==="*";function kS(r,e){let n=r.split("/"),s=n.length;return n.some(jv)&&(s+=IS),e&&(s+=AS),n.filter(a=>!jv(a)).reduce((a,u)=>a+(ES.test(u)?SS:u===""?RS:CS),s)}function xS(r,e){return r.length===e.length&&r.slice(0,-1).every((s,a)=>s===e[a])?r[r.length-1]-e[e.length-1]:0}function DS(r,e,n=!1){let{routesMeta:s}=r,a={},u="/",d=[];for(let p=0;p<s.length;++p){let g=s[p],y=p===s.length-1,_=u==="/"?e:e.slice(u.length)||"/",S=Gc({path:g.relativePath,caseSensitive:g.caseSensitive,end:y},_),k=g.route;if(!S&&y&&n&&!s[s.length-1].route.index&&(S=Gc({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},_)),!S)return null;Object.assign(a,S.params),d.push({params:a,pathname:qi([u,S.pathname]),pathnameBase:LS(qi([u,S.pathnameBase])),route:k}),S.pathnameBase!=="/"&&(u=qi([u,S.pathnameBase]))}return d}function Gc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=NS(r.path,r.caseSensitive,r.end),a=e.match(n);if(!a)return null;let u=a[0],d=u.replace(/(.)\/+$/,"$1"),p=a.slice(1);return{params:s.reduce((y,{paramName:_,isOptional:S},k)=>{if(_==="*"){let W=p[k]||"";d=u.slice(0,u.length-W.length).replace(/(.)\/+$/,"$1")}const L=p[k];return S&&!L?y[_]=void 0:y[_]=(L||"").replace(/%2F/g,"/"),y},{}),pathname:u,pathnameBase:d,pattern:r}}function NS(r,e=!1,n=!0){ui(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],a="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,g)=>(s.push({paramName:p,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),a+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":r!==""&&r!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),s]}function MS(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ui(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Gi(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}function OS(r,e="/"){let{pathname:n,search:s="",hash:a=""}=typeof r=="string"?Xo(r):r;return{pathname:n?n.startsWith("/")?n:PS(n,e):e,search:US(s),hash:zS(a)}}function PS(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Lf(r,e,n,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function VS(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function a_(r){let e=VS(r);return e.map((n,s)=>s===e.length-1?n.pathname:n.pathnameBase)}function l_(r,e,n,s=!1){let a;typeof r=="string"?a=Xo(r):(a={...r},it(!a.pathname||!a.pathname.includes("?"),Lf("?","pathname","search",a)),it(!a.pathname||!a.pathname.includes("#"),Lf("#","pathname","hash",a)),it(!a.search||!a.search.includes("#"),Lf("#","search","hash",a)));let u=r===""||a.pathname==="",d=u?"/":a.pathname,p;if(d==null)p=n;else{let S=e.length-1;if(!s&&d.startsWith("..")){let k=d.split("/");for(;k[0]==="..";)k.shift(),S-=1;a.pathname=k.join("/")}p=S>=0?e[S]:"/"}let g=OS(a,p),y=d&&d!=="/"&&d.endsWith("/"),_=(u||d===".")&&n.endsWith("/");return!g.pathname.endsWith("/")&&(y||_)&&(g.pathname+="/"),g}var qi=r=>r.join("/").replace(/\/\/+/g,"/"),LS=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),US=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,zS=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function jS(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var u_=["POST","PUT","PATCH","DELETE"];new Set(u_);var BS=["GET",...u_];new Set(BS);var $o=j.createContext(null);$o.displayName="DataRouter";var fh=j.createContext(null);fh.displayName="DataRouterState";j.createContext(!1);var c_=j.createContext({isTransitioning:!1});c_.displayName="ViewTransition";var qS=j.createContext(new Map);qS.displayName="Fetchers";var HS=j.createContext(null);HS.displayName="Await";var di=j.createContext(null);di.displayName="Navigation";var Fl=j.createContext(null);Fl.displayName="Location";var zn=j.createContext({outlet:null,matches:[],isDataRoute:!1});zn.displayName="Route";var Ep=j.createContext(null);Ep.displayName="RouteError";function FS(r,{relative:e}={}){it(Gl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=j.useContext(di),{hash:a,pathname:u,search:d}=Wl(r,{relative:e}),p=u;return n!=="/"&&(p=u==="/"?n:qi([n,u])),s.createHref({pathname:p,search:d,hash:a})}function Gl(){return j.useContext(Fl)!=null}function Hr(){return it(Gl(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(Fl).location}var h_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function d_(r){j.useContext(di).static||j.useLayoutEffect(r)}function Jo(){let{isDataRoute:r}=j.useContext(zn);return r?s0():GS()}function GS(){it(Gl(),"useNavigate() may be used only in the context of a <Router> component.");let r=j.useContext($o),{basename:e,navigator:n}=j.useContext(di),{matches:s}=j.useContext(zn),{pathname:a}=Hr(),u=JSON.stringify(a_(s)),d=j.useRef(!1);return d_(()=>{d.current=!0}),j.useCallback((g,y={})=>{if(ui(d.current,h_),!d.current)return;if(typeof g=="number"){n.go(g);return}let _=l_(g,JSON.parse(u),a,y.relative==="path");r==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:qi([e,_.pathname])),(y.replace?n.replace:n.push)(_,y.state,y)},[e,n,u,a,r])}var WS=j.createContext(null);function YS(r){let e=j.useContext(zn).outlet;return e&&j.createElement(WS.Provider,{value:r},e)}function Sp(){let{matches:r}=j.useContext(zn),e=r[r.length-1];return e?e.params:{}}function Wl(r,{relative:e}={}){let{matches:n}=j.useContext(zn),{pathname:s}=Hr(),a=JSON.stringify(a_(n));return j.useMemo(()=>l_(r,JSON.parse(a),s,e==="path"),[r,a,s,e])}function KS(r,e){return f_(r,e)}function f_(r,e,n,s,a){it(Gl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=j.useContext(di),{matches:d}=j.useContext(zn),p=d[d.length-1],g=p?p.params:{},y=p?p.pathname:"/",_=p?p.pathnameBase:"/",S=p&&p.route;{let ee=S&&S.path||"";p_(y,!S||ee.endsWith("*")||ee.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${ee}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${ee}"> to <Route path="${ee==="/"?"*":`${ee}/*`}">.`)}let k=Hr(),L;if(e){let ee=typeof e=="string"?Xo(e):e;it(_==="/"||ee.pathname?.startsWith(_),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${ee.pathname}" was given in the \`location\` prop.`),L=ee}else L=k;let W=L.pathname||"/",$=W;if(_!=="/"){let ee=_.replace(/^\//,"").split("/");$="/"+W.replace(/^\//,"").split("/").slice(ee.length).join("/")}let G=r_(r,{pathname:$});ui(S||G!=null,`No routes matched location "${L.pathname}${L.search}${L.hash}" `),ui(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${L.pathname}${L.search}${L.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let re=ZS(G&&G.map(ee=>Object.assign({},ee,{params:Object.assign({},g,ee.params),pathname:qi([_,u.encodeLocation?u.encodeLocation(ee.pathname).pathname:ee.pathname]),pathnameBase:ee.pathnameBase==="/"?_:qi([_,u.encodeLocation?u.encodeLocation(ee.pathnameBase).pathname:ee.pathnameBase])})),d,n,s,a);return e&&re?j.createElement(Fl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...L},navigationType:"POP"}},re):re}function QS(){let r=r0(),e=jS(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},d=null;return console.error("Error handled by React Router default ErrorBoundary:",r),d=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:u},"ErrorBoundary")," or"," ",j.createElement("code",{style:u},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:a},n):null,d)}var XS=j.createElement(QS,null),$S=class extends j.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.unstable_onError?this.props.unstable_onError(r,e):console.error("React Router caught the following error during render",r)}render(){return this.state.error!==void 0?j.createElement(zn.Provider,{value:this.props.routeContext},j.createElement(Ep.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function JS({routeContext:r,match:e,children:n}){let s=j.useContext($o);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),j.createElement(zn.Provider,{value:r},n)}function ZS(r,e=[],n=null,s=null,a=null){if(r==null){if(!n)return null;if(n.errors)r=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let u=r,d=n?.errors;if(d!=null){let y=u.findIndex(_=>_.route.id&&d?.[_.route.id]!==void 0);it(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),u=u.slice(0,Math.min(u.length,y+1))}let p=!1,g=-1;if(n)for(let y=0;y<u.length;y++){let _=u[y];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(g=y),_.route.id){let{loaderData:S,errors:k}=n,L=_.route.loader&&!S.hasOwnProperty(_.route.id)&&(!k||k[_.route.id]===void 0);if(_.route.lazy||L){p=!0,g>=0?u=u.slice(0,g+1):u=[u[0]];break}}}return u.reduceRight((y,_,S)=>{let k,L=!1,W=null,$=null;n&&(k=d&&_.route.id?d[_.route.id]:void 0,W=_.route.errorElement||XS,p&&(g<0&&S===0?(p_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),L=!0,$=null):g===S&&(L=!0,$=_.route.hydrateFallbackElement||null)));let G=e.concat(u.slice(0,S+1)),re=()=>{let ee;return k?ee=W:L?ee=$:_.route.Component?ee=j.createElement(_.route.Component,null):_.route.element?ee=_.route.element:ee=y,j.createElement(JS,{match:_,routeContext:{outlet:y,matches:G,isDataRoute:n!=null},children:ee})};return n&&(_.route.ErrorBoundary||_.route.errorElement||S===0)?j.createElement($S,{location:n.location,revalidation:n.revalidation,component:W,error:k,children:re(),routeContext:{outlet:null,matches:G,isDataRoute:!0},unstable_onError:s}):re()},null)}function Ap(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function e0(r){let e=j.useContext($o);return it(e,Ap(r)),e}function t0(r){let e=j.useContext(fh);return it(e,Ap(r)),e}function n0(r){let e=j.useContext(zn);return it(e,Ap(r)),e}function Rp(r){let e=n0(r),n=e.matches[e.matches.length-1];return it(n.route.id,`${r} can only be used on routes that contain a unique "id"`),n.route.id}function i0(){return Rp("useRouteId")}function r0(){let r=j.useContext(Ep),e=t0("useRouteError"),n=Rp("useRouteError");return r!==void 0?r:e.errors?.[n]}function s0(){let{router:r}=e0("useNavigate"),e=Rp("useNavigate"),n=j.useRef(!1);return d_(()=>{n.current=!0}),j.useCallback(async(a,u={})=>{ui(n.current,h_),n.current&&(typeof a=="number"?r.navigate(a):await r.navigate(a,{fromRouteId:e,...u}))},[r,e])}var Bv={};function p_(r,e,n){!e&&!Bv[r]&&(Bv[r]=!0,ui(!1,n))}j.memo(o0);function o0({routes:r,future:e,state:n,unstable_onError:s}){return f_(r,void 0,n,s,e)}function a0(r){return YS(r.context)}function ft(r){it(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function l0({basename:r="/",children:e=null,location:n,navigationType:s="POP",navigator:a,static:u=!1}){it(!Gl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=r.replace(/^\/*/,"/"),p=j.useMemo(()=>({basename:d,navigator:a,static:u,future:{}}),[d,a,u]);typeof n=="string"&&(n=Xo(n));let{pathname:g="/",search:y="",hash:_="",state:S=null,key:k="default"}=n,L=j.useMemo(()=>{let W=Gi(g,d);return W==null?null:{location:{pathname:W,search:y,hash:_,state:S,key:k},navigationType:s}},[d,g,y,_,S,k,s]);return ui(L!=null,`<Router basename="${d}"> is not able to match the URL "${g}${y}${_}" because it does not start with the basename, so the <Router> won't render anything.`),L==null?null:j.createElement(di.Provider,{value:p},j.createElement(Fl.Provider,{children:e,value:L}))}function u0({children:r,location:e}){return KS(Zf(r),e)}function Zf(r,e=[]){let n=[];return j.Children.forEach(r,(s,a)=>{if(!j.isValidElement(s))return;let u=[...e,a];if(s.type===j.Fragment){n.push.apply(n,Zf(s.props.children,u));return}it(s.type===ft,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),it(!s.props.index||!s.props.children,"An index route cannot have child routes.");let d={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(d.children=Zf(s.props.children,u)),n.push(d)}),n}var Pc="get",Vc="application/x-www-form-urlencoded";function ph(r){return r!=null&&typeof r.tagName=="string"}function c0(r){return ph(r)&&r.tagName.toLowerCase()==="button"}function h0(r){return ph(r)&&r.tagName.toLowerCase()==="form"}function d0(r){return ph(r)&&r.tagName.toLowerCase()==="input"}function f0(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function p0(r,e){return r.button===0&&(!e||e==="_self")&&!f0(r)}var kc=null;function g0(){if(kc===null)try{new FormData(document.createElement("form"),0),kc=!1}catch{kc=!0}return kc}var m0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Uf(r){return r!=null&&!m0.has(r)?(ui(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Vc}"`),null):r}function y0(r,e){let n,s,a,u,d;if(h0(r)){let p=r.getAttribute("action");s=p?Gi(p,e):null,n=r.getAttribute("method")||Pc,a=Uf(r.getAttribute("enctype"))||Vc,u=new FormData(r)}else if(c0(r)||d0(r)&&(r.type==="submit"||r.type==="image")){let p=r.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=r.getAttribute("formaction")||p.getAttribute("action");if(s=g?Gi(g,e):null,n=r.getAttribute("formmethod")||p.getAttribute("method")||Pc,a=Uf(r.getAttribute("formenctype"))||Uf(p.getAttribute("enctype"))||Vc,u=new FormData(p,r),!g0()){let{name:y,type:_,value:S}=r;if(_==="image"){let k=y?`${y}.`:"";u.append(`${k}x`,"0"),u.append(`${k}y`,"0")}else y&&u.append(y,S)}}else{if(ph(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Pc,s=null,a=Vc,d=r}return u&&a==="text/plain"&&(d=u,u=void 0),{action:s,method:n.toLowerCase(),encType:a,formData:u,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Cp(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function v0(r,e,n){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return s.pathname==="/"?s.pathname=`_root.${n}`:e&&Gi(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${n}`,s}async function w0(r,e){if(r.id in e)return e[r.id];try{let n=await import(r.module);return e[r.id]=n,n}catch(n){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function _0(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function b0(r,e,n){let s=await Promise.all(r.map(async a=>{let u=e.routes[a.route.id];if(u){let d=await w0(u,n);return d.links?d.links():[]}return[]}));return A0(s.flat(1).filter(_0).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function qv(r,e,n,s,a,u){let d=(g,y)=>n[y]?g.route.id!==n[y].route.id:!0,p=(g,y)=>n[y].pathname!==g.pathname||n[y].route.path?.endsWith("*")&&n[y].params["*"]!==g.params["*"];return u==="assets"?e.filter((g,y)=>d(g,y)||p(g,y)):u==="data"?e.filter((g,y)=>{let _=s.routes[g.route.id];if(!_||!_.hasLoader)return!1;if(d(g,y)||p(g,y))return!0;if(g.route.shouldRevalidate){let S=g.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function T0(r,e,{includeHydrateFallback:n}={}){return E0(r.map(s=>{let a=e.routes[s.route.id];if(!a)return[];let u=[a.module];return a.clientActionModule&&(u=u.concat(a.clientActionModule)),a.clientLoaderModule&&(u=u.concat(a.clientLoaderModule)),n&&a.hydrateFallbackModule&&(u=u.concat(a.hydrateFallbackModule)),a.imports&&(u=u.concat(a.imports)),u}).flat(1))}function E0(r){return[...new Set(r)]}function S0(r){let e={},n=Object.keys(r).sort();for(let s of n)e[s]=r[s];return e}function A0(r,e){let n=new Set;return new Set(e),r.reduce((s,a)=>{let u=JSON.stringify(S0(a));return n.has(u)||(n.add(u),s.push({key:u,link:a})),s},[])}function g_(){let r=j.useContext($o);return Cp(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function R0(){let r=j.useContext(fh);return Cp(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Ip=j.createContext(void 0);Ip.displayName="FrameworkContext";function m_(){let r=j.useContext(Ip);return Cp(r,"You must render this element inside a <HydratedRouter> element"),r}function C0(r,e){let n=j.useContext(Ip),[s,a]=j.useState(!1),[u,d]=j.useState(!1),{onFocus:p,onBlur:g,onMouseEnter:y,onMouseLeave:_,onTouchStart:S}=e,k=j.useRef(null);j.useEffect(()=>{if(r==="render"&&d(!0),r==="viewport"){let $=re=>{re.forEach(ee=>{d(ee.isIntersecting)})},G=new IntersectionObserver($,{threshold:.5});return k.current&&G.observe(k.current),()=>{G.disconnect()}}},[r]),j.useEffect(()=>{if(s){let $=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout($)}}},[s]);let L=()=>{a(!0)},W=()=>{a(!1),d(!1)};return n?r!=="intent"?[u,k,{}]:[u,k,{onFocus:vl(p,L),onBlur:vl(g,W),onMouseEnter:vl(y,L),onMouseLeave:vl(_,W),onTouchStart:vl(S,L)}]:[!1,k,{}]}function vl(r,e){return n=>{r&&r(n),n.defaultPrevented||e(n)}}function I0({page:r,...e}){let{router:n}=g_(),s=j.useMemo(()=>r_(n.routes,r,n.basename),[n.routes,r,n.basename]);return s?j.createElement(x0,{page:r,matches:s,...e}):null}function k0(r){let{manifest:e,routeModules:n}=m_(),[s,a]=j.useState([]);return j.useEffect(()=>{let u=!1;return b0(r,e,n).then(d=>{u||a(d)}),()=>{u=!0}},[r,e,n]),s}function x0({page:r,matches:e,...n}){let s=Hr(),{manifest:a,routeModules:u}=m_(),{basename:d}=g_(),{loaderData:p,matches:g}=R0(),y=j.useMemo(()=>qv(r,e,g,a,s,"data"),[r,e,g,a,s]),_=j.useMemo(()=>qv(r,e,g,a,s,"assets"),[r,e,g,a,s]),S=j.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let W=new Set,$=!1;if(e.forEach(re=>{let ee=a.routes[re.route.id];!ee||!ee.hasLoader||(!y.some(ne=>ne.route.id===re.route.id)&&re.route.id in p&&u[re.route.id]?.shouldRevalidate||ee.hasClientLoader?$=!0:W.add(re.route.id))}),W.size===0)return[];let G=v0(r,d,"data");return $&&W.size>0&&G.searchParams.set("_routes",e.filter(re=>W.has(re.route.id)).map(re=>re.route.id).join(",")),[G.pathname+G.search]},[d,p,s,a,y,e,r,u]),k=j.useMemo(()=>T0(_,a),[_,a]),L=k0(_);return j.createElement(j.Fragment,null,S.map(W=>j.createElement("link",{key:W,rel:"prefetch",as:"fetch",href:W,...n})),k.map(W=>j.createElement("link",{key:W,rel:"modulepreload",href:W,...n})),L.map(({key:W,link:$})=>j.createElement("link",{key:W,nonce:n.nonce,...$})))}function D0(...r){return e=>{r.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var y_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{y_&&(window.__reactRouterVersion="7.8.2")}catch{}function N0({basename:r,children:e,window:n}){let s=j.useRef();s.current==null&&(s.current=yS({window:n,v5Compat:!0}));let a=s.current,[u,d]=j.useState({action:a.action,location:a.location}),p=j.useCallback(g=>{j.startTransition(()=>d(g))},[d]);return j.useLayoutEffect(()=>a.listen(p),[a,p]),j.createElement(l0,{basename:r,children:e,location:u.location,navigationType:u.action,navigator:a})}var v_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tn=j.forwardRef(function({onClick:e,discover:n="render",prefetch:s="none",relative:a,reloadDocument:u,replace:d,state:p,target:g,to:y,preventScrollReset:_,viewTransition:S,...k},L){let{basename:W}=j.useContext(di),$=typeof y=="string"&&v_.test(y),G,re=!1;if(typeof y=="string"&&$&&(G=y,y_))try{let R=new URL(window.location.href),N=y.startsWith("//")?new URL(R.protocol+y):new URL(y),O=Gi(N.pathname,W);N.origin===R.origin&&O!=null?y=O+N.search+N.hash:re=!0}catch{ui(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let ee=FS(y,{relative:a}),[ne,he,ce]=C0(s,k),ve=P0(y,{replace:d,state:p,target:g,preventScrollReset:_,relative:a,viewTransition:S});function M(R){e&&e(R),R.defaultPrevented||ve(R)}let A=j.createElement("a",{...k,...ce,href:G||ee,onClick:re||u?e:M,ref:D0(L,he),target:g,"data-discover":!$&&n==="render"?"true":void 0});return ne&&!$?j.createElement(j.Fragment,null,A,j.createElement(I0,{page:ee})):A});tn.displayName="Link";var xr=j.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:s="",end:a=!1,style:u,to:d,viewTransition:p,children:g,...y},_){let S=Wl(d,{relative:y.relative}),k=Hr(),L=j.useContext(fh),{navigator:W,basename:$}=j.useContext(di),G=L!=null&&j0(S)&&p===!0,re=W.encodeLocation?W.encodeLocation(S).pathname:S.pathname,ee=k.pathname,ne=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;n||(ee=ee.toLowerCase(),ne=ne?ne.toLowerCase():null,re=re.toLowerCase()),ne&&$&&(ne=Gi(ne,$)||ne);const he=re!=="/"&&re.endsWith("/")?re.length-1:re.length;let ce=ee===re||!a&&ee.startsWith(re)&&ee.charAt(he)==="/",ve=ne!=null&&(ne===re||!a&&ne.startsWith(re)&&ne.charAt(re.length)==="/"),M={isActive:ce,isPending:ve,isTransitioning:G},A=ce?e:void 0,R;typeof s=="function"?R=s(M):R=[s,ce?"active":null,ve?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let N=typeof u=="function"?u(M):u;return j.createElement(tn,{...y,"aria-current":A,className:R,ref:_,style:N,to:d,viewTransition:p},typeof g=="function"?g(M):g)});xr.displayName="NavLink";var M0=j.forwardRef(({discover:r="render",fetcherKey:e,navigate:n,reloadDocument:s,replace:a,state:u,method:d=Pc,action:p,onSubmit:g,relative:y,preventScrollReset:_,viewTransition:S,...k},L)=>{let W=U0(),$=z0(p,{relative:y}),G=d.toLowerCase()==="get"?"get":"post",re=typeof p=="string"&&v_.test(p),ee=ne=>{if(g&&g(ne),ne.defaultPrevented)return;ne.preventDefault();let he=ne.nativeEvent.submitter,ce=he?.getAttribute("formmethod")||d;W(he||ne.currentTarget,{fetcherKey:e,method:ce,navigate:n,replace:a,state:u,relative:y,preventScrollReset:_,viewTransition:S})};return j.createElement("form",{ref:L,method:G,action:$,onSubmit:s?g:ee,...k,"data-discover":!re&&r==="render"?"true":void 0})});M0.displayName="Form";function O0(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function w_(r){let e=j.useContext($o);return it(e,O0(r)),e}function P0(r,{target:e,replace:n,state:s,preventScrollReset:a,relative:u,viewTransition:d}={}){let p=Jo(),g=Hr(),y=Wl(r,{relative:u});return j.useCallback(_=>{if(p0(_,e)){_.preventDefault();let S=n!==void 0?n:Nl(g)===Nl(y);p(r,{replace:S,state:s,preventScrollReset:a,relative:u,viewTransition:d})}},[g,p,y,n,s,e,r,a,u,d])}var V0=0,L0=()=>`__${String(++V0)}__`;function U0(){let{router:r}=w_("useSubmit"),{basename:e}=j.useContext(di),n=i0();return j.useCallback(async(s,a={})=>{let{action:u,method:d,encType:p,formData:g,body:y}=y0(s,e);if(a.navigate===!1){let _=a.fetcherKey||L0();await r.fetch(_,n,a.action||u,{preventScrollReset:a.preventScrollReset,formData:g,body:y,formMethod:a.method||d,formEncType:a.encType||p,flushSync:a.flushSync})}else await r.navigate(a.action||u,{preventScrollReset:a.preventScrollReset,formData:g,body:y,formMethod:a.method||d,formEncType:a.encType||p,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,e,n])}function z0(r,{relative:e}={}){let{basename:n}=j.useContext(di),s=j.useContext(zn);it(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),u={...Wl(r||".",{relative:e})},d=Hr();if(r==null){u.search=d.search;let p=new URLSearchParams(u.search),g=p.getAll("index");if(g.some(_=>_==="")){p.delete("index"),g.filter(S=>S).forEach(S=>p.append("index",S));let _=p.toString();u.search=_?`?${_}`:""}}return(!r||r===".")&&a.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:qi([n,u.pathname])),Nl(u)}function j0(r,{relative:e}={}){let n=j.useContext(c_);it(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=w_("useViewTransitionState"),a=Wl(r,{relative:e});if(!n.isTransitioning)return!1;let u=Gi(n.currentLocation.pathname,s)||n.currentLocation.pathname,d=Gi(n.nextLocation.pathname,s)||n.nextLocation.pathname;return Gc(a.pathname,d)!=null||Gc(a.pathname,u)!=null}function B0({toggleSidebar:r,isSidebarOpen:e}){return E.jsxs("header",{className:"app-header",children:[E.jsxs("button",{className:`menu-toggle ${e?"is-open":""}`,onClick:r,"aria-label":"Toggle menu",children:[E.jsx("span",{}),E.jsx("span",{}),E.jsx("span",{})]}),E.jsx("h1",{className:"header-title",children:"Your Guide to Digital Confidence"})]})}var Hv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let a=r.charCodeAt(s);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},q0=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const a=r[n++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const u=r[n++];e[s++]=String.fromCharCode((a&31)<<6|u&63)}else if(a>239&&a<365){const u=r[n++],d=r[n++],p=r[n++],g=((a&7)<<18|(u&63)<<12|(d&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[n++],d=r[n++];e[s++]=String.fromCharCode((a&15)<<12|(u&63)<<6|d&63)}}return e.join("")},b_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<r.length;a+=3){const u=r[a],d=a+1<r.length,p=d?r[a+1]:0,g=a+2<r.length,y=g?r[a+2]:0,_=u>>2,S=(u&3)<<4|p>>4;let k=(p&15)<<2|y>>6,L=y&63;g||(L=64,d||(k=64)),s.push(n[_],n[S],n[k],n[L])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(__(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):q0(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<r.length;){const u=n[r.charAt(a++)],p=a<r.length?n[r.charAt(a)]:0;++a;const y=a<r.length?n[r.charAt(a)]:64;++a;const S=a<r.length?n[r.charAt(a)]:64;if(++a,u==null||p==null||y==null||S==null)throw new H0;const k=u<<2|p>>4;if(s.push(k),y!==64){const L=p<<4&240|y>>2;if(s.push(L),S!==64){const W=y<<6&192|S;s.push(W)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class H0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const F0=function(r){const e=__(r);return b_.encodeByteArray(e,!0)},Wc=function(r){return F0(r).replace(/\./g,"")},T_=function(r){try{return b_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=()=>G0().__FIREBASE_DEFAULTS__,Y0=()=>{if(typeof process>"u"||typeof Hv>"u")return;const r=Hv.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},K0=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&T_(r[1]);return e&&JSON.parse(e)},gh=()=>{try{return W0()||Y0()||K0()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},E_=r=>{var e,n;return(n=(e=gh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},Q0=r=>{const e=E_(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},S_=()=>{var r;return(r=gh())===null||r===void 0?void 0:r.config},A_=r=>{var e;return(e=gh())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",a=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Wc(JSON.stringify(n)),Wc(JSON.stringify(d)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function J0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xt())}function Z0(){var r;const e=(r=gh())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function eA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tA(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function nA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iA(){const r=Xt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function rA(){return!Z0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sA(){try{return typeof indexedDB=="object"}catch{return!1}}function oA(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var u;e(((u=a.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA="FirebaseError";class Xi extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=aA,Object.setPrototypeOf(this,Xi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yl.prototype.create)}}class Yl{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},a=`${this.service}/${e}`,u=this.errors[e],d=u?lA(u,s):"Error",p=`${this.serviceName}: ${d} (${a}).`;return new Xi(a,p,s)}}function lA(r,e){return r.replace(uA,(n,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const uA=/\{\$([^}]+)}/g;function cA(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Yc(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const a of n){if(!s.includes(a))return!1;const u=r[a],d=e[a];if(Fv(u)&&Fv(d)){if(!Yc(u,d))return!1}else if(u!==d)return!1}for(const a of s)if(!n.includes(a))return!1;return!0}function Fv(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function bl(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,u]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(u)}}),e}function Tl(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}function hA(r,e){const n=new dA(r,e);return n.subscribe.bind(n)}class dA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let a;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");fA(e,["next","error","complete"])?a=e:a={next:e,error:n,complete:s},a.next===void 0&&(a.next=zf),a.error===void 0&&(a.error=zf),a.complete===void 0&&(a.complete=zf);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fA(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function zf(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(r){return r&&r._delegate?r._delegate:r}class Ns{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new X0;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e?.identifier),a=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(a)return null;throw u}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mA(e))try{this.getOrInitializeService({instanceIdentifier:ks})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:a});s.resolve(u)}catch{}}}}clearInstance(e=ks){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ks){return this.instances.has(e)}getOptions(e=ks){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,d]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);s===p&&d.resolve(a)}return a}onInit(e,n){var s;const a=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(a,u);const d=this.instances.get(a);return d&&e(d,a),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const a of s)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:gA(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ks){return this.component?this.component.multipleInstances?e:ks:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gA(r){return r===ks?void 0:r}function mA(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Me||(Me={}));const vA={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},wA=Me.INFO,_A={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},bA=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),a=_A[e];if(a)console[a](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kp{constructor(e){this.name=e,this._logLevel=wA,this._logHandler=bA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...e),this._logHandler(this,Me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...e),this._logHandler(this,Me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...e),this._logHandler(this,Me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...e),this._logHandler(this,Me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...e),this._logHandler(this,Me.ERROR,...e)}}const TA=(r,e)=>e.some(n=>r instanceof n);let Gv,Wv;function EA(){return Gv||(Gv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SA(){return Wv||(Wv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const R_=new WeakMap,ep=new WeakMap,C_=new WeakMap,jf=new WeakMap,xp=new WeakMap;function AA(r){const e=new Promise((n,s)=>{const a=()=>{r.removeEventListener("success",u),r.removeEventListener("error",d)},u=()=>{n(Vr(r.result)),a()},d=()=>{s(r.error),a()};r.addEventListener("success",u),r.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&R_.set(n,r)}).catch(()=>{}),xp.set(e,r),e}function RA(r){if(ep.has(r))return;const e=new Promise((n,s)=>{const a=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",d),r.removeEventListener("abort",d)},u=()=>{n(),a()},d=()=>{s(r.error||new DOMException("AbortError","AbortError")),a()};r.addEventListener("complete",u),r.addEventListener("error",d),r.addEventListener("abort",d)});ep.set(r,e)}let tp={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return ep.get(r);if(e==="objectStoreNames")return r.objectStoreNames||C_.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vr(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function CA(r){tp=r(tp)}function IA(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(Bf(this),e,...n);return C_.set(s,e.sort?e.sort():[e]),Vr(s)}:SA().includes(r)?function(...e){return r.apply(Bf(this),e),Vr(R_.get(this))}:function(...e){return Vr(r.apply(Bf(this),e))}}function kA(r){return typeof r=="function"?IA(r):(r instanceof IDBTransaction&&RA(r),TA(r,EA())?new Proxy(r,tp):r)}function Vr(r){if(r instanceof IDBRequest)return AA(r);if(jf.has(r))return jf.get(r);const e=kA(r);return e!==r&&(jf.set(r,e),xp.set(e,r)),e}const Bf=r=>xp.get(r);function xA(r,e,{blocked:n,upgrade:s,blocking:a,terminated:u}={}){const d=indexedDB.open(r,e),p=Vr(d);return s&&d.addEventListener("upgradeneeded",g=>{s(Vr(d.result),g.oldVersion,g.newVersion,Vr(d.transaction),g)}),n&&d.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),p.then(g=>{u&&g.addEventListener("close",()=>u()),a&&g.addEventListener("versionchange",y=>a(y.oldVersion,y.newVersion,y))}).catch(()=>{}),p}const DA=["get","getKey","getAll","getAllKeys","count"],NA=["put","add","delete","clear"],qf=new Map;function Yv(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(qf.get(e))return qf.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,a=NA.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(a||DA.includes(n)))return;const u=async function(d,...p){const g=this.transaction(d,a?"readwrite":"readonly");let y=g.store;return s&&(y=y.index(p.shift())),(await Promise.all([y[n](...p),a&&g.done]))[0]};return qf.set(e,u),u}CA(r=>({...r,get:(e,n,s)=>Yv(e,n)||r.get(e,n,s),has:(e,n)=>!!Yv(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(OA(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function OA(r){const e=r.getComponent();return e?.type==="VERSION"}const np="@firebase/app",Kv="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=new kp("@firebase/app"),PA="@firebase/app-compat",VA="@firebase/analytics-compat",LA="@firebase/analytics",UA="@firebase/app-check-compat",zA="@firebase/app-check",jA="@firebase/auth",BA="@firebase/auth-compat",qA="@firebase/database",HA="@firebase/data-connect",FA="@firebase/database-compat",GA="@firebase/functions",WA="@firebase/functions-compat",YA="@firebase/installations",KA="@firebase/installations-compat",QA="@firebase/messaging",XA="@firebase/messaging-compat",$A="@firebase/performance",JA="@firebase/performance-compat",ZA="@firebase/remote-config",eR="@firebase/remote-config-compat",tR="@firebase/storage",nR="@firebase/storage-compat",iR="@firebase/firestore",rR="@firebase/vertexai-preview",sR="@firebase/firestore-compat",oR="firebase",aR="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="[DEFAULT]",lR={[np]:"fire-core",[PA]:"fire-core-compat",[LA]:"fire-analytics",[VA]:"fire-analytics-compat",[zA]:"fire-app-check",[UA]:"fire-app-check-compat",[jA]:"fire-auth",[BA]:"fire-auth-compat",[qA]:"fire-rtdb",[HA]:"fire-data-connect",[FA]:"fire-rtdb-compat",[GA]:"fire-fn",[WA]:"fire-fn-compat",[YA]:"fire-iid",[KA]:"fire-iid-compat",[QA]:"fire-fcm",[XA]:"fire-fcm-compat",[$A]:"fire-perf",[JA]:"fire-perf-compat",[ZA]:"fire-rc",[eR]:"fire-rc-compat",[tR]:"fire-gcs",[nR]:"fire-gcs-compat",[iR]:"fire-fst",[sR]:"fire-fst-compat",[rR]:"fire-vertex","fire-js":"fire-js",[oR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc=new Map,uR=new Map,rp=new Map;function Qv(r,e){try{r.container.addComponent(e)}catch(n){Wi.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function Bo(r){const e=r.name;if(rp.has(e))return Wi.debug(`There were multiple attempts to register component ${e}.`),!1;rp.set(e,r);for(const n of Kc.values())Qv(n,r);for(const n of uR.values())Qv(n,r);return!0}function Dp(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function ii(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Lr=new Yl("app","Firebase",cR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ns("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=aR;function I_(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ip,automaticDataCollectionEnabled:!1},e),a=s.name;if(typeof a!="string"||!a)throw Lr.create("bad-app-name",{appName:String(a)});if(n||(n=S_()),!n)throw Lr.create("no-options");const u=Kc.get(a);if(u){if(Yc(n,u.options)&&Yc(s,u.config))return u;throw Lr.create("duplicate-app",{appName:a})}const d=new yA(a);for(const g of rp.values())d.addComponent(g);const p=new hR(n,s,d);return Kc.set(a,p),p}function k_(r=ip){const e=Kc.get(r);if(!e&&r===ip&&S_())return I_();if(!e)throw Lr.create("no-app",{appName:r});return e}function Ur(r,e,n){var s;let a=(s=lR[r])!==null&&s!==void 0?s:r;n&&(a+=`-${n}`);const u=a.match(/\s|\//),d=e.match(/\s|\//);if(u||d){const p=[`Unable to register library "${a}" with version "${e}":`];u&&p.push(`library name "${a}" contains illegal characters (whitespace or "/")`),u&&d&&p.push("and"),d&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wi.warn(p.join(" "));return}Bo(new Ns(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR="firebase-heartbeat-database",fR=1,Ml="firebase-heartbeat-store";let Hf=null;function x_(){return Hf||(Hf=xA(dR,fR,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ml)}catch(n){console.warn(n)}}}}).catch(r=>{throw Lr.create("idb-open",{originalErrorMessage:r.message})})),Hf}async function pR(r){try{const n=(await x_()).transaction(Ml),s=await n.objectStore(Ml).get(D_(r));return await n.done,s}catch(e){if(e instanceof Xi)Wi.warn(e.message);else{const n=Lr.create("idb-get",{originalErrorMessage:e?.message});Wi.warn(n.message)}}}async function Xv(r,e){try{const s=(await x_()).transaction(Ml,"readwrite");await s.objectStore(Ml).put(e,D_(r)),await s.done}catch(n){if(n instanceof Xi)Wi.warn(n.message);else{const s=Lr.create("idb-set",{originalErrorMessage:n?.message});Wi.warn(s.message)}}}function D_(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=1024,mR=720*60*60*1e3;class yR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wR(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=$v();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(d=>{const p=new Date(d.date).valueOf();return Date.now()-p<=mR}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Wi.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$v(),{heartbeatsToSend:s,unsentEntries:a}=vR(this._heartbeatsCache.heartbeats),u=Wc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return Wi.warn(n),""}}}function $v(){return new Date().toISOString().substring(0,10)}function vR(r,e=gR){const n=[];let s=r.slice();for(const a of r){const u=n.find(d=>d.agent===a.agent);if(u){if(u.dates.push(a.date),Jv(n)>e){u.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),Jv(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class wR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sA()?oA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await pR(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return Xv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return Xv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function Jv(r){return Wc(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(r){Bo(new Ns("platform-logger",e=>new MA(e),"PRIVATE")),Bo(new Ns("heartbeat",e=>new yR(e),"PRIVATE")),Ur(np,Kv,r),Ur(np,Kv,"esm2017"),Ur("fire-js","")}_R("");var bR="firebase",TR="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ur(bR,TR,"app");function Np(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(r);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(r,s[a])&&(n[s[a]]=r[s[a]]);return n}function N_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ER=N_,M_=new Yl("auth","Firebase",N_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=new kp("@firebase/auth");function SR(r,...e){Qc.logLevel<=Me.WARN&&Qc.warn(`Auth (${Zo}): ${r}`,...e)}function Lc(r,...e){Qc.logLevel<=Me.ERROR&&Qc.error(`Auth (${Zo}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(r,...e){throw Mp(r,...e)}function si(r,...e){return Mp(r,...e)}function O_(r,e,n){const s=Object.assign(Object.assign({},ER()),{[e]:n});return new Yl("auth","Firebase",s).create(e,{appName:r.name})}function Hi(r){return O_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mp(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return M_.create(r,...e)}function be(r,e,...n){if(!r)throw Mp(e,...n)}function zi(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Lc(e),new Error(e)}function Yi(r,e){r||zi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function AR(){return Zv()==="http:"||Zv()==="https:"}function Zv(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(AR()||tA()||"connection"in navigator)?navigator.onLine:!0}function CR(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yi(n>e,"Short delay should be less than long delay!"),this.isMobile=J0()||nA()}get(){return RR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(r,e){Yi(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=new Ql(3e4,6e4);function $i(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Ji(r,e,n,s,a={}){return V_(r,a,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const p=Kl(Object.assign({key:r.config.apiKey},d)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const y=Object.assign({method:e,headers:g},u);return eA()||(y.referrerPolicy="no-referrer"),P_.fetch()(L_(r,r.config.apiHost,n,p),y)})}async function V_(r,e,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},IR),e);try{const a=new DR(r),u=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw xc(r,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const p=u.ok?d.errorMessage:d.error.message,[g,y]=p.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw xc(r,"credential-already-in-use",d);if(g==="EMAIL_EXISTS")throw xc(r,"email-already-in-use",d);if(g==="USER_DISABLED")throw xc(r,"user-disabled",d);const _=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw O_(r,_,y);Un(r,_)}}catch(a){if(a instanceof Xi)throw a;Un(r,"network-request-failed",{message:String(a)})}}async function Xl(r,e,n,s,a={}){const u=await Ji(r,e,n,s,a);return"mfaPendingCredential"in u&&Un(r,"multi-factor-auth-required",{_serverResponse:u}),u}function L_(r,e,n,s){const a=`${e}${n}?${s}`;return r.config.emulator?Op(r.config,a):`${r.config.apiScheme}://${a}`}function xR(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class DR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(si(this.auth,"network-request-failed")),kR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xc(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const a=si(r,e,s);return a.customData._tokenResponse=n,a}function ew(r){return r!==void 0&&r.enterprise!==void 0}class NR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return xR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function MR(r,e){return Ji(r,"GET","/v2/recaptchaConfig",$i(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OR(r,e){return Ji(r,"POST","/v1/accounts:delete",e)}async function U_(r,e){return Ji(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function PR(r,e=!1){const n=gn(r),s=await n.getIdToken(e),a=Pp(s);be(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const u=typeof a.firebase=="object"?a.firebase:void 0,d=u?.sign_in_provider;return{claims:a,token:s,authTime:Cl(Ff(a.auth_time)),issuedAtTime:Cl(Ff(a.iat)),expirationTime:Cl(Ff(a.exp)),signInProvider:d||null,signInSecondFactor:u?.sign_in_second_factor||null}}function Ff(r){return Number(r)*1e3}function Pp(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return Lc("JWT malformed, contained fewer than 3 sections"),null;try{const a=T_(n);return a?JSON.parse(a):(Lc("Failed to decode base64 JWT payload"),null)}catch(a){return Lc("Caught error parsing JWT payload as JSON",a?.toString()),null}}function tw(r){const e=Pp(r);return be(e,"internal-error"),be(typeof e.exp<"u","internal-error"),be(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ol(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Xi&&VR(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function VR({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cl(this.lastLoginAt),this.creationTime=Cl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xc(r){var e;const n=r.auth,s=await r.getIdToken(),a=await Ol(r,U_(n,{idToken:s}));be(a?.users.length,n,"internal-error");const u=a.users[0];r._notifyReloadListener(u);const d=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?z_(u.providerUserInfo):[],p=zR(r.providerData,d),g=r.isAnonymous,y=!(r.email&&u.passwordHash)&&!p?.length,_=g?y:!1,S={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:p,metadata:new op(u.createdAt,u.lastLoginAt),isAnonymous:_};Object.assign(r,S)}async function UR(r){const e=gn(r);await Xc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zR(r,e){return[...r.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function z_(r){return r.map(e=>{var{providerId:n}=e,s=Np(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jR(r,e){const n=await V_(r,{},async()=>{const s=Kl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:u}=r.config,d=L_(r,a,"/v1/token",`key=${u}`),p=await r._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",P_.fetch()(d,{method:"POST",headers:p,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function BR(r,e){return Ji(r,"POST","/v2/accounts:revokeToken",$i(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){be(e.idToken,"internal-error"),be(typeof e.idToken<"u","internal-error"),be(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){be(e.length!==0,"internal-error");const n=tw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(be(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:a,expiresIn:u}=await jR(e,n);this.updateTokensAndExpiration(s,a,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:a,expirationTime:u}=n,d=new Lo;return s&&(be(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),a&&(be(typeof a=="string","internal-error",{appName:e}),d.accessToken=a),u&&(be(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Lo,this.toJSON())}_performRefresh(){return zi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(r,e){be(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class ji{constructor(e){var{uid:n,auth:s,stsTokenManager:a}=e,u=Np(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new LR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new op(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await Ol(this,this.stsTokenManager.getToken(this.auth,e));return be(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return PR(this,e)}reload(){return UR(this)}_assign(e){this!==e&&(be(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ji(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){be(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Xc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ii(this.auth.app))return Promise.reject(Hi(this.auth));const e=await this.getIdToken();return await Ol(this,OR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,a,u,d,p,g,y,_;const S=(s=n.displayName)!==null&&s!==void 0?s:void 0,k=(a=n.email)!==null&&a!==void 0?a:void 0,L=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,W=(d=n.photoURL)!==null&&d!==void 0?d:void 0,$=(p=n.tenantId)!==null&&p!==void 0?p:void 0,G=(g=n._redirectEventId)!==null&&g!==void 0?g:void 0,re=(y=n.createdAt)!==null&&y!==void 0?y:void 0,ee=(_=n.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:ne,emailVerified:he,isAnonymous:ce,providerData:ve,stsTokenManager:M}=n;be(ne&&M,e,"internal-error");const A=Lo.fromJSON(this.name,M);be(typeof ne=="string",e,"internal-error"),Ir(S,e.name),Ir(k,e.name),be(typeof he=="boolean",e,"internal-error"),be(typeof ce=="boolean",e,"internal-error"),Ir(L,e.name),Ir(W,e.name),Ir($,e.name),Ir(G,e.name),Ir(re,e.name),Ir(ee,e.name);const R=new ji({uid:ne,auth:e,email:k,emailVerified:he,displayName:S,isAnonymous:ce,photoURL:W,phoneNumber:L,tenantId:$,stsTokenManager:A,createdAt:re,lastLoginAt:ee});return ve&&Array.isArray(ve)&&(R.providerData=ve.map(N=>Object.assign({},N))),G&&(R._redirectEventId=G),R}static async _fromIdTokenResponse(e,n,s=!1){const a=new Lo;a.updateFromServerResponse(n);const u=new ji({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Xc(u),u}static async _fromGetAccountInfoResponse(e,n,s){const a=n.users[0];be(a.localId!==void 0,"internal-error");const u=a.providerUserInfo!==void 0?z_(a.providerUserInfo):[],d=!(a.email&&a.passwordHash)&&!u?.length,p=new Lo;p.updateFromIdToken(s);const g=new ji({uid:a.localId,auth:e,stsTokenManager:p,isAnonymous:d}),y={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new op(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!u?.length};return Object.assign(g,y),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw=new Map;function Bi(r){Yi(r instanceof Function,"Expected a class definition");let e=nw.get(r);return e?(Yi(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,nw.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}j_.type="NONE";const iw=j_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(r,e,n){return`firebase:${r}:${e}:${n}`}class Uo{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:a,name:u}=this.auth;this.fullUserKey=Uc(this.userKey,a.apiKey,u),this.fullPersistenceKey=Uc("persistence",a.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ji._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Uo(Bi(iw),e,s);const a=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=a[0]||Bi(iw);const d=Uc(s,e.config.apiKey,e.name);let p=null;for(const y of n)try{const _=await y._get(d);if(_){const S=ji._fromJSON(e,_);y!==u&&(p=S),u=y;break}}catch{}const g=a.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new Uo(u,e,s):(u=g[0],p&&await u._set(d,p.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(d)}catch{}})),new Uo(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(F_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(B_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(W_(e))return"Blackberry";if(Y_(e))return"Webos";if(q_(e))return"Safari";if((e.includes("chrome/")||H_(e))&&!e.includes("edge/"))return"Chrome";if(G_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function B_(r=Xt()){return/firefox\//i.test(r)}function q_(r=Xt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function H_(r=Xt()){return/crios\//i.test(r)}function F_(r=Xt()){return/iemobile/i.test(r)}function G_(r=Xt()){return/android/i.test(r)}function W_(r=Xt()){return/blackberry/i.test(r)}function Y_(r=Xt()){return/webos/i.test(r)}function Vp(r=Xt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function qR(r=Xt()){var e;return Vp(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function HR(){return iA()&&document.documentMode===10}function K_(r=Xt()){return Vp(r)||G_(r)||Y_(r)||W_(r)||/windows phone/i.test(r)||F_(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(r,e=[]){let n;switch(r){case"Browser":n=rw(Xt());break;case"Worker":n=`${rw(Xt())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zo}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((d,p)=>{try{const g=e(u);d(g)}catch(g){p(g)}});s.onAbort=n,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GR(r,e={}){return Ji(r,"GET","/v2/passwordPolicy",$i(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR=6;class YR{constructor(e){var n,s,a,u;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=d.minPasswordLength)!==null&&n!==void 0?n:WR,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,a,u,d,p;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(n=g.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(a=g.containsLowercaseLetter)!==null&&a!==void 0?a:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(d=g.containsNumericCharacter)!==null&&d!==void 0?d:!0),g.isValid&&(g.isValid=(p=g.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),g}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),a&&(n.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,a,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e,n,s,a){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sw(this),this.idTokenSubscription=new sw(this),this.beforeStateQueue=new FR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=M_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bi(n)),this._initializationPromise=this.queue(async()=>{var s,a;if(!this._deleted&&(this.persistenceManager=await Uo.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await U_(this,{idToken:e}),s=await ji._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ii(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(p,p))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,p=a?._redirectEventId,g=await this.tryRedirectSignIn(e);(!d||d===p)&&g?.user&&(a=g.user,u=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(a)}catch(d){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return be(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xc(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=CR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ii(this.app))return Promise.reject(Hi(this));const n=e?gn(e):null;return n&&be(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&be(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ii(this.app)?Promise.reject(Hi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ii(this.app)?Promise.reject(Hi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GR(this),n=new YR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yl("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await BR(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bi(e)||this._popupRedirectResolver;be(n,this,"argument-error"),this.redirectPersistenceManager=await Uo.create(this,[Bi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,a){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(be(p,this,"internal-error"),p.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const g=e.addObserver(n,s,a);return()=>{d=!0,g()}}else{const g=e.addObserver(n);return()=>{d=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return be(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Q_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(n["X-Firebase-AppCheck"]=a),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&SR(`Error while retrieving App Check token: ${n.error}`),n?.token}}function Fr(r){return gn(r)}class sw{constructor(e){this.auth=e,this.observer=null,this.addObserver=hA(n=>this.observer=n)}get next(){return be(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function QR(r){mh=r}function X_(r){return mh.loadJS(r)}function XR(){return mh.recaptchaEnterpriseScript}function $R(){return mh.gapiScript}function JR(r){return`__${r}${Math.floor(Math.random()*1e6)}`}const ZR="recaptcha-enterprise",eC="NO_RECAPTCHA";class tC{constructor(e){this.type=ZR,this.auth=Fr(e)}async verify(e="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(d,p)=>{MR(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const y=new NR(g);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,d(y.siteKey)}}).catch(g=>{p(g)})})}function a(u,d,p){const g=window.grecaptcha;ew(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(y=>{d(y)}).catch(()=>{d(eC)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((u,d)=>{s(this.auth).then(p=>{if(!n&&ew(window.grecaptcha))a(p,u,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let g=XR();g.length!==0&&(g+=p),X_(g).then(()=>{a(p,u,d)}).catch(y=>{d(y)})}}).catch(p=>{d(p)})})}}async function ow(r,e,n,s=!1){const a=new tC(r);let u;try{u=await a.verify(n)}catch{u=await a.verify(n,!0)}const d=Object.assign({},e);return s?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function $c(r,e,n,s){var a;if(!((a=r._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await ow(r,e,n,n==="getOobCode");return s(r,u)}else return s(r,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await ow(r,e,n,n==="getOobCode");return s(r,d)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(r,e){const n=Dp(r,"auth");if(n.isInitialized()){const a=n.getImmediate(),u=n.getOptions();if(Yc(u,e??{}))return a;Un(a,"already-initialized")}return n.initialize({options:e})}function iC(r,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Bi);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e?.popupRedirectResolver)}function rC(r,e,n){const s=Fr(r);be(s._canInitEmulator,s,"emulator-config-failed"),be(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,u=$_(e),{host:d,port:p}=sC(e),g=p===null?"":`:${p}`;s.config.emulator={url:`${u}//${d}${g}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:d,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:a})}),oC()}function $_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function sC(r){const e=$_(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const u=a[1];return{host:u,port:aw(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:aw(d)}}}function aw(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function oC(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zi("not implemented")}_getIdTokenResponse(e){return zi("not implemented")}_linkToIdToken(e,n){return zi("not implemented")}_getReauthenticationResolver(e){return zi("not implemented")}}async function aC(r,e){return Ji(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lC(r,e){return Xl(r,"POST","/v1/accounts:signInWithPassword",$i(r,e))}async function uC(r,e){return Ji(r,"POST","/v1/accounts:sendOobCode",$i(r,e))}async function cC(r,e){return uC(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hC(r,e){return Xl(r,"POST","/v1/accounts:signInWithEmailLink",$i(r,e))}async function dC(r,e){return Xl(r,"POST","/v1/accounts:signInWithEmailLink",$i(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl extends Lp{constructor(e,n,s,a=null){super("password",s),this._email=e,this._password=n,this._tenantId=a}static _fromEmailAndPassword(e,n){return new Pl(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Pl(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $c(e,n,"signInWithPassword",lC);case"emailLink":return hC(e,{email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $c(e,s,"signUpPassword",aC);case"emailLink":return dC(e,{idToken:n,email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(r,e){return Xl(r,"POST","/v1/accounts:signInWithIdp",$i(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC="http://localhost";class Ms extends Lp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ms(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=n,u=Np(n,["providerId","signInMethod"]);if(!s||!a)return null;const d=new Ms(s,a);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return zo(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,zo(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zo(e,n)}buildRequest(){const e={requestUri:fC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Kl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gC(r){const e=bl(Tl(r)).link,n=e?bl(Tl(e)).deep_link_id:null,s=bl(Tl(r)).deep_link_id;return(s?bl(Tl(s)).link:null)||s||n||e||r}class Up{constructor(e){var n,s,a,u,d,p;const g=bl(Tl(e)),y=(n=g.apiKey)!==null&&n!==void 0?n:null,_=(s=g.oobCode)!==null&&s!==void 0?s:null,S=pC((a=g.mode)!==null&&a!==void 0?a:null);be(y&&_&&S,"argument-error"),this.apiKey=y,this.operation=S,this.code=_,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(d=g.languageCode)!==null&&d!==void 0?d:null,this.tenantId=(p=g.tenantId)!==null&&p!==void 0?p:null}static parseLink(e){const n=gC(e);try{return new Up(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(){this.providerId=ea.PROVIDER_ID}static credential(e,n){return Pl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Up.parseLink(n);return be(s,"argument-error"),Pl._fromEmailAndCode(e,s.code,s.tenantId)}}ea.PROVIDER_ID="password";ea.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ea.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l extends J_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends $l{constructor(){super("facebook.com")}static credential(e){return Ms._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dr.credential(e.oauthAccessToken)}catch{return null}}}Dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends $l{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ms._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Nr.credential(n,s)}catch{return null}}}Nr.GOOGLE_SIGN_IN_METHOD="google.com";Nr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends $l{constructor(){super("github.com")}static credential(e){return Ms._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mr.credentialFromTaggedObject(e)}static credentialFromError(e){return Mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mr.credential(e.oauthAccessToken)}catch{return null}}}Mr.GITHUB_SIGN_IN_METHOD="github.com";Mr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends $l{constructor(){super("twitter.com")}static credential(e,n){return Ms._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Or.credential(n,s)}catch{return null}}}Or.TWITTER_SIGN_IN_METHOD="twitter.com";Or.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mC(r,e){return Xl(r,"POST","/v1/accounts:signUp",$i(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,a=!1){const u=await ji._fromIdTokenResponse(e,s,a),d=lw(s);return new Os({user:u,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const a=lw(s);return new Os({user:e,providerId:a,_tokenResponse:s,operationType:n})}}function lw(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc extends Xi{constructor(e,n,s,a){var u;super(n.code,n.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Jc.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,a){return new Jc(e,n,s,a)}}function Z_(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Jc._fromErrorAndOperation(r,u,e,s):u})}async function yC(r,e,n=!1){const s=await Ol(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return Os._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vC(r,e,n=!1){const{auth:s}=r;if(ii(s.app))return Promise.reject(Hi(s));const a="reauthenticate";try{const u=await Ol(r,Z_(s,a,e,r),n);be(u.idToken,s,"internal-error");const d=Pp(u.idToken);be(d,s,"internal-error");const{sub:p}=d;return be(r.uid===p,s,"user-mismatch"),Os._forOperation(r,a,u)}catch(u){throw u?.code==="auth/user-not-found"&&Un(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eb(r,e,n=!1){if(ii(r.app))return Promise.reject(Hi(r));const s="signIn",a=await Z_(r,s,e),u=await Os._fromIdTokenResponse(r,s,a);return n||await r._updateCurrentUser(u.user),u}async function wC(r,e){return eb(Fr(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tb(r){const e=Fr(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function _C(r,e,n){const s=Fr(r);await $c(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",cC)}async function bC(r,e,n){if(ii(r.app))return Promise.reject(Hi(r));const s=Fr(r),d=await $c(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",mC).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&tb(r),g}),p=await Os._fromIdTokenResponse(s,"signIn",d);return await s._updateCurrentUser(p.user),p}function TC(r,e,n){return ii(r.app)?Promise.reject(Hi(r)):wC(gn(r),ea.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&tb(r),s})}function EC(r,e,n,s){return gn(r).onIdTokenChanged(e,n,s)}function SC(r,e,n){return gn(r).beforeAuthStateChanged(e,n)}function AC(r,e,n,s){return gn(r).onAuthStateChanged(e,n,s)}function RC(r){return gn(r).signOut()}const Zc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zc,"1"),this.storage.removeItem(Zc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=1e3,IC=10;class ib extends nb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=K_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),a=this.localCache[n];s!==a&&e(n,a,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,p,g)=>{this.notifyListeners(d,g)});return}const s=e.key;n?this.detachListener():this.stopPolling();const a=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);HR()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,IC):a()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},CC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ib.type="LOCAL";const kC=ib;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb extends nb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}rb.type="SESSION";const sb=rb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xC(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(a=>a.isListeningto(e));if(n)return n;const s=new yh(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:a,data:u}=n.data,d=this.handlersMap[a];if(!d?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const p=Array.from(d).map(async y=>y(n.origin,u)),g=await xC(p);n.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:g})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let u,d;return new Promise((p,g)=>{const y=zp("",20);a.port1.start();const _=setTimeout(()=>{g(new Error("unsupported_event"))},s);d={messageChannel:a,onMessage(S){const k=S;if(k.data.eventId===y)switch(k.data.status){case"ack":clearTimeout(_),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(k.data.response);break;default:clearTimeout(_),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(d),a.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:y,data:n},[a.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(){return window}function NC(r){oi().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(){return typeof oi().WorkerGlobalScope<"u"&&typeof oi().importScripts=="function"}async function MC(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OC(){var r;return((r=navigator?.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function PC(){return ob()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab="firebaseLocalStorageDb",VC=1,eh="firebaseLocalStorage",lb="fbase_key";class Jl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vh(r,e){return r.transaction([eh],e?"readwrite":"readonly").objectStore(eh)}function LC(){const r=indexedDB.deleteDatabase(ab);return new Jl(r).toPromise()}function ap(){const r=indexedDB.open(ab,VC);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(eh,{keyPath:lb})}catch(a){n(a)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(eh)?e(s):(s.close(),await LC(),e(await ap()))})})}async function uw(r,e,n){const s=vh(r,!0).put({[lb]:e,value:n});return new Jl(s).toPromise()}async function UC(r,e){const n=vh(r,!1).get(e),s=await new Jl(n).toPromise();return s===void 0?null:s.value}function cw(r,e){const n=vh(r,!0).delete(e);return new Jl(n).toPromise()}const zC=800,jC=3;class ub{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ap(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>jC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ob()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yh._getInstance(PC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await MC(),!this.activeServiceWorker)return;this.sender=new DC(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ap();return await uw(e,Zc,"1"),await cw(e,Zc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>uw(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>UC(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const u=vh(a,!1).getAll();return new Jl(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:u}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(u)&&(this.notifyListeners(a,u),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ub.type="LOCAL";const BC=ub;new Ql(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qC(r,e){return e?Bi(e):(be(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp extends Lp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function HC(r){return eb(r.auth,new jp(r),r.bypassAuthState)}function FC(r){const{auth:e,user:n}=r;return be(n,e,"internal-error"),vC(n,new jp(r),r.bypassAuthState)}async function GC(r){const{auth:e,user:n}=r;return be(n,e,"internal-error"),yC(n,new jp(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e,n,s,a,u=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:a,tenantId:u,error:d,type:p}=e;if(d){this.reject(d);return}const g={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(g))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return HC;case"linkViaPopup":case"linkViaRedirect":return GC;case"reauthViaPopup":case"reauthViaRedirect":return FC;default:Un(this.auth,"internal-error")}}resolve(e){Yi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=new Ql(2e3,1e4);class Vo extends cb{constructor(e,n,s,a,u){super(e,n,a,u),this.provider=s,this.authWindow=null,this.pollId=null,Vo.currentPopupAction&&Vo.currentPopupAction.cancel(),Vo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return be(e,this.auth,"internal-error"),e}async onExecution(){Yi(this.filter.length===1,"Popup operations only handle one event");const e=zp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(si(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(si(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(si(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,WC.get())};e()}}Vo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC="pendingRedirect",zc=new Map;class KC extends cb{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=zc.get(this.auth._key());if(!e){try{const s=await QC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}zc.set(this.auth._key(),e)}return this.bypassAuthState||zc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QC(r,e){const n=JC(e),s=$C(r);if(!await s._isAvailable())return!1;const a=await s._get(n)==="true";return await s._remove(n),a}function XC(r,e){zc.set(r._key(),e)}function $C(r){return Bi(r._redirectPersistence)}function JC(r){return Uc(YC,r.config.apiKey,r.name)}async function ZC(r,e,n=!1){if(ii(r.app))return Promise.reject(Hi(r));const s=Fr(r),a=qC(s,e),d=await new KC(s,a,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=600*1e3;class t1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!n1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!hb(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(si(this.auth,a))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=e1&&this.cachedEventUids.clear(),this.cachedEventUids.has(hw(e))}saveEventToCache(e){this.cachedEventUids.add(hw(e)),this.lastProcessedEventTime=Date.now()}}function hw(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function hb({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function n1(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hb(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i1(r,e={}){return Ji(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,s1=/^https?/;async function o1(r){if(r.config.emulator)return;const{authorizedDomains:e}=await i1(r);for(const n of e)try{if(a1(n))return}catch{}Un(r,"unauthorized-domain")}function a1(r){const e=sp(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!s1.test(n))return!1;if(r1.test(r))return s===r;const a=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1=new Ql(3e4,6e4);function dw(){const r=oi().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function u1(r){return new Promise((e,n)=>{var s,a,u;function d(){dw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dw(),n(si(r,"network-request-failed"))},timeout:l1.get()})}if(!((a=(s=oi().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((u=oi().gapi)===null||u===void 0)&&u.load)d();else{const p=JR("iframefcb");return oi()[p]=()=>{gapi.load?d():n(si(r,"network-request-failed"))},X_(`${$R()}?onload=${p}`).catch(g=>n(g))}}).catch(e=>{throw jc=null,e})}let jc=null;function c1(r){return jc=jc||u1(r),jc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1=new Ql(5e3,15e3),d1="__/auth/iframe",f1="emulator/auth/iframe",p1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},g1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function m1(r){const e=r.config;be(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?Op(e,f1):`https://${r.config.authDomain}/${d1}`,s={apiKey:e.apiKey,appName:r.name,v:Zo},a=g1.get(r.config.apiHost);a&&(s.eid=a);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Kl(s).slice(1)}`}async function y1(r){const e=await c1(r),n=oi().gapi;return be(n,r,"internal-error"),e.open({where:document.body,url:m1(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:p1,dontclear:!0},s=>new Promise(async(a,u)=>{await s.restyle({setHideOnLeave:!1});const d=si(r,"network-request-failed"),p=oi().setTimeout(()=>{u(d)},h1.get());function g(){oi().clearTimeout(p),a(s)}s.ping(g).then(g,()=>{u(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},w1=500,_1=600,b1="_blank",T1="http://localhost";class fw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function E1(r,e,n,s=w1,a=_1){const u=Math.max((window.screen.availHeight-a)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const g=Object.assign(Object.assign({},v1),{width:s.toString(),height:a.toString(),top:u,left:d}),y=Xt().toLowerCase();n&&(p=H_(y)?b1:n),B_(y)&&(e=e||T1,g.scrollbars="yes");const _=Object.entries(g).reduce((k,[L,W])=>`${k}${L}=${W},`,"");if(qR(y)&&p!=="_self")return S1(e||"",p),new fw(null);const S=window.open(e||"",p,_);be(S,r,"popup-blocked");try{S.focus()}catch{}return new fw(S)}function S1(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1="__/auth/handler",R1="emulator/auth/handler",C1=encodeURIComponent("fac");async function pw(r,e,n,s,a,u){be(r.config.authDomain,r,"auth-domain-config-required"),be(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Zo,eventId:a};if(e instanceof J_){e.setDefaultLanguage(r.languageCode),d.providerId=e.providerId||"",cA(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,S]of Object.entries({}))d[_]=S}if(e instanceof $l){const _=e.getScopes().filter(S=>S!=="");_.length>0&&(d.scopes=_.join(","))}r.tenantId&&(d.tid=r.tenantId);const p=d;for(const _ of Object.keys(p))p[_]===void 0&&delete p[_];const g=await r._getAppCheckToken(),y=g?`#${C1}=${encodeURIComponent(g)}`:"";return`${I1(r)}?${Kl(p).slice(1)}${y}`}function I1({config:r}){return r.emulator?Op(r,R1):`https://${r.authDomain}/${A1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf="webStorageSupport";class k1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sb,this._completeRedirectFn=ZC,this._overrideRedirectResult=XC}async _openPopup(e,n,s,a){var u;Yi((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const d=await pw(e,n,s,sp(),a);return E1(e,d,zp())}async _openRedirect(e,n,s,a){await this._originValidation(e);const u=await pw(e,n,s,sp(),a);return NC(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:a,promise:u}=this.eventManagers[n];return a?Promise.resolve(a):(Yi(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await y1(e),s=new t1(e);return n.register("authEvent",a=>(be(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gf,{type:Gf},a=>{var u;const d=(u=a?.[0])===null||u===void 0?void 0:u[Gf];d!==void 0&&n(!!d),Un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=o1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return K_()||q_()||Vp()}}const x1=k1;var gw="@firebase/auth",mw="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){be(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function M1(r){Bo(new Ns("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:p}=s.options;be(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:d,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Q_(r)},y=new KR(s,a,u,g);return iC(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Bo(new Ns("auth-internal",e=>{const n=Fr(e.getProvider("auth").getImmediate());return(s=>new D1(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ur(gw,mw,N1(r)),Ur(gw,mw,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1=300,P1=A_("authIdTokenMaxAge")||O1;let yw=null;const V1=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>P1)return;const a=n?.token;yw!==a&&(yw=a,await fetch(r,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function L1(r=k_()){const e=Dp(r,"auth");if(e.isInitialized())return e.getImmediate();const n=nC(r,{popupRedirectResolver:x1,persistence:[BC,kC,sb]}),s=A_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const d=V1(u.toString());SC(n,d,()=>d(n.currentUser)),EC(n,p=>d(p))}}const a=E_("auth");return a&&rC(n,`http://${a}`),n}function U1(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}QR({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=a=>{const u=si("internal-error");u.customData=a,n(u)},s.type="text/javascript",s.charset="UTF-8",U1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});M1("Browser");var vw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ds,db;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(M,A){function R(){}R.prototype=A.prototype,M.D=A.prototype,M.prototype=new R,M.prototype.constructor=M,M.C=function(N,O,V){for(var I=Array(arguments.length-2),Ot=2;Ot<arguments.length;Ot++)I[Ot-2]=arguments[Ot];return A.prototype[O].apply(N,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(M,A,R){R||(R=0);var N=Array(16);if(typeof A=="string")for(var O=0;16>O;++O)N[O]=A.charCodeAt(R++)|A.charCodeAt(R++)<<8|A.charCodeAt(R++)<<16|A.charCodeAt(R++)<<24;else for(O=0;16>O;++O)N[O]=A[R++]|A[R++]<<8|A[R++]<<16|A[R++]<<24;A=M.g[0],R=M.g[1],O=M.g[2];var V=M.g[3],I=A+(V^R&(O^V))+N[0]+3614090360&4294967295;A=R+(I<<7&4294967295|I>>>25),I=V+(O^A&(R^O))+N[1]+3905402710&4294967295,V=A+(I<<12&4294967295|I>>>20),I=O+(R^V&(A^R))+N[2]+606105819&4294967295,O=V+(I<<17&4294967295|I>>>15),I=R+(A^O&(V^A))+N[3]+3250441966&4294967295,R=O+(I<<22&4294967295|I>>>10),I=A+(V^R&(O^V))+N[4]+4118548399&4294967295,A=R+(I<<7&4294967295|I>>>25),I=V+(O^A&(R^O))+N[5]+1200080426&4294967295,V=A+(I<<12&4294967295|I>>>20),I=O+(R^V&(A^R))+N[6]+2821735955&4294967295,O=V+(I<<17&4294967295|I>>>15),I=R+(A^O&(V^A))+N[7]+4249261313&4294967295,R=O+(I<<22&4294967295|I>>>10),I=A+(V^R&(O^V))+N[8]+1770035416&4294967295,A=R+(I<<7&4294967295|I>>>25),I=V+(O^A&(R^O))+N[9]+2336552879&4294967295,V=A+(I<<12&4294967295|I>>>20),I=O+(R^V&(A^R))+N[10]+4294925233&4294967295,O=V+(I<<17&4294967295|I>>>15),I=R+(A^O&(V^A))+N[11]+2304563134&4294967295,R=O+(I<<22&4294967295|I>>>10),I=A+(V^R&(O^V))+N[12]+1804603682&4294967295,A=R+(I<<7&4294967295|I>>>25),I=V+(O^A&(R^O))+N[13]+4254626195&4294967295,V=A+(I<<12&4294967295|I>>>20),I=O+(R^V&(A^R))+N[14]+2792965006&4294967295,O=V+(I<<17&4294967295|I>>>15),I=R+(A^O&(V^A))+N[15]+1236535329&4294967295,R=O+(I<<22&4294967295|I>>>10),I=A+(O^V&(R^O))+N[1]+4129170786&4294967295,A=R+(I<<5&4294967295|I>>>27),I=V+(R^O&(A^R))+N[6]+3225465664&4294967295,V=A+(I<<9&4294967295|I>>>23),I=O+(A^R&(V^A))+N[11]+643717713&4294967295,O=V+(I<<14&4294967295|I>>>18),I=R+(V^A&(O^V))+N[0]+3921069994&4294967295,R=O+(I<<20&4294967295|I>>>12),I=A+(O^V&(R^O))+N[5]+3593408605&4294967295,A=R+(I<<5&4294967295|I>>>27),I=V+(R^O&(A^R))+N[10]+38016083&4294967295,V=A+(I<<9&4294967295|I>>>23),I=O+(A^R&(V^A))+N[15]+3634488961&4294967295,O=V+(I<<14&4294967295|I>>>18),I=R+(V^A&(O^V))+N[4]+3889429448&4294967295,R=O+(I<<20&4294967295|I>>>12),I=A+(O^V&(R^O))+N[9]+568446438&4294967295,A=R+(I<<5&4294967295|I>>>27),I=V+(R^O&(A^R))+N[14]+3275163606&4294967295,V=A+(I<<9&4294967295|I>>>23),I=O+(A^R&(V^A))+N[3]+4107603335&4294967295,O=V+(I<<14&4294967295|I>>>18),I=R+(V^A&(O^V))+N[8]+1163531501&4294967295,R=O+(I<<20&4294967295|I>>>12),I=A+(O^V&(R^O))+N[13]+2850285829&4294967295,A=R+(I<<5&4294967295|I>>>27),I=V+(R^O&(A^R))+N[2]+4243563512&4294967295,V=A+(I<<9&4294967295|I>>>23),I=O+(A^R&(V^A))+N[7]+1735328473&4294967295,O=V+(I<<14&4294967295|I>>>18),I=R+(V^A&(O^V))+N[12]+2368359562&4294967295,R=O+(I<<20&4294967295|I>>>12),I=A+(R^O^V)+N[5]+4294588738&4294967295,A=R+(I<<4&4294967295|I>>>28),I=V+(A^R^O)+N[8]+2272392833&4294967295,V=A+(I<<11&4294967295|I>>>21),I=O+(V^A^R)+N[11]+1839030562&4294967295,O=V+(I<<16&4294967295|I>>>16),I=R+(O^V^A)+N[14]+4259657740&4294967295,R=O+(I<<23&4294967295|I>>>9),I=A+(R^O^V)+N[1]+2763975236&4294967295,A=R+(I<<4&4294967295|I>>>28),I=V+(A^R^O)+N[4]+1272893353&4294967295,V=A+(I<<11&4294967295|I>>>21),I=O+(V^A^R)+N[7]+4139469664&4294967295,O=V+(I<<16&4294967295|I>>>16),I=R+(O^V^A)+N[10]+3200236656&4294967295,R=O+(I<<23&4294967295|I>>>9),I=A+(R^O^V)+N[13]+681279174&4294967295,A=R+(I<<4&4294967295|I>>>28),I=V+(A^R^O)+N[0]+3936430074&4294967295,V=A+(I<<11&4294967295|I>>>21),I=O+(V^A^R)+N[3]+3572445317&4294967295,O=V+(I<<16&4294967295|I>>>16),I=R+(O^V^A)+N[6]+76029189&4294967295,R=O+(I<<23&4294967295|I>>>9),I=A+(R^O^V)+N[9]+3654602809&4294967295,A=R+(I<<4&4294967295|I>>>28),I=V+(A^R^O)+N[12]+3873151461&4294967295,V=A+(I<<11&4294967295|I>>>21),I=O+(V^A^R)+N[15]+530742520&4294967295,O=V+(I<<16&4294967295|I>>>16),I=R+(O^V^A)+N[2]+3299628645&4294967295,R=O+(I<<23&4294967295|I>>>9),I=A+(O^(R|~V))+N[0]+4096336452&4294967295,A=R+(I<<6&4294967295|I>>>26),I=V+(R^(A|~O))+N[7]+1126891415&4294967295,V=A+(I<<10&4294967295|I>>>22),I=O+(A^(V|~R))+N[14]+2878612391&4294967295,O=V+(I<<15&4294967295|I>>>17),I=R+(V^(O|~A))+N[5]+4237533241&4294967295,R=O+(I<<21&4294967295|I>>>11),I=A+(O^(R|~V))+N[12]+1700485571&4294967295,A=R+(I<<6&4294967295|I>>>26),I=V+(R^(A|~O))+N[3]+2399980690&4294967295,V=A+(I<<10&4294967295|I>>>22),I=O+(A^(V|~R))+N[10]+4293915773&4294967295,O=V+(I<<15&4294967295|I>>>17),I=R+(V^(O|~A))+N[1]+2240044497&4294967295,R=O+(I<<21&4294967295|I>>>11),I=A+(O^(R|~V))+N[8]+1873313359&4294967295,A=R+(I<<6&4294967295|I>>>26),I=V+(R^(A|~O))+N[15]+4264355552&4294967295,V=A+(I<<10&4294967295|I>>>22),I=O+(A^(V|~R))+N[6]+2734768916&4294967295,O=V+(I<<15&4294967295|I>>>17),I=R+(V^(O|~A))+N[13]+1309151649&4294967295,R=O+(I<<21&4294967295|I>>>11),I=A+(O^(R|~V))+N[4]+4149444226&4294967295,A=R+(I<<6&4294967295|I>>>26),I=V+(R^(A|~O))+N[11]+3174756917&4294967295,V=A+(I<<10&4294967295|I>>>22),I=O+(A^(V|~R))+N[2]+718787259&4294967295,O=V+(I<<15&4294967295|I>>>17),I=R+(V^(O|~A))+N[9]+3951481745&4294967295,M.g[0]=M.g[0]+A&4294967295,M.g[1]=M.g[1]+(O+(I<<21&4294967295|I>>>11))&4294967295,M.g[2]=M.g[2]+O&4294967295,M.g[3]=M.g[3]+V&4294967295}s.prototype.u=function(M,A){A===void 0&&(A=M.length);for(var R=A-this.blockSize,N=this.B,O=this.h,V=0;V<A;){if(O==0)for(;V<=R;)a(this,M,V),V+=this.blockSize;if(typeof M=="string"){for(;V<A;)if(N[O++]=M.charCodeAt(V++),O==this.blockSize){a(this,N),O=0;break}}else for(;V<A;)if(N[O++]=M[V++],O==this.blockSize){a(this,N),O=0;break}}this.h=O,this.o+=A},s.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var A=1;A<M.length-8;++A)M[A]=0;var R=8*this.o;for(A=M.length-8;A<M.length;++A)M[A]=R&255,R/=256;for(this.u(M),M=Array(16),A=R=0;4>A;++A)for(var N=0;32>N;N+=8)M[R++]=this.g[A]>>>N&255;return M};function u(M,A){var R=p;return Object.prototype.hasOwnProperty.call(R,M)?R[M]:R[M]=A(M)}function d(M,A){this.h=A;for(var R=[],N=!0,O=M.length-1;0<=O;O--){var V=M[O]|0;N&&V==A||(R[O]=V,N=!1)}this.g=R}var p={};function g(M){return-128<=M&&128>M?u(M,function(A){return new d([A|0],0>A?-1:0)}):new d([M|0],0>M?-1:0)}function y(M){if(isNaN(M)||!isFinite(M))return S;if(0>M)return G(y(-M));for(var A=[],R=1,N=0;M>=R;N++)A[N]=M/R|0,R*=4294967296;return new d(A,0)}function _(M,A){if(M.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(M.charAt(0)=="-")return G(_(M.substring(1),A));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=y(Math.pow(A,8)),N=S,O=0;O<M.length;O+=8){var V=Math.min(8,M.length-O),I=parseInt(M.substring(O,O+V),A);8>V?(V=y(Math.pow(A,V)),N=N.j(V).add(y(I))):(N=N.j(R),N=N.add(y(I)))}return N}var S=g(0),k=g(1),L=g(16777216);r=d.prototype,r.m=function(){if($(this))return-G(this).m();for(var M=0,A=1,R=0;R<this.g.length;R++){var N=this.i(R);M+=(0<=N?N:4294967296+N)*A,A*=4294967296}return M},r.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(W(this))return"0";if($(this))return"-"+G(this).toString(M);for(var A=y(Math.pow(M,6)),R=this,N="";;){var O=he(R,A).g;R=re(R,O.j(A));var V=((0<R.g.length?R.g[0]:R.h)>>>0).toString(M);if(R=O,W(R))return V+N;for(;6>V.length;)V="0"+V;N=V+N}},r.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function W(M){if(M.h!=0)return!1;for(var A=0;A<M.g.length;A++)if(M.g[A]!=0)return!1;return!0}function $(M){return M.h==-1}r.l=function(M){return M=re(this,M),$(M)?-1:W(M)?0:1};function G(M){for(var A=M.g.length,R=[],N=0;N<A;N++)R[N]=~M.g[N];return new d(R,~M.h).add(k)}r.abs=function(){return $(this)?G(this):this},r.add=function(M){for(var A=Math.max(this.g.length,M.g.length),R=[],N=0,O=0;O<=A;O++){var V=N+(this.i(O)&65535)+(M.i(O)&65535),I=(V>>>16)+(this.i(O)>>>16)+(M.i(O)>>>16);N=I>>>16,V&=65535,I&=65535,R[O]=I<<16|V}return new d(R,R[R.length-1]&-2147483648?-1:0)};function re(M,A){return M.add(G(A))}r.j=function(M){if(W(this)||W(M))return S;if($(this))return $(M)?G(this).j(G(M)):G(G(this).j(M));if($(M))return G(this.j(G(M)));if(0>this.l(L)&&0>M.l(L))return y(this.m()*M.m());for(var A=this.g.length+M.g.length,R=[],N=0;N<2*A;N++)R[N]=0;for(N=0;N<this.g.length;N++)for(var O=0;O<M.g.length;O++){var V=this.i(N)>>>16,I=this.i(N)&65535,Ot=M.i(O)>>>16,st=M.i(O)&65535;R[2*N+2*O]+=I*st,ee(R,2*N+2*O),R[2*N+2*O+1]+=V*st,ee(R,2*N+2*O+1),R[2*N+2*O+1]+=I*Ot,ee(R,2*N+2*O+1),R[2*N+2*O+2]+=V*Ot,ee(R,2*N+2*O+2)}for(N=0;N<A;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=A;N<2*A;N++)R[N]=0;return new d(R,0)};function ee(M,A){for(;(M[A]&65535)!=M[A];)M[A+1]+=M[A]>>>16,M[A]&=65535,A++}function ne(M,A){this.g=M,this.h=A}function he(M,A){if(W(A))throw Error("division by zero");if(W(M))return new ne(S,S);if($(M))return A=he(G(M),A),new ne(G(A.g),G(A.h));if($(A))return A=he(M,G(A)),new ne(G(A.g),A.h);if(30<M.g.length){if($(M)||$(A))throw Error("slowDivide_ only works with positive integers.");for(var R=k,N=A;0>=N.l(M);)R=ce(R),N=ce(N);var O=ve(R,1),V=ve(N,1);for(N=ve(N,2),R=ve(R,2);!W(N);){var I=V.add(N);0>=I.l(M)&&(O=O.add(R),V=I),N=ve(N,1),R=ve(R,1)}return A=re(M,O.j(A)),new ne(O,A)}for(O=S;0<=M.l(A);){for(R=Math.max(1,Math.floor(M.m()/A.m())),N=Math.ceil(Math.log(R)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),V=y(R),I=V.j(A);$(I)||0<I.l(M);)R-=N,V=y(R),I=V.j(A);W(V)&&(V=k),O=O.add(V),M=re(M,I)}return new ne(O,M)}r.A=function(M){return he(this,M).h},r.and=function(M){for(var A=Math.max(this.g.length,M.g.length),R=[],N=0;N<A;N++)R[N]=this.i(N)&M.i(N);return new d(R,this.h&M.h)},r.or=function(M){for(var A=Math.max(this.g.length,M.g.length),R=[],N=0;N<A;N++)R[N]=this.i(N)|M.i(N);return new d(R,this.h|M.h)},r.xor=function(M){for(var A=Math.max(this.g.length,M.g.length),R=[],N=0;N<A;N++)R[N]=this.i(N)^M.i(N);return new d(R,this.h^M.h)};function ce(M){for(var A=M.g.length+1,R=[],N=0;N<A;N++)R[N]=M.i(N)<<1|M.i(N-1)>>>31;return new d(R,M.h)}function ve(M,A){var R=A>>5;A%=32;for(var N=M.g.length-R,O=[],V=0;V<N;V++)O[V]=0<A?M.i(V+R)>>>A|M.i(V+R+1)<<32-A:M.i(V+R);return new d(O,M.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,db=s,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=y,d.fromString=_,Ds=d}).apply(typeof vw<"u"?vw:typeof self<"u"?self:typeof window<"u"?window:{});var Dc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fb,El,pb,Bc,lp,gb,mb,yb;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,m,v){return c==Array.prototype||c==Object.prototype||(c[m]=v.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Dc=="object"&&Dc];for(var m=0;m<c.length;++m){var v=c[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=n(this);function a(c,m){if(m)e:{var v=s;c=c.split(".");for(var T=0;T<c.length-1;T++){var U=c[T];if(!(U in v))break e;v=v[U]}c=c[c.length-1],T=v[c],m=m(T),m!=T&&m!=null&&e(v,c,{configurable:!0,writable:!0,value:m})}}function u(c,m){c instanceof String&&(c+="");var v=0,T=!1,U={next:function(){if(!T&&v<c.length){var F=v++;return{value:m(F,c[F]),done:!1}}return T=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}a("Array.prototype.values",function(c){return c||function(){return u(this,function(m,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},p=this||self;function g(c){var m=typeof c;return m=m!="object"?m:c?Array.isArray(c)?"array":m:"null",m=="array"||m=="object"&&typeof c.length=="number"}function y(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function _(c,m,v){return c.call.apply(c.bind,arguments)}function S(c,m,v){if(!c)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,T),c.apply(m,U)}}return function(){return c.apply(m,arguments)}}function k(c,m,v){return k=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:S,k.apply(null,arguments)}function L(c,m){var v=Array.prototype.slice.call(arguments,1);return function(){var T=v.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function W(c,m){function v(){}v.prototype=m.prototype,c.aa=m.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(T,U,F){for(var se=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)se[Oe-2]=arguments[Oe];return m.prototype[U].apply(T,se)}}function $(c){const m=c.length;if(0<m){const v=Array(m);for(let T=0;T<m;T++)v[T]=c[T];return v}return[]}function G(c,m){for(let v=1;v<arguments.length;v++){const T=arguments[v];if(g(T)){const U=c.length||0,F=T.length||0;c.length=U+F;for(let se=0;se<F;se++)c[U+se]=T[se]}else c.push(T)}}class re{constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function ee(c){return/^[\s\xa0]*$/.test(c)}function ne(){var c=p.navigator;return c&&(c=c.userAgent)?c:""}function he(c){return he[" "](c),c}he[" "]=function(){};var ce=ne().indexOf("Gecko")!=-1&&!(ne().toLowerCase().indexOf("webkit")!=-1&&ne().indexOf("Edge")==-1)&&!(ne().indexOf("Trident")!=-1||ne().indexOf("MSIE")!=-1)&&ne().indexOf("Edge")==-1;function ve(c,m,v){for(const T in c)m.call(v,c[T],T,c)}function M(c,m){for(const v in c)m.call(void 0,c[v],v,c)}function A(c){const m={};for(const v in c)m[v]=c[v];return m}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(c,m){let v,T;for(let U=1;U<arguments.length;U++){T=arguments[U];for(v in T)c[v]=T[v];for(let F=0;F<R.length;F++)v=R[F],Object.prototype.hasOwnProperty.call(T,v)&&(c[v]=T[v])}}function O(c){var m=1;c=c.split(":");const v=[];for(;0<m&&c.length;)v.push(c.shift()),m--;return c.length&&v.push(c.join(":")),v}function V(c){p.setTimeout(()=>{throw c},0)}function I(){var c=je;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class Ot{constructor(){this.h=this.g=null}add(m,v){const T=st.get();T.set(m,v),this.h?this.h.next=T:this.g=T,this.h=T}}var st=new re(()=>new Y,c=>c.reset());class Y{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,fe=!1,je=new Ot,x=()=>{const c=p.Promise.resolve(void 0);oe=()=>{c.then(J)}};var J=()=>{for(var c;c=I();){try{c.h.call(c.g)}catch(v){V(v)}var m=st;m.j(c),100>m.h&&(m.h++,c.next=m.g,m.g=c)}fe=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ie(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var pe=(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};p.addEventListener("test",v,m),p.removeEventListener("test",v,m)}catch{}return c})();function Ie(c,m){if(ie.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget){if(ce){e:{try{he(m.nodeName);var U=!0;break e}catch{}U=!1}U||(m=null)}}else v=="mouseover"?m=c.fromElement:v=="mouseout"&&(m=c.toElement);this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Te[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ie.aa.h.call(this)}}W(Ie,ie);var Te={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Ct="closure_listenable_"+(1e6*Math.random()|0),Je=0;function jn(c,m,v,T,U){this.listener=c,this.proxy=null,this.src=m,this.type=v,this.capture=!!T,this.ha=U,this.key=++Je,this.da=this.fa=!1}function Zi(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function fi(c){this.src=c,this.g={},this.h=0}fi.prototype.add=function(c,m,v,T,U){var F=c.toString();c=this.g[F],c||(c=this.g[F]=[],this.h++);var se=Wr(c,m,T,U);return-1<se?(m=c[se],v||(m.fa=!1)):(m=new jn(m,this.src,F,!!T,U),m.fa=v,c.push(m)),m};function Gr(c,m){var v=m.type;if(v in c.g){var T=c.g[v],U=Array.prototype.indexOf.call(T,m,void 0),F;(F=0<=U)&&Array.prototype.splice.call(T,U,1),F&&(Zi(m),c.g[v].length==0&&(delete c.g[v],c.h--))}}function Wr(c,m,v,T){for(var U=0;U<c.length;++U){var F=c[U];if(!F.da&&F.listener==m&&F.capture==!!v&&F.ha==T)return U}return-1}var Yr="closure_lm_"+(1e6*Math.random()|0),la={};function su(c,m,v,T,U){if(Array.isArray(m)){for(var F=0;F<m.length;F++)su(c,m[F],v,T,U);return null}return v=ou(v),c&&c[Ct]?c.K(m,v,y(T)?!!T.capture:!1,U):mn(c,m,v,!1,T,U)}function mn(c,m,v,T,U,F){if(!m)throw Error("Invalid event type");var se=y(U)?!!U.capture:!!U,Oe=Bs(c);if(Oe||(c[Yr]=Oe=new fi(c)),v=Oe.add(m,v,T,se,F),v.proxy)return v;if(T=xh(),v.proxy=T,T.src=c,T.listener=v,c.addEventListener)pe||(U=se),U===void 0&&(U=!1),c.addEventListener(m.toString(),T,U);else if(c.attachEvent)c.attachEvent(Kr(m.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return v}function xh(){function c(v){return m.call(c.src,c.listener,v)}const m=Dh;return c}function ua(c,m,v,T,U){if(Array.isArray(m))for(var F=0;F<m.length;F++)ua(c,m[F],v,T,U);else T=y(T)?!!T.capture:!!T,v=ou(v),c&&c[Ct]?(c=c.i,m=String(m).toString(),m in c.g&&(F=c.g[m],v=Wr(F,v,T,U),-1<v&&(Zi(F[v]),Array.prototype.splice.call(F,v,1),F.length==0&&(delete c.g[m],c.h--)))):c&&(c=Bs(c))&&(m=c.g[m.toString()],c=-1,m&&(c=Wr(m,v,T,U)),(v=-1<c?m[c]:null)&&js(v))}function js(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[Ct])Gr(m.i,c);else{var v=c.type,T=c.proxy;m.removeEventListener?m.removeEventListener(v,T,c.capture):m.detachEvent?m.detachEvent(Kr(v),T):m.addListener&&m.removeListener&&m.removeListener(T),(v=Bs(m))?(Gr(v,c),v.h==0&&(v.src=null,m[Yr]=null)):Zi(c)}}}function Kr(c){return c in la?la[c]:la[c]="on"+c}function Dh(c,m){if(c.da)c=!0;else{m=new Ie(m,this);var v=c.listener,T=c.ha||c.src;c.fa&&js(c),c=v.call(T,m)}return c}function Bs(c){return c=c[Yr],c instanceof fi?c:null}var ca="__closure_events_fn_"+(1e9*Math.random()>>>0);function ou(c){return typeof c=="function"?c:(c[ca]||(c[ca]=function(m){return c.handleEvent(m)}),c[ca])}function ot(){ae.call(this),this.i=new fi(this),this.M=this,this.F=null}W(ot,ae),ot.prototype[Ct]=!0,ot.prototype.removeEventListener=function(c,m,v,T){ua(this,c,m,v,T)};function He(c,m){var v,T=c.F;if(T)for(v=[];T;T=T.F)v.push(T);if(c=c.M,T=m.type||m,typeof m=="string")m=new ie(m,c);else if(m instanceof ie)m.target=m.target||c;else{var U=m;m=new ie(T,c),N(m,U)}if(U=!0,v)for(var F=v.length-1;0<=F;F--){var se=m.g=v[F];U=on(se,T,!0,m)&&U}if(se=m.g=c,U=on(se,T,!0,m)&&U,U=on(se,T,!1,m)&&U,v)for(F=0;F<v.length;F++)se=m.g=v[F],U=on(se,T,!1,m)&&U}ot.prototype.N=function(){if(ot.aa.N.call(this),this.i){var c=this.i,m;for(m in c.g){for(var v=c.g[m],T=0;T<v.length;T++)Zi(v[T]);delete c.g[m],c.h--}}this.F=null},ot.prototype.K=function(c,m,v,T){return this.i.add(String(c),m,!1,v,T)},ot.prototype.L=function(c,m,v,T){return this.i.add(String(c),m,!0,v,T)};function on(c,m,v,T){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();for(var U=!0,F=0;F<m.length;++F){var se=m[F];if(se&&!se.da&&se.capture==v){var Oe=se.listener,bt=se.ha||se.src;se.fa&&Gr(c.i,se),U=Oe.call(bt,T)!==!1&&U}}return U&&!T.defaultPrevented}function Ft(c,m,v){if(typeof c=="function")v&&(c=k(c,v));else if(c&&typeof c.handleEvent=="function")c=k(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:p.setTimeout(c,m||0)}function au(c){c.g=Ft(()=>{c.g=null,c.i&&(c.i=!1,au(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class Nh extends ae{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:au(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qr(c){ae.call(this),this.h=c,this.g={}}W(Qr,ae);var Xr=[];function $r(c){ve(c.g,function(m,v){this.g.hasOwnProperty(v)&&js(m)},c),c.g={}}Qr.prototype.N=function(){Qr.aa.N.call(this),$r(this)},Qr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Dn=p.JSON.stringify,qs=p.JSON.parse,Jr=class{stringify(c){return p.JSON.stringify(c,void 0)}parse(c){return p.JSON.parse(c,void 0)}};function ha(){}ha.prototype.h=null;function da(c){return c.h||(c.h=c.i())}function fa(){}var pi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function gi(){ie.call(this,"d")}W(gi,ie);function pa(){ie.call(this,"c")}W(pa,ie);var Bn={},ga=null;function er(){return ga=ga||new ot}Bn.La="serverreachability";function Hs(c){ie.call(this,Bn.La,c)}W(Hs,ie);function tr(c){const m=er();He(m,new Hs(m))}Bn.STAT_EVENT="statevent";function lu(c,m){ie.call(this,Bn.STAT_EVENT,c),this.stat=m}W(lu,ie);function et(c){const m=er();He(m,new lu(m,c))}Bn.Ma="timingevent";function _t(c,m){ie.call(this,Bn.Ma,c),this.size=m}W(_t,ie);function gt(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){c()},m)}function yn(){this.g=!0}yn.prototype.xa=function(){this.g=!1};function ma(c,m,v,T,U,F){c.info(function(){if(c.g)if(F)for(var se="",Oe=F.split("&"),bt=0;bt<Oe.length;bt++){var Pe=Oe[bt].split("=");if(1<Pe.length){var kt=Pe[0];Pe=Pe[1];var Tt=kt.split("_");se=2<=Tt.length&&Tt[1]=="type"?se+(kt+"="+Pe+"&"):se+(kt+"=redacted&")}}else se=null;else se=F;return"XMLHTTP REQ ("+T+") [attempt "+U+"]: "+m+`
`+v+`
`+se})}function Mh(c,m,v,T,U,F,se){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+U+"]: "+m+`
`+v+`
`+F+" "+se})}function nr(c,m,v,T){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+Zr(c,v)+(T?" "+T:"")})}function uu(c,m){c.info(function(){return"TIMEOUT: "+m})}yn.prototype.info=function(){};function Zr(c,m){if(!c.g)return m;if(!m)return null;try{var v=JSON.parse(m);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var T=v[c];if(!(2>T.length)){var U=T[1];if(Array.isArray(U)&&!(1>U.length)){var F=U[0];if(F!="noop"&&F!="stop"&&F!="close")for(var se=1;se<U.length;se++)U[se]=""}}}}return Dn(v)}catch{return m}}var ir={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},mi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},qn;function Hn(){}W(Hn,ha),Hn.prototype.g=function(){return new XMLHttpRequest},Hn.prototype.i=function(){return{}},qn=new Hn;function $t(c,m,v,T){this.j=c,this.i=m,this.l=v,this.R=T||1,this.U=new Qr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ct}function ct(){this.i=null,this.g="",this.h=!1}var ya={},Fs={};function Nn(c,m,v){c.L=1,c.v=rs(an(m)),c.m=v,c.P=!0,yi(c,null)}function yi(c,m){c.F=Date.now(),es(c),c.A=an(c.v);var v=c.A,T=c.R;Array.isArray(T)||(T=[String(T)]),Ea(v.i,"t",T),c.C=0,v=c.j.J,c.h=new ct,c.g=Au(c.j,v?m:null,!c.m),0<c.O&&(c.M=new Nh(k(c.Y,c,c.g),c.O)),m=c.U,v=c.g,T=c.ca;var U="readystatechange";Array.isArray(U)||(U&&(Xr[0]=U.toString()),U=Xr);for(var F=0;F<U.length;F++){var se=su(v,U[F],T||m.handleEvent,!1,m.h||m);if(!se)break;m.g[se.key]=se}m=c.H?A(c.H):{},c.m?(c.u||(c.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,m)):(c.u="GET",c.g.ea(c.A,c.u,null,m)),tr(),ma(c.i,c.u,c.A,c.l,c.R,c.m)}$t.prototype.ca=function(c){c=c.target;const m=this.M;m&&bn(c)==3?m.j():this.Y(c)},$t.prototype.Y=function(c){try{if(c==this.g)e:{const Tt=bn(this.g);var m=this.g.Ba();const Ai=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||yu(this.g)))){this.J||Tt!=4||m==7||(m==8||0>=Ai?tr(3):tr(2)),rr(this);var v=this.g.Z();this.X=v;t:if(cu(this)){var T=yu(this.g);c="";var U=T.length,F=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pt(this),Fn(this);var se="";break t}this.h.i=new p.TextDecoder}for(m=0;m<U;m++)this.h.h=!0,c+=this.h.i.decode(T[m],{stream:!(F&&m==U-1)});T.length=0,this.h.g+=c,this.C=0,se=this.h.g}else se=this.g.oa();if(this.o=v==200,Mh(this.i,this.u,this.A,this.l,this.R,Tt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,bt=this.g;if((Oe=bt.g?bt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ee(Oe)){var Pe=Oe;break t}}Pe=null}if(v=Pe)nr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ts(this,v);else{this.o=!1,this.s=3,et(12),Pt(this),Fn(this);break e}}if(this.P){v=!0;let Vt;for(;!this.J&&this.C<se.length;)if(Vt=hu(this,se),Vt==Fs){Tt==4&&(this.s=4,et(14),v=!1),nr(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==ya){this.s=4,et(15),nr(this.i,this.l,se,"[Invalid Chunk]"),v=!1;break}else nr(this.i,this.l,Vt,null),ts(this,Vt);if(cu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||se.length!=0||this.h.h||(this.s=1,et(16),v=!1),this.o=this.o&&v,!v)nr(this.i,this.l,se,"[Invalid Chunked Response]"),Pt(this),Fn(this);else if(0<se.length&&!this.W){this.W=!0;var kt=this.j;kt.g==this&&kt.ba&&!kt.M&&(kt.j.info("Great, no buffering proxy detected. Bytes received: "+se.length),ds(kt),kt.M=!0,et(11))}}else nr(this.i,this.l,se,null),ts(this,se);Tt==4&&Pt(this),this.o&&!this.J&&(Tt==4?Tu(this.j,this):(this.o=!1,es(this)))}else Uh(this.g),v==400&&0<se.indexOf("Unknown SID")?(this.s=3,et(12)):(this.s=0,et(13)),Pt(this),Fn(this)}}}catch{}finally{}};function cu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function hu(c,m){var v=c.C,T=m.indexOf(`
`,v);return T==-1?Fs:(v=Number(m.substring(v,T)),isNaN(v)?ya:(T+=1,T+v>m.length?Fs:(m=m.slice(T,T+v),c.C=T+v,m)))}$t.prototype.cancel=function(){this.J=!0,Pt(this)};function es(c){c.S=Date.now()+c.I,du(c,c.I)}function du(c,m){if(c.B!=null)throw Error("WatchDog timer not null");c.B=gt(k(c.ba,c),m)}function rr(c){c.B&&(p.clearTimeout(c.B),c.B=null)}$t.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(uu(this.i,this.A),this.L!=2&&(tr(),et(17)),Pt(this),this.s=2,Fn(this)):du(this,this.S-c)};function Fn(c){c.j.G==0||c.J||Tu(c.j,c)}function Pt(c){rr(c);var m=c.M;m&&typeof m.ma=="function"&&m.ma(),c.M=null,$r(c.U),c.g&&(m=c.g,c.g=null,m.abort(),m.ma())}function ts(c,m){try{var v=c.j;if(v.G!=0&&(v.g==c||va(v.h,c))){if(!c.K&&va(v.h,c)&&v.G==3){try{var T=v.Da.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var U=T;if(U[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)no(v),eo(v);else break e;Ia(v),et(18)}}else v.za=U[1],0<v.za-v.T&&37500>U[2]&&v.F&&v.v==0&&!v.C&&(v.C=gt(k(v.Za,v),6e3));if(1>=Ws(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Si(v,11)}else if((c.K||v.g==c)&&no(v),!ee(m))for(U=v.Da.g.parse(m),m=0;m<U.length;m++){let Pe=U[m];if(v.T=Pe[0],Pe=Pe[1],v.G==2)if(Pe[0]=="c"){v.K=Pe[1],v.ia=Pe[2];const kt=Pe[3];kt!=null&&(v.la=kt,v.j.info("VER="+v.la));const Tt=Pe[4];Tt!=null&&(v.Aa=Tt,v.j.info("SVER="+v.Aa));const Ai=Pe[5];Ai!=null&&typeof Ai=="number"&&0<Ai&&(T=1.5*Ai,v.L=T,v.j.info("backChannelRequestTimeoutMs_="+T)),T=v;const Vt=c.g;if(Vt){const $n=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($n){var F=T.h;F.g||$n.indexOf("spdy")==-1&&$n.indexOf("quic")==-1&&$n.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(Ys(F,F.h),F.h=null))}if(T.D){const xa=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;xa&&(T.ya=xa,Ye(T.I,T.D,xa))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),T=v;var se=c;if(T.qa=Su(T,T.J?T.ia:null,T.W),se.K){Jt(T.h,se);var Oe=se,bt=T.L;bt&&(Oe.I=bt),Oe.B&&(rr(Oe),es(Oe)),T.g=se}else _u(T);0<v.i.length&&to(v)}else Pe[0]!="stop"&&Pe[0]!="close"||Si(v,7);else v.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?Si(v,7):Ra(v):Pe[0]!="noop"&&v.l&&v.l.ta(Pe),v.v=0)}}tr(4)}catch{}}var fu=class{constructor(c,m){this.g=c,this.map=m}};function vi(c){this.l=c||10,p.PerformanceNavigationTiming?(c=p.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Gs(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Ws(c){return c.h?1:c.g?c.g.size:0}function va(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function Ys(c,m){c.g?c.g.add(m):c.h=m}function Jt(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}vi.prototype.cancel=function(){if(this.i=wa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function wa(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const v of c.g.values())m=m.concat(v.D);return m}return $(c.i)}function Oh(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(g(c)){for(var m=[],v=c.length,T=0;T<v;T++)m.push(c[T]);return m}m=[],v=0;for(T in c)m[v++]=c[T];return m}function Ks(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(g(c)||typeof c=="string"){var m=[];c=c.length;for(var v=0;v<c;v++)m.push(v);return m}m=[],v=0;for(const T in c)m[v++]=T;return m}}}function _a(c,m){if(c.forEach&&typeof c.forEach=="function")c.forEach(m,void 0);else if(g(c)||typeof c=="string")Array.prototype.forEach.call(c,m,void 0);else for(var v=Ks(c),T=Oh(c),U=T.length,F=0;F<U;F++)m.call(void 0,T[F],v&&v[F],c)}var ns=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ph(c,m){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var T=c[v].indexOf("="),U=null;if(0<=T){var F=c[v].substring(0,T);U=c[v].substring(T+1)}else F=c[v];m(F,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function mt(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof mt){this.h=c.h,is(this,c.j),this.o=c.o,this.g=c.g,sr(this,c.s),this.l=c.l;var m=c.i,v=new _i;v.i=m.i,m.g&&(v.g=new Map(m.g),v.h=m.h),wi(this,v),this.m=c.m}else c&&(m=String(c).match(ns))?(this.h=!1,is(this,m[1]||"",!0),this.o=vn(m[2]||""),this.g=vn(m[3]||"",!0),sr(this,m[4]),this.l=vn(m[5]||"",!0),wi(this,m[6]||"",!0),this.m=vn(m[7]||"")):(this.h=!1,this.i=new _i(null,this.h))}mt.prototype.toString=function(){var c=[],m=this.j;m&&c.push(ss(m,ba,!0),":");var v=this.g;return(v||m=="file")&&(c.push("//"),(m=this.o)&&c.push(ss(m,ba,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(ss(v,v.charAt(0)=="/"?Vh:Ta,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",ss(v,Qs)),c.join("")};function an(c){return new mt(c)}function is(c,m,v){c.j=v?vn(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function sr(c,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);c.s=m}else c.s=null}function wi(c,m,v){m instanceof _i?(c.i=m,gu(c.i,c.h)):(v||(m=ss(m,Lh)),c.i=new _i(m,c.h))}function Ye(c,m,v){c.i.set(m,v)}function rs(c){return Ye(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function vn(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ss(c,m,v){return typeof c=="string"?(c=encodeURI(c).replace(m,pu),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function pu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var ba=/[#\/\?@]/g,Ta=/[#\?:]/g,Vh=/[#\?]/g,Lh=/[#\?@]/g,Qs=/#/g;function _i(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function wn(c){c.g||(c.g=new Map,c.h=0,c.i&&Ph(c.i,function(m,v){c.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}r=_i.prototype,r.add=function(c,m){wn(this),this.i=null,c=Gn(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(m),this.h+=1,this};function bi(c,m){wn(c),m=Gn(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function Ti(c,m){return wn(c),m=Gn(c,m),c.g.has(m)}r.forEach=function(c,m){wn(this),this.g.forEach(function(v,T){v.forEach(function(U){c.call(m,U,T,this)},this)},this)},r.na=function(){wn(this);const c=Array.from(this.g.values()),m=Array.from(this.g.keys()),v=[];for(let T=0;T<m.length;T++){const U=c[T];for(let F=0;F<U.length;F++)v.push(m[T])}return v},r.V=function(c){wn(this);let m=[];if(typeof c=="string")Ti(this,c)&&(m=m.concat(this.g.get(Gn(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)m=m.concat(c[v])}return m},r.set=function(c,m){return wn(this),this.i=null,c=Gn(this,c),Ti(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},r.get=function(c,m){return c?(c=this.V(c),0<c.length?String(c[0]):m):m};function Ea(c,m,v){bi(c,m),0<v.length&&(c.i=null,c.g.set(Gn(c,m),$(v)),c.h+=v.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(var v=0;v<m.length;v++){var T=m[v];const F=encodeURIComponent(String(T)),se=this.V(T);for(T=0;T<se.length;T++){var U=F;se[T]!==""&&(U+="="+encodeURIComponent(String(se[T]))),c.push(U)}}return this.i=c.join("&")};function Gn(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function gu(c,m){m&&!c.j&&(wn(c),c.i=null,c.g.forEach(function(v,T){var U=T.toLowerCase();T!=U&&(bi(this,T),Ea(this,U,v))},c)),c.j=m}function os(c,m){const v=new yn;if(p.Image){const T=new Image;T.onload=L(_n,v,"TestLoadImage: loaded",!0,m,T),T.onerror=L(_n,v,"TestLoadImage: error",!1,m,T),T.onabort=L(_n,v,"TestLoadImage: abort",!1,m,T),T.ontimeout=L(_n,v,"TestLoadImage: timeout",!1,m,T),p.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else m(!1)}function Mn(c,m){const v=new yn,T=new AbortController,U=setTimeout(()=>{T.abort(),_n(v,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:T.signal}).then(F=>{clearTimeout(U),F.ok?_n(v,"TestPingServer: ok",!0,m):_n(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),_n(v,"TestPingServer: error",!1,m)})}function _n(c,m,v,T,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),T(v)}catch{}}function as(){this.g=new Jr}function Wn(c,m,v){const T=v||"";try{_a(c,function(U,F){let se=U;y(U)&&(se=Dn(U)),m.push(T+F+"="+encodeURIComponent(se))})}catch(U){throw m.push(T+"type="+encodeURIComponent("_badmap")),U}}function or(c){this.l=c.Ub||null,this.j=c.eb||!1}W(or,ha),or.prototype.g=function(){return new Ei(this.l,this.j)},or.prototype.i=(function(c){return function(){return c}})({});function Ei(c,m){ot.call(this),this.D=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}W(Ei,ot),r=Ei.prototype,r.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=m,this.readyState=1,Kn(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(m.body=c),(this.D||p).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yn(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Kn(this)),this.g&&(this.readyState=3,Kn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Sa(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Sa(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?Yn(this):Kn(this),this.readyState==3&&Sa(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,Yn(this))},r.Qa=function(c){this.g&&(this.response=c,Yn(this))},r.ga=function(){this.g&&Yn(this)};function Yn(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Kn(c)}r.setRequestHeader=function(c,m){this.u.append(c,m)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=m.next();return c.join(`\r
`)};function Kn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ei.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Aa(c){let m="";return ve(c,function(v,T){m+=T,m+=":",m+=v,m+=`\r
`}),m}function It(c,m,v){e:{for(T in v){var T=!1;break e}T=!0}T||(v=Aa(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):Ye(c,m,v))}function qe(c){ot.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}W(qe,ot);var Xs=/^https?$/i,ls=["POST","PUT"];r=qe.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,m,v,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():qn.g(),this.v=this.o?da(this.o):da(qn),this.g.onreadystatechange=k(this.Ea,this);try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch(F){mu(this,F);return}if(c=v||"",v=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var U in T)v.set(U,T[U]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const F of T.keys())v.set(F,T.get(F));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(v.keys()).find(F=>F.toLowerCase()=="content-type"),U=p.FormData&&c instanceof p.FormData,!(0<=Array.prototype.indexOf.call(ls,m,void 0))||T||U||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,se]of v)this.g.setRequestHeader(F,se);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{us(this),this.u=!0,this.g.send(c),this.u=!1}catch(F){mu(this,F)}};function mu(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.m=5,$s(c),Qn(c)}function $s(c){c.A||(c.A=!0,He(c,"complete"),He(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,He(this,"complete"),He(this,"abort"),Qn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qn(this,!0)),qe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Js(this):this.bb())},r.bb=function(){Js(this)};function Js(c){if(c.h&&typeof d<"u"&&(!c.v[1]||bn(c)!=4||c.Z()!=2)){if(c.u&&bn(c)==4)Ft(c.Ea,0,c);else if(He(c,"readystatechange"),bn(c)==4){c.h=!1;try{const se=c.Z();e:switch(se){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var v;if(!(v=m)){var T;if(T=se===0){var U=String(c.D).match(ns)[1]||null;!U&&p.self&&p.self.location&&(U=p.self.location.protocol.slice(0,-1)),T=!Xs.test(U?U.toLowerCase():"")}v=T}if(v)He(c,"complete"),He(c,"success");else{c.m=6;try{var F=2<bn(c)?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.Z()+"]",$s(c)}}finally{Qn(c)}}}}function Qn(c,m){if(c.g){us(c);const v=c.g,T=c.v[0]?()=>{}:null;c.g=null,c.v=null,m||He(c,"ready");try{v.onreadystatechange=T}catch{}}}function us(c){c.I&&(p.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function bn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),qs(m)}};function yu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Uh(c){const m={};c=(c.g&&2<=bn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(ee(c[T]))continue;var v=O(c[T]);const U=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const F=m[U]||[];m[U]=F,F.push(v)}M(m,function(T){return T.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function cs(c,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||m}function Zs(c){this.Aa=0,this.i=[],this.j=new yn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=cs("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=cs("baseRetryDelayMs",5e3,c),this.cb=cs("retryDelaySeedMs",1e4,c),this.Wa=cs("forwardChannelMaxRetries",2,c),this.wa=cs("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new vi(c&&c.concurrentRequestLimit),this.Da=new as,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Zs.prototype,r.la=8,r.G=1,r.connect=function(c,m,v,T){et(0),this.W=c,this.H=m||{},v&&T!==void 0&&(this.H.OSID=v,this.H.OAID=T),this.F=this.X,this.I=Su(this,null,this.W),to(this)};function Ra(c){if(vu(c),c.G==3){var m=c.U++,v=an(c.I);if(Ye(v,"SID",c.K),Ye(v,"RID",m),Ye(v,"TYPE","terminate"),hs(c,v),m=new $t(c,c.j,m),m.L=2,m.v=rs(an(v)),v=!1,p.navigator&&p.navigator.sendBeacon)try{v=p.navigator.sendBeacon(m.v.toString(),"")}catch{}!v&&p.Image&&(new Image().src=m.v,v=!0),v||(m.g=Au(m.j,null),m.g.ea(m.v)),m.F=Date.now(),es(m)}Eu(c)}function eo(c){c.g&&(ds(c),c.g.cancel(),c.g=null)}function vu(c){eo(c),c.u&&(p.clearTimeout(c.u),c.u=null),no(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&p.clearTimeout(c.s),c.s=null)}function to(c){if(!Gs(c.h)&&!c.s){c.s=!0;var m=c.Ga;oe||x(),fe||(oe(),fe=!0),je.add(m,c),c.B=0}}function zh(c,m){return Ws(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=m.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=gt(k(c.Ga,c,m),ka(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const U=new $t(this,this.j,c);let F=this.o;if(this.S&&(F?(F=A(F),N(F,this.S)):F=this.S),this.m!==null||this.O||(U.H=F,F=null),this.P)e:{for(var m=0,v=0;v<this.i.length;v++){t:{var T=this.i[v];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(m+=T,4096<m){m=v;break e}if(m===4096||v===this.i.length-1){m=v+1;break e}}m=1e3}else m=1e3;m=wu(this,U,m),v=an(this.I),Ye(v,"RID",c),Ye(v,"CVER",22),this.D&&Ye(v,"X-HTTP-Session-Id",this.D),hs(this,v),F&&(this.O?m="headers="+encodeURIComponent(String(Aa(F)))+"&"+m:this.m&&It(v,this.m,F)),Ys(this.h,U),this.Ua&&Ye(v,"TYPE","init"),this.P?(Ye(v,"$req",m),Ye(v,"SID","null"),U.T=!0,Nn(U,v,null)):Nn(U,v,m),this.G=2}}else this.G==3&&(c?Ca(this,c):this.i.length==0||Gs(this.h)||Ca(this))};function Ca(c,m){var v;m?v=m.l:v=c.U++;const T=an(c.I);Ye(T,"SID",c.K),Ye(T,"RID",v),Ye(T,"AID",c.T),hs(c,T),c.m&&c.o&&It(T,c.m,c.o),v=new $t(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),m&&(c.i=m.D.concat(c.i)),m=wu(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Ys(c.h,v),Nn(v,T,m)}function hs(c,m){c.H&&ve(c.H,function(v,T){Ye(m,T,v)}),c.l&&_a({},function(v,T){Ye(m,T,v)})}function wu(c,m,v){v=Math.min(c.i.length,v);var T=c.l?k(c.l.Na,c.l,c):null;e:{var U=c.i;let F=-1;for(;;){const se=["count="+v];F==-1?0<v?(F=U[0].g,se.push("ofs="+F)):F=0:se.push("ofs="+F);let Oe=!0;for(let bt=0;bt<v;bt++){let Pe=U[bt].g;const kt=U[bt].map;if(Pe-=F,0>Pe)F=Math.max(0,U[bt].g-100),Oe=!1;else try{Wn(kt,se,"req"+Pe+"_")}catch{T&&T(kt)}}if(Oe){T=se.join("&");break e}}}return c=c.i.splice(0,v),m.D=c,T}function _u(c){if(!c.g&&!c.u){c.Y=1;var m=c.Fa;oe||x(),fe||(oe(),fe=!0),je.add(m,c),c.v=0}}function Ia(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=gt(k(c.Fa,c),ka(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,bu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=gt(k(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,et(10),eo(this),bu(this))};function ds(c){c.A!=null&&(p.clearTimeout(c.A),c.A=null)}function bu(c){c.g=new $t(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var m=an(c.qa);Ye(m,"RID","rpc"),Ye(m,"SID",c.K),Ye(m,"AID",c.T),Ye(m,"CI",c.F?"0":"1"),!c.F&&c.ja&&Ye(m,"TO",c.ja),Ye(m,"TYPE","xmlhttp"),hs(c,m),c.m&&c.o&&It(m,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=rs(an(m)),v.m=null,v.P=!0,yi(v,c)}r.Za=function(){this.C!=null&&(this.C=null,eo(this),Ia(this),et(19))};function no(c){c.C!=null&&(p.clearTimeout(c.C),c.C=null)}function Tu(c,m){var v=null;if(c.g==m){no(c),ds(c),c.g=null;var T=2}else if(va(c.h,m))v=m.D,Jt(c.h,m),T=1;else return;if(c.G!=0){if(m.o)if(T==1){v=m.m?m.m.length:0,m=Date.now()-m.F;var U=c.B;T=er(),He(T,new _t(T,v)),to(c)}else _u(c);else if(U=m.s,U==3||U==0&&0<m.X||!(T==1&&zh(c,m)||T==2&&Ia(c)))switch(v&&0<v.length&&(m=c.h,m.i=m.i.concat(v)),U){case 1:Si(c,5);break;case 4:Si(c,10);break;case 3:Si(c,6);break;default:Si(c,2)}}}function ka(c,m){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*m}function Si(c,m){if(c.j.info("Error code "+m),m==2){var v=k(c.fb,c),T=c.Xa;const U=!T;T=new mt(T||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||is(T,"https"),rs(T),U?os(T.toString(),v):Mn(T.toString(),v)}else et(2);c.G=0,c.l&&c.l.sa(m),Eu(c),vu(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function Eu(c){if(c.G=0,c.ka=[],c.l){const m=wa(c.h);(m.length!=0||c.i.length!=0)&&(G(c.ka,m),G(c.ka,c.i),c.h.i.length=0,$(c.i),c.i.length=0),c.l.ra()}}function Su(c,m,v){var T=v instanceof mt?an(v):new mt(v);if(T.g!="")m&&(T.g=m+"."+T.g),sr(T,T.s);else{var U=p.location;T=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;var F=new mt(null);T&&is(F,T),m&&(F.g=m),U&&sr(F,U),v&&(F.l=v),T=F}return v=c.D,m=c.ya,v&&m&&Ye(T,v,m),Ye(T,"VER",c.la),hs(c,T),T}function Au(c,m,v){if(m&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Ca&&!c.pa?new qe(new or({eb:v})):new qe(c.pa),m.Ha(c.J),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ru(){}r=Ru.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function io(){}io.prototype.g=function(c,m){return new Zt(c,m)};function Zt(c,m){ot.call(this),this.g=new Zs(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(c?c["X-WebChannel-Client-Profile"]=m.va:c={"X-WebChannel-Client-Profile":m.va}),this.g.S=c,(c=m&&m.Sb)&&!ee(c)&&(this.g.m=c),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!ee(m)&&(this.g.D=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new Xn(this)}W(Zt,ot),Zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Zt.prototype.close=function(){Ra(this.g)},Zt.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=Dn(c),c=v);m.i.push(new fu(m.Ya++,c)),m.G==3&&to(m)},Zt.prototype.N=function(){this.g.l=null,delete this.j,Ra(this.g),delete this.g,Zt.aa.N.call(this)};function Cu(c){gi.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){e:{for(const v in m){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}W(Cu,gi);function Iu(){pa.call(this),this.status=1}W(Iu,pa);function Xn(c){this.g=c}W(Xn,Ru),Xn.prototype.ua=function(){He(this.g,"a")},Xn.prototype.ta=function(c){He(this.g,new Cu(c))},Xn.prototype.sa=function(c){He(this.g,new Iu)},Xn.prototype.ra=function(){He(this.g,"b")},io.prototype.createWebChannel=io.prototype.g,Zt.prototype.send=Zt.prototype.o,Zt.prototype.open=Zt.prototype.m,Zt.prototype.close=Zt.prototype.close,yb=function(){return new io},mb=function(){return er()},gb=Bn,lp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ir.NO_ERROR=0,ir.TIMEOUT=8,ir.HTTP_ERROR=6,Bc=ir,mi.COMPLETE="complete",pb=mi,fa.EventType=pi,pi.OPEN="a",pi.CLOSE="b",pi.ERROR="c",pi.MESSAGE="d",ot.prototype.listen=ot.prototype.K,El=fa,qe.prototype.listenOnce=qe.prototype.L,qe.prototype.getLastError=qe.prototype.Ka,qe.prototype.getLastErrorCode=qe.prototype.Ba,qe.prototype.getStatus=qe.prototype.Z,qe.prototype.getResponseJson=qe.prototype.Oa,qe.prototype.getResponseText=qe.prototype.oa,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Ha,fb=qe}).apply(typeof Dc<"u"?Dc:typeof self<"u"?self:typeof window<"u"?window:{});const ww="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Kt.UNAUTHENTICATED=new Kt(null),Kt.GOOGLE_CREDENTIALS=new Kt("google-credentials-uid"),Kt.FIRST_PARTY=new Kt("first-party-uid"),Kt.MOCK_USER=new Kt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ta="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=new kp("@firebase/firestore");function wl(){return Ps.logLevel}function ue(r,...e){if(Ps.logLevel<=Me.DEBUG){const n=e.map(Bp);Ps.debug(`Firestore (${ta}): ${r}`,...n)}}function Ki(r,...e){if(Ps.logLevel<=Me.ERROR){const n=e.map(Bp);Ps.error(`Firestore (${ta}): ${r}`,...n)}}function qo(r,...e){if(Ps.logLevel<=Me.WARN){const n=e.map(Bp);Ps.warn(`Firestore (${ta}): ${r}`,...n)}}function Bp(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(r="Unexpected state"){const e=`FIRESTORE (${ta}) INTERNAL ASSERTION FAILED: `+r;throw Ki(e),new Error(e)}function We(r,e){r||Ee()}function Ae(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class me extends Xi{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class z1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Kt.UNAUTHENTICATED)))}shutdown(){}}class j1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class B1{constructor(e){this.t=e,this.currentUser=Kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){We(this.o===void 0);let s=this.i;const a=g=>this.i!==s?(s=this.i,n(g)):Promise.resolve();let u=new zr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new zr,e.enqueueRetryable((()=>a(this.currentUser)))};const d=()=>{const g=u;e.enqueueRetryable((async()=>{await g.promise,await a(this.currentUser)}))},p=g=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit((g=>p(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?p(g):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new zr)}}),0),d()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(We(typeof s.accessToken=="string"),new vb(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return We(e===null||typeof e=="string"),new Kt(e)}}class q1{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=Kt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class H1{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new q1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable((()=>n(Kt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class F1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class G1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){We(this.o===void 0);const s=u=>{u.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const d=u.token!==this.R;return this.R=u.token,ue("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?n(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const a=u=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((u=>a(u))),setTimeout((()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?a(u):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(We(typeof n.token=="string"),this.R=n.token,new F1(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W1(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const a=W1(40);for(let u=0;u<a.length;++u)s.length<20&&a[u]<n&&(s+=e.charAt(a[u]%e.length))}return s}}function ze(r,e){return r<e?-1:r>e?1:0}function Ho(r,e,n){return r.length===e.length&&r.every(((s,a)=>n(s,e[a])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new me(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new me(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new me(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new me(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Rt.fromMillis(Date.now())}static fromDate(e){return Rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Rt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ze(this.nanoseconds,e.nanoseconds):ze(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Se(e)}static min(){return new Se(new Rt(0,0))}static max(){return new Se(new Rt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n,s){n===void 0?n=0:n>e.length&&Ee(),s===void 0?s=e.length-n:s>e.length-n&&Ee(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Vl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Vl?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let a=0;a<s;a++){const u=e.get(a),d=n.get(a);if(u<d)return-1;if(u>d)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ut extends Vl{construct(e,n,s){return new ut(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new me(te.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((a=>a.length>0)))}return new ut(n)}static emptyPath(){return new ut([])}}const Y1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Bt extends Vl{construct(e,n,s){return new Bt(e,n,s)}static isValidIdentifier(e){return Y1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Bt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Bt(["__name__"])}static fromServerFormat(e){const n=[];let s="",a=0;const u=()=>{if(s.length===0)throw new me(te.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let d=!1;for(;a<e.length;){const p=e[a];if(p==="\\"){if(a+1===e.length)throw new me(te.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[a+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new me(te.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,a+=2}else p==="`"?(d=!d,a++):p!=="."||d?(s+=p,a++):(u(),a++)}if(u(),d)throw new me(te.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Bt(n)}static emptyPath(){return new Bt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(ut.fromString(e))}static fromName(e){return new ye(ut.fromString(e).popFirst(5))}static empty(){return new ye(ut.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ut.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ut.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new ut(e.slice()))}}function K1(r,e){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,a=Se.fromTimestamp(s===1e9?new Rt(n+1,0):new Rt(n,s));return new jr(a,ye.empty(),e)}function Q1(r){return new jr(r.readTime,r.key,-1)}class jr{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new jr(Se.min(),ye.empty(),-1)}static max(){return new jr(Se.max(),ye.empty(),-1)}}function X1(r,e){let n=r.readTime.compareTo(e.readTime);return n!==0?n:(n=ye.comparator(r.documentKey,e.documentKey),n!==0?n:ze(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class J1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zl(r){if(r.code!==te.FAILED_PRECONDITION||r.message!==$1)throw r;ue("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new Z(((s,a)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,a)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,a)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof Z?n:Z.resolve(n)}catch(n){return Z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):Z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):Z.reject(n)}static resolve(e){return new Z(((n,s)=>{n(e)}))}static reject(e){return new Z(((n,s)=>{s(e)}))}static waitFor(e){return new Z(((n,s)=>{let a=0,u=0,d=!1;e.forEach((p=>{++a,p.next((()=>{++u,d&&u===a&&n()}),(g=>s(g)))})),d=!0,u===a&&n()}))}static or(e){let n=Z.resolve(!1);for(const s of e)n=n.next((a=>a?Z.resolve(a):s()));return n}static forEach(e,n){const s=[];return e.forEach(((a,u)=>{s.push(n.call(this,a,u))})),this.waitFor(s)}static mapArray(e,n){return new Z(((s,a)=>{const u=e.length,d=new Array(u);let p=0;for(let g=0;g<u;g++){const y=g;n(e[y]).next((_=>{d[y]=_,++p,p===u&&s(d)}),(_=>a(_)))}}))}static doWhile(e,n){return new Z(((s,a)=>{const u=()=>{e()===!0?n().next((()=>{u()}),a):s()};u()}))}}function Z1(r){const e=r.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function eu(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ie(s),this.se=s=>n.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}qp.oe=-1;function wh(r){return r==null}function th(r){return r===0&&1/r==-1/0}function eI(r){return typeof r=="number"&&Number.isInteger(r)&&!th(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(r){let e=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e++;return e}function na(r,e){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e(n,r[n])}function _b(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n){this.comparator=e,this.root=n||jt.EMPTY}insert(e,n){return new rt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,jt.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,jt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return n+s.left.size;a<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Nc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Nc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Nc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Nc(this.root,e,this.comparator,!0)}}class Nc{constructor(e,n,s,a){this.isReverse=a,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=n?s(e.key,n):1,n&&a&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class jt{constructor(e,n,s,a,u){this.key=e,this.value=n,this.color=s??jt.RED,this.left=a??jt.EMPTY,this.right=u??jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,a,u){return new jt(e??this.key,n??this.value,s??this.color,a??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let a=this;const u=s(e,a.key);return a=u<0?a.copy(null,null,null,a.left.insert(e,n,s),null):u===0?a.copy(null,n,null,null,null):a.copy(null,null,null,null,a.right.insert(e,n,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return jt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,a=this;if(n(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,n),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),n(e,a.key)===0){if(a.right.isEmpty())return jt.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,n))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ee();const e=this.left.check();if(e!==this.right.check())throw Ee();return e+(this.isRed()?0:1)}}jt.EMPTY=null,jt.RED=!0,jt.BLACK=!1;jt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee()}get value(){throw Ee()}get color(){throw Ee()}get left(){throw Ee()}get right(){throw Ee()}copy(e,n,s,a,u){return this}insert(e,n,s){return new jt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;n(a.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new bw(this.data.getIterator())}getIteratorFrom(e){return new bw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof qt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const a=n.getNext().key,u=s.getNext().key;if(this.comparator(a,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new qt(this.comparator);return n.data=e,n}}class bw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.fields=e,e.sort(Bt.comparator)}static empty(){return new Ln([])}unionWith(e){let n=new qt(Bt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ln(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ho(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(a){try{return atob(a)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new bb("Invalid base64 string: "+u):u}})(e);return new Ht(n)}static fromUint8Array(e){const n=(function(a){let u="";for(let d=0;d<a.length;++d)u+=String.fromCharCode(a[d]);return u})(e);return new Ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let a=0;a<n.length;a++)s[a]=n.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ze(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ht.EMPTY_BYTE_STRING=new Ht("");const tI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Br(r){if(We(!!r),typeof r=="string"){let e=0;const n=tI.exec(r);if(We(!!n),n[1]){let a=n[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:pt(r.seconds),nanos:pt(r.nanos)}}function pt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Vs(r){return typeof r=="string"?Ht.fromBase64String(r):Ht.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(r){var e,n;return((n=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Fp(r){const e=r.mapValue.fields.__previous_value__;return Hp(e)?Fp(e):e}function Ll(r){const e=Br(r.mapValue.fields.__local_write_time__.timestampValue);return new Rt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,n,s,a,u,d,p,g,y){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=a,this.ssl=u,this.forceLongPolling=d,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=y}}class Ul{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ul("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ul&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc={mapValue:{}};function Ls(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Hp(r)?4:rI(r)?9007199254740991:iI(r)?10:11:Ee()}function ci(r,e){if(r===e)return!0;const n=Ls(r);if(n!==Ls(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ll(r).isEqual(Ll(e));case 3:return(function(a,u){if(typeof a.timestampValue=="string"&&typeof u.timestampValue=="string"&&a.timestampValue.length===u.timestampValue.length)return a.timestampValue===u.timestampValue;const d=Br(a.timestampValue),p=Br(u.timestampValue);return d.seconds===p.seconds&&d.nanos===p.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(a,u){return Vs(a.bytesValue).isEqual(Vs(u.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(a,u){return pt(a.geoPointValue.latitude)===pt(u.geoPointValue.latitude)&&pt(a.geoPointValue.longitude)===pt(u.geoPointValue.longitude)})(r,e);case 2:return(function(a,u){if("integerValue"in a&&"integerValue"in u)return pt(a.integerValue)===pt(u.integerValue);if("doubleValue"in a&&"doubleValue"in u){const d=pt(a.doubleValue),p=pt(u.doubleValue);return d===p?th(d)===th(p):isNaN(d)&&isNaN(p)}return!1})(r,e);case 9:return Ho(r.arrayValue.values||[],e.arrayValue.values||[],ci);case 10:case 11:return(function(a,u){const d=a.mapValue.fields||{},p=u.mapValue.fields||{};if(_w(d)!==_w(p))return!1;for(const g in d)if(d.hasOwnProperty(g)&&(p[g]===void 0||!ci(d[g],p[g])))return!1;return!0})(r,e);default:return Ee()}}function zl(r,e){return(r.values||[]).find((n=>ci(n,e)))!==void 0}function Fo(r,e){if(r===e)return 0;const n=Ls(r),s=Ls(e);if(n!==s)return ze(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ze(r.booleanValue,e.booleanValue);case 2:return(function(u,d){const p=pt(u.integerValue||u.doubleValue),g=pt(d.integerValue||d.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1})(r,e);case 3:return Tw(r.timestampValue,e.timestampValue);case 4:return Tw(Ll(r),Ll(e));case 5:return ze(r.stringValue,e.stringValue);case 6:return(function(u,d){const p=Vs(u),g=Vs(d);return p.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(u,d){const p=u.split("/"),g=d.split("/");for(let y=0;y<p.length&&y<g.length;y++){const _=ze(p[y],g[y]);if(_!==0)return _}return ze(p.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(u,d){const p=ze(pt(u.latitude),pt(d.latitude));return p!==0?p:ze(pt(u.longitude),pt(d.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Ew(r.arrayValue,e.arrayValue);case 10:return(function(u,d){var p,g,y,_;const S=u.fields||{},k=d.fields||{},L=(p=S.value)===null||p===void 0?void 0:p.arrayValue,W=(g=k.value)===null||g===void 0?void 0:g.arrayValue,$=ze(((y=L?.values)===null||y===void 0?void 0:y.length)||0,((_=W?.values)===null||_===void 0?void 0:_.length)||0);return $!==0?$:Ew(L,W)})(r.mapValue,e.mapValue);case 11:return(function(u,d){if(u===Mc.mapValue&&d===Mc.mapValue)return 0;if(u===Mc.mapValue)return 1;if(d===Mc.mapValue)return-1;const p=u.fields||{},g=Object.keys(p),y=d.fields||{},_=Object.keys(y);g.sort(),_.sort();for(let S=0;S<g.length&&S<_.length;++S){const k=ze(g[S],_[S]);if(k!==0)return k;const L=Fo(p[g[S]],y[_[S]]);if(L!==0)return L}return ze(g.length,_.length)})(r.mapValue,e.mapValue);default:throw Ee()}}function Tw(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return ze(r,e);const n=Br(r),s=Br(e),a=ze(n.seconds,s.seconds);return a!==0?a:ze(n.nanos,s.nanos)}function Ew(r,e){const n=r.values||[],s=e.values||[];for(let a=0;a<n.length&&a<s.length;++a){const u=Fo(n[a],s[a]);if(u)return u}return ze(n.length,s.length)}function Go(r){return up(r)}function up(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(n){const s=Br(n);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(n){return Vs(n).toBase64()})(r.bytesValue):"referenceValue"in r?(function(n){return ye.fromName(n).toString()})(r.referenceValue):"geoPointValue"in r?(function(n){return`geo(${n.latitude},${n.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(n){let s="[",a=!0;for(const u of n.values||[])a?a=!1:s+=",",s+=up(u);return s+"]"})(r.arrayValue):"mapValue"in r?(function(n){const s=Object.keys(n.fields||{}).sort();let a="{",u=!0;for(const d of s)u?u=!1:a+=",",a+=`${d}:${up(n.fields[d])}`;return a+"}"})(r.mapValue):Ee()}function cp(r){return!!r&&"integerValue"in r}function Gp(r){return!!r&&"arrayValue"in r}function Sw(r){return!!r&&"nullValue"in r}function Aw(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function qc(r){return!!r&&"mapValue"in r}function iI(r){var e,n;return((n=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Il(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return na(r.mapValue.fields,((n,s)=>e.mapValue.fields[n]=Il(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Il(r.arrayValue.values[n]);return e}return Object.assign({},r)}function rI(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.value=e}static empty(){return new kn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!qc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Il(n)}setAll(e){let n=Bt.emptyPath(),s={},a=[];e.forEach(((d,p)=>{if(!n.isImmediateParentOf(p)){const g=this.getFieldsMap(n);this.applyChanges(g,s,a),s={},a=[],n=p.popLast()}d?s[p.lastSegment()]=Il(d):a.push(p.lastSegment())}));const u=this.getFieldsMap(n);this.applyChanges(u,s,a)}delete(e){const n=this.field(e.popLast());qc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ci(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=n.mapValue.fields[e.get(s)];qc(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=a),n=a}return n.mapValue.fields}applyChanges(e,n,s){na(n,((a,u)=>e[a]=u));for(const a of s)delete e[a]}clone(){return new kn(Il(this.value))}}function Tb(r){const e=[];return na(r.fields,((n,s)=>{const a=new Bt([n]);if(qc(s)){const u=Tb(s.mapValue).fields;if(u.length===0)e.push(a);else for(const d of u)e.push(a.child(d))}else e.push(a)})),new Ln(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n,s,a,u,d,p){this.key=e,this.documentType=n,this.version=s,this.readTime=a,this.createTime=u,this.data=d,this.documentState=p}static newInvalidDocument(e){return new Qt(e,0,Se.min(),Se.min(),Se.min(),kn.empty(),0)}static newFoundDocument(e,n,s,a){return new Qt(e,1,n,Se.min(),s,a,0)}static newNoDocument(e,n){return new Qt(e,2,n,Se.min(),Se.min(),kn.empty(),0)}static newUnknownDocument(e,n){return new Qt(e,3,n,Se.min(),Se.min(),kn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,n){this.position=e,this.inclusive=n}}function Rw(r,e,n){let s=0;for(let a=0;a<r.position.length;a++){const u=e[a],d=r.position[a];if(u.field.isKeyField()?s=ye.comparator(ye.fromName(d.referenceValue),n.key):s=Fo(d,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Cw(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!ci(r.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,n="asc"){this.field=e,this.dir=n}}function sI(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{}class At extends Eb{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new aI(e,n,s):n==="array-contains"?new cI(e,s):n==="in"?new hI(e,s):n==="not-in"?new dI(e,s):n==="array-contains-any"?new fI(e,s):new At(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new lI(e,s):new uI(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Fo(n,this.value)):n!==null&&Ls(this.value)===Ls(n)&&this.matchesComparison(Fo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hi extends Eb{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new hi(e,n)}matches(e){return Sb(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Sb(r){return r.op==="and"}function Ab(r){return oI(r)&&Sb(r)}function oI(r){for(const e of r.filters)if(e instanceof hi)return!1;return!0}function hp(r){if(r instanceof At)return r.field.canonicalString()+r.op.toString()+Go(r.value);if(Ab(r))return r.filters.map((e=>hp(e))).join(",");{const e=r.filters.map((n=>hp(n))).join(",");return`${r.op}(${e})`}}function Rb(r,e){return r instanceof At?(function(s,a){return a instanceof At&&s.op===a.op&&s.field.isEqual(a.field)&&ci(s.value,a.value)})(r,e):r instanceof hi?(function(s,a){return a instanceof hi&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((u,d,p)=>u&&Rb(d,a.filters[p])),!0):!1})(r,e):void Ee()}function Cb(r){return r instanceof At?(function(n){return`${n.field.canonicalString()} ${n.op} ${Go(n.value)}`})(r):r instanceof hi?(function(n){return n.op.toString()+" {"+n.getFilters().map(Cb).join(" ,")+"}"})(r):"Filter"}class aI extends At{constructor(e,n,s){super(e,n,s),this.key=ye.fromName(s.referenceValue)}matches(e){const n=ye.comparator(e.key,this.key);return this.matchesComparison(n)}}class lI extends At{constructor(e,n){super(e,"in",n),this.keys=Ib("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class uI extends At{constructor(e,n){super(e,"not-in",n),this.keys=Ib("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Ib(r,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((s=>ye.fromName(s.referenceValue)))}class cI extends At{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gp(n)&&zl(n.arrayValue,this.value)}}class hI extends At{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&zl(this.value.arrayValue,n)}}class dI extends At{constructor(e,n){super(e,"not-in",n)}matches(e){if(zl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!zl(this.value.arrayValue,n)}}class fI extends At{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gp(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>zl(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,n=null,s=[],a=[],u=null,d=null,p=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=a,this.limit=u,this.startAt=d,this.endAt=p,this.ue=null}}function Iw(r,e=null,n=[],s=[],a=null,u=null,d=null){return new pI(r,e,n,s,a,u,d)}function Wp(r){const e=Ae(r);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>hp(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),wh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>Go(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>Go(s))).join(",")),e.ue=n}return e.ue}function Yp(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!sI(r.orderBy[n],e.orderBy[n]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!Rb(r.filters[n],e.filters[n]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Cw(r.startAt,e.startAt)&&Cw(r.endAt,e.endAt)}function dp(r){return ye.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e,n=null,s=[],a=[],u=null,d="F",p=null,g=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=a,this.limit=u,this.limitType=d,this.startAt=p,this.endAt=g,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function gI(r,e,n,s,a,u,d,p){return new _h(r,e,n,s,a,u,d,p)}function Kp(r){return new _h(r)}function kw(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function mI(r){return r.collectionGroup!==null}function kl(r){const e=Ae(r);if(e.ce===null){e.ce=[];const n=new Set;for(const u of e.explicitOrderBy)e.ce.push(u),n.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(d){let p=new qt(Bt.comparator);return d.filters.forEach((g=>{g.getFlattenedFilters().forEach((y=>{y.isInequality()&&(p=p.add(y.field))}))})),p})(e).forEach((u=>{n.has(u.canonicalString())||u.isKeyField()||e.ce.push(new ih(u,s))})),n.has(Bt.keyField().canonicalString())||e.ce.push(new ih(Bt.keyField(),s))}return e.ce}function ai(r){const e=Ae(r);return e.le||(e.le=yI(e,kl(r))),e.le}function yI(r,e){if(r.limitType==="F")return Iw(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((a=>{const u=a.dir==="desc"?"asc":"desc";return new ih(a.field,u)}));const n=r.endAt?new nh(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new nh(r.startAt.position,r.startAt.inclusive):null;return Iw(r.path,r.collectionGroup,e,r.filters,r.limit,n,s)}}function fp(r,e,n){return new _h(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,n,r.startAt,r.endAt)}function bh(r,e){return Yp(ai(r),ai(e))&&r.limitType===e.limitType}function kb(r){return`${Wp(ai(r))}|lt:${r.limitType}`}function Mo(r){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((a=>Cb(a))).join(", ")}]`),wh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((a=>(function(d){return`${d.field.canonicalString()} (${d.dir})`})(a))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((a=>Go(a))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((a=>Go(a))).join(",")),`Target(${s})`})(ai(r))}; limitType=${r.limitType})`}function Th(r,e){return e.isFoundDocument()&&(function(s,a){const u=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ye.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(r,e)&&(function(s,a){for(const u of kl(s))if(!u.field.isKeyField()&&a.data.field(u.field)===null)return!1;return!0})(r,e)&&(function(s,a){for(const u of s.filters)if(!u.matches(a))return!1;return!0})(r,e)&&(function(s,a){return!(s.startAt&&!(function(d,p,g){const y=Rw(d,p,g);return d.inclusive?y<=0:y<0})(s.startAt,kl(s),a)||s.endAt&&!(function(d,p,g){const y=Rw(d,p,g);return d.inclusive?y>=0:y>0})(s.endAt,kl(s),a))})(r,e)}function vI(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function xb(r){return(e,n)=>{let s=!1;for(const a of kl(r)){const u=wI(a,e,n);if(u!==0)return u;s=s||a.field.isKeyField()}return 0}}function wI(r,e,n){const s=r.field.isKeyField()?ye.comparator(e.key,n.key):(function(u,d,p){const g=d.data.field(u),y=p.data.field(u);return g!==null&&y!==null?Fo(g,y):Ee()})(r.field,e,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[a,u]of s)if(this.equalsFn(a,e))return u}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let u=0;u<a.length;u++)if(this.equalsFn(a[u][0],e))return void(a[u]=[e,n]);a.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[n]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){na(this.inner,((n,s)=>{for(const[a,u]of s)e(a,u)}))}isEmpty(){return _b(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=new rt(ye.comparator);function Qi(){return _I}const Db=new rt(ye.comparator);function Sl(...r){let e=Db;for(const n of r)e=e.insert(n.key,n);return e}function Nb(r){let e=Db;return r.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function xs(){return xl()}function Mb(){return xl()}function xl(){return new ia((r=>r.toString()),((r,e)=>r.isEqual(e)))}const bI=new rt(ye.comparator),TI=new qt(ye.comparator);function Ne(...r){let e=TI;for(const n of r)e=e.add(n);return e}const EI=new qt(ze);function SI(){return EI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:th(e)?"-0":e}}function Ob(r){return{integerValue:""+r}}function AI(r,e){return eI(e)?Ob(e):Qp(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(){this._=void 0}}function RI(r,e,n){return r instanceof rh?(function(a,u){const d={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return u&&Hp(u)&&(u=Fp(u)),u&&(d.fields.__previous_value__=u),{mapValue:d}})(n,e):r instanceof jl?Vb(r,e):r instanceof Bl?Lb(r,e):(function(a,u){const d=Pb(a,u),p=xw(d)+xw(a.Pe);return cp(d)&&cp(a.Pe)?Ob(p):Qp(a.serializer,p)})(r,e)}function CI(r,e,n){return r instanceof jl?Vb(r,e):r instanceof Bl?Lb(r,e):n}function Pb(r,e){return r instanceof sh?(function(s){return cp(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class rh extends Eh{}class jl extends Eh{constructor(e){super(),this.elements=e}}function Vb(r,e){const n=Ub(e);for(const s of r.elements)n.some((a=>ci(a,s)))||n.push(s);return{arrayValue:{values:n}}}class Bl extends Eh{constructor(e){super(),this.elements=e}}function Lb(r,e){let n=Ub(e);for(const s of r.elements)n=n.filter((a=>!ci(a,s)));return{arrayValue:{values:n}}}class sh extends Eh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function xw(r){return pt(r.integerValue||r.doubleValue)}function Ub(r){return Gp(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function II(r,e){return r.field.isEqual(e.field)&&(function(s,a){return s instanceof jl&&a instanceof jl||s instanceof Bl&&a instanceof Bl?Ho(s.elements,a.elements,ci):s instanceof sh&&a instanceof sh?ci(s.Pe,a.Pe):s instanceof rh&&a instanceof rh})(r.transform,e.transform)}class kI{constructor(e,n){this.version=e,this.transformResults=n}}class Fi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Fi}static exists(e){return new Fi(void 0,e)}static updateTime(e){return new Fi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hc(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Sh{}function zb(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Bb(r.key,Fi.none()):new tu(r.key,r.data,Fi.none());{const n=r.data,s=kn.empty();let a=new qt(Bt.comparator);for(let u of e.fields)if(!a.has(u)){let d=n.field(u);d===null&&u.length>1&&(u=u.popLast(),d=n.field(u)),d===null?s.delete(u):s.set(u,d),a=a.add(u)}return new Us(r.key,s,new Ln(a.toArray()),Fi.none())}}function xI(r,e,n){r instanceof tu?(function(a,u,d){const p=a.value.clone(),g=Nw(a.fieldTransforms,u,d.transformResults);p.setAll(g),u.convertToFoundDocument(d.version,p).setHasCommittedMutations()})(r,e,n):r instanceof Us?(function(a,u,d){if(!Hc(a.precondition,u))return void u.convertToUnknownDocument(d.version);const p=Nw(a.fieldTransforms,u,d.transformResults),g=u.data;g.setAll(jb(a)),g.setAll(p),u.convertToFoundDocument(d.version,g).setHasCommittedMutations()})(r,e,n):(function(a,u,d){u.convertToNoDocument(d.version).setHasCommittedMutations()})(0,e,n)}function Dl(r,e,n,s){return r instanceof tu?(function(u,d,p,g){if(!Hc(u.precondition,d))return p;const y=u.value.clone(),_=Mw(u.fieldTransforms,g,d);return y.setAll(_),d.convertToFoundDocument(d.version,y).setHasLocalMutations(),null})(r,e,n,s):r instanceof Us?(function(u,d,p,g){if(!Hc(u.precondition,d))return p;const y=Mw(u.fieldTransforms,g,d),_=d.data;return _.setAll(jb(u)),_.setAll(y),d.convertToFoundDocument(d.version,_).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((S=>S.field)))})(r,e,n,s):(function(u,d,p){return Hc(u.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):p})(r,e,n)}function DI(r,e){let n=null;for(const s of r.fieldTransforms){const a=e.data.field(s.field),u=Pb(s.transform,a||null);u!=null&&(n===null&&(n=kn.empty()),n.set(s.field,u))}return n||null}function Dw(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&Ho(s,a,((u,d)=>II(u,d)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class tu extends Sh{constructor(e,n,s,a=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Us extends Sh{constructor(e,n,s,a,u=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=a,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function jb(r){const e=new Map;return r.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=r.data.field(n);e.set(n,s)}})),e}function Nw(r,e,n){const s=new Map;We(r.length===n.length);for(let a=0;a<n.length;a++){const u=r[a],d=u.transform,p=e.data.field(u.field);s.set(u.field,CI(d,p,n[a]))}return s}function Mw(r,e,n){const s=new Map;for(const a of r){const u=a.transform,d=n.data.field(a.field);s.set(a.field,RI(u,d,e))}return s}class Bb extends Sh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class NI extends Sh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e,n,s,a){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let a=0;a<this.mutations.length;a++){const u=this.mutations[a];u.key.isEqual(e.key)&&xI(u,e,s[a])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Dl(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Dl(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Mb();return this.mutations.forEach((a=>{const u=e.get(a.key),d=u.overlayedDocument;let p=this.applyToLocalView(d,u.mutatedFields);p=n.has(a.key)?null:p;const g=zb(d,p);g!==null&&s.set(a.key,g),d.isValidDocument()||d.convertToNoDocument(Se.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Ne())}isEqual(e){return this.batchId===e.batchId&&Ho(this.mutations,e.mutations,((n,s)=>Dw(n,s)))&&Ho(this.baseMutations,e.baseMutations,((n,s)=>Dw(n,s)))}}class Xp{constructor(e,n,s,a){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=a}static from(e,n,s){We(e.mutations.length===s.length);let a=(function(){return bI})();const u=e.mutations;for(let d=0;d<u.length;d++)a=a.insert(u[d].key,s[d].version);return new Xp(e,n,s,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt,Le;function VI(r){switch(r){default:return Ee();case te.CANCELLED:case te.UNKNOWN:case te.DEADLINE_EXCEEDED:case te.RESOURCE_EXHAUSTED:case te.INTERNAL:case te.UNAVAILABLE:case te.UNAUTHENTICATED:return!1;case te.INVALID_ARGUMENT:case te.NOT_FOUND:case te.ALREADY_EXISTS:case te.PERMISSION_DENIED:case te.FAILED_PRECONDITION:case te.ABORTED:case te.OUT_OF_RANGE:case te.UNIMPLEMENTED:case te.DATA_LOSS:return!0}}function qb(r){if(r===void 0)return Ki("GRPC error has no .code"),te.UNKNOWN;switch(r){case wt.OK:return te.OK;case wt.CANCELLED:return te.CANCELLED;case wt.UNKNOWN:return te.UNKNOWN;case wt.DEADLINE_EXCEEDED:return te.DEADLINE_EXCEEDED;case wt.RESOURCE_EXHAUSTED:return te.RESOURCE_EXHAUSTED;case wt.INTERNAL:return te.INTERNAL;case wt.UNAVAILABLE:return te.UNAVAILABLE;case wt.UNAUTHENTICATED:return te.UNAUTHENTICATED;case wt.INVALID_ARGUMENT:return te.INVALID_ARGUMENT;case wt.NOT_FOUND:return te.NOT_FOUND;case wt.ALREADY_EXISTS:return te.ALREADY_EXISTS;case wt.PERMISSION_DENIED:return te.PERMISSION_DENIED;case wt.FAILED_PRECONDITION:return te.FAILED_PRECONDITION;case wt.ABORTED:return te.ABORTED;case wt.OUT_OF_RANGE:return te.OUT_OF_RANGE;case wt.UNIMPLEMENTED:return te.UNIMPLEMENTED;case wt.DATA_LOSS:return te.DATA_LOSS;default:return Ee()}}(Le=wt||(wt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=new Ds([4294967295,4294967295],0);function Ow(r){const e=LI().encode(r),n=new db;return n.update(e),new Uint8Array(n.digest())}function Pw(r){const e=new DataView(r.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Ds([n,s],0),new Ds([a,u],0)]}class $p{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Al(`Invalid padding: ${n}`);if(s<0)throw new Al(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Al(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Al(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ds.fromNumber(this.Ie)}Ee(e,n,s){let a=e.add(n.multiply(Ds.fromNumber(s)));return a.compare(UI)===1&&(a=new Ds([a.getBits(0),a.getBits(1)],0)),a.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Ow(e),[s,a]=Pw(n);for(let u=0;u<this.hashCount;u++){const d=this.Ee(s,a,u);if(!this.de(d))return!1}return!0}static create(e,n,s){const a=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),d=new $p(u,a,n);return s.forEach((p=>d.insert(p))),d}insert(e){if(this.Ie===0)return;const n=Ow(e),[s,a]=Pw(n);for(let u=0;u<this.hashCount;u++){const d=this.Ee(s,a,u);this.Ae(d)}}Ae(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Al extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,n,s,a,u){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const a=new Map;return a.set(e,nu.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ah(Se.min(),a,new rt(ze),Qi(),Ne())}}class nu{constructor(e,n,s,a,u){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new nu(s,n,Ne(),Ne(),Ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,n,s,a){this.Re=e,this.removedTargetIds=n,this.key=s,this.Ve=a}}class Hb{constructor(e,n){this.targetId=e,this.me=n}}class Fb{constructor(e,n,s=Ht.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=a}}class Vw{constructor(){this.fe=0,this.ge=Uw(),this.pe=Ht.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ne(),n=Ne(),s=Ne();return this.ge.forEach(((a,u)=>{switch(u){case 0:e=e.add(a);break;case 2:n=n.add(a);break;case 1:s=s.add(a);break;default:Ee()}})),new nu(this.pe,this.ye,e,n,s)}Ce(){this.we=!1,this.ge=Uw()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,We(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class zI{constructor(e){this.Le=e,this.Be=new Map,this.ke=Qi(),this.qe=Lw(),this.Qe=new rt(ze)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,(n=>{const s=this.Ge(n);switch(e.state){case 0:this.ze(n)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),s.De(e.resumeToken));break;default:Ee()}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach(((s,a)=>{this.ze(a)&&n(a)}))}He(e){const n=e.targetId,s=e.me.count,a=this.Je(n);if(a){const u=a.target;if(dp(u))if(s===0){const d=new ye(u.path);this.Ue(n,d,Qt.newNoDocument(d,Se.min()))}else We(s===1);else{const d=this.Ye(n);if(d!==s){const p=this.Ze(e),g=p?this.Xe(p,e,d):1;if(g!==0){this.je(n);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,y)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:u=0}=n;let d,p;try{d=Vs(s).toUint8Array()}catch(g){if(g instanceof bb)return qo("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{p=new $p(d,a,u)}catch(g){return qo(g instanceof Al?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return p.Ie===0?null:p}Xe(e,n,s){return n.me.count===s-this.nt(e,n.targetId)?0:2}nt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let a=0;return s.forEach((u=>{const d=this.Le.tt(),p=`projects/${d.projectId}/databases/${d.database}/documents/${u.path.canonicalString()}`;e.mightContain(p)||(this.Ue(n,u,null),a++)})),a}rt(e){const n=new Map;this.Be.forEach(((u,d)=>{const p=this.Je(d);if(p){if(u.current&&dp(p.target)){const g=new ye(p.target.path);this.ke.get(g)!==null||this.it(d,g)||this.Ue(d,g,Qt.newNoDocument(g,e))}u.be&&(n.set(d,u.ve()),u.Ce())}}));let s=Ne();this.qe.forEach(((u,d)=>{let p=!0;d.forEachWhile((g=>{const y=this.Je(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(s=s.add(u))})),this.ke.forEach(((u,d)=>d.setReadTime(e)));const a=new Ah(e,n,this.Qe,this.ke,s);return this.ke=Qi(),this.qe=Lw(),this.Qe=new rt(ze),a}$e(e,n){if(!this.ze(e))return;const s=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,s),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,s){if(!this.ze(e))return;const a=this.Ge(e);this.it(e,n)?a.Fe(n,1):a.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),s&&(this.ke=this.ke.insert(n,s))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Vw,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new qt(ze),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ue("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Vw),this.Le.getRemoteKeysForTarget(e).forEach((n=>{this.Ue(e,n,null)}))}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Lw(){return new rt(ye.comparator)}function Uw(){return new rt(ye.comparator)}const jI={asc:"ASCENDING",desc:"DESCENDING"},BI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},qI={and:"AND",or:"OR"};class HI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function pp(r,e){return r.useProto3Json||wh(e)?e:{value:e}}function oh(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gb(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function FI(r,e){return oh(r,e.toTimestamp())}function li(r){return We(!!r),Se.fromTimestamp((function(n){const s=Br(n);return new Rt(s.seconds,s.nanos)})(r))}function Jp(r,e){return gp(r,e).canonicalString()}function gp(r,e){const n=(function(a){return new ut(["projects",a.projectId,"databases",a.database])})(r).child("documents");return e===void 0?n:n.child(e)}function Wb(r){const e=ut.fromString(r);return We($b(e)),e}function mp(r,e){return Jp(r.databaseId,e.path)}function Wf(r,e){const n=Wb(e);if(n.get(1)!==r.databaseId.projectId)throw new me(te.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new me(te.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new ye(Kb(n))}function Yb(r,e){return Jp(r.databaseId,e)}function GI(r){const e=Wb(r);return e.length===4?ut.emptyPath():Kb(e)}function yp(r){return new ut(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Kb(r){return We(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function zw(r,e,n){return{name:mp(r,e),fields:n.value.mapValue.fields}}function WI(r,e){let n;if("targetChange"in e){e.targetChange;const s=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Ee()})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],u=(function(y,_){return y.useProto3Json?(We(_===void 0||typeof _=="string"),Ht.fromBase64String(_||"")):(We(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),Ht.fromUint8Array(_||new Uint8Array))})(r,e.targetChange.resumeToken),d=e.targetChange.cause,p=d&&(function(y){const _=y.code===void 0?te.UNKNOWN:qb(y.code);return new me(_,y.message||"")})(d);n=new Fb(s,a,u,p||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=Wf(r,s.document.name),u=li(s.document.updateTime),d=s.document.createTime?li(s.document.createTime):Se.min(),p=new kn({mapValue:{fields:s.document.fields}}),g=Qt.newFoundDocument(a,u,d,p),y=s.targetIds||[],_=s.removedTargetIds||[];n=new Fc(y,_,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=Wf(r,s.document),u=s.readTime?li(s.readTime):Se.min(),d=Qt.newNoDocument(a,u),p=s.removedTargetIds||[];n=new Fc([],p,d.key,d)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=Wf(r,s.document),u=s.removedTargetIds||[];n=new Fc([],u,a,null)}else{if(!("filter"in e))return Ee();{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:u}=s,d=new PI(a,u),p=s.targetId;n=new Hb(p,d)}}return n}function YI(r,e){let n;if(e instanceof tu)n={update:zw(r,e.key,e.value)};else if(e instanceof Bb)n={delete:mp(r,e.key)};else if(e instanceof Us)n={update:zw(r,e.key,e.data),updateMask:nk(e.fieldMask)};else{if(!(e instanceof NI))return Ee();n={verify:mp(r,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(u,d){const p=d.transform;if(p instanceof rh)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof jl)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Bl)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof sh)return{fieldPath:d.field.canonicalString(),increment:p.Pe};throw Ee()})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(a,u){return u.updateTime!==void 0?{updateTime:FI(a,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Ee()})(r,e.precondition)),n}function KI(r,e){return r&&r.length>0?(We(e!==void 0),r.map((n=>(function(a,u){let d=a.updateTime?li(a.updateTime):li(u);return d.isEqual(Se.min())&&(d=li(u)),new kI(d,a.transformResults||[])})(n,e)))):[]}function QI(r,e){return{documents:[Yb(r,e.path)]}}function XI(r,e){const n={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=Yb(r,a);const u=(function(y){if(y.length!==0)return Xb(hi.create(y,"and"))})(e.filters);u&&(n.structuredQuery.where=u);const d=(function(y){if(y.length!==0)return y.map((_=>(function(k){return{field:Oo(k.field),direction:ZI(k.dir)}})(_)))})(e.orderBy);d&&(n.structuredQuery.orderBy=d);const p=pp(r,e.limit);return p!==null&&(n.structuredQuery.limit=p),e.startAt&&(n.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{_t:n,parent:a}}function $I(r){let e=GI(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let a=null;if(s>0){We(s===1);const _=n.from[0];_.allDescendants?a=_.collectionId:e=e.child(_.collectionId)}let u=[];n.where&&(u=(function(S){const k=Qb(S);return k instanceof hi&&Ab(k)?k.getFilters():[k]})(n.where));let d=[];n.orderBy&&(d=(function(S){return S.map((k=>(function(W){return new ih(Po(W.field),(function(G){switch(G){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(W.direction))})(k)))})(n.orderBy));let p=null;n.limit&&(p=(function(S){let k;return k=typeof S=="object"?S.value:S,wh(k)?null:k})(n.limit));let g=null;n.startAt&&(g=(function(S){const k=!!S.before,L=S.values||[];return new nh(L,k)})(n.startAt));let y=null;return n.endAt&&(y=(function(S){const k=!S.before,L=S.values||[];return new nh(L,k)})(n.endAt)),gI(e,a,d,u,p,"F",g,y)}function JI(r,e){const n=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee()}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Qb(r){return r.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Po(n.unaryFilter.field);return At.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Po(n.unaryFilter.field);return At.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Po(n.unaryFilter.field);return At.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=Po(n.unaryFilter.field);return At.create(d,"!=",{nullValue:"NULL_VALUE"});default:return Ee()}})(r):r.fieldFilter!==void 0?(function(n){return At.create(Po(n.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ee()}})(n.fieldFilter.op),n.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(n){return hi.create(n.compositeFilter.filters.map((s=>Qb(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Ee()}})(n.compositeFilter.op))})(r):Ee()}function ZI(r){return jI[r]}function ek(r){return BI[r]}function tk(r){return qI[r]}function Oo(r){return{fieldPath:r.canonicalString()}}function Po(r){return Bt.fromServerFormat(r.fieldPath)}function Xb(r){return r instanceof At?(function(n){if(n.op==="=="){if(Aw(n.value))return{unaryFilter:{field:Oo(n.field),op:"IS_NAN"}};if(Sw(n.value))return{unaryFilter:{field:Oo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Aw(n.value))return{unaryFilter:{field:Oo(n.field),op:"IS_NOT_NAN"}};if(Sw(n.value))return{unaryFilter:{field:Oo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Oo(n.field),op:ek(n.op),value:n.value}}})(r):r instanceof hi?(function(n){const s=n.getFilters().map((a=>Xb(a)));return s.length===1?s[0]:{compositeFilter:{op:tk(n.op),filters:s}}})(r):Ee()}function nk(r){const e=[];return r.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function $b(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n,s,a,u=Se.min(),d=Se.min(),p=Ht.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=d,this.resumeToken=p,this.expectedCount=g}withSequenceNumber(e){return new Pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e){this.ct=e}}function rk(r){const e=$I({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?fp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(){this.un=new ok}addToCollectionParentIndex(e,n){return this.un.add(n),Z.resolve()}getCollectionParents(e,n){return Z.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return Z.resolve()}deleteFieldIndex(e,n){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,n){return Z.resolve()}getDocumentsMatchingTarget(e,n){return Z.resolve(null)}getIndexType(e,n){return Z.resolve(0)}getFieldIndexes(e,n){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,n){return Z.resolve(jr.min())}getMinOffsetFromCollectionGroup(e,n){return Z.resolve(jr.min())}updateCollectionGroup(e,n,s){return Z.resolve()}updateIndexEntries(e,n){return Z.resolve()}}class ok{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),a=this.index[n]||new qt(ut.comparator),u=!a.has(s);return this.index[n]=a.add(s),u}has(e){const n=e.lastSegment(),s=e.popLast(),a=this.index[n];return a&&a.has(s)}getEntries(e){return(this.index[e]||new qt(ut.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Wo(0)}static kn(){return new Wo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(){this.changes=new ia((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Qt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?Z.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e,n,s,a){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,n)))).next((a=>(s!==null&&Dl(s.mutation,a,Ln.empty(),Rt.now()),a)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,Ne()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=Ne()){const a=xs();return this.populateOverlays(e,a,n).next((()=>this.computeViews(e,n,a,s).next((u=>{let d=Sl();return u.forEach(((p,g)=>{d=d.insert(p,g.overlayedDocument)})),d}))))}getOverlayedDocuments(e,n){const s=xs();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,Ne())))}populateOverlays(e,n,s){const a=[];return s.forEach((u=>{n.has(u)||a.push(u)})),this.documentOverlayCache.getOverlays(e,a).next((u=>{u.forEach(((d,p)=>{n.set(d,p)}))}))}computeViews(e,n,s,a){let u=Qi();const d=xl(),p=(function(){return xl()})();return n.forEach(((g,y)=>{const _=s.get(y.key);a.has(y.key)&&(_===void 0||_.mutation instanceof Us)?u=u.insert(y.key,y):_!==void 0?(d.set(y.key,_.mutation.getFieldMask()),Dl(_.mutation,y,_.mutation.getFieldMask(),Rt.now())):d.set(y.key,Ln.empty())})),this.recalculateAndSaveOverlays(e,u).next((g=>(g.forEach(((y,_)=>d.set(y,_))),n.forEach(((y,_)=>{var S;return p.set(y,new lk(_,(S=d.get(y))!==null&&S!==void 0?S:null))})),p)))}recalculateAndSaveOverlays(e,n){const s=xl();let a=new rt(((d,p)=>d-p)),u=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((d=>{for(const p of d)p.keys().forEach((g=>{const y=n.get(g);if(y===null)return;let _=s.get(g)||Ln.empty();_=p.applyToLocalView(y,_),s.set(g,_);const S=(a.get(p.batchId)||Ne()).add(g);a=a.insert(p.batchId,S)}))})).next((()=>{const d=[],p=a.getReverseIterator();for(;p.hasNext();){const g=p.getNext(),y=g.key,_=g.value,S=Mb();_.forEach((k=>{if(!u.has(k)){const L=zb(n.get(k),s.get(k));L!==null&&S.set(k,L),u=u.add(k)}})),d.push(this.documentOverlayCache.saveOverlays(e,y,S))}return Z.waitFor(d)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,a){return(function(d){return ye.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):mI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,a):this.getDocumentsMatchingCollectionQuery(e,n,s,a)}getNextDocuments(e,n,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,a).next((u=>{const d=a-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,a-u.size):Z.resolve(xs());let p=-1,g=u;return d.next((y=>Z.forEach(y,((_,S)=>(p<S.largestBatchId&&(p=S.largestBatchId),u.get(_)?Z.resolve():this.remoteDocumentCache.getEntry(e,_).next((k=>{g=g.insert(_,k)}))))).next((()=>this.populateOverlays(e,y,u))).next((()=>this.computeViews(e,g,y,Ne()))).next((_=>({batchId:p,changes:Nb(_)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ye(n)).next((s=>{let a=Sl();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,a){const u=n.collectionGroup;let d=Sl();return this.indexManager.getCollectionParents(e,u).next((p=>Z.forEach(p,(g=>{const y=(function(S,k){return new _h(k,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)})(n,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,y,s,a).next((_=>{_.forEach(((S,k)=>{d=d.insert(S,k)}))}))})).next((()=>d))))}getDocumentsMatchingCollectionQuery(e,n,s,a){let u;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((d=>(u=d,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,u,a)))).next((d=>{u.forEach(((g,y)=>{const _=y.getKey();d.get(_)===null&&(d=d.insert(_,Qt.newInvalidDocument(_)))}));let p=Sl();return d.forEach(((g,y)=>{const _=u.get(g);_!==void 0&&Dl(_.mutation,y,Ln.empty(),Rt.now()),Th(n,y)&&(p=p.insert(g,y))})),p}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return Z.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,(function(a){return{id:a.id,version:a.version,createTime:li(a.createTime)}})(n)),Z.resolve()}getNamedQuery(e,n){return Z.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,(function(a){return{name:a.name,query:rk(a.bundledQuery),readTime:li(a.readTime)}})(n)),Z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(){this.overlays=new rt(ye.comparator),this.Ir=new Map}getOverlay(e,n){return Z.resolve(this.overlays.get(n))}getOverlays(e,n){const s=xs();return Z.forEach(n,(a=>this.getOverlay(e,a).next((u=>{u!==null&&s.set(a,u)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((a,u)=>{this.ht(e,n,u)})),Z.resolve()}removeOverlaysForBatchId(e,n,s){const a=this.Ir.get(s);return a!==void 0&&(a.forEach((u=>this.overlays=this.overlays.remove(u))),this.Ir.delete(s)),Z.resolve()}getOverlaysForCollection(e,n,s){const a=xs(),u=n.length+1,d=new ye(n.child("")),p=this.overlays.getIteratorFrom(d);for(;p.hasNext();){const g=p.getNext().value,y=g.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&g.largestBatchId>s&&a.set(g.getKey(),g)}return Z.resolve(a)}getOverlaysForCollectionGroup(e,n,s,a){let u=new rt(((y,_)=>y-_));const d=this.overlays.getIterator();for(;d.hasNext();){const y=d.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let _=u.get(y.largestBatchId);_===null&&(_=xs(),u=u.insert(y.largestBatchId,_)),_.set(y.getKey(),y)}}const p=xs(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((y,_)=>p.set(y,_))),!(p.size()>=a)););return Z.resolve(p)}ht(e,n,s){const a=this.overlays.get(s.key);if(a!==null){const d=this.Ir.get(a.largestBatchId).delete(s.key);this.Ir.set(a.largestBatchId,d)}this.overlays=this.overlays.insert(s.key,new OI(n,s));let u=this.Ir.get(n);u===void 0&&(u=Ne(),this.Ir.set(n,u)),this.Ir.set(n,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(){this.sessionToken=Ht.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,Z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(){this.Tr=new qt(Mt.Er),this.dr=new qt(Mt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const s=new Mt(e,n);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Vr(new Mt(e,n))}mr(e,n){e.forEach((s=>this.removeReference(s,n)))}gr(e){const n=new ye(new ut([])),s=new Mt(n,e),a=new Mt(n,e+1),u=[];return this.dr.forEachInRange([s,a],(d=>{this.Vr(d),u.push(d.key)})),u}pr(){this.Tr.forEach((e=>this.Vr(e)))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ye(new ut([])),s=new Mt(n,e),a=new Mt(n,e+1);let u=Ne();return this.dr.forEachInRange([s,a],(d=>{u=u.add(d.key)})),u}containsKey(e){const n=new Mt(e,0),s=this.Tr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Mt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ye.comparator(e.key,n.key)||ze(e.wr,n.wr)}static Ar(e,n){return ze(e.wr,n.wr)||ye.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new qt(Mt.Er)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,a){const u=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new MI(u,n,s,a);this.mutationQueue.push(d);for(const p of a)this.br=this.br.add(new Mt(p.key,u)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return Z.resolve(d)}lookupMutationBatch(e,n){return Z.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,a=this.vr(s),u=a<0?0:a;return Z.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Mt(n,0),a=new Mt(n,Number.POSITIVE_INFINITY),u=[];return this.br.forEachInRange([s,a],(d=>{const p=this.Dr(d.wr);u.push(p)})),Z.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new qt(ze);return n.forEach((a=>{const u=new Mt(a,0),d=new Mt(a,Number.POSITIVE_INFINITY);this.br.forEachInRange([u,d],(p=>{s=s.add(p.wr)}))})),Z.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,a=s.length+1;let u=s;ye.isDocumentKey(u)||(u=u.child(""));const d=new Mt(new ye(u),0);let p=new qt(ze);return this.br.forEachWhile((g=>{const y=g.key.path;return!!s.isPrefixOf(y)&&(y.length===a&&(p=p.add(g.wr)),!0)}),d),Z.resolve(this.Cr(p))}Cr(e){const n=[];return e.forEach((s=>{const a=this.Dr(s);a!==null&&n.push(a)})),n}removeMutationBatch(e,n){We(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return Z.forEach(n.mutations,(a=>{const u=new Mt(a.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.br=s}))}On(e){}containsKey(e,n){const s=new Mt(n,0),a=this.br.firstAfterOrEqual(s);return Z.resolve(n.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e){this.Mr=e,this.docs=(function(){return new rt(ye.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,a=this.docs.get(s),u=a?a.size:0,d=this.Mr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:d}),this.size+=d-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return Z.resolve(s?s.document.mutableCopy():Qt.newInvalidDocument(n))}getEntries(e,n){let s=Qi();return n.forEach((a=>{const u=this.docs.get(a);s=s.insert(a,u?u.document.mutableCopy():Qt.newInvalidDocument(a))})),Z.resolve(s)}getDocumentsMatchingQuery(e,n,s,a){let u=Qi();const d=n.path,p=new ye(d.child("")),g=this.docs.getIteratorFrom(p);for(;g.hasNext();){const{key:y,value:{document:_}}=g.getNext();if(!d.isPrefixOf(y.path))break;y.path.length>d.length+1||X1(Q1(_),s)<=0||(a.has(_.key)||Th(n,_))&&(u=u.insert(_.key,_.mutableCopy()))}return Z.resolve(u)}getAllFromCollectionGroup(e,n,s,a){Ee()}Or(e,n){return Z.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new gk(this)}getSize(e){return Z.resolve(this.size)}}class gk extends ak{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?n.push(this.cr.addEntry(e,a)):this.cr.removeEntry(s)})),Z.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e){this.persistence=e,this.Nr=new ia((n=>Wp(n)),Yp),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Zp,this.targetCount=0,this.kr=Wo.Bn()}forEachTarget(e,n){return this.Nr.forEach(((s,a)=>n(a))),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Lr&&(this.Lr=n),Z.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Wo(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,Z.resolve()}updateTargetData(e,n){return this.Kn(n),Z.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,n,s){let a=0;const u=[];return this.Nr.forEach(((d,p)=>{p.sequenceNumber<=n&&s.get(p.targetId)===null&&(this.Nr.delete(d),u.push(this.removeMatchingKeysForTargetId(e,p.targetId)),a++)})),Z.waitFor(u).next((()=>a))}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,n){const s=this.Nr.get(n)||null;return Z.resolve(s)}addMatchingKeys(e,n,s){return this.Br.Rr(n,s),Z.resolve()}removeMatchingKeys(e,n,s){this.Br.mr(n,s);const a=this.persistence.referenceDelegate,u=[];return a&&n.forEach((d=>{u.push(a.markPotentiallyOrphaned(e,d))})),Z.waitFor(u)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),Z.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Br.yr(n);return Z.resolve(s)}containsKey(e,n){return Z.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,n){this.qr={},this.overlays={},this.Qr=new qp(0),this.Kr=!1,this.Kr=!0,this.$r=new dk,this.referenceDelegate=e(this),this.Ur=new mk(this),this.indexManager=new sk,this.remoteDocumentCache=(function(a){return new pk(a)})((s=>this.referenceDelegate.Wr(s))),this.serializer=new ik(n),this.Gr=new ck(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new hk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.qr[e.toKey()];return s||(s=new fk(n,this.referenceDelegate),this.qr[e.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,s){ue("MemoryPersistence","Starting transaction:",e);const a=new vk(this.Qr.next());return this.referenceDelegate.zr(),s(a).next((u=>this.referenceDelegate.jr(a).next((()=>u)))).toPromise().then((u=>(a.raiseOnCommittedEvent(),u)))}Hr(e,n){return Z.or(Object.values(this.qr).map((s=>()=>s.containsKey(e,n))))}}class vk extends J1{constructor(e){super(),this.currentSequenceNumber=e}}class eg{constructor(e){this.persistence=e,this.Jr=new Zp,this.Yr=null}static Zr(e){return new eg(e)}get Xr(){if(this.Yr)return this.Yr;throw Ee()}addReference(e,n,s){return this.Jr.addReference(s,n),this.Xr.delete(s.toString()),Z.resolve()}removeReference(e,n,s){return this.Jr.removeReference(s,n),this.Xr.add(s.toString()),Z.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),Z.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach((a=>this.Xr.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((a=>{a.forEach((u=>this.Xr.add(u.toString())))})).next((()=>s.removeTargetData(e,n)))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.Xr,(s=>{const a=ye.fromPath(s);return this.ei(e,a).next((u=>{u||n.removeEntry(a,Se.min())}))})).next((()=>(this.Yr=null,n.apply(e))))}updateLimboDocument(e,n){return this.ei(e,n).next((s=>{s?this.Xr.delete(n.toString()):this.Xr.add(n.toString())}))}Wr(e){return 0}ei(e,n){return Z.or([()=>Z.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,n,s,a){this.targetId=e,this.fromCache=n,this.$i=s,this.Ui=a}static Wi(e,n){let s=Ne(),a=Ne();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:a=a.add(u.doc.key)}return new tg(e,n.fromCache,s,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=(function(){return rA()?8:Z1(Xt())>0?6:4})()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,s,a){const u={result:null};return this.Yi(e,n).next((d=>{u.result=d})).next((()=>{if(!u.result)return this.Zi(e,n,a,s).next((d=>{u.result=d}))})).next((()=>{if(u.result)return;const d=new wk;return this.Xi(e,n,d).next((p=>{if(u.result=p,this.zi)return this.es(e,n,d,p.size)}))})).next((()=>u.result))}es(e,n,s,a){return s.documentReadCount<this.ji?(wl()<=Me.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",Mo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),Z.resolve()):(wl()<=Me.DEBUG&&ue("QueryEngine","Query:",Mo(n),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.Hi*a?(wl()<=Me.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",Mo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ai(n))):Z.resolve())}Yi(e,n){if(kw(n))return Z.resolve(null);let s=ai(n);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(n.limit!==null&&a===1&&(n=fp(n,null,"F"),s=ai(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const d=Ne(...u);return this.Ji.getDocuments(e,d).next((p=>this.indexManager.getMinOffset(e,s).next((g=>{const y=this.ts(n,p);return this.ns(n,y,d,g.readTime)?this.Yi(e,fp(n,null,"F")):this.rs(e,y,n,g)}))))})))))}Zi(e,n,s,a){return kw(n)||a.isEqual(Se.min())?Z.resolve(null):this.Ji.getDocuments(e,s).next((u=>{const d=this.ts(n,u);return this.ns(n,d,s,a)?Z.resolve(null):(wl()<=Me.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Mo(n)),this.rs(e,d,n,K1(a,-1)).next((p=>p)))}))}ts(e,n){let s=new qt(xb(e));return n.forEach(((a,u)=>{Th(e,u)&&(s=s.add(u))})),s}ns(e,n,s,a){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const u=e.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(a)>0)}Xi(e,n,s){return wl()<=Me.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",Mo(n)),this.Ji.getDocumentsMatchingQuery(e,n,jr.min(),s)}rs(e,n,s,a){return this.Ji.getDocumentsMatchingQuery(e,s,a).next((u=>(n.forEach((d=>{u=u.insert(d.key,d)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e,n,s,a){this.persistence=e,this.ss=n,this.serializer=a,this.os=new rt(ze),this._s=new ia((u=>Wp(u)),Yp),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(s)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new uk(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.os)))}}function Tk(r,e,n,s){return new bk(r,e,n,s)}async function Jb(r,e){const n=Ae(r);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return n.mutationQueue.getAllMutationBatches(s).next((u=>(a=u,n.ls(e),n.mutationQueue.getAllMutationBatches(s)))).next((u=>{const d=[],p=[];let g=Ne();for(const y of a){d.push(y.batchId);for(const _ of y.mutations)g=g.add(_.key)}for(const y of u){p.push(y.batchId);for(const _ of y.mutations)g=g.add(_.key)}return n.localDocuments.getDocuments(s,g).next((y=>({hs:y,removedBatchIds:d,addedBatchIds:p})))}))}))}function Ek(r,e){const n=Ae(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const a=e.batch.keys(),u=n.cs.newChangeBuffer({trackRemovals:!0});return(function(p,g,y,_){const S=y.batch,k=S.keys();let L=Z.resolve();return k.forEach((W=>{L=L.next((()=>_.getEntry(g,W))).next(($=>{const G=y.docVersions.get(W);We(G!==null),$.version.compareTo(G)<0&&(S.applyToRemoteDocument($,y),$.isValidDocument()&&($.setReadTime(y.commitVersion),_.addEntry($)))}))})),L.next((()=>p.mutationQueue.removeMutationBatch(g,S)))})(n,s,e,u).next((()=>u.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(p){let g=Ne();for(let y=0;y<p.mutationResults.length;++y)p.mutationResults[y].transformResults.length>0&&(g=g.add(p.batch.mutations[y].key));return g})(e)))).next((()=>n.localDocuments.getDocuments(s,a)))}))}function Zb(r){const e=Ae(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Ur.getLastRemoteSnapshotVersion(n)))}function Sk(r,e){const n=Ae(r),s=e.snapshotVersion;let a=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const d=n.cs.newChangeBuffer({trackRemovals:!0});a=n.os;const p=[];e.targetChanges.forEach(((_,S)=>{const k=a.get(S);if(!k)return;p.push(n.Ur.removeMatchingKeys(u,_.removedDocuments,S).next((()=>n.Ur.addMatchingKeys(u,_.addedDocuments,S))));let L=k.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(S)!==null?L=L.withResumeToken(Ht.EMPTY_BYTE_STRING,Se.min()).withLastLimboFreeSnapshotVersion(Se.min()):_.resumeToken.approximateByteSize()>0&&(L=L.withResumeToken(_.resumeToken,s)),a=a.insert(S,L),(function($,G,re){return $.resumeToken.approximateByteSize()===0||G.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=3e8?!0:re.addedDocuments.size+re.modifiedDocuments.size+re.removedDocuments.size>0})(k,L,_)&&p.push(n.Ur.updateTargetData(u,L))}));let g=Qi(),y=Ne();if(e.documentUpdates.forEach((_=>{e.resolvedLimboDocuments.has(_)&&p.push(n.persistence.referenceDelegate.updateLimboDocument(u,_))})),p.push(Ak(u,d,e.documentUpdates).next((_=>{g=_.Ps,y=_.Is}))),!s.isEqual(Se.min())){const _=n.Ur.getLastRemoteSnapshotVersion(u).next((S=>n.Ur.setTargetsMetadata(u,u.currentSequenceNumber,s)));p.push(_)}return Z.waitFor(p).next((()=>d.apply(u))).next((()=>n.localDocuments.getLocalViewOfDocuments(u,g,y))).next((()=>g))})).then((u=>(n.os=a,u)))}function Ak(r,e,n){let s=Ne(),a=Ne();return n.forEach((u=>s=s.add(u))),e.getEntries(r,s).next((u=>{let d=Qi();return n.forEach(((p,g)=>{const y=u.get(p);g.isFoundDocument()!==y.isFoundDocument()&&(a=a.add(p)),g.isNoDocument()&&g.version.isEqual(Se.min())?(e.removeEntry(p,g.readTime),d=d.insert(p,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(g),d=d.insert(p,g)):ue("LocalStore","Ignoring outdated watch update for ",p,". Current version:",y.version," Watch version:",g.version)})),{Ps:d,Is:a}}))}function Rk(r,e){const n=Ae(r);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function Ck(r,e){const n=Ae(r);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let a;return n.Ur.getTargetData(s,e).next((u=>u?(a=u,Z.resolve(a)):n.Ur.allocateTargetId(s).next((d=>(a=new Pr(e,d,"TargetPurposeListen",s.currentSequenceNumber),n.Ur.addTargetData(s,a).next((()=>a)))))))})).then((s=>{const a=n.os.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(n.os=n.os.insert(s.targetId,s),n._s.set(e,s.targetId)),s}))}async function vp(r,e,n){const s=Ae(r),a=s.os.get(e),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,(d=>s.persistence.referenceDelegate.removeTarget(d,a)))}catch(d){if(!eu(d))throw d;ue("LocalStore",`Failed to update sequence numbers for target ${e}: ${d}`)}s.os=s.os.remove(e),s._s.delete(a.target)}function jw(r,e,n){const s=Ae(r);let a=Se.min(),u=Ne();return s.persistence.runTransaction("Execute query","readwrite",(d=>(function(g,y,_){const S=Ae(g),k=S._s.get(_);return k!==void 0?Z.resolve(S.os.get(k)):S.Ur.getTargetData(y,_)})(s,d,ai(e)).next((p=>{if(p)return a=p.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(d,p.targetId).next((g=>{u=g}))})).next((()=>s.ss.getDocumentsMatchingQuery(d,e,n?a:Se.min(),n?u:Ne()))).next((p=>(Ik(s,vI(e),p),{documents:p,Ts:u})))))}function Ik(r,e,n){let s=r.us.get(e)||Se.min();n.forEach(((a,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),r.us.set(e,s)}class Bw{constructor(){this.activeTargetIds=SI()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kk{constructor(){this.so=new Bw,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,s){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Bw,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ue("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ue("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oc=null;function Yf(){return Oc===null?Oc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Oc++,"0x"+Oc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="WebChannelConnection";class Mk extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),u=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+n.host,this.vo=`projects/${a}/databases/${u}`,this.Co=this.databaseId.database==="(default)"?`project_id=${a}`:`project_id=${a}&database_id=${u}`}get Fo(){return!1}Mo(n,s,a,u,d){const p=Yf(),g=this.xo(n,s.toUriEncodedString());ue("RestConnection",`Sending RPC '${n}' ${p}:`,g,a);const y={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(y,u,d),this.No(n,g,y,a).then((_=>(ue("RestConnection",`Received RPC '${n}' ${p}: `,_),_)),(_=>{throw qo("RestConnection",`RPC '${n}' ${p} failed with error: `,_,"url: ",g,"request:",a),_}))}Lo(n,s,a,u,d,p){return this.Mo(n,s,a,u,d)}Oo(n,s,a){n["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ta})(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach(((u,d)=>n[d]=u)),a&&a.headers.forEach(((u,d)=>n[d]=u))}xo(n,s){const a=Dk[n];return`${this.Do}/v1/${s}:${a}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,s,a){const u=Yf();return new Promise(((d,p)=>{const g=new fb;g.setWithCredentials(!0),g.listenOnce(pb.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case Bc.NO_ERROR:const _=g.getResponseJson();ue(Yt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(_)),d(_);break;case Bc.TIMEOUT:ue(Yt,`RPC '${e}' ${u} timed out`),p(new me(te.DEADLINE_EXCEEDED,"Request time out"));break;case Bc.HTTP_ERROR:const S=g.getStatus();if(ue(Yt,`RPC '${e}' ${u} failed with status:`,S,"response text:",g.getResponseText()),S>0){let k=g.getResponseJson();Array.isArray(k)&&(k=k[0]);const L=k?.error;if(L&&L.status&&L.message){const W=(function(G){const re=G.toLowerCase().replace(/_/g,"-");return Object.values(te).indexOf(re)>=0?re:te.UNKNOWN})(L.status);p(new me(W,L.message))}else p(new me(te.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new me(te.UNAVAILABLE,"Connection failed."));break;default:Ee()}}finally{ue(Yt,`RPC '${e}' ${u} completed.`)}}));const y=JSON.stringify(a);ue(Yt,`RPC '${e}' ${u} sending request:`,a),g.send(n,"POST",y,s,15)}))}Bo(e,n,s){const a=Yf(),u=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],d=yb(),p=mb(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Oo(g.initMessageHeaders,n,s),g.encodeInitMessageHeaders=!0;const _=u.join("");ue(Yt,`Creating RPC '${e}' stream ${a}: ${_}`,g);const S=d.createWebChannel(_,g);let k=!1,L=!1;const W=new Nk({Io:G=>{L?ue(Yt,`Not sending because RPC '${e}' stream ${a} is closed:`,G):(k||(ue(Yt,`Opening RPC '${e}' stream ${a} transport.`),S.open(),k=!0),ue(Yt,`RPC '${e}' stream ${a} sending:`,G),S.send(G))},To:()=>S.close()}),$=(G,re,ee)=>{G.listen(re,(ne=>{try{ee(ne)}catch(he){setTimeout((()=>{throw he}),0)}}))};return $(S,El.EventType.OPEN,(()=>{L||(ue(Yt,`RPC '${e}' stream ${a} transport opened.`),W.yo())})),$(S,El.EventType.CLOSE,(()=>{L||(L=!0,ue(Yt,`RPC '${e}' stream ${a} transport closed`),W.So())})),$(S,El.EventType.ERROR,(G=>{L||(L=!0,qo(Yt,`RPC '${e}' stream ${a} transport errored:`,G),W.So(new me(te.UNAVAILABLE,"The operation could not be completed")))})),$(S,El.EventType.MESSAGE,(G=>{var re;if(!L){const ee=G.data[0];We(!!ee);const ne=ee,he=ne.error||((re=ne[0])===null||re===void 0?void 0:re.error);if(he){ue(Yt,`RPC '${e}' stream ${a} received error:`,he);const ce=he.status;let ve=(function(R){const N=wt[R];if(N!==void 0)return qb(N)})(ce),M=he.message;ve===void 0&&(ve=te.INTERNAL,M="Unknown error status: "+ce+" with message "+he.message),L=!0,W.So(new me(ve,M)),S.close()}else ue(Yt,`RPC '${e}' stream ${a} received:`,ee),W.bo(ee)}})),$(p,gb.STAT_EVENT,(G=>{G.stat===lp.PROXY?ue(Yt,`RPC '${e}' stream ${a} detected buffering proxy`):G.stat===lp.NOPROXY&&ue(Yt,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{W.wo()}),0),W}}function Kf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(r){return new HI(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,n,s=1e3,a=1.5,u=6e4){this.ui=e,this.timerId=n,this.ko=s,this.qo=a,this.Qo=u,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),a=Math.max(0,n-s);a>0&&ue("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,a,(()=>(this.Uo=Date.now(),e()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,n,s,a,u,d,p,g){this.ui=e,this.Ho=s,this.Jo=a,this.connection=u,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=p,this.listener=g,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new eT(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===te.RESOURCE_EXHAUSTED?(Ki(n.toString()),Ki("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===te.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.Yo===n&&this.P_(s,a)}),(s=>{e((()=>{const a=new me(te.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(a)}))}))}P_(e,n){const s=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo((()=>{s((()=>this.listener.Eo()))})),this.stream.Ro((()=>{s((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((a=>{s((()=>this.I_(a)))})),this.stream.onMessage((a=>{s((()=>++this.e_==1?this.E_(a):this.onNext(a)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(e){return ue("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget((()=>this.Yo===e?n():(ue("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ok extends tT{constructor(e,n,s,a,u,d){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,a,d),this.serializer=u}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=WI(this.serializer,e),s=(function(u){if(!("targetChange"in u))return Se.min();const d=u.targetChange;return d.targetIds&&d.targetIds.length?Se.min():d.readTime?li(d.readTime):Se.min()})(e);return this.listener.d_(n,s)}A_(e){const n={};n.database=yp(this.serializer),n.addTarget=(function(u,d){let p;const g=d.target;if(p=dp(g)?{documents:QI(u,g)}:{query:XI(u,g)._t},p.targetId=d.targetId,d.resumeToken.approximateByteSize()>0){p.resumeToken=Gb(u,d.resumeToken);const y=pp(u,d.expectedCount);y!==null&&(p.expectedCount=y)}else if(d.snapshotVersion.compareTo(Se.min())>0){p.readTime=oh(u,d.snapshotVersion.toTimestamp());const y=pp(u,d.expectedCount);y!==null&&(p.expectedCount=y)}return p})(this.serializer,e);const s=JI(this.serializer,e);s&&(n.labels=s),this.a_(n)}R_(e){const n={};n.database=yp(this.serializer),n.removeTarget=e,this.a_(n)}}class Pk extends tT{constructor(e,n,s,a,u,d){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,a,d),this.serializer=u}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return We(!!e.streamToken),this.lastStreamToken=e.streamToken,We(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){We(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=KI(e.writeResults,e.commitTime),s=li(e.commitTime);return this.listener.g_(s,n)}p_(){const e={};e.database=yp(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>YI(this.serializer,s)))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk extends class{}{constructor(e,n,s,a){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=a,this.y_=!1}w_(){if(this.y_)throw new me(te.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,s,a){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Mo(e,gp(n,s),a,u,d))).catch((u=>{throw u.name==="FirebaseError"?(u.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new me(te.UNKNOWN,u.toString())}))}Lo(e,n,s,a,u){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([d,p])=>this.connection.Lo(e,gp(n,s),a,d,p,u))).catch((d=>{throw d.name==="FirebaseError"?(d.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new me(te.UNKNOWN,d.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class Lk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ki(n),this.D_=!1):ue("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e,n,s,a,u){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=u,this.k_._o((d=>{s.enqueueAndForget((async()=>{zs(this)&&(ue("RemoteStore","Restarting streams for network reachability change."),await(async function(g){const y=Ae(g);y.L_.add(4),await iu(y),y.q_.set("Unknown"),y.L_.delete(4),await Ch(y)})(this))}))})),this.q_=new Lk(s,a)}}async function Ch(r){if(zs(r))for(const e of r.B_)await e(!0)}async function iu(r){for(const e of r.B_)await e(!1)}function nT(r,e){const n=Ae(r);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),sg(n)?rg(n):ra(n).r_()&&ig(n,e))}function ng(r,e){const n=Ae(r),s=ra(n);n.N_.delete(e),s.r_()&&iT(n,e),n.N_.size===0&&(s.r_()?s.o_():zs(n)&&n.q_.set("Unknown"))}function ig(r,e){if(r.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Se.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ra(r).A_(e)}function iT(r,e){r.Q_.xe(e),ra(r).R_(e)}function rg(r){r.Q_=new zI({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.N_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),ra(r).start(),r.q_.v_()}function sg(r){return zs(r)&&!ra(r).n_()&&r.N_.size>0}function zs(r){return Ae(r).L_.size===0}function rT(r){r.Q_=void 0}async function zk(r){r.q_.set("Online")}async function jk(r){r.N_.forEach(((e,n)=>{ig(r,e)}))}async function Bk(r,e){rT(r),sg(r)?(r.q_.M_(e),rg(r)):r.q_.set("Unknown")}async function qk(r,e,n){if(r.q_.set("Online"),e instanceof Fb&&e.state===2&&e.cause)try{await(async function(a,u){const d=u.cause;for(const p of u.targetIds)a.N_.has(p)&&(await a.remoteSyncer.rejectListen(p,d),a.N_.delete(p),a.Q_.removeTarget(p))})(r,e)}catch(s){ue("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ah(r,s)}else if(e instanceof Fc?r.Q_.Ke(e):e instanceof Hb?r.Q_.He(e):r.Q_.We(e),!n.isEqual(Se.min()))try{const s=await Zb(r.localStore);n.compareTo(s)>=0&&await(function(u,d){const p=u.Q_.rt(d);return p.targetChanges.forEach(((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const _=u.N_.get(y);_&&u.N_.set(y,_.withResumeToken(g.resumeToken,d))}})),p.targetMismatches.forEach(((g,y)=>{const _=u.N_.get(g);if(!_)return;u.N_.set(g,_.withResumeToken(Ht.EMPTY_BYTE_STRING,_.snapshotVersion)),iT(u,g);const S=new Pr(_.target,g,y,_.sequenceNumber);ig(u,S)})),u.remoteSyncer.applyRemoteEvent(p)})(r,n)}catch(s){ue("RemoteStore","Failed to raise snapshot:",s),await ah(r,s)}}async function ah(r,e,n){if(!eu(e))throw e;r.L_.add(1),await iu(r),r.q_.set("Offline"),n||(n=()=>Zb(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{ue("RemoteStore","Retrying IndexedDB access"),await n(),r.L_.delete(1),await Ch(r)}))}function sT(r,e){return e().catch((n=>ah(r,n,e)))}async function Ih(r){const e=Ae(r),n=qr(e);let s=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Hk(e);)try{const a=await Rk(e.localStore,s);if(a===null){e.O_.length===0&&n.o_();break}s=a.batchId,Fk(e,a)}catch(a){await ah(e,a)}oT(e)&&aT(e)}function Hk(r){return zs(r)&&r.O_.length<10}function Fk(r,e){r.O_.push(e);const n=qr(r);n.r_()&&n.V_&&n.m_(e.mutations)}function oT(r){return zs(r)&&!qr(r).n_()&&r.O_.length>0}function aT(r){qr(r).start()}async function Gk(r){qr(r).p_()}async function Wk(r){const e=qr(r);for(const n of r.O_)e.m_(n.mutations)}async function Yk(r,e,n){const s=r.O_.shift(),a=Xp.from(s,e,n);await sT(r,(()=>r.remoteSyncer.applySuccessfulWrite(a))),await Ih(r)}async function Kk(r,e){e&&qr(r).V_&&await(async function(s,a){if((function(d){return VI(d)&&d!==te.ABORTED})(a.code)){const u=s.O_.shift();qr(s).s_(),await sT(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,a))),await Ih(s)}})(r,e),oT(r)&&aT(r)}async function Hw(r,e){const n=Ae(r);n.asyncQueue.verifyOperationInProgress(),ue("RemoteStore","RemoteStore received new credentials");const s=zs(n);n.L_.add(3),await iu(n),s&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ch(n)}async function Qk(r,e){const n=Ae(r);e?(n.L_.delete(2),await Ch(n)):e||(n.L_.add(2),await iu(n),n.q_.set("Unknown"))}function ra(r){return r.K_||(r.K_=(function(n,s,a){const u=Ae(n);return u.w_(),new Ok(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,a)})(r.datastore,r.asyncQueue,{Eo:zk.bind(null,r),Ro:jk.bind(null,r),mo:Bk.bind(null,r),d_:qk.bind(null,r)}),r.B_.push((async e=>{e?(r.K_.s_(),sg(r)?rg(r):r.q_.set("Unknown")):(await r.K_.stop(),rT(r))}))),r.K_}function qr(r){return r.U_||(r.U_=(function(n,s,a){const u=Ae(n);return u.w_(),new Pk(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,a)})(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Gk.bind(null,r),mo:Kk.bind(null,r),f_:Wk.bind(null,r),g_:Yk.bind(null,r)}),r.B_.push((async e=>{e?(r.U_.s_(),await Ih(r)):(await r.U_.stop(),r.O_.length>0&&(ue("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))}))),r.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,n,s,a,u){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=a,this.removalCallback=u,this.deferred=new zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((d=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,a,u){const d=Date.now()+s,p=new og(e,n,d,a,u);return p.start(s),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new me(te.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ag(r,e){if(Ki("AsyncQueue",`${e}: ${r}`),eu(r))return new me(te.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this.comparator=e?(n,s)=>e(n,s)||ye.comparator(n.key,s.key):(n,s)=>ye.comparator(n.key,s.key),this.keyedMap=Sl(),this.sortedSet=new rt(this.comparator)}static emptySet(e){return new jo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof jo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const a=n.getNext().key,u=s.getNext().key;if(!a.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new jo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(){this.W_=new rt(ye.comparator)}track(e){const n=e.doc.key,s=this.W_.get(n);s?e.type!==0&&s.type===3?this.W_=this.W_.insert(n,e):e.type===3&&s.type!==1?this.W_=this.W_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.W_=this.W_.remove(n):e.type===1&&s.type===2?this.W_=this.W_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Ee():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal(((n,s)=>{e.push(s)})),e}}class Yo{constructor(e,n,s,a,u,d,p,g,y){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=u,this.fromCache=d,this.syncStateChanged=p,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(e,n,s,a,u){const d=[];return n.forEach((p=>{d.push({type:0,doc:p})})),new Yo(e,n,jo.emptySet(n),d,s,a,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let a=0;a<n.length;a++)if(n[a].type!==s[a].type||!n[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((e=>e.J_()))}}class $k{constructor(){this.queries=Gw(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,s){const a=Ae(n),u=a.queries;a.queries=Gw(),u.forEach(((d,p)=>{for(const g of p.j_)g.onError(s)}))})(this,new me(te.ABORTED,"Firestore shutting down"))}}function Gw(){return new ia((r=>kb(r)),bh)}async function Jk(r,e){const n=Ae(r);let s=3;const a=e.query;let u=n.queries.get(a);u?!u.H_()&&e.J_()&&(s=2):(u=new Xk,s=e.J_()?0:1);try{switch(s){case 0:u.z_=await n.onListen(a,!0);break;case 1:u.z_=await n.onListen(a,!1);break;case 2:await n.onFirstRemoteStoreListen(a)}}catch(d){const p=ag(d,`Initialization of query '${Mo(e.query)}' failed`);return void e.onError(p)}n.queries.set(a,u),u.j_.push(e),e.Z_(n.onlineState),u.z_&&e.X_(u.z_)&&lg(n)}async function Zk(r,e){const n=Ae(r),s=e.query;let a=3;const u=n.queries.get(s);if(u){const d=u.j_.indexOf(e);d>=0&&(u.j_.splice(d,1),u.j_.length===0?a=e.J_()?0:1:!u.H_()&&e.J_()&&(a=2))}switch(a){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function ex(r,e){const n=Ae(r);let s=!1;for(const a of e){const u=a.query,d=n.queries.get(u);if(d){for(const p of d.j_)p.X_(a)&&(s=!0);d.z_=a}}s&&lg(n)}function tx(r,e,n){const s=Ae(r),a=s.queries.get(e);if(a)for(const u of a.j_)u.onError(n);s.queries.delete(e)}function lg(r){r.Y_.forEach((e=>{e.next()}))}var wp,Ww;(Ww=wp||(wp={})).ea="default",Ww.Cache="cache";class nx{constructor(e,n,s){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new Yo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const s=n!=="Offline";return(!this.options._a||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Yo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==wp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e){this.key=e}}class uT{constructor(e){this.key=e}}class ix{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ne(),this.mutatedKeys=Ne(),this.Aa=xb(e),this.Ra=new jo(this.Aa)}get Va(){return this.Ta}ma(e,n){const s=n?n.fa:new Fw,a=n?n.Ra:this.Ra;let u=n?n.mutatedKeys:this.mutatedKeys,d=a,p=!1;const g=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,y=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((_,S)=>{const k=a.get(_),L=Th(this.query,S)?S:null,W=!!k&&this.mutatedKeys.has(k.key),$=!!L&&(L.hasLocalMutations||this.mutatedKeys.has(L.key)&&L.hasCommittedMutations);let G=!1;k&&L?k.data.isEqual(L.data)?W!==$&&(s.track({type:3,doc:L}),G=!0):this.ga(k,L)||(s.track({type:2,doc:L}),G=!0,(g&&this.Aa(L,g)>0||y&&this.Aa(L,y)<0)&&(p=!0)):!k&&L?(s.track({type:0,doc:L}),G=!0):k&&!L&&(s.track({type:1,doc:k}),G=!0,(g||y)&&(p=!0)),G&&(L?(d=d.add(L),u=$?u.add(_):u.delete(_)):(d=d.delete(_),u=u.delete(_)))})),this.query.limit!==null)for(;d.size>this.query.limit;){const _=this.query.limitType==="F"?d.last():d.first();d=d.delete(_.key),u=u.delete(_.key),s.track({type:1,doc:_})}return{Ra:d,fa:s,ns:p,mutatedKeys:u}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,a){const u=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const d=e.fa.G_();d.sort(((_,S)=>(function(L,W){const $=G=>{switch(G){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee()}};return $(L)-$(W)})(_.type,S.type)||this.Aa(_.doc,S.doc))),this.pa(s),a=a!=null&&a;const p=n&&!a?this.ya():[],g=this.da.size===0&&this.current&&!a?1:0,y=g!==this.Ea;return this.Ea=g,d.length!==0||y?{snapshot:new Yo(this.query,e.Ra,u,d,e.mutatedKeys,g===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:p}:{wa:p}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Fw,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach((n=>this.Ta=this.Ta.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ta=this.Ta.delete(n))),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ne(),this.Ra.forEach((s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))}));const n=[];return e.forEach((s=>{this.da.has(s)||n.push(new uT(s))})),this.da.forEach((s=>{e.has(s)||n.push(new lT(s))})),n}ba(e){this.Ta=e.Ts,this.da=Ne();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Yo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class rx{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class sx{constructor(e){this.key=e,this.va=!1}}class ox{constructor(e,n,s,a,u,d){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=a,this.currentUser=u,this.maxConcurrentLimboResolutions=d,this.Ca={},this.Fa=new ia((p=>kb(p)),bh),this.Ma=new Map,this.xa=new Set,this.Oa=new rt(ye.comparator),this.Na=new Map,this.La=new Zp,this.Ba={},this.ka=new Map,this.qa=Wo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function ax(r,e,n=!0){const s=gT(r);let a;const u=s.Fa.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),a=u.view.Da()):a=await cT(s,e,n,!0),a}async function lx(r,e){const n=gT(r);await cT(n,e,!0,!1)}async function cT(r,e,n,s){const a=await Ck(r.localStore,ai(e)),u=a.targetId,d=r.sharedClientState.addLocalQueryTarget(u,n);let p;return s&&(p=await ux(r,e,u,d==="current",a.resumeToken)),r.isPrimaryClient&&n&&nT(r.remoteStore,a),p}async function ux(r,e,n,s,a){r.Ka=(S,k,L)=>(async function($,G,re,ee){let ne=G.view.ma(re);ne.ns&&(ne=await jw($.localStore,G.query,!1).then((({documents:M})=>G.view.ma(M,ne))));const he=ee&&ee.targetChanges.get(G.targetId),ce=ee&&ee.targetMismatches.get(G.targetId)!=null,ve=G.view.applyChanges(ne,$.isPrimaryClient,he,ce);return Kw($,G.targetId,ve.wa),ve.snapshot})(r,S,k,L);const u=await jw(r.localStore,e,!0),d=new ix(e,u.Ts),p=d.ma(u.documents),g=nu.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",a),y=d.applyChanges(p,r.isPrimaryClient,g);Kw(r,n,y.wa);const _=new rx(e,n,d);return r.Fa.set(e,_),r.Ma.has(n)?r.Ma.get(n).push(e):r.Ma.set(n,[e]),y.snapshot}async function cx(r,e,n){const s=Ae(r),a=s.Fa.get(e),u=s.Ma.get(a.targetId);if(u.length>1)return s.Ma.set(a.targetId,u.filter((d=>!bh(d,e)))),void s.Fa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await vp(s.localStore,a.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(a.targetId),n&&ng(s.remoteStore,a.targetId),_p(s,a.targetId)})).catch(Zl)):(_p(s,a.targetId),await vp(s.localStore,a.targetId,!0))}async function hx(r,e){const n=Ae(r),s=n.Fa.get(e),a=n.Ma.get(s.targetId);n.isPrimaryClient&&a.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),ng(n.remoteStore,s.targetId))}async function dx(r,e,n){const s=wx(r);try{const a=await(function(d,p){const g=Ae(d),y=Rt.now(),_=p.reduce(((L,W)=>L.add(W.key)),Ne());let S,k;return g.persistence.runTransaction("Locally write mutations","readwrite",(L=>{let W=Qi(),$=Ne();return g.cs.getEntries(L,_).next((G=>{W=G,W.forEach(((re,ee)=>{ee.isValidDocument()||($=$.add(re))}))})).next((()=>g.localDocuments.getOverlayedDocuments(L,W))).next((G=>{S=G;const re=[];for(const ee of p){const ne=DI(ee,S.get(ee.key).overlayedDocument);ne!=null&&re.push(new Us(ee.key,ne,Tb(ne.value.mapValue),Fi.exists(!0)))}return g.mutationQueue.addMutationBatch(L,y,re,p)})).next((G=>{k=G;const re=G.applyToLocalDocumentSet(S,$);return g.documentOverlayCache.saveOverlays(L,G.batchId,re)}))})).then((()=>({batchId:k.batchId,changes:Nb(S)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),(function(d,p,g){let y=d.Ba[d.currentUser.toKey()];y||(y=new rt(ze)),y=y.insert(p,g),d.Ba[d.currentUser.toKey()]=y})(s,a.batchId,n),await ru(s,a.changes),await Ih(s.remoteStore)}catch(a){const u=ag(a,"Failed to persist write");n.reject(u)}}async function hT(r,e){const n=Ae(r);try{const s=await Sk(n.localStore,e);e.targetChanges.forEach(((a,u)=>{const d=n.Na.get(u);d&&(We(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?d.va=!0:a.modifiedDocuments.size>0?We(d.va):a.removedDocuments.size>0&&(We(d.va),d.va=!1))})),await ru(n,s,e)}catch(s){await Zl(s)}}function Yw(r,e,n){const s=Ae(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const a=[];s.Fa.forEach(((u,d)=>{const p=d.view.Z_(e);p.snapshot&&a.push(p.snapshot)})),(function(d,p){const g=Ae(d);g.onlineState=p;let y=!1;g.queries.forEach(((_,S)=>{for(const k of S.j_)k.Z_(p)&&(y=!0)})),y&&lg(g)})(s.eventManager,e),a.length&&s.Ca.d_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function fx(r,e,n){const s=Ae(r);s.sharedClientState.updateQueryState(e,"rejected",n);const a=s.Na.get(e),u=a&&a.key;if(u){let d=new rt(ye.comparator);d=d.insert(u,Qt.newNoDocument(u,Se.min()));const p=Ne().add(u),g=new Ah(Se.min(),new Map,new rt(ze),d,p);await hT(s,g),s.Oa=s.Oa.remove(u),s.Na.delete(e),ug(s)}else await vp(s.localStore,e,!1).then((()=>_p(s,e,n))).catch(Zl)}async function px(r,e){const n=Ae(r),s=e.batch.batchId;try{const a=await Ek(n.localStore,e);fT(n,s,null),dT(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ru(n,a)}catch(a){await Zl(a)}}async function gx(r,e,n){const s=Ae(r);try{const a=await(function(d,p){const g=Ae(d);return g.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let _;return g.mutationQueue.lookupMutationBatch(y,p).next((S=>(We(S!==null),_=S.keys(),g.mutationQueue.removeMutationBatch(y,S)))).next((()=>g.mutationQueue.performConsistencyCheck(y))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(y,_,p))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,_))).next((()=>g.localDocuments.getDocuments(y,_)))}))})(s.localStore,e);fT(s,e,n),dT(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ru(s,a)}catch(a){await Zl(a)}}function dT(r,e){(r.ka.get(e)||[]).forEach((n=>{n.resolve()})),r.ka.delete(e)}function fT(r,e,n){const s=Ae(r);let a=s.Ba[s.currentUser.toKey()];if(a){const u=a.get(e);u&&(n?u.reject(n):u.resolve(),a=a.remove(e)),s.Ba[s.currentUser.toKey()]=a}}function _p(r,e,n=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Ma.get(e))r.Fa.delete(s),n&&r.Ca.$a(s,n);r.Ma.delete(e),r.isPrimaryClient&&r.La.gr(e).forEach((s=>{r.La.containsKey(s)||pT(r,s)}))}function pT(r,e){r.xa.delete(e.path.canonicalString());const n=r.Oa.get(e);n!==null&&(ng(r.remoteStore,n),r.Oa=r.Oa.remove(e),r.Na.delete(n),ug(r))}function Kw(r,e,n){for(const s of n)s instanceof lT?(r.La.addReference(s.key,e),mx(r,s)):s instanceof uT?(ue("SyncEngine","Document no longer in limbo: "+s.key),r.La.removeReference(s.key,e),r.La.containsKey(s.key)||pT(r,s.key)):Ee()}function mx(r,e){const n=e.key,s=n.path.canonicalString();r.Oa.get(n)||r.xa.has(s)||(ue("SyncEngine","New document in limbo: "+n),r.xa.add(s),ug(r))}function ug(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const e=r.xa.values().next().value;r.xa.delete(e);const n=new ye(ut.fromString(e)),s=r.qa.next();r.Na.set(s,new sx(n)),r.Oa=r.Oa.insert(n,s),nT(r.remoteStore,new Pr(ai(Kp(n.path)),s,"TargetPurposeLimboResolution",qp.oe))}}async function ru(r,e,n){const s=Ae(r),a=[],u=[],d=[];s.Fa.isEmpty()||(s.Fa.forEach(((p,g)=>{d.push(s.Ka(g,e,n).then((y=>{var _;if((y||n)&&s.isPrimaryClient){const S=y?!y.fromCache:(_=n?.targetChanges.get(g.targetId))===null||_===void 0?void 0:_.current;s.sharedClientState.updateQueryState(g.targetId,S?"current":"not-current")}if(y){a.push(y);const S=tg.Wi(g.targetId,y);u.push(S)}})))})),await Promise.all(d),s.Ca.d_(a),await(async function(g,y){const _=Ae(g);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(S=>Z.forEach(y,(k=>Z.forEach(k.$i,(L=>_.persistence.referenceDelegate.addReference(S,k.targetId,L))).next((()=>Z.forEach(k.Ui,(L=>_.persistence.referenceDelegate.removeReference(S,k.targetId,L)))))))))}catch(S){if(!eu(S))throw S;ue("LocalStore","Failed to update sequence numbers: "+S)}for(const S of y){const k=S.targetId;if(!S.fromCache){const L=_.os.get(k),W=L.snapshotVersion,$=L.withLastLimboFreeSnapshotVersion(W);_.os=_.os.insert(k,$)}}})(s.localStore,u))}async function yx(r,e){const n=Ae(r);if(!n.currentUser.isEqual(e)){ue("SyncEngine","User change. New user:",e.toKey());const s=await Jb(n.localStore,e);n.currentUser=e,(function(u,d){u.ka.forEach((p=>{p.forEach((g=>{g.reject(new me(te.CANCELLED,d))}))})),u.ka.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ru(n,s.hs)}}function vx(r,e){const n=Ae(r),s=n.Na.get(e);if(s&&s.va)return Ne().add(s.key);{let a=Ne();const u=n.Ma.get(e);if(!u)return a;for(const d of u){const p=n.Fa.get(d);a=a.unionWith(p.view.Va)}return a}}function gT(r){const e=Ae(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=hT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fx.bind(null,e),e.Ca.d_=ex.bind(null,e.eventManager),e.Ca.$a=tx.bind(null,e.eventManager),e}function wx(r){const e=Ae(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=px.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gx.bind(null,e),e}class lh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Rh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Tk(this.persistence,new _k,e.initialUser,this.serializer)}Ga(e){return new yk(eg.Zr,this.serializer)}Wa(e){return new kk}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}lh.provider={build:()=>new lh};class bp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Yw(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=yx.bind(null,this.syncEngine),await Qk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new $k})()}createDatastore(e){const n=Rh(e.databaseInfo.databaseId),s=(function(u){return new Mk(u)})(e.databaseInfo);return(function(u,d,p,g){return new Vk(u,d,p,g)})(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,a,u,d,p){return new Uk(s,a,u,d,p)})(this.localStore,this.datastore,e.asyncQueue,(n=>Yw(this.syncEngine,n,0)),(function(){return qw.D()?new qw:new xk})())}createSyncEngine(e,n){return(function(a,u,d,p,g,y,_){const S=new ox(a,u,d,p,g,y);return _&&(S.Qa=!0),S})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(a){const u=Ae(a);ue("RemoteStore","RemoteStore shutting down."),u.L_.add(5),await iu(u),u.k_.shutdown(),u.q_.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}bp.provider={build:()=>new bp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Ki("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e,n,s,a,u){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=a,this.user=Kt.UNAUTHENTICATED,this.clientId=wb.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async d=>{ue("FirestoreClient","Received user=",d.uid),await this.authCredentialListener(d),this.user=d})),this.appCheckCredentials.start(s,(d=>(ue("FirestoreClient","Received new app check token=",d),this.appCheckCredentialListener(d,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ag(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Qf(r,e){r.asyncQueue.verifyOperationInProgress(),ue("FirestoreClient","Initializing OfflineComponentProvider");const n=r.configuration;await e.initialize(n);let s=n.initialUser;r.setCredentialChangeListener((async a=>{s.isEqual(a)||(await Jb(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function Qw(r,e){r.asyncQueue.verifyOperationInProgress();const n=await Tx(r);ue("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,r.configuration),r.setCredentialChangeListener((s=>Hw(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,a)=>Hw(e.remoteStore,a))),r._onlineComponents=e}async function Tx(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ue("FirestoreClient","Using user provided OfflineComponentProvider");try{await Qf(r,r._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(a){return a.name==="FirebaseError"?a.code===te.FAILED_PRECONDITION||a.code===te.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(n))throw n;qo("Error using user provided cache. Falling back to memory cache: "+n),await Qf(r,new lh)}}else ue("FirestoreClient","Using default OfflineComponentProvider"),await Qf(r,new lh);return r._offlineComponents}async function mT(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ue("FirestoreClient","Using user provided OnlineComponentProvider"),await Qw(r,r._uninitializedComponentsProvider._online)):(ue("FirestoreClient","Using default OnlineComponentProvider"),await Qw(r,new bp))),r._onlineComponents}function Ex(r){return mT(r).then((e=>e.syncEngine))}async function Sx(r){const e=await mT(r),n=e.eventManager;return n.onListen=ax.bind(null,e.syncEngine),n.onUnlisten=cx.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=lx.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=hx.bind(null,e.syncEngine),n}function Ax(r,e,n={}){const s=new zr;return r.asyncQueue.enqueueAndForget((async()=>(function(u,d,p,g,y){const _=new _x({next:k=>{_.Za(),d.enqueueAndForget((()=>Zk(u,S)));const L=k.docs.has(p);!L&&k.fromCache?y.reject(new me(te.UNAVAILABLE,"Failed to get document because the client is offline.")):L&&k.fromCache&&g&&g.source==="server"?y.reject(new me(te.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(k)},error:k=>y.reject(k)}),S=new nx(Kp(p.path),_,{includeMetadataChanges:!0,_a:!0});return Jk(u,S)})(await Sx(r),r.asyncQueue,e,n,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rx(r,e,n){if(!n)throw new me(te.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Cx(r,e,n,s){if(e===!0&&s===!0)throw new me(te.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function $w(r){if(!ye.isDocumentKey(r))throw new me(te.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function cg(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Ee()}function ql(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new me(te.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cg(r);throw new me(te.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new me(te.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new me(te.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Cx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yT((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new me(te.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new me(te.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new me(te.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hg{constructor(e,n,s,a){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jw({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new me(te.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new me(te.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jw(e),e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new z1;switch(s.type){case"firstParty":return new H1(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new me(te.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=Xw.get(n);s&&(ue("ComponentProvider","Removing Datastore"),Xw.delete(n),s.terminate())})(this),Promise.resolve()}}function Ix(r,e,n,s={}){var a;const u=(r=ql(r,hg))._getSettings(),d=`${e}:${n}`;if(u.host!=="firestore.googleapis.com"&&u.host!==d&&qo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},u),{host:d,ssl:!1})),s.mockUserToken){let p,g;if(typeof s.mockUserToken=="string")p=s.mockUserToken,g=Kt.MOCK_USER;else{p=$0(s.mockUserToken,(a=r._app)===null||a===void 0?void 0:a.options.projectId);const y=s.mockUserToken.sub||s.mockUserToken.user_id;if(!y)throw new me(te.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Kt(y)}r._authCredentials=new j1(new vb(p,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new dg(this.firestore,e,this._query)}}class xn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xn(this.firestore,e,this._key)}}class Hl extends dg{constructor(e,n,s){super(e,n,Kp(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xn(this.firestore,null,new ye(e))}withConverter(e){return new Hl(this.firestore,e,this._path)}}function Xf(r,e,...n){if(r=gn(r),arguments.length===1&&(e=wb.newId()),Rx("doc","path",e),r instanceof hg){const s=ut.fromString(e,...n);return $w(s),new xn(r,null,new ye(s))}{if(!(r instanceof xn||r instanceof Hl))throw new me(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ut.fromString(e,...n));return $w(s),new xn(r.firestore,r instanceof Hl?r.converter:null,new ye(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new eT(this,"async_queue_retry"),this.Vu=()=>{const s=Kf();s&&ue("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=e;const n=Kf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Kf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise((()=>{}));const n=new zr;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Pu.push(e),this.pu())))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!eu(e))throw e;ue("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(e){const n=this.mu.then((()=>(this.du=!0,e().catch((s=>{this.Eu=s,this.du=!1;const a=(function(d){let p=d.message||"";return d.stack&&(p=d.stack.includes(d.message)?d.stack:d.message+`
`+d.stack),p})(s);throw Ki("INTERNAL UNHANDLED ERROR: ",a),s})).then((s=>(this.du=!1,s))))));return this.mu=n,n}enqueueAfterDelay(e,n,s){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const a=og.createAndSchedule(this,e,n,s,(u=>this.yu(u)));return this.Tu.push(a),a}fu(){this.Eu&&Ee()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then((()=>{this.Tu.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()}))}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class fg extends hg{constructor(e,n,s,a){super(e,n,s,a),this.type="firestore",this._queue=new Zw,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Zw(e),this._firestoreClient=void 0,await e}}}function kx(r,e){const n=typeof r=="object"?r:k_(),s=typeof r=="string"?r:"(default)",a=Dp(n,"firestore").getImmediate({identifier:s});if(!a._initialized){const u=Q0("firestore");u&&Ix(a,...u)}return a}function vT(r){if(r._terminated)throw new me(te.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||xx(r),r._firestoreClient}function xx(r){var e,n,s;const a=r._freezeSettings(),u=(function(p,g,y,_){return new nI(p,g,y,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,yT(_.experimentalLongPollingOptions),_.useFetchStreams)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,a);r._componentsProvider||!((n=a.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),r._firestoreClient=new bx(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&(function(p){const g=p?._online.build();return{_offline:p?._offline.build(g),_online:g}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ko(Ht.fromBase64String(e))}catch(n){throw new me(te.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ko(Ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new me(te.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new me(te.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new me(te.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ze(this._lat,e._lat)||ze(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==a[u])return!1;return!0})(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dx=/^__.*__$/;class Nx{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Us(e,this.data,this.fieldMask,n,this.fieldTransforms):new tu(e,this.data,n,this.fieldTransforms)}}function _T(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee()}}class yg{constructor(e,n,s,a,u,d){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=a,u===void 0&&this.vu(),this.fieldTransforms=u||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new yg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),a=this.Fu({path:s,xu:!1});return a.Ou(e),a}Nu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),a=this.Fu({path:s,xu:!1});return a.vu(),a}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return uh(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(_T(this.Cu)&&Dx.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Mx{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Rh(e)}Qu(e,n,s,a=!1){return new yg({Cu:e,methodName:n,qu:s,path:Bt.emptyPath(),xu:!1,ku:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ox(r){const e=r._freezeSettings(),n=Rh(r._databaseId);return new Mx(r._databaseId,!!e.ignoreUndefinedProperties,n)}function Px(r,e,n,s,a,u={}){const d=r.Qu(u.merge||u.mergeFields?2:0,e,n,a);ST("Data must be an object, but it was:",d,s);const p=TT(s,d);let g,y;if(u.merge)g=new Ln(d.fieldMask),y=d.fieldTransforms;else if(u.mergeFields){const _=[];for(const S of u.mergeFields){const k=Vx(e,S,n);if(!d.contains(k))throw new me(te.INVALID_ARGUMENT,`Field '${k}' is specified in your field mask but missing from your input data.`);Ux(_,k)||_.push(k)}g=new Ln(_),y=d.fieldTransforms.filter((S=>g.covers(S.field)))}else g=null,y=d.fieldTransforms;return new Nx(new kn(p),g,y)}function bT(r,e){if(ET(r=gn(r)))return ST("Unsupported field value:",e,r),TT(r,e);if(r instanceof wT)return(function(s,a){if(!_T(a.Cu))throw a.Bu(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Bu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(a);u&&a.fieldTransforms.push(u)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return(function(s,a){const u=[];let d=0;for(const p of s){let g=bT(p,a.Lu(d));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),d++}return{arrayValue:{values:u}}})(r,e)}return(function(s,a){if((s=gn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return AI(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Rt.fromDate(s);return{timestampValue:oh(a.serializer,u)}}if(s instanceof Rt){const u=new Rt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:oh(a.serializer,u)}}if(s instanceof gg)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ko)return{bytesValue:Gb(a.serializer,s._byteString)};if(s instanceof xn){const u=a.databaseId,d=s.firestore._databaseId;if(!d.isEqual(u))throw a.Bu(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Jp(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof mg)return(function(d,p){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:d.toArray().map((g=>{if(typeof g!="number")throw p.Bu("VectorValues must only contain numeric values.");return Qp(p.serializer,g)}))}}}}}})(s,a);throw a.Bu(`Unsupported field value: ${cg(s)}`)})(r,e)}function TT(r,e){const n={};return _b(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):na(r,((s,a)=>{const u=bT(a,e.Mu(s));u!=null&&(n[s]=u)})),{mapValue:{fields:n}}}function ET(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Rt||r instanceof gg||r instanceof Ko||r instanceof xn||r instanceof wT||r instanceof mg)}function ST(r,e,n){if(!ET(n)||!(function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)})(n)){const s=cg(n);throw s==="an object"?e.Bu(r+" a custom object"):e.Bu(r+" "+s)}}function Vx(r,e,n){if((e=gn(e))instanceof pg)return e._internalPath;if(typeof e=="string")return AT(r,e);throw uh("Field path arguments must be of type string or ",r,!1,void 0,n)}const Lx=new RegExp("[~\\*/\\[\\]]");function AT(r,e,n){if(e.search(Lx)>=0)throw uh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new pg(...e.split("."))._internalPath}catch{throw uh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function uh(r,e,n,s,a){const u=s&&!s.isEmpty(),d=a!==void 0;let p=`Function ${e}() called with invalid data`;n&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(u||d)&&(g+=" (found",u&&(g+=` in field ${s}`),d&&(g+=` in document ${a}`),g+=")"),new me(te.INVALID_ARGUMENT,p+r+g)}function Ux(r,e){return r.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,n,s,a,u){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=a,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new xn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(CT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class zx extends RT{data(){return super.data()}}function CT(r,e){return typeof e=="string"?AT(r,e):e instanceof pg?e._internalPath:e._delegate._internalPath}class jx{convertValue(e,n="none"){switch(Ls(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Vs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return na(e,((a,u)=>{s[a]=this.convertValue(u,n)})),s}convertVectorValue(e){var n,s,a;const u=(a=(s=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||s===void 0?void 0:s.values)===null||a===void 0?void 0:a.map((d=>pt(d.doubleValue)));return new mg(u)}convertGeoPoint(e){return new gg(pt(e.latitude),pt(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Fp(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ll(e));default:return null}}convertTimestamp(e){const n=Br(e);return new Rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ut.fromString(e);We($b(s));const a=new Ul(s.get(1),s.get(3)),u=new ye(s.popFirst(5));return a.isEqual(n)||Ki(`Document ${u} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bx(r,e,n){let s;return s=r?n&&(n.merge||n.mergeFields)?r.toFirestore(e,n):r.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class IT extends RT{constructor(e,n,s,a,u,d){super(e,n,s,a,d),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Hx(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(CT("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Hx extends IT{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fx(r){r=ql(r,xn);const e=ql(r.firestore,fg);return Ax(vT(e),r._key).then((n=>Yx(e,r,n)))}class Gx extends jx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ko(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xn(this.firestore,null,n)}}function e_(r,e,n){r=ql(r,xn);const s=ql(r.firestore,fg),a=Bx(r.converter,e,n);return Wx(s,[Px(Ox(s),"setDoc",r._key,a,r.converter!==null,n).toMutation(r._key,Fi.none())])}function Wx(r,e){return(function(s,a){const u=new zr;return s.asyncQueue.enqueueAndForget((async()=>dx(await Ex(s),a,u))),u.promise})(vT(r),e)}function Yx(r,e,n){const s=n.docs.get(e._key),a=new Gx(r);return new IT(r,a,e._key,s,new qx(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(a){ta=a})(Zo),Bo(new Ns("firestore",((s,{instanceIdentifier:a,options:u})=>{const d=s.getProvider("app").getImmediate(),p=new fg(new B1(s.getProvider("auth-internal")),new G1(s.getProvider("app-check-internal")),(function(y,_){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new me(te.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ul(y.options.projectId,_)})(d,a),d);return u=Object.assign({useFetchStreams:n},u),p._setSettings(u),p}),"PUBLIC").setMultipleInstances(!0)),Ur(ww,"4.7.3",e),Ur(ww,"4.7.3","esm2017")})();const Kx={apiKey:"AIzaSyDP3ayp1fk3tvkAL5fK5Jrujts19I7M1y4",authDomain:"techtutorz.firebaseapp.com",projectId:"techtutorz",storageBucket:"techtutorz.firebasestorage.app",messagingSenderId:"125554426075",appId:"1:125554426075:web:31935b9ac8040de6d3ccfe"},kT=I_(Kx),_l=L1(kT),$f=kx(kT),xT=ri.createContext();function sa(){const r=j.useContext(xT);if(r===void 0)throw new Error("useAuth must be used within an AuthProvider");return r}function Qx({children:r}){const[e,n]=j.useState(null),[s,a]=j.useState(!0);function u(_,S){return bC(_l,_,S)}function d(_,S){return TC(_l,_,S)}function p(){return RC(_l)}function g(_){return _C(_l,_)}j.useEffect(()=>AC(_l,S=>{n(S),a(!1)}),[]);const y={currentUser:e,signup:u,login:d,logout:p,resetPassword:g};return E.jsx(xT.Provider,{value:y,children:!s&&r})}function Xx({isSidebarOpen:r,toggleSidebar:e,categories:n}){const{currentUser:s,logout:a}=sa(),u=Jo();async function d(){try{await a(),u("/login")}catch(g){console.error("Failed to log out",g)}}const p=()=>{r&&e()};return E.jsxs("aside",{className:"sidebar",children:[E.jsx("div",{className:"sidebar-brand",children:"TechTutor"}),E.jsx("nav",{children:E.jsxs("ul",{children:[E.jsx("li",{children:E.jsx(xr,{to:"/",className:({isActive:g})=>"nav-link"+(g?" active":""),end:!0,onClick:p,children:"Home"})}),E.jsx("li",{children:E.jsx(xr,{to:"/meet-instructor",className:({isActive:g})=>"nav-link"+(g?" active":""),onClick:p,children:"Meet Your Instructor"})}),Array.isArray(n)&&n.map(g=>E.jsx("li",{children:E.jsx(xr,{to:`/${g.id}`,className:({isActive:y})=>"nav-link"+(y?" active":""),onClick:p,children:g.name})},g.id)),E.jsx("li",{children:E.jsx(xr,{to:"/quizzes",className:({isActive:g})=>"nav-link"+(g?" active":""),onClick:p,children:"Take A Quiz"})}),E.jsx("li",{children:E.jsx(xr,{to:"/badges",className:({isActive:g})=>"nav-link"+(g?" active":""),onClick:p,children:"My Badges"})})]})}),E.jsx("div",{className:"sidebar-footer",children:s?E.jsxs(E.Fragment,{children:[E.jsx("div",{className:"sidebar-user-email",children:E.jsx("span",{children:s.email})}),E.jsx("button",{onClick:d,className:"sidebar-link-button",children:"Log Out"})]}):E.jsxs(E.Fragment,{children:[E.jsx(xr,{to:"/login",className:"sidebar-button",onClick:p,children:"Log In"}),E.jsx(xr,{to:"/signup",className:"sidebar-button signup-button",onClick:p,children:"Sign Up"})]})})]})}class $x extends ri.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,n){console.error("Uncaught error:",e,n)}render(){return this.state.hasError?E.jsxs("div",{className:"error-boundary",children:[E.jsx("h2",{children:"Something went wrong."}),E.jsx("p",{children:"An unexpected error occurred. Please try refreshing the page."}),E.jsx("details",{style:{whiteSpace:"pre-wrap"},children:this.state.error&&this.state.error.toString()})]}):this.props.children}}const kh=[{id:"computer-basics",name:"Computer Basics"},{id:"mobile-basics",name:"Mobile Phone Basics"},{id:"windows-nav",name:"Windows Navigation"},{id:"internet-connectivity",name:"Internet & Connectivity"},{id:"computer-tips",name:"Computer Tips"},{id:"tips-tricks",name:"Phone Tips & Tricks"},{id:"advanced-pc",name:"Level Up Your PC Skills"},{id:"web-development",name:"Web Development"}];function Jx(){const[r,e]=j.useState(!1),n=Hr(),s=j.useRef(null),a=()=>{e(!r)};return j.useEffect(()=>{s.current&&(s.current.scrollTop=0)},[n.pathname]),E.jsxs("div",{className:`app-layout ${r?"sidebar-open":""}`,children:[E.jsx(B0,{toggleSidebar:a,isSidebarOpen:r}),E.jsx(Xx,{isSidebarOpen:r,toggleSidebar:a,categories:kh}),E.jsx("main",{className:"app-content page-enter-animation",ref:s,children:E.jsx($x,{children:E.jsx(a0,{})})},n.pathname),r&&E.jsx("div",{className:"overlay",onClick:a})]})}const ch={schedule:"Every Monday - Friday, 8:00 AM - 8:40 AM",link:"https://us05web.zoom.us/j/85194826752?pwd=DtrOeA2GorOdIKtm2vWlP4vEdocvHI.1"},Zx=()=>E.jsxs("div",{className:"coming-soon-banner",children:[E.jsx("h2",{children:"Live Tech Chat is Here!"}),E.jsxs("p",{children:["Join us ",ch.schedule,". Click the link below to join."]}),E.jsx("a",{href:ch.link,target:"_blank",rel:"noopener noreferrer",className:"zoom-link-button",children:"Join Live Chat"}),E.jsxs("p",{className:"banner-sub-text",children:["For more details, see the ",E.jsx(tn,{to:"/study/how-to-use-zoom",children:"How to Use Zoom guide"}),"."]})]});function eD(){return E.jsx("div",{className:"home-container",children:E.jsxs("div",{className:"home-content",children:[E.jsx("h1",{className:"home-title",children:"Welcome to TechTutor"}),E.jsx("p",{className:"home-subtitle",children:"Your friendly guide to phones and computers."}),E.jsx("p",{className:"home-instruction",children:"Select a topic from the navigation menu on the left to begin your learning journey!"}),E.jsx(Zx,{})]})})}const Qo=[{id:"what-is-a-computer",category:"computer-basics",title:"What is a Computer?",content:`
      <p>A computer is an electronic device that takes in information (input), stores it, processes it according to instructions (a program), and provides results (output). It manipulates data at high speeds and can be used for a wide variety of tasks, from basic calculations to complex scientific simulations. The fundamental actions of any computer are inputting data, manipulating or processing it, storing it, and recalling or outputting the results</p>
      <h3>Hardware & Software</h3>
      <p>Before we talk about different types of computers, let's talk about two things all computers have in common: hardware and software.</p>
      <ul>
        <li><b>Hardware</b> refers to the tangible, physical parts of a computer system that you can see and touch, such as the monitor, keyboard, central processing unit (CPU), and hard drive. Unlike software, which are intangible programs and instructions, hardware is the physical machinery that enables a computer system to operate. Examples include internal components like memory modules and integrated circuits, as well as external devices like speakers, printers, and network equipment like routers and switches.</li>
        <li><b>Software</b> is a collection of intangible computer programs, instructions, and data that tell a computer's physical hardware what to do and how to do it. It enables electronic devices to perform specific tasks, acting as the link between human-understandable commands and the binary code the hardware processes. Software is divided into two main types: system software, which manages the computer's hardware and operations (like operating systems), and application software, which allows users to perform specific tasks (like word processors or games).</li>
        <li><b>History</b> The history of the computer began with ancient calculation tools like the abacus and astrolabe, progressing to early mechanical calculators in the 17th century, and the concept of the programmable Analytical Engine by Charles Babbage in the 19th century. The 20th century saw the development of the first electronic computers, such as Konrad Zuse's Z3 (1941), the ENIAC (1946), and the introduction of the transistor in the late 1940s. The advent of integrated circuits and microprocessors in the 1970s led to smaller, more powerful personal computers, with major milestones including the first microprocessor (Intel 4004, 1971), the first home computer (Altair 8800, 1975), and the introduction of the graphical user interface (Macintosh, 1984).</li>

      </ul>
    `},{id:"parts-of-a-computer",category:"computer-basics",title:"Basic Parts of a Computer",content:`
      <p>Understanding the basic parts of a computer is the first step to becoming a confident user. This guide will introduce you to the essential hardware components of a standard desktop computer and explain their functions.</p>
      
      <h3>1. The Monitor</h3>
      <ul>
        <li><strong>What it is:</strong> The monitor is the screen that displays visual information, such as text, images, and videos, generated by the computer.</li>
        <li><strong>Purpose:</strong> It serves as the primary output device, allowing you to see and interact with the operating system and software applications.</li>
      </ul>

      <h3>2. The Computer Case (or Tower)</h3>
      <p>The case is the enclosure that houses and protects the main internal components of the computer.</p>
      <ul>
        <li><strong>CPU (Central Processing Unit):</strong> Often called the "brain" of the computer, the CPU executes instructions and performs the calculations necessary for the computer to function.</li>
        <li><strong>Motherboard:</strong> This is the main circuit board that connects all the components, allowing them to communicate with each other.</li>
        <li><strong>RAM (Random-Access Memory):</strong> RAM is the computer's short-term memory. It temporarily stores data that the CPU needs to access quickly. The more RAM you have, the more applications you can run smoothly at the same time.</li>
        <li><strong>Storage (Hard Drive):</strong> This is the computer's long-term memory. It stores your files, documents, applications, and the operating system. There are two main types: the traditional Hard Disk Drive (HDD) and the newer, faster Solid-State Drive (SSD).</li>
        <li><strong>GPU (Graphics Processing Unit):</strong> The GPU, or graphics card, is responsible for rendering images and video for display on the monitor.</li>
        <li><strong>Power Supply Unit (PSU):</strong> The PSU converts electrical power from an outlet into the correct voltage for the computer's internal components.</li>
      </ul>

      <h3>3. The Keyboard</h3>
      <ul>
        <li><strong>What it is:</strong> The keyboard is the primary input device for typing text and entering commands.</li>
        <li><strong>Key Groups:</strong> Keyboards are organized into several groups, including the main typing keys (QWERTY), function keys (F1-F12), navigation keys (arrow keys, Home, End), and a numeric keypad.</li>
      </ul>

      <h3>4. The Mouse</h3>
      <ul>
        <li><strong>What it is:</strong> The mouse is a handheld pointing device that allows you to interact with items on the screen.</li>
        <li><strong>Purpose:</strong> By moving the mouse, you control the cursor on the screen to point, click, and select files, icons, and menus. Most mice also have a scroll wheel for easy navigation of documents and web pages.</li>
      </ul>

      <p>These four components—the monitor, case, keyboard, and mouse—are the fundamental building blocks of a desktop computer system. Understanding the role of each part is essential for effective use and troubleshooting.</p>
    `},{id:"iphone-basics",category:"mobile-basics",title:"Getting Started with iPhone",content:`
      <p>This guide will walk you through the basics of using your new iPhone, from turning it on to using its most important features.</p>
      <h3>1. Getting Started</h3>
      <ul>
        <li><strong>Powering On/Off:</strong> To turn on, hold the side button until the Apple logo appears. To turn off, hold the side button and a volume button, then slide to power off.</li>
        <li><strong>Charging:</strong> Use the included Lightning or USB-C cable to charge. Wireless charging is also available on compatible models.</li>
      </ul>
      <h3>2. Navigating the Screen</h3>
      <ul>
        <li><strong>Home Screen:</strong> This is where all your apps are displayed. Swipe left or right to see more pages.</li>
        <li><strong>Gestures (iPhones with Face ID):</strong>
          <ul>
            <li>Swipe up from the bottom to go Home.</li>
            <li>Swipe up and hold to see all open apps.</li>
            <li>Swipe down from the top-right corner to open the Control Center.</li>
            <li>Swipe down from the top-center/left to see Notifications.</li>
          </ul>
        </li>
        <li><strong>Gestures (iPhones with a Home button):</strong>
          <ul>
            <li>Press the Home button to go Home.</li>
            <li>Double-press the Home button to see open apps.</li>
            <li>Swipe up from the bottom to open the Control Center.</li>
            <li>Swipe down from the top to see Notifications.</li>
          </ul>
        </li>
      </ul>
      <h3>3. Basic Functions</h3>
      <ul>
        <li><strong>Making a Call:</strong> Open the Phone app, select a contact or dial a number, and press the green call button.</li>
        <li><strong>Sending a Text:</strong> Open the Messages app, tap the new message icon, choose a contact, type your message, and press the blue arrow to send.</li>
        <li><strong>Taking Photos:</strong> Open the Camera app. Tap the white circle to take a photo, or hold it to record a video. Swipe to access different modes like Portrait or Panorama.</li>
        <li><strong>Using Siri:</strong> Hold the side button or say “Hey Siri,” then ask your question or give a command.</li>
      </ul>
      <h3>4. The Control Center</h3>
      <p>The Control Center provides quick access to essential functions. You can turn on/off Wi-Fi, adjust brightness and volume, use the flashlight, and control music playback.</p>
      <h3>5. The App Store</h3>
      <ul>
        <li><strong>Downloading Apps:</strong> Open the App Store, search for an app, and tap "Get" or the price to download.</li>
        <li><strong>Updating Apps:</strong> In the App Store, tap your profile picture, scroll down, and tap "Update All".</li>
      </ul>
      <h3>6. Key Settings to Know</h3>
      <ul>
        <li><strong>Wi-Fi & Bluetooth:</strong> Manage your wireless connections.</li>
        <li><strong>Display & Brightness:</strong> Adjust screen brightness and enable Dark Mode.</li>
        <li><strong>Sound & Haptics:</strong> Control ringtones and system sounds.</li>
        <li><strong>Battery:</strong> Check battery usage and enable Low Power Mode.</li>
        <li><strong>Privacy & Security:</strong> Manage app permissions for your camera, microphone, and location.</li>
      </ul>
      <h3>7. Useful Features</h3>
      <ul>
        <li><strong>Screenshots:</strong> Press the side button and volume up button at the same time.</li>
        <li><strong>Find My iPhone:</strong> Helps you locate your phone if it's lost. You can manage this in your Apple ID settings.</li>
        <li><strong>Apple Pay:</strong> Add your cards to the Wallet app for contactless payments.</li>
      </ul>
      <h3>8. Staying Organized</h3>
      <ul>
        <li><strong>Folders:</strong> Drag one app over another to create a folder.</li>
        <li><strong>Widgets:</strong> Add widgets like weather or calendars to your Home Screen for quick information.</li>
        <li><strong>Search (Spotlight):</strong> Swipe down on the Home Screen to search for apps, contacts, or information on the web.</li>
      </ul>
      <h3>9. Keeping Your iPhone Updated</h3>
      <p>Go to <strong>Settings > General > Software Update</strong> to install the latest iOS updates for new features and security improvements.</p>
      <h3>10. Basic Troubleshooting</h3>
      <ul>
        <li><strong>Frozen App:</strong> Swipe up from the bottom (or double-press Home) and swipe the app's preview away to close it.</li>
        <li><strong>Unresponsive iPhone:</strong> A force restart can often solve issues. The method varies by model, but it's typically a quick press of volume up, then volume down, then hold the side button.</li>
      </ul>
      <p>By learning these basics, you can confidently use your iPhone for communication, productivity, and entertainment.</p>
    `},{id:"android-basics",category:"mobile-basics",title:"Getting Started with Android",content:`
      <p>This guide will walk you through the basics of using your new Android phone, from turning it on to using its most important features.</p>
      <h3>1. Getting Started</h3>
      <ul>
        <li><strong>Powering On/Off:</strong> To turn on, hold the power button until the screen lights up. To turn off, hold the power button until the power menu appears, then select "Power Off".</li>
        <li><strong>Charging:</strong> Use the included USB-C cable (or Micro-USB on older devices). Many modern Android phones also support wireless charging.</li>
      </ul>
      <h3>2. Navigating the Screen</h3>
      <ul>
        <li><strong>Home Screen:</strong> This is the main area where your apps and widgets are displayed. You can swipe left or right to access more screens.</li>
        <li><strong>Common Gestures (Newer Android):</strong>
          <ul>
            <li>Swipe up from the bottom to go Home.</li>
            <li>Swipe up and hold to see recent apps.</li>
            <li>Swipe from the left or right edge to go back.</li>
            <li>Swipe down from the top to see Notifications and Quick Settings.</li>
          </ul>
        </li>
        <li><strong>Navigation Buttons (Older Android):</strong>
          <ul>
            <li>The Home button takes you to your Home screen.</li>
            <li>The square/recents button shows open apps.</li>
            <li>The back arrow goes back one screen.</li>
          </ul>
        </li>
      </ul>
      <h3>3. Basic Functions</h3>
      <ul>
        <li><strong>Making a Call:</strong> Open the Phone app, select a contact or dial a number, and press the green call button.</li>
        <li><strong>Sending a Text:</strong> Open the Messages app, tap the new message icon, choose a contact, type your message, and press send.</li>
        <li><strong>Taking Photos:</strong> Open the Camera app. Tap the shutter button to take a photo, or hold it to record a video. Swipe for options like Portrait or Night Mode.</li>
        <li><strong>Using Google Assistant:</strong> Say “Hey Google” or long-press the Home button/power button, then ask your question or give a command.</li>
      </ul>
      <h3>4. The Quick Settings Panel</h3>
      <p>Swipe down from the top of the screen to open Quick Settings. Here you can quickly control Wi-Fi, Bluetooth, Airplane Mode, the flashlight, and screen brightness.</p>
      <h3>5. The Google Play Store</h3>
      <ul>
        <li><strong>Downloading Apps:</strong> Open the Play Store, search for an app, and tap "Install".</li>
        <li><strong>Updating Apps:</strong> In the Play Store, tap your profile picture, select "Manage apps & device", and then "Update all".</li>
      </ul>
      <h3>6. Key Settings to Know</h3>
      <ul>
        <li><strong>Network & Internet:</strong> Manage your Wi-Fi, Bluetooth, and mobile data connections.</li>
        <li><strong>Display:</strong> Adjust brightness, enable Dark Mode, and set your wallpaper.</li>
        <li><strong>Sounds & Vibration:</strong> Change ringtones and notification sounds.</li>
        <li><strong>Battery:</strong> View battery usage and enable Battery Saver mode.</li>
        <li><strong>Security & Privacy:</strong> Set up your screen lock (PIN, fingerprint, face unlock) and manage app permissions.</li>
      </ul>
      <h3>7. Useful Features</h3>
      <ul>
        <li><strong>Screenshots:</strong> Press the Power and Volume Down buttons at the same time.</li>
        <li><strong>Find My Device:</strong> Linked to your Google Account, this helps you locate your phone if it's lost.</li>
        <li><strong>Mobile Payments:</strong> Add your cards to Google Wallet to make contactless payments.</li>
      </ul>
      <h3>8. Staying Organized</h3>
      <ul>
        <li><strong>Folders:</strong> Drag one app over another to create a folder.</li>
        <li><strong>Widgets:</strong> Long-press on an empty area of the Home screen to add widgets like weather or calendars.</li>
        <li><strong>Search:</strong> Swipe up from the bottom of the screen or use the Google search bar to find apps, contacts, or information on the web.</li>
      </ul>
      <h3>9. Keeping Your Phone Updated</h3>
      <p>Go to <strong>Settings > System > Software Update</strong> to install the latest Android updates for new features and security improvements.</p>
      <h3>10. Basic Troubleshooting</h3>
      <ul>
        <li><strong>Frozen App:</strong> Open the recent apps screen and swipe the app's preview away to close it.</li>
        <li><strong>Unresponsive Phone:</strong> Hold the Power button (sometimes with the Volume Down button) until the phone restarts.</li>
      </ul>
      <p>By learning these basics, you can confidently use your Android device for communication, productivity, and entertainment.</p>
    `},{id:"windows-desktop",category:"windows-nav",title:"Understanding the Windows Desktop",content:`
      <p>Learn about the Start Menu, Taskbar, and other key elements of the Windows desktop.</p>
      <h3>1. The Start Menu</h3>
      <ul>
        <li><strong>Location:</strong> Bottom-left corner (the Windows logo button).</li>
        <li><strong>Purpose:</strong> Central hub for programs, settings, and power options.</li>
        <li><strong>Key Features:</strong>
          <ul>
            <li><strong>Pinned Apps:</strong> Your favorite programs (like Netflix… I mean, Word).</li>
            <li><strong>All Apps List:</strong> Scrollable list of every installed program.</li>
            <li><strong>Search Bar:</strong> Type anything (apps, files, settings) → Windows finds it.</li>
            <li><strong>Power Options:</strong> Sleep, Restart, Shut Down (a.k.a. the “I give up” button).</li>
            <li><strong>User Profile:</strong> Access account settings, sign out, or switch users.</li>
          </ul>
        </li>
        <li><strong>Cool Trick:</strong> Press the Windows Key on the keyboard → Start Menu pops up instantly.</li>
      </ul>

      <h3>2. The Taskbar</h3>
      <ul>
        <li><strong>Location:</strong> Usually the strip along the bottom of the screen.</li>
        <li><strong>Purpose:</strong> Quick access to apps, notifications, and system controls.</li>
        <li><strong>Key Features:</strong>
          <ul>
            <li><strong>Pinned Apps:</strong> Programs you always want one click away.</li>
            <li><strong>Open Apps:</strong> Every open program has a button here. Hover → preview window.</li>
            <li><strong>Search/Task View Buttons:</strong> Search computer, or view all open windows/timelines.</li>
            <li><strong>System Tray (Right Side):</strong> Clock, volume, Wi-Fi, battery, notifications.</li>
            <li><strong>Show Desktop Button:</strong> Tiny vertical strip in the far-right corner → click to instantly minimize everything.</li>
          </ul>
        </li>
        <li><strong>Cool Trick:</strong> Right-click the Taskbar → tons of options (Task Manager, Toolbars, etc.).</li>
      </ul>

      <h3>3. The Desktop Itself</h3>
      <ul>
        <li><strong>Location:</strong> The big empty background space (yes, the thing people cover with 9,000 icons).</li>
        <li><strong>Purpose:</strong> A workspace for shortcuts, files, and folders.</li>
        <li><strong>Key Features:</strong>
          <ul>
            <li><strong>Icons:</strong> Quick access to apps, files, or drives.</li>
            <li><strong>Wallpaper/Background:</strong> Customizable with images, colors, or slideshows.</li>
            <li><strong>Context Menu:</strong> Right-click → options like “View,” “Sort by,” “Display settings.”</li>
          </ul>
        </li>
        <li><strong>Cool Trick:</strong> Press Windows Key + D → instantly show the desktop (minimize everything).</li>
      </ul>

      <h3>4. File Explorer</h3>
      <ul>
        <li><strong>Location:</strong> Yellow folder icon on the Taskbar or Start Menu.</li>
        <li><strong>Purpose:</strong> Browse, organize, and manage files/folders.</li>
        <li><strong>Key Features:</strong>
          <ul>
            <li><strong>Quick Access:</strong> Recently used files/folders.</li>
            <li><strong>Navigation Pane:</strong> Drives, Downloads, Documents, etc.</li>
            <li><strong>Address Bar:</strong> Type a location or copy a file path.</li>
          </ul>
        </li>
        <li><strong>Cool Trick:</strong> Press Windows Key + E → instantly opens File Explorer.</li>
      </ul>

      <h3>5. Notification Center</h3>
      <ul>
        <li><strong>Location:</strong> Bottom-right corner (speech bubble icon or clock area).</li>
        <li><strong>Purpose:</strong> Shows system and app notifications (updates, emails, reminders).</li>
        <li><strong>Key Features:</strong>
          <ul>
            <li><strong>Quick Settings:</strong> Wi-Fi, Bluetooth, brightness, airplane mode.</li>
            <li><strong>Notifications:</strong> Grouped alerts from apps and Windows.</li>
          </ul>
        </li>
        <li><strong>Cool Trick:</strong> Press Windows Key + A → opens Notifications & Quick Settings instantly.</li>
      </ul>

      <h3>6. Other Useful Bits</h3>
      <ul>
        <li><strong>Recycle Bin:</strong> Stores deleted files until you empty it (Windows’ version of regret).</li>
        <li><strong>Task View (Windows Key + Tab):</strong> Shows all open windows and lets you create Virtual Desktops.</li>
        <li><strong>Search Bar (Windows Key + S):</strong> Instantly search apps, files, or web results.</li>
        <li><strong>Alt + Tab:</strong> Switch between open apps (like a boss).</li>
      </ul>
    `},{id:"file-explorer",category:"windows-nav",title:"Using File Explorer",content:`
      <p>Learn how to find, open, and manage your files and folders in Windows.</p>
      <h3>1. What Are Files and Folders?</h3>
      <ul>
        <li><strong>Files:</strong> Individual items (documents, pictures, music, videos, programs). Examples: resume.docx, vacation.jpg, song.mp3.</li>
        <li><strong>Folders:</strong> Containers that hold files (and other folders). Example: “Pictures” folder might contain multiple image files.</li>
        <li><strong>Cool Trick:</strong> Think of folders like a filing cabinet, and files like the papers inside.</li>
      </ul>

      <h3>2. File Explorer (Your Command Center)</h3>
      <ul>
        <li><strong>Icon:</strong> Yellow folder, usually pinned on Taskbar or Start Menu.</li>
        <li><strong>Purpose:</strong> Lets you find, open, and manage files/folders.</li>
        <li><strong>Main Parts:</strong>
          <ul>
            <li><strong>Navigation Pane (left side):</strong> Quick access to Desktop, Documents, Downloads, etc.</li>
            <li><strong>Address Bar (top):</strong> Shows the folder path (e.g., C:\\Users\\Bob\\Documents).</li>
            <li><strong>Ribbon Menu (top):</strong> Tools like Copy, Paste, New Folder, Delete.</li>
            <li><strong>File List (center):</strong> Displays files and folders in the selected location.</li>
          </ul>
        </li>
        <li><strong>Shortcut:</strong> Press Windows Key + E to open File Explorer instantly.</li>
      </ul>

      <h3>3. Finding Files</h3>
      <ul>
        <li><strong>Search Box (top right of File Explorer):</strong> Type a file name or keyword.</li>
        <li><strong>Start Menu Search:</strong> Press Windows Key, start typing the file name.</li>
        <li><strong>Filters:</strong> Narrow results by file type (documents, pictures, videos).</li>
        <li><strong>Cool Trick (Use wildcards):</strong>
          <ul>
            <li><code>*.jpg</code> → Finds all JPG images in the folder.</li>
            <li><code>report*</code> → Finds all files starting with “report.”</li>
          </ul>
        </li>
      </ul>

      <h3>4. Opening Files and Folders</h3>
      <ul>
        <li><strong>Double-Click a file:</strong> Opens in its default program.</li>
        <li><strong>Right-Click → Open With…:</strong> Choose a specific program.</li>
        <li><strong>Single-Click a folder:</strong> Opens it to show contents.</li>
      </ul>

      <h3>5. Managing Files and Folders</h3>
      <ul>
        <li><strong>Create a New Folder:</strong> Right-click → New → Folder (or press Ctrl + Shift + N).</li>
        <li><strong>Copy a File:</strong> Ctrl + C (copy) → Ctrl + V (paste).</li>
        <li><strong>Move a File:</strong> Drag and drop (or Ctrl + X → Ctrl + V).</li>
        <li><strong>Rename:</strong> Right-click → Rename, or press F2.</li>
        <li><strong>Delete:</strong> Right-click → Delete (or press Delete key).</li>
        <li><strong>Restore Deleted Items:</strong> Open Recycle Bin → Right-click → Restore.</li>
      </ul>

      <h3>6. Organizing Files</h3>
      <ul>
        <li><strong>Sort & Group:</strong> Right-click empty space → Sort by (Name, Date, Type, Size).</li>
        <li><strong>Pin to Quick Access:</strong> Right-click a frequently used folder → Pin to Quick Access.</li>
        <li><strong>Drag to Taskbar/Start Menu:</strong> Pin favorite files/folders for instant access.</li>
      </ul>

      <h3>7. File Extensions (a.k.a. What the Heck Is .docx?)</h3>
      <ul>
        <li>The part after the dot in a filename tells Windows what type of file it is.</li>
        <li><strong>.docx</strong> = Word Document</li>
        <li><strong>.jpg</strong> = Image</li>
        <li><strong>.mp3</strong> = Audio</li>
        <li><strong>.exe</strong> = Program</li>
        <li><strong>Pro Tip:</strong> Turn on extensions for clarity: In File Explorer → View → Show → File name extensions.</li>
      </ul>

      <h3>8. Cool Tricks</h3>
      <ul>
        <li><strong>Shift + Right-Click a File:</strong> “Copy as Path” (perfect for sending exact file locations).</li>
        <li><strong>Ctrl + Z:</strong> Undo last file action (like accidental delete or rename).</li>
        <li><strong>Alt + Enter:</strong> View file/folder properties instantly (size, location, permissions).</li>
        <li><strong>Windows Key + V:</strong> Opens Clipboard History (copy/paste multiple things).</li>
      </ul>
    `},{id:"understanding-specs",category:"computer-basics",title:"Understanding Computer Specs (CPU, RAM, Storage)",content:`
      <p>When you look at a new computer, you'll see terms like CPU, RAM, and Storage. Understanding what these mean can help you choose the right device for your needs.</p>
      
      <h3>CPU (Central Processing Unit)</h3>
      <p>The CPU is the "brain" of the computer. It performs all the calculations and executes the commands that make your computer work. A faster CPU means your computer can think and perform tasks more quickly.</p>
      <ul>
        <li><strong>Cores:</strong> Modern CPUs have multiple "cores," which are like individual brains. More cores allow the computer to work on multiple tasks at once without slowing down.</li>
        <li><strong>Clock Speed (GHz):</strong> Measured in gigahertz (GHz), this tells you how many operations a single core can perform per second. A higher number is generally faster.</li>
      </ul>

      <h3>RAM (Random-Access Memory)</h3>
      <p>RAM is your computer's short-term memory. It's where the computer keeps the data for the programs and files you are actively using. Think of it like your desk space: the more RAM you have, the more things you can have open and work on at the same time without it getting cluttered and slow.</p>
      <ul>
        <li><strong>Capacity (GB):</strong> Measured in gigabytes (GB). For general use like browsing the web and email, 8GB is good. For more demanding tasks, 16GB or more is better.</li>
        <li><strong>Important:</strong> RAM is volatile, which means its contents are erased when the computer is turned off.</li>
      </ul>

      <h3>Storage (Hard Drive or SSD)</h3>
      <p>Storage is your computer's long-term memory. It's where your files, photos, applications, and the operating system are saved permanently, even when the computer is off. Think of it like a filing cabinet.</p>
      <ul>
        <li><strong>HDD (Hard Disk Drive):</strong> An older, mechanical drive. It's cheaper and offers more space, but it's slower.</li>
        <li><strong>SSD (Solid-State Drive):</strong> A newer type of drive with no moving parts. It's much faster, making your computer start up and open programs very quickly. Most modern computers use SSDs.</li>
      </ul>
    `},{id:"speed-up-computer",category:"computer-tips",title:"Speeding Up Your Computer",content:`
      <p>If your computer is running slow, there are several simple things you can do to improve its performance.</p>
      <ul>
        <li><strong>Close Unused Programs:</strong> Every program you have open uses RAM. Close any applications you're not actively using to free up resources.</li>
        <li><strong>Manage Startup Programs:</strong> Many programs set themselves to start automatically when you turn on your computer. You can disable unnecessary startup programs through the Task Manager (Ctrl+Shift+Esc) in Windows.</li>
        <li><strong>Free Up Disk Space:</strong> A nearly full hard drive can slow your computer down. Use the Disk Cleanup tool in Windows to remove temporary files, or manually delete files you no longer need.</li>
        <li><strong>Restart Your Computer:</strong> Restarting your computer clears out its temporary memory (RAM) and can resolve many performance issues. It's a good idea to restart it at least once every few days.</li>
      </ul>
    `},{id:"improve-battery",category:"tips-tricks",title:"Improving Phone Battery Life",content:`
      <p>Get more out of your smartphone's battery with these simple tips.</p>
      <ul>
        <li><strong>Lower Screen Brightness:</strong> The screen is one of the biggest battery drains. Lowering the brightness or enabling "Auto-Brightness" can save a lot of power.</li>
        <li><strong>Use Wi-Fi When Possible:</strong> Connecting to Wi-Fi uses less battery than using mobile data (4G/5G).</li>
        <li><strong>Manage Background App Refresh:</strong> Stop apps from updating in the background. You can manage this in your phone's settings for each app individually.</li>
        <li><strong>Enable Low Power Mode / Battery Saver:</strong> Both iPhone and Android have a mode that reduces background activity and other non-essential features to extend battery life when you're running low.</li>
        <li><strong>Turn off Unnecessary Notifications:</strong> Every notification that wakes up your screen uses a little bit of battery. Turn off notifications for apps that you don't need to hear from immediately.</li>
      </ul>
    `},{id:"keyboard-shortcuts",category:"computer-tips",title:"Essential Keyboard Shortcuts",content:`
      <p>Keyboard shortcuts can save you a lot of time. Here are some of the most useful ones for Windows:</p>
      <ul>
        <li><strong>Ctrl + C:</strong> Copy the selected item.</li>
        <li><strong>Ctrl + X:</strong> Cut the selected item.</li>
        <li><strong>Ctrl + V:</strong> Paste the copied or cut item.</li>
        <li><strong>Ctrl + Z:</strong> Undo the last action.</li>
        <li><strong>Ctrl + F:</strong> Find text on a page or in a document.</li>
        <li><strong>Alt + Tab:</strong> Switch between your open windows.</li>
        <li><strong>Windows Key + D:</strong> Show or hide the desktop.</li>
        <li><strong>Ctrl + Shift + Esc:</strong> Open the Task Manager.</li>
      </ul>
    `},{id:"pc-maintenance",category:"computer-tips",title:"Beginner's Guide to PC Maintenance",content:`
      <p>Just like a car, your computer needs regular maintenance to run smoothly and last longer. These simple steps can help keep your PC in great shape.</p>

      <h3>1. Keep it Physically Clean</h3>
      <p>Dust is the enemy of electronics. It can clog fans and cause components to overheat.</p>
      <ul>
        <li><strong>Exterior:</strong> Once a month, wipe down the computer case, keyboard, and mouse with a dry or slightly damp cloth.</li>
        <li><strong>Vents:</strong> Ensure the air vents on the case are not blocked by walls or other objects. Good airflow is crucial for cooling.</li>
        <li><strong>Monitor:</strong> Use a soft, microfiber cloth to gently wipe the screen. Avoid harsh chemicals.</li>
      </ul>

      <h3>2. Run Software Updates</h3>
      <p>Updates are critical for security and performance. They patch security holes and often include performance improvements.</p>
      <ul>
        <li><strong>Windows Update:</strong> Go to <strong>Settings > Update & Security > Windows Update</strong> and click "Check for updates". It's a good habit to do this at least once a month.</li>
        <li><strong>Other Software:</strong> Keep your web browser (like Chrome or Edge) and antivirus software up to date. They usually update automatically, but it's good to check.</li>
      </ul>

      <h3>3. Clean Up Your Hard Drive</h3>
      <p>A full hard drive can slow down your computer. Regularly cleaning out unnecessary files can help.</p>
      <ul>
        <li><strong>Disk Cleanup:</strong> Windows has a built-in tool called Disk Cleanup. Search for it in the Start Menu. It can safely remove temporary files and other junk.</li>
        <li><strong>Empty the Recycle Bin:</strong> Files you delete go to the Recycle Bin. Right-click the Recycle Bin on your desktop and select "Empty Recycle Bin" to permanently delete them and free up space.</li>
      </ul>

      <h3>4. Protect Against Viruses</h3>
      <p>Malware can slow down your computer and compromise your security. Windows comes with a solid, free antivirus program called <strong>Windows Security</strong> (also known as Windows Defender).</p>
      <ul><li>Make sure it's running and run a "Full scan" periodically to check for any threats.</li></ul>
    `},{id:"online-safety-basics",category:"internet-connectivity",title:"Staying Safe Online: A Beginner's Guide",content:`
      <p>The internet is a powerful tool, but it's important to be careful to protect your personal information. Following a few simple rules can keep you safe from common threats.</p>

      <h3>1. Create Strong, Unique Passwords</h3>
      <p>A strong password is your first line of defense.</p>
      <ul>
        <li>Don't use simple words like "password123" or personal information like your birthday.</li>
        <li>A good password is long (at least 12 characters) and mixes uppercase letters, lowercase letters, numbers, and symbols (like !@#$).</li>
        <li><strong>Tip:</strong> Think of a short, memorable sentence and use the first letter of each word, adding numbers and symbols. For example, "My first dog was a beagle!" could become <strong>M1dwab!</strong>.</li>
        <li>Try to use a different password for each important account, especially your email and online banking.</li>
      </ul>

      <h3>2. Watch Out for Phishing Scams</h3>
      <p>Phishing is when criminals try to trick you into giving them your information. They often do this through fake emails, texts, or website links.</p>
      <ul>
        <li>Be suspicious of messages that create a sense of urgency, like "Your account will be locked!" or "You've won a prize!".</li>
        <li>Never click on links or download attachments from senders you don't recognize.</li>
        <li>If an email looks like it's from your bank, don't click the link. Instead, open your web browser and type in your bank's website address yourself.</li>
      </ul>

      <h3>3. Be Careful What You Download</h3>
      <ul>
        <li>Only download software from official websites or trusted sources like the Microsoft Store.</li>
        <li>"Free" software from unknown sites can sometimes contain viruses or other malicious programs.</li>
      </ul>

      <h3>4. Be Smart on Public Wi-Fi</h3>
      <p>Public Wi-Fi (like at a coffee shop or airport) is not always secure. It's best to avoid doing sensitive things like online banking or entering passwords when connected to a public network.</p>

      <h3>5. Real-World Example: Spotting a Fake Shopping Website</h3>
      <p>You might see an online ad for a product at a price that seems too good to be true (like a $2,000 bike for $50). This is a major red flag. Here’s how to investigate before you buy:</p>
      <ul>
        <li><strong>Check the Domain Age:</strong> Scammers create new websites constantly. Use a free "WHOIS lookup" tool online (like whois.com) to check the website's "Creation Date". If the site is only a few weeks or months old, it is almost certainly a scam.</li>
        <li><strong>Look for Contact Information:</strong> A real business will have a physical address and a customer service phone number. A scam site might only have a generic email address or a simple contact form.</li>
        <li><strong>Examine Payment Options:</strong> Legitimate stores offer standard payment methods like credit cards and PayPal. If a site pushes you to use non-reversible methods like Zelle, Cash App, or a wire transfer, it is a scam.</li>
        <li><strong>Search for External Reviews:</strong> Don't trust reviews on the site itself. Search Google for "[Website Name] reviews" or "[Website Name] scam". The absence of any reviews for a supposed business is a very bad sign.</li>
      </ul>
      <p>Trust your instincts! If a deal feels too good to be true, it almost always is.</p>
    `},{id:"email-basics",category:"internet-connectivity",title:"Email Basics: Your Guide to Digital Mail",content:`
      <p>Email (electronic mail) is a fundamental tool for communication in today's world. It's how you can apply for jobs, stay in touch with family, and manage online accounts. This guide covers the absolute essentials.</p>

      <h3>1. What is an Email Address?</h3>
      <p>An email address has two main parts, separated by the "@" symbol: <strong>username@provider.com</strong></p>
      <ul>
        <li><strong>Username:</strong> The unique name you choose (e.g., <code>john.smith123</code>).</li>
        <li><strong>Provider:</strong> The company that provides the email service (e.g., <code>gmail.com</code>, <code>outlook.com</code>, <code>yahoo.com</code>).</li>
      </ul>

      <h3>2. Composing a New Email</h3>
      <p>When you click "Compose" or "New Email," you'll see a few fields:</p>
      <ul>
        <li><strong>To:</strong> The email address of the person you are sending the message to.</li>
        <li><strong>Subject:</strong> A brief, clear title for your email. <strong>Never leave this blank!</strong> A good subject helps the recipient know what the email is about.</li>
        <li><strong>Body:</strong> The main area where you type your full message.</li>
      </ul>

      <h3>3. Replying and Attachments</h3>
      <ul><li><strong>Reply:</strong> Sends your response only to the person who sent you the original email. Be careful with "Reply All," which sends to everyone on the email.</li><li><strong>Attachments:</strong> Look for a paperclip icon (📎) to attach files like a resume or a photo to your email.</li></ul>
    `},{id:"user-accounts-windows",category:"computer-tips",title:"Managing User Accounts in Windows",content:`
      <p>User accounts in Windows help keep your files and settings separate from others who use the same computer. They also play a crucial role in security. This guide explains the different types of accounts and how to manage them.</p>

      <h3>1. Administrator vs. Standard User: What's the Difference?</h3>
      <p>Windows has two main types of user accounts, each with different levels of permission.</p>
      <ul>
        <li><strong>Administrator Account:</strong> Think of this as the "owner" or "master" account. An administrator has full control over the computer. They can install any software, change any system setting, access all files, and create or delete other user accounts. The first account created on a new PC is usually an administrator account.</li>
        <li><strong>Standard User Account:</strong> This account is for everyday use. A standard user can run applications, browse the internet, and change their own personal settings (like their desktop wallpaper). However, they cannot install most new programs or make major changes that affect the whole system without providing the administrator's password.</li>
      </ul>
      <p><strong>Why it matters:</strong> Using a Standard account for daily tasks is much safer. If you accidentally click on something malicious, it has a much harder time damaging the core system files because it doesn't have administrator permissions.</p>

      <h3>2. How to Add a New User Account</h3>
      <p>It's a great idea to create separate standard accounts for other family members or users.</p>
      <ol>
        <li>Go to <strong>Settings</strong> (the gear icon in the Start Menu).</li>
        <li>Click on <strong>Accounts</strong>.</li>
        <li>Select <strong>Family & other users</strong> from the side menu.</li>
        <li>Under "Other users," click <strong>Add someone else to this PC</strong>.</li>
        <li>Windows will encourage you to use a Microsoft account. For a simple local account, click <strong>"I don't have this person's sign-in information"</strong> and on the next screen, click <strong>"Add a user without a Microsoft account."</strong></li>
        <li>Enter a username for the new account, and set a password. It's a good idea to add password hints in case they forget.</li>
      </ol>
      <p>The new account will be created as a Standard User by default, which is perfect for most situations.</p>

      <h3>3. Managing Your Account Settings</h3>
      <p>In <strong>Settings > Accounts</strong>, you can manage your own settings:</p>
      <ul>
        <li><strong>Your info:</strong> You can change your account picture here.</li>
        <li><strong>Sign-in options:</strong> This is where you can change your password or set up other sign-in methods like a PIN.</li>
      </ul>
    `},{id:"web-browsing-basics",category:"internet-connectivity",title:"Introduction to Web Browsing",content:`
      <p>A web browser is your gateway to the internet. It's the application you use to visit websites, search for information, and watch videos. This guide will cover the fundamental skills you need to navigate the web confidently.</p>

      <h3>1. What is a Web Browser?</h3>
      <p>A web browser is a software application for accessing information on the World Wide Web. Common examples include:</p>
      <ul>
        <li><strong>Google Chrome</strong> (the most popular)</li>
        <li><strong>Microsoft Edge</strong> (built into Windows)</li>
        <li><strong>Mozilla Firefox</strong></li>
      </ul>
      <p>They all do the same basic job: they get you to websites.</p>

      <h3>2. The Address Bar: Your Digital GPS</h3>
      <p>The long bar at the very top of the browser is the address bar. This is where you type the address of a website, also known as a <strong>URL</strong> (Uniform Resource Locator).</p>
      <ul>
        <li>A URL often starts with <code>www.</code> and ends with something like <code>.com</code>, <code>.org</code>, or <code>.gov</code>. For example: <code>www.google.com</code>.</li>
        <li>You can also use the address bar to search. Just type what you're looking for (e.g., "weather today") and press Enter.</li>
      </ul>

      <h3>3. Using Tabs to Multitask</h3>
      <p>Tabs allow you to have multiple web pages open in a single browser window. This is great for comparing information or keeping your email open while you browse other sites.</p>
      <ul>
        <li>Look for a small <strong>plus sign (+)</strong> at the top of the browser to open a new tab.</li>
        <li>You can switch between open pages by clicking on their tabs.</li>
        <li>To close a tab, click the small 'x' on the tab itself.</li>
      </ul>

      <h3>4. Bookmarks: Saving Your Favorites</h3>
      <p>If you find a website you want to visit again, you can save it as a bookmark (or "favorite"). Look for a <strong>star icon (☆)</strong> in the address bar. Clicking it will save the current page to a list you can easily access later.</p>

      <h3>5. A Quick Safety Tip: Look for the Lock</h3>
      <p>When you are on a website where you might enter sensitive information (like a password or credit card number), look for a small <strong>padlock icon (🔒)</strong> in the address bar. This means your connection to the site is encrypted and more secure.</p>
    `},{id:"wifi-basics",category:"internet-connectivity",title:"Connecting to Wi-Fi & Understanding Mobile Data",content:`
      <p>Getting online is one of the most important things you can do with your computer or phone. This guide explains the two main ways to connect: Wi-Fi and Mobile Data.</p>

      <h3>1. What is Wi-Fi?</h3>
      <p>Wi-Fi is a wireless technology that provides internet access over a short distance, typically inside a building like your home, a library, or a coffee shop. It uses a device called a <strong>router</strong> to create a wireless network.</p>
      <ul>
        <li><strong>Pros:</strong> Generally fast, stable, and doesn't use your phone's data plan. Ideal for large downloads, streaming video, and general browsing at home.</li>
        <li><strong>Cons:</strong> Limited range. You must be physically near the router to connect.</li>
      </ul>

      <h3>2. What is Mobile Data (4G/5G)?</h3>
      <p>Mobile data is internet access provided by your cell phone company. It allows you to get online almost anywhere you have a cell signal.</p>
      <ul>
        <li><strong>Pros:</strong> Very convenient; works on the go.</li>
        <li><strong>Cons:</strong> It uses your phone's data plan, which can be limited and may cost money if you go over your allowance. It can also be slower than Wi-Fi and drain your phone's battery faster.</li>
      </ul>
      <p><strong>Key takeaway:</strong> When you're at home or in a trusted place with a network, always try to use Wi-Fi to save your mobile data and battery.</p>

      <h3>3. How to Connect to Wi-Fi</h3>
      <ul>
        <li><strong>On a Windows PC:</strong> Click the network icon (looks like a globe or Wi-Fi symbol) in the bottom-right corner of the taskbar. A list of available networks will appear. Click the one you want to connect to, enter the password if required, and click "Connect".</li>
        <li><strong>On a Phone (iPhone & Android):</strong> Go to <strong>Settings</strong> and tap on <strong>Wi-Fi</strong>. Your phone will scan for nearby networks. Tap the name of the network you want to join and enter the password.</li>
      </ul>

      <h3>A Note on Security: Public vs. Private Wi-Fi</h3>
      <p>Your home Wi-Fi is a <strong>private</strong> network, protected by a password. Wi-Fi at a public place like an airport or coffee shop is a <strong>public</strong> network. Be cautious on public Wi-Fi—it's best to avoid logging into sensitive accounts like your bank, as these networks can be less secure.</p>
    `},{id:"antivirus-firewall",category:"internet-connectivity",title:"Antivirus & Firewalls: Your PC's Bodyguards",content:`
      <p>When you connect to the internet, your computer is exposed to the outside world. Antivirus software and firewalls are two essential tools that work together to protect your computer from threats.</p>

      <h3>1. What is Antivirus Software?</h3>
      <p>Think of antivirus software as a security guard for your computer. Its job is to detect, block, and remove malicious software (often called "malware") like viruses, spyware, and ransomware.</p>
      <ul>
        <li>It actively scans files you download, websites you visit, and programs you run to look for known threats.</li>
        <li><strong>Good News:</strong> Windows comes with a powerful, free antivirus program called <strong>Windows Security</strong> (also known as Windows Defender). For most users, this is all you need!</li>
      </ul>

      <h3>2. What is a Firewall?</h3>
      <p>If antivirus is the security guard, the firewall is the locked front door. A firewall monitors the traffic coming into and going out of your computer over the internet. It acts as a barrier, blocking unauthorized access attempts from hackers and malicious software.</p>
      <ul>
        <li>It helps prevent outsiders from gaining access to your computer without your permission.</li>
        <li><strong>Good News:</strong> Windows also has a built-in firewall that is turned on by default. You can find it by searching for "Windows Defender Firewall" in the Start Menu.</li>
      </ul>

      <h3>3. Do You Need Both? Yes!</h3>
      <p>They perform two different but equally important jobs:</p>
      <ul>
        <li>The <strong>Firewall</strong> stops unwanted visitors from getting to your door.</li>
        <li>The <strong>Antivirus</strong> deals with any troublemakers that manage to get inside.</li>
      </ul>

      <p><strong>✅ Tip for Students:</strong> The most important thing you can do is ensure that Windows Security is turned on and that you allow it to update regularly. Combined with safe browsing habits (like not clicking on suspicious links), this provides excellent protection for your computer.</p>
    `},{id:"how-to-use-zoom",category:"internet-connectivity",title:"How to Use Zoom: A Beginner's Guide",content:`
      <p>Zoom is a popular application used for video meetings, online classes, and webinars. This guide will walk you through the basics of joining a meeting and using the main controls.</p>
      
      <h3>1. The Live Chat Link</h3>
      <p>Our weekly live tech support chat uses the following link. This link is the same every week!</p>
      <p><strong><a href="${ch.link}" target="_blank" rel="noopener noreferrer">${ch.link}</a></strong></p>

      <h3>2. Joining a Zoom Meeting</h3>
      <p>The easiest way to join a meeting is by clicking a link provided by the host (the person running the meeting), like the one above.</p>
      <ol>
        <li>Click the Zoom link you received in an email or on a website.</li>
        <li>Your web browser will open. It may ask for permission to open the Zoom application. Click "Open" or "Allow". If you don't have Zoom installed, it will guide you to download it.</li>
        <li>You may be placed in a "Waiting Room." This is normal. The host will let you into the meeting shortly.</li>
      </ol>

      <h3>3. The Main Controls (The Control Bar)</h3>
      <p>Once you're in the meeting, you'll see a bar with several icons, usually at the bottom of the screen. If you don't see it, move your mouse.</p>
      <ul>
        <li><strong>Mute / Unmute (Microphone Icon 🎤):</strong> This is the most important button! Click it to turn your microphone on or off. A red line through the icon means you are muted and no one can hear you.</li>
        <li><strong>Start / Stop Video (Video Camera Icon 📹):</strong> Click this to turn your camera on or off. A red line through it means your camera is off.</li>
        <li><strong>Participants:</strong> Click this to see a list of everyone who is in the meeting.</li>
        <li><strong>Chat:</strong> Opens a text chat window where you can type messages to everyone or to a specific person.</li>
        <li><strong>Leave:</strong> When you are ready to leave the meeting, click this red button.</li>
      </ul>

      <h3>4. Using a Virtual Background</h3>
      <p>A virtual background allows you to display an image or video as your background during a meeting, which is great for privacy or just for fun.</p>
      <ol>
        <li>In the control bar, click the small upward arrow (^) next to the <strong>Start/Stop Video</strong> button.</li>
        <li>Select <strong>Choose Virtual Background...</strong> from the menu.</li>
        <li>A settings window will open. You can choose one of Zoom's default images, or click the plus sign (+) to upload your own photo.</li>
      </ol>
      <p><strong>Note:</strong> This feature works best with a solid-colored wall behind you and good lighting.</p>

      <h3>5. Fancy Tips & Tricks (The Secrets)</h3>
      <ul>
        <li><strong>Touch Up My Appearance:</strong> Zoom has a built-in filter that can help smooth out your appearance on camera. In the video settings (click the arrow next to the video icon), check the box for "Touch up my appearance."</li>
        <li><strong>Mute/Unmute with the Spacebar:</strong> If you are muted, you can press and hold the spacebar to temporarily unmute yourself to speak. When you let go, you'll be muted again. It's like a walkie-talkie button for Zoom.</li>
        <li><strong>Gallery View vs. Speaker View:</strong> In the top-right corner of the Zoom window, you can switch between "Speaker View" (which shows the person currently talking) and "Gallery View" (which shows everyone in a grid).</li>
        <li><strong>Reactions:</strong> You can use the "Reactions" button in the control bar to give a thumbs-up (👍) or clap (👏) without interrupting the speaker.</li>
      </ul>

      <h3>6. Basic Meeting Etiquette</h3>
      <ul>
        <li><strong>Mute Yourself:</strong> It's good practice to keep your microphone muted unless you are speaking. This prevents background noise from disrupting the meeting.</li>
        <li><strong>Be Aware of Your Background:</strong> When your camera is on, be mindful of what others can see behind you.</li>
      </ul>

      <p><strong>✅ Tip for Students:</strong> Don't be afraid to click around! The Mute and Video buttons are your best friends. Mastering them will make you a confident Zoom user.</p>
    `},{id:"advanced-android-features",category:"tips-tricks",title:"Advanced Android Features",content:`
      <p>You've mastered the basics of your Android phone, but there's a world of powerful features hidden just beneath the surface. While the exact steps can vary slightly between manufacturers like Samsung, Google Pixel, or Motorola, these concepts are available on most modern Android devices and can truly enhance your experience.</p>
      
      <h3>1. Supercharge Your Home Screen with Widgets</h3>
      <p>Beyond just app icons, widgets display live, interactive information directly on your home screen. You can have a weather widget, a calendar showing your next appointment, or music controls.</p>
      <ul>
        <li><strong>How to add:</strong> Long-press on an empty space on your home screen and tap 'Widgets'. Browse the list and drag your chosen widget to the screen.</li>
      </ul>

      <h3>2. Master Multitasking with Split-Screen Mode</h3>
      <p>Need to watch a video while replying to a text? Split-screen mode lets you run two apps side-by-side.</p>
      <ul>
        <li><strong>How to use:</strong> Open your recent apps screen (usually by swiping up from the bottom of the screen and holding). Tap the icon of the first app you want to use and select 'Split screen' or 'Open in split screen view'. Then, select the second app from the list.</li>
      </ul>

      <h3>3. Unlock Developer Options for a Snappier Feel</h3>
      <p>This is a hidden menu with advanced settings. One of the safest and most popular tweaks is to speed up animations, which makes your phone feel much faster.</p>
      <ol>
        <li><strong>Enable Developer Options:</strong> Go to Settings > About phone. Find the 'Build number' and tap it 7 times in a row. You'll see a message saying "You are now a developer!".</li>
        <li><strong>Change Animation Speed:</strong> Go back to the main Settings menu, find the new 'Developer options' menu (it might be under 'System'). Scroll down to the 'Drawing' section and find 'Window animation scale', 'Transition animation scale', and 'Animator duration scale'. Changing these from 1x to 0.5x will make animations twice as fast.</li>
      </ol>
      <p><strong>Warning:</strong> Be careful in Developer Options, as changing other settings can have unintended effects. It's best to only change the animation scales unless you know what you're doing.</p>

      <h3>4. Take Control with Notification Channels</h3>
      <p>Tired of getting certain types of notifications from an app, but not others? Android lets you control this with 'Notification Channels'.</p>
      <ul>
        <li><strong>How to use:</strong> Long-press on a notification as it comes in. You might see an option to 'Turn off notifications' for that specific category (or channel). You can also go to Settings > Apps > [Select an App] > Notifications to see all available channels and toggle them on or off.</li>
      </ul>

      <h3>5. Find the Hidden Android "Easter Egg" Game</h3>
      <p>As a fun tradition, Google includes a hidden interactive screen or mini-game, known as an "Easter Egg," in every version of Android. It's a fun little secret to show your friends!</p>
      <ul>
        <li><strong>How to find it:</strong> Go to <strong>Settings > About phone > Android version</strong>. On this screen, tap the "Android version" number several times in a row.</li>
        <li><strong>What happens next:</strong> A special screen will appear, often with the logo of your Android version (like Android 13 or 14). If you interact with this screen (tap and hold, for example), it will often launch a simple, hidden game. The game is different for almost every version of Android!</li>
      </ul>
    `},{id:"digital-wallet",category:"tips-tricks",title:"Using Your Phone's Digital Wallet (Apple & Google Pay)",content:`
      <p>One of the most convenient features of a modern smartphone is its digital wallet. This allows you to make secure payments in stores with just a tap of your phone, and can even store things like boarding passes, event tickets, and loyalty cards.</p>
      
      <h3>What is a Digital Wallet?</h3>
      <p>A digital wallet is an app on your phone that securely stores digital versions of your credit and debit cards. The two most common are:</p>
      <ul>
        <li><strong>Apple Wallet (with Apple Pay):</strong> This is built into every iPhone.</li>
        <li><strong>Google Wallet (with Google Pay):</strong> This is the standard for Android phones.</li>
      </ul>
      <p>When you use your phone to pay, it uses a technology called <strong>NFC (Near Field Communication)</strong> to talk to the store's card reader.</p>

      <h3>How to Set It Up</h3>
      <p>Setting up your wallet is a one-time process. You'll open the Wallet app on your phone and follow the prompts to add a card. This usually involves using your phone's camera to scan your physical credit or debit card.</p>
      <ol>
        <li>Open the <strong>Wallet</strong> app on your iPhone or Android.</li>
        <li>Tap the 'Add' or '+' button to add a new card.</li>
        <li>Follow your bank's instructions to verify the card. This might involve a text message or a quick call.</li>
      </ol>

      <h3>How to Use It in a Store</h3>
      <p>Once set up, using it is simple and fast:</p>
      <ol>
        <li>Look for the contactless payment symbol (looks like a Wi-Fi symbol turned on its side) at the checkout counter.</li>
        <li><strong>On iPhone:</strong> Double-press the side button (or Home button on older models) to bring up your default card. Authenticate with Face ID, Touch ID, or your passcode.</li>
        <li><strong>On Android:</strong> Simply unlock your phone. You don't usually need to open the app.</li>
        <li>Hold the top of your phone near the card reader for a moment. You'll see a checkmark and feel a vibration when the payment is complete.</li>
      </ol>

      <h3>Is It Secure?</h3>
      <p>Yes, it's actually more secure than using your physical card. Here's why:</p>
      <ul>
        <li><strong>Tokenization:</strong> When you add your card, the wallet creates a unique, encrypted virtual card number (a "token"). Your real card number is never stored on your phone and is never shared with the merchant.</li>
        <li><strong>Authentication:</strong> Every payment requires you to authenticate with your face, fingerprint, or passcode. If your phone is stolen, no one can use your wallet without unlocking it first.</li>
      </ul>
      <p>Using your phone's digital wallet is a secure, convenient way to handle everyday payments.</p>
    `},{id:"android-home-screen-customization",category:"tips-tricks",title:"Customizing Your Android Home Screen",content:`
      <p>Your Android home screen is the first thing you see when you unlock your phone. You can make it look and work the way you want by changing wallpapers, adding widgets, organizing apps, and more.</p>

      <h3>1. Change Your Wallpaper</h3>
      <ol>
        <li>Go to your home screen.</li>
        <li>Long-press (tap and hold) on an empty space.</li>
        <li>Tap <strong>Wallpaper & Style</strong> (the exact name may differ depending on your phone brand).</li>
        <li>Choose from preloaded wallpapers, a photo from your Gallery, or other options.</li>
        <li>Select if you want it applied to the Home Screen, Lock Screen, or Both.</li>
      </ol>

      <h3>2. Add Widgets (Quick Information on Your Screen)</h3>
      <p>Widgets let you see useful information without opening an app.</p>
      <ol>
        <li>Long-press on an empty space on your home screen.</li>
        <li>Tap <strong>Widgets</strong>.</li>
        <li>Browse the list (Clock, Weather, Calendar, etc.).</li>
        <li>Tap and hold a widget, then drag it onto your home screen. You can often resize it by holding its edges.</li>
      </ol>

      <h3>3. Add and Organize Apps</h3>
      <ol>
        <li>Open the App Drawer (usually by swiping up from the bottom).</li>
        <li>Find the app you want, then tap and hold it to drag it to your home screen.</li>
      </ol>
      <h4>To create a folder:</h4>
      <ol>
        <li>Drag one app icon on top of another. A folder will be created automatically.</li>
        <li>Tap the folder to open it, then tap its name to rename it.</li>
      </ol>

      <h3>4. Customize the Dock (Bottom Row of Apps)</h3>
      <p>The dock is the row of apps that stays visible on all home screens.</p>
      <ol>
        <li>To remove an app, long-press it and drag it out of the dock.</li>
        <li>To add an app, drag it from your home screen into an empty spot in the dock.</li>
      </ol>

      <h3>5. Change Navigation Style (Buttons or Gestures)</h3>
      <ol>
        <li>Open <strong>Settings</strong>.</li>
        <li>Go to <strong>Display → Navigation Bar</strong> (the name may vary).</li>
        <li>Choose between <strong>3-button navigation</strong> (Back, Home, Recent Apps) or <strong>Gesture navigation</strong> (swiping).</li>
      </ol>

      <h3>6. Customize the Lock Screen</h3>
      <p>In <strong>Settings → Lock Screen</strong>, you can often change the wallpaper, add app shortcuts (like Camera or Flashlight), and customize the clock style.</p>

      <br>
      <p><strong>✅ Tip for Students:</strong> Experiment step by step. Start with wallpaper, then try widgets, then folders. Customization should make your phone easier to use—not harder.</p>
    `},{id:"android-notification-settings",category:"tips-tricks",title:"A Deep Dive into Notification Settings on Android",content:`
      <p>Notifications are alerts from your apps that appear on your lock screen, home screen, or status bar. They keep you updated, but too many can be distracting. Android lets you control how and when notifications appear.</p>

      <h3>1. Open Notification Settings</h3>
      <ol>
        <li>Unlock your phone and swipe down from the top of the screen to open the notification shade.</li>
        <li>Tap the gear icon (⚙️) to open <strong>Settings</strong>.</li>
        <li>Go to <strong>Notifications</strong> (may also be under <strong>Apps & Notifications</strong> depending on your phone).</li>
      </ol>

      <h3>2. Manage Notifications for Individual Apps</h3>
      <ol>
        <li>In Settings → Notifications, select <strong>App Notifications</strong>.</li>
        <li>Scroll and tap on an app you want to manage.</li>
        <li>You can turn all notifications for that app On or Off. Many apps also allow finer control over different types of alerts (like messages vs. promotional alerts).</li>
      </ol>

      <h3>3. Adjust Lock Screen Notifications</h3>
      <p>In <strong>Settings → Notifications → Lock screen notifications</strong> (wording may differ), you can choose:</p>
      <ul>
        <li><strong>Show all notification content:</strong> Everything is visible on the lock screen.</li>
        <li><strong>Hide sensitive content:</strong> You'll see which app sent a notification, but the message content is hidden until you unlock your phone.</li>
        <li><strong>Don’t show notifications at all:</strong> Keeps your lock screen completely private.</li>
      </ul>

      <h3>4. Quick Settings for Notifications</h3>
      <p>When a notification arrives, you can manage it directly:</p>
      <ol>
        <li>Swipe down to see your notifications.</li>
        <li><strong>Tap and hold</strong> a notification to see options.</li>
        <li>You can often choose to make notifications from that app <strong>Silent</strong> (they appear but don't make noise or vibrate) or turn them off completely.</li>
      </ol>

      <h3>5. Do Not Disturb (DND) Mode</h3>
      <p>This mode blocks most notifications so you can focus. In <strong>Settings → Notifications → Do Not Disturb</strong>, you can:</p>
      <ul>
        <li>Choose what gets through (e.g., calls from favorite contacts, alarms).</li>
        <li>Schedule DND to turn on and off automatically (e.g., from 10 PM to 7 AM daily).</li>
      </ul>

      <h3>6. Notification History</h3>
      <p>Some newer Android versions let you see notifications you recently dismissed. In <strong>Settings → Notifications → Notification history</strong>, you can turn this feature on. It's very useful if you accidentally swipe away an important alert.</p>

      <br>
      <p><strong>✅ Tip for Students:</strong> Start by customizing your most-used apps (like Messages, Email, Social Media). That way, you only get alerts that matter most to you.</p>
    `},{id:"mastering-google-assistant",category:"tips-tricks",title:"Mastering Google Assistant Commands",content:`
      <p>Google Assistant is a virtual helper built into Android devices. You can use your voice or text to ask questions, control your phone, manage tasks, and even control smart devices.</p>

      <h3>1. How to Open Google Assistant</h3>
      <p>There are a few ways depending on your device:</p>
      <ul>
        <li><strong>Voice:</strong> Say “Hey Google” or “Ok Google.”</li>
        <li><strong>Button:</strong> On some phones, press and hold the Home button or the Power button.</li>
        <li><strong>Swipe:</strong> On newer Android versions, swipe diagonally from a bottom corner of the screen.</li>
      </ul>

      <h3>2. Basic Everyday Commands</h3>
      <p>Try saying:</p>
      <ul>
        <li>“What’s the weather today?”</li>
        <li>“Set a timer for 10 minutes.”</li>
        <li>“Wake me up at 7 AM.”</li>
        <li>“Call [Contact Name].”</li>
        <li>“Send a text to [Contact Name].”</li>
      </ul>

      <h3>3. Managing Your Day</h3>
      <p>Google Assistant can act as your daily organizer:</p>
      <ul>
        <li>“What’s on my calendar today?”</li>
        <li>“Remind me to drink water at 3 PM.”</li>
        <li>“Add milk to my shopping list.”</li>
        <li>“How’s the traffic to [Destination]?”</li>
      </ul>

      <h3>4. Controlling Your Phone with Voice</h3>
      <ul>
        <li>“Open [App Name].”</li>
        <li>“Turn on Bluetooth.”</li>
        <li>“Take a selfie.”</li>
        <li>“Increase brightness.”</li>
      </ul>

      <h3>5. Custom Routines</h3>
      <p>You can create routines so one command does many things at once. In the Google Home app, you can set a trigger phrase like “Good morning” to perform a series of actions like telling you the weather, playing the news, and turning on your smart lights.</p>

      <h3>6. Using Google Assistant Without Speaking</h3>
      <p>If you can’t or don’t want to talk out loud, just open Google Assistant and type your request in the text box. You’ll get the same results as speaking.</p>
      
      <br>
      <p><strong>✅ Tip for Students:</strong> Try practicing 5–10 commands daily (alarms, weather, reminders, searches). Within a week, you’ll remember them naturally.</p>
    `},{id:"android-app-permissions",category:"tips-tricks",title:"Understanding and Managing App Permissions",content:`
      <p>Every app you install on your Android phone may ask for permission to use certain features, such as the camera, microphone, or location. Learning how to manage these permissions helps protect your privacy and ensures apps only access what they truly need.</p>

      <h3>1. What Are App Permissions?</h3>
      <p>App permissions are requests from apps to use parts of your phone. Examples include:</p>
      <ul>
        <li><strong>Camera:</strong> For taking pictures or videos.</li>
        <li><strong>Microphone:</strong> For voice messages or calls.</li>
        <li><strong>Location:</strong> For maps or delivery apps.</li>
        <li><strong>Contacts:</strong> To connect with people you know.</li>
        <li><strong>Storage/Files:</strong> To save or open files.</li>
      </ul>
      <p>When an app first needs a permission, it will ask you to allow or deny it.</p>

      <h3>2. How to View and Change Permissions for an App</h3>
      <ol>
        <li>Open <strong>Settings</strong>.</li>
        <li>Tap <strong>Apps</strong> (or Apps & Notifications).</li>
        <li>Select the app you want to check, then tap <strong>Permissions</strong>.</li>
        <li>You’ll see which permissions are allowed and denied. Tap on any permission to change it.</li>
        <li>You can typically choose: <strong>Allow only while using the app</strong> (recommended), <strong>Ask every time</strong>, or <strong>Don’t allow</strong>.</li>
      </ol>

      <h3>3. Managing Permissions by Category</h3>
      <p>Instead of checking app by app, you can see all apps that use a specific feature:</p>
      <ol>
        <li>Go to <strong>Settings → Privacy → Permission Manager</strong> (the name may vary).</li>
        <li>Choose a category, like <strong>Location</strong> or <strong>Camera</strong>.</li>
        <li>You will see a list of which apps have access. You can change permissions for any app from this list.</li>
      </ol>

      <h3>4. Why Permission Management Matters</h3>
      <ul>
        <li><strong>Privacy:</strong> Some apps may ask for data they don’t need (for example, a calculator asking for your location).</li>
        <li><strong>Battery:</strong> Apps that constantly use GPS or the microphone can drain your phone's power.</li>
        <li><strong>Security:</strong> Limiting permissions reduces the risk of apps misusing your data if they are ever compromised.</li>
      </ul>

      <h3>5. Special Permissions</h3>
      <p>Some permissions are more powerful and require extra caution. You might see these in a "Special app access" menu in your settings. Only grant these if you fully trust the app.</p>
      <ul>
        <li><strong>Install unknown apps:</strong> Allows an app to install other apps from outside the Google Play Store.</li>
        <li><strong>Display over other apps:</strong> Allows an app to draw on top of other apps (like chat bubbles).</li>
      </ul>
      
      <br>
      <p><strong>✅ Tip for Students:</strong> Only grant permissions that make sense for the app’s purpose. For example:</p>
      <ul>
        <li>A map app needs <strong>Location</strong>, but not necessarily <strong>Contacts</strong>.</li>
        <li>A music app needs <strong>Storage</strong> (for songs), but not your <strong>Camera</strong>.</li>
      </ul>
    `},{id:"google-photos-guide",category:"tips-tricks",title:"Tips for Using Google Photos",content:`
      <p>Google Photos is a cloud-based app that helps you store, organize, and share photos and videos. It also offers editing tools and automatic backups, so your memories stay safe and accessible from any device.</p>

      <h3>1. Backing Up Your Photos</h3>
      <ol>
        <li>Open the Google Photos app and sign in with your Google Account.</li>
        <li>Tap your profile picture (top right).</li>
        <li>Select <strong>Photos settings → Backup</strong>.</li>
        <li>Turn on <strong>Backup</strong>. Your photos and videos will now be saved to your Google account.</li>
      </ol>

      <h3>2. Organizing Photos</h3>
      <ul>
        <li><strong>Albums:</strong> Group related photos together (e.g., vacation, school events). In the app, go to <strong>Library → Albums</strong> to create new ones.</li>
        <li><strong>Favorites:</strong> Tap the ⭐ icon on any photo to mark it as a favorite for easy access.</li>
        <li><strong>Search:</strong> Use the search bar to find photos by people (faces are grouped automatically), places, or even objects in the photo (e.g., “dog,” “pizza”).</li>
      </ul>

      <h3>3. Editing Photos</h3>
      <ol>
        <li>Open a photo and tap <strong>Edit</strong> (looks like sliders).</li>
        <li>Use tools like <strong>Filters</strong>, <strong>Adjust</strong> (for brightness/contrast), and <strong>Crop & Rotate</strong>.</li>
        <li>Tap <strong>Save copy</strong> to keep the original and the edited version.</li>
      </ol>

      <h3>4. Sharing Photos and Albums</h3>
      <ol>
        <li>Select one or more photos and tap the <strong>Share</strong> icon.</li>
        <li>You can send a link, share directly to apps like WhatsApp or Gmail, or create a <strong>Shared Album</strong> for group events so everyone can add their photos.</li>
      </ol>

      <h3>5. Freeing Up Space on Your Device</h3>
      <p>Once your photos are backed up, you can safely remove them from your phone's local storage to save space.</p>
      <ol>
        <li>In Google Photos, tap your profile picture → <strong>Free up space</strong>.</li>
        <li>The app will delete photos and videos from your device that are already safely stored in the cloud. You will still be able to see them in the Google Photos app.</li>
      </ol>

      <h3>6. Recovering Deleted Photos</h3>
      <p>Deleted photos go to the Trash/Bin and stay there for 30-60 days before being permanently deleted. To restore a photo, go to <strong>Library → Trash</strong>, select the photo, and tap <strong>Restore</strong>.</p>

      <h3>7. Storage Management</h3>
      <p>Your Google Account comes with 15 GB of free storage, which is shared between Google Photos, Gmail, and Google Drive. If you need more, you can purchase a Google One plan for additional space.</p>

      <br>
      <p><strong>✅ Tip for Students:</strong> Turn on Backup right away. This is the most important step to ensure your photos are safe even if your phone is lost, stolen, or damaged.</p>
    `},{id:"browser-extensions",category:"advanced-pc",title:"Power Up Your Browser with Extensions",content:`
      <p>Browser extensions are small software programs that add new features and functionality to your web browser. Think of them like apps for your browser. They can block ads, help you save money, check your grammar, and much more.</p>

      <h3>1. What Can Extensions Do?</h3>
      <p>Extensions can modify the way you experience the web. Some popular categories include:</p>
      <ul>
        <li><strong>Ad Blockers:</strong> Block intrusive ads and pop-ups for a cleaner browsing experience (e.g., uBlock Origin, AdGuard).</li>
        <li><strong>Password Managers:</strong> Securely store your passwords and automatically fill them in on websites (e.g., Bitwarden, 1Password).</li>
        <li><strong>Shopping Tools:</strong> Automatically find coupon codes or compare prices when you shop online (e.g., Honey, Rakuten).</li>
        <li><strong>Productivity Tools:</strong> Check your grammar, save articles to read later, or take notes (e.g., Grammarly, Pocket).</li>
      </ul>

      <h3>2. How to Find and Install Extensions (Using Chrome Web Store)</h3>
      <p>For Google Chrome and Microsoft Edge, you get extensions from the Chrome Web Store.</p>
      <ol>
        <li>Open your browser and go to the <a href="https://chrome.google.com/webstore" target="_blank" rel="noopener noreferrer">Chrome Web Store</a>.</li>
        <li>Use the search bar to find an extension by name or category.</li>
        <li>Click on the extension you want to learn more about. Read the description and reviews to make sure it's reputable.</li>
        <li>Click the <strong>"Add to Chrome"</strong> button.</li>
        <li>A pop-up will appear asking for permissions. Review them, and if you agree, click <strong>"Add extension"</strong>.</li>
      </ol>

      <h3>3. How to Manage Your Extensions</h3>
      <p>Once installed, your extensions can be managed from the toolbar.</p>
      <ul>
        <li><strong>The Puzzle Piece Icon:</strong> Click the puzzle piece icon (🧩) in the top-right corner of your browser to see a list of all your installed extensions.</li>
        <li><strong>Pinning an Extension:</strong> Click the pin icon (📌) next to an extension in the list to keep its icon visible on the toolbar for quick access.</li>
        <li><strong>Disabling or Removing:</strong> Click the three dots (⋮) next to an extension in the puzzle piece menu, then select "Remove from Chrome" to uninstall it, or use the toggle switch to temporarily disable it.</li>
      </ul>

      <p><strong>⚠️ A Word of Caution:</strong> Be selective about the extensions you install. Only use extensions from reputable developers, as they require permission to access data from the websites you visit. Too many extensions can also slow down your browser.</p>
    `},{id:"cloud-storage-basics",category:"advanced-pc",title:"Understanding Cloud Storage (OneDrive & Google Drive)",content:`
      <p>You've learned how to manage files on your computer, but what if you could access those same files from your phone or any other computer in the world? That's the power of cloud storage.</p>

      <h3>1. What is Cloud Storage?</h3>
      <p>Think of cloud storage as a magic folder on your computer. Anything you put in this folder is not only saved on your PC, but also automatically copied to a secure, private location on the internet. It's like having a personal hard drive that follows you everywhere.</p>
      <p>The two most common services are:</p>
      <ul>
        <li><strong>Microsoft OneDrive:</strong> This is built directly into Windows and is connected to your Microsoft account.</li>
        <li><strong>Google Drive:</strong> This comes with every Google account and works great on the web and with a desktop app.</li>
      </ul>

      <h3>2. The Three Superpowers of Cloud Storage</h3>
      <ul>
        <li><strong>Syncing:</strong> "Syncing" is short for synchronizing. If you change a file in your cloud folder on your PC, the new version automatically appears on your phone. It keeps everything up-to-date across all your devices.</li>
        <li><strong>Backup:</strong> Because your files are also stored online, they are safe even if your computer is lost, stolen, or broken. It's an automatic backup for your most important files.</li>
        <li><strong>Sharing:</strong> You can easily share a file (or even an entire folder) with someone else by sending them a special link. This is much easier than trying to email large files.</li>
      </ul>

      <h3>3. How to Use It (with OneDrive in Windows)</h3>
      <p>Using cloud storage is designed to be simple.</p>
      <ol>
        <li>Open <strong>File Explorer</strong>.</li>
        <li>Look for the <strong>OneDrive</strong> folder in the navigation pane on the left. It often has a blue cloud icon.</li>
        <li>Simply drag and drop files into this folder just like any other folder on your computer. That's it! The files will automatically upload and sync.</li>
      </ol>
      <p>You may see different icons next to your files. A cloud icon means the file is stored online to save space, and a green checkmark means a copy is also saved on your computer for offline access.</p>

      <p><strong>✅ Tip for Students:</strong> Start small. Drag a few non-critical documents or photos into your OneDrive or Google Drive folder. Then, try accessing them from your phone's OneDrive or Drive app. Seeing it work is the best way to understand its power.</p>
    `},{id:"two-factor-auth",category:"advanced-pc",title:"Securing Your Accounts with Two-Factor Authentication (2FA)",content:`
      <p>You've learned how to create strong passwords, but in today's world, sometimes even a great password isn't enough. Two-Factor Authentication (2FA) is one of the most powerful ways to protect your online accounts from unauthorized access.</p>

      <h3>1. What is Two-Factor Authentication?</h3>
      <p>Think of it like needing two keys to open a very important door. Your password is the first key. The second "key" (or factor) is something only you have access to, usually a temporary code generated on your phone.</p>
      <p>Even if a criminal steals your password, they can't log in to your account because they don't have your phone to get the second key. It's a simple concept that dramatically increases your security.</p>

      <h3>2. Common Types of 2FA</h3>
      <p>When you enable 2FA on a website (like your email or bank), it will usually ask you to choose a method for your second factor:</p>
      <ul>
        <li><strong>SMS (Text Message) Codes:</strong> The service texts a code to your phone number. This is good, but considered the least secure method of 2FA.</li>
        <li><strong>Authenticator Apps (Recommended):</strong> You use a special app on your phone (like <strong>Google Authenticator</strong> or <strong>Microsoft Authenticator</strong>) that generates a new 6-digit code every 30 seconds. This is much more secure than SMS.</li>
        <li><strong>Physical Security Keys:</strong> A small USB device (like a YubiKey) that you plug into your computer to prove it's you. This is the most secure method available.</li>
      </ul>

      <h3>3. Why It's a "Level Up" Skill</h3>
      <p>Using 2FA is what separates basic users from security-conscious power users. It shows you understand that security is about layers. Protecting your digital life is one of the most important skills you can learn, and 2FA is the cornerstone of that protection.</p>

      <h3>4. How to Get Started</h3>
      <ol>
        <li><strong>Pick an Authenticator App:</strong> Download Google Authenticator or Microsoft Authenticator from your phone's app store.</li>
        <li><strong>Go to Your Most Important Account:</strong> Start with your primary email account (Gmail, Outlook, etc.). This is the key to your entire digital life.</li>
        <li><strong>Find the Security Settings:</strong> Log in to your email on a computer. Look for the "Security" or "Sign-in & Security" section in your account settings.</li>
        <li><strong>Enable 2FA/2-Step Verification:</strong> Look for an option called "2-Step Verification" or "Two-Factor Authentication" and turn it on. Follow the on-screen instructions to link it to your authenticator app by scanning a QR code.</li>
      </ol>

      <p><strong>✅ Tip for Students:</strong> Enable 2FA on your main email account first. Then, enable it on your online banking and any major social media accounts. This single step will make you a much harder target for online criminals.</p>
    `},{id:"windows-god-mode",category:"advanced-pc",title:'Unlock "God Mode": A Hidden Windows Feature',content:`
      <p>There is a well-known "secret" in Windows called "God Mode." It's not a game or a special operating mode, but rather a hidden feature that creates a special folder containing a master list of almost every setting and control panel option available in Windows.</p>

      <h3>Why is it Useful?</h3>
      <p>Windows settings are spread across the modern Settings app and the classic Control Panel. "God Mode" brings them all into one convenient, searchable list. It's a favorite trick of IT professionals and power users who need to access deep system settings quickly without digging through menus.</p>

      <h3>How to Enable "God Mode"</h3>
      <p>Enabling it is simple and completely safe. You are just creating a special shortcut folder.</p>
      <ol>
        <li>Go to your Desktop.</li>
        <li><strong>Right-click</strong> on an empty space, go to <strong>New</strong>, and select <strong>Folder</strong>.</li>
        <li>A new folder will appear. You need to rename it to the following exact text (it's best to copy and paste it):</li>
        <li><code>GodMode.{ED7BA470-8E54-465E-825C-99712043E01C}</code></li>
        <li>Press Enter. The folder's icon will change to look like a Control Panel icon.</li>
      </ol>
      <p>That's it! Double-click the new icon to open a window with a huge, organized list of settings, from changing your account picture to formatting a hard drive.</p>

      <p><strong>✅ Tip for Students:</strong> While you may not need to use this every day, knowing how to create this folder is a great "power user" trick to have up your sleeve. It's a perfect example of how much control you can have over your computer once you know the secrets.</p>
    `},{id:"intro-to-html",category:"web-development",title:"Introduction to HTML",content:`
      <p>HTML, which stands for <strong>HyperText Markup Language</strong>, is the standard language used to create and design web pages. Think of it as the skeleton that gives a website its structure.</p>

      <h3>1. What are HTML Tags and Elements?</h3>
      <p>HTML uses "tags" to define different types of content. Most tags come in pairs: an opening tag and a closing tag.</p>
      <ul>
        <li>An <strong>opening tag</strong> looks like this: <code>&lt;p&gt;</code> (for a paragraph).</li>
        <li>A <strong>closing tag</strong> looks like this: <code>&lt;/p&gt;</code> (note the forward slash).</li>
      </ul>
      <p>The content that goes between the opening and closing tags, along with the tags themselves, is called an <strong>HTML element</strong>.</p>
      <pre><code>&lt;p&gt;This is a paragraph element.&lt;/p&gt;</code></pre>

      <h3>2. A Basic HTML Document Structure</h3>
      <p>Every HTML document has a standard structure that tells the browser it's a web page.</p>
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Page Title&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- Your page content goes here --&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
      <ul>
        <li><code>&lt;!DOCTYPE html&gt;</code>: Declares that this is an HTML5 document.</li>
        <li><code>&lt;html&gt;</code>: The root element of the page.</li>
        <li><code>&lt;head&gt;</code>: Contains meta-information about the page, like the title. This content is not displayed on the page itself.</li>
        <li><code>&lt;title&gt;</code>: The title of the page, which appears in the browser tab.</li>
        <li><code>&lt;body&gt;</code>: Contains all the visible content of the page, like headings, paragraphs, and images.</li>
      </ul>

      <h3>3. Common HTML Tags</h3>
      <p>Here are some of the most common tags you'll use:</p>
      <ul>
        <li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>: Headings, with <code>&lt;h1&gt;</code> being the most important.</li>
        <li><code>&lt;p&gt;</code>: Paragraphs of text.</li>
        <li><code>&lt;a&gt;</code>: Links. The <code>href</code> attribute specifies the link's destination. Example: <code>&lt;a href="https://www.google.com"&gt;Go to Google&lt;/a&gt;</code>.</li>
        <li><code>&lt;img&gt;</code>: Images. This is a self-closing tag and requires a <code>src</code> (source) attribute for the image URL and an <code>alt</code> (alternative text) attribute for accessibility. Example: <code>&lt;img src="photo.jpg" alt="A beautiful sunset"&gt;</code>.</li>
        <li><code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code>: Unordered (bulleted) lists. Each list item is wrapped in an <code>&lt;li&gt;</code> tag.</li>
        <li><code>&lt;ol&gt;</code> and <code>&lt;li&gt;</code>: Ordered (numbered) lists.</li>
        <li><code>&lt;strong&gt;</code>: Makes text bold to indicate importance.</li>
        <li><code>&lt;em&gt;</code>: Makes text italic to add emphasis.</li>
      </ul>

      <h3>4. Putting It All Together</h3>
      <p>Here is a complete example of a simple HTML page. You could save this as <code>index.html</code> and open it in a web browser.</p>
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;My First Web Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Welcome to My Website!&lt;/h1&gt;
    &lt;p&gt;This is my very first paragraph. I can make text &lt;strong&gt;bold&lt;/strong&gt; or &lt;em&gt;italic&lt;/em&gt;.&lt;/p&gt;
    &lt;p&gt;Here is a link to a great resource: &lt;a href="https://developer.mozilla.org/en-US/docs/Web/HTML"&gt;MDN HTML Docs&lt;/a&gt;.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

      <p><strong>✅ Tip for Students:</strong> The best way to learn HTML is by doing. Try creating your own <code>.html</code> file in a simple text editor like Notepad and experiment with changing the tags and content.</p>
    `},{id:"intro-to-css",category:"web-development",title:"Introduction to CSS",content:`
      <p>If HTML is the skeleton of a web page, then CSS (<strong>Cascading Style Sheets</strong>) is the clothing. CSS is the language we use to style an HTML document—it describes how HTML elements should be displayed.</p>

      <h3>1. How to Add CSS to a Page</h3>
      <p>There are three ways to include CSS, but the best and most common way is using an <strong>external stylesheet</strong>.</p>
      <ol>
        <li>Create a new file and save it with a <code>.css</code> extension (e.g., <code>style.css</code>).</li>
        <li>In your HTML file, add a <code>&lt;link&gt;</code> tag inside the <code>&lt;head&gt;</code> section to connect to your stylesheet:</li>
      </ol>
      <pre><code>&lt;head&gt;
  &lt;title&gt;My First Web Page&lt;/title&gt;
  &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;</code></pre>

      <h3>2. Basic CSS Syntax</h3>
      <p>A CSS rule consists of a selector and a declaration block.</p>
      <pre><code>selector {
  property: value;
}</code></pre>
      <ul>
        <li>The <strong>selector</strong> points to the HTML element you want to style (e.g., <code>h1</code>, <code>p</code>).</li>
        <li>The <strong>declaration block</strong> contains one or more declarations separated by semicolons.</li>
        <li>Each declaration includes a CSS <strong>property</strong> name and a <strong>value</strong>.</li>
      </ul>

      <h3>3. Common Selectors</h3>
      <p>Selectors are how you "find" or select the HTML elements you want to style.</p>
      <ul>
        <li><strong>Element Selector:</strong> Selects elements based on the element name. (e.g., <code>p</code> selects all <code>&lt;p&gt;</code> elements).</li>
        <li><strong>Class Selector:</strong> Selects elements with a specific class attribute. It starts with a period (.). (e.g., <code>.intro</code> selects <code>&lt;p class="intro"&gt;</code>).</li>
        <li><strong>ID Selector:</strong> Selects an element with a specific id attribute. It starts with a hash (#). An ID should be unique on a page. (e.g., <code>#firstname</code> selects <code>&lt;p id="firstname"&gt;</code>).</li>
      </ul>

      <h3>4. Common CSS Properties</h3>
      <p>Here are a few basic properties to get you started:</p>
      <ul>
        <li><code>color</code>: Sets the color of text.</li>
        <li><code>background-color</code>: Sets the background color of an element.</li>
        <li><code>font-size</code>: Sets the size of a font.</li>
        <li><code>font-family</code>: Specifies the font for an element (e.g., Arial, Times New Roman).</li>
        <li><code>border</code>: A shorthand property for setting the border width, style, and color.</li>
      </ul>

      <h3>5. Putting It All Together</h3>
      <p>Let's style the simple HTML page from the previous guide. Create a file named <code>style.css</code> in the same folder as your HTML file with the following content:</p>
      <pre><code>body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

h1 {
  color: #333366; /* A dark blue color */
  text-align: center;
}

p {
  color: #555;
  line-height: 1.5;
}</code></pre>
      <p>When you open your HTML file in the browser, you should now see your styles applied!</p>
      <p><strong>✅ Tip for Students:</strong> CSS is all about experimenting. Change the values, try new properties, and see what happens. The browser's developer tools (usually opened with F12) are your best friend for inspecting and debugging CSS.</p>
    `},{id:"intro-to-javascript",category:"web-development",title:"Introduction to JavaScript",content:`
      <p>If HTML is the skeleton and CSS is the clothing, then JavaScript is the brain and muscles that bring a web page to life. It's a programming language that allows you to create dynamically updating content, control multimedia, animate images, and much more.</p>

      <h3>1. What Can JavaScript Do?</h3>
      <p>JavaScript is the language of interactivity on the web. You can use it to:</p>
      <ul>
        <li>Show or hide information with the click of a button.</li>
        <li>Change the color of an element when the mouse hovers over it.</li>
        <li>Display timers or a countdown.</li>
        <li>Validate data in a form before it gets sent to a server.</li>
        <li>Create complex animations and games.</li>
      </ul>

      <h3>2. How to Add JavaScript to a Page</h3>
      <p>Just like CSS, the best way to add JavaScript is with an <strong>external file</strong>. This keeps your code organized.</p>
      <ol>
        <li>Create a new file and save it with a <code>.js</code> extension (e.g., <code>script.js</code>).</li>
        <li>In your HTML file, add a <code>&lt;script&gt;</code> tag just before the closing <code>&lt;/body&gt;</code> tag.</li>
      </ol>
      <pre><code>  &lt;!-- Your page content goes here --&gt;
  &lt;script src="script.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      <p><strong>Why at the end?</strong> Placing the script at the end of the body ensures that the HTML content has loaded before the JavaScript tries to interact with it.</p>

      <h3>3. Core Concepts for Beginners</h3>
      <ul>
        <li><strong>Variables:</strong> A variable is a container for storing a value. You declare one using the <code>let</code> keyword.
          <pre><code>let message = "Hello, world!";</code></pre>
        </li>
        <li><strong>Functions:</strong> A function is a block of code designed to perform a particular task. It's executed when "invoked" or called.
          <pre><code>function greet() {
  alert("Hello there!");
}</code></pre>
        </li>
        <li><strong>Events:</strong> Events are actions that happen on a web page, like a user clicking a button. We can make our JavaScript code "listen" for these events. Common events are <code>onclick</code>, <code>onmouseover</code>, etc.</li>
        <li><strong>DOM Manipulation:</strong> The DOM (Document Object Model) is the browser's representation of your HTML page. JavaScript can interact with the DOM to find, change, add, or delete HTML elements. The most common way to find an element is with <code>document.getElementById()</code>.</li>
      </ul>

      <h3>4. Putting It All Together: A Simple Example</h3>
      <p>Let's make a button that changes the text of a heading.</p>
      <p><strong>index.html:</strong></p>
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;JS Demo&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1 id="greeting"&gt;Hello!&lt;/h1&gt;
    &lt;button onclick="changeText()"&gt;Click Me&lt;/button&gt;

    &lt;script src="script.js"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
      <p><strong>script.js:</strong></p>
      <pre><code>function changeText() {
  // Find the h1 element by its ID
  const heading = document.getElementById("greeting");
  
  // Change its text content
  heading.textContent = "You clicked the button!";
}</code></pre>
      <p>When you open <code>index.html</code> and click the button, the <code>changeText()</code> function in <code>script.js</code> will run and update the heading.</p>

      <p><strong>✅ Tip for Students:</strong> Your browser's developer tools (F12) are essential for JavaScript. The "Console" tab will show you errors in your code and lets you experiment with JavaScript commands live.</p>
    `},{id:"html-document-structure",category:"web-development",title:"HTML Document Structure in Depth",content:`
      <p>Every HTML page has a standard structure that acts as its foundation. Understanding this structure is the first step to creating well-formed web pages.</p>

      <h3>1. The Document Type Declaration: <code>&lt;!DOCTYPE html&gt;</code></h3>
      <p>This is always the very first line of an HTML document. It's not an HTML tag itself, but an instruction to the web browser about what version of HTML the page is written in. <code>&lt;!DOCTYPE html&gt;</code> tells the browser to use the modern HTML5 standard.</p>

      <h3>2. The Root Element: <code>&lt;html&gt;</code></h3>
      <p>The <code>&lt;html&gt;</code> tag wraps all the content on the entire page. It's often called the "root" element because it's the parent of everything else.</p>

      <h3>3. The Head: <code>&lt;head&gt;</code></h3>
      <p>The <code>&lt;head&gt;</code> element is a container for metadata (data about the data). The information inside the <code>&lt;head&gt;</code> is not displayed on the page itself, but it's very important for the browser.</p>
      <ul>
        <li><strong><code>&lt;title&gt;</code></strong>: This defines the title of your document, which is shown in the browser's title bar or in the page's tab. It's also very important for Search Engine Optimization (SEO).</li>
        <li><strong><code>&lt;meta&gt;</code></strong>: This tag provides metadata about the HTML document.
          <ul>
            <li><code>&lt;meta charset="UTF-8"&gt;</code> specifies the character encoding for the document, ensuring text is displayed correctly.</li>
            <li><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code> makes the website responsive, meaning it will look good on all devices, including desktops, tablets, and phones.</li>
          </ul>
        </li>
        <li><strong><code>&lt;link&gt;</code></strong>: This tag is used to link to external resources, most commonly a CSS stylesheet. Example: <code>&lt;link rel="stylesheet" href="styles.css"&gt;</code>.</li>
        <li><strong><code>&lt;script&gt;</code></strong>: This tag is used to embed or refer to an executable script, usually JavaScript.</li>
      </ul>

      <h3>4. The Body: <code>&lt;body&gt;</code></h3>
      <p>The <code>&lt;body&gt;</code> element contains all the visible content of a web page, such as headings, paragraphs, images, hyperlinks, tables, and lists. Everything you see in the main browser window is inside the <code>&lt;body&gt;</code>.</p>

      <h4>Example Structure:</h4>
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;My Awesome Page&lt;/title&gt;
    &lt;link rel="stylesheet" href="style.css"&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;This is a Heading&lt;/h1&gt;
    &lt;p&gt;This is a paragraph.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
    `},{id:"html-text-tags",category:"web-development",title:"Common HTML Tags for Text",content:`
      <p>HTML provides a wide variety of tags for structuring and formatting text content on a web page.</p>

      <h3>Headings: <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code></h3>
      <p>Headings are used to define the hierarchy of your content. <code>&lt;h1&gt;</code> is the most important heading (usually the main title of the page), and <code>&lt;h6&gt;</code> is the least important. Search engines use headings to understand the structure of your content.</p>
      <pre><code>&lt;h1&gt;Main Title&lt;/h1&gt;
&lt;h2&gt;A Major Section&lt;/h2&gt;
&lt;h3&gt;A Sub-section&lt;/h3&gt;</code></pre>

      <h3>Paragraphs: <code>&lt;p&gt;</code></h3>
      <p>The <code>&lt;p&gt;</code> tag is used to define a paragraph of text. Browsers automatically add some space (a margin) before and after each paragraph.</p>

      <h3>Emphasis and Importance: <code>&lt;em&gt;</code> and <code>&lt;strong&gt;</code></h3>
      <p>These are "semantic" tags, meaning they tell the browser about the *meaning* of the text.</p>
      <ul>
        <li><strong><code>&lt;strong&gt;</code></strong>: Defines text with strong importance. It typically renders as <strong>bold</strong>.</li>
        <li><strong><code>&lt;em&gt;</code></strong>: Defines emphasized text. It typically renders as <em>italic</em>.</li>
      </ul>
      <p>You might also see <code>&lt;b&gt;</code> (bold) and <code>&lt;i&gt;</code> (italic). These are older, non-semantic tags. It's better to use <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> because they provide more meaning to screen readers and search engines.</p>

      <h3>Line Breaks and Horizontal Rules</h3>
      <ul>
        <li><strong><code>&lt;br&gt;</code></strong>: Inserts a single line break. This is an "empty" tag, which means it has no closing tag. Use it sparingly, for things like poems or addresses.</li>
        <li><strong><code>&lt;hr&gt;</code></strong>: Creates a horizontal rule, which is a thematic break in the content (like a scene change). It's also an empty tag.</li>
      </ul>

      <h3>Blockquotes: <code>&lt;blockquote&gt;</code></h3>
      <p>The <code>&lt;blockquote&gt;</code> tag is used to define a section that is quoted from another source. Browsers usually indent this content.</p>
      <pre><code>&lt;blockquote&gt;
  &lt;p&gt;This is a quote from another source. It is indented to show that it is special.&lt;/p&gt;
&lt;/blockquote&gt;</code></pre>
    `},{id:"html-lists",category:"web-development",title:"Creating Lists in HTML",content:`
      <p>HTML offers several ways to create lists, which are perfect for organizing information.</p>

      <h3>Unordered Lists: <code>&lt;ul&gt;</code></h3>
      <p>An unordered list starts with the <code>&lt;ul&gt;</code> tag. Each list item starts with the <code>&lt;li&gt;</code> tag. The list items will be marked with bullets by default.</p>
      <pre><code>&lt;ul&gt;
  &lt;li&gt;Coffee&lt;/li&gt;
  &lt;li&gt;Tea&lt;/li&gt;
  &lt;li&gt;Milk&lt;/li&gt;
&lt;/ul&gt;</code></pre>

      <h3>Ordered Lists: <code>&lt;ol&gt;</code></h3>
      <p>An ordered list starts with the <code>&lt;ol&gt;</code> tag. Each list item also starts with the <code>&lt;li&gt;</code> tag. The list items will be marked with numbers by default.</p>
      <pre><code>&lt;ol&gt;
  &lt;li&gt;First, do this.&lt;/li&gt;
  &lt;li&gt;Second, do that.&lt;/li&gt;
  &lt;li&gt;Finally, do this.&lt;/li&gt;
&lt;/ol&gt;</code></pre>

      <h3>Nested Lists</h3>
      <p>You can place one list inside another list item to create a nested list.</p>
      <pre><code>&lt;ul&gt;
  &lt;li&gt;Fruit
    &lt;ul&gt;
      &lt;li&gt;Apples&lt;/li&gt;
      &lt;li&gt;Bananas&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li&gt;Vegetables&lt;/li&gt;
&lt;/ul&gt;</code></pre>
    `},{id:"html-links-images",category:"web-development",title:"Links and Images in HTML",content:`
      <p>Links and images are fundamental components that make the web interactive and visual.</p>

      <h3>Hyperlinks: <code>&lt;a&gt;</code></h3>
      <p>The <code>&lt;a&gt;</code> tag defines a hyperlink, which is used to link from one page to another. The most important attribute is <code>href</code>, which indicates the link's destination.</p>
      <ul>
        <li><strong><code>href</code></strong>: The URL of the page the link goes to.</li>
        <li><strong><code>target="_blank"</code></strong>: This attribute tells the browser to open the link in a new tab.</li>
      </ul>
      <pre><code>&lt;a href="https://www.google.com"&gt;Visit Google&lt;/a&gt;
&lt;a href="about.html" target="_blank"&gt;About Us (in a new tab)&lt;/a&gt;</code></pre>

      <h3>Images: <code>&lt;img&gt;</code></h3>
      <p>The <code>&lt;img&gt;</code> tag is used to embed an image in an HTML page. It is an "empty" tag, meaning it has no closing tag. It has two required attributes:</p>
      <ul>
        <li><strong><code>src</code></strong>: Specifies the path to the image.</li>
        <li><strong><code>alt</code></strong>: Provides alternative text for the image. This text is crucial for accessibility, as it is read aloud to users with screen readers. It also displays if the image fails to load.</li>
      </ul>
      <p>You can also specify the <code>width</code> and <code>height</code> of the image.</p>
      <pre><code>&lt;img src="images/my-photo.jpg" alt="A photo of me on vacation" width="500" height="300"&gt;</code></pre>
    `},{id:"html-tables",category:"web-development",title:"HTML Tables",content:`
      <p>HTML tables are used to display data in a structured, tabular format.</p>

      <h3>Basic Table Structure</h3>
      <ul>
        <li><strong><code>&lt;table&gt;</code></strong>: The wrapper for the entire table.</li>
        <li><strong><code>&lt;tr&gt;</code></strong>: Defines a table row.</li>
        <li><strong><code>&lt;td&gt;</code></strong>: Defines a table data cell.</li>
        <li><strong><code>&lt;th&gt;</code></strong>: Defines a table header cell. Text in a <code>&lt;th&gt;</code> is typically bold and centered.</li>
      </ul>

      <h4>Example:</h4>
      <pre><code>&lt;table border="1"&gt;
  &lt;tr&gt;
    &lt;th&gt;First Name&lt;/th&gt;
    &lt;th&gt;Last Name&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;John&lt;/td&gt;
    &lt;td&gt;Doe&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Jane&lt;/td&gt;
    &lt;td&gt;Smith&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre>
      <p><em>(Note: The <code>border="1"</code> attribute is used here for demonstration. Styling tables is best done with CSS.)</em></p>
    `},{id:"css-selectors",category:"web-development",title:"CSS Selectors in Depth",content:`
      <p>Selectors are the foundation of CSS. They are patterns that "select" the HTML elements you want to style. Understanding the main types of selectors is key to controlling the appearance of your website.</p>

      <h3>1. Element Selector</h3>
      <p>This is the most basic selector. It selects all elements of a given type on the page.</p>
      <pre><code>/* Selects all paragraphs */
p {
  color: blue;
}

/* Selects all level 2 headings */
h2 {
  font-size: 24px;
}</code></pre>

      <h3>2. Class Selector</h3>
      <p>The class selector is the most common and useful selector. It selects all elements that have a specific <code>class</code> attribute. In your CSS, you denote a class with a period (<code>.</code>) followed by the class name.</p>
      <p><strong>HTML:</strong></p>
      <pre><code>&lt;p class="highlight"&gt;This paragraph will be highlighted.&lt;/p&gt;
&lt;div class="highlight"&gt;This div will also be highlighted.&lt;/div&gt;</code></pre>
      <p><strong>CSS:</strong></p>
      <pre><code>.highlight {
  background-color: yellow;
}</code></pre>
      <p>The power of classes is that you can apply the same class to many different elements.</p>

      <h3>3. ID Selector</h3>
      <p>The ID selector selects a single, unique element that has a specific <code>id</code> attribute. In CSS, you denote an ID with a hash symbol (<code>#</code>) followed by the ID name.</p>
      <p><strong>An ID must be unique on a page. You should only have one element with a given ID.</strong></p>
      <p><strong>HTML:</strong></p>
      <pre><code>&lt;div id="main-header"&gt;This is the main header.&lt;/div&gt;</code></pre>
      <p><strong>CSS:</strong></p>
      <pre><code>#main-header {
  border-bottom: 2px solid black;
}</code></pre>

      <h3>Combining Selectors</h3>
      <p>You can combine selectors to be more specific. For example, <code>div.highlight</code> will only select <code>&lt;div&gt;</code> elements that have the class "highlight", but not <code>&lt;p&gt;</code> elements with that class.</p>
    `},{id:"css-box-model",category:"web-development",title:"The Box Model: Margin, Border, Padding",content:`
      <p>In CSS, every HTML element is treated as a rectangular box. The "Box Model" is the set of rules that defines how this box is sized and how it interacts with other elements. It consists of four parts, from the outside in:</p>
      
      <div style="border: 2px solid #333; padding: 20px; text-align: center; background-color: #f0f0f0;">
        <strong>Margin</strong> (transparent, outside the border)
        <div style="border: 2px dashed #00796b; padding: 20px; margin-top: 20px;">
          <strong>Border</strong>
          <div style="background-color: #b2dfdb; padding: 20px; margin-top: 20px;">
            <strong>Padding</strong> (transparent, inside the border)
            <div style="background-color: white; padding: 20px; border: 1px solid #ccc; margin-top: 20px;">
              <strong>Content</strong> (your text, images, etc.)
            </div>
          </div>
        </div>
      </div>

      <h3>1. Content</h3>
      <p>The actual content of the box, where text and images appear. You set its size with the <code>width</code> and <code>height</code> properties.</p>

      <h3>2. Padding</h3>
      <p>Padding is the transparent space between the content and the border. It's like the matting around a picture in a frame. You can control it with properties like <code>padding</code>, <code>padding-top</code>, <code>padding-left</code>, etc.</p>
      <pre><code>p {
  padding: 20px; /* 20px of padding on all four sides */
}</code></pre>

      <h3>3. Border</h3>
      <p>The border goes around the padding and content. It's the picture frame itself. You can set its width, style (solid, dashed, etc.), and color.</p>
      <pre><code>div {
  border: 1px solid black;
}</code></pre>

      <h3>4. Margin</h3>
      <p>Margin is the transparent space on the outside of the border. It's the space between this element and other elements around it. You can control it with properties like <code>margin</code>, <code>margin-top</code>, <code>margin-bottom</code>, etc.</p>
      <pre><code>p {
  margin-top: 15px; /* Adds 15px of space above the paragraph */
}</code></pre>
    `},{id:"css-styling-properties",category:"web-development",title:"Common CSS Properties for Styling",content:`
      <p>CSS has hundreds of properties, but you'll use a small handful of them most of the time. Here are some of the most common properties for styling text and backgrounds.</p>

      <h3>Text Styling</h3>
      <ul>
        <li><strong><code>color</code></strong>: Sets the color of the text.
          <pre><code>p { color: #333333; } /* A dark gray */</code></pre>
        </li>
        <li><strong><code>font-size</code></strong>: Sets the size of the text.
          <pre><code>h1 { font-size: 32px; }</code></pre>
        </li>
        <li><strong><code>font-family</code></strong>: Sets the typeface for the text. It's common to provide a list of "fallback" fonts.
          <pre><code>body { font-family: Arial, sans-serif; }</code></pre>
        </li>
        <li><strong><code>font-weight</code></strong>: Sets how bold the text is. Can be a number (like 400 for normal, 700 for bold) or a keyword.
          <pre><code>strong { font-weight: bold; }</code></pre>
        </li>
        <li><strong><code>text-align</code></strong>: Aligns the text within its element.
          <pre><code>h1 { text-align: center; }</code></pre>
        </li>
      </ul>

      <h3>Background and Spacing</h3>
      <ul>
        <li><strong><code>background-color</code></strong>: Sets the background color of an element.
          <pre><code>div { background-color: #f0f0f0; } /* A light gray */</code></pre>
        </li>
        <li><strong><code>width</code> / <code>height</code></strong>: Sets the dimensions of the element's content area.
          <pre><code>img { width: 100px; height: 100px; }</code></pre>
        </li>
        <li><strong><code>margin</code> / <code>padding</code></strong>: Controls the space outside (margin) and inside (padding) of an element's border.
          <pre><code>button { padding: 10px 20px; margin: 15px; }</code></pre>
        </li>
      </ul>
    `},{id:"css-units",category:"web-development",title:"Understanding CSS Units (px, em, rem, %)",content:`
      <p>When you set a size in CSS (like a <code>font-size</code> or <code>width</code>), you need to provide a unit. There are many units, but four are the most common.</p>

      <h3>Absolute Units: <code>px</code></h3>
      <p>A pixel (<code>px</code>) is an absolute unit. It's a single dot on the screen. <code>16px</code> will be the same size no matter what. Pixels are great for things you want to have a fixed size, like a border.</p>
      <pre><code>.box { border: 1px solid black; }</code></pre>

      <h3>Relative Units</h3>
      <p>Relative units are sized in relation to something else, which makes them very powerful for creating flexible and responsive designs.</p>
      <ul>
        <li><strong><code>%</code> (Percentage):</strong> A percentage is relative to the same property of the parent element. If a <code>&lt;div&gt;</code> is 500px wide, a child element with <code>width: 50%;</code> will be 250px wide.</li>
        <li><strong><code>em</code>:</strong> An <code>em</code> is relative to the font-size of the *current element*. If an element has <code>font-size: 16px;</code>, then <code>2em</code> is equal to 32px. If you change the element's font-size, the <code>em</code> value will change too.</li>
        <li><strong><code>rem</code> (Root em):</strong> A <code>rem</code> is relative to the font-size of the *root element* (the <code>&lt;html&gt;</code> tag). This is very useful because you can change the font size of the entire website just by changing it on the root, and all <code>rem</code> units will scale proportionally. This is the most recommended unit for font sizes.</li>
      </ul>
      <p><strong>✅ Tip for Students:</strong> A good rule of thumb is to use <code>rem</code> for font sizes, <code>px</code> for borders, and <code>%</code> for layouts (like column widths).</p>
    `},{id:"javascript-variables-datatypes",category:"web-development",title:"JavaScript Variables and Data Types",content:`
      <p>Variables are containers for storing data values. In JavaScript, we use keywords like <code>let</code>, <code>const</code>, and <code>var</code> to declare variables.</p>

      <h3>Declaring Variables</h3>
      <ul>
        <li><strong><code>let</code></strong>: Declares a block-scoped variable, optionally initializing it to a value. Its value can be changed.
          <pre><code>let age = 30;
age = 31; // This is allowed</code></pre>
        </li>
        <li><strong><code>const</code></strong>: Declares a block-scoped, read-only named constant. Its value cannot be changed.
          <pre><code>const name = "John";
// name = "Jane"; // This would cause an error</code></pre>
        </li>
        <li><strong><code>var</code></strong>: The old way to declare variables. It has some tricky behavior (like function-scoping instead of block-scoping), so it's generally recommended to use <code>let</code> and <code>const</code> instead.</li>
      </ul>

      <h3>Common Data Types</h3>
      <p>JavaScript has several fundamental data types:</p>
      <ul>
        <li><strong>String</strong>: A sequence of characters, written inside quotes.
          <pre><code>let greeting = "Hello, world!";</code></pre>
        </li>
        <li><strong>Number</strong>: Represents both integer and floating-point numbers.
          <pre><code>let score = 100;
let temperature = 98.6;</code></pre>
        </li>
        <li><strong>Boolean</strong>: Can only have two values: <code>true</code> or <code>false</code>. Often used for conditional logic.
          <pre><code>let isLoggedIn = true;</code></pre>
        </li>
        <li><strong>Array</strong>: A special variable that can hold more than one value, in an ordered list.
          <pre><code>let colors = ["red", "green", "blue"];</code></pre>
        </li>
        <li><strong>Object</strong>: A collection of key/value pairs.
          <pre><code>let person = {
  firstName: "John",
  lastName: "Doe"
};</code></pre>
        </li>
        <li><strong><code>null</code></strong>: Represents the intentional absence of any object value.</li>
        <li><strong><code>undefined</code></strong>: A variable that has been declared but not assigned a value.</li>
      </ul>
    `},{id:"javascript-functions-events",category:"web-development",title:"JavaScript Functions and Events",content:`
      <p>Functions and events are the core of interactive web pages. Functions are blocks of code that can be defined and called, while events are actions that happen in the browser.</p>

      <h3>Functions</h3>
      <p>A function is a reusable block of code designed to perform a specific task. You define a function using the <code>function</code> keyword.</p>
      <pre><code>// Defining the function
function showMessage() {
  alert("Hello, this is a message!");
}

// Calling the function
showMessage();</code></pre>
      <p>Functions can also take <strong>parameters</strong> (inputs) and <strong>return</strong> a value (output).</p>
      <pre><code>function add(number1, number2) {
  return number1 + number2;
}

let sum = add(5, 3); // sum is now 8</code></pre>

      <h3>Events</h3>
      <p>Events are actions that occur on a web page, such as a user clicking a button, moving the mouse, or pressing a key. We can use JavaScript to "listen" for these events and run a function when they happen.</p>
      <p>The most common way to handle an event is with an HTML event attribute, like <code>onclick</code>.</p>
      
      <h4>Example:</h4>
      <p><strong>HTML:</strong></p>
      <pre><code>&lt;button id="myButton"&gt;Click Me&lt;/button&gt;</code></pre>
      <p><strong>JavaScript:</strong></p>
      <pre><code>// Find the button element
const button = document.getElementById("myButton");

// Define the function to run on click
function handleClick() {
  alert("Button was clicked!");
}

// Attach the function to the button's click event
button.onclick = handleClick;</code></pre>
      <p>When the button is clicked, the <code>handleClick</code> function will be executed.</p>
      <p>Other common events include <code>onmouseover</code>, <code>onkeydown</code>, and <code>onload</code>.</p>
    `},{id:"javascript-dom-intro",category:"web-development",title:"Introduction to the DOM",content:`
      <p>The <strong>DOM (Document Object Model)</strong> is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. When an HTML page is loaded, the browser creates a DOM of the page.</p>

      <h3>The DOM as a Tree</h3>
      <p>The DOM represents the HTML document as a tree of objects (or "nodes"). The <code>&lt;html&gt;</code> tag is the root, the <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code> are its children, and so on.</p>

      <h3>Finding HTML Elements</h3>
      <p>JavaScript can access and manipulate these nodes. The most common ways to find an HTML element in the DOM are:</p>
      <ul>
        <li><strong><code>document.getElementById(id)</code></strong>: Finds an element by its unique ID.
          <pre><code>const mainHeader = document.getElementById("main-header");</code></pre>
        </li>
        <li><strong><code>document.getElementsByTagName(name)</code></strong>: Finds all elements with a given tag name.
          <pre><code>const allParagraphs = document.getElementsByTagName("p");</code></pre>
        </li>
        <li><strong><code>document.getElementsByClassName(name)</code></strong>: Finds all elements with a given class name.
          <pre><code>const allHighlights = document.getElementsByClassName("highlight");</code></pre>
        </li>
        <li><strong><code>document.querySelector(selector)</code></strong>: Finds the <em>first</em> element that matches a specified CSS selector.
          <pre><code>const firstHighlight = document.querySelector(".highlight");</code></pre>
        </li>
        <li><strong><code>document.querySelectorAll(selector)</code></strong>: Finds <em>all</em> elements that match a specified CSS selector.
          <pre><code>const allHighlights = document.querySelectorAll(".highlight");</code></pre>
        </li>
      </ul>

      <h3>Changing HTML Content and Style</h3>
      <p>Once you have found an element, you can change its content or style.</p>
      <ul>
        <li><strong><code>element.innerHTML</code></strong>: Changes the HTML content inside an element.
          <pre><code>mainHeader.innerHTML = "New, exciting header!";</code></pre>
        </li>
        <li><strong><code>element.style.property</code></strong>: Changes the CSS style of an element.
          <pre><code>mainHeader.style.color = "red";</code></pre>
        </li>
      </ul>
      <p>DOM manipulation is the key to creating dynamic and interactive web applications.</p>
    `},{id:"browser-developer-tools",category:"web-development",title:"Using the Browser's Developer Tools",content:`
      <p>Every modern web browser comes with a powerful suite of tools for web developers. These are called "Developer Tools" (or "DevTools"), and they allow you to inspect and debug a web page right in your browser.</p>

      <h3>1. How to Open the Developer Tools</h3>
      <p>There are a few easy ways to open them:</p>
      <ul>
        <li><strong>Press F12:</strong> On most browsers on Windows, pressing the F12 key will open the DevTools.</li>
        <li><strong>Right-Click and Inspect:</strong> Right-click on any part of a web page and choose "Inspect" or "Inspect Element" from the context menu. This will open the tools and highlight the element you clicked on.</li>
        <li><strong>Keyboard Shortcut:</strong> <code>Ctrl+Shift+I</code> (on Windows) or <code>Cmd+Option+I</code> (on Mac) is another common shortcut.</li>
      </ul>

      <h3>2. The Elements Tab</h3>
      <p>This is one of the most useful tabs. It shows you the page's HTML structure and the CSS that applies to each element.</p>
      <ul>
        <li>You can see the HTML in a tree view. As you hover over elements in the tree, they will be highlighted on the page.</li>
        <li>When you select an element, the "Styles" pane (usually on the right) shows you all the CSS rules being applied to it. You can even change the CSS values live in the browser to experiment with different styles!</li>
      </ul>

      <h3>3. The Console Tab</h3>
      <p>The Console is your direct line of communication with the page's JavaScript.</p>
      <ul>
        <li><strong>Viewing Logs:</strong> Developers use <code>console.log()</code> in their JavaScript code to print out messages, variables, and other information. This is incredibly helpful for debugging.</li>
        <li><strong>Seeing Errors:</strong> If there is an error in a page's JavaScript, the browser will report it here, often with a line number to help you find the problem.</li>
        <li><strong>Running Code:</strong> You can type JavaScript code directly into the console and press Enter to run it on the current page.</li>
      </ul>

      <h3>4. The Network Tab</h3>
      <p>The Network tab shows you all the files the browser had to download to display the page (like HTML, CSS, JavaScript files, and images). It can help you diagnose slow-loading pages by showing you which files are taking the longest to load.</p>

      <p><strong>✅ Tip for Students:</strong> Don't be afraid to open the DevTools on any website and explore. It's a safe way to see how modern websites are built and to understand the relationship between HTML, CSS, and JavaScript.</p>
    `},{id:"setup-wireless-printer",category:"computer-tips",title:"How to Set Up a Wireless Printer",content:`
      <p>Setting up a wireless printer allows you to print from any computer, phone, or tablet on your Wi-Fi network without needing to plug in any cables. This guide will walk you through the general steps for setting up a modern wireless printer like an Epson or HP.</p>

      <h3>1. Before You Begin</h3>
      <p>Make sure you have the following ready:</p>
      <ul>
        <li>Your Wi-Fi network name (also called SSID).</li>
        <li>Your Wi-Fi password.</li>
      </ul>

      <h3>2. Physical Setup</h3>
      <ol>
        <li><strong>Unbox the printer:</strong> Remove all packing materials and tape from the inside and outside of the printer.</li>
        <li><strong>Plug it in:</strong> Connect the power cord to the printer and plug it into a wall outlet. Turn the printer on.</li>
        <li><strong>Install Ink/Toner:</strong> Follow the printer's on-screen instructions or setup guide to install the ink or toner cartridges.</li>
        <li><strong>Load Paper:</strong> Load plain paper into the paper tray.</li>
      </ol>

      <h3>3. Connect the Printer to Your Wi-Fi Network</h3>
      <p>This is the most important step. Your printer needs to be on the same Wi-Fi network as your computer.</p>
      <ul>
        <li>Most new printers have a small touchscreen. Use it to navigate to the <strong>Settings</strong> or <strong>Network Setup</strong> menu.</li>
        <li>Look for a "Wireless Setup Wizard" or similar option.</li>
        <li>The printer will scan for available Wi-Fi networks. Select your network name from the list.</li>
        <li>Carefully enter your Wi-Fi password using the on-screen keyboard.</li>
      </ul>
      <p>Once connected, the printer will usually display a confirmation message or a solid Wi-Fi light.</p>

      <h3>4. Add the Printer to Windows</h3>
      <p>Now, you need to tell your computer about the new printer.</p>
      <ol>
        <li>On your Windows computer, click the <strong>Start Menu</strong> and go to <strong>Settings</strong> (the gear icon).</li>
        <li>Click on <strong>Bluetooth & devices</strong> from the side menu.</li>
        <li>Select <strong>Printers & scanners</strong>.</li>
        <li>Click the <strong>Add device</strong> button. Windows will search your network for new printers.</li>
        <li>When your printer appears in the list, click <strong>Add device</strong> next to its name. Windows will automatically install the necessary drivers.</li>
      </ol>

      <h3>5. Print a Test Page</h3>
      <p>Once the printer is added, it's a good idea to print a test page to make sure everything is working.</p>
      <ul>
        <li>In the <strong>Printers & scanners</strong> settings, click on your new printer.</li>
        <li>Select <strong>Printer properties</strong>.</li>
        <li>In the new window, look for a button that says <strong>Print Test Page</strong>.</li>
      </ul>
      <p>If the page prints successfully, you're all set!</p>

      <p><strong>✅ Tip for Students:</strong> For extra features like scanning or checking ink levels, it's often best to go to the printer manufacturer's website (e.g., epson.com/support) and download the full software package for your specific printer model. This gives you more control than the basic drivers Windows installs.</p>
    `}],tD=[{category:"computer-basics",title:"Core Concepts",videos:[{id:"cb-vid-1",title:"What is a Computer?",url:"https://www.youtube.com/embed/kBGcfVwf9aI"},{id:"cb-vid-2",title:"Basic Parts of a Desktop Computer",url:"https://www.youtube.com/embed/cZs6kh0WFRY"},{id:"cb-vid-3",title:"Mouse and Keyboard Basics",url:"https://www.youtube.com/embed/vKauB_ui598"}]},{category:"mobile-basics",title:"iPhone Basics",videos:[{id:"mb-vid-1",title:"How To Use Your iPhone 16!",url:"https://www.youtube.com/embed/VEJ9tkqUYVw"},{id:"mb-vid-2",title:"How to use Widgets on your Home Screen",url:"https://www.youtube.com/embed/6AYggGaMRTQ"},{id:"mb-vid-3",title:"How to arrange apps on iphone",url:"https://www.youtube.com/embed/1NfZedosfZo"}]},{category:"mobile-basics",title:"Android & Samsung Basics",videos:[{id:"mb-vid-4",title:"17 Samsung Galaxy Beginner Tips",url:"https://www.youtube.com/embed/ySmSBXLiPPM"},{id:"mb-vid-5",title:"Home Screen Customization",url:"https://www.youtube.com/embed/Z5lpw3Gqv5s?list=PLPRhQEDGqsFC4NL3DiYpPVnDKP9o1dnTw"},{id:"mb-vid-6",title:"Google Account Backup and Sync",url:"https://www.youtube.com/embed/ALApV7VPOFY?list=PLPRhQEDGqsFC4NL3DiYpPVnDKP9o1dnTw"},{id:"mb-vid-7",title:"Android 101: The Share Button",url:"https://www.youtube.com/embed/J7sSFk0GNEE?list=PLPRhQEDGqsFC4NL3DiYpPVnDKP9o1dnTw"},{id:"mb-vid-8",title:"Android Keyboard Settings With Galaxy",url:"https://www.youtube.com/embed/ZJNwaG8CTTA?list=PLPRhQEDGqsFC4NL3DiYpPVnDKP9o1dnTw"},{id:"mb-vid-9",title:"Google Assistant | Android Voice Control",url:"https://www.youtube.com/embed/ZXRSZhQQ-yc?list=PLPRhQEDGqsFC4NL3DiYpPVnDKP9o1dnTw"}]},{category:"windows-nav",title:"Windows 11 Basics (from Microsoft)",videos:[{id:"wn-vid-1",title:"Get to know Windows 11",url:"https://www.youtube.com/embed/Sre2iBjRHg8"},{id:"wn-vid-2",title:"How to Organize Computer Files and Folders System",url:"https://www.youtube.com/embed/HDmwiJxzIrw"},{id:"wn-vid-3",title:"Windows 11 Tips & Tricks You Should Know!",url:"https://www.youtube.com/embed/4s0I6yXaNO0"}]}],DT=j.createContext();function nD({children:r}){const[e,n]=j.useState({topics:[],quizzes:[]}),[s,a]=j.useState(!0),{currentUser:u}=sa();j.useEffect(()=>{(async()=>{try{if(a(!0),u){const S=Xf($f,"users",u.uid),k=await Fx(S);if(k.exists()&&k.data()){const L=k.data();n({topics:L.topics||[],quizzes:L.quizzes||[]})}else n({topics:[],quizzes:[]})}else{const S=localStorage.getItem("techTutorProgress");n(S?JSON.parse(S):{topics:[],quizzes:[]})}}catch(S){console.error("Failed to load user progress:",S),n({topics:[],quizzes:[]})}finally{a(!1)}})()},[u]);const d=j.useCallback(async(_,S)=>{const k={...e,[_]:[...new Set([...e[_]||[],S])]};if(n(k),u){const L=Xf($f,"users",u.uid);await e_(L,k,{merge:!0})}else localStorage.setItem("techTutorProgress",JSON.stringify(k))},[u,e]),p=j.useCallback((_,S)=>e[_]?.includes(S),[e]),g=j.useCallback(async()=>{const _={topics:[],quizzes:[]};if(n(_),u){const S=Xf($f,"users",u.uid);await e_(S,_)}else localStorage.setItem("techTutorProgress",JSON.stringify(_))},[u]),y=j.useMemo(()=>({completedItems:e,markAsComplete:d,isComplete:p,resetProgress:g}),[e,d,p,g]);return s?E.jsx("div",{className:"loading-container",children:"Loading Your Progress..."}):E.jsx(DT.Provider,{value:y,children:r})}function oa(){const r=j.useContext(DT);if(r===void 0)throw new Error("useProgress must be used within a ProgressProvider");return r}function iD({sections:r}){return!r||r.length===0?null:E.jsx(E.Fragment,{children:r.map(e=>E.jsxs("div",{className:"list-section",children:[E.jsx("h3",{children:e.title}),E.jsx("ul",{className:"item-list",children:e.videos.map(n=>E.jsx("li",{children:E.jsxs("a",{href:n.url,target:"_blank",rel:"noopener noreferrer",children:[n.title,E.jsx("span",{className:"external-link-icon",children:"↗"})]})},n.id))})]},e.title))})}function Rl({topics:r,isComplete:e,title:n="Study Guides"}){return!r||r.length===0?null:E.jsxs("div",{className:"list-section",children:[E.jsx("h3",{children:n}),E.jsx("ul",{className:"item-list",children:r.map(s=>E.jsx("li",{children:E.jsxs(tn,{to:`/study/${s.id}`,children:[s.title,e("topics",s.id)&&E.jsx("span",{className:"completion-check",children:" ✅"})]})},s.id))})]})}function NT({percentage:r}){const e=Math.round(r);return E.jsx("div",{className:"progress-bar-container",title:`${e}% Complete`,children:E.jsx("div",{className:"progress-bar",style:{width:`${r}%`},children:e>5&&`${e}%`})})}function Is({category:r,title:e,description:n}){const{isComplete:s}=oa(),a=j.useMemo(()=>{const g=kh.find(y=>y.id===r||y.name===r);return g?g.id:null},[r]),u=j.useMemo(()=>tD.filter(g=>g.category===a),[a]),d=j.useMemo(()=>Qo.filter(g=>g.category===a),[a]),p=j.useMemo(()=>{const g=d.filter(_=>s("topics",_.id)).length,y=d.length;return y>0?g/y*100:0},[d,s]);return E.jsxs("div",{children:[E.jsx("h2",{children:e}),E.jsx("p",{children:n}),E.jsx(NT,{percentage:p}),E.jsx(iD,{sections:u}),E.jsx(Rl,{topics:d,isComplete:s})]},a)}function rD(){const{topicId:r}=Sp(),e=Qo.find(p=>p.id===r),n=j.useMemo(()=>{if(!e)return null;const p=Qo.filter(y=>y.category===e.category),g=p.findIndex(y=>y.id===r);return g!==-1&&g<p.length-1?p[g+1]:null},[e,r]),{markAsComplete:s,isComplete:a}=oa(),u=a("topics",r),d=()=>{window.print()};return e?E.jsxs("div",{className:"study-topic-container",children:[E.jsxs("div",{className:"study-topic-header",children:[E.jsx("h2",{children:e.title}),E.jsxs("div",{className:"study-topic-actions",children:[E.jsx("button",{className:"print-button",onClick:d,children:"🖨️ Print"}),u?E.jsx("span",{className:"completed-badge",children:"✅ Completed"}):E.jsx("button",{className:"complete-button",onClick:()=>s("topics",r),children:"Mark as Complete"})]})]}),E.jsx("div",{className:"study-topic-content",dangerouslySetInnerHTML:{__html:e.content}}),n&&E.jsx("div",{className:"navigation-footer",children:E.jsxs(tn,{to:`/study/${n.id}`,className:"next-topic-button",children:["Next Topic: ",n.title," →"]})})]}):E.jsxs("div",{children:[E.jsx("h2",{children:"Topic not found"}),E.jsx("p",{children:"Sorry, we couldn't find the topic you were looking for."}),E.jsx(tn,{to:"/",children:"Go back to Home"})]})}const aa=[{id:"comp-basics-1",category:"computer-basics",title:"What is a Computer?",questions:[{text:"What are the tangible, physical parts of a computer system called?",options:["Software","Hardware","Firmware","Vaporware"],correctAnswer:1},{text:"Which of the following is NOT a fundamental action of a computer?",options:["Inputting data","Processing data","Generating electricity","Storing data"],correctAnswer:2},{text:"What tells a computer's physical hardware what to do?",options:["The monitor","The power supply","Software","The user manual"],correctAnswer:2},{text:"Which of the following is an example of *application* software?",options:["Windows","macOS","A word processor","The operating system"],correctAnswer:2},{text:"What is the software that manages the computer's hardware and basic operations called?",options:["Application Software","System Software","A web browser","A game"],correctAnswer:1}]},{id:"comp-basics-2",category:"computer-basics",title:"Parts of a Computer",questions:[{text:"What is the primary purpose of a computer monitor?",options:["To execute instructions","To display visual information","To store files long-term","To connect all components"],correctAnswer:1},{text:'Which component is often called the "brain" of the computer?',options:["RAM (Memory)","Hard Drive","CPU (Central Processing Unit)","Motherboard"],correctAnswer:2},{text:"What is the computer's short-term memory called?",options:["SSD (Solid-State Drive)","GPU (Graphics Card)","PSU (Power Supply)","RAM (Random-Access Memory)"],correctAnswer:3},{text:"What is the main circuit board that connects all of the computer's components together?",options:["CPU","RAM","Motherboard","Power Supply"],correctAnswer:2},{text:"Which component is responsible for rendering images and video to be displayed on the monitor?",options:["CPU","RAM","GPU (Graphics Card)","Hard Drive"],correctAnswer:2}]},{id:"mobile-basics-1",category:"mobile-basics",title:"iPhone Fundamentals",questions:[{text:"On an iPhone with Face ID, how do you return to the Home Screen?",options:["Swipe down from the top-right","Swipe up from the bottom edge","Double-press the side button","Press the volume button"],correctAnswer:1},{text:"Where can you find quick access to controls like Wi-Fi, brightness, and volume?",options:["The App Store","The Settings App","The Control Center","The Notification Center"],correctAnswer:2},{text:"How do you take a screenshot on a modern iPhone (with Face ID)?",options:["Press the side button and volume up button at the same time","Press the side button and volume down button at the same time","Hold down the side button for 3 seconds",'Tell Siri to "take a screenshot"'],correctAnswer:0},{text:"What is the official place to download new apps for an iPhone?",options:["The Internet","The App Store","The Settings App","Siri"],correctAnswer:1},{text:"Which voice assistant is built into the iPhone?",options:["Alexa","Google Assistant","Cortana","Siri"],correctAnswer:3}]},{id:"mobile-basics-2",category:"mobile-basics",title:"Android Fundamentals",questions:[{text:"On most newer Android phones, how do you see your recent apps?",options:["Swipe up from the bottom","Swipe up from the bottom and hold","Swipe down from the top","Tap the back button twice"],correctAnswer:1},{text:"Where do you typically go to download new applications on an Android device?",options:["The Quick Settings Panel","The Google Play Store","The Phone app",'The "Files" app'],correctAnswer:1},{text:"What is the standard way to take a screenshot on most Android phones?",options:["Press the Power and Volume Up buttons at the same time","Hold the power button until a menu appears","Press the Power and Volume Down buttons at the same time","Swipe down with three fingers"],correctAnswer:2},{text:"Where can you quickly access controls like Wi-Fi, Flashlight, and Airplane Mode on an Android phone?",options:["The Google Play Store","The Settings App","The Quick Settings Panel","The Home Screen"],correctAnswer:2},{text:"Which voice assistant is built into most Android phones?",options:["Siri","Google Assistant","Alexa","Bixby"],correctAnswer:1}]},{id:"win-nav-1",category:"windows-nav",title:"Navigating the Desktop",questions:[{text:"What is the bar at the bottom of the Windows screen that holds your open programs called?",options:["The Start Menu","The Desktop","The Taskbar","The File Explorer"],correctAnswer:2},{text:"Where do you typically click to find a list of all your applications?",options:["The Recycle Bin","The Start Menu button","The clock in the corner","The network icon"],correctAnswer:1},{text:"What is the main background area of your screen where icons and shortcuts are located?",options:["The Taskbar","The Desktop","The Control Panel","The Start Menu"],correctAnswer:1},{text:"What is the keyboard shortcut to instantly show the desktop, minimizing all windows?",options:["Windows Key + D","Alt + D","Ctrl + D","Shift + D"],correctAnswer:0},{text:"What is the area on the right side of the Taskbar that contains the clock, volume, and Wi-Fi status called?",options:["The Quick Access Toolbar","The Notification Center","The System Tray","The Action Center"],correctAnswer:2}]},{id:"comp-basics-3",category:"computer-basics",title:"Understanding Computer Specs",questions:[{text:'Which component is often called the "brain" of the computer and is responsible for executing commands?',options:["RAM","SSD","CPU","GPU"],correctAnswer:2},{text:"What is the computer's short-term, volatile memory used for active programs?",options:["Hard Drive","RAM","Power Supply","Motherboard"],correctAnswer:1},{text:"Which type of storage is much faster because it has no moving parts?",options:["HDD (Hard Disk Drive)","DVD-ROM","SSD (Solid-State Drive)","USB Flash Drive"],correctAnswer:2},{text:'What does it mean for RAM to be "volatile" memory?',options:["It is very fast","It stores data permanently","Its contents are erased when the computer is turned off","It is not a physical component"],correctAnswer:2},{text:"What unit is typically used to measure a CPU's clock speed?",options:["GB (Gigabytes)","MB/s (Megabytes per second)","GHz (Gigahertz)","DPI (Dots per inch)"],correctAnswer:2}]},{id:"win-nav-2",category:"windows-nav",title:"Using File Explorer Quiz",questions:[{text:"What is the keyboard shortcut to instantly open File Explorer?",options:["Ctrl + E","Alt + F","Windows Key + E","Shift + E"],correctAnswer:2},{text:"In File Explorer, what is the main area on the left side that gives you quick access to locations like Desktop and Documents called?",options:["The Ribbon","The Address Bar","The Navigation Pane","The System Tray"],correctAnswer:2},{text:'What does the file extension ".docx" typically represent?',options:["An image file","A music file","A Microsoft Word document","A program"],correctAnswer:2},{text:"What is the keyboard shortcut to create a new folder in File Explorer?",options:["Ctrl + N","Ctrl + Shift + N","Alt + N","Windows Key + N"],correctAnswer:1},{text:"Which keyboard shortcut allows you to undo your last file action, like an accidental deletion?",options:["Ctrl + Y","Ctrl + Z","Ctrl + U","Alt + Z"],correctAnswer:1}]},{id:"html-doc-structure-quiz",category:"web-development",title:"HTML Document Structure",questions:[{text:"What is the very first line of any HTML5 document?",options:["<html>","<head>","<!DOCTYPE html>","<body>"],correctAnswer:2},{text:"Which element contains metadata about the page, like the title and character set?",options:["<body>","<html>","<meta>","<head>"],correctAnswer:3},{text:"Where does all the visible content (headings, paragraphs, images) of a web page go?",options:["<head>","<body>","<!DOCTYPE html>","<title>"],correctAnswer:1},{text:"What is the purpose of the <title> tag?",options:["To set the main heading on the page","To define the title shown in the browser tab","To link to a CSS file","To set the character encoding"],correctAnswer:1},{text:"Which tag is used to link an external CSS stylesheet to your HTML page?",options:["<script>","<style>","<meta>","<link>"],correctAnswer:3}]},{id:"html-text-tags-quiz",category:"web-development",title:"HTML Text Tags",questions:[{text:"Which tag is used for the most important heading on a page?",options:["<h6>","<h1>","<h2>","<head>"],correctAnswer:1},{text:"Which tag is semantically correct for indicating text with strong importance?",options:["<b>","<i>","<strong>","<em>"],correctAnswer:2},{text:"What is the purpose of the <br> tag?",options:["To create a new paragraph","To insert a single line break","To draw a horizontal line","To make text bold"],correctAnswer:1}]},{id:"html-lists-quiz",category:"web-development",title:"HTML Lists",questions:[{text:"Which tag is used to create a bulleted (unordered) list?",options:["<ol>","<li>","<ul>","<dl>"],correctAnswer:2},{text:"Which tag is used to create a numbered (ordered) list?",options:["<ul>","<li>","<ol>","<list>"],correctAnswer:2},{text:"What tag defines an individual item within any type of list?",options:["<item>","<li>","<ol>","<ul>"],correctAnswer:1}]},{id:"html-links-images-quiz",category:"web-development",title:"HTML Links & Images",questions:[{text:"Which attribute specifies the destination URL for a hyperlink (<a> tag)?",options:["src","link","href","url"],correctAnswer:2},{text:"What is the purpose of the 'alt' attribute on an <img> tag?",options:["To provide alternative text for accessibility and for when the image cannot load","To set the alignment of the image","To create a caption for the image","To link the image to another page"],correctAnswer:0},{text:"How do you make a link open in a new browser tab?",options:["<a href='...' newtab>","<a href='...' target='_blank'>","<a href='...' target='_new'>","<a href='...' open='new'>"],correctAnswer:1}]},{id:"css-selectors-quiz",category:"web-development",title:"CSS Selectors",questions:[{text:"Which character is used to select an element by its ID?",options:[". (period)","# (hash)",": (colon)","> (greater than)"],correctAnswer:1},{text:"Which character is used to select elements by their class name?",options:["# (hash)",". (period)","$ (dollar sign)","& (ampersand)"],correctAnswer:1},{text:"If you write `p { color: red; }`, what will be styled?",options:["Only the first paragraph","All elements with class='p'","All paragraph elements (<p>)","The element with id='p'"],correctAnswer:2}]},{id:"css-box-model-quiz",category:"web-development",title:"The Box Model",questions:[{text:"In the CSS Box Model, what is the space between the content and the border called?",options:["Margin","Padding","Outline","Spacing"],correctAnswer:1},{text:"Which property controls the space *outside* of an element's border?",options:["Padding","Border","Content","Margin"],correctAnswer:3},{text:"What is the correct order of the box model, from the outside in?",options:["Margin, Padding, Border, Content","Border, Margin, Padding, Content","Margin, Border, Padding, Content","Content, Padding, Border, Margin"],correctAnswer:2}]},{id:"css-properties-quiz",category:"web-development",title:"CSS Properties",questions:[{text:"Which CSS property is used to change the color of text?",options:["font-color","text-color","color","text-style"],correctAnswer:2},{text:"Which property sets the background color of an element?",options:["color","background-color","fill-color","element-color"],correctAnswer:1},{text:"Which of these is NOT a valid value for the `font-weight` property?",options:["bold","normal","700","thin"],correctAnswer:3}]},{id:"javascript-variables-quiz",category:"web-development",title:"JavaScript Variables and Data Types",questions:[{text:"Which keyword is used to declare a variable whose value cannot be changed?",options:["let","var","const","static"],correctAnswer:2},{text:"What is the data type of the value `true`?",options:["String","Number","Boolean","Object"],correctAnswer:2},{text:"What is the value of a variable that has been declared but not assigned a value?",options:["null","0","undefined","false"],correctAnswer:2}]},{id:"javascript-functions-events-quiz",category:"web-development",title:"JavaScript Functions and Events",questions:[{text:"What is a reusable block of code designed to perform a specific task called?",options:["An event","A variable","A function","A string"],correctAnswer:2},{text:"Which HTML attribute is commonly used to run a JavaScript function when a button is clicked?",options:["onchange","onmouseover","onload","onclick"],correctAnswer:3},{text:"Which method is used to find an HTML element by its unique ID?",options:["document.querySelector()","document.getElementById()","document.getElementsByClass()","document.find()"],correctAnswer:1}]},{id:"computer-tips-1",category:"computer-tips",title:"Speeding Up Your Computer Quiz",questions:[{text:"What is a good first step to take if your computer is running slow?",options:["Buy a new computer","Close unused programs","Change the wallpaper","Unplug the monitor"],correctAnswer:1},{text:"What does restarting your computer do to help with performance?",options:["It permanently deletes old files","It cleans the dust out of the case","It clears out the short-term memory (RAM)","It makes the screen brighter"],correctAnswer:2},{text:"Which Windows tool can help you remove temporary files to free up disk space?",options:["Task Manager","Disk Cleanup","Control Panel","File Explorer"],correctAnswer:1},{text:"Which Windows utility allows you to manage programs that start automatically with your computer?",options:["File Explorer","Task Manager","Control Panel","Disk Cleanup"],correctAnswer:1},{text:"What is the keyboard shortcut to open the Task Manager directly?",options:["Ctrl + Alt + Del","Windows Key + T","Ctrl + Shift + Esc","Alt + F4"],correctAnswer:2}]},{id:"computer-tips-2",category:"computer-tips",title:"PC Maintenance Quiz",questions:[{text:"Why is it important to physically clean your computer and keep its vents clear?",options:["To make it look shiny","To prevent overheating by allowing good airflow","To make the internet faster","To charge the battery"],correctAnswer:1},{text:"Which built-in Windows tool helps you safely remove temporary files to free up disk space?",options:["Task Manager","Windows Update","Disk Cleanup","File Explorer"],correctAnswer:2},{text:"Why is it important to regularly update your operating system (like Windows)?",options:["To change the look of your desktop","To get new features and patch security holes","To make your internet connection faster","To free up hard drive space"],correctAnswer:1},{text:"What is the name of the free, built-in antivirus program that comes with Windows?",options:["Norton","McAfee","Windows Security (or Defender)","Avast"],correctAnswer:2},{text:"What is the primary risk of not running software updates?",options:["Your computer might run slower","You might miss out on new emojis","Your computer is more vulnerable to security threats","Your screen might not be as bright"],correctAnswer:2}]},{id:"internet-connectivity-1",category:"internet-connectivity",title:"Online Safety Quiz",questions:[{text:"Which of the following is the strongest password?",options:["password123","MyDogFido","My1stDog!WasFido","12345678"],correctAnswer:2},{text:"If you get an urgent email from your bank asking you to click a link to verify your account, what should you do?",options:["Click the link immediately to secure your account","Ignore the email completely","Don't click the link, and go to your bank's website by typing the address yourself","Reply with your account number"],correctAnswer:2},{text:'What is "phishing"?',options:["A type of computer virus","A method criminals use to trick you into giving them your information","A way to speed up your internet","A type of online game"],correctAnswer:1},{text:"When using public Wi-Fi (like at a coffee shop), what is a good safety practice?",options:["Do all your online banking","Avoid logging into sensitive accounts","Share your password with others","Download as many files as possible"],correctAnswer:1},{text:"What is a major red flag for a scam shopping website?",options:["The site has a professional design","The prices are slightly lower than competitors","The prices seem too good to be true","The site accepts credit cards"],correctAnswer:2}]},{id:"internet-connectivity-2",category:"internet-connectivity",title:"Email Basics Quiz",questions:[{text:'In the email address "student@example.com", what is the "example.com" part called?',options:["The username","The handle","The provider","The server"],correctAnswer:2},{text:"What is the most important reason to write a clear subject line in an email?",options:["To make the email look longer","To help the recipient know what the email is about","It is not important","To make sure the email sends faster"],correctAnswer:1},{text:'What is the function of the "Reply All" button in an email client?',options:["It sends your response only to the original sender",'It sends your response to everyone in the "To" and "Cc" fields',"It deletes the original email","It forwards the email to your boss"],correctAnswer:1},{text:"What does the paperclip icon (📎) usually represent in an email client?",options:["Delete the email","Mark as spam","Attach a file","Print the email"],correctAnswer:2},{text:'In the email address "student@example.com", what is the "student" part called?',options:["The domain","The provider","The username","The server"],correctAnswer:2}]},{id:"internet-connectivity-3",category:"internet-connectivity",title:"Web Browsing Basics Quiz",questions:[{text:"What is the main purpose of using tabs in a web browser?",options:["To make the text bigger","To have multiple web pages open in one window","To save your favorite websites","To change the browser color"],correctAnswer:1},{text:"When you see a padlock icon (🔒) in the address bar, what does it generally mean?",options:["The website is locked and you cannot enter","The website has a virus","Your connection to the site is encrypted and more secure","The website is for members only"],correctAnswer:2},{text:"Which of the following is a common web browser?",options:["Microsoft Word","Google Chrome","Adobe Photoshop","Windows File Explorer"],correctAnswer:1},{text:"What is the purpose of a bookmark in a web browser?",options:["To print the current page","To close the current tab","To save a website address for easy access later","To search the web"],correctAnswer:2},{text:"What is another name for a website's address?",options:["IP Address","HTML","URL","Bookmark"],correctAnswer:2}]},{id:"internet-connectivity-4",category:"internet-connectivity",title:"Wi-Fi & Mobile Data Quiz",questions:[{text:"Which of the following is the best reason to use Wi-Fi instead of mobile data when you are at home?",options:["Wi-Fi is always faster than mobile data","Wi-Fi does not use up your phone plan's data allowance","Wi-Fi makes your screen brighter","Wi-Fi works from anywhere in the world"],correctAnswer:1},{text:"What is the main disadvantage of mobile data (4G/5G) compared to Wi-Fi?",options:["It is less secure than any Wi-Fi","It only works on computers","It can be slower and uses your phone plan's data allowance","It does not work for video calls"],correctAnswer:2},{text:"What device creates a Wi-Fi network in your home?",options:["A modem","A router","A computer","A smartphone"],correctAnswer:1},{text:"On a Windows PC, where do you typically click to see and connect to available Wi-Fi networks?",options:["The Start Menu","The Control Panel","The network icon in the taskbar","The settings app"],correctAnswer:2},{text:"Why should you be cautious when using public Wi-Fi?",options:["It is always very slow","It can be less secure than private networks","It costs more money to use","It only works on laptops"],correctAnswer:1}]},{id:"internet-connectivity-5",category:"internet-connectivity",title:"Antivirus & Firewalls Quiz",questions:[{text:"What is the main job of antivirus software like Windows Defender?",options:["To speed up your internet","To organize your files","To detect and remove malicious software (malware)","To update your programs"],correctAnswer:2},{text:"What is the primary role of a firewall?",options:["To clean your computer screen","To monitor internet traffic and block unauthorized access","To make your computer run quieter","To back up your photos"],correctAnswer:1},{text:"Which of these is a key function of a firewall?",options:["To scan for and remove viruses","To monitor network traffic and block unauthorized connections","To update your software automatically","To clean temporary internet files"],correctAnswer:1},{text:"What is the most important thing to do to keep your antivirus software effective?",options:["Run a full scan every hour","Keep it updated with the latest virus definitions","Buy the most expensive version","Disable it when browsing the web"],correctAnswer:1},{text:"True or False: Windows comes with a built-in firewall and antivirus.",options:["True","False"],correctAnswer:0}]},{id:"computer-tips-5",category:"computer-tips",title:"Managing User Accounts Quiz",questions:[{text:"Which type of user account has full control over the computer and can install any software?",options:["Standard User","Guest User","Administrator","Power User"],correctAnswer:2},{text:"What is the main benefit of using a Standard User account for daily tasks?",options:["It runs faster","It is safer because it limits what malicious software can do","It has more customization options","It can access more files"],correctAnswer:1},{text:"What is required to install most new software or change system-wide settings?",options:["A Standard User password","An Administrator password","An internet connection","A guest account"],correctAnswer:1},{text:"Why is it safer to use a Standard User account for daily web browsing?",options:["It loads websites faster","It prevents websites from installing malware without permission","It blocks all advertisements","It automatically clears your browsing history"],correctAnswer:1},{text:"Which account type is created by default when you add a new user in Windows?",options:["Administrator","Power User","Guest","Standard User"],correctAnswer:3}]},{id:"browser-dev-tools-quiz",category:"web-development",title:"Browser Developer Tools",questions:[{text:"What is a common keyboard shortcut to open the Developer Tools?",options:["F12","Ctrl+P","Alt+F4","F1"],correctAnswer:0},{text:"Which tab in the Developer Tools lets you see the HTML structure and CSS styles of a page?",options:["Console","Network","Elements","Application"],correctAnswer:2},{text:"Where would you look to see error messages from a page's JavaScript code?",options:["The Elements Tab","The Network Tab","The Console Tab","The page's source code"],correctAnswer:2},{text:"What JavaScript command is used to print a message to the Console?",options:["alert()","document.write()","console.log()","print.message()"],correctAnswer:2}]}];function sD({quizzes:r,isComplete:e}){return E.jsx("ul",{className:"item-list",children:r.map(n=>E.jsx("li",{children:n.questions&&n.questions.length>0?E.jsxs(tn,{to:`/quiz/${n.id}`,children:[n.title,e("quizzes",n.id)&&E.jsx("span",{className:"completion-check",children:" ✅"})]}):E.jsxs("a",{href:n.url,target:"_blank",rel:"noopener noreferrer",className:"external-link",children:[n.title," (External)",E.jsx("span",{className:"external-link-icon",children:"↗"})]})},n.id))})}function oD(){const{isComplete:r}=oa(),e=j.useMemo(()=>kh.reduce((s,a)=>(s[a.id]=a.name,s),{}),[]),n=j.useMemo(()=>aa.reduce((s,a)=>{const u=a.category||"general";return s[u]||(s[u]=[]),s[u].push(a),s},{}),[]);return E.jsxs("div",{className:"quizzes-container",children:[E.jsx("h2",{children:"Quizzes"}),E.jsx("p",{children:"Test your knowledge on the topics you've studied."}),Object.entries(n).map(([s,a])=>E.jsxs("div",{className:"quiz-category-section",children:[E.jsx("h3",{children:e[s]||"General"}),E.jsx(sD,{quizzes:a,isComplete:r})]},s))]})}const kr=Qo.reduce((r,e)=>(r[e.category]||(r[e.category]=[]),r[e.category].push(e.id),r),{}),aD=aa.filter(r=>r.questions&&r.questions.length>0).map(r=>r.id),lD=[{id:"comp-basics-badge",name:"Computer Basics Pioneer",description:"Completed all study guides in the Computer Basics section.",icon:"💻",condition:r=>{const e=kr["computer-basics"]||[];return e.length>0&&e.every(n=>r.topics.includes(n))}},{id:"mobile-basics-badge",name:"Mobile Maestro",description:"Completed all study guides in the Mobile Phone Basics section.",icon:"📱",condition:r=>{const e=kr["mobile-basics"]||[];return e.length>0&&e.every(n=>r.topics.includes(n))}},{id:"win-nav-badge",name:"Windows Navigator",description:"Completed all study guides in the Windows Navigation section.",icon:"🧭",condition:r=>{const e=kr["windows-nav"]||[];return e.length>0&&e.every(n=>r.topics.includes(n))}},{id:"computer-tips-badge",name:"PC Pro",description:"Completed all study guides in the Computer Tips section.",icon:"🛠️",condition:r=>{const e=kr["computer-tips"]||[];return e.length>0&&e.every(n=>r.topics.includes(n))}},{id:"internet-connectivity-badge",name:"Online Navigator",description:"Completed all study guides in the Internet & Connectivity section.",icon:"🌐",condition:r=>{const e=kr["internet-connectivity"]||[];return e.length>0&&e.every(n=>r.topics.includes(n))}},{id:"tips-tricks-badge",name:"Tech Savvy",description:"Completed all study guides in the Phone Tips & Tricks section.",icon:"💡",condition:r=>{const e=kr["tips-tricks"]||[];return e.length>0&&e.every(n=>r.topics.includes(n))}},{id:"advanced-pc-badge",name:"PC Power User",description:"Completed all study guides in the Level Up Your PC Skills section.",icon:"🚀",condition:r=>{const e=kr["advanced-pc"]||[];return e.length>0&&e.every(n=>r.topics.includes(n))}},{id:"web-dev-badge",name:"Web Architect",description:"Completed all study guides in the Web Development section.",icon:"🏗️",condition:r=>{const e=kr["web-development"]||[];return e.length>0&&e.every(n=>r.topics.includes(n))}},{id:"quiz-comp-basics-1-badge",name:"Computer Whiz",description:'Passed the "What is a Computer?" quiz.',icon:"🧠",condition:r=>r.quizzes.includes("comp-basics-1")},{id:"quiz-comp-basics-2-badge",name:"Hardware Hero",description:'Passed the "Parts of a Computer" quiz.',icon:"⚙️",condition:r=>r.quizzes.includes("comp-basics-2")},{id:"quiz-comp-basics-3-badge",name:"Spec Specialist",description:'Passed the "Understanding Computer Specs" quiz.',icon:"📈",condition:r=>r.quizzes.includes("comp-basics-3")},{id:"quiz-mobile-1-badge",name:"iPhone Expert",description:'Passed the "iPhone Fundamentals" quiz.',icon:"🍏",condition:r=>r.quizzes.includes("mobile-basics-1")},{id:"quiz-mobile-2-badge",name:"Android Ace",description:'Passed the "Android Fundamentals" quiz.',icon:"🤖",condition:r=>r.quizzes.includes("mobile-basics-2")},{id:"quiz-win-nav-1-badge",name:"Desktop Dominator",description:'Passed the "Navigating the Desktop" quiz.',icon:"🖱️",condition:r=>r.quizzes.includes("win-nav-1")},{id:"quiz-win-nav-2-badge",name:"File Commander",description:'Passed the "Using File Explorer" quiz.',icon:"📁",condition:r=>r.quizzes.includes("win-nav-2")},{id:"quiz-computer-tips-1-badge",name:"Performance Pro",description:'Passed the "Speeding Up Your Computer" quiz.',icon:"🚀",condition:r=>r.quizzes.includes("computer-tips-1")},{id:"quiz-computer-tips-2-badge",name:"Maintenance Mechanic",description:'Passed the "PC Maintenance" quiz.',icon:"🔧",condition:r=>r.quizzes.includes("computer-tips-2")},{id:"quiz-computer-tips-3-badge",name:"Digital Defender",description:'Passed the "Online Safety" quiz.',icon:"🔒",condition:r=>r.quizzes.includes("internet-connectivity-1")},{id:"quiz-computer-tips-4-badge",name:"Email Expert",description:'Passed the "Email Basics" quiz.',icon:"📧",condition:r=>r.quizzes.includes("internet-connectivity-2")},{id:"quiz-internet-connectivity-3-badge",name:"Web Wanderer",description:'Passed the "Web Browsing Basics" quiz.',icon:"🧭",condition:r=>r.quizzes.includes("internet-connectivity-3")},{id:"quiz-internet-connectivity-4-badge",name:"Connection Captain",description:'Passed the "Wi-Fi & Mobile Data" quiz.',icon:"📶",condition:r=>r.quizzes.includes("internet-connectivity-4")},{id:"quiz-internet-connectivity-5-badge",name:"Security Sentinel",description:'Passed the "Antivirus & Firewalls" quiz.',icon:"🛡️",condition:r=>r.quizzes.includes("internet-connectivity-5")},{id:"quiz-computer-tips-5-badge",name:"Account Admin",description:'Passed the "Managing User Accounts" quiz.',icon:"🔑",condition:r=>r.quizzes.includes("computer-tips-5")},{id:"quiz-tips-2-badge",name:"Battery Boss",description:'Passed the "Improving Phone Battery Life" quiz.',icon:"🔋",condition:r=>r.quizzes.includes("tips-tricks-2")},{id:"quiz-tips-tricks-3-badge",name:"Android Power User",description:'Passed the "Advanced Android Features" quiz.',icon:"⚡",condition:r=>r.quizzes.includes("tips-tricks-3")},{id:"quiz-tips-tricks-4-badge",name:"Payment Pro",description:`Passed the "Using Your Phone's Digital Wallet" quiz.`,icon:"💳",condition:r=>r.quizzes.includes("tips-tricks-4")},{id:"quiz-tips-tricks-5-badge",name:"Home Screen Stylist",description:'Passed the "Customizing Your Home Screen" quiz.',icon:"🎨",condition:r=>r.quizzes.includes("tips-tricks-5")},{id:"quiz-tips-tricks-6-badge",name:"Notification Ninja",description:'Passed the "Notification Settings" quiz.',icon:"🔕",condition:r=>r.quizzes.includes("tips-tricks-6")},{id:"quiz-tips-tricks-7-badge",name:"Assistant Admiral",description:'Passed the "Mastering Google Assistant" quiz.',icon:"🗣️",condition:r=>r.quizzes.includes("tips-tricks-7")},{id:"quiz-tips-tricks-8-badge",name:"Privacy Protector",description:'Passed the "App Permissions" quiz.',icon:"🛡️",condition:r=>r.quizzes.includes("tips-tricks-8")},{id:"quiz-tips-tricks-9-badge",name:"Memory Guardian",description:'Passed the "Google Photos" quiz.',icon:"🖼️",condition:r=>r.quizzes.includes("tips-tricks-9")},{id:"quiz-advanced-pc-1-badge",name:"Extension Expert",description:'Passed the "Power Up Your Browser with Extensions" quiz.',icon:"🧩",condition:r=>r.quizzes.includes("advanced-pc-1")},{id:"quiz-advanced-pc-2-badge",name:"Cloud Commander",description:'Passed the "Understanding Cloud Storage" quiz.',icon:"☁️",condition:r=>r.quizzes.includes("advanced-pc-2")},{id:"quiz-advanced-pc-3-badge",name:"Security Guardian",description:'Passed the "Securing Your Accounts with 2FA" quiz.',icon:"🔐",condition:r=>r.quizzes.includes("advanced-pc-3")},{id:"quiz-advanced-pc-4-badge",name:"Windows Wizard",description:'Passed the "Unlock God Mode" quiz.',icon:"🪄",condition:r=>r.quizzes.includes("advanced-pc-4")},{id:"quiz-web-dev-1-badge",name:"HTML Apprentice",description:'Passed the "Introduction to HTML" quiz.',icon:"📝",condition:r=>r.quizzes.includes("web-dev-1")},{id:"quiz-web-dev-2-badge",name:"CSS Stylist",description:'Passed the "Introduction to CSS" quiz.',icon:"🎨",condition:r=>r.quizzes.includes("web-dev-2")},{id:"quiz-web-dev-3-badge",name:"JS Scripter",description:'Passed the "Introduction to JavaScript" quiz.',icon:"📜",condition:r=>r.quizzes.includes("web-dev-3")},{id:"quiz-master-badge",name:"Quiz Master",description:"Completed all available quizzes.",icon:"🏆",condition:r=>{const e=aD;return e.length>0&&e.every(n=>r.quizzes.includes(n))}}];function uD(){const{completedItems:r,resetProgress:e}=oa(),{overallPercentage:n,completedItemsCount:s,totalItems:a}=j.useMemo(()=>{const d=Qo.length,p=r.topics.length,g=aa.filter(L=>L.questions&&L.questions.length>0).length,y=r.quizzes.length,_=d+g,S=p+y;return{overallPercentage:_>0?S/_*100:0,completedItemsCount:S,totalItems:_}},[r]),u=()=>{window.confirm("Are you sure you want to reset all your progress? This action cannot be undone.")&&e()};return E.jsxs("div",{className:"badges-container",children:[E.jsx("h2",{children:"My Badges & Progress"}),E.jsx("p",{children:"You'll earn badges here as you complete sections of the course and pass quizzes."}),E.jsxs("div",{className:"overall-progress-section",children:[E.jsx("h3",{children:"Overall Course Progress"}),E.jsx(NT,{percentage:n}),E.jsxs("p",{children:[s," of ",a," items completed."]})]}),E.jsx("div",{className:"badges-grid",children:lD.map(d=>{const p=d.condition(r);return E.jsxs("div",{className:`badge-card ${p?"earned":""}`,children:[E.jsx("div",{className:"badge-icon",children:p?d.icon:"❓"}),E.jsx("h3",{className:"badge-name",children:d.name}),E.jsx("p",{className:"badge-description",children:d.description})]},d.id)})}),E.jsxs("div",{className:"reset-section",children:[E.jsx("h3",{children:"Reset Progress"}),E.jsx("p",{children:"This will clear all your completed topics and quizzes, and reset your progress. Use with caution!"}),E.jsx("button",{className:"reset-button",onClick:u,children:"Reset All Progress"})]})]})}function cD(){const[r,e]=j.useState(""),[n,s]=j.useState(""),[a,u]=j.useState(""),[d,p]=j.useState(!1),{signup:g}=sa(),y=Jo();async function _(S){S.preventDefault();try{u(""),p(!0),await g(r,n),y("/")}catch(k){u("Failed to create an account: "+k.message)}p(!1)}return E.jsx("div",{className:"auth-container",children:E.jsxs("div",{className:"auth-card",children:[E.jsx("h1",{className:"auth-brand",children:"TechTutor"}),E.jsx("h2",{className:"auth-title",children:"Sign Up"}),a&&E.jsx("div",{className:"auth-error",children:a}),E.jsxs("form",{onSubmit:_,children:[E.jsxs("div",{className:"form-group",children:[E.jsx("label",{htmlFor:"email",children:"Email"}),E.jsx("input",{type:"email",id:"email",value:r,onChange:S=>e(S.target.value),required:!0})]}),E.jsxs("div",{className:"form-group",children:[E.jsx("label",{htmlFor:"password",children:"Password"}),E.jsx("input",{type:"password",id:"password",value:n,onChange:S=>s(S.target.value),required:!0})]}),E.jsx("button",{disabled:d,className:"auth-button",type:"submit",children:d?"Signing Up...":"Sign Up"})]}),E.jsxs("div",{className:"auth-switch",children:["Already have an account? ",E.jsx(tn,{to:"/login",children:"Log In"})]})]})})}var MT={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},t_=ri.createContext&&ri.createContext(MT),hD=["attr","size","title"];function dD(r,e){if(r==null)return{};var n=fD(r,e),s,a;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);for(a=0;a<u.length;a++)s=u[a],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(n[s]=r[s])}return n}function fD(r,e){if(r==null)return{};var n={};for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s)){if(e.indexOf(s)>=0)continue;n[s]=r[s]}return n}function hh(){return hh=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},hh.apply(this,arguments)}function n_(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);e&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable})),n.push.apply(n,s)}return n}function dh(r){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?n_(Object(n),!0).forEach(function(s){pD(r,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):n_(Object(n)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(n,s))})}return r}function pD(r,e,n){return e=gD(e),e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function gD(r){var e=mD(r,"string");return typeof e=="symbol"?e:e+""}function mD(r,e){if(typeof r!="object"||!r)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var s=n.call(r,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function OT(r){return r&&r.map((e,n)=>ri.createElement(e.tag,dh({key:n},e.attr),OT(e.child)))}function PT(r){return e=>ri.createElement(yD,hh({attr:dh({},r.attr)},e),OT(r.child))}function yD(r){var e=n=>{var{attr:s,size:a,title:u}=r,d=dD(r,hD),p=a||n.size||"1em",g;return n.className&&(g=n.className),r.className&&(g=(g?g+" ":"")+r.className),ri.createElement("svg",hh({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,d,{className:g,style:dh(dh({color:r.color||n.color},n.style),r.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),u&&ri.createElement("title",null,u),r.children)};return t_!==void 0?ri.createElement(t_.Consumer,null,n=>e(n)):e(MT)}function vD(r){return PT({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"},child:[]}]})(r)}function wD(r){return PT({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(r)}function _D(){const[r,e]=j.useState(""),[n,s]=j.useState(""),[a,u]=j.useState(""),[d,p]=j.useState(!1),[g,y]=j.useState(!1),{login:_}=sa(),S=Jo();async function k(L){L.preventDefault();try{u(""),y(!0),await _(r,n),S("/")}catch(W){u("Failed to log in: "+W.message)}y(!1)}return E.jsx("div",{className:"auth-container",children:E.jsxs("div",{className:"auth-card",children:[E.jsx("h1",{className:"auth-brand",children:"TechTutor"}),E.jsx("h2",{className:"auth-title",children:"Log In"}),a&&E.jsx("div",{className:"auth-error",children:a}),E.jsxs("form",{onSubmit:k,children:[E.jsxs("div",{className:"form-group",children:[E.jsx("label",{htmlFor:"email",children:"Email"}),E.jsx("input",{type:"email",id:"email",value:r,onChange:L=>e(L.target.value),required:!0})]}),E.jsxs("div",{className:"form-group password-group",children:[E.jsx("label",{htmlFor:"password",children:"Password"}),E.jsx("input",{type:d?"text":"password",id:"password",value:n,onChange:L=>s(L.target.value),required:!0}),E.jsx("span",{className:"password-toggle-icon",onClick:()=>p(!d),children:d?E.jsx(vD,{}):E.jsx(wD,{})})]}),E.jsx("button",{disabled:g,className:"auth-button",type:"submit",children:g?"Logging In...":"Log In"})]}),E.jsx("div",{className:"auth-switch",children:E.jsx(tn,{to:"/forgot-password",children:"Forgot Password?"})}),E.jsxs("div",{className:"auth-switch",children:["Need an account? ",E.jsx(tn,{to:"/signup",children:"Sign Up"})]})]})})}function bD(){const{quizId:r}=Sp(),e=Jo(),{markAsComplete:n,isComplete:s}=oa(),[a,u]=j.useState(null),[d,p]=j.useState(0),[g,y]=j.useState({}),[_,S]=j.useState(null),[k,L]=j.useState(!1);j.useEffect(()=>{const ne=aa.find(he=>he.id===r);ne?(u(ne),s("quizzes",r)&&L(!0)):e("/quizzes")},[r,e,s]);const W=(ne,he)=>{y({...g,[ne]:he})},$=()=>{d<a.questions.length-1&&p(d+1)},G=()=>{d>0&&p(d-1)},re=()=>{let ne=0;a.questions.forEach((ce,ve)=>{g[ve]===ce.correctAnswer&&ne++});const he=ne/a.questions.length*100;S(he),L(!0),n("quizzes",r)};if(!a||!a.questions||a.questions.length===0)return E.jsx("div",{className:"quiz-container",children:"This quiz is not yet available."});const ee=a.questions[d];return k?E.jsxs("div",{className:"quiz-container quiz-results",children:[E.jsx("div",{className:"quiz-header",children:E.jsx(tn,{to:`/quiz/${r}/print`,className:"printable-link",children:"🖨️ View Printable Version"})}),E.jsxs("h2",{children:[a.title," - Results"]}),_!==null?E.jsxs(E.Fragment,{children:[E.jsxs("p",{className:"quiz-score",children:["Your Score: ",_.toFixed(0),"%"]}),E.jsx("div",{className:"quiz-review",children:a.questions.map((ne,he)=>E.jsxs("div",{className:"review-question",children:[E.jsx("p",{children:E.jsxs("strong",{children:[he+1,". ",ne.text]})}),E.jsx("ul",{className:"review-options",children:ne.options.map((ce,ve)=>E.jsxs("li",{className:`
                          ${ve===ne.correctAnswer?"correct":""}
                          ${g[he]===ve&&ve!==ne.correctAnswer?"incorrect":""}
                        `,children:[ce,ve===ne.correctAnswer&&" (Correct Answer)",g[he]===ve&&ve!==ne.correctAnswer&&" (Your Answer)"]},ve))})]},he))})]}):E.jsx("p",{children:"You have already completed this quiz."}),E.jsx("button",{onClick:()=>e("/quizzes"),className:"quiz-nav-button",children:"Back to Quizzes"})]}):E.jsxs("div",{className:"quiz-container",children:[E.jsx("div",{className:"quiz-header",children:E.jsx(tn,{to:`/quiz/${r}/print`,className:"printable-link",children:"🖨️ View Printable Version"})}),E.jsx("h2",{children:a.title}),E.jsxs("div",{className:"quiz-progress",children:["Question ",d+1," of ",a.questions.length]}),E.jsxs("div",{className:"quiz-question-card",children:[E.jsx("p",{className:"quiz-question-text",children:ee.text}),E.jsx("div",{className:"quiz-options",children:ee.options.map((ne,he)=>E.jsx("button",{className:`quiz-option-button ${g[d]===he?"selected":""}`,onClick:()=>W(d,he),children:ne},he))})]}),E.jsxs("div",{className:"quiz-navigation",children:[E.jsx("button",{onClick:G,disabled:d===0,className:"quiz-nav-button",children:"Previous"}),d<a.questions.length-1?E.jsx("button",{onClick:$,className:"quiz-nav-button",children:"Next"}):E.jsx("button",{onClick:re,className:"quiz-submit-button",children:"Submit Quiz"})]})]})}function TD(){const[r,e]=j.useState(""),[n,s]=j.useState(""),[a,u]=j.useState(""),[d,p]=j.useState(!1),{resetPassword:g}=sa();async function y(_){_.preventDefault();try{u(""),s(""),p(!0),await g(r),u("Check your inbox for further instructions")}catch(S){s("Failed to reset password: "+S.message)}p(!1)}return E.jsx("div",{className:"auth-container",children:E.jsxs("div",{className:"auth-card",children:[E.jsx("h2",{className:"auth-title",children:"Password Reset"}),n&&E.jsx("div",{className:"auth-error",children:n}),a&&E.jsx("div",{className:"auth-success",children:a}),E.jsxs("form",{onSubmit:y,children:[E.jsxs("div",{className:"form-group",children:[E.jsx("label",{htmlFor:"email",children:"Email"}),E.jsx("input",{type:"email",id:"email",value:r,onChange:_=>e(_.target.value),required:!0})]}),E.jsx("button",{disabled:d,className:"auth-button",type:"submit",children:"Reset Password"})]}),E.jsx("div",{className:"auth-switch",children:E.jsx(tn,{to:"/login",children:"Back to Log In"})})]})})}function ED(){const{currentUser:r}=sa(),e="johnwalkenbach1@gmail.com";let n=`mailto:${e}`;if(r){const s=encodeURIComponent("Question from TechTutor Student"),a=encodeURIComponent(`Sent from: ${r.email}

`);n=`mailto:${e}?subject=${s}&body=${a}`}return E.jsxs("div",{className:"instructor-container",children:[E.jsxs("div",{className:"instructor-card",children:[E.jsxs("div",{className:"instructor-header",children:[E.jsx("img",{src:"/john-placeholder.jpg",alt:"John, your instructor",className:"instructor-photo"}),E.jsxs("div",{className:"instructor-title",children:[E.jsx("h1",{children:"Meet Your Instructor"}),E.jsx("h2",{children:"John W."})]})]}),E.jsxs("div",{className:"instructor-bio",children:[E.jsx("p",{children:"Hello! I'm John, and at 52 years young, I'm excited to be your guide on this journey to digital literacy. My passion is helping people feel confident and empowered when using technology."}),E.jsx("p",{children:"While this is my first formal teaching role, I've spent years helping friends and family with their tech, and I've designed these courses to be simple, clear, and practical. I believe that everyone can master the basics of computers and smartphones, and I'm here to support you every step of the way."}),E.jsx("p",{children:"When I'm not teaching, I enjoy watching NFL, Listening to Rock Music, and exploring new tech gadgets. I look forward to helping you achieve your goals! YOU GOT THIS!!"})]})]}),E.jsxs("div",{className:"contact-card",children:[E.jsx("h2",{children:"Contact Me"}),E.jsxs("p",{children:["If you have any questions, comments, or topics you want to study,"," ",E.jsx("a",{href:n,children:"send me an email"}),"."]})]})]})}const SD=()=>{const{isComplete:r}=oa(),e=j.useMemo(()=>Qo.filter(d=>d.category==="web-development"),[]),n=j.useMemo(()=>e.filter(d=>d.id.startsWith("html-")||d.id==="intro-to-html"),[e]),s=j.useMemo(()=>e.filter(d=>d.id.startsWith("css-")||d.id==="intro-to-css"),[e]),a=j.useMemo(()=>e.filter(d=>d.id.startsWith("javascript-")||d.id==="intro-to-javascript"),[e]),u=j.useMemo(()=>e.filter(d=>d.id.startsWith("browser-")),[e]);return E.jsxs("div",{className:"lesson-page-container",children:[E.jsx("h2",{children:"Web Development"}),E.jsx("p",{children:"Learn the building blocks of the web: HTML, CSS, and JavaScript."}),E.jsx(Rl,{topics:n,isComplete:r,title:"HTML Foundations"}),E.jsx(Rl,{topics:s,isComplete:r,title:"CSS Foundations"}),E.jsx(Rl,{topics:a,isComplete:r,title:"JavaScript Foundations"}),E.jsx(Rl,{topics:u,isComplete:r,title:"Tools and Debugging"})]})};function AD(){const{quizId:r}=Sp(),e=Jo(),n=aa.find(a=>a.id===r),s=()=>{window.print()};return n?E.jsxs("div",{className:"printable-quiz-container",children:[E.jsxs("div",{className:"printable-header no-print",children:[E.jsx("h1",{children:"Printable Quiz"}),E.jsxs("div",{className:"printable-actions",children:[E.jsx("button",{onClick:s,className:"print-button",children:"🖨️ Print"}),E.jsx("button",{onClick:()=>e(`/quiz/${r}`),className:"back-button",children:"Back to Interactive Quiz"})]})]}),E.jsxs("div",{className:"quiz-content",children:[E.jsx("h2",{children:n.title}),E.jsxs("p",{children:[E.jsx("strong",{children:"Name:"})," ___________________________"]}),E.jsxs("p",{children:[E.jsx("strong",{children:"Date:"})," ___________________________"]}),E.jsx("hr",{}),n.questions.map((a,u)=>E.jsxs("div",{className:"printable-question",children:[E.jsx("p",{children:E.jsxs("strong",{children:[u+1,". ",a.text]})}),E.jsx("ul",{className:"printable-options",children:a.options.map((d,p)=>E.jsxs("li",{children:[E.jsxs("span",{className:"option-letter",children:[String.fromCharCode(65+p),"."]})," ",d]},p))})]},u))]})]}):E.jsxs("div",{className:"printable-quiz-container",children:[E.jsx("h2",{children:"Quiz not found"}),E.jsx("p",{children:"Sorry, we couldn't find the quiz you were looking for."}),E.jsx(tn,{to:"/quizzes",children:"Back to Quizzes"})]})}function RD(){const r=()=>{window.print()},e=j.useMemo(()=>kh.reduce((s,a)=>(s[a.id]=a.name,s),{}),[]),n=j.useMemo(()=>aa.reduce((s,a)=>{const u=a.category||"general";return s[u]||(s[u]=[]),s[u].push(a),s},{}),[]);return E.jsxs("div",{className:"printable-answer-key-container",children:[E.jsxs("div",{className:"printable-header no-print",children:[E.jsx("h1",{children:"Quiz Answer Key"}),E.jsxs("div",{className:"printable-actions",children:[E.jsx("button",{onClick:r,className:"print-button",children:"🖨️ Print"}),E.jsx(tn,{to:"/quizzes",className:"back-button",children:"Back to Quizzes"})]})]}),E.jsx("div",{className:"answer-key-content",children:Object.entries(n).map(([s,a])=>E.jsxs("div",{className:"category-section",children:[E.jsx("h2",{children:e[s]||"General"}),a.map(u=>E.jsxs("div",{className:"quiz-section",children:[E.jsx("h3",{children:u.title}),u.questions.map((d,p)=>E.jsxs("div",{className:"question-answer",children:[E.jsx("p",{children:E.jsxs("strong",{children:[p+1,". ",d.text]})}),E.jsxs("p",{className:"correct-answer",children:["Answer: ",d.options[d.correctAnswer]]})]},p))]},u.id))]},s))})]})}function CD(){return E.jsxs(u0,{children:[E.jsxs(ft,{path:"/",element:E.jsx(Jx,{}),children:[E.jsx(ft,{index:!0,element:E.jsx(eD,{})}),E.jsx(ft,{path:"computer-basics",element:E.jsx(Is,{category:"computer-basics",title:"Computer Basics",description:"Start from scratch. Learn what a computer is, its main parts, and how to use it."})}),E.jsx(ft,{path:"mobile-basics",element:E.jsx(Is,{category:"mobile-basics",title:"Mobile Phone Basics",description:"Master your smartphone, whether it's an iPhone or an Android."})}),E.jsx(ft,{path:"windows-nav",element:E.jsx(Is,{category:"windows-nav",title:"Windows Navigation",description:"Learn to navigate Windows to find and manage your files and applications."})}),E.jsx(ft,{path:"internet-connectivity",element:E.jsx(Is,{category:"internet-connectivity",title:"Internet & Connectivity",description:"Learn the essentials of getting online, browsing safely, and using email."})}),E.jsx(ft,{path:"computer-tips",element:E.jsx(Is,{category:"computer-tips",title:"Computer Tips",description:"Practical advice for maintaining and speeding up your computer."})}),E.jsx(ft,{path:"tips-tricks",element:E.jsx(Is,{category:"tips-tricks",title:"Phone Tips & Tricks",description:"Learn how to get the most out of your smartphone with these helpful tips and tricks."})}),E.jsx(ft,{path:"advanced-pc",element:E.jsx(Is,{category:"advanced-pc",title:"Level Up Your PC Skills",description:"Go beyond the basics with these guides on more advanced computer topics."})}),E.jsx(ft,{path:"quizzes",element:E.jsx(oD,{})}),E.jsx(ft,{path:"quizzes/answer-key",element:E.jsx(RD,{})}),E.jsx(ft,{path:"badges",element:E.jsx(uD,{})}),E.jsx(ft,{path:"quiz/:quizId",element:E.jsx(bD,{})}),E.jsx(ft,{path:"quiz/:quizId/print",element:E.jsx(AD,{})})," ",E.jsx(ft,{path:"web-development",element:E.jsx(SD,{})})," ",E.jsx(ft,{path:"meet-instructor",element:E.jsx(ED,{})}),E.jsx(ft,{path:"study/:topicId",element:E.jsx(rD,{})})]}),E.jsx(ft,{path:"/signup",element:E.jsx(cD,{})}),E.jsx(ft,{path:"/login",element:E.jsx(_D,{})}),E.jsx(ft,{path:"/forgot-password",element:E.jsx(TD,{})})]})}mS.createRoot(document.getElementById("root")).render(E.jsx(ri.StrictMode,{children:E.jsx(N0,{children:E.jsx(Qx,{children:E.jsx(nD,{children:E.jsx(CD,{})})})})}));
