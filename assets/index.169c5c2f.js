import{u as f}from"./TodoStore.6d072353.js";import{r as p,j as $,o as c,c as u,a as t,d as g,x as i,y as v,v as _,z as r,_ as y,A as b,b as m,B as k,F as S,u as V,t as x}from"./entry.588daa20.js";const B={class:"greeting"},w={class:"title"},N={__name:"Greetingblock",setup(d){const{changeTheName:l}=f(),n=p("");return $(n,o=>{l(o)}),(o,e)=>(c(),u("section",B,[t("h2",w,[g(" What's up, "),i(t("input",{type:"text",placeholder:"Name here","onUpdate:modelValue":e[0]||(e[0]=h=>r(n)?n.value=h:null)},null,512),[[v,_(n)]])])]))}},U=N,D={},L={type:"submit",value:"Add todo"};function A(d,l){return c(),u("input",L)}const C=y(D,[["render",A]]),M={class:"create-todo"},F=t("h4",null,"Create Todo",-1),G=["onSubmit"],O=t("h4",null,"Pick a category",-1),P={class:"options"},R=t("span",{class:"bubble bussiness"},null,-1),j=t("div",null,"Business",-1),z=t("span",{class:"bubble personal"},null,-1),E=t("div",null,"Personal",-1),I={__name:"CreateTodo",setup(d){const l=f(),n=p(""),o=p(""),e=p(null),h=()=>{o.value.length>0&&n.value.length>0&&e.value!=null&&(l.addTodo(o.value,e.value,n.value),n.value="",o.value="",e.value=null)};return(et,s)=>{const T=C;return c(),u("section",M,[F,t("form",{onSubmit:k(h,["prevent"])},[i(t("input",{type:"text",placeholder:"name your task","onUpdate:modelValue":s[0]||(s[0]=a=>r(n)?n.value=a:null)},null,512),[[v,_(n)]]),i(t("input",{type:"text",placeholder:"describe what do you want to do","onUpdate:modelValue":s[1]||(s[1]=a=>r(o)?o.value=a:null)},null,512),[[v,_(o)]]),O,t("div",P,[t("label",null,[i(t("input",{type:"radio",name:"category",value:"business","onUpdate:modelValue":s[2]||(s[2]=a=>r(e)?e.value=a:null)},null,512),[[b,_(e)]]),R,j]),t("label",null,[i(t("input",{type:"radio",name:"category",value:"personal","onUpdate:modelValue":s[3]||(s[3]=a=>r(e)?e.value=a:null)},null,512),[[b,_(e)]]),z,E])]),m(T)],40,G)])}}},W=I,q={class:"todo-list"},H=t("h3",null,"TO DO LIST",-1),J={class:"list"},K={class:"todo-content"},Q={__name:"TodoList",setup(d){const l=f();return(n,o)=>(c(),u("section",q,[H,t("div",J,[(c(!0),u(S,null,V(_(l).sortByDate,e=>(c(),u("div",{key:e.id,class:"todo-item"},[t("div",K,[t("span",null,x(e.tittle),1),t("span",null,x(e.content),1)])]))),128))])]))}},X=Q,Y={},Z={class:"app"};function tt(d,l){const n=U,o=W,e=X;return c(),u("main",Z,[m(n),m(o),m(e)])}const st=y(Y,[["render",tt]]);export{st as default};