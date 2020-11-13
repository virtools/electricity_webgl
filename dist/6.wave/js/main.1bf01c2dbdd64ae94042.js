!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=56)}([function(e,r,t){"use strict";t.d(r,"g",(function(){return m})),t.d(r,"e",(function(){return n})),t.d(r,"c",(function(){return s})),t.d(r,"a",(function(){return a})),t.d(r,"d",(function(){return i})),t.d(r,"f",(function(){return f})),t.d(r,"b",(function(){return v})),t.d(r,"h",(function(){return d}));var n=function(e,r,t){var n=o(e,e.VERTEX_SHADER,r),a=o(e,e.FRAGMENT_SHADER,t),i=e.createProgram();return e.attachShader(i,n),e.attachShader(i,a),e.linkProgram(i),e.getProgramParameter(i,e.LINK_STATUS)?i:(alert("無法初始化著色器程序: "+e.getProgramInfoLog(i)),null)},o=function(e,r,t){var n=e.createShader(r);return e.shaderSource(n,t),e.compileShader(n),e.getShaderParameter(n,e.COMPILE_STATUS)?n:(alert("編譯著色器時發生錯誤: "+e.getShaderInfoLog(n)),e.deleteShader(n),null)},a=function(e,r,t){var n,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.STATIC_DRAW,a=e.createBuffer(),i=0,u={buffer:a,get data(){return n},get length(){return n.length},set:function(r){n=new Float32Array(r),i=100*Math.ceil(n.length/t/100),e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,i*t*4,o),e.bufferSubData(e.ARRAY_BUFFER,0,n)},add:function(r){var u=n.length,f=100*Math.floor(n.length/t/100);f>=i&&(i=f+100,e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,i*t*4,o),e.bufferSubData(e.ARRAY_BUFFER,0,n));var c=new Float32Array(u+t);c.set(n),n=c,this.item(u/t,r)},item:function(r,o){var i=new Float32Array(o);n.set(i,r*t),e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferSubData(e.ARRAY_BUFFER,r*t*4,i)},getItem:function(e){return Array.from(n.slice(e*t,(e+1)*t))}};return u.set(r),u},i=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.STATIC_DRAW,n=new Uint8Array(r),o=e.createBuffer();e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,o),e.bufferData(e.ELEMENT_ARRAY_BUFFER,n,t);var a={buffer:o,get data(){return n},get length(){return n.length}};return a},u=function(e){var r=e.createTexture();return e.bindTexture(e.TEXTURE_2D,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),r},f=function(e,r){var t=u(e),n=new Image;return n.onload=function(){e.bindTexture(e.TEXTURE_2D,t),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n)},n.src=r,t},c=function(e,r,t,n){e.bindFramebuffer(e.FRAMEBUFFER,r),null==t&&null==n&&e.viewport(0,0,t,n)},l=function(e,r){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];r?t?c(e,r.framebuffer,r.width,r.height):c(e,r.framebuffer):t?c(e,null,e.canvas.width,e.canvas.height):c(e,null)},s=function(e,r,t){var n={width:r||e.canvas.clientWidth,height:t||e.canvas.clientHeight},o=u(e);n.texture=o,e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n.width,n.height,0,e.RGBA,e.UNSIGNED_BYTE,null);var a=e.createFramebuffer();return n.framebuffer=a,e.bindFramebuffer(e.FRAMEBUFFER,a),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,o,0),e.bindFramebuffer(e.FRAMEBUFFER,null),n},v={attribFloat:function(e,r,t,n){var o=e.getAttribLocation(r,t);return e.enableVertexAttribArray(o),function(r){e.bindBuffer(e.ARRAY_BUFFER,r),e.vertexAttribPointer(o,n,e.FLOAT,!1,0,0)}}},d={uniform1f:function(e,r,t){var n=e.getUniformLocation(r,t);return function(r){e.uniform1f(n,r)}},uniform2fv:function(e,r,t){var n=e.getUniformLocation(r,t);return function(r){e.uniform2fv(n,r)}},uniform3fv:function(e,r,t){var n=e.getUniformLocation(r,t);return function(r){e.uniform3fv(n,r)}},uniformTexture:function(e,r,t,n){var o=e.getUniformLocation(r,t);return function(r){e.activeTexture(e.TEXTURE0+n),e.bindTexture(e.TEXTURE_2D,r),e.uniform1i(o,n)}},uniform1i:function(e,r,t){var n=e.getUniformLocation(r,t);return function(r){e.uniform1i(n,r)}}},m=function(e,r,t,n,o){var a=r(e,t,n);return{programInfo:a,use:function(e){e.useProgram(a.program)},attribSet:function(e){for(var r in e)a.attribLocations[r]&&a.attribLocations[r](e[r])},uniformSet:function(e){for(var r in e)a.uniformLocations[r]&&a.uniformLocations[r](e[r])},useTexture:function(e,r){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];l(e,r),t&&(e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT))}}}},function(e,r){e.exports=function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}},function(e,r){function t(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}},function(e,r){e.exports="attribute vec2 aVertexPosition;\r\nattribute vec2 aTextureCoord;\r\nvarying highp vec2 vTextureCoord;\r\nuniform float uFlipY;\r\nvoid main(void){\r\n  vTextureCoord=aTextureCoord;\r\n  gl_Position=vec4((2.*aVertexPosition+vec2(-1.,-1.))*vec2(1.,uFlipY),0.,1.);\r\n}"},function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return f}));var n=t(1),o=t.n(n),a=t(2),i=t.n(a),u=function(){function e(){o()(this,e)}return i()(e,null,[{key:"normalize",value:function(r){return e.length(r)?e.scale(r,1/e.length(r)):r}},{key:"rotate",value:function(e,r){var t=Math.cos(r),n=Math.sin(r);return[e[0]*t-e[1]*n,e[1]*t+e[0]*n]}},{key:"dot",value:function(e,r){return e[0]*r[0]+e[1]*r[1]}},{key:"cross",value:function(e,r){return e[0]*r[1]-e[1]*r[0]}},{key:"add",value:function(e,r){return[e[0]+r[0],e[1]+r[1]]}},{key:"sub",value:function(e,r){return[e[0]-r[0],e[1]-r[1]]}},{key:"projection",value:function(r,t){var n=e.dot(r,t)/e.dot(t,t);return[t[0]*n,t[1]*n]}},{key:"length",value:function(r){return Math.sqrt(e.dot(r,r))}},{key:"mul",value:function(e,r){return[e[0]*r[0],e[1]*r[1]]}},{key:"div",value:function(e,r){return[e[0]/r[0],e[1]/r[1]]}},{key:"scale",value:function(e,r){return[e[0]*r,e[1]*r]}},{key:"collisionCalc",value:function(r,t,n,o){return e.scale(e.add(e.scale(r,n-o),e.scale(t,2*o)),1/(n+o))}},{key:"getAngle",value:function(e){return Math.atan2(e[1],e[0])}}]),e}(),f=function(){function e(){o()(this,e)}return i()(e,null,[{key:"set",value:function(e,r,t){return e[0]=r,e[1]=t,e}},{key:"normalize",value:function(r){var t=u.length(r);return t&&e.scale(r,1/t),r}},{key:"add",value:function(e,r){return e[0]+=r[0],e[1]+=r[1],e}},{key:"sub",value:function(e,r){return e[0]-=r[0],e[1]-=r[1],e}},{key:"scale",value:function(e,r){return e[0]*=r,e[1]*=r,e}},{key:"rotate",value:function(e,r){var t=Math.cos(r),n=Math.sin(r),o=[e[0]*t-e[1]*n,e[1]*t+e[0]*n];return e[0]=o[0],e[1]=o[1],e}}]),e}()},function(e,r,t){"use strict";t.d(r,"a",(function(){return f})),t.d(r,"b",(function(){return c}));var n=t(1),o=t.n(n),a=t(2),i=t.n(a),u=t(4),f=function(){function e(){o()(this,e)}return i()(e,null,[{key:"toPosRate",value:function(e,r,t){return[e[0]*(1-t)+r[0]*t,e[1]*(1-t)+r[1]*t]}},{key:"cross",value:function(e,r,t){return(e[0]-r[0])*(t[1]-r[1])-(t[0]-r[0])*(e[1]-r[1])}},{key:"getCenter",value:function(e,r){return[.5*(e[0]+r[0]),.5*(e[1]+r[1])]}},{key:"getVector",value:function(e,r){return[r[0]-e[0],r[1]-e[1]]}},{key:"addVector",value:function(e,r){return[e[0]+r[0],e[1]+r[1]]}},{key:"distance",value:function(r,t){return u.a.length(e.getVector(r,t))}},{key:"getLine",value:function(r,t){return{point:r,vector:e.getVector(r,t)}}}]),e}(),c=function(){function e(){o()(this,e)}return i()(e,null,[{key:"set",value:function(e,r,t){return e[0]=r,e[1]=t,e}},{key:"addVector",value:function(e,r){return e[0]+=r[0],e[1]+=r[1],e}}]),e}()},function(e,r,t){var n=t(17),o=t(18),a=t(19),i=t(20);e.exports=function(e){return n(e)||o(e)||a(e)||i()}},function(e,r){e.exports=function(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}},,,,,,,,,,function(e,r,t){var n=t(7);e.exports=function(e){if(Array.isArray(e))return n(e)}},function(e,r){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,r,t){var n=t(7);e.exports=function(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}},function(e,r){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},,function(e,r,t){"use strict";var n=t(0),o=t(3),a=t.n(o),i=t(23),u=t.n(i),f=function(e,r,t){var o=Object(n.e)(e,r,t);return{program:o,attribLocations:{vertexPosition:n.b.attribFloat(e,o,"aVertexPosition",2),textureCoord:n.b.attribFloat(e,o,"aTextureCoord",2)},uniformLocations:{flipY:n.h.uniform1f(e,o,"uFlipY"),sampler:n.h.uniformTexture(e,o,"uSampler",0)}}};r.a=function(e){return Object.assign(Object(n.g)(e,f,a.a,u.a),{getViewData:function(e){return[[e[0],e[1]],[e[2],e[1]],[e[2],e[3]],[e[0],e[3]]].flat()},draw:function(e,r){e.drawElements(e.TRIANGLE_STRIP,r,e.UNSIGNED_BYTE,0)}})}},function(e,r){e.exports="precision mediump float;\r\nvarying vec2 vTextureCoord;\r\nuniform sampler2D uSampler;\r\nvoid main()\r\n{\r\n  gl_FragColor=texture2D(uSampler,vTextureCoord);\r\n}\r\n"},,,,,function(e,r){e.exports="precision mediump float;\r\nvarying vec2 vTextureCoord;\r\nuniform lowp vec2 uSize;\r\nuniform float uTime;\r\nconst float pi=3.14159265359;\r\nvoid main()\r\n{\r\n  vec2 coord=vTextureCoord*uSize;\r\n  float a=sin(uTime*.003+(coord.x/200.)*2.*pi+.5*pi+sin(uTime*.012+pi*coord.x/50.)*.25+exp(sin(uTime*.012+pi*coord.x/50.))*.25+sin(pi*coord.y/100.)*1.6);\r\n  a=pow(exp(2.*a)/exp(2.),.75);\r\n  gl_FragColor=vec4(vec3(a),1.);\r\n}\r\n\r\n"},function(e,r){e.exports="precision mediump float;\r\nvarying vec2 vTextureCoord;\r\nuniform lowp vec2 uSize;\r\nuniform sampler2D uSampler;\r\nuniform float uHeight;\r\nconst float pi=3.14159265359;\r\nvoid main()\r\n{\r\n  vec2 iResolution=uSize/2.;\r\n  vec4 texCol=texture2D(uSampler,vTextureCoord);\r\n  vec2 dir=vec2(0.);\r\n  const int N=8;\r\n  float w=0.;\r\n  for(int i=0;i<N;i++)\r\n  {\r\n    float angle=2.*pi*float(i)/float(N);\r\n    vec2 pos=vec2(cos(angle),sin(angle));\r\n    dir+=(texCol.r-texture2D(uSampler,vTextureCoord+pos/iResolution).r)*pos;\r\n    w+=1.;\r\n  }\r\n  dir/=w;\r\n  dir*=vec2(1.,-1.);\r\n  vec3 normal=normalize(vec3(min(uHeight,200.)*dir,-1));\r\n  gl_FragColor=vec4(normal.xy*.5+vec2(.5),uHeight*texCol.r/200.,1.);\r\n  \r\n}\r\n"},function(e,r){e.exports="precision mediump float;\r\nvarying vec2 vTextureCoord;\r\nuniform lowp vec2 uSize;\r\nuniform sampler2D uNormalSampler;\r\nuniform sampler2D uSampler;\r\nuniform float uRefractiveIndex;\r\nuniform float uDistance;\r\n\r\nvoid main()\r\n{\r\n  vec4 texCol=texture2D(uNormalSampler,vTextureCoord);\r\n  vec2 pos=(2.*texCol.rg-vec2(1.));\r\n  pos.x*=-1.;\r\n  vec3 refract=refract(vec3(0.,0.,1.),normalize(vec3(pos,-1.)),uRefractiveIndex);\r\n  refract*=(texCol.b*200.+uDistance)/refract.z;\r\n  vec4 texCol00=texture2D(uSampler,vTextureCoord+refract.xy/uSize);\r\n  gl_FragColor=texCol00;\r\n}\r\n"},,,,,,,,,,,,,,,,,,,,,,,,,,function(e,r,t){"use strict";t.r(r);var n=t(6),o=t.n(n),a=t(0),i=t(4),u=t(5),f=t(3),c=t.n(f),l=t(28),s=t.n(l),v=function(e,r,t){var n=Object(a.e)(e,r,t);return{program:n,attribLocations:{vertexPosition:a.b.attribFloat(e,n,"aVertexPosition",2),textureCoord:a.b.attribFloat(e,n,"aTextureCoord",2)},uniformLocations:{flipY:a.h.uniform1f(e,n,"uFlipY"),time:a.h.uniform1f(e,n,"uTime"),size:a.h.uniform2fv(e,n,"uSize")}}},d=function(e){return Object.assign(Object(a.g)(e,v,c.a,s.a),{draw:function(e,r){e.drawElements(e.TRIANGLE_STRIP,r,e.UNSIGNED_BYTE,0)}})},m=t(29),p=t.n(m),b=function(e,r,t){var n=Object(a.e)(e,r,t);return{program:n,attribLocations:{vertexPosition:a.b.attribFloat(e,n,"aVertexPosition",2),textureCoord:a.b.attribFloat(e,n,"aTextureCoord",2)},uniformLocations:{flipY:a.h.uniform1f(e,n,"uFlipY"),size:a.h.uniform2fv(e,n,"uSize"),sampler:a.h.uniformTexture(e,n,"uSampler",0),height:a.h.uniform1f(e,n,"uHeight")}}},x=function(e){return Object.assign(Object(a.g)(e,b,c.a,p.a),{draw:function(e,r){e.drawElements(e.TRIANGLE_STRIP,r,e.UNSIGNED_BYTE,0)}})},g=t(30),h=t.n(g),T=function(e,r,t){var n=Object(a.e)(e,r,t);return{program:n,attribLocations:{vertexPosition:a.b.attribFloat(e,n,"aVertexPosition",2),textureCoord:a.b.attribFloat(e,n,"aTextureCoord",2)},uniformLocations:{flipY:a.h.uniform1f(e,n,"uFlipY"),size:a.h.uniform2fv(e,n,"uSize"),normalSampler:a.h.uniformTexture(e,n,"uNormalSampler",0),sampler:a.h.uniformTexture(e,n,"uSampler",1),refractiveIndex:a.h.uniform1f(e,n,"uRefractiveIndex"),distance:a.h.uniform1f(e,n,"uDistance")}}},E=function(e){return Object.assign(Object(a.g)(e,T,c.a,h.a),{draw:function(e,r){e.drawElements(e.TRIANGLE_STRIP,r,e.UNSIGNED_BYTE,0)}})},S=t(22);function R(e){var r=[[0,0],[1,0],[1,1],[0,1]].flat(),t=Object(a.a)(e,r,2),n=[[0,0],[1,0],[1,1],[0,1]].flat(),o=Object(a.a)(e,n,2),i=[[2,0,1],[3,2,0]].flat();return{positionBufferData:t,textureCoordinatesBufferData:o,indicesBufferData:Object(a.d)(e,i)}}!function(){var e=document.querySelector("#glcanvas"),r=e.getContext("webgl",{alpha:!1});if(!r)return void alert("無法初始化WebGL。您的瀏覽器或機器可能不支持它。");var t={waveShader:d(r),normalShader:x(r),refractShader:E(r),viewShader:Object(S.a)(r)},n={face:R(r),view:R(r)},o=[Object(a.f)(r,"../img/image.7826b8fad510e7131700fc463cce2c7c.jpg")],f=[.5*r.canvas.width,.5*r.canvas.height];e.addEventListener("mousemove",(function(e){u.b.set(f,e.pageX,e.pageY)}));var c=[r.canvas.clientWidth,r.canvas.clientHeight],l={wave:Object(a.c)(r),normal:Object(a.c)(r),refract:Object(a.c)(r)},s=0;requestAnimationFrame((function e(a){var u=.001*(a-s);s=a,requestAnimationFrame(e),function(e,r,t,n,o){var a=o.now,u=o.framebufferTextures,f=o.mPos,c=o.size,l=t.face,s=r.waveShader;s.use(e),s.attribSet({vertexPosition:l.positionBufferData.buffer,textureCoord:l.textureCoordinatesBufferData.buffer}),s.uniformSet({size:c,flipY:1,time:a}),s.useTexture(e,u.wave),s.draw(e,l.indicesBufferData.length);var v=t.face,d=r.normalShader;d.use(e),d.attribSet({vertexPosition:v.positionBufferData.buffer,textureCoord:v.textureCoordinatesBufferData.buffer}),d.uniformSet({size:c,flipY:1,sampler:u.wave.texture,height:20}),d.useTexture(e,u.normal),d.draw(e,v.indicesBufferData.length);var m=t.face,p=r.refractShader;p.use(e),p.attribSet({vertexPosition:m.positionBufferData.buffer,textureCoord:m.textureCoordinatesBufferData.buffer}),p.uniformSet({size:c,flipY:1,sampler:n[0],normalSampler:u.normal.texture,refractiveIndex:1.33,distance:1e3}),p.useTexture(e,u.refract),p.draw(e,m.indicesBufferData.length);var b=i.a.div(f,c),x=t.view,g=r.viewShader;g.use(e),g.attribSet({vertexPosition:x.positionBufferData.buffer,textureCoord:x.textureCoordinatesBufferData.buffer}),g.uniformSet({flipY:-1}),g.useTexture(e);var h=[b[0],0,1,b[1]],T=[[h[0],h[1]],[h[2],h[1]],[h[2],h[3]],[h[0],h[3]]].flat();x.positionBufferData.set(T),x.textureCoordinatesBufferData.set(T),g.uniformSet({sampler:u.wave.texture}),g.draw(e,x.indicesBufferData.length);var E=[b[0],b[1],1,1],S=[[E[0],E[1]],[E[2],E[1]],[E[2],E[3]],[E[0],E[3]]].flat();x.positionBufferData.set(S),x.textureCoordinatesBufferData.set(S),g.uniformSet({sampler:u.normal.texture}),g.draw(e,x.indicesBufferData.length);var R=[0,0,b[0],1],y=[[R[0],R[1]],[R[2],R[1]],[R[2],R[3]],[R[0],R[3]]].flat();x.positionBufferData.set(y),x.textureCoordinatesBufferData.set(y),g.uniformSet({sampler:u.refract.texture}),g.draw(e,x.indicesBufferData.length)}(r,t,n,o,{now:a,delta:u,mPos:f,framebufferTextures:l,size:c})}))}(),function(){var e=document.getElementById("canvas").getContext("2d");e.lineWidth=1;e.strokeStyle="#ff0000",e.beginPath();for(var r=0;r<800;r++){var t=r/400*2*Math.PI+.5*Math.PI,n=[Math.cos(t),Math.sin(t)];i.b.scale(n,40);var a=u.a.addVector([r,100],n);0===r?e.moveTo.apply(e,o()(a)):e.lineTo.apply(e,o()(a))}e.stroke(),e.strokeStyle="#000000",e.beginPath();for(var f=0;f<800;f++){var c=f/400*2*Math.PI+.5*Math.PI,l=u.a.addVector([f,100],[0,80*Math.pow(Math.exp(2*Math.sin(c))/Math.exp(2),.75)-40]);0===f?e.moveTo.apply(e,o()(l)):e.lineTo.apply(e,o()(l))}e.stroke(),e.strokeStyle="#0000ff",e.beginPath(),e.moveTo(0,100),e.lineTo(800,100),e.stroke()}()}]);