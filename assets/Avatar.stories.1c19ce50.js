var y=Object.defineProperty;var l=(e,r)=>y(e,"name",{value:r,configurable:!0});import{$ as _,a as $,_ as b,b as L,c as S}from"./index.module.64f33489.js";import{r as a}from"./index.e2094f73.js";import{s as m}from"./index.5f8d9363.js";import{a as u,F as f,j as t}from"./jsx-runtime.1971be57.js";import{I as C,r as w}from"./IconBase.esm.24418100.js";import"./index.1805eea2.js";import"./iframe.55410252.js";import"./index.75b2c3cd.js";const x="Avatar",[M,ee]=_(x),[E,v]=M(x),j=a.exports.forwardRef((e,r)=>{const{__scopeAvatar:o,...n}=e,[s,i]=a.exports.useState("idle");return a.exports.createElement(E,{scope:o,imageLoadingStatus:s,onImageLoadingStatusChange:i},a.exports.createElement($.span,b({},n,{ref:r})))}),I="AvatarImage",W=a.exports.forwardRef((e,r)=>{const{__scopeAvatar:o,src:n,onLoadingStatusChange:s=l(()=>{},"onLoadingStatusChange"),...i}=e,p=v(I,o),d=F(n),g=L(k=>{s(k),p.onImageLoadingStatusChange(k)});return S(()=>{d!=="idle"&&g(d)},[d,g]),d==="loaded"?a.exports.createElement($.img,b({},i,{ref:r,src:n})):null}),R="AvatarFallback",P=a.exports.forwardRef((e,r)=>{const{__scopeAvatar:o,delayMs:n,...s}=e,i=v(R,o),[p,d]=a.exports.useState(n===void 0);return a.exports.useEffect(()=>{if(n!==void 0){const g=window.setTimeout(()=>d(!0),n);return()=>window.clearTimeout(g)}},[n]),p&&i.imageLoadingStatus!=="loaded"?a.exports.createElement($.span,b({},s,{ref:r})):null});function F(e){const[r,o]=a.exports.useState("idle");return a.exports.useEffect(()=>{if(!e){o("error");return}let n=!0;const s=new window.Image,i=l(p=>()=>{!n||o(p)},"updateStatus");return o("loading"),s.onload=i("loaded"),s.onerror=i("error"),s.src=e,()=>{n=!1}},[e]),r}l(F,"$cddcb0b647441e34$var$useImageLoadingStatus");const O=j,T=W,B=P,N=m(O,{borderRadius:"99999px",display:"inline-block",width:"$12",height:"$12",overflow:"hidden"}),K=m(T,{width:"100%",height:"100%",objectFit:"cover",borderRadius:"inherit"}),U=m(B,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#323238",color:"#202024",svg:{width:"$6",height:"$6"}});var c=new Map;c.set("bold",function(e){return u(f,{children:[t("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),t("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});c.set("duotone",function(e){return u(f,{children:[t("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),t("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),t("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});c.set("fill",function(){return t(f,{children:t("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"})})});c.set("light",function(e){return u(f,{children:[t("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),t("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});c.set("thin",function(e){return u(f,{children:[t("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),t("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});c.set("regular",function(e){return u(f,{children:[t("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),t("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var V=l(function(r,o){return w(r,o,c)},"renderPath"),A=a.exports.forwardRef(function(e,r){return t(C,{...Object.assign({ref:r},e,{renderPath:V})})});A.displayName="User";const q=A;function h(e){return u(N,{children:[t(K,{...e}),t(U,{delayMs:600,children:t(q,{})})]})}l(h,"Avatar");try{h.displayName="Avatar",h.__docgenInfo={description:"",displayName:"Avatar",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSS<{}, { colors: { white: string; black: string; gray100: string; gray200: string; gray400: string; gray500: string; gray600: string; gray700: string; gray800: string; gray900: string; ignite300: string; ignite500: string; ignite700: string; ignite900: string; }; ... 5 more ...; space: { ...; }; }, { ...; }, {}>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../react/src/components/Avatar/index.tsx#Avatar"]={docgenInfo:h.__docgenInfo,name:"Avatar",path:"../react/src/components/Avatar/index.tsx#Avatar"})}catch{}const te={title:"Data display/Avatar",component:h,args:{src:"https://github.com/bernardojru.png",alt:"Bernardo Jos\xE9"}},re={},ae={args:{src:void 0}},ne=["Primary","WithFallback"];export{re as Primary,ae as WithFallback,ne as __namedExportsOrder,te as default};
//# sourceMappingURL=Avatar.stories.1c19ce50.js.map
