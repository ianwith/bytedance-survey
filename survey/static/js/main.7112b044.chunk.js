(this.webpackJsonpstatic_source=this.webpackJsonpstatic_source||[]).push([[0],{109:function(e,t,n){},126:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(0),a=n.n(i),s=n(21),o=n.n(s),r=(n(98),n(31)),u=n(9),l=(n(99),n(3)),d=n(44),j=n.n(d);var h=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var i=n[c].trim();if(i.substring(0,e.length+1)===e+"="){t=decodeURIComponent(i.substring(e.length+1));break}}return t}("csrftoken");function b(e,t){var n=new Request("".concat("http://localhost:8000/survey_form/api/").concat(e),{headers:{"X-CSRFToken":h,"Content-Type":"application/json"}});return fetch(n,t).then((function(e){return e.json()}))}function x(e){return b(e)}function O(e,t){return b(e,{method:"POST",body:JSON.stringify(t)})}function f(){var e=Object(u.h)(),t=e.url,n=(e.path,Object(i.useState)([])),a=Object(l.a)(n,2),s=a[0],o=a[1];return Object(i.useEffect)((function(){x("forms/").then((function(e){o(e)})).catch((function(e){console.log(e)}))}),[]),Object(c.jsxs)("main",{children:[Object(c.jsx)("a",{href:"create",children:"Create Form"}),Object(c.jsx)("div",{className:"App--wrap",children:Object(c.jsx)("ul",{children:s.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(r.b,{to:"".concat(t).concat(e.id),children:e.title})},e.id)}))})})]})}var p=n(16),m=(n(109),n(143));function v(e){var t=e.data,n=e.index,i=e.handleChoiceChange;return Object(c.jsx)("section",{children:Object(c.jsxs)("label",{children:["Choice ",n,":",Object(c.jsx)("input",{value:t.choice_text,onChange:function(e){i(t.id,e.target.value)},placeholder:"Input Choice Text",type:"text",name:"choice_text"})]})})}function g(e){var t=e.data,n=e.index,i=e.handleQuestionChange,a=e.handleQuestionChoiceChange,s=e.handleAddChoices,o=function(e,n){a(t.id,e,n)};return Object(c.jsxs)("section",{children:[Object(c.jsxs)("label",{children:["Question ",n," Text:",Object(c.jsx)("input",{value:t.text,onChange:function(e){i(t.id,e.target.value)},placeholder:"Input Question Text",type:"text",name:"question_text"})]}),t.choices.map((function(e,t){return Object(c.jsx)(v,{index:t+1,data:e,handleChoiceChange:o},e.id)})),Object(c.jsx)(m.a,{type:"dashed",onClick:function(){s(t.id)},children:"Add choice"})]})}function C(e){var t=e.title,n=e.description,i=e.handleTitleChange,a=e.handleDescChange;return Object(c.jsxs)("section",{children:[Object(c.jsx)("p",{className:"FormCreation--title",children:"Create Your Form"}),Object(c.jsxs)("label",{children:["Form Title:",Object(c.jsx)("input",{value:t,onChange:i,placeholder:"Input Title",type:"text",name:"title"})]}),Object(c.jsxs)("label",{children:["Form Description:",Object(c.jsx)("input",{value:n,onChange:a,placeholder:"Input Description",type:"text",name:"description"})]})]})}function y(){var e=Object(i.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(i.useState)(""),o=Object(l.a)(s,2),d=o[0],h=o[1],b=Object(i.useState)([]),x=Object(l.a)(b,2),f=x[0],v=x[1],y=Object(u.f)(),_=function(e,t){var n=f.slice(),c=n.findIndex((function(t){return t.id===e}));n[c].question_text=t,v(n)},S=function(e,t,n){var c=f.slice(),i=c.findIndex((function(t){return t.id===e})),a=c[i].choices,s=Object(p.a)(a),o=s.findIndex((function(e){return e.id===t}));s[o].choice_text=n,c[i].choices=s,v(c)},F=function(e){var t=f.slice(),n=t.findIndex((function(t){return t.id===e}));t[n].choices.push({id:j()(),choice_text:""}),v(t)};return Object(c.jsxs)("main",{children:[Object(c.jsx)(r.b,{to:"/",children:"Back to Form List"}),Object(c.jsx)("div",{className:"App--wrap",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O("forms/",{title:n,description:d,questions:f}).then((function(e){y.push("/".concat(e.id))}))},children:[Object(c.jsx)(C,{title:n,description:d,handleTitleChange:function(e){var t=e.target.value;a(t)},handleDescChange:function(e){var t=e.target.value;h(t)}}),f.map((function(e,t){return Object(c.jsx)(g,{index:t+1,data:e,handleQuestionChange:_,handleQuestionChoiceChange:S,handleAddChoices:F},e.id)})),Object(c.jsx)(m.a,{type:"dashed",onClick:function(e){var t=f.concat({id:j()(),question_text:"",choices:[]});v(t)},children:"Add question"}),Object(c.jsx)("div",{className:"FormCreation-submit",children:Object(c.jsx)(m.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})})]})}n(126);var _=n(144),S=_.a.Option;function F(e){var t=e.data,n=e.answeredChoice,i=e.handleSelectChange;return Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{children:t.question_text}),n?Object(c.jsxs)("div",{children:["You answered: ",n.choice_text," "]}):Object(c.jsxs)(_.a,{defaultValue:0,onChange:function(e){i(e)},children:[Object(c.jsx)(S,{value:0,children:"Please select an option"}),t.choices.map((function(e){return Object(c.jsx)(S,{value:e.id,children:e.choice_text})}))]})]})}function T(){var e=Object(u.g)().id,t=Object(i.useState)(),n=Object(l.a)(t,2),a=n[0],s=n[1],o=Object(i.useState)(""),d=Object(l.a)(o,2),j=d[0],h=d[1],b=Object(i.useState)(""),f=Object(l.a)(b,2),p=f[0],v=f[1],g=Object(i.useState)([]),C=Object(l.a)(g,2),y=C[0],_=C[1],S=Object(i.useState)(!1),T=Object(l.a)(S,2),k=T[0],I=T[1];Object(i.useEffect)((function(){x("forms/".concat(e)).then((function(e){s(e)})).catch((function(e){console.log(e)}))}),[]);return a?Object(c.jsxs)("main",{children:[Object(c.jsx)(r.b,{to:"/",children:"Back to Form List"}),Object(c.jsxs)("section",{className:"App--wrap",children:[Object(c.jsxs)("div",{className:"Form--header",children:[Object(c.jsx)("h1",{className:"Form--title",children:a.title}),Object(c.jsx)("p",{className:"Form--description",children:a.description})]}),Object(c.jsx)("section",{children:Object(c.jsx)("ul",{children:a.questions.map((function(e,t){var n,i=y.find((function(t){return t.question===e.id}));return k&&i&&(n=e.choices.find((function(e){return e.id===i.choice}))),Object(c.jsxs)("li",{children:["Question ",t+1,":",Object(c.jsx)(F,{data:e,answeredChoice:n,handleSelectChange:function(t){!function(e,t){var n=y.slice(),c=n.findIndex((function(t){return t.question===e}));c>=0?n[c].choice=t:n.push({question:e,choice:t}),_(n)}(e.id,t)}})]},e.id)}))})}),Object(c.jsx)("section",{children:k?Object(c.jsxs)("div",{children:["Answer by ",j,", contact email ",p]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("label",{children:["Tell us your name:",Object(c.jsx)("input",{value:j,onChange:function(e){h(e.target.value)},placeholder:"Input your name",type:"text",name:"user_name"})]}),Object(c.jsxs)("label",{children:["Tell us your email:",Object(c.jsx)("input",{value:p,onChange:function(e){v(e.target.value)},placeholder:"Input your email",type:"text",name:"user_email"})]})]})}),k?null:Object(c.jsx)(m.a,{type:"primary",block:!0,onClick:function(){console.log(y),O("responses/",{form:e,user_name:j,user_email:p,answers:y}).then((function(e){I(!0),_(e.answers),h(e.user_name),v(e.user_email)})).catch((function(e){console.log(e)}))},children:"Submit answer"})]})]}):Object(c.jsx)("div",{children:"Loading..."})}n(138);var k=function(){return Object(c.jsx)(r.a,{basename:"/survey_form/forms",children:Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{path:"/create",children:Object(c.jsx)(y,{})}),Object(c.jsx)(u.a,{exact:!0,path:"/",children:Object(c.jsx)(f,{})}),Object(c.jsx)(u.a,{path:"/:id",children:Object(c.jsx)(T,{})})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,145)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),I()},98:function(e,t,n){}},[[139,1,2]]]);
//# sourceMappingURL=main.7112b044.chunk.js.map