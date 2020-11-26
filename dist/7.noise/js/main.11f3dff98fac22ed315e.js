!function(r){var n={};function e(o){if(n[o])return n[o].exports;var t=n[o]={i:o,l:!1,exports:{}};return r[o].call(t.exports,t,t.exports,e),t.l=!0,t.exports}e.m=r,e.c=n,e.d=function(r,n,o){e.o(r,n)||Object.defineProperty(r,n,{enumerable:!0,get:o})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,n){if(1&n&&(r=e(r)),8&n)return r;if(4&n&&"object"==typeof r&&r&&r.__esModule)return r;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:r}),2&n&&"string"!=typeof r)for(var t in r)e.d(o,t,function(n){return r[n]}.bind(null,t));return o},e.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(n,"a",n),n},e.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},e.p="",e(e.s=61)}({0:function(r,n,e){"use strict";e.d(n,"h",(function(){return m})),e.d(n,"f",(function(){return o})),e.d(n,"c",(function(){return v})),e.d(n,"a",(function(){return i})),e.d(n,"d",(function(){return a})),e.d(n,"g",(function(){return u})),e.d(n,"b",(function(){return s})),e.d(n,"i",(function(){return p})),e.d(n,"e",(function(){return d})),e.d(n,"j",(function(){return _}));var o=function(r,n,e){var o=t(r,r.VERTEX_SHADER,n),i=t(r,r.FRAGMENT_SHADER,e),a=r.createProgram();return r.attachShader(a,o),r.attachShader(a,i),r.linkProgram(a),r.getProgramParameter(a,r.LINK_STATUS)?a:(alert("無法初始化著色器程序: "+r.getProgramInfoLog(a)),null)},t=function(r,n,e){var o=r.createShader(n);return r.shaderSource(o,e),r.compileShader(o),r.getShaderParameter(o,r.COMPILE_STATUS)?o:(alert("編譯著色器時發生錯誤: "+r.getShaderInfoLog(o)),r.deleteShader(o),null)},i=function(r,n,e){var o,t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Float32Array,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r.STATIC_DRAW,a=r.createBuffer(),f=0,u={buffer:a,get data(){return o},get length(){return o.length},set:function(n){o=new t(n),f=100*Math.ceil(o.length/e/100),r.bindBuffer(r.ARRAY_BUFFER,a),r.bufferData(r.ARRAY_BUFFER,f*e*4,i),r.bufferSubData(r.ARRAY_BUFFER,0,o)},add:function(n){var u=o.length,c=100*Math.floor(o.length/e/100);c>=f&&(f=c+100,r.bindBuffer(r.ARRAY_BUFFER,a),r.bufferData(r.ARRAY_BUFFER,f*e*4,i),r.bufferSubData(r.ARRAY_BUFFER,0,o));var l=new t(u+e);l.set(o),o=l,this.item(u/e,n)},item:function(n,i){var f=new t(i);o.set(f,n*e),r.bindBuffer(r.ARRAY_BUFFER,a),r.bufferSubData(r.ARRAY_BUFFER,n*e*4,f)},getItem:function(r){return Array.from(o.slice(r*e,(r+1)*e))}};return u.set(n),u},a=function(r,n){var e,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Uint8Array,t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r.STATIC_DRAW,i=r.createBuffer(),a=0,f=3,u={buffer:i,get data(){return e},get length(){return e.length},set:function(n){e=new o(n),a=100*Math.ceil(e.length/f/100),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i),r.bufferData(r.ELEMENT_ARRAY_BUFFER,a*f*4,t),r.bufferSubData(r.ELEMENT_ARRAY_BUFFER,0,e)},add:function(n){var u=e.length,c=100*Math.floor(e.length/f/100);c>=a&&(a=c+100,r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i),r.bufferData(r.ELEMENT_ARRAY_BUFFER,a*f*4,t),r.bufferSubData(r.ELEMENT_ARRAY_BUFFER,0,e));var l=new o(u+f);l.set(e),e=l,this.item(u/f,n)},item:function(n,t){var a=new o(t);e.set(a,n*f),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i),r.bufferSubData(r.ELEMENT_ARRAY_BUFFER,n*f*4,a)},getItem:function(r){return Array.from(e.slice(r*f,(r+1)*f))}};return u.set(n),u},f=function(r){var n=r.createTexture();return r.bindTexture(r.TEXTURE_2D,n),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),n},u=function(r,n){var e=f(r),o=new Image;return o.onload=function(){e.width=o.width,e.height=o.height,r.bindTexture(r.TEXTURE_2D,e),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,o)},o.src=n,e},c=function(r,n,e,o){r.bindFramebuffer(r.FRAMEBUFFER,n),void 0!==e&&void 0!==o&&r.viewport(0,0,e,o)},l=function(r,n){var e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];n?e?c(r,n.framebuffer,n.width,n.height):c(r,n.framebuffer):e?c(r,null,r.canvas.width,r.canvas.height):c(r,null)},v=function(r,n,e){var o={width:n||r.canvas.clientWidth,height:e||r.canvas.clientHeight},t=f(r);o.texture=t,r.texImage2D(r.TEXTURE_2D,0,r.RGBA,o.width,o.height,0,r.RGBA,r.UNSIGNED_BYTE,null);var i=r.createFramebuffer();return o.framebuffer=i,r.bindFramebuffer(r.FRAMEBUFFER,i),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,t,0),r.bindFramebuffer(r.FRAMEBUFFER,null),o},s={attribFloat:function(r,n,e,o){var t=r.getAttribLocation(n,e);return r.enableVertexAttribArray(t),function(n){r.bindBuffer(r.ARRAY_BUFFER,n),r.vertexAttribPointer(t,o,r.FLOAT,!1,0,0)}}},p={uniform1f:function(r,n,e){var o=r.getUniformLocation(n,e);return function(n){r.uniform1f(o,n)}},uniform2fv:function(r,n,e){var o=r.getUniformLocation(n,e);return function(n){r.uniform2fv(o,n)}},uniform3fv:function(r,n,e){var o=r.getUniformLocation(n,e);return function(n){r.uniform3fv(o,n)}},uniformTexture:function(r,n,e,o){var t=r.getUniformLocation(n,e);return function(n){r.activeTexture(r.TEXTURE0+o),r.bindTexture(r.TEXTURE_2D,n),r.uniform1i(t,o)}},uniform1i:function(r,n,e){var o=r.getUniformLocation(n,e);return function(n){r.uniform1i(o,n)}},uniformMatrix4fv:function(r,n,e){var o=r.getUniformLocation(n,e);return function(n){r.uniformMatrix4fv(o,!1,n)}}},m=function(r,n,e,o,t){var i=n(r,e,o);return{programInfo:i,use:function(){r.useProgram(i.program)},attribSet:function(r){for(var n in r)i.attribLocations[n]&&i.attribLocations[n](r[n])},uniformSet:function(r){for(var n in r)i.uniformLocations[n]&&i.uniformLocations[n](r[n])},elementSet:function(n){r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,n)}}},d=function(r){return[[r[0],r[1]],[r[2],r[1]],[r[2],r[3]],[r[0],r[3]]].flat()},b=function(r){r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT)},_=function(r,n){var e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];l(r,n,o),e&&b(r)}},1:function(r,n,e){"use strict";e.d(n,"a",(function(){return u})),e.d(n,"b",(function(){return c}));var o=e(3),t=e.n(o),i=e(4),a=e.n(i),f=e(2),u=function(){function r(){t()(this,r)}return a()(r,null,[{key:"normalize",value:function(n){return r.length(n)?r.scale(n,1/r.length(n)):n}},{key:"rotate",value:function(r,n){var e=Math.cos(n),o=Math.sin(n);return[r[0]*e-r[1]*o,r[1]*e+r[0]*o]}},{key:"dot",value:function(r,n){return r[0]*n[0]+r[1]*n[1]}},{key:"cross",value:function(r,n){return r[0]*n[1]-r[1]*n[0]}},{key:"add",value:function(r,n){return[r[0]+n[0],r[1]+n[1]]}},{key:"sub",value:function(r,n){return[r[0]-n[0],r[1]-n[1]]}},{key:"projection",value:function(n,e){var o=r.dot(n,e)/r.dot(e,e);return[e[0]*o,e[1]*o]}},{key:"length",value:function(n){return Math.sqrt(r.dot(n,n))}},{key:"mul",value:function(r,n){return[r[0]*n[0],r[1]*n[1]]}},{key:"div",value:function(r,n){return[r[0]/n[0],r[1]/n[1]]}},{key:"scale",value:function(r,n){return[r[0]*n,r[1]*n]}},{key:"collisionCalc",value:function(n,e,o,t){return r.scale(r.add(r.scale(n,o-t),r.scale(e,2*t)),1/(o+t))}},{key:"getAngle",value:function(r){return Math.atan2(r[1],r[0])}},{key:"floor",value:function(r){return[Math.floor(r[0]),Math.floor(r[1])]}},{key:"fract",value:function(r){return[f.a.fract(r[0]),f.a.fract(r[1])]}},{key:"sin",value:function(r){return[Math.sin(r[0]),Math.sin(r[1])]}},{key:"cos",value:function(r){return[Math.cos(r[0]),Math.cos(r[1])]}},{key:"distance",value:function(n,e){return r.length(r.sub(e,n))}},{key:"mix",value:function(r,n,e){return[f.a.mix(r[0],n[0],e),f.a.mix(r[1],n[1],e)]}},{key:"abs",value:function(r){return[Math.abs(r[0]),Math.abs(r[1])]}},{key:"getLine",value:function(n,e){return{pos:n,dir:r.sub(e,n)}}}]),r}(),c=function(){function r(){t()(this,r)}return a()(r,null,[{key:"set",value:function(r,n,e){return r[0]=n,r[1]=e,r}},{key:"normalize",value:function(n){var e=u.length(n);return e&&r.scale(n,1/e),n}},{key:"add",value:function(r,n){return r[0]+=n[0],r[1]+=n[1],r}},{key:"sub",value:function(r,n){return r[0]-=n[0],r[1]-=n[1],r}},{key:"scale",value:function(r,n){return r[0]*=n,r[1]*=n,r}},{key:"rotate",value:function(r,n){var e=Math.cos(n),o=Math.sin(n),t=[r[0]*e-r[1]*o,r[1]*e+r[0]*o];return r[0]=t[0],r[1]=t[1],r}}]),r}()},2:function(r,n,e){"use strict";e.d(n,"a",(function(){return f}));var o=e(3),t=e.n(o),i=e(4),a=e.n(i),f=function(){function r(){t()(this,r)}return a()(r,null,[{key:"mix",value:function(r,n,e){return r*(1-e)+n*e}},{key:"fract",value:function(r){return(r%=1)<0?r+1:r}}]),r}()},23:function(r,n,e){"use strict";var o=e(0),t=e(5),i=e.n(t),a=e(24),f=e.n(a),u=function(r,n,e){var t=Object(o.f)(r,n,e);return{program:t,attribLocations:{vertexPosition:o.b.attribFloat(r,t,"aVertexPosition",2),textureCoord:o.b.attribFloat(r,t,"aTextureCoord",2)},uniformLocations:{flipY:o.i.uniform1f(r,t,"uFlipY"),sampler:o.i.uniformTexture(r,t,"uSampler",0)}}};n.a=function(r){return Object.assign(Object(o.h)(r,u,i.a,f.a),{draw:function(n){r.drawElements(r.TRIANGLES,n,r.UNSIGNED_BYTE,0)}})}},24:function(r,n){r.exports="precision mediump float;\r\nvarying vec2 vTextureCoord;\r\nuniform sampler2D uSampler;\r\nvoid main()\r\n{\r\n  gl_FragColor=texture2D(uSampler,vTextureCoord);\r\n}\r\n"},3:function(r,n){r.exports=function(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}},39:function(r,n){r.exports="precision mediump float;\r\nvarying vec2 vTextureCoord;\r\nuniform lowp vec2 uSize;\r\nuniform int uType;\r\nuniform vec2 uGrid;\r\nuniform vec2 uPos;\r\nuniform vec2 uLoop;\r\n//const float pi=3.14159265359;\r\nconst int OCTAVE_NUM=3;\r\n\r\nvec2 random2(vec2 p,vec2 loop){\r\n  if(loop.x!=0.){\r\n    p.x=mod(p.x,loop.x);\r\n  }\r\n  if(loop.y!=0.){\r\n    p.y=mod(p.y,loop.y);\r\n  }\r\n  vec2 f=vec2(\r\n    dot(p,vec2(127.1,311.7)),\r\n    dot(p,vec2(269.5,183.3))\r\n  );\r\n  return-1.+2.*fract(sin(f)*43758.5453123);\r\n}\r\n\r\nfloat noise_perlin(vec2 p,vec2 loop){\r\n  vec2 i=floor(p);\r\n  vec2 f=fract(p);\r\n  float a=dot(random2(i,loop),f);\r\n  float b=dot(random2(i+vec2(1.,0.),loop),f-vec2(1.,0.));\r\n  float c=dot(random2(i+vec2(0.,1.),loop),f-vec2(0.,1.));\r\n  float d=dot(random2(i+vec2(1.,1.),loop),f-vec2(1.,1.));\r\n  //vec2 u=smoothstep(0.,1.,f);\r\n  vec2 u=f*f*(3.-2.*f);\r\n  return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);\r\n}\r\n\r\nfloat fbm_noise_perlin(vec2 p,vec2 loop){\r\n  float f=0.;\r\n  float a=.5;\r\n  for(int i=0;i<OCTAVE_NUM;i++)\r\n  {\r\n    f+=a*noise_perlin(p,loop);\r\n    p*=2.;\r\n    a/=2.;\r\n  }\r\n  return f;\r\n}\r\nfloat fbm_abs_noise_perlin(vec2 p,vec2 loop){\r\n  float f=0.;\r\n  float a=.5;\r\n  for(int i=0;i<OCTAVE_NUM;i++)\r\n  {\r\n    f+=a*abs(noise_perlin(p,loop));\r\n    p*=2.;\r\n    a/=2.;\r\n  }\r\n  return f;\r\n}\r\n\r\n/*float domain_wraping(vec2 p)\r\n{\r\n  return fbm_abs_noise_perlin(p+fbm_abs_noise_perlin(p+fbm_abs_noise_perlin(p)));\r\n}*/\r\n\r\nvoid main()\r\n{\r\n  vec2 uv=(vTextureCoord+uPos)*uGrid;\r\n  if(uType==1){\r\n    float f=noise_perlin(uv,uLoop)*.5+.5;\r\n    gl_FragColor=vec4(vec3(f),1.);\r\n    /*vec2 uv0=smoothstep(vec2(.5),vec2(.5),fract(uv));\r\n    float f=abs(uv0.x-uv0.y);\r\n    gl_FragColor=vec4(vec3(f),1.);*/\r\n  }else if(uType==2){\r\n    float f=fbm_noise_perlin(uv,uLoop)*.5+.5;\r\n    gl_FragColor=vec4(vec3(f),1.);\r\n  }else if(uType==3){\r\n    float f=fbm_abs_noise_perlin(uv,uLoop)*.5+.5;\r\n    gl_FragColor=vec4(vec3(f),1.);\r\n  }\r\n}\r\n\r\n"},4:function(r,n){function e(r,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}r.exports=function(r,n,o){return n&&e(r.prototype,n),o&&e(r,o),r}},40:function(r,n){r.exports="precision mediump float;\r\nvarying vec2 vTextureCoord;\r\nuniform lowp vec2 uSize;\r\nuniform int uType;\r\nuniform vec2 uGrid;\r\nuniform vec2 uPos;\r\nuniform vec2 uLoop;\r\n//const float pi=3.14159265359;\r\nconst int OCTAVE_NUM=3;\r\n\r\n/*vec3 random3(vec3 p){\r\n  vec3 f=vec3(\r\n    dot(p,vec3(127.1,311.7,69.5)),\r\n    dot(p,vec3(269.5,183.3,132.7)),\r\n    dot(p,vec3(247.3,108.5,96.5))\r\n  );\r\n  return-1.+2.*fract(sin(f)*43758.5453123);\r\n}*/\r\nvec2 random2(vec2 p){\r\n  vec2 f=vec2(\r\n    dot(p,vec2(127.1,311.7)),\r\n    dot(p,vec2(269.5,183.3))\r\n  );\r\n  return-1.+2.*fract(sin(f)*43758.5453123);\r\n}\r\n/*float random(vec2 p){\r\n  float f=dot(p,vec2(127.1,311.7));\r\n  return-1.+2.*fract(sin(f)*43758.5453123);\r\n}*/\r\n\r\nfloat noise_simplex(vec2 p){\r\n  const float K1=.366025404;// (sqrt(3)-1)/2;\r\n  const float K2=.211324865;// (3-sqrt(3))/6;\r\n  vec2 i=floor(p+(p.x+p.y)*K1);\r\n  vec2 a=p-i+(i.x+i.y)*K2;\r\n  float m=step(a.y,a.x);\r\n  vec2 o=vec2(m,1.-m);\r\n  vec2 b=a-o+K2;\r\n  vec2 c=a-1.+2.*K2;\r\n  vec3 h=max(.5-vec3(dot(a,a),dot(b,b),dot(c,c)),0.);\r\n  vec3 n=h*h*h*h*vec3(dot(a,random2(i+0.)),dot(b,random2(i+o)),dot(c,random2(i+1.)));\r\n  return dot(n,vec3(70.));\r\n}\r\n\r\nfloat fbm_noise_simplex(vec2 p){\r\n  float f=0.;\r\n  float a=.5;\r\n  for(int i=0;i<OCTAVE_NUM;i++)\r\n  {\r\n    f+=a*noise_simplex(p);\r\n    p*=2.;\r\n    a/=2.;\r\n  }\r\n  return f;\r\n}\r\n\r\nfloat fbm_abs_noise_simplex(vec2 p){\r\n  float f=0.;\r\n  float a=.5;\r\n  for(int i=0;i<OCTAVE_NUM;i++)\r\n  {\r\n    f+=a*abs(noise_simplex(p));\r\n    p*=2.;\r\n    a/=2.;\r\n  }\r\n  return f;\r\n}\r\n\r\nvoid main()\r\n{\r\n  vec2 uv=(vTextureCoord+uPos)*uGrid;\r\n  if(uType==1){\r\n    float f=noise_simplex(uv)*.5+.5;\r\n    gl_FragColor=vec4(vec3(f),1.);\r\n  }else if(uType==2){\r\n    float f=fbm_noise_simplex(uv)*.5+.5;\r\n    gl_FragColor=vec4(vec3(f),1.);\r\n  }else if(uType==3){\r\n    float f=fbm_abs_noise_simplex(uv)*.5+.5;\r\n    gl_FragColor=vec4(vec3(f),1.);\r\n  }\r\n}\r\n\r\n"},41:function(r,n){r.exports="precision mediump float;\r\nvarying vec2 vTextureCoord;\r\nuniform lowp vec2 uSize;\r\nuniform int uType;\r\nuniform vec2 uGrid;\r\nuniform vec2 uPos;\r\nuniform vec2 uLoop;\r\n//const float pi=3.14159265359;\r\nconst int OCTAVE_NUM=3;\r\n\r\n/*vec3 random3(vec3 p){\r\n  vec3 f=vec3(\r\n    dot(p,vec3(127.1,311.7,69.5)),\r\n    dot(p,vec3(269.5,183.3,132.7)),\r\n    dot(p,vec3(247.3,108.5,96.5))\r\n  );\r\n  return-1.+2.*fract(sin(f)*43758.5453123);\r\n}\r\nvec2 random2(vec2 p){\r\n  vec2 f=vec2(\r\n    dot(p,vec2(127.1,311.7)),\r\n    dot(p,vec2(269.5,183.3))\r\n  );\r\n  return-1.+2.*fract(sin(f)*43758.5453123);\r\n}*/\r\nfloat random(vec2 p,vec2 loop){\r\n  if(loop.x!=0.){\r\n    p.x=mod(p.x,loop.x);\r\n  }\r\n  if(loop.y!=0.){\r\n    p.y=mod(p.y,loop.y);\r\n  }\r\n  float f=dot(p,vec2(127.1,311.7));\r\n  return-1.+2.*fract(sin(f)*43758.5453123);\r\n}\r\n\r\nfloat noise_value(vec2 p,vec2 loop){\r\n  vec2 i=floor(p);\r\n  vec2 f=fract(p);\r\n  vec2 u=f*f*(3.-2.*f);\r\n  float a=random(i+vec2(0.,0.),loop);\r\n  float b=random(i+vec2(1.,0.),loop);\r\n  float c=random(i+vec2(0.,1.),loop);\r\n  float d=random(i+vec2(1.,1.),loop);\r\n  return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);\r\n}\r\nfloat fbm_noise_value(vec2 p,vec2 loop){\r\n  float f=0.;\r\n  float a=.5;\r\n  for(int i=0;i<OCTAVE_NUM;i++)\r\n  {\r\n    f+=a*noise_value(p,loop);\r\n    p*=2.;\r\n    a/=2.;\r\n  }\r\n  return f;\r\n}\r\nfloat fbm_abs_noise_value(vec2 p,vec2 loop){\r\n  float f=0.;\r\n  float a=.5;\r\n  for(int i=0;i<OCTAVE_NUM;i++)\r\n  {\r\n    f+=a*abs(noise_value(p,loop));\r\n    p*=2.;\r\n    a/=2.;\r\n  }\r\n  return f;\r\n}\r\nvoid main()\r\n{\r\n  vec2 uv=(vTextureCoord+uPos)*uGrid;\r\n  if(uType==1){\r\n    float f=noise_value(uv,uLoop)*.5+.5;\r\n    gl_FragColor=vec4(vec3(f),1.);\r\n  }else if(uType==2){\r\n    float f=fbm_noise_value(uv,uLoop)*.5+.5;\r\n    gl_FragColor=vec4(vec3(f),1.);\r\n  }else if(uType==3){\r\n    float f=fbm_abs_noise_value(uv,uLoop)*.5+.5;\r\n    gl_FragColor=vec4(vec3(f),1.);\r\n  }\r\n}\r\n\r\n"},42:function(r,n){r.exports="precision mediump float;\r\nvarying vec2 vTextureCoord;\r\nuniform lowp vec2 uSize;\r\nuniform int uType;\r\nuniform vec2 uGrid;\r\nuniform vec2 uPos;\r\nuniform vec2 uLoop;\r\n//const float pi=3.14159265359;\r\nconst int OCTAVE_NUM=3;\r\n\r\n/*vec3 random3(vec3 p){\r\n  vec3 f=vec3(\r\n    dot(p,vec3(127.1,311.7,69.5)),\r\n    dot(p,vec3(269.5,183.3,132.7)),\r\n    dot(p,vec3(247.3,108.5,96.5))\r\n  );\r\n  return-1.+2.*fract(sin(f)*43758.5453123);\r\n}*/\r\nvec2 random2(vec2 p,vec2 loop){\r\n  if(loop.x!=0.){\r\n    p.x=mod(p.x,loop.x);\r\n  }\r\n  if(loop.y!=0.){\r\n    p.y=mod(p.y,loop.y);\r\n  }\r\n  vec2 f=vec2(\r\n    dot(p,vec2(127.1,311.7)),\r\n    dot(p,vec2(269.5,183.3))\r\n  );\r\n  return-1.+2.*fract(sin(f)*43758.5453123);\r\n}\r\n/*float random(vec2 p){\r\n  float f=dot(p,vec2(127.1,311.7));\r\n  return-1.+2.*fract(sin(f)*43758.5453123);\r\n}*/\r\nfloat noise_worley(vec2 p,vec2 loop){\r\n  vec2 i=floor(p);\r\n  vec2 f=fract(p);\r\n  float F1=1.;\r\n  for(int j=-1;j<=1;j++){\r\n    for(int k=-1;k<=1;k++){\r\n      vec2 neighbor=vec2(float(j),float(k));\r\n      vec2 point=random2(i+neighbor,loop)*.5+.5;\r\n      float d=length(point+neighbor-f);\r\n      F1=min(F1,d);\r\n    }\r\n  }\r\n  F1=F1*F1*(3.-2.*F1);\r\n  return F1;\r\n}\r\nfloat fbm_noise_worley(vec2 p,vec2 loop){\r\n  float f=0.;\r\n  float a=.5;\r\n  for(int i=0;i<OCTAVE_NUM;i++)\r\n  {\r\n    f+=a*noise_worley(p,loop);\r\n    p*=2.;\r\n    a/=2.;\r\n  }\r\n  return f;\r\n}\r\nfloat fbm_abs_noise_worley(vec2 p,vec2 loop){\r\n  float f=0.;\r\n  float a=.5;\r\n  for(int i=0;i<OCTAVE_NUM;i++)\r\n  {\r\n    f+=a*abs(noise_worley(p,loop)*2.-1.);\r\n    p*=2.;\r\n    a/=2.;\r\n  }\r\n  f=f*.5+.5;\r\n  return f;\r\n}\r\n\r\nvoid main()\r\n{\r\n  vec2 uv=(vTextureCoord+uPos)*uGrid;\r\n  if(uType==1){\r\n    float f=noise_worley(uv,uLoop);\r\n    gl_FragColor=vec4(vec3(f),1.);\r\n  }else if(uType==2){\r\n    float f=fbm_noise_worley(uv,uLoop);\r\n    gl_FragColor=vec4(vec3(f),1.);\r\n  }else if(uType==3){\r\n    float f=fbm_abs_noise_worley(uv,uLoop);\r\n    gl_FragColor=vec4(vec3(f),1.);\r\n  }\r\n}\r\n\r\n"},43:function(r,n){r.exports="precision mediump float;\r\nvarying vec2 vTextureCoord;\r\nuniform lowp vec2 uSize;\r\nuniform lowp float uDepth;\r\nuniform int uType;\r\nuniform vec3 uGrid;\r\nuniform vec3 uPos;\r\nuniform vec3 uLoop;\r\nuniform sampler2D uSampler;\r\nconst float pi=3.14159265359;\r\nconst int OCTAVE_NUM=3;\r\n\r\nvec3 random3(vec3 p,vec3 loop){\r\n  if(loop.x!=0.){\r\n    p.x=mod(p.x,loop.x);\r\n  }\r\n  if(loop.y!=0.){\r\n    p.y=mod(p.y,loop.y);\r\n  }\r\n  if(loop.z!=0.){\r\n    p.z=mod(p.z,loop.z);\r\n  }\r\n  vec3 f=vec3(\r\n    dot(p,vec3(127.1,311.7,69.5)),\r\n    dot(p,vec3(269.5,183.3,132.7)),\r\n    dot(p,vec3(247.3,108.5,96.5))\r\n  );\r\n  return-1.+2.*fract(sin(f)*43758.5453123);\r\n}\r\nfloat noise_perlin(vec3 p,vec3 loop){\r\n  vec3 i=floor(p);\r\n  vec3 s=fract(p);\r\n  float a=dot(random3(i,loop),s);\r\n  float b=dot(random3(i+vec3(1,0,0),loop),s-vec3(1,0,0));\r\n  float c=dot(random3(i+vec3(0,1,0),loop),s-vec3(0,1,0));\r\n  float d=dot(random3(i+vec3(0,0,1),loop),s-vec3(0,0,1));\r\n  float e=dot(random3(i+vec3(1,1,0),loop),s-vec3(1,1,0));\r\n  float f=dot(random3(i+vec3(1,0,1),loop),s-vec3(1,0,1));\r\n  float g=dot(random3(i+vec3(0,1,1),loop),s-vec3(0,1,1));\r\n  float h=dot(random3(i+vec3(1,1,1),loop),s-vec3(1,1,1));\r\n  vec3 u=smoothstep(0.,1.,s);\r\n  //vec3 u=s*s*(3.-2.*s);\r\n  return mix(mix(mix(a,b,u.x),mix(c,e,u.x),u.y),mix(mix(d,f,u.x),mix(g,h,u.x),u.y),u.z);\r\n}\r\nfloat fbm_noise_perlin(vec3 p,vec3 loop){\r\n  float f=0.;\r\n  float a=.5;\r\n  for(int i=0;i<OCTAVE_NUM;i++){\r\n    f+=a*noise_perlin(p,loop);\r\n    p*=2.;\r\n    a/=2.;\r\n  }\r\n  return f;\r\n}\r\nfloat fbm_abs_noise_perlin(vec3 p,vec3 loop){\r\n  float f=0.;\r\n  float a=.5;\r\n  for(int i=0;i<OCTAVE_NUM;i++){\r\n    f+=a*abs(noise_perlin(p,loop));\r\n    p*=2.;\r\n    a/=2.;\r\n  }\r\n  return f;\r\n}\r\n\r\nvec2 random2(vec2 p){\r\n  vec2 f=vec2(\r\n    dot(p,vec2(127.1,311.7)),\r\n    dot(p,vec2(269.5,183.3))\r\n  );\r\n  /*return-1.+2.*fract(sin(f)*43758.5453123);*/\r\n  return texture2D(uSampler,fract(sin(f))).rg*2.-1.;\r\n}\r\nfloat noise_worley(vec2 p){\r\n  vec2 i=floor(p);\r\n  vec2 f=fract(p);\r\n  float F1=1.;\r\n  for(int j=-1;j<=1;j++){\r\n    for(int k=-1;k<=1;k++){\r\n      vec2 neighbor=vec2(float(j),float(k));\r\n      vec2 point=random2(i+neighbor)*.5+.5;\r\n      float d=length(point+neighbor-f);\r\n      F1=min(F1,d);\r\n    }\r\n  }\r\n  F1=F1*F1*(3.-2.*F1);\r\n  return F1;\r\n}\r\nfloat aaa(vec2 p){\r\n  return noise_worley(p);\r\n  //return texture2D(uSampler,fract(p)).b;\r\n}\r\nfloat fbm_aaa(vec2 p){\r\n  float f=0.;\r\n  float a=.5;\r\n  for(int i=0;i<2;i++){\r\n    f+=a*aaa(p);\r\n    p*=2.;\r\n    a/=2.;\r\n  }\r\n  return f;\r\n}\r\nvoid main()\r\n{\r\n  vec3 uv=(vec3(vTextureCoord,0.)+uPos)*uGrid;\r\n  //float f=fbm_abs_noise_perlin(vec3(uv))*.5+.5;\r\n  //float f=fbm_abs_noise_perlin(uv*.1,uLoop)*.5+.5;\r\n  //float f=noise_perlin(uv,uLoop)*.5+.5;\r\n  float f=noise_worley(vTextureCoord*20.);\r\n  gl_FragColor=vec4(vec3(f),1.);\r\n  //gl_FragColor=vec4(vec3(1.5*f,1.5*f*f*f,f*f*f*f*f*f),1.);\r\n  \r\n}\r\n\r\n"},5:function(r,n){r.exports="attribute vec2 aVertexPosition;\r\nattribute vec2 aTextureCoord;\r\nvarying highp vec2 vTextureCoord;\r\nuniform float uFlipY;\r\nvoid main(void){\r\n  vTextureCoord=aTextureCoord;\r\n  gl_Position=vec4((2.*aVertexPosition+vec2(-1.,-1.))*vec2(1.,uFlipY),0.,1.);\r\n}"},61:function(r,n,e){"use strict";e.r(n);var o=e(0),t=e(1),i=e(5),a=e.n(i),f=e(39),u=e.n(f),c=function(r,n,e){var t=Object(o.f)(r,n,e);return{program:t,attribLocations:{vertexPosition:o.b.attribFloat(r,t,"aVertexPosition",2),textureCoord:o.b.attribFloat(r,t,"aTextureCoord",2)},uniformLocations:{flipY:o.i.uniform1f(r,t,"uFlipY"),size:o.i.uniform2fv(r,t,"uSize"),grid:o.i.uniform2fv(r,t,"uGrid"),pos:o.i.uniform2fv(r,t,"uPos"),type:o.i.uniform1i(r,t,"uType"),loop:o.i.uniform2fv(r,t,"uLoop")}}},l=function(r){return Object.assign(Object(o.h)(r,c,a.a,u.a),{draw:function(n){r.drawElements(r.TRIANGLES,n,r.UNSIGNED_BYTE,0)}})},v=e(40),s=e.n(v),p=function(r,n,e){var t=Object(o.f)(r,n,e);return{program:t,attribLocations:{vertexPosition:o.b.attribFloat(r,t,"aVertexPosition",2),textureCoord:o.b.attribFloat(r,t,"aTextureCoord",2)},uniformLocations:{flipY:o.i.uniform1f(r,t,"uFlipY"),size:o.i.uniform2fv(r,t,"uSize"),grid:o.i.uniform2fv(r,t,"uGrid"),pos:o.i.uniform2fv(r,t,"uPos"),type:o.i.uniform1i(r,t,"uType"),loop:o.i.uniform2fv(r,t,"uLoop")}}},m=function(r){return Object.assign(Object(o.h)(r,p,a.a,s.a),{draw:function(n){r.drawElements(r.TRIANGLES,n,r.UNSIGNED_BYTE,0)}})},d=e(41),b=e.n(d),_=function(r,n,e){var t=Object(o.f)(r,n,e);return{program:t,attribLocations:{vertexPosition:o.b.attribFloat(r,t,"aVertexPosition",2),textureCoord:o.b.attribFloat(r,t,"aTextureCoord",2)},uniformLocations:{flipY:o.i.uniform1f(r,t,"uFlipY"),size:o.i.uniform2fv(r,t,"uSize"),grid:o.i.uniform2fv(r,t,"uGrid"),pos:o.i.uniform2fv(r,t,"uPos"),type:o.i.uniform1i(r,t,"uType"),loop:o.i.uniform2fv(r,t,"uLoop")}}},x=function(r){return Object.assign(Object(o.h)(r,_,a.a,b.a),{draw:function(n){r.drawElements(r.TRIANGLES,n,r.UNSIGNED_BYTE,0)}})},g=e(42),T=e.n(g),h=function(r,n,e){var t=Object(o.f)(r,n,e);return{program:t,attribLocations:{vertexPosition:o.b.attribFloat(r,t,"aVertexPosition",2),textureCoord:o.b.attribFloat(r,t,"aTextureCoord",2)},uniformLocations:{flipY:o.i.uniform1f(r,t,"uFlipY"),size:o.i.uniform2fv(r,t,"uSize"),grid:o.i.uniform2fv(r,t,"uGrid"),pos:o.i.uniform2fv(r,t,"uPos"),type:o.i.uniform1i(r,t,"uType"),loop:o.i.uniform2fv(r,t,"uLoop")}}},E=function(r){return Object.assign(Object(o.h)(r,h,a.a,T.a),{draw:function(n){r.drawElements(r.TRIANGLES,n,r.UNSIGNED_BYTE,0)}})},y=e(43),F=e.n(y),R=function(r,n,e){var t=Object(o.f)(r,n,e);return{program:t,attribLocations:{vertexPosition:o.b.attribFloat(r,t,"aVertexPosition",2),textureCoord:o.b.attribFloat(r,t,"aTextureCoord",2)},uniformLocations:{flipY:o.i.uniform1f(r,t,"uFlipY"),size:o.i.uniform2fv(r,t,"uSize"),depth:o.i.uniform1f(r,t,"uDepth"),grid:o.i.uniform3fv(r,t,"uGrid"),pos:o.i.uniform3fv(r,t,"uPos"),type:o.i.uniform1i(r,t,"uType"),loop:o.i.uniform3fv(r,t,"uLoop"),sampler:o.i.uniformTexture(r,t,"uSampler",0)}}},S=function(r){return Object.assign(Object(o.h)(r,R,a.a,F.a),{draw:function(n){r.drawElements(r.TRIANGLES,n,r.UNSIGNED_BYTE,0)}})},A=e(23);function P(r){var n=[[0,0],[1,0],[1,1],[0,1]].flat(),e=Object(o.a)(r,n,2),t=[[0,0],[1,0],[1,1],[0,1]].flat(),i=Object(o.a)(r,t,2),a=[[0,1,3],[1,2,3]].flat();return{positionBufferData:e,textureCoordinatesBufferData:i,indicesBufferData:Object(o.d)(r,a)}}!function(){var r=document.querySelector("#glcanvas"),n=r.getContext("webgl",{alpha:!1});if(!n)return void alert("無法初始化WebGL。您的瀏覽器或機器可能不支持它。");var e={noisePerlinShader:l(n),noiseSimplexShader:m(n),noiseValueShader:x(n),noiseWorleyShader:E(n),noisePerlin3DShader:S(n),viewShader:Object(A.a)(n)},i={face:P(n),view:P(n)},a={image:Object(o.g)(n,"../img/image.c0ad24103ffb3cb48c09355b0f9bff2b.jpg")},f=[.5*n.canvas.width,.5*n.canvas.height];r.addEventListener("mousemove",(function(r){t.b.set(f,r.pageX,r.pageY)}));var u=[n.canvas.clientWidth,n.canvas.clientHeight],c={noise:Object(o.c)(n),noisePerlin3D:Object(o.c)(n)},v=[[{framebufferTexture:c.noisePerlin,shaderProgram:e.noisePerlinShader,type:1},{framebufferTexture:c.fbm_noisePerlin,shaderProgram:e.noisePerlinShader,type:2},{framebufferTexture:c.fbm_abs_noisePerlin,shaderProgram:e.noisePerlinShader,type:3}],[{framebufferTexture:c.noiseSimplex,shaderProgram:e.noiseSimplexShader,type:1},{framebufferTexture:c.fbm_noiseSimplex,shaderProgram:e.noiseSimplexShader,type:2},{framebufferTexture:c.fbm_abs_noiseSimplex,shaderProgram:e.noiseSimplexShader,type:3}],[{framebufferTexture:c.noiseValue,shaderProgram:e.noiseValueShader,type:1},{framebufferTexture:c.fbm_noiseValue,shaderProgram:e.noiseValueShader,type:2},{framebufferTexture:c.fbm_abs_noiseValue,shaderProgram:e.noiseValueShader,type:3}],[{framebufferTexture:c.noiseWorley,shaderProgram:e.noiseWorleyShader,type:1},{framebufferTexture:c.fbm_noiseWorley,shaderProgram:e.noiseWorleyShader,type:2},{framebufferTexture:c.fbm_abs_noiseWorley,shaderProgram:e.noiseWorleyShader,type:3}]];!function(r,n,e,t,i){for(var a=i.framebufferTextures,f=i.size,u=i.noiseTexture,c=e.face,l=0;l<6;l++)if(u[l])for(var v=0;v<6;v++)if(u[l][v]){var s=u[l][v].shaderProgram;s.use();var p=Object(o.e)([v/6,l/6,(v+1)/6,(l+1)/6]);c.positionBufferData.set(p),s.attribSet({vertexPosition:c.positionBufferData.buffer,textureCoord:c.textureCoordinatesBufferData.buffer}),s.uniformSet({size:f,grid:[12,12],type:u[l][v].type,pos:[0,0],flipY:1,loop:[0,0]}),Object(o.j)(r,a.noise,v+l==0),s.draw(c.indicesBufferData.length)}c.positionBufferData.set(Object(o.e)([0,0,1,1]))}(n,0,i,0,{framebufferTextures:c,size:u,noiseTexture:v});var s=0;requestAnimationFrame((function r(t){var l=.001*(t-s);s=t,requestAnimationFrame(r),function(r,n,e,t,i){var a=i.now,f=i.framebufferTextures,u=(i.mPos,i.size),c=(i.noiseTexture,e.face),l=n.noisePerlin3DShader;l.use(),l.attribSet({vertexPosition:c.positionBufferData.buffer,textureCoord:c.textureCoordinatesBufferData.buffer}),l.uniformSet({size:u,depth:500,grid:[20,20,20],type:1,pos:[0,0,5e-5*a],flipY:1,loop:[20,20,20],sampler:t.image}),Object(o.j)(r,f.noisePerlin3D),l.draw(c.indicesBufferData.length);var v=e.view,s=n.viewShader;s.use(),s.attribSet({vertexPosition:v.positionBufferData.buffer,textureCoord:v.textureCoordinatesBufferData.buffer}),s.uniformSet({flipY:-1}),Object(o.j)(r),v.textureCoordinatesBufferData.set(Object(o.e)([0,0,1,1])),v.positionBufferData.set(Object(o.e)([0,0,1,1])),s.uniformSet({sampler:f.noise.texture}),s.draw(v.indicesBufferData.length),v.positionBufferData.set(Object(o.e)([.5,0,1,.5])),s.uniformSet({sampler:f.noisePerlin3D.texture}),s.draw(v.indicesBufferData.length)}(n,e,i,a,{now:t,delta:l,mPos:f,framebufferTextures:c,size:u,noiseTexture:v})}))}()}});