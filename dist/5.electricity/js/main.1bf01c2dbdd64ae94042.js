!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=57)}([function(t,e,r){"use strict";r.d(e,"g",(function(){return v})),r.d(e,"e",(function(){return n})),r.d(e,"c",(function(){return c})),r.d(e,"a",(function(){return i})),r.d(e,"d",(function(){return a})),r.d(e,"f",(function(){return f})),r.d(e,"b",(function(){return h})),r.d(e,"h",(function(){return d}));var n=function(t,e,r){var n=o(t,t.VERTEX_SHADER,e),i=o(t,t.FRAGMENT_SHADER,r),a=t.createProgram();return t.attachShader(a,n),t.attachShader(a,i),t.linkProgram(a),t.getProgramParameter(a,t.LINK_STATUS)?a:(alert("無法初始化著色器程序: "+t.getProgramInfoLog(a)),null)},o=function(t,e,r){var n=t.createShader(e);return t.shaderSource(n,r),t.compileShader(n),t.getShaderParameter(n,t.COMPILE_STATUS)?n:(alert("編譯著色器時發生錯誤: "+t.getShaderInfoLog(n)),t.deleteShader(n),null)},i=function(t,e,r){var n,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.STATIC_DRAW,i=t.createBuffer(),a=0,u={buffer:i,get data(){return n},get length(){return n.length},set:function(e){n=new Float32Array(e),a=100*Math.ceil(n.length/r/100),t.bindBuffer(t.ARRAY_BUFFER,i),t.bufferData(t.ARRAY_BUFFER,a*r*4,o),t.bufferSubData(t.ARRAY_BUFFER,0,n)},add:function(e){var u=n.length,f=100*Math.floor(n.length/r/100);f>=a&&(a=f+100,t.bindBuffer(t.ARRAY_BUFFER,i),t.bufferData(t.ARRAY_BUFFER,a*r*4,o),t.bufferSubData(t.ARRAY_BUFFER,0,n));var l=new Float32Array(u+r);l.set(n),n=l,this.item(u/r,e)},item:function(e,o){var a=new Float32Array(o);n.set(a,e*r),t.bindBuffer(t.ARRAY_BUFFER,i),t.bufferSubData(t.ARRAY_BUFFER,e*r*4,a)},getItem:function(t){return Array.from(n.slice(t*r,(t+1)*r))}};return u.set(e),u},a=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.STATIC_DRAW,n=new Uint8Array(e),o=t.createBuffer();t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,o),t.bufferData(t.ELEMENT_ARRAY_BUFFER,n,r);var i={buffer:o,get data(){return n},get length(){return n.length}};return i},u=function(t){var e=t.createTexture();return t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),e},f=function(t,e){var r=u(t),n=new Image;return n.onload=function(){t.bindTexture(t.TEXTURE_2D,r),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,n)},n.src=e,r},l=function(t,e,r,n){t.bindFramebuffer(t.FRAMEBUFFER,e),null==r&&null==n&&t.viewport(0,0,r,n)},s=function(t,e){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];e?r?l(t,e.framebuffer,e.width,e.height):l(t,e.framebuffer):r?l(t,null,t.canvas.width,t.canvas.height):l(t,null)},c=function(t,e,r){var n={width:e||t.canvas.clientWidth,height:r||t.canvas.clientHeight},o=u(t);n.texture=o,t.texImage2D(t.TEXTURE_2D,0,t.RGBA,n.width,n.height,0,t.RGBA,t.UNSIGNED_BYTE,null);var i=t.createFramebuffer();return n.framebuffer=i,t.bindFramebuffer(t.FRAMEBUFFER,i),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,o,0),t.bindFramebuffer(t.FRAMEBUFFER,null),n},h={attribFloat:function(t,e,r,n){var o=t.getAttribLocation(e,r);return t.enableVertexAttribArray(o),function(e){t.bindBuffer(t.ARRAY_BUFFER,e),t.vertexAttribPointer(o,n,t.FLOAT,!1,0,0)}}},d={uniform1f:function(t,e,r){var n=t.getUniformLocation(e,r);return function(e){t.uniform1f(n,e)}},uniform2fv:function(t,e,r){var n=t.getUniformLocation(e,r);return function(e){t.uniform2fv(n,e)}},uniform3fv:function(t,e,r){var n=t.getUniformLocation(e,r);return function(e){t.uniform3fv(n,e)}},uniformTexture:function(t,e,r,n){var o=t.getUniformLocation(e,r);return function(e){t.activeTexture(t.TEXTURE0+n),t.bindTexture(t.TEXTURE_2D,e),t.uniform1i(o,n)}},uniform1i:function(t,e,r){var n=t.getUniformLocation(e,r);return function(e){t.uniform1i(n,e)}}},v=function(t,e,r,n,o){var i=e(t,r,n);return{programInfo:i,use:function(t){t.useProgram(i.program)},attribSet:function(t){for(var e in t)i.attribLocations[e]&&i.attribLocations[e](t[e])},uniformSet:function(t){for(var e in t)i.uniformLocations[e]&&i.uniformLocations[e](t[e])},useTexture:function(t,e){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];s(t,e),r&&(t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT))}}}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},function(t,e){t.exports="attribute vec2 aVertexPosition;\r\nattribute vec2 aTextureCoord;\r\nvarying highp vec2 vTextureCoord;\r\nuniform float uFlipY;\r\nvoid main(void){\r\n  vTextureCoord=aTextureCoord;\r\n  gl_Position=vec4((2.*aVertexPosition+vec2(-1.,-1.))*vec2(1.,uFlipY),0.,1.);\r\n}"},function(t,e,r){"use strict";r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return f}));var n=r(1),o=r.n(n),i=r(2),a=r.n(i),u=function(){function t(){o()(this,t)}return a()(t,null,[{key:"normalize",value:function(e){return t.length(e)?t.scale(e,1/t.length(e)):e}},{key:"rotate",value:function(t,e){var r=Math.cos(e),n=Math.sin(e);return[t[0]*r-t[1]*n,t[1]*r+t[0]*n]}},{key:"dot",value:function(t,e){return t[0]*e[0]+t[1]*e[1]}},{key:"cross",value:function(t,e){return t[0]*e[1]-t[1]*e[0]}},{key:"add",value:function(t,e){return[t[0]+e[0],t[1]+e[1]]}},{key:"sub",value:function(t,e){return[t[0]-e[0],t[1]-e[1]]}},{key:"projection",value:function(e,r){var n=t.dot(e,r)/t.dot(r,r);return[r[0]*n,r[1]*n]}},{key:"length",value:function(e){return Math.sqrt(t.dot(e,e))}},{key:"mul",value:function(t,e){return[t[0]*e[0],t[1]*e[1]]}},{key:"div",value:function(t,e){return[t[0]/e[0],t[1]/e[1]]}},{key:"scale",value:function(t,e){return[t[0]*e,t[1]*e]}},{key:"collisionCalc",value:function(e,r,n,o){return t.scale(t.add(t.scale(e,n-o),t.scale(r,2*o)),1/(n+o))}},{key:"getAngle",value:function(t){return Math.atan2(t[1],t[0])}}]),t}(),f=function(){function t(){o()(this,t)}return a()(t,null,[{key:"set",value:function(t,e,r){return t[0]=e,t[1]=r,t}},{key:"normalize",value:function(e){var r=u.length(e);return r&&t.scale(e,1/r),e}},{key:"add",value:function(t,e){return t[0]+=e[0],t[1]+=e[1],t}},{key:"sub",value:function(t,e){return t[0]-=e[0],t[1]-=e[1],t}},{key:"scale",value:function(t,e){return t[0]*=e,t[1]*=e,t}},{key:"rotate",value:function(t,e){var r=Math.cos(e),n=Math.sin(e),o=[t[0]*r-t[1]*n,t[1]*r+t[0]*n];return t[0]=o[0],t[1]=o[1],t}}]),t}()},function(t,e,r){"use strict";r.d(e,"a",(function(){return f})),r.d(e,"b",(function(){return l}));var n=r(1),o=r.n(n),i=r(2),a=r.n(i),u=r(4),f=function(){function t(){o()(this,t)}return a()(t,null,[{key:"toPosRate",value:function(t,e,r){return[t[0]*(1-r)+e[0]*r,t[1]*(1-r)+e[1]*r]}},{key:"cross",value:function(t,e,r){return(t[0]-e[0])*(r[1]-e[1])-(r[0]-e[0])*(t[1]-e[1])}},{key:"getCenter",value:function(t,e){return[.5*(t[0]+e[0]),.5*(t[1]+e[1])]}},{key:"getVector",value:function(t,e){return[e[0]-t[0],e[1]-t[1]]}},{key:"addVector",value:function(t,e){return[t[0]+e[0],t[1]+e[1]]}},{key:"distance",value:function(e,r){return u.a.length(t.getVector(e,r))}},{key:"getLine",value:function(e,r){return{point:e,vector:t.getVector(e,r)}}}]),t}(),l=function(){function t(){o()(this,t)}return a()(t,null,[{key:"set",value:function(t,e,r){return t[0]=e,t[1]=r,t}},{key:"addVector",value:function(t,e){return t[0]+=e[0],t[1]+=e[1],t}}]),t}()},function(t,e,r){var n=r(17),o=r(18),i=r(19),a=r(20);t.exports=function(t){return n(t)||o(t)||i(t)||a()}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},function(t,e,r){"use strict";var n=r(0),o=r(3),i=r.n(o),a=r(9),u=r.n(a),f=function(t,e,r){var o=Object(n.e)(t,e,r);return{program:o,attribLocations:{vertexPosition:n.b.attribFloat(t,o,"aVertexPosition",2),textureCoord:n.b.attribFloat(t,o,"aTextureCoord",2)},uniformLocations:{flipY:n.h.uniform1f(t,o,"uFlipY"),sampler:n.h.uniformTexture(t,o,"uSampler",0),lineWidthSampler:n.h.uniformTexture(t,o,"uLineWidthSampler",1),size:n.h.uniform2fv(t,o,"uSize")}}};e.a=function(t){return Object.assign(Object(n.g)(t,f,i.a,u.a),{draw:function(t,e){t.drawElements(t.TRIANGLE_STRIP,e,t.UNSIGNED_BYTE,0)}})}},function(t,e){t.exports="precision mediump float;\r\nvarying vec2 vTextureCoord;\r\nuniform sampler2D uSampler;\r\nuniform sampler2D uLineWidthSampler;\r\nuniform lowp vec2 uSize;\r\nconst float pi=3.14159265359;\r\nvoid main()\r\n{\r\n  vec4 gaussCol=vec4(0.,0.,0.,0.);\r\n  float sum=0.;\r\n  const int lineWidth=5;\r\n  bool b=false;\r\n  \r\n  gaussCol+=texture2D(uSampler,vTextureCoord);\r\n  sum+=texture2D(uLineWidthSampler,vTextureCoord).r;\r\n  for(int l=0;l<8;l++)\r\n  {\r\n    float angle=2.*pi*float(l)/8.;\r\n    vec2 pos=vec2(cos(angle),sin(angle));\r\n    for(int k=1;k<=lineWidth;k++)\r\n    {\r\n      float r=float(k);\r\n      vec2 coord=vTextureCoord+r*pos/uSize;\r\n      vec4 texCol0=texture2D(uLineWidthSampler,coord);\r\n      if(texCol0.r>0.){\r\n        float rr=float(lineWidth)*texCol0.r;\r\n        if(r<rr){\r\n          vec4 texCol1=texture2D(uSampler,coord);\r\n          float rate=r/rr;\r\n          gaussCol+=vec4(texCol1.rgb*rate,rate);\r\n          sum+=texCol0.r*smoothstep(1.,0.,rate);\r\n        }\r\n      }\r\n    }\r\n  }\r\n  \r\n  /*for(int j=-lineWidth;j<=lineWidth;j++)\r\n  {\r\n    for(int i=-lineWidth;i<=lineWidth;i++)\r\n    {\r\n      vec2 pos=vec2(i,j);\r\n      vec2 coord=vTextureCoord+pos/uSize;\r\n      vec4 texCol0=texture2D(uLineWidthSampler,coord);\r\n      \r\n      if(texCol0.r>0.){\r\n        float r=length(pos);\r\n        float rr=float(lineWidth)*texCol0.r;\r\n        \r\n        if(r<rr){\r\n          vec4 texCol1=texture2D(uSampler,coord);\r\n          float rate=r/rr;\r\n          gaussCol+=vec4(texCol1.rgb,rate);\r\n          sum+=texCol0.r*smoothstep(1.,0.,rate);\r\n        }\r\n      }\r\n    }\r\n  }*/\r\n  /*if(b||sum>1.){\r\n    sum=1.;\r\n  }*/\r\n  gaussCol.rgb/=gaussCol.w;\r\n  \r\n  gl_FragColor=vec4(gaussCol.rgb*sum,sum);\r\n  \r\n}"},function(t,e,r){"use strict";var n=r(0),o=r(3),i=r.n(o),a=r(11),u=r.n(a),f=function(t,e,r){var o=Object(n.e)(t,e,r);return{program:o,attribLocations:{vertexPosition:n.b.attribFloat(t,o,"aVertexPosition",2),textureCoord:n.b.attribFloat(t,o,"aTextureCoord",2)},uniformLocations:{flipY:n.h.uniform1f(t,o,"uFlipY"),sampler:n.h.uniformTexture(t,o,"uSampler",0),size:n.h.uniform2fv(t,o,"uSize"),dir:n.h.uniform2fv(t,o,"uDir"),width:n.h.uniform1f(t,o,"uWidth"),power:n.h.uniform1f(t,o,"uPower")}}};e.a=function(t){return Object.assign(Object(n.g)(t,f,i.a,u.a),{draw:function(t,e){t.drawElements(t.TRIANGLE_STRIP,e,t.UNSIGNED_BYTE,0)}})}},function(t,e){t.exports="precision mediump float;\r\nvarying vec2 vTextureCoord;\r\nuniform sampler2D uSampler;\r\nuniform lowp vec2 uSize;\r\nuniform vec2 uDir;\r\nuniform float uWidth;\r\nuniform float uPower;\r\nconst float pi=3.14159265359;\r\nvoid main()\r\n{\r\n  vec4 color=texture2D(uSampler,vTextureCoord);\r\n  const int N=10;\r\n  float ii=max(uWidth,float(N))/float(N);\r\n  for(int i=1;i<=N;i++){\r\n    if(uWidth<float(N)&&float(i)>uWidth){\r\n      break;\r\n    }\r\n    float val=sin(.5*(float(i)/float(N))*2.*pi+.5*pi);\r\n    float rate=pow(exp(2.*val)/exp(2.),.75);\r\n    color+=rate*texture2D(uSampler,vTextureCoord+float(i)*ii*uDir/uSize);\r\n    color+=rate*texture2D(uSampler,vTextureCoord-float(i)*ii*uDir/uSize);\r\n  }\r\n  //color.rgb/=color.a;\r\n  gl_FragColor=uPower*color;\r\n}\r\n"},function(t,e,r){"use strict";var n=r(0),o=r(3),i=r.n(o),a=r(13),u=r.n(a),f=function(t,e,r){var o=Object(n.e)(t,e,r);return{program:o,attribLocations:{vertexPosition:n.b.attribFloat(t,o,"aVertexPosition",2),textureCoord:n.b.attribFloat(t,o,"aTextureCoord",2)},uniformLocations:{flipY:n.h.uniform1f(t,o,"uFlipY"),samplerA:n.h.uniformTexture(t,o,"uSamplerA",0),samplerB:n.h.uniformTexture(t,o,"uSamplerB",1)}}};e.a=function(t){return Object.assign(Object(n.g)(t,f,i.a,u.a),{draw:function(t,e){t.drawElements(t.TRIANGLE_STRIP,e,t.UNSIGNED_BYTE,0)}})}},function(t,e){t.exports="precision mediump float;\r\nvarying vec2 vTextureCoord;\r\nuniform sampler2D uSamplerA;\r\nuniform sampler2D uSamplerB;\r\nvoid main()\r\n{\r\n  gl_FragColor=texture2D(uSamplerA,vTextureCoord)+texture2D(uSamplerB,vTextureCoord);\r\n}\r\n"},function(t,e,r){"use strict";var n=r(0),o=r(15),i=r.n(o),a=r(16),u=r.n(a),f=function(t,e,r){var o=Object(n.e)(t,e,r);return{program:o,attribLocations:{vertexPosition:n.b.attribFloat(t,o,"aVertexPosition",2),vertexColor:n.b.attribFloat(t,o,"aVertexColor",4)},uniformLocations:{flipY:n.h.uniform1f(t,o,"uFlipY"),size:n.h.uniform2fv(t,o,"uSize")}}};e.a=function(t){return Object.assign(Object(n.g)(t,f,i.a,u.a),{draw:function(t,e,r){t.drawArrays(e,0,r)}})}},function(t,e){t.exports="attribute vec2 aVertexPosition;\r\nattribute vec4 aVertexColor;\r\nuniform float uFlipY;\r\nuniform vec2 uSize;\r\nvarying lowp vec4 vColor;\r\nvoid main(void){\r\n  vColor=aVertexColor;\r\n  gl_Position=vec4((2.*aVertexPosition/uSize+vec2(-1.,-1.))*vec2(1.,uFlipY),0.,1.);\r\n  //gl_PointSize=10.;\r\n}"},function(t,e){t.exports="precision mediump float;\r\nvarying lowp vec4 vColor;\r\n\r\nvoid main(void){\r\n  gl_FragColor=vColor;\r\n}"},function(t,e,r){var n=r(7);t.exports=function(t){if(Array.isArray(t))return n(t)}},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},function(t,e,r){var n=r(7);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(6),o=r.n(n),i=r(1),a=r.n(i),u=r(2),f=r.n(u),l=r(4),s=r(5),c=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[0,0],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:25,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:3,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:.94;a()(this,t),this.options={pos:e,velocity:r,direct:n,lifespan:o,thickness:i,friction:u,gravity:[0,.981],colorStart:[1,0,0,1],colorEnd:[1,1,0,1]},this.init()}return f()(t,[{key:"init",value:function(){this.prevPos=this.options.pos.slice(),this.pos=this.options.pos.slice(),this.velocityPos=[Math.cos(this.options.direct)*this.options.velocity,Math.sin(this.options.direct)*this.options.velocity],this.lifespan=Math.round(this.options.lifespan),this.maxlife=this.lifespan,this.swing=Math.random()}},{key:"update",value:function(){s.b.set.apply(s.b,[this.prevPos].concat(o()(this.pos))),s.b.addVector(this.pos,this.velocityPos);var t=[0,Math.sin(2*this.swing*Math.PI)];l.b.rotate(t,l.a.getAngle(this.velocityPos)),l.b.scale(t,this.lifespan/this.maxlife),l.b.add(this.velocityPos,t),l.b.add(this.velocityPos,this.options.gravity),l.b.scale(this.velocityPos,this.options.friction),this.swing+=.07,this.swing%=1,this.lifespan>0&&this.lifespan--}},{key:"setColor",value:function(t,e){e&&(this.options.colorStart=e),t&&(this.options.colorEnd=t)}},{key:"positions",get:function(){return[].concat(o()(this.prevPos),o()(this.pos))}},{key:"colors",get:function(){return[].concat(o()(this.options.colorEnd),o()(this.options.colorStart))}},{key:"lineWidths",get:function(){var t=this.lifespan/this.maxlife;return[0,0,0,0].concat([t*Math.min(this.options.thickness/5,1),0,0,0])}}]),t}()},,,,function(t,e){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(e)}t.exports=r},function(t,e,r){var n=r(52);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},function(t,e,r){var n=r(53),o=r(54);t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?o(t):e}},,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},function(t,e){function r(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=r=function(t){return typeof t}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(e)}t.exports=r},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},,,function(t,e,r){"use strict";r.r(e);for(var n=r(6),o=r.n(n),i=r(21),a=r(26),u=r.n(a),f=r(27),l=r.n(f),s=r(25),c=r.n(s),h=r(1),d=r.n(h),v=r(2),m=r.n(v),p=r(4),g=r(5),b=new Array(200),S=0,x=b.length;S<x;S++)b[S]=1-2*Math.random();function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=c()(t);if(e){var o=c()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return l()(this,r)}}var T=function(t){u()(r,t);var e=y(r);function r(t,n,o,i,a,u){var f;return d()(this,r),(f=e.call(this,t)).setSegmentAngleParameter(n,o),f.setSegmentPosParameter(i,a,u),f.init(),f}return m()(r,[{key:"setSegmentAngleParameter",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.3;this.angle_swing=t,this.angle_limit=e}},{key:"setSegmentPosParameter",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:80,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:40;this.data_deform=t,this.data_wave=e,this.data_limit=r}},{key:"init",value:function(){this.initSegmentAngle(this.angle_swing,this.angle_limit,b),this.initSegmentPos(),this.segmentShow=this.segmentPos}},{key:"update",value:function(){this.swingSegmentAngle(this.angle_swing,this.angle_limit,b),this.initSegmentPos(),this.deformSegmentPos(this.segmentAngle,this.data_deform),this.waveSegmentPos(this.segmentAngle,this.data_wave),this.limitSegmentPos(this.data_limit)}},{key:"flow",value:function(t,e){this.segmentShow=this.setPosToLineData(this.segmentPos,t,e)}},{key:"toString",value:function(){}}]),r}(function(){function t(e){d()(this,t),this.segmentNum=e,this.segmentAngle=this.createSegmentAngle(e),this.segmentPos=this.createSegmentPos(e+1)}return m()(t,[{key:"createSegmentAngle",value:function(t){for(var e=new Array(t),r=0;r<t;r++)e[r]=0;return e}},{key:"initSegmentAngle",value:function(t,e,r){for(var n=this.segmentAngle,o=Math.floor(Math.random()*r.length),i=0,a=0,u=n.length;a<u;a++)i=.2*i+t*r[(a+o)%r.length],n[a]=i;return this.limitSegmentAngle(e),this.balanceSegmentAngle(),this}},{key:"swingSegmentAngle",value:function(t,e,r){for(var n,o=this.segmentAngle,i=Math.floor(Math.random()*r.length),a=o.length-1;a>=0;a--)n=a-1>=0?o[a-1]:t*r[(a+i-1+r.length)%r.length],o[a]=.5*o[a]+.5*n+t*r[(a+i)%r.length];this.limitSegmentAngle(e),this.balanceSegmentAngle()}},{key:"limitSegmentAngle",value:function(t){for(var e,r,n,o=this.segmentAngle,i=0,a=o.length;i<a;i++)o[i]=(e=o[i],n=t,e<=(r=-t)?r:e>=n?n:e)}},{key:"balanceSegmentAngle",value:function(){for(var t=this.segmentAngle,e=t.reduce((function(t,e){return t+e}),0),r=t.length,n=-e/r,o=0;o<r;o++)t[o]+=n}},{key:"createSegmentPos",value:function(t){for(var e=new Array(t+1),r=0;r<=t;r++)e[r]=[0,0];return e}},{key:"initSegmentPos",value:function(){for(var t=this.segmentPos,e=0,r=t.length;e<r;e++)t[e][0]=0,t[e][1]=0;return this}},{key:"deformSegmentPos",value:function(t,e){var r=this.segmentPos;if(0!==e)for(var n=t.length,o=0,i=[0,0],a=0,u=[0,0],f=0,l=0;l<=n;l++)f=e*(1-l/n),l>0&&(o+=t[l-1],i[0]+=Math.cos(o)-1,i[1]+=Math.sin(o)),r[l][0]+=i[0]*f,r[l][1]+=i[1]*f,n+1-l<n&&(a-=t[n+1-l],u[0]-=Math.cos(a)-1,u[1]-=Math.sin(a)),r[n-l][0]+=u[0]*f,r[n-l][1]+=u[1]*f;return this}},{key:"waveSegmentPos",value:function(t,e){var r=this.segmentPos;if(0!==e)for(var n=t.length,o=0,i=0,a=0,u=0;u<=n;u++)a=u/n,a=Math.sin(a*Math.PI)*e*(1-a),u>0&&(o+=Math.sin(.2*t[u-1])/Math.cos(t[u-1])),r[u][1]+=o*a,n+1-u<n&&(i-=Math.sin(.2*t[n+1-u])/Math.cos(t[n+1-u])),r[n-u][1]+=i*a;return this}},{key:"limitSegmentPos",value:function(t){for(var e=this.segmentPos,r=e.length-1,n=-1/0,o=1/0,i=0;i<=r;i++)e[i][1]>n?n=e[i][1]:e[i][1]<o&&(o=e[i][1]);var a=n-o;if(a>t)for(var u=0;u<=r;u++)e[u][1]*=t/a;return this}},{key:"setPosToLineData",value:function(t,e,r){for(var n=new Array(t.length),o=Math.atan2(r[1]-e[1],r[0]-e[0]),i=0,a=t.length;i<a;i++)n[i]=g.a.addVector(p.a.rotate(t[i],o),g.a.toPosRate(e,r,i/(a-1)));return n}}]),t}()),E=r(0),A=r(8),P=r(10),D=r(12),R=r(14);function _(t){var e=[[0,0],[1,0],[1,1],[0,1]].flat(),r=Object(E.a)(t,e,2),n=[[0,0],[1,0],[1,1],[0,1]].flat(),o=Object(E.a)(t,n,2),i=[[2,0,1],[3,2,0]].flat();return{positionBufferData:r,textureCoordinatesBufferData:o,indicesBufferData:Object(E.d)(t,i)}}function C(t){return{positionBufferData:Object(E.a)(t,[],2,t.DYNAMIC_DRAW),colorBufferData:Object(E.a)(t,[],4,t.DYNAMIC_DRAW),lineWidthBufferData:Object(E.a)(t,[],4,t.DYNAMIC_DRAW)}}!function(){var t=document.querySelector("#glcanvas"),e=t.getContext("webgl",{alpha:!1});if(!e)return void alert("無法初始化WebGL。您的瀏覽器或機器可能不支持它。");var r={lineShader:Object(R.a)(e),lineWidthShader:Object(A.a)(e),blurShader:Object(P.a)(e),addShader:Object(D.a)(e)},n={face:_(e),line:C(e)},a=[0,0];t.addEventListener("mousemove",(function(t){g.b.set(a,t.pageX,t.pageY)}));var u=[e.canvas.clientWidth,e.canvas.clientHeight],f={lineColor:Object(E.c)(e),lineWidth:Object(E.c)(e),line:Object(E.c)(e),blurX:Object(E.c)(e),blurY:Object(E.c)(e)},l=[],s=0,c=[];c.push({data:new T(100,.05,.15),posStart:[200,100],posEnd:[0,0]}),c.push({data:new T(100,.05,.15),posStart:[600,100],posEnd:[0,0]}),c.push({data:new T(100,.05,.15),posStart:[600,500],posEnd:[0,0]}),c.push({data:new T(100,.05,.15),posStart:[200,500],posEnd:[0,0]}),requestAnimationFrame((function t(h){var d=.001*(h-s);s=h,requestAnimationFrame(t),function(t,e,r,n,a){var u=a.delta,f=a.mPos,l=a.framebufferTextures,s=a.electricitys,c=a.particles,h=a.size,d=r.line,v=e.lineShader;v.use(t),v.uniformSet({size:h,flipY:1}),v.attribSet({vertexPosition:d.positionBufferData.buffer}),c.forEach((function(t,e,r){t.update(u),t.lifespan<=0&&r.splice(e,1)}));var m=c.flatMap((function(t){return t.positions})),p=c.flatMap((function(t){return t.colors})),b=c.flatMap((function(t){return t.lineWidths}));r.line.positionBufferData.set(m),r.line.colorBufferData.set(p),r.line.lineWidthBufferData.set(b),v.attribSet({vertexColor:d.colorBufferData.buffer}),v.useTexture(t,l.lineColor),v.draw(t,t.LINES,d.positionBufferData.data.length/2),v.attribSet({vertexColor:d.lineWidthBufferData.buffer}),v.useTexture(t,l.lineWidth),v.draw(t,t.LINES,d.positionBufferData.data.length/2),s.forEach((function(e,n){g.b.set.apply(g.b,[e.posEnd].concat(o()(f)));var a=g.a.distance(e.posStart,e.posEnd);if(a<400){if(Math.random()>.7){var u=new i.a(e.posStart,2+14*Math.random(),2*Math.random()*Math.PI,25+25*Math.random(),2+3*Math.random());u.setColor([.25,1,.75,1],[.05,1,1,1]),c.push(u)}Math.random()>.95&&e.data.init();var s=function(t,e,r,n){t.data_deform=n,t.data_wave=t.data_limit*n,t.update(),t.flow(e,r);var o=t.segmentShow.flat(),i=t.segmentShow.flatMap((function(){return[.25,1,1,1]})),a=t.segmentShow.flatMap((function(t,e,r){return[.3+.2*(1-Math.abs(e-.5*(r.length-1))/(.5*(r.length-1))),0,0,0]}));return{positions:o,colors:i,lineWidths:a}}(e.data,e.posStart,e.posEnd,a/e.data.segmentNum);s.lineWidths.forEach((function(t,e,r){var n=1-Math.pow(Math.min(a/400,1),5);e%4==0&&(r[e]*=.6+.4*n)})),r.line.positionBufferData.set(s.positions),r.line.colorBufferData.set(s.colors),r.line.lineWidthBufferData.set(s.lineWidths)}else r.line.positionBufferData.set([]),r.line.colorBufferData.set([]),r.line.lineWidthBufferData.set([]);v.attribSet({vertexColor:d.colorBufferData.buffer}),v.useTexture(t,l.lineColor,!1),v.draw(t,t.LINE_STRIP,d.positionBufferData.data.length/2),v.attribSet({vertexColor:d.lineWidthBufferData.buffer}),v.useTexture(t,l.lineWidth,!1),v.draw(t,t.LINE_STRIP,d.positionBufferData.data.length/2)}));var S=r.face,x=e.lineWidthShader;x.use(t),x.attribSet({vertexPosition:S.positionBufferData.buffer,textureCoord:S.textureCoordinatesBufferData.buffer}),x.uniformSet({size:h,flipY:1,sampler:l.lineColor.texture,lineWidthSampler:l.lineWidth.texture}),x.useTexture(t,l.line),x.draw(t,S.indicesBufferData.length);var y=r.face,T=e.blurShader;T.use(t),T.attribSet({vertexPosition:y.positionBufferData.buffer,textureCoord:y.textureCoordinatesBufferData.buffer}),T.uniformSet({size:h,flipY:1,sampler:l.line.texture,width:10,power:.125,dir:[1,0]}),T.useTexture(t,l.blurX),T.draw(t,y.indicesBufferData.length),T.uniformSet({sampler:l.blurX.texture,dir:[0,1]}),T.useTexture(t,l.blurY),T.draw(t,y.indicesBufferData.length);var E=r.face,A=e.addShader;A.use(t),A.attribSet({vertexPosition:E.positionBufferData.buffer,textureCoord:E.textureCoordinatesBufferData.buffer}),A.uniformSet({flipY:-1,samplerA:l.line.texture,samplerB:l.blurY.texture}),A.useTexture(t),A.draw(t,E.indicesBufferData.length)}(e,r,n,0,{delta:d,mPos:a,framebufferTextures:f,electricitys:c,particles:l,size:u})}))}()}]);