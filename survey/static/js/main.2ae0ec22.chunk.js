(this.webpackJsonpstatic_source=this.webpackJsonpstatic_source||[]).push([[0],{109:function(e,t,n){},126:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n(0),o=n.n(i),s=n(21),a=n.n(s),r=(n(98),n(31)),u=n(9),d=(n(99),n(3)),l=n(44),h=n.n(l);var j=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var i=n[c].trim();if(i.substring(0,e.length+1)===e+"="){t=decodeURIComponent(i.substring(e.length+1));break}}return t}("csrftoken");function b(e,t){var n=new Request("".concat("http://localhost:8000/survey_form/api/").concat(e),{headers:{"X-CSRFToken":j,"Content-Type":"application/json"}});return fetch(n,t).then((function(e){return e.json()}))}function f(e){return b(e)}function x(e,t){return b(e,{method:"POST",body:JSON.stringify(t)})}function O(){var e=Object(u.h)(),t=e.url,n=(e.path,Object(i.useState)([])),o=Object(d.a)(n,2),s=o[0],a=o[1];return Object(i.useEffect)((function(){f("forms/").then((function(e){a(e)})).catch((function(e){console.log(e)}))}),[]),Object(c.jsxs)("main",{children:[Object(c.jsx)("a",{href:"create",children:"Create Form"}),Object(c.jsx)("div",{className:"App--wrap",children:Object(c.jsx)("ul",{children:s.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(r.b,{to:"".concat(t).concat(e.id),children:e.title})},e.id)}))})})]})}var p=n(16),m=(n(109),n(143));function v(e){var t=e.data,n=e.index,i=e.handleChoiceChange;return Object(c.jsx)("section",{children:Object(c.jsxs)("label",{children:["Choice ",n,":",Object(c.jsx)("input",{value:t.choice_text,onChange:function(e){i(t.id,e.target.value)},placeholder:"Input Choice Text",type:"text",name:"choice_text"})]})})}function C(e){var t=e.data,n=e.index,i=e.handleQuestionChange,o=e.handleQuestionChoiceChange,s=e.handleAddChoices,a=function(e,n){o(t.id,e,n)};return Object(c.jsxs)("section",{children:[Object(c.jsxs)("label",{children:["Question ",n," Text:",Object(c.jsx)("input",{value:t.text,onChange:function(e){i(t.id,e.target.value)},placeholder:"Input Question Text",type:"text",name:"question_text"})]}),t.choices.map((function(e,t){return Object(c.jsx)(v,{index:t+1,data:e,handleChoiceChange:a},e.id)})),Object(c.jsx)(m.a,{type:"dashed",onClick:function(){s(t.id)},children:"Add choice"})]})}function g(e){var t=e.title,n=e.description,i=e.handleTitleChange,o=e.handleDescChange;return Object(c.jsxs)("section",{children:[Object(c.jsx)("p",{className:"FormCreation--title",children:"Create Your Form"}),Object(c.jsxs)("label",{children:["Form Title:",Object(c.jsx)("input",{value:t,onChange:i,placeholder:"Input Title",type:"text",name:"title"})]}),Object(c.jsxs)("label",{children:["Form Description:",Object(c.jsx)("input",{value:n,onChange:o,placeholder:"Input Description",type:"text",name:"description"})]})]})}function y(){var e=Object(i.useState)(""),t=Object(d.a)(e,2),n=t[0],o=t[1],s=Object(i.useState)(""),a=Object(d.a)(s,2),l=a[0],j=a[1],b=Object(i.useState)([]),f=Object(d.a)(b,2),O=f[0],v=f[1],y=Object(u.f)(),S=function(e,t){var n=O.slice(),c=n.findIndex((function(t){return t.id===e}));n[c].question_text=t,v(n)},F=function(e,t,n){var c=O.slice(),i=c.findIndex((function(t){return t.id===e})),o=c[i].choices,s=Object(p.a)(o),a=s.findIndex((function(e){return e.id===t}));s[a].choice_text=n,c[i].choices=s,v(c)},k=function(e){var t=O.slice(),n=t.findIndex((function(t){return t.id===e}));t[n].choices.push({id:h()(),choice_text:""}),v(t)};return Object(c.jsxs)("main",{children:[Object(c.jsx)(r.b,{to:"/",children:"Back to Form List"}),Object(c.jsx)("div",{className:"App--wrap",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x("forms/",{title:n,description:l,questions:O}).then((function(e){y.push("/".concat(e.id))}))},children:[Object(c.jsx)(g,{title:n,description:l,handleTitleChange:function(e){var t=e.target.value;o(t)},handleDescChange:function(e){var t=e.target.value;j(t)}}),O.map((function(e,t){return Object(c.jsx)(C,{index:t+1,data:e,handleQuestionChange:S,handleQuestionChoiceChange:F,handleAddChoices:k},e.id)})),Object(c.jsx)(m.a,{type:"dashed",onClick:function(e){var t=O.concat({id:h()(),question_text:"",choices:[]});v(t)},children:"Add question"}),Object(c.jsx)("div",{className:"FormCreation-submit",children:Object(c.jsx)(m.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})})]})}n(126);var S=n(144),F=S.a.Option;function k(e){var t=e.data,n=e.answeredChoice,i=e.handleSelectChange;return Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{children:t.question_text}),n?Object(c.jsxs)("div",{children:["You answered: ",n.choice_text," "]}):Object(c.jsxs)(S.a,{defaultValue:0,onChange:function(e){i(e)},children:[Object(c.jsx)(F,{value:0,children:"Please select an option"}),t.choices.map((function(e){return Object(c.jsx)(F,{value:e.id,children:e.choice_text})}))]})]})}function _(){var e=Object(u.g)().id,t=Object(i.useState)(),n=Object(d.a)(t,2),o=n[0],s=n[1],a=Object(i.useState)([]),l=Object(d.a)(a,2),h=l[0],j=l[1],b=Object(i.useState)(!1),O=Object(d.a)(b,2),p=O[0],v=O[1];Object(i.useEffect)((function(){f("forms/".concat(e)).then((function(e){s(e)})).catch((function(e){console.log(e)}))}),[]);return o?Object(c.jsxs)("main",{children:[Object(c.jsx)(r.b,{to:"/",children:"Back to Form List"}),Object(c.jsxs)("section",{className:"App--wrap",children:[Object(c.jsxs)("div",{className:"Form--header",children:[Object(c.jsx)("h1",{className:"Form--title",children:o.title}),Object(c.jsx)("p",{className:"Form--description",children:o.description})]}),Object(c.jsx)("section",{children:Object(c.jsx)("ul",{children:o.questions.map((function(e,t){var n,i=h.find((function(t){return t.question===e.id}));return p&&i&&(n=e.choices.find((function(e){return e.id===i.choice}))),Object(c.jsxs)("li",{children:["Question ",t+1,":",Object(c.jsx)(k,{data:e,answeredChoice:n,handleSelectChange:function(t){!function(e,t){var n=h.slice(),c=n.findIndex((function(t){return t.question===e}));c>=0?n[c].choice=t:n.push({question:e,choice:t}),j(n)}(e.id,t)}})]},e.id)}))})}),p?null:Object(c.jsx)(m.a,{type:"primary",block:!0,onClick:function(){console.log(h),x("responses/",{form:e,answers:h}).then((function(e){v(!0),j(e.answers)})).catch((function(e){console.log(e)}))},children:"Submit answer"})]})]}):Object(c.jsx)("div",{children:"Loading..."})}n(138);var T=function(){return Object(c.jsx)(r.a,{basename:"/survey_form/forms",children:Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{path:"/create",children:Object(c.jsx)(y,{})}),Object(c.jsx)(u.a,{exact:!0,path:"/",children:Object(c.jsx)(O,{})}),Object(c.jsx)(u.a,{path:"/:id",children:Object(c.jsx)(_,{})})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,145)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),o(e),s(e)}))};a.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(T,{})}),document.getElementById("root")),w()},98:function(e,t,n){}},[[139,1,2]]]);
//# sourceMappingURL=main.2ae0ec22.chunk.js.map