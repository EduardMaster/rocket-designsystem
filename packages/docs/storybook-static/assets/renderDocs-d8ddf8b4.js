var k=Object.defineProperty;var a=(n,i)=>k(n,"name",{value:i,configurable:!0});import"./web.url.constructor-772845e2.js";import"./es.object.get-own-property-descriptor-64192e07.js";import"./index-34e51894.js";import{R as v}from"./index-75cd1920.js";import{j as o,a as m,F as w}from"./jsx-runtime-da4cfb3b.js";var D={fontSize:"14px",letterSpacing:"0.2px",margin:"10px 0"},P={margin:"auto",padding:30,borderRadius:10,background:"rgba(0,0,0,0.03)"},N={textAlign:"center"},y=a(function(){return o("div",{style:D,className:"sb-nodocs sb-wrapper",children:m("div",{style:P,children:[o("h1",{style:N,children:"No Docs"}),m("p",{children:["Sorry, but there are no docs for the selected story. To add them, set the story's ",o("code",{children:"docs"})," parameter. If you think this is an error:"]}),m("ul",{children:[o("li",{children:"Please check the story definition."}),o("li",{children:"Please check the Storybook config."}),o("li",{children:"Try reloading the page."})]}),o("p",{children:"If the problem persists, check the browser console, or the terminal you've run Storybook from."})]})})},"NoDocs");y.displayName="NoDocs";function g(n,i,s,d,c,l,r){try{var u=n[l](r),t=u.value}catch(h){s(h);return}u.done?i(t):Promise.resolve(t).then(d,c)}a(g,"asyncGeneratorStep");function S(n){return function(){var i=this,s=arguments;return new Promise(function(d,c){var l=n.apply(i,s);function r(t){g(l,d,c,r,u,"next",t)}a(r,"_next");function u(t){g(l,d,c,r,u,"throw",t)}a(u,"_throw"),r(void 0)})}}a(S,"_asyncToGenerator");function F(n,i,s,d){return A(n,i,s).then(d)}a(F,"renderDocs");function A(n,i,s){return f.apply(this,arguments)}a(A,"renderDocsAsync");function f(){return f=S(regeneratorRuntime.mark(a(function n(i,s,d){var c,l,r,u,t,h;return regeneratorRuntime.wrap(a(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=i.parameters.docs,!((r!=null&&r.getPage||r!=null&&r.page)&&!(r!=null&&r.getContainer||r!=null&&r.container))){e.next=3;break}throw new Error("No `docs.container` set, did you run `addon-docs/preset`?");case 3:if(e.t1=r.container,e.t1){e.next=8;break}return e.next=7,(c=r.getContainer)===null||c===void 0?void 0:c.call(r);case 7:e.t1=e.sent;case 8:if(e.t0=e.t1,e.t0){e.next=11;break}e.t0=function(p){var b=p.children;return o(w,{children:b})};case 11:if(u=e.t0,e.t3=r.page,e.t3){e.next=17;break}return e.next=16,(l=r.getPage)===null||l===void 0?void 0:l.call(r);case 16:e.t3=e.sent;case 17:if(e.t2=e.t3,e.t2){e.next=20;break}e.t2=y;case 20:return t=e.t2,h=o(u,{context:s,children:o(t,{})},i.componentId),e.next=24,new Promise(function(p){v.render(h,d,p)});case 24:case"end":return e.stop()}},"_callee$"),n)},"_callee"))),f.apply(this,arguments)}a(f,"_renderDocsAsync");function G(n){v.unmountComponentAtNode(n)}a(G,"unmountDocs");export{F as renderDocs,G as unmountDocs};
//# sourceMappingURL=renderDocs-d8ddf8b4.js.map
