(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{164:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return p});a(41);var n=a(8),r=a.n(n),i=a(0),o=a.n(i),l=a(169),c=a(174),s=a(172),d=a(167),m=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark,e=this.props.data.site.siteMetadata.title,a=this.props.pageContext,n=a.previous,r=a.next;return o.a.createElement(c.a,{location:this.props.location,title:e},o.a.createElement(s.a,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt}),o.a.createElement("h1",null,t.frontmatter.title),o.a.createElement("p",{style:Object.assign({},Object(d.b)(-.2),{display:"block",marginBottom:Object(d.a)(1),marginTop:Object(d.a)(-1)})},t.frontmatter.date),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),o.a.createElement("hr",{style:{marginBottom:Object(d.a)(1)}}),o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,n&&o.a.createElement(l.a,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),o.a.createElement("li",null,r&&o.a.createElement(l.a,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →"))))},e}(o.a.Component);e.default=m;var p="3654438753"},167:function(t,e,a){"use strict";a.d(e,"a",function(){return c}),a.d(e,"b",function(){return s});var n=a(177),r=a.n(n),i=a(178),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},a:{color:"maroon"},".js-line-number":{display:"none"}}},delete o.a.googleFonts;var l=new r.a(o.a);var c=l.rhythm,s=l.scale},168:function(t,e,a){var n;t.exports=(n=a(170))&&n.default||n},169:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(5),o=a.n(i),l=a(40),c=a.n(l);a.d(e,"a",function(){return c.a});a(168),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},170:function(t,e,a){"use strict";a.r(e);a(41);var n=a(0),r=a.n(n),i=a(5),o=a.n(i),l=a(64),c=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(l.a,Object.assign({location:e,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=c},171:function(t){t.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAABYlAAAWJQFJUiTwAAAETUlEQVQ4y1WTa1CUZRTH91MzJpplWFwEXBcW2AsEuoguCIkKomOJt8ywUjM1M0ACb5iGpjNdpxm1xMZLNdaYozNO+cFMcQiEWgTxFqjc9v4u7y4X0/rw6+xK0/ThN+c85z3n/5xz5n00qqMXv8NOn7NXEOty0OcO4kQR3ysoLidetwvF48bn9aAoXkFB8f2HdxiNYu9BsXfj6bobwtt9D48QjA2pXh72q/zp93Ff/IDXic/Zg89lD12qBvEEcQquEBrF5yaE4nqEFHkV6c7n4szpH9i7p5rvTnzLxQvn6ezsYHDIT5/k+yS3T3ELrv+hUaUwmKAKfklQRXBooI9WWwMv5GZjNRtIM5owGlOYMWMmhw7up1/1EBBUuVgVETVYF9IRQb9il4Ad/zCqp4fBgJvWulq+372Tmi2lrFk4H0t6OkmJBvTxiXxQ/T4BnwO/t0eQOq9jGDuagOseAXenIFZ8v/uu7Oce33y8j52vvUxNZSlbX1/OnOyp5GRmYEw2YTaZafjlR9mt7C9U3zVMpwjab/Mv/p5bDLo7sN9oonrVMlbn53Jw03o+2biWJfkzWJCXzeTUVHQTdZw7eZy/+7oJ9N5mwNHOgLM9ZDX93dfp724LEei6xn3HbU5/tJfP31jJiW3vcrh8A9UrV1D+ylL2LF/Ai9lWoqPGc/HUcf7ydODvvMYjDaGrTXZ4x0bgzlUCHc2o7TYe9N7kaPVW1ks3+9e9yodriqlctpjtxUvZvqSImVMsVL61iqHOVtQOG+qdZvxigwTPGrW1noDgv1aP2lLPg/YWWs6cYE/xYj5dW8yuFYuoeKmITYsWsLKwgOmWdHaUl9D722X6bzbhlVq1rYHAjUZUQeOVD56my7ibanE1XhLRBmqPfUl50VzKFs5jxawc5k+zsG7ebAqtGWRnWoiImUhh3mzJr+PhrRYCzY24rtThkbNmsMVGkIFWG322Kwxdb+H8V1+Qb52CQafFYtCzJGcq01LNpCYlYDSloNMn8/S4CGbl5FJdUcmvp04y1NaCelVGPltzgLOHD3B43y7OHa3hwtdHOHfkEPt3V7G6aA7r5+VhTUshOjqK8PBxPDk2nKjxscSLaKw2nlFjn6WqpIyfjh3g1MHP0Fgmm5iaYWDScwnkZKWTkz2JrExzKFaYO4U06WpEWBiPjQjj8dFjGBcZQ4xWxOJNaBNTSDIYyS+YTm5eOtZpqWjMqTomZyQwKS2B5MQJ6PVarBlmrBYDURERj4TCRvPEU+FExmqJi09CG2+QsY0iasSUms78uZnkTjeRlZWMZvO2SsrkNWwo2UhJWSmbt1SwvWozO96rQp9sZuSoMYyVfUWMn0B0XHxozAQZV59klLGTiIzRUTAnn4rKt3mn9E00dY3N1DU0U1tv43J9M5fqf+fnukZsbX+wdUc1I0aOJko6i4zViWgccVodE3V6dPKmE0T0GfnJs57P51KDjaDWPyv8puCmxYIzAAAAAElFTkSuQmCC",width:50,height:50,src:"/static/88387de906b52b20d5adb759d438538b/352e5/profile-pic.png",srcSet:"/static/88387de906b52b20d5adb759d438538b/352e5/profile-pic.png 1x,\n/static/88387de906b52b20d5adb759d438538b/aae31/profile-pic.png 1.5x,\n/static/88387de906b52b20d5adb759d438538b/47c2b/profile-pic.png 2x"}}},site:{siteMetadata:{author:"Aaron Jack",social:{twitter:"aaron_jack_"}}}}}},172:function(t,e,a){"use strict";var n=a(173),r=a(0),i=a.n(r),o=a(5),l=a.n(o),c=a(179),s=a.n(c);function d(t){var e=t.description,a=t.lang,r=t.meta,o=t.title,l=n.data.site,c=e||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(r)})}d.defaultProps={lang:"en",meta:[],description:""},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},e.a=d},173:function(t){t.exports={data:{site:{siteMetadata:{title:"code drip ☕",description:"javascript, react, and more",author:"Aaron Jack"}}}}},174:function(t,e,a){"use strict";a(41);var n=a(8),r=a.n(n),i=a(0),o=a.n(i),l=(a(175),a(171)),c=a(176),s=a.n(c),d=a(167),m=function(){var t=l.data,e=t.site.siteMetadata,a=e.author;e.social;return o.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},o.a.createElement(s.a,{fixed:t.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),o.a.createElement("p",null,"by ",o.a.createElement("strong",null,a)," ",o.a.createElement("br",null),"© ",(new Date).getFullYear()))},p=a(169),u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,a=e.location,n=e.title,r=e.children;return t="/"===a.pathname?o.a.createElement("div",null,o.a.createElement("h1",{style:Object.assign({},Object(d.b)(1.5),{marginTop:0,marginBottom:Object(d.a)(.5)})},o.a.createElement(p.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),o.a.createElement("h4",{style:{marginTop:0,marginBottom:Object(d.a)(.5)}},"stuff to help you land a dev job")):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},o.a.createElement(p.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),o.a.createElement("div",{style:{width:"100%",height:"/"===a.pathname?"100vh":"100%",backgroundColor:"darkgrey"}},o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(d.a)(27),padding:Object(d.a)(1.5)+" "+Object(d.a)(3),backgroundColor:"#f1f1f1"}},o.a.createElement("header",null,t),o.a.createElement("main",null,r),o.a.createElement("footer",null,o.a.createElement(m,null))))},e}(o.a.Component);e.a=u}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-de8910ad7fda44176c0a.js.map