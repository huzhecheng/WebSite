(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(22)},15:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),c=a.n(r),o=(a(15),a(1)),i=a(2),m=a(4),u=a(3),s=a(5),E=a(8),h=a.n(E),f=(a(18),function(e){var t=e.getBoundingClientRect(),a=document.querySelector(".timeline").getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(a.bottom||document.documentElement.clientHeight)&&t.right<=(a.right||document.documentElement.clientWidth)}),b=[{time:"Now",title:"\u4e00\u5361\u901a\u7968\u8b49 Inc.",job:"Back End Engineer"},{time:2019,title:"\u8056\u25ef Inc.",job:"Full Stack Engineer"},{time:2017,title:" \u9d3b\u25ef\u25ef\u25ef Inc.",job:"Full Stack Engineer"},{time:2015,title:"\u8cc7\u7b56\u6703 \u884c\u52d5\u61c9\u7528\u7a0b\u5f0f\u958b\u767c"}],p=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector(".timeline > ul"),t=document.querySelectorAll(".timeline li"),a=function(){for(var e=0;e<t.length;e++)f(t[e])&&t[e].classList.add("in-view")};e.onscroll=a,window.onscroll=a,window.onload=a}},{key:"render",value:function(){return l.a.createElement("section",{className:"timeline"},l.a.createElement("ul",null,b.map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement("div",null,l.a.createElement("time",null,e.time),e.title,l.a.createElement("br",null),e.job))})))}}]),t}(n.Component),d=a(9),g=a.n(d),w=(a(20),{"Programming Languag":["C#","Python"],Web:{"Front-end":["ES6","CSS3(SCSS)","React.js","Vue.js","jQuery"],"Back-end":["Asp.Net MVC","Asp.Net Core"]},DB:["MSSQL","MySQL","MongoDB","Redis"],Tool:["Git"]}),k=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"wrapper"},l.a.createElement("header",{className:"header"},l.a.createElement("img",{className:"avatar animated flipInX",src:g.a,alt:"avatar"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h1",null,"Fred"),l.a.createElement("hr",null),l.a.createElement("p",null,"\u79c1\u7acb\u7fa9\u5b88\u5927\u5b78 \u8cc7\u8a0a\u7ba1\u7406\u7cfb ",l.a.createElement("a",{href:"http://www.mis.isu.edu.tw/interface/overview/80204",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fas fa-link"}))),l.a.createElement("p",null,"\u570b\u7acb\u9ad8\u96c4\u79d1\u6280\u5927\u5b78 \u8cc7\u8a0a\u5de5\u7a0b\u7cfb ",l.a.createElement("a",{href:"http://www.csie.kuas.edu.tw/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fas fa-link"}))),l.a.createElement("div",{className:"headerIcons"},l.a.createElement("a",{href:"https://github.com/huzhecheng",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-github fa-2x"})),"\xa0\xa0",l.a.createElement("a",{href:"https://www.linkedin.com/in/jhe-cheng-syu-914430175",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-linkedin fa-2x"})),"\xa0\xa0",l.a.createElement("a",{href:"mailto:v57801129@gmail.ocm"},l.a.createElement("i",{className:"fas fa-envelope fa-2x"})),"\xa0\xa0")),l.a.createElement("section",{className:"section"},l.a.createElement("h1",null,"Hi !"),l.a.createElement("p",{className:"animated bounceIn"},"\u4f60\u597d\uff0c\u6211\u662f\u8a31\u54f2\u8aa0\xa0\xa0\xa0\xa0\u5168\u8077\u5de5\u7a0b\u5e2b\xa0\xa0\u4f86\u81ea\u81fa\u7063\u9ad8\u96c4\u5e02\uff0c",l.a.createElement("br",null),"\u76ee\u524d\u4efb\u8077\u65bc\xa0\xa0iPASS\u4e00\u5361\u901a\u7968\u8b49\xa0\xa0\u96fb\u5b50\u652f\u4ed8\u6280\u8853\u958b\u767c\u5de5\u7a0b\u5e2b\u3002",l.a.createElement("br",null),"\u5f88\u9ad8\u8208\u8a8d\u8b58\u4f60\uff01\ud83d\ude03"),l.a.createElement("hr",null),l.a.createElement("h1",null,l.a.createElement("i",{className:"fas fa-robot fa-lg"}),"\xa0\xa0Experiences"),l.a.createElement(p,null),l.a.createElement("ul",{className:"animated bounceIn experience_block"},l.a.createElement("li",null,l.a.createElement("h3",null,"\u8056\u68ee Inc."),l.a.createElement("h5",null,"2017-2019"),l.a.createElement("p",null,"\u5c08\u6848\u90e8\u958b\u767c\u5718\u968a\uff0c\u4ee5ASP.Net MVC\u4ee5\u53caVue.js\u70ba\u4e3b\u3002",l.a.createElement("br",null),"\u5718\u968a\u958b\u767c\u6a21\u5f0f\uff0c\u8ca0\u8cac\u8cc7\u6599\u5eab\u898f\u5283\u5efa\u7f6e\u3001\u5be6\u4f5c\u7db2\u7ad9\u5404\u90e8\u5206\u529f\u80fd\u3001Web API\u958b\u767c\u8207APP\u5de5\u7a0b\u5e2b\u505a\u8cc7\u6599\u4e32\u63a5\u3001\u3002")),l.a.createElement("li",null,l.a.createElement("h3",null,"\u9d3b\u8d8a\u8cc7\u8a0a Inc."),l.a.createElement("h5",null,"2016-2017"),l.a.createElement("p",null,"\u7814\u767c\u90e8\u9580RD\uff0c\u53c3\u8207\u516c\u53f8\u5b98\u65b9\u7db2\u7ad9\u88fd\u4f5c\uff0c\u4ee5ASP.Net MVC\u53cajQuery\u70ba\u4e3b\u3002",l.a.createElement("br",null),"\u5718\u968a\u958b\u767c\u6a21\u5f0f\uff0c\u5f9e\u7cfb\u7d71\u5206\u6790\u3001\u67b6\u69cb\u8a2d\u8a08\u3001\u8cc7\u6599\u5eab\u898f\u5283\u5efa\u7f6e\u3001\u4ecb\u9762\u5207\u7248\u8a2d\u8a08\uff0c\u5be6\u4f5c\u7db2\u7ad9\u5404\u90e8\u5206\u529f\u80fd\u3002")),l.a.createElement("li",null,l.a.createElement("h3",null,"\u8cc7\u7b56\u6703 \u884c\u52d5\u61c9\u7528\u7a0b\u5f0f\u958b\u767c"),l.a.createElement("h5",null,"2015"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://www.youtube.com/watch?v=QkgGCbCwsa0",target:"_blank",rel:"noopener noreferrer"},"Health Tracker"),l.a.createElement("br",null),"\u4ee5\u5c0f\u5718\u968a\u5c08\u984c\u904b\u4f5c\u6a21\u5f0f\uff0c\u900f\u904e\u5be6\u52d9\u5be6\u4f5c\u65b9\u9762\uff0c",l.a.createElement("br",null),"\u5f9e\u767c\u60f3ideal\uff0c\u5927\u5bb6\u5206\u5de5\u5408\u4f5c\u5b8c\u6210\u5c08\u984c\u3002"))),l.a.createElement("hr",null),l.a.createElement("h1",null,l.a.createElement("i",{className:"fas fa-street-view fa-lg"}),"\xa0\xa0Skills"),l.a.createElement(h.a,{src:w,name:!1,displayDataTypes:!1,displayObjectSize:!1}),l.a.createElement("hr",null),l.a.createElement("h1",null,l.a.createElement("i",{className:"fas fa-laptop-code fa-lg"}),"\xa0\xa0Portfolio"),l.a.createElement("ul",{className:"portfolio_block"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.youtube.com/watch?v=QkgGCbCwsa0",target:"_blank",rel:"noopener noreferrer"},"Health Tracker \u5065\u5eb7\u7ba1\u7406")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://huzhecheng.github.io/Currency2.0/",target:"_blank",rel:"noopener noreferrer"},"Bank Of Taiwan \u532f\u7387\u67e5\u8a62")),l.a.createElement("li",null,l.a.createElement("a",null,"Line bot \u6a5f\u5668\u4eba"),l.a.createElement("span",null,"\xa0\xa0(\u722c\u87f2 + Firebase)"),l.a.createElement("br",null),l.a.createElement("img",{className:"qr-official",src:"http://qr-official.line.me/L/dHC95-rdUC.png",alt:"avatar"})))),l.a.createElement("footer",{className:"footer"},l.a.createElement("p",null,l.a.createElement("small",null,"Hosted on GitHub Pages",l.a.createElement("br",null),"\u2014 Base Theme by ",l.a.createElement("a",{href:"https://github.com/orderedlist",target:"_blank",rel:"noopener noreferrer"},"orderedlist"),l.a.createElement("br",null),"\u2014 Base by ",l.a.createElement("a",{href:"https://github.com/facebook/create-react-app",target:"_blank",rel:"noopener noreferrer"},"create-react-app")))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a.p+"static/media/fred.d9392e5f.png"}},[[10,2,1]]]);
//# sourceMappingURL=main.8a74160f.chunk.js.map