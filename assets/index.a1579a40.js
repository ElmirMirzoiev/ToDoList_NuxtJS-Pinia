import{_ as f,q as v,o as r,c as g,a as n,t as p,b as l,w as d,d as u,s as _,F as T,u as b,v as c}from"./entry.588daa20.js";import{u as y}from"./TodoStore.6d072353.js";const $={class:"cardTittle"},k={class:"todo-content"},F={__name:"TaskCard",props:["tittle","content","category","id","done","isFav","isOpen"],emits:["toggleFav","toggleDone","deleteTodo","toggleOpen"],setup(t,{emit:s}){return(a,o)=>{const i=v("v-icon"),e=v("v-btn");return r(),g(T,null,[n("div",$,[n("span",null,p(t.tittle),1),l(i,{onClick:o[0]||(o[0]=m=>a.$emit("toggleOpen",t.id))},{default:d(()=>[u("mdi-arrow-down-thin")]),_:1})]),n("div",{class:_(["cardDescription",t.isOpen?"open":""])},[n("label",null,[n("input",{type:"checkbox",onClick:o[1]||(o[1]=m=>a.$emit("toggleDone",t.id))}),n("span",{class:_(`bubble ${t.category}`)},null,2)]),n("div",k,[n("span",null,p(t.content),1)]),l(e,{class:"mx-2 my-2",size:"small",onClick:o[2]||(o[2]=m=>a.$emit("deleteTodo",t.id))},{default:d(()=>[l(i,null,{default:d(()=>[u("mdi-delete")]),_:1})]),_:1}),l(e,{class:"mx-2 my-2",size:"small",color:t.isFav?"#ff5b57":"",onClick:o[3]||(o[3]=m=>a.$emit("toggleFav",t.id))},{default:d(()=>[l(i,null,{default:d(()=>[u("mdi-heart")]),_:1})]),_:1},8,["color"])],2)],64)}}},C=f(F,[["__scopeId","data-v-8abbf853"]]),D={class:"todo-list"},O=n("h3",null,"All tasks with a description",-1),x={class:"list"},B={__name:"index",setup(t){const s=y();return(a,o)=>{const i=C;return r(),g("section",D,[O,n("div",x,[(r(!0),g(T,null,b(c(s).sortByDate,e=>(r(),g("div",{key:e.id,class:_(`todo-item ${e.done&&"done"}`)},[l(i,{tittle:e.tittle,content:e.content,category:e.category,id:e.id,done:e.done,isFav:e.isFav,isOpen:e.isOpen,onToggleFav:c(s).toggleFav,onToggleDone:c(s).toggleDone,onToggleOpen:c(s).toggleOpen,onDeleteTodo:c(s).deleteTodo},null,8,["tittle","content","category","id","done","isFav","isOpen","onToggleFav","onToggleDone","onToggleOpen","onDeleteTodo"])],2))),128))])])}}};export{B as default};
