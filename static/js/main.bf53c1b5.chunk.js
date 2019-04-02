(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(45)},32:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(22),i=a.n(r),s=(a(31),a(32),a(6)),l=a(7),o=a(10),p=a(8),m=a(11),u=a(9),h=a(5),f=a(12),b=a.n(f),_=a(14),E=function(e){return n.a.createElement("form",{onSubmit:e.getRecipe,style:{marginBottom:"2rem"}},n.a.createElement("input",{className:"form__input",type:"text",name:"recipeName"}),n.a.createElement("button",{className:"form__button"},"Search"))},d=function(e){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},e.recipes.map(function(e){return n.a.createElement("div",{key:e.recipe_id,className:"col-md-4",style:{marginBottom:"2rem"}},n.a.createElement("div",{className:"recipes"},n.a.createElement("img",{className:"recipes__box-img",src:e.image_url,alt:e.title}),n.a.createElement("div",{className:"recipe__text"},n.a.createElement("h5",{className:"recipe__text-title"},e.title.length<20?"".concat(e.title):"".concat(e.title.substring(0,25),"...")),n.a.createElement("p",{className:"recipe__text-subtitle"},"Publisher: ",n.a.createElement("span",null,e.publisher))),n.a.createElement("button",{className:"recipes__buttons"},n.a.createElement(u.b,{to:{pathname:"/recipe/".concat(e.recipe_id),state:{recipe:e.title}},className:"recipes__buttons-name"},"View Recipe"))))})))},v=a(25),g=a.n(v),N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={recipes:[],connected:!1},a.componentDidMount=function(){if(g.a.config(),a.state.connected){var e=localStorage.getItem("recipes"),t=JSON.parse(e);a.setState({recipes:t})}else localStorage.clear()},a.componentDidUpdate=function(){var e=JSON.stringify(a.state.recipes);localStorage.setItem("recipes",e)},a.getRecipe=function(){var e=Object(_.a)(b.a.mark(function e(t){var c,n,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.elements.recipeName.value,t.preventDefault(),e.next=4,fetch("https://www.food2fork.com/api/search?key=".concat("9e093c620e20f422c9f9a2280d2bb042","&q=").concat(c,"&count=10"));case 4:return n=e.sent,e.next=7,n.json();case 7:null!==(r=e.sent).recipes?a.setState({recipes:r.recipes,connected:!0}):console.log("cannot connect to api");case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App__header"},n.a.createElement("h1",{className:"App__title"},"Recipe Search")),n.a.createElement(E,{getRecipe:this.getRecipe,currentRecipe:this.state.recipeName}),n.a.createElement(d,{recipes:this.state.recipes}),0===this.state.recipes.length&&n.a.createElement("p",null,"Search recipes from any ingredient!"))}}]),t}(n.a.Component),w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={activeRecipe:[]},a.componentDidMount=Object(_.a)(b.a.mark(function e(){var t,c,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.location.state.recipe,e.next=3,fetch("https://www.food2fork.com/api/search?key=".concat("9e093c620e20f422c9f9a2280d2bb042","&q=").concat(t));case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,a.setState({activeRecipe:n.recipes[0]});case 8:case"end":return e.stop()}},e)})),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.activeRecipe;return n.a.createElement("div",{className:"container"},0!==this.state.activeRecipe&&n.a.createElement("div",{className:"active-recipe"},n.a.createElement("h2",{className:"active-recipe__title"},e.title),n.a.createElement("h4",{className:"active-recipe__publisher"},"Publisher: ",n.a.createElement("a",{href:e.publisher_url,target:"_blank",rel:"noopener noreferrer"},e.publisher)),n.a.createElement("img",{className:"active-recipe__img",src:e.image_url,alt:e.title}),n.a.createElement("p",{className:"active-recipe__website"},"Check out the recipe at: ","",n.a.createElement("a",{href:e.publisher_url,target:"_blank",rel:"noopener noreferrer"},e.publisher_url)),n.a.createElement("button",{className:"active-recipe__button"},n.a.createElement(u.b,{to:"/"},"Go Home"))))}}]),t}(n.a.Component),j=function(){return n.a.createElement("div",{className:"container"},n.a.createElement("h2",null,"Cannot load page..."))},O=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(u.a,null,n.a.createElement(h.c,null,n.a.createElement(h.a,{path:"/",component:N,exact:!0}),n.a.createElement(h.a,{path:"/recipe/:id",component:w}),n.a.createElement(h.a,{component:j})))}}]),t}(n.a.Component);i.a.render(n.a.createElement(O,null),document.querySelector("#root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.bf53c1b5.chunk.js.map