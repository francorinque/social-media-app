import{s as a,u as o,a as c,j as t,S as r,c as i,P as l}from"./index-bf952c52.js";const h="https://jsonplaceholder.typicode.com/users/",u=()=>fetch(h+"1").then(e=>e.json()).then(e=>({id:e.id,name:e.name,username:e.username})),d=a.div`
  color: var(--colorPrimary);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`,p=()=>{const e=o(),s=c();return t(d,{children:t(r,{onClick:async()=>{const n=await u();e(i(n)),s(`/${l.PRIVATE}`,{replace:!0})},children:"Login"})})};export{p as default};
