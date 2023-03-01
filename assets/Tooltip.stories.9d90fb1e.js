var vt=Object.defineProperty;var d=(e,t)=>vt(e,"name",{value:t,configurable:!0});import{B as yt}from"./Button.e0b6e26a.js";import{c as me,a as q,_ as O,$ as Ye,d as se,g as bt}from"./index.module.64f33489.js";import{$ as Ct,r as l}from"./index.e2094f73.js";import{$ as Pt,a as V,b as Xe}from"./index.module.cc19915e.js";import{c as Et,d as At,e as Tt}from"./index.module.952cf8c9.js";import{r as Rt}from"./index.1805eea2.js";import{$ as Ot}from"./index.module.e844fe0d.js";import{s as ze}from"./index.5f8d9363.js";import{j,a as Le}from"./jsx-runtime.1971be57.js";import{B as _t}from"./Box.074169d1.js";import"./iframe.55410252.js";import"./index.75b2c3cd.js";const Dt=Ct["useId".toString()]||(()=>{});let St=0;function Lt(e){const[t,n]=l.exports.useState(Dt());return me(()=>{e||n(o=>o!=null?o:String(St++))},[e]),e||(t?`radix-${t}`:"")}d(Lt,"$1746a345f3d73bb7$export$f680877a34711e37");function Y(e){return e.split("-")[0]}d(Y,"getSide");function ce(e){return e.split("-")[1]}d(ce,"getAlignment");function X(e){return["top","bottom"].includes(Y(e))?"x":"y"}d(X,"getMainAxisFromPlacement");function ye(e){return e==="y"?"height":"width"}d(ye,"getLengthFromAxis");function ke(e,t,n){let{reference:o,floating:r}=e;const i=o.x+o.width/2-r.width/2,s=o.y+o.height/2-r.height/2,c=X(t),a=ye(c),u=o[a]/2-r[a]/2,x=Y(t),f=c==="x";let g;switch(x){case"top":g={x:i,y:o.y-r.height};break;case"bottom":g={x:i,y:o.y+o.height};break;case"right":g={x:o.x+o.width,y:s};break;case"left":g={x:o.x-r.width,y:s};break;default:g={x:o.x,y:o.y}}switch(ce(t)){case"start":g[c]-=u*(n&&f?-1:1);break;case"end":g[c]+=u*(n&&f?-1:1);break}return g}d(ke,"computeCoordsFromPlacement");const kt=d(async(e,t,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:s}=n,c=await(s.isRTL==null?void 0:s.isRTL(t));let a=await s.getElementRects({reference:e,floating:t,strategy:r}),{x:u,y:x}=ke(a,o,c),f=o,g={},p=0;for(let m=0;m<i.length;m++){const{name:h,fn:$}=i[m],{x:y,y:v,data:w,reset:b}=await $({x:u,y:x,initialPlacement:o,placement:f,strategy:r,middlewareData:g,rects:a,platform:s,elements:{reference:e,floating:t}});if(u=y!=null?y:u,x=v!=null?v:x,g={...g,[h]:{...g[h],...w}},b&&p<=50){p++,typeof b=="object"&&(b.placement&&(f=b.placement),b.rects&&(a=b.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:r}):b.rects),{x:u,y:x}=ke(a,f,c)),m=-1;continue}}return{x:u,y:x,placement:f,strategy:r,middlewareData:g}},"computePosition$1");function Mt(e){return{top:0,right:0,bottom:0,left:0,...e}}d(Mt,"expandPaddingObject");function Ue(e){return typeof e!="number"?Mt(e):{top:e,right:e,bottom:e,left:e}}d(Ue,"getSideObjectFromPadding");function ee(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}d(ee,"rectToClientRect");async function te(e,t){var n;t===void 0&&(t={});const{x:o,y:r,platform:i,rects:s,elements:c,strategy:a}=e,{boundary:u="clippingAncestors",rootBoundary:x="viewport",elementContext:f="floating",altBoundary:g=!1,padding:p=0}=t,m=Ue(p),$=c[g?f==="floating"?"reference":"floating":f],y=ee(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement($)))==null||n?$:$.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(c.floating)),boundary:u,rootBoundary:x,strategy:a})),v=ee(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:f==="floating"?{...s.floating,x:o,y:r}:s.reference,offsetParent:await(i.getOffsetParent==null?void 0:i.getOffsetParent(c.floating)),strategy:a}):s[f]);return{top:y.top-v.top+m.top,bottom:v.bottom-y.bottom+m.bottom,left:y.left-v.left+m.left,right:v.right-y.right+m.right}}d(te,"detectOverflow");const Ht=Math.min,Nt=Math.max;function ge(e,t,n){return Nt(e,Ht(t,n))}d(ge,"within");const Me=d(e=>({name:"arrow",options:e,async fn(t){const{element:n,padding:o=0}=e!=null?e:{},{x:r,y:i,placement:s,rects:c,platform:a}=t;if(n==null)return{};const u=Ue(o),x={x:r,y:i},f=X(s),g=ce(s),p=ye(f),m=await a.getDimensions(n),h=f==="y"?"top":"left",$=f==="y"?"bottom":"right",y=c.reference[p]+c.reference[f]-x[f]-c.floating[p],v=x[f]-c.reference[f],w=await(a.getOffsetParent==null?void 0:a.getOffsetParent(n));let b=w?f==="y"?w.clientHeight||0:w.clientWidth||0:0;b===0&&(b=c.floating[p]);const P=y/2-v/2,C=u[h],E=b-m[p]-u[$],A=b/2-m[p]/2+P,T=ge(C,A,E),R=(g==="start"?u[h]:u[$])>0&&A!==T&&c.reference[p]<=c.floating[p]?A<C?C-A:E-A:0;return{[f]:x[f]-R,data:{[f]:T,centerOffset:A-T}}}}),"arrow$1"),It={left:"right",right:"left",bottom:"top",top:"bottom"};function ne(e){return e.replace(/left|right|bottom|top/g,t=>It[t])}d(ne,"getOppositePlacement");function Bt(e,t,n){n===void 0&&(n=!1);const o=ce(e),r=X(e),i=ye(r);let s=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(s=ne(s)),{main:s,cross:ne(s)}}d(Bt,"getAlignmentSides");const Ft={start:"end",end:"start"};function He(e){return e.replace(/start|end/g,t=>Ft[t])}d(He,"getOppositeAlignmentPlacement");const Wt=["top","right","bottom","left"];function Vt(e){const t=ne(e);return[He(e),t,He(t)]}d(Vt,"getExpandedPlacements");const jt=d(function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:o,middlewareData:r,rects:i,initialPlacement:s,platform:c,elements:a}=t,{mainAxis:u=!0,crossAxis:x=!0,fallbackPlacements:f,fallbackStrategy:g="bestFit",flipAlignment:p=!0,...m}=e,h=Y(o),y=f||(h===s||!p?[ne(s)]:Vt(s)),v=[s,...y],w=await te(t,m),b=[];let P=((n=r.flip)==null?void 0:n.overflows)||[];if(u&&b.push(w[h]),x){const{main:T,cross:D}=Bt(o,i,await(c.isRTL==null?void 0:c.isRTL(a.floating)));b.push(w[T],w[D])}if(P=[...P,{placement:o,overflows:b}],!b.every(T=>T<=0)){var C,E;const T=((C=(E=r.flip)==null?void 0:E.index)!=null?C:0)+1,D=v[T];if(D)return{data:{index:T,overflows:P},reset:{placement:D}};let I="bottom";switch(g){case"bestFit":{var A;const R=(A=P.map(B=>[B,B.overflows.filter(M=>M>0).reduce((M,ue)=>M+ue,0)]).sort((B,M)=>B[1]-M[1])[0])==null?void 0:A[0].placement;R&&(I=R);break}case"initialPlacement":I=s;break}if(o!==I)return{reset:{placement:I}}}return{}}}},"flip");function Ne(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}d(Ne,"getSideOffsets");function Ie(e){return Wt.some(t=>e[t]>=0)}d(Ie,"isAnySideFullyClipped");const Yt=d(function(e){let{strategy:t="referenceHidden",...n}=e===void 0?{}:e;return{name:"hide",async fn(o){const{rects:r}=o;switch(t){case"referenceHidden":{const i=await te(o,{...n,elementContext:"reference"}),s=Ne(i,r.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Ie(s)}}}case"escaped":{const i=await te(o,{...n,altBoundary:!0}),s=Ne(i,r.floating);return{data:{escapedOffsets:s,escaped:Ie(s)}}}default:return{}}}}},"hide");async function Xt(e,t){const{placement:n,platform:o,elements:r}=e,i=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=Y(n),c=ce(n),a=X(n)==="x",u=["left","top"].includes(s)?-1:1,x=i&&a?-1:1,f=typeof t=="function"?t(e):t;let{mainAxis:g,crossAxis:p,alignmentAxis:m}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return c&&typeof m=="number"&&(p=c==="end"?m*-1:m),a?{x:p*x,y:g*u}:{x:g*u,y:p*x}}d(Xt,"convertValueToCoords");const zt=d(function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:o}=t,r=await Xt(t,e);return{x:n+r.x,y:o+r.y,data:r}}}},"offset");function Ge(e){return e==="x"?"y":"x"}d(Ge,"getCrossAxis");const Ut=d(function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:r}=t,{mainAxis:i=!0,crossAxis:s=!1,limiter:c={fn:$=>{let{x:y,y:v}=$;return{x:y,y:v}}},...a}=e,u={x:n,y:o},x=await te(t,a),f=X(Y(r)),g=Ge(f);let p=u[f],m=u[g];if(i){const $=f==="y"?"top":"left",y=f==="y"?"bottom":"right",v=p+x[$],w=p-x[y];p=ge(v,p,w)}if(s){const $=g==="y"?"top":"left",y=g==="y"?"bottom":"right",v=m+x[$],w=m-x[y];m=ge(v,m,w)}const h=c.fn({...t,[f]:p,[g]:m});return{...h,data:{x:h.x-n,y:h.y-o}}}}},"shift"),Gt=d(function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:o,placement:r,rects:i,middlewareData:s}=t,{offset:c=0,mainAxis:a=!0,crossAxis:u=!0}=e,x={x:n,y:o},f=X(r),g=Ge(f);let p=x[f],m=x[g];const h=typeof c=="function"?c({...i,placement:r}):c,$=typeof h=="number"?{mainAxis:h,crossAxis:0}:{mainAxis:0,crossAxis:0,...h};if(a){const P=f==="y"?"height":"width",C=i.reference[f]-i.floating[P]+$.mainAxis,E=i.reference[f]+i.reference[P]-$.mainAxis;p<C?p=C:p>E&&(p=E)}if(u){var y,v,w,b;const P=f==="y"?"width":"height",C=["top","left"].includes(Y(r)),E=i.reference[g]-i.floating[P]+(C&&(y=(v=s.offset)==null?void 0:v[g])!=null?y:0)+(C?0:$.crossAxis),A=i.reference[g]+i.reference[P]+(C?0:(w=(b=s.offset)==null?void 0:b[g])!=null?w:0)-(C?$.crossAxis:0);m<E?m=E:m>A&&(m=A)}return{[f]:p,[g]:m}}}},"limitShift");function qe(e){return e&&e.document&&e.location&&e.alert&&e.setInterval}d(qe,"isWindow");function k(e){if(e==null)return window;if(!qe(e)){const t=e.ownerDocument;return t&&t.defaultView||window}return e}d(k,"getWindow");function Z(e){return k(e).getComputedStyle(e)}d(Z,"getComputedStyle$1");function S(e){return qe(e)?"":e?(e.nodeName||"").toLowerCase():""}d(S,"getNodeName");function Ke(){const e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(t=>t.brand+"/"+t.version).join(" "):navigator.userAgent}d(Ke,"getUAString");function _(e){return e instanceof k(e).HTMLElement}d(_,"isHTMLElement");function H(e){return e instanceof k(e).Element}d(H,"isElement");function qt(e){return e instanceof k(e).Node}d(qt,"isNode");function be(e){if(typeof ShadowRoot>"u")return!1;const t=k(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}d(be,"isShadowRoot");function ae(e){const{overflow:t,overflowX:n,overflowY:o}=Z(e);return/auto|scroll|overlay|hidden/.test(t+o+n)}d(ae,"isOverflowElement");function Kt(e){return["table","td","th"].includes(S(e))}d(Kt,"isTableElement");function Ze(e){const t=/firefox/i.test(Ke()),n=Z(e);return n.transform!=="none"||n.perspective!=="none"||n.contain==="paint"||["transform","perspective"].includes(n.willChange)||t&&n.willChange==="filter"||t&&(n.filter?n.filter!=="none":!1)}d(Ze,"isContainingBlock");function Je(){return!/^((?!chrome|android).)*safari/i.test(Ke())}d(Je,"isLayoutViewport");const Be=Math.min,U=Math.max,oe=Math.round;function L(e,t,n){var o,r,i,s;t===void 0&&(t=!1),n===void 0&&(n=!1);const c=e.getBoundingClientRect();let a=1,u=1;t&&_(e)&&(a=e.offsetWidth>0&&oe(c.width)/e.offsetWidth||1,u=e.offsetHeight>0&&oe(c.height)/e.offsetHeight||1);const x=H(e)?k(e):window,f=!Je()&&n,g=(c.left+(f&&(o=(r=x.visualViewport)==null?void 0:r.offsetLeft)!=null?o:0))/a,p=(c.top+(f&&(i=(s=x.visualViewport)==null?void 0:s.offsetTop)!=null?i:0))/u,m=c.width/a,h=c.height/u;return{width:m,height:h,top:p,right:g+m,bottom:p+h,left:g,x:g,y:p}}d(L,"getBoundingClientRect");function N(e){return((qt(e)?e.ownerDocument:e.document)||window.document).documentElement}d(N,"getDocumentElement");function le(e){return H(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}d(le,"getNodeScroll");function Qe(e){return L(N(e)).left+le(e).scrollLeft}d(Qe,"getWindowScrollBarX");function Zt(e){const t=L(e);return oe(t.width)!==e.offsetWidth||oe(t.height)!==e.offsetHeight}d(Zt,"isScaled");function Jt(e,t,n){const o=_(t),r=N(t),i=L(e,o&&Zt(t),n==="fixed");let s={scrollLeft:0,scrollTop:0};const c={x:0,y:0};if(o||!o&&n!=="fixed")if((S(t)!=="body"||ae(r))&&(s=le(t)),_(t)){const a=L(t,!0);c.x=a.x+t.clientLeft,c.y=a.y+t.clientTop}else r&&(c.x=Qe(r));return{x:i.left+s.scrollLeft-c.x,y:i.top+s.scrollTop-c.y,width:i.width,height:i.height}}d(Jt,"getRectRelativeToOffsetParent");function et(e){return S(e)==="html"?e:e.assignedSlot||e.parentNode||(be(e)?e.host:null)||N(e)}d(et,"getParentNode");function Fe(e){return!_(e)||getComputedStyle(e).position==="fixed"?null:e.offsetParent}d(Fe,"getTrueOffsetParent");function Qt(e){let t=et(e);for(be(t)&&(t=t.host);_(t)&&!["html","body"].includes(S(t));){if(Ze(t))return t;t=t.parentNode}return null}d(Qt,"getContainingBlock");function he(e){const t=k(e);let n=Fe(e);for(;n&&Kt(n)&&getComputedStyle(n).position==="static";)n=Fe(n);return n&&(S(n)==="html"||S(n)==="body"&&getComputedStyle(n).position==="static"&&!Ze(n))?t:n||Qt(e)||t}d(he,"getOffsetParent");function We(e){if(_(e))return{width:e.offsetWidth,height:e.offsetHeight};const t=L(e);return{width:t.width,height:t.height}}d(We,"getDimensions");function en(e){let{rect:t,offsetParent:n,strategy:o}=e;const r=_(n),i=N(n);if(n===i)return t;let s={scrollLeft:0,scrollTop:0};const c={x:0,y:0};if((r||!r&&o!=="fixed")&&((S(n)!=="body"||ae(i))&&(s=le(n)),_(n))){const a=L(n,!0);c.x=a.x+n.clientLeft,c.y=a.y+n.clientTop}return{...t,x:t.x-s.scrollLeft+c.x,y:t.y-s.scrollTop+c.y}}d(en,"convertOffsetParentRelativeRectToViewportRelativeRect");function tn(e,t){const n=k(e),o=N(e),r=n.visualViewport;let i=o.clientWidth,s=o.clientHeight,c=0,a=0;if(r){i=r.width,s=r.height;const u=Je();(u||!u&&t==="fixed")&&(c=r.offsetLeft,a=r.offsetTop)}return{width:i,height:s,x:c,y:a}}d(tn,"getViewportRect");function nn(e){var t;const n=N(e),o=le(e),r=(t=e.ownerDocument)==null?void 0:t.body,i=U(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),s=U(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0);let c=-o.scrollLeft+Qe(e);const a=-o.scrollTop;return Z(r||n).direction==="rtl"&&(c+=U(n.clientWidth,r?r.clientWidth:0)-i),{width:i,height:s,x:c,y:a}}d(nn,"getDocumentRect");function tt(e){const t=et(e);return["html","body","#document"].includes(S(t))?e.ownerDocument.body:_(t)&&ae(t)?t:tt(t)}d(tt,"getNearestOverflowAncestor");function re(e,t){var n;t===void 0&&(t=[]);const o=tt(e),r=o===((n=e.ownerDocument)==null?void 0:n.body),i=k(o),s=r?[i].concat(i.visualViewport||[],ae(o)?o:[]):o,c=t.concat(s);return r?c:c.concat(re(s))}d(re,"getOverflowAncestors");function on(e,t){const n=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&be(n)){let o=t;do{if(o&&e===o)return!0;o=o.parentNode||o.host}while(o)}return!1}d(on,"contains");function rn(e,t){const n=L(e,!1,t==="fixed"),o=n.top+e.clientTop,r=n.left+e.clientLeft;return{top:o,left:r,x:r,y:o,right:r+e.clientWidth,bottom:o+e.clientHeight,width:e.clientWidth,height:e.clientHeight}}d(rn,"getInnerBoundingClientRect");function Ve(e,t,n){return t==="viewport"?ee(tn(e,n)):H(t)?rn(t,n):ee(nn(N(e)))}d(Ve,"getClientRectFromClippingAncestor");function sn(e){const t=re(e),o=["absolute","fixed"].includes(Z(e).position)&&_(e)?he(e):e;return H(o)?t.filter(r=>H(r)&&on(r,o)&&S(r)!=="body"):[]}d(sn,"getClippingAncestors");function cn(e){let{element:t,boundary:n,rootBoundary:o,strategy:r}=e;const s=[...n==="clippingAncestors"?sn(t):[].concat(n),o],c=s[0],a=s.reduce((u,x)=>{const f=Ve(t,x,r);return u.top=U(f.top,u.top),u.right=Be(f.right,u.right),u.bottom=Be(f.bottom,u.bottom),u.left=U(f.left,u.left),u},Ve(t,c,r));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}d(cn,"getClippingRect");const an={getClippingRect:cn,convertOffsetParentRelativeRectToViewportRelativeRect:en,isElement:H,getDimensions:We,getOffsetParent:he,getDocumentElement:N,getElementRects:e=>{let{reference:t,floating:n,strategy:o}=e;return{reference:Jt(t,he(n),o),floating:{...We(n),x:0,y:0}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>Z(e).direction==="rtl"};function ln(e,t,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:s=!0,animationFrame:c=!1}=o,a=r&&!c,u=i&&!c,x=a||u?[...H(e)?re(e):[],...re(t)]:[];x.forEach(h=>{a&&h.addEventListener("scroll",n,{passive:!0}),u&&h.addEventListener("resize",n)});let f=null;if(s){let h=!0;f=new ResizeObserver(()=>{h||n(),h=!1}),H(e)&&!c&&f.observe(e),f.observe(t)}let g,p=c?L(e):null;c&&m();function m(){const h=L(e);p&&(h.x!==p.x||h.y!==p.y||h.width!==p.width||h.height!==p.height)&&n(),p=h,g=requestAnimationFrame(m)}return d(m,"frameLoop"),n(),()=>{var h;x.forEach($=>{a&&$.removeEventListener("scroll",n),u&&$.removeEventListener("resize",n)}),(h=f)==null||h.disconnect(),f=null,c&&cancelAnimationFrame(g)}}d(ln,"autoUpdate");const fn=d((e,t,n)=>kt(e,t,{platform:an,...n}),"computePosition");var $e=typeof document<"u"?l.exports.useLayoutEffect:l.exports.useEffect;function we(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(o=n;o--!==0;)if(!we(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),n=r.length,n!==Object.keys(t).length)return!1;for(o=n;o--!==0;)if(!Object.prototype.hasOwnProperty.call(t,r[o]))return!1;for(o=n;o--!==0;){const i=r[o];if(!(i==="_owner"&&e.$$typeof)&&!we(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}d(we,"deepEqual");function dn(e){const t=l.exports.useRef(e);return $e(()=>{t.current=e}),t}d(dn,"useLatestRef");function un(e){let{middleware:t,placement:n="bottom",strategy:o="absolute",whileElementsMounted:r}=e===void 0?{}:e;const i=l.exports.useRef(null),s=l.exports.useRef(null),c=dn(r),a=l.exports.useRef(null),[u,x]=l.exports.useState({x:null,y:null,strategy:o,placement:n,middlewareData:{}}),[f,g]=l.exports.useState(t);we(f==null?void 0:f.map(w=>{let{options:b}=w;return b}),t==null?void 0:t.map(w=>{let{options:b}=w;return b}))||g(t);const p=l.exports.useCallback(()=>{!i.current||!s.current||fn(i.current,s.current,{middleware:f,placement:n,strategy:o}).then(w=>{m.current&&Rt.exports.flushSync(()=>{x(w)})})},[f,n,o]);$e(()=>{m.current&&p()},[p]);const m=l.exports.useRef(!1);$e(()=>(m.current=!0,()=>{m.current=!1}),[]);const h=l.exports.useCallback(()=>{if(typeof a.current=="function"&&(a.current(),a.current=null),i.current&&s.current)if(c.current){const w=c.current(i.current,s.current,p);a.current=w}else p()},[p,c]),$=l.exports.useCallback(w=>{i.current=w,h()},[h]),y=l.exports.useCallback(w=>{s.current=w,h()},[h]),v=l.exports.useMemo(()=>({reference:i,floating:s}),[]);return l.exports.useMemo(()=>({...u,update:p,refs:v,reference:$,floating:y}),[u,p,v,$,y])}d(un,"useFloating");const pn=d(e=>{const{element:t,padding:n}=e;function o(r){return Object.prototype.hasOwnProperty.call(r,"current")}return d(o,"isRef"),{name:"arrow",options:e,fn(r){return o(t)?t.current!=null?Me({element:t.current,padding:n}).fn(r):{}:t?Me({element:t,padding:n}).fn(r):{}}}},"arrow"),xn=l.exports.forwardRef((e,t)=>{const{children:n,width:o=10,height:r=5,...i}=e;return l.exports.createElement(q.svg,O({},i,{ref:t,width:o,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),e.asChild?n:l.exports.createElement("polygon",{points:"0,0 30,0 15,10"}))}),mn=xn,nt="Popper",[Ce,ot]=Ye(nt),[gn,rt]=Ce(nt),hn=d(e=>{const{__scopePopper:t,children:n}=e,[o,r]=l.exports.useState(null);return l.exports.createElement(gn,{scope:t,anchor:o,onAnchorChange:r},n)},"$cf1ac5d9fe0e8206$export$badac9ada3a0bdf9"),$n="PopperAnchor",wn=l.exports.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:o,...r}=e,i=rt($n,n),s=l.exports.useRef(null),c=se(t,s);return l.exports.useEffect(()=>{i.onAnchorChange((o==null?void 0:o.current)||s.current)}),o?null:l.exports.createElement(q.div,O({},r,{ref:c}))}),ie="PopperContent",[vn,yn]=Ce(ie),[bn,Cn]=Ce(ie,{hasParent:!1,positionUpdateFns:new Set}),Pn=l.exports.forwardRef((e,t)=>{var n,o,r,i,s,c,a,u;const{__scopePopper:x,side:f="bottom",sideOffset:g=0,align:p="center",alignOffset:m=0,arrowPadding:h=0,collisionBoundary:$=[],collisionPadding:y=0,sticky:v="partial",hideWhenDetached:w=!1,avoidCollisions:b=!0,...P}=e,C=rt(ie,x),[E,A]=l.exports.useState(null),T=se(t,xe=>A(xe)),[D,I]=l.exports.useState(null),R=Ot(D),B=(n=R==null?void 0:R.width)!==null&&n!==void 0?n:0,M=(o=R==null?void 0:R.height)!==null&&o!==void 0?o:0,ue=f+(p!=="center"?"-"+p:""),at=typeof y=="number"?y:{top:0,right:0,bottom:0,left:0,...y},Ae=Array.isArray($)?$:[$],lt=Ae.length>0,Te={padding:at,boundary:Ae.filter(On),altBoundary:lt},{reference:Re,floating:ft,strategy:dt,x:Oe,y:_e,placement:ut,middlewareData:F,update:pe}=un({strategy:"fixed",placement:ue,whileElementsMounted:ln,middleware:[zt({mainAxis:g+M,alignmentAxis:m}),b?Ut({mainAxis:!0,crossAxis:!1,limiter:v==="partial"?Gt():void 0,...Te}):void 0,D?pn({element:D,padding:h}):void 0,b?jt({...Te}):void 0,_n({arrowWidth:B,arrowHeight:M}),w?Yt({strategy:"referenceHidden"}):void 0].filter(Rn)});me(()=>{Re(C.anchor)},[Re,C.anchor]);const Q=Oe!==null&&_e!==null,[De,pt]=it(ut),xt=(r=F.arrow)===null||r===void 0?void 0:r.x,mt=(i=F.arrow)===null||i===void 0?void 0:i.y,gt=((s=F.arrow)===null||s===void 0?void 0:s.centerOffset)!==0,[ht,$t]=l.exports.useState();me(()=>{E&&$t(window.getComputedStyle(E).zIndex)},[E]);const{hasParent:wt,positionUpdateFns:W}=Cn(ie,x),z=!wt;l.exports.useLayoutEffect(()=>{if(!z)return W.add(pe),()=>{W.delete(pe)}},[z,W,pe]),l.exports.useLayoutEffect(()=>{z&&Q&&Array.from(W).reverse().forEach(xe=>requestAnimationFrame(xe))},[z,Q,W]);const Se={"data-side":De,"data-align":pt,...P,ref:T,style:{...P.style,animation:Q?void 0:"none",opacity:(c=F.hide)!==null&&c!==void 0&&c.referenceHidden?0:void 0}};return l.exports.createElement("div",{ref:ft,"data-radix-popper-content-wrapper":"",style:{position:dt,left:0,top:0,transform:Q?`translate3d(${Math.round(Oe)}px, ${Math.round(_e)}px, 0)`:"translate3d(0, -200%, 0)",minWidth:"max-content",zIndex:ht,["--radix-popper-transform-origin"]:[(a=F.transformOrigin)===null||a===void 0?void 0:a.x,(u=F.transformOrigin)===null||u===void 0?void 0:u.y].join(" ")}},l.exports.createElement(vn,{scope:x,placedSide:De,onArrowChange:I,arrowX:xt,arrowY:mt,shouldHideArrow:gt},z?l.exports.createElement(bn,{scope:x,hasParent:!0,positionUpdateFns:W},l.exports.createElement(q.div,Se)):l.exports.createElement(q.div,Se)))}),En="PopperArrow",An={top:"bottom",right:"left",bottom:"top",left:"right"},Tn=l.exports.forwardRef(d(function(t,n){const{__scopePopper:o,...r}=t,i=yn(En,o),s=An[i.placedSide];return l.exports.createElement("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0}},l.exports.createElement(mn,O({},r,{ref:n,style:{...r.style,display:"block"}})))},"$cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0"));function Rn(e){return e!==void 0}d(Rn,"$cf1ac5d9fe0e8206$var$isDefined");function On(e){return e!==null}d(On,"$cf1ac5d9fe0e8206$var$isNotNull");const _n=d(e=>({name:"transformOrigin",options:e,fn(t){var n,o,r,i,s;const{placement:c,rects:a,middlewareData:u}=t,f=((n=u.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,g=f?0:e.arrowWidth,p=f?0:e.arrowHeight,[m,h]=it(c),$={start:"0%",center:"50%",end:"100%"}[h],y=((o=(r=u.arrow)===null||r===void 0?void 0:r.x)!==null&&o!==void 0?o:0)+g/2,v=((i=(s=u.arrow)===null||s===void 0?void 0:s.y)!==null&&i!==void 0?i:0)+p/2;let w="",b="";return m==="bottom"?(w=f?$:`${y}px`,b=`${-p}px`):m==="top"?(w=f?$:`${y}px`,b=`${a.floating.height+p}px`):m==="right"?(w=`${-p}px`,b=f?$:`${v}px`):m==="left"&&(w=`${a.floating.width+p}px`,b=f?$:`${v}px`),{data:{x:w,y:b}}}}),"$cf1ac5d9fe0e8206$var$transformOrigin");function it(e){const[t,n="center"]=e.split("-");return[t,n]}d(it,"$cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement");const Dn=hn,Sn=wn,Ln=Pn,kn=Tn,[fe,Po]=Ye("Tooltip",[ot]),de=ot(),Mn="TooltipProvider",Hn=700,ve="tooltip.open",[Nn,Pe]=fe(Mn),In=d(e=>{const{__scopeTooltip:t,delayDuration:n=Hn,skipDelayDuration:o=300,disableHoverableContent:r=!1,children:i}=e,[s,c]=l.exports.useState(!0),a=l.exports.useRef(!1),u=l.exports.useRef(0);return l.exports.useEffect(()=>{const x=u.current;return()=>window.clearTimeout(x)},[]),l.exports.createElement(Nn,{scope:t,isOpenDelayed:s,delayDuration:n,onOpen:l.exports.useCallback(()=>{window.clearTimeout(u.current),c(!1)},[]),onClose:l.exports.useCallback(()=>{window.clearTimeout(u.current),u.current=window.setTimeout(()=>c(!0),o)},[o]),isPointerInTransitRef:a,onPointerInTransitChange:l.exports.useCallback(x=>{a.current=x},[]),disableHoverableContent:r},i)},"$a093c7e1ec25a057$export$f78649fb9ca566b8"),Ee="Tooltip",[Bn,J]=fe(Ee),Fn=d(e=>{const{__scopeTooltip:t,children:n,open:o,defaultOpen:r=!1,onOpenChange:i,disableHoverableContent:s,delayDuration:c}=e,a=Pe(Ee,e.__scopeTooltip),u=de(t),[x,f]=l.exports.useState(null),g=Lt(),p=l.exports.useRef(0),m=s!=null?s:a.disableHoverableContent,h=c!=null?c:a.delayDuration,$=l.exports.useRef(!1),[y=!1,v]=Pt({prop:o,defaultProp:r,onChange:E=>{E?(a.onOpen(),document.dispatchEvent(new CustomEvent(ve))):a.onClose(),i==null||i(E)}}),w=l.exports.useMemo(()=>y?$.current?"delayed-open":"instant-open":"closed",[y]),b=l.exports.useCallback(()=>{window.clearTimeout(p.current),$.current=!1,v(!0)},[v]),P=l.exports.useCallback(()=>{window.clearTimeout(p.current),v(!1)},[v]),C=l.exports.useCallback(()=>{window.clearTimeout(p.current),p.current=window.setTimeout(()=>{$.current=!0,v(!0)},h)},[h,v]);return l.exports.useEffect(()=>()=>window.clearTimeout(p.current),[]),l.exports.createElement(Dn,u,l.exports.createElement(Bn,{scope:t,contentId:g,open:y,stateAttribute:w,trigger:x,onTriggerChange:f,onTriggerEnter:l.exports.useCallback(()=>{a.isOpenDelayed?C():b()},[a.isOpenDelayed,C,b]),onTriggerLeave:l.exports.useCallback(()=>{m?P():window.clearTimeout(p.current)},[P,m]),onOpen:b,onClose:P,disableHoverableContent:m},n))},"$a093c7e1ec25a057$export$28c660c63b792dea"),je="TooltipTrigger",Wn=l.exports.forwardRef((e,t)=>{const{__scopeTooltip:n,...o}=e,r=J(je,n),i=Pe(je,n),s=de(n),c=l.exports.useRef(null),a=se(t,c,r.onTriggerChange),u=l.exports.useRef(!1),x=l.exports.useRef(!1),f=l.exports.useCallback(()=>u.current=!1,[]);return l.exports.useEffect(()=>()=>document.removeEventListener("pointerup",f),[f]),l.exports.createElement(Sn,O({asChild:!0},s),l.exports.createElement(q.button,O({"aria-describedby":r.open?r.contentId:void 0,"data-state":r.stateAttribute},o,{ref:a,onPointerMove:V(e.onPointerMove,g=>{g.pointerType!=="touch"&&!x.current&&!i.isPointerInTransitRef.current&&(r.onTriggerEnter(),x.current=!0)}),onPointerLeave:V(e.onPointerLeave,()=>{r.onTriggerLeave(),x.current=!1}),onPointerDown:V(e.onPointerDown,()=>{u.current=!0,document.addEventListener("pointerup",f,{once:!0})}),onFocus:V(e.onFocus,()=>{u.current||r.onOpen()}),onBlur:V(e.onBlur,r.onClose),onClick:V(e.onClick,r.onClose)})))}),st="TooltipPortal",[Vn,jn]=fe(st,{forceMount:void 0}),Yn=d(e=>{const{__scopeTooltip:t,forceMount:n,children:o,container:r}=e,i=J(st,t);return l.exports.createElement(Vn,{scope:t,forceMount:n},l.exports.createElement(Xe,{present:n||i.open},l.exports.createElement(Et,{asChild:!0,container:r},o)))},"$a093c7e1ec25a057$export$7b36b8f925ab7497"),K="TooltipContent",Xn=l.exports.forwardRef((e,t)=>{const n=jn(K,e.__scopeTooltip),{forceMount:o=n.forceMount,side:r="top",...i}=e,s=J(K,e.__scopeTooltip);return l.exports.createElement(Xe,{present:o||s.open},s.disableHoverableContent?l.exports.createElement(ct,O({side:r},i,{ref:t})):l.exports.createElement(zn,O({side:r},i,{ref:t})))}),zn=l.exports.forwardRef((e,t)=>{const n=J(K,e.__scopeTooltip),o=Pe(K,e.__scopeTooltip),r=l.exports.useRef(null),i=se(t,r),[s,c]=l.exports.useState(null),{trigger:a,onClose:u}=n,x=r.current,{onPointerInTransitChange:f}=o,g=l.exports.useCallback(()=>{c(null),f(!1)},[f]),p=l.exports.useCallback((m,h)=>{const $=m.currentTarget,y={x:m.clientX,y:m.clientY},v=Zn(y,$.getBoundingClientRect()),w=v==="right"||v==="bottom"?-5:5,P=v==="right"||v==="left"?{x:m.clientX+w,y:m.clientY}:{x:m.clientX,y:m.clientY+w},C=Jn(h.getBoundingClientRect()),E=eo([P,...C]);c(E),f(!0)},[f]);return l.exports.useEffect(()=>()=>g(),[g]),l.exports.useEffect(()=>{if(a&&x){const m=d($=>p($,x),"handleTriggerLeave"),h=d($=>p($,a),"handleContentLeave");return a.addEventListener("pointerleave",m),x.addEventListener("pointerleave",h),()=>{a.removeEventListener("pointerleave",m),x.removeEventListener("pointerleave",h)}}},[a,x,p,g]),l.exports.useEffect(()=>{if(s){const m=d(h=>{const $=h.target,y={x:h.clientX,y:h.clientY},v=(a==null?void 0:a.contains($))||(x==null?void 0:x.contains($)),w=!Qn(y,s);v?g():w&&(g(),u())},"handleTrackPointerGrace");return document.addEventListener("pointermove",m),()=>document.removeEventListener("pointermove",m)}},[a,x,s,u,g]),l.exports.createElement(ct,O({},e,{ref:i}))}),[Un,Gn]=fe(Ee,{isInside:!1}),ct=l.exports.forwardRef((e,t)=>{const{__scopeTooltip:n,children:o,"aria-label":r,onEscapeKeyDown:i,onPointerDownOutside:s,...c}=e,a=J(K,n),u=de(n),{onClose:x}=a;return l.exports.useEffect(()=>(document.addEventListener(ve,x),()=>document.removeEventListener(ve,x)),[x]),l.exports.useEffect(()=>{if(a.trigger){const f=d(g=>{const p=g.target;p!=null&&p.contains(a.trigger)&&x()},"handleScroll");return window.addEventListener("scroll",f,{capture:!0}),()=>window.removeEventListener("scroll",f,{capture:!0})}},[a.trigger,x]),l.exports.createElement(At,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:i,onPointerDownOutside:s,onFocusOutside:f=>f.preventDefault(),onDismiss:x},l.exports.createElement(Ln,O({"data-state":a.stateAttribute},u,c,{ref:t,style:{...c.style,["--radix-tooltip-content-transform-origin"]:"var(--radix-popper-transform-origin)"}}),l.exports.createElement(bt,null,o),l.exports.createElement(Un,{scope:n,isInside:!0},l.exports.createElement(Tt,{id:a.contentId,role:"tooltip"},r||o))))}),qn="TooltipArrow",Kn=l.exports.forwardRef((e,t)=>{const{__scopeTooltip:n,...o}=e,r=de(n);return Gn(qn,n).isInside?null:l.exports.createElement(kn,O({},r,o,{ref:t}))});function Zn(e,t){const n=Math.abs(t.top-e.y),o=Math.abs(t.bottom-e.y),r=Math.abs(t.right-e.x),i=Math.abs(t.left-e.x);switch(Math.min(n,o,r,i)){case i:return"left";case r:return"right";case n:return"top";case o:return"bottom";default:return null}}d(Zn,"$a093c7e1ec25a057$var$getExitSideFromRect");function Jn(e){const{top:t,right:n,bottom:o,left:r}=e;return[{x:r,y:t},{x:n,y:t},{x:n,y:o},{x:r,y:o}]}d(Jn,"$a093c7e1ec25a057$var$getPointsFromRect");function Qn(e,t){const{x:n,y:o}=e;let r=!1;for(let i=0,s=t.length-1;i<t.length;s=i++){const c=t[i].x,a=t[i].y,u=t[s].x,x=t[s].y;a>o!=x>o&&n<(u-c)*(o-a)/(x-a)+c&&(r=!r)}return r}d(Qn,"$a093c7e1ec25a057$var$isPointInPolygon");function eo(e){const t=e.slice();return t.sort((n,o)=>n.x<o.x?-1:n.x>o.x?1:n.y<o.y?-1:n.y>o.y?1:0),to(t)}d(eo,"$a093c7e1ec25a057$var$getHull");function to(e){if(e.length<=1)return e.slice();const t=[];for(let o=0;o<e.length;o++){const r=e[o];for(;t.length>=2;){const i=t[t.length-1],s=t[t.length-2];if((i.x-s.x)*(r.y-s.y)>=(i.y-s.y)*(r.x-s.x))t.pop();else break}t.push(r)}t.pop();const n=[];for(let o=e.length-1;o>=0;o--){const r=e[o];for(;n.length>=2;){const i=n[n.length-1],s=n[n.length-2];if((i.x-s.x)*(r.y-s.y)>=(i.y-s.y)*(r.x-s.x))n.pop();else break}n.push(r)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}d(to,"$a093c7e1ec25a057$var$getHullPresorted");const no=In,oo=Fn,ro=Wn,io=Yn,so=Xn,co=Kn,ao=ze(so,{padding:"0.75rem 1rem",background:"#121214",color:"#E1E1E6",fontFamily:"Roboto, sans-serif",fontSize:"0.875rem",borderRadius:"4px",fontWeight:"500",filter:"drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))"}),lo=ze(co,{fill:"$gray900"});function G({content:e,children:t,...n}){return j(no,{children:Le(oo,{...n,children:[j(ro,{asChild:!0,children:t}),j(io,{children:Le(ao,{children:[j(lo,{}),e]})})]})})}d(G,"Tooltip");G.displayName="Tooltip";try{G.displayName="Tooltip",G.__docgenInfo={description:"",displayName:"Tooltip",props:{as:{defaultValue:null,description:"",name:"as",required:!0,type:{name:"ElementType<any>"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../react/src/components/Tooltip/index.tsx#Tooltip"]={docgenInfo:G.__docgenInfo,name:"Tooltip",path:"../react/src/components/Tooltip/index.tsx#Tooltip"})}catch{}const Eo={title:"Form/Tooltip",component:G,args:{children:j(yt,{children:"Hover me"}),content:"This is a Tooltip"},argTypes:{children:{control:{type:null}}},decorators:[e=>j(_t,{css:{display:"flex",alignItems:"center",justifyContent:"center",padding:"$20",background:"$gray500"},children:e()})]},Ao={},To=["Primary"];export{Ao as Primary,To as __namedExportsOrder,Eo as default};
//# sourceMappingURL=Tooltip.stories.9d90fb1e.js.map