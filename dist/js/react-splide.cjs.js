var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@splidejs/splide/dist/js/splide.min.js
var require_splide_min = __commonJS({
  "node_modules/@splidejs/splide/dist/js/splide.min.js"(exports, module2) {
    function At(n2, t2) {
      for (var i = 0; i < t2.length; i++) {
        var r = t2[i];
        r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(n2, r.key, r);
      }
    }
    var n;
    var t;
    n = exports, t = function() {
      "use strict";
      var m = "splide", a = "data-" + m, n2 = { CREATED: 1, MOUNTED: 2, IDLE: 3, MOVING: 4, DESTROYED: 5 }, R = 10;
      function _(n3) {
        n3.length = 0;
      }
      function I(n3) {
        return !u(n3) && typeof n3 == "object";
      }
      function r(n3) {
        return Array.isArray(n3);
      }
      function D(n3) {
        return typeof n3 == "string";
      }
      function M(n3) {
        return n3 === void 0;
      }
      function u(n3) {
        return n3 === null;
      }
      function y(n3) {
        return n3 instanceof HTMLElement;
      }
      function w(n3) {
        return r(n3) ? n3 : [n3];
      }
      function b(n3, t3) {
        w(n3).forEach(t3);
      }
      function x(n3, t3) {
        return -1 < n3.indexOf(t3);
      }
      function k(n3, t3) {
        return n3.push.apply(n3, w(t3)), n3;
      }
      var o = Array.prototype;
      function s(n3, t3, i2) {
        return o.slice.call(n3, t3, i2);
      }
      function E(t3, n3, i2) {
        t3 && b(n3, function(n4) {
          n4 && t3.classList[i2 ? "add" : "remove"](n4);
        });
      }
      function A(n3, t3) {
        E(n3, D(t3) ? t3.split(" ") : t3, true);
      }
      function L(n3, t3) {
        b(t3, n3.appendChild.bind(n3));
      }
      function S(n3, i2) {
        b(n3, function(n4) {
          var t3 = i2.parentNode;
          t3 && t3.insertBefore(n4, i2);
        });
      }
      function W(n3, t3) {
        return y(n3) && (n3.msMatchesSelector || n3.matches).call(n3, t3);
      }
      function z(n3, t3) {
        return n3 ? s(n3.children).filter(function(n4) {
          return W(n4, t3);
        }) : [];
      }
      function P(n3, t3) {
        return t3 ? z(n3, t3)[0] : n3.firstElementChild;
      }
      function e(n3, t3, i2) {
        if (n3)
          for (var r2 = Object.keys(n3), r2 = i2 ? r2.reverse() : r2, u2 = 0; u2 < r2.length; u2++) {
            var o2 = r2[u2];
            if (o2 !== "__proto__" && t3(n3[o2], o2) === false)
              break;
          }
        return n3;
      }
      function O(r2) {
        return s(arguments, 1).forEach(function(i2) {
          e(i2, function(n3, t3) {
            r2[t3] = i2[t3];
          });
        }), r2;
      }
      function l(i2, n3) {
        return e(n3, function(n4, t3) {
          r(n4) ? i2[t3] = n4.slice() : I(n4) ? i2[t3] = l(I(i2[t3]) ? i2[t3] : {}, n4) : i2[t3] = n4;
        }), i2;
      }
      function T(t3, n3) {
        t3 && b(n3, function(n4) {
          t3.removeAttribute(n4);
        });
      }
      function j(i2, n3, t3) {
        I(n3) ? e(n3, function(n4, t4) {
          j(i2, t4, n4);
        }) : u(t3) ? T(i2, n3) : i2.setAttribute(n3, String(t3));
      }
      function F(n3, t3, i2) {
        n3 = document.createElement(n3);
        return t3 && (D(t3) ? A : j)(n3, t3), i2 && L(i2, n3), n3;
      }
      function C(n3, t3, i2) {
        if (M(i2))
          return getComputedStyle(n3)[t3];
        u(i2) || (n3 = n3.style)[t3] !== (i2 = "" + i2) && (n3[t3] = i2);
      }
      function N(n3, t3) {
        C(n3, "display", t3);
      }
      function X(n3, t3) {
        return n3.getAttribute(t3);
      }
      function B(n3, t3) {
        return n3 && n3.classList.contains(t3);
      }
      function G(n3) {
        return n3.getBoundingClientRect();
      }
      function H(n3) {
        b(n3, function(n4) {
          n4 && n4.parentNode && n4.parentNode.removeChild(n4);
        });
      }
      function Y(n3) {
        return P(new DOMParser().parseFromString(n3, "text/html").body);
      }
      function U(n3, t3) {
        n3.preventDefault(), t3 && (n3.stopPropagation(), n3.stopImmediatePropagation());
      }
      function q(n3, t3) {
        return n3 && n3.querySelector(t3);
      }
      function J(n3, t3) {
        return s(n3.querySelectorAll(t3));
      }
      function K(n3, t3) {
        E(n3, t3, false);
      }
      function V(n3) {
        return D(n3) ? n3 : n3 ? n3 + "px" : "";
      }
      function Q(n3, t3) {
        if (t3 === void 0 && (t3 = ""), !n3)
          throw new Error("[" + m + "] " + t3);
      }
      function g(n3) {
        setTimeout(n3);
      }
      function Z() {
      }
      function v(n3) {
        return requestAnimationFrame(n3);
      }
      var $ = Math.min, nn = Math.max, tn = Math.floor, rn = Math.ceil, un = Math.abs;
      function on(n3, t3, i2, r2) {
        var u2 = $(t3, i2), i2 = nn(t3, i2);
        return r2 ? u2 < n3 && n3 < i2 : u2 <= n3 && n3 <= i2;
      }
      function en(n3, t3, i2) {
        var r2 = $(t3, i2), i2 = nn(t3, i2);
        return $(nn(r2, n3), i2);
      }
      function cn(n3) {
        return (0 < n3) - (n3 < 0);
      }
      function fn(t3, n3) {
        return b(n3, function(n4) {
          t3 = t3.replace("%s", "" + n4);
        }), t3;
      }
      function an(n3) {
        return n3 < 10 ? "0" + n3 : "" + n3;
      }
      var sn = {};
      function c() {
        var o2 = {};
        function r2(n3, r3) {
          t3(n3, function(n4, t4) {
            var i2 = o2[n4];
            o2[n4] = i2 && i2.filter(function(n5) {
              return n5.n ? n5.n !== r3 : r3 || n5.t !== t4;
            });
          });
        }
        function t3(n3, t4) {
          w(n3).join(" ").split(" ").forEach(function(n4) {
            n4 = n4.split(".");
            t4(n4[0], n4[1]);
          });
        }
        return { on: function(n3, i2, r3, u2) {
          u2 === void 0 && (u2 = R), t3(n3, function(n4, t4) {
            o2[n4] = o2[n4] || [], k(o2[n4], { i: n4, r: i2, t: t4, u: u2, n: r3 }).sort(function(n5, t5) {
              return n5.u - t5.u;
            });
          });
        }, off: r2, offBy: function(i2) {
          e(o2, function(n3, t4) {
            r2(t4, i2);
          });
        }, emit: function(n3) {
          var t4 = arguments;
          (o2[n3] || []).forEach(function(n4) {
            n4.r.apply(n4, s(t4, 1));
          });
        }, destroy: function() {
          o2 = {};
        } };
      }
      var ln = "mounted", dn = "move", vn = "moved", hn = "shifted", pn = "click", gn = "active", mn = "inactive", yn = "visible", wn = "hidden", _n = "slide:keydown", bn = "refresh", xn = "updated", kn = "resize", An = "resized", Ln = "repositioned", En = "scrolled", f = "destroy", Sn = "navigation:mounted", zn = "lazyload:loaded";
      function Pn(n3) {
        var r2 = n3.event, u2 = {}, o2 = [];
        function t3(n4, t4, r3) {
          e2(n4, t4, function(t5, i3) {
            o2 = o2.filter(function(n5) {
              return !!(n5[0] !== t5 || n5[1] !== i3 || r3 && n5[2] !== r3) || (t5.removeEventListener(i3, n5[2], n5[3]), false);
            });
          });
        }
        function e2(n4, t4, i3) {
          b(n4, function(n5) {
            n5 && t4.split(" ").forEach(i3.bind(null, n5));
          });
        }
        function i2() {
          o2 = o2.filter(function(n4) {
            return t3(n4[0], n4[1]);
          }), r2.offBy(u2);
        }
        return r2.on(f, i2, u2), { on: function(n4, t4, i3) {
          r2.on(n4, t4, u2, i3);
        }, off: function(n4) {
          r2.off(n4, u2);
        }, emit: r2.emit, bind: function(n4, t4, i3, r3) {
          e2(n4, t4, function(n5, t5) {
            o2.push([n5, t5, i3, r3]), n5.addEventListener(t5, i3, r3);
          });
        }, unbind: t3, destroy: i2 };
      }
      function Rn(t3, i2, r2, u2) {
        var o2, n3, e2 = Date.now, c2 = 0, f2 = true, a2 = 0;
        function s2() {
          if (!f2) {
            var n4 = e2() - o2;
            if (t3 <= n4 ? (c2 = 1, o2 = e2()) : c2 = n4 / t3, r2 && r2(c2), c2 === 1 && (i2(), u2 && ++a2 >= u2))
              return l2();
            v(s2);
          }
        }
        function l2() {
          f2 = true;
        }
        function d2() {
          cancelAnimationFrame(n3), f2 = !(n3 = c2 = 0);
        }
        return { start: function(n4) {
          n4 || d2(), o2 = e2() - (n4 ? c2 * t3 : 0), f2 = false, v(s2);
        }, rewind: function() {
          o2 = e2(), c2 = 0, r2 && r2(c2);
        }, pause: l2, cancel: d2, set: function(n4) {
          t3 = n4;
        }, isPaused: function() {
          return f2;
        } };
      }
      function d(n3) {
        var t3 = n3;
        return { set: function(n4) {
          t3 = n4;
        }, is: function(n4) {
          return x(w(n4), t3);
        } };
      }
      function Dn(i2, r2) {
        var u2;
        return function() {
          var n3 = arguments, t3 = this;
          u2 || (u2 = Rn(r2 || 0, function() {
            i2.apply(t3, n3), u2 = null;
          }, null, 1)).start();
        };
      }
      var h = { marginRight: ["marginBottom", "marginLeft"], autoWidth: ["autoHeight"], fixedWidth: ["fixedHeight"], paddingLeft: ["paddingTop", "paddingRight"], paddingRight: ["paddingBottom", "paddingLeft"], width: ["height"], left: ["top", "right"], right: ["bottom", "left"], x: ["y"], X: ["Y"], Y: ["X"], ArrowLeft: ["ArrowUp", "ArrowRight"], ArrowRight: ["ArrowDown", "ArrowLeft"] };
      var Mn = m, On = m + "__slider", Tn = m + "__track", jn = m + "__list", Fn = m + "__slide", In = Fn + "--clone", Wn = Fn + "__container", Cn = m + "__arrows", t2 = m + "__arrow", Nn = t2 + "--prev", Xn = t2 + "--next", i = m + "__pagination", Bn = m + "__progress", Gn = Bn + "__bar", Hn = m + "__autoplay", Yn = m + "__play", Un = m + "__pause", qn = "is-active", Jn = "is-prev", Kn = "is-next", Vn = "is-visible", Qn = "is-loading", Zn = [qn, Vn, Jn, Kn, Qn];
      var $n = "role", nt = "aria-controls", tt = "aria-current", it = "aria-label", rt = "aria-hidden", ut = "tabindex", p = "aria-orientation", ot = [$n, nt, tt, it, rt, p, ut, "disabled"], et = "slide", ct = "loop", ft = "fade";
      function at(u2, i2, r2, o2) {
        var t3, n3 = Pn(u2), e2 = n3.on, c2 = n3.emit, f2 = n3.bind, a2 = n3.destroy, s2 = u2.Components, l2 = u2.root, d2 = u2.options, v2 = d2.isNavigation, h2 = d2.updateOnMove, p2 = s2.Direction.resolve, g2 = X(o2, "style"), m2 = -1 < r2, y2 = P(o2, "." + Wn), w2 = d2.focusableNodes && J(o2, d2.focusableNodes);
        function _2() {
          var n4 = m2 ? r2 : i2, t4 = fn(d2.i18n.slideX, n4 + 1), n4 = u2.splides.map(function(n5) {
            return n5.splide.root.id;
          }).join(" ");
          j(o2, it, t4), j(o2, nt, n4), j(o2, $n, "menuitem"), k2(A2());
        }
        function b2() {
          t3 || x2();
        }
        function x2() {
          var n4;
          t3 || (n4 = u2.index, k2(A2()), function(n5) {
            var t4 = !n5 && (!A2() || m2);
            j(o2, rt, t4 || null), j(o2, ut, !t4 && d2.slideFocus ? 0 : null), w2 && w2.forEach(function(n6) {
              j(n6, ut, t4 ? -1 : null);
            });
            n5 !== B(o2, Vn) && (E(o2, Vn, n5), c2(n5 ? yn : wn, L2));
          }(function() {
            if (u2.is(ft))
              return A2();
            var n5 = G(s2.Elements.track), t4 = G(o2), i3 = p2("left"), r3 = p2("right");
            return tn(n5[i3]) <= rn(t4[i3]) && tn(t4[r3]) <= rn(n5[r3]);
          }()), E(o2, Jn, i2 === n4 - 1), E(o2, Kn, i2 === n4 + 1));
        }
        function k2(n4) {
          n4 !== B(o2, qn) && (E(o2, qn, n4), v2 && j(o2, tt, n4 || null), c2(n4 ? gn : mn, L2));
        }
        function A2() {
          var n4 = u2.index;
          return n4 === i2 || d2.cloneStatus && n4 === r2;
        }
        var L2 = { index: i2, slideIndex: r2, slide: o2, container: y2, isClone: m2, mount: function() {
          m2 || (o2.id = l2.id + "-slide" + an(i2 + 1)), f2(o2, "click keydown", function(n4) {
            c2(n4.type === "click" ? pn : _n, L2, n4);
          }), e2([bn, Ln, hn, vn, En], x2), e2(Sn, _2), h2 && e2(dn, b2);
        }, destroy: function() {
          t3 = true, a2(), K(o2, Zn), T(o2, ot), j(o2, "style", g2);
        }, update: x2, style: function(n4, t4, i3) {
          C(i3 && y2 || o2, n4, t4);
        }, isWithin: function(n4, t4) {
          return n4 = un(n4 - i2), (n4 = !m2 && (d2.rewind || u2.is(ct)) ? $(n4, u2.length - n4) : n4) <= t4;
        } };
        return L2;
      }
      var st = a + "-interval";
      var lt = { passive: false, capture: true }, dt = "touchmove mousemove", vt = "touchend touchcancel mouseup";
      var ht = ["Left", "Right", "Up", "Down"], pt = "keydown";
      var gt = a + "-lazy", mt = gt + "-srcset", yt = "[" + gt + "], [" + mt + "]";
      var wt = [" ", "Enter", "Spacebar"];
      var _t = Object.freeze({ __proto__: null, Options: function(t3, n3, r2) {
        var u2, o2, i2, e2 = Dn(f2);
        function c2(n4) {
          n4 && removeEventListener("resize", e2);
        }
        function f2() {
          var n4, n4 = (n4 = function(n5) {
            return n5[1].matches;
          }, s(o2).filter(n4)[0] || []);
          n4[0] !== i2 && function(n5) {
            n5 = r2.breakpoints[n5] || u2;
            n5.destroy ? (t3.options = u2, t3.destroy(n5.destroy === "completely")) : (t3.state.is(5) && (c2(true), t3.mount()), t3.options = n5);
          }(i2 = n4[0]);
        }
        return { setup: function() {
          try {
            l(r2, JSON.parse(X(t3.root, a)));
          } catch (n5) {
            Q(false, n5.message);
          }
          u2 = l({}, r2);
          var i3, n4 = r2.breakpoints;
          n4 && (i3 = r2.mediaQuery === "min", o2 = Object.keys(n4).sort(function(n5, t4) {
            return i3 ? +t4 - +n5 : +n5 - +t4;
          }).map(function(n5) {
            return [n5, matchMedia("(" + (i3 ? "min" : "max") + "-width:" + n5 + "px)")];
          }), f2());
        }, mount: function() {
          o2 && addEventListener("resize", e2);
        }, destroy: c2 };
      }, Direction: function(n3, t3, r2) {
        return { resolve: function(n4, t4) {
          var i2 = r2.direction;
          return h[n4][i2 !== "rtl" || t4 ? i2 === "ttb" ? 0 : -1 : 1] || n4;
        }, orient: function(n4) {
          return n4 * (r2.direction === "rtl" ? 1 : -1);
        } };
      }, Elements: function(n3, t3, i2) {
        var r2, u2, o2, e2, c2 = Pn(n3).on, f2 = n3.root, a2 = {}, s2 = [];
        function l2() {
          var n4;
          !function() {
            u2 = P(f2, "." + On), o2 = q(f2, "." + Tn), e2 = P(o2, "." + jn), Q(o2 && e2, "A track/list element is missing."), k(s2, z(e2, "." + Fn + ":not(." + In + ")"));
            var n5 = p2("." + Hn), t4 = p2("." + Cn);
            O(a2, { root: f2, slider: u2, track: o2, list: e2, slides: s2, arrows: t4, autoplay: n5, prev: q(t4, "." + Nn), next: q(t4, "." + Xn), bar: q(p2("." + Bn), "." + Gn), play: q(n5, "." + Yn), pause: q(n5, "." + Un) });
          }(), n4 = f2.id || function(n5) {
            return "" + n5 + an(sn[n5] = (sn[n5] || 0) + 1);
          }(m), f2.id = n4, o2.id = o2.id || n4 + "-track", e2.id = e2.id || n4 + "-list", A(f2, r2 = g2());
        }
        function d2() {
          [f2, o2, e2].forEach(function(n4) {
            T(n4, "style");
          }), _(s2), K(f2, r2);
        }
        function v2() {
          d2(), l2();
        }
        function h2() {
          K(f2, r2), A(f2, r2 = g2());
        }
        function p2(n4) {
          return P(f2, n4) || P(u2, n4);
        }
        function g2() {
          return [Mn + "--" + i2.type, Mn + "--" + i2.direction, i2.drag && Mn + "--draggable", i2.isNavigation && Mn + "--nav", qn];
        }
        return O(a2, { setup: l2, mount: function() {
          c2(bn, v2, R - 2), c2(xn, h2);
        }, destroy: d2 });
      }, Slides: function(r2, u2, o2) {
        var n3 = Pn(r2), t3 = n3.on, e2 = n3.emit, c2 = n3.bind, f2 = (n3 = u2.Elements).slides, a2 = n3.list, s2 = [];
        function i2() {
          f2.forEach(function(n4, t4) {
            v2(n4, t4, -1);
          });
        }
        function l2() {
          p2(function(n4) {
            n4.destroy();
          }), _(s2);
        }
        function d2() {
          l2(), i2();
        }
        function v2(n4, t4, i3) {
          n4 = at(r2, t4, i3, n4);
          n4.mount(), s2.push(n4);
        }
        function h2(n4) {
          return n4 ? g2(function(n5) {
            return !n5.isClone;
          }) : s2;
        }
        function p2(n4, t4) {
          h2(t4).forEach(n4);
        }
        function g2(t4) {
          return s2.filter(typeof t4 == "function" ? t4 : function(n4) {
            return D(t4) ? W(n4.slide, t4) : x(w(t4), n4.index);
          });
        }
        return { mount: function() {
          i2(), t3(bn, d2), t3([ln, bn], function() {
            s2.sort(function(n4, t4) {
              return n4.index - t4.index;
            });
          });
        }, destroy: l2, update: function() {
          p2(function(n4) {
            n4.update();
          });
        }, register: v2, get: h2, getIn: function(n4) {
          var t4 = u2.Controller, i3 = t4.toIndex(n4), r3 = t4.hasFocus() ? 1 : o2.perPage;
          return g2(function(n5) {
            return on(n5.index, i3, i3 + r3 - 1);
          });
        }, getAt: function(n4) {
          return g2(n4)[0];
        }, add: function(n4, u3) {
          b(n4, function(n5) {
            var t4, i3, r3;
            y(n5 = D(n5) ? Y(n5) : n5) && ((t4 = f2[u3]) ? S(n5, t4) : L(a2, n5), A(n5, o2.classes.slide), n5 = n5, i3 = e2.bind(null, kn), n5 = J(n5, "img"), (r3 = n5.length) ? n5.forEach(function(n6) {
              c2(n6, "load error", function() {
                --r3 || i3();
              });
            }) : i3());
          }), e2(bn);
        }, remove: function(n4) {
          H(g2(n4).map(function(n5) {
            return n5.slide;
          })), e2(bn);
        }, forEach: p2, filter: g2, style: function(t4, i3, r3) {
          p2(function(n4) {
            n4.style(t4, i3, r3);
          });
        }, getLength: function(n4) {
          return (n4 ? f2 : s2).length;
        }, isEnough: function() {
          return s2.length > o2.perPage;
        } };
      }, Layout: function(n3, t3, i2) {
        var r2, u2, o2 = Pn(n3), e2 = o2.on, c2 = o2.bind, f2 = o2.emit, a2 = t3.Slides, s2 = t3.Direction.resolve, l2 = (t3 = t3.Elements).root, d2 = t3.track, v2 = t3.list, h2 = a2.getAt;
        function p2() {
          u2 = null, r2 = i2.direction === "ttb", C(l2, "maxWidth", V(i2.width)), C(d2, s2("paddingLeft"), m2(false)), C(d2, s2("paddingRight"), m2(true)), g2();
        }
        function g2() {
          var n4 = G(l2);
          u2 && u2.width === n4.width && u2.height === n4.height || (C(d2, "height", function() {
            var n5 = "";
            r2 && (Q(n5 = y2(), "height or heightRatio is missing."), n5 = "calc(" + n5 + " - " + m2(false) + " - " + m2(true) + ")");
            return n5;
          }()), a2.style(s2("marginRight"), V(i2.gap)), a2.style("width", (i2.autoWidth ? "" : V(i2.fixedWidth) || (r2 ? "" : w2())) || null), a2.style("height", V(i2.fixedHeight) || (r2 ? i2.autoHeight ? "" : w2() : y2()) || null, true), u2 = n4, f2(An));
        }
        function m2(n4) {
          var t4 = i2.padding, n4 = s2(n4 ? "right" : "left");
          return t4 && V(t4[n4] || (I(t4) ? 0 : t4)) || "0px";
        }
        function y2() {
          return V(i2.height || G(v2).width * i2.heightRatio);
        }
        function w2() {
          var n4 = V(i2.gap);
          return "calc((100%" + (n4 && " + " + n4) + ")/" + (i2.perPage || 1) + (n4 && " - " + n4) + ")";
        }
        function _2(n4, t4) {
          var i3 = h2(n4);
          if (i3) {
            n4 = G(i3.slide)[s2("right")], i3 = G(v2)[s2("left")];
            return un(n4 - i3) + (t4 ? 0 : b2());
          }
          return 0;
        }
        function b2() {
          var n4 = h2(0);
          return n4 && parseFloat(C(n4.slide, s2("marginRight"))) || 0;
        }
        return { mount: function() {
          p2(), c2(window, "resize load", Dn(f2.bind(this, kn))), e2([xn, bn], p2), e2(kn, g2);
        }, listSize: function() {
          return G(v2)[s2("width")];
        }, slideSize: function(n4, t4) {
          return (n4 = h2(n4 || 0)) ? G(n4.slide)[s2("width")] + (t4 ? 0 : b2()) : 0;
        }, sliderSize: function() {
          return _2(n3.length - 1, true) - _2(-1, true);
        }, totalSize: _2, getPadding: function(n4) {
          return parseFloat(C(d2, s2("padding" + (n4 ? "Right" : "Left")))) || 0;
        } };
      }, Clones: function(c2, n3, f2) {
        var t3, i2 = Pn(c2), r2 = i2.on, u2 = i2.emit, a2 = n3.Elements, s2 = n3.Slides, o2 = n3.Direction.resolve, l2 = [];
        function e2() {
          (t3 = p2()) && (function(u3) {
            var o3 = s2.get().slice(), e3 = o3.length;
            if (e3) {
              for (; o3.length < u3; )
                k(o3, o3);
              k(o3.slice(-u3), o3.slice(0, u3)).forEach(function(n4, t4) {
                var i3 = t4 < u3, r3 = function(n5, t5) {
                  n5 = n5.cloneNode(true);
                  return A(n5, f2.classes.clone), n5.id = c2.root.id + "-clone" + an(t5 + 1), n5;
                }(n4.slide, t4);
                i3 ? S(r3, o3[0].slide) : L(a2.list, r3), k(l2, r3), s2.register(r3, t4 - u3 + (i3 ? 0 : e3), n4.index);
              });
            }
          }(t3), u2(kn));
        }
        function d2() {
          H(l2), _(l2);
        }
        function v2() {
          d2(), e2();
        }
        function h2() {
          t3 < p2() && u2(bn);
        }
        function p2() {
          var n4, t4, i3 = f2.clones;
          return c2.is(ct) ? i3 || (n4 = a2.list, D(t4 = f2[o2("fixedWidth")]) && (t4 = G(n4 = F("div", { style: "width: " + t4 + "; position: absolute;" }, n4)).width, H(n4)), i3 = ((t4 = t4) && rn(G(a2.track)[o2("width")] / t4) || f2[o2("autoWidth")] && c2.length || f2.perPage) * (f2.drag ? (f2.flickMaxPages || 1) + 1 : 2)) : i3 = 0, i3;
        }
        return { mount: function() {
          e2(), r2(bn, v2), r2([xn, kn], h2);
        }, destroy: d2 };
      }, Move: function(e2, c2, f2) {
        var a2, n3 = Pn(e2), t3 = n3.on, s2 = n3.emit, r2 = (n3 = c2.Layout).slideSize, i2 = n3.getPadding, u2 = n3.totalSize, o2 = n3.listSize, l2 = n3.sliderSize, d2 = (n3 = c2.Direction).resolve, v2 = n3.orient, h2 = (n3 = c2.Elements).list, p2 = n3.track;
        function g2() {
          k2() || (c2.Scroll.cancel(), m2(e2.index), s2(Ln));
        }
        function m2(n4) {
          y2(_2(n4, true));
        }
        function y2(n4, t4) {
          e2.is(ft) || (t4 = t4 ? n4 : function(n5) {
            {
              var t5, i3;
              e2.is(ct) && (i3 = v2(n5 - b2()), t5 = A2(false, n5) && i3 < 0, i3 = A2(true, n5) && 0 < i3, (t5 || i3) && (n5 = w2(n5, i3)));
            }
            return n5;
          }(n4), h2.style.transform = "translate" + d2("X") + "(" + t4 + "px)", n4 !== t4 && s2(hn));
        }
        function w2(n4, t4) {
          var i3 = n4 - x2(t4), r3 = l2();
          return n4 -= v2(r3 * (rn(un(i3) / r3) || 1)) * (t4 ? 1 : -1);
        }
        function _2(n4, t4) {
          var i3, i3 = v2(u2(n4 - 1) - (i3 = n4, (n4 = f2.focus) === "center" ? (o2() - r2(i3, true)) / 2 : +n4 * r2(i3) || 0));
          return t4 ? function(n5) {
            f2.trimSpace && e2.is(et) && (n5 = en(n5, 0, v2(l2() - o2())));
            return n5;
          }(i3) : i3;
        }
        function b2() {
          var n4 = d2("left");
          return G(h2)[n4] - G(p2)[n4] + v2(i2(false));
        }
        function x2(n4) {
          return _2(n4 ? c2.Controller.getEnd() : 0, !!f2.trimSpace);
        }
        function k2() {
          return e2.state.is(4) && f2.waitForTransition;
        }
        function A2(n4, t4) {
          t4 = M(t4) ? b2() : t4;
          var i3 = n4 !== true && v2(t4) < v2(x2(false)), t4 = n4 !== false && v2(t4) > v2(x2(true));
          return i3 || t4;
        }
        return { mount: function() {
          a2 = c2.Transition, t3([ln, An, xn, bn], g2);
        }, destroy: function() {
          T(h2, "style");
        }, move: function(n4, t4, i3, r3) {
          var u3, o3;
          k2() || (u3 = e2.state.set, o3 = b2(), n4 !== t4 && (a2.cancel(), y2(w2(o3, t4 < n4), true)), u3(4), s2(dn, t4, i3, n4), a2.start(t4, function() {
            u3(3), s2(vn, t4, i3, n4), f2.trimSpace === "move" && n4 !== i3 && o3 === b2() ? c2.Controller.go(i3 < n4 ? ">" : "<", false, r3) : r3 && r3();
          }));
        }, jump: m2, translate: y2, shift: w2, cancel: function() {
          y2(b2()), a2.cancel();
        }, toIndex: function(n4) {
          for (var t4 = c2.Slides.get(), i3 = 0, r3 = 1 / 0, u3 = 0; u3 < t4.length; u3++) {
            var o3 = t4[u3].index, e3 = un(_2(o3, true) - n4);
            if (!(e3 <= r3))
              break;
            r3 = e3, i3 = o3;
          }
          return i3;
        }, toPosition: _2, getPosition: b2, getLimit: x2, isBusy: k2, exceededLimit: A2 };
      }, Controller: function(n3, e2, u2) {
        var o2, c2, f2, t3 = Pn(n3).on, a2 = e2.Move, s2 = a2.getPosition, l2 = a2.getLimit, i2 = e2.Slides, d2 = i2.isEnough, r2 = i2.getLength, v2 = n3.is(ct), h2 = n3.is(et), p2 = u2.start || 0, g2 = p2;
        function m2() {
          o2 = r2(true), c2 = u2.perMove, f2 = u2.perPage, p2 = en(p2, 0, o2 - 1);
        }
        function y2(n4, t4, i3, r3, u3) {
          var o3 = t4 ? n4 : S2(n4);
          e2.Scroll.scroll(t4 || i3 ? a2.toPosition(o3, true) : n4, r3, function() {
            z2(a2.toIndex(a2.getPosition())), u3 && u3();
          });
        }
        function w2(n4) {
          return b2(false, n4);
        }
        function _2(n4) {
          return b2(true, n4);
        }
        function b2(n4, t4) {
          var i3, r3, u3 = c2 || (P2() ? 1 : f2), o3 = x2(p2 + u3 * (n4 ? -1 : 1), p2);
          return o3 !== -1 || !h2 || (i3 = s2(), r3 = l2(!n4), u3 = 1, un(i3 - r3) < u3) ? t4 ? o3 : A2(o3) : n4 ? 0 : k2();
        }
        function x2(n4, t4, i3) {
          var r3;
          return d2() ? (r3 = k2(), n4 < 0 || r3 < n4 ? n4 = on(0, n4, t4, true) || on(r3, t4, n4, true) ? L2(E2(n4)) : v2 ? c2 || P2() ? n4 : n4 < 0 ? -(o2 % f2 || f2) : o2 : u2.rewind ? n4 < 0 ? r3 : 0 : -1 : i3 || n4 === t4 || (n4 = c2 ? n4 : L2(E2(t4) + (n4 < t4 ? -1 : 1)))) : n4 = -1, n4;
        }
        function k2() {
          var n4 = o2 - f2;
          return (P2() || v2 && c2) && (n4 = o2 - 1), nn(n4, 0);
        }
        function A2(n4) {
          return v2 ? d2() ? n4 % o2 + (n4 < 0 ? o2 : 0) : -1 : n4;
        }
        function L2(n4) {
          return en(P2() ? n4 : f2 * n4, 0, k2());
        }
        function E2(n4) {
          return P2() || (n4 = on(n4, o2 - f2, o2 - 1) ? o2 - 1 : n4, n4 = tn(n4 / f2)), n4;
        }
        function S2(n4) {
          n4 = a2.toIndex(n4);
          return h2 ? en(n4, 0, k2()) : n4;
        }
        function z2(n4) {
          n4 !== p2 && (g2 = p2, p2 = n4);
        }
        function P2() {
          return !M(u2.focus) || u2.isNavigation;
        }
        return { mount: function() {
          m2(), t3([xn, bn], m2, R - 1);
        }, go: function(n4, t4, i3) {
          var r3 = function(n5) {
            var t5 = p2;
            {
              var i4, r4;
              D(n5) ? (r4 = n5.match(/([+\-<>])(\d+)?/) || [], i4 = r4[1], r4 = r4[2], i4 === "+" || i4 === "-" ? t5 = x2(p2 + +("" + i4 + (+r4 || 1)), p2, true) : i4 === ">" ? t5 = r4 ? L2(+r4) : w2(true) : i4 === "<" && (t5 = _2(true))) : t5 = v2 ? n5 : en(n5, 0, k2());
            }
            return t5;
          }(n4);
          u2.useScroll ? y2(r3, true, true, u2.speed, i3) : -1 < (n4 = A2(r3)) && !a2.isBusy() && (t4 || n4 !== p2) && (z2(n4), a2.move(r3, n4, g2, i3));
        }, scroll: y2, getNext: w2, getPrev: _2, getAdjacent: b2, getEnd: k2, setIndex: z2, getIndex: function(n4) {
          return n4 ? g2 : p2;
        }, toIndex: L2, toPage: E2, toDest: S2, hasFocus: P2 };
      }, Arrows: function(u2, n3, i2) {
        var r2, t3 = Pn(u2), o2 = t3.on, e2 = t3.bind, c2 = t3.emit, f2 = i2.classes, a2 = i2.i18n, s2 = n3.Elements, l2 = n3.Controller, d2 = s2.arrows, v2 = s2.prev, h2 = s2.next, p2 = {};
        function g2() {
          var n4, t4;
          i2.arrows && (v2 && h2 || (d2 = F("div", f2.arrows), v2 = m2(true), h2 = m2(false), r2 = true, L(d2, [v2, h2]), S(d2, P(i2.arrows === "slider" && s2.slider || u2.root)))), v2 && h2 && (p2.prev ? N(d2, i2.arrows === false ? "none" : "") : (n4 = s2.track.id, j(v2, nt, n4), j(h2, nt, n4), p2.prev = v2, p2.next = h2, t4 = l2.go, o2([ln, vn, xn, bn, En], y2), e2(h2, "click", function() {
            t4(">", true);
          }), e2(v2, "click", function() {
            t4("<", true);
          }), c2("arrows:mounted", v2, h2)));
        }
        function m2(n4) {
          return Y('<button class="' + f2.arrow + " " + (n4 ? f2.prev : f2.next) + '" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="' + (i2.arrowPath || "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z") + '" />');
        }
        function y2() {
          var n4 = u2.index, t4 = l2.getPrev(), i3 = l2.getNext(), r3 = -1 < t4 && n4 < t4 ? a2.last : a2.prev, n4 = -1 < i3 && i3 < n4 ? a2.first : a2.next;
          v2.disabled = t4 < 0, h2.disabled = i3 < 0, j(v2, it, r3), j(h2, it, n4), c2("arrows:updated", v2, h2, t4, i3);
        }
        return { arrows: p2, mount: function() {
          g2(), o2(xn, g2);
        }, destroy: function() {
          r2 ? H(d2) : (T(v2, ot), T(h2, ot));
        } };
      }, Autoplay: function(t3, i2, r2) {
        var u2, o2, e2, n3 = Pn(t3), c2 = n3.on, f2 = n3.bind, a2 = n3.emit, s2 = Rn(r2.interval, t3.go.bind(t3, ">"), function(n4) {
          var t4 = d2.bar;
          t4 && C(t4, "width", 100 * n4 + "%"), a2("autoplay:playing", n4);
        }), l2 = s2.isPaused, d2 = i2.Elements;
        function v2(n4) {
          var t4 = n4 ? "pause" : "play", i3 = d2[t4];
          i3 && (j(i3, nt, d2.track.id), j(i3, it, r2.i18n[t4]), f2(i3, "click", n4 ? p2 : h2));
        }
        function h2() {
          l2() && i2.Slides.isEnough() && (s2.start(!r2.resetProgress), o2 = u2 = e2 = false, a2("autoplay:play"));
        }
        function p2(n4) {
          n4 === void 0 && (n4 = true), l2() || (s2.pause(), a2("autoplay:pause")), e2 = n4;
        }
        function g2() {
          e2 || (u2 || o2 ? p2(false) : h2());
        }
        function m2() {
          var n4 = i2.Slides.getAt(t3.index);
          s2.set(n4 && +X(n4.slide, st) || r2.interval);
        }
        return { mount: function() {
          var n4 = r2.autoplay;
          n4 && (v2(true), v2(false), function() {
            var n5 = d2.root;
            r2.pauseOnHover && f2(n5, "mouseenter mouseleave", function(n6) {
              u2 = n6.type === "mouseenter", g2();
            });
            r2.pauseOnFocus && f2(n5, "focusin focusout", function(n6) {
              o2 = n6.type === "focusin", g2();
            });
            c2([dn, "scroll", bn], s2.rewind), c2(dn, m2);
          }(), n4 !== "pause" && h2());
        }, destroy: s2.cancel, play: h2, pause: p2, isPaused: l2 };
      }, Cover: function(n3, t3, i2) {
        var r2 = Pn(n3).on;
        function u2(i3) {
          t3.Slides.forEach(function(n4) {
            var t4 = P(n4.container || n4.slide, "img");
            t4 && t4.src && o2(i3, t4, n4);
          });
        }
        function o2(n4, t4, i3) {
          i3.style("background", n4 ? 'center/cover no-repeat url("' + t4.src + '")' : "", true), N(t4, n4 ? "none" : "");
        }
        return { mount: function() {
          i2.cover && (r2(zn, function(n4, t4) {
            o2(true, n4, t4);
          }), r2([ln, xn, bn], u2.bind(null, true)));
        }, destroy: function() {
          u2(false);
        } };
      }, Scroll: function(c2, n3, f2) {
        var a2, s2, t3 = Pn(c2), i2 = t3.on, l2 = t3.emit, d2 = n3.Move, v2 = d2.getPosition, h2 = d2.getLimit, p2 = d2.exceededLimit;
        function g2(r3, n4, t4, u2) {
          var i3, o2 = v2(), e2 = 1;
          n4 = n4 || (i3 = un(r3 - o2), nn(i3 / 1.5, 800)), s2 = t4, y2(), a2 = Rn(n4, m2, function(n5) {
            var t5 = v2(), i4 = (o2 + (r3 - o2) * (i4 = n5, (n5 = f2.easingFunc) ? n5(i4) : 1 - Math.pow(1 - i4, 4)) - v2()) * e2;
            d2.translate(t5 + i4), c2.is(et) && !u2 && p2() && (e2 *= 0.6, un(i4) < 10 && (i4 = p2(false), g2(h2(!i4), 600, null, true)));
          }, 1), l2("scroll"), a2.start();
        }
        function m2() {
          var n4 = v2(), t4 = d2.toIndex(n4);
          on(t4, 0, c2.length - 1) || d2.translate(d2.shift(n4, 0 < t4), true), s2 && s2(), l2(En);
        }
        function y2() {
          a2 && a2.cancel();
        }
        function r2() {
          a2 && !a2.isPaused() && (y2(), m2());
        }
        return { mount: function() {
          i2(dn, y2), i2([xn, bn], r2);
        }, destroy: y2, scroll: g2, cancel: r2 };
      }, Drag: function(u2, o2, e2) {
        var c2, f2, a2, s2, l2, d2, v2, r2, h2, n3 = Pn(u2), t3 = n3.on, p2 = n3.emit, g2 = n3.bind, m2 = n3.unbind, y2 = o2.Move, w2 = o2.Scroll, _2 = o2.Controller, b2 = o2.Elements.track, i2 = (n3 = o2.Direction).resolve, x2 = n3.orient, k2 = y2.getPosition, A2 = y2.exceededLimit, L2 = false;
        function E2() {
          var n4 = e2.drag;
          F2(!n4), l2 = n4 === "free";
        }
        function S2(n4) {
          var t4, i3;
          r2 || (i3 = e2.noDrag, t4 = j2(n4), i3 = !i3 || !W(n4.target, i3), v2 = false, !i3 || !t4 && n4.button || (y2.isBusy() ? U(n4, true) : (h2 = t4 ? b2 : window, s2 = a2 = null, g2(h2, dt, z2, lt), g2(h2, vt, P2, lt), y2.cancel(), w2.cancel(), R2(n4))));
        }
        function z2(n4) {
          var t4, i3, r3;
          s2 || p2("drag"), (s2 = n4).cancelable && (t4 = O2(n4) - O2(f2), d2 ? (y2.translate(c2 + t4 / (L2 && u2.is(et) ? 5 : 1)), i3 = 200 < T2(n4) - T2(f2), r3 = L2 !== (L2 = A2()), (i3 || r3) && R2(n4), p2("dragging"), v2 = true, U(n4)) : (r3 = I(r3 = e2.dragMinThreshold) ? r3 : { mouse: 0, touch: +r3 || 10 }, d2 = un(t4) > (j2(n4) ? r3.touch : r3.mouse), M2() && U(n4)));
        }
        function P2(n4) {
          m2(h2, dt, z2), m2(h2, vt, P2);
          var t4, i3, r3 = u2.index;
          s2 ? ((d2 || n4.cancelable && M2()) && (t4 = function(n5) {
            if (u2.is(ct) || !L2) {
              var t5 = f2 === s2 && a2 || f2, i4 = O2(s2) - O2(t5), t5 = T2(n5) - T2(t5), n5 = T2(n5) - T2(s2) < 200;
              if (t5 && n5)
                return i4 / t5;
            }
            return 0;
          }(n4), i3 = t4, i3 = k2() + cn(i3) * $(un(i3) * (e2.flickPower || 600), l2 ? 1 / 0 : o2.Layout.listSize() * (e2.flickMaxPages || 1)), l2 ? _2.scroll(i3) : u2.is(ft) ? _2.go(r3 + x2(cn(t4))) : _2.go(_2.toDest(i3), true), U(n4)), p2("dragged")) : l2 || k2() === y2.toPosition(r3) || _2.go(r3, true), d2 = false;
        }
        function R2(n4) {
          a2 = f2, f2 = n4, c2 = k2();
        }
        function D2(n4) {
          !r2 && v2 && U(n4, true);
        }
        function M2() {
          var n4 = un(O2(s2) - O2(f2));
          return un(O2(s2, true) - O2(f2, true)) < n4;
        }
        function O2(n4, t4) {
          return (j2(n4) ? n4.touches[0] : n4)["page" + i2(t4 ? "Y" : "X")];
        }
        function T2(n4) {
          return n4.timeStamp;
        }
        function j2(n4) {
          return typeof TouchEvent != "undefined" && n4 instanceof TouchEvent;
        }
        function F2(n4) {
          r2 = n4;
        }
        return { mount: function() {
          g2(b2, dt, Z, lt), g2(b2, vt, Z, lt), g2(b2, "touchstart mousedown", S2, lt), g2(b2, "click", D2, { capture: true }), g2(b2, "dragstart", U), t3([ln, xn], E2);
        }, disable: F2, isDragging: function() {
          return d2;
        } };
      }, Keyboard: function(t3, n3, i2) {
        var r2, u2, o2 = Pn(t3), e2 = o2.on, c2 = o2.bind, f2 = o2.unbind, a2 = t3.root, s2 = n3.Direction.resolve;
        function l2() {
          var n4 = i2.keyboard;
          n4 && (n4 === "focused" ? j(r2 = a2, ut, 0) : r2 = window, c2(r2, pt, p2));
        }
        function d2() {
          f2(r2, pt), y(r2) && T(r2, ut);
        }
        function v2() {
          var n4 = u2;
          u2 = true, g(function() {
            u2 = n4;
          });
        }
        function h2() {
          d2(), l2();
        }
        function p2(n4) {
          u2 || (n4 = n4.key, (n4 = x(ht, n4) ? "Arrow" + n4 : n4) === s2("ArrowLeft") ? t3.go("<") : n4 === s2("ArrowRight") && t3.go(">"));
        }
        return { mount: function() {
          l2(), e2(xn, h2), e2(dn, v2);
        }, destroy: d2, disable: function(n4) {
          u2 = n4;
        } };
      }, LazyLoad: function(i2, n3, e2) {
        var t3 = Pn(i2), r2 = t3.on, u2 = t3.off, o2 = t3.bind, c2 = t3.emit, f2 = e2.lazyLoad === "sequential", a2 = [], s2 = 0;
        function l2() {
          v2(), d2();
        }
        function d2() {
          n3.Slides.forEach(function(o3) {
            J(o3.slide, yt).forEach(function(n4) {
              var t4, i3, r3 = X(n4, gt), u3 = X(n4, mt);
              r3 === n4.src && u3 === n4.srcset || (t4 = e2.classes.spinner, j(i3 = P(i3 = n4.parentElement, "." + t4) || F("span", t4, i3), $n, "presentation"), a2.push({ o: n4, e: o3, src: r3, srcset: u3, c: i3 }), n4.src || N(n4, "none"));
            });
          }), f2 && g2();
        }
        function v2() {
          s2 = 0, a2 = [];
        }
        function h2() {
          (a2 = a2.filter(function(n4) {
            var t4 = e2.perPage * ((e2.preloadPages || 1) + 1) - 1;
            return !n4.e.isWithin(i2.index, t4) || p2(n4);
          })).length || u2(vn);
        }
        function p2(t4) {
          var i3 = t4.o;
          A(t4.e.slide, Qn), o2(i3, "load error", function(n4) {
            !function(n5, t5) {
              var i4 = n5.e;
              K(i4.slide, Qn), t5 || (H(n5.c), N(n5.o, ""), c2(zn, n5.o, i4), c2(kn));
              f2 && g2();
            }(t4, n4.type === "error");
          }), ["src", "srcset"].forEach(function(n4) {
            t4[n4] && (j(i3, n4, t4[n4]), T(i3, n4 === "src" ? gt : mt));
          });
        }
        function g2() {
          s2 < a2.length && p2(a2[s2++]);
        }
        return { mount: function() {
          e2.lazyLoad && (d2(), r2(bn, l2), f2 || r2([ln, bn, vn, En], h2));
        }, destroy: v2 };
      }, Pagination: function(l2, n3, d2) {
        var v2, t3 = Pn(l2), i2 = t3.on, r2 = t3.emit, h2 = t3.bind, u2 = t3.unbind, p2 = n3.Slides, g2 = n3.Elements, o2 = n3.Controller, m2 = o2.hasFocus, e2 = o2.getIndex, y2 = [];
        function c2() {
          f2(), d2.pagination && p2.isEnough() && (function() {
            var n4 = l2.length, t4 = d2.classes, i3 = d2.i18n, r3 = d2.perPage, u3 = d2.pagination === "slider" && g2.slider || g2.root, o3 = m2() ? n4 : rn(n4 / r3);
            v2 = F("ul", t4.pagination, u3);
            for (var e3 = 0; e3 < o3; e3++) {
              var c3 = F("li", null, v2), f3 = F("button", { class: t4.page, type: "button" }, c3), a3 = p2.getIn(e3).map(function(n5) {
                return n5.slide.id;
              }), s3 = !m2() && 1 < r3 ? i3.pageX : i3.slideX;
              h2(f3, "click", w2.bind(null, e3)), j(f3, nt, a3.join(" ")), j(f3, it, fn(s3, e3 + 1)), y2.push({ li: c3, button: f3, page: e3 });
            }
          }(), r2("pagination:mounted", { list: v2, items: y2 }, a2(l2.index)), s2());
        }
        function f2() {
          v2 && (H(v2), y2.forEach(function(n4) {
            u2(n4.button, "click");
          }), _(y2), v2 = null);
        }
        function w2(t4) {
          o2.go(">" + t4, true, function() {
            var n4 = p2.getAt(o2.toIndex(t4));
            n4 && ((n4 = n4.slide).setActive && n4.setActive() || n4.focus({ preventScroll: true }));
          });
        }
        function a2(n4) {
          return y2[o2.toPage(n4)];
        }
        function s2() {
          var n4 = a2(e2(true)), t4 = a2(e2());
          n4 && (K(n4.button, qn), T(n4.button, tt)), t4 && (A(t4.button, qn), j(t4.button, tt, true)), r2("pagination:updated", { list: v2, items: y2 }, n4, t4);
        }
        return { items: y2, mount: function() {
          c2(), i2([xn, bn], c2), i2([dn, En], s2);
        }, destroy: f2, getAt: a2, update: s2 };
      }, Sync: function(u2, n3, i2) {
        var r2 = n3.Elements.list, o2 = [];
        function t3() {
          var n4, t4;
          u2.splides.forEach(function(n5) {
            var i3;
            n5.isParent || (i3 = n5.splide, [u2, i3].forEach(function(n6) {
              var t5 = Pn(n6), r3 = n6 === u2 ? i3 : u2;
              t5.on(dn, function(n7, t6, i4) {
                r3.go(r3.is(ct) ? i4 : n7);
              }), o2.push(t5);
            }));
          }), i2.isNavigation && (n4 = Pn(u2), (t4 = n4.on)(pn, f2), t4(_n, a2), t4([ln, xn], c2), j(r2, $n, "menu"), o2.push(n4), n4.emit(Sn, u2.splides));
        }
        function e2() {
          T(r2, ot), o2.forEach(function(n4) {
            n4.destroy();
          }), _(o2);
        }
        function c2() {
          j(r2, p, i2.direction !== "ttb" ? "horizontal" : null);
        }
        function f2(n4) {
          u2.go(n4.index);
        }
        function a2(n4, t4) {
          x(wt, t4.key) && (f2(n4), U(t4));
        }
        return { mount: t3, destroy: e2, remount: function() {
          e2(), t3();
        } };
      }, Wheel: function(i2, r2, u2) {
        var n3 = Pn(i2).bind;
        function t3(n4) {
          var t4;
          !n4.cancelable || (t4 = n4.deltaY) && (i2.go((t4 = t4 < 0) ? "<" : ">"), t4 = t4, u2.releaseWheel && !i2.state.is(4) && r2.Controller.getAdjacent(t4) === -1 || U(n4));
        }
        return { mount: function() {
          u2.wheel && n3(r2.Elements.track, "wheel", t3, lt);
        } };
      } }), bt = { type: "slide", speed: 400, waitForTransition: true, perPage: 1, cloneStatus: true, arrows: true, pagination: true, interval: 5e3, pauseOnHover: true, pauseOnFocus: true, resetProgress: true, keyboard: true, easing: "cubic-bezier(0.25, 1, 0.5, 1)", drag: true, direction: "ltr", slideFocus: true, trimSpace: true, focusableNodes: "a, button, textarea, input, select, iframe", classes: { slide: Fn, clone: In, arrows: Cn, arrow: t2, prev: Nn, next: Xn, pagination: i, page: i + "__page", spinner: m + "__spinner" }, i18n: { prev: "Previous slide", next: "Next slide", first: "Go to first slide", last: "Go to last slide", slideX: "Go to slide %s", pageX: "Go to page %s", play: "Start autoplay", pause: "Pause autoplay" } };
      function xt(n3, r2, t3) {
        var i2 = Pn(n3).on;
        return { mount: function() {
          i2([ln, bn], function() {
            g(function() {
              r2.Slides.style("transition", "opacity " + t3.speed + "ms " + t3.easing);
            });
          });
        }, start: function(n4, t4) {
          var i3 = r2.Elements.track;
          C(i3, "height", V(G(i3).height)), g(function() {
            t4(), C(i3, "height", "");
          });
        }, cancel: Z };
      }
      function kt(o2, n3, e2) {
        var c2, t3 = Pn(o2).bind, f2 = n3.Move, a2 = n3.Controller, i2 = n3.Elements.list;
        function r2() {
          s2("");
        }
        function s2(n4) {
          C(i2, "transition", n4);
        }
        return { mount: function() {
          t3(i2, "transitionend", function(n4) {
            n4.target === i2 && c2 && (r2(), c2());
          });
        }, start: function(n4, t4) {
          var i3 = f2.toPosition(n4, true), r3 = f2.getPosition(), u2 = function(n5) {
            var t5 = e2.rewindSpeed;
            if (o2.is(et) && t5) {
              var i4 = a2.getIndex(true), r4 = a2.getEnd();
              if (i4 === 0 && r4 <= n5 || r4 <= i4 && n5 === 0)
                return t5;
            }
            return e2.speed;
          }(n4);
          1 <= un(i3 - r3) && 1 <= u2 ? (s2("transform " + u2 + "ms " + e2.easing), f2.translate(i3, true), c2 = t4) : (f2.jump(n4), t4());
        }, cancel: r2 };
      }
      i = function() {
        function i2(n4, t4) {
          this.event = c(), this.Components = {}, this.state = d(1), this.splides = [], this.f = {}, this.a = {};
          n4 = D(n4) ? q(document, n4) : n4;
          Q(n4, n4 + " is invalid."), this.root = n4, l(bt, i2.defaults), l(l(this.f, bt), t4 || {});
        }
        var n3, t3, r2 = i2.prototype;
        return r2.mount = function(n4, t4) {
          var i3 = this, r3 = this.state, u2 = this.Components;
          return Q(r3.is([1, 5]), "Already mounted!"), r3.set(1), this.s = u2, this.l = t4 || this.l || (this.is(ft) ? xt : kt), this.a = n4 || this.a, e(O({}, _t, this.a, { Transition: this.l }), function(n5, t5) {
            n5 = n5(i3, u2, i3.f);
            (u2[t5] = n5).setup && n5.setup();
          }), e(u2, function(n5) {
            n5.mount && n5.mount();
          }), this.emit(ln), A(this.root, "is-initialized"), r3.set(3), this.emit("ready"), this;
        }, r2.sync = function(n4) {
          return this.splides.push({ splide: n4 }), n4.splides.push({ splide: this, isParent: true }), this.state.is(3) && (this.s.Sync.remount(), n4.Components.Sync.remount()), this;
        }, r2.go = function(n4) {
          return this.s.Controller.go(n4), this;
        }, r2.on = function(n4, t4) {
          return this.event.on(n4, t4, null, 20), this;
        }, r2.off = function(n4) {
          return this.event.off(n4), this;
        }, r2.emit = function(n4) {
          var t4;
          return (t4 = this.event).emit.apply(t4, [n4].concat(s(arguments, 1))), this;
        }, r2.add = function(n4, t4) {
          return this.s.Slides.add(n4, t4), this;
        }, r2.remove = function(n4) {
          return this.s.Slides.remove(n4), this;
        }, r2.is = function(n4) {
          return this.f.type === n4;
        }, r2.refresh = function() {
          return this.emit(bn), this;
        }, r2.destroy = function(t4) {
          t4 === void 0 && (t4 = true);
          var n4 = this.event, i3 = this.state;
          return i3.is(1) ? n4.on("ready", this.destroy.bind(this, t4), this) : (e(this.s, function(n5) {
            n5.destroy && n5.destroy(t4);
          }, true), n4.emit(f), n4.destroy(), t4 && _(this.splides), i3.set(5)), this;
        }, n3 = i2, (r2 = [{ key: "options", get: function() {
          return this.f;
        }, set: function(n4) {
          var t4 = this.f;
          l(t4, n4), this.state.is(1) || this.emit(xn, t4);
        } }, { key: "length", get: function() {
          return this.s.Slides.getLength(true);
        } }, { key: "index", get: function() {
          return this.s.Controller.getIndex();
        } }]) && At(n3.prototype, r2), t3 && At(n3, t3), i2;
      }();
      return i.defaults = {}, i.STATES = n2, i;
    }, typeof exports == "object" && typeof module2 != "undefined" ? module2.exports = t() : typeof define == "function" && define.amd ? define(t) : (n = typeof globalThis != "undefined" ? globalThis : n || self).Splide = t();
  }
});

// src/js/index.ts
__export(exports, {
  Splide: () => Splide,
  SplideSlide: () => SplideSlide
});

// src/js/components/Splide/Splide.tsx
var import_splide2 = __toModule(require_splide_min());
var import_react = __toModule(require("react"));

// src/js/constants/events.ts
var import_splide = __toModule(require_splide_min());
var EVENTS = [
  [import_splide.EVENT_MOUNTED, "onMounted"],
  [import_splide.EVENT_READY, "onReady"],
  [import_splide.EVENT_MOVE, "onMove"],
  [import_splide.EVENT_MOVED, "onMoved"],
  [import_splide.EVENT_CLICK, "onClick"],
  [import_splide.EVENT_ACTIVE, "onActive"],
  [import_splide.EVENT_INACTIVE, "onInactive"],
  [import_splide.EVENT_VISIBLE, "onVisible"],
  [import_splide.EVENT_HIDDEN, "onHidden"],
  [import_splide.EVENT_REFRESH, "onRefresh"],
  [import_splide.EVENT_UPDATED, "onUpdated"],
  [import_splide.EVENT_RESIZE, "onResize"],
  [import_splide.EVENT_RESIZED, "onResized"],
  [import_splide.EVENT_DRAG, "onDrag"],
  [import_splide.EVENT_DRAGGING, "onDragging"],
  [import_splide.EVENT_DRAGGED, "onDragged"],
  [import_splide.EVENT_SCROLL, "onScroll"],
  [import_splide.EVENT_SCROLLED, "onScrolled"],
  [import_splide.EVENT_DESTROY, "onDestroy"],
  [import_splide.EVENT_ARROWS_MOUNTED, "onArrowsMounted"],
  [import_splide.EVENT_ARROWS_UPDATED, "onArrowsUpdated"],
  [import_splide.EVENT_PAGINATION_MOUNTED, "onPaginationMounted"],
  [import_splide.EVENT_PAGINATION_UPDATED, "onPaginationUpdated"],
  [import_splide.EVENT_NAVIGATION_MOUNTED, "onNavigationMounted"],
  [import_splide.EVENT_AUTOPLAY_PLAY, "onAutoplayPlay"],
  [import_splide.EVENT_AUTOPLAY_PLAYING, "onAutoplayPlaying"],
  [import_splide.EVENT_AUTOPLAY_PAUSE, "onAutoplayPause"],
  [import_splide.EVENT_LAZYLOAD_LOADED, "onLazyLoadLoaded"]
];

// src/js/utils/classNames/classNames.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/js/utils/isObject/isObject.ts
function isObject(subject) {
  return subject !== null && typeof subject === "object";
}

// src/js/utils/isEqualDeep/isEqualDeep.ts
function isEqualDeep(subject1, subject2) {
  if (Array.isArray(subject1) && Array.isArray(subject2)) {
    return subject1.length === subject2.length && !subject1.some((elm, index) => !isEqualDeep(elm, subject2[index]));
  }
  if (isObject(subject1) && isObject(subject2)) {
    const keys1 = Object.keys(subject1);
    const keys2 = Object.keys(subject2);
    return keys1.length === keys2.length && !keys1.some((key) => {
      return !Object.prototype.hasOwnProperty.call(subject2, key) || !isEqualDeep(subject1[key], subject2[key]);
    });
  }
  return subject1 === subject2;
}

// src/js/utils/isEqualShallow/isEqualShallow.ts
function isEqualShallow(array1, array2) {
  return array1.length === array2.length && !array1.some((elm, index) => elm !== array2[index]);
}

// src/js/utils/forOwn/forOwn.ts
function forOwn(object, iteratee) {
  if (object) {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key !== "__proto__") {
        if (iteratee(object[key], key) === false) {
          break;
        }
      }
    }
  }
  return object;
}

// src/js/utils/merge/merge.ts
function merge(object, source) {
  const merged = object;
  forOwn(source, (value, key) => {
    if (Array.isArray(value)) {
      merged[key] = value.slice();
    } else if (isObject(value)) {
      merged[key] = merge(isObject(merged[key]) ? merged[key] : {}, value);
    } else {
      merged[key] = value;
    }
  });
  return merged;
}

// src/js/components/Splide/Splide.tsx
var Splide = class extends import_react.default.Component {
  constructor() {
    super(...arguments);
    this.splideRef = import_react.default.createRef();
    this.slides = [];
  }
  componentDidMount() {
    const { options, Extensions, Transition } = this.props;
    const { current } = this.splideRef;
    if (current) {
      this.splide = new import_splide2.Splide(current, options);
      this.bind(this.splide);
      this.splide.mount(Extensions, Transition);
      this.options = merge({}, options || {});
      this.slides = this.getSlides();
    }
  }
  componentWillUnmount() {
    if (this.splide) {
      this.splide.destroy();
      this.splide = void 0;
    }
    this.options = void 0;
    this.slides.length = 0;
  }
  componentDidUpdate() {
    if (!this.splide) {
      return;
    }
    const { options } = this.props;
    if (options && !isEqualDeep(this.options, options)) {
      this.splide.options = options;
      this.options = merge({}, options);
    }
    const newSlides = this.getSlides();
    if (!isEqualShallow(this.slides, newSlides)) {
      this.splide.refresh();
      this.slides = newSlides;
    }
  }
  sync(splide) {
    var _a;
    (_a = this.splide) == null ? void 0 : _a.sync(splide);
  }
  go(control) {
    var _a;
    (_a = this.splide) == null ? void 0 : _a.go(control);
  }
  getSlides() {
    var _a;
    if (this.splide) {
      const children = (_a = this.splide.Components.Elements) == null ? void 0 : _a.list.children;
      return children && Array.prototype.slice.call(children) || [];
    }
    return [];
  }
  bind(splide) {
    EVENTS.forEach(([event, name]) => {
      const handler = this.props[name];
      if (typeof handler === "function") {
        splide.on(event, (...args) => {
          handler(splide, ...args);
        });
      }
    });
  }
  renderTrack() {
    return /* @__PURE__ */ import_react.default.createElement("div", {
      className: "splide__track"
    }, /* @__PURE__ */ import_react.default.createElement("ul", {
      className: "splide__list"
    }, this.props.children));
  }
  render() {
    const {
      id,
      className,
      hasSliderWrapper,
      hasAutoplayProgress,
      hasAutoplayControls,
      playButtonLabel = "Play",
      pauseButtonLabel = "Pause",
      renderControls
    } = this.props;
    return /* @__PURE__ */ import_react.default.createElement("div", {
      id,
      className: classNames("splide", className),
      ref: this.splideRef
    }, hasSliderWrapper ? /* @__PURE__ */ import_react.default.createElement("div", {
      className: "splide__slider"
    }, this.renderTrack()) : this.renderTrack(), hasAutoplayProgress && /* @__PURE__ */ import_react.default.createElement("div", {
      className: "splide__progress"
    }, /* @__PURE__ */ import_react.default.createElement("div", {
      className: "splide__progress__bar"
    })), hasAutoplayControls && /* @__PURE__ */ import_react.default.createElement("div", {
      className: "splide__autoplay"
    }, /* @__PURE__ */ import_react.default.createElement("button", {
      className: "splide__play"
    }, playButtonLabel), /* @__PURE__ */ import_react.default.createElement("button", {
      className: "splide__pause"
    }, pauseButtonLabel)), renderControls && renderControls());
  }
};

// src/js/components/SplideSlide/SplideSlide.tsx
var import_react2 = __toModule(require("react"));
var SplideSlide = ({ children, className, ...props }) => {
  return /* @__PURE__ */ import_react2.default.createElement("li", {
    className: classNames("splide__slide", className),
    ...props
  }, children);
};
/*!
 * Splide.js
 * Version  : 3.6.10
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
