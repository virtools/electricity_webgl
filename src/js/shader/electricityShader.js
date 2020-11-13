import { initShaderProgram, useFramebufferTexture, attribFuns, uniformFuns, shaderProgramFun } from "../glSupply";
import vs from "../../shader/screen.vs";
import fs from "../../shader/electricity.fs";
const shader = (gl, vs, fs) => {
  const shaderProgram = initShaderProgram(gl, vs, fs);
  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: attribFuns.attribFloat(gl, shaderProgram, "aVertexPosition", 2),
      textureCoord: attribFuns.attribFloat(gl, shaderProgram, "aTextureCoord", 2),
    },
    uniformLocations: {
      flipY: uniformFuns.uniform1f(gl, shaderProgram, "uFlipY"),
      time: uniformFuns.uniform1f(gl, shaderProgram, "uTime"),
      size: uniformFuns.uniform2fv(gl, shaderProgram, "uSize"),
      startPos: uniformFuns.uniform2fv(gl, shaderProgram, "uStartPos"),
      endPos: uniformFuns.uniform2fv(gl, shaderProgram, "uEndPos"),
    },
  };
  return programInfo;
};
export default (gl) => {
  return Object.assign(shaderProgramFun(gl, shader, vs, fs), {
    draw(gl, length) {
      gl.drawElements(gl.TRIANGLE_STRIP, length, gl.UNSIGNED_BYTE, 0);
    },
  });
};