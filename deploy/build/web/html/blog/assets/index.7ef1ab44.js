import{_ as C}from"./BannerPage.vue_vue_type_script_setup_true_lang.795607c4.js";import{b as n,c,f as e,d as V,be as z,r as l,o as A,K as I,m as L,A as d,q as o,u as m,h as a,z as v,s as M,i as _,F as x}from"./index.6f29a4b3.js";import{f as q}from"./date.fcf447cb.js";import{a as D,_ as F}from"./Grid.e9a164e4.js";import"./AppFooter.ffaf2bc6.js";import"./Spin.e91a07b4.js";import"./next-frame-once.e0fd6a2a.js";const N={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},j=e("path",{fill:"currentColor",d:"M17 3H7c-1.1 0-2 .9-2 2v16l7-3l7 3V5c0-1.1-.9-2-2-2z"},null,-1),E=[j];function H(u,s){return n(),c("svg",N,E)}const K={name:"ic-outline-bookmark",render:H},P={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},R=e("path",{fill:"currentColor",d:"M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7h1.5Z"},null,-1),S=[R];function U(u,s){return n(),c("svg",P,S)}const Z={name:"mdi-clock-outline",render:U},G={"shadow-md":"","rounded-2rem":"","bg-white":"","animate-zoom-in":"","animate-duration-700":"","transition-300":"","hover:shadow-2xl":""},J={"overflow-hidden":""},O=["src"],Q={"px-15":"","pt-12":"","pb-6":"","text-17":"","hover:color-violet":""},T={"px-15":"","py-3":"",flex:"","justify-between":""},W={flex:"","items-center":""},X={"text-16":""},Y={flex:"","items-center":"",text:"#4c4948","hover:color-violet":""},ee={"text-16":""},te=e("div",{"border-1px":"","h-1":"","my-5":"","rounded-1rem":""},null,-1),oe={"px-15":"","pt-6":"","pb-10":""},ne={"inline-block":"","px-12":"","py-3":"","mr-3rem":"","rounded-3rem":"","text-white":"","text-12":"","cursor-pointer":"","bg-gradient-to-r":"","from-green-400":"","to-blue-500":"","transition-500":"","hover:scale-120":"","hover:from-pink-500":"","hover:to-yellow-500":""},me=V({__name:"index",setup(u){const s=z();let p=l(!0),h=l([]);const k=l(s.query.name);return A(async()=>{const f=await I.getArticles({category_id:s.params.categoryId,tag_id:s.params.tagId});h.value=f.data,p.value=!1}),(f,se)=>{var g;const i=L("router-link"),$=Z,y=K,b=D,w=F,B=C;return n(),d(B,{loading:p.value,title:`${(g=m(s).meta)==null?void 0:g.title} - ${k.value}`,label:"article_list"},{default:o(()=>[a(w,{"x-gap":"15","y-gap":"15",cols:"1 m:3",responsive:"screen"},{default:o(()=>[(n(!0),c(x,null,v(h.value,t=>(n(),d(b,{key:t.id},{default:o(()=>[e("div",G,[e("div",J,[a(i,{to:`/article/${t.id}`},{default:o(()=>[e("img",{src:m(M)(t.img),"h-220":"","w-full":"","rounded-t-1rem":"","transition-600":"","hover:scale-110":""},null,8,O)]),_:2},1032,["to"])]),e("div",null,[a(i,{to:`/article/${t.id}`},{default:o(()=>[e("p",Q,_(t.title),1)]),_:2},1032,["to"]),e("p",T,[e("span",W,[a($,{"text-20":"","mr-3":""}),e("span",X,_(m(q)(t.created_at)),1)]),a(i,{to:`/categories/${t.category_id}?name=${t.category.name}`},{default:o(()=>[e("div",Y,[a(y,{"text-20":"","mr-3":""}),e("span",ee,_(t.category.name),1)])]),_:2},1032,["to"])]),te,e("p",oe,[(n(!0),c(x,null,v(t.tags,r=>(n(),d(i,{key:r.id,to:`/tags/${r.id}?name=${r.name}`},{default:o(()=>[e("span",ne,_(r.name),1)]),_:2},1032,["to"]))),128))])])])]),_:2},1024))),128))]),_:1})]),_:1},8,["loading","title"])}}});export{me as default};
