(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{11:function(e,a,t){e.exports=t.p+"static/media/logo.86fef799.svg"},29:function(e,a,t){e.exports=t.p+"static/media/landing.211f2bb0.svg"},30:function(e,a,t){e.exports=t.p+"static/media/study.e7a7e1b4.svg"},31:function(e,a,t){e.exports=t.p+"static/media/give-classes.156102ee.svg"},32:function(e,a,t){e.exports=t.p+"static/media/purple-heart.bfdb3ebe.svg"},36:function(e,a,t){e.exports=t.p+"static/media/back.dc8c47fa.svg"},37:function(e,a,t){e.exports=t.p+"static/media/whatsapp.45c6e6ec.svg"},39:function(e,a,t){e.exports=t.p+"static/media/warning.6dfaa2f9.svg"},41:function(e,a,t){e.exports=t(78)},63:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(28),c=t.n(r),o=t(6),i=t(1),u=t(2),s=t(11),m=t.n(s),b=t(29),v=t.n(b),d=t(30),f=t.n(d),p=t(31),E=t.n(p),g=t(32),h=t.n(g),j=t(33),O=t.n(j).a.create({baseURL:"http://localhost:3333"});t(63);var y=function(){var e=Object(n.useState)(0),a=Object(u.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){O.get("connections").then((function(e){var a=e.data.total;r(a)}))}),[]),l.a.createElement("div",{id:"page-landing"},l.a.createElement("div",{id:"page-landing-content",className:"container"},l.a.createElement("div",{className:"logo-container"},l.a.createElement("img",{src:m.a,alt:"Proffy"}),l.a.createElement("h2",null,"Sua plataforma de estudo online")),l.a.createElement("img",{src:v.a,alt:"Plataforma de estudos",className:"hero-image"}),l.a.createElement("div",{className:"buttons-container"},l.a.createElement(o.b,{to:"/study",className:"study"},l.a.createElement("img",{src:f.a,alt:"Estudar"}),"Estudar"),l.a.createElement(o.b,{to:"/give-classes",className:"give-classes"},l.a.createElement("img",{src:E.a,alt:"Dar aulas"}),"Dar aulas")),l.a.createElement("span",{className:"total-connections"},"Total de ",t," conex\xf5es j\xe1 realizadas",l.a.createElement("img",{src:h.a,alt:"Cora\xe7\xe3o roxo"}))))},S=t(17),w=t.n(S),C=t(35),N=t(36),k=t.n(N),x=(t(70),function(e){return l.a.createElement("header",{className:"page-header"},l.a.createElement("div",{className:"top-bar-container"},l.a.createElement(o.b,{to:"/"},l.a.createElement("img",{src:k.a,alt:"Voltar"})),l.a.createElement("img",{src:m.a,alt:"Proffy"})),l.a.createElement("div",{className:"header-content"},l.a.createElement("strong",null,e.title),e.description&&l.a.createElement("p",null,e.description),e.children))}),F=t(37),D=t.n(F),P=(t(71),function(e){var a=e.teacher;return l.a.createElement("article",{className:"teacher-item"},l.a.createElement("header",null,l.a.createElement("img",{src:a.avatar,alt:a.name}),l.a.createElement("div",null,l.a.createElement("strong",null,a.name),l.a.createElement("span",null,a.subject))),l.a.createElement("p",null,a.bio," "),l.a.createElement("footer",null,l.a.createElement("p",null,"Pre\xe7o/hora",l.a.createElement("strong",null,"R$ ",a.cost)),l.a.createElement("a",{href:"https://wa.me/".concat(a.whatsapp)},l.a.createElement("img",{src:D.a,alt:"Whatsapp"}),"Entrar em contato")))}),Q=t(7),_=(t(72),function(e){var a=e.label,t=e.name,n=Object(Q.a)(e,["label","name"]);return l.a.createElement("div",{className:"input-block"},l.a.createElement("label",{htmlFor:t},a),l.a.createElement("input",Object.assign({type:"text",id:t},n)))}),A=(t(73),function(e){var a=e.label,t=e.name,n=e.options,r=Object(Q.a)(e,["label","name","options"]);return l.a.createElement("div",{className:"select-block"},l.a.createElement("label",{htmlFor:t},a),l.a.createElement("select",Object.assign({value:"",id:t},r),l.a.createElement("option",{value:"",disabled:!0,hidden:!0},"Selecione uma op\xe7\xe3o"),n.map((function(e){return l.a.createElement("option",{key:e.value,value:e.value},e.label)})),";"))});t(74);var B=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(""),o=Object(u.a)(c,2),i=o[0],s=o[1],m=Object(n.useState)(""),b=Object(u.a)(m,2),v=b[0],d=b[1],f=Object(n.useState)(""),p=Object(u.a)(f,2),E=p[0],g=p[1];function h(){return(h=Object(C.a)(w.a.mark((function e(a){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,O.get("classes",{params:{subject:i,week_day:v,time:E}});case 3:t=e.sent,r(t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return l.a.createElement("div",{id:"page-teacher-list",className:"container"},l.a.createElement(x,{title:"Estes s\xe3o os proffys dispon\xedveis."},l.a.createElement("form",{id:"search-teachers",onSubmit:function(e){return h.apply(this,arguments)}},l.a.createElement(A,{name:"subject",label:"Mat\xe9ria",value:i,onChange:function(e){return s(e.target.value)},options:[{value:"Artes",label:"Artes"},{value:"Biologia",label:"Biologia"},{value:"Ci\xeancias",label:"Ci\xeancias"},{value:"Educa\xe7\xe3o F\xedsica",label:"Educa\xe7\xe3o F\xedsica"},{value:"F\xedsica",label:"F\xedsica"},{value:"Geografia",label:"Geografia"},{value:"Hist\xf3ria",label:"Hist\xf3ria"},{value:"Matem\xe1tica",label:"Matem\xe1tica"},{value:"Portugu\xeas",label:"Portugu\xeas"},{value:"Qu\xedmica",label:"Qu\xedmica"}]}),l.a.createElement(A,{name:"week_day",label:"Dia da Semana",value:v,onChange:function(e){return d(e.target.value)},options:[{value:"0",label:"Domingo"},{value:"1",label:"Segunda-feira"},{value:"2",label:"Ter\xe7a-feira"},{value:"3",label:"Quarta-feira"},{value:"4",label:"Quinta-feira"},{value:"5",label:"Sexta-feira"},{value:"6",label:"S\xe1bado"}]}),l.a.createElement(_,{name:"time",type:"time",label:"Hora",value:E,onChange:function(e){g(e.target.value)}}),l.a.createElement("button",{type:"submit"},"Buscar"))),l.a.createElement("main",null,t.map((function(e){return l.a.createElement(P,{key:e.id,teacher:e})}))))},M=t(12),H=t(38),G=t(40),T=(t(75),function(e){var a=e.label,t=e.name,n=Object(Q.a)(e,["label","name"]);return l.a.createElement("div",{className:"textarea-block"},l.a.createElement("label",{htmlFor:t},a),l.a.createElement("textarea",Object.assign({id:t},n)))}),q=t(39),z=t.n(q);t(76);var I=function(){var e=Object(i.e)(),a=Object(n.useState)(""),t=Object(u.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(""),s=Object(u.a)(o,2),m=s[0],b=s[1],v=Object(n.useState)(""),d=Object(u.a)(v,2),f=d[0],p=d[1],E=Object(n.useState)(""),g=Object(u.a)(E,2),h=g[0],j=g[1],y=Object(n.useState)(""),S=Object(u.a)(y,2),w=S[0],C=S[1],N=Object(n.useState)(""),k=Object(u.a)(N,2),F=k[0],D=k[1],P=Object(n.useState)([{week_day:0,from:"",to:""}]),Q=Object(u.a)(P,2),B=Q[0],q=Q[1];function I(e,a,t){var n=B.map((function(n,l){return l===e?Object(H.a)({},n,Object(M.a)({},a,t)):n}));q(n)}return l.a.createElement("div",{id:"page-teacher-form",className:"container"},l.a.createElement(x,{title:"Que incr\xedvel que voc\xea quer dar aulas.",description:"O primeiro passo \xe9 preencher este formul\xe1rio de inscri\xe7\xe3o"}),l.a.createElement("main",null,l.a.createElement("form",{onSubmit:function(a){a.preventDefault(),O.post("classes",{name:r,avatar:m,whatsapp:f,bio:h,subject:w,cost:Number(F),schedule:B}).then((function(){alert("Cadastro realizado com sucesso"),e.push("/")})).catch((function(){alert("Erro ao cadastrar")}))}},l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Seus Dados"),l.a.createElement(_,{name:"name",label:"Nome completo",value:r,onChange:function(e){c(e.target.value)}}),l.a.createElement(_,{name:"avatar",label:"Avatar",value:m,onChange:function(e){b(e.target.value)}}),l.a.createElement(_,{name:"whatsapp",label:"Whatsapp",value:f,onChange:function(e){p(e.target.value)}}),l.a.createElement(T,{name:"bio",label:"Biografia",value:h,onChange:function(e){j(e.target.value)}})),l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Sobra a aula"),l.a.createElement(A,{name:"subject",label:"Mat\xe9ria",value:w,onChange:function(e){C(e.target.value)},options:[{value:"Artes",label:"Artes"},{value:"Biologia",label:"Biologia"},{value:"Ci\xeancias",label:"Ci\xeancias"},{value:"Educa\xe7\xe3o F\xedsica",label:"Educa\xe7\xe3o F\xedsica"},{value:"F\xedsica",label:"F\xedsica"},{value:"Geografia",label:"Geografia"},{value:"Hist\xf3ria",label:"Hist\xf3ria"},{value:"Matem\xe1tica",label:"Matem\xe1tica"},{value:"Portugu\xeas",label:"Portugu\xeas"},{value:"Qu\xedmica",label:"Qu\xedmica"}]}),l.a.createElement(_,{name:"cost",label:"Custo da sua hora por aula",value:F,onChange:function(e){D(e.target.value)}})),l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Hor\xe1rio dispon\xedveis",l.a.createElement("button",{type:"button",onClick:function(){q([].concat(Object(G.a)(B),[{week_day:0,from:"",to:""}]))}},"+ Novo hor\xe1rio")),B.map((function(e,a){return l.a.createElement("div",{key:e.week_day,className:"schedule-item"},l.a.createElement(A,{name:"week_day",label:"Dia da semana",value:e.week_day,onChange:function(e){return I(a,"week_day",e.target.value)},options:[{value:"0",label:"Domingo"},{value:"1",label:"Segunda-feira"},{value:"2",label:"Ter\xe7a-feira"},{value:"3",label:"Quarta-feira"},{value:"4",label:"Quinta-feira"},{value:"5",label:"Sexta-feira"},{value:"6",label:"S\xe1bado"}]}),l.a.createElement(_,{name:"from",label:"Das",type:"time",value:e.from,onChange:function(e){return I(a,"from",e.target.value)}}),l.a.createElement(_,{name:"to",label:"At\xe9",type:"time",value:e.to,onChange:function(e){return I(a,"to",e.target.value)}}))}))),l.a.createElement("footer",null,l.a.createElement("p",null,l.a.createElement("img",{src:z.a,alt:"Aviso importante"}),"Importante! ",l.a.createElement("br",null),"Preencha todos os dados"),l.a.createElement("button",{type:"submit"},"Salvar cadastro")))))};var J=function(){return l.a.createElement(o.a,null,l.a.createElement(i.a,{path:"/",exact:!0,component:y}),l.a.createElement(i.a,{path:"/study",component:B}),l.a.createElement(i.a,{path:"/give-classes",component:I}))};t(77);var R=function(){return l.a.createElement(J,null)};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(R,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.05f48526.chunk.js.map