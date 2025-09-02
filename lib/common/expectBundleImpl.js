"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// packages/playwright/bundles/expect/node_modules/color-name/index.js
var require_color_name = __commonJS({
  "packages/playwright/bundles/expect/node_modules/color-name/index.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
  }
});

// packages/playwright/bundles/expect/node_modules/color-convert/conversions.js
var require_conversions = __commonJS({
  "packages/playwright/bundles/expect/node_modules/color-convert/conversions.js"(exports2, module2) {
    var cssKeywords = require_color_name();
    var reverseKeywords = {};
    for (const key of Object.keys(cssKeywords)) {
      reverseKeywords[cssKeywords[key]] = key;
    }
    var convert = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    module2.exports = convert;
    for (const model of Object.keys(convert)) {
      if (!("channels" in convert[model])) {
        throw new Error("missing channels property: " + model);
      }
      if (!("labels" in convert[model])) {
        throw new Error("missing channel labels property: " + model);
      }
      if (convert[model].labels.length !== convert[model].channels) {
        throw new Error("channel and label counts mismatch: " + model);
      }
      const { channels, labels } = convert[model];
      delete convert[model].channels;
      delete convert[model].labels;
      Object.defineProperty(convert[model], "channels", { value: channels });
      Object.defineProperty(convert[model], "labels", { value: labels });
    }
    convert.rgb.hsl = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const min = Math.min(r, g, b);
      const max = Math.max(r, g, b);
      const delta = max - min;
      let h;
      let s;
      if (max === min) {
        h = 0;
      } else if (r === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r) / delta;
      } else if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      const l = (min + max) / 2;
      if (max === min) {
        s = 0;
      } else if (l <= 0.5) {
        s = delta / (max + min);
      } else {
        s = delta / (2 - max - min);
      }
      return [h, s * 100, l * 100];
    };
    convert.rgb.hsv = function(rgb) {
      let rdif;
      let gdif;
      let bdif;
      let h;
      let s;
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const v = Math.max(r, g, b);
      const diff2 = v - Math.min(r, g, b);
      const diffc = function(c) {
        return (v - c) / 6 / diff2 + 1 / 2;
      };
      if (diff2 === 0) {
        h = 0;
        s = 0;
      } else {
        s = diff2 / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r === v) {
          h = bdif - gdif;
        } else if (g === v) {
          h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
          h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }
      return [
        h * 360,
        s * 100,
        v * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      const r = rgb[0];
      const g = rgb[1];
      let b = rgb[2];
      const h = convert.rgb.hsl(rgb)[0];
      const w = 1 / 255 * Math.min(r, Math.min(g, b));
      b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
      return [h, w * 100, b * 100];
    };
    convert.rgb.cmyk = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const k = Math.min(1 - r, 1 - g, 1 - b);
      const c = (1 - r - k) / (1 - k) || 0;
      const m = (1 - g - k) / (1 - k) || 0;
      const y = (1 - b - k) / (1 - k) || 0;
      return [c * 100, m * 100, y * 100, k * 100];
    };
    function comparativeDistance(x, y) {
      return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
    }
    convert.rgb.keyword = function(rgb) {
      const reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      let currentClosestDistance = Infinity;
      let currentClosestKeyword;
      for (const keyword of Object.keys(cssKeywords)) {
        const value = cssKeywords[keyword];
        const distance = comparativeDistance(rgb, value);
        if (distance < currentClosestDistance) {
          currentClosestDistance = distance;
          currentClosestKeyword = keyword;
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      let r = rgb[0] / 255;
      let g = rgb[1] / 255;
      let b = rgb[2] / 255;
      r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
      g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
      b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
      const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
      const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
      const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
      return [x * 100, y * 100, z * 100];
    };
    convert.rgb.lab = function(rgb) {
      const xyz = convert.rgb.xyz(rgb);
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a, b];
    };
    convert.hsl.rgb = function(hsl) {
      const h = hsl[0] / 360;
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      let t2;
      let t3;
      let val;
      if (s === 0) {
        val = l * 255;
        return [val, val, val];
      }
      if (l < 0.5) {
        t2 = l * (1 + s);
      } else {
        t2 = l + s - l * s;
      }
      const t1 = 2 * l - t2;
      const rgb = [0, 0, 0];
      for (let i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i] = val * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      const h = hsl[0];
      let s = hsl[1] / 100;
      let l = hsl[2] / 100;
      let smin = s;
      const lmin = Math.max(l, 0.01);
      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      const v = (l + s) / 2;
      const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
      return [h, sv * 100, v * 100];
    };
    convert.hsv.rgb = function(hsv) {
      const h = hsv[0] / 60;
      const s = hsv[1] / 100;
      let v = hsv[2] / 100;
      const hi = Math.floor(h) % 6;
      const f = h - Math.floor(h);
      const p = 255 * v * (1 - s);
      const q = 255 * v * (1 - s * f);
      const t = 255 * v * (1 - s * (1 - f));
      v *= 255;
      switch (hi) {
        case 0:
          return [v, t, p];
        case 1:
          return [q, v, p];
        case 2:
          return [p, v, t];
        case 3:
          return [p, q, v];
        case 4:
          return [t, p, v];
        case 5:
          return [v, p, q];
      }
    };
    convert.hsv.hsl = function(hsv) {
      const h = hsv[0];
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const vmin = Math.max(v, 0.01);
      let sl;
      let l;
      l = (2 - s) * v;
      const lmin = (2 - s) * vmin;
      sl = s * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l /= 2;
      return [h, sl * 100, l * 100];
    };
    convert.hwb.rgb = function(hwb) {
      const h = hwb[0] / 360;
      let wh = hwb[1] / 100;
      let bl = hwb[2] / 100;
      const ratio = wh + bl;
      let f;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      const i = Math.floor(6 * h);
      const v = 1 - bl;
      f = 6 * h - i;
      if ((i & 1) !== 0) {
        f = 1 - f;
      }
      const n = wh + f * (v - wh);
      let r;
      let g;
      let b;
      switch (i) {
        default:
        case 6:
        case 0:
          r = v;
          g = n;
          b = wh;
          break;
        case 1:
          r = n;
          g = v;
          b = wh;
          break;
        case 2:
          r = wh;
          g = v;
          b = n;
          break;
        case 3:
          r = wh;
          g = n;
          b = v;
          break;
        case 4:
          r = n;
          g = wh;
          b = v;
          break;
        case 5:
          r = v;
          g = wh;
          b = n;
          break;
      }
      return [r * 255, g * 255, b * 255];
    };
    convert.cmyk.rgb = function(cmyk) {
      const c = cmyk[0] / 100;
      const m = cmyk[1] / 100;
      const y = cmyk[2] / 100;
      const k = cmyk[3] / 100;
      const r = 1 - Math.min(1, c * (1 - k) + k);
      const g = 1 - Math.min(1, m * (1 - k) + k);
      const b = 1 - Math.min(1, y * (1 - k) + k);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.rgb = function(xyz) {
      const x = xyz[0] / 100;
      const y = xyz[1] / 100;
      const z = xyz[2] / 100;
      let r;
      let g;
      let b;
      r = x * 3.2406 + y * -1.5372 + z * -0.4986;
      g = x * -0.9689 + y * 1.8758 + z * 0.0415;
      b = x * 0.0557 + y * -0.204 + z * 1.057;
      r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
      g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
      b = b > 31308e-7 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
      r = Math.min(Math.max(0, r), 1);
      g = Math.min(Math.max(0, g), 1);
      b = Math.min(Math.max(0, b), 1);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.lab = function(xyz) {
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a, b];
    };
    convert.lab.xyz = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let x;
      let y;
      let z;
      y = (l + 16) / 116;
      x = a / 500 + y;
      z = y - b / 200;
      const y2 = y ** 3;
      const x2 = x ** 3;
      const z2 = z ** 3;
      y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
      x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
      z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
      x *= 95.047;
      y *= 100;
      z *= 108.883;
      return [x, y, z];
    };
    convert.lab.lch = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let h;
      const hr = Math.atan2(b, a);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      const c = Math.sqrt(a * a + b * b);
      return [l, c, h];
    };
    convert.lch.lab = function(lch) {
      const l = lch[0];
      const c = lch[1];
      const h = lch[2];
      const hr = h / 360 * 2 * Math.PI;
      const a = c * Math.cos(hr);
      const b = c * Math.sin(hr);
      return [l, a, b];
    };
    convert.rgb.ansi16 = function(args, saturation = null) {
      const [r, g, b] = args;
      let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args) {
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };
    convert.rgb.ansi256 = function(args) {
      const r = args[0];
      const g = args[1];
      const b = args[2];
      if (r === g && g === b) {
        if (r < 8) {
          return 16;
        }
        if (r > 248) {
          return 231;
        }
        return Math.round((r - 8) / 247 * 24) + 232;
      }
      const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args) {
      let color = args % 10;
      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [color, color, color];
      }
      const mult = (~~(args > 50) + 1) * 0.5;
      const r = (color & 1) * mult * 255;
      const g = (color >> 1 & 1) * mult * 255;
      const b = (color >> 2 & 1) * mult * 255;
      return [r, g, b];
    };
    convert.ansi256.rgb = function(args) {
      if (args >= 232) {
        const c = (args - 232) * 10 + 8;
        return [c, c, c];
      }
      args -= 16;
      let rem;
      const r = Math.floor(args / 36) / 5 * 255;
      const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
      const b = rem % 6 / 5 * 255;
      return [r, g, b];
    };
    convert.rgb.hex = function(args) {
      const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.hex.rgb = function(args) {
      const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [0, 0, 0];
      }
      let colorString = match[0];
      if (match[0].length === 3) {
        colorString = colorString.split("").map((char) => {
          return char + char;
        }).join("");
      }
      const integer = parseInt(colorString, 16);
      const r = integer >> 16 & 255;
      const g = integer >> 8 & 255;
      const b = integer & 255;
      return [r, g, b];
    };
    convert.rgb.hcg = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const max = Math.max(Math.max(r, g), b);
      const min = Math.min(Math.min(r, g), b);
      const chroma = max - min;
      let grayscale;
      let hue;
      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r) {
        hue = (g - b) / chroma % 6;
      } else if (max === g) {
        hue = 2 + (b - r) / chroma;
      } else {
        hue = 4 + (r - g) / chroma;
      }
      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };
    convert.hsl.hcg = function(hsl) {
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
      let f = 0;
      if (c < 1) {
        f = (l - 0.5 * c) / (1 - c);
      }
      return [hsl[0], c * 100, f * 100];
    };
    convert.hsv.hcg = function(hsv) {
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const c = s * v;
      let f = 0;
      if (c < 1) {
        f = (v - c) / (1 - c);
      }
      return [hsv[0], c * 100, f * 100];
    };
    convert.hcg.rgb = function(hcg) {
      const h = hcg[0] / 360;
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      if (c === 0) {
        return [g * 255, g * 255, g * 255];
      }
      const pure = [0, 0, 0];
      const hi = h % 1 * 6;
      const v = hi % 1;
      const w = 1 - v;
      let mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
      }
      mg = (1 - c) * g;
      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      let f = 0;
      if (v > 0) {
        f = c / v;
      }
      return [hcg[0], f * 100, v * 100];
    };
    convert.hcg.hsl = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const l = g * (1 - c) + 0.5 * c;
      let s = 0;
      if (l > 0 && l < 0.5) {
        s = c / (2 * l);
      } else if (l >= 0.5 && l < 1) {
        s = c / (2 * (1 - l));
      }
      return [hcg[0], s * 100, l * 100];
    };
    convert.hcg.hwb = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      return [hcg[0], (v - c) * 100, (1 - v) * 100];
    };
    convert.hwb.hcg = function(hwb) {
      const w = hwb[1] / 100;
      const b = hwb[2] / 100;
      const v = 1 - b;
      const c = v - w;
      let g = 0;
      if (c < 1) {
        g = (v - c) / (1 - c);
      }
      return [hwb[0], c * 100, g * 100];
    };
    convert.apple.rgb = function(apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };
    convert.rgb.apple = function(rgb) {
      return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
    };
    convert.gray.rgb = function(args) {
      return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
    };
    convert.gray.hsl = function(args) {
      return [0, 0, args[0]];
    };
    convert.gray.hsv = convert.gray.hsl;
    convert.gray.hwb = function(gray) {
      return [0, 100, gray[0]];
    };
    convert.gray.cmyk = function(gray) {
      return [0, 0, 0, gray[0]];
    };
    convert.gray.lab = function(gray) {
      return [gray[0], 0, 0];
    };
    convert.gray.hex = function(gray) {
      const val = Math.round(gray[0] / 100 * 255) & 255;
      const integer = (val << 16) + (val << 8) + val;
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.rgb.gray = function(rgb) {
      const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [val / 255 * 100];
    };
  }
});

// packages/playwright/bundles/expect/node_modules/color-convert/route.js
var require_route = __commonJS({
  "packages/playwright/bundles/expect/node_modules/color-convert/route.js"(exports2, module2) {
    var conversions = require_conversions();
    function buildGraph() {
      const graph = {};
      const models = Object.keys(conversions);
      for (let len = models.length, i = 0; i < len; i++) {
        graph[models[i]] = {
          // http://jsperf.com/1-vs-infinity
          // micro-opt, but this is simple.
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    function deriveBFS(fromModel) {
      const graph = buildGraph();
      const queue = [fromModel];
      graph[fromModel].distance = 0;
      while (queue.length) {
        const current = queue.pop();
        const adjacents = Object.keys(conversions[current]);
        for (let len = adjacents.length, i = 0; i < len; i++) {
          const adjacent = adjacents[i];
          const node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    function link(from, to) {
      return function(args) {
        return to(from(args));
      };
    }
    function wrapConversion(toModel, graph) {
      const path = [graph[toModel].parent, toModel];
      let fn = conversions[graph[toModel].parent][toModel];
      let cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path;
      return fn;
    }
    module2.exports = function(fromModel) {
      const graph = deriveBFS(fromModel);
      const conversion = {};
      const models = Object.keys(graph);
      for (let len = models.length, i = 0; i < len; i++) {
        const toModel = models[i];
        const node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
  }
});

// packages/playwright/bundles/expect/node_modules/color-convert/index.js
var require_color_convert = __commonJS({
  "packages/playwright/bundles/expect/node_modules/color-convert/index.js"(exports2, module2) {
    var conversions = require_conversions();
    var route = require_route();
    var convert = {};
    var models = Object.keys(conversions);
    function wrapRaw(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        return fn(args);
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    function wrapRounded(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        const result = fn(args);
        if (typeof result === "object") {
          for (let len = result.length, i = 0; i < len; i++) {
            result[i] = Math.round(result[i]);
          }
        }
        return result;
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    models.forEach((fromModel) => {
      convert[fromModel] = {};
      Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
      Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
      const routes = route(fromModel);
      const routeModels = Object.keys(routes);
      routeModels.forEach((toModel) => {
        const fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
      });
    });
    module2.exports = convert;
  }
});

// packages/playwright/bundles/expect/node_modules/ansi-styles/index.js
var require_ansi_styles = __commonJS({
  "packages/playwright/bundles/expect/node_modules/ansi-styles/index.js"(exports2, module2) {
    "use strict";
    var wrapAnsi16 = (fn, offset) => (...args) => {
      const code = fn(...args);
      return `\x1B[${code + offset}m`;
    };
    var wrapAnsi256 = (fn, offset) => (...args) => {
      const code = fn(...args);
      return `\x1B[${38 + offset};5;${code}m`;
    };
    var wrapAnsi16m = (fn, offset) => (...args) => {
      const rgb = fn(...args);
      return `\x1B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
    };
    var ansi2ansi = (n) => n;
    var rgb2rgb = (r, g, b) => [r, g, b];
    var setLazyProperty = (object, property, get) => {
      Object.defineProperty(object, property, {
        get: () => {
          const value = get();
          Object.defineProperty(object, property, {
            value,
            enumerable: true,
            configurable: true
          });
          return value;
        },
        enumerable: true,
        configurable: true
      });
    };
    var colorConvert;
    var makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
      if (colorConvert === void 0) {
        colorConvert = require_color_convert();
      }
      const offset = isBackground ? 10 : 0;
      const styles = {};
      for (const [sourceSpace, suite] of Object.entries(colorConvert)) {
        const name = sourceSpace === "ansi16" ? "ansi" : sourceSpace;
        if (sourceSpace === targetSpace) {
          styles[name] = wrap(identity, offset);
        } else if (typeof suite === "object") {
          styles[name] = wrap(suite[targetSpace], offset);
        }
      }
      return styles;
    };
    function assembleStyles() {
      const codes = /* @__PURE__ */ new Map();
      const styles = {
        modifier: {
          reset: [0, 0],
          // 21 isn't widely supported and 22 does the same thing
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          // Bright color
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          // Bright color
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      styles.color.gray = styles.color.blackBright;
      styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
      styles.color.grey = styles.color.blackBright;
      styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
      for (const [groupName, group] of Object.entries(styles)) {
        for (const [styleName, style] of Object.entries(group)) {
          styles[styleName] = {
            open: `\x1B[${style[0]}m`,
            close: `\x1B[${style[1]}m`
          };
          group[styleName] = styles[styleName];
          codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles, groupName, {
          value: group,
          enumerable: false
        });
      }
      Object.defineProperty(styles, "codes", {
        value: codes,
        enumerable: false
      });
      styles.color.close = "\x1B[39m";
      styles.bgColor.close = "\x1B[49m";
      setLazyProperty(styles.color, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, false));
      setLazyProperty(styles.color, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, false));
      setLazyProperty(styles.color, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, false));
      setLazyProperty(styles.bgColor, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, true));
      setLazyProperty(styles.bgColor, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, true));
      setLazyProperty(styles.bgColor, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, true));
      return styles;
    }
    Object.defineProperty(module2, "exports", {
      enumerable: true,
      get: assembleStyles
    });
  }
});

// packages/playwright/bundles/expect/node_modules/has-flag/index.js
var require_has_flag = __commonJS({
  "packages/playwright/bundles/expect/node_modules/has-flag/index.js"(exports2, module2) {
    "use strict";
    module2.exports = (flag, argv = process.argv) => {
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const position = argv.indexOf(prefix + flag);
      const terminatorPosition = argv.indexOf("--");
      return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
    };
  }
});

// packages/playwright/bundles/expect/node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "packages/playwright/bundles/expect/node_modules/supports-color/index.js"(exports2, module2) {
    "use strict";
    var os = require("os");
    var tty = require("tty");
    var hasFlag = require_has_flag();
    var { env } = process;
    var forceColor;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
      forceColor = 0;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = 1;
    }
    if ("FORCE_COLOR" in env) {
      if (env.FORCE_COLOR === "true") {
        forceColor = 1;
      } else if (env.FORCE_COLOR === "false") {
        forceColor = 0;
      } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
      }
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor(haveStream, streamIsTTY) {
      if (forceColor === 0) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (haveStream && !streamIsTTY && forceColor === void 0) {
        return 0;
      }
      const min = forceColor || 0;
      if (env.TERM === "dumb") {
        return min;
      }
      if (process.platform === "win32") {
        const osRelease = os.release().split(".");
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      return min;
    }
    function getSupportLevel(stream) {
      const level = supportsColor(stream, stream && stream.isTTY);
      return translateLevel(level);
    }
    module2.exports = {
      supportsColor: getSupportLevel,
      stdout: translateLevel(supportsColor(true, tty.isatty(1))),
      stderr: translateLevel(supportsColor(true, tty.isatty(2)))
    };
  }
});

// packages/playwright/bundles/expect/node_modules/chalk/source/util.js
var require_util = __commonJS({
  "packages/playwright/bundles/expect/node_modules/chalk/source/util.js"(exports2, module2) {
    "use strict";
    var stringReplaceAll = (string, substring, replacer) => {
      let index = string.indexOf(substring);
      if (index === -1) {
        return string;
      }
      const substringLength = substring.length;
      let endIndex = 0;
      let returnValue = "";
      do {
        returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
        endIndex = index + substringLength;
        index = string.indexOf(substring, endIndex);
      } while (index !== -1);
      returnValue += string.substr(endIndex);
      return returnValue;
    };
    var stringEncaseCRLFWithFirstIndex = (string, prefix, postfix, index) => {
      let endIndex = 0;
      let returnValue = "";
      do {
        const gotCR = string[index - 1] === "\r";
        returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
        endIndex = index + 1;
        index = string.indexOf("\n", endIndex);
      } while (index !== -1);
      returnValue += string.substr(endIndex);
      return returnValue;
    };
    module2.exports = {
      stringReplaceAll,
      stringEncaseCRLFWithFirstIndex
    };
  }
});

// packages/playwright/bundles/expect/node_modules/chalk/source/templates.js
var require_templates = __commonJS({
  "packages/playwright/bundles/expect/node_modules/chalk/source/templates.js"(exports2, module2) {
    "use strict";
    var TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
    var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
    var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
    var ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;
    var ESCAPES = /* @__PURE__ */ new Map([
      ["n", "\n"],
      ["r", "\r"],
      ["t", "	"],
      ["b", "\b"],
      ["f", "\f"],
      ["v", "\v"],
      ["0", "\0"],
      ["\\", "\\"],
      ["e", "\x1B"],
      ["a", "\x07"]
    ]);
    function unescape(c) {
      const u = c[0] === "u";
      const bracket = c[1] === "{";
      if (u && !bracket && c.length === 5 || c[0] === "x" && c.length === 3) {
        return String.fromCharCode(parseInt(c.slice(1), 16));
      }
      if (u && bracket) {
        return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
      }
      return ESCAPES.get(c) || c;
    }
    function parseArguments(name, arguments_) {
      const results = [];
      const chunks = arguments_.trim().split(/\s*,\s*/g);
      let matches;
      for (const chunk of chunks) {
        const number = Number(chunk);
        if (!Number.isNaN(number)) {
          results.push(number);
        } else if (matches = chunk.match(STRING_REGEX)) {
          results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, character) => escape ? unescape(escape) : character));
        } else {
          throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
        }
      }
      return results;
    }
    function parseStyle(style) {
      STYLE_REGEX.lastIndex = 0;
      const results = [];
      let matches;
      while ((matches = STYLE_REGEX.exec(style)) !== null) {
        const name = matches[1];
        if (matches[2]) {
          const args = parseArguments(name, matches[2]);
          results.push([name].concat(args));
        } else {
          results.push([name]);
        }
      }
      return results;
    }
    function buildStyle(chalk, styles) {
      const enabled = {};
      for (const layer of styles) {
        for (const style of layer.styles) {
          enabled[style[0]] = layer.inverse ? null : style.slice(1);
        }
      }
      let current = chalk;
      for (const [styleName, styles2] of Object.entries(enabled)) {
        if (!Array.isArray(styles2)) {
          continue;
        }
        if (!(styleName in current)) {
          throw new Error(`Unknown Chalk style: ${styleName}`);
        }
        current = styles2.length > 0 ? current[styleName](...styles2) : current[styleName];
      }
      return current;
    }
    module2.exports = (chalk, temporary) => {
      const styles = [];
      const chunks = [];
      let chunk = [];
      temporary.replace(TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character) => {
        if (escapeCharacter) {
          chunk.push(unescape(escapeCharacter));
        } else if (style) {
          const string = chunk.join("");
          chunk = [];
          chunks.push(styles.length === 0 ? string : buildStyle(chalk, styles)(string));
          styles.push({ inverse, styles: parseStyle(style) });
        } else if (close) {
          if (styles.length === 0) {
            throw new Error("Found extraneous } in Chalk template literal");
          }
          chunks.push(buildStyle(chalk, styles)(chunk.join("")));
          chunk = [];
          styles.pop();
        } else {
          chunk.push(character);
        }
      });
      chunks.push(chunk.join(""));
      if (styles.length > 0) {
        const errMessage = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? "" : "s"} (\`}\`)`;
        throw new Error(errMessage);
      }
      return chunks.join("");
    };
  }
});

// packages/playwright/bundles/expect/node_modules/chalk/source/index.js
var require_source = __commonJS({
  "packages/playwright/bundles/expect/node_modules/chalk/source/index.js"(exports2, module2) {
    "use strict";
    var ansiStyles = require_ansi_styles();
    var { stdout: stdoutColor, stderr: stderrColor } = require_supports_color();
    var {
      stringReplaceAll,
      stringEncaseCRLFWithFirstIndex
    } = require_util();
    var { isArray } = Array;
    var levelMapping = [
      "ansi",
      "ansi",
      "ansi256",
      "ansi16m"
    ];
    var styles = /* @__PURE__ */ Object.create(null);
    var applyOptions = (object, options = {}) => {
      if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
        throw new Error("The `level` option should be an integer from 0 to 3");
      }
      const colorLevel = stdoutColor ? stdoutColor.level : 0;
      object.level = options.level === void 0 ? colorLevel : options.level;
    };
    var ChalkClass = class {
      constructor(options) {
        return chalkFactory(options);
      }
    };
    var chalkFactory = (options) => {
      const chalk2 = {};
      applyOptions(chalk2, options);
      chalk2.template = (...arguments_) => chalkTag(chalk2.template, ...arguments_);
      Object.setPrototypeOf(chalk2, Chalk.prototype);
      Object.setPrototypeOf(chalk2.template, chalk2);
      chalk2.template.constructor = () => {
        throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
      };
      chalk2.template.Instance = ChalkClass;
      return chalk2.template;
    };
    function Chalk(options) {
      return chalkFactory(options);
    }
    for (const [styleName, style] of Object.entries(ansiStyles)) {
      styles[styleName] = {
        get() {
          const builder = createBuilder(this, createStyler(style.open, style.close, this._styler), this._isEmpty);
          Object.defineProperty(this, styleName, { value: builder });
          return builder;
        }
      };
    }
    styles.visible = {
      get() {
        const builder = createBuilder(this, this._styler, true);
        Object.defineProperty(this, "visible", { value: builder });
        return builder;
      }
    };
    var usedModels = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
    for (const model of usedModels) {
      styles[model] = {
        get() {
          const { level } = this;
          return function(...arguments_) {
            const styler = createStyler(ansiStyles.color[levelMapping[level]][model](...arguments_), ansiStyles.color.close, this._styler);
            return createBuilder(this, styler, this._isEmpty);
          };
        }
      };
    }
    for (const model of usedModels) {
      const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
      styles[bgModel] = {
        get() {
          const { level } = this;
          return function(...arguments_) {
            const styler = createStyler(ansiStyles.bgColor[levelMapping[level]][model](...arguments_), ansiStyles.bgColor.close, this._styler);
            return createBuilder(this, styler, this._isEmpty);
          };
        }
      };
    }
    var proto = Object.defineProperties(() => {
    }, {
      ...styles,
      level: {
        enumerable: true,
        get() {
          return this._generator.level;
        },
        set(level) {
          this._generator.level = level;
        }
      }
    });
    var createStyler = (open, close, parent) => {
      let openAll;
      let closeAll;
      if (parent === void 0) {
        openAll = open;
        closeAll = close;
      } else {
        openAll = parent.openAll + open;
        closeAll = close + parent.closeAll;
      }
      return {
        open,
        close,
        openAll,
        closeAll,
        parent
      };
    };
    var createBuilder = (self, _styler, _isEmpty) => {
      const builder = (...arguments_) => {
        if (isArray(arguments_[0]) && isArray(arguments_[0].raw)) {
          return applyStyle(builder, chalkTag(builder, ...arguments_));
        }
        return applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
      };
      Object.setPrototypeOf(builder, proto);
      builder._generator = self;
      builder._styler = _styler;
      builder._isEmpty = _isEmpty;
      return builder;
    };
    var applyStyle = (self, string) => {
      if (self.level <= 0 || !string) {
        return self._isEmpty ? "" : string;
      }
      let styler = self._styler;
      if (styler === void 0) {
        return string;
      }
      const { openAll, closeAll } = styler;
      if (string.indexOf("\x1B") !== -1) {
        while (styler !== void 0) {
          string = stringReplaceAll(string, styler.close, styler.open);
          styler = styler.parent;
        }
      }
      const lfIndex = string.indexOf("\n");
      if (lfIndex !== -1) {
        string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
      }
      return openAll + string + closeAll;
    };
    var template;
    var chalkTag = (chalk2, ...strings) => {
      const [firstString] = strings;
      if (!isArray(firstString) || !isArray(firstString.raw)) {
        return strings.join(" ");
      }
      const arguments_ = strings.slice(1);
      const parts = [firstString.raw[0]];
      for (let i = 1; i < firstString.length; i++) {
        parts.push(
          String(arguments_[i - 1]).replace(/[{}\\]/g, "\\$&"),
          String(firstString.raw[i])
        );
      }
      if (template === void 0) {
        template = require_templates();
      }
      return template(chalk2, parts.join(""));
    };
    Object.defineProperties(Chalk.prototype, styles);
    var chalk = Chalk();
    chalk.supportsColor = stdoutColor;
    chalk.stderr = Chalk({ level: stderrColor ? stderrColor.level : 0 });
    chalk.stderr.supportsColor = stderrColor;
    module2.exports = chalk;
  }
});

// packages/playwright/bundles/expect/node_modules/jest-get-type/build/index.js
var require_build = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-get-type/build/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.getType = getType4;
    exports2.isPrimitive = void 0;
    function getType4(value) {
      if (value === void 0) {
        return "undefined";
      } else if (value === null) {
        return "null";
      } else if (Array.isArray(value)) {
        return "array";
      } else if (typeof value === "boolean") {
        return "boolean";
      } else if (typeof value === "function") {
        return "function";
      } else if (typeof value === "number") {
        return "number";
      } else if (typeof value === "string") {
        return "string";
      } else if (typeof value === "bigint") {
        return "bigint";
      } else if (typeof value === "object") {
        if (value != null) {
          if (value.constructor === RegExp) {
            return "regexp";
          } else if (value.constructor === Map) {
            return "map";
          } else if (value.constructor === Set) {
            return "set";
          } else if (value.constructor === Date) {
            return "date";
          }
        }
        return "object";
      } else if (typeof value === "symbol") {
        return "symbol";
      }
      throw new Error(`value of unknown type: ${value}`);
    }
    var isPrimitive3 = (value) => Object(value) !== value;
    exports2.isPrimitive = isPrimitive3;
  }
});

// packages/playwright/bundles/expect/node_modules/pretty-format/node_modules/ansi-styles/index.js
var require_ansi_styles2 = __commonJS({
  "packages/playwright/bundles/expect/node_modules/pretty-format/node_modules/ansi-styles/index.js"(exports2, module2) {
    "use strict";
    var ANSI_BACKGROUND_OFFSET = 10;
    var wrapAnsi256 = (offset = 0) => (code) => `\x1B[${38 + offset};5;${code}m`;
    var wrapAnsi16m = (offset = 0) => (red, green, blue) => `\x1B[${38 + offset};2;${red};${green};${blue}m`;
    function assembleStyles() {
      const codes = /* @__PURE__ */ new Map();
      const styles = {
        modifier: {
          reset: [0, 0],
          // 21 isn't widely supported and 22 does the same thing
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          overline: [53, 55],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          // Bright color
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          // Bright color
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      styles.color.gray = styles.color.blackBright;
      styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
      styles.color.grey = styles.color.blackBright;
      styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
      for (const [groupName, group] of Object.entries(styles)) {
        for (const [styleName, style] of Object.entries(group)) {
          styles[styleName] = {
            open: `\x1B[${style[0]}m`,
            close: `\x1B[${style[1]}m`
          };
          group[styleName] = styles[styleName];
          codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles, groupName, {
          value: group,
          enumerable: false
        });
      }
      Object.defineProperty(styles, "codes", {
        value: codes,
        enumerable: false
      });
      styles.color.close = "\x1B[39m";
      styles.bgColor.close = "\x1B[49m";
      styles.color.ansi256 = wrapAnsi256();
      styles.color.ansi16m = wrapAnsi16m();
      styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
      styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
      Object.defineProperties(styles, {
        rgbToAnsi256: {
          value: (red, green, blue) => {
            if (red === green && green === blue) {
              if (red < 8) {
                return 16;
              }
              if (red > 248) {
                return 231;
              }
              return Math.round((red - 8) / 247 * 24) + 232;
            }
            return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
          },
          enumerable: false
        },
        hexToRgb: {
          value: (hex) => {
            const matches = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(hex.toString(16));
            if (!matches) {
              return [0, 0, 0];
            }
            let { colorString } = matches.groups;
            if (colorString.length === 3) {
              colorString = colorString.split("").map((character) => character + character).join("");
            }
            const integer = Number.parseInt(colorString, 16);
            return [
              integer >> 16 & 255,
              integer >> 8 & 255,
              integer & 255
            ];
          },
          enumerable: false
        },
        hexToAnsi256: {
          value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
          enumerable: false
        }
      });
      return styles;
    }
    Object.defineProperty(module2, "exports", {
      enumerable: true,
      get: assembleStyles
    });
  }
});

// packages/playwright/bundles/expect/node_modules/pretty-format/build/collections.js
var require_collections = __commonJS({
  "packages/playwright/bundles/expect/node_modules/pretty-format/build/collections.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.printIteratorEntries = printIteratorEntries;
    exports2.printIteratorValues = printIteratorValues;
    exports2.printListItems = printListItems;
    exports2.printObjectProperties = printObjectProperties;
    var getKeysOfEnumerableProperties = (object, compareKeys) => {
      const rawKeys = Object.keys(object);
      const keys = compareKeys !== null ? rawKeys.sort(compareKeys) : rawKeys;
      if (Object.getOwnPropertySymbols) {
        Object.getOwnPropertySymbols(object).forEach((symbol) => {
          if (Object.getOwnPropertyDescriptor(object, symbol).enumerable) {
            keys.push(symbol);
          }
        });
      }
      return keys;
    };
    function printIteratorEntries(iterator, config, indentation2, depth, refs, printer, separator = ": ") {
      let result = "";
      let width = 0;
      let current = iterator.next();
      if (!current.done) {
        result += config.spacingOuter;
        const indentationNext = indentation2 + config.indent;
        while (!current.done) {
          result += indentationNext;
          if (width++ === config.maxWidth) {
            result += "\u2026";
            break;
          }
          const name = printer(
            current.value[0],
            config,
            indentationNext,
            depth,
            refs
          );
          const value = printer(
            current.value[1],
            config,
            indentationNext,
            depth,
            refs
          );
          result += name + separator + value;
          current = iterator.next();
          if (!current.done) {
            result += `,${config.spacingInner}`;
          } else if (!config.min) {
            result += ",";
          }
        }
        result += config.spacingOuter + indentation2;
      }
      return result;
    }
    function printIteratorValues(iterator, config, indentation2, depth, refs, printer) {
      let result = "";
      let width = 0;
      let current = iterator.next();
      if (!current.done) {
        result += config.spacingOuter;
        const indentationNext = indentation2 + config.indent;
        while (!current.done) {
          result += indentationNext;
          if (width++ === config.maxWidth) {
            result += "\u2026";
            break;
          }
          result += printer(current.value, config, indentationNext, depth, refs);
          current = iterator.next();
          if (!current.done) {
            result += `,${config.spacingInner}`;
          } else if (!config.min) {
            result += ",";
          }
        }
        result += config.spacingOuter + indentation2;
      }
      return result;
    }
    function printListItems(list, config, indentation2, depth, refs, printer) {
      let result = "";
      if (list.length) {
        result += config.spacingOuter;
        const indentationNext = indentation2 + config.indent;
        for (let i = 0; i < list.length; i++) {
          result += indentationNext;
          if (i === config.maxWidth) {
            result += "\u2026";
            break;
          }
          if (i in list) {
            result += printer(list[i], config, indentationNext, depth, refs);
          }
          if (i < list.length - 1) {
            result += `,${config.spacingInner}`;
          } else if (!config.min) {
            result += ",";
          }
        }
        result += config.spacingOuter + indentation2;
      }
      return result;
    }
    function printObjectProperties(val, config, indentation2, depth, refs, printer) {
      let result = "";
      const keys = getKeysOfEnumerableProperties(val, config.compareKeys);
      if (keys.length) {
        result += config.spacingOuter;
        const indentationNext = indentation2 + config.indent;
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          const name = printer(key, config, indentationNext, depth, refs);
          const value = printer(val[key], config, indentationNext, depth, refs);
          result += `${indentationNext + name}: ${value}`;
          if (i < keys.length - 1) {
            result += `,${config.spacingInner}`;
          } else if (!config.min) {
            result += ",";
          }
        }
        result += config.spacingOuter + indentation2;
      }
      return result;
    }
  }
});

// packages/playwright/bundles/expect/node_modules/pretty-format/build/plugins/AsymmetricMatcher.js
var require_AsymmetricMatcher = __commonJS({
  "packages/playwright/bundles/expect/node_modules/pretty-format/build/plugins/AsymmetricMatcher.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.test = exports2.serialize = exports2.default = void 0;
    var _collections = require_collections();
    var Symbol2 = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
    var asymmetricMatcher = typeof Symbol2 === "function" && Symbol2.for ? Symbol2.for("jest.asymmetricMatcher") : 1267621;
    var SPACE = " ";
    var serialize = (val, config, indentation2, depth, refs, printer) => {
      const stringedValue = val.toString();
      if (stringedValue === "ArrayContaining" || stringedValue === "ArrayNotContaining") {
        if (++depth > config.maxDepth) {
          return `[${stringedValue}]`;
        }
        return `${stringedValue + SPACE}[${(0, _collections.printListItems)(
          val.sample,
          config,
          indentation2,
          depth,
          refs,
          printer
        )}]`;
      }
      if (stringedValue === "ObjectContaining" || stringedValue === "ObjectNotContaining") {
        if (++depth > config.maxDepth) {
          return `[${stringedValue}]`;
        }
        return `${stringedValue + SPACE}{${(0, _collections.printObjectProperties)(
          val.sample,
          config,
          indentation2,
          depth,
          refs,
          printer
        )}}`;
      }
      if (stringedValue === "StringMatching" || stringedValue === "StringNotMatching") {
        return stringedValue + SPACE + printer(val.sample, config, indentation2, depth, refs);
      }
      if (stringedValue === "StringContaining" || stringedValue === "StringNotContaining") {
        return stringedValue + SPACE + printer(val.sample, config, indentation2, depth, refs);
      }
      if (typeof val.toAsymmetricMatcher !== "function") {
        throw new Error(
          `Asymmetric matcher ${val.constructor.name} does not implement toAsymmetricMatcher()`
        );
      }
      return val.toAsymmetricMatcher();
    };
    exports2.serialize = serialize;
    var test = (val) => val && val.$$typeof === asymmetricMatcher;
    exports2.test = test;
    var plugin = {
      serialize,
      test
    };
    var _default = plugin;
    exports2.default = _default;
  }
});

// packages/playwright/bundles/expect/node_modules/pretty-format/build/plugins/DOMCollection.js
var require_DOMCollection = __commonJS({
  "packages/playwright/bundles/expect/node_modules/pretty-format/build/plugins/DOMCollection.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.test = exports2.serialize = exports2.default = void 0;
    var _collections = require_collections();
    var SPACE = " ";
    var OBJECT_NAMES = ["DOMStringMap", "NamedNodeMap"];
    var ARRAY_REGEXP = /^(HTML\w*Collection|NodeList)$/;
    var testName = (name) => OBJECT_NAMES.indexOf(name) !== -1 || ARRAY_REGEXP.test(name);
    var test = (val) => val && val.constructor && !!val.constructor.name && testName(val.constructor.name);
    exports2.test = test;
    var isNamedNodeMap = (collection) => collection.constructor.name === "NamedNodeMap";
    var serialize = (collection, config, indentation2, depth, refs, printer) => {
      const name = collection.constructor.name;
      if (++depth > config.maxDepth) {
        return `[${name}]`;
      }
      return (config.min ? "" : name + SPACE) + (OBJECT_NAMES.indexOf(name) !== -1 ? `{${(0, _collections.printObjectProperties)(
        isNamedNodeMap(collection) ? Array.from(collection).reduce((props, attribute) => {
          props[attribute.name] = attribute.value;
          return props;
        }, {}) : {
          ...collection
        },
        config,
        indentation2,
        depth,
        refs,
        printer
      )}}` : `[${(0, _collections.printListItems)(
        Array.from(collection),
        config,
        indentation2,
        depth,
        refs,
        printer
      )}]`);
    };
    exports2.serialize = serialize;
    var plugin = {
      serialize,
      test
    };
    var _default = plugin;
    exports2.default = _default;
  }
});

// packages/playwright/bundles/expect/node_modules/pretty-format/build/plugins/lib/escapeHTML.js
var require_escapeHTML = __commonJS({
  "packages/playwright/bundles/expect/node_modules/pretty-format/build/plugins/lib/escapeHTML.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = escapeHTML;
    function escapeHTML(str) {
      return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
  }
});

// packages/playwright/bundles/expect/node_modules/pretty-format/build/plugins/lib/markup.js
var require_markup = __commonJS({
  "packages/playwright/bundles/expect/node_modules/pretty-format/build/plugins/lib/markup.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.printText = exports2.printProps = exports2.printElementAsLeaf = exports2.printElement = exports2.printComment = exports2.printChildren = void 0;
    var _escapeHTML = _interopRequireDefault(require_escapeHTML());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var printProps = (keys, props, config, indentation2, depth, refs, printer) => {
      const indentationNext = indentation2 + config.indent;
      const colors = config.colors;
      return keys.map((key) => {
        const value = props[key];
        let printed = printer(value, config, indentationNext, depth, refs);
        if (typeof value !== "string") {
          if (printed.indexOf("\n") !== -1) {
            printed = config.spacingOuter + indentationNext + printed + config.spacingOuter + indentation2;
          }
          printed = `{${printed}}`;
        }
        return `${config.spacingInner + indentation2 + colors.prop.open + key + colors.prop.close}=${colors.value.open}${printed}${colors.value.close}`;
      }).join("");
    };
    exports2.printProps = printProps;
    var printChildren = (children, config, indentation2, depth, refs, printer) => children.map(
      (child) => config.spacingOuter + indentation2 + (typeof child === "string" ? printText(child, config) : printer(child, config, indentation2, depth, refs))
    ).join("");
    exports2.printChildren = printChildren;
    var printText = (text, config) => {
      const contentColor = config.colors.content;
      return contentColor.open + (0, _escapeHTML.default)(text) + contentColor.close;
    };
    exports2.printText = printText;
    var printComment = (comment, config) => {
      const commentColor = config.colors.comment;
      return `${commentColor.open}<!--${(0, _escapeHTML.default)(comment)}-->${commentColor.close}`;
    };
    exports2.printComment = printComment;
    var printElement = (type, printedProps, printedChildren, config, indentation2) => {
      const tagColor = config.colors.tag;
      return `${tagColor.open}<${type}${printedProps && tagColor.close + printedProps + config.spacingOuter + indentation2 + tagColor.open}${printedChildren ? `>${tagColor.close}${printedChildren}${config.spacingOuter}${indentation2}${tagColor.open}</${type}` : `${printedProps && !config.min ? "" : " "}/`}>${tagColor.close}`;
    };
    exports2.printElement = printElement;
    var printElementAsLeaf = (type, config) => {
      const tagColor = config.colors.tag;
      return `${tagColor.open}<${type}${tagColor.close} \u2026${tagColor.open} />${tagColor.close}`;
    };
    exports2.printElementAsLeaf = printElementAsLeaf;
  }
});

// packages/playwright/bundles/expect/node_modules/pretty-format/build/plugins/DOMElement.js
var require_DOMElement = __commonJS({
  "packages/playwright/bundles/expect/node_modules/pretty-format/build/plugins/DOMElement.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.test = exports2.serialize = exports2.default = void 0;
    var _markup = require_markup();
    var ELEMENT_NODE = 1;
    var TEXT_NODE = 3;
    var COMMENT_NODE = 8;
    var FRAGMENT_NODE = 11;
    var ELEMENT_REGEXP = /^((HTML|SVG)\w*)?Element$/;
    var testHasAttribute = (val) => {
      try {
        return typeof val.hasAttribute === "function" && val.hasAttribute("is");
      } catch {
        return false;
      }
    };
    var testNode = (val) => {
      const constructorName = val.constructor.name;
      const { nodeType, tagName } = val;
      const isCustomElement = typeof tagName === "string" && tagName.includes("-") || testHasAttribute(val);
      return nodeType === ELEMENT_NODE && (ELEMENT_REGEXP.test(constructorName) || isCustomElement) || nodeType === TEXT_NODE && constructorName === "Text" || nodeType === COMMENT_NODE && constructorName === "Comment" || nodeType === FRAGMENT_NODE && constructorName === "DocumentFragment";
    };
    var test = (val) => {
      var _a;
      return ((_a = val == null ? void 0 : val.constructor) == null ? void 0 : _a.name) && testNode(val);
    };
    exports2.test = test;
    function nodeIsText(node) {
      return node.nodeType === TEXT_NODE;
    }
    function nodeIsComment(node) {
      return node.nodeType === COMMENT_NODE;
    }
    function nodeIsFragment(node) {
      return node.nodeType === FRAGMENT_NODE;
    }
    var serialize = (node, config, indentation2, depth, refs, printer) => {
      if (nodeIsText(node)) {
        return (0, _markup.printText)(node.data, config);
      }
      if (nodeIsComment(node)) {
        return (0, _markup.printComment)(node.data, config);
      }
      const type = nodeIsFragment(node) ? "DocumentFragment" : node.tagName.toLowerCase();
      if (++depth > config.maxDepth) {
        return (0, _markup.printElementAsLeaf)(type, config);
      }
      return (0, _markup.printElement)(
        type,
        (0, _markup.printProps)(
          nodeIsFragment(node) ? [] : Array.from(node.attributes, (attr) => attr.name).sort(),
          nodeIsFragment(node) ? {} : Array.from(node.attributes).reduce((props, attribute) => {
            props[attribute.name] = attribute.value;
            return props;
          }, {}),
          config,
          indentation2 + config.indent,
          depth,
          refs,
          printer
        ),
        (0, _markup.printChildren)(
          Array.prototype.slice.call(node.childNodes || node.children),
          config,
          indentation2 + config.indent,
          depth,
          refs,
          printer
        ),
        config,
        indentation2
      );
    };
    exports2.serialize = serialize;
    var plugin = {
      serialize,
      test
    };
    var _default = plugin;
    exports2.default = _default;
  }
});

// packages/playwright/bundles/expect/node_modules/pretty-format/build/plugins/Immutable.js
var require_Immutable = __commonJS({
  "packages/playwright/bundles/expect/node_modules/pretty-format/build/plugins/Immutable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.test = exports2.serialize = exports2.default = void 0;
    var _collections = require_collections();
    var IS_ITERABLE_SENTINEL = "@@__IMMUTABLE_ITERABLE__@@";
    var IS_LIST_SENTINEL = "@@__IMMUTABLE_LIST__@@";
    var IS_KEYED_SENTINEL = "@@__IMMUTABLE_KEYED__@@";
    var IS_MAP_SENTINEL = "@@__IMMUTABLE_MAP__@@";
    var IS_ORDERED_SENTINEL = "@@__IMMUTABLE_ORDERED__@@";
    var IS_RECORD_SENTINEL = "@@__IMMUTABLE_RECORD__@@";
    var IS_SEQ_SENTINEL = "@@__IMMUTABLE_SEQ__@@";
    var IS_SET_SENTINEL = "@@__IMMUTABLE_SET__@@";
    var IS_STACK_SENTINEL = "@@__IMMUTABLE_STACK__@@";
    var getImmutableName = (name) => `Immutable.${name}`;
    var printAsLeaf = (name) => `[${name}]`;
    var SPACE = " ";
    var LAZY = "\u2026";
    var printImmutableEntries = (val, config, indentation2, depth, refs, printer, type) => ++depth > config.maxDepth ? printAsLeaf(getImmutableName(type)) : `${getImmutableName(type) + SPACE}{${(0, _collections.printIteratorEntries)(
      val.entries(),
      config,
      indentation2,
      depth,
      refs,
      printer
    )}}`;
    function getRecordEntries(val) {
      let i = 0;
      return {
        next() {
          if (i < val._keys.length) {
            const key = val._keys[i++];
            return {
              done: false,
              value: [key, val.get(key)]
            };
          }
          return {
            done: true,
            value: void 0
          };
        }
      };
    }
    var printImmutableRecord = (val, config, indentation2, depth, refs, printer) => {
      const name = getImmutableName(val._name || "Record");
      return ++depth > config.maxDepth ? printAsLeaf(name) : `${name + SPACE}{${(0, _collections.printIteratorEntries)(
        getRecordEntries(val),
        config,
        indentation2,
        depth,
        refs,
        printer
      )}}`;
    };
    var printImmutableSeq = (val, config, indentation2, depth, refs, printer) => {
      const name = getImmutableName("Seq");
      if (++depth > config.maxDepth) {
        return printAsLeaf(name);
      }
      if (val[IS_KEYED_SENTINEL]) {
        return `${name + SPACE}{${// from Immutable collection of entries or from ECMAScript object
        val._iter || val._object ? (0, _collections.printIteratorEntries)(
          val.entries(),
          config,
          indentation2,
          depth,
          refs,
          printer
        ) : LAZY}}`;
      }
      return `${name + SPACE}[${val._iter || // from Immutable collection of values
      val._array || // from ECMAScript array
      val._collection || // from ECMAScript collection in immutable v4
      val._iterable ? (0, _collections.printIteratorValues)(
        val.values(),
        config,
        indentation2,
        depth,
        refs,
        printer
      ) : LAZY}]`;
    };
    var printImmutableValues = (val, config, indentation2, depth, refs, printer, type) => ++depth > config.maxDepth ? printAsLeaf(getImmutableName(type)) : `${getImmutableName(type) + SPACE}[${(0, _collections.printIteratorValues)(
      val.values(),
      config,
      indentation2,
      depth,
      refs,
      printer
    )}]`;
    var serialize = (val, config, indentation2, depth, refs, printer) => {
      if (val[IS_MAP_SENTINEL]) {
        return printImmutableEntries(
          val,
          config,
          indentation2,
          depth,
          refs,
          printer,
          val[IS_ORDERED_SENTINEL] ? "OrderedMap" : "Map"
        );
      }
      if (val[IS_LIST_SENTINEL]) {
        return printImmutableValues(
          val,
          config,
          indentation2,
          depth,
          refs,
          printer,
          "List"
        );
      }
      if (val[IS_SET_SENTINEL]) {
        return printImmutableValues(
          val,
          config,
          indentation2,
          depth,
          refs,
          printer,
          val[IS_ORDERED_SENTINEL] ? "OrderedSet" : "Set"
        );
      }
      if (val[IS_STACK_SENTINEL]) {
        return printImmutableValues(
          val,
          config,
          indentation2,
          depth,
          refs,
          printer,
          "Stack"
        );
      }
      if (val[IS_SEQ_SENTINEL]) {
        return printImmutableSeq(val, config, indentation2, depth, refs, printer);
      }
      return printImmutableRecord(val, config, indentation2, depth, refs, printer);
    };
    exports2.serialize = serialize;
    var test = (val) => val && (val[IS_ITERABLE_SENTINEL] === true || val[IS_RECORD_SENTINEL] === true);
    exports2.test = test;
    var plugin = {
      serialize,
      test
    };
    var _default = plugin;
    exports2.default = _default;
  }
});

// packages/playwright/bundles/expect/node_modules/react-is/cjs/react-is.production.min.js
var require_react_is_production_min = __commonJS({
  "packages/playwright/bundles/expect/node_modules/react-is/cjs/react-is.production.min.js"(exports2) {
    "use strict";
    var b = Symbol.for("react.element");
    var c = Symbol.for("react.portal");
    var d = Symbol.for("react.fragment");
    var e = Symbol.for("react.strict_mode");
    var f = Symbol.for("react.profiler");
    var g = Symbol.for("react.provider");
    var h = Symbol.for("react.context");
    var k = Symbol.for("react.server_context");
    var l = Symbol.for("react.forward_ref");
    var m = Symbol.for("react.suspense");
    var n = Symbol.for("react.suspense_list");
    var p = Symbol.for("react.memo");
    var q = Symbol.for("react.lazy");
    var t = Symbol.for("react.offscreen");
    var u;
    u = Symbol.for("react.module.reference");
    function v(a) {
      if ("object" === typeof a && null !== a) {
        var r = a.$$typeof;
        switch (r) {
          case b:
            switch (a = a.type, a) {
              case d:
              case f:
              case e:
              case m:
              case n:
                return a;
              default:
                switch (a = a && a.$$typeof, a) {
                  case k:
                  case h:
                  case l:
                  case q:
                  case p:
                  case g:
                    return a;
                  default:
                    return r;
                }
            }
          case c:
            return r;
        }
      }
    }
    exports2.ContextConsumer = h;
    exports2.ContextProvider = g;
    exports2.Element = b;
    exports2.ForwardRef = l;
    exports2.Fragment = d;
    exports2.Lazy = q;
    exports2.Memo = p;
    exports2.Portal = c;
    exports2.Profiler = f;
    exports2.StrictMode = e;
    exports2.Suspense = m;
    exports2.SuspenseList = n;
    exports2.isAsyncMode = function() {
      return false;
    };
    exports2.isConcurrentMode = function() {
      return false;
    };
    exports2.isContextConsumer = function(a) {
      return v(a) === h;
    };
    exports2.isContextProvider = function(a) {
      return v(a) === g;
    };
    exports2.isElement = function(a) {
      return "object" === typeof a && null !== a && a.$$typeof === b;
    };
    exports2.isForwardRef = function(a) {
      return v(a) === l;
    };
    exports2.isFragment = function(a) {
      return v(a) === d;
    };
    exports2.isLazy = function(a) {
      return v(a) === q;
    };
    exports2.isMemo = function(a) {
      return v(a) === p;
    };
    exports2.isPortal = function(a) {
      return v(a) === c;
    };
    exports2.isProfiler = function(a) {
      return v(a) === f;
    };
    exports2.isStrictMode = function(a) {
      return v(a) === e;
    };
    exports2.isSuspense = function(a) {
      return v(a) === m;
    };
    exports2.isSuspenseList = function(a) {
      return v(a) === n;
    };
    exports2.isValidElementType = function(a) {
      return "string" === typeof a || "function" === typeof a || a === d || a === f || a === e || a === m || a === n || a === t || "object" === typeof a && null !== a && (a.$$typeof === q || a.$$typeof === p || a.$$typeof === g || a.$$typeof === h || a.$$typeof === l || a.$$typeof === u || void 0 !== a.getModuleId) ? true : false;
    };
    exports2.typeOf = v;
  }
});

// packages/playwright/bundles/expect/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "packages/playwright/bundles/expect/node_modules/react-is/cjs/react-is.development.js"(exports2) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_SERVER_CONTEXT_TYPE:
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        function isSuspenseList(object) {
          return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
        }
        exports2.ContextConsumer = ContextConsumer;
        exports2.ContextProvider = ContextProvider;
        exports2.Element = Element;
        exports2.ForwardRef = ForwardRef;
        exports2.Fragment = Fragment;
        exports2.Lazy = Lazy;
        exports2.Memo = Memo;
        exports2.Portal = Portal;
        exports2.Profiler = Profiler;
        exports2.StrictMode = StrictMode;
        exports2.Suspense = Suspense;
        exports2.SuspenseList = SuspenseList;
        exports2.isAsyncMode = isAsyncMode;
        exports2.isConcurrentMode = isConcurrentMode;
        exports2.isContextConsumer = isContextConsumer;
        exports2.isContextProvider = isContextProvider;
        exports2.isElement = isElement;
        exports2.isForwardRef = isForwardRef;
        exports2.isFragment = isFragment;
        exports2.isLazy = isLazy;
        exports2.isMemo = isMemo;
        exports2.isPortal = isPortal;
        exports2.isProfiler = isProfiler;
        exports2.isStrictMode = isStrictMode;
        exports2.isSuspense = isSuspense;
        exports2.isSuspenseList = isSuspenseList;
        exports2.isValidElementType = isValidElementType;
        exports2.typeOf = typeOf;
      })();
    }
  }
});

// packages/playwright/bundles/expect/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "packages/playwright/bundles/expect/node_modules/react-is/index.js"(exports2, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_react_is_production_min();
    } else {
      module2.exports = require_react_is_development();
    }
  }
});

// packages/playwright/bundles/expect/node_modules/pretty-format/build/plugins/ReactElement.js
var require_ReactElement = __commonJS({
  "packages/playwright/bundles/expect/node_modules/pretty-format/build/plugins/ReactElement.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.test = exports2.serialize = exports2.default = void 0;
    var ReactIs = _interopRequireWildcard(require_react_is());
    var _markup = require_markup();
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function") return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    var getChildren = (arg, children = []) => {
      if (Array.isArray(arg)) {
        arg.forEach((item) => {
          getChildren(item, children);
        });
      } else if (arg != null && arg !== false) {
        children.push(arg);
      }
      return children;
    };
    var getType4 = (element) => {
      const type = element.type;
      if (typeof type === "string") {
        return type;
      }
      if (typeof type === "function") {
        return type.displayName || type.name || "Unknown";
      }
      if (ReactIs.isFragment(element)) {
        return "React.Fragment";
      }
      if (ReactIs.isSuspense(element)) {
        return "React.Suspense";
      }
      if (typeof type === "object" && type !== null) {
        if (ReactIs.isContextProvider(element)) {
          return "Context.Provider";
        }
        if (ReactIs.isContextConsumer(element)) {
          return "Context.Consumer";
        }
        if (ReactIs.isForwardRef(element)) {
          if (type.displayName) {
            return type.displayName;
          }
          const functionName = type.render.displayName || type.render.name || "";
          return functionName !== "" ? `ForwardRef(${functionName})` : "ForwardRef";
        }
        if (ReactIs.isMemo(element)) {
          const functionName = type.displayName || type.type.displayName || type.type.name || "";
          return functionName !== "" ? `Memo(${functionName})` : "Memo";
        }
      }
      return "UNDEFINED";
    };
    var getPropKeys = (element) => {
      const { props } = element;
      return Object.keys(props).filter((key) => key !== "children" && props[key] !== void 0).sort();
    };
    var serialize = (element, config, indentation2, depth, refs, printer) => ++depth > config.maxDepth ? (0, _markup.printElementAsLeaf)(getType4(element), config) : (0, _markup.printElement)(
      getType4(element),
      (0, _markup.printProps)(
        getPropKeys(element),
        element.props,
        config,
        indentation2 + config.indent,
        depth,
        refs,
        printer
      ),
      (0, _markup.printChildren)(
        getChildren(element.props.children),
        config,
        indentation2 + config.indent,
        depth,
        refs,
        printer
      ),
      config,
      indentation2
    );
    exports2.serialize = serialize;
    var test = (val) => val != null && ReactIs.isElement(val);
    exports2.test = test;
    var plugin = {
      serialize,
      test
    };
    var _default = plugin;
    exports2.default = _default;
  }
});

// packages/playwright/bundles/expect/node_modules/pretty-format/build/plugins/ReactTestComponent.js
var require_ReactTestComponent = __commonJS({
  "packages/playwright/bundles/expect/node_modules/pretty-format/build/plugins/ReactTestComponent.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.test = exports2.serialize = exports2.default = void 0;
    var _markup = require_markup();
    var Symbol2 = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
    var testSymbol = typeof Symbol2 === "function" && Symbol2.for ? Symbol2.for("react.test.json") : 245830487;
    var getPropKeys = (object) => {
      const { props } = object;
      return props ? Object.keys(props).filter((key) => props[key] !== void 0).sort() : [];
    };
    var serialize = (object, config, indentation2, depth, refs, printer) => ++depth > config.maxDepth ? (0, _markup.printElementAsLeaf)(object.type, config) : (0, _markup.printElement)(
      object.type,
      object.props ? (0, _markup.printProps)(
        getPropKeys(object),
        object.props,
        config,
        indentation2 + config.indent,
        depth,
        refs,
        printer
      ) : "",
      object.children ? (0, _markup.printChildren)(
        object.children,
        config,
        indentation2 + config.indent,
        depth,
        refs,
        printer
      ) : "",
      config,
      indentation2
    );
    exports2.serialize = serialize;
    var test = (val) => val && val.$$typeof === testSymbol;
    exports2.test = test;
    var plugin = {
      serialize,
      test
    };
    var _default = plugin;
    exports2.default = _default;
  }
});

// packages/playwright/bundles/expect/node_modules/pretty-format/build/index.js
var require_build2 = __commonJS({
  "packages/playwright/bundles/expect/node_modules/pretty-format/build/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = exports2.DEFAULT_OPTIONS = void 0;
    exports2.format = format;
    exports2.plugins = void 0;
    var _ansiStyles = _interopRequireDefault(require_ansi_styles2());
    var _collections = require_collections();
    var _AsymmetricMatcher = _interopRequireDefault(
      require_AsymmetricMatcher()
    );
    var _DOMCollection = _interopRequireDefault(require_DOMCollection());
    var _DOMElement = _interopRequireDefault(require_DOMElement());
    var _Immutable = _interopRequireDefault(require_Immutable());
    var _ReactElement = _interopRequireDefault(require_ReactElement());
    var _ReactTestComponent = _interopRequireDefault(
      require_ReactTestComponent()
    );
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var toString = Object.prototype.toString;
    var toISOString = Date.prototype.toISOString;
    var errorToString = Error.prototype.toString;
    var regExpToString = RegExp.prototype.toString;
    var getConstructorName = (val) => typeof val.constructor === "function" && val.constructor.name || "Object";
    var isWindow = (val) => typeof window !== "undefined" && val === window;
    var SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
    var NEWLINE_REGEXP = /\n/gi;
    var PrettyFormatPluginError = class extends Error {
      constructor(message, stack) {
        super(message);
        this.stack = stack;
        this.name = this.constructor.name;
      }
    };
    function isToStringedArrayType(toStringed) {
      return toStringed === "[object Array]" || toStringed === "[object ArrayBuffer]" || toStringed === "[object DataView]" || toStringed === "[object Float32Array]" || toStringed === "[object Float64Array]" || toStringed === "[object Int8Array]" || toStringed === "[object Int16Array]" || toStringed === "[object Int32Array]" || toStringed === "[object Uint8Array]" || toStringed === "[object Uint8ClampedArray]" || toStringed === "[object Uint16Array]" || toStringed === "[object Uint32Array]";
    }
    function printNumber(val) {
      return Object.is(val, -0) ? "-0" : String(val);
    }
    function printBigInt(val) {
      return String(`${val}n`);
    }
    function printFunction(val, printFunctionName) {
      if (!printFunctionName) {
        return "[Function]";
      }
      return `[Function ${val.name || "anonymous"}]`;
    }
    function printSymbol(val) {
      return String(val).replace(SYMBOL_REGEXP, "Symbol($1)");
    }
    function printError(val) {
      return `[${errorToString.call(val)}]`;
    }
    function printBasicValue(val, printFunctionName, escapeRegex, escapeString) {
      if (val === true || val === false) {
        return `${val}`;
      }
      if (val === void 0) {
        return "undefined";
      }
      if (val === null) {
        return "null";
      }
      const typeOf = typeof val;
      if (typeOf === "number") {
        return printNumber(val);
      }
      if (typeOf === "bigint") {
        return printBigInt(val);
      }
      if (typeOf === "string") {
        if (escapeString) {
          return `"${val.replace(/"|\\/g, "\\$&")}"`;
        }
        return `"${val}"`;
      }
      if (typeOf === "function") {
        return printFunction(val, printFunctionName);
      }
      if (typeOf === "symbol") {
        return printSymbol(val);
      }
      const toStringed = toString.call(val);
      if (toStringed === "[object WeakMap]") {
        return "WeakMap {}";
      }
      if (toStringed === "[object WeakSet]") {
        return "WeakSet {}";
      }
      if (toStringed === "[object Function]" || toStringed === "[object GeneratorFunction]") {
        return printFunction(val, printFunctionName);
      }
      if (toStringed === "[object Symbol]") {
        return printSymbol(val);
      }
      if (toStringed === "[object Date]") {
        return isNaN(+val) ? "Date { NaN }" : toISOString.call(val);
      }
      if (toStringed === "[object Error]") {
        return printError(val);
      }
      if (toStringed === "[object RegExp]") {
        if (escapeRegex) {
          return regExpToString.call(val).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        return regExpToString.call(val);
      }
      if (val instanceof Error) {
        return printError(val);
      }
      return null;
    }
    function printComplexValue(val, config, indentation2, depth, refs, hasCalledToJSON) {
      if (refs.indexOf(val) !== -1) {
        return "[Circular]";
      }
      refs = refs.slice();
      refs.push(val);
      const hitMaxDepth = ++depth > config.maxDepth;
      const min = config.min;
      if (config.callToJSON && !hitMaxDepth && val.toJSON && typeof val.toJSON === "function" && !hasCalledToJSON) {
        return printer(val.toJSON(), config, indentation2, depth, refs, true);
      }
      const toStringed = toString.call(val);
      if (toStringed === "[object Arguments]") {
        return hitMaxDepth ? "[Arguments]" : `${min ? "" : "Arguments "}[${(0, _collections.printListItems)(
          val,
          config,
          indentation2,
          depth,
          refs,
          printer
        )}]`;
      }
      if (isToStringedArrayType(toStringed)) {
        return hitMaxDepth ? `[${val.constructor.name}]` : `${min ? "" : !config.printBasicPrototype && val.constructor.name === "Array" ? "" : `${val.constructor.name} `}[${(0, _collections.printListItems)(
          val,
          config,
          indentation2,
          depth,
          refs,
          printer
        )}]`;
      }
      if (toStringed === "[object Map]") {
        return hitMaxDepth ? "[Map]" : `Map {${(0, _collections.printIteratorEntries)(
          val.entries(),
          config,
          indentation2,
          depth,
          refs,
          printer,
          " => "
        )}}`;
      }
      if (toStringed === "[object Set]") {
        return hitMaxDepth ? "[Set]" : `Set {${(0, _collections.printIteratorValues)(
          val.values(),
          config,
          indentation2,
          depth,
          refs,
          printer
        )}}`;
      }
      return hitMaxDepth || isWindow(val) ? `[${getConstructorName(val)}]` : `${min ? "" : !config.printBasicPrototype && getConstructorName(val) === "Object" ? "" : `${getConstructorName(val)} `}{${(0, _collections.printObjectProperties)(
        val,
        config,
        indentation2,
        depth,
        refs,
        printer
      )}}`;
    }
    function isNewPlugin(plugin) {
      return plugin.serialize != null;
    }
    function printPlugin(plugin, val, config, indentation2, depth, refs) {
      let printed;
      try {
        printed = isNewPlugin(plugin) ? plugin.serialize(val, config, indentation2, depth, refs, printer) : plugin.print(
          val,
          (valChild) => printer(valChild, config, indentation2, depth, refs),
          (str) => {
            const indentationNext = indentation2 + config.indent;
            return indentationNext + str.replace(NEWLINE_REGEXP, `
${indentationNext}`);
          },
          {
            edgeSpacing: config.spacingOuter,
            min: config.min,
            spacing: config.spacingInner
          },
          config.colors
        );
      } catch (error) {
        throw new PrettyFormatPluginError(error.message, error.stack);
      }
      if (typeof printed !== "string") {
        throw new Error(
          `pretty-format: Plugin must return type "string" but instead returned "${typeof printed}".`
        );
      }
      return printed;
    }
    function findPlugin(plugins2, val) {
      for (let p = 0; p < plugins2.length; p++) {
        try {
          if (plugins2[p].test(val)) {
            return plugins2[p];
          }
        } catch (error) {
          throw new PrettyFormatPluginError(error.message, error.stack);
        }
      }
      return null;
    }
    function printer(val, config, indentation2, depth, refs, hasCalledToJSON) {
      const plugin = findPlugin(config.plugins, val);
      if (plugin !== null) {
        return printPlugin(plugin, val, config, indentation2, depth, refs);
      }
      const basicResult = printBasicValue(
        val,
        config.printFunctionName,
        config.escapeRegex,
        config.escapeString
      );
      if (basicResult !== null) {
        return basicResult;
      }
      return printComplexValue(
        val,
        config,
        indentation2,
        depth,
        refs,
        hasCalledToJSON
      );
    }
    var DEFAULT_THEME = {
      comment: "gray",
      content: "reset",
      prop: "yellow",
      tag: "cyan",
      value: "green"
    };
    var DEFAULT_THEME_KEYS = Object.keys(DEFAULT_THEME);
    var toOptionsSubtype = (options) => options;
    var DEFAULT_OPTIONS = toOptionsSubtype({
      callToJSON: true,
      compareKeys: void 0,
      escapeRegex: false,
      escapeString: true,
      highlight: false,
      indent: 2,
      maxDepth: Infinity,
      maxWidth: Infinity,
      min: false,
      plugins: [],
      printBasicPrototype: true,
      printFunctionName: true,
      theme: DEFAULT_THEME
    });
    exports2.DEFAULT_OPTIONS = DEFAULT_OPTIONS;
    function validateOptions(options) {
      Object.keys(options).forEach((key) => {
        if (!Object.prototype.hasOwnProperty.call(DEFAULT_OPTIONS, key)) {
          throw new Error(`pretty-format: Unknown option "${key}".`);
        }
      });
      if (options.min && options.indent !== void 0 && options.indent !== 0) {
        throw new Error(
          'pretty-format: Options "min" and "indent" cannot be used together.'
        );
      }
      if (options.theme !== void 0) {
        if (options.theme === null) {
          throw new Error('pretty-format: Option "theme" must not be null.');
        }
        if (typeof options.theme !== "object") {
          throw new Error(
            `pretty-format: Option "theme" must be of type "object" but instead received "${typeof options.theme}".`
          );
        }
      }
    }
    var getColorsHighlight = (options) => DEFAULT_THEME_KEYS.reduce((colors, key) => {
      const value = options.theme && options.theme[key] !== void 0 ? options.theme[key] : DEFAULT_THEME[key];
      const color = value && _ansiStyles.default[value];
      if (color && typeof color.close === "string" && typeof color.open === "string") {
        colors[key] = color;
      } else {
        throw new Error(
          `pretty-format: Option "theme" has a key "${key}" whose value "${value}" is undefined in ansi-styles.`
        );
      }
      return colors;
    }, /* @__PURE__ */ Object.create(null));
    var getColorsEmpty = () => DEFAULT_THEME_KEYS.reduce((colors, key) => {
      colors[key] = {
        close: "",
        open: ""
      };
      return colors;
    }, /* @__PURE__ */ Object.create(null));
    var getPrintFunctionName = (options) => {
      var _a;
      return (_a = options == null ? void 0 : options.printFunctionName) != null ? _a : DEFAULT_OPTIONS.printFunctionName;
    };
    var getEscapeRegex = (options) => {
      var _a;
      return (_a = options == null ? void 0 : options.escapeRegex) != null ? _a : DEFAULT_OPTIONS.escapeRegex;
    };
    var getEscapeString = (options) => {
      var _a;
      return (_a = options == null ? void 0 : options.escapeString) != null ? _a : DEFAULT_OPTIONS.escapeString;
    };
    var getConfig = (options) => {
      var _a, _b, _c, _d, _e, _f, _g;
      return {
        callToJSON: (_a = options == null ? void 0 : options.callToJSON) != null ? _a : DEFAULT_OPTIONS.callToJSON,
        colors: (options == null ? void 0 : options.highlight) ? getColorsHighlight(options) : getColorsEmpty(),
        compareKeys: typeof (options == null ? void 0 : options.compareKeys) === "function" || (options == null ? void 0 : options.compareKeys) === null ? options.compareKeys : DEFAULT_OPTIONS.compareKeys,
        escapeRegex: getEscapeRegex(options),
        escapeString: getEscapeString(options),
        indent: (options == null ? void 0 : options.min) ? "" : createIndent((_b = options == null ? void 0 : options.indent) != null ? _b : DEFAULT_OPTIONS.indent),
        maxDepth: (_c = options == null ? void 0 : options.maxDepth) != null ? _c : DEFAULT_OPTIONS.maxDepth,
        maxWidth: (_d = options == null ? void 0 : options.maxWidth) != null ? _d : DEFAULT_OPTIONS.maxWidth,
        min: (_e = options == null ? void 0 : options.min) != null ? _e : DEFAULT_OPTIONS.min,
        plugins: (_f = options == null ? void 0 : options.plugins) != null ? _f : DEFAULT_OPTIONS.plugins,
        printBasicPrototype: (_g = options == null ? void 0 : options.printBasicPrototype) != null ? _g : true,
        printFunctionName: getPrintFunctionName(options),
        spacingInner: (options == null ? void 0 : options.min) ? " " : "\n",
        spacingOuter: (options == null ? void 0 : options.min) ? "" : "\n"
      };
    };
    function createIndent(indent) {
      return new Array(indent + 1).join(" ");
    }
    function format(val, options) {
      if (options) {
        validateOptions(options);
        if (options.plugins) {
          const plugin = findPlugin(options.plugins, val);
          if (plugin !== null) {
            return printPlugin(plugin, val, getConfig(options), "", 0, []);
          }
        }
      }
      const basicResult = printBasicValue(
        val,
        getPrintFunctionName(options),
        getEscapeRegex(options),
        getEscapeString(options)
      );
      if (basicResult !== null) {
        return basicResult;
      }
      return printComplexValue(val, getConfig(options), "", 0, []);
    }
    var plugins = {
      AsymmetricMatcher: _AsymmetricMatcher.default,
      DOMCollection: _DOMCollection.default,
      DOMElement: _DOMElement.default,
      Immutable: _Immutable.default,
      ReactElement: _ReactElement.default,
      ReactTestComponent: _ReactTestComponent.default
    };
    exports2.plugins = plugins;
    var _default = format;
    exports2.default = _default;
  }
});

// packages/playwright/bundles/expect/node_modules/jest-diff/build/cleanupSemantic.js
var require_cleanupSemantic = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-diff/build/cleanupSemantic.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.cleanupSemantic = exports2.Diff = exports2.DIFF_INSERT = exports2.DIFF_EQUAL = exports2.DIFF_DELETE = void 0;
    var DIFF_DELETE = -1;
    exports2.DIFF_DELETE = DIFF_DELETE;
    var DIFF_INSERT = 1;
    exports2.DIFF_INSERT = DIFF_INSERT;
    var DIFF_EQUAL = 0;
    exports2.DIFF_EQUAL = DIFF_EQUAL;
    var Diff = class {
      constructor(op, text) {
        __publicField(this, 0);
        __publicField(this, 1);
        this[0] = op;
        this[1] = text;
      }
    };
    exports2.Diff = Diff;
    var diff_commonPrefix = function(text1, text2) {
      if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
        return 0;
      }
      var pointermin = 0;
      var pointermax = Math.min(text1.length, text2.length);
      var pointermid = pointermax;
      var pointerstart = 0;
      while (pointermin < pointermid) {
        if (text1.substring(pointerstart, pointermid) == text2.substring(pointerstart, pointermid)) {
          pointermin = pointermid;
          pointerstart = pointermin;
        } else {
          pointermax = pointermid;
        }
        pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
      }
      return pointermid;
    };
    var diff_commonSuffix = function(text1, text2) {
      if (!text1 || !text2 || text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
        return 0;
      }
      var pointermin = 0;
      var pointermax = Math.min(text1.length, text2.length);
      var pointermid = pointermax;
      var pointerend = 0;
      while (pointermin < pointermid) {
        if (text1.substring(text1.length - pointermid, text1.length - pointerend) == text2.substring(text2.length - pointermid, text2.length - pointerend)) {
          pointermin = pointermid;
          pointerend = pointermin;
        } else {
          pointermax = pointermid;
        }
        pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
      }
      return pointermid;
    };
    var diff_commonOverlap_ = function(text1, text2) {
      var text1_length = text1.length;
      var text2_length = text2.length;
      if (text1_length == 0 || text2_length == 0) {
        return 0;
      }
      if (text1_length > text2_length) {
        text1 = text1.substring(text1_length - text2_length);
      } else if (text1_length < text2_length) {
        text2 = text2.substring(0, text1_length);
      }
      var text_length = Math.min(text1_length, text2_length);
      if (text1 == text2) {
        return text_length;
      }
      var best = 0;
      var length = 1;
      while (true) {
        var pattern = text1.substring(text_length - length);
        var found = text2.indexOf(pattern);
        if (found == -1) {
          return best;
        }
        length += found;
        if (found == 0 || text1.substring(text_length - length) == text2.substring(0, length)) {
          best = length;
          length++;
        }
      }
    };
    var diff_cleanupSemantic = function(diffs) {
      var changes = false;
      var equalities = [];
      var equalitiesLength = 0;
      var lastEquality = null;
      var pointer = 0;
      var length_insertions1 = 0;
      var length_deletions1 = 0;
      var length_insertions2 = 0;
      var length_deletions2 = 0;
      while (pointer < diffs.length) {
        if (diffs[pointer][0] == DIFF_EQUAL) {
          equalities[equalitiesLength++] = pointer;
          length_insertions1 = length_insertions2;
          length_deletions1 = length_deletions2;
          length_insertions2 = 0;
          length_deletions2 = 0;
          lastEquality = diffs[pointer][1];
        } else {
          if (diffs[pointer][0] == DIFF_INSERT) {
            length_insertions2 += diffs[pointer][1].length;
          } else {
            length_deletions2 += diffs[pointer][1].length;
          }
          if (lastEquality && lastEquality.length <= Math.max(length_insertions1, length_deletions1) && lastEquality.length <= Math.max(length_insertions2, length_deletions2)) {
            diffs.splice(
              equalities[equalitiesLength - 1],
              0,
              new Diff(DIFF_DELETE, lastEquality)
            );
            diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
            equalitiesLength--;
            equalitiesLength--;
            pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
            length_insertions1 = 0;
            length_deletions1 = 0;
            length_insertions2 = 0;
            length_deletions2 = 0;
            lastEquality = null;
            changes = true;
          }
        }
        pointer++;
      }
      if (changes) {
        diff_cleanupMerge(diffs);
      }
      diff_cleanupSemanticLossless(diffs);
      pointer = 1;
      while (pointer < diffs.length) {
        if (diffs[pointer - 1][0] == DIFF_DELETE && diffs[pointer][0] == DIFF_INSERT) {
          var deletion = diffs[pointer - 1][1];
          var insertion = diffs[pointer][1];
          var overlap_length1 = diff_commonOverlap_(deletion, insertion);
          var overlap_length2 = diff_commonOverlap_(insertion, deletion);
          if (overlap_length1 >= overlap_length2) {
            if (overlap_length1 >= deletion.length / 2 || overlap_length1 >= insertion.length / 2) {
              diffs.splice(
                pointer,
                0,
                new Diff(DIFF_EQUAL, insertion.substring(0, overlap_length1))
              );
              diffs[pointer - 1][1] = deletion.substring(
                0,
                deletion.length - overlap_length1
              );
              diffs[pointer + 1][1] = insertion.substring(overlap_length1);
              pointer++;
            }
          } else {
            if (overlap_length2 >= deletion.length / 2 || overlap_length2 >= insertion.length / 2) {
              diffs.splice(
                pointer,
                0,
                new Diff(DIFF_EQUAL, deletion.substring(0, overlap_length2))
              );
              diffs[pointer - 1][0] = DIFF_INSERT;
              diffs[pointer - 1][1] = insertion.substring(
                0,
                insertion.length - overlap_length2
              );
              diffs[pointer + 1][0] = DIFF_DELETE;
              diffs[pointer + 1][1] = deletion.substring(overlap_length2);
              pointer++;
            }
          }
          pointer++;
        }
        pointer++;
      }
    };
    exports2.cleanupSemantic = diff_cleanupSemantic;
    var diff_cleanupSemanticLossless = function(diffs) {
      function diff_cleanupSemanticScore_(one, two) {
        if (!one || !two) {
          return 6;
        }
        var char1 = one.charAt(one.length - 1);
        var char2 = two.charAt(0);
        var nonAlphaNumeric1 = char1.match(nonAlphaNumericRegex_);
        var nonAlphaNumeric2 = char2.match(nonAlphaNumericRegex_);
        var whitespace1 = nonAlphaNumeric1 && char1.match(whitespaceRegex_);
        var whitespace2 = nonAlphaNumeric2 && char2.match(whitespaceRegex_);
        var lineBreak1 = whitespace1 && char1.match(linebreakRegex_);
        var lineBreak2 = whitespace2 && char2.match(linebreakRegex_);
        var blankLine1 = lineBreak1 && one.match(blanklineEndRegex_);
        var blankLine2 = lineBreak2 && two.match(blanklineStartRegex_);
        if (blankLine1 || blankLine2) {
          return 5;
        } else if (lineBreak1 || lineBreak2) {
          return 4;
        } else if (nonAlphaNumeric1 && !whitespace1 && whitespace2) {
          return 3;
        } else if (whitespace1 || whitespace2) {
          return 2;
        } else if (nonAlphaNumeric1 || nonAlphaNumeric2) {
          return 1;
        }
        return 0;
      }
      var pointer = 1;
      while (pointer < diffs.length - 1) {
        if (diffs[pointer - 1][0] == DIFF_EQUAL && diffs[pointer + 1][0] == DIFF_EQUAL) {
          var equality1 = diffs[pointer - 1][1];
          var edit = diffs[pointer][1];
          var equality2 = diffs[pointer + 1][1];
          var commonOffset = diff_commonSuffix(equality1, edit);
          if (commonOffset) {
            var commonString = edit.substring(edit.length - commonOffset);
            equality1 = equality1.substring(0, equality1.length - commonOffset);
            edit = commonString + edit.substring(0, edit.length - commonOffset);
            equality2 = commonString + equality2;
          }
          var bestEquality1 = equality1;
          var bestEdit = edit;
          var bestEquality2 = equality2;
          var bestScore = diff_cleanupSemanticScore_(equality1, edit) + diff_cleanupSemanticScore_(edit, equality2);
          while (edit.charAt(0) === equality2.charAt(0)) {
            equality1 += edit.charAt(0);
            edit = edit.substring(1) + equality2.charAt(0);
            equality2 = equality2.substring(1);
            var score = diff_cleanupSemanticScore_(equality1, edit) + diff_cleanupSemanticScore_(edit, equality2);
            if (score >= bestScore) {
              bestScore = score;
              bestEquality1 = equality1;
              bestEdit = edit;
              bestEquality2 = equality2;
            }
          }
          if (diffs[pointer - 1][1] != bestEquality1) {
            if (bestEquality1) {
              diffs[pointer - 1][1] = bestEquality1;
            } else {
              diffs.splice(pointer - 1, 1);
              pointer--;
            }
            diffs[pointer][1] = bestEdit;
            if (bestEquality2) {
              diffs[pointer + 1][1] = bestEquality2;
            } else {
              diffs.splice(pointer + 1, 1);
              pointer--;
            }
          }
        }
        pointer++;
      }
    };
    var nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/;
    var whitespaceRegex_ = /\s/;
    var linebreakRegex_ = /[\r\n]/;
    var blanklineEndRegex_ = /\n\r?\n$/;
    var blanklineStartRegex_ = /^\r?\n\r?\n/;
    var diff_cleanupMerge = function(diffs) {
      diffs.push(new Diff(DIFF_EQUAL, ""));
      var pointer = 0;
      var count_delete = 0;
      var count_insert = 0;
      var text_delete = "";
      var text_insert = "";
      var commonlength;
      while (pointer < diffs.length) {
        switch (diffs[pointer][0]) {
          case DIFF_INSERT:
            count_insert++;
            text_insert += diffs[pointer][1];
            pointer++;
            break;
          case DIFF_DELETE:
            count_delete++;
            text_delete += diffs[pointer][1];
            pointer++;
            break;
          case DIFF_EQUAL:
            if (count_delete + count_insert > 1) {
              if (count_delete !== 0 && count_insert !== 0) {
                commonlength = diff_commonPrefix(text_insert, text_delete);
                if (commonlength !== 0) {
                  if (pointer - count_delete - count_insert > 0 && diffs[pointer - count_delete - count_insert - 1][0] == DIFF_EQUAL) {
                    diffs[pointer - count_delete - count_insert - 1][1] += text_insert.substring(0, commonlength);
                  } else {
                    diffs.splice(
                      0,
                      0,
                      new Diff(DIFF_EQUAL, text_insert.substring(0, commonlength))
                    );
                    pointer++;
                  }
                  text_insert = text_insert.substring(commonlength);
                  text_delete = text_delete.substring(commonlength);
                }
                commonlength = diff_commonSuffix(text_insert, text_delete);
                if (commonlength !== 0) {
                  diffs[pointer][1] = text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];
                  text_insert = text_insert.substring(
                    0,
                    text_insert.length - commonlength
                  );
                  text_delete = text_delete.substring(
                    0,
                    text_delete.length - commonlength
                  );
                }
              }
              pointer -= count_delete + count_insert;
              diffs.splice(pointer, count_delete + count_insert);
              if (text_delete.length) {
                diffs.splice(pointer, 0, new Diff(DIFF_DELETE, text_delete));
                pointer++;
              }
              if (text_insert.length) {
                diffs.splice(pointer, 0, new Diff(DIFF_INSERT, text_insert));
                pointer++;
              }
              pointer++;
            } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
              diffs[pointer - 1][1] += diffs[pointer][1];
              diffs.splice(pointer, 1);
            } else {
              pointer++;
            }
            count_insert = 0;
            count_delete = 0;
            text_delete = "";
            text_insert = "";
            break;
        }
      }
      if (diffs[diffs.length - 1][1] === "") {
        diffs.pop();
      }
      var changes = false;
      pointer = 1;
      while (pointer < diffs.length - 1) {
        if (diffs[pointer - 1][0] == DIFF_EQUAL && diffs[pointer + 1][0] == DIFF_EQUAL) {
          if (diffs[pointer][1].substring(
            diffs[pointer][1].length - diffs[pointer - 1][1].length
          ) == diffs[pointer - 1][1]) {
            diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(
              0,
              diffs[pointer][1].length - diffs[pointer - 1][1].length
            );
            diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
            diffs.splice(pointer - 1, 1);
            changes = true;
          } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) == diffs[pointer + 1][1]) {
            diffs[pointer - 1][1] += diffs[pointer + 1][1];
            diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1];
            diffs.splice(pointer + 1, 1);
            changes = true;
          }
        }
        pointer++;
      }
      if (changes) {
        diff_cleanupMerge(diffs);
      }
    };
  }
});

// packages/playwright/bundles/expect/node_modules/jest-diff/build/constants.js
var require_constants = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-diff/build/constants.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.SIMILAR_MESSAGE = exports2.NO_DIFF_MESSAGE = void 0;
    var NO_DIFF_MESSAGE = "Compared values have no visual difference.";
    exports2.NO_DIFF_MESSAGE = NO_DIFF_MESSAGE;
    var SIMILAR_MESSAGE = "Compared values serialize to the same structure.\nPrinting internal object structure without calling `toJSON` instead.";
    exports2.SIMILAR_MESSAGE = SIMILAR_MESSAGE;
  }
});

// packages/playwright/bundles/expect/node_modules/diff-sequences/build/index.js
var require_build3 = __commonJS({
  "packages/playwright/bundles/expect/node_modules/diff-sequences/build/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = diffSequence;
    var pkg = "diff-sequences";
    var NOT_YET_SET = 0;
    var countCommonItemsF = (aIndex, aEnd, bIndex, bEnd, isCommon) => {
      let nCommon = 0;
      while (aIndex < aEnd && bIndex < bEnd && isCommon(aIndex, bIndex)) {
        aIndex += 1;
        bIndex += 1;
        nCommon += 1;
      }
      return nCommon;
    };
    var countCommonItemsR = (aStart, aIndex, bStart, bIndex, isCommon) => {
      let nCommon = 0;
      while (aStart <= aIndex && bStart <= bIndex && isCommon(aIndex, bIndex)) {
        aIndex -= 1;
        bIndex -= 1;
        nCommon += 1;
      }
      return nCommon;
    };
    var extendPathsF = (d, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF) => {
      let iF = 0;
      let kF = -d;
      let aFirst = aIndexesF[iF];
      let aIndexPrev1 = aFirst;
      aIndexesF[iF] += countCommonItemsF(
        aFirst + 1,
        aEnd,
        bF + aFirst - kF + 1,
        bEnd,
        isCommon
      );
      const nF = d < iMaxF ? d : iMaxF;
      for (iF += 1, kF += 2; iF <= nF; iF += 1, kF += 2) {
        if (iF !== d && aIndexPrev1 < aIndexesF[iF]) {
          aFirst = aIndexesF[iF];
        } else {
          aFirst = aIndexPrev1 + 1;
          if (aEnd <= aFirst) {
            return iF - 1;
          }
        }
        aIndexPrev1 = aIndexesF[iF];
        aIndexesF[iF] = aFirst + countCommonItemsF(aFirst + 1, aEnd, bF + aFirst - kF + 1, bEnd, isCommon);
      }
      return iMaxF;
    };
    var extendPathsR = (d, aStart, bStart, bR, isCommon, aIndexesR, iMaxR) => {
      let iR = 0;
      let kR = d;
      let aFirst = aIndexesR[iR];
      let aIndexPrev1 = aFirst;
      aIndexesR[iR] -= countCommonItemsR(
        aStart,
        aFirst - 1,
        bStart,
        bR + aFirst - kR - 1,
        isCommon
      );
      const nR = d < iMaxR ? d : iMaxR;
      for (iR += 1, kR -= 2; iR <= nR; iR += 1, kR -= 2) {
        if (iR !== d && aIndexesR[iR] < aIndexPrev1) {
          aFirst = aIndexesR[iR];
        } else {
          aFirst = aIndexPrev1 - 1;
          if (aFirst < aStart) {
            return iR - 1;
          }
        }
        aIndexPrev1 = aIndexesR[iR];
        aIndexesR[iR] = aFirst - countCommonItemsR(
          aStart,
          aFirst - 1,
          bStart,
          bR + aFirst - kR - 1,
          isCommon
        );
      }
      return iMaxR;
    };
    var extendOverlappablePathsF = (d, aStart, aEnd, bStart, bEnd, isCommon, aIndexesF, iMaxF, aIndexesR, iMaxR, division) => {
      const bF = bStart - aStart;
      const aLength = aEnd - aStart;
      const bLength = bEnd - bStart;
      const baDeltaLength = bLength - aLength;
      const kMinOverlapF = -baDeltaLength - (d - 1);
      const kMaxOverlapF = -baDeltaLength + (d - 1);
      let aIndexPrev1 = NOT_YET_SET;
      const nF = d < iMaxF ? d : iMaxF;
      for (let iF = 0, kF = -d; iF <= nF; iF += 1, kF += 2) {
        const insert = iF === 0 || iF !== d && aIndexPrev1 < aIndexesF[iF];
        const aLastPrev = insert ? aIndexesF[iF] : aIndexPrev1;
        const aFirst = insert ? aLastPrev : aLastPrev + 1;
        const bFirst = bF + aFirst - kF;
        const nCommonF = countCommonItemsF(
          aFirst + 1,
          aEnd,
          bFirst + 1,
          bEnd,
          isCommon
        );
        const aLast = aFirst + nCommonF;
        aIndexPrev1 = aIndexesF[iF];
        aIndexesF[iF] = aLast;
        if (kMinOverlapF <= kF && kF <= kMaxOverlapF) {
          const iR = (d - 1 - (kF + baDeltaLength)) / 2;
          if (iR <= iMaxR && aIndexesR[iR] - 1 <= aLast) {
            const bLastPrev = bF + aLastPrev - (insert ? kF + 1 : kF - 1);
            const nCommonR = countCommonItemsR(
              aStart,
              aLastPrev,
              bStart,
              bLastPrev,
              isCommon
            );
            const aIndexPrevFirst = aLastPrev - nCommonR;
            const bIndexPrevFirst = bLastPrev - nCommonR;
            const aEndPreceding = aIndexPrevFirst + 1;
            const bEndPreceding = bIndexPrevFirst + 1;
            division.nChangePreceding = d - 1;
            if (d - 1 === aEndPreceding + bEndPreceding - aStart - bStart) {
              division.aEndPreceding = aStart;
              division.bEndPreceding = bStart;
            } else {
              division.aEndPreceding = aEndPreceding;
              division.bEndPreceding = bEndPreceding;
            }
            division.nCommonPreceding = nCommonR;
            if (nCommonR !== 0) {
              division.aCommonPreceding = aEndPreceding;
              division.bCommonPreceding = bEndPreceding;
            }
            division.nCommonFollowing = nCommonF;
            if (nCommonF !== 0) {
              division.aCommonFollowing = aFirst + 1;
              division.bCommonFollowing = bFirst + 1;
            }
            const aStartFollowing = aLast + 1;
            const bStartFollowing = bFirst + nCommonF + 1;
            division.nChangeFollowing = d - 1;
            if (d - 1 === aEnd + bEnd - aStartFollowing - bStartFollowing) {
              division.aStartFollowing = aEnd;
              division.bStartFollowing = bEnd;
            } else {
              division.aStartFollowing = aStartFollowing;
              division.bStartFollowing = bStartFollowing;
            }
            return true;
          }
        }
      }
      return false;
    };
    var extendOverlappablePathsR = (d, aStart, aEnd, bStart, bEnd, isCommon, aIndexesF, iMaxF, aIndexesR, iMaxR, division) => {
      const bR = bEnd - aEnd;
      const aLength = aEnd - aStart;
      const bLength = bEnd - bStart;
      const baDeltaLength = bLength - aLength;
      const kMinOverlapR = baDeltaLength - d;
      const kMaxOverlapR = baDeltaLength + d;
      let aIndexPrev1 = NOT_YET_SET;
      const nR = d < iMaxR ? d : iMaxR;
      for (let iR = 0, kR = d; iR <= nR; iR += 1, kR -= 2) {
        const insert = iR === 0 || iR !== d && aIndexesR[iR] < aIndexPrev1;
        const aLastPrev = insert ? aIndexesR[iR] : aIndexPrev1;
        const aFirst = insert ? aLastPrev : aLastPrev - 1;
        const bFirst = bR + aFirst - kR;
        const nCommonR = countCommonItemsR(
          aStart,
          aFirst - 1,
          bStart,
          bFirst - 1,
          isCommon
        );
        const aLast = aFirst - nCommonR;
        aIndexPrev1 = aIndexesR[iR];
        aIndexesR[iR] = aLast;
        if (kMinOverlapR <= kR && kR <= kMaxOverlapR) {
          const iF = (d + (kR - baDeltaLength)) / 2;
          if (iF <= iMaxF && aLast - 1 <= aIndexesF[iF]) {
            const bLast = bFirst - nCommonR;
            division.nChangePreceding = d;
            if (d === aLast + bLast - aStart - bStart) {
              division.aEndPreceding = aStart;
              division.bEndPreceding = bStart;
            } else {
              division.aEndPreceding = aLast;
              division.bEndPreceding = bLast;
            }
            division.nCommonPreceding = nCommonR;
            if (nCommonR !== 0) {
              division.aCommonPreceding = aLast;
              division.bCommonPreceding = bLast;
            }
            division.nChangeFollowing = d - 1;
            if (d === 1) {
              division.nCommonFollowing = 0;
              division.aStartFollowing = aEnd;
              division.bStartFollowing = bEnd;
            } else {
              const bLastPrev = bR + aLastPrev - (insert ? kR - 1 : kR + 1);
              const nCommonF = countCommonItemsF(
                aLastPrev,
                aEnd,
                bLastPrev,
                bEnd,
                isCommon
              );
              division.nCommonFollowing = nCommonF;
              if (nCommonF !== 0) {
                division.aCommonFollowing = aLastPrev;
                division.bCommonFollowing = bLastPrev;
              }
              const aStartFollowing = aLastPrev + nCommonF;
              const bStartFollowing = bLastPrev + nCommonF;
              if (d - 1 === aEnd + bEnd - aStartFollowing - bStartFollowing) {
                division.aStartFollowing = aEnd;
                division.bStartFollowing = bEnd;
              } else {
                division.aStartFollowing = aStartFollowing;
                division.bStartFollowing = bStartFollowing;
              }
            }
            return true;
          }
        }
      }
      return false;
    };
    var divide = (nChange, aStart, aEnd, bStart, bEnd, isCommon, aIndexesF, aIndexesR, division) => {
      const bF = bStart - aStart;
      const bR = bEnd - aEnd;
      const aLength = aEnd - aStart;
      const bLength = bEnd - bStart;
      const baDeltaLength = bLength - aLength;
      let iMaxF = aLength;
      let iMaxR = aLength;
      aIndexesF[0] = aStart - 1;
      aIndexesR[0] = aEnd;
      if (baDeltaLength % 2 === 0) {
        const dMin = (nChange || baDeltaLength) / 2;
        const dMax = (aLength + bLength) / 2;
        for (let d = 1; d <= dMax; d += 1) {
          iMaxF = extendPathsF(d, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF);
          if (d < dMin) {
            iMaxR = extendPathsR(d, aStart, bStart, bR, isCommon, aIndexesR, iMaxR);
          } else if (
            // If a reverse path overlaps a forward path in the same diagonal,
            // return a division of the index intervals at the middle change.
            extendOverlappablePathsR(
              d,
              aStart,
              aEnd,
              bStart,
              bEnd,
              isCommon,
              aIndexesF,
              iMaxF,
              aIndexesR,
              iMaxR,
              division
            )
          ) {
            return;
          }
        }
      } else {
        const dMin = ((nChange || baDeltaLength) + 1) / 2;
        const dMax = (aLength + bLength + 1) / 2;
        let d = 1;
        iMaxF = extendPathsF(d, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF);
        for (d += 1; d <= dMax; d += 1) {
          iMaxR = extendPathsR(
            d - 1,
            aStart,
            bStart,
            bR,
            isCommon,
            aIndexesR,
            iMaxR
          );
          if (d < dMin) {
            iMaxF = extendPathsF(d, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF);
          } else if (
            // If a forward path overlaps a reverse path in the same diagonal,
            // return a division of the index intervals at the middle change.
            extendOverlappablePathsF(
              d,
              aStart,
              aEnd,
              bStart,
              bEnd,
              isCommon,
              aIndexesF,
              iMaxF,
              aIndexesR,
              iMaxR,
              division
            )
          ) {
            return;
          }
        }
      }
      throw new Error(
        `${pkg}: no overlap aStart=${aStart} aEnd=${aEnd} bStart=${bStart} bEnd=${bEnd}`
      );
    };
    var findSubsequences = (nChange, aStart, aEnd, bStart, bEnd, transposed, callbacks, aIndexesF, aIndexesR, division) => {
      if (bEnd - bStart < aEnd - aStart) {
        transposed = !transposed;
        if (transposed && callbacks.length === 1) {
          const { foundSubsequence: foundSubsequence2, isCommon: isCommon2 } = callbacks[0];
          callbacks[1] = {
            foundSubsequence: (nCommon, bCommon, aCommon) => {
              foundSubsequence2(nCommon, aCommon, bCommon);
            },
            isCommon: (bIndex, aIndex) => isCommon2(aIndex, bIndex)
          };
        }
        const tStart = aStart;
        const tEnd = aEnd;
        aStart = bStart;
        aEnd = bEnd;
        bStart = tStart;
        bEnd = tEnd;
      }
      const { foundSubsequence, isCommon } = callbacks[transposed ? 1 : 0];
      divide(
        nChange,
        aStart,
        aEnd,
        bStart,
        bEnd,
        isCommon,
        aIndexesF,
        aIndexesR,
        division
      );
      const {
        nChangePreceding,
        aEndPreceding,
        bEndPreceding,
        nCommonPreceding,
        aCommonPreceding,
        bCommonPreceding,
        nCommonFollowing,
        aCommonFollowing,
        bCommonFollowing,
        nChangeFollowing,
        aStartFollowing,
        bStartFollowing
      } = division;
      if (aStart < aEndPreceding && bStart < bEndPreceding) {
        findSubsequences(
          nChangePreceding,
          aStart,
          aEndPreceding,
          bStart,
          bEndPreceding,
          transposed,
          callbacks,
          aIndexesF,
          aIndexesR,
          division
        );
      }
      if (nCommonPreceding !== 0) {
        foundSubsequence(nCommonPreceding, aCommonPreceding, bCommonPreceding);
      }
      if (nCommonFollowing !== 0) {
        foundSubsequence(nCommonFollowing, aCommonFollowing, bCommonFollowing);
      }
      if (aStartFollowing < aEnd && bStartFollowing < bEnd) {
        findSubsequences(
          nChangeFollowing,
          aStartFollowing,
          aEnd,
          bStartFollowing,
          bEnd,
          transposed,
          callbacks,
          aIndexesF,
          aIndexesR,
          division
        );
      }
    };
    var validateLength = (name, arg) => {
      if (typeof arg !== "number") {
        throw new TypeError(`${pkg}: ${name} typeof ${typeof arg} is not a number`);
      }
      if (!Number.isSafeInteger(arg)) {
        throw new RangeError(`${pkg}: ${name} value ${arg} is not a safe integer`);
      }
      if (arg < 0) {
        throw new RangeError(`${pkg}: ${name} value ${arg} is a negative integer`);
      }
    };
    var validateCallback = (name, arg) => {
      const type = typeof arg;
      if (type !== "function") {
        throw new TypeError(`${pkg}: ${name} typeof ${type} is not a function`);
      }
    };
    function diffSequence(aLength, bLength, isCommon, foundSubsequence) {
      validateLength("aLength", aLength);
      validateLength("bLength", bLength);
      validateCallback("isCommon", isCommon);
      validateCallback("foundSubsequence", foundSubsequence);
      const nCommonF = countCommonItemsF(0, aLength, 0, bLength, isCommon);
      if (nCommonF !== 0) {
        foundSubsequence(nCommonF, 0, 0);
      }
      if (aLength !== nCommonF || bLength !== nCommonF) {
        const aStart = nCommonF;
        const bStart = nCommonF;
        const nCommonR = countCommonItemsR(
          aStart,
          aLength - 1,
          bStart,
          bLength - 1,
          isCommon
        );
        const aEnd = aLength - nCommonR;
        const bEnd = bLength - nCommonR;
        const nCommonFR = nCommonF + nCommonR;
        if (aLength !== nCommonFR && bLength !== nCommonFR) {
          const nChange = 0;
          const transposed = false;
          const callbacks = [
            {
              foundSubsequence,
              isCommon
            }
          ];
          const aIndexesF = [NOT_YET_SET];
          const aIndexesR = [NOT_YET_SET];
          const division = {
            aCommonFollowing: NOT_YET_SET,
            aCommonPreceding: NOT_YET_SET,
            aEndPreceding: NOT_YET_SET,
            aStartFollowing: NOT_YET_SET,
            bCommonFollowing: NOT_YET_SET,
            bCommonPreceding: NOT_YET_SET,
            bEndPreceding: NOT_YET_SET,
            bStartFollowing: NOT_YET_SET,
            nChangeFollowing: NOT_YET_SET,
            nChangePreceding: NOT_YET_SET,
            nCommonFollowing: NOT_YET_SET,
            nCommonPreceding: NOT_YET_SET
          };
          findSubsequences(
            nChange,
            aStart,
            aEnd,
            bStart,
            bEnd,
            transposed,
            callbacks,
            aIndexesF,
            aIndexesR,
            division
          );
        }
        if (nCommonR !== 0) {
          foundSubsequence(nCommonR, aEnd, bEnd);
        }
      }
    }
  }
});

// packages/playwright/bundles/expect/node_modules/jest-diff/build/joinAlignedDiffs.js
var require_joinAlignedDiffs = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-diff/build/joinAlignedDiffs.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.joinAlignedDiffsNoExpand = exports2.joinAlignedDiffsExpand = void 0;
    var _cleanupSemantic = require_cleanupSemantic();
    var formatTrailingSpaces = (line, trailingSpaceFormatter) => line.replace(/\s+$/, (match) => trailingSpaceFormatter(match));
    var printDiffLine = (line, isFirstOrLast, color, indicator, trailingSpaceFormatter, emptyFirstOrLastLinePlaceholder) => line.length !== 0 ? color(
      `${indicator} ${formatTrailingSpaces(line, trailingSpaceFormatter)}`
    ) : indicator !== " " ? color(indicator) : isFirstOrLast && emptyFirstOrLastLinePlaceholder.length !== 0 ? color(`${indicator} ${emptyFirstOrLastLinePlaceholder}`) : "";
    var printDeleteLine = (line, isFirstOrLast, {
      aColor,
      aIndicator,
      changeLineTrailingSpaceColor,
      emptyFirstOrLastLinePlaceholder
    }) => printDiffLine(
      line,
      isFirstOrLast,
      aColor,
      aIndicator,
      changeLineTrailingSpaceColor,
      emptyFirstOrLastLinePlaceholder
    );
    var printInsertLine = (line, isFirstOrLast, {
      bColor,
      bIndicator,
      changeLineTrailingSpaceColor,
      emptyFirstOrLastLinePlaceholder
    }) => printDiffLine(
      line,
      isFirstOrLast,
      bColor,
      bIndicator,
      changeLineTrailingSpaceColor,
      emptyFirstOrLastLinePlaceholder
    );
    var printCommonLine = (line, isFirstOrLast, {
      commonColor,
      commonIndicator,
      commonLineTrailingSpaceColor,
      emptyFirstOrLastLinePlaceholder
    }) => printDiffLine(
      line,
      isFirstOrLast,
      commonColor,
      commonIndicator,
      commonLineTrailingSpaceColor,
      emptyFirstOrLastLinePlaceholder
    );
    var createPatchMark = (aStart, aEnd, bStart, bEnd, { patchColor }) => patchColor(
      `@@ -${aStart + 1},${aEnd - aStart} +${bStart + 1},${bEnd - bStart} @@`
    );
    var joinAlignedDiffsNoExpand = (diffs, options) => {
      const iLength = diffs.length;
      const nContextLines = options.contextLines;
      const nContextLines2 = nContextLines + nContextLines;
      let jLength = iLength;
      let hasExcessAtStartOrEnd = false;
      let nExcessesBetweenChanges = 0;
      let i = 0;
      while (i !== iLength) {
        const iStart = i;
        while (i !== iLength && diffs[i][0] === _cleanupSemantic.DIFF_EQUAL) {
          i += 1;
        }
        if (iStart !== i) {
          if (iStart === 0) {
            if (i > nContextLines) {
              jLength -= i - nContextLines;
              hasExcessAtStartOrEnd = true;
            }
          } else if (i === iLength) {
            const n = i - iStart;
            if (n > nContextLines) {
              jLength -= n - nContextLines;
              hasExcessAtStartOrEnd = true;
            }
          } else {
            const n = i - iStart;
            if (n > nContextLines2) {
              jLength -= n - nContextLines2;
              nExcessesBetweenChanges += 1;
            }
          }
        }
        while (i !== iLength && diffs[i][0] !== _cleanupSemantic.DIFF_EQUAL) {
          i += 1;
        }
      }
      const hasPatch = nExcessesBetweenChanges !== 0 || hasExcessAtStartOrEnd;
      if (nExcessesBetweenChanges !== 0) {
        jLength += nExcessesBetweenChanges + 1;
      } else if (hasExcessAtStartOrEnd) {
        jLength += 1;
      }
      const jLast = jLength - 1;
      const lines = [];
      let jPatchMark = 0;
      if (hasPatch) {
        lines.push("");
      }
      let aStart = 0;
      let bStart = 0;
      let aEnd = 0;
      let bEnd = 0;
      const pushCommonLine = (line) => {
        const j = lines.length;
        lines.push(printCommonLine(line, j === 0 || j === jLast, options));
        aEnd += 1;
        bEnd += 1;
      };
      const pushDeleteLine = (line) => {
        const j = lines.length;
        lines.push(printDeleteLine(line, j === 0 || j === jLast, options));
        aEnd += 1;
      };
      const pushInsertLine = (line) => {
        const j = lines.length;
        lines.push(printInsertLine(line, j === 0 || j === jLast, options));
        bEnd += 1;
      };
      i = 0;
      while (i !== iLength) {
        let iStart = i;
        while (i !== iLength && diffs[i][0] === _cleanupSemantic.DIFF_EQUAL) {
          i += 1;
        }
        if (iStart !== i) {
          if (iStart === 0) {
            if (i > nContextLines) {
              iStart = i - nContextLines;
              aStart = iStart;
              bStart = iStart;
              aEnd = aStart;
              bEnd = bStart;
            }
            for (let iCommon = iStart; iCommon !== i; iCommon += 1) {
              pushCommonLine(diffs[iCommon][1]);
            }
          } else if (i === iLength) {
            const iEnd = i - iStart > nContextLines ? iStart + nContextLines : i;
            for (let iCommon = iStart; iCommon !== iEnd; iCommon += 1) {
              pushCommonLine(diffs[iCommon][1]);
            }
          } else {
            const nCommon = i - iStart;
            if (nCommon > nContextLines2) {
              const iEnd = iStart + nContextLines;
              for (let iCommon = iStart; iCommon !== iEnd; iCommon += 1) {
                pushCommonLine(diffs[iCommon][1]);
              }
              lines[jPatchMark] = createPatchMark(
                aStart,
                aEnd,
                bStart,
                bEnd,
                options
              );
              jPatchMark = lines.length;
              lines.push("");
              const nOmit = nCommon - nContextLines2;
              aStart = aEnd + nOmit;
              bStart = bEnd + nOmit;
              aEnd = aStart;
              bEnd = bStart;
              for (let iCommon = i - nContextLines; iCommon !== i; iCommon += 1) {
                pushCommonLine(diffs[iCommon][1]);
              }
            } else {
              for (let iCommon = iStart; iCommon !== i; iCommon += 1) {
                pushCommonLine(diffs[iCommon][1]);
              }
            }
          }
        }
        while (i !== iLength && diffs[i][0] === _cleanupSemantic.DIFF_DELETE) {
          pushDeleteLine(diffs[i][1]);
          i += 1;
        }
        while (i !== iLength && diffs[i][0] === _cleanupSemantic.DIFF_INSERT) {
          pushInsertLine(diffs[i][1]);
          i += 1;
        }
      }
      if (hasPatch) {
        lines[jPatchMark] = createPatchMark(aStart, aEnd, bStart, bEnd, options);
      }
      return lines.join("\n");
    };
    exports2.joinAlignedDiffsNoExpand = joinAlignedDiffsNoExpand;
    var joinAlignedDiffsExpand = (diffs, options) => diffs.map((diff2, i, diffs2) => {
      const line = diff2[1];
      const isFirstOrLast = i === 0 || i === diffs2.length - 1;
      switch (diff2[0]) {
        case _cleanupSemantic.DIFF_DELETE:
          return printDeleteLine(line, isFirstOrLast, options);
        case _cleanupSemantic.DIFF_INSERT:
          return printInsertLine(line, isFirstOrLast, options);
        default:
          return printCommonLine(line, isFirstOrLast, options);
      }
    }).join("\n");
    exports2.joinAlignedDiffsExpand = joinAlignedDiffsExpand;
  }
});

// packages/playwright/bundles/expect/node_modules/jest-diff/build/normalizeDiffOptions.js
var require_normalizeDiffOptions = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-diff/build/normalizeDiffOptions.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.normalizeDiffOptions = exports2.noColor = void 0;
    var _chalk = _interopRequireDefault(require_source());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var noColor = (string) => string;
    exports2.noColor = noColor;
    var DIFF_CONTEXT_DEFAULT = 5;
    var OPTIONS_DEFAULT = {
      aAnnotation: "Expected",
      aColor: _chalk.default.green,
      aIndicator: "-",
      bAnnotation: "Received",
      bColor: _chalk.default.red,
      bIndicator: "+",
      changeColor: _chalk.default.inverse,
      changeLineTrailingSpaceColor: noColor,
      commonColor: _chalk.default.dim,
      commonIndicator: " ",
      commonLineTrailingSpaceColor: noColor,
      compareKeys: void 0,
      contextLines: DIFF_CONTEXT_DEFAULT,
      emptyFirstOrLastLinePlaceholder: "",
      expand: true,
      includeChangeCounts: false,
      omitAnnotationLines: false,
      patchColor: _chalk.default.yellow
    };
    var getCompareKeys = (compareKeys) => compareKeys && typeof compareKeys === "function" ? compareKeys : OPTIONS_DEFAULT.compareKeys;
    var getContextLines = (contextLines) => typeof contextLines === "number" && Number.isSafeInteger(contextLines) && contextLines >= 0 ? contextLines : DIFF_CONTEXT_DEFAULT;
    var normalizeDiffOptions = (options = {}) => ({
      ...OPTIONS_DEFAULT,
      ...options,
      compareKeys: getCompareKeys(options.compareKeys),
      contextLines: getContextLines(options.contextLines)
    });
    exports2.normalizeDiffOptions = normalizeDiffOptions;
  }
});

// packages/playwright/bundles/expect/node_modules/jest-diff/build/diffLines.js
var require_diffLines = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-diff/build/diffLines.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.printDiffLines = exports2.diffLinesUnified2 = exports2.diffLinesUnified = exports2.diffLinesRaw = void 0;
    var _diffSequences = _interopRequireDefault(require_build3());
    var _cleanupSemantic = require_cleanupSemantic();
    var _joinAlignedDiffs = require_joinAlignedDiffs();
    var _normalizeDiffOptions = require_normalizeDiffOptions();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var isEmptyString = (lines) => lines.length === 1 && lines[0].length === 0;
    var countChanges = (diffs) => {
      let a = 0;
      let b = 0;
      diffs.forEach((diff2) => {
        switch (diff2[0]) {
          case _cleanupSemantic.DIFF_DELETE:
            a += 1;
            break;
          case _cleanupSemantic.DIFF_INSERT:
            b += 1;
            break;
        }
      });
      return {
        a,
        b
      };
    };
    var printAnnotation = ({
      aAnnotation,
      aColor,
      aIndicator,
      bAnnotation,
      bColor,
      bIndicator,
      includeChangeCounts,
      omitAnnotationLines
    }, changeCounts) => {
      if (omitAnnotationLines) {
        return "";
      }
      let aRest = "";
      let bRest = "";
      if (includeChangeCounts) {
        const aCount = String(changeCounts.a);
        const bCount = String(changeCounts.b);
        const baAnnotationLengthDiff = bAnnotation.length - aAnnotation.length;
        const aAnnotationPadding = " ".repeat(Math.max(0, baAnnotationLengthDiff));
        const bAnnotationPadding = " ".repeat(Math.max(0, -baAnnotationLengthDiff));
        const baCountLengthDiff = bCount.length - aCount.length;
        const aCountPadding = " ".repeat(Math.max(0, baCountLengthDiff));
        const bCountPadding = " ".repeat(Math.max(0, -baCountLengthDiff));
        aRest = `${aAnnotationPadding}  ${aIndicator} ${aCountPadding}${aCount}`;
        bRest = `${bAnnotationPadding}  ${bIndicator} ${bCountPadding}${bCount}`;
      }
      const a = `${aIndicator} ${aAnnotation}${aRest}`;
      const b = `${bIndicator} ${bAnnotation}${bRest}`;
      return `${aColor(a)}
${bColor(b)}

`;
    };
    var printDiffLines = (diffs, options) => printAnnotation(options, countChanges(diffs)) + (options.expand ? (0, _joinAlignedDiffs.joinAlignedDiffsExpand)(diffs, options) : (0, _joinAlignedDiffs.joinAlignedDiffsNoExpand)(diffs, options));
    exports2.printDiffLines = printDiffLines;
    var diffLinesUnified = (aLines, bLines, options) => printDiffLines(
      diffLinesRaw(
        isEmptyString(aLines) ? [] : aLines,
        isEmptyString(bLines) ? [] : bLines
      ),
      (0, _normalizeDiffOptions.normalizeDiffOptions)(options)
    );
    exports2.diffLinesUnified = diffLinesUnified;
    var diffLinesUnified2 = (aLinesDisplay, bLinesDisplay, aLinesCompare, bLinesCompare, options) => {
      if (isEmptyString(aLinesDisplay) && isEmptyString(aLinesCompare)) {
        aLinesDisplay = [];
        aLinesCompare = [];
      }
      if (isEmptyString(bLinesDisplay) && isEmptyString(bLinesCompare)) {
        bLinesDisplay = [];
        bLinesCompare = [];
      }
      if (aLinesDisplay.length !== aLinesCompare.length || bLinesDisplay.length !== bLinesCompare.length) {
        return diffLinesUnified(aLinesDisplay, bLinesDisplay, options);
      }
      const diffs = diffLinesRaw(aLinesCompare, bLinesCompare);
      let aIndex = 0;
      let bIndex = 0;
      diffs.forEach((diff2) => {
        switch (diff2[0]) {
          case _cleanupSemantic.DIFF_DELETE:
            diff2[1] = aLinesDisplay[aIndex];
            aIndex += 1;
            break;
          case _cleanupSemantic.DIFF_INSERT:
            diff2[1] = bLinesDisplay[bIndex];
            bIndex += 1;
            break;
          default:
            diff2[1] = bLinesDisplay[bIndex];
            aIndex += 1;
            bIndex += 1;
        }
      });
      return printDiffLines(
        diffs,
        (0, _normalizeDiffOptions.normalizeDiffOptions)(options)
      );
    };
    exports2.diffLinesUnified2 = diffLinesUnified2;
    var diffLinesRaw = (aLines, bLines) => {
      const aLength = aLines.length;
      const bLength = bLines.length;
      const isCommon = (aIndex2, bIndex2) => aLines[aIndex2] === bLines[bIndex2];
      const diffs = [];
      let aIndex = 0;
      let bIndex = 0;
      const foundSubsequence = (nCommon, aCommon, bCommon) => {
        for (; aIndex !== aCommon; aIndex += 1) {
          diffs.push(
            new _cleanupSemantic.Diff(_cleanupSemantic.DIFF_DELETE, aLines[aIndex])
          );
        }
        for (; bIndex !== bCommon; bIndex += 1) {
          diffs.push(
            new _cleanupSemantic.Diff(_cleanupSemantic.DIFF_INSERT, bLines[bIndex])
          );
        }
        for (; nCommon !== 0; nCommon -= 1, aIndex += 1, bIndex += 1) {
          diffs.push(
            new _cleanupSemantic.Diff(_cleanupSemantic.DIFF_EQUAL, bLines[bIndex])
          );
        }
      };
      (0, _diffSequences.default)(aLength, bLength, isCommon, foundSubsequence);
      for (; aIndex !== aLength; aIndex += 1) {
        diffs.push(
          new _cleanupSemantic.Diff(_cleanupSemantic.DIFF_DELETE, aLines[aIndex])
        );
      }
      for (; bIndex !== bLength; bIndex += 1) {
        diffs.push(
          new _cleanupSemantic.Diff(_cleanupSemantic.DIFF_INSERT, bLines[bIndex])
        );
      }
      return diffs;
    };
    exports2.diffLinesRaw = diffLinesRaw;
  }
});

// packages/playwright/bundles/expect/node_modules/jest-diff/build/diffStrings.js
var require_diffStrings = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-diff/build/diffStrings.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = void 0;
    var _diffSequences = _interopRequireDefault(require_build3());
    var _cleanupSemantic = require_cleanupSemantic();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var diffStrings = (a, b) => {
      const isCommon = (aIndex2, bIndex2) => a[aIndex2] === b[bIndex2];
      let aIndex = 0;
      let bIndex = 0;
      const diffs = [];
      const foundSubsequence = (nCommon, aCommon, bCommon) => {
        if (aIndex !== aCommon) {
          diffs.push(
            new _cleanupSemantic.Diff(
              _cleanupSemantic.DIFF_DELETE,
              a.slice(aIndex, aCommon)
            )
          );
        }
        if (bIndex !== bCommon) {
          diffs.push(
            new _cleanupSemantic.Diff(
              _cleanupSemantic.DIFF_INSERT,
              b.slice(bIndex, bCommon)
            )
          );
        }
        aIndex = aCommon + nCommon;
        bIndex = bCommon + nCommon;
        diffs.push(
          new _cleanupSemantic.Diff(
            _cleanupSemantic.DIFF_EQUAL,
            b.slice(bCommon, bIndex)
          )
        );
      };
      (0, _diffSequences.default)(a.length, b.length, isCommon, foundSubsequence);
      if (aIndex !== a.length) {
        diffs.push(
          new _cleanupSemantic.Diff(_cleanupSemantic.DIFF_DELETE, a.slice(aIndex))
        );
      }
      if (bIndex !== b.length) {
        diffs.push(
          new _cleanupSemantic.Diff(_cleanupSemantic.DIFF_INSERT, b.slice(bIndex))
        );
      }
      return diffs;
    };
    var _default = diffStrings;
    exports2.default = _default;
  }
});

// packages/playwright/bundles/expect/node_modules/jest-diff/build/getAlignedDiffs.js
var require_getAlignedDiffs = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-diff/build/getAlignedDiffs.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = void 0;
    var _cleanupSemantic = require_cleanupSemantic();
    var concatenateRelevantDiffs = (op, diffs, changeColor) => diffs.reduce(
      (reduced, diff2) => reduced + (diff2[0] === _cleanupSemantic.DIFF_EQUAL ? diff2[1] : diff2[0] === op && diff2[1].length !== 0 ? changeColor(diff2[1]) : ""),
      ""
    );
    var ChangeBuffer = class {
      constructor(op, changeColor) {
        __publicField(this, "op");
        __publicField(this, "line");
        // incomplete line
        __publicField(this, "lines");
        // complete lines
        __publicField(this, "changeColor");
        this.op = op;
        this.line = [];
        this.lines = [];
        this.changeColor = changeColor;
      }
      pushSubstring(substring) {
        this.pushDiff(new _cleanupSemantic.Diff(this.op, substring));
      }
      pushLine() {
        this.lines.push(
          this.line.length !== 1 ? new _cleanupSemantic.Diff(
            this.op,
            concatenateRelevantDiffs(this.op, this.line, this.changeColor)
          ) : this.line[0][0] === this.op ? this.line[0] : new _cleanupSemantic.Diff(this.op, this.line[0][1])
          // was common diff
        );
        this.line.length = 0;
      }
      isLineEmpty() {
        return this.line.length === 0;
      }
      // Minor input to buffer.
      pushDiff(diff2) {
        this.line.push(diff2);
      }
      // Main input to buffer.
      align(diff2) {
        const string = diff2[1];
        if (string.includes("\n")) {
          const substrings = string.split("\n");
          const iLast = substrings.length - 1;
          substrings.forEach((substring, i) => {
            if (i < iLast) {
              this.pushSubstring(substring);
              this.pushLine();
            } else if (substring.length !== 0) {
              this.pushSubstring(substring);
            }
          });
        } else {
          this.pushDiff(diff2);
        }
      }
      // Output from buffer.
      moveLinesTo(lines) {
        if (!this.isLineEmpty()) {
          this.pushLine();
        }
        lines.push(...this.lines);
        this.lines.length = 0;
      }
    };
    var CommonBuffer = class {
      constructor(deleteBuffer, insertBuffer) {
        __publicField(this, "deleteBuffer");
        __publicField(this, "insertBuffer");
        __publicField(this, "lines");
        this.deleteBuffer = deleteBuffer;
        this.insertBuffer = insertBuffer;
        this.lines = [];
      }
      pushDiffCommonLine(diff2) {
        this.lines.push(diff2);
      }
      pushDiffChangeLines(diff2) {
        const isDiffEmpty = diff2[1].length === 0;
        if (!isDiffEmpty || this.deleteBuffer.isLineEmpty()) {
          this.deleteBuffer.pushDiff(diff2);
        }
        if (!isDiffEmpty || this.insertBuffer.isLineEmpty()) {
          this.insertBuffer.pushDiff(diff2);
        }
      }
      flushChangeLines() {
        this.deleteBuffer.moveLinesTo(this.lines);
        this.insertBuffer.moveLinesTo(this.lines);
      }
      // Input to buffer.
      align(diff2) {
        const op = diff2[0];
        const string = diff2[1];
        if (string.includes("\n")) {
          const substrings = string.split("\n");
          const iLast = substrings.length - 1;
          substrings.forEach((substring, i) => {
            if (i === 0) {
              const subdiff = new _cleanupSemantic.Diff(op, substring);
              if (this.deleteBuffer.isLineEmpty() && this.insertBuffer.isLineEmpty()) {
                this.flushChangeLines();
                this.pushDiffCommonLine(subdiff);
              } else {
                this.pushDiffChangeLines(subdiff);
                this.flushChangeLines();
              }
            } else if (i < iLast) {
              this.pushDiffCommonLine(new _cleanupSemantic.Diff(op, substring));
            } else if (substring.length !== 0) {
              this.pushDiffChangeLines(new _cleanupSemantic.Diff(op, substring));
            }
          });
        } else {
          this.pushDiffChangeLines(diff2);
        }
      }
      // Output from buffer.
      getLines() {
        this.flushChangeLines();
        return this.lines;
      }
    };
    var getAlignedDiffs = (diffs, changeColor) => {
      const deleteBuffer = new ChangeBuffer(
        _cleanupSemantic.DIFF_DELETE,
        changeColor
      );
      const insertBuffer = new ChangeBuffer(
        _cleanupSemantic.DIFF_INSERT,
        changeColor
      );
      const commonBuffer = new CommonBuffer(deleteBuffer, insertBuffer);
      diffs.forEach((diff2) => {
        switch (diff2[0]) {
          case _cleanupSemantic.DIFF_DELETE:
            deleteBuffer.align(diff2);
            break;
          case _cleanupSemantic.DIFF_INSERT:
            insertBuffer.align(diff2);
            break;
          default:
            commonBuffer.align(diff2);
        }
      });
      return commonBuffer.getLines();
    };
    var _default = getAlignedDiffs;
    exports2.default = _default;
  }
});

// packages/playwright/bundles/expect/node_modules/jest-diff/build/printDiffs.js
var require_printDiffs = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-diff/build/printDiffs.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.diffStringsUnified = exports2.diffStringsRaw = void 0;
    var _cleanupSemantic = require_cleanupSemantic();
    var _diffLines = require_diffLines();
    var _diffStrings = _interopRequireDefault(require_diffStrings());
    var _getAlignedDiffs = _interopRequireDefault(require_getAlignedDiffs());
    var _normalizeDiffOptions = require_normalizeDiffOptions();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var hasCommonDiff = (diffs, isMultiline) => {
      if (isMultiline) {
        const iLast = diffs.length - 1;
        return diffs.some(
          (diff2, i) => diff2[0] === _cleanupSemantic.DIFF_EQUAL && (i !== iLast || diff2[1] !== "\n")
        );
      }
      return diffs.some((diff2) => diff2[0] === _cleanupSemantic.DIFF_EQUAL);
    };
    var diffStringsUnified = (a, b, options) => {
      if (a !== b && a.length !== 0 && b.length !== 0) {
        const isMultiline = a.includes("\n") || b.includes("\n");
        const diffs = diffStringsRaw(
          isMultiline ? `${a}
` : a,
          isMultiline ? `${b}
` : b,
          true
          // cleanupSemantic
        );
        if (hasCommonDiff(diffs, isMultiline)) {
          const optionsNormalized = (0, _normalizeDiffOptions.normalizeDiffOptions)(
            options
          );
          const lines = (0, _getAlignedDiffs.default)(
            diffs,
            optionsNormalized.changeColor
          );
          return (0, _diffLines.printDiffLines)(lines, optionsNormalized);
        }
      }
      return (0, _diffLines.diffLinesUnified)(
        a.split("\n"),
        b.split("\n"),
        options
      );
    };
    exports2.diffStringsUnified = diffStringsUnified;
    var diffStringsRaw = (a, b, cleanup) => {
      const diffs = (0, _diffStrings.default)(a, b);
      if (cleanup) {
        (0, _cleanupSemantic.cleanupSemantic)(diffs);
      }
      return diffs;
    };
    exports2.diffStringsRaw = diffStringsRaw;
  }
});

// packages/playwright/bundles/expect/node_modules/jest-diff/build/index.js
var require_build4 = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-diff/build/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "DIFF_DELETE", {
      enumerable: true,
      get: function() {
        return _cleanupSemantic.DIFF_DELETE;
      }
    });
    Object.defineProperty(exports2, "DIFF_EQUAL", {
      enumerable: true,
      get: function() {
        return _cleanupSemantic.DIFF_EQUAL;
      }
    });
    Object.defineProperty(exports2, "DIFF_INSERT", {
      enumerable: true,
      get: function() {
        return _cleanupSemantic.DIFF_INSERT;
      }
    });
    Object.defineProperty(exports2, "Diff", {
      enumerable: true,
      get: function() {
        return _cleanupSemantic.Diff;
      }
    });
    exports2.diff = diff2;
    Object.defineProperty(exports2, "diffLinesRaw", {
      enumerable: true,
      get: function() {
        return _diffLines.diffLinesRaw;
      }
    });
    Object.defineProperty(exports2, "diffLinesUnified", {
      enumerable: true,
      get: function() {
        return _diffLines.diffLinesUnified;
      }
    });
    Object.defineProperty(exports2, "diffLinesUnified2", {
      enumerable: true,
      get: function() {
        return _diffLines.diffLinesUnified2;
      }
    });
    Object.defineProperty(exports2, "diffStringsRaw", {
      enumerable: true,
      get: function() {
        return _printDiffs.diffStringsRaw;
      }
    });
    Object.defineProperty(exports2, "diffStringsUnified", {
      enumerable: true,
      get: function() {
        return _printDiffs.diffStringsUnified;
      }
    });
    var _chalk = _interopRequireDefault(require_source());
    var _jestGetType = require_build();
    var _prettyFormat = require_build2();
    var _cleanupSemantic = require_cleanupSemantic();
    var _constants = require_constants();
    var _diffLines = require_diffLines();
    var _normalizeDiffOptions = require_normalizeDiffOptions();
    var _printDiffs = require_printDiffs();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var Symbol2 = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
    var getCommonMessage = (message, options) => {
      const { commonColor } = (0, _normalizeDiffOptions.normalizeDiffOptions)(
        options
      );
      return commonColor(message);
    };
    var {
      AsymmetricMatcher: AsymmetricMatcher2,
      DOMCollection,
      DOMElement,
      Immutable,
      ReactElement,
      ReactTestComponent
    } = _prettyFormat.plugins;
    var PLUGINS = [
      ReactTestComponent,
      ReactElement,
      DOMElement,
      DOMCollection,
      Immutable,
      AsymmetricMatcher2
    ];
    var FORMAT_OPTIONS = {
      plugins: PLUGINS
    };
    var FALLBACK_FORMAT_OPTIONS = {
      callToJSON: false,
      maxDepth: 10,
      plugins: PLUGINS
    };
    function diff2(a, b, options) {
      if (Object.is(a, b)) {
        return getCommonMessage(_constants.NO_DIFF_MESSAGE, options);
      }
      const aType = (0, _jestGetType.getType)(a);
      let expectedType = aType;
      let omitDifference = false;
      if (aType === "object" && typeof a.asymmetricMatch === "function") {
        if (a.$$typeof !== Symbol2.for("jest.asymmetricMatcher")) {
          return null;
        }
        if (typeof a.getExpectedType !== "function") {
          return null;
        }
        expectedType = a.getExpectedType();
        omitDifference = expectedType === "string";
      }
      if (expectedType !== (0, _jestGetType.getType)(b)) {
        return `  Comparing two different types of values. Expected ${_chalk.default.green(expectedType)} but received ${_chalk.default.red((0, _jestGetType.getType)(b))}.`;
      }
      if (omitDifference) {
        return null;
      }
      switch (aType) {
        case "string":
          return (0, _diffLines.diffLinesUnified)(
            a.split("\n"),
            b.split("\n"),
            options
          );
        case "boolean":
        case "number":
          return comparePrimitive(a, b, options);
        case "map":
          return compareObjects(sortMap(a), sortMap(b), options);
        case "set":
          return compareObjects(sortSet(a), sortSet(b), options);
        default:
          return compareObjects(a, b, options);
      }
    }
    function comparePrimitive(a, b, options) {
      const aFormat = (0, _prettyFormat.format)(a, FORMAT_OPTIONS);
      const bFormat = (0, _prettyFormat.format)(b, FORMAT_OPTIONS);
      return aFormat === bFormat ? getCommonMessage(_constants.NO_DIFF_MESSAGE, options) : (0, _diffLines.diffLinesUnified)(
        aFormat.split("\n"),
        bFormat.split("\n"),
        options
      );
    }
    function sortMap(map) {
      return new Map(Array.from(map.entries()).sort());
    }
    function sortSet(set) {
      return new Set(Array.from(set.values()).sort());
    }
    function compareObjects(a, b, options) {
      let difference;
      let hasThrown = false;
      try {
        const formatOptions = getFormatOptions(FORMAT_OPTIONS, options);
        difference = getObjectsDifference(a, b, formatOptions, options);
      } catch {
        hasThrown = true;
      }
      const noDiffMessage = getCommonMessage(_constants.NO_DIFF_MESSAGE, options);
      if (difference === void 0 || difference === noDiffMessage) {
        const formatOptions = getFormatOptions(FALLBACK_FORMAT_OPTIONS, options);
        difference = getObjectsDifference(a, b, formatOptions, options);
        if (difference !== noDiffMessage && !hasThrown) {
          difference = `${getCommonMessage(
            _constants.SIMILAR_MESSAGE,
            options
          )}

${difference}`;
        }
      }
      return difference;
    }
    function getFormatOptions(formatOptions, options) {
      const { compareKeys } = (0, _normalizeDiffOptions.normalizeDiffOptions)(
        options
      );
      return {
        ...formatOptions,
        compareKeys
      };
    }
    function getObjectsDifference(a, b, formatOptions, options) {
      const formatOptionsZeroIndent = {
        ...formatOptions,
        indent: 0
      };
      const aCompare = (0, _prettyFormat.format)(a, formatOptionsZeroIndent);
      const bCompare = (0, _prettyFormat.format)(b, formatOptionsZeroIndent);
      if (aCompare === bCompare) {
        return getCommonMessage(_constants.NO_DIFF_MESSAGE, options);
      } else {
        const aDisplay = (0, _prettyFormat.format)(a, formatOptions);
        const bDisplay = (0, _prettyFormat.format)(b, formatOptions);
        return (0, _diffLines.diffLinesUnified2)(
          aDisplay.split("\n"),
          bDisplay.split("\n"),
          aCompare.split("\n"),
          bCompare.split("\n"),
          options
        );
      }
    }
  }
});

// packages/playwright/bundles/expect/node_modules/jest-matcher-utils/build/Replaceable.js
var require_Replaceable = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-matcher-utils/build/Replaceable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = void 0;
    var _jestGetType = require_build();
    var supportTypes = ["map", "array", "object"];
    var Replaceable = class {
      constructor(object) {
        __publicField(this, "object");
        __publicField(this, "type");
        this.object = object;
        this.type = (0, _jestGetType.getType)(object);
        if (!supportTypes.includes(this.type)) {
          throw new Error(`Type ${this.type} is not support in Replaceable!`);
        }
      }
      static isReplaceable(obj1, obj2) {
        const obj1Type = (0, _jestGetType.getType)(obj1);
        const obj2Type = (0, _jestGetType.getType)(obj2);
        return obj1Type === obj2Type && supportTypes.includes(obj1Type);
      }
      forEach(cb) {
        if (this.type === "object") {
          const descriptors = Object.getOwnPropertyDescriptors(this.object);
          [
            ...Object.keys(descriptors),
            ...Object.getOwnPropertySymbols(descriptors)
          ].filter((key) => descriptors[key].enumerable).forEach((key) => {
            cb(this.object[key], key, this.object);
          });
        } else {
          this.object.forEach(cb);
        }
      }
      get(key) {
        if (this.type === "map") {
          return this.object.get(key);
        }
        return this.object[key];
      }
      set(key, value) {
        if (this.type === "map") {
          this.object.set(key, value);
        } else {
          this.object[key] = value;
        }
      }
    };
    exports2.default = Replaceable;
  }
});

// packages/playwright/bundles/expect/node_modules/jest-matcher-utils/build/deepCyclicCopyReplaceable.js
var require_deepCyclicCopyReplaceable = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-matcher-utils/build/deepCyclicCopyReplaceable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = deepCyclicCopyReplaceable;
    var _prettyFormat = require_build2();
    var builtInObject = [
      Array,
      Date,
      Float32Array,
      Float64Array,
      Int16Array,
      Int32Array,
      Int8Array,
      Map,
      Set,
      RegExp,
      Uint16Array,
      Uint32Array,
      Uint8Array,
      Uint8ClampedArray
    ];
    if (typeof Buffer !== "undefined") {
      builtInObject.push(Buffer);
    }
    var isBuiltInObject = (object) => builtInObject.includes(object.constructor);
    var isMap = (value) => value.constructor === Map;
    function deepCyclicCopyReplaceable(value, cycles = /* @__PURE__ */ new WeakMap()) {
      if (typeof value !== "object" || value === null) {
        return value;
      } else if (cycles.has(value)) {
        return cycles.get(value);
      } else if (Array.isArray(value)) {
        return deepCyclicCopyArray(value, cycles);
      } else if (isMap(value)) {
        return deepCyclicCopyMap(value, cycles);
      } else if (isBuiltInObject(value)) {
        return value;
      } else if (_prettyFormat.plugins.DOMElement.test(value)) {
        return value.cloneNode(true);
      } else {
        return deepCyclicCopyObject(value, cycles);
      }
    }
    function deepCyclicCopyObject(object, cycles) {
      const newObject = Object.create(Object.getPrototypeOf(object));
      let descriptors = {};
      let obj = object;
      do {
        descriptors = Object.assign(
          {},
          Object.getOwnPropertyDescriptors(obj),
          descriptors
        );
      } while ((obj = Object.getPrototypeOf(obj)) && obj !== Object.getPrototypeOf({}));
      cycles.set(object, newObject);
      const newDescriptors = [
        ...Object.keys(descriptors),
        ...Object.getOwnPropertySymbols(descriptors)
      ].reduce(
        //@ts-expect-error because typescript do not support symbol key in object
        //https://github.com/microsoft/TypeScript/issues/1863
        (newDescriptors2, key) => {
          const enumerable = descriptors[key].enumerable;
          newDescriptors2[key] = {
            configurable: true,
            enumerable,
            value: deepCyclicCopyReplaceable(
              // this accesses the value or getter, depending. We just care about the value anyways, and this allows us to not mess with accessors
              // it has the side effect of invoking the getter here though, rather than copying it over
              object[key],
              cycles
            ),
            writable: true
          };
          return newDescriptors2;
        },
        {}
      );
      return Object.defineProperties(newObject, newDescriptors);
    }
    function deepCyclicCopyArray(array, cycles) {
      const newArray = new (Object.getPrototypeOf(array)).constructor(array.length);
      const length = array.length;
      cycles.set(array, newArray);
      for (let i = 0; i < length; i++) {
        newArray[i] = deepCyclicCopyReplaceable(array[i], cycles);
      }
      return newArray;
    }
    function deepCyclicCopyMap(map, cycles) {
      const newMap = /* @__PURE__ */ new Map();
      cycles.set(map, newMap);
      map.forEach((value, key) => {
        newMap.set(key, deepCyclicCopyReplaceable(value, cycles));
      });
      return newMap;
    }
  }
});

// packages/playwright/bundles/expect/node_modules/jest-matcher-utils/build/index.js
var require_build5 = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-matcher-utils/build/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.printReceived = exports2.printExpected = exports2.printDiffOrStringify = exports2.pluralize = exports2.matcherHint = exports2.matcherErrorMessage = exports2.highlightTrailingWhitespace = exports2.getLabelPrinter = exports2.ensureNumbers = exports2.ensureNoExpected = exports2.ensureExpectedIsNumber = exports2.ensureExpectedIsNonNegativeInteger = exports2.ensureActualIsNumber = exports2.diff = exports2.SUGGEST_TO_CONTAIN_EQUAL = exports2.RECEIVED_COLOR = exports2.INVERTED_COLOR = exports2.EXPECTED_COLOR = exports2.DIM_COLOR = exports2.BOLD_WEIGHT = void 0;
    exports2.printWithType = printWithType5;
    exports2.replaceMatchedToAsymmetricMatcher = replaceMatchedToAsymmetricMatcher;
    exports2.stringify = void 0;
    var _chalk = _interopRequireDefault(require_source());
    var _jestDiff = require_build4();
    var _jestGetType = require_build();
    var _prettyFormat = require_build2();
    var _Replaceable = _interopRequireDefault(require_Replaceable());
    var _deepCyclicCopyReplaceable = _interopRequireDefault(
      require_deepCyclicCopyReplaceable()
    );
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var {
      AsymmetricMatcher: AsymmetricMatcher2,
      DOMCollection,
      DOMElement,
      Immutable,
      ReactElement,
      ReactTestComponent
    } = _prettyFormat.plugins;
    var PLUGINS = [
      ReactTestComponent,
      ReactElement,
      DOMElement,
      DOMCollection,
      Immutable,
      AsymmetricMatcher2
    ];
    var EXPECTED_COLOR7 = _chalk.default.green;
    exports2.EXPECTED_COLOR = EXPECTED_COLOR7;
    var RECEIVED_COLOR8 = _chalk.default.red;
    exports2.RECEIVED_COLOR = RECEIVED_COLOR8;
    var INVERTED_COLOR3 = _chalk.default.inverse;
    exports2.INVERTED_COLOR = INVERTED_COLOR3;
    var BOLD_WEIGHT = _chalk.default.bold;
    exports2.BOLD_WEIGHT = BOLD_WEIGHT;
    var DIM_COLOR3 = _chalk.default.dim;
    exports2.DIM_COLOR = DIM_COLOR3;
    var MULTILINE_REGEXP = /\n/;
    var SPACE_SYMBOL = "\xB7";
    var NUMBERS = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen"
    ];
    var SUGGEST_TO_CONTAIN_EQUAL2 = _chalk.default.dim(
      "Looks like you wanted to test for object/array equality with the stricter `toContain` matcher. You probably need to use `toContainEqual` instead."
    );
    exports2.SUGGEST_TO_CONTAIN_EQUAL = SUGGEST_TO_CONTAIN_EQUAL2;
    var stringify6 = (object, maxDepth = 10, maxWidth = 10) => {
      const MAX_LENGTH = 1e4;
      let result;
      try {
        result = (0, _prettyFormat.format)(object, {
          maxDepth,
          maxWidth,
          min: true,
          plugins: PLUGINS
        });
      } catch {
        result = (0, _prettyFormat.format)(object, {
          callToJSON: false,
          maxDepth,
          maxWidth,
          min: true,
          plugins: PLUGINS
        });
      }
      if (result.length >= MAX_LENGTH && maxDepth > 1) {
        return stringify6(object, Math.floor(maxDepth / 2), maxWidth);
      } else if (result.length >= MAX_LENGTH && maxWidth > 1) {
        return stringify6(object, maxDepth, Math.floor(maxWidth / 2));
      } else {
        return result;
      }
    };
    exports2.stringify = stringify6;
    var highlightTrailingWhitespace = (text) => text.replace(/\s+$/gm, _chalk.default.inverse("$&"));
    exports2.highlightTrailingWhitespace = highlightTrailingWhitespace;
    var replaceTrailingSpaces = (text) => text.replace(/\s+$/gm, (spaces) => SPACE_SYMBOL.repeat(spaces.length));
    var printReceived7 = (object) => RECEIVED_COLOR8(replaceTrailingSpaces(stringify6(object)));
    exports2.printReceived = printReceived7;
    var printExpected4 = (value) => EXPECTED_COLOR7(replaceTrailingSpaces(stringify6(value)));
    exports2.printExpected = printExpected4;
    function printWithType5(name, value, print) {
      const type = (0, _jestGetType.getType)(value);
      const hasType = type !== "null" && type !== "undefined" ? `${name} has type:  ${type}
` : "";
      const hasValue = `${name} has value: ${print(value)}`;
      return hasType + hasValue;
    }
    var ensureNoExpected4 = (expected, matcherName, options) => {
      if (typeof expected !== "undefined") {
        const matcherString = (options ? "" : "[.not]") + matcherName;
        throw new Error(
          matcherErrorMessage5(
            matcherHint6(matcherString, void 0, "", options),
            // Because expected is omitted in hint above,
            // expected is black instead of green in message below.
            "this matcher must not have an expected argument",
            printWithType5("Expected", expected, printExpected4)
          )
        );
      }
    };
    exports2.ensureNoExpected = ensureNoExpected4;
    var ensureActualIsNumber = (actual, matcherName, options) => {
      if (typeof actual !== "number" && typeof actual !== "bigint") {
        const matcherString = (options ? "" : "[.not]") + matcherName;
        throw new Error(
          matcherErrorMessage5(
            matcherHint6(matcherString, void 0, void 0, options),
            `${RECEIVED_COLOR8("received")} value must be a number or bigint`,
            printWithType5("Received", actual, printReceived7)
          )
        );
      }
    };
    exports2.ensureActualIsNumber = ensureActualIsNumber;
    var ensureExpectedIsNumber = (expected, matcherName, options) => {
      if (typeof expected !== "number" && typeof expected !== "bigint") {
        const matcherString = (options ? "" : "[.not]") + matcherName;
        throw new Error(
          matcherErrorMessage5(
            matcherHint6(matcherString, void 0, void 0, options),
            `${EXPECTED_COLOR7("expected")} value must be a number or bigint`,
            printWithType5("Expected", expected, printExpected4)
          )
        );
      }
    };
    exports2.ensureExpectedIsNumber = ensureExpectedIsNumber;
    var ensureNumbers2 = (actual, expected, matcherName, options) => {
      ensureActualIsNumber(actual, matcherName, options);
      ensureExpectedIsNumber(expected, matcherName, options);
    };
    exports2.ensureNumbers = ensureNumbers2;
    var ensureExpectedIsNonNegativeInteger3 = (expected, matcherName, options) => {
      if (typeof expected !== "number" || !Number.isSafeInteger(expected) || expected < 0) {
        const matcherString = (options ? "" : "[.not]") + matcherName;
        throw new Error(
          matcherErrorMessage5(
            matcherHint6(matcherString, void 0, void 0, options),
            `${EXPECTED_COLOR7("expected")} value must be a non-negative integer`,
            printWithType5("Expected", expected, printExpected4)
          )
        );
      }
    };
    exports2.ensureExpectedIsNonNegativeInteger = ensureExpectedIsNonNegativeInteger3;
    var getCommonAndChangedSubstrings = (diffs, op, hasCommonDiff) => diffs.reduce(
      (reduced, diff3) => reduced + (diff3[0] === _jestDiff.DIFF_EQUAL ? diff3[1] : diff3[0] !== op ? "" : hasCommonDiff ? INVERTED_COLOR3(diff3[1]) : diff3[1]),
      ""
    );
    var isLineDiffable = (expected, received) => {
      const expectedType = (0, _jestGetType.getType)(expected);
      const receivedType = (0, _jestGetType.getType)(received);
      if (expectedType !== receivedType) {
        return false;
      }
      if ((0, _jestGetType.isPrimitive)(expected)) {
        return typeof expected === "string" && typeof received === "string" && expected.length !== 0 && received.length !== 0 && (MULTILINE_REGEXP.test(expected) || MULTILINE_REGEXP.test(received));
      }
      if (expectedType === "date" || expectedType === "function" || expectedType === "regexp") {
        return false;
      }
      if (expected instanceof Error && received instanceof Error) {
        return false;
      }
      if (receivedType === "object" && typeof received.asymmetricMatch === "function") {
        return false;
      }
      return true;
    };
    var MAX_DIFF_STRING_LENGTH = 2e4;
    var printDiffOrStringify3 = (expected, received, expectedLabel, receivedLabel, expand) => {
      if (typeof expected === "string" && typeof received === "string" && expected.length !== 0 && received.length !== 0 && expected.length <= MAX_DIFF_STRING_LENGTH && received.length <= MAX_DIFF_STRING_LENGTH && expected !== received) {
        if (expected.includes("\n") || received.includes("\n")) {
          return (0, _jestDiff.diffStringsUnified)(expected, received, {
            aAnnotation: expectedLabel,
            bAnnotation: receivedLabel,
            changeLineTrailingSpaceColor: _chalk.default.bgYellow,
            commonLineTrailingSpaceColor: _chalk.default.bgYellow,
            emptyFirstOrLastLinePlaceholder: "\u21B5",
            // U+21B5
            expand,
            includeChangeCounts: true
          });
        }
        const diffs = (0, _jestDiff.diffStringsRaw)(expected, received, true);
        const hasCommonDiff = diffs.some((diff3) => diff3[0] === _jestDiff.DIFF_EQUAL);
        const printLabel2 = getLabelPrinter2(expectedLabel, receivedLabel);
        const expectedLine2 = printLabel2(expectedLabel) + printExpected4(
          getCommonAndChangedSubstrings(
            diffs,
            _jestDiff.DIFF_DELETE,
            hasCommonDiff
          )
        );
        const receivedLine2 = printLabel2(receivedLabel) + printReceived7(
          getCommonAndChangedSubstrings(
            diffs,
            _jestDiff.DIFF_INSERT,
            hasCommonDiff
          )
        );
        return `${expectedLine2}
${receivedLine2}`;
      }
      if (isLineDiffable(expected, received)) {
        const { replacedExpected, replacedReceived } = replaceMatchedToAsymmetricMatcher(expected, received, [], []);
        const difference = (0, _jestDiff.diff)(replacedExpected, replacedReceived, {
          aAnnotation: expectedLabel,
          bAnnotation: receivedLabel,
          expand,
          includeChangeCounts: true
        });
        if (typeof difference === "string" && difference.includes(`- ${expectedLabel}`) && difference.includes(`+ ${receivedLabel}`)) {
          return difference;
        }
      }
      const printLabel = getLabelPrinter2(expectedLabel, receivedLabel);
      const expectedLine = printLabel(expectedLabel) + printExpected4(expected);
      const receivedLine = printLabel(receivedLabel) + (stringify6(expected) === stringify6(received) ? "serializes to the same string" : printReceived7(received));
      return `${expectedLine}
${receivedLine}`;
    };
    exports2.printDiffOrStringify = printDiffOrStringify3;
    var shouldPrintDiff = (actual, expected) => {
      if (typeof actual === "number" && typeof expected === "number") {
        return false;
      }
      if (typeof actual === "bigint" && typeof expected === "bigint") {
        return false;
      }
      if (typeof actual === "boolean" && typeof expected === "boolean") {
        return false;
      }
      return true;
    };
    function replaceMatchedToAsymmetricMatcher(replacedExpected, replacedReceived, expectedCycles, receivedCycles) {
      return _replaceMatchedToAsymmetricMatcher(
        (0, _deepCyclicCopyReplaceable.default)(replacedExpected),
        (0, _deepCyclicCopyReplaceable.default)(replacedReceived),
        expectedCycles,
        receivedCycles
      );
    }
    function _replaceMatchedToAsymmetricMatcher(replacedExpected, replacedReceived, expectedCycles, receivedCycles) {
      if (!_Replaceable.default.isReplaceable(replacedExpected, replacedReceived)) {
        return {
          replacedExpected,
          replacedReceived
        };
      }
      if (expectedCycles.includes(replacedExpected) || receivedCycles.includes(replacedReceived)) {
        return {
          replacedExpected,
          replacedReceived
        };
      }
      expectedCycles.push(replacedExpected);
      receivedCycles.push(replacedReceived);
      const expectedReplaceable = new _Replaceable.default(replacedExpected);
      const receivedReplaceable = new _Replaceable.default(replacedReceived);
      expectedReplaceable.forEach((expectedValue, key) => {
        const receivedValue = receivedReplaceable.get(key);
        if (isAsymmetricMatcher(expectedValue)) {
          if (expectedValue.asymmetricMatch(receivedValue)) {
            receivedReplaceable.set(key, expectedValue);
          }
        } else if (isAsymmetricMatcher(receivedValue)) {
          if (receivedValue.asymmetricMatch(expectedValue)) {
            expectedReplaceable.set(key, receivedValue);
          }
        } else if (_Replaceable.default.isReplaceable(expectedValue, receivedValue)) {
          const replaced = _replaceMatchedToAsymmetricMatcher(
            expectedValue,
            receivedValue,
            expectedCycles,
            receivedCycles
          );
          expectedReplaceable.set(key, replaced.replacedExpected);
          receivedReplaceable.set(key, replaced.replacedReceived);
        }
      });
      return {
        replacedExpected: expectedReplaceable.object,
        replacedReceived: receivedReplaceable.object
      };
    }
    function isAsymmetricMatcher(data) {
      const type = (0, _jestGetType.getType)(data);
      return type === "object" && typeof data.asymmetricMatch === "function";
    }
    var diff2 = (a, b, options) => shouldPrintDiff(a, b) ? (0, _jestDiff.diff)(a, b, options) : null;
    exports2.diff = diff2;
    var pluralize3 = (word, count) => `${NUMBERS[count] || count} ${word}${count === 1 ? "" : "s"}`;
    exports2.pluralize = pluralize3;
    var getLabelPrinter2 = (...strings) => {
      const maxLength = strings.reduce(
        (max, string) => string.length > max ? string.length : max,
        0
      );
      return (string) => `${string}: ${" ".repeat(maxLength - string.length)}`;
    };
    exports2.getLabelPrinter = getLabelPrinter2;
    var matcherErrorMessage5 = (hint, generic, specific) => `${hint}

${_chalk.default.bold("Matcher error")}: ${generic}${typeof specific === "string" ? `

${specific}` : ""}`;
    exports2.matcherErrorMessage = matcherErrorMessage5;
    var matcherHint6 = (matcherName, received = "received", expected = "expected", options = {}) => {
      const {
        comment = "",
        expectedColor = EXPECTED_COLOR7,
        isDirectExpectCall = false,
        // seems redundant with received === ''
        isNot = false,
        promise = "",
        receivedColor = RECEIVED_COLOR8,
        secondArgument = "",
        secondArgumentColor = EXPECTED_COLOR7
      } = options;
      let hint = "";
      let dimString = "expect";
      if (!isDirectExpectCall && received !== "") {
        hint += DIM_COLOR3(`${dimString}(`) + receivedColor(received);
        dimString = ")";
      }
      if (promise !== "") {
        hint += DIM_COLOR3(`${dimString}.`) + promise;
        dimString = "";
      }
      if (isNot) {
        hint += `${DIM_COLOR3(`${dimString}.`)}not`;
        dimString = "";
      }
      if (matcherName.includes(".")) {
        dimString += matcherName;
      } else {
        hint += DIM_COLOR3(`${dimString}.`) + matcherName;
        dimString = "";
      }
      if (expected === "") {
        dimString += "()";
      } else {
        hint += DIM_COLOR3(`${dimString}(`) + expectedColor(expected);
        if (secondArgument) {
          hint += DIM_COLOR3(", ") + secondArgumentColor(secondArgument);
        }
        dimString = ")";
      }
      if (comment !== "") {
        dimString += ` // ${comment}`;
      }
      if (dimString !== "") {
        hint += DIM_COLOR3(dimString);
      }
      return hint;
    };
    exports2.matcherHint = matcherHint6;
  }
});

// packages/playwright/bundles/expect/node_modules/@jest/expect-utils/build/jasmineUtils.js
var require_jasmineUtils = __commonJS({
  "packages/playwright/bundles/expect/node_modules/@jest/expect-utils/build/jasmineUtils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.equals = void 0;
    exports2.isA = isA2;
    var equals5 = (a, b, customTesters, strictCheck) => {
      customTesters = customTesters || [];
      return eq(a, b, [], [], customTesters, strictCheck);
    };
    exports2.equals = equals5;
    function isAsymmetric(obj) {
      return !!obj && isA2("Function", obj.asymmetricMatch);
    }
    function asymmetricMatch(a, b) {
      const asymmetricA = isAsymmetric(a);
      const asymmetricB = isAsymmetric(b);
      if (asymmetricA && asymmetricB) {
        return void 0;
      }
      if (asymmetricA) {
        return a.asymmetricMatch(b);
      }
      if (asymmetricB) {
        return b.asymmetricMatch(a);
      }
    }
    function eq(a, b, aStack, bStack, customTesters, strictCheck) {
      let result = true;
      const asymmetricResult = asymmetricMatch(a, b);
      if (asymmetricResult !== void 0) {
        return asymmetricResult;
      }
      const testerContext = {
        equals: equals5
      };
      for (let i = 0; i < customTesters.length; i++) {
        const customTesterResult = customTesters[i].call(
          testerContext,
          a,
          b,
          customTesters
        );
        if (customTesterResult !== void 0) {
          return customTesterResult;
        }
      }
      if (a instanceof Error && b instanceof Error) {
        return a.message == b.message;
      }
      if (Object.is(a, b)) {
        return true;
      }
      if (a === null || b === null) {
        return a === b;
      }
      const className = Object.prototype.toString.call(a);
      if (className != Object.prototype.toString.call(b)) {
        return false;
      }
      switch (className) {
        case "[object Boolean]":
        case "[object String]":
        case "[object Number]":
          if (typeof a !== typeof b) {
            return false;
          } else if (typeof a !== "object" && typeof b !== "object") {
            return Object.is(a, b);
          } else {
            return Object.is(a.valueOf(), b.valueOf());
          }
        case "[object Date]":
          return +a == +b;
        // RegExps are compared by their source patterns and flags.
        case "[object RegExp]":
          return a.source === b.source && a.flags === b.flags;
      }
      if (typeof a !== "object" || typeof b !== "object") {
        return false;
      }
      if (isDomNode(a) && isDomNode(b)) {
        return a.isEqualNode(b);
      }
      let length = aStack.length;
      while (length--) {
        if (aStack[length] === a) {
          return bStack[length] === b;
        } else if (bStack[length] === b) {
          return false;
        }
      }
      aStack.push(a);
      bStack.push(b);
      if (strictCheck && className == "[object Array]" && a.length !== b.length) {
        return false;
      }
      const aKeys = keys(a, hasKey);
      let key;
      const bKeys = keys(b, hasKey);
      if (!strictCheck) {
        for (let index = 0; index !== bKeys.length; ++index) {
          key = bKeys[index];
          if ((isAsymmetric(b[key]) || b[key] === void 0) && !hasKey(a, key)) {
            aKeys.push(key);
          }
        }
        for (let index = 0; index !== aKeys.length; ++index) {
          key = aKeys[index];
          if ((isAsymmetric(a[key]) || a[key] === void 0) && !hasKey(b, key)) {
            bKeys.push(key);
          }
        }
      }
      let size = aKeys.length;
      if (bKeys.length !== size) {
        return false;
      }
      while (size--) {
        key = aKeys[size];
        if (strictCheck)
          result = hasKey(b, key) && eq(a[key], b[key], aStack, bStack, customTesters, strictCheck);
        else
          result = (hasKey(b, key) || isAsymmetric(a[key]) || a[key] === void 0) && eq(a[key], b[key], aStack, bStack, customTesters, strictCheck);
        if (!result) {
          return false;
        }
      }
      aStack.pop();
      bStack.pop();
      return result;
    }
    function keys(obj, hasKey2) {
      const keys2 = [];
      for (const key in obj) {
        if (hasKey2(obj, key)) {
          keys2.push(key);
        }
      }
      return keys2.concat(
        Object.getOwnPropertySymbols(obj).filter(
          (symbol) => Object.getOwnPropertyDescriptor(obj, symbol).enumerable
        )
      );
    }
    function hasKey(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }
    function isA2(typeName, value) {
      return Object.prototype.toString.apply(value) === `[object ${typeName}]`;
    }
    function isDomNode(obj) {
      return obj !== null && typeof obj === "object" && typeof obj.nodeType === "number" && typeof obj.nodeName === "string" && typeof obj.isEqualNode === "function";
    }
  }
});

// packages/playwright/bundles/expect/node_modules/@jest/expect-utils/build/immutableUtils.js
var require_immutableUtils = __commonJS({
  "packages/playwright/bundles/expect/node_modules/@jest/expect-utils/build/immutableUtils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.isImmutableList = isImmutableList;
    exports2.isImmutableOrderedKeyed = isImmutableOrderedKeyed;
    exports2.isImmutableOrderedSet = isImmutableOrderedSet;
    exports2.isImmutableRecord = isImmutableRecord;
    exports2.isImmutableUnorderedKeyed = isImmutableUnorderedKeyed;
    exports2.isImmutableUnorderedSet = isImmutableUnorderedSet;
    var IS_KEYED_SENTINEL = "@@__IMMUTABLE_KEYED__@@";
    var IS_SET_SENTINEL = "@@__IMMUTABLE_SET__@@";
    var IS_LIST_SENTINEL = "@@__IMMUTABLE_LIST__@@";
    var IS_ORDERED_SENTINEL = "@@__IMMUTABLE_ORDERED__@@";
    var IS_RECORD_SYMBOL = "@@__IMMUTABLE_RECORD__@@";
    function isObjectLiteral(source) {
      return source != null && typeof source === "object" && !Array.isArray(source);
    }
    function isImmutableUnorderedKeyed(source) {
      return Boolean(
        source && isObjectLiteral(source) && source[IS_KEYED_SENTINEL] && !source[IS_ORDERED_SENTINEL]
      );
    }
    function isImmutableUnorderedSet(source) {
      return Boolean(
        source && isObjectLiteral(source) && source[IS_SET_SENTINEL] && !source[IS_ORDERED_SENTINEL]
      );
    }
    function isImmutableList(source) {
      return Boolean(source && isObjectLiteral(source) && source[IS_LIST_SENTINEL]);
    }
    function isImmutableOrderedKeyed(source) {
      return Boolean(
        source && isObjectLiteral(source) && source[IS_KEYED_SENTINEL] && source[IS_ORDERED_SENTINEL]
      );
    }
    function isImmutableOrderedSet(source) {
      return Boolean(
        source && isObjectLiteral(source) && source[IS_SET_SENTINEL] && source[IS_ORDERED_SENTINEL]
      );
    }
    function isImmutableRecord(source) {
      return Boolean(source && isObjectLiteral(source) && source[IS_RECORD_SYMBOL]);
    }
  }
});

// packages/playwright/bundles/expect/node_modules/@jest/expect-utils/build/utils.js
var require_utils = __commonJS({
  "packages/playwright/bundles/expect/node_modules/@jest/expect-utils/build/utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.arrayBufferEquality = void 0;
    exports2.emptyObject = emptyObject;
    exports2.typeEquality = exports2.subsetEquality = exports2.sparseArrayEquality = exports2.pathAsArray = exports2.partition = exports2.iterableEquality = exports2.isOneline = exports2.isError = exports2.getPath = exports2.getObjectSubset = exports2.getObjectKeys = void 0;
    var _jestGetType = require_build();
    var _immutableUtils = require_immutableUtils();
    var _jasmineUtils = require_jasmineUtils();
    var Symbol2 = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
    var hasPropertyInObject = (object, key) => {
      const shouldTerminate = !object || typeof object !== "object" || object === Object.prototype;
      if (shouldTerminate) {
        return false;
      }
      return Object.prototype.hasOwnProperty.call(object, key) || hasPropertyInObject(Object.getPrototypeOf(object), key);
    };
    var getObjectKeys2 = (object) => [
      ...Object.keys(object),
      ...Object.getOwnPropertySymbols(object)
    ];
    exports2.getObjectKeys = getObjectKeys2;
    var getPath2 = (object, propertyPath) => {
      if (!Array.isArray(propertyPath)) {
        propertyPath = pathAsArray2(propertyPath);
      }
      if (propertyPath.length) {
        const lastProp = propertyPath.length === 1;
        const prop = propertyPath[0];
        const newObject = object[prop];
        if (!lastProp && (newObject === null || newObject === void 0)) {
          return {
            hasEndProp: false,
            lastTraversedObject: object,
            traversedPath: []
          };
        }
        const result = getPath2(newObject, propertyPath.slice(1));
        if (result.lastTraversedObject === null) {
          result.lastTraversedObject = object;
        }
        result.traversedPath.unshift(prop);
        if (lastProp) {
          result.endPropIsDefined = !(0, _jestGetType.isPrimitive)(object) && prop in object;
          result.hasEndProp = newObject !== void 0 || result.endPropIsDefined;
          if (!result.hasEndProp) {
            result.traversedPath.shift();
          }
        }
        return result;
      }
      return {
        lastTraversedObject: null,
        traversedPath: [],
        value: object
      };
    };
    exports2.getPath = getPath2;
    var getObjectSubset2 = (object, subset, customTesters = [], seenReferences = /* @__PURE__ */ new WeakMap()) => {
      if (Array.isArray(object)) {
        if (Array.isArray(subset) && subset.length === object.length) {
          return subset.map(
            (sub, i) => getObjectSubset2(object[i], sub, customTesters)
          );
        }
      } else if (object instanceof Date) {
        return object;
      } else if (isObject(object) && isObject(subset)) {
        if ((0, _jasmineUtils.equals)(object, subset, [
          ...customTesters,
          iterableEquality5,
          subsetEquality4
        ])) {
          return subset;
        }
        const trimmed = {};
        seenReferences.set(object, trimmed);
        getObjectKeys2(object).filter((key) => hasPropertyInObject(subset, key)).forEach((key) => {
          trimmed[key] = seenReferences.has(object[key]) ? seenReferences.get(object[key]) : getObjectSubset2(
            object[key],
            subset[key],
            customTesters,
            seenReferences
          );
        });
        if (getObjectKeys2(trimmed).length > 0) {
          return trimmed;
        }
      }
      return object;
    };
    exports2.getObjectSubset = getObjectSubset2;
    var IteratorSymbol = Symbol2.iterator;
    var hasIterator = (object) => !!(object != null && object[IteratorSymbol]);
    var iterableEquality5 = (a, b, customTesters = [], aStack = [], bStack = []) => {
      if (typeof a !== "object" || typeof b !== "object" || Array.isArray(a) || Array.isArray(b) || !hasIterator(a) || !hasIterator(b)) {
        return void 0;
      }
      if (a.constructor !== b.constructor) {
        return false;
      }
      let length = aStack.length;
      while (length--) {
        if (aStack[length] === a) {
          return bStack[length] === b;
        }
      }
      aStack.push(a);
      bStack.push(b);
      const iterableEqualityWithStack = (a2, b2) => iterableEquality5(
        a2,
        b2,
        [...filteredCustomTesters],
        [...aStack],
        [...bStack]
      );
      const filteredCustomTesters = [
        ...customTesters.filter((t) => t !== iterableEquality5),
        iterableEqualityWithStack
      ];
      if (a.size !== void 0) {
        if (a.size !== b.size) {
          return false;
        } else if ((0, _jasmineUtils.isA)("Set", a) || (0, _immutableUtils.isImmutableUnorderedSet)(a)) {
          let allFound = true;
          for (const aValue of a) {
            if (!b.has(aValue)) {
              let has = false;
              for (const bValue of b) {
                const isEqual = (0, _jasmineUtils.equals)(
                  aValue,
                  bValue,
                  filteredCustomTesters
                );
                if (isEqual === true) {
                  has = true;
                }
              }
              if (has === false) {
                allFound = false;
                break;
              }
            }
          }
          aStack.pop();
          bStack.pop();
          return allFound;
        } else if ((0, _jasmineUtils.isA)("Map", a) || (0, _immutableUtils.isImmutableUnorderedKeyed)(a)) {
          let allFound = true;
          for (const aEntry of a) {
            if (!b.has(aEntry[0]) || !(0, _jasmineUtils.equals)(
              aEntry[1],
              b.get(aEntry[0]),
              filteredCustomTesters
            )) {
              let has = false;
              for (const bEntry of b) {
                const matchedKey = (0, _jasmineUtils.equals)(
                  aEntry[0],
                  bEntry[0],
                  filteredCustomTesters
                );
                let matchedValue = false;
                if (matchedKey === true) {
                  matchedValue = (0, _jasmineUtils.equals)(
                    aEntry[1],
                    bEntry[1],
                    filteredCustomTesters
                  );
                }
                if (matchedValue === true) {
                  has = true;
                }
              }
              if (has === false) {
                allFound = false;
                break;
              }
            }
          }
          aStack.pop();
          bStack.pop();
          return allFound;
        }
      }
      const bIterator = b[IteratorSymbol]();
      for (const aValue of a) {
        const nextB = bIterator.next();
        if (nextB.done || !(0, _jasmineUtils.equals)(aValue, nextB.value, filteredCustomTesters)) {
          return false;
        }
      }
      if (!bIterator.next().done) {
        return false;
      }
      if (!(0, _immutableUtils.isImmutableList)(a) && !(0, _immutableUtils.isImmutableOrderedKeyed)(a) && !(0, _immutableUtils.isImmutableOrderedSet)(a) && !(0, _immutableUtils.isImmutableRecord)(a)) {
        const aEntries = Object.entries(a);
        const bEntries = Object.entries(b);
        if (!(0, _jasmineUtils.equals)(aEntries, bEntries)) {
          return false;
        }
      }
      aStack.pop();
      bStack.pop();
      return true;
    };
    exports2.iterableEquality = iterableEquality5;
    var isObject = (a) => a !== null && typeof a === "object";
    var isObjectWithKeys = (a) => isObject(a) && !(a instanceof Error) && !(a instanceof Array) && !(a instanceof Date);
    var subsetEquality4 = (object, subset, customTesters = []) => {
      const filteredCustomTesters = customTesters.filter((t) => t !== subsetEquality4);
      const subsetEqualityWithContext = (seenReferences = /* @__PURE__ */ new WeakMap()) => (object2, subset2) => {
        if (!isObjectWithKeys(subset2)) {
          return void 0;
        }
        return getObjectKeys2(subset2).every((key) => {
          if (isObjectWithKeys(subset2[key])) {
            if (seenReferences.has(subset2[key])) {
              return (0, _jasmineUtils.equals)(
                object2[key],
                subset2[key],
                filteredCustomTesters
              );
            }
            seenReferences.set(subset2[key], true);
          }
          const result = object2 != null && hasPropertyInObject(object2, key) && (0, _jasmineUtils.equals)(object2[key], subset2[key], [
            ...filteredCustomTesters,
            subsetEqualityWithContext(seenReferences)
          ]);
          seenReferences.delete(subset2[key]);
          return result;
        });
      };
      return subsetEqualityWithContext()(object, subset);
    };
    exports2.subsetEquality = subsetEquality4;
    var typeEquality2 = (a, b) => {
      if (a == null || b == null || a.constructor === b.constructor || // Since Jest globals are different from Node globals,
      // constructors are different even between arrays when comparing properties of mock objects.
      // Both of them should be able to compare correctly when they are array-to-array.
      // https://github.com/jestjs/jest/issues/2549
      Array.isArray(a) && Array.isArray(b)) {
        return void 0;
      }
      return false;
    };
    exports2.typeEquality = typeEquality2;
    var arrayBufferEquality2 = (a, b) => {
      if (!(a instanceof ArrayBuffer) || !(b instanceof ArrayBuffer)) {
        return void 0;
      }
      const dataViewA = new DataView(a);
      const dataViewB = new DataView(b);
      if (dataViewA.byteLength !== dataViewB.byteLength) {
        return false;
      }
      for (let i = 0; i < dataViewA.byteLength; i++) {
        if (dataViewA.getUint8(i) !== dataViewB.getUint8(i)) {
          return false;
        }
      }
      return true;
    };
    exports2.arrayBufferEquality = arrayBufferEquality2;
    var sparseArrayEquality2 = (a, b, customTesters = []) => {
      if (!Array.isArray(a) || !Array.isArray(b)) {
        return void 0;
      }
      const aKeys = Object.keys(a);
      const bKeys = Object.keys(b);
      return (0, _jasmineUtils.equals)(
        a,
        b,
        customTesters.filter((t) => t !== sparseArrayEquality2),
        true
      ) && (0, _jasmineUtils.equals)(aKeys, bKeys);
    };
    exports2.sparseArrayEquality = sparseArrayEquality2;
    var partition = (items, predicate) => {
      const result = [[], []];
      items.forEach((item) => result[predicate(item) ? 0 : 1].push(item));
      return result;
    };
    exports2.partition = partition;
    var pathAsArray2 = (propertyPath) => {
      const properties = [];
      if (propertyPath === "") {
        properties.push("");
        return properties;
      }
      const pattern = RegExp("[^.[\\]]+|(?=(?:\\.)(?:\\.|$))", "g");
      if (propertyPath[0] === ".") {
        properties.push("");
      }
      propertyPath.replace(pattern, (match) => {
        properties.push(match);
        return match;
      });
      return properties;
    };
    exports2.pathAsArray = pathAsArray2;
    var isError2 = (value) => {
      switch (Object.prototype.toString.call(value)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
          return true;
        default:
          return value instanceof Error;
      }
    };
    exports2.isError = isError2;
    function emptyObject(obj) {
      return obj && typeof obj === "object" ? !Object.keys(obj).length : false;
    }
    var MULTILINE_REGEXP = /[\r\n]/;
    var isOneline = (expected, received) => typeof expected === "string" && typeof received === "string" && (!MULTILINE_REGEXP.test(expected) || !MULTILINE_REGEXP.test(received));
    exports2.isOneline = isOneline;
  }
});

// packages/playwright/bundles/expect/node_modules/@jest/expect-utils/build/index.js
var require_build6 = __commonJS({
  "packages/playwright/bundles/expect/node_modules/@jest/expect-utils/build/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    var _exportNames = {
      equals: true,
      isA: true
    };
    Object.defineProperty(exports2, "equals", {
      enumerable: true,
      get: function() {
        return _jasmineUtils.equals;
      }
    });
    Object.defineProperty(exports2, "isA", {
      enumerable: true,
      get: function() {
        return _jasmineUtils.isA;
      }
    });
    var _jasmineUtils = require_jasmineUtils();
    var _utils = require_utils();
    Object.keys(_utils).forEach(function(key) {
      if (key === "default" || key === "__esModule") return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
      if (key in exports2 && exports2[key] === _utils[key]) return;
      Object.defineProperty(exports2, key, {
        enumerable: true,
        get: function() {
          return _utils[key];
        }
      });
    });
  }
});

// packages/playwright/bundles/expect/node_modules/jest-util/build/clearLine.js
var require_clearLine = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-util/build/clearLine.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = clearLine;
    function clearLine(stream) {
      if (stream.isTTY) {
        stream.write("\x1B[999D\x1B[K");
      }
    }
  }
});

// packages/playwright/bundles/expect/node_modules/ci-info/vendors.json
var require_vendors = __commonJS({
  "packages/playwright/bundles/expect/node_modules/ci-info/vendors.json"(exports2, module2) {
    module2.exports = [
      {
        name: "Appcircle",
        constant: "APPCIRCLE",
        env: "AC_APPCIRCLE"
      },
      {
        name: "AppVeyor",
        constant: "APPVEYOR",
        env: "APPVEYOR",
        pr: "APPVEYOR_PULL_REQUEST_NUMBER"
      },
      {
        name: "AWS CodeBuild",
        constant: "CODEBUILD",
        env: "CODEBUILD_BUILD_ARN"
      },
      {
        name: "Azure Pipelines",
        constant: "AZURE_PIPELINES",
        env: "TF_BUILD",
        pr: {
          BUILD_REASON: "PullRequest"
        }
      },
      {
        name: "Bamboo",
        constant: "BAMBOO",
        env: "bamboo_planKey"
      },
      {
        name: "Bitbucket Pipelines",
        constant: "BITBUCKET",
        env: "BITBUCKET_COMMIT",
        pr: "BITBUCKET_PR_ID"
      },
      {
        name: "Bitrise",
        constant: "BITRISE",
        env: "BITRISE_IO",
        pr: "BITRISE_PULL_REQUEST"
      },
      {
        name: "Buddy",
        constant: "BUDDY",
        env: "BUDDY_WORKSPACE_ID",
        pr: "BUDDY_EXECUTION_PULL_REQUEST_ID"
      },
      {
        name: "Buildkite",
        constant: "BUILDKITE",
        env: "BUILDKITE",
        pr: {
          env: "BUILDKITE_PULL_REQUEST",
          ne: "false"
        }
      },
      {
        name: "CircleCI",
        constant: "CIRCLE",
        env: "CIRCLECI",
        pr: "CIRCLE_PULL_REQUEST"
      },
      {
        name: "Cirrus CI",
        constant: "CIRRUS",
        env: "CIRRUS_CI",
        pr: "CIRRUS_PR"
      },
      {
        name: "Codefresh",
        constant: "CODEFRESH",
        env: "CF_BUILD_ID",
        pr: {
          any: [
            "CF_PULL_REQUEST_NUMBER",
            "CF_PULL_REQUEST_ID"
          ]
        }
      },
      {
        name: "Codemagic",
        constant: "CODEMAGIC",
        env: "CM_BUILD_ID",
        pr: "CM_PULL_REQUEST"
      },
      {
        name: "Codeship",
        constant: "CODESHIP",
        env: {
          CI_NAME: "codeship"
        }
      },
      {
        name: "Drone",
        constant: "DRONE",
        env: "DRONE",
        pr: {
          DRONE_BUILD_EVENT: "pull_request"
        }
      },
      {
        name: "dsari",
        constant: "DSARI",
        env: "DSARI"
      },
      {
        name: "Expo Application Services",
        constant: "EAS",
        env: "EAS_BUILD"
      },
      {
        name: "Gerrit",
        constant: "GERRIT",
        env: "GERRIT_PROJECT"
      },
      {
        name: "GitHub Actions",
        constant: "GITHUB_ACTIONS",
        env: "GITHUB_ACTIONS",
        pr: {
          GITHUB_EVENT_NAME: "pull_request"
        }
      },
      {
        name: "GitLab CI",
        constant: "GITLAB",
        env: "GITLAB_CI",
        pr: "CI_MERGE_REQUEST_ID"
      },
      {
        name: "GoCD",
        constant: "GOCD",
        env: "GO_PIPELINE_LABEL"
      },
      {
        name: "Google Cloud Build",
        constant: "GOOGLE_CLOUD_BUILD",
        env: "BUILDER_OUTPUT"
      },
      {
        name: "Harness CI",
        constant: "HARNESS",
        env: "HARNESS_BUILD_ID"
      },
      {
        name: "Heroku",
        constant: "HEROKU",
        env: {
          env: "NODE",
          includes: "/app/.heroku/node/bin/node"
        }
      },
      {
        name: "Hudson",
        constant: "HUDSON",
        env: "HUDSON_URL"
      },
      {
        name: "Jenkins",
        constant: "JENKINS",
        env: [
          "JENKINS_URL",
          "BUILD_ID"
        ],
        pr: {
          any: [
            "ghprbPullId",
            "CHANGE_ID"
          ]
        }
      },
      {
        name: "LayerCI",
        constant: "LAYERCI",
        env: "LAYERCI",
        pr: "LAYERCI_PULL_REQUEST"
      },
      {
        name: "Magnum CI",
        constant: "MAGNUM",
        env: "MAGNUM"
      },
      {
        name: "Netlify CI",
        constant: "NETLIFY",
        env: "NETLIFY",
        pr: {
          env: "PULL_REQUEST",
          ne: "false"
        }
      },
      {
        name: "Nevercode",
        constant: "NEVERCODE",
        env: "NEVERCODE",
        pr: {
          env: "NEVERCODE_PULL_REQUEST",
          ne: "false"
        }
      },
      {
        name: "ReleaseHub",
        constant: "RELEASEHUB",
        env: "RELEASE_BUILD_ID"
      },
      {
        name: "Render",
        constant: "RENDER",
        env: "RENDER",
        pr: {
          IS_PULL_REQUEST: "true"
        }
      },
      {
        name: "Sail CI",
        constant: "SAIL",
        env: "SAILCI",
        pr: "SAIL_PULL_REQUEST_NUMBER"
      },
      {
        name: "Screwdriver",
        constant: "SCREWDRIVER",
        env: "SCREWDRIVER",
        pr: {
          env: "SD_PULL_REQUEST",
          ne: "false"
        }
      },
      {
        name: "Semaphore",
        constant: "SEMAPHORE",
        env: "SEMAPHORE",
        pr: "PULL_REQUEST_NUMBER"
      },
      {
        name: "Shippable",
        constant: "SHIPPABLE",
        env: "SHIPPABLE",
        pr: {
          IS_PULL_REQUEST: "true"
        }
      },
      {
        name: "Solano CI",
        constant: "SOLANO",
        env: "TDDIUM",
        pr: "TDDIUM_PR_ID"
      },
      {
        name: "Sourcehut",
        constant: "SOURCEHUT",
        env: {
          CI_NAME: "sourcehut"
        }
      },
      {
        name: "Strider CD",
        constant: "STRIDER",
        env: "STRIDER"
      },
      {
        name: "TaskCluster",
        constant: "TASKCLUSTER",
        env: [
          "TASK_ID",
          "RUN_ID"
        ]
      },
      {
        name: "TeamCity",
        constant: "TEAMCITY",
        env: "TEAMCITY_VERSION"
      },
      {
        name: "Travis CI",
        constant: "TRAVIS",
        env: "TRAVIS",
        pr: {
          env: "TRAVIS_PULL_REQUEST",
          ne: "false"
        }
      },
      {
        name: "Vercel",
        constant: "VERCEL",
        env: {
          any: [
            "NOW_BUILDER",
            "VERCEL"
          ]
        },
        pr: "VERCEL_GIT_PULL_REQUEST_ID"
      },
      {
        name: "Visual Studio App Center",
        constant: "APPCENTER",
        env: "APPCENTER_BUILD_ID"
      },
      {
        name: "Woodpecker",
        constant: "WOODPECKER",
        env: {
          CI: "woodpecker"
        },
        pr: {
          CI_BUILD_EVENT: "pull_request"
        }
      },
      {
        name: "Xcode Cloud",
        constant: "XCODE_CLOUD",
        env: "CI_XCODE_PROJECT",
        pr: "CI_PULL_REQUEST_NUMBER"
      },
      {
        name: "Xcode Server",
        constant: "XCODE_SERVER",
        env: "XCS"
      }
    ];
  }
});

// packages/playwright/bundles/expect/node_modules/ci-info/index.js
var require_ci_info = __commonJS({
  "packages/playwright/bundles/expect/node_modules/ci-info/index.js"(exports2) {
    "use strict";
    var vendors = require_vendors();
    var env = process.env;
    Object.defineProperty(exports2, "_vendors", {
      value: vendors.map(function(v) {
        return v.constant;
      })
    });
    exports2.name = null;
    exports2.isPR = null;
    vendors.forEach(function(vendor) {
      const envs = Array.isArray(vendor.env) ? vendor.env : [vendor.env];
      const isCI = envs.every(function(obj) {
        return checkEnv(obj);
      });
      exports2[vendor.constant] = isCI;
      if (!isCI) {
        return;
      }
      exports2.name = vendor.name;
      switch (typeof vendor.pr) {
        case "string":
          exports2.isPR = !!env[vendor.pr];
          break;
        case "object":
          if ("env" in vendor.pr) {
            exports2.isPR = vendor.pr.env in env && env[vendor.pr.env] !== vendor.pr.ne;
          } else if ("any" in vendor.pr) {
            exports2.isPR = vendor.pr.any.some(function(key) {
              return !!env[key];
            });
          } else {
            exports2.isPR = checkEnv(vendor.pr);
          }
          break;
        default:
          exports2.isPR = null;
      }
    });
    exports2.isCI = !!(env.CI !== "false" && // Bypass all checks if CI env is explicitly set to 'false'
    (env.BUILD_ID || // Jenkins, Cloudbees
    env.BUILD_NUMBER || // Jenkins, TeamCity
    env.CI || // Travis CI, CircleCI, Cirrus CI, Gitlab CI, Appveyor, CodeShip, dsari
    env.CI_APP_ID || // Appflow
    env.CI_BUILD_ID || // Appflow
    env.CI_BUILD_NUMBER || // Appflow
    env.CI_NAME || // Codeship and others
    env.CONTINUOUS_INTEGRATION || // Travis CI, Cirrus CI
    env.RUN_ID || // TaskCluster, dsari
    exports2.name || false));
    function checkEnv(obj) {
      if (typeof obj === "string") return !!env[obj];
      if ("env" in obj) {
        return env[obj.env] && env[obj.env].includes(obj.includes);
      }
      if ("any" in obj) {
        return obj.any.some(function(k) {
          return !!env[k];
        });
      }
      return Object.keys(obj).every(function(k) {
        return env[k] === obj[k];
      });
    }
  }
});

// packages/playwright/bundles/expect/node_modules/jest-util/build/isInteractive.js
var require_isInteractive = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-util/build/isInteractive.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = void 0;
    function _ciInfo() {
      const data = require_ci_info();
      _ciInfo = function() {
        return data;
      };
      return data;
    }
    var _default = !!process.stdout.isTTY && process.env.TERM !== "dumb" && !_ciInfo().isCI;
    exports2.default = _default;
  }
});

// packages/playwright/bundles/expect/node_modules/jest-util/build/preRunMessage.js
var require_preRunMessage = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-util/build/preRunMessage.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.print = print;
    exports2.remove = remove;
    function _chalk() {
      const data = _interopRequireDefault(require_source());
      _chalk = function() {
        return data;
      };
      return data;
    }
    var _clearLine = _interopRequireDefault(require_clearLine());
    var _isInteractive = _interopRequireDefault(require_isInteractive());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function print(stream) {
      if (_isInteractive.default) {
        stream.write(
          _chalk().default.bold.dim("Determining test suites to run...")
        );
      }
    }
    function remove(stream) {
      if (_isInteractive.default) {
        (0, _clearLine.default)(stream);
      }
    }
  }
});

// packages/playwright/bundles/expect/node_modules/jest-util/build/specialChars.js
var require_specialChars = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-util/build/specialChars.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.ICONS = exports2.CLEAR = exports2.ARROW = void 0;
    var isWindows = process.platform === "win32";
    var ARROW = " \u203A ";
    exports2.ARROW = ARROW;
    var ICONS = {
      failed: isWindows ? "\xD7" : "\u2715",
      pending: "\u25CB",
      success: isWindows ? "\u221A" : "\u2713",
      todo: "\u270E"
    };
    exports2.ICONS = ICONS;
    var CLEAR = isWindows ? "\x1B[2J\x1B[0f" : "\x1B[2J\x1B[3J\x1B[H";
    exports2.CLEAR = CLEAR;
  }
});

// packages/playwright/bundles/expect/node_modules/graceful-fs/polyfills.js
var require_polyfills = __commonJS({
  "packages/playwright/bundles/expect/node_modules/graceful-fs/polyfills.js"(exports2, module2) {
    var constants = require("constants");
    var origCwd = process.cwd;
    var cwd = null;
    var platform = process.env.GRACEFUL_FS_PLATFORM || process.platform;
    process.cwd = function() {
      if (!cwd)
        cwd = origCwd.call(process);
      return cwd;
    };
    try {
      process.cwd();
    } catch (er) {
    }
    if (typeof process.chdir === "function") {
      chdir = process.chdir;
      process.chdir = function(d) {
        cwd = null;
        chdir.call(process, d);
      };
      if (Object.setPrototypeOf) Object.setPrototypeOf(process.chdir, chdir);
    }
    var chdir;
    module2.exports = patch;
    function patch(fs) {
      if (constants.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
        patchLchmod(fs);
      }
      if (!fs.lutimes) {
        patchLutimes(fs);
      }
      fs.chown = chownFix(fs.chown);
      fs.fchown = chownFix(fs.fchown);
      fs.lchown = chownFix(fs.lchown);
      fs.chmod = chmodFix(fs.chmod);
      fs.fchmod = chmodFix(fs.fchmod);
      fs.lchmod = chmodFix(fs.lchmod);
      fs.chownSync = chownFixSync(fs.chownSync);
      fs.fchownSync = chownFixSync(fs.fchownSync);
      fs.lchownSync = chownFixSync(fs.lchownSync);
      fs.chmodSync = chmodFixSync(fs.chmodSync);
      fs.fchmodSync = chmodFixSync(fs.fchmodSync);
      fs.lchmodSync = chmodFixSync(fs.lchmodSync);
      fs.stat = statFix(fs.stat);
      fs.fstat = statFix(fs.fstat);
      fs.lstat = statFix(fs.lstat);
      fs.statSync = statFixSync(fs.statSync);
      fs.fstatSync = statFixSync(fs.fstatSync);
      fs.lstatSync = statFixSync(fs.lstatSync);
      if (fs.chmod && !fs.lchmod) {
        fs.lchmod = function(path, mode, cb) {
          if (cb) process.nextTick(cb);
        };
        fs.lchmodSync = function() {
        };
      }
      if (fs.chown && !fs.lchown) {
        fs.lchown = function(path, uid, gid, cb) {
          if (cb) process.nextTick(cb);
        };
        fs.lchownSync = function() {
        };
      }
      if (platform === "win32") {
        fs.rename = typeof fs.rename !== "function" ? fs.rename : function(fs$rename) {
          function rename(from, to, cb) {
            var start = Date.now();
            var backoff = 0;
            fs$rename(from, to, function CB(er) {
              if (er && (er.code === "EACCES" || er.code === "EPERM" || er.code === "EBUSY") && Date.now() - start < 6e4) {
                setTimeout(function() {
                  fs.stat(to, function(stater, st) {
                    if (stater && stater.code === "ENOENT")
                      fs$rename(from, to, CB);
                    else
                      cb(er);
                  });
                }, backoff);
                if (backoff < 100)
                  backoff += 10;
                return;
              }
              if (cb) cb(er);
            });
          }
          if (Object.setPrototypeOf) Object.setPrototypeOf(rename, fs$rename);
          return rename;
        }(fs.rename);
      }
      fs.read = typeof fs.read !== "function" ? fs.read : function(fs$read) {
        function read(fd, buffer, offset, length, position, callback_) {
          var callback;
          if (callback_ && typeof callback_ === "function") {
            var eagCounter = 0;
            callback = function(er, _, __) {
              if (er && er.code === "EAGAIN" && eagCounter < 10) {
                eagCounter++;
                return fs$read.call(fs, fd, buffer, offset, length, position, callback);
              }
              callback_.apply(this, arguments);
            };
          }
          return fs$read.call(fs, fd, buffer, offset, length, position, callback);
        }
        if (Object.setPrototypeOf) Object.setPrototypeOf(read, fs$read);
        return read;
      }(fs.read);
      fs.readSync = typeof fs.readSync !== "function" ? fs.readSync : /* @__PURE__ */ function(fs$readSync) {
        return function(fd, buffer, offset, length, position) {
          var eagCounter = 0;
          while (true) {
            try {
              return fs$readSync.call(fs, fd, buffer, offset, length, position);
            } catch (er) {
              if (er.code === "EAGAIN" && eagCounter < 10) {
                eagCounter++;
                continue;
              }
              throw er;
            }
          }
        };
      }(fs.readSync);
      function patchLchmod(fs2) {
        fs2.lchmod = function(path, mode, callback) {
          fs2.open(
            path,
            constants.O_WRONLY | constants.O_SYMLINK,
            mode,
            function(err, fd) {
              if (err) {
                if (callback) callback(err);
                return;
              }
              fs2.fchmod(fd, mode, function(err2) {
                fs2.close(fd, function(err22) {
                  if (callback) callback(err2 || err22);
                });
              });
            }
          );
        };
        fs2.lchmodSync = function(path, mode) {
          var fd = fs2.openSync(path, constants.O_WRONLY | constants.O_SYMLINK, mode);
          var threw = true;
          var ret;
          try {
            ret = fs2.fchmodSync(fd, mode);
            threw = false;
          } finally {
            if (threw) {
              try {
                fs2.closeSync(fd);
              } catch (er) {
              }
            } else {
              fs2.closeSync(fd);
            }
          }
          return ret;
        };
      }
      function patchLutimes(fs2) {
        if (constants.hasOwnProperty("O_SYMLINK") && fs2.futimes) {
          fs2.lutimes = function(path, at, mt, cb) {
            fs2.open(path, constants.O_SYMLINK, function(er, fd) {
              if (er) {
                if (cb) cb(er);
                return;
              }
              fs2.futimes(fd, at, mt, function(er2) {
                fs2.close(fd, function(er22) {
                  if (cb) cb(er2 || er22);
                });
              });
            });
          };
          fs2.lutimesSync = function(path, at, mt) {
            var fd = fs2.openSync(path, constants.O_SYMLINK);
            var ret;
            var threw = true;
            try {
              ret = fs2.futimesSync(fd, at, mt);
              threw = false;
            } finally {
              if (threw) {
                try {
                  fs2.closeSync(fd);
                } catch (er) {
                }
              } else {
                fs2.closeSync(fd);
              }
            }
            return ret;
          };
        } else if (fs2.futimes) {
          fs2.lutimes = function(_a, _b, _c, cb) {
            if (cb) process.nextTick(cb);
          };
          fs2.lutimesSync = function() {
          };
        }
      }
      function chmodFix(orig) {
        if (!orig) return orig;
        return function(target, mode, cb) {
          return orig.call(fs, target, mode, function(er) {
            if (chownErOk(er)) er = null;
            if (cb) cb.apply(this, arguments);
          });
        };
      }
      function chmodFixSync(orig) {
        if (!orig) return orig;
        return function(target, mode) {
          try {
            return orig.call(fs, target, mode);
          } catch (er) {
            if (!chownErOk(er)) throw er;
          }
        };
      }
      function chownFix(orig) {
        if (!orig) return orig;
        return function(target, uid, gid, cb) {
          return orig.call(fs, target, uid, gid, function(er) {
            if (chownErOk(er)) er = null;
            if (cb) cb.apply(this, arguments);
          });
        };
      }
      function chownFixSync(orig) {
        if (!orig) return orig;
        return function(target, uid, gid) {
          try {
            return orig.call(fs, target, uid, gid);
          } catch (er) {
            if (!chownErOk(er)) throw er;
          }
        };
      }
      function statFix(orig) {
        if (!orig) return orig;
        return function(target, options, cb) {
          if (typeof options === "function") {
            cb = options;
            options = null;
          }
          function callback(er, stats) {
            if (stats) {
              if (stats.uid < 0) stats.uid += 4294967296;
              if (stats.gid < 0) stats.gid += 4294967296;
            }
            if (cb) cb.apply(this, arguments);
          }
          return options ? orig.call(fs, target, options, callback) : orig.call(fs, target, callback);
        };
      }
      function statFixSync(orig) {
        if (!orig) return orig;
        return function(target, options) {
          var stats = options ? orig.call(fs, target, options) : orig.call(fs, target);
          if (stats) {
            if (stats.uid < 0) stats.uid += 4294967296;
            if (stats.gid < 0) stats.gid += 4294967296;
          }
          return stats;
        };
      }
      function chownErOk(er) {
        if (!er)
          return true;
        if (er.code === "ENOSYS")
          return true;
        var nonroot = !process.getuid || process.getuid() !== 0;
        if (nonroot) {
          if (er.code === "EINVAL" || er.code === "EPERM")
            return true;
        }
        return false;
      }
    }
  }
});

// packages/playwright/bundles/expect/node_modules/graceful-fs/legacy-streams.js
var require_legacy_streams = __commonJS({
  "packages/playwright/bundles/expect/node_modules/graceful-fs/legacy-streams.js"(exports2, module2) {
    var Stream = require("stream").Stream;
    module2.exports = legacy;
    function legacy(fs) {
      return {
        ReadStream,
        WriteStream
      };
      function ReadStream(path, options) {
        if (!(this instanceof ReadStream)) return new ReadStream(path, options);
        Stream.call(this);
        var self = this;
        this.path = path;
        this.fd = null;
        this.readable = true;
        this.paused = false;
        this.flags = "r";
        this.mode = 438;
        this.bufferSize = 64 * 1024;
        options = options || {};
        var keys = Object.keys(options);
        for (var index = 0, length = keys.length; index < length; index++) {
          var key = keys[index];
          this[key] = options[key];
        }
        if (this.encoding) this.setEncoding(this.encoding);
        if (this.start !== void 0) {
          if ("number" !== typeof this.start) {
            throw TypeError("start must be a Number");
          }
          if (this.end === void 0) {
            this.end = Infinity;
          } else if ("number" !== typeof this.end) {
            throw TypeError("end must be a Number");
          }
          if (this.start > this.end) {
            throw new Error("start must be <= end");
          }
          this.pos = this.start;
        }
        if (this.fd !== null) {
          process.nextTick(function() {
            self._read();
          });
          return;
        }
        fs.open(this.path, this.flags, this.mode, function(err, fd) {
          if (err) {
            self.emit("error", err);
            self.readable = false;
            return;
          }
          self.fd = fd;
          self.emit("open", fd);
          self._read();
        });
      }
      function WriteStream(path, options) {
        if (!(this instanceof WriteStream)) return new WriteStream(path, options);
        Stream.call(this);
        this.path = path;
        this.fd = null;
        this.writable = true;
        this.flags = "w";
        this.encoding = "binary";
        this.mode = 438;
        this.bytesWritten = 0;
        options = options || {};
        var keys = Object.keys(options);
        for (var index = 0, length = keys.length; index < length; index++) {
          var key = keys[index];
          this[key] = options[key];
        }
        if (this.start !== void 0) {
          if ("number" !== typeof this.start) {
            throw TypeError("start must be a Number");
          }
          if (this.start < 0) {
            throw new Error("start must be >= zero");
          }
          this.pos = this.start;
        }
        this.busy = false;
        this._queue = [];
        if (this.fd === null) {
          this._open = fs.open;
          this._queue.push([this._open, this.path, this.flags, this.mode, void 0]);
          this.flush();
        }
      }
    }
  }
});

// packages/playwright/bundles/expect/node_modules/graceful-fs/clone.js
var require_clone = __commonJS({
  "packages/playwright/bundles/expect/node_modules/graceful-fs/clone.js"(exports2, module2) {
    "use strict";
    module2.exports = clone;
    var getPrototypeOf = Object.getPrototypeOf || function(obj) {
      return obj.__proto__;
    };
    function clone(obj) {
      if (obj === null || typeof obj !== "object")
        return obj;
      if (obj instanceof Object)
        var copy = { __proto__: getPrototypeOf(obj) };
      else
        var copy = /* @__PURE__ */ Object.create(null);
      Object.getOwnPropertyNames(obj).forEach(function(key) {
        Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key));
      });
      return copy;
    }
  }
});

// packages/playwright/bundles/expect/node_modules/graceful-fs/graceful-fs.js
var require_graceful_fs = __commonJS({
  "packages/playwright/bundles/expect/node_modules/graceful-fs/graceful-fs.js"(exports2, module2) {
    var fs = require("fs");
    var polyfills = require_polyfills();
    var legacy = require_legacy_streams();
    var clone = require_clone();
    var util = require("util");
    var gracefulQueue;
    var previousSymbol;
    if (typeof Symbol === "function" && typeof Symbol.for === "function") {
      gracefulQueue = Symbol.for("graceful-fs.queue");
      previousSymbol = Symbol.for("graceful-fs.previous");
    } else {
      gracefulQueue = "___graceful-fs.queue";
      previousSymbol = "___graceful-fs.previous";
    }
    function noop() {
    }
    function publishQueue(context, queue2) {
      Object.defineProperty(context, gracefulQueue, {
        get: function() {
          return queue2;
        }
      });
    }
    var debug = noop;
    if (util.debuglog)
      debug = util.debuglog("gfs4");
    else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || ""))
      debug = function() {
        var m = util.format.apply(util, arguments);
        m = "GFS4: " + m.split(/\n/).join("\nGFS4: ");
        console.error(m);
      };
    if (!fs[gracefulQueue]) {
      queue = global[gracefulQueue] || [];
      publishQueue(fs, queue);
      fs.close = function(fs$close) {
        function close(fd, cb) {
          return fs$close.call(fs, fd, function(err) {
            if (!err) {
              resetQueue();
            }
            if (typeof cb === "function")
              cb.apply(this, arguments);
          });
        }
        Object.defineProperty(close, previousSymbol, {
          value: fs$close
        });
        return close;
      }(fs.close);
      fs.closeSync = function(fs$closeSync) {
        function closeSync(fd) {
          fs$closeSync.apply(fs, arguments);
          resetQueue();
        }
        Object.defineProperty(closeSync, previousSymbol, {
          value: fs$closeSync
        });
        return closeSync;
      }(fs.closeSync);
      if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || "")) {
        process.on("exit", function() {
          debug(fs[gracefulQueue]);
          require("assert").equal(fs[gracefulQueue].length, 0);
        });
      }
    }
    var queue;
    if (!global[gracefulQueue]) {
      publishQueue(global, fs[gracefulQueue]);
    }
    module2.exports = patch(clone(fs));
    if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !fs.__patched) {
      module2.exports = patch(fs);
      fs.__patched = true;
    }
    function patch(fs2) {
      polyfills(fs2);
      fs2.gracefulify = patch;
      fs2.createReadStream = createReadStream;
      fs2.createWriteStream = createWriteStream;
      var fs$readFile = fs2.readFile;
      fs2.readFile = readFile;
      function readFile(path, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        return go$readFile(path, options, cb);
        function go$readFile(path2, options2, cb2, startTime) {
          return fs$readFile(path2, options2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$readFile, [path2, options2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      var fs$writeFile = fs2.writeFile;
      fs2.writeFile = writeFile;
      function writeFile(path, data, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        return go$writeFile(path, data, options, cb);
        function go$writeFile(path2, data2, options2, cb2, startTime) {
          return fs$writeFile(path2, data2, options2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$writeFile, [path2, data2, options2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      var fs$appendFile = fs2.appendFile;
      if (fs$appendFile)
        fs2.appendFile = appendFile;
      function appendFile(path, data, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        return go$appendFile(path, data, options, cb);
        function go$appendFile(path2, data2, options2, cb2, startTime) {
          return fs$appendFile(path2, data2, options2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$appendFile, [path2, data2, options2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      var fs$copyFile = fs2.copyFile;
      if (fs$copyFile)
        fs2.copyFile = copyFile;
      function copyFile(src, dest, flags, cb) {
        if (typeof flags === "function") {
          cb = flags;
          flags = 0;
        }
        return go$copyFile(src, dest, flags, cb);
        function go$copyFile(src2, dest2, flags2, cb2, startTime) {
          return fs$copyFile(src2, dest2, flags2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$copyFile, [src2, dest2, flags2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      var fs$readdir = fs2.readdir;
      fs2.readdir = readdir;
      var noReaddirOptionVersions = /^v[0-5]\./;
      function readdir(path, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        var go$readdir = noReaddirOptionVersions.test(process.version) ? function go$readdir2(path2, options2, cb2, startTime) {
          return fs$readdir(path2, fs$readdirCallback(
            path2,
            options2,
            cb2,
            startTime
          ));
        } : function go$readdir2(path2, options2, cb2, startTime) {
          return fs$readdir(path2, options2, fs$readdirCallback(
            path2,
            options2,
            cb2,
            startTime
          ));
        };
        return go$readdir(path, options, cb);
        function fs$readdirCallback(path2, options2, cb2, startTime) {
          return function(err, files) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([
                go$readdir,
                [path2, options2, cb2],
                err,
                startTime || Date.now(),
                Date.now()
              ]);
            else {
              if (files && files.sort)
                files.sort();
              if (typeof cb2 === "function")
                cb2.call(this, err, files);
            }
          };
        }
      }
      if (process.version.substr(0, 4) === "v0.8") {
        var legStreams = legacy(fs2);
        ReadStream = legStreams.ReadStream;
        WriteStream = legStreams.WriteStream;
      }
      var fs$ReadStream = fs2.ReadStream;
      if (fs$ReadStream) {
        ReadStream.prototype = Object.create(fs$ReadStream.prototype);
        ReadStream.prototype.open = ReadStream$open;
      }
      var fs$WriteStream = fs2.WriteStream;
      if (fs$WriteStream) {
        WriteStream.prototype = Object.create(fs$WriteStream.prototype);
        WriteStream.prototype.open = WriteStream$open;
      }
      Object.defineProperty(fs2, "ReadStream", {
        get: function() {
          return ReadStream;
        },
        set: function(val) {
          ReadStream = val;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(fs2, "WriteStream", {
        get: function() {
          return WriteStream;
        },
        set: function(val) {
          WriteStream = val;
        },
        enumerable: true,
        configurable: true
      });
      var FileReadStream = ReadStream;
      Object.defineProperty(fs2, "FileReadStream", {
        get: function() {
          return FileReadStream;
        },
        set: function(val) {
          FileReadStream = val;
        },
        enumerable: true,
        configurable: true
      });
      var FileWriteStream = WriteStream;
      Object.defineProperty(fs2, "FileWriteStream", {
        get: function() {
          return FileWriteStream;
        },
        set: function(val) {
          FileWriteStream = val;
        },
        enumerable: true,
        configurable: true
      });
      function ReadStream(path, options) {
        if (this instanceof ReadStream)
          return fs$ReadStream.apply(this, arguments), this;
        else
          return ReadStream.apply(Object.create(ReadStream.prototype), arguments);
      }
      function ReadStream$open() {
        var that = this;
        open(that.path, that.flags, that.mode, function(err, fd) {
          if (err) {
            if (that.autoClose)
              that.destroy();
            that.emit("error", err);
          } else {
            that.fd = fd;
            that.emit("open", fd);
            that.read();
          }
        });
      }
      function WriteStream(path, options) {
        if (this instanceof WriteStream)
          return fs$WriteStream.apply(this, arguments), this;
        else
          return WriteStream.apply(Object.create(WriteStream.prototype), arguments);
      }
      function WriteStream$open() {
        var that = this;
        open(that.path, that.flags, that.mode, function(err, fd) {
          if (err) {
            that.destroy();
            that.emit("error", err);
          } else {
            that.fd = fd;
            that.emit("open", fd);
          }
        });
      }
      function createReadStream(path, options) {
        return new fs2.ReadStream(path, options);
      }
      function createWriteStream(path, options) {
        return new fs2.WriteStream(path, options);
      }
      var fs$open = fs2.open;
      fs2.open = open;
      function open(path, flags, mode, cb) {
        if (typeof mode === "function")
          cb = mode, mode = null;
        return go$open(path, flags, mode, cb);
        function go$open(path2, flags2, mode2, cb2, startTime) {
          return fs$open(path2, flags2, mode2, function(err, fd) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$open, [path2, flags2, mode2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      return fs2;
    }
    function enqueue(elem) {
      debug("ENQUEUE", elem[0].name, elem[1]);
      fs[gracefulQueue].push(elem);
      retry();
    }
    var retryTimer;
    function resetQueue() {
      var now = Date.now();
      for (var i = 0; i < fs[gracefulQueue].length; ++i) {
        if (fs[gracefulQueue][i].length > 2) {
          fs[gracefulQueue][i][3] = now;
          fs[gracefulQueue][i][4] = now;
        }
      }
      retry();
    }
    function retry() {
      clearTimeout(retryTimer);
      retryTimer = void 0;
      if (fs[gracefulQueue].length === 0)
        return;
      var elem = fs[gracefulQueue].shift();
      var fn = elem[0];
      var args = elem[1];
      var err = elem[2];
      var startTime = elem[3];
      var lastTime = elem[4];
      if (startTime === void 0) {
        debug("RETRY", fn.name, args);
        fn.apply(null, args);
      } else if (Date.now() - startTime >= 6e4) {
        debug("TIMEOUT", fn.name, args);
        var cb = args.pop();
        if (typeof cb === "function")
          cb.call(null, err);
      } else {
        var sinceAttempt = Date.now() - lastTime;
        var sinceStart = Math.max(lastTime - startTime, 1);
        var desiredDelay = Math.min(sinceStart * 1.2, 100);
        if (sinceAttempt >= desiredDelay) {
          debug("RETRY", fn.name, args);
          fn.apply(null, args.concat([startTime]));
        } else {
          fs[gracefulQueue].push(elem);
        }
      }
      if (retryTimer === void 0) {
        retryTimer = setTimeout(retry, 0);
      }
    }
  }
});

// packages/playwright/bundles/expect/node_modules/jest-util/build/createDirectory.js
var require_createDirectory = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-util/build/createDirectory.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = createDirectory;
    function fs() {
      const data = _interopRequireWildcard(require_graceful_fs());
      fs = function() {
        return data;
      };
      return data;
    }
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function") return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function createDirectory(path) {
      try {
        fs().mkdirSync(path, {
          recursive: true
        });
      } catch (e) {
        if (e.code !== "EEXIST") {
          throw e;
        }
      }
    }
  }
});

// packages/playwright/bundles/expect/node_modules/jest-util/build/ErrorWithStack.js
var require_ErrorWithStack = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-util/build/ErrorWithStack.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = void 0;
    var ErrorWithStack = class extends Error {
      constructor(message, callsite, stackLimit) {
        const originalStackLimit = Error.stackTraceLimit;
        if (stackLimit) {
          Error.stackTraceLimit = Math.max(stackLimit, originalStackLimit || 10);
        }
        super(message);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, callsite);
        }
        Error.stackTraceLimit = originalStackLimit;
      }
    };
    exports2.default = ErrorWithStack;
  }
});

// packages/playwright/bundles/expect/node_modules/jest-util/build/deepCyclicCopy.js
var require_deepCyclicCopy = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-util/build/deepCyclicCopy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = deepCyclicCopy;
    var EMPTY = /* @__PURE__ */ new Set();
    function deepCyclicCopy(value, options = {
      blacklist: EMPTY,
      keepPrototype: false
    }, cycles = /* @__PURE__ */ new WeakMap()) {
      if (typeof value !== "object" || value === null || Buffer.isBuffer(value)) {
        return value;
      } else if (cycles.has(value)) {
        return cycles.get(value);
      } else if (Array.isArray(value)) {
        return deepCyclicCopyArray(value, options, cycles);
      } else {
        return deepCyclicCopyObject(value, options, cycles);
      }
    }
    function deepCyclicCopyObject(object, options, cycles) {
      const newObject = options.keepPrototype ? Object.create(Object.getPrototypeOf(object)) : {};
      const descriptors = Object.getOwnPropertyDescriptors(object);
      cycles.set(object, newObject);
      Object.keys(descriptors).forEach((key) => {
        if (options.blacklist && options.blacklist.has(key)) {
          delete descriptors[key];
          return;
        }
        const descriptor = descriptors[key];
        if (typeof descriptor.value !== "undefined") {
          descriptor.value = deepCyclicCopy(
            descriptor.value,
            {
              blacklist: EMPTY,
              keepPrototype: options.keepPrototype
            },
            cycles
          );
        }
        descriptor.configurable = true;
      });
      return Object.defineProperties(newObject, descriptors);
    }
    function deepCyclicCopyArray(array, options, cycles) {
      const newArray = options.keepPrototype ? new (Object.getPrototypeOf(array)).constructor(array.length) : [];
      const length = array.length;
      cycles.set(array, newArray);
      for (let i = 0; i < length; i++) {
        newArray[i] = deepCyclicCopy(
          array[i],
          {
            blacklist: EMPTY,
            keepPrototype: options.keepPrototype
          },
          cycles
        );
      }
      return newArray;
    }
  }
});

// packages/playwright/bundles/expect/node_modules/jest-util/build/createProcessObject.js
var require_createProcessObject = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-util/build/createProcessObject.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = createProcessObject;
    var _deepCyclicCopy = _interopRequireDefault(require_deepCyclicCopy());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var BLACKLIST = /* @__PURE__ */ new Set(["env", "mainModule", "_events"]);
    var isWin32 = process.platform === "win32";
    var proto = Object.getPrototypeOf(process.env);
    function createProcessEnv() {
      const real = Object.create(proto);
      const lookup = {};
      function deletePropertyWin32(_target, key) {
        for (const name in real) {
          if (Object.prototype.hasOwnProperty.call(real, name)) {
            if (typeof key === "string") {
              if (name.toLowerCase() === key.toLowerCase()) {
                delete real[name];
                delete lookup[name.toLowerCase()];
              }
            } else {
              if (key === name) {
                delete real[name];
                delete lookup[name];
              }
            }
          }
        }
        return true;
      }
      function deleteProperty(_target, key) {
        delete real[key];
        delete lookup[key];
        return true;
      }
      function getProperty(_target, key) {
        return real[key];
      }
      function getPropertyWin32(_target, key) {
        if (typeof key === "string") {
          return lookup[key in proto ? key : key.toLowerCase()];
        } else {
          return real[key];
        }
      }
      const proxy = new Proxy(real, {
        deleteProperty: isWin32 ? deletePropertyWin32 : deleteProperty,
        get: isWin32 ? getPropertyWin32 : getProperty,
        set(_target, key, value) {
          const strValue = `${value}`;
          if (typeof key === "string") {
            lookup[key.toLowerCase()] = strValue;
          }
          real[key] = strValue;
          return true;
        }
      });
      return Object.assign(proxy, process.env);
    }
    function createProcessObject() {
      const process2 = require("process");
      const newProcess = (0, _deepCyclicCopy.default)(process2, {
        blacklist: BLACKLIST,
        keepPrototype: true
      });
      try {
        newProcess[Symbol.toStringTag] = "process";
      } catch (e) {
        if (newProcess[Symbol.toStringTag] !== "process") {
          e.message = `Unable to set toStringTag on process. Please open up an issue at https://github.com/jestjs/jest

${e.message}`;
          throw e;
        }
      }
      let proto2 = process2;
      while (proto2 = Object.getPrototypeOf(proto2)) {
        if (typeof proto2.constructor === "function") {
          proto2.constructor.call(newProcess);
        }
      }
      newProcess.env = createProcessEnv();
      newProcess.send = () => true;
      Object.defineProperty(newProcess, "domain", {
        get() {
          return process2.domain;
        }
      });
      return newProcess;
    }
  }
});

// packages/playwright/bundles/expect/node_modules/jest-util/build/installCommonGlobals.js
var require_installCommonGlobals = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-util/build/installCommonGlobals.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = installCommonGlobals;
    function fs() {
      const data = _interopRequireWildcard(require_graceful_fs());
      fs = function() {
        return data;
      };
      return data;
    }
    var _createProcessObject = _interopRequireDefault(
      require_createProcessObject()
    );
    var _deepCyclicCopy = _interopRequireDefault(require_deepCyclicCopy());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function") return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    var DTRACE = Object.keys(globalThis).filter((key) => key.startsWith("DTRACE"));
    function installCommonGlobals(globalObject, globals) {
      globalObject.process = (0, _createProcessObject.default)();
      const symbol = globalObject.Symbol;
      Object.defineProperties(globalObject, {
        [symbol.for("jest-native-promise")]: {
          enumerable: false,
          value: Promise,
          writable: false
        },
        [symbol.for("jest-native-now")]: {
          enumerable: false,
          value: globalObject.Date.now.bind(globalObject.Date),
          writable: false
        },
        [symbol.for("jest-native-read-file")]: {
          enumerable: false,
          value: fs().readFileSync.bind(fs()),
          writable: false
        },
        [symbol.for("jest-native-write-file")]: {
          enumerable: false,
          value: fs().writeFileSync.bind(fs()),
          writable: false
        },
        [symbol.for("jest-native-exists-file")]: {
          enumerable: false,
          value: fs().existsSync.bind(fs()),
          writable: false
        },
        "jest-symbol-do-not-touch": {
          enumerable: false,
          value: symbol,
          writable: false
        }
      });
      DTRACE.forEach((dtrace) => {
        globalObject[dtrace] = function(...args) {
          return globalThis[dtrace].apply(this, args);
        };
      });
      return Object.assign(globalObject, (0, _deepCyclicCopy.default)(globals));
    }
  }
});

// packages/playwright/bundles/expect/node_modules/jest-util/build/interopRequireDefault.js
var require_interopRequireDefault = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-util/build/interopRequireDefault.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = interopRequireDefault;
    function interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  }
});

// packages/playwright/bundles/expect/node_modules/jest-util/build/isPromise.js
var require_isPromise = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-util/build/isPromise.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = isPromise2;
    function isPromise2(candidate) {
      return candidate != null && (typeof candidate === "object" || typeof candidate === "function") && typeof candidate.then === "function";
    }
  }
});

// packages/playwright/bundles/expect/node_modules/jest-util/build/setGlobal.js
var require_setGlobal = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-util/build/setGlobal.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = setGlobal;
    function setGlobal(globalToMutate, key, value) {
      globalToMutate[key] = value;
    }
  }
});

// packages/playwright/bundles/expect/node_modules/jest-util/build/convertDescriptorToString.js
var require_convertDescriptorToString = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-util/build/convertDescriptorToString.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = convertDescriptorToString;
    function convertDescriptorToString(descriptor) {
      switch (typeof descriptor) {
        case "function":
          if (descriptor.name) {
            return descriptor.name;
          }
          break;
        case "number":
        case "undefined":
          return `${descriptor}`;
        case "string":
          return descriptor;
      }
      throw new Error(
        `Invalid first argument, ${descriptor}. It must be a named class, named function, number, or string.`
      );
    }
  }
});

// packages/playwright/bundles/expect/node_modules/jest-util/build/replacePathSepForGlob.js
var require_replacePathSepForGlob = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-util/build/replacePathSepForGlob.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = replacePathSepForGlob;
    function replacePathSepForGlob(path) {
      return path.replace(/\\(?![{}()+?.^$])/g, "/");
    }
  }
});

// packages/playwright/bundles/expect/node_modules/jest-util/build/testPathPatternToRegExp.js
var require_testPathPatternToRegExp = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-util/build/testPathPatternToRegExp.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = testPathPatternToRegExp;
    function testPathPatternToRegExp(testPathPattern) {
      return new RegExp(testPathPattern, "i");
    }
  }
});

// packages/playwright/bundles/expect/node_modules/picomatch/lib/constants.js
var require_constants2 = __commonJS({
  "packages/playwright/bundles/expect/node_modules/picomatch/lib/constants.js"(exports2, module2) {
    "use strict";
    var path = require("path");
    var WIN_SLASH = "\\\\/";
    var WIN_NO_SLASH = `[^${WIN_SLASH}]`;
    var DOT_LITERAL = "\\.";
    var PLUS_LITERAL = "\\+";
    var QMARK_LITERAL = "\\?";
    var SLASH_LITERAL = "\\/";
    var ONE_CHAR = "(?=.)";
    var QMARK = "[^/]";
    var END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
    var START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
    var DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
    var NO_DOT = `(?!${DOT_LITERAL})`;
    var NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
    var NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
    var NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
    var QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
    var STAR = `${QMARK}*?`;
    var POSIX_CHARS = {
      DOT_LITERAL,
      PLUS_LITERAL,
      QMARK_LITERAL,
      SLASH_LITERAL,
      ONE_CHAR,
      QMARK,
      END_ANCHOR,
      DOTS_SLASH,
      NO_DOT,
      NO_DOTS,
      NO_DOT_SLASH,
      NO_DOTS_SLASH,
      QMARK_NO_DOT,
      STAR,
      START_ANCHOR
    };
    var WINDOWS_CHARS = {
      ...POSIX_CHARS,
      SLASH_LITERAL: `[${WIN_SLASH}]`,
      QMARK: WIN_NO_SLASH,
      STAR: `${WIN_NO_SLASH}*?`,
      DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
      NO_DOT: `(?!${DOT_LITERAL})`,
      NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
      NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
      START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
      END_ANCHOR: `(?:[${WIN_SLASH}]|$)`
    };
    var POSIX_REGEX_SOURCE = {
      alnum: "a-zA-Z0-9",
      alpha: "a-zA-Z",
      ascii: "\\x00-\\x7F",
      blank: " \\t",
      cntrl: "\\x00-\\x1F\\x7F",
      digit: "0-9",
      graph: "\\x21-\\x7E",
      lower: "a-z",
      print: "\\x20-\\x7E ",
      punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
      space: " \\t\\r\\n\\v\\f",
      upper: "A-Z",
      word: "A-Za-z0-9_",
      xdigit: "A-Fa-f0-9"
    };
    module2.exports = {
      MAX_LENGTH: 1024 * 64,
      POSIX_REGEX_SOURCE,
      // regular expressions
      REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
      REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
      REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
      REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
      REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
      REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
      // Replace globs with equivalent patterns to reduce parsing time.
      REPLACEMENTS: {
        "***": "*",
        "**/**": "**",
        "**/**/**": "**"
      },
      // Digits
      CHAR_0: 48,
      /* 0 */
      CHAR_9: 57,
      /* 9 */
      // Alphabet chars.
      CHAR_UPPERCASE_A: 65,
      /* A */
      CHAR_LOWERCASE_A: 97,
      /* a */
      CHAR_UPPERCASE_Z: 90,
      /* Z */
      CHAR_LOWERCASE_Z: 122,
      /* z */
      CHAR_LEFT_PARENTHESES: 40,
      /* ( */
      CHAR_RIGHT_PARENTHESES: 41,
      /* ) */
      CHAR_ASTERISK: 42,
      /* * */
      // Non-alphabetic chars.
      CHAR_AMPERSAND: 38,
      /* & */
      CHAR_AT: 64,
      /* @ */
      CHAR_BACKWARD_SLASH: 92,
      /* \ */
      CHAR_CARRIAGE_RETURN: 13,
      /* \r */
      CHAR_CIRCUMFLEX_ACCENT: 94,
      /* ^ */
      CHAR_COLON: 58,
      /* : */
      CHAR_COMMA: 44,
      /* , */
      CHAR_DOT: 46,
      /* . */
      CHAR_DOUBLE_QUOTE: 34,
      /* " */
      CHAR_EQUAL: 61,
      /* = */
      CHAR_EXCLAMATION_MARK: 33,
      /* ! */
      CHAR_FORM_FEED: 12,
      /* \f */
      CHAR_FORWARD_SLASH: 47,
      /* / */
      CHAR_GRAVE_ACCENT: 96,
      /* ` */
      CHAR_HASH: 35,
      /* # */
      CHAR_HYPHEN_MINUS: 45,
      /* - */
      CHAR_LEFT_ANGLE_BRACKET: 60,
      /* < */
      CHAR_LEFT_CURLY_BRACE: 123,
      /* { */
      CHAR_LEFT_SQUARE_BRACKET: 91,
      /* [ */
      CHAR_LINE_FEED: 10,
      /* \n */
      CHAR_NO_BREAK_SPACE: 160,
      /* \u00A0 */
      CHAR_PERCENT: 37,
      /* % */
      CHAR_PLUS: 43,
      /* + */
      CHAR_QUESTION_MARK: 63,
      /* ? */
      CHAR_RIGHT_ANGLE_BRACKET: 62,
      /* > */
      CHAR_RIGHT_CURLY_BRACE: 125,
      /* } */
      CHAR_RIGHT_SQUARE_BRACKET: 93,
      /* ] */
      CHAR_SEMICOLON: 59,
      /* ; */
      CHAR_SINGLE_QUOTE: 39,
      /* ' */
      CHAR_SPACE: 32,
      /*   */
      CHAR_TAB: 9,
      /* \t */
      CHAR_UNDERSCORE: 95,
      /* _ */
      CHAR_VERTICAL_LINE: 124,
      /* | */
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
      /* \uFEFF */
      SEP: path.sep,
      /**
       * Create EXTGLOB_CHARS
       */
      extglobChars(chars) {
        return {
          "!": { type: "negate", open: "(?:(?!(?:", close: `))${chars.STAR})` },
          "?": { type: "qmark", open: "(?:", close: ")?" },
          "+": { type: "plus", open: "(?:", close: ")+" },
          "*": { type: "star", open: "(?:", close: ")*" },
          "@": { type: "at", open: "(?:", close: ")" }
        };
      },
      /**
       * Create GLOB_CHARS
       */
      globChars(win32) {
        return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
      }
    };
  }
});

// packages/playwright/bundles/expect/node_modules/picomatch/lib/utils.js
var require_utils2 = __commonJS({
  "packages/playwright/bundles/expect/node_modules/picomatch/lib/utils.js"(exports2) {
    "use strict";
    var path = require("path");
    var win32 = process.platform === "win32";
    var {
      REGEX_BACKSLASH,
      REGEX_REMOVE_BACKSLASH,
      REGEX_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_GLOBAL
    } = require_constants2();
    exports2.isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    exports2.hasRegexChars = (str) => REGEX_SPECIAL_CHARS.test(str);
    exports2.isRegexChar = (str) => str.length === 1 && exports2.hasRegexChars(str);
    exports2.escapeRegex = (str) => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
    exports2.toPosixSlashes = (str) => str.replace(REGEX_BACKSLASH, "/");
    exports2.removeBackslashes = (str) => {
      return str.replace(REGEX_REMOVE_BACKSLASH, (match) => {
        return match === "\\" ? "" : match;
      });
    };
    exports2.supportsLookbehinds = () => {
      const segs = process.version.slice(1).split(".").map(Number);
      if (segs.length === 3 && segs[0] >= 9 || segs[0] === 8 && segs[1] >= 10) {
        return true;
      }
      return false;
    };
    exports2.isWindows = (options) => {
      if (options && typeof options.windows === "boolean") {
        return options.windows;
      }
      return win32 === true || path.sep === "\\";
    };
    exports2.escapeLast = (input, char, lastIdx) => {
      const idx = input.lastIndexOf(char, lastIdx);
      if (idx === -1) return input;
      if (input[idx - 1] === "\\") return exports2.escapeLast(input, char, idx - 1);
      return `${input.slice(0, idx)}\\${input.slice(idx)}`;
    };
    exports2.removePrefix = (input, state = {}) => {
      let output = input;
      if (output.startsWith("./")) {
        output = output.slice(2);
        state.prefix = "./";
      }
      return output;
    };
    exports2.wrapOutput = (input, state = {}, options = {}) => {
      const prepend = options.contains ? "" : "^";
      const append = options.contains ? "" : "$";
      let output = `${prepend}(?:${input})${append}`;
      if (state.negated === true) {
        output = `(?:^(?!${output}).*$)`;
      }
      return output;
    };
  }
});

// packages/playwright/bundles/expect/node_modules/picomatch/lib/scan.js
var require_scan = __commonJS({
  "packages/playwright/bundles/expect/node_modules/picomatch/lib/scan.js"(exports2, module2) {
    "use strict";
    var utils2 = require_utils2();
    var {
      CHAR_ASTERISK,
      /* * */
      CHAR_AT,
      /* @ */
      CHAR_BACKWARD_SLASH,
      /* \ */
      CHAR_COMMA,
      /* , */
      CHAR_DOT,
      /* . */
      CHAR_EXCLAMATION_MARK,
      /* ! */
      CHAR_FORWARD_SLASH,
      /* / */
      CHAR_LEFT_CURLY_BRACE,
      /* { */
      CHAR_LEFT_PARENTHESES,
      /* ( */
      CHAR_LEFT_SQUARE_BRACKET,
      /* [ */
      CHAR_PLUS,
      /* + */
      CHAR_QUESTION_MARK,
      /* ? */
      CHAR_RIGHT_CURLY_BRACE,
      /* } */
      CHAR_RIGHT_PARENTHESES,
      /* ) */
      CHAR_RIGHT_SQUARE_BRACKET
      /* ] */
    } = require_constants2();
    var isPathSeparator = (code) => {
      return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
    };
    var depth = (token) => {
      if (token.isPrefix !== true) {
        token.depth = token.isGlobstar ? Infinity : 1;
      }
    };
    var scan = (input, options) => {
      const opts = options || {};
      const length = input.length - 1;
      const scanToEnd = opts.parts === true || opts.scanToEnd === true;
      const slashes = [];
      const tokens = [];
      const parts = [];
      let str = input;
      let index = -1;
      let start = 0;
      let lastIndex = 0;
      let isBrace = false;
      let isBracket = false;
      let isGlob = false;
      let isExtglob = false;
      let isGlobstar = false;
      let braceEscaped = false;
      let backslashes = false;
      let negated = false;
      let negatedExtglob = false;
      let finished = false;
      let braces = 0;
      let prev;
      let code;
      let token = { value: "", depth: 0, isGlob: false };
      const eos = () => index >= length;
      const peek = () => str.charCodeAt(index + 1);
      const advance = () => {
        prev = code;
        return str.charCodeAt(++index);
      };
      while (index < length) {
        code = advance();
        let next;
        if (code === CHAR_BACKWARD_SLASH) {
          backslashes = token.backslashes = true;
          code = advance();
          if (code === CHAR_LEFT_CURLY_BRACE) {
            braceEscaped = true;
          }
          continue;
        }
        if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
          braces++;
          while (eos() !== true && (code = advance())) {
            if (code === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }
            if (code === CHAR_LEFT_CURLY_BRACE) {
              braces++;
              continue;
            }
            if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (braceEscaped !== true && code === CHAR_COMMA) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (code === CHAR_RIGHT_CURLY_BRACE) {
              braces--;
              if (braces === 0) {
                braceEscaped = false;
                isBrace = token.isBrace = true;
                finished = true;
                break;
              }
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_FORWARD_SLASH) {
          slashes.push(index);
          tokens.push(token);
          token = { value: "", depth: 0, isGlob: false };
          if (finished === true) continue;
          if (prev === CHAR_DOT && index === start + 1) {
            start += 2;
            continue;
          }
          lastIndex = index + 1;
          continue;
        }
        if (opts.noext !== true) {
          const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;
          if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
            isGlob = token.isGlob = true;
            isExtglob = token.isExtglob = true;
            finished = true;
            if (code === CHAR_EXCLAMATION_MARK && index === start) {
              negatedExtglob = true;
            }
            if (scanToEnd === true) {
              while (eos() !== true && (code = advance())) {
                if (code === CHAR_BACKWARD_SLASH) {
                  backslashes = token.backslashes = true;
                  code = advance();
                  continue;
                }
                if (code === CHAR_RIGHT_PARENTHESES) {
                  isGlob = token.isGlob = true;
                  finished = true;
                  break;
                }
              }
              continue;
            }
            break;
          }
        }
        if (code === CHAR_ASTERISK) {
          if (prev === CHAR_ASTERISK) isGlobstar = token.isGlobstar = true;
          isGlob = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_QUESTION_MARK) {
          isGlob = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_LEFT_SQUARE_BRACKET) {
          while (eos() !== true && (next = advance())) {
            if (next === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }
            if (next === CHAR_RIGHT_SQUARE_BRACKET) {
              isBracket = token.isBracket = true;
              isGlob = token.isGlob = true;
              finished = true;
              break;
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
          negated = token.negated = true;
          start++;
          continue;
        }
        if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
          isGlob = token.isGlob = true;
          if (scanToEnd === true) {
            while (eos() !== true && (code = advance())) {
              if (code === CHAR_LEFT_PARENTHESES) {
                backslashes = token.backslashes = true;
                code = advance();
                continue;
              }
              if (code === CHAR_RIGHT_PARENTHESES) {
                finished = true;
                break;
              }
            }
            continue;
          }
          break;
        }
        if (isGlob === true) {
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
      }
      if (opts.noext === true) {
        isExtglob = false;
        isGlob = false;
      }
      let base = str;
      let prefix = "";
      let glob = "";
      if (start > 0) {
        prefix = str.slice(0, start);
        str = str.slice(start);
        lastIndex -= start;
      }
      if (base && isGlob === true && lastIndex > 0) {
        base = str.slice(0, lastIndex);
        glob = str.slice(lastIndex);
      } else if (isGlob === true) {
        base = "";
        glob = str;
      } else {
        base = str;
      }
      if (base && base !== "" && base !== "/" && base !== str) {
        if (isPathSeparator(base.charCodeAt(base.length - 1))) {
          base = base.slice(0, -1);
        }
      }
      if (opts.unescape === true) {
        if (glob) glob = utils2.removeBackslashes(glob);
        if (base && backslashes === true) {
          base = utils2.removeBackslashes(base);
        }
      }
      const state = {
        prefix,
        input,
        start,
        base,
        glob,
        isBrace,
        isBracket,
        isGlob,
        isExtglob,
        isGlobstar,
        negated,
        negatedExtglob
      };
      if (opts.tokens === true) {
        state.maxDepth = 0;
        if (!isPathSeparator(code)) {
          tokens.push(token);
        }
        state.tokens = tokens;
      }
      if (opts.parts === true || opts.tokens === true) {
        let prevIndex;
        for (let idx = 0; idx < slashes.length; idx++) {
          const n = prevIndex ? prevIndex + 1 : start;
          const i = slashes[idx];
          const value = input.slice(n, i);
          if (opts.tokens) {
            if (idx === 0 && start !== 0) {
              tokens[idx].isPrefix = true;
              tokens[idx].value = prefix;
            } else {
              tokens[idx].value = value;
            }
            depth(tokens[idx]);
            state.maxDepth += tokens[idx].depth;
          }
          if (idx !== 0 || value !== "") {
            parts.push(value);
          }
          prevIndex = i;
        }
        if (prevIndex && prevIndex + 1 < input.length) {
          const value = input.slice(prevIndex + 1);
          parts.push(value);
          if (opts.tokens) {
            tokens[tokens.length - 1].value = value;
            depth(tokens[tokens.length - 1]);
            state.maxDepth += tokens[tokens.length - 1].depth;
          }
        }
        state.slashes = slashes;
        state.parts = parts;
      }
      return state;
    };
    module2.exports = scan;
  }
});

// packages/playwright/bundles/expect/node_modules/picomatch/lib/parse.js
var require_parse = __commonJS({
  "packages/playwright/bundles/expect/node_modules/picomatch/lib/parse.js"(exports2, module2) {
    "use strict";
    var constants = require_constants2();
    var utils2 = require_utils2();
    var {
      MAX_LENGTH,
      POSIX_REGEX_SOURCE,
      REGEX_NON_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_BACKREF,
      REPLACEMENTS
    } = constants;
    var expandRange = (args, options) => {
      if (typeof options.expandRange === "function") {
        return options.expandRange(...args, options);
      }
      args.sort();
      const value = `[${args.join("-")}]`;
      try {
        new RegExp(value);
      } catch (ex) {
        return args.map((v) => utils2.escapeRegex(v)).join("..");
      }
      return value;
    };
    var syntaxError = (type, char) => {
      return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
    };
    var parse = (input, options) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected a string");
      }
      input = REPLACEMENTS[input] || input;
      const opts = { ...options };
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      let len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      const bos = { type: "bos", value: "", output: opts.prepend || "" };
      const tokens = [bos];
      const capture = opts.capture ? "" : "?:";
      const win32 = utils2.isWindows(options);
      const PLATFORM_CHARS = constants.globChars(win32);
      const EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS);
      const {
        DOT_LITERAL,
        PLUS_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOT_SLASH,
        NO_DOTS_SLASH,
        QMARK,
        QMARK_NO_DOT,
        STAR,
        START_ANCHOR
      } = PLATFORM_CHARS;
      const globstar = (opts2) => {
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const nodot = opts.dot ? "" : NO_DOT;
      const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
      let star = opts.bash === true ? globstar(opts) : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      if (typeof opts.noext === "boolean") {
        opts.noextglob = opts.noext;
      }
      const state = {
        input,
        index: -1,
        start: 0,
        dot: opts.dot === true,
        consumed: "",
        output: "",
        prefix: "",
        backtrack: false,
        negated: false,
        brackets: 0,
        braces: 0,
        parens: 0,
        quotes: 0,
        globstar: false,
        tokens
      };
      input = utils2.removePrefix(input, state);
      len = input.length;
      const extglobs = [];
      const braces = [];
      const stack = [];
      let prev = bos;
      let value;
      const eos = () => state.index === len - 1;
      const peek = state.peek = (n = 1) => input[state.index + n];
      const advance = state.advance = () => input[++state.index] || "";
      const remaining = () => input.slice(state.index + 1);
      const consume = (value2 = "", num = 0) => {
        state.consumed += value2;
        state.index += num;
      };
      const append = (token) => {
        state.output += token.output != null ? token.output : token.value;
        consume(token.value);
      };
      const negate = () => {
        let count = 1;
        while (peek() === "!" && (peek(2) !== "(" || peek(3) === "?")) {
          advance();
          state.start++;
          count++;
        }
        if (count % 2 === 0) {
          return false;
        }
        state.negated = true;
        state.start++;
        return true;
      };
      const increment = (type) => {
        state[type]++;
        stack.push(type);
      };
      const decrement = (type) => {
        state[type]--;
        stack.pop();
      };
      const push = (tok) => {
        if (prev.type === "globstar") {
          const isBrace = state.braces > 0 && (tok.type === "comma" || tok.type === "brace");
          const isExtglob = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
          if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob) {
            state.output = state.output.slice(0, -prev.output.length);
            prev.type = "star";
            prev.value = "*";
            prev.output = star;
            state.output += prev.output;
          }
        }
        if (extglobs.length && tok.type !== "paren") {
          extglobs[extglobs.length - 1].inner += tok.value;
        }
        if (tok.value || tok.output) append(tok);
        if (prev && prev.type === "text" && tok.type === "text") {
          prev.value += tok.value;
          prev.output = (prev.output || "") + tok.value;
          return;
        }
        tok.prev = prev;
        tokens.push(tok);
        prev = tok;
      };
      const extglobOpen = (type, value2) => {
        const token = { ...EXTGLOB_CHARS[value2], conditions: 1, inner: "" };
        token.prev = prev;
        token.parens = state.parens;
        token.output = state.output;
        const output = (opts.capture ? "(" : "") + token.open;
        increment("parens");
        push({ type, value: value2, output: state.output ? "" : ONE_CHAR });
        push({ type: "paren", extglob: true, value: advance(), output });
        extglobs.push(token);
      };
      const extglobClose = (token) => {
        let output = token.close + (opts.capture ? ")" : "");
        let rest;
        if (token.type === "negate") {
          let extglobStar = star;
          if (token.inner && token.inner.length > 1 && token.inner.includes("/")) {
            extglobStar = globstar(opts);
          }
          if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
            output = token.close = `)$))${extglobStar}`;
          }
          if (token.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
            const expression = parse(rest, { ...options, fastpaths: false }).output;
            output = token.close = `)${expression})${extglobStar})`;
          }
          if (token.prev.type === "bos") {
            state.negatedExtglob = true;
          }
        }
        push({ type: "paren", extglob: true, value, output });
        decrement("parens");
      };
      if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
        let backslashes = false;
        let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
          if (first === "\\") {
            backslashes = true;
            return m;
          }
          if (first === "?") {
            if (esc) {
              return esc + first + (rest ? QMARK.repeat(rest.length) : "");
            }
            if (index === 0) {
              return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : "");
            }
            return QMARK.repeat(chars.length);
          }
          if (first === ".") {
            return DOT_LITERAL.repeat(chars.length);
          }
          if (first === "*") {
            if (esc) {
              return esc + first + (rest ? star : "");
            }
            return star;
          }
          return esc ? m : `\\${m}`;
        });
        if (backslashes === true) {
          if (opts.unescape === true) {
            output = output.replace(/\\/g, "");
          } else {
            output = output.replace(/\\+/g, (m) => {
              return m.length % 2 === 0 ? "\\\\" : m ? "\\" : "";
            });
          }
        }
        if (output === input && opts.contains === true) {
          state.output = input;
          return state;
        }
        state.output = utils2.wrapOutput(output, state, options);
        return state;
      }
      while (!eos()) {
        value = advance();
        if (value === "\0") {
          continue;
        }
        if (value === "\\") {
          const next = peek();
          if (next === "/" && opts.bash !== true) {
            continue;
          }
          if (next === "." || next === ";") {
            continue;
          }
          if (!next) {
            value += "\\";
            push({ type: "text", value });
            continue;
          }
          const match = /^\\+/.exec(remaining());
          let slashes = 0;
          if (match && match[0].length > 2) {
            slashes = match[0].length;
            state.index += slashes;
            if (slashes % 2 !== 0) {
              value += "\\";
            }
          }
          if (opts.unescape === true) {
            value = advance();
          } else {
            value += advance();
          }
          if (state.brackets === 0) {
            push({ type: "text", value });
            continue;
          }
        }
        if (state.brackets > 0 && (value !== "]" || prev.value === "[" || prev.value === "[^")) {
          if (opts.posix !== false && value === ":") {
            const inner = prev.value.slice(1);
            if (inner.includes("[")) {
              prev.posix = true;
              if (inner.includes(":")) {
                const idx = prev.value.lastIndexOf("[");
                const pre = prev.value.slice(0, idx);
                const rest2 = prev.value.slice(idx + 2);
                const posix = POSIX_REGEX_SOURCE[rest2];
                if (posix) {
                  prev.value = pre + posix;
                  state.backtrack = true;
                  advance();
                  if (!bos.output && tokens.indexOf(prev) === 1) {
                    bos.output = ONE_CHAR;
                  }
                  continue;
                }
              }
            }
          }
          if (value === "[" && peek() !== ":" || value === "-" && peek() === "]") {
            value = `\\${value}`;
          }
          if (value === "]" && (prev.value === "[" || prev.value === "[^")) {
            value = `\\${value}`;
          }
          if (opts.posix === true && value === "!" && prev.value === "[") {
            value = "^";
          }
          prev.value += value;
          append({ value });
          continue;
        }
        if (state.quotes === 1 && value !== '"') {
          value = utils2.escapeRegex(value);
          prev.value += value;
          append({ value });
          continue;
        }
        if (value === '"') {
          state.quotes = state.quotes === 1 ? 0 : 1;
          if (opts.keepQuotes === true) {
            push({ type: "text", value });
          }
          continue;
        }
        if (value === "(") {
          increment("parens");
          push({ type: "paren", value });
          continue;
        }
        if (value === ")") {
          if (state.parens === 0 && opts.strictBrackets === true) {
            throw new SyntaxError(syntaxError("opening", "("));
          }
          const extglob = extglobs[extglobs.length - 1];
          if (extglob && state.parens === extglob.parens + 1) {
            extglobClose(extglobs.pop());
            continue;
          }
          push({ type: "paren", value, output: state.parens ? ")" : "\\)" });
          decrement("parens");
          continue;
        }
        if (value === "[") {
          if (opts.nobracket === true || !remaining().includes("]")) {
            if (opts.nobracket !== true && opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("closing", "]"));
            }
            value = `\\${value}`;
          } else {
            increment("brackets");
          }
          push({ type: "bracket", value });
          continue;
        }
        if (value === "]") {
          if (opts.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
            push({ type: "text", value, output: `\\${value}` });
            continue;
          }
          if (state.brackets === 0) {
            if (opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("opening", "["));
            }
            push({ type: "text", value, output: `\\${value}` });
            continue;
          }
          decrement("brackets");
          const prevValue = prev.value.slice(1);
          if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) {
            value = `/${value}`;
          }
          prev.value += value;
          append({ value });
          if (opts.literalBrackets === false || utils2.hasRegexChars(prevValue)) {
            continue;
          }
          const escaped = utils2.escapeRegex(prev.value);
          state.output = state.output.slice(0, -prev.value.length);
          if (opts.literalBrackets === true) {
            state.output += escaped;
            prev.value = escaped;
            continue;
          }
          prev.value = `(${capture}${escaped}|${prev.value})`;
          state.output += prev.value;
          continue;
        }
        if (value === "{" && opts.nobrace !== true) {
          increment("braces");
          const open = {
            type: "brace",
            value,
            output: "(",
            outputIndex: state.output.length,
            tokensIndex: state.tokens.length
          };
          braces.push(open);
          push(open);
          continue;
        }
        if (value === "}") {
          const brace = braces[braces.length - 1];
          if (opts.nobrace === true || !brace) {
            push({ type: "text", value, output: value });
            continue;
          }
          let output = ")";
          if (brace.dots === true) {
            const arr = tokens.slice();
            const range = [];
            for (let i = arr.length - 1; i >= 0; i--) {
              tokens.pop();
              if (arr[i].type === "brace") {
                break;
              }
              if (arr[i].type !== "dots") {
                range.unshift(arr[i].value);
              }
            }
            output = expandRange(range, opts);
            state.backtrack = true;
          }
          if (brace.comma !== true && brace.dots !== true) {
            const out = state.output.slice(0, brace.outputIndex);
            const toks = state.tokens.slice(brace.tokensIndex);
            brace.value = brace.output = "\\{";
            value = output = "\\}";
            state.output = out;
            for (const t of toks) {
              state.output += t.output || t.value;
            }
          }
          push({ type: "brace", value, output });
          decrement("braces");
          braces.pop();
          continue;
        }
        if (value === "|") {
          if (extglobs.length > 0) {
            extglobs[extglobs.length - 1].conditions++;
          }
          push({ type: "text", value });
          continue;
        }
        if (value === ",") {
          let output = value;
          const brace = braces[braces.length - 1];
          if (brace && stack[stack.length - 1] === "braces") {
            brace.comma = true;
            output = "|";
          }
          push({ type: "comma", value, output });
          continue;
        }
        if (value === "/") {
          if (prev.type === "dot" && state.index === state.start + 1) {
            state.start = state.index + 1;
            state.consumed = "";
            state.output = "";
            tokens.pop();
            prev = bos;
            continue;
          }
          push({ type: "slash", value, output: SLASH_LITERAL });
          continue;
        }
        if (value === ".") {
          if (state.braces > 0 && prev.type === "dot") {
            if (prev.value === ".") prev.output = DOT_LITERAL;
            const brace = braces[braces.length - 1];
            prev.type = "dots";
            prev.output += value;
            prev.value += value;
            brace.dots = true;
            continue;
          }
          if (state.braces + state.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
            push({ type: "text", value, output: DOT_LITERAL });
            continue;
          }
          push({ type: "dot", value, output: DOT_LITERAL });
          continue;
        }
        if (value === "?") {
          const isGroup = prev && prev.value === "(";
          if (!isGroup && opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("qmark", value);
            continue;
          }
          if (prev && prev.type === "paren") {
            const next = peek();
            let output = value;
            if (next === "<" && !utils2.supportsLookbehinds()) {
              throw new Error("Node.js v10 or higher is required for regex lookbehinds");
            }
            if (prev.value === "(" && !/[!=<:]/.test(next) || next === "<" && !/<([!=]|\w+>)/.test(remaining())) {
              output = `\\${value}`;
            }
            push({ type: "text", value, output });
            continue;
          }
          if (opts.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
            push({ type: "qmark", value, output: QMARK_NO_DOT });
            continue;
          }
          push({ type: "qmark", value, output: QMARK });
          continue;
        }
        if (value === "!") {
          if (opts.noextglob !== true && peek() === "(") {
            if (peek(2) !== "?" || !/[!=<:]/.test(peek(3))) {
              extglobOpen("negate", value);
              continue;
            }
          }
          if (opts.nonegate !== true && state.index === 0) {
            negate();
            continue;
          }
        }
        if (value === "+") {
          if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("plus", value);
            continue;
          }
          if (prev && prev.value === "(" || opts.regex === false) {
            push({ type: "plus", value, output: PLUS_LITERAL });
            continue;
          }
          if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state.parens > 0) {
            push({ type: "plus", value });
            continue;
          }
          push({ type: "plus", value: PLUS_LITERAL });
          continue;
        }
        if (value === "@") {
          if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            push({ type: "at", extglob: true, value, output: "" });
            continue;
          }
          push({ type: "text", value });
          continue;
        }
        if (value !== "*") {
          if (value === "$" || value === "^") {
            value = `\\${value}`;
          }
          const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
          if (match) {
            value += match[0];
            state.index += match[0].length;
          }
          push({ type: "text", value });
          continue;
        }
        if (prev && (prev.type === "globstar" || prev.star === true)) {
          prev.type = "star";
          prev.star = true;
          prev.value += value;
          prev.output = star;
          state.backtrack = true;
          state.globstar = true;
          consume(value);
          continue;
        }
        let rest = remaining();
        if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
          extglobOpen("star", value);
          continue;
        }
        if (prev.type === "star") {
          if (opts.noglobstar === true) {
            consume(value);
            continue;
          }
          const prior = prev.prev;
          const before = prior.prev;
          const isStart = prior.type === "slash" || prior.type === "bos";
          const afterStar = before && (before.type === "star" || before.type === "globstar");
          if (opts.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
            push({ type: "star", value, output: "" });
            continue;
          }
          const isBrace = state.braces > 0 && (prior.type === "comma" || prior.type === "brace");
          const isExtglob = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
          if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob) {
            push({ type: "star", value, output: "" });
            continue;
          }
          while (rest.slice(0, 3) === "/**") {
            const after = input[state.index + 4];
            if (after && after !== "/") {
              break;
            }
            rest = rest.slice(3);
            consume("/**", 3);
          }
          if (prior.type === "bos" && eos()) {
            prev.type = "globstar";
            prev.value += value;
            prev.output = globstar(opts);
            state.output = prev.output;
            state.globstar = true;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && eos()) {
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = globstar(opts) + (opts.strictSlashes ? ")" : "|$)");
            prev.value += value;
            state.globstar = true;
            state.output += prior.output + prev.output;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
            const end = rest[1] !== void 0 ? "|$" : "";
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
            prev.value += value;
            state.output += prior.output + prev.output;
            state.globstar = true;
            consume(value + advance());
            push({ type: "slash", value: "/", output: "" });
            continue;
          }
          if (prior.type === "bos" && rest[0] === "/") {
            prev.type = "globstar";
            prev.value += value;
            prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
            state.output = prev.output;
            state.globstar = true;
            consume(value + advance());
            push({ type: "slash", value: "/", output: "" });
            continue;
          }
          state.output = state.output.slice(0, -prev.output.length);
          prev.type = "globstar";
          prev.output = globstar(opts);
          prev.value += value;
          state.output += prev.output;
          state.globstar = true;
          consume(value);
          continue;
        }
        const token = { type: "star", value, output: star };
        if (opts.bash === true) {
          token.output = ".*?";
          if (prev.type === "bos" || prev.type === "slash") {
            token.output = nodot + token.output;
          }
          push(token);
          continue;
        }
        if (prev && (prev.type === "bracket" || prev.type === "paren") && opts.regex === true) {
          token.output = value;
          push(token);
          continue;
        }
        if (state.index === state.start || prev.type === "slash" || prev.type === "dot") {
          if (prev.type === "dot") {
            state.output += NO_DOT_SLASH;
            prev.output += NO_DOT_SLASH;
          } else if (opts.dot === true) {
            state.output += NO_DOTS_SLASH;
            prev.output += NO_DOTS_SLASH;
          } else {
            state.output += nodot;
            prev.output += nodot;
          }
          if (peek() !== "*") {
            state.output += ONE_CHAR;
            prev.output += ONE_CHAR;
          }
        }
        push(token);
      }
      while (state.brackets > 0) {
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
        state.output = utils2.escapeLast(state.output, "[");
        decrement("brackets");
      }
      while (state.parens > 0) {
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", ")"));
        state.output = utils2.escapeLast(state.output, "(");
        decrement("parens");
      }
      while (state.braces > 0) {
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "}"));
        state.output = utils2.escapeLast(state.output, "{");
        decrement("braces");
      }
      if (opts.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) {
        push({ type: "maybe_slash", value: "", output: `${SLASH_LITERAL}?` });
      }
      if (state.backtrack === true) {
        state.output = "";
        for (const token of state.tokens) {
          state.output += token.output != null ? token.output : token.value;
          if (token.suffix) {
            state.output += token.suffix;
          }
        }
      }
      return state;
    };
    parse.fastpaths = (input, options) => {
      const opts = { ...options };
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      const len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      input = REPLACEMENTS[input] || input;
      const win32 = utils2.isWindows(options);
      const {
        DOT_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOTS,
        NO_DOTS_SLASH,
        STAR,
        START_ANCHOR
      } = constants.globChars(win32);
      const nodot = opts.dot ? NO_DOTS : NO_DOT;
      const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
      const capture = opts.capture ? "" : "?:";
      const state = { negated: false, prefix: "" };
      let star = opts.bash === true ? ".*?" : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      const globstar = (opts2) => {
        if (opts2.noglobstar === true) return star;
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const create = (str) => {
        switch (str) {
          case "*":
            return `${nodot}${ONE_CHAR}${star}`;
          case ".*":
            return `${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*.*":
            return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*/*":
            return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;
          case "**":
            return nodot + globstar(opts);
          case "**/*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;
          case "**/*.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "**/.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;
          default: {
            const match = /^(.*?)\.(\w+)$/.exec(str);
            if (!match) return;
            const source2 = create(match[1]);
            if (!source2) return;
            return source2 + DOT_LITERAL + match[2];
          }
        }
      };
      const output = utils2.removePrefix(input, state);
      let source = create(output);
      if (source && opts.strictSlashes !== true) {
        source += `${SLASH_LITERAL}?`;
      }
      return source;
    };
    module2.exports = parse;
  }
});

// packages/playwright/bundles/expect/node_modules/picomatch/lib/picomatch.js
var require_picomatch = __commonJS({
  "packages/playwright/bundles/expect/node_modules/picomatch/lib/picomatch.js"(exports2, module2) {
    "use strict";
    var path = require("path");
    var scan = require_scan();
    var parse = require_parse();
    var utils2 = require_utils2();
    var constants = require_constants2();
    var isObject = (val) => val && typeof val === "object" && !Array.isArray(val);
    var picomatch = (glob, options, returnState = false) => {
      if (Array.isArray(glob)) {
        const fns = glob.map((input) => picomatch(input, options, returnState));
        const arrayMatcher = (str) => {
          for (const isMatch of fns) {
            const state2 = isMatch(str);
            if (state2) return state2;
          }
          return false;
        };
        return arrayMatcher;
      }
      const isState = isObject(glob) && glob.tokens && glob.input;
      if (glob === "" || typeof glob !== "string" && !isState) {
        throw new TypeError("Expected pattern to be a non-empty string");
      }
      const opts = options || {};
      const posix = utils2.isWindows(options);
      const regex = isState ? picomatch.compileRe(glob, options) : picomatch.makeRe(glob, options, false, true);
      const state = regex.state;
      delete regex.state;
      let isIgnored = () => false;
      if (opts.ignore) {
        const ignoreOpts = { ...options, ignore: null, onMatch: null, onResult: null };
        isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
      }
      const matcher = (input, returnObject = false) => {
        const { isMatch, match, output } = picomatch.test(input, regex, options, { glob, posix });
        const result = { glob, state, regex, posix, input, output, match, isMatch };
        if (typeof opts.onResult === "function") {
          opts.onResult(result);
        }
        if (isMatch === false) {
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (isIgnored(input)) {
          if (typeof opts.onIgnore === "function") {
            opts.onIgnore(result);
          }
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (typeof opts.onMatch === "function") {
          opts.onMatch(result);
        }
        return returnObject ? result : true;
      };
      if (returnState) {
        matcher.state = state;
      }
      return matcher;
    };
    picomatch.test = (input, regex, options, { glob, posix } = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected input to be a string");
      }
      if (input === "") {
        return { isMatch: false, output: "" };
      }
      const opts = options || {};
      const format = opts.format || (posix ? utils2.toPosixSlashes : null);
      let match = input === glob;
      let output = match && format ? format(input) : input;
      if (match === false) {
        output = format ? format(input) : input;
        match = output === glob;
      }
      if (match === false || opts.capture === true) {
        if (opts.matchBase === true || opts.basename === true) {
          match = picomatch.matchBase(input, regex, options, posix);
        } else {
          match = regex.exec(output);
        }
      }
      return { isMatch: Boolean(match), match, output };
    };
    picomatch.matchBase = (input, glob, options, posix = utils2.isWindows(options)) => {
      const regex = glob instanceof RegExp ? glob : picomatch.makeRe(glob, options);
      return regex.test(path.basename(input));
    };
    picomatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
    picomatch.parse = (pattern, options) => {
      if (Array.isArray(pattern)) return pattern.map((p) => picomatch.parse(p, options));
      return parse(pattern, { ...options, fastpaths: false });
    };
    picomatch.scan = (input, options) => scan(input, options);
    picomatch.compileRe = (state, options, returnOutput = false, returnState = false) => {
      if (returnOutput === true) {
        return state.output;
      }
      const opts = options || {};
      const prepend = opts.contains ? "" : "^";
      const append = opts.contains ? "" : "$";
      let source = `${prepend}(?:${state.output})${append}`;
      if (state && state.negated === true) {
        source = `^(?!${source}).*$`;
      }
      const regex = picomatch.toRegex(source, options);
      if (returnState === true) {
        regex.state = state;
      }
      return regex;
    };
    picomatch.makeRe = (input, options = {}, returnOutput = false, returnState = false) => {
      if (!input || typeof input !== "string") {
        throw new TypeError("Expected a non-empty string");
      }
      let parsed = { negated: false, fastpaths: true };
      if (options.fastpaths !== false && (input[0] === "." || input[0] === "*")) {
        parsed.output = parse.fastpaths(input, options);
      }
      if (!parsed.output) {
        parsed = parse(input, options);
      }
      return picomatch.compileRe(parsed, options, returnOutput, returnState);
    };
    picomatch.toRegex = (source, options) => {
      try {
        const opts = options || {};
        return new RegExp(source, opts.flags || (opts.nocase ? "i" : ""));
      } catch (err) {
        if (options && options.debug === true) throw err;
        return /$^/;
      }
    };
    picomatch.constants = constants;
    module2.exports = picomatch;
  }
});

// packages/playwright/bundles/expect/node_modules/picomatch/index.js
var require_picomatch2 = __commonJS({
  "packages/playwright/bundles/expect/node_modules/picomatch/index.js"(exports2, module2) {
    "use strict";
    module2.exports = require_picomatch();
  }
});

// packages/playwright/bundles/expect/node_modules/jest-util/build/globsToMatcher.js
var require_globsToMatcher = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-util/build/globsToMatcher.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = globsToMatcher;
    function _picomatch() {
      const data = _interopRequireDefault(require_picomatch2());
      _picomatch = function() {
        return data;
      };
      return data;
    }
    var _replacePathSepForGlob = _interopRequireDefault(
      require_replacePathSepForGlob()
    );
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var globsToMatchersMap = /* @__PURE__ */ new Map();
    var picomatchOptions = {
      dot: true
    };
    function globsToMatcher(globs) {
      if (globs.length === 0) {
        return () => false;
      }
      const matchers3 = globs.map((glob) => {
        if (!globsToMatchersMap.has(glob)) {
          const isMatch = (0, _picomatch().default)(glob, picomatchOptions, true);
          const matcher = {
            isMatch,
            // Matchers that are negated have different behavior than matchers that
            // are not negated, so we need to store this information ahead of time.
            negated: isMatch.state.negated || !!isMatch.state.negatedExtglob
          };
          globsToMatchersMap.set(glob, matcher);
        }
        return globsToMatchersMap.get(glob);
      });
      return (path) => {
        const replacedPath = (0, _replacePathSepForGlob.default)(path);
        let kept = void 0;
        let negatives = 0;
        for (let i = 0; i < matchers3.length; i++) {
          const { isMatch, negated } = matchers3[i];
          if (negated) {
            negatives++;
          }
          const matched = isMatch(replacedPath);
          if (!matched && negated) {
            kept = false;
          } else if (matched && !negated) {
            kept = true;
          }
        }
        return negatives === matchers3.length ? kept !== false : !!kept;
      };
    }
  }
});

// packages/playwright/bundles/expect/node_modules/jest-util/build/pluralize.js
var require_pluralize = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-util/build/pluralize.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = pluralize3;
    function pluralize3(word, count, ending = "s") {
      return `${count} ${word}${count === 1 ? "" : ending}`;
    }
  }
});

// packages/playwright/bundles/expect/node_modules/jest-util/build/formatTime.js
var require_formatTime = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-util/build/formatTime.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = formatTime;
    function formatTime(time, prefixPower = -3, padLeftLength = 0) {
      const prefixes = ["n", "\u03BC", "m", ""];
      const prefixIndex = Math.max(
        0,
        Math.min(
          Math.trunc(prefixPower / 3) + prefixes.length - 1,
          prefixes.length - 1
        )
      );
      return `${String(time).padStart(padLeftLength)} ${prefixes[prefixIndex]}s`;
    }
  }
});

// packages/playwright/bundles/expect/node_modules/jest-util/build/tryRealpath.js
var require_tryRealpath = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-util/build/tryRealpath.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = tryRealpath;
    function _gracefulFs() {
      const data = require_graceful_fs();
      _gracefulFs = function() {
        return data;
      };
      return data;
    }
    function tryRealpath(path) {
      try {
        path = _gracefulFs().realpathSync.native(path);
      } catch (error) {
        if (error.code !== "ENOENT" && error.code !== "EISDIR") {
          throw error;
        }
      }
      return path;
    }
  }
});

// packages/playwright/bundles/expect/node_modules/jest-util/build/requireOrImportModule.js
var require_requireOrImportModule = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-util/build/requireOrImportModule.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = requireOrImportModule;
    function _path() {
      const data = require("path");
      _path = function() {
        return data;
      };
      return data;
    }
    function _url() {
      const data = require("url");
      _url = function() {
        return data;
      };
      return data;
    }
    var _interopRequireDefault = _interopRequireDefault2(
      require_interopRequireDefault()
    );
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    async function requireOrImportModule(filePath, applyInteropRequireDefault = true) {
      if (!(0, _path().isAbsolute)(filePath) && filePath[0] === ".") {
        throw new Error(
          `Jest: requireOrImportModule path must be absolute, was "${filePath}"`
        );
      }
      try {
        const requiredModule = require(filePath);
        if (!applyInteropRequireDefault) {
          return requiredModule;
        }
        return (0, _interopRequireDefault.default)(requiredModule).default;
      } catch (error) {
        if (error.code === "ERR_REQUIRE_ESM") {
          try {
            const moduleUrl = (0, _url().pathToFileURL)(filePath);
            const importedModule = await import(moduleUrl.href);
            if (!applyInteropRequireDefault) {
              return importedModule;
            }
            if (!importedModule.default) {
              throw new Error(
                `Jest: Failed to load ESM at ${filePath} - did you use a default export?`
              );
            }
            return importedModule.default;
          } catch (innerError) {
            if (innerError.message === "Not supported") {
              throw new Error(
                `Jest: Your version of Node does not support dynamic import - please enable it or use a .cjs file extension for file ${filePath}`
              );
            }
            throw innerError;
          }
        } else {
          throw error;
        }
      }
    }
  }
});

// packages/playwright/bundles/expect/node_modules/jest-util/build/invariant.js
var require_invariant = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-util/build/invariant.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = invariant;
    function invariant(condition, message = "") {
      if (!condition) {
        throw new Error(message);
      }
    }
  }
});

// packages/playwright/bundles/expect/node_modules/jest-util/build/isNonNullable.js
var require_isNonNullable = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-util/build/isNonNullable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = isNonNullable;
    function isNonNullable(value) {
      return value != null;
    }
  }
});

// packages/playwright/bundles/expect/node_modules/jest-util/build/index.js
var require_build7 = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-util/build/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "ErrorWithStack", {
      enumerable: true,
      get: function() {
        return _ErrorWithStack.default;
      }
    });
    Object.defineProperty(exports2, "clearLine", {
      enumerable: true,
      get: function() {
        return _clearLine.default;
      }
    });
    Object.defineProperty(exports2, "convertDescriptorToString", {
      enumerable: true,
      get: function() {
        return _convertDescriptorToString.default;
      }
    });
    Object.defineProperty(exports2, "createDirectory", {
      enumerable: true,
      get: function() {
        return _createDirectory.default;
      }
    });
    Object.defineProperty(exports2, "deepCyclicCopy", {
      enumerable: true,
      get: function() {
        return _deepCyclicCopy.default;
      }
    });
    Object.defineProperty(exports2, "formatTime", {
      enumerable: true,
      get: function() {
        return _formatTime.default;
      }
    });
    Object.defineProperty(exports2, "globsToMatcher", {
      enumerable: true,
      get: function() {
        return _globsToMatcher.default;
      }
    });
    Object.defineProperty(exports2, "installCommonGlobals", {
      enumerable: true,
      get: function() {
        return _installCommonGlobals.default;
      }
    });
    Object.defineProperty(exports2, "interopRequireDefault", {
      enumerable: true,
      get: function() {
        return _interopRequireDefault.default;
      }
    });
    Object.defineProperty(exports2, "invariant", {
      enumerable: true,
      get: function() {
        return _invariant.default;
      }
    });
    Object.defineProperty(exports2, "isInteractive", {
      enumerable: true,
      get: function() {
        return _isInteractive.default;
      }
    });
    Object.defineProperty(exports2, "isNonNullable", {
      enumerable: true,
      get: function() {
        return _isNonNullable.default;
      }
    });
    Object.defineProperty(exports2, "isPromise", {
      enumerable: true,
      get: function() {
        return _isPromise.default;
      }
    });
    Object.defineProperty(exports2, "pluralize", {
      enumerable: true,
      get: function() {
        return _pluralize.default;
      }
    });
    exports2.preRunMessage = void 0;
    Object.defineProperty(exports2, "replacePathSepForGlob", {
      enumerable: true,
      get: function() {
        return _replacePathSepForGlob.default;
      }
    });
    Object.defineProperty(exports2, "requireOrImportModule", {
      enumerable: true,
      get: function() {
        return _requireOrImportModule.default;
      }
    });
    Object.defineProperty(exports2, "setGlobal", {
      enumerable: true,
      get: function() {
        return _setGlobal.default;
      }
    });
    exports2.specialChars = void 0;
    Object.defineProperty(exports2, "testPathPatternToRegExp", {
      enumerable: true,
      get: function() {
        return _testPathPatternToRegExp.default;
      }
    });
    Object.defineProperty(exports2, "tryRealpath", {
      enumerable: true,
      get: function() {
        return _tryRealpath.default;
      }
    });
    var preRunMessage = _interopRequireWildcard(require_preRunMessage());
    exports2.preRunMessage = preRunMessage;
    var specialChars = _interopRequireWildcard(require_specialChars());
    exports2.specialChars = specialChars;
    var _clearLine = _interopRequireDefault2(require_clearLine());
    var _createDirectory = _interopRequireDefault2(require_createDirectory());
    var _ErrorWithStack = _interopRequireDefault2(require_ErrorWithStack());
    var _installCommonGlobals = _interopRequireDefault2(
      require_installCommonGlobals()
    );
    var _interopRequireDefault = _interopRequireDefault2(
      require_interopRequireDefault()
    );
    var _isInteractive = _interopRequireDefault2(require_isInteractive());
    var _isPromise = _interopRequireDefault2(require_isPromise());
    var _setGlobal = _interopRequireDefault2(require_setGlobal());
    var _deepCyclicCopy = _interopRequireDefault2(require_deepCyclicCopy());
    var _convertDescriptorToString = _interopRequireDefault2(
      require_convertDescriptorToString()
    );
    var _replacePathSepForGlob = _interopRequireDefault2(
      require_replacePathSepForGlob()
    );
    var _testPathPatternToRegExp = _interopRequireDefault2(
      require_testPathPatternToRegExp()
    );
    var _globsToMatcher = _interopRequireDefault2(require_globsToMatcher());
    var _pluralize = _interopRequireDefault2(require_pluralize());
    var _formatTime = _interopRequireDefault2(require_formatTime());
    var _tryRealpath = _interopRequireDefault2(require_tryRealpath());
    var _requireOrImportModule = _interopRequireDefault2(
      require_requireOrImportModule()
    );
    var _invariant = _interopRequireDefault2(require_invariant());
    var _isNonNullable = _interopRequireDefault2(require_isNonNullable());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function") return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
  }
});

// packages/playwright/bundles/expect/node_modules/js-tokens/index.js
var require_js_tokens = __commonJS({
  "packages/playwright/bundles/expect/node_modules/js-tokens/index.js"(exports2) {
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyus]{1,6}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g;
    exports2.matchToToken = function(match) {
      var token = { type: "invalid", value: match[0], closed: void 0 };
      if (match[1]) token.type = "string", token.closed = !!(match[3] || match[4]);
      else if (match[5]) token.type = "comment";
      else if (match[6]) token.type = "comment", token.closed = !!match[7];
      else if (match[8]) token.type = "regex";
      else if (match[9]) token.type = "number";
      else if (match[10]) token.type = "name";
      else if (match[11]) token.type = "punctuator";
      else if (match[12]) token.type = "whitespace";
      return token;
    };
  }
});

// packages/playwright/bundles/expect/node_modules/@babel/helper-validator-identifier/lib/identifier.js
var require_identifier = __commonJS({
  "packages/playwright/bundles/expect/node_modules/@babel/helper-validator-identifier/lib/identifier.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.isIdentifierChar = isIdentifierChar;
    exports2.isIdentifierName = isIdentifierName;
    exports2.isIdentifierStart = isIdentifierStart;
    var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
    var nonASCIIidentifierChars = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\u30FB\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F\uFF65";
    var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
    var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
    nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;
    var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 4026, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 757, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191];
    var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 81, 2, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 9, 5351, 0, 7, 14, 13835, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 983, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
    function isInAstralSet(code, set) {
      let pos = 65536;
      for (let i = 0, length = set.length; i < length; i += 2) {
        pos += set[i];
        if (pos > code) return false;
        pos += set[i + 1];
        if (pos >= code) return true;
      }
      return false;
    }
    function isIdentifierStart(code) {
      if (code < 65) return code === 36;
      if (code <= 90) return true;
      if (code < 97) return code === 95;
      if (code <= 122) return true;
      if (code <= 65535) {
        return code >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code));
      }
      return isInAstralSet(code, astralIdentifierStartCodes);
    }
    function isIdentifierChar(code) {
      if (code < 48) return code === 36;
      if (code < 58) return true;
      if (code < 65) return false;
      if (code <= 90) return true;
      if (code < 97) return code === 95;
      if (code <= 122) return true;
      if (code <= 65535) {
        return code >= 170 && nonASCIIidentifier.test(String.fromCharCode(code));
      }
      return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
    }
    function isIdentifierName(name) {
      let isFirst = true;
      for (let i = 0; i < name.length; i++) {
        let cp = name.charCodeAt(i);
        if ((cp & 64512) === 55296 && i + 1 < name.length) {
          const trail = name.charCodeAt(++i);
          if ((trail & 64512) === 56320) {
            cp = 65536 + ((cp & 1023) << 10) + (trail & 1023);
          }
        }
        if (isFirst) {
          isFirst = false;
          if (!isIdentifierStart(cp)) {
            return false;
          }
        } else if (!isIdentifierChar(cp)) {
          return false;
        }
      }
      return !isFirst;
    }
  }
});

// packages/playwright/bundles/expect/node_modules/@babel/helper-validator-identifier/lib/keyword.js
var require_keyword = __commonJS({
  "packages/playwright/bundles/expect/node_modules/@babel/helper-validator-identifier/lib/keyword.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.isKeyword = isKeyword;
    exports2.isReservedWord = isReservedWord;
    exports2.isStrictBindOnlyReservedWord = isStrictBindOnlyReservedWord;
    exports2.isStrictBindReservedWord = isStrictBindReservedWord;
    exports2.isStrictReservedWord = isStrictReservedWord;
    var reservedWords = {
      keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
      strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
      strictBind: ["eval", "arguments"]
    };
    var keywords = new Set(reservedWords.keyword);
    var reservedWordsStrictSet = new Set(reservedWords.strict);
    var reservedWordsStrictBindSet = new Set(reservedWords.strictBind);
    function isReservedWord(word, inModule) {
      return inModule && word === "await" || word === "enum";
    }
    function isStrictReservedWord(word, inModule) {
      return isReservedWord(word, inModule) || reservedWordsStrictSet.has(word);
    }
    function isStrictBindOnlyReservedWord(word) {
      return reservedWordsStrictBindSet.has(word);
    }
    function isStrictBindReservedWord(word, inModule) {
      return isStrictReservedWord(word, inModule) || isStrictBindOnlyReservedWord(word);
    }
    function isKeyword(word) {
      return keywords.has(word);
    }
  }
});

// packages/playwright/bundles/expect/node_modules/@babel/helper-validator-identifier/lib/index.js
var require_lib = __commonJS({
  "packages/playwright/bundles/expect/node_modules/@babel/helper-validator-identifier/lib/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "isIdentifierChar", {
      enumerable: true,
      get: function() {
        return _identifier.isIdentifierChar;
      }
    });
    Object.defineProperty(exports2, "isIdentifierName", {
      enumerable: true,
      get: function() {
        return _identifier.isIdentifierName;
      }
    });
    Object.defineProperty(exports2, "isIdentifierStart", {
      enumerable: true,
      get: function() {
        return _identifier.isIdentifierStart;
      }
    });
    Object.defineProperty(exports2, "isKeyword", {
      enumerable: true,
      get: function() {
        return _keyword.isKeyword;
      }
    });
    Object.defineProperty(exports2, "isReservedWord", {
      enumerable: true,
      get: function() {
        return _keyword.isReservedWord;
      }
    });
    Object.defineProperty(exports2, "isStrictBindOnlyReservedWord", {
      enumerable: true,
      get: function() {
        return _keyword.isStrictBindOnlyReservedWord;
      }
    });
    Object.defineProperty(exports2, "isStrictBindReservedWord", {
      enumerable: true,
      get: function() {
        return _keyword.isStrictBindReservedWord;
      }
    });
    Object.defineProperty(exports2, "isStrictReservedWord", {
      enumerable: true,
      get: function() {
        return _keyword.isStrictReservedWord;
      }
    });
    var _identifier = require_identifier();
    var _keyword = require_keyword();
  }
});

// packages/playwright/bundles/expect/node_modules/picocolors/picocolors.js
var require_picocolors = __commonJS({
  "packages/playwright/bundles/expect/node_modules/picocolors/picocolors.js"(exports2, module2) {
    var argv = process.argv || [];
    var env = process.env;
    var isColorSupported = !("NO_COLOR" in env || argv.includes("--no-color")) && ("FORCE_COLOR" in env || argv.includes("--color") || process.platform === "win32" || require != null && require("tty").isatty(1) && env.TERM !== "dumb" || "CI" in env);
    var formatter = (open, close, replace = open) => (input) => {
      let string = "" + input;
      let index = string.indexOf(close, open.length);
      return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
    var replaceClose = (string, close, replace, index) => {
      let result = "";
      let cursor = 0;
      do {
        result += string.substring(cursor, index) + replace;
        cursor = index + close.length;
        index = string.indexOf(close, cursor);
      } while (~index);
      return result + string.substring(cursor);
    };
    var createColors = (enabled = isColorSupported) => {
      let init = enabled ? formatter : () => String;
      return {
        isColorSupported: enabled,
        reset: init("\x1B[0m", "\x1B[0m"),
        bold: init("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"),
        dim: init("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"),
        italic: init("\x1B[3m", "\x1B[23m"),
        underline: init("\x1B[4m", "\x1B[24m"),
        inverse: init("\x1B[7m", "\x1B[27m"),
        hidden: init("\x1B[8m", "\x1B[28m"),
        strikethrough: init("\x1B[9m", "\x1B[29m"),
        black: init("\x1B[30m", "\x1B[39m"),
        red: init("\x1B[31m", "\x1B[39m"),
        green: init("\x1B[32m", "\x1B[39m"),
        yellow: init("\x1B[33m", "\x1B[39m"),
        blue: init("\x1B[34m", "\x1B[39m"),
        magenta: init("\x1B[35m", "\x1B[39m"),
        cyan: init("\x1B[36m", "\x1B[39m"),
        white: init("\x1B[37m", "\x1B[39m"),
        gray: init("\x1B[90m", "\x1B[39m"),
        bgBlack: init("\x1B[40m", "\x1B[49m"),
        bgRed: init("\x1B[41m", "\x1B[49m"),
        bgGreen: init("\x1B[42m", "\x1B[49m"),
        bgYellow: init("\x1B[43m", "\x1B[49m"),
        bgBlue: init("\x1B[44m", "\x1B[49m"),
        bgMagenta: init("\x1B[45m", "\x1B[49m"),
        bgCyan: init("\x1B[46m", "\x1B[49m"),
        bgWhite: init("\x1B[47m", "\x1B[49m"),
        blackBright: init("\x1B[90m", "\x1B[39m"),
        redBright: init("\x1B[91m", "\x1B[39m"),
        greenBright: init("\x1B[92m", "\x1B[39m"),
        yellowBright: init("\x1B[93m", "\x1B[39m"),
        blueBright: init("\x1B[94m", "\x1B[39m"),
        magentaBright: init("\x1B[95m", "\x1B[39m"),
        cyanBright: init("\x1B[96m", "\x1B[39m"),
        whiteBright: init("\x1B[97m", "\x1B[39m"),
        bgBlackBright: init("\x1B[100m", "\x1B[49m"),
        bgRedBright: init("\x1B[101m", "\x1B[49m"),
        bgGreenBright: init("\x1B[102m", "\x1B[49m"),
        bgYellowBright: init("\x1B[103m", "\x1B[49m"),
        bgBlueBright: init("\x1B[104m", "\x1B[49m"),
        bgMagentaBright: init("\x1B[105m", "\x1B[49m"),
        bgCyanBright: init("\x1B[106m", "\x1B[49m"),
        bgWhiteBright: init("\x1B[107m", "\x1B[49m")
      };
    };
    module2.exports = createColors();
    module2.exports.createColors = createColors;
  }
});

// packages/playwright/bundles/expect/node_modules/@babel/highlight/node_modules/escape-string-regexp/index.js
var require_escape_string_regexp = __commonJS({
  "packages/playwright/bundles/expect/node_modules/@babel/highlight/node_modules/escape-string-regexp/index.js"(exports2, module2) {
    "use strict";
    var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
    module2.exports = function(str) {
      if (typeof str !== "string") {
        throw new TypeError("Expected a string");
      }
      return str.replace(matchOperatorsRe, "\\$&");
    };
  }
});

// packages/playwright/bundles/expect/node_modules/@babel/highlight/node_modules/color-name/index.js
var require_color_name2 = __commonJS({
  "packages/playwright/bundles/expect/node_modules/@babel/highlight/node_modules/color-name/index.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
  }
});

// packages/playwright/bundles/expect/node_modules/@babel/highlight/node_modules/color-convert/conversions.js
var require_conversions2 = __commonJS({
  "packages/playwright/bundles/expect/node_modules/@babel/highlight/node_modules/color-convert/conversions.js"(exports2, module2) {
    var cssKeywords = require_color_name2();
    var reverseKeywords = {};
    for (key in cssKeywords) {
      if (cssKeywords.hasOwnProperty(key)) {
        reverseKeywords[cssKeywords[key]] = key;
      }
    }
    var key;
    var convert = module2.exports = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    for (model in convert) {
      if (convert.hasOwnProperty(model)) {
        if (!("channels" in convert[model])) {
          throw new Error("missing channels property: " + model);
        }
        if (!("labels" in convert[model])) {
          throw new Error("missing channel labels property: " + model);
        }
        if (convert[model].labels.length !== convert[model].channels) {
          throw new Error("channel and label counts mismatch: " + model);
        }
        channels = convert[model].channels;
        labels = convert[model].labels;
        delete convert[model].channels;
        delete convert[model].labels;
        Object.defineProperty(convert[model], "channels", { value: channels });
        Object.defineProperty(convert[model], "labels", { value: labels });
      }
    }
    var channels;
    var labels;
    var model;
    convert.rgb.hsl = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var min = Math.min(r, g, b);
      var max = Math.max(r, g, b);
      var delta = max - min;
      var h;
      var s;
      var l;
      if (max === min) {
        h = 0;
      } else if (r === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r) / delta;
      } else if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      l = (min + max) / 2;
      if (max === min) {
        s = 0;
      } else if (l <= 0.5) {
        s = delta / (max + min);
      } else {
        s = delta / (2 - max - min);
      }
      return [h, s * 100, l * 100];
    };
    convert.rgb.hsv = function(rgb) {
      var rdif;
      var gdif;
      var bdif;
      var h;
      var s;
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var v = Math.max(r, g, b);
      var diff2 = v - Math.min(r, g, b);
      var diffc = function(c) {
        return (v - c) / 6 / diff2 + 1 / 2;
      };
      if (diff2 === 0) {
        h = s = 0;
      } else {
        s = diff2 / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r === v) {
          h = bdif - gdif;
        } else if (g === v) {
          h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
          h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }
      return [
        h * 360,
        s * 100,
        v * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      var r = rgb[0];
      var g = rgb[1];
      var b = rgb[2];
      var h = convert.rgb.hsl(rgb)[0];
      var w = 1 / 255 * Math.min(r, Math.min(g, b));
      b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
      return [h, w * 100, b * 100];
    };
    convert.rgb.cmyk = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var c;
      var m;
      var y;
      var k;
      k = Math.min(1 - r, 1 - g, 1 - b);
      c = (1 - r - k) / (1 - k) || 0;
      m = (1 - g - k) / (1 - k) || 0;
      y = (1 - b - k) / (1 - k) || 0;
      return [c * 100, m * 100, y * 100, k * 100];
    };
    function comparativeDistance(x, y) {
      return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2);
    }
    convert.rgb.keyword = function(rgb) {
      var reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      var currentClosestDistance = Infinity;
      var currentClosestKeyword;
      for (var keyword in cssKeywords) {
        if (cssKeywords.hasOwnProperty(keyword)) {
          var value = cssKeywords[keyword];
          var distance = comparativeDistance(rgb, value);
          if (distance < currentClosestDistance) {
            currentClosestDistance = distance;
            currentClosestKeyword = keyword;
          }
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
      g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
      b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
      var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
      var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
      var z = r * 0.0193 + g * 0.1192 + b * 0.9505;
      return [x * 100, y * 100, z * 100];
    };
    convert.rgb.lab = function(rgb) {
      var xyz = convert.rgb.xyz(rgb);
      var x = xyz[0];
      var y = xyz[1];
      var z = xyz[2];
      var l;
      var a;
      var b;
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
      l = 116 * y - 16;
      a = 500 * (x - y);
      b = 200 * (y - z);
      return [l, a, b];
    };
    convert.hsl.rgb = function(hsl) {
      var h = hsl[0] / 360;
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var t1;
      var t2;
      var t3;
      var rgb;
      var val;
      if (s === 0) {
        val = l * 255;
        return [val, val, val];
      }
      if (l < 0.5) {
        t2 = l * (1 + s);
      } else {
        t2 = l + s - l * s;
      }
      t1 = 2 * l - t2;
      rgb = [0, 0, 0];
      for (var i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i] = val * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      var h = hsl[0];
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var smin = s;
      var lmin = Math.max(l, 0.01);
      var sv;
      var v;
      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      v = (l + s) / 2;
      sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
      return [h, sv * 100, v * 100];
    };
    convert.hsv.rgb = function(hsv) {
      var h = hsv[0] / 60;
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var hi = Math.floor(h) % 6;
      var f = h - Math.floor(h);
      var p = 255 * v * (1 - s);
      var q = 255 * v * (1 - s * f);
      var t = 255 * v * (1 - s * (1 - f));
      v *= 255;
      switch (hi) {
        case 0:
          return [v, t, p];
        case 1:
          return [q, v, p];
        case 2:
          return [p, v, t];
        case 3:
          return [p, q, v];
        case 4:
          return [t, p, v];
        case 5:
          return [v, p, q];
      }
    };
    convert.hsv.hsl = function(hsv) {
      var h = hsv[0];
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var vmin = Math.max(v, 0.01);
      var lmin;
      var sl;
      var l;
      l = (2 - s) * v;
      lmin = (2 - s) * vmin;
      sl = s * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l /= 2;
      return [h, sl * 100, l * 100];
    };
    convert.hwb.rgb = function(hwb) {
      var h = hwb[0] / 360;
      var wh = hwb[1] / 100;
      var bl = hwb[2] / 100;
      var ratio = wh + bl;
      var i;
      var v;
      var f;
      var n;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      i = Math.floor(6 * h);
      v = 1 - bl;
      f = 6 * h - i;
      if ((i & 1) !== 0) {
        f = 1 - f;
      }
      n = wh + f * (v - wh);
      var r;
      var g;
      var b;
      switch (i) {
        default:
        case 6:
        case 0:
          r = v;
          g = n;
          b = wh;
          break;
        case 1:
          r = n;
          g = v;
          b = wh;
          break;
        case 2:
          r = wh;
          g = v;
          b = n;
          break;
        case 3:
          r = wh;
          g = n;
          b = v;
          break;
        case 4:
          r = n;
          g = wh;
          b = v;
          break;
        case 5:
          r = v;
          g = wh;
          b = n;
          break;
      }
      return [r * 255, g * 255, b * 255];
    };
    convert.cmyk.rgb = function(cmyk) {
      var c = cmyk[0] / 100;
      var m = cmyk[1] / 100;
      var y = cmyk[2] / 100;
      var k = cmyk[3] / 100;
      var r;
      var g;
      var b;
      r = 1 - Math.min(1, c * (1 - k) + k);
      g = 1 - Math.min(1, m * (1 - k) + k);
      b = 1 - Math.min(1, y * (1 - k) + k);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.rgb = function(xyz) {
      var x = xyz[0] / 100;
      var y = xyz[1] / 100;
      var z = xyz[2] / 100;
      var r;
      var g;
      var b;
      r = x * 3.2406 + y * -1.5372 + z * -0.4986;
      g = x * -0.9689 + y * 1.8758 + z * 0.0415;
      b = x * 0.0557 + y * -0.204 + z * 1.057;
      r = r > 31308e-7 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : r * 12.92;
      g = g > 31308e-7 ? 1.055 * Math.pow(g, 1 / 2.4) - 0.055 : g * 12.92;
      b = b > 31308e-7 ? 1.055 * Math.pow(b, 1 / 2.4) - 0.055 : b * 12.92;
      r = Math.min(Math.max(0, r), 1);
      g = Math.min(Math.max(0, g), 1);
      b = Math.min(Math.max(0, b), 1);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.lab = function(xyz) {
      var x = xyz[0];
      var y = xyz[1];
      var z = xyz[2];
      var l;
      var a;
      var b;
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
      l = 116 * y - 16;
      a = 500 * (x - y);
      b = 200 * (y - z);
      return [l, a, b];
    };
    convert.lab.xyz = function(lab) {
      var l = lab[0];
      var a = lab[1];
      var b = lab[2];
      var x;
      var y;
      var z;
      y = (l + 16) / 116;
      x = a / 500 + y;
      z = y - b / 200;
      var y2 = Math.pow(y, 3);
      var x2 = Math.pow(x, 3);
      var z2 = Math.pow(z, 3);
      y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
      x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
      z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
      x *= 95.047;
      y *= 100;
      z *= 108.883;
      return [x, y, z];
    };
    convert.lab.lch = function(lab) {
      var l = lab[0];
      var a = lab[1];
      var b = lab[2];
      var hr;
      var h;
      var c;
      hr = Math.atan2(b, a);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      c = Math.sqrt(a * a + b * b);
      return [l, c, h];
    };
    convert.lch.lab = function(lch) {
      var l = lch[0];
      var c = lch[1];
      var h = lch[2];
      var a;
      var b;
      var hr;
      hr = h / 360 * 2 * Math.PI;
      a = c * Math.cos(hr);
      b = c * Math.sin(hr);
      return [l, a, b];
    };
    convert.rgb.ansi16 = function(args) {
      var r = args[0];
      var g = args[1];
      var b = args[2];
      var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2];
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args) {
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };
    convert.rgb.ansi256 = function(args) {
      var r = args[0];
      var g = args[1];
      var b = args[2];
      if (r === g && g === b) {
        if (r < 8) {
          return 16;
        }
        if (r > 248) {
          return 231;
        }
        return Math.round((r - 8) / 247 * 24) + 232;
      }
      var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args) {
      var color = args % 10;
      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [color, color, color];
      }
      var mult = (~~(args > 50) + 1) * 0.5;
      var r = (color & 1) * mult * 255;
      var g = (color >> 1 & 1) * mult * 255;
      var b = (color >> 2 & 1) * mult * 255;
      return [r, g, b];
    };
    convert.ansi256.rgb = function(args) {
      if (args >= 232) {
        var c = (args - 232) * 10 + 8;
        return [c, c, c];
      }
      args -= 16;
      var rem;
      var r = Math.floor(args / 36) / 5 * 255;
      var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
      var b = rem % 6 / 5 * 255;
      return [r, g, b];
    };
    convert.rgb.hex = function(args) {
      var integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
      var string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.hex.rgb = function(args) {
      var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [0, 0, 0];
      }
      var colorString = match[0];
      if (match[0].length === 3) {
        colorString = colorString.split("").map(function(char) {
          return char + char;
        }).join("");
      }
      var integer = parseInt(colorString, 16);
      var r = integer >> 16 & 255;
      var g = integer >> 8 & 255;
      var b = integer & 255;
      return [r, g, b];
    };
    convert.rgb.hcg = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var max = Math.max(Math.max(r, g), b);
      var min = Math.min(Math.min(r, g), b);
      var chroma = max - min;
      var grayscale;
      var hue;
      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r) {
        hue = (g - b) / chroma % 6;
      } else if (max === g) {
        hue = 2 + (b - r) / chroma;
      } else {
        hue = 4 + (r - g) / chroma + 4;
      }
      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };
    convert.hsl.hcg = function(hsl) {
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var c = 1;
      var f = 0;
      if (l < 0.5) {
        c = 2 * s * l;
      } else {
        c = 2 * s * (1 - l);
      }
      if (c < 1) {
        f = (l - 0.5 * c) / (1 - c);
      }
      return [hsl[0], c * 100, f * 100];
    };
    convert.hsv.hcg = function(hsv) {
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var c = s * v;
      var f = 0;
      if (c < 1) {
        f = (v - c) / (1 - c);
      }
      return [hsv[0], c * 100, f * 100];
    };
    convert.hcg.rgb = function(hcg) {
      var h = hcg[0] / 360;
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      if (c === 0) {
        return [g * 255, g * 255, g * 255];
      }
      var pure = [0, 0, 0];
      var hi = h % 1 * 6;
      var v = hi % 1;
      var w = 1 - v;
      var mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
      }
      mg = (1 - c) * g;
      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      var v = c + g * (1 - c);
      var f = 0;
      if (v > 0) {
        f = c / v;
      }
      return [hcg[0], f * 100, v * 100];
    };
    convert.hcg.hsl = function(hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      var l = g * (1 - c) + 0.5 * c;
      var s = 0;
      if (l > 0 && l < 0.5) {
        s = c / (2 * l);
      } else if (l >= 0.5 && l < 1) {
        s = c / (2 * (1 - l));
      }
      return [hcg[0], s * 100, l * 100];
    };
    convert.hcg.hwb = function(hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      var v = c + g * (1 - c);
      return [hcg[0], (v - c) * 100, (1 - v) * 100];
    };
    convert.hwb.hcg = function(hwb) {
      var w = hwb[1] / 100;
      var b = hwb[2] / 100;
      var v = 1 - b;
      var c = v - w;
      var g = 0;
      if (c < 1) {
        g = (v - c) / (1 - c);
      }
      return [hwb[0], c * 100, g * 100];
    };
    convert.apple.rgb = function(apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };
    convert.rgb.apple = function(rgb) {
      return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
    };
    convert.gray.rgb = function(args) {
      return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
    };
    convert.gray.hsl = convert.gray.hsv = function(args) {
      return [0, 0, args[0]];
    };
    convert.gray.hwb = function(gray) {
      return [0, 100, gray[0]];
    };
    convert.gray.cmyk = function(gray) {
      return [0, 0, 0, gray[0]];
    };
    convert.gray.lab = function(gray) {
      return [gray[0], 0, 0];
    };
    convert.gray.hex = function(gray) {
      var val = Math.round(gray[0] / 100 * 255) & 255;
      var integer = (val << 16) + (val << 8) + val;
      var string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.rgb.gray = function(rgb) {
      var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [val / 255 * 100];
    };
  }
});

// packages/playwright/bundles/expect/node_modules/@babel/highlight/node_modules/color-convert/route.js
var require_route2 = __commonJS({
  "packages/playwright/bundles/expect/node_modules/@babel/highlight/node_modules/color-convert/route.js"(exports2, module2) {
    var conversions = require_conversions2();
    function buildGraph() {
      var graph = {};
      var models = Object.keys(conversions);
      for (var len = models.length, i = 0; i < len; i++) {
        graph[models[i]] = {
          // http://jsperf.com/1-vs-infinity
          // micro-opt, but this is simple.
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    function deriveBFS(fromModel) {
      var graph = buildGraph();
      var queue = [fromModel];
      graph[fromModel].distance = 0;
      while (queue.length) {
        var current = queue.pop();
        var adjacents = Object.keys(conversions[current]);
        for (var len = adjacents.length, i = 0; i < len; i++) {
          var adjacent = adjacents[i];
          var node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    function link(from, to) {
      return function(args) {
        return to(from(args));
      };
    }
    function wrapConversion(toModel, graph) {
      var path = [graph[toModel].parent, toModel];
      var fn = conversions[graph[toModel].parent][toModel];
      var cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path;
      return fn;
    }
    module2.exports = function(fromModel) {
      var graph = deriveBFS(fromModel);
      var conversion = {};
      var models = Object.keys(graph);
      for (var len = models.length, i = 0; i < len; i++) {
        var toModel = models[i];
        var node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
  }
});

// packages/playwright/bundles/expect/node_modules/@babel/highlight/node_modules/color-convert/index.js
var require_color_convert2 = __commonJS({
  "packages/playwright/bundles/expect/node_modules/@babel/highlight/node_modules/color-convert/index.js"(exports2, module2) {
    var conversions = require_conversions2();
    var route = require_route2();
    var convert = {};
    var models = Object.keys(conversions);
    function wrapRaw(fn) {
      var wrappedFn = function(args) {
        if (args === void 0 || args === null) {
          return args;
        }
        if (arguments.length > 1) {
          args = Array.prototype.slice.call(arguments);
        }
        return fn(args);
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    function wrapRounded(fn) {
      var wrappedFn = function(args) {
        if (args === void 0 || args === null) {
          return args;
        }
        if (arguments.length > 1) {
          args = Array.prototype.slice.call(arguments);
        }
        var result = fn(args);
        if (typeof result === "object") {
          for (var len = result.length, i = 0; i < len; i++) {
            result[i] = Math.round(result[i]);
          }
        }
        return result;
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    models.forEach(function(fromModel) {
      convert[fromModel] = {};
      Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
      Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
      var routes = route(fromModel);
      var routeModels = Object.keys(routes);
      routeModels.forEach(function(toModel) {
        var fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
      });
    });
    module2.exports = convert;
  }
});

// packages/playwright/bundles/expect/node_modules/@babel/highlight/node_modules/ansi-styles/index.js
var require_ansi_styles3 = __commonJS({
  "packages/playwright/bundles/expect/node_modules/@babel/highlight/node_modules/ansi-styles/index.js"(exports2, module2) {
    "use strict";
    var colorConvert = require_color_convert2();
    var wrapAnsi16 = (fn, offset) => function() {
      const code = fn.apply(colorConvert, arguments);
      return `\x1B[${code + offset}m`;
    };
    var wrapAnsi256 = (fn, offset) => function() {
      const code = fn.apply(colorConvert, arguments);
      return `\x1B[${38 + offset};5;${code}m`;
    };
    var wrapAnsi16m = (fn, offset) => function() {
      const rgb = fn.apply(colorConvert, arguments);
      return `\x1B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
    };
    function assembleStyles() {
      const codes = /* @__PURE__ */ new Map();
      const styles = {
        modifier: {
          reset: [0, 0],
          // 21 isn't widely supported and 22 does the same thing
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          gray: [90, 39],
          // Bright color
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          // Bright color
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      styles.color.grey = styles.color.gray;
      for (const groupName of Object.keys(styles)) {
        const group = styles[groupName];
        for (const styleName of Object.keys(group)) {
          const style = group[styleName];
          styles[styleName] = {
            open: `\x1B[${style[0]}m`,
            close: `\x1B[${style[1]}m`
          };
          group[styleName] = styles[styleName];
          codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles, groupName, {
          value: group,
          enumerable: false
        });
        Object.defineProperty(styles, "codes", {
          value: codes,
          enumerable: false
        });
      }
      const ansi2ansi = (n) => n;
      const rgb2rgb = (r, g, b) => [r, g, b];
      styles.color.close = "\x1B[39m";
      styles.bgColor.close = "\x1B[49m";
      styles.color.ansi = {
        ansi: wrapAnsi16(ansi2ansi, 0)
      };
      styles.color.ansi256 = {
        ansi256: wrapAnsi256(ansi2ansi, 0)
      };
      styles.color.ansi16m = {
        rgb: wrapAnsi16m(rgb2rgb, 0)
      };
      styles.bgColor.ansi = {
        ansi: wrapAnsi16(ansi2ansi, 10)
      };
      styles.bgColor.ansi256 = {
        ansi256: wrapAnsi256(ansi2ansi, 10)
      };
      styles.bgColor.ansi16m = {
        rgb: wrapAnsi16m(rgb2rgb, 10)
      };
      for (let key of Object.keys(colorConvert)) {
        if (typeof colorConvert[key] !== "object") {
          continue;
        }
        const suite = colorConvert[key];
        if (key === "ansi16") {
          key = "ansi";
        }
        if ("ansi16" in suite) {
          styles.color.ansi[key] = wrapAnsi16(suite.ansi16, 0);
          styles.bgColor.ansi[key] = wrapAnsi16(suite.ansi16, 10);
        }
        if ("ansi256" in suite) {
          styles.color.ansi256[key] = wrapAnsi256(suite.ansi256, 0);
          styles.bgColor.ansi256[key] = wrapAnsi256(suite.ansi256, 10);
        }
        if ("rgb" in suite) {
          styles.color.ansi16m[key] = wrapAnsi16m(suite.rgb, 0);
          styles.bgColor.ansi16m[key] = wrapAnsi16m(suite.rgb, 10);
        }
      }
      return styles;
    }
    Object.defineProperty(module2, "exports", {
      enumerable: true,
      get: assembleStyles
    });
  }
});

// packages/playwright/bundles/expect/node_modules/@babel/highlight/node_modules/has-flag/index.js
var require_has_flag2 = __commonJS({
  "packages/playwright/bundles/expect/node_modules/@babel/highlight/node_modules/has-flag/index.js"(exports2, module2) {
    "use strict";
    module2.exports = (flag, argv) => {
      argv = argv || process.argv;
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const pos = argv.indexOf(prefix + flag);
      const terminatorPos = argv.indexOf("--");
      return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
    };
  }
});

// packages/playwright/bundles/expect/node_modules/@babel/highlight/node_modules/supports-color/index.js
var require_supports_color2 = __commonJS({
  "packages/playwright/bundles/expect/node_modules/@babel/highlight/node_modules/supports-color/index.js"(exports2, module2) {
    "use strict";
    var os = require("os");
    var hasFlag = require_has_flag2();
    var env = process.env;
    var forceColor;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false")) {
      forceColor = false;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = true;
    }
    if ("FORCE_COLOR" in env) {
      forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor(stream) {
      if (forceColor === false) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (stream && !stream.isTTY && forceColor !== true) {
        return 0;
      }
      const min = forceColor ? 1 : 0;
      if (process.platform === "win32") {
        const osRelease = os.release().split(".");
        if (Number(process.versions.node.split(".")[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      if (env.TERM === "dumb") {
        return min;
      }
      return min;
    }
    function getSupportLevel(stream) {
      const level = supportsColor(stream);
      return translateLevel(level);
    }
    module2.exports = {
      supportsColor: getSupportLevel,
      stdout: getSupportLevel(process.stdout),
      stderr: getSupportLevel(process.stderr)
    };
  }
});

// packages/playwright/bundles/expect/node_modules/@babel/highlight/node_modules/chalk/templates.js
var require_templates2 = __commonJS({
  "packages/playwright/bundles/expect/node_modules/@babel/highlight/node_modules/chalk/templates.js"(exports2, module2) {
    "use strict";
    var TEMPLATE_REGEX = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
    var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
    var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
    var ESCAPE_REGEX = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi;
    var ESCAPES = /* @__PURE__ */ new Map([
      ["n", "\n"],
      ["r", "\r"],
      ["t", "	"],
      ["b", "\b"],
      ["f", "\f"],
      ["v", "\v"],
      ["0", "\0"],
      ["\\", "\\"],
      ["e", "\x1B"],
      ["a", "\x07"]
    ]);
    function unescape(c) {
      if (c[0] === "u" && c.length === 5 || c[0] === "x" && c.length === 3) {
        return String.fromCharCode(parseInt(c.slice(1), 16));
      }
      return ESCAPES.get(c) || c;
    }
    function parseArguments(name, args) {
      const results = [];
      const chunks = args.trim().split(/\s*,\s*/g);
      let matches;
      for (const chunk of chunks) {
        if (!isNaN(chunk)) {
          results.push(Number(chunk));
        } else if (matches = chunk.match(STRING_REGEX)) {
          results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, chr) => escape ? unescape(escape) : chr));
        } else {
          throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
        }
      }
      return results;
    }
    function parseStyle(style) {
      STYLE_REGEX.lastIndex = 0;
      const results = [];
      let matches;
      while ((matches = STYLE_REGEX.exec(style)) !== null) {
        const name = matches[1];
        if (matches[2]) {
          const args = parseArguments(name, matches[2]);
          results.push([name].concat(args));
        } else {
          results.push([name]);
        }
      }
      return results;
    }
    function buildStyle(chalk, styles) {
      const enabled = {};
      for (const layer of styles) {
        for (const style of layer.styles) {
          enabled[style[0]] = layer.inverse ? null : style.slice(1);
        }
      }
      let current = chalk;
      for (const styleName of Object.keys(enabled)) {
        if (Array.isArray(enabled[styleName])) {
          if (!(styleName in current)) {
            throw new Error(`Unknown Chalk style: ${styleName}`);
          }
          if (enabled[styleName].length > 0) {
            current = current[styleName].apply(current, enabled[styleName]);
          } else {
            current = current[styleName];
          }
        }
      }
      return current;
    }
    module2.exports = (chalk, tmp) => {
      const styles = [];
      const chunks = [];
      let chunk = [];
      tmp.replace(TEMPLATE_REGEX, (m, escapeChar, inverse, style, close, chr) => {
        if (escapeChar) {
          chunk.push(unescape(escapeChar));
        } else if (style) {
          const str = chunk.join("");
          chunk = [];
          chunks.push(styles.length === 0 ? str : buildStyle(chalk, styles)(str));
          styles.push({ inverse, styles: parseStyle(style) });
        } else if (close) {
          if (styles.length === 0) {
            throw new Error("Found extraneous } in Chalk template literal");
          }
          chunks.push(buildStyle(chalk, styles)(chunk.join("")));
          chunk = [];
          styles.pop();
        } else {
          chunk.push(chr);
        }
      });
      chunks.push(chunk.join(""));
      if (styles.length > 0) {
        const errMsg = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? "" : "s"} (\`}\`)`;
        throw new Error(errMsg);
      }
      return chunks.join("");
    };
  }
});

// packages/playwright/bundles/expect/node_modules/@babel/highlight/node_modules/chalk/index.js
var require_chalk = __commonJS({
  "packages/playwright/bundles/expect/node_modules/@babel/highlight/node_modules/chalk/index.js"(exports2, module2) {
    "use strict";
    var escapeStringRegexp = require_escape_string_regexp();
    var ansiStyles = require_ansi_styles3();
    var stdoutColor = require_supports_color2().stdout;
    var template = require_templates2();
    var isSimpleWindowsTerm = process.platform === "win32" && !(process.env.TERM || "").toLowerCase().startsWith("xterm");
    var levelMapping = ["ansi", "ansi", "ansi256", "ansi16m"];
    var skipModels = /* @__PURE__ */ new Set(["gray"]);
    var styles = /* @__PURE__ */ Object.create(null);
    function applyOptions(obj, options) {
      options = options || {};
      const scLevel = stdoutColor ? stdoutColor.level : 0;
      obj.level = options.level === void 0 ? scLevel : options.level;
      obj.enabled = "enabled" in options ? options.enabled : obj.level > 0;
    }
    function Chalk(options) {
      if (!this || !(this instanceof Chalk) || this.template) {
        const chalk = {};
        applyOptions(chalk, options);
        chalk.template = function() {
          const args = [].slice.call(arguments);
          return chalkTag.apply(null, [chalk.template].concat(args));
        };
        Object.setPrototypeOf(chalk, Chalk.prototype);
        Object.setPrototypeOf(chalk.template, chalk);
        chalk.template.constructor = Chalk;
        return chalk.template;
      }
      applyOptions(this, options);
    }
    if (isSimpleWindowsTerm) {
      ansiStyles.blue.open = "\x1B[94m";
    }
    for (const key of Object.keys(ansiStyles)) {
      ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), "g");
      styles[key] = {
        get() {
          const codes = ansiStyles[key];
          return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, key);
        }
      };
    }
    styles.visible = {
      get() {
        return build.call(this, this._styles || [], true, "visible");
      }
    };
    ansiStyles.color.closeRe = new RegExp(escapeStringRegexp(ansiStyles.color.close), "g");
    for (const model of Object.keys(ansiStyles.color.ansi)) {
      if (skipModels.has(model)) {
        continue;
      }
      styles[model] = {
        get() {
          const level = this.level;
          return function() {
            const open = ansiStyles.color[levelMapping[level]][model].apply(null, arguments);
            const codes = {
              open,
              close: ansiStyles.color.close,
              closeRe: ansiStyles.color.closeRe
            };
            return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
          };
        }
      };
    }
    ansiStyles.bgColor.closeRe = new RegExp(escapeStringRegexp(ansiStyles.bgColor.close), "g");
    for (const model of Object.keys(ansiStyles.bgColor.ansi)) {
      if (skipModels.has(model)) {
        continue;
      }
      const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
      styles[bgModel] = {
        get() {
          const level = this.level;
          return function() {
            const open = ansiStyles.bgColor[levelMapping[level]][model].apply(null, arguments);
            const codes = {
              open,
              close: ansiStyles.bgColor.close,
              closeRe: ansiStyles.bgColor.closeRe
            };
            return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
          };
        }
      };
    }
    var proto = Object.defineProperties(() => {
    }, styles);
    function build(_styles, _empty, key) {
      const builder = function() {
        return applyStyle.apply(builder, arguments);
      };
      builder._styles = _styles;
      builder._empty = _empty;
      const self = this;
      Object.defineProperty(builder, "level", {
        enumerable: true,
        get() {
          return self.level;
        },
        set(level) {
          self.level = level;
        }
      });
      Object.defineProperty(builder, "enabled", {
        enumerable: true,
        get() {
          return self.enabled;
        },
        set(enabled) {
          self.enabled = enabled;
        }
      });
      builder.hasGrey = this.hasGrey || key === "gray" || key === "grey";
      builder.__proto__ = proto;
      return builder;
    }
    function applyStyle() {
      const args = arguments;
      const argsLen = args.length;
      let str = String(arguments[0]);
      if (argsLen === 0) {
        return "";
      }
      if (argsLen > 1) {
        for (let a = 1; a < argsLen; a++) {
          str += " " + args[a];
        }
      }
      if (!this.enabled || this.level <= 0 || !str) {
        return this._empty ? "" : str;
      }
      const originalDim = ansiStyles.dim.open;
      if (isSimpleWindowsTerm && this.hasGrey) {
        ansiStyles.dim.open = "";
      }
      for (const code of this._styles.slice().reverse()) {
        str = code.open + str.replace(code.closeRe, code.open) + code.close;
        str = str.replace(/\r?\n/g, `${code.close}$&${code.open}`);
      }
      ansiStyles.dim.open = originalDim;
      return str;
    }
    function chalkTag(chalk, strings) {
      if (!Array.isArray(strings)) {
        return [].slice.call(arguments, 1).join(" ");
      }
      const args = [].slice.call(arguments, 2);
      const parts = [strings.raw[0]];
      for (let i = 1; i < strings.length; i++) {
        parts.push(String(args[i - 1]).replace(/[{}\\]/g, "\\$&"));
        parts.push(String(strings.raw[i]));
      }
      return template(chalk, parts.join(""));
    }
    Object.defineProperties(Chalk.prototype, styles);
    module2.exports = Chalk();
    module2.exports.supportsColor = stdoutColor;
    module2.exports.default = module2.exports;
  }
});

// packages/playwright/bundles/expect/node_modules/@babel/highlight/lib/index.js
var require_lib2 = __commonJS({
  "packages/playwright/bundles/expect/node_modules/@babel/highlight/lib/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = highlight;
    exports2.shouldHighlight = shouldHighlight;
    var _jsTokens = require_js_tokens();
    var _helperValidatorIdentifier = require_lib();
    var _picocolors = _interopRequireWildcard(require_picocolors(), true);
    function _getRequireWildcardCache(e) {
      if ("function" != typeof WeakMap) return null;
      var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(e2) {
        return e2 ? t : r;
      })(e);
    }
    function _interopRequireWildcard(e, r) {
      if (!r && e && e.__esModule) return e;
      if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
      var t = _getRequireWildcardCache(r);
      if (t && t.has(e)) return t.get(e);
      var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
        var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
        i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
      }
      return n.default = e, t && t.set(e, n), n;
    }
    var colors = typeof process === "object" && (process.env.FORCE_COLOR === "0" || process.env.FORCE_COLOR === "false") ? (0, _picocolors.createColors)(false) : _picocolors.default;
    var compose = (f, g) => (v) => f(g(v));
    var sometimesKeywords = /* @__PURE__ */ new Set(["as", "async", "from", "get", "of", "set"]);
    function getDefs(colors2) {
      return {
        keyword: colors2.cyan,
        capitalized: colors2.yellow,
        jsxIdentifier: colors2.yellow,
        punctuator: colors2.yellow,
        number: colors2.magenta,
        string: colors2.green,
        regex: colors2.magenta,
        comment: colors2.gray,
        invalid: compose(compose(colors2.white, colors2.bgRed), colors2.bold)
      };
    }
    var NEWLINE = /\r\n|[\n\r\u2028\u2029]/;
    var BRACKET = /^[()[\]{}]$/;
    var tokenize;
    {
      const JSX_TAG = /^[a-z][\w-]*$/i;
      const getTokenType = function(token, offset, text) {
        if (token.type === "name") {
          if ((0, _helperValidatorIdentifier.isKeyword)(token.value) || (0, _helperValidatorIdentifier.isStrictReservedWord)(token.value, true) || sometimesKeywords.has(token.value)) {
            return "keyword";
          }
          if (JSX_TAG.test(token.value) && (text[offset - 1] === "<" || text.slice(offset - 2, offset) === "</")) {
            return "jsxIdentifier";
          }
          if (token.value[0] !== token.value[0].toLowerCase()) {
            return "capitalized";
          }
        }
        if (token.type === "punctuator" && BRACKET.test(token.value)) {
          return "bracket";
        }
        if (token.type === "invalid" && (token.value === "@" || token.value === "#")) {
          return "punctuator";
        }
        return token.type;
      };
      tokenize = function* (text) {
        let match;
        while (match = _jsTokens.default.exec(text)) {
          const token = _jsTokens.matchToToken(match);
          yield {
            type: getTokenType(token, match.index, text),
            value: token.value
          };
        }
      };
    }
    function highlightTokens(defs, text) {
      let highlighted = "";
      for (const {
        type,
        value
      } of tokenize(text)) {
        const colorize = defs[type];
        if (colorize) {
          highlighted += value.split(NEWLINE).map((str) => colorize(str)).join("\n");
        } else {
          highlighted += value;
        }
      }
      return highlighted;
    }
    function shouldHighlight(options) {
      return colors.isColorSupported || options.forceColor;
    }
    var pcWithForcedColor = void 0;
    function getColors(forceColor) {
      if (forceColor) {
        var _pcWithForcedColor;
        (_pcWithForcedColor = pcWithForcedColor) != null ? _pcWithForcedColor : pcWithForcedColor = (0, _picocolors.createColors)(true);
        return pcWithForcedColor;
      }
      return colors;
    }
    function highlight(code, options = {}) {
      if (code !== "" && shouldHighlight(options)) {
        const defs = getDefs(getColors(options.forceColor));
        return highlightTokens(defs, code);
      } else {
        return code;
      }
    }
    {
      let chalk, chalkWithForcedColor;
      exports2.getChalk = ({
        forceColor
      }) => {
        var _chalk;
        (_chalk = chalk) != null ? _chalk : chalk = require_chalk();
        if (forceColor) {
          var _chalkWithForcedColor;
          (_chalkWithForcedColor = chalkWithForcedColor) != null ? _chalkWithForcedColor : chalkWithForcedColor = new chalk.constructor({
            enabled: true,
            level: 1
          });
          return chalkWithForcedColor;
        }
        return chalk;
      };
    }
  }
});

// packages/playwright/bundles/expect/node_modules/@babel/code-frame/lib/index.js
var require_lib3 = __commonJS({
  "packages/playwright/bundles/expect/node_modules/@babel/code-frame/lib/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.codeFrameColumns = codeFrameColumns;
    exports2.default = _default;
    var _highlight = require_lib2();
    var _picocolors = _interopRequireWildcard(require_picocolors(), true);
    function _getRequireWildcardCache(e) {
      if ("function" != typeof WeakMap) return null;
      var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(e2) {
        return e2 ? t : r;
      })(e);
    }
    function _interopRequireWildcard(e, r) {
      if (!r && e && e.__esModule) return e;
      if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
      var t = _getRequireWildcardCache(r);
      if (t && t.has(e)) return t.get(e);
      var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
        var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
        i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
      }
      return n.default = e, t && t.set(e, n), n;
    }
    var colors = typeof process === "object" && (process.env.FORCE_COLOR === "0" || process.env.FORCE_COLOR === "false") ? (0, _picocolors.createColors)(false) : _picocolors.default;
    var compose = (f, g) => (v) => f(g(v));
    var pcWithForcedColor = void 0;
    function getColors(forceColor) {
      if (forceColor) {
        var _pcWithForcedColor;
        (_pcWithForcedColor = pcWithForcedColor) != null ? _pcWithForcedColor : pcWithForcedColor = (0, _picocolors.createColors)(true);
        return pcWithForcedColor;
      }
      return colors;
    }
    var deprecationWarningShown = false;
    function getDefs(colors2) {
      return {
        gutter: colors2.gray,
        marker: compose(colors2.red, colors2.bold),
        message: compose(colors2.red, colors2.bold)
      };
    }
    var NEWLINE = /\r\n|[\n\r\u2028\u2029]/;
    function getMarkerLines(loc, source, opts) {
      const startLoc = Object.assign({
        column: 0,
        line: -1
      }, loc.start);
      const endLoc = Object.assign({}, startLoc, loc.end);
      const {
        linesAbove = 2,
        linesBelow = 3
      } = opts || {};
      const startLine = startLoc.line;
      const startColumn = startLoc.column;
      const endLine = endLoc.line;
      const endColumn = endLoc.column;
      let start = Math.max(startLine - (linesAbove + 1), 0);
      let end = Math.min(source.length, endLine + linesBelow);
      if (startLine === -1) {
        start = 0;
      }
      if (endLine === -1) {
        end = source.length;
      }
      const lineDiff = endLine - startLine;
      const markerLines = {};
      if (lineDiff) {
        for (let i = 0; i <= lineDiff; i++) {
          const lineNumber = i + startLine;
          if (!startColumn) {
            markerLines[lineNumber] = true;
          } else if (i === 0) {
            const sourceLength = source[lineNumber - 1].length;
            markerLines[lineNumber] = [startColumn, sourceLength - startColumn + 1];
          } else if (i === lineDiff) {
            markerLines[lineNumber] = [0, endColumn];
          } else {
            const sourceLength = source[lineNumber - i].length;
            markerLines[lineNumber] = [0, sourceLength];
          }
        }
      } else {
        if (startColumn === endColumn) {
          if (startColumn) {
            markerLines[startLine] = [startColumn, 0];
          } else {
            markerLines[startLine] = true;
          }
        } else {
          markerLines[startLine] = [startColumn, endColumn - startColumn];
        }
      }
      return {
        start,
        end,
        markerLines
      };
    }
    function codeFrameColumns(rawLines, loc, opts = {}) {
      const highlighted = (opts.highlightCode || opts.forceColor) && (0, _highlight.shouldHighlight)(opts);
      const colors2 = getColors(opts.forceColor);
      const defs = getDefs(colors2);
      const maybeHighlight = (fmt, string) => {
        return highlighted ? fmt(string) : string;
      };
      const lines = rawLines.split(NEWLINE);
      const {
        start,
        end,
        markerLines
      } = getMarkerLines(loc, lines, opts);
      const hasColumns = loc.start && typeof loc.start.column === "number";
      const numberMaxWidth = String(end).length;
      const highlightedLines = highlighted ? (0, _highlight.default)(rawLines, opts) : rawLines;
      let frame = highlightedLines.split(NEWLINE, end).slice(start, end).map((line, index) => {
        const number = start + 1 + index;
        const paddedNumber = ` ${number}`.slice(-numberMaxWidth);
        const gutter = ` ${paddedNumber} |`;
        const hasMarker = markerLines[number];
        const lastMarkerLine = !markerLines[number + 1];
        if (hasMarker) {
          let markerLine = "";
          if (Array.isArray(hasMarker)) {
            const markerSpacing = line.slice(0, Math.max(hasMarker[0] - 1, 0)).replace(/[^\t]/g, " ");
            const numberOfMarkers = hasMarker[1] || 1;
            markerLine = ["\n ", maybeHighlight(defs.gutter, gutter.replace(/\d/g, " ")), " ", markerSpacing, maybeHighlight(defs.marker, "^").repeat(numberOfMarkers)].join("");
            if (lastMarkerLine && opts.message) {
              markerLine += " " + maybeHighlight(defs.message, opts.message);
            }
          }
          return [maybeHighlight(defs.marker, ">"), maybeHighlight(defs.gutter, gutter), line.length > 0 ? ` ${line}` : "", markerLine].join("");
        } else {
          return ` ${maybeHighlight(defs.gutter, gutter)}${line.length > 0 ? ` ${line}` : ""}`;
        }
      }).join("\n");
      if (opts.message && !hasColumns) {
        frame = `${" ".repeat(numberMaxWidth + 1)}${opts.message}
${frame}`;
      }
      if (highlighted) {
        return colors2.reset(frame);
      } else {
        return frame;
      }
    }
    function _default(rawLines, lineNumber, colNumber, opts = {}) {
      if (!deprecationWarningShown) {
        deprecationWarningShown = true;
        const message = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
        if (process.emitWarning) {
          process.emitWarning(message, "DeprecationWarning");
        } else {
          const deprecationError = new Error(message);
          deprecationError.name = "DeprecationWarning";
          console.warn(new Error(message));
        }
      }
      colNumber = Math.max(colNumber, 0);
      const location = {
        start: {
          column: colNumber,
          line: lineNumber
        }
      };
      return codeFrameColumns(rawLines, location, opts);
    }
  }
});

// packages/playwright/bundles/expect/node_modules/braces/lib/utils.js
var require_utils3 = __commonJS({
  "packages/playwright/bundles/expect/node_modules/braces/lib/utils.js"(exports2) {
    "use strict";
    exports2.isInteger = (num) => {
      if (typeof num === "number") {
        return Number.isInteger(num);
      }
      if (typeof num === "string" && num.trim() !== "") {
        return Number.isInteger(Number(num));
      }
      return false;
    };
    exports2.find = (node, type) => node.nodes.find((node2) => node2.type === type);
    exports2.exceedsLimit = (min, max, step = 1, limit) => {
      if (limit === false) return false;
      if (!exports2.isInteger(min) || !exports2.isInteger(max)) return false;
      return (Number(max) - Number(min)) / Number(step) >= limit;
    };
    exports2.escapeNode = (block, n = 0, type) => {
      const node = block.nodes[n];
      if (!node) return;
      if (type && node.type === type || node.type === "open" || node.type === "close") {
        if (node.escaped !== true) {
          node.value = "\\" + node.value;
          node.escaped = true;
        }
      }
    };
    exports2.encloseBrace = (node) => {
      if (node.type !== "brace") return false;
      if (node.commas >> 0 + node.ranges >> 0 === 0) {
        node.invalid = true;
        return true;
      }
      return false;
    };
    exports2.isInvalidBrace = (block) => {
      if (block.type !== "brace") return false;
      if (block.invalid === true || block.dollar) return true;
      if (block.commas >> 0 + block.ranges >> 0 === 0) {
        block.invalid = true;
        return true;
      }
      if (block.open !== true || block.close !== true) {
        block.invalid = true;
        return true;
      }
      return false;
    };
    exports2.isOpenOrClose = (node) => {
      if (node.type === "open" || node.type === "close") {
        return true;
      }
      return node.open === true || node.close === true;
    };
    exports2.reduce = (nodes) => nodes.reduce((acc, node) => {
      if (node.type === "text") acc.push(node.value);
      if (node.type === "range") node.type = "text";
      return acc;
    }, []);
    exports2.flatten = (...args) => {
      const result = [];
      const flat = (arr) => {
        for (let i = 0; i < arr.length; i++) {
          const ele = arr[i];
          if (Array.isArray(ele)) {
            flat(ele);
            continue;
          }
          if (ele !== void 0) {
            result.push(ele);
          }
        }
        return result;
      };
      flat(args);
      return result;
    };
  }
});

// packages/playwright/bundles/expect/node_modules/braces/lib/stringify.js
var require_stringify = __commonJS({
  "packages/playwright/bundles/expect/node_modules/braces/lib/stringify.js"(exports2, module2) {
    "use strict";
    var utils2 = require_utils3();
    module2.exports = (ast, options = {}) => {
      const stringify6 = (node, parent = {}) => {
        const invalidBlock = options.escapeInvalid && utils2.isInvalidBrace(parent);
        const invalidNode = node.invalid === true && options.escapeInvalid === true;
        let output = "";
        if (node.value) {
          if ((invalidBlock || invalidNode) && utils2.isOpenOrClose(node)) {
            return "\\" + node.value;
          }
          return node.value;
        }
        if (node.value) {
          return node.value;
        }
        if (node.nodes) {
          for (const child of node.nodes) {
            output += stringify6(child);
          }
        }
        return output;
      };
      return stringify6(ast);
    };
  }
});

// packages/playwright/bundles/expect/node_modules/is-number/index.js
var require_is_number = __commonJS({
  "packages/playwright/bundles/expect/node_modules/is-number/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function(num) {
      if (typeof num === "number") {
        return num - num === 0;
      }
      if (typeof num === "string" && num.trim() !== "") {
        return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
      }
      return false;
    };
  }
});

// packages/playwright/bundles/expect/node_modules/to-regex-range/index.js
var require_to_regex_range = __commonJS({
  "packages/playwright/bundles/expect/node_modules/to-regex-range/index.js"(exports2, module2) {
    "use strict";
    var isNumber = require_is_number();
    var toRegexRange = (min, max, options) => {
      if (isNumber(min) === false) {
        throw new TypeError("toRegexRange: expected the first argument to be a number");
      }
      if (max === void 0 || min === max) {
        return String(min);
      }
      if (isNumber(max) === false) {
        throw new TypeError("toRegexRange: expected the second argument to be a number.");
      }
      let opts = { relaxZeros: true, ...options };
      if (typeof opts.strictZeros === "boolean") {
        opts.relaxZeros = opts.strictZeros === false;
      }
      let relax = String(opts.relaxZeros);
      let shorthand = String(opts.shorthand);
      let capture = String(opts.capture);
      let wrap = String(opts.wrap);
      let cacheKey = min + ":" + max + "=" + relax + shorthand + capture + wrap;
      if (toRegexRange.cache.hasOwnProperty(cacheKey)) {
        return toRegexRange.cache[cacheKey].result;
      }
      let a = Math.min(min, max);
      let b = Math.max(min, max);
      if (Math.abs(a - b) === 1) {
        let result = min + "|" + max;
        if (opts.capture) {
          return `(${result})`;
        }
        if (opts.wrap === false) {
          return result;
        }
        return `(?:${result})`;
      }
      let isPadded = hasPadding(min) || hasPadding(max);
      let state = { min, max, a, b };
      let positives = [];
      let negatives = [];
      if (isPadded) {
        state.isPadded = isPadded;
        state.maxLen = String(state.max).length;
      }
      if (a < 0) {
        let newMin = b < 0 ? Math.abs(b) : 1;
        negatives = splitToPatterns(newMin, Math.abs(a), state, opts);
        a = state.a = 0;
      }
      if (b >= 0) {
        positives = splitToPatterns(a, b, state, opts);
      }
      state.negatives = negatives;
      state.positives = positives;
      state.result = collatePatterns(negatives, positives, opts);
      if (opts.capture === true) {
        state.result = `(${state.result})`;
      } else if (opts.wrap !== false && positives.length + negatives.length > 1) {
        state.result = `(?:${state.result})`;
      }
      toRegexRange.cache[cacheKey] = state;
      return state.result;
    };
    function collatePatterns(neg, pos, options) {
      let onlyNegative = filterPatterns(neg, pos, "-", false, options) || [];
      let onlyPositive = filterPatterns(pos, neg, "", false, options) || [];
      let intersected = filterPatterns(neg, pos, "-?", true, options) || [];
      let subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
      return subpatterns.join("|");
    }
    function splitToRanges(min, max) {
      let nines = 1;
      let zeros = 1;
      let stop = countNines(min, nines);
      let stops = /* @__PURE__ */ new Set([max]);
      while (min <= stop && stop <= max) {
        stops.add(stop);
        nines += 1;
        stop = countNines(min, nines);
      }
      stop = countZeros(max + 1, zeros) - 1;
      while (min < stop && stop <= max) {
        stops.add(stop);
        zeros += 1;
        stop = countZeros(max + 1, zeros) - 1;
      }
      stops = [...stops];
      stops.sort(compare);
      return stops;
    }
    function rangeToPattern(start, stop, options) {
      if (start === stop) {
        return { pattern: start, count: [], digits: 0 };
      }
      let zipped = zip(start, stop);
      let digits = zipped.length;
      let pattern = "";
      let count = 0;
      for (let i = 0; i < digits; i++) {
        let [startDigit, stopDigit] = zipped[i];
        if (startDigit === stopDigit) {
          pattern += startDigit;
        } else if (startDigit !== "0" || stopDigit !== "9") {
          pattern += toCharacterClass(startDigit, stopDigit, options);
        } else {
          count++;
        }
      }
      if (count) {
        pattern += options.shorthand === true ? "\\d" : "[0-9]";
      }
      return { pattern, count: [count], digits };
    }
    function splitToPatterns(min, max, tok, options) {
      let ranges = splitToRanges(min, max);
      let tokens = [];
      let start = min;
      let prev;
      for (let i = 0; i < ranges.length; i++) {
        let max2 = ranges[i];
        let obj = rangeToPattern(String(start), String(max2), options);
        let zeros = "";
        if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
          if (prev.count.length > 1) {
            prev.count.pop();
          }
          prev.count.push(obj.count[0]);
          prev.string = prev.pattern + toQuantifier(prev.count);
          start = max2 + 1;
          continue;
        }
        if (tok.isPadded) {
          zeros = padZeros(max2, tok, options);
        }
        obj.string = zeros + obj.pattern + toQuantifier(obj.count);
        tokens.push(obj);
        start = max2 + 1;
        prev = obj;
      }
      return tokens;
    }
    function filterPatterns(arr, comparison, prefix, intersection, options) {
      let result = [];
      for (let ele of arr) {
        let { string } = ele;
        if (!intersection && !contains(comparison, "string", string)) {
          result.push(prefix + string);
        }
        if (intersection && contains(comparison, "string", string)) {
          result.push(prefix + string);
        }
      }
      return result;
    }
    function zip(a, b) {
      let arr = [];
      for (let i = 0; i < a.length; i++) arr.push([a[i], b[i]]);
      return arr;
    }
    function compare(a, b) {
      return a > b ? 1 : b > a ? -1 : 0;
    }
    function contains(arr, key, val) {
      return arr.some((ele) => ele[key] === val);
    }
    function countNines(min, len) {
      return Number(String(min).slice(0, -len) + "9".repeat(len));
    }
    function countZeros(integer, zeros) {
      return integer - integer % Math.pow(10, zeros);
    }
    function toQuantifier(digits) {
      let [start = 0, stop = ""] = digits;
      if (stop || start > 1) {
        return `{${start + (stop ? "," + stop : "")}}`;
      }
      return "";
    }
    function toCharacterClass(a, b, options) {
      return `[${a}${b - a === 1 ? "" : "-"}${b}]`;
    }
    function hasPadding(str) {
      return /^-?(0+)\d/.test(str);
    }
    function padZeros(value, tok, options) {
      if (!tok.isPadded) {
        return value;
      }
      let diff2 = Math.abs(tok.maxLen - String(value).length);
      let relax = options.relaxZeros !== false;
      switch (diff2) {
        case 0:
          return "";
        case 1:
          return relax ? "0?" : "0";
        case 2:
          return relax ? "0{0,2}" : "00";
        default: {
          return relax ? `0{0,${diff2}}` : `0{${diff2}}`;
        }
      }
    }
    toRegexRange.cache = {};
    toRegexRange.clearCache = () => toRegexRange.cache = {};
    module2.exports = toRegexRange;
  }
});

// packages/playwright/bundles/expect/node_modules/fill-range/index.js
var require_fill_range = __commonJS({
  "packages/playwright/bundles/expect/node_modules/fill-range/index.js"(exports2, module2) {
    "use strict";
    var util = require("util");
    var toRegexRange = require_to_regex_range();
    var isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    var transform = (toNumber) => {
      return (value) => toNumber === true ? Number(value) : String(value);
    };
    var isValidValue = (value) => {
      return typeof value === "number" || typeof value === "string" && value !== "";
    };
    var isNumber = (num) => Number.isInteger(+num);
    var zeros = (input) => {
      let value = `${input}`;
      let index = -1;
      if (value[0] === "-") value = value.slice(1);
      if (value === "0") return false;
      while (value[++index] === "0") ;
      return index > 0;
    };
    var stringify6 = (start, end, options) => {
      if (typeof start === "string" || typeof end === "string") {
        return true;
      }
      return options.stringify === true;
    };
    var pad = (input, maxLength, toNumber) => {
      if (maxLength > 0) {
        let dash = input[0] === "-" ? "-" : "";
        if (dash) input = input.slice(1);
        input = dash + input.padStart(dash ? maxLength - 1 : maxLength, "0");
      }
      if (toNumber === false) {
        return String(input);
      }
      return input;
    };
    var toMaxLen = (input, maxLength) => {
      let negative = input[0] === "-" ? "-" : "";
      if (negative) {
        input = input.slice(1);
        maxLength--;
      }
      while (input.length < maxLength) input = "0" + input;
      return negative ? "-" + input : input;
    };
    var toSequence = (parts, options, maxLen) => {
      parts.negatives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
      parts.positives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
      let prefix = options.capture ? "" : "?:";
      let positives = "";
      let negatives = "";
      let result;
      if (parts.positives.length) {
        positives = parts.positives.map((v) => toMaxLen(String(v), maxLen)).join("|");
      }
      if (parts.negatives.length) {
        negatives = `-(${prefix}${parts.negatives.map((v) => toMaxLen(String(v), maxLen)).join("|")})`;
      }
      if (positives && negatives) {
        result = `${positives}|${negatives}`;
      } else {
        result = positives || negatives;
      }
      if (options.wrap) {
        return `(${prefix}${result})`;
      }
      return result;
    };
    var toRange = (a, b, isNumbers, options) => {
      if (isNumbers) {
        return toRegexRange(a, b, { wrap: false, ...options });
      }
      let start = String.fromCharCode(a);
      if (a === b) return start;
      let stop = String.fromCharCode(b);
      return `[${start}-${stop}]`;
    };
    var toRegex = (start, end, options) => {
      if (Array.isArray(start)) {
        let wrap = options.wrap === true;
        let prefix = options.capture ? "" : "?:";
        return wrap ? `(${prefix}${start.join("|")})` : start.join("|");
      }
      return toRegexRange(start, end, options);
    };
    var rangeError = (...args) => {
      return new RangeError("Invalid range arguments: " + util.inspect(...args));
    };
    var invalidRange = (start, end, options) => {
      if (options.strictRanges === true) throw rangeError([start, end]);
      return [];
    };
    var invalidStep = (step, options) => {
      if (options.strictRanges === true) {
        throw new TypeError(`Expected step "${step}" to be a number`);
      }
      return [];
    };
    var fillNumbers = (start, end, step = 1, options = {}) => {
      let a = Number(start);
      let b = Number(end);
      if (!Number.isInteger(a) || !Number.isInteger(b)) {
        if (options.strictRanges === true) throw rangeError([start, end]);
        return [];
      }
      if (a === 0) a = 0;
      if (b === 0) b = 0;
      let descending = a > b;
      let startString = String(start);
      let endString = String(end);
      let stepString = String(step);
      step = Math.max(Math.abs(step), 1);
      let padded = zeros(startString) || zeros(endString) || zeros(stepString);
      let maxLen = padded ? Math.max(startString.length, endString.length, stepString.length) : 0;
      let toNumber = padded === false && stringify6(start, end, options) === false;
      let format = options.transform || transform(toNumber);
      if (options.toRegex && step === 1) {
        return toRange(toMaxLen(start, maxLen), toMaxLen(end, maxLen), true, options);
      }
      let parts = { negatives: [], positives: [] };
      let push = (num) => parts[num < 0 ? "negatives" : "positives"].push(Math.abs(num));
      let range = [];
      let index = 0;
      while (descending ? a >= b : a <= b) {
        if (options.toRegex === true && step > 1) {
          push(a);
        } else {
          range.push(pad(format(a, index), maxLen, toNumber));
        }
        a = descending ? a - step : a + step;
        index++;
      }
      if (options.toRegex === true) {
        return step > 1 ? toSequence(parts, options, maxLen) : toRegex(range, null, { wrap: false, ...options });
      }
      return range;
    };
    var fillLetters = (start, end, step = 1, options = {}) => {
      if (!isNumber(start) && start.length > 1 || !isNumber(end) && end.length > 1) {
        return invalidRange(start, end, options);
      }
      let format = options.transform || ((val) => String.fromCharCode(val));
      let a = `${start}`.charCodeAt(0);
      let b = `${end}`.charCodeAt(0);
      let descending = a > b;
      let min = Math.min(a, b);
      let max = Math.max(a, b);
      if (options.toRegex && step === 1) {
        return toRange(min, max, false, options);
      }
      let range = [];
      let index = 0;
      while (descending ? a >= b : a <= b) {
        range.push(format(a, index));
        a = descending ? a - step : a + step;
        index++;
      }
      if (options.toRegex === true) {
        return toRegex(range, null, { wrap: false, options });
      }
      return range;
    };
    var fill = (start, end, step, options = {}) => {
      if (end == null && isValidValue(start)) {
        return [start];
      }
      if (!isValidValue(start) || !isValidValue(end)) {
        return invalidRange(start, end, options);
      }
      if (typeof step === "function") {
        return fill(start, end, 1, { transform: step });
      }
      if (isObject(step)) {
        return fill(start, end, 0, step);
      }
      let opts = { ...options };
      if (opts.capture === true) opts.wrap = true;
      step = step || opts.step || 1;
      if (!isNumber(step)) {
        if (step != null && !isObject(step)) return invalidStep(step, opts);
        return fill(start, end, 1, step);
      }
      if (isNumber(start) && isNumber(end)) {
        return fillNumbers(start, end, step, opts);
      }
      return fillLetters(start, end, Math.max(Math.abs(step), 1), opts);
    };
    module2.exports = fill;
  }
});

// packages/playwright/bundles/expect/node_modules/braces/lib/compile.js
var require_compile = __commonJS({
  "packages/playwright/bundles/expect/node_modules/braces/lib/compile.js"(exports2, module2) {
    "use strict";
    var fill = require_fill_range();
    var utils2 = require_utils3();
    var compile = (ast, options = {}) => {
      const walk = (node, parent = {}) => {
        const invalidBlock = utils2.isInvalidBrace(parent);
        const invalidNode = node.invalid === true && options.escapeInvalid === true;
        const invalid = invalidBlock === true || invalidNode === true;
        const prefix = options.escapeInvalid === true ? "\\" : "";
        let output = "";
        if (node.isOpen === true) {
          return prefix + node.value;
        }
        if (node.isClose === true) {
          console.log("node.isClose", prefix, node.value);
          return prefix + node.value;
        }
        if (node.type === "open") {
          return invalid ? prefix + node.value : "(";
        }
        if (node.type === "close") {
          return invalid ? prefix + node.value : ")";
        }
        if (node.type === "comma") {
          return node.prev.type === "comma" ? "" : invalid ? node.value : "|";
        }
        if (node.value) {
          return node.value;
        }
        if (node.nodes && node.ranges > 0) {
          const args = utils2.reduce(node.nodes);
          const range = fill(...args, { ...options, wrap: false, toRegex: true, strictZeros: true });
          if (range.length !== 0) {
            return args.length > 1 && range.length > 1 ? `(${range})` : range;
          }
        }
        if (node.nodes) {
          for (const child of node.nodes) {
            output += walk(child, node);
          }
        }
        return output;
      };
      return walk(ast);
    };
    module2.exports = compile;
  }
});

// packages/playwright/bundles/expect/node_modules/braces/lib/expand.js
var require_expand = __commonJS({
  "packages/playwright/bundles/expect/node_modules/braces/lib/expand.js"(exports2, module2) {
    "use strict";
    var fill = require_fill_range();
    var stringify6 = require_stringify();
    var utils2 = require_utils3();
    var append = (queue = "", stash = "", enclose = false) => {
      const result = [];
      queue = [].concat(queue);
      stash = [].concat(stash);
      if (!stash.length) return queue;
      if (!queue.length) {
        return enclose ? utils2.flatten(stash).map((ele) => `{${ele}}`) : stash;
      }
      for (const item of queue) {
        if (Array.isArray(item)) {
          for (const value of item) {
            result.push(append(value, stash, enclose));
          }
        } else {
          for (let ele of stash) {
            if (enclose === true && typeof ele === "string") ele = `{${ele}}`;
            result.push(Array.isArray(ele) ? append(item, ele, enclose) : item + ele);
          }
        }
      }
      return utils2.flatten(result);
    };
    var expand = (ast, options = {}) => {
      const rangeLimit = options.rangeLimit === void 0 ? 1e3 : options.rangeLimit;
      const walk = (node, parent = {}) => {
        node.queue = [];
        let p = parent;
        let q = parent.queue;
        while (p.type !== "brace" && p.type !== "root" && p.parent) {
          p = p.parent;
          q = p.queue;
        }
        if (node.invalid || node.dollar) {
          q.push(append(q.pop(), stringify6(node, options)));
          return;
        }
        if (node.type === "brace" && node.invalid !== true && node.nodes.length === 2) {
          q.push(append(q.pop(), ["{}"]));
          return;
        }
        if (node.nodes && node.ranges > 0) {
          const args = utils2.reduce(node.nodes);
          if (utils2.exceedsLimit(...args, options.step, rangeLimit)) {
            throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
          }
          let range = fill(...args, options);
          if (range.length === 0) {
            range = stringify6(node, options);
          }
          q.push(append(q.pop(), range));
          node.nodes = [];
          return;
        }
        const enclose = utils2.encloseBrace(node);
        let queue = node.queue;
        let block = node;
        while (block.type !== "brace" && block.type !== "root" && block.parent) {
          block = block.parent;
          queue = block.queue;
        }
        for (let i = 0; i < node.nodes.length; i++) {
          const child = node.nodes[i];
          if (child.type === "comma" && node.type === "brace") {
            if (i === 1) queue.push("");
            queue.push("");
            continue;
          }
          if (child.type === "close") {
            q.push(append(q.pop(), queue, enclose));
            continue;
          }
          if (child.value && child.type !== "open") {
            queue.push(append(queue.pop(), child.value));
            continue;
          }
          if (child.nodes) {
            walk(child, node);
          }
        }
        return queue;
      };
      return utils2.flatten(walk(ast));
    };
    module2.exports = expand;
  }
});

// packages/playwright/bundles/expect/node_modules/braces/lib/constants.js
var require_constants3 = __commonJS({
  "packages/playwright/bundles/expect/node_modules/braces/lib/constants.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      MAX_LENGTH: 1e4,
      // Digits
      CHAR_0: "0",
      /* 0 */
      CHAR_9: "9",
      /* 9 */
      // Alphabet chars.
      CHAR_UPPERCASE_A: "A",
      /* A */
      CHAR_LOWERCASE_A: "a",
      /* a */
      CHAR_UPPERCASE_Z: "Z",
      /* Z */
      CHAR_LOWERCASE_Z: "z",
      /* z */
      CHAR_LEFT_PARENTHESES: "(",
      /* ( */
      CHAR_RIGHT_PARENTHESES: ")",
      /* ) */
      CHAR_ASTERISK: "*",
      /* * */
      // Non-alphabetic chars.
      CHAR_AMPERSAND: "&",
      /* & */
      CHAR_AT: "@",
      /* @ */
      CHAR_BACKSLASH: "\\",
      /* \ */
      CHAR_BACKTICK: "`",
      /* ` */
      CHAR_CARRIAGE_RETURN: "\r",
      /* \r */
      CHAR_CIRCUMFLEX_ACCENT: "^",
      /* ^ */
      CHAR_COLON: ":",
      /* : */
      CHAR_COMMA: ",",
      /* , */
      CHAR_DOLLAR: "$",
      /* . */
      CHAR_DOT: ".",
      /* . */
      CHAR_DOUBLE_QUOTE: '"',
      /* " */
      CHAR_EQUAL: "=",
      /* = */
      CHAR_EXCLAMATION_MARK: "!",
      /* ! */
      CHAR_FORM_FEED: "\f",
      /* \f */
      CHAR_FORWARD_SLASH: "/",
      /* / */
      CHAR_HASH: "#",
      /* # */
      CHAR_HYPHEN_MINUS: "-",
      /* - */
      CHAR_LEFT_ANGLE_BRACKET: "<",
      /* < */
      CHAR_LEFT_CURLY_BRACE: "{",
      /* { */
      CHAR_LEFT_SQUARE_BRACKET: "[",
      /* [ */
      CHAR_LINE_FEED: "\n",
      /* \n */
      CHAR_NO_BREAK_SPACE: "\xA0",
      /* \u00A0 */
      CHAR_PERCENT: "%",
      /* % */
      CHAR_PLUS: "+",
      /* + */
      CHAR_QUESTION_MARK: "?",
      /* ? */
      CHAR_RIGHT_ANGLE_BRACKET: ">",
      /* > */
      CHAR_RIGHT_CURLY_BRACE: "}",
      /* } */
      CHAR_RIGHT_SQUARE_BRACKET: "]",
      /* ] */
      CHAR_SEMICOLON: ";",
      /* ; */
      CHAR_SINGLE_QUOTE: "'",
      /* ' */
      CHAR_SPACE: " ",
      /*   */
      CHAR_TAB: "	",
      /* \t */
      CHAR_UNDERSCORE: "_",
      /* _ */
      CHAR_VERTICAL_LINE: "|",
      /* | */
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\uFEFF"
      /* \uFEFF */
    };
  }
});

// packages/playwright/bundles/expect/node_modules/braces/lib/parse.js
var require_parse2 = __commonJS({
  "packages/playwright/bundles/expect/node_modules/braces/lib/parse.js"(exports2, module2) {
    "use strict";
    var stringify6 = require_stringify();
    var {
      MAX_LENGTH,
      CHAR_BACKSLASH,
      /* \ */
      CHAR_BACKTICK,
      /* ` */
      CHAR_COMMA,
      /* , */
      CHAR_DOT,
      /* . */
      CHAR_LEFT_PARENTHESES,
      /* ( */
      CHAR_RIGHT_PARENTHESES,
      /* ) */
      CHAR_LEFT_CURLY_BRACE,
      /* { */
      CHAR_RIGHT_CURLY_BRACE,
      /* } */
      CHAR_LEFT_SQUARE_BRACKET,
      /* [ */
      CHAR_RIGHT_SQUARE_BRACKET,
      /* ] */
      CHAR_DOUBLE_QUOTE,
      /* " */
      CHAR_SINGLE_QUOTE,
      /* ' */
      CHAR_NO_BREAK_SPACE,
      CHAR_ZERO_WIDTH_NOBREAK_SPACE
    } = require_constants3();
    var parse = (input, options = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected a string");
      }
      const opts = options || {};
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      if (input.length > max) {
        throw new SyntaxError(`Input length (${input.length}), exceeds max characters (${max})`);
      }
      const ast = { type: "root", input, nodes: [] };
      const stack = [ast];
      let block = ast;
      let prev = ast;
      let brackets = 0;
      const length = input.length;
      let index = 0;
      let depth = 0;
      let value;
      const advance = () => input[index++];
      const push = (node) => {
        if (node.type === "text" && prev.type === "dot") {
          prev.type = "text";
        }
        if (prev && prev.type === "text" && node.type === "text") {
          prev.value += node.value;
          return;
        }
        block.nodes.push(node);
        node.parent = block;
        node.prev = prev;
        prev = node;
        return node;
      };
      push({ type: "bos" });
      while (index < length) {
        block = stack[stack.length - 1];
        value = advance();
        if (value === CHAR_ZERO_WIDTH_NOBREAK_SPACE || value === CHAR_NO_BREAK_SPACE) {
          continue;
        }
        if (value === CHAR_BACKSLASH) {
          push({ type: "text", value: (options.keepEscaping ? value : "") + advance() });
          continue;
        }
        if (value === CHAR_RIGHT_SQUARE_BRACKET) {
          push({ type: "text", value: "\\" + value });
          continue;
        }
        if (value === CHAR_LEFT_SQUARE_BRACKET) {
          brackets++;
          let next;
          while (index < length && (next = advance())) {
            value += next;
            if (next === CHAR_LEFT_SQUARE_BRACKET) {
              brackets++;
              continue;
            }
            if (next === CHAR_BACKSLASH) {
              value += advance();
              continue;
            }
            if (next === CHAR_RIGHT_SQUARE_BRACKET) {
              brackets--;
              if (brackets === 0) {
                break;
              }
            }
          }
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_LEFT_PARENTHESES) {
          block = push({ type: "paren", nodes: [] });
          stack.push(block);
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_RIGHT_PARENTHESES) {
          if (block.type !== "paren") {
            push({ type: "text", value });
            continue;
          }
          block = stack.pop();
          push({ type: "text", value });
          block = stack[stack.length - 1];
          continue;
        }
        if (value === CHAR_DOUBLE_QUOTE || value === CHAR_SINGLE_QUOTE || value === CHAR_BACKTICK) {
          const open = value;
          let next;
          if (options.keepQuotes !== true) {
            value = "";
          }
          while (index < length && (next = advance())) {
            if (next === CHAR_BACKSLASH) {
              value += next + advance();
              continue;
            }
            if (next === open) {
              if (options.keepQuotes === true) value += next;
              break;
            }
            value += next;
          }
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_LEFT_CURLY_BRACE) {
          depth++;
          const dollar = prev.value && prev.value.slice(-1) === "$" || block.dollar === true;
          const brace = {
            type: "brace",
            open: true,
            close: false,
            dollar,
            depth,
            commas: 0,
            ranges: 0,
            nodes: []
          };
          block = push(brace);
          stack.push(block);
          push({ type: "open", value });
          continue;
        }
        if (value === CHAR_RIGHT_CURLY_BRACE) {
          if (block.type !== "brace") {
            push({ type: "text", value });
            continue;
          }
          const type = "close";
          block = stack.pop();
          block.close = true;
          push({ type, value });
          depth--;
          block = stack[stack.length - 1];
          continue;
        }
        if (value === CHAR_COMMA && depth > 0) {
          if (block.ranges > 0) {
            block.ranges = 0;
            const open = block.nodes.shift();
            block.nodes = [open, { type: "text", value: stringify6(block) }];
          }
          push({ type: "comma", value });
          block.commas++;
          continue;
        }
        if (value === CHAR_DOT && depth > 0 && block.commas === 0) {
          const siblings = block.nodes;
          if (depth === 0 || siblings.length === 0) {
            push({ type: "text", value });
            continue;
          }
          if (prev.type === "dot") {
            block.range = [];
            prev.value += value;
            prev.type = "range";
            if (block.nodes.length !== 3 && block.nodes.length !== 5) {
              block.invalid = true;
              block.ranges = 0;
              prev.type = "text";
              continue;
            }
            block.ranges++;
            block.args = [];
            continue;
          }
          if (prev.type === "range") {
            siblings.pop();
            const before = siblings[siblings.length - 1];
            before.value += prev.value + value;
            prev = before;
            block.ranges--;
            continue;
          }
          push({ type: "dot", value });
          continue;
        }
        push({ type: "text", value });
      }
      do {
        block = stack.pop();
        if (block.type !== "root") {
          block.nodes.forEach((node) => {
            if (!node.nodes) {
              if (node.type === "open") node.isOpen = true;
              if (node.type === "close") node.isClose = true;
              if (!node.nodes) node.type = "text";
              node.invalid = true;
            }
          });
          const parent = stack[stack.length - 1];
          const index2 = parent.nodes.indexOf(block);
          parent.nodes.splice(index2, 1, ...block.nodes);
        }
      } while (stack.length > 0);
      push({ type: "eos" });
      return ast;
    };
    module2.exports = parse;
  }
});

// packages/playwright/bundles/expect/node_modules/braces/index.js
var require_braces = __commonJS({
  "packages/playwright/bundles/expect/node_modules/braces/index.js"(exports2, module2) {
    "use strict";
    var stringify6 = require_stringify();
    var compile = require_compile();
    var expand = require_expand();
    var parse = require_parse2();
    var braces = (input, options = {}) => {
      let output = [];
      if (Array.isArray(input)) {
        for (const pattern of input) {
          const result = braces.create(pattern, options);
          if (Array.isArray(result)) {
            output.push(...result);
          } else {
            output.push(result);
          }
        }
      } else {
        output = [].concat(braces.create(input, options));
      }
      if (options && options.expand === true && options.nodupes === true) {
        output = [...new Set(output)];
      }
      return output;
    };
    braces.parse = (input, options = {}) => parse(input, options);
    braces.stringify = (input, options = {}) => {
      if (typeof input === "string") {
        return stringify6(braces.parse(input, options), options);
      }
      return stringify6(input, options);
    };
    braces.compile = (input, options = {}) => {
      if (typeof input === "string") {
        input = braces.parse(input, options);
      }
      return compile(input, options);
    };
    braces.expand = (input, options = {}) => {
      if (typeof input === "string") {
        input = braces.parse(input, options);
      }
      let result = expand(input, options);
      if (options.noempty === true) {
        result = result.filter(Boolean);
      }
      if (options.nodupes === true) {
        result = [...new Set(result)];
      }
      return result;
    };
    braces.create = (input, options = {}) => {
      if (input === "" || input.length < 3) {
        return [input];
      }
      return options.expand !== true ? braces.compile(input, options) : braces.expand(input, options);
    };
    module2.exports = braces;
  }
});

// packages/playwright/bundles/expect/node_modules/micromatch/index.js
var require_micromatch = __commonJS({
  "packages/playwright/bundles/expect/node_modules/micromatch/index.js"(exports2, module2) {
    "use strict";
    var util = require("util");
    var braces = require_braces();
    var picomatch = require_picomatch2();
    var utils2 = require_utils2();
    var isEmptyString = (v) => v === "" || v === "./";
    var hasBraces = (v) => {
      const index = v.indexOf("{");
      return index > -1 && v.indexOf("}", index) > -1;
    };
    var micromatch = (list, patterns, options) => {
      patterns = [].concat(patterns);
      list = [].concat(list);
      let omit = /* @__PURE__ */ new Set();
      let keep = /* @__PURE__ */ new Set();
      let items = /* @__PURE__ */ new Set();
      let negatives = 0;
      let onResult = (state) => {
        items.add(state.output);
        if (options && options.onResult) {
          options.onResult(state);
        }
      };
      for (let i = 0; i < patterns.length; i++) {
        let isMatch = picomatch(String(patterns[i]), { ...options, onResult }, true);
        let negated = isMatch.state.negated || isMatch.state.negatedExtglob;
        if (negated) negatives++;
        for (let item of list) {
          let matched = isMatch(item, true);
          let match = negated ? !matched.isMatch : matched.isMatch;
          if (!match) continue;
          if (negated) {
            omit.add(matched.output);
          } else {
            omit.delete(matched.output);
            keep.add(matched.output);
          }
        }
      }
      let result = negatives === patterns.length ? [...items] : [...keep];
      let matches = result.filter((item) => !omit.has(item));
      if (options && matches.length === 0) {
        if (options.failglob === true) {
          throw new Error(`No matches found for "${patterns.join(", ")}"`);
        }
        if (options.nonull === true || options.nullglob === true) {
          return options.unescape ? patterns.map((p) => p.replace(/\\/g, "")) : patterns;
        }
      }
      return matches;
    };
    micromatch.match = micromatch;
    micromatch.matcher = (pattern, options) => picomatch(pattern, options);
    micromatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
    micromatch.any = micromatch.isMatch;
    micromatch.not = (list, patterns, options = {}) => {
      patterns = [].concat(patterns).map(String);
      let result = /* @__PURE__ */ new Set();
      let items = [];
      let onResult = (state) => {
        if (options.onResult) options.onResult(state);
        items.push(state.output);
      };
      let matches = new Set(micromatch(list, patterns, { ...options, onResult }));
      for (let item of items) {
        if (!matches.has(item)) {
          result.add(item);
        }
      }
      return [...result];
    };
    micromatch.contains = (str, pattern, options) => {
      if (typeof str !== "string") {
        throw new TypeError(`Expected a string: "${util.inspect(str)}"`);
      }
      if (Array.isArray(pattern)) {
        return pattern.some((p) => micromatch.contains(str, p, options));
      }
      if (typeof pattern === "string") {
        if (isEmptyString(str) || isEmptyString(pattern)) {
          return false;
        }
        if (str.includes(pattern) || str.startsWith("./") && str.slice(2).includes(pattern)) {
          return true;
        }
      }
      return micromatch.isMatch(str, pattern, { ...options, contains: true });
    };
    micromatch.matchKeys = (obj, patterns, options) => {
      if (!utils2.isObject(obj)) {
        throw new TypeError("Expected the first argument to be an object");
      }
      let keys = micromatch(Object.keys(obj), patterns, options);
      let res = {};
      for (let key of keys) res[key] = obj[key];
      return res;
    };
    micromatch.some = (list, patterns, options) => {
      let items = [].concat(list);
      for (let pattern of [].concat(patterns)) {
        let isMatch = picomatch(String(pattern), options);
        if (items.some((item) => isMatch(item))) {
          return true;
        }
      }
      return false;
    };
    micromatch.every = (list, patterns, options) => {
      let items = [].concat(list);
      for (let pattern of [].concat(patterns)) {
        let isMatch = picomatch(String(pattern), options);
        if (!items.every((item) => isMatch(item))) {
          return false;
        }
      }
      return true;
    };
    micromatch.all = (str, patterns, options) => {
      if (typeof str !== "string") {
        throw new TypeError(`Expected a string: "${util.inspect(str)}"`);
      }
      return [].concat(patterns).every((p) => picomatch(p, options)(str));
    };
    micromatch.capture = (glob, input, options) => {
      let posix = utils2.isWindows(options);
      let regex = picomatch.makeRe(String(glob), { ...options, capture: true });
      let match = regex.exec(posix ? utils2.toPosixSlashes(input) : input);
      if (match) {
        return match.slice(1).map((v) => v === void 0 ? "" : v);
      }
    };
    micromatch.makeRe = (...args) => picomatch.makeRe(...args);
    micromatch.scan = (...args) => picomatch.scan(...args);
    micromatch.parse = (patterns, options) => {
      let res = [];
      for (let pattern of [].concat(patterns || [])) {
        for (let str of braces(String(pattern), options)) {
          res.push(picomatch.parse(str, options));
        }
      }
      return res;
    };
    micromatch.braces = (pattern, options) => {
      if (typeof pattern !== "string") throw new TypeError("Expected a string");
      if (options && options.nobrace === true || !hasBraces(pattern)) {
        return [pattern];
      }
      return braces(pattern, options);
    };
    micromatch.braceExpand = (pattern, options) => {
      if (typeof pattern !== "string") throw new TypeError("Expected a string");
      return micromatch.braces(pattern, { ...options, expand: true });
    };
    micromatch.hasBraces = hasBraces;
    module2.exports = micromatch;
  }
});

// packages/playwright/bundles/expect/node_modules/slash/index.js
var require_slash = __commonJS({
  "packages/playwright/bundles/expect/node_modules/slash/index.js"(exports2, module2) {
    "use strict";
    module2.exports = (path) => {
      const isExtendedLengthPath = /^\\\\\?\\/.test(path);
      const hasNonAscii = /[^\u0000-\u0080]+/.test(path);
      if (isExtendedLengthPath || hasNonAscii) {
        return path;
      }
      return path.replace(/\\/g, "/");
    };
  }
});

// packages/playwright/bundles/expect/node_modules/escape-string-regexp/index.js
var require_escape_string_regexp2 = __commonJS({
  "packages/playwright/bundles/expect/node_modules/escape-string-regexp/index.js"(exports2, module2) {
    "use strict";
    var matchOperatorsRegex = /[|\\{}()[\]^$+*?.-]/g;
    module2.exports = (string) => {
      if (typeof string !== "string") {
        throw new TypeError("Expected a string");
      }
      return string.replace(matchOperatorsRegex, "\\$&");
    };
  }
});

// packages/playwright/bundles/expect/node_modules/stack-utils/index.js
var require_stack_utils = __commonJS({
  "packages/playwright/bundles/expect/node_modules/stack-utils/index.js"(exports2, module2) {
    "use strict";
    var escapeStringRegexp = require_escape_string_regexp2();
    var cwd = typeof process === "object" && process && typeof process.cwd === "function" ? process.cwd() : ".";
    var natives = [].concat(
      require("module").builtinModules,
      "bootstrap_node",
      "node"
    ).map((n) => new RegExp(`(?:\\((?:node:)?${n}(?:\\.js)?:\\d+:\\d+\\)$|^\\s*at (?:node:)?${n}(?:\\.js)?:\\d+:\\d+$)`));
    natives.push(
      /\((?:node:)?internal\/[^:]+:\d+:\d+\)$/,
      /\s*at (?:node:)?internal\/[^:]+:\d+:\d+$/,
      /\/\.node-spawn-wrap-\w+-\w+\/node:\d+:\d+\)?$/
    );
    var StackUtils = class _StackUtils {
      constructor(opts) {
        opts = {
          ignoredPackages: [],
          ...opts
        };
        if ("internals" in opts === false) {
          opts.internals = _StackUtils.nodeInternals();
        }
        if ("cwd" in opts === false) {
          opts.cwd = cwd;
        }
        this._cwd = opts.cwd.replace(/\\/g, "/");
        this._internals = [].concat(
          opts.internals,
          ignoredPackagesRegExp(opts.ignoredPackages)
        );
        this._wrapCallSite = opts.wrapCallSite || false;
      }
      static nodeInternals() {
        return [...natives];
      }
      clean(stack, indent = 0) {
        indent = " ".repeat(indent);
        if (!Array.isArray(stack)) {
          stack = stack.split("\n");
        }
        if (!/^\s*at /.test(stack[0]) && /^\s*at /.test(stack[1])) {
          stack = stack.slice(1);
        }
        let outdent = false;
        let lastNonAtLine = null;
        const result = [];
        stack.forEach((st) => {
          st = st.replace(/\\/g, "/");
          if (this._internals.some((internal) => internal.test(st))) {
            return;
          }
          const isAtLine = /^\s*at /.test(st);
          if (outdent) {
            st = st.trimEnd().replace(/^(\s+)at /, "$1");
          } else {
            st = st.trim();
            if (isAtLine) {
              st = st.slice(3);
            }
          }
          st = st.replace(`${this._cwd}/`, "");
          if (st) {
            if (isAtLine) {
              if (lastNonAtLine) {
                result.push(lastNonAtLine);
                lastNonAtLine = null;
              }
              result.push(st);
            } else {
              outdent = true;
              lastNonAtLine = st;
            }
          }
        });
        return result.map((line) => `${indent}${line}
`).join("");
      }
      captureString(limit, fn = this.captureString) {
        if (typeof limit === "function") {
          fn = limit;
          limit = Infinity;
        }
        const { stackTraceLimit } = Error;
        if (limit) {
          Error.stackTraceLimit = limit;
        }
        const obj = {};
        Error.captureStackTrace(obj, fn);
        const { stack } = obj;
        Error.stackTraceLimit = stackTraceLimit;
        return this.clean(stack);
      }
      capture(limit, fn = this.capture) {
        if (typeof limit === "function") {
          fn = limit;
          limit = Infinity;
        }
        const { prepareStackTrace, stackTraceLimit } = Error;
        Error.prepareStackTrace = (obj2, site) => {
          if (this._wrapCallSite) {
            return site.map(this._wrapCallSite);
          }
          return site;
        };
        if (limit) {
          Error.stackTraceLimit = limit;
        }
        const obj = {};
        Error.captureStackTrace(obj, fn);
        const { stack } = obj;
        Object.assign(Error, { prepareStackTrace, stackTraceLimit });
        return stack;
      }
      at(fn = this.at) {
        const [site] = this.capture(1, fn);
        if (!site) {
          return {};
        }
        const res = {
          line: site.getLineNumber(),
          column: site.getColumnNumber()
        };
        setFile(res, site.getFileName(), this._cwd);
        if (site.isConstructor()) {
          Object.defineProperty(res, "constructor", {
            value: true,
            configurable: true
          });
        }
        if (site.isEval()) {
          res.evalOrigin = site.getEvalOrigin();
        }
        if (site.isNative()) {
          res.native = true;
        }
        let typename;
        try {
          typename = site.getTypeName();
        } catch (_) {
        }
        if (typename && typename !== "Object" && typename !== "[object Object]") {
          res.type = typename;
        }
        const fname = site.getFunctionName();
        if (fname) {
          res.function = fname;
        }
        const meth = site.getMethodName();
        if (meth && fname !== meth) {
          res.method = meth;
        }
        return res;
      }
      parseLine(line) {
        const match = line && line.match(re);
        if (!match) {
          return null;
        }
        const ctor = match[1] === "new";
        let fname = match[2];
        const evalOrigin = match[3];
        const evalFile = match[4];
        const evalLine = Number(match[5]);
        const evalCol = Number(match[6]);
        let file = match[7];
        const lnum = match[8];
        const col = match[9];
        const native = match[10] === "native";
        const closeParen = match[11] === ")";
        let method;
        const res = {};
        if (lnum) {
          res.line = Number(lnum);
        }
        if (col) {
          res.column = Number(col);
        }
        if (closeParen && file) {
          let closes = 0;
          for (let i = file.length - 1; i > 0; i--) {
            if (file.charAt(i) === ")") {
              closes++;
            } else if (file.charAt(i) === "(" && file.charAt(i - 1) === " ") {
              closes--;
              if (closes === -1 && file.charAt(i - 1) === " ") {
                const before = file.slice(0, i - 1);
                const after = file.slice(i + 1);
                file = after;
                fname += ` (${before}`;
                break;
              }
            }
          }
        }
        if (fname) {
          const methodMatch = fname.match(methodRe);
          if (methodMatch) {
            fname = methodMatch[1];
            method = methodMatch[2];
          }
        }
        setFile(res, file, this._cwd);
        if (ctor) {
          Object.defineProperty(res, "constructor", {
            value: true,
            configurable: true
          });
        }
        if (evalOrigin) {
          res.evalOrigin = evalOrigin;
          res.evalLine = evalLine;
          res.evalColumn = evalCol;
          res.evalFile = evalFile && evalFile.replace(/\\/g, "/");
        }
        if (native) {
          res.native = true;
        }
        if (fname) {
          res.function = fname;
        }
        if (method && fname !== method) {
          res.method = method;
        }
        return res;
      }
    };
    function setFile(result, filename, cwd2) {
      if (filename) {
        filename = filename.replace(/\\/g, "/");
        if (filename.startsWith(`${cwd2}/`)) {
          filename = filename.slice(cwd2.length + 1);
        }
        result.file = filename;
      }
    }
    function ignoredPackagesRegExp(ignoredPackages) {
      if (ignoredPackages.length === 0) {
        return [];
      }
      const packages = ignoredPackages.map((mod) => escapeStringRegexp(mod));
      return new RegExp(`[/\\\\]node_modules[/\\\\](?:${packages.join("|")})[/\\\\][^:]+:\\d+:\\d+`);
    }
    var re = new RegExp(
      "^(?:\\s*at )?(?:(new) )?(?:(.*?) \\()?(?:eval at ([^ ]+) \\((.+?):(\\d+):(\\d+)\\), )?(?:(.+?):(\\d+):(\\d+)|(native))(\\)?)$"
    );
    var methodRe = /^(.*?) \[as (.*?)\]$/;
    module2.exports = StackUtils;
  }
});

// packages/playwright/bundles/expect/node_modules/jest-message-util/build/index.js
var require_build8 = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-message-util/build/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.separateMessageFromStack = exports2.indentAllLines = exports2.getTopFrame = exports2.getStackTraceLines = exports2.formatStackTrace = exports2.formatResultsErrors = exports2.formatPath = exports2.formatExecError = void 0;
    var path = _interopRequireWildcard(require("path"));
    var _url = require("url");
    var _util = require("util");
    var _codeFrame = require_lib3();
    var _chalk = _interopRequireDefault(require_source());
    var fs = _interopRequireWildcard(require_graceful_fs());
    var _micromatch = _interopRequireDefault(require_micromatch());
    var _slash = _interopRequireDefault(require_slash());
    var _stackUtils = _interopRequireDefault(require_stack_utils());
    var _prettyFormat = require_build2();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function") return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    var Symbol2 = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
    var Symbol2 = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
    var jestReadFile = globalThis[Symbol2.for("jest-native-read-file")] || fs.readFileSync;
    var stackUtils = new _stackUtils.default({
      cwd: "something which does not exist"
    });
    var nodeInternals = [];
    try {
      nodeInternals = _stackUtils.default.nodeInternals();
    } catch {
    }
    var PATH_NODE_MODULES = `${path.sep}node_modules${path.sep}`;
    var PATH_JEST_PACKAGES = `${path.sep}jest${path.sep}packages${path.sep}`;
    var JASMINE_IGNORE = /^\s+at(?:(?:.jasmine-)|\s+jasmine\.buildExpectationResult)/;
    var JEST_INTERNALS_IGNORE = /^\s+at.*?jest(-.*?)?(\/|\\)(build|node_modules|packages)(\/|\\)/;
    var ANONYMOUS_FN_IGNORE = /^\s+at <anonymous>.*$/;
    var ANONYMOUS_PROMISE_IGNORE = /^\s+at (new )?Promise \(<anonymous>\).*$/;
    var ANONYMOUS_GENERATOR_IGNORE = /^\s+at Generator.next \(<anonymous>\).*$/;
    var NATIVE_NEXT_IGNORE = /^\s+at next \(native\).*$/;
    var TITLE_INDENT = "  ";
    var MESSAGE_INDENT = "    ";
    var STACK_INDENT = "      ";
    var ANCESTRY_SEPARATOR = " \u203A ";
    var TITLE_BULLET = _chalk.default.bold("\u25CF ");
    var STACK_TRACE_COLOR = _chalk.default.dim;
    var STACK_PATH_REGEXP = /\s*at.*\(?(:\d*:\d*|native)\)?/;
    var EXEC_ERROR_MESSAGE = "Test suite failed to run";
    var NOT_EMPTY_LINE_REGEXP = /^(?!$)/gm;
    var indentAllLines = (lines) => lines.replace(NOT_EMPTY_LINE_REGEXP, MESSAGE_INDENT);
    exports2.indentAllLines = indentAllLines;
    var trim = (string) => (string || "").trim();
    var trimPaths = (string) => string.match(STACK_PATH_REGEXP) ? trim(string) : string;
    var getRenderedCallsite = (fileContent, line, column) => {
      let renderedCallsite = (0, _codeFrame.codeFrameColumns)(
        fileContent,
        {
          start: {
            column,
            line
          }
        },
        {
          highlightCode: true
        }
      );
      renderedCallsite = indentAllLines(renderedCallsite);
      renderedCallsite = `
${renderedCallsite}
`;
      return renderedCallsite;
    };
    var blankStringRegexp = /^\s*$/;
    function checkForCommonEnvironmentErrors(error) {
      if (error.includes("ReferenceError: document is not defined") || error.includes("ReferenceError: window is not defined") || error.includes("ReferenceError: navigator is not defined")) {
        return warnAboutWrongTestEnvironment(error, "jsdom");
      } else if (error.includes(".unref is not a function")) {
        return warnAboutWrongTestEnvironment(error, "node");
      }
      return error;
    }
    function warnAboutWrongTestEnvironment(error, env) {
      return _chalk.default.bold.red(
        `The error below may be caused by using the wrong test environment, see ${_chalk.default.dim.underline(
          "https://jestjs.io/docs/configuration#testenvironment-string"
        )}.
Consider using the "${env}" test environment.

`
      ) + error;
    }
    var formatExecError = (error, config, options, testPath, reuseMessage, noTitle) => {
      if (!error || typeof error === "number") {
        error = new Error(`Expected an Error, but "${String(error)}" was thrown`);
        error.stack = "";
      }
      let message, stack;
      let cause = "";
      const subErrors = [];
      if (typeof error === "string" || !error) {
        error || (error = "EMPTY ERROR");
        message = "";
        stack = error;
      } else {
        message = error.message;
        stack = typeof error.stack === "string" ? error.stack : `thrown: ${(0, _prettyFormat.format)(error, {
          maxDepth: 3
        })}`;
        if ("cause" in error) {
          const prefix = "\n\nCause:\n";
          if (typeof error.cause === "string" || typeof error.cause === "number") {
            cause += `${prefix}${error.cause}`;
          } else if (_util.types.isNativeError(error.cause) || error.cause instanceof Error) {
            const formatted = formatExecError(
              error.cause,
              config,
              options,
              testPath,
              reuseMessage,
              true
            );
            cause += `${prefix}${formatted}`;
          }
        }
        if ("errors" in error && Array.isArray(error.errors)) {
          for (const subError of error.errors) {
            subErrors.push(
              formatExecError(
                subError,
                config,
                options,
                testPath,
                reuseMessage,
                true
              )
            );
          }
        }
      }
      if (cause !== "") {
        cause = indentAllLines(cause);
      }
      const separated = separateMessageFromStack2(stack || "");
      stack = separated.stack;
      if (separated.message.includes(trim(message))) {
        message = separated.message;
      }
      message = checkForCommonEnvironmentErrors(message);
      message = indentAllLines(message);
      stack = stack && !options.noStackTrace ? `
${formatStackTrace2(stack, config, options, testPath)}` : "";
      if (typeof stack !== "string" || blankStringRegexp.test(message) && blankStringRegexp.test(stack)) {
        message = `thrown: ${(0, _prettyFormat.format)(error, {
          maxDepth: 3
        })}`;
      }
      let messageToUse;
      if (reuseMessage || noTitle) {
        messageToUse = ` ${message.trim()}`;
      } else {
        messageToUse = `${EXEC_ERROR_MESSAGE}

${message}`;
      }
      const title = noTitle ? "" : `${TITLE_INDENT + TITLE_BULLET}`;
      const subErrorStr = subErrors.length > 0 ? indentAllLines(
        `

Errors contained in AggregateError:
${subErrors.join("\n")}`
      ) : "";
      return `${title + messageToUse + stack + cause + subErrorStr}
`;
    };
    exports2.formatExecError = formatExecError;
    var removeInternalStackEntries = (lines, options) => {
      let pathCounter = 0;
      return lines.filter((line) => {
        if (ANONYMOUS_FN_IGNORE.test(line)) {
          return false;
        }
        if (ANONYMOUS_PROMISE_IGNORE.test(line)) {
          return false;
        }
        if (ANONYMOUS_GENERATOR_IGNORE.test(line)) {
          return false;
        }
        if (NATIVE_NEXT_IGNORE.test(line)) {
          return false;
        }
        if (nodeInternals.some((internal) => internal.test(line))) {
          return false;
        }
        if (!STACK_PATH_REGEXP.test(line)) {
          return true;
        }
        if (JASMINE_IGNORE.test(line)) {
          return false;
        }
        if (++pathCounter === 1) {
          return true;
        }
        if (options.noStackTrace) {
          return false;
        }
        if (JEST_INTERNALS_IGNORE.test(line)) {
          return false;
        }
        return true;
      });
    };
    var formatPath = (line, config, relativeTestPath = null) => {
      const match = line.match(/(^\s*at .*?\(?)([^()]+)(:[0-9]+:[0-9]+\)?.*$)/);
      if (!match) {
        return line;
      }
      let filePath = (0, _slash.default)(path.relative(config.rootDir, match[2]));
      if (config.testMatch && config.testMatch.length && (0, _micromatch.default)([filePath], config.testMatch).length > 0 || filePath === relativeTestPath) {
        filePath = _chalk.default.reset.cyan(filePath);
      }
      return STACK_TRACE_COLOR(match[1]) + filePath + STACK_TRACE_COLOR(match[3]);
    };
    exports2.formatPath = formatPath;
    var getStackTraceLines = (stack, options = {
      noCodeFrame: false,
      noStackTrace: false
    }) => removeInternalStackEntries(stack.split(/\n/), options);
    exports2.getStackTraceLines = getStackTraceLines;
    var getTopFrame = (lines) => {
      for (const line of lines) {
        if (line.includes(PATH_NODE_MODULES) || line.includes(PATH_JEST_PACKAGES)) {
          continue;
        }
        const parsedFrame = stackUtils.parseLine(line.trim());
        if (parsedFrame && parsedFrame.file) {
          if (parsedFrame.file.startsWith("file://")) {
            parsedFrame.file = (0, _slash.default)(
              (0, _url.fileURLToPath)(parsedFrame.file)
            );
          }
          return parsedFrame;
        }
      }
      return null;
    };
    exports2.getTopFrame = getTopFrame;
    var formatStackTrace2 = (stack, config, options, testPath) => {
      const lines = getStackTraceLines(stack, options);
      let renderedCallsite = "";
      const relativeTestPath = testPath ? (0, _slash.default)(path.relative(config.rootDir, testPath)) : null;
      if (!options.noStackTrace && !options.noCodeFrame) {
        const topFrame = getTopFrame(lines);
        if (topFrame) {
          const { column, file: filename, line } = topFrame;
          if (line && filename && path.isAbsolute(filename)) {
            let fileContent;
            try {
              fileContent = jestReadFile(filename, "utf8");
              renderedCallsite = getRenderedCallsite(fileContent, line, column);
            } catch {
            }
          }
        }
      }
      const stacktrace = lines.filter(Boolean).map(
        (line) => STACK_INDENT + formatPath(trimPaths(line), config, relativeTestPath)
      ).join("\n");
      return renderedCallsite ? `${renderedCallsite}
${stacktrace}` : `
${stacktrace}`;
    };
    exports2.formatStackTrace = formatStackTrace2;
    function isErrorOrStackWithCause(errorOrStack) {
      return typeof errorOrStack !== "string" && "cause" in errorOrStack && (typeof errorOrStack.cause === "string" || _util.types.isNativeError(errorOrStack.cause) || errorOrStack.cause instanceof Error);
    }
    function formatErrorStack(errorOrStack, config, options, testPath) {
      const sourceStack = typeof errorOrStack === "string" ? errorOrStack : errorOrStack.stack || "";
      let { message, stack } = separateMessageFromStack2(sourceStack);
      stack = options.noStackTrace ? "" : `${STACK_TRACE_COLOR(
        formatStackTrace2(stack, config, options, testPath)
      )}
`;
      message = checkForCommonEnvironmentErrors(message);
      message = indentAllLines(message);
      let cause = "";
      if (isErrorOrStackWithCause(errorOrStack)) {
        const nestedCause = formatErrorStack(
          errorOrStack.cause,
          config,
          options,
          testPath
        );
        cause = `
${MESSAGE_INDENT}Cause:
${nestedCause}`;
      }
      return `${message}
${stack}${cause}`;
    }
    function failureDetailsToErrorOrStack(failureDetails, content) {
      if (!failureDetails) {
        return content;
      }
      if (_util.types.isNativeError(failureDetails) || failureDetails instanceof Error) {
        return failureDetails;
      }
      if (typeof failureDetails === "object" && "error" in failureDetails && (_util.types.isNativeError(failureDetails.error) || failureDetails.error instanceof Error)) {
        return failureDetails.error;
      }
      return content;
    }
    var formatResultsErrors = (testResults, config, options, testPath) => {
      const failedResults = testResults.reduce((errors, result) => {
        result.failureMessages.forEach((item, index) => {
          errors.push({
            content: item,
            failureDetails: result.failureDetails[index],
            result
          });
        });
        return errors;
      }, []);
      if (!failedResults.length) {
        return null;
      }
      return failedResults.map(({ result, content, failureDetails }) => {
        const rootErrorOrStack = failureDetailsToErrorOrStack(
          failureDetails,
          content
        );
        const title = `${_chalk.default.bold.red(
          TITLE_INDENT + TITLE_BULLET + result.ancestorTitles.join(ANCESTRY_SEPARATOR) + (result.ancestorTitles.length ? ANCESTRY_SEPARATOR : "") + result.title
        )}
`;
        return `${title}
${formatErrorStack(
          rootErrorOrStack,
          config,
          options,
          testPath
        )}`;
      }).join("\n");
    };
    exports2.formatResultsErrors = formatResultsErrors;
    var errorRegexp = /^Error:?\s*$/;
    var removeBlankErrorLine = (str) => str.split("\n").filter((line) => !errorRegexp.test(line)).join("\n").trimRight();
    var separateMessageFromStack2 = (content) => {
      if (!content) {
        return {
          message: "",
          stack: ""
        };
      }
      const messageMatch = content.match(
        /^(?:Error: )?([\s\S]*?(?=\n\s*at\s.*:\d*:\d*)|\s*.*)([\s\S]*)$/
      );
      if (!messageMatch) {
        throw new Error("If you hit this error, the regex above is buggy.");
      }
      const message = removeBlankErrorLine(messageMatch[1]);
      const stack = removeBlankErrorLine(messageMatch[2]);
      return {
        message,
        stack
      };
    };
    exports2.separateMessageFromStack = separateMessageFromStack2;
  }
});

// packages/playwright/bundles/expect/node_modules/jest-mock/build/index.js
var require_build9 = __commonJS({
  "packages/playwright/bundles/expect/node_modules/jest-mock/build/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.spyOn = exports2.replaceProperty = exports2.mocked = exports2.fn = exports2.ModuleMocker = void 0;
    function _jestUtil() {
      const data = require_build7();
      _jestUtil = function() {
        return data;
      };
      return data;
    }
    var MOCK_CONSTRUCTOR_NAME = "mockConstructor";
    var FUNCTION_NAME_RESERVED_PATTERN = /[\s!-/:-@[-`{-~]/;
    var FUNCTION_NAME_RESERVED_REPLACE = new RegExp(
      FUNCTION_NAME_RESERVED_PATTERN.source,
      "g"
    );
    var RESERVED_KEYWORDS = /* @__PURE__ */ new Set([
      "arguments",
      "await",
      "break",
      "case",
      "catch",
      "class",
      "const",
      "continue",
      "debugger",
      "default",
      "delete",
      "do",
      "else",
      "enum",
      "eval",
      "export",
      "extends",
      "false",
      "finally",
      "for",
      "function",
      "if",
      "implements",
      "import",
      "in",
      "instanceof",
      "interface",
      "let",
      "new",
      "null",
      "package",
      "private",
      "protected",
      "public",
      "return",
      "static",
      "super",
      "switch",
      "this",
      "throw",
      "true",
      "try",
      "typeof",
      "var",
      "void",
      "while",
      "with",
      "yield"
    ]);
    function matchArity(fn2, length) {
      let mockConstructor;
      switch (length) {
        case 1:
          mockConstructor = function(_a) {
            return fn2.apply(this, arguments);
          };
          break;
        case 2:
          mockConstructor = function(_a, _b) {
            return fn2.apply(this, arguments);
          };
          break;
        case 3:
          mockConstructor = function(_a, _b, _c) {
            return fn2.apply(this, arguments);
          };
          break;
        case 4:
          mockConstructor = function(_a, _b, _c, _d) {
            return fn2.apply(this, arguments);
          };
          break;
        case 5:
          mockConstructor = function(_a, _b, _c, _d, _e) {
            return fn2.apply(this, arguments);
          };
          break;
        case 6:
          mockConstructor = function(_a, _b, _c, _d, _e, _f) {
            return fn2.apply(this, arguments);
          };
          break;
        case 7:
          mockConstructor = function(_a, _b, _c, _d, _e, _f, _g) {
            return fn2.apply(this, arguments);
          };
          break;
        case 8:
          mockConstructor = function(_a, _b, _c, _d, _e, _f, _g, _h) {
            return fn2.apply(this, arguments);
          };
          break;
        case 9:
          mockConstructor = function(_a, _b, _c, _d, _e, _f, _g, _h, _i) {
            return fn2.apply(this, arguments);
          };
          break;
        default:
          mockConstructor = function() {
            return fn2.apply(this, arguments);
          };
          break;
      }
      return mockConstructor;
    }
    function getObjectType(value) {
      return Object.prototype.toString.apply(value).slice(8, -1);
    }
    function getType4(ref) {
      const typeName = getObjectType(ref);
      if (typeName === "Function" || typeName === "AsyncFunction" || typeName === "GeneratorFunction" || typeName === "AsyncGeneratorFunction") {
        return "function";
      } else if (Array.isArray(ref)) {
        return "array";
      } else if (typeName === "Object" || typeName === "Module") {
        return "object";
      } else if (typeName === "Number" || typeName === "String" || typeName === "Boolean" || typeName === "Symbol") {
        return "constant";
      } else if (typeName === "Map" || typeName === "WeakMap" || typeName === "Set") {
        return "collection";
      } else if (typeName === "RegExp") {
        return "regexp";
      } else if (ref === void 0) {
        return "undefined";
      } else if (ref === null) {
        return "null";
      } else {
        return null;
      }
    }
    function isReadonlyProp(object, prop) {
      if (prop === "arguments" || prop === "caller" || prop === "callee" || prop === "name" || prop === "length") {
        const typeName = getObjectType(object);
        return typeName === "Function" || typeName === "AsyncFunction" || typeName === "GeneratorFunction" || typeName === "AsyncGeneratorFunction";
      }
      if (prop === "source" || prop === "global" || prop === "ignoreCase" || prop === "multiline") {
        return getObjectType(object) === "RegExp";
      }
      return false;
    }
    var ModuleMocker = class {
      /**
       * @see README.md
       * @param global Global object of the test environment, used to create
       * mocks
       */
      constructor(global2) {
        __publicField(this, "_environmentGlobal");
        __publicField(this, "_mockState");
        __publicField(this, "_mockConfigRegistry");
        __publicField(this, "_spyState");
        __publicField(this, "_invocationCallCounter");
        this._environmentGlobal = global2;
        this._mockState = /* @__PURE__ */ new WeakMap();
        this._mockConfigRegistry = /* @__PURE__ */ new WeakMap();
        this._spyState = /* @__PURE__ */ new Set();
        this._invocationCallCounter = 1;
      }
      _getSlots(object) {
        if (!object) {
          return [];
        }
        const slots = /* @__PURE__ */ new Set();
        const EnvObjectProto = this._environmentGlobal.Object.prototype;
        const EnvFunctionProto = this._environmentGlobal.Function.prototype;
        const EnvRegExpProto = this._environmentGlobal.RegExp.prototype;
        const ObjectProto = Object.prototype;
        const FunctionProto = Function.prototype;
        const RegExpProto = RegExp.prototype;
        while (object != null && object !== EnvObjectProto && object !== EnvFunctionProto && object !== EnvRegExpProto && object !== ObjectProto && object !== FunctionProto && object !== RegExpProto) {
          const ownNames = Object.getOwnPropertyNames(object);
          for (let i = 0; i < ownNames.length; i++) {
            const prop = ownNames[i];
            if (!isReadonlyProp(object, prop)) {
              const propDesc = Object.getOwnPropertyDescriptor(object, prop);
              if (propDesc !== void 0 && !propDesc.get || object.__esModule) {
                slots.add(prop);
              }
            }
          }
          object = Object.getPrototypeOf(object);
        }
        return Array.from(slots);
      }
      _ensureMockConfig(f) {
        let config = this._mockConfigRegistry.get(f);
        if (!config) {
          config = this._defaultMockConfig();
          this._mockConfigRegistry.set(f, config);
        }
        return config;
      }
      _ensureMockState(f) {
        let state = this._mockState.get(f);
        if (!state) {
          state = this._defaultMockState();
          this._mockState.set(f, state);
        }
        if (state.calls.length > 0) {
          state.lastCall = state.calls[state.calls.length - 1];
        }
        return state;
      }
      _defaultMockConfig() {
        return {
          mockImpl: void 0,
          mockName: "jest.fn()",
          specificMockImpls: []
        };
      }
      _defaultMockState() {
        return {
          calls: [],
          contexts: [],
          instances: [],
          invocationCallOrder: [],
          results: []
        };
      }
      _makeComponent(metadata, restore) {
        if (metadata.type === "object") {
          return new this._environmentGlobal.Object();
        } else if (metadata.type === "array") {
          return new this._environmentGlobal.Array();
        } else if (metadata.type === "regexp") {
          return new this._environmentGlobal.RegExp("");
        } else if (metadata.type === "constant" || metadata.type === "collection" || metadata.type === "null" || metadata.type === "undefined") {
          return metadata.value;
        } else if (metadata.type === "function") {
          let withImplementation = function(fn2, callback) {
            const mockConfig = this._ensureMockConfig(f);
            const previousImplementation = mockConfig.mockImpl;
            const previousSpecificImplementations = mockConfig.specificMockImpls;
            mockConfig.mockImpl = fn2;
            mockConfig.specificMockImpls = [];
            const returnedValue = callback();
            if ((0, _jestUtil().isPromise)(returnedValue)) {
              return returnedValue.then(() => {
                mockConfig.mockImpl = previousImplementation;
                mockConfig.specificMockImpls = previousSpecificImplementations;
              });
            } else {
              mockConfig.mockImpl = previousImplementation;
              mockConfig.specificMockImpls = previousSpecificImplementations;
            }
          };
          const prototype = metadata.members && metadata.members.prototype && metadata.members.prototype.members || {};
          const prototypeSlots = this._getSlots(prototype);
          const mocker = this;
          const mockConstructor = matchArity(function(...args) {
            const mockState = mocker._ensureMockState(f);
            const mockConfig = mocker._ensureMockConfig(f);
            mockState.instances.push(this);
            mockState.contexts.push(this);
            mockState.calls.push(args);
            const mockResult = {
              type: "incomplete",
              value: void 0
            };
            mockState.results.push(mockResult);
            mockState.invocationCallOrder.push(mocker._invocationCallCounter++);
            let finalReturnValue;
            let thrownError;
            let callDidThrowError = false;
            try {
              finalReturnValue = (() => {
                if (this instanceof f) {
                  prototypeSlots.forEach((slot) => {
                    if (prototype[slot].type === "function") {
                      const protoImpl = this[slot];
                      this[slot] = mocker.generateFromMetadata(prototype[slot]);
                      this[slot]._protoImpl = protoImpl;
                    }
                  });
                  const mockImpl = mockConfig.specificMockImpls.length ? mockConfig.specificMockImpls.shift() : mockConfig.mockImpl;
                  return mockImpl && mockImpl.apply(this, arguments);
                }
                let specificMockImpl = mockConfig.specificMockImpls.shift();
                if (specificMockImpl === void 0) {
                  specificMockImpl = mockConfig.mockImpl;
                }
                if (specificMockImpl) {
                  return specificMockImpl.apply(this, arguments);
                }
                if (f._protoImpl) {
                  return f._protoImpl.apply(this, arguments);
                }
                return void 0;
              })();
            } catch (error) {
              thrownError = error;
              callDidThrowError = true;
              throw error;
            } finally {
              mockResult.type = callDidThrowError ? "throw" : "return";
              mockResult.value = callDidThrowError ? thrownError : finalReturnValue;
            }
            return finalReturnValue;
          }, metadata.length || 0);
          const f = this._createMockFunction(metadata, mockConstructor);
          f._isMockFunction = true;
          f.getMockImplementation = () => this._ensureMockConfig(f).mockImpl;
          if (typeof restore === "function") {
            this._spyState.add(restore);
          }
          this._mockState.set(f, this._defaultMockState());
          this._mockConfigRegistry.set(f, this._defaultMockConfig());
          Object.defineProperty(f, "mock", {
            configurable: false,
            enumerable: true,
            get: () => this._ensureMockState(f),
            set: (val) => this._mockState.set(f, val)
          });
          f.mockClear = () => {
            this._mockState.delete(f);
            return f;
          };
          f.mockReset = () => {
            f.mockClear();
            this._mockConfigRegistry.delete(f);
            return f;
          };
          f.mockRestore = () => {
            f.mockReset();
            return restore ? restore() : void 0;
          };
          f.mockReturnValueOnce = (value) => (
            // next function call will return this value or default return value
            f.mockImplementationOnce(() => value)
          );
          f.mockResolvedValueOnce = (value) => f.mockImplementationOnce(
            () => this._environmentGlobal.Promise.resolve(value)
          );
          f.mockRejectedValueOnce = (value) => f.mockImplementationOnce(
            () => this._environmentGlobal.Promise.reject(value)
          );
          f.mockReturnValue = (value) => (
            // next function call will return specified return value or this one
            f.mockImplementation(() => value)
          );
          f.mockResolvedValue = (value) => f.mockImplementation(
            () => this._environmentGlobal.Promise.resolve(value)
          );
          f.mockRejectedValue = (value) => f.mockImplementation(
            () => this._environmentGlobal.Promise.reject(value)
          );
          f.mockImplementationOnce = (fn2) => {
            const mockConfig = this._ensureMockConfig(f);
            mockConfig.specificMockImpls.push(fn2);
            return f;
          };
          f.withImplementation = withImplementation.bind(this);
          f.mockImplementation = (fn2) => {
            const mockConfig = this._ensureMockConfig(f);
            mockConfig.mockImpl = fn2;
            return f;
          };
          f.mockReturnThis = () => f.mockImplementation(function() {
            return this;
          });
          f.mockName = (name) => {
            if (name) {
              const mockConfig = this._ensureMockConfig(f);
              mockConfig.mockName = name;
            }
            return f;
          };
          f.getMockName = () => {
            const mockConfig = this._ensureMockConfig(f);
            return mockConfig.mockName || "jest.fn()";
          };
          if (metadata.mockImpl) {
            f.mockImplementation(metadata.mockImpl);
          }
          return f;
        } else {
          const unknownType = metadata.type || "undefined type";
          throw new Error(`Unrecognized type ${unknownType}`);
        }
      }
      _createMockFunction(metadata, mockConstructor) {
        let name = metadata.name;
        if (!name) {
          return mockConstructor;
        }
        const boundFunctionPrefix = "bound ";
        let bindCall = "";
        if (name.startsWith(boundFunctionPrefix)) {
          do {
            name = name.substring(boundFunctionPrefix.length);
            bindCall = ".bind(null)";
          } while (name && name.startsWith(boundFunctionPrefix));
        }
        if (name === MOCK_CONSTRUCTOR_NAME) {
          return mockConstructor;
        }
        if (
          // It's a syntax error to define functions with a reserved keyword as name
          RESERVED_KEYWORDS.has(name) || // It's also a syntax error to define functions with a name that starts with a number
          /^\d/.test(name)
        ) {
          name = `$${name}`;
        }
        if (FUNCTION_NAME_RESERVED_PATTERN.test(name)) {
          name = name.replace(FUNCTION_NAME_RESERVED_REPLACE, "$");
        }
        const body = `return function ${name}() {  return ${MOCK_CONSTRUCTOR_NAME}.apply(this,arguments);}${bindCall}`;
        const createConstructor = new this._environmentGlobal.Function(
          MOCK_CONSTRUCTOR_NAME,
          body
        );
        return createConstructor(mockConstructor);
      }
      _generateMock(metadata, callbacks, refs) {
        const mock2 = this._makeComponent(metadata);
        if (metadata.refID != null) {
          refs[metadata.refID] = mock2;
        }
        this._getSlots(metadata.members).forEach((slot) => {
          const slotMetadata = metadata.members && metadata.members[slot] || {};
          if (slotMetadata.ref != null) {
            callbacks.push(
              /* @__PURE__ */ function(ref) {
                return () => mock2[slot] = refs[ref];
              }(slotMetadata.ref)
            );
          } else {
            mock2[slot] = this._generateMock(slotMetadata, callbacks, refs);
          }
        });
        if (metadata.type !== "undefined" && metadata.type !== "null" && mock2.prototype && typeof mock2.prototype === "object") {
          mock2.prototype.constructor = mock2;
        }
        return mock2;
      }
      /**
       * Check whether the given property of an object has been already replaced.
       */
      _findReplacedProperty(object, propertyKey) {
        for (const spyState of this._spyState) {
          if ("object" in spyState && "property" in spyState && spyState.object === object && spyState.property === propertyKey) {
            return spyState;
          }
        }
        return;
      }
      /**
       * @see README.md
       * @param metadata Metadata for the mock in the schema returned by the
       * getMetadata method of this module.
       */
      generateFromMetadata(metadata) {
        const callbacks = [];
        const refs = {};
        const mock2 = this._generateMock(metadata, callbacks, refs);
        callbacks.forEach((setter) => setter());
        return mock2;
      }
      /**
       * @see README.md
       * @param component The component for which to retrieve metadata.
       */
      getMetadata(component, _refs) {
        const refs = _refs || /* @__PURE__ */ new Map();
        const ref = refs.get(component);
        if (ref != null) {
          return {
            ref
          };
        }
        const type = getType4(component);
        if (!type) {
          return null;
        }
        const metadata = {
          type
        };
        if (type === "constant" || type === "collection" || type === "undefined" || type === "null") {
          metadata.value = component;
          return metadata;
        } else if (type === "function") {
          const componentName = component.name;
          if (typeof componentName === "string") {
            metadata.name = componentName;
          }
          if (this.isMockFunction(component)) {
            metadata.mockImpl = component.getMockImplementation();
          }
        }
        metadata.refID = refs.size;
        refs.set(component, metadata.refID);
        let members = null;
        if (type !== "array") {
          this._getSlots(component).forEach((slot) => {
            if (type === "function" && this.isMockFunction(component) && slot.match(/^mock/)) {
              return;
            }
            const slotMetadata = this.getMetadata(component[slot], refs);
            if (slotMetadata) {
              if (!members) {
                members = {};
              }
              members[slot] = slotMetadata;
            }
          });
        }
        if (members) {
          metadata.members = members;
        }
        return metadata;
      }
      isMockFunction(fn2) {
        return fn2 != null && fn2._isMockFunction === true;
      }
      fn(implementation) {
        const length = implementation ? implementation.length : 0;
        const fn2 = this._makeComponent({
          length,
          type: "function"
        });
        if (implementation) {
          fn2.mockImplementation(implementation);
        }
        return fn2;
      }
      spyOn(object, methodKey, accessType) {
        if (object == null || typeof object !== "object" && typeof object !== "function") {
          throw new Error(
            `Cannot use spyOn on a primitive value; ${this._typeOf(object)} given`
          );
        }
        if (methodKey == null) {
          throw new Error("No property name supplied");
        }
        if (accessType) {
          return this._spyOnProperty(object, methodKey, accessType);
        }
        const original = object[methodKey];
        if (!original) {
          throw new Error(
            `Property \`${String(
              methodKey
            )}\` does not exist in the provided object`
          );
        }
        if (!this.isMockFunction(original)) {
          if (typeof original !== "function") {
            throw new Error(
              `Cannot spy on the \`${String(
                methodKey
              )}\` property because it is not a function; ${this._typeOf(
                original
              )} given instead.${typeof original !== "object" ? ` If you are trying to mock a property, use \`jest.replaceProperty(object, '${String(
                methodKey
              )}', value)\` instead.` : ""}`
            );
          }
          const isMethodOwner = Object.prototype.hasOwnProperty.call(
            object,
            methodKey
          );
          let descriptor = Object.getOwnPropertyDescriptor(object, methodKey);
          let proto = Object.getPrototypeOf(object);
          while (!descriptor && proto !== null) {
            descriptor = Object.getOwnPropertyDescriptor(proto, methodKey);
            proto = Object.getPrototypeOf(proto);
          }
          let mock2;
          if (descriptor && descriptor.get) {
            const originalGet = descriptor.get;
            mock2 = this._makeComponent(
              {
                type: "function"
              },
              () => {
                descriptor.get = originalGet;
                Object.defineProperty(object, methodKey, descriptor);
              }
            );
            descriptor.get = () => mock2;
            Object.defineProperty(object, methodKey, descriptor);
          } else {
            mock2 = this._makeComponent(
              {
                type: "function"
              },
              () => {
                if (isMethodOwner) {
                  object[methodKey] = original;
                } else {
                  delete object[methodKey];
                }
              }
            );
            object[methodKey] = mock2;
          }
          mock2.mockImplementation(function() {
            return original.apply(this, arguments);
          });
        }
        return object[methodKey];
      }
      _spyOnProperty(object, propertyKey, accessType) {
        let descriptor = Object.getOwnPropertyDescriptor(object, propertyKey);
        let proto = Object.getPrototypeOf(object);
        while (!descriptor && proto !== null) {
          descriptor = Object.getOwnPropertyDescriptor(proto, propertyKey);
          proto = Object.getPrototypeOf(proto);
        }
        if (!descriptor) {
          throw new Error(
            `Property \`${String(
              propertyKey
            )}\` does not exist in the provided object`
          );
        }
        if (!descriptor.configurable) {
          throw new Error(
            `Property \`${String(propertyKey)}\` is not declared configurable`
          );
        }
        if (!descriptor[accessType]) {
          throw new Error(
            `Property \`${String(
              propertyKey
            )}\` does not have access type ${accessType}`
          );
        }
        const original = descriptor[accessType];
        if (!this.isMockFunction(original)) {
          if (typeof original !== "function") {
            throw new Error(
              `Cannot spy on the ${String(
                propertyKey
              )} property because it is not a function; ${this._typeOf(
                original
              )} given instead.${typeof original !== "object" ? ` If you are trying to mock a property, use \`jest.replaceProperty(object, '${String(
                propertyKey
              )}', value)\` instead.` : ""}`
            );
          }
          descriptor[accessType] = this._makeComponent(
            {
              type: "function"
            },
            () => {
              descriptor[accessType] = original;
              Object.defineProperty(object, propertyKey, descriptor);
            }
          );
          descriptor[accessType].mockImplementation(function() {
            return original.apply(this, arguments);
          });
        }
        Object.defineProperty(object, propertyKey, descriptor);
        return descriptor[accessType];
      }
      replaceProperty(object, propertyKey, value) {
        if (object == null || typeof object !== "object" && typeof object !== "function") {
          throw new Error(
            `Cannot use replaceProperty on a primitive value; ${this._typeOf(
              object
            )} given`
          );
        }
        if (propertyKey == null) {
          throw new Error("No property name supplied");
        }
        let descriptor = Object.getOwnPropertyDescriptor(object, propertyKey);
        let proto = Object.getPrototypeOf(object);
        while (!descriptor && proto !== null) {
          descriptor = Object.getOwnPropertyDescriptor(proto, propertyKey);
          proto = Object.getPrototypeOf(proto);
        }
        if (!descriptor) {
          throw new Error(
            `Property \`${String(
              propertyKey
            )}\` does not exist in the provided object`
          );
        }
        if (!descriptor.configurable) {
          throw new Error(
            `Property \`${String(propertyKey)}\` is not declared configurable`
          );
        }
        if (descriptor.get !== void 0) {
          throw new Error(
            `Cannot replace the \`${String(
              propertyKey
            )}\` property because it has a getter. Use \`jest.spyOn(object, '${String(
              propertyKey
            )}', 'get').mockReturnValue(value)\` instead.`
          );
        }
        if (descriptor.set !== void 0) {
          throw new Error(
            `Cannot replace the \`${String(
              propertyKey
            )}\` property because it has a setter. Use \`jest.spyOn(object, '${String(
              propertyKey
            )}', 'set').mockReturnValue(value)\` instead.`
          );
        }
        if (typeof descriptor.value === "function") {
          throw new Error(
            `Cannot replace the \`${String(
              propertyKey
            )}\` property because it is a function. Use \`jest.spyOn(object, '${String(
              propertyKey
            )}')\` instead.`
          );
        }
        const existingRestore = this._findReplacedProperty(object, propertyKey);
        if (existingRestore) {
          return existingRestore.replaced.replaceValue(value);
        }
        const isPropertyOwner = Object.prototype.hasOwnProperty.call(
          object,
          propertyKey
        );
        const originalValue = descriptor.value;
        const restore = () => {
          if (isPropertyOwner) {
            object[propertyKey] = originalValue;
          } else {
            delete object[propertyKey];
          }
        };
        const replaced = {
          replaceValue: (value2) => {
            object[propertyKey] = value2;
            return replaced;
          },
          restore: () => {
            restore();
            this._spyState.delete(restore);
          }
        };
        restore.object = object;
        restore.property = propertyKey;
        restore.replaced = replaced;
        this._spyState.add(restore);
        return replaced.replaceValue(value);
      }
      clearAllMocks() {
        this._mockState = /* @__PURE__ */ new WeakMap();
      }
      resetAllMocks() {
        this._mockConfigRegistry = /* @__PURE__ */ new WeakMap();
        this._mockState = /* @__PURE__ */ new WeakMap();
      }
      restoreAllMocks() {
        this._spyState.forEach((restore) => restore());
        this._spyState = /* @__PURE__ */ new Set();
      }
      _typeOf(value) {
        return value == null ? `${value}` : typeof value;
      }
      mocked(source, _options) {
        return source;
      }
    };
    exports2.ModuleMocker = ModuleMocker;
    var JestMock = new ModuleMocker(globalThis);
    var fn = JestMock.fn.bind(JestMock);
    exports2.fn = fn;
    var spyOn = JestMock.spyOn.bind(JestMock);
    exports2.spyOn = spyOn;
    var mocked = JestMock.mocked.bind(JestMock);
    exports2.mocked = mocked;
    var replaceProperty = JestMock.replaceProperty.bind(JestMock);
    exports2.replaceProperty = replaceProperty;
  }
});

// packages/playwright/bundles/expect/src/expectBundleImpl.ts
var expectBundleImpl_exports = {};
__export(expectBundleImpl_exports, {
  EXPECTED_COLOR: () => import_jest_matcher_utils6.EXPECTED_COLOR,
  INVERTED_COLOR: () => import_jest_matcher_utils6.INVERTED_COLOR,
  RECEIVED_COLOR: () => import_jest_matcher_utils6.RECEIVED_COLOR,
  asymmetricMatchers: () => asymmetricMatchers,
  expect: () => expect2,
  matcherUtils: () => matcherUtils3,
  mock: () => mock,
  printReceived: () => import_jest_matcher_utils6.printReceived
});
module.exports = __toCommonJS(expectBundleImpl_exports);
var mu = __toESM(require_build5());

// packages/playwright/bundles/expect/third_party/asymmetricMatchers.ts
var import_expect_utils = __toESM(require_build6());
var matcherUtils = __toESM(require_build5());
var import_jest_util = __toESM(require_build7());

// packages/playwright/bundles/expect/third_party/jestMatchersObject.ts
var import_jest_get_type = __toESM(require_build());
var JEST_MATCHERS_OBJECT = Symbol.for("$$jest-matchers-object");
var INTERNAL_MATCHER_FLAG = Symbol.for("$$jest-internal-matcher");
if (!Object.prototype.hasOwnProperty.call(globalThis, JEST_MATCHERS_OBJECT)) {
  const defaultState = {
    assertionCalls: 0,
    expectedAssertionsNumber: null,
    isExpectingAssertions: false,
    numPassingAsserts: 0,
    suppressedErrors: []
    // errors that are not thrown immediately.
  };
  Object.defineProperty(globalThis, JEST_MATCHERS_OBJECT, {
    value: {
      customEqualityTesters: [],
      matchers: /* @__PURE__ */ Object.create(null),
      state: defaultState
    }
  });
}
var getState = () => globalThis[JEST_MATCHERS_OBJECT].state;
var setState = (state) => {
  Object.assign(globalThis[JEST_MATCHERS_OBJECT].state, state);
};
var getMatchers = () => globalThis[JEST_MATCHERS_OBJECT].matchers;
var setMatchers = (matchers3, isInternal, expect3) => {
  Object.keys(matchers3).forEach((key) => {
    const matcher = matchers3[key];
    if (typeof matcher !== "function") {
      throw new TypeError(
        `expect.extend: \`${key}\` is not a valid matcher. Must be a function, is "${(0, import_jest_get_type.getType)(
          matcher
        )}"`
      );
    }
    Object.defineProperty(matcher, INTERNAL_MATCHER_FLAG, {
      value: isInternal
    });
    if (!isInternal) {
      class CustomMatcher extends AsymmetricMatcher {
        constructor(inverse = false, ...sample) {
          super(sample, inverse);
        }
        asymmetricMatch(other) {
          const { pass } = matcher.call(
            this.getMatcherContext(),
            other,
            ...this.sample
          );
          return this.inverse ? !pass : pass;
        }
        toString() {
          return `${this.inverse ? "not." : ""}${key}`;
        }
        getExpectedType() {
          return "any";
        }
        toAsymmetricMatcher() {
          return `${this.toString()}<${this.sample.map(String).join(", ")}>`;
        }
      }
      Object.defineProperty(expect3, key, {
        configurable: true,
        enumerable: true,
        value: (...sample) => new CustomMatcher(false, ...sample),
        writable: true
      });
      Object.defineProperty(expect3.not, key, {
        configurable: true,
        enumerable: true,
        value: (...sample) => new CustomMatcher(true, ...sample),
        writable: true
      });
    }
  });
  Object.assign(globalThis[JEST_MATCHERS_OBJECT].matchers, matchers3);
};
var getCustomEqualityTesters = () => globalThis[JEST_MATCHERS_OBJECT].customEqualityTesters;
var addCustomEqualityTesters = (newTesters) => {
  if (!Array.isArray(newTesters)) {
    throw new TypeError(
      `expect.customEqualityTesters: Must be set to an array of Testers. Was given "${(0, import_jest_get_type.getType)(
        newTesters
      )}"`
    );
  }
  globalThis[JEST_MATCHERS_OBJECT].customEqualityTesters.push(
    ...newTesters
  );
};

// packages/playwright/bundles/expect/third_party/asymmetricMatchers.ts
var functionToString = Function.prototype.toString;
function fnNameFor(func) {
  if (func.name)
    return func.name;
  const matches = functionToString.call(func).match(/^(?:async)?\s*function\s*\*?\s*([\w$]+)\s*\(/);
  return matches ? matches[1] : "<anonymous>";
}
var utils = Object.freeze({
  ...matcherUtils,
  iterableEquality: import_expect_utils.iterableEquality,
  subsetEquality: import_expect_utils.subsetEquality
});
function getPrototype(obj) {
  if (Object.getPrototypeOf)
    return Object.getPrototypeOf(obj);
  if (obj.constructor.prototype === obj)
    return null;
  return obj.constructor.prototype;
}
function hasProperty(obj, property) {
  if (!obj)
    return false;
  if (Object.prototype.hasOwnProperty.call(obj, property))
    return true;
  return hasProperty(getPrototype(obj), property);
}
var AsymmetricMatcher = class {
  constructor(sample, inverse = false) {
    this.sample = sample;
    this.inverse = inverse;
    this.$$typeof = Symbol.for("jest.asymmetricMatcher");
  }
  getMatcherContext() {
    return {
      customTesters: getCustomEqualityTesters(),
      dontThrow: () => {
      },
      ...getState(),
      equals: import_expect_utils.equals,
      isNot: this.inverse,
      utils
    };
  }
};
var Any = class extends AsymmetricMatcher {
  constructor(sample) {
    if (typeof sample === "undefined") {
      throw new TypeError(
        "any() expects to be passed a constructor function. Please pass one or use anything() to match any object."
      );
    }
    super(sample);
  }
  asymmetricMatch(other) {
    if (this.sample === String)
      return typeof other === "string" || other instanceof String;
    if (this.sample === Number)
      return typeof other === "number" || other instanceof Number;
    if (this.sample === Function)
      return typeof other === "function" || other instanceof Function;
    if (this.sample === Boolean)
      return typeof other === "boolean" || other instanceof Boolean;
    if (this.sample === BigInt)
      return typeof other === "bigint" || other instanceof BigInt;
    if (this.sample === Symbol)
      return typeof other === "symbol" || other instanceof Symbol;
    if (this.sample === Object)
      return typeof other === "object";
    return other instanceof this.sample;
  }
  toString() {
    return "Any";
  }
  getExpectedType() {
    if (this.sample === String)
      return "string";
    if (this.sample === Number)
      return "number";
    if (this.sample === Function)
      return "function";
    if (this.sample === Object)
      return "object";
    if (this.sample === Boolean)
      return "boolean";
    return fnNameFor(this.sample);
  }
  toAsymmetricMatcher() {
    return `Any<${fnNameFor(this.sample)}>`;
  }
};
var Anything = class extends AsymmetricMatcher {
  asymmetricMatch(other) {
    return other != null;
  }
  toString() {
    return "Anything";
  }
  // No getExpectedType method, because it matches either null or undefined.
  toAsymmetricMatcher() {
    return "Anything";
  }
};
var ArrayContaining = class extends AsymmetricMatcher {
  constructor(sample, inverse = false) {
    super(sample, inverse);
  }
  asymmetricMatch(other) {
    if (!Array.isArray(this.sample)) {
      throw new Error(
        `You must provide an array to ${this.toString()}, not '${typeof this.sample}'.`
      );
    }
    const matcherContext = this.getMatcherContext();
    const result = this.sample.length === 0 || Array.isArray(other) && this.sample.every(
      (item) => other.some(
        (another) => (0, import_expect_utils.equals)(item, another, matcherContext.customTesters)
      )
    );
    return this.inverse ? !result : result;
  }
  toString() {
    return `Array${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "array";
  }
};
var ObjectContaining = class extends AsymmetricMatcher {
  constructor(sample, inverse = false) {
    super(sample, inverse);
  }
  asymmetricMatch(other) {
    if (typeof this.sample !== "object") {
      throw new Error(
        `You must provide an object to ${this.toString()}, not '${typeof this.sample}'.`
      );
    }
    let result = true;
    const matcherContext = this.getMatcherContext();
    const objectKeys = (0, import_expect_utils.getObjectKeys)(this.sample);
    for (const key of objectKeys) {
      if (!hasProperty(other, key) || !(0, import_expect_utils.equals)(this.sample[key], other[key], matcherContext.customTesters)) {
        result = false;
        break;
      }
    }
    return this.inverse ? !result : result;
  }
  toString() {
    return `Object${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "object";
  }
};
var StringContaining = class extends AsymmetricMatcher {
  constructor(sample, inverse = false) {
    if (!(0, import_expect_utils.isA)("String", sample))
      throw new Error("Expected is not a string");
    super(sample, inverse);
  }
  asymmetricMatch(other) {
    const result = (0, import_expect_utils.isA)("String", other) && other.includes(this.sample);
    return this.inverse ? !result : result;
  }
  toString() {
    return `String${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "string";
  }
};
var StringMatching = class extends AsymmetricMatcher {
  constructor(sample, inverse = false) {
    if (!(0, import_expect_utils.isA)("String", sample) && !(0, import_expect_utils.isA)("RegExp", sample))
      throw new Error("Expected is not a String or a RegExp");
    super(new RegExp(sample), inverse);
  }
  asymmetricMatch(other) {
    const result = (0, import_expect_utils.isA)("String", other) && this.sample.test(other);
    return this.inverse ? !result : result;
  }
  toString() {
    return `String${this.inverse ? "Not" : ""}Matching`;
  }
  getExpectedType() {
    return "string";
  }
};
var CloseTo = class extends AsymmetricMatcher {
  constructor(sample, precision = 2, inverse = false) {
    if (!(0, import_expect_utils.isA)("Number", sample))
      throw new Error("Expected is not a Number");
    if (!(0, import_expect_utils.isA)("Number", precision))
      throw new Error("Precision is not a Number");
    super(sample);
    this.inverse = inverse;
    this.precision = precision;
  }
  asymmetricMatch(other) {
    if (!(0, import_expect_utils.isA)("Number", other))
      return false;
    let result = false;
    if (other === Infinity && this.sample === Infinity) {
      result = true;
    } else if (other === -Infinity && this.sample === -Infinity) {
      result = true;
    } else {
      result = Math.abs(this.sample - other) < Math.pow(10, -this.precision) / 2;
    }
    return this.inverse ? !result : result;
  }
  toString() {
    return `Number${this.inverse ? "Not" : ""}CloseTo`;
  }
  getExpectedType() {
    return "number";
  }
  toAsymmetricMatcher() {
    return [
      this.toString(),
      this.sample,
      `(${(0, import_jest_util.pluralize)("digit", this.precision)})`
    ].join(" ");
  }
};
var any = (expectedObject) => new Any(expectedObject);
var anything = () => new Anything();
var arrayContaining = (sample) => new ArrayContaining(sample);
var arrayNotContaining = (sample) => new ArrayContaining(sample, true);
var objectContaining = (sample) => new ObjectContaining(sample);
var objectNotContaining = (sample) => new ObjectContaining(sample, true);
var stringContaining = (expected) => new StringContaining(expected);
var stringNotContaining = (expected) => new StringContaining(expected, true);
var stringMatching = (expected) => new StringMatching(expected);
var stringNotMatching = (expected) => new StringMatching(expected, true);
var closeTo = (expected, precision) => new CloseTo(expected, precision);
var notCloseTo = (expected, precision) => new CloseTo(expected, precision, true);

// packages/playwright/bundles/expect/third_party/index.ts
var import_expect_utils5 = __toESM(require_build6());
var matcherUtils2 = __toESM(require_build5());
var import_jest_util2 = __toESM(require_build7());

// packages/playwright/bundles/expect/third_party/extractExpectedAssertionsErrors.ts
var import_jest_matcher_utils = __toESM(require_build5());
var resetAssertionsLocalState = () => {
  setState({
    assertionCalls: 0,
    expectedAssertionsNumber: null,
    isExpectingAssertions: false,
    numPassingAsserts: 0
  });
};
var extractExpectedAssertionsErrors = () => {
  const result = [];
  const {
    assertionCalls,
    expectedAssertionsNumber,
    expectedAssertionsNumberError,
    isExpectingAssertions,
    isExpectingAssertionsError
  } = getState();
  resetAssertionsLocalState();
  if (typeof expectedAssertionsNumber === "number" && assertionCalls !== expectedAssertionsNumber) {
    const numOfAssertionsExpected = (0, import_jest_matcher_utils.EXPECTED_COLOR)(
      (0, import_jest_matcher_utils.pluralize)("assertion", expectedAssertionsNumber)
    );
    expectedAssertionsNumberError.message = `${(0, import_jest_matcher_utils.matcherHint)(".assertions", "", expectedAssertionsNumber.toString(), {
      isDirectExpectCall: true
    })}

Expected ${numOfAssertionsExpected} to be called but received ${(0, import_jest_matcher_utils.RECEIVED_COLOR)(
      (0, import_jest_matcher_utils.pluralize)("assertion call", assertionCalls || 0)
    )}.`;
    result.push({
      actual: assertionCalls.toString(),
      error: expectedAssertionsNumberError,
      expected: expectedAssertionsNumber.toString()
    });
  }
  if (isExpectingAssertions && assertionCalls === 0) {
    const expected = (0, import_jest_matcher_utils.EXPECTED_COLOR)("at least one assertion");
    const received = (0, import_jest_matcher_utils.RECEIVED_COLOR)("received none");
    isExpectingAssertionsError.message = `${(0, import_jest_matcher_utils.matcherHint)(
      ".hasAssertions",
      "",
      "",
      { isDirectExpectCall: true }
    )}

Expected ${expected} to be called but ${received}.`;
    result.push({
      actual: "none",
      error: isExpectingAssertionsError,
      expected: "at least one"
    });
  }
  return result;
};
var extractExpectedAssertionsErrors_default = extractExpectedAssertionsErrors;

// packages/playwright/bundles/expect/third_party/matchers.ts
var import_expect_utils2 = __toESM(require_build6());
var import_jest_get_type2 = __toESM(require_build());
var import_jest_matcher_utils3 = __toESM(require_build5());

// packages/playwright/bundles/expect/third_party/print.ts
var import_jest_matcher_utils2 = __toESM(require_build5());
var printSubstring = (val) => val.replace(/"|\\/g, "\\$&");
var printReceivedStringContainExpectedSubstring = (received, start, length) => (0, import_jest_matcher_utils2.RECEIVED_COLOR)(
  `"${printSubstring(received.slice(0, start))}${(0, import_jest_matcher_utils2.INVERTED_COLOR)(
    printSubstring(received.slice(start, start + length))
  )}${printSubstring(received.slice(start + length))}"`
);
var printReceivedStringContainExpectedResult = (received, result) => result === null ? (0, import_jest_matcher_utils2.printReceived)(received) : printReceivedStringContainExpectedSubstring(
  received,
  result.index,
  result[0].length
);
var printReceivedArrayContainExpectedItem = (received, index) => (0, import_jest_matcher_utils2.RECEIVED_COLOR)(
  `[${received.map((item, i) => {
    const stringified = (0, import_jest_matcher_utils2.stringify)(item);
    return i === index ? (0, import_jest_matcher_utils2.INVERTED_COLOR)(stringified) : stringified;
  }).join(", ")}]`
);
var printCloseTo = (receivedDiff, expectedDiff, precision, isNot) => {
  const receivedDiffString = (0, import_jest_matcher_utils2.stringify)(receivedDiff);
  const expectedDiffString = receivedDiffString.includes("e") ? (
    // toExponential arg is number of digits after the decimal point.
    expectedDiff.toExponential(0)
  ) : 0 <= precision && precision < 20 ? (
    // toFixed arg is number of digits after the decimal point.
    // It may be a value between 0 and 20 inclusive.
    // Implementations may optionally support a larger range of values.
    expectedDiff.toFixed(precision + 1)
  ) : (0, import_jest_matcher_utils2.stringify)(expectedDiff);
  return `Expected precision:  ${isNot ? "    " : ""}  ${(0, import_jest_matcher_utils2.stringify)(precision)}
Expected difference: ${isNot ? "not " : ""}< ${(0, import_jest_matcher_utils2.EXPECTED_COLOR)(
    expectedDiffString
  )}
Received difference: ${isNot ? "    " : ""}  ${(0, import_jest_matcher_utils2.RECEIVED_COLOR)(
    receivedDiffString
  )}`;
};
var printExpectedConstructorName = (label, expected) => `${printConstructorName(label, expected, false, true)}
`;
var printExpectedConstructorNameNot = (label, expected) => `${printConstructorName(label, expected, true, true)}
`;
var printReceivedConstructorName = (label, received) => `${printConstructorName(label, received, false, false)}
`;
var printReceivedConstructorNameNot = (label, received, expected) => typeof expected.name === "string" && expected.name.length !== 0 && typeof received.name === "string" && received.name.length !== 0 ? `${printConstructorName(label, received, true, false)} ${Object.getPrototypeOf(received) === expected ? "extends" : "extends \u2026 extends"} ${(0, import_jest_matcher_utils2.EXPECTED_COLOR)(expected.name)}
` : `${printConstructorName(label, received, false, false)}
`;
var printConstructorName = (label, constructor, isNot, isExpected) => typeof constructor.name !== "string" ? `${label} name is not a string` : constructor.name.length === 0 ? `${label} name is an empty string` : `${label}: ${!isNot ? "" : isExpected ? "not " : "    "}${isExpected ? (0, import_jest_matcher_utils2.EXPECTED_COLOR)(constructor.name) : (0, import_jest_matcher_utils2.RECEIVED_COLOR)(constructor.name)}`;

// packages/playwright/bundles/expect/third_party/matchers.ts
var EXPECTED_LABEL = "Expected";
var RECEIVED_LABEL = "Received";
var EXPECTED_VALUE_LABEL = "Expected value";
var RECEIVED_VALUE_LABEL = "Received value";
var isExpand = (expand) => expand !== false;
var toStrictEqualTesters = [
  import_expect_utils2.iterableEquality,
  import_expect_utils2.typeEquality,
  import_expect_utils2.sparseArrayEquality,
  import_expect_utils2.arrayBufferEquality
];
var matchers = {
  toBe(received, expected) {
    const matcherName = "toBe";
    const options = {
      comment: "Object.is equality",
      isNot: this.isNot,
      promise: this.promise
    };
    const pass = Object.is(received, expected);
    const message = pass ? () => (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options) + `

Expected: not ${(0, import_jest_matcher_utils3.printExpected)(expected)}` : () => {
      const expectedType = (0, import_jest_get_type2.getType)(expected);
      let deepEqualityName = null;
      if (expectedType !== "map" && expectedType !== "set") {
        if ((0, import_expect_utils2.equals)(
          received,
          expected,
          [...this.customTesters, ...toStrictEqualTesters],
          true
        ))
          deepEqualityName = "toStrictEqual";
        else if ((0, import_expect_utils2.equals)(received, expected, [
          ...this.customTesters,
          import_expect_utils2.iterableEquality
        ]))
          deepEqualityName = "toEqual";
      }
      return (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options) + "\n\n" + (deepEqualityName !== null ? `${(0, import_jest_matcher_utils3.DIM_COLOR)(
        `If it should pass with deep equality, replace "${matcherName}" with "${deepEqualityName}"`
      )}

` : "") + (0, import_jest_matcher_utils3.printDiffOrStringify)(
        expected,
        received,
        EXPECTED_LABEL,
        RECEIVED_LABEL,
        isExpand(this.expand)
      );
    };
    return { actual: received, expected, message, name: matcherName, pass };
  },
  toBeCloseTo(received, expected, precision = 2) {
    const matcherName = "toBeCloseTo";
    const secondArgument = arguments.length === 3 ? "precision" : void 0;
    const isNot = this.isNot;
    const options = {
      isNot,
      promise: this.promise,
      secondArgument,
      secondArgumentColor: (arg) => arg
    };
    if (typeof expected !== "number") {
      throw new Error(
        (0, import_jest_matcher_utils3.matcherErrorMessage)(
          (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options),
          `${(0, import_jest_matcher_utils3.EXPECTED_COLOR)("expected")} value must be a number`,
          (0, import_jest_matcher_utils3.printWithType)("Expected", expected, import_jest_matcher_utils3.printExpected)
        )
      );
    }
    if (typeof received !== "number") {
      throw new Error(
        (0, import_jest_matcher_utils3.matcherErrorMessage)(
          (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options),
          `${(0, import_jest_matcher_utils3.RECEIVED_COLOR)("received")} value must be a number`,
          (0, import_jest_matcher_utils3.printWithType)("Received", received, import_jest_matcher_utils3.printReceived)
        )
      );
    }
    let pass = false;
    let expectedDiff = 0;
    let receivedDiff = 0;
    if (received === Infinity && expected === Infinity) {
      pass = true;
    } else if (received === -Infinity && expected === -Infinity) {
      pass = true;
    } else {
      expectedDiff = Math.pow(10, -precision) / 2;
      receivedDiff = Math.abs(expected - received);
      pass = receivedDiff < expectedDiff;
    }
    const message = pass ? () => (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options) + `

Expected: not ${(0, import_jest_matcher_utils3.printExpected)(expected)}
` + (receivedDiff === 0 ? "" : `Received:     ${(0, import_jest_matcher_utils3.printReceived)(received)}

${printCloseTo(receivedDiff, expectedDiff, precision, isNot)}`) : () => (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options) + `

Expected: ${(0, import_jest_matcher_utils3.printExpected)(expected)}
Received: ${(0, import_jest_matcher_utils3.printReceived)(received)}

` + printCloseTo(receivedDiff, expectedDiff, precision, isNot);
    return { message, pass };
  },
  toBeDefined(received, expected) {
    const matcherName = "toBeDefined";
    const options = {
      isNot: this.isNot,
      promise: this.promise
    };
    (0, import_jest_matcher_utils3.ensureNoExpected)(expected, matcherName, options);
    const pass = received !== void 0;
    const message = () => (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, "", options) + `

Received: ${(0, import_jest_matcher_utils3.printReceived)(received)}`;
    return { message, pass };
  },
  toBeFalsy(received, expected) {
    const matcherName = "toBeFalsy";
    const options = {
      isNot: this.isNot,
      promise: this.promise
    };
    (0, import_jest_matcher_utils3.ensureNoExpected)(expected, matcherName, options);
    const pass = !received;
    const message = () => (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, "", options) + `

Received: ${(0, import_jest_matcher_utils3.printReceived)(received)}`;
    return { message, pass };
  },
  toBeGreaterThan(received, expected) {
    const matcherName = "toBeGreaterThan";
    const isNot = this.isNot;
    const options = {
      isNot,
      promise: this.promise
    };
    (0, import_jest_matcher_utils3.ensureNumbers)(received, expected, matcherName, options);
    const pass = received > expected;
    const message = () => (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options) + `

Expected:${isNot ? " not" : ""} > ${(0, import_jest_matcher_utils3.printExpected)(expected)}
Received:${isNot ? "    " : ""}   ${(0, import_jest_matcher_utils3.printReceived)(received)}`;
    return { message, pass };
  },
  toBeGreaterThanOrEqual(received, expected) {
    const matcherName = "toBeGreaterThanOrEqual";
    const isNot = this.isNot;
    const options = {
      isNot,
      promise: this.promise
    };
    (0, import_jest_matcher_utils3.ensureNumbers)(received, expected, matcherName, options);
    const pass = received >= expected;
    const message = () => (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options) + `

Expected:${isNot ? " not" : ""} >= ${(0, import_jest_matcher_utils3.printExpected)(expected)}
Received:${isNot ? "    " : ""}    ${(0, import_jest_matcher_utils3.printReceived)(received)}`;
    return { message, pass };
  },
  toBeInstanceOf(received, expected) {
    const matcherName = "toBeInstanceOf";
    const options = {
      isNot: this.isNot,
      promise: this.promise
    };
    if (typeof expected !== "function") {
      throw new Error(
        (0, import_jest_matcher_utils3.matcherErrorMessage)(
          (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options),
          `${(0, import_jest_matcher_utils3.EXPECTED_COLOR)("expected")} value must be a function`,
          (0, import_jest_matcher_utils3.printWithType)("Expected", expected, import_jest_matcher_utils3.printExpected)
        )
      );
    }
    const pass = received instanceof expected;
    const message = pass ? () => (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options) + "\n\n" + printExpectedConstructorNameNot("Expected constructor", expected) + (typeof received.constructor === "function" && received.constructor !== expected ? printReceivedConstructorNameNot(
      "Received constructor",
      received.constructor,
      expected
    ) : "") : () => (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options) + "\n\n" + printExpectedConstructorName("Expected constructor", expected) + ((0, import_jest_get_type2.isPrimitive)(received) || Object.getPrototypeOf(received) === null ? `
Received value has no prototype
Received value: ${(0, import_jest_matcher_utils3.printReceived)(
      received
    )}` : typeof received.constructor !== "function" ? `
Received value: ${(0, import_jest_matcher_utils3.printReceived)(received)}` : printReceivedConstructorName(
      "Received constructor",
      received.constructor
    ));
    return { message, pass };
  },
  toBeLessThan(received, expected) {
    const matcherName = "toBeLessThan";
    const isNot = this.isNot;
    const options = {
      isNot,
      promise: this.promise
    };
    (0, import_jest_matcher_utils3.ensureNumbers)(received, expected, matcherName, options);
    const pass = received < expected;
    const message = () => (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options) + `

Expected:${isNot ? " not" : ""} < ${(0, import_jest_matcher_utils3.printExpected)(expected)}
Received:${isNot ? "    " : ""}   ${(0, import_jest_matcher_utils3.printReceived)(received)}`;
    return { message, pass };
  },
  toBeLessThanOrEqual(received, expected) {
    const matcherName = "toBeLessThanOrEqual";
    const isNot = this.isNot;
    const options = {
      isNot,
      promise: this.promise
    };
    (0, import_jest_matcher_utils3.ensureNumbers)(received, expected, matcherName, options);
    const pass = received <= expected;
    const message = () => (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options) + `

Expected:${isNot ? " not" : ""} <= ${(0, import_jest_matcher_utils3.printExpected)(expected)}
Received:${isNot ? "    " : ""}    ${(0, import_jest_matcher_utils3.printReceived)(received)}`;
    return { message, pass };
  },
  toBeNaN(received, expected) {
    const matcherName = "toBeNaN";
    const options = {
      isNot: this.isNot,
      promise: this.promise
    };
    (0, import_jest_matcher_utils3.ensureNoExpected)(expected, matcherName, options);
    const pass = Number.isNaN(received);
    const message = () => (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, "", options) + `

Received: ${(0, import_jest_matcher_utils3.printReceived)(received)}`;
    return { message, pass };
  },
  toBeNull(received, expected) {
    const matcherName = "toBeNull";
    const options = {
      isNot: this.isNot,
      promise: this.promise
    };
    (0, import_jest_matcher_utils3.ensureNoExpected)(expected, matcherName, options);
    const pass = received === null;
    const message = () => (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, "", options) + `

Received: ${(0, import_jest_matcher_utils3.printReceived)(received)}`;
    return { message, pass };
  },
  toBeTruthy(received, expected) {
    const matcherName = "toBeTruthy";
    const options = {
      isNot: this.isNot,
      promise: this.promise
    };
    (0, import_jest_matcher_utils3.ensureNoExpected)(expected, matcherName, options);
    const pass = !!received;
    const message = () => (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, "", options) + `

Received: ${(0, import_jest_matcher_utils3.printReceived)(received)}`;
    return { message, pass };
  },
  toBeUndefined(received, expected) {
    const matcherName = "toBeUndefined";
    const options = {
      isNot: this.isNot,
      promise: this.promise
    };
    (0, import_jest_matcher_utils3.ensureNoExpected)(expected, matcherName, options);
    const pass = received === void 0;
    const message = () => (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, "", options) + `

Received: ${(0, import_jest_matcher_utils3.printReceived)(received)}`;
    return { message, pass };
  },
  toContain(received, expected) {
    const matcherName = "toContain";
    const isNot = this.isNot;
    const options = {
      comment: "indexOf",
      isNot,
      promise: this.promise
    };
    if (received == null) {
      throw new Error(
        (0, import_jest_matcher_utils3.matcherErrorMessage)(
          (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options),
          `${(0, import_jest_matcher_utils3.RECEIVED_COLOR)("received")} value must not be null nor undefined`,
          (0, import_jest_matcher_utils3.printWithType)("Received", received, import_jest_matcher_utils3.printReceived)
        )
      );
    }
    if (typeof received === "string") {
      const wrongTypeErrorMessage = `${(0, import_jest_matcher_utils3.EXPECTED_COLOR)(
        "expected"
      )} value must be a string if ${(0, import_jest_matcher_utils3.RECEIVED_COLOR)(
        "received"
      )} value is a string`;
      if (typeof expected !== "string") {
        throw new Error(
          (0, import_jest_matcher_utils3.matcherErrorMessage)(
            (0, import_jest_matcher_utils3.matcherHint)(matcherName, received, String(expected), options),
            wrongTypeErrorMessage,
            (0, import_jest_matcher_utils3.printWithType)("Expected", expected, import_jest_matcher_utils3.printExpected) + "\n" + (0, import_jest_matcher_utils3.printWithType)("Received", received, import_jest_matcher_utils3.printReceived)
          )
        );
      }
      const index2 = received.indexOf(String(expected));
      const pass2 = index2 !== -1;
      const message2 = () => {
        const labelExpected = `Expected ${typeof expected === "string" ? "substring" : "value"}`;
        const labelReceived = "Received string";
        const printLabel = (0, import_jest_matcher_utils3.getLabelPrinter)(labelExpected, labelReceived);
        return (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options) + `

${printLabel(labelExpected)}${isNot ? "not " : ""}${(0, import_jest_matcher_utils3.printExpected)(
          expected
        )}
${printLabel(labelReceived)}${isNot ? "    " : ""}${isNot ? printReceivedStringContainExpectedSubstring(
          received,
          index2,
          String(expected).length
        ) : (0, import_jest_matcher_utils3.printReceived)(received)}`;
      };
      return { message: message2, pass: pass2 };
    }
    const indexable = Array.from(received);
    const index = indexable.indexOf(expected);
    const pass = index !== -1;
    const message = () => {
      const labelExpected = "Expected value";
      const labelReceived = `Received ${(0, import_jest_get_type2.getType)(received)}`;
      const printLabel = (0, import_jest_matcher_utils3.getLabelPrinter)(labelExpected, labelReceived);
      return (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options) + `

${printLabel(labelExpected)}${isNot ? "not " : ""}${(0, import_jest_matcher_utils3.printExpected)(
        expected
      )}
${printLabel(labelReceived)}${isNot ? "    " : ""}${isNot && Array.isArray(received) ? printReceivedArrayContainExpectedItem(received, index) : (0, import_jest_matcher_utils3.printReceived)(received)}` + (!isNot && indexable.findIndex(
        (item) => (0, import_expect_utils2.equals)(item, expected, [...this.customTesters, import_expect_utils2.iterableEquality])
      ) !== -1 ? `

${import_jest_matcher_utils3.SUGGEST_TO_CONTAIN_EQUAL}` : "");
    };
    return { message, pass };
  },
  toContainEqual(received, expected) {
    const matcherName = "toContainEqual";
    const isNot = this.isNot;
    const options = {
      comment: "deep equality",
      isNot,
      promise: this.promise
    };
    if (received == null) {
      throw new Error(
        (0, import_jest_matcher_utils3.matcherErrorMessage)(
          (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options),
          `${(0, import_jest_matcher_utils3.RECEIVED_COLOR)("received")} value must not be null nor undefined`,
          (0, import_jest_matcher_utils3.printWithType)("Received", received, import_jest_matcher_utils3.printReceived)
        )
      );
    }
    const index = Array.from(received).findIndex(
      (item) => (0, import_expect_utils2.equals)(item, expected, [...this.customTesters, import_expect_utils2.iterableEquality])
    );
    const pass = index !== -1;
    const message = () => {
      const labelExpected = "Expected value";
      const labelReceived = `Received ${(0, import_jest_get_type2.getType)(received)}`;
      const printLabel = (0, import_jest_matcher_utils3.getLabelPrinter)(labelExpected, labelReceived);
      return (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options) + `

${printLabel(labelExpected)}${isNot ? "not " : ""}${(0, import_jest_matcher_utils3.printExpected)(
        expected
      )}
${printLabel(labelReceived)}${isNot ? "    " : ""}${isNot && Array.isArray(received) ? printReceivedArrayContainExpectedItem(received, index) : (0, import_jest_matcher_utils3.printReceived)(received)}`;
    };
    return { message, pass };
  },
  toEqual(received, expected) {
    const matcherName = "toEqual";
    const options = {
      comment: "deep equality",
      isNot: this.isNot,
      promise: this.promise
    };
    const pass = (0, import_expect_utils2.equals)(received, expected, [
      ...this.customTesters,
      import_expect_utils2.iterableEquality
    ]);
    const message = pass ? () => (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options) + `

Expected: not ${(0, import_jest_matcher_utils3.printExpected)(expected)}
` + ((0, import_jest_matcher_utils3.stringify)(expected) !== (0, import_jest_matcher_utils3.stringify)(received) ? `Received:     ${(0, import_jest_matcher_utils3.printReceived)(received)}` : "") : () => (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options) + "\n\n" + (0, import_jest_matcher_utils3.printDiffOrStringify)(
      expected,
      received,
      EXPECTED_LABEL,
      RECEIVED_LABEL,
      isExpand(this.expand)
    );
    return { actual: received, expected, message, name: matcherName, pass };
  },
  toHaveLength(received, expected) {
    const matcherName = "toHaveLength";
    const isNot = this.isNot;
    const options = {
      isNot,
      promise: this.promise
    };
    if (typeof (received == null ? void 0 : received.length) !== "number") {
      throw new Error(
        (0, import_jest_matcher_utils3.matcherErrorMessage)(
          (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options),
          `${(0, import_jest_matcher_utils3.RECEIVED_COLOR)(
            "received"
          )} value must have a length property whose value must be a number`,
          (0, import_jest_matcher_utils3.printWithType)("Received", received, import_jest_matcher_utils3.printReceived)
        )
      );
    }
    (0, import_jest_matcher_utils3.ensureExpectedIsNonNegativeInteger)(expected, matcherName, options);
    const pass = received.length === expected;
    const message = () => {
      const labelExpected = "Expected length";
      const labelReceivedLength = "Received length";
      const labelReceivedValue = `Received ${(0, import_jest_get_type2.getType)(received)}`;
      const printLabel = (0, import_jest_matcher_utils3.getLabelPrinter)(
        labelExpected,
        labelReceivedLength,
        labelReceivedValue
      );
      return (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options) + `

${printLabel(labelExpected)}${isNot ? "not " : ""}${(0, import_jest_matcher_utils3.printExpected)(
        expected
      )}
` + (isNot ? "" : `${printLabel(labelReceivedLength)}${(0, import_jest_matcher_utils3.printReceived)(
        received.length
      )}
`) + `${printLabel(labelReceivedValue)}${isNot ? "    " : ""}${(0, import_jest_matcher_utils3.printReceived)(
        received
      )}`;
    };
    return { message, pass };
  },
  toHaveProperty(received, expectedPath, expectedValue) {
    const matcherName = "toHaveProperty";
    const expectedArgument = "path";
    const hasValue = arguments.length === 3;
    const options = {
      isNot: this.isNot,
      promise: this.promise,
      secondArgument: hasValue ? "value" : ""
    };
    if (received === null || received === void 0) {
      throw new Error(
        (0, import_jest_matcher_utils3.matcherErrorMessage)(
          (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, expectedArgument, options),
          `${(0, import_jest_matcher_utils3.RECEIVED_COLOR)("received")} value must not be null nor undefined`,
          (0, import_jest_matcher_utils3.printWithType)("Received", received, import_jest_matcher_utils3.printReceived)
        )
      );
    }
    const expectedPathType = (0, import_jest_get_type2.getType)(expectedPath);
    if (expectedPathType !== "string" && expectedPathType !== "array") {
      throw new Error(
        (0, import_jest_matcher_utils3.matcherErrorMessage)(
          (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, expectedArgument, options),
          `${(0, import_jest_matcher_utils3.EXPECTED_COLOR)("expected")} path must be a string or array`,
          (0, import_jest_matcher_utils3.printWithType)("Expected", expectedPath, import_jest_matcher_utils3.printExpected)
        )
      );
    }
    const expectedPathLength = typeof expectedPath === "string" ? (0, import_expect_utils2.pathAsArray)(expectedPath).length : expectedPath.length;
    if (expectedPathType === "array" && expectedPathLength === 0) {
      throw new Error(
        (0, import_jest_matcher_utils3.matcherErrorMessage)(
          (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, expectedArgument, options),
          `${(0, import_jest_matcher_utils3.EXPECTED_COLOR)("expected")} path must not be an empty array`,
          (0, import_jest_matcher_utils3.printWithType)("Expected", expectedPath, import_jest_matcher_utils3.printExpected)
        )
      );
    }
    const result = (0, import_expect_utils2.getPath)(received, expectedPath);
    const { lastTraversedObject, endPropIsDefined, hasEndProp, value } = result;
    const receivedPath = result.traversedPath;
    const hasCompletePath = receivedPath.length === expectedPathLength;
    const receivedValue = hasCompletePath ? result.value : lastTraversedObject;
    const pass = hasValue && endPropIsDefined ? (0, import_expect_utils2.equals)(value, expectedValue, [
      ...this.customTesters,
      import_expect_utils2.iterableEquality
    ]) : Boolean(hasEndProp);
    const message = pass ? () => (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, expectedArgument, options) + "\n\n" + (hasValue ? `Expected path: ${(0, import_jest_matcher_utils3.printExpected)(expectedPath)}

Expected value: not ${(0, import_jest_matcher_utils3.printExpected)(expectedValue)}${(0, import_jest_matcher_utils3.stringify)(expectedValue) !== (0, import_jest_matcher_utils3.stringify)(receivedValue) ? `
Received value:     ${(0, import_jest_matcher_utils3.printReceived)(receivedValue)}` : ""}` : `Expected path: not ${(0, import_jest_matcher_utils3.printExpected)(expectedPath)}

Received value: ${(0, import_jest_matcher_utils3.printReceived)(receivedValue)}`) : () => (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, expectedArgument, options) + `

Expected path: ${(0, import_jest_matcher_utils3.printExpected)(expectedPath)}
` + (hasCompletePath ? `
${(0, import_jest_matcher_utils3.printDiffOrStringify)(
      expectedValue,
      receivedValue,
      EXPECTED_VALUE_LABEL,
      RECEIVED_VALUE_LABEL,
      isExpand(this.expand)
    )}` : `Received path: ${(0, import_jest_matcher_utils3.printReceived)(
      expectedPathType === "array" || receivedPath.length === 0 ? receivedPath : receivedPath.join(".")
    )}

${hasValue ? `Expected value: ${(0, import_jest_matcher_utils3.printExpected)(expectedValue)}
` : ""}Received value: ${(0, import_jest_matcher_utils3.printReceived)(receivedValue)}`);
    return { message, pass };
  },
  toMatch(received, expected) {
    const matcherName = "toMatch";
    const options = {
      isNot: this.isNot,
      promise: this.promise
    };
    if (typeof received !== "string") {
      throw new Error(
        (0, import_jest_matcher_utils3.matcherErrorMessage)(
          (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options),
          `${(0, import_jest_matcher_utils3.RECEIVED_COLOR)("received")} value must be a string`,
          (0, import_jest_matcher_utils3.printWithType)("Received", received, import_jest_matcher_utils3.printReceived)
        )
      );
    }
    if (!(typeof expected === "string") && !(expected && typeof expected.test === "function")) {
      throw new Error(
        (0, import_jest_matcher_utils3.matcherErrorMessage)(
          (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options),
          `${(0, import_jest_matcher_utils3.EXPECTED_COLOR)(
            "expected"
          )} value must be a string or regular expression`,
          (0, import_jest_matcher_utils3.printWithType)("Expected", expected, import_jest_matcher_utils3.printExpected)
        )
      );
    }
    const pass = typeof expected === "string" ? received.includes(expected) : new RegExp(expected).test(received);
    const message = pass ? () => typeof expected === "string" ? (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options) + `

Expected substring: not ${(0, import_jest_matcher_utils3.printExpected)(expected)}
Received string:        ${printReceivedStringContainExpectedSubstring(
      received,
      received.indexOf(expected),
      expected.length
    )}` : (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options) + `

Expected pattern: not ${(0, import_jest_matcher_utils3.printExpected)(expected)}
Received string:      ${printReceivedStringContainExpectedResult(
      received,
      typeof expected.exec === "function" ? expected.exec(received) : null
    )}` : () => {
      const labelExpected = `Expected ${typeof expected === "string" ? "substring" : "pattern"}`;
      const labelReceived = "Received string";
      const printLabel = (0, import_jest_matcher_utils3.getLabelPrinter)(labelExpected, labelReceived);
      return (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options) + `

${printLabel(labelExpected)}${(0, import_jest_matcher_utils3.printExpected)(expected)}
${printLabel(labelReceived)}${(0, import_jest_matcher_utils3.printReceived)(received)}`;
    };
    return { message, pass };
  },
  toMatchObject(received, expected) {
    const matcherName = "toMatchObject";
    const options = {
      isNot: this.isNot,
      promise: this.promise
    };
    if (typeof received !== "object" || received === null) {
      throw new Error(
        (0, import_jest_matcher_utils3.matcherErrorMessage)(
          (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options),
          `${(0, import_jest_matcher_utils3.RECEIVED_COLOR)("received")} value must be a non-null object`,
          (0, import_jest_matcher_utils3.printWithType)("Received", received, import_jest_matcher_utils3.printReceived)
        )
      );
    }
    if (typeof expected !== "object" || expected === null) {
      throw new Error(
        (0, import_jest_matcher_utils3.matcherErrorMessage)(
          (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options),
          `${(0, import_jest_matcher_utils3.EXPECTED_COLOR)("expected")} value must be a non-null object`,
          (0, import_jest_matcher_utils3.printWithType)("Expected", expected, import_jest_matcher_utils3.printExpected)
        )
      );
    }
    const pass = (0, import_expect_utils2.equals)(received, expected, [
      ...this.customTesters,
      import_expect_utils2.iterableEquality,
      import_expect_utils2.subsetEquality
    ]);
    const message = pass ? () => (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options) + `

Expected: not ${(0, import_jest_matcher_utils3.printExpected)(expected)}` + ((0, import_jest_matcher_utils3.stringify)(expected) !== (0, import_jest_matcher_utils3.stringify)(received) ? `
Received:     ${(0, import_jest_matcher_utils3.printReceived)(received)}` : "") : () => (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options) + "\n\n" + (0, import_jest_matcher_utils3.printDiffOrStringify)(
      expected,
      (0, import_expect_utils2.getObjectSubset)(received, expected, this.customTesters),
      EXPECTED_LABEL,
      RECEIVED_LABEL,
      isExpand(this.expand)
    );
    return { message, pass };
  },
  toStrictEqual(received, expected) {
    const matcherName = "toStrictEqual";
    const options = {
      comment: "deep equality",
      isNot: this.isNot,
      promise: this.promise
    };
    const pass = (0, import_expect_utils2.equals)(
      received,
      expected,
      [...this.customTesters, ...toStrictEqualTesters],
      true
    );
    const message = pass ? () => (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options) + `

Expected: not ${(0, import_jest_matcher_utils3.printExpected)(expected)}
` + ((0, import_jest_matcher_utils3.stringify)(expected) !== (0, import_jest_matcher_utils3.stringify)(received) ? `Received:     ${(0, import_jest_matcher_utils3.printReceived)(received)}` : "") : () => (0, import_jest_matcher_utils3.matcherHint)(matcherName, void 0, void 0, options) + "\n\n" + (0, import_jest_matcher_utils3.printDiffOrStringify)(
      expected,
      received,
      EXPECTED_LABEL,
      RECEIVED_LABEL,
      isExpand(this.expand)
    );
    return { actual: received, expected, message, name: matcherName, pass };
  }
};
var matchers_default = matchers;

// packages/playwright/bundles/expect/third_party/spyMatchers.ts
var import_expect_utils3 = __toESM(require_build6());
var import_jest_get_type3 = __toESM(require_build());
var import_jest_matcher_utils4 = __toESM(require_build5());
var isExpand2 = (expand) => expand !== false;
var PRINT_LIMIT = 3;
var NO_ARGUMENTS = "called with 0 arguments";
var printExpectedArgs = (expected) => expected.length === 0 ? NO_ARGUMENTS : expected.map((arg) => (0, import_jest_matcher_utils4.printExpected)(arg)).join(", ");
var printReceivedArgs = (received, expected) => received.length === 0 ? NO_ARGUMENTS : received.map(
  (arg, i) => Array.isArray(expected) && i < expected.length && isEqualValue(expected[i], arg) ? printCommon(arg) : (0, import_jest_matcher_utils4.printReceived)(arg)
).join(", ");
var printCommon = (val) => (0, import_jest_matcher_utils4.DIM_COLOR)((0, import_jest_matcher_utils4.stringify)(val));
var isEqualValue = (expected, received) => (0, import_expect_utils3.equals)(expected, received, [...getCustomEqualityTesters(), import_expect_utils3.iterableEquality]);
var isEqualCall = (expected, received) => received.length === expected.length && isEqualValue(expected, received);
var isEqualReturn = (expected, result) => result.type === "return" && isEqualValue(expected, result.value);
var countReturns = (results) => results.reduce(
  (n, result) => result.type === "return" ? n + 1 : n,
  0
);
var printNumberOfReturns = (countReturns2, countCalls) => `
Number of returns: ${(0, import_jest_matcher_utils4.printReceived)(countReturns2)}${countCalls !== countReturns2 ? `
Number of calls:   ${(0, import_jest_matcher_utils4.printReceived)(countCalls)}` : ""}`;
var getRightAlignedPrinter = (label) => {
  const index = label.indexOf(":");
  const suffix = label.slice(index);
  return (string, isExpectedCall) => (isExpectedCall ? `->${" ".repeat(Math.max(0, index - 2 - string.length))}` : " ".repeat(Math.max(index - string.length))) + string + suffix;
};
var printReceivedCallsNegative = (expected, indexedCalls, isOnlyCall, iExpectedCall) => {
  if (indexedCalls.length === 0)
    return "";
  const label = "Received:     ";
  if (isOnlyCall)
    return `${label + printReceivedArgs(indexedCalls[0], expected)}
`;
  const printAligned = getRightAlignedPrinter(label);
  return `Received
${indexedCalls.reduce(
    (printed, [i, args]) => `${printed + printAligned(String(i + 1), i === iExpectedCall) + printReceivedArgs(args, expected)}
`,
    ""
  )}`;
};
var printExpectedReceivedCallsPositive = (expected, indexedCalls, expand, isOnlyCall, iExpectedCall) => {
  const expectedLine = `Expected: ${printExpectedArgs(expected)}
`;
  if (indexedCalls.length === 0)
    return expectedLine;
  const label = "Received: ";
  if (isOnlyCall && (iExpectedCall === 0 || iExpectedCall === void 0)) {
    const received = indexedCalls[0][1];
    if (isLineDiffableCall(expected, received)) {
      const lines = [
        (0, import_jest_matcher_utils4.EXPECTED_COLOR)("- Expected"),
        (0, import_jest_matcher_utils4.RECEIVED_COLOR)("+ Received"),
        ""
      ];
      const length = Math.max(expected.length, received.length);
      for (let i = 0; i < length; i += 1) {
        if (i < expected.length && i < received.length) {
          if (isEqualValue(expected[i], received[i])) {
            lines.push(`  ${printCommon(received[i])},`);
            continue;
          }
          if (isLineDiffableArg(expected[i], received[i])) {
            const difference = (0, import_jest_matcher_utils4.diff)(expected[i], received[i], { expand });
            if (typeof difference === "string" && difference.includes("- Expected") && difference.includes("+ Received")) {
              lines.push(`${difference.split("\n").slice(3).join("\n")},`);
              continue;
            }
          }
        }
        if (i < expected.length)
          lines.push(`${(0, import_jest_matcher_utils4.EXPECTED_COLOR)(`- ${(0, import_jest_matcher_utils4.stringify)(expected[i])}`)},`);
        if (i < received.length)
          lines.push(`${(0, import_jest_matcher_utils4.RECEIVED_COLOR)(`+ ${(0, import_jest_matcher_utils4.stringify)(received[i])}`)},`);
      }
      return `${lines.join("\n")}
`;
    }
    return `${expectedLine + label + printReceivedArgs(received, expected)}
`;
  }
  const printAligned = getRightAlignedPrinter(label);
  return expectedLine + "Received\n" + indexedCalls.reduce((printed, [i, received]) => {
    const aligned = printAligned(String(i + 1), i === iExpectedCall);
    return `${printed + ((i === iExpectedCall || iExpectedCall === void 0) && isLineDiffableCall(expected, received) ? aligned.replace(": ", "\n") + printDiffCall(expected, received, expand) : aligned + printReceivedArgs(received, expected))}
`;
  }, "");
};
var indentation = "Received".replace(/\w/g, " ");
var printDiffCall = (expected, received, expand) => received.map((arg, i) => {
  if (i < expected.length) {
    if (isEqualValue(expected[i], arg))
      return `${indentation}  ${printCommon(arg)},`;
    if (isLineDiffableArg(expected[i], arg)) {
      const difference = (0, import_jest_matcher_utils4.diff)(expected[i], arg, { expand });
      if (typeof difference === "string" && difference.includes("- Expected") && difference.includes("+ Received")) {
        return `${difference.split("\n").slice(3).map((line) => indentation + line).join("\n")},`;
      }
    }
  }
  return `${indentation + (i < expected.length ? `  ${(0, import_jest_matcher_utils4.printReceived)(arg)}` : (0, import_jest_matcher_utils4.RECEIVED_COLOR)(`+ ${(0, import_jest_matcher_utils4.stringify)(arg)}`))},`;
}).join("\n");
var isLineDiffableCall = (expected, received) => expected.some(
  (arg, i) => i < received.length && isLineDiffableArg(arg, received[i])
);
var isLineDiffableArg = (expected, received) => {
  const expectedType = (0, import_jest_get_type3.getType)(expected);
  const receivedType = (0, import_jest_get_type3.getType)(received);
  if (expectedType !== receivedType)
    return false;
  if ((0, import_jest_get_type3.isPrimitive)(expected))
    return false;
  if (expectedType === "date" || expectedType === "function" || expectedType === "regexp")
    return false;
  if (expected instanceof Error && received instanceof Error)
    return false;
  if (expectedType === "object" && typeof expected.asymmetricMatch === "function")
    return false;
  if (receivedType === "object" && typeof received.asymmetricMatch === "function")
    return false;
  return true;
};
var printResult = (result, expected) => result.type === "throw" ? "function call threw an error" : result.type === "incomplete" ? "function call has not returned yet" : isEqualValue(expected, result.value) ? printCommon(result.value) : (0, import_jest_matcher_utils4.printReceived)(result.value);
var printReceivedResults = (label, expected, indexedResults, isOnlyCall, iExpectedCall) => {
  if (indexedResults.length === 0)
    return "";
  if (isOnlyCall && (iExpectedCall === 0 || iExpectedCall === void 0))
    return `${label + printResult(indexedResults[0][1], expected)}
`;
  const printAligned = getRightAlignedPrinter(label);
  return label.replace(":", "").trim() + "\n" + indexedResults.reduce(
    (printed, [i, result]) => `${printed + printAligned(String(i + 1), i === iExpectedCall) + printResult(result, expected)}
`,
    ""
  );
};
var createToBeCalledMatcher = (matcherName) => function(received, expected) {
  const expectedArgument = "";
  const options = {
    isNot: this.isNot,
    promise: this.promise
  };
  (0, import_jest_matcher_utils4.ensureNoExpected)(expected, matcherName, options);
  ensureMockOrSpy(received, matcherName, expectedArgument, options);
  const receivedIsSpy = isSpy(received);
  const receivedName = receivedIsSpy ? "spy" : received.getMockName();
  const count = receivedIsSpy ? received.calls.count() : received.mock.calls.length;
  const calls = receivedIsSpy ? received.calls.all().map((x) => x.args) : received.mock.calls;
  const pass = count > 0;
  const message = pass ? () => (0, import_jest_matcher_utils4.matcherHint)(matcherName, receivedName, expectedArgument, options) + `

Expected number of calls: ${(0, import_jest_matcher_utils4.printExpected)(0)}
Received number of calls: ${(0, import_jest_matcher_utils4.printReceived)(count)}

` + calls.reduce((lines, args, i) => {
    if (lines.length < PRINT_LIMIT)
      lines.push(`${i + 1}: ${printReceivedArgs(args)}`);
    return lines;
  }, []).join("\n") : () => (0, import_jest_matcher_utils4.matcherHint)(matcherName, receivedName, expectedArgument, options) + `

Expected number of calls: >= ${(0, import_jest_matcher_utils4.printExpected)(1)}
Received number of calls:    ${(0, import_jest_matcher_utils4.printReceived)(count)}`;
  return { message, pass };
};
var createToReturnMatcher = (matcherName) => function(received, expected) {
  const expectedArgument = "";
  const options = {
    isNot: this.isNot,
    promise: this.promise
  };
  (0, import_jest_matcher_utils4.ensureNoExpected)(expected, matcherName, options);
  ensureMock(received, matcherName, expectedArgument, options);
  const receivedName = received.getMockName();
  const count = received.mock.results.reduce(
    (n, result) => result.type === "return" ? n + 1 : n,
    0
  );
  const pass = count > 0;
  const message = pass ? () => (0, import_jest_matcher_utils4.matcherHint)(matcherName, receivedName, expectedArgument, options) + `

Expected number of returns: ${(0, import_jest_matcher_utils4.printExpected)(0)}
Received number of returns: ${(0, import_jest_matcher_utils4.printReceived)(count)}

` + received.mock.results.reduce((lines, result, i) => {
    if (result.type === "return" && lines.length < PRINT_LIMIT)
      lines.push(`${i + 1}: ${(0, import_jest_matcher_utils4.printReceived)(result.value)}`);
    return lines;
  }, []).join("\n") + (received.mock.calls.length !== count ? `

Received number of calls:   ${(0, import_jest_matcher_utils4.printReceived)(
    received.mock.calls.length
  )}` : "") : () => (0, import_jest_matcher_utils4.matcherHint)(matcherName, receivedName, expectedArgument, options) + `

Expected number of returns: >= ${(0, import_jest_matcher_utils4.printExpected)(1)}
Received number of returns:    ${(0, import_jest_matcher_utils4.printReceived)(count)}` + (received.mock.calls.length !== count ? `
Received number of calls:      ${(0, import_jest_matcher_utils4.printReceived)(
    received.mock.calls.length
  )}` : "");
  return { message, pass };
};
var createToBeCalledTimesMatcher = (matcherName) => function(received, expected) {
  const expectedArgument = "expected";
  const options = {
    isNot: this.isNot,
    promise: this.promise
  };
  (0, import_jest_matcher_utils4.ensureExpectedIsNonNegativeInteger)(expected, matcherName, options);
  ensureMockOrSpy(received, matcherName, expectedArgument, options);
  const receivedIsSpy = isSpy(received);
  const receivedName = receivedIsSpy ? "spy" : received.getMockName();
  const count = receivedIsSpy ? received.calls.count() : received.mock.calls.length;
  const pass = count === expected;
  const message = pass ? () => (0, import_jest_matcher_utils4.matcherHint)(matcherName, receivedName, expectedArgument, options) + `

Expected number of calls: not ${(0, import_jest_matcher_utils4.printExpected)(expected)}` : () => (0, import_jest_matcher_utils4.matcherHint)(matcherName, receivedName, expectedArgument, options) + `

Expected number of calls: ${(0, import_jest_matcher_utils4.printExpected)(expected)}
Received number of calls: ${(0, import_jest_matcher_utils4.printReceived)(count)}`;
  return { message, pass };
};
var createToReturnTimesMatcher = (matcherName) => function(received, expected) {
  const expectedArgument = "expected";
  const options = {
    isNot: this.isNot,
    promise: this.promise
  };
  (0, import_jest_matcher_utils4.ensureExpectedIsNonNegativeInteger)(expected, matcherName, options);
  ensureMock(received, matcherName, expectedArgument, options);
  const receivedName = received.getMockName();
  const count = received.mock.results.reduce(
    (n, result) => result.type === "return" ? n + 1 : n,
    0
  );
  const pass = count === expected;
  const message = pass ? () => (0, import_jest_matcher_utils4.matcherHint)(matcherName, receivedName, expectedArgument, options) + `

Expected number of returns: not ${(0, import_jest_matcher_utils4.printExpected)(expected)}` + (received.mock.calls.length !== count ? `

Received number of calls:       ${(0, import_jest_matcher_utils4.printReceived)(
    received.mock.calls.length
  )}` : "") : () => (0, import_jest_matcher_utils4.matcherHint)(matcherName, receivedName, expectedArgument, options) + `

Expected number of returns: ${(0, import_jest_matcher_utils4.printExpected)(expected)}
Received number of returns: ${(0, import_jest_matcher_utils4.printReceived)(count)}` + (received.mock.calls.length !== count ? `
Received number of calls:   ${(0, import_jest_matcher_utils4.printReceived)(
    received.mock.calls.length
  )}` : "");
  return { message, pass };
};
var createToBeCalledWithMatcher = (matcherName) => function(received, ...expected) {
  const expectedArgument = "...expected";
  const options = {
    isNot: this.isNot,
    promise: this.promise
  };
  ensureMockOrSpy(received, matcherName, expectedArgument, options);
  const receivedIsSpy = isSpy(received);
  const receivedName = receivedIsSpy ? "spy" : received.getMockName();
  const calls = receivedIsSpy ? received.calls.all().map((x) => x.args) : received.mock.calls;
  const pass = calls.some((call) => isEqualCall(expected, call));
  const message = pass ? () => {
    const indexedCalls = [];
    let i = 0;
    while (i < calls.length && indexedCalls.length < PRINT_LIMIT) {
      if (isEqualCall(expected, calls[i]))
        indexedCalls.push([i, calls[i]]);
      i += 1;
    }
    return (0, import_jest_matcher_utils4.matcherHint)(matcherName, receivedName, expectedArgument, options) + `

Expected: not ${printExpectedArgs(expected)}
` + (calls.length === 1 && (0, import_jest_matcher_utils4.stringify)(calls[0]) === (0, import_jest_matcher_utils4.stringify)(expected) ? "" : printReceivedCallsNegative(
      expected,
      indexedCalls,
      calls.length === 1
    )) + `
Number of calls: ${(0, import_jest_matcher_utils4.printReceived)(calls.length)}`;
  } : () => {
    const indexedCalls = [];
    let i = 0;
    while (i < calls.length && indexedCalls.length < PRINT_LIMIT) {
      indexedCalls.push([i, calls[i]]);
      i += 1;
    }
    return (0, import_jest_matcher_utils4.matcherHint)(matcherName, receivedName, expectedArgument, options) + "\n\n" + printExpectedReceivedCallsPositive(
      expected,
      indexedCalls,
      isExpand2(this.expand),
      calls.length === 1
    ) + `
Number of calls: ${(0, import_jest_matcher_utils4.printReceived)(calls.length)}`;
  };
  return { message, pass };
};
var createToReturnWithMatcher = (matcherName) => function(received, expected) {
  const expectedArgument = "expected";
  const options = {
    isNot: this.isNot,
    promise: this.promise
  };
  ensureMock(received, matcherName, expectedArgument, options);
  const receivedName = received.getMockName();
  const { calls, results } = received.mock;
  const pass = results.some((result) => isEqualReturn(expected, result));
  const message = pass ? () => {
    const indexedResults = [];
    let i = 0;
    while (i < results.length && indexedResults.length < PRINT_LIMIT) {
      if (isEqualReturn(expected, results[i]))
        indexedResults.push([i, results[i]]);
      i += 1;
    }
    return (0, import_jest_matcher_utils4.matcherHint)(matcherName, receivedName, expectedArgument, options) + `

Expected: not ${(0, import_jest_matcher_utils4.printExpected)(expected)}
` + (results.length === 1 && results[0].type === "return" && (0, import_jest_matcher_utils4.stringify)(results[0].value) === (0, import_jest_matcher_utils4.stringify)(expected) ? "" : printReceivedResults(
      "Received:     ",
      expected,
      indexedResults,
      results.length === 1
    )) + printNumberOfReturns(countReturns(results), calls.length);
  } : () => {
    const indexedResults = [];
    let i = 0;
    while (i < results.length && indexedResults.length < PRINT_LIMIT) {
      indexedResults.push([i, results[i]]);
      i += 1;
    }
    return (0, import_jest_matcher_utils4.matcherHint)(matcherName, receivedName, expectedArgument, options) + `

Expected: ${(0, import_jest_matcher_utils4.printExpected)(expected)}
` + printReceivedResults(
      "Received: ",
      expected,
      indexedResults,
      results.length === 1
    ) + printNumberOfReturns(countReturns(results), calls.length);
  };
  return { message, pass };
};
var createLastCalledWithMatcher = (matcherName) => function(received, ...expected) {
  const expectedArgument = "...expected";
  const options = {
    isNot: this.isNot,
    promise: this.promise
  };
  ensureMockOrSpy(received, matcherName, expectedArgument, options);
  const receivedIsSpy = isSpy(received);
  const receivedName = receivedIsSpy ? "spy" : received.getMockName();
  const calls = receivedIsSpy ? received.calls.all().map((x) => x.args) : received.mock.calls;
  const iLast = calls.length - 1;
  const pass = iLast >= 0 && isEqualCall(expected, calls[iLast]);
  const message = pass ? () => {
    const indexedCalls = [];
    if (iLast > 0) {
      indexedCalls.push([iLast - 1, calls[iLast - 1]]);
    }
    indexedCalls.push([iLast, calls[iLast]]);
    return (0, import_jest_matcher_utils4.matcherHint)(matcherName, receivedName, expectedArgument, options) + `

Expected: not ${printExpectedArgs(expected)}
` + (calls.length === 1 && (0, import_jest_matcher_utils4.stringify)(calls[0]) === (0, import_jest_matcher_utils4.stringify)(expected) ? "" : printReceivedCallsNegative(
      expected,
      indexedCalls,
      calls.length === 1,
      iLast
    )) + `
Number of calls: ${(0, import_jest_matcher_utils4.printReceived)(calls.length)}`;
  } : () => {
    const indexedCalls = [];
    if (iLast >= 0) {
      if (iLast > 0) {
        let i = iLast - 1;
        while (i >= 0 && !isEqualCall(expected, calls[i]))
          i -= 1;
        if (i < 0)
          i = iLast - 1;
        indexedCalls.push([i, calls[i]]);
      }
      indexedCalls.push([iLast, calls[iLast]]);
    }
    return (0, import_jest_matcher_utils4.matcherHint)(matcherName, receivedName, expectedArgument, options) + "\n\n" + printExpectedReceivedCallsPositive(
      expected,
      indexedCalls,
      isExpand2(this.expand),
      calls.length === 1,
      iLast
    ) + `
Number of calls: ${(0, import_jest_matcher_utils4.printReceived)(calls.length)}`;
  };
  return { message, pass };
};
var createLastReturnedMatcher = (matcherName) => function(received, expected) {
  const expectedArgument = "expected";
  const options = {
    isNot: this.isNot,
    promise: this.promise
  };
  ensureMock(received, matcherName, expectedArgument, options);
  const receivedName = received.getMockName();
  const { calls, results } = received.mock;
  const iLast = results.length - 1;
  const pass = iLast >= 0 && isEqualReturn(expected, results[iLast]);
  const message = pass ? () => {
    const indexedResults = [];
    if (iLast > 0) {
      indexedResults.push([iLast - 1, results[iLast - 1]]);
    }
    indexedResults.push([iLast, results[iLast]]);
    return (0, import_jest_matcher_utils4.matcherHint)(matcherName, receivedName, expectedArgument, options) + `

Expected: not ${(0, import_jest_matcher_utils4.printExpected)(expected)}
` + (results.length === 1 && results[0].type === "return" && (0, import_jest_matcher_utils4.stringify)(results[0].value) === (0, import_jest_matcher_utils4.stringify)(expected) ? "" : printReceivedResults(
      "Received:     ",
      expected,
      indexedResults,
      results.length === 1,
      iLast
    )) + printNumberOfReturns(countReturns(results), calls.length);
  } : () => {
    const indexedResults = [];
    if (iLast >= 0) {
      if (iLast > 0) {
        let i = iLast - 1;
        while (i >= 0 && !isEqualReturn(expected, results[i]))
          i -= 1;
        if (i < 0)
          i = iLast - 1;
        indexedResults.push([i, results[i]]);
      }
      indexedResults.push([iLast, results[iLast]]);
    }
    return (0, import_jest_matcher_utils4.matcherHint)(matcherName, receivedName, expectedArgument, options) + `

Expected: ${(0, import_jest_matcher_utils4.printExpected)(expected)}
` + printReceivedResults(
      "Received: ",
      expected,
      indexedResults,
      results.length === 1,
      iLast
    ) + printNumberOfReturns(countReturns(results), calls.length);
  };
  return { message, pass };
};
var createNthCalledWithMatcher = (matcherName) => function(received, nth, ...expected) {
  const expectedArgument = "n";
  const options = {
    expectedColor: (arg) => arg,
    isNot: this.isNot,
    promise: this.promise,
    secondArgument: "...expected"
  };
  ensureMockOrSpy(received, matcherName, expectedArgument, options);
  if (!Number.isSafeInteger(nth) || nth < 1) {
    throw new Error(
      (0, import_jest_matcher_utils4.matcherErrorMessage)(
        (0, import_jest_matcher_utils4.matcherHint)(matcherName, void 0, expectedArgument, options),
        `${expectedArgument} must be a positive integer`,
        (0, import_jest_matcher_utils4.printWithType)(expectedArgument, nth, import_jest_matcher_utils4.stringify)
      )
    );
  }
  const receivedIsSpy = isSpy(received);
  const receivedName = receivedIsSpy ? "spy" : received.getMockName();
  const calls = receivedIsSpy ? received.calls.all().map((x) => x.args) : received.mock.calls;
  const length = calls.length;
  const iNth = nth - 1;
  const pass = iNth < length && isEqualCall(expected, calls[iNth]);
  const message = pass ? () => {
    const indexedCalls = [];
    if (iNth - 1 >= 0)
      indexedCalls.push([iNth - 1, calls[iNth - 1]]);
    indexedCalls.push([iNth, calls[iNth]]);
    if (iNth + 1 < length)
      indexedCalls.push([iNth + 1, calls[iNth + 1]]);
    return (0, import_jest_matcher_utils4.matcherHint)(matcherName, receivedName, expectedArgument, options) + `

n: ${nth}
Expected: not ${printExpectedArgs(expected)}
` + (calls.length === 1 && (0, import_jest_matcher_utils4.stringify)(calls[0]) === (0, import_jest_matcher_utils4.stringify)(expected) ? "" : printReceivedCallsNegative(
      expected,
      indexedCalls,
      calls.length === 1,
      iNth
    )) + `
Number of calls: ${(0, import_jest_matcher_utils4.printReceived)(calls.length)}`;
  } : () => {
    const indexedCalls = [];
    if (iNth < length) {
      if (iNth - 1 >= 0) {
        let i = iNth - 1;
        while (i >= 0 && !isEqualCall(expected, calls[i]))
          i -= 1;
        if (i < 0)
          i = iNth - 1;
        indexedCalls.push([i, calls[i]]);
      }
      indexedCalls.push([iNth, calls[iNth]]);
      if (iNth + 1 < length) {
        let i = iNth + 1;
        while (i < length && !isEqualCall(expected, calls[i]))
          i += 1;
        if (i >= length)
          i = iNth + 1;
        indexedCalls.push([i, calls[i]]);
      }
    } else if (length > 0) {
      let i = length - 1;
      while (i >= 0 && !isEqualCall(expected, calls[i]))
        i -= 1;
      if (i < 0)
        i = length - 1;
      indexedCalls.push([i, calls[i]]);
    }
    return (0, import_jest_matcher_utils4.matcherHint)(matcherName, receivedName, expectedArgument, options) + `

n: ${nth}
` + printExpectedReceivedCallsPositive(
      expected,
      indexedCalls,
      isExpand2(this.expand),
      calls.length === 1,
      iNth
    ) + `
Number of calls: ${(0, import_jest_matcher_utils4.printReceived)(calls.length)}`;
  };
  return { message, pass };
};
var createNthReturnedWithMatcher = (matcherName) => function(received, nth, expected) {
  const expectedArgument = "n";
  const options = {
    expectedColor: (arg) => arg,
    isNot: this.isNot,
    promise: this.promise,
    secondArgument: "expected"
  };
  ensureMock(received, matcherName, expectedArgument, options);
  if (!Number.isSafeInteger(nth) || nth < 1) {
    throw new Error(
      (0, import_jest_matcher_utils4.matcherErrorMessage)(
        (0, import_jest_matcher_utils4.matcherHint)(matcherName, void 0, expectedArgument, options),
        `${expectedArgument} must be a positive integer`,
        (0, import_jest_matcher_utils4.printWithType)(expectedArgument, nth, import_jest_matcher_utils4.stringify)
      )
    );
  }
  const receivedName = received.getMockName();
  const { calls, results } = received.mock;
  const length = results.length;
  const iNth = nth - 1;
  const pass = iNth < length && isEqualReturn(expected, results[iNth]);
  const message = pass ? () => {
    const indexedResults = [];
    if (iNth - 1 >= 0)
      indexedResults.push([iNth - 1, results[iNth - 1]]);
    indexedResults.push([iNth, results[iNth]]);
    if (iNth + 1 < length)
      indexedResults.push([iNth + 1, results[iNth + 1]]);
    return (0, import_jest_matcher_utils4.matcherHint)(matcherName, receivedName, expectedArgument, options) + `

n: ${nth}
Expected: not ${(0, import_jest_matcher_utils4.printExpected)(expected)}
` + (results.length === 1 && results[0].type === "return" && (0, import_jest_matcher_utils4.stringify)(results[0].value) === (0, import_jest_matcher_utils4.stringify)(expected) ? "" : printReceivedResults(
      "Received:     ",
      expected,
      indexedResults,
      results.length === 1,
      iNth
    )) + printNumberOfReturns(countReturns(results), calls.length);
  } : () => {
    const indexedResults = [];
    if (iNth < length) {
      if (iNth - 1 >= 0) {
        let i = iNth - 1;
        while (i >= 0 && !isEqualReturn(expected, results[i]))
          i -= 1;
        if (i < 0)
          i = iNth - 1;
        indexedResults.push([i, results[i]]);
      }
      indexedResults.push([iNth, results[iNth]]);
      if (iNth + 1 < length) {
        let i = iNth + 1;
        while (i < length && !isEqualReturn(expected, results[i]))
          i += 1;
        if (i >= length)
          i = iNth + 1;
        indexedResults.push([i, results[i]]);
      }
    } else if (length > 0) {
      let i = length - 1;
      while (i >= 0 && !isEqualReturn(expected, results[i]))
        i -= 1;
      if (i < 0)
        i = length - 1;
      indexedResults.push([i, results[i]]);
    }
    return (0, import_jest_matcher_utils4.matcherHint)(matcherName, receivedName, expectedArgument, options) + `

n: ${nth}
Expected: ${(0, import_jest_matcher_utils4.printExpected)(expected)}
` + printReceivedResults(
      "Received: ",
      expected,
      indexedResults,
      results.length === 1,
      iNth
    ) + printNumberOfReturns(countReturns(results), calls.length);
  };
  return { message, pass };
};
var spyMatchers = {
  lastCalledWith: createLastCalledWithMatcher("lastCalledWith"),
  lastReturnedWith: createLastReturnedMatcher("lastReturnedWith"),
  nthCalledWith: createNthCalledWithMatcher("nthCalledWith"),
  nthReturnedWith: createNthReturnedWithMatcher("nthReturnedWith"),
  toBeCalled: createToBeCalledMatcher("toBeCalled"),
  toBeCalledTimes: createToBeCalledTimesMatcher("toBeCalledTimes"),
  toBeCalledWith: createToBeCalledWithMatcher("toBeCalledWith"),
  toHaveBeenCalled: createToBeCalledMatcher("toHaveBeenCalled"),
  toHaveBeenCalledTimes: createToBeCalledTimesMatcher("toHaveBeenCalledTimes"),
  toHaveBeenCalledWith: createToBeCalledWithMatcher("toHaveBeenCalledWith"),
  toHaveBeenLastCalledWith: createLastCalledWithMatcher(
    "toHaveBeenLastCalledWith"
  ),
  toHaveBeenNthCalledWith: createNthCalledWithMatcher(
    "toHaveBeenNthCalledWith"
  ),
  toHaveLastReturnedWith: createLastReturnedMatcher("toHaveLastReturnedWith"),
  toHaveNthReturnedWith: createNthReturnedWithMatcher("toHaveNthReturnedWith"),
  toHaveReturned: createToReturnMatcher("toHaveReturned"),
  toHaveReturnedTimes: createToReturnTimesMatcher("toHaveReturnedTimes"),
  toHaveReturnedWith: createToReturnWithMatcher("toHaveReturnedWith"),
  toReturn: createToReturnMatcher("toReturn"),
  toReturnTimes: createToReturnTimesMatcher("toReturnTimes"),
  toReturnWith: createToReturnWithMatcher("toReturnWith")
};
var isMock = (received) => received != null && received._isMockFunction === true;
var isSpy = (received) => received != null && received.calls != null && typeof received.calls.all === "function" && typeof received.calls.count === "function";
var ensureMockOrSpy = (received, matcherName, expectedArgument, options) => {
  if (!isMock(received) && !isSpy(received)) {
    throw new Error(
      (0, import_jest_matcher_utils4.matcherErrorMessage)(
        (0, import_jest_matcher_utils4.matcherHint)(matcherName, void 0, expectedArgument, options),
        `${(0, import_jest_matcher_utils4.RECEIVED_COLOR)("received")} value must be a mock or spy function`,
        (0, import_jest_matcher_utils4.printWithType)("Received", received, import_jest_matcher_utils4.printReceived)
      )
    );
  }
};
var ensureMock = (received, matcherName, expectedArgument, options) => {
  if (!isMock(received)) {
    throw new Error(
      (0, import_jest_matcher_utils4.matcherErrorMessage)(
        (0, import_jest_matcher_utils4.matcherHint)(matcherName, void 0, expectedArgument, options),
        `${(0, import_jest_matcher_utils4.RECEIVED_COLOR)("received")} value must be a mock function`,
        (0, import_jest_matcher_utils4.printWithType)("Received", received, import_jest_matcher_utils4.printReceived)
      )
    );
  }
};
var spyMatchers_default = spyMatchers;

// packages/playwright/bundles/expect/third_party/toThrowMatchers.ts
var import_expect_utils4 = __toESM(require_build6());
var import_jest_matcher_utils5 = __toESM(require_build5());
var import_jest_message_util = __toESM(require_build8());
var DID_NOT_THROW = "Received function did not throw";
var getThrown = (e) => {
  const hasMessage = e !== null && e !== void 0 && typeof e.message === "string";
  if (hasMessage && typeof e.name === "string" && typeof e.stack === "string") {
    return {
      hasMessage,
      isError: true,
      message: e.message,
      value: e
    };
  }
  return {
    hasMessage,
    isError: false,
    message: hasMessage ? e.message : String(e),
    value: e
  };
};
var createMatcher = (matcherName, fromPromise) => function(received, expected) {
  const options = {
    isNot: this.isNot,
    promise: this.promise
  };
  let thrown = null;
  if (fromPromise && (0, import_expect_utils4.isError)(received)) {
    thrown = getThrown(received);
  } else {
    if (typeof received !== "function") {
      if (!fromPromise) {
        const placeholder = expected === void 0 ? "" : "expected";
        throw new Error(
          (0, import_jest_matcher_utils5.matcherErrorMessage)(
            (0, import_jest_matcher_utils5.matcherHint)(matcherName, void 0, placeholder, options),
            `${(0, import_jest_matcher_utils5.RECEIVED_COLOR)("received")} value must be a function`,
            (0, import_jest_matcher_utils5.printWithType)("Received", received, import_jest_matcher_utils5.printReceived)
          )
        );
      }
    } else {
      try {
        received();
      } catch (e) {
        thrown = getThrown(e);
      }
    }
  }
  if (expected === void 0) {
    return toThrow(matcherName, options, thrown);
  } else if (typeof expected === "function") {
    return toThrowExpectedClass(matcherName, options, thrown, expected);
  } else if (typeof expected === "string") {
    return toThrowExpectedString(matcherName, options, thrown, expected);
  } else if (expected !== null && typeof expected.test === "function") {
    return toThrowExpectedRegExp(matcherName, options, thrown, expected);
  } else if (expected !== null && typeof expected.asymmetricMatch === "function") {
    return toThrowExpectedAsymmetric(matcherName, options, thrown, expected);
  } else if (expected !== null && typeof expected === "object") {
    return toThrowExpectedObject(matcherName, options, thrown, expected);
  } else {
    throw new Error(
      (0, import_jest_matcher_utils5.matcherErrorMessage)(
        (0, import_jest_matcher_utils5.matcherHint)(matcherName, void 0, void 0, options),
        `${(0, import_jest_matcher_utils5.EXPECTED_COLOR)(
          "expected"
        )} value must be a string or regular expression or class or error`,
        (0, import_jest_matcher_utils5.printWithType)("Expected", expected, import_jest_matcher_utils5.printExpected)
      )
    );
  }
};
var matchers2 = {
  toThrow: createMatcher("toThrow"),
  toThrowError: createMatcher("toThrowError")
};
var toThrowExpectedRegExp = (matcherName, options, thrown, expected) => {
  const pass = thrown !== null && expected.test(thrown.message);
  const message = pass ? () => (0, import_jest_matcher_utils5.matcherHint)(matcherName, void 0, void 0, options) + "\n\n" + formatExpected("Expected pattern: not ", expected) + (thrown !== null && thrown.hasMessage ? formatReceived(
    "Received message:     ",
    thrown,
    "message",
    expected
  ) + formatStack(thrown) : formatReceived("Received value:       ", thrown, "value")) : () => (0, import_jest_matcher_utils5.matcherHint)(matcherName, void 0, void 0, options) + "\n\n" + formatExpected("Expected pattern: ", expected) + (thrown === null ? `
${DID_NOT_THROW}` : thrown.hasMessage ? formatReceived("Received message: ", thrown, "message") + formatStack(thrown) : formatReceived("Received value:   ", thrown, "value"));
  return { message, pass };
};
var toThrowExpectedAsymmetric = (matcherName, options, thrown, expected) => {
  const pass = thrown !== null && expected.asymmetricMatch(thrown.value);
  const message = pass ? () => (0, import_jest_matcher_utils5.matcherHint)(matcherName, void 0, void 0, options) + "\n\n" + formatExpected("Expected asymmetric matcher: not ", expected) + "\n" + (thrown !== null && thrown.hasMessage ? formatReceived("Received name:    ", thrown, "name") + formatReceived("Received message: ", thrown, "message") + formatStack(thrown) : formatReceived("Thrown value: ", thrown, "value")) : () => (0, import_jest_matcher_utils5.matcherHint)(matcherName, void 0, void 0, options) + "\n\n" + formatExpected("Expected asymmetric matcher: ", expected) + "\n" + (thrown === null ? DID_NOT_THROW : thrown.hasMessage ? formatReceived("Received name:    ", thrown, "name") + formatReceived("Received message: ", thrown, "message") + formatStack(thrown) : formatReceived("Thrown value: ", thrown, "value"));
  return { message, pass };
};
var toThrowExpectedObject = (matcherName, options, thrown, expected) => {
  const expectedMessageAndCause = createMessageAndCause(expected);
  const thrownMessageAndCause = thrown !== null ? createMessageAndCause(thrown.value) : null;
  const pass = thrown !== null && thrown.message === expected.message && thrownMessageAndCause === expectedMessageAndCause;
  const message = pass ? () => (0, import_jest_matcher_utils5.matcherHint)(matcherName, void 0, void 0, options) + "\n\n" + formatExpected(
    `Expected ${messageAndCause(expected)}: not `,
    expectedMessageAndCause
  ) + (thrown !== null && thrown.hasMessage ? formatStack(thrown) : formatReceived("Received value:       ", thrown, "value")) : () => (0, import_jest_matcher_utils5.matcherHint)(matcherName, void 0, void 0, options) + "\n\n" + (thrown === null ? formatExpected(
    `Expected ${messageAndCause(expected)}: `,
    expectedMessageAndCause
  ) + "\n" + DID_NOT_THROW : thrown.hasMessage ? (0, import_jest_matcher_utils5.printDiffOrStringify)(
    expectedMessageAndCause,
    thrownMessageAndCause,
    `Expected ${messageAndCause(expected)}`,
    `Received ${messageAndCause(thrown.value)}`,
    true
  ) + "\n" + formatStack(thrown) : formatExpected(
    `Expected ${messageAndCause(expected)}: `,
    expectedMessageAndCause
  ) + formatReceived("Received value:   ", thrown, "value"));
  return { message, pass };
};
var toThrowExpectedClass = (matcherName, options, thrown, expected) => {
  const pass = thrown !== null && thrown.value instanceof expected;
  const message = pass ? () => (0, import_jest_matcher_utils5.matcherHint)(matcherName, void 0, void 0, options) + "\n\n" + printExpectedConstructorNameNot("Expected constructor", expected) + (thrown !== null && thrown.value != null && typeof thrown.value.constructor === "function" && thrown.value.constructor !== expected ? printReceivedConstructorNameNot(
    "Received constructor",
    thrown.value.constructor,
    expected
  ) : "") + "\n" + (thrown !== null && thrown.hasMessage ? formatReceived("Received message: ", thrown, "message") + formatStack(thrown) : formatReceived("Received value: ", thrown, "value")) : () => (0, import_jest_matcher_utils5.matcherHint)(matcherName, void 0, void 0, options) + "\n\n" + printExpectedConstructorName("Expected constructor", expected) + (thrown === null ? `
${DID_NOT_THROW}` : `${thrown.value != null && typeof thrown.value.constructor === "function" ? printReceivedConstructorName(
    "Received constructor",
    thrown.value.constructor
  ) : ""}
${thrown.hasMessage ? formatReceived("Received message: ", thrown, "message") + formatStack(thrown) : formatReceived("Received value: ", thrown, "value")}`);
  return { message, pass };
};
var toThrowExpectedString = (matcherName, options, thrown, expected) => {
  const pass = thrown !== null && thrown.message.includes(expected);
  const message = pass ? () => (0, import_jest_matcher_utils5.matcherHint)(matcherName, void 0, void 0, options) + "\n\n" + formatExpected("Expected substring: not ", expected) + (thrown !== null && thrown.hasMessage ? formatReceived(
    "Received message:       ",
    thrown,
    "message",
    expected
  ) + formatStack(thrown) : formatReceived("Received value:         ", thrown, "value")) : () => (0, import_jest_matcher_utils5.matcherHint)(matcherName, void 0, void 0, options) + "\n\n" + formatExpected("Expected substring: ", expected) + (thrown === null ? `
${DID_NOT_THROW}` : thrown.hasMessage ? formatReceived("Received message:   ", thrown, "message") + formatStack(thrown) : formatReceived("Received value:     ", thrown, "value"));
  return { message, pass };
};
var toThrow = (matcherName, options, thrown) => {
  const pass = thrown !== null;
  const message = pass ? () => (0, import_jest_matcher_utils5.matcherHint)(matcherName, void 0, "", options) + "\n\n" + (thrown !== null && thrown.hasMessage ? formatReceived("Error name:    ", thrown, "name") + formatReceived("Error message: ", thrown, "message") + formatStack(thrown) : formatReceived("Thrown value: ", thrown, "value")) : () => (0, import_jest_matcher_utils5.matcherHint)(matcherName, void 0, "", options) + "\n\n" + DID_NOT_THROW;
  return { message, pass };
};
var formatExpected = (label, expected) => `${label + (0, import_jest_matcher_utils5.printExpected)(expected)}
`;
var formatReceived = (label, thrown, key, expected) => {
  if (thrown === null)
    return "";
  if (key === "message") {
    const message = thrown.message;
    if (typeof expected === "string") {
      const index = message.indexOf(expected);
      if (index !== -1) {
        return `${label + printReceivedStringContainExpectedSubstring(
          message,
          index,
          expected.length
        )}
`;
      }
    } else if (expected instanceof RegExp) {
      return `${label + printReceivedStringContainExpectedResult(
        message,
        typeof expected.exec === "function" ? expected.exec(message) : null
      )}
`;
    }
    return `${label + (0, import_jest_matcher_utils5.printReceived)(message)}
`;
  }
  if (key === "name") {
    return thrown.isError ? `${label + (0, import_jest_matcher_utils5.printReceived)(thrown.value.name)}
` : "";
  }
  if (key === "value")
    return thrown.isError ? "" : `${label + (0, import_jest_matcher_utils5.printReceived)(thrown.value)}
`;
  return "";
};
var formatStack = (thrown) => thrown === null || !thrown.isError ? "" : (0, import_jest_message_util.formatStackTrace)(
  (0, import_jest_message_util.separateMessageFromStack)(thrown.value.stack).stack,
  {
    rootDir: process.cwd(),
    testMatch: []
  },
  {
    noStackTrace: false
  }
);
function createMessageAndCauseMessage(error) {
  if (error.cause instanceof Error) {
    return `{ message: ${error.message}, cause: ${createMessageAndCauseMessage(
      error.cause
    )}}`;
  }
  return `{ message: ${error.message} }`;
}
function createMessageAndCause(error) {
  if (error.cause instanceof Error)
    return createMessageAndCauseMessage(error);
  return error.message;
}
function messageAndCause(error) {
  return error.cause === void 0 ? "message" : "message and cause";
}
var toThrowMatchers_default = matchers2;

// packages/playwright/bundles/expect/third_party/index.ts
var JestAssertionError = class extends Error {
};
var createToThrowErrorMatchingSnapshotMatcher = function(matcher) {
  return function(received, testNameOrInlineSnapshot) {
    return matcher.apply(this, [received, testNameOrInlineSnapshot, true]);
  };
};
var getPromiseMatcher = (name, matcher) => {
  if (name === "toThrow" || name === "toThrowError")
    return createMatcher(name, true);
  else if (name === "toThrowErrorMatchingSnapshot" || name === "toThrowErrorMatchingInlineSnapshot")
    return createToThrowErrorMatchingSnapshotMatcher(matcher);
  return null;
};
var expect = (actual, ...rest) => {
  if (rest.length !== 0)
    throw new Error("Expect takes at most one argument.");
  const allMatchers = getMatchers();
  const expectation = {
    not: {},
    rejects: { not: {} },
    resolves: { not: {} }
  };
  const err = new JestAssertionError();
  Object.keys(allMatchers).forEach((name) => {
    const matcher = allMatchers[name];
    const promiseMatcher = getPromiseMatcher(name, matcher) || matcher;
    expectation[name] = makeThrowingMatcher(matcher, false, "", actual);
    expectation.not[name] = makeThrowingMatcher(matcher, true, "", actual);
    expectation.resolves[name] = makeResolveMatcher(
      name,
      promiseMatcher,
      false,
      actual,
      err
    );
    expectation.resolves.not[name] = makeResolveMatcher(
      name,
      promiseMatcher,
      true,
      actual,
      err
    );
    expectation.rejects[name] = makeRejectMatcher(
      name,
      promiseMatcher,
      false,
      actual,
      err
    );
    expectation.rejects.not[name] = makeRejectMatcher(
      name,
      promiseMatcher,
      true,
      actual,
      err
    );
  });
  return expectation;
};
var getMessage = (message) => message && message() || matcherUtils2.RECEIVED_COLOR("No message was specified for this matcher.");
var makeResolveMatcher = (matcherName, matcher, isNot, actual, outerErr) => (...args) => {
  const options = {
    isNot,
    promise: "resolves"
  };
  if (!(0, import_jest_util2.isPromise)(actual)) {
    throw new JestAssertionError(
      matcherUtils2.matcherErrorMessage(
        matcherUtils2.matcherHint(matcherName, void 0, "", options),
        `${matcherUtils2.RECEIVED_COLOR("received")} value must be a promise`,
        matcherUtils2.printWithType(
          "Received",
          actual,
          matcherUtils2.printReceived
        )
      )
    );
  }
  const innerErr = new JestAssertionError();
  return actual.then(
    (result) => makeThrowingMatcher(matcher, isNot, "resolves", result, innerErr).apply(
      null,
      args
    ),
    (reason) => {
      outerErr.message = `${matcherUtils2.matcherHint(
        matcherName,
        void 0,
        "",
        options
      )}

Received promise rejected instead of resolved
Rejected to value: ${matcherUtils2.printReceived(reason)}`;
      return Promise.reject(outerErr);
    }
  );
};
var makeRejectMatcher = (matcherName, matcher, isNot, actual, outerErr) => (...args) => {
  const options = {
    isNot,
    promise: "rejects"
  };
  const actualWrapper = typeof actual === "function" ? actual() : actual;
  if (!(0, import_jest_util2.isPromise)(actualWrapper)) {
    throw new JestAssertionError(
      matcherUtils2.matcherErrorMessage(
        matcherUtils2.matcherHint(matcherName, void 0, "", options),
        `${matcherUtils2.RECEIVED_COLOR(
          "received"
        )} value must be a promise or a function returning a promise`,
        matcherUtils2.printWithType(
          "Received",
          actual,
          matcherUtils2.printReceived
        )
      )
    );
  }
  const innerErr = new JestAssertionError();
  return actualWrapper.then(
    (result) => {
      outerErr.message = `${matcherUtils2.matcherHint(
        matcherName,
        void 0,
        "",
        options
      )}

Received promise resolved instead of rejected
Resolved to value: ${matcherUtils2.printReceived(result)}`;
      return Promise.reject(outerErr);
    },
    (reason) => makeThrowingMatcher(matcher, isNot, "rejects", reason, innerErr).apply(
      null,
      args
    )
  );
};
var makeThrowingMatcher = (matcher, isNot, promise, actual, err) => function throwingMatcher(...args) {
  let throws = true;
  const utils2 = {
    ...matcherUtils2,
    iterableEquality: import_expect_utils5.iterableEquality,
    subsetEquality: import_expect_utils5.subsetEquality
  };
  const matcherUtilsThing = {
    customTesters: getCustomEqualityTesters(),
    // When throws is disabled, the matcher will not throw errors during test
    // execution but instead add them to the global matcher state. If a
    // matcher throws, test execution is normally stopped immediately. The
    // snapshot matcher uses it because we want to log all snapshot
    // failures in a test.
    dontThrow: () => throws = false,
    equals: import_expect_utils5.equals,
    utils: utils2
  };
  const matcherContext = {
    ...getState(),
    ...matcherUtilsThing,
    error: err,
    isNot,
    promise
  };
  const processResult = (result, asyncError) => {
    _validateResult(result);
    getState().assertionCalls++;
    if (result.pass && isNot || !result.pass && !isNot) {
      const message = getMessage(result.message);
      let error;
      if (err) {
        error = err;
        error.message = message;
      } else if (asyncError) {
        error = asyncError;
        error.message = message;
      } else {
        error = new JestAssertionError(message);
        if (Error.captureStackTrace)
          Error.captureStackTrace(error, throwingMatcher);
      }
      error.matcherResult = { ...result, message };
      if (throws)
        throw error;
      else
        getState().suppressedErrors.push(error);
    } else {
      getState().numPassingAsserts++;
    }
  };
  const handleError = (error) => {
    if (matcher[INTERNAL_MATCHER_FLAG] === true && !(error instanceof JestAssertionError) && error.name !== "PrettyFormatPluginError" && // Guard for some environments (browsers) that do not support this feature.
    Error.captureStackTrace) {
      Error.captureStackTrace(error, throwingMatcher);
    }
    throw error;
  };
  let potentialResult;
  try {
    potentialResult = matcher[INTERNAL_MATCHER_FLAG] === true ? matcher.call(matcherContext, actual, ...args) : (
      // It's a trap specifically for inline snapshot to capture this name
      // in the stack trace, so that it can correctly get the custom matcher
      // function call.
      function __EXTERNAL_MATCHER_TRAP__() {
        return matcher.call(matcherContext, actual, ...args);
      }()
    );
    if ((0, import_jest_util2.isPromise)(potentialResult)) {
      const asyncError = new JestAssertionError();
      if (Error.captureStackTrace)
        Error.captureStackTrace(asyncError, throwingMatcher);
      return potentialResult.then((aResult) => processResult(aResult, asyncError)).catch(handleError);
    } else {
      return processResult(potentialResult);
    }
  } catch (error) {
    return handleError(error);
  }
};
expect.extend = (matchers3) => setMatchers(matchers3, false, expect);
expect.addEqualityTesters = (customTesters) => addCustomEqualityTesters(customTesters);
expect.anything = anything;
expect.any = any;
expect.not = {
  arrayContaining: arrayNotContaining,
  closeTo: notCloseTo,
  objectContaining: objectNotContaining,
  stringContaining: stringNotContaining,
  stringMatching: stringNotMatching
};
expect.arrayContaining = arrayContaining;
expect.closeTo = closeTo;
expect.objectContaining = objectContaining;
expect.stringContaining = stringContaining;
expect.stringMatching = stringMatching;
var _validateResult = (result) => {
  if (typeof result !== "object" || typeof result.pass !== "boolean" || result.message && typeof result.message !== "string" && typeof result.message !== "function") {
    throw new Error(
      `Unexpected return from a matcher function.
Matcher functions should return an object in the following format:
  {message?: string | function, pass: boolean}
'${matcherUtils2.stringify(result)}' was returned`
    );
  }
};
function assertions(expected) {
  const error = new Error();
  if (Error.captureStackTrace)
    Error.captureStackTrace(error, assertions);
  setState({
    expectedAssertionsNumber: expected,
    expectedAssertionsNumberError: error
  });
}
function hasAssertions(...args) {
  const error = new Error();
  if (Error.captureStackTrace)
    Error.captureStackTrace(error, hasAssertions);
  matcherUtils2.ensureNoExpected(args[0], ".hasAssertions");
  setState({
    isExpectingAssertions: true,
    isExpectingAssertionsError: error
  });
}
setMatchers(matchers_default, true, expect);
setMatchers(spyMatchers_default, true, expect);
setMatchers(toThrowMatchers_default, true, expect);
expect.assertions = assertions;
expect.hasAssertions = hasAssertions;
expect.getState = getState;
expect.setState = setState;
expect.extractExpectedAssertionsErrors = extractExpectedAssertionsErrors_default;
var third_party_default = expect;

// packages/playwright/bundles/expect/src/expectBundleImpl.ts
var mock = __toESM(require_build9());
var import_jest_matcher_utils6 = __toESM(require_build5());
var expect2 = third_party_default;
var asymmetricMatchers = {
  any,
  anything,
  arrayContaining,
  arrayNotContaining,
  closeTo,
  notCloseTo,
  objectContaining,
  objectNotContaining,
  stringContaining,
  stringMatching,
  stringNotContaining,
  stringNotMatching
};
var matcherUtils3 = {
  stringify: mu.stringify
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EXPECTED_COLOR,
  INVERTED_COLOR,
  RECEIVED_COLOR,
  asymmetricMatchers,
  expect,
  matcherUtils,
  mock,
  printReceived
});
/*! Bundled license information:

react-is/cjs/react-is.production.min.js:
  (**
   * @license React
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.development.js:
  (**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

is-number/index.js:
  (*!
   * is-number <https://github.com/jonschlinkert/is-number>
   *
   * Copyright (c) 2014-present, Jon Schlinkert.
   * Released under the MIT License.
   *)

to-regex-range/index.js:
  (*!
   * to-regex-range <https://github.com/micromatch/to-regex-range>
   *
   * Copyright (c) 2015-present, Jon Schlinkert.
   * Released under the MIT License.
   *)

fill-range/index.js:
  (*!
   * fill-range <https://github.com/jonschlinkert/fill-range>
   *
   * Copyright (c) 2014-present, Jon Schlinkert.
   * Licensed under the MIT License.
   *)
*/
//# sourceMappingURL=expectBundleImpl.js.map
