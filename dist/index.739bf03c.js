// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1xC6H":[function(require,module,exports) {
var Refresh = require("react-refresh/runtime");
var ErrorOverlay = require("react-error-overlay");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"react-refresh/runtime":"786KC","react-error-overlay":"1dldy"}],"1dldy":[function(require,module,exports) {
var process = require("process");
!function(e, t) {
    module.exports = t();
}(window, function() {
    return function(e) {
        var t = {};
        function r(n) {
            if (t[n]) return t[n].exports;
            var o = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
        }
        return r.m = e, r.c = t, r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            });
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for(var o in e)r.d(n, o, (function(t) {
                return e[t];
            }).bind(null, o));
            return n;
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return r.d(t, "a", t), t;
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, r.p = "", r(r.s = 15);
    }([
        function(e, t, r) {
            e.exports = r(8);
        },
        function(e, t) {
            t.getArg = function(e, t, r) {
                if (t in e) return e[t];
                if (3 === arguments.length) return r;
                throw new Error('"' + t + '" is a required argument.');
            };
            var r = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/, n = /^data:.+\,.+$/;
            function o(e) {
                var t = e.match(r);
                return t ? {
                    scheme: t[1],
                    auth: t[2],
                    host: t[3],
                    port: t[4],
                    path: t[5]
                } : null;
            }
            function a(e) {
                var t = "";
                return e.scheme && (t += e.scheme + ":"), t += "//", e.auth && (t += e.auth + "@"), e.host && (t += e.host), e.port && (t += ":" + e.port), e.path && (t += e.path), t;
            }
            function i(e) {
                var r = e, n = o(e);
                if (n) {
                    if (!n.path) return e;
                    r = n.path;
                }
                for(var i, l = t.isAbsolute(r), u = r.split(/\/+/), c = 0, s = u.length - 1; s >= 0; s--)"." === (i = u[s]) ? u.splice(s, 1) : ".." === i ? c++ : c > 0 && ("" === i ? (u.splice(s + 1, c), c = 0) : (u.splice(s, 2), c--));
                return "" === (r = u.join("/")) && (r = l ? "/" : "."), n ? (n.path = r, a(n)) : r;
            }
            t.urlParse = o, t.urlGenerate = a, t.normalize = i, t.join = function(e, t) {
                "" === e && (e = "."), "" === t && (t = ".");
                var r = o(t), l = o(e);
                if (l && (e = l.path || "/"), r && !r.scheme) return l && (r.scheme = l.scheme), a(r);
                if (r || t.match(n)) return t;
                if (l && !l.host && !l.path) return l.host = t, a(l);
                var u = "/" === t.charAt(0) ? t : i(e.replace(/\/+$/, "") + "/" + t);
                return l ? (l.path = u, a(l)) : u;
            }, t.isAbsolute = function(e) {
                return "/" === e.charAt(0) || !!e.match(r);
            }, t.relative = function(e, t) {
                "" === e && (e = "."), e = e.replace(/\/$/, "");
                for(var r = 0; 0 !== t.indexOf(e + "/");){
                    var n = e.lastIndexOf("/");
                    if (n < 0) return t;
                    if ((e = e.slice(0, n)).match(/^([^\/]+:\/)?\/*$/)) return t;
                    ++r;
                }
                return Array(r + 1).join("../") + t.substr(e.length + 1);
            };
            var l = !("__proto__" in Object.create(null));
            function u(e) {
                return e;
            }
            function c(e) {
                if (!e) return !1;
                var t = e.length;
                if (t < 9) return !1;
                if (95 !== e.charCodeAt(t - 1) || 95 !== e.charCodeAt(t - 2) || 111 !== e.charCodeAt(t - 3) || 116 !== e.charCodeAt(t - 4) || 111 !== e.charCodeAt(t - 5) || 114 !== e.charCodeAt(t - 6) || 112 !== e.charCodeAt(t - 7) || 95 !== e.charCodeAt(t - 8) || 95 !== e.charCodeAt(t - 9)) return !1;
                for(var r = t - 10; r >= 0; r--)if (36 !== e.charCodeAt(r)) return !1;
                return !0;
            }
            function s(e, t) {
                return e === t ? 0 : e > t ? 1 : -1;
            }
            t.toSetString = l ? u : function(e) {
                return c(e) ? "$" + e : e;
            }, t.fromSetString = l ? u : function(e) {
                return c(e) ? e.slice(1) : e;
            }, t.compareByOriginalPositions = function(e, t, r) {
                var n = e.source - t.source;
                return 0 !== n ? n : 0 !== (n = e.originalLine - t.originalLine) ? n : 0 !== (n = e.originalColumn - t.originalColumn) || r ? n : 0 !== (n = e.generatedColumn - t.generatedColumn) ? n : 0 !== (n = e.generatedLine - t.generatedLine) ? n : e.name - t.name;
            }, t.compareByGeneratedPositionsDeflated = function(e, t, r) {
                var n = e.generatedLine - t.generatedLine;
                return 0 !== n ? n : 0 !== (n = e.generatedColumn - t.generatedColumn) || r ? n : 0 !== (n = e.source - t.source) ? n : 0 !== (n = e.originalLine - t.originalLine) ? n : 0 !== (n = e.originalColumn - t.originalColumn) ? n : e.name - t.name;
            }, t.compareByGeneratedPositionsInflated = function(e, t) {
                var r = e.generatedLine - t.generatedLine;
                return 0 !== r ? r : 0 !== (r = e.generatedColumn - t.generatedColumn) ? r : 0 !== (r = s(e.source, t.source)) ? r : 0 !== (r = e.originalLine - t.originalLine) ? r : 0 !== (r = e.originalColumn - t.originalColumn) ? r : s(e.name, t.name);
            };
        },
        function(e, t) {
            function r(e, t) {
                for(var r = 0, n = e.length - 1; n >= 0; n--){
                    var o = e[n];
                    "." === o ? e.splice(n, 1) : ".." === o ? (e.splice(n, 1), r++) : r && (e.splice(n, 1), r--);
                }
                if (t) for(; r--; r)e.unshift("..");
                return e;
            }
            function n(e, t) {
                if (e.filter) return e.filter(t);
                for(var r = [], n = 0; n < e.length; n++)t(e[n], n, e) && r.push(e[n]);
                return r;
            }
            t.resolve = function() {
                for(var e = "", t = !1, o = arguments.length - 1; o >= -1 && !t; o--){
                    var a = o >= 0 ? arguments[o] : process.cwd();
                    if ("string" != typeof a) throw new TypeError("Arguments to path.resolve must be strings");
                    a && (e = a + "/" + e, t = "/" === a.charAt(0));
                }
                return (t ? "/" : "") + (e = r(n(e.split("/"), function(e) {
                    return !!e;
                }), !t).join("/")) || ".";
            }, t.normalize = function(e) {
                var a = t.isAbsolute(e), i = "/" === o(e, -1);
                return (e = r(n(e.split("/"), function(e) {
                    return !!e;
                }), !a).join("/")) || a || (e = "."), e && i && (e += "/"), (a ? "/" : "") + e;
            }, t.isAbsolute = function(e) {
                return "/" === e.charAt(0);
            }, t.join = function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return t.normalize(n(e, function(e, t) {
                    if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
                    return e;
                }).join("/"));
            }, t.relative = function(e, r) {
                function n(e) {
                    for(var t = 0; t < e.length && "" === e[t]; t++);
                    for(var r = e.length - 1; r >= 0 && "" === e[r]; r--);
                    return t > r ? [] : e.slice(t, r - t + 1);
                }
                e = t.resolve(e).substr(1), r = t.resolve(r).substr(1);
                for(var o = n(e.split("/")), a = n(r.split("/")), i = Math.min(o.length, a.length), l = i, u = 0; u < i; u++)if (o[u] !== a[u]) {
                    l = u;
                    break;
                }
                var c = [];
                for(u = l; u < o.length; u++)c.push("..");
                return (c = c.concat(a.slice(l))).join("/");
            }, t.sep = "/", t.delimiter = ":", t.dirname = function(e) {
                if ("string" != typeof e && (e += ""), 0 === e.length) return ".";
                for(var t = e.charCodeAt(0), r = 47 === t, n = -1, o = !0, a = e.length - 1; a >= 1; --a)if (47 === (t = e.charCodeAt(a))) {
                    if (!o) {
                        n = a;
                        break;
                    }
                } else o = !1;
                return -1 === n ? r ? "/" : "." : r && 1 === n ? "/" : e.slice(0, n);
            }, t.basename = function(e, t) {
                var r = function(e) {
                    "string" != typeof e && (e += "");
                    var t, r = 0, n = -1, o = !0;
                    for(t = e.length - 1; t >= 0; --t)if (47 === e.charCodeAt(t)) {
                        if (!o) {
                            r = t + 1;
                            break;
                        }
                    } else -1 === n && (o = !1, n = t + 1);
                    return -1 === n ? "" : e.slice(r, n);
                }(e);
                return t && r.substr(-1 * t.length) === t && (r = r.substr(0, r.length - t.length)), r;
            }, t.extname = function(e) {
                "string" != typeof e && (e += "");
                for(var t = -1, r = 0, n = -1, o = !0, a = 0, i = e.length - 1; i >= 0; --i){
                    var l = e.charCodeAt(i);
                    if (47 !== l) -1 === n && (o = !1, n = i + 1), 46 === l ? -1 === t ? t = i : 1 !== a && (a = 1) : -1 !== t && (a = -1);
                    else if (!o) {
                        r = i + 1;
                        break;
                    }
                }
                return -1 === t || -1 === n || 0 === a || 1 === a && t === n - 1 && t === r + 1 ? "" : e.slice(t, n);
            };
            var o = "b" === "ab".substr(-1) ? function(e, t, r) {
                return e.substr(t, r);
            } : function(e, t, r) {
                return t < 0 && (t = e.length + t), e.substr(t, r);
            };
        },
        function(e, t, r) {
            t.SourceMapGenerator = r(4).SourceMapGenerator, t.SourceMapConsumer = r(11).SourceMapConsumer, t.SourceNode = r(14).SourceNode;
        },
        function(e, t, r) {
            var n = r(5), o = r(1), a = r(6).ArraySet, i = r(10).MappingList;
            function l(e) {
                e || (e = {}), this._file = o.getArg(e, "file", null), this._sourceRoot = o.getArg(e, "sourceRoot", null), this._skipValidation = o.getArg(e, "skipValidation", !1), this._sources = new a, this._names = new a, this._mappings = new i, this._sourcesContents = null;
            }
            l.prototype._version = 3, l.fromSourceMap = function(e) {
                var t = e.sourceRoot, r = new l({
                    file: e.file,
                    sourceRoot: t
                });
                return e.eachMapping(function(e) {
                    var n = {
                        generated: {
                            line: e.generatedLine,
                            column: e.generatedColumn
                        }
                    };
                    null != e.source && (n.source = e.source, null != t && (n.source = o.relative(t, n.source)), n.original = {
                        line: e.originalLine,
                        column: e.originalColumn
                    }, null != e.name && (n.name = e.name)), r.addMapping(n);
                }), e.sources.forEach(function(t) {
                    var n = e.sourceContentFor(t);
                    null != n && r.setSourceContent(t, n);
                }), r;
            }, l.prototype.addMapping = function(e) {
                var t = o.getArg(e, "generated"), r = o.getArg(e, "original", null), n = o.getArg(e, "source", null), a = o.getArg(e, "name", null);
                this._skipValidation || this._validateMapping(t, r, n, a), null != n && (n = String(n), this._sources.has(n) || this._sources.add(n)), null != a && (a = String(a), this._names.has(a) || this._names.add(a)), this._mappings.add({
                    generatedLine: t.line,
                    generatedColumn: t.column,
                    originalLine: null != r && r.line,
                    originalColumn: null != r && r.column,
                    source: n,
                    name: a
                });
            }, l.prototype.setSourceContent = function(e, t) {
                var r = e;
                null != this._sourceRoot && (r = o.relative(this._sourceRoot, r)), null != t ? (this._sourcesContents || (this._sourcesContents = Object.create(null)), this._sourcesContents[o.toSetString(r)] = t) : this._sourcesContents && (delete this._sourcesContents[o.toSetString(r)], 0 === Object.keys(this._sourcesContents).length && (this._sourcesContents = null));
            }, l.prototype.applySourceMap = function(e, t, r) {
                var n = t;
                if (null == t) {
                    if (null == e.file) throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
                    n = e.file;
                }
                var i = this._sourceRoot;
                null != i && (n = o.relative(i, n));
                var l = new a, u = new a;
                this._mappings.unsortedForEach(function(t) {
                    if (t.source === n && null != t.originalLine) {
                        var a = e.originalPositionFor({
                            line: t.originalLine,
                            column: t.originalColumn
                        });
                        null != a.source && (t.source = a.source, null != r && (t.source = o.join(r, t.source)), null != i && (t.source = o.relative(i, t.source)), t.originalLine = a.line, t.originalColumn = a.column, null != a.name && (t.name = a.name));
                    }
                    var c = t.source;
                    null == c || l.has(c) || l.add(c);
                    var s = t.name;
                    null == s || u.has(s) || u.add(s);
                }, this), this._sources = l, this._names = u, e.sources.forEach(function(t) {
                    var n = e.sourceContentFor(t);
                    null != n && (null != r && (t = o.join(r, t)), null != i && (t = o.relative(i, t)), this.setSourceContent(t, n));
                }, this);
            }, l.prototype._validateMapping = function(e, t, r, n) {
                if (t && "number" != typeof t.line && "number" != typeof t.column) throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
                if ((!(e && "line" in e && "column" in e && e.line > 0 && e.column >= 0) || t || r || n) && !(e && "line" in e && "column" in e && t && "line" in t && "column" in t && e.line > 0 && e.column >= 0 && t.line > 0 && t.column >= 0 && r)) throw new Error("Invalid mapping: " + JSON.stringify({
                    generated: e,
                    source: r,
                    original: t,
                    name: n
                }));
            }, l.prototype._serializeMappings = function() {
                for(var e, t, r, a, i = 0, l = 1, u = 0, c = 0, s = 0, f = 0, d = "", p = this._mappings.toArray(), h = 0, g = p.length; h < g; h++){
                    if (e = "", (t = p[h]).generatedLine !== l) for(i = 0; t.generatedLine !== l;)e += ";", l++;
                    else if (h > 0) {
                        if (!o.compareByGeneratedPositionsInflated(t, p[h - 1])) continue;
                        e += ",";
                    }
                    e += n.encode(t.generatedColumn - i), i = t.generatedColumn, null != t.source && (a = this._sources.indexOf(t.source), e += n.encode(a - f), f = a, e += n.encode(t.originalLine - 1 - c), c = t.originalLine - 1, e += n.encode(t.originalColumn - u), u = t.originalColumn, null != t.name && (r = this._names.indexOf(t.name), e += n.encode(r - s), s = r)), d += e;
                }
                return d;
            }, l.prototype._generateSourcesContent = function(e, t) {
                return e.map(function(e) {
                    if (!this._sourcesContents) return null;
                    null != t && (e = o.relative(t, e));
                    var r = o.toSetString(e);
                    return Object.prototype.hasOwnProperty.call(this._sourcesContents, r) ? this._sourcesContents[r] : null;
                }, this);
            }, l.prototype.toJSON = function() {
                var e = {
                    version: this._version,
                    sources: this._sources.toArray(),
                    names: this._names.toArray(),
                    mappings: this._serializeMappings()
                };
                return null != this._file && (e.file = this._file), null != this._sourceRoot && (e.sourceRoot = this._sourceRoot), this._sourcesContents && (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot)), e;
            }, l.prototype.toString = function() {
                return JSON.stringify(this.toJSON());
            }, t.SourceMapGenerator = l;
        },
        function(e, t, r) {
            var n = r(9);
            t.encode = function(e) {
                var t, r = "", o = function(e) {
                    return e < 0 ? 1 + (-e << 1) : 0 + (e << 1);
                }(e);
                do t = 31 & o, (o >>>= 5) > 0 && (t |= 32), r += n.encode(t);
                while (o > 0);
                return r;
            }, t.decode = function(e, t, r) {
                var o, a, i, l, u = e.length, c = 0, s = 0;
                do {
                    if (t >= u) throw new Error("Expected more digits in base 64 VLQ value.");
                    if (-1 === (a = n.decode(e.charCodeAt(t++)))) throw new Error("Invalid base64 digit: " + e.charAt(t - 1));
                    o = !!(32 & a), c += (a &= 31) << s, s += 5;
                }while (o);
                r.value = (l = (i = c) >> 1, 1 == (1 & i) ? -l : l), r.rest = t;
            };
        },
        function(e, t, r) {
            var n = r(1), o = Object.prototype.hasOwnProperty, a = "undefined" != typeof Map;
            function i() {
                this._array = [], this._set = a ? new Map : Object.create(null);
            }
            i.fromArray = function(e, t) {
                for(var r = new i, n = 0, o = e.length; n < o; n++)r.add(e[n], t);
                return r;
            }, i.prototype.size = function() {
                return a ? this._set.size : Object.getOwnPropertyNames(this._set).length;
            }, i.prototype.add = function(e, t) {
                var r = a ? e : n.toSetString(e), i = a ? this.has(e) : o.call(this._set, r), l = this._array.length;
                i && !t || this._array.push(e), i || (a ? this._set.set(e, l) : this._set[r] = l);
            }, i.prototype.has = function(e) {
                if (a) return this._set.has(e);
                var t = n.toSetString(e);
                return o.call(this._set, t);
            }, i.prototype.indexOf = function(e) {
                if (a) {
                    var t = this._set.get(e);
                    if (t >= 0) return t;
                } else {
                    var r = n.toSetString(e);
                    if (o.call(this._set, r)) return this._set[r];
                }
                throw new Error('"' + e + '" is not in the set.');
            }, i.prototype.at = function(e) {
                if (e >= 0 && e < this._array.length) return this._array[e];
                throw new Error("No element indexed by " + e);
            }, i.prototype.toArray = function() {
                return this._array.slice();
            }, t.ArraySet = i;
        },
        function(e, t, r) {
            "use strict";
            function n(e) {
                return Array.isArray(e) || (e = [
                    e
                ]), Promise.all(e.map(function(e) {
                    return e.then(function(e) {
                        return {
                            isFulfilled: !0,
                            isRejected: !1,
                            value: e
                        };
                    }).catch(function(e) {
                        return {
                            isFulfilled: !1,
                            isRejected: !0,
                            reason: e
                        };
                    });
                }));
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.settle = n, t.default = n;
        },
        function(e, t, r) {
            var n = function(e) {
                "use strict";
                var t, r = Object.prototype, n = r.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, a = o.iterator || "@@iterator", i = o.asyncIterator || "@@asyncIterator", l = o.toStringTag || "@@toStringTag";
                function u(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t];
                }
                try {
                    u({}, "");
                } catch (e1) {
                    u = function(e, t, r) {
                        return e[t] = r;
                    };
                }
                function c(e, t, r, n) {
                    var o = t && t.prototype instanceof m ? t : m, a = Object.create(o.prototype), i = new T(n || []);
                    return a._invoke = function(e, t, r) {
                        var n = f;
                        return function(o, a) {
                            if (n === p) throw new Error("Generator is already running");
                            if (n === h) {
                                if ("throw" === o) throw a;
                                return L();
                            }
                            for(r.method = o, r.arg = a;;){
                                var i = r.delegate;
                                if (i) {
                                    var l = _(i, r);
                                    if (l) {
                                        if (l === g) continue;
                                        return l;
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if (n === f) throw n = h, r.arg;
                                    r.dispatchException(r.arg);
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = p;
                                var u = s(e, t, r);
                                if ("normal" === u.type) {
                                    if (n = r.done ? h : d, u.arg === g) continue;
                                    return {
                                        value: u.arg,
                                        done: r.done
                                    };
                                }
                                "throw" === u.type && (n = h, r.method = "throw", r.arg = u.arg);
                            }
                        };
                    }(e, r, i), a;
                }
                function s(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        };
                    } catch (e1) {
                        return {
                            type: "throw",
                            arg: e1
                        };
                    }
                }
                e.wrap = c;
                var f = "suspendedStart", d = "suspendedYield", p = "executing", h = "completed", g = {};
                function m() {}
                function v() {}
                function y() {}
                var b = {};
                b[a] = function() {
                    return this;
                };
                var w = Object.getPrototypeOf, k = w && w(w(P([])));
                k && k !== r && n.call(k, a) && (b = k);
                var E = y.prototype = m.prototype = Object.create(b);
                function S(e) {
                    [
                        "next",
                        "throw",
                        "return"
                    ].forEach(function(t) {
                        u(e, t, function(e) {
                            return this._invoke(t, e);
                        });
                    });
                }
                function x(e, t) {
                    var r;
                    this._invoke = function(o, a) {
                        function i() {
                            return new t(function(r, i) {
                                !function r(o, a, i, l) {
                                    var u = s(e[o], e, a);
                                    if ("throw" !== u.type) {
                                        var c = u.arg, f = c.value;
                                        return f && "object" == typeof f && n.call(f, "__await") ? t.resolve(f.__await).then(function(e) {
                                            r("next", e, i, l);
                                        }, function(e) {
                                            r("throw", e, i, l);
                                        }) : t.resolve(f).then(function(e) {
                                            c.value = e, i(c);
                                        }, function(e) {
                                            return r("throw", e, i, l);
                                        });
                                    }
                                    l(u.arg);
                                }(o, a, r, i);
                            });
                        }
                        return r = r ? r.then(i, i) : i();
                    };
                }
                function _(e, r) {
                    var n = e.iterator[r.method];
                    if (n === t) {
                        if (r.delegate = null, "throw" === r.method) {
                            if (e.iterator.return && (r.method = "return", r.arg = t, _(e, r), "throw" === r.method)) return g;
                            r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method");
                        }
                        return g;
                    }
                    var o = s(n, e.iterator, r.arg);
                    if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, g;
                    var a = o.arg;
                    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, g) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, g);
                }
                function C(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
                }
                function O(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t;
                }
                function T(e) {
                    this.tryEntries = [
                        {
                            tryLoc: "root"
                        }
                    ], e.forEach(C, this), this.reset(!0);
                }
                function P(e) {
                    if (e) {
                        var r = e[a];
                        if (r) return r.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1, i = function r() {
                                for(; ++o < e.length;)if (n.call(e, o)) return r.value = e[o], r.done = !1, r;
                                return r.value = t, r.done = !0, r;
                            };
                            return i.next = i;
                        }
                    }
                    return {
                        next: L
                    };
                }
                function L() {
                    return {
                        value: t,
                        done: !0
                    };
                }
                return v.prototype = E.constructor = y, y.constructor = v, v.displayName = u(y, l, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name));
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, u(e, l, "GeneratorFunction")), e.prototype = Object.create(E), e;
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    };
                }, S(x.prototype), x.prototype[i] = function() {
                    return this;
                }, e.AsyncIterator = x, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new x(c(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? i : i.next().then(function(e) {
                        return e.done ? e.value : i.next();
                    });
                }, S(E), u(E, l, "Generator"), E[a] = function() {
                    return this;
                }, E.toString = function() {
                    return "[object Generator]";
                }, e.keys = function(e) {
                    var t = [];
                    for(var r in e)t.push(r);
                    return t.reverse(), function r() {
                        for(; t.length;){
                            var n = t.pop();
                            if (n in e) return r.value = n, r.done = !1, r;
                        }
                        return r.done = !0, r;
                    };
                }, e.values = P, T.prototype = {
                    constructor: T,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(O), !e) for(var r in this)"t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval;
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var r = this;
                        function o(n, o) {
                            return l.type = "throw", l.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
                        }
                        for(var a = this.tryEntries.length - 1; a >= 0; --a){
                            var i = this.tryEntries[a], l = i.completion;
                            if ("root" === i.tryLoc) return o("end");
                            if (i.tryLoc <= this.prev) {
                                var u = n.call(i, "catchLoc"), c = n.call(i, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                                } else if (u) {
                                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for(var r = this.tryEntries.length - 1; r >= 0; --r){
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break;
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, g) : this.complete(i);
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), g;
                    },
                    finish: function(e) {
                        for(var t = this.tryEntries.length - 1; t >= 0; --t){
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), O(r), g;
                        }
                    },
                    catch: function(e) {
                        for(var t = this.tryEntries.length - 1; t >= 0; --t){
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    O(r);
                                }
                                return o;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function(e, r, n) {
                        return this.delegate = {
                            iterator: P(e),
                            resultName: r,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = t), g;
                    }
                }, e;
            }(e.exports);
            try {
                regeneratorRuntime = n;
            } catch (e1) {
                Function("r", "regeneratorRuntime = r")(n);
            }
        },
        function(e, t) {
            var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
            t.encode = function(e) {
                if (0 <= e && e < r.length) return r[e];
                throw new TypeError("Must be between 0 and 63: " + e);
            }, t.decode = function(e) {
                return 65 <= e && e <= 90 ? e - 65 : 97 <= e && e <= 122 ? e - 97 + 26 : 48 <= e && e <= 57 ? e - 48 + 52 : 43 == e ? 62 : 47 == e ? 63 : -1;
            };
        },
        function(e, t, r) {
            var n = r(1);
            function o() {
                this._array = [], this._sorted = !0, this._last = {
                    generatedLine: -1,
                    generatedColumn: 0
                };
            }
            o.prototype.unsortedForEach = function(e, t) {
                this._array.forEach(e, t);
            }, o.prototype.add = function(e) {
                var t, r, o, a, i, l;
                t = this._last, r = e, o = t.generatedLine, a = r.generatedLine, i = t.generatedColumn, l = r.generatedColumn, a > o || a == o && l >= i || n.compareByGeneratedPositionsInflated(t, r) <= 0 ? (this._last = e, this._array.push(e)) : (this._sorted = !1, this._array.push(e));
            }, o.prototype.toArray = function() {
                return this._sorted || (this._array.sort(n.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
            }, t.MappingList = o;
        },
        function(e, t, r) {
            var n = r(1), o = r(12), a = r(6).ArraySet, i = r(5), l = r(13).quickSort;
            function u(e) {
                var t = e;
                return "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, ""))), null != t.sections ? new f(t) : new c(t);
            }
            function c(e) {
                var t = e;
                "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, "")));
                var r = n.getArg(t, "version"), o = n.getArg(t, "sources"), i = n.getArg(t, "names", []), l = n.getArg(t, "sourceRoot", null), u = n.getArg(t, "sourcesContent", null), c = n.getArg(t, "mappings"), s = n.getArg(t, "file", null);
                if (r != this._version) throw new Error("Unsupported version: " + r);
                o = o.map(String).map(n.normalize).map(function(e) {
                    return l && n.isAbsolute(l) && n.isAbsolute(e) ? n.relative(l, e) : e;
                }), this._names = a.fromArray(i.map(String), !0), this._sources = a.fromArray(o, !0), this.sourceRoot = l, this.sourcesContent = u, this._mappings = c, this.file = s;
            }
            function s() {
                this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
            }
            function f(e) {
                var t = e;
                "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, "")));
                var r = n.getArg(t, "version"), o = n.getArg(t, "sections");
                if (r != this._version) throw new Error("Unsupported version: " + r);
                this._sources = new a, this._names = new a;
                var i = {
                    line: -1,
                    column: 0
                };
                this._sections = o.map(function(e) {
                    if (e.url) throw new Error("Support for url field in sections not implemented.");
                    var t = n.getArg(e, "offset"), r = n.getArg(t, "line"), o = n.getArg(t, "column");
                    if (r < i.line || r === i.line && o < i.column) throw new Error("Section offsets must be ordered and non-overlapping.");
                    return i = t, {
                        generatedOffset: {
                            generatedLine: r + 1,
                            generatedColumn: o + 1
                        },
                        consumer: new u(n.getArg(e, "map"))
                    };
                });
            }
            u.fromSourceMap = function(e) {
                return c.fromSourceMap(e);
            }, u.prototype._version = 3, u.prototype.__generatedMappings = null, Object.defineProperty(u.prototype, "_generatedMappings", {
                get: function() {
                    return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
                }
            }), u.prototype.__originalMappings = null, Object.defineProperty(u.prototype, "_originalMappings", {
                get: function() {
                    return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
                }
            }), u.prototype._charIsMappingSeparator = function(e, t) {
                var r = e.charAt(t);
                return ";" === r || "," === r;
            }, u.prototype._parseMappings = function(e, t) {
                throw new Error("Subclasses must implement _parseMappings");
            }, u.GENERATED_ORDER = 1, u.ORIGINAL_ORDER = 2, u.GREATEST_LOWER_BOUND = 1, u.LEAST_UPPER_BOUND = 2, u.prototype.eachMapping = function(e, t, r) {
                var o, a = t || null;
                switch(r || u.GENERATED_ORDER){
                    case u.GENERATED_ORDER:
                        o = this._generatedMappings;
                        break;
                    case u.ORIGINAL_ORDER:
                        o = this._originalMappings;
                        break;
                    default:
                        throw new Error("Unknown order of iteration.");
                }
                var i = this.sourceRoot;
                o.map(function(e) {
                    var t = null === e.source ? null : this._sources.at(e.source);
                    return null != t && null != i && (t = n.join(i, t)), {
                        source: t,
                        generatedLine: e.generatedLine,
                        generatedColumn: e.generatedColumn,
                        originalLine: e.originalLine,
                        originalColumn: e.originalColumn,
                        name: null === e.name ? null : this._names.at(e.name)
                    };
                }, this).forEach(e, a);
            }, u.prototype.allGeneratedPositionsFor = function(e) {
                var t = n.getArg(e, "line"), r = {
                    source: n.getArg(e, "source"),
                    originalLine: t,
                    originalColumn: n.getArg(e, "column", 0)
                };
                if (null != this.sourceRoot && (r.source = n.relative(this.sourceRoot, r.source)), !this._sources.has(r.source)) return [];
                r.source = this._sources.indexOf(r.source);
                var a = [], i = this._findMapping(r, this._originalMappings, "originalLine", "originalColumn", n.compareByOriginalPositions, o.LEAST_UPPER_BOUND);
                if (i >= 0) {
                    var l = this._originalMappings[i];
                    if (void 0 === e.column) for(var u = l.originalLine; l && l.originalLine === u;)a.push({
                        line: n.getArg(l, "generatedLine", null),
                        column: n.getArg(l, "generatedColumn", null),
                        lastColumn: n.getArg(l, "lastGeneratedColumn", null)
                    }), l = this._originalMappings[++i];
                    else for(var c = l.originalColumn; l && l.originalLine === t && l.originalColumn == c;)a.push({
                        line: n.getArg(l, "generatedLine", null),
                        column: n.getArg(l, "generatedColumn", null),
                        lastColumn: n.getArg(l, "lastGeneratedColumn", null)
                    }), l = this._originalMappings[++i];
                }
                return a;
            }, t.SourceMapConsumer = u, c.prototype = Object.create(u.prototype), c.prototype.consumer = u, c.fromSourceMap = function(e) {
                var t = Object.create(c.prototype), r = t._names = a.fromArray(e._names.toArray(), !0), o = t._sources = a.fromArray(e._sources.toArray(), !0);
                t.sourceRoot = e._sourceRoot, t.sourcesContent = e._generateSourcesContent(t._sources.toArray(), t.sourceRoot), t.file = e._file;
                for(var i = e._mappings.toArray().slice(), u = t.__generatedMappings = [], f = t.__originalMappings = [], d = 0, p = i.length; d < p; d++){
                    var h = i[d], g = new s;
                    g.generatedLine = h.generatedLine, g.generatedColumn = h.generatedColumn, h.source && (g.source = o.indexOf(h.source), g.originalLine = h.originalLine, g.originalColumn = h.originalColumn, h.name && (g.name = r.indexOf(h.name)), f.push(g)), u.push(g);
                }
                return l(t.__originalMappings, n.compareByOriginalPositions), t;
            }, c.prototype._version = 3, Object.defineProperty(c.prototype, "sources", {
                get: function() {
                    return this._sources.toArray().map(function(e) {
                        return null != this.sourceRoot ? n.join(this.sourceRoot, e) : e;
                    }, this);
                }
            }), c.prototype._parseMappings = function(e, t) {
                for(var r, o, a, u, c, f = 1, d = 0, p = 0, h = 0, g = 0, m = 0, v = e.length, y = 0, b = {}, w = {}, k = [], E = []; y < v;)if (";" === e.charAt(y)) f++, y++, d = 0;
                else if ("," === e.charAt(y)) y++;
                else {
                    for((r = new s).generatedLine = f, u = y; u < v && !this._charIsMappingSeparator(e, u); u++);
                    if (a = b[o = e.slice(y, u)]) y += o.length;
                    else {
                        for(a = []; y < u;)i.decode(e, y, w), c = w.value, y = w.rest, a.push(c);
                        if (2 === a.length) throw new Error("Found a source, but no line and column");
                        if (3 === a.length) throw new Error("Found a source and line, but no column");
                        b[o] = a;
                    }
                    r.generatedColumn = d + a[0], d = r.generatedColumn, a.length > 1 && (r.source = g + a[1], g += a[1], r.originalLine = p + a[2], p = r.originalLine, r.originalLine += 1, r.originalColumn = h + a[3], h = r.originalColumn, a.length > 4 && (r.name = m + a[4], m += a[4])), E.push(r), "number" == typeof r.originalLine && k.push(r);
                }
                l(E, n.compareByGeneratedPositionsDeflated), this.__generatedMappings = E, l(k, n.compareByOriginalPositions), this.__originalMappings = k;
            }, c.prototype._findMapping = function(e, t, r, n, a, i) {
                if (e[r] <= 0) throw new TypeError("Line must be greater than or equal to 1, got " + e[r]);
                if (e[n] < 0) throw new TypeError("Column must be greater than or equal to 0, got " + e[n]);
                return o.search(e, t, a, i);
            }, c.prototype.computeColumnSpans = function() {
                for(var e = 0; e < this._generatedMappings.length; ++e){
                    var t = this._generatedMappings[e];
                    if (e + 1 < this._generatedMappings.length) {
                        var r = this._generatedMappings[e + 1];
                        if (t.generatedLine === r.generatedLine) {
                            t.lastGeneratedColumn = r.generatedColumn - 1;
                            continue;
                        }
                    }
                    t.lastGeneratedColumn = 1 / 0;
                }
            }, c.prototype.originalPositionFor = function(e) {
                var t = {
                    generatedLine: n.getArg(e, "line"),
                    generatedColumn: n.getArg(e, "column")
                }, r = this._findMapping(t, this._generatedMappings, "generatedLine", "generatedColumn", n.compareByGeneratedPositionsDeflated, n.getArg(e, "bias", u.GREATEST_LOWER_BOUND));
                if (r >= 0) {
                    var o = this._generatedMappings[r];
                    if (o.generatedLine === t.generatedLine) {
                        var a = n.getArg(o, "source", null);
                        null !== a && (a = this._sources.at(a), null != this.sourceRoot && (a = n.join(this.sourceRoot, a)));
                        var i = n.getArg(o, "name", null);
                        return null !== i && (i = this._names.at(i)), {
                            source: a,
                            line: n.getArg(o, "originalLine", null),
                            column: n.getArg(o, "originalColumn", null),
                            name: i
                        };
                    }
                }
                return {
                    source: null,
                    line: null,
                    column: null,
                    name: null
                };
            }, c.prototype.hasContentsOfAllSources = function() {
                return !!this.sourcesContent && this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(e) {
                    return null == e;
                });
            }, c.prototype.sourceContentFor = function(e, t) {
                if (!this.sourcesContent) return null;
                if (null != this.sourceRoot && (e = n.relative(this.sourceRoot, e)), this._sources.has(e)) return this.sourcesContent[this._sources.indexOf(e)];
                var r;
                if (null != this.sourceRoot && (r = n.urlParse(this.sourceRoot))) {
                    var o = e.replace(/^file:\/\//, "");
                    if ("file" == r.scheme && this._sources.has(o)) return this.sourcesContent[this._sources.indexOf(o)];
                    if ((!r.path || "/" == r.path) && this._sources.has("/" + e)) return this.sourcesContent[this._sources.indexOf("/" + e)];
                }
                if (t) return null;
                throw new Error('"' + e + '" is not in the SourceMap.');
            }, c.prototype.generatedPositionFor = function(e) {
                var t = n.getArg(e, "source");
                if (null != this.sourceRoot && (t = n.relative(this.sourceRoot, t)), !this._sources.has(t)) return {
                    line: null,
                    column: null,
                    lastColumn: null
                };
                var r = {
                    source: t = this._sources.indexOf(t),
                    originalLine: n.getArg(e, "line"),
                    originalColumn: n.getArg(e, "column")
                }, o = this._findMapping(r, this._originalMappings, "originalLine", "originalColumn", n.compareByOriginalPositions, n.getArg(e, "bias", u.GREATEST_LOWER_BOUND));
                if (o >= 0) {
                    var a = this._originalMappings[o];
                    if (a.source === r.source) return {
                        line: n.getArg(a, "generatedLine", null),
                        column: n.getArg(a, "generatedColumn", null),
                        lastColumn: n.getArg(a, "lastGeneratedColumn", null)
                    };
                }
                return {
                    line: null,
                    column: null,
                    lastColumn: null
                };
            }, t.BasicSourceMapConsumer = c, f.prototype = Object.create(u.prototype), f.prototype.constructor = u, f.prototype._version = 3, Object.defineProperty(f.prototype, "sources", {
                get: function() {
                    for(var e = [], t = 0; t < this._sections.length; t++)for(var r = 0; r < this._sections[t].consumer.sources.length; r++)e.push(this._sections[t].consumer.sources[r]);
                    return e;
                }
            }), f.prototype.originalPositionFor = function(e) {
                var t = {
                    generatedLine: n.getArg(e, "line"),
                    generatedColumn: n.getArg(e, "column")
                }, r = o.search(t, this._sections, function(e, t) {
                    var r = e.generatedLine - t.generatedOffset.generatedLine;
                    return r || e.generatedColumn - t.generatedOffset.generatedColumn;
                }), a = this._sections[r];
                return a ? a.consumer.originalPositionFor({
                    line: t.generatedLine - (a.generatedOffset.generatedLine - 1),
                    column: t.generatedColumn - (a.generatedOffset.generatedLine === t.generatedLine ? a.generatedOffset.generatedColumn - 1 : 0),
                    bias: e.bias
                }) : {
                    source: null,
                    line: null,
                    column: null,
                    name: null
                };
            }, f.prototype.hasContentsOfAllSources = function() {
                return this._sections.every(function(e) {
                    return e.consumer.hasContentsOfAllSources();
                });
            }, f.prototype.sourceContentFor = function(e, t) {
                for(var r = 0; r < this._sections.length; r++){
                    var n = this._sections[r].consumer.sourceContentFor(e, !0);
                    if (n) return n;
                }
                if (t) return null;
                throw new Error('"' + e + '" is not in the SourceMap.');
            }, f.prototype.generatedPositionFor = function(e) {
                for(var t = 0; t < this._sections.length; t++){
                    var r = this._sections[t];
                    if (-1 !== r.consumer.sources.indexOf(n.getArg(e, "source"))) {
                        var o = r.consumer.generatedPositionFor(e);
                        if (o) return {
                            line: o.line + (r.generatedOffset.generatedLine - 1),
                            column: o.column + (r.generatedOffset.generatedLine === o.line ? r.generatedOffset.generatedColumn - 1 : 0)
                        };
                    }
                }
                return {
                    line: null,
                    column: null
                };
            }, f.prototype._parseMappings = function(e, t) {
                this.__generatedMappings = [], this.__originalMappings = [];
                for(var r = 0; r < this._sections.length; r++)for(var o = this._sections[r], a = o.consumer._generatedMappings, i = 0; i < a.length; i++){
                    var u = a[i], c = o.consumer._sources.at(u.source);
                    null !== o.consumer.sourceRoot && (c = n.join(o.consumer.sourceRoot, c)), this._sources.add(c), c = this._sources.indexOf(c);
                    var s = o.consumer._names.at(u.name);
                    this._names.add(s), s = this._names.indexOf(s);
                    var f = {
                        source: c,
                        generatedLine: u.generatedLine + (o.generatedOffset.generatedLine - 1),
                        generatedColumn: u.generatedColumn + (o.generatedOffset.generatedLine === u.generatedLine ? o.generatedOffset.generatedColumn - 1 : 0),
                        originalLine: u.originalLine,
                        originalColumn: u.originalColumn,
                        name: s
                    };
                    this.__generatedMappings.push(f), "number" == typeof f.originalLine && this.__originalMappings.push(f);
                }
                l(this.__generatedMappings, n.compareByGeneratedPositionsDeflated), l(this.__originalMappings, n.compareByOriginalPositions);
            }, t.IndexedSourceMapConsumer = f;
        },
        function(e, t) {
            t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2, t.search = function(e, r, n, o) {
                if (0 === r.length) return -1;
                var a = function e(r, n, o, a, i, l) {
                    var u = Math.floor((n - r) / 2) + r, c = i(o, a[u], !0);
                    return 0 === c ? u : c > 0 ? n - u > 1 ? e(u, n, o, a, i, l) : l == t.LEAST_UPPER_BOUND ? n < a.length ? n : -1 : u : u - r > 1 ? e(r, u, o, a, i, l) : l == t.LEAST_UPPER_BOUND ? u : r < 0 ? -1 : r;
                }(-1, r.length, e, r, n, o || t.GREATEST_LOWER_BOUND);
                if (a < 0) return -1;
                for(; a - 1 >= 0 && 0 === n(r[a], r[a - 1], !0);)--a;
                return a;
            };
        },
        function(e, t) {
            function r(e, t, r) {
                var n = e[t];
                e[t] = e[r], e[r] = n;
            }
            function n(e, t, o, a) {
                if (o < a) {
                    var i = o - 1;
                    r(e, (s = o, f = a, Math.round(s + Math.random() * (f - s))), a);
                    for(var l = e[a], u = o; u < a; u++)t(e[u], l) <= 0 && r(e, i += 1, u);
                    r(e, i + 1, u);
                    var c = i + 1;
                    n(e, t, o, c - 1), n(e, t, c + 1, a);
                }
                var s, f;
            }
            t.quickSort = function(e, t) {
                n(e, t, 0, e.length - 1);
            };
        },
        function(e, t, r) {
            var n = r(4).SourceMapGenerator, o = r(1), a = /(\r?\n)/, i = "$$$isSourceNode$$$";
            function l(e, t, r, n, o) {
                this.children = [], this.sourceContents = {}, this.line = null == e ? null : e, this.column = null == t ? null : t, this.source = null == r ? null : r, this.name = null == o ? null : o, this[i] = !0, null != n && this.add(n);
            }
            l.fromStringWithSourceMap = function(e, t, r) {
                var n = new l, i = e.split(a), u = 0, c = function() {
                    return e() + (e() || "");
                    function e() {
                        return u < i.length ? i[u++] : void 0;
                    }
                }, s = 1, f = 0, d = null;
                return t.eachMapping(function(e) {
                    if (null !== d) {
                        if (!(s < e.generatedLine)) {
                            var t = (r = i[u]).substr(0, e.generatedColumn - f);
                            return i[u] = r.substr(e.generatedColumn - f), f = e.generatedColumn, p(d, t), void (d = e);
                        }
                        p(d, c()), s++, f = 0;
                    }
                    for(; s < e.generatedLine;)n.add(c()), s++;
                    if (f < e.generatedColumn) {
                        var r = i[u];
                        n.add(r.substr(0, e.generatedColumn)), i[u] = r.substr(e.generatedColumn), f = e.generatedColumn;
                    }
                    d = e;
                }, this), u < i.length && (d && p(d, c()), n.add(i.splice(u).join(""))), t.sources.forEach(function(e) {
                    var a = t.sourceContentFor(e);
                    null != a && (null != r && (e = o.join(r, e)), n.setSourceContent(e, a));
                }), n;
                function p(e, t) {
                    if (null === e || void 0 === e.source) n.add(t);
                    else {
                        var a = r ? o.join(r, e.source) : e.source;
                        n.add(new l(e.originalLine, e.originalColumn, a, t, e.name));
                    }
                }
            }, l.prototype.add = function(e) {
                if (Array.isArray(e)) e.forEach(function(e) {
                    this.add(e);
                }, this);
                else {
                    if (!e[i] && "string" != typeof e) throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
                    e && this.children.push(e);
                }
                return this;
            }, l.prototype.prepend = function(e) {
                if (Array.isArray(e)) for(var t = e.length - 1; t >= 0; t--)this.prepend(e[t]);
                else {
                    if (!e[i] && "string" != typeof e) throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
                    this.children.unshift(e);
                }
                return this;
            }, l.prototype.walk = function(e) {
                for(var t, r = 0, n = this.children.length; r < n; r++)(t = this.children[r])[i] ? t.walk(e) : "" !== t && e(t, {
                    source: this.source,
                    line: this.line,
                    column: this.column,
                    name: this.name
                });
            }, l.prototype.join = function(e) {
                var t, r, n = this.children.length;
                if (n > 0) {
                    for(t = [], r = 0; r < n - 1; r++)t.push(this.children[r]), t.push(e);
                    t.push(this.children[r]), this.children = t;
                }
                return this;
            }, l.prototype.replaceRight = function(e, t) {
                var r = this.children[this.children.length - 1];
                return r[i] ? r.replaceRight(e, t) : "string" == typeof r ? this.children[this.children.length - 1] = r.replace(e, t) : this.children.push("".replace(e, t)), this;
            }, l.prototype.setSourceContent = function(e, t) {
                this.sourceContents[o.toSetString(e)] = t;
            }, l.prototype.walkSourceContents = function(e) {
                for(var t = 0, r = this.children.length; t < r; t++)this.children[t][i] && this.children[t].walkSourceContents(e);
                var n = Object.keys(this.sourceContents);
                for(t = 0, r = n.length; t < r; t++)e(o.fromSetString(n[t]), this.sourceContents[n[t]]);
            }, l.prototype.toString = function() {
                var e = "";
                return this.walk(function(t) {
                    e += t;
                }), e;
            }, l.prototype.toStringWithSourceMap = function(e) {
                var t = {
                    code: "",
                    line: 1,
                    column: 0
                }, r = new n(e), o = !1, a = null, i = null, l = null, u = null;
                return this.walk(function(e, n) {
                    t.code += e, null !== n.source && null !== n.line && null !== n.column ? (a === n.source && i === n.line && l === n.column && u === n.name || r.addMapping({
                        source: n.source,
                        original: {
                            line: n.line,
                            column: n.column
                        },
                        generated: {
                            line: t.line,
                            column: t.column
                        },
                        name: n.name
                    }), a = n.source, i = n.line, l = n.column, u = n.name, o = !0) : o && (r.addMapping({
                        generated: {
                            line: t.line,
                            column: t.column
                        }
                    }), a = null, o = !1);
                    for(var c = 0, s = e.length; c < s; c++)10 === e.charCodeAt(c) ? (t.line++, t.column = 0, c + 1 === s ? (a = null, o = !1) : o && r.addMapping({
                        source: n.source,
                        original: {
                            line: n.line,
                            column: n.column
                        },
                        generated: {
                            line: t.line,
                            column: t.column
                        },
                        name: n.name
                    })) : t.column++;
                }), this.walkSourceContents(function(e, t) {
                    r.setSourceContent(e, t);
                }), {
                    code: t.code,
                    map: r
                };
            }, t.SourceNode = l;
        },
        function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, "setEditorHandler", function() {
                return ue;
            }), r.d(t, "reportBuildError", function() {
                return ce;
            }), r.d(t, "reportRuntimeError", function() {
                return se;
            }), r.d(t, "dismissBuildError", function() {
                return fe;
            }), r.d(t, "startReportingRuntimeErrors", function() {
                return de;
            }), r.d(t, "dismissRuntimeErrors", function() {
                return he;
            }), r.d(t, "stopReportingRuntimeErrors", function() {
                return ge;
            });
            var n = null;
            function o(e, t) {
                if (t.error) {
                    var r = t.error;
                    r instanceof Error ? e(r) : e(new Error(r));
                }
            }
            function a(e, t) {
                null === n && (n = o.bind(void 0, t), e.addEventListener("error", n));
            }
            var i = null;
            function l(e, t) {
                if (null == t || null == t.reason) return e(new Error("Unknown"));
                var r = t.reason;
                return r instanceof Error ? e(r) : e(new Error(r));
            }
            function u(e, t) {
                null === i && (i = l.bind(void 0, t), e.addEventListener("unhandledrejection", i));
            }
            var c = !1, s = 10, f = 50;
            var d = [], p = function() {
                "undefined" != typeof console && (console.reactStack = function(e) {
                    return d.push(e);
                }, console.reactStackEnd = function(e) {
                    return d.pop();
                });
            }, h = function() {
                "undefined" != typeof console && (console.reactStack = void 0, console.reactStackEnd = void 0);
            }, g = function(e, t) {
                if ("undefined" != typeof console) {
                    var r = console[e];
                    "function" == typeof r && (console[e] = function() {
                        try {
                            var e = arguments[0];
                            "string" == typeof e && d.length > 0 && t(e, d[d.length - 1]);
                        } catch (e1) {
                            setTimeout(function() {
                                throw e1;
                            });
                        }
                        return r.apply(this, arguments);
                    });
                }
            };
            function m(e, t) {
                return (m = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function v(e, t, r) {
                return (v = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }() ? Reflect.construct : function(e, t, r) {
                    var n = [
                        null
                    ];
                    n.push.apply(n, t);
                    var o = new (Function.bind.apply(e, n));
                    return r && m(o, r.prototype), o;
                }).apply(null, arguments);
            }
            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for(var r = 0, n = new Array(t); r < t; r++)n[r] = e[r];
                return n;
            }
            function b(e) {
                return function(e) {
                    if (Array.isArray(e)) return y(e);
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return y(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? y(e, t) : void 0;
                    }
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function w(e, t) {
                for(var r = 0; r < t.length; r++){
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                }
            }
            function k(e, t, r) {
                return t && w(e.prototype, t), r && w(e, r), e;
            }
            function E(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            var S = function e(t, r) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                E(this, e), this.lineNumber = t, this.content = r, this.highlight = n;
            }, x = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null, l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, u = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, c = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null, s = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
                    E(this, e), t && 0 === t.indexOf("Object.") && (t = t.slice(7)), "friendlySyntaxErrorLabel" !== t && "exports.__esModule" !== t && "<anonymous>" !== t && t || (t = null), this.functionName = t, this.fileName = r, this.lineNumber = n, this.columnNumber = o, this._originalFunctionName = i, this._originalFileName = l, this._originalLineNumber = u, this._originalColumnNumber = c, this._scriptCode = a, this._originalScriptCode = s;
                }
                return k(e, [
                    {
                        key: "getFunctionName",
                        value: function() {
                            return this.functionName || "(anonymous function)";
                        }
                    },
                    {
                        key: "getSource",
                        value: function() {
                            var e = "";
                            return null != this.fileName && (e += this.fileName + ":"), null != this.lineNumber && (e += this.lineNumber + ":"), null != this.columnNumber && (e += this.columnNumber + ":"), e.slice(0, -1);
                        }
                    },
                    {
                        key: "toString",
                        value: function() {
                            var e = this.getFunctionName(), t = this.getSource();
                            return "".concat(e).concat(t ? " (".concat(t, ")") : "");
                        }
                    }
                ]), e;
            }(), _ = /\(?(.+?)(?::(\d+))?(?::(\d+))?\)?$/;
            function C(e) {
                return _.exec(e).slice(1).map(function(e) {
                    var t = Number(e);
                    return isNaN(t) ? e : t;
                });
            }
            var O = /^\s*(at|in)\s.+(:\d+)/, T = /(^|@)\S+:\d+|.+line\s+\d+\s+>\s+(eval|Function).+/;
            function P(e) {
                return e.filter(function(e) {
                    return O.test(e) || T.test(e);
                }).map(function(e) {
                    if (T.test(e)) {
                        var t = !1;
                        / > (eval|Function)/.test(e) && (e = e.replace(/ line (\d+)(?: > eval line \d+)* > (eval|Function):\d+:\d+/g, ":$1"), t = !0);
                        var r = e.split(/[@]/g), n = r.pop();
                        return v(x, [
                            r.join("@") || (t ? "eval" : null)
                        ].concat(b(C(n))));
                    }
                    -1 !== e.indexOf("(eval ") && (e = e.replace(/(\(eval at [^()]*)|(\),.*$)/g, "")), -1 !== e.indexOf("(at ") && (e = e.replace(/\(at /, "("));
                    var o = e.trim().split(/\s+/g).slice(1), a = o.pop();
                    return v(x, [
                        o.join(" ") || null
                    ].concat(b(C(a))));
                });
            }
            function L(e) {
                if (null == e) throw new Error("You cannot pass a null object.");
                if ("string" == typeof e) return P(e.split("\n"));
                if (Array.isArray(e)) return P(e);
                if ("string" == typeof e.stack) return P(e.stack.split("\n"));
                throw new Error("The error you provided does not contain a stack trace.");
            }
            var R = r(0), A = r.n(R);
            function N(e, t, r, n, o, a, i) {
                try {
                    var l = e[a](i), u = l.value;
                } catch (e1) {
                    return void r(e1);
                }
                l.done ? t(u) : Promise.resolve(u).then(n, o);
            }
            function j(e) {
                return function() {
                    var t = this, r = arguments;
                    return new Promise(function(n, o) {
                        var a = e.apply(t, r);
                        function i(e) {
                            N(a, n, o, i, l, "next", e);
                        }
                        function l(e) {
                            N(a, n, o, i, l, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            var M = r(3), I = function() {
                function e(t) {
                    E(this, e), this.__source_map = t;
                }
                return k(e, [
                    {
                        key: "getOriginalPosition",
                        value: function(e, t) {
                            var r = this.__source_map.originalPositionFor({
                                line: e,
                                column: t
                            });
                            return {
                                line: r.line,
                                column: r.column,
                                source: r.source
                            };
                        }
                    },
                    {
                        key: "getGeneratedPosition",
                        value: function(e, t, r) {
                            var n = this.__source_map.generatedPositionFor({
                                source: e,
                                line: t,
                                column: r
                            });
                            return {
                                line: n.line,
                                column: n.column
                            };
                        }
                    },
                    {
                        key: "getSource",
                        value: function(e) {
                            return this.__source_map.sourceContentFor(e);
                        }
                    },
                    {
                        key: "getSources",
                        value: function() {
                            return this.__source_map.sources;
                        }
                    }
                ]), e;
            }();
            function D(e, t) {
                for(var r = /\/\/[#@] ?sourceMappingURL=([^\s'"]+)\s*$/gm, n = null;;){
                    var o = r.exec(t);
                    if (null == o) break;
                    n = o;
                }
                return n && n[1] ? Promise.resolve(n[1].toString()) : Promise.reject("Cannot find a source map directive for ".concat(e, "."));
            }
            function z(e, t) {
                return q.apply(this, arguments);
            }
            function q() {
                return (q = j(A.a.mark(function e(t, r) {
                    var n, o, a, i, l, u;
                    return A.a.wrap(function(e) {
                        for(;;)switch(e.prev = e.next){
                            case 0:
                                return e.next = 2, D(t, r);
                            case 2:
                                if (0 !== (n = e.sent).indexOf("data:")) {
                                    e.next = 14;
                                    break;
                                }
                                if (o = /^data:application\/json;([\w=:"-]+;)*base64,/, a = n.match(o)) {
                                    e.next = 8;
                                    break;
                                }
                                throw new Error("Sorry, non-base64 inline source-map encoding is not supported.");
                            case 8:
                                return n = n.substring(a[0].length), n = window.atob(n), n = JSON.parse(n), e.abrupt("return", new I(new M.SourceMapConsumer(n)));
                            case 14:
                                return i = t.lastIndexOf("/"), l = t.substring(0, i + 1) + n, e.next = 18, fetch(l).then(function(e) {
                                    return e.json();
                                });
                            case 18:
                                return u = e.sent, e.abrupt("return", new I(new M.SourceMapConsumer(u)));
                            case 20:
                            case "end":
                                return e.stop();
                        }
                    }, e);
                }))).apply(this, arguments);
            }
            function F(e, t, r) {
                "string" == typeof r && (r = r.split("\n"));
                for(var n = [], o = Math.max(0, e - 1 - t); o <= Math.min(r.length - 1, e - 1 + t); ++o)n.push(new S(o + 1, r[o], o === e - 1));
                return n;
            }
            var U = r(7);
            function B(e) {
                return H.apply(this, arguments);
            }
            function H() {
                return (H = j(A.a.mark(function e(t) {
                    var r, n, o, a = arguments;
                    return A.a.wrap(function(e) {
                        for(;;)switch(e.prev = e.next){
                            case 0:
                                return r = a.length > 1 && void 0 !== a[1] ? a[1] : 3, n = {}, o = [], t.forEach(function(e) {
                                    var t = e.fileName;
                                    null != t && -1 === o.indexOf(t) && o.push(t);
                                }), e.next = 6, Object(U.settle)(o.map(function() {
                                    var e = j(A.a.mark(function e(t) {
                                        var r, o, a;
                                        return A.a.wrap(function(e) {
                                            for(;;)switch(e.prev = e.next){
                                                case 0:
                                                    return r = 0 === t.indexOf("webpack-internal:") ? "/__get-internal-source?fileName=".concat(encodeURIComponent(t)) : t, e.next = 3, fetch(r).then(function(e) {
                                                        return e.text();
                                                    });
                                                case 3:
                                                    return o = e.sent, e.next = 6, z(t, o);
                                                case 6:
                                                    a = e.sent, n[t] = {
                                                        fileSource: o,
                                                        map: a
                                                    };
                                                case 8:
                                                case "end":
                                                    return e.stop();
                                            }
                                        }, e);
                                    }));
                                    return function(t) {
                                        return e.apply(this, arguments);
                                    };
                                }()));
                            case 6:
                                return e.abrupt("return", t.map(function(e) {
                                    var t = e.functionName, o = e.fileName, a = e.lineNumber, i = e.columnNumber, l = n[o] || {}, u = l.map, c = l.fileSource;
                                    if (null == u || null == a) return e;
                                    var s = u.getOriginalPosition(a, i), f = s.source, d = s.line, p = s.column, h = null == f ? [] : u.getSource(f);
                                    return new x(t, o, a, i, F(a, r, c), t, f, d, p, F(d, r, h));
                                }));
                            case 7:
                            case "end":
                                return e.stop();
                        }
                    }, e);
                }))).apply(this, arguments);
            }
            var $ = r(2), V = r.n($);
            function W(e, t) {
                var r = -1, n = -1;
                do ++r, n = t.indexOf(e, n + 1);
                while (-1 !== n);
                return r;
            }
            function G(e, t) {
                return Q.apply(this, arguments);
            }
            function Q() {
                return (Q = j(A.a.mark(function e(t, r) {
                    var n, o, a, i, l = arguments;
                    return A.a.wrap(function(e) {
                        for(;;)switch(e.prev = e.next){
                            case 0:
                                if (n = l.length > 2 && void 0 !== l[2] ? l[2] : 3, o = "object" == typeof t ? t.contents : null, a = "object" == typeof t ? t.uri : t, null != o) {
                                    e.next = 7;
                                    break;
                                }
                                return e.next = 6, fetch(a).then(function(e) {
                                    return e.text();
                                });
                            case 6:
                                o = e.sent;
                            case 7:
                                return e.next = 9, z(a, o);
                            case 9:
                                return i = e.sent, e.abrupt("return", r.map(function(e) {
                                    var t = e.functionName, r = e.lineNumber, l = e.columnNumber;
                                    if (null != e._originalLineNumber) return e;
                                    var u = e.fileName;
                                    if (u && (u = V.a.normalize(u.replace(/[\\]+/g, "/"))), null == u) return e;
                                    var c = u, s = i.getSources().map(function(e) {
                                        return e.replace(/[\\]+/g, "/");
                                    }).filter(function(e) {
                                        var t = (e = V.a.normalize(e)).lastIndexOf(c);
                                        return -1 !== t && t === e.length - c.length;
                                    }).map(function(e) {
                                        return {
                                            token: e,
                                            seps: W(V.a.sep, V.a.normalize(e)),
                                            penalties: W("node_modules", e) + W("~", e)
                                        };
                                    }).sort(function(e, t) {
                                        var r = Math.sign(e.seps - t.seps);
                                        return 0 !== r ? r : Math.sign(e.penalties - t.penalties);
                                    });
                                    if (s.length < 1 || null == r) return new x(null, null, null, null, null, t, c, r, l, null);
                                    var f = s[0].token, d = i.getGeneratedPosition(f, r, l), p = d.line, h = d.column, g = i.getSource(f);
                                    return new x(t, a, p, h || null, F(p, n, o || []), t, c, r, l, F(r, n, g));
                                }));
                            case 11:
                            case "end":
                                return e.stop();
                        }
                    }, e);
                }))).apply(this, arguments);
            }
            var Y = function(e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3, r = L(e);
                return (e.__unmap_source ? G(e.__unmap_source, r, t) : B(r, t)).then(function(e) {
                    return 0 === e.map(function(e) {
                        return e._originalFileName;
                    }).filter(function(e) {
                        return null != e && -1 === e.indexOf("node_modules");
                    }).length ? null : e.filter(function(e) {
                        var t = e.functionName;
                        return null == t || -1 === t.indexOf("__stack_frame_overlay_proxy_console__");
                    });
                });
            }, X = function(e) {
                return function(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    Y(t, r, 3).then(function(n) {
                        null != n && e({
                            error: t,
                            unhandledRejection: r,
                            contextSize: 3,
                            stackFrames: n
                        });
                    }).catch(function(e) {
                        console.log("Could not get the stack frames of error:", e);
                    });
                };
            };
            function K(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/static/js/bundle.js", r = X(e);
                return a(window, function(e) {
                    return r(e, !1);
                }), u(window, function(e) {
                    return r(e, !0);
                }), function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f;
                    if (!c) try {
                        s = Error.stackTraceLimit, Error.stackTraceLimit = e, c = !0;
                    } catch (e1) {}
                }(), p(), g("error", function(e, n) {
                    var o = function(e, t) {
                        for(var r, n, o = function(e) {
                            return e.split("\n").filter(function(e) {
                                return !e.match(/^\s*in/);
                            }).join("\n");
                        }(e), a = "", i = 0; i < t.length; ++i){
                            var l = t[i], u = l.fileName, c = l.lineNumber;
                            if (null != u && null != c && !(u === r && "number" == typeof c && "number" == typeof n && Math.abs(c - n) < 3)) {
                                r = u, n = c;
                                var s = t[i].name;
                                a += "in ".concat(s = s || "(anonymous function)", " (at ").concat(u, ":").concat(c, ")\n");
                            }
                        }
                        return {
                            message: o,
                            stack: a
                        };
                    }(e, n);
                    r({
                        message: o.message,
                        stack: o.stack,
                        __unmap_source: t
                    }, !1);
                }), function() {
                    var e;
                    !function() {
                        if (c) try {
                            Error.stackTraceLimit = s, c = !1;
                        } catch (e) {}
                    }(), e = window, null !== i && (e.removeEventListener("unhandledrejection", i), i = null), function(e) {
                        null !== n && (e.removeEventListener("error", n), n = null);
                    }(window), h();
                };
            }
            var J = {
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                border: "none",
                "z-index": 2147483647
            };
            var Z = '/*! For license information please see iframe-bundle.js.LICENSE.txt */\n!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=208)}([function(e,t,r){"use strict";e.exports=r(183)},function(e,t,r){var n=r(8),o=r(35).f,a=r(18),i=r(21),l=r(38),u=r(60),c=r(64);e.exports=function(e,t){var r,s,f,d,p,h=e.target,g=e.global,v=e.stat;if(r=g?n:v?n[h]||l(h,{}):(n[h]||{}).prototype)for(s in t){if(d=t[s],f=e.noTargetGet?(p=o(r,s))&&p.value:r[s],!c(g?s:h+(v?".":"#")+s,e.forced)&&void 0!==f){if(typeof d===typeof f)continue;u(d,f)}(e.sham||f&&f.sham)&&a(d,"sham",!0),i(r,s,d,e)}}},function(e,t,r){var n=r(13);e.exports=function(e){if(!n(e))throw TypeError(String(e)+" is not an object");return e}},function(e,t){e.exports=!1},function(e,t,r){var n=r(2),o=r(66),a=r(26),i=r(7),l=r(45),u=r(69),c=function(e,t){this.stopped=e,this.result=t};e.exports=function(e,t,r){var s,f,d,p,h,g,v,m=r&&r.that,y=!(!r||!r.AS_ENTRIES),b=!(!r||!r.IS_ITERATOR),w=!(!r||!r.INTERRUPTED),k=i(t,m,1+y+w),E=function(e){return s&&u(s),new c(!0,e)},x=function(e){return y?(n(e),w?k(e[0],e[1],E):k(e[0],e[1])):w?k(e,E):k(e)};if(b)s=e;else{if("function"!=typeof(f=l(e)))throw TypeError("Target is not iterable");if(o(f)){for(d=0,p=a(e.length);p>d;d++)if((h=x(e[d]))&&h instanceof c)return h;return new c(!1)}s=f.call(e)}for(g=s.next;!(v=g.call(s)).done;){try{h=x(v.value)}catch(e){throw u(s),e}if("object"==typeof h&&h&&h instanceof c)return h}return new c(!1)}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},function(e,t,r){var n=r(8),o=r(40),a=r(11),i=r(31),l=r(44),u=r(67),c=o("wks"),s=n.Symbol,f=u?s:s&&s.withoutSetter||i;e.exports=function(e){return a(c,e)||(l&&a(s,e)?c[e]=s[e]:c[e]=f("Symbol."+e)),c[e]}},function(e,t,r){var n=r(5);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 0:return function(){return e.call(t)};case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},function(e,t,r){(function(t){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,r(34))},function(e,t,r){var n=r(61),o=r(11),a=r(82),i=r(14).f;e.exports=function(e){var t=n.Symbol||(n.Symbol={});o(t,e)||i(t,e,{value:a.f(e)})}},function(e,t,r){var n=r(61),o=r(8),a=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?a(n[e])||a(o[e]):n[e]&&n[e][t]||o[e]&&o[e][t]}},function(e,t){var r={}.hasOwnProperty;e.exports=function(e,t){return r.call(e,t)}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},function(e,t,r){var n=r(16),o=r(57),a=r(2),i=r(29),l=Object.defineProperty;t.f=n?l:function(e,t,r){if(a(e),t=i(t,!0),a(r),o)try{return l(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},function(e,t,r){var n=r(3),o=r(48);e.exports=n?o:function(e){return Map.prototype.entries.call(e)}},function(e,t,r){var n=r(12);e.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(e,t,r){var n=r(2),o=r(5),a=r(6)("species");e.exports=function(e,t){var r,i=n(e).constructor;return void 0===i||void 0==(r=n(i)[a])?t:o(r)}},function(e,t,r){var n=r(16),o=r(14),a=r(23);e.exports=n?function(e,t,r){return o.f(e,t,a(1,r))}:function(e,t,r){return e[t]=r,e}},function(e,t,r){var n=r(3),o=r(48);e.exports=n?o:function(e){return Set.prototype.values.call(e)}},function(e,t,r){var n=r(56),o=r(37);e.exports=function(e){return n(o(e))}},function(e,t,r){var n=r(8),o=r(18),a=r(11),i=r(38),l=r(59),u=r(24),c=u.get,s=u.enforce,f=String(String).split("String");(e.exports=function(e,t,r,l){var u,c=!!l&&!!l.unsafe,d=!!l&&!!l.enumerable,p=!!l&&!!l.noTargetGet;"function"==typeof r&&("string"!=typeof t||a(r,"name")||o(r,"name",t),(u=s(r)).source||(u.source=f.join("string"==typeof t?t:""))),e!==n?(c?!p&&e[t]&&(d=!0):delete e[t],d?e[t]=r:o(e,t,r)):d?e[t]=r:i(t,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&c(this).source||l(this)}))},function(e,t,r){var n=r(14).f,o=r(11),a=r(6)("toStringTag");e.exports=function(e,t,r){e&&!o(e=r?e:e.prototype,a)&&n(e,a,{configurable:!0,value:t})}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,r){var n,o,a,i=r(92),l=r(8),u=r(13),c=r(18),s=r(11),f=r(39),d=r(30),p=r(25),h=l.WeakMap;if(i){var g=f.state||(f.state=new h),v=g.get,m=g.has,y=g.set;n=function(e,t){return t.facade=e,y.call(g,e,t),t},o=function(e){return v.call(g,e)||{}},a=function(e){return m.call(g,e)}}else{var b=d("state");p[b]=!0,n=function(e,t){return t.facade=e,c(e,b,t),t},o=function(e){return s(e,b)?e[b]:{}},a=function(e){return s(e,b)}}e.exports={set:n,get:o,has:a,enforce:function(e){return a(e)?o(e):n(e,{})},getterFor:function(e){return function(t){var r;if(!u(t)||(r=o(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return r}}}},function(e,t){e.exports={}},function(e,t,r){var n=r(42),o=Math.min;e.exports=function(e){return e>0?o(n(e),9007199254740991):0}},function(e,t){e.exports={}},function(e,t,r){var n=r(37);e.exports=function(e){return Object(n(e))}},function(e,t,r){var n=r(13);e.exports=function(e,t){if(!n(e))return e;var r,o;if(t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!n(o=r.call(e)))return o;if(!t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;throw TypeError("Can\'t convert object to primitive value")}},function(e,t,r){var n=r(40),o=r(31),a=n("keys");e.exports=function(e){return a[e]||(a[e]=o(e))}},function(e,t){var r=0,n=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++r+n).toString(36)}},function(e,t,r){var n,o=r(2),a=r(99),i=r(43),l=r(25),u=r(100),c=r(58),s=r(30),f=s("IE_PROTO"),d=function(){},p=function(e){return"<script>"+e+"</"+"script>"},h=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,t;h=n?function(e){e.write(p("")),e.close();var t=e.parentWindow.Object;return e=null,t}(n):((t=c("iframe")).style.display="none",u.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(p("document.F=Object")),e.close(),e.F);for(var r=i.length;r--;)delete h.prototype[i[r]];return h()};l[f]=!0,e.exports=Object.create||function(e,t){var r;return null!==e?(d.prototype=o(e),r=new d,d.prototype=null,r[f]=e):r=h(),void 0===t?r:a(r,t)}},function(e,t,r){"use strict";var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var o=[[{color:"0, 0, 0",class:"ansi-black"},{color:"187, 0, 0",class:"ansi-red"},{color:"0, 187, 0",class:"ansi-green"},{color:"187, 187, 0",class:"ansi-yellow"},{color:"0, 0, 187",class:"ansi-blue"},{color:"187, 0, 187",class:"ansi-magenta"},{color:"0, 187, 187",class:"ansi-cyan"},{color:"255,255,255",class:"ansi-white"}],[{color:"85, 85, 85",class:"ansi-bright-black"},{color:"255, 85, 85",class:"ansi-bright-red"},{color:"0, 255, 0",class:"ansi-bright-green"},{color:"255, 255, 85",class:"ansi-bright-yellow"},{color:"85, 85, 255",class:"ansi-bright-blue"},{color:"255, 85, 255",class:"ansi-bright-magenta"},{color:"85, 255, 255",class:"ansi-bright-cyan"},{color:"255, 255, 255",class:"ansi-bright-white"}]],a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.fg=this.bg=this.fg_truecolor=this.bg_truecolor=null,this.bright=0}return n(e,null,[{key:"escapeForHtml",value:function(t){return(new e).escapeForHtml(t)}},{key:"linkify",value:function(t){return(new e).linkify(t)}},{key:"ansiToHtml",value:function(t,r){return(new e).ansiToHtml(t,r)}},{key:"ansiToJson",value:function(t,r){return(new e).ansiToJson(t,r)}},{key:"ansiToText",value:function(t){return(new e).ansiToText(t)}}]),n(e,[{key:"setupPalette",value:function(){this.PALETTE_COLORS=[];for(var e=0;e<2;++e)for(var t=0;t<8;++t)this.PALETTE_COLORS.push(o[e][t].color);for(var r=[0,95,135,175,215,255],n=function(e,t,n){return r[e]+", "+r[t]+", "+r[n]},a=0;a<6;++a)for(var i=0;i<6;++i)for(var l=0;l<6;++l)this.PALETTE_COLORS.push(n(a,i,l));for(var u=8,c=0;c<24;++c,u+=10)this.PALETTE_COLORS.push(n(u,u,u))}},{key:"escapeForHtml",value:function(e){return e.replace(/[&<>]/gm,(function(e){return"&"==e?"&amp;":"<"==e?"&lt;":">"==e?"&gt;":""}))}},{key:"linkify",value:function(e){return e.replace(/(https?:\\/\\/[^\\s]+)/gm,(function(e){return\'<a href="\'+e+\'">\'+e+"</a>"}))}},{key:"ansiToHtml",value:function(e,t){return this.process(e,t,!0)}},{key:"ansiToJson",value:function(e,t){return(t=t||{}).json=!0,t.clearLine=!1,this.process(e,t,!0)}},{key:"ansiToText",value:function(e){return this.process(e,{},!1)}},{key:"process",value:function(e,t,r){var n=this,o=e.split(/\\033\\[/),a=o.shift();void 0!==t&&null!==t||(t={}),t.clearLine=/\\r/.test(e);var i=o.map((function(e){return n.processChunk(e,t,r)}));if(t&&t.json){var l=this.processChunkJson("");return l.content=a,l.clearLine=t.clearLine,i.unshift(l),t.remove_empty&&(i=i.filter((function(e){return!e.isEmpty()}))),i}return i.unshift(a),i.join("")}},{key:"processChunkJson",value:function(e,t,r){var n=(t="undefined"==typeof t?{}:t).use_classes="undefined"!=typeof t.use_classes&&t.use_classes,a=t.key=n?"class":"color",i={content:e,fg:null,bg:null,fg_truecolor:null,bg_truecolor:null,clearLine:t.clearLine,decoration:null,was_processed:!1,isEmpty:function(){return!i.content}},l=e.match(/^([!\\x3c-\\x3f]*)([\\d;]*)([\\x20-\\x2c]*[\\x40-\\x7e])([\\s\\S]*)/m);if(!l)return i;i.content=l[4];var u=l[2].split(";");if(""!==l[1]||"m"!==l[3])return i;if(!r)return i;var c=this;for(c.decoration=null;u.length>0;){var s=u.shift(),f=parseInt(s);if(isNaN(f)||0===f)c.fg=c.bg=c.decoration=null;else if(1===f)c.decoration="bold";else if(2===f)c.decoration="dim";else if(3==f)c.decoration="italic";else if(4==f)c.decoration="underline";else if(5==f)c.decoration="blink";else if(7===f)c.decoration="reverse";else if(8===f)c.decoration="hidden";else if(9===f)c.decoration="strikethrough";else if(39==f)c.fg=null;else if(49==f)c.bg=null;else if(f>=30&&f<38)c.fg=o[0][f%10][a];else if(f>=90&&f<98)c.fg=o[1][f%10][a];else if(f>=40&&f<48)c.bg=o[0][f%10][a];else if(f>=100&&f<108)c.bg=o[1][f%10][a];else if(38===f||48===f){var d=38===f;if(u.length>=1){var p=u.shift();if("5"===p&&u.length>=1){var h=parseInt(u.shift());if(h>=0&&h<=255)if(n){var g=h>=16?"ansi-palette-"+h:o[h>7?1:0][h%8].class;d?c.fg=g:c.bg=g}else this.PALETTE_COLORS||c.setupPalette(),d?c.fg=this.PALETTE_COLORS[h]:c.bg=this.PALETTE_COLORS[h]}else if("2"===p&&u.length>=3){var v=parseInt(u.shift()),m=parseInt(u.shift()),y=parseInt(u.shift());if(v>=0&&v<=255&&m>=0&&m<=255&&y>=0&&y<=255){var b=v+", "+m+", "+y;n?d?(c.fg="ansi-truecolor",c.fg_truecolor=b):(c.bg="ansi-truecolor",c.bg_truecolor=b):d?c.fg=b:c.bg=b}}}}}if(null===c.fg&&null===c.bg&&null===c.decoration)return i;return i.fg=c.fg,i.bg=c.bg,i.fg_truecolor=c.fg_truecolor,i.bg_truecolor=c.bg_truecolor,i.decoration=c.decoration,i.was_processed=!0,i}},{key:"processChunk",value:function(e,t,r){var n=this;t=t||{};var o=this.processChunkJson(e,t,r);if(t.json)return o;if(o.isEmpty())return"";if(!o.was_processed)return o.content;var a=t.use_classes,i=[],l=[],u={},c=function(e){var t=[],r=void 0;for(r in e)e.hasOwnProperty(r)&&t.push("data-"+r+\'="\'+n.escapeForHtml(e[r])+\'"\');return t.length>0?" "+t.join(" "):""};return o.fg&&(a?(l.push(o.fg+"-fg"),null!==o.fg_truecolor&&(u["ansi-truecolor-fg"]=o.fg_truecolor,o.fg_truecolor=null)):i.push("color:rgb("+o.fg+")")),o.bg&&(a?(l.push(o.bg+"-bg"),null!==o.bg_truecolor&&(u["ansi-truecolor-bg"]=o.bg_truecolor,o.bg_truecolor=null)):i.push("background-color:rgb("+o.bg+")")),o.decoration&&(a?l.push("ansi-"+o.decoration):"bold"===o.decoration?i.push("font-weight:bold"):"dim"===o.decoration?i.push("opacity:0.5"):"italic"===o.decoration?i.push("font-style:italic"):"reverse"===o.decoration?i.push("filter:invert(100%)"):"hidden"===o.decoration?i.push("visibility:hidden"):"strikethrough"===o.decoration?i.push("text-decoration:line-through"):i.push("text-decoration:"+o.decoration)),a?\'<span class="\'+l.join(" ")+\'"\'+c(u)+">"+o.content+"</span>":\'<span style="\'+i.join(";")+\'"\'+c(u)+">"+o.content+"</span>"}}]),e}();e.exports=a},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"===typeof window&&(r=window)}e.exports=r},function(e,t,r){var n=r(16),o=r(55),a=r(23),i=r(20),l=r(29),u=r(11),c=r(57),s=Object.getOwnPropertyDescriptor;t.f=n?s:function(e,t){if(e=i(e),t=l(t,!0),c)try{return s(e,t)}catch(e){}if(u(e,t))return a(!o.f.call(e,t),e[t])}},function(e,t){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can\'t call method on "+e);return e}},function(e,t,r){var n=r(8),o=r(18);e.exports=function(e,t){try{o(n,e,t)}catch(r){n[e]=t}return t}},function(e,t,r){var n=r(8),o=r(38),a="__core-js_shared__",i=n[a]||o(a,{});e.exports=i},function(e,t,r){var n=r(3),o=r(39);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.8.3",mode:n?"pure":"global",copyright:"\xa9 2021 Denis Pushkarev (zloirock.ru)"})},function(e,t,r){var n=r(62),o=r(43).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},function(e,t){var r=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:r)(e)}},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(e,t,r){var n=r(12);e.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},function(e,t,r){var n=r(68),o=r(27),a=r(6)("iterator");e.exports=function(e){if(void 0!=e)return e[a]||e["@@iterator"]||o[n(e)]}},function(e,t,r){var n={};n[r(6)("toStringTag")]="z",e.exports="[object z]"===String(n)},function(e,t,r){"use strict";var n=r(1),o=r(102),a=r(76),i=r(72),l=r(22),u=r(18),c=r(21),s=r(6),f=r(3),d=r(27),p=r(75),h=p.IteratorPrototype,g=p.BUGGY_SAFARI_ITERATORS,v=s("iterator"),m="keys",y="values",b="entries",w=function(){return this};e.exports=function(e,t,r,s,p,k,E){o(r,t,s);var x,S,_,T=function(e){if(e===p&&N)return N;if(!g&&e in P)return P[e];switch(e){case m:case y:case b:return function(){return new r(this,e)}}return function(){return new r(this)}},C=t+" Iterator",O=!1,P=e.prototype,R=P[v]||P["@@iterator"]||p&&P[p],N=!g&&R||T(p),L="Array"==t&&P.entries||R;if(L&&(x=a(L.call(new e)),h!==Object.prototype&&x.next&&(f||a(x)===h||(i?i(x,h):"function"!=typeof x[v]&&u(x,v,w)),l(x,C,!0,!0),f&&(d[C]=w))),p==y&&R&&R.name!==y&&(O=!0,N=function(){return R.call(this)}),f&&!E||P[v]===N||u(P,v,N),d[t]=N,p)if(S={values:T(y),keys:k?N:T(m),entries:T(b)},E)for(_ in S)(g||O||!(_ in P))&&c(P,_,S[_]);else n({target:t,proto:!0,forced:g||O},S);return S}},function(e,t,r){var n=r(2),o=r(45);e.exports=function(e){var t=o(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return n(t.call(e))}},function(e,t,r){var n=r(36);e.exports=Array.isArray||function(e){return"Array"==n(e)}},function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,l,u=i(e),c=1;c<arguments.length;c++){for(var s in r=Object(arguments[c]))o.call(r,s)&&(u[s]=r[s]);if(n){l=n(r);for(var f=0;f<l.length;f++)a.call(r,l[f])&&(u[l[f]]=r[l[f]])}}return u}},function(e,t){var r,n,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function l(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:a}catch(e){r=a}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var u,c=[],s=!1,f=-1;function d(){s&&u&&(s=!1,u.length?c=u.concat(c):f=-1,c.length&&p())}function p(){if(!s){var e=l(d);s=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new h(e,t)),1!==c.length||s||l(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,r){var n=r(191);e.exports=function(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=n(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){u=!0,i=e},f:function(){try{l||null==r.return||r.return()}finally{if(u)throw i}}}}},function(e,t,r){"use strict";!function e(){if("undefined"!==typeof{}&&"function"===typeof{}.checkDCE)try{({}).checkDCE(e)}catch(e){console.error(e)}}(),e.exports=r(184)},function(e,t,r){"use strict";var n=r(1),o=r(8),a=r(64),i=r(21),l=r(65),u=r(4),c=r(70),s=r(13),f=r(12),d=r(71),p=r(22),h=r(97);e.exports=function(e,t,r){var g=-1!==e.indexOf("Map"),v=-1!==e.indexOf("Weak"),m=g?"set":"add",y=o[e],b=y&&y.prototype,w=y,k={},E=function(e){var t=b[e];i(b,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(v&&!s(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return v&&!s(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(v&&!s(e))&&t.call(this,0===e?0:e)}:function(e,r){return t.call(this,0===e?0:e,r),this})};if(a(e,"function"!=typeof y||!(v||b.forEach&&!f((function(){(new y).entries().next()})))))w=r.getConstructor(t,e,g,m),l.REQUIRED=!0;else if(a(e,!0)){var x=new w,S=x[m](v?{}:-0,1)!=x,_=f((function(){x.has(1)})),T=d((function(e){new y(e)})),C=!v&&f((function(){for(var e=new y,t=5;t--;)e[m](t,t);return!e.has(-0)}));T||((w=t((function(t,r){c(t,w,e);var n=h(new y,t,w);return void 0!=r&&u(r,n[m],{that:n,AS_ENTRIES:g}),n}))).prototype=b,b.constructor=w),(_||C)&&(E("delete"),E("has"),g&&E("get")),(C||S)&&E(m),v&&b.clear&&delete b.clear}return k[e]=w,n({global:!0,forced:w!=y},k),p(w,e),v||r.setStrong(w,e,g),w}},function(e,t,r){"use strict";var n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,a=o&&!n.call({1:2},1);t.f=a?function(e){var t=o(this,e);return!!t&&t.enumerable}:n},function(e,t,r){var n=r(12),o=r(36),a="".split;e.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?a.call(e,""):Object(e)}:Object},function(e,t,r){var n=r(16),o=r(12),a=r(58);e.exports=!n&&!o((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},function(e,t,r){var n=r(8),o=r(13),a=n.document,i=o(a)&&o(a.createElement);e.exports=function(e){return i?a.createElement(e):{}}},function(e,t,r){var n=r(39),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(e){return o.call(e)}),e.exports=n.inspectSource},function(e,t,r){var n=r(11),o=r(93),a=r(35),i=r(14);e.exports=function(e,t){for(var r=o(t),l=i.f,u=a.f,c=0;c<r.length;c++){var s=r[c];n(e,s)||l(e,s,u(t,s))}}},function(e,t,r){var n=r(8);e.exports=n},function(e,t,r){var n=r(11),o=r(20),a=r(94).indexOf,i=r(25);e.exports=function(e,t){var r,l=o(e),u=0,c=[];for(r in l)!n(i,r)&&n(l,r)&&c.push(r);for(;t.length>u;)n(l,r=t[u++])&&(~a(c,r)||c.push(r));return c}},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,r){var n=r(12),o=/#|\\.prototype\\./,a=function(e,t){var r=l[i(e)];return r==c||r!=u&&("function"==typeof t?n(t):!!t)},i=a.normalize=function(e){return String(e).replace(o,".").toLowerCase()},l=a.data={},u=a.NATIVE="N",c=a.POLYFILL="P";e.exports=a},function(e,t,r){var n=r(25),o=r(13),a=r(11),i=r(14).f,l=r(31),u=r(96),c=l("meta"),s=0,f=Object.isExtensible||function(){return!0},d=function(e){i(e,c,{value:{objectID:"O"+ ++s,weakData:{}}})},p=e.exports={REQUIRED:!1,fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!a(e,c)){if(!f(e))return"F";if(!t)return"E";d(e)}return e[c].objectID},getWeakData:function(e,t){if(!a(e,c)){if(!f(e))return!0;if(!t)return!1;d(e)}return e[c].weakData},onFreeze:function(e){return u&&p.REQUIRED&&f(e)&&!a(e,c)&&d(e),e}};n[c]=!0},function(e,t,r){var n=r(6),o=r(27),a=n("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||i[a]===e)}},function(e,t,r){var n=r(44);e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(e,t,r){var n=r(46),o=r(36),a=r(6)("toStringTag"),i="Arguments"==o(function(){return arguments}());e.exports=n?o:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),a))?r:i?o(t):"Object"==(n=o(t))&&"function"==typeof t.callee?"Arguments":n}},function(e,t,r){var n=r(2);e.exports=function(e){var t=e.return;if(void 0!==t)return n(t.call(e)).value}},function(e,t){e.exports=function(e,t,r){if(!(e instanceof t))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation");return e}},function(e,t,r){var n=r(6)("iterator"),o=!1;try{var a=0,i={next:function(){return{done:!!a++}},return:function(){o=!0}};i[n]=function(){return this},Array.from(i,(function(){throw 2}))}catch(e){}e.exports=function(e,t){if(!t&&!o)return!1;var r=!1;try{var a={};a[n]=function(){return{next:function(){return{done:r=!0}}}},e(a)}catch(e){}return r}},function(e,t,r){var n=r(2),o=r(98);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),t=r instanceof Array}catch(e){}return function(r,a){return n(r),o(a),t?e.call(r,a):r.__proto__=a,r}}():void 0)},function(e,t,r){"use strict";var n=r(14).f,o=r(32),a=r(101),i=r(7),l=r(70),u=r(4),c=r(47),s=r(104),f=r(16),d=r(65).fastKey,p=r(24),h=p.set,g=p.getterFor;e.exports={getConstructor:function(e,t,r,c){var s=e((function(e,n){l(e,s,t),h(e,{type:t,index:o(null),first:void 0,last:void 0,size:0}),f||(e.size=0),void 0!=n&&u(n,e[c],{that:e,AS_ENTRIES:r})})),p=g(t),v=function(e,t,r){var n,o,a=p(e),i=m(e,t);return i?i.value=r:(a.last=i={index:o=d(t,!0),key:t,value:r,previous:n=a.last,next:void 0,removed:!1},a.first||(a.first=i),n&&(n.next=i),f?a.size++:e.size++,"F"!==o&&(a.index[o]=i)),e},m=function(e,t){var r,n=p(e),o=d(t);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==t)return r};return a(s.prototype,{clear:function(){for(var e=p(this),t=e.index,r=e.first;r;)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete t[r.index],r=r.next;e.first=e.last=void 0,f?e.size=0:this.size=0},delete:function(e){var t=this,r=p(t),n=m(t,e);if(n){var o=n.next,a=n.previous;delete r.index[n.index],n.removed=!0,a&&(a.next=o),o&&(o.previous=a),r.first==n&&(r.first=o),r.last==n&&(r.last=a),f?r.size--:t.size--}return!!n},forEach:function(e){for(var t,r=p(this),n=i(e,arguments.length>1?arguments[1]:void 0,3);t=t?t.next:r.first;)for(n(t.value,t.key,this);t&&t.removed;)t=t.previous},has:function(e){return!!m(this,e)}}),a(s.prototype,r?{get:function(e){var t=m(this,e);return t&&t.value},set:function(e,t){return v(this,0===e?0:e,t)}}:{add:function(e){return v(this,e=0===e?0:e,e)}}),f&&n(s.prototype,"size",{get:function(){return p(this).size}}),s},setStrong:function(e,t,r){var n=t+" Iterator",o=g(t),a=g(n);c(e,t,(function(e,t){h(this,{type:n,target:e,state:o(e),kind:t,last:void 0})}),(function(){for(var e=a(this),t=e.kind,r=e.last;r&&r.removed;)r=r.previous;return e.target&&(e.last=r=r?r.next:e.state.first)?"keys"==t?{value:r.key,done:!1}:"values"==t?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),s(t)}}},function(e,t,r){var n=r(62),o=r(43);e.exports=Object.keys||function(e){return n(e,o)}},function(e,t,r){"use strict";var n,o,a,i=r(12),l=r(76),u=r(18),c=r(11),s=r(6),f=r(3),d=s("iterator"),p=!1;[].keys&&("next"in(a=[].keys())?(o=l(l(a)))!==Object.prototype&&(n=o):p=!0);var h=void 0==n||i((function(){var e={};return n[d].call(e)!==e}));h&&(n={}),f&&!h||c(n,d)||u(n,d,(function(){return this})),e.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:p}},function(e,t,r){var n=r(11),o=r(28),a=r(30),i=r(103),l=a("IE_PROTO"),u=Object.prototype;e.exports=i?Object.getPrototypeOf:function(e){return e=o(e),n(e,l)?e[l]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?u:null}},function(e,t,r){var n=r(46),o=r(21),a=r(105);n||o(Object.prototype,"toString",a,{unsafe:!0})},function(e,t,r){"use strict";var n=r(107).charAt,o=r(24),a=r(47),i="String Iterator",l=o.set,u=o.getterFor(i);a(String,"String",(function(e){l(this,{type:i,string:String(e),index:0})}),(function(){var e,t=u(this),r=t.string,o=t.index;return o>=r.length?{value:void 0,done:!0}:(e=n(r,o),t.index+=e.length,{value:e,done:!1})}))},function(e,t,r){"use strict";var n=r(2),o=r(5);e.exports=function(){for(var e,t=n(this),r=o(t.delete),a=!0,i=0,l=arguments.length;i<l;i++)e=r.call(t,arguments[i]),a=a&&e;return!!a}},function(e,t,r){"use strict";var n=r(5),o=r(7),a=r(4);e.exports=function(e){var t,r,i,l,u=arguments.length,c=u>1?arguments[1]:void 0;return n(this),(t=void 0!==c)&&n(c),void 0==e?new this:(r=[],t?(i=0,l=o(c,u>2?arguments[2]:void 0,2),a(e,(function(e){r.push(l(e,i++))}))):a(e,r.push,{that:r}),new this(r))}},function(e,t,r){"use strict";e.exports=function(){for(var e=arguments.length,t=new Array(e);e--;)t[e]=arguments[e];return new this(t)}},function(e,t,r){var n=r(6);t.f=n},function(e,t,r){var n=r(13),o=r(49),a=r(6)("species");e.exports=function(e,t){var r;return o(e)&&("function"!=typeof(r=e.constructor)||r!==Array&&!o(r.prototype)?n(r)&&null===(r=r[a])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},function(e,t,r){"use strict";var n=r(29),o=r(14),a=r(23);e.exports=function(e,t,r){var i=n(t);i in e?o.f(e,i,a(0,r)):e[i]=r}},function(e,t,r){var n,o,a=r(8),i=r(168),l=a.process,u=l&&l.versions,c=u&&u.v8;c?o=(n=c.split("."))[0]+n[1]:i&&(!(n=i.match(/Edge\\/(\\d+)/))||n[1]>=74)&&(n=i.match(/Chrome\\/(\\d+)/))&&(o=n[1]),e.exports=o&&+o},function(e,t,r){"use strict";var n=r(178);function o(){}var a=null,i={};function l(e){if("object"!==typeof this)throw new TypeError("Promises must be constructed via new");if("function"!==typeof e)throw new TypeError("Promise constructor\'s argument is not a function");this._U=0,this._V=0,this._W=null,this._X=null,e!==o&&p(e,this)}function u(e,t){for(;3===e._V;)e=e._W;if(l._Y&&l._Y(e),0===e._V)return 0===e._U?(e._U=1,void(e._X=t)):1===e._U?(e._U=2,void(e._X=[e._X,t])):void e._X.push(t);!function(e,t){n((function(){var r=1===e._V?t.onFulfilled:t.onRejected;if(null!==r){var n=function(e,t){try{return e(t)}catch(e){return a=e,i}}(r,e._W);n===i?s(t.promise,a):c(t.promise,n)}else 1===e._V?c(t.promise,e._W):s(t.promise,e._W)}))}(e,t)}function c(e,t){if(t===e)return s(e,new TypeError("A promise cannot be resolved with itself."));if(t&&("object"===typeof t||"function"===typeof t)){var r=function(e){try{return e.then}catch(e){return a=e,i}}(t);if(r===i)return s(e,a);if(r===e.then&&t instanceof l)return e._V=3,e._W=t,void f(e);if("function"===typeof r)return void p(r.bind(t),e)}e._V=1,e._W=t,f(e)}function s(e,t){e._V=2,e._W=t,l._Z&&l._Z(e,t),f(e)}function f(e){if(1===e._U&&(u(e,e._X),e._X=null),2===e._U){for(var t=0;t<e._X.length;t++)u(e,e._X[t]);e._X=null}}function d(e,t,r){this.onFulfilled="function"===typeof e?e:null,this.onRejected="function"===typeof t?t:null,this.promise=r}function p(e,t){var r=!1,n=function(e,t,r){try{e(t,r)}catch(e){return a=e,i}}(e,(function(e){r||(r=!0,c(t,e))}),(function(e){r||(r=!0,s(t,e))}));r||n!==i||(r=!0,s(t,a))}e.exports=l,l._Y=null,l._Z=null,l._0=o,l.prototype.then=function(e,t){if(this.constructor!==l)return function(e,t,r){return new e.constructor((function(n,a){var i=new l(o);i.then(n,a),u(e,new d(t,r,i))}))}(this,e,t);var r=new l(o);return u(this,new d(e,t,r)),r}},function(e,t,r){var n=r(204),o={};for(var a in n)n.hasOwnProperty(a)&&(o[n[a]]=a);var i=e.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var l in i)if(i.hasOwnProperty(l)){if(!("channels"in i[l]))throw new Error("missing channels property: "+l);if(!("labels"in i[l]))throw new Error("missing channel labels property: "+l);if(i[l].labels.length!==i[l].channels)throw new Error("channel and label counts mismatch: "+l);var u=i[l].channels,c=i[l].labels;delete i[l].channels,delete i[l].labels,Object.defineProperty(i[l],"channels",{value:u}),Object.defineProperty(i[l],"labels",{value:c})}i.rgb.hsl=function(e){var t,r,n=e[0]/255,o=e[1]/255,a=e[2]/255,i=Math.min(n,o,a),l=Math.max(n,o,a),u=l-i;return l===i?t=0:n===l?t=(o-a)/u:o===l?t=2+(a-n)/u:a===l&&(t=4+(n-o)/u),(t=Math.min(60*t,360))<0&&(t+=360),r=(i+l)/2,[t,100*(l===i?0:r<=.5?u/(l+i):u/(2-l-i)),100*r]},i.rgb.hsv=function(e){var t,r,n,o,a,i=e[0]/255,l=e[1]/255,u=e[2]/255,c=Math.max(i,l,u),s=c-Math.min(i,l,u),f=function(e){return(c-e)/6/s+.5};return 0===s?o=a=0:(a=s/c,t=f(i),r=f(l),n=f(u),i===c?o=n-r:l===c?o=1/3+t-n:u===c&&(o=2/3+r-t),o<0?o+=1:o>1&&(o-=1)),[360*o,100*a,100*c]},i.rgb.hwb=function(e){var t=e[0],r=e[1],n=e[2];return[i.rgb.hsl(e)[0],100*(1/255*Math.min(t,Math.min(r,n))),100*(n=1-1/255*Math.max(t,Math.max(r,n)))]},i.rgb.cmyk=function(e){var t,r=e[0]/255,n=e[1]/255,o=e[2]/255;return[100*((1-r-(t=Math.min(1-r,1-n,1-o)))/(1-t)||0),100*((1-n-t)/(1-t)||0),100*((1-o-t)/(1-t)||0),100*t]},i.rgb.keyword=function(e){var t=o[e];if(t)return t;var r,a,i,l=1/0;for(var u in n)if(n.hasOwnProperty(u)){var c=n[u],s=(a=e,i=c,Math.pow(a[0]-i[0],2)+Math.pow(a[1]-i[1],2)+Math.pow(a[2]-i[2],2));s<l&&(l=s,r=u)}return r},i.keyword.rgb=function(e){return n[e]},i.rgb.xyz=function(e){var t=e[0]/255,r=e[1]/255,n=e[2]/255;return[100*(.4124*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.3576*(r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92)+.1805*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)),100*(.2126*t+.7152*r+.0722*n),100*(.0193*t+.1192*r+.9505*n)]},i.rgb.lab=function(e){var t=i.rgb.xyz(e),r=t[0],n=t[1],o=t[2];return n/=100,o/=108.883,r=(r/=95.047)>.008856?Math.pow(r,1/3):7.787*r+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(r-n),200*(n-(o=o>.008856?Math.pow(o,1/3):7.787*o+16/116))]},i.hsl.rgb=function(e){var t,r,n,o,a,i=e[0]/360,l=e[1]/100,u=e[2]/100;if(0===l)return[a=255*u,a,a];t=2*u-(r=u<.5?u*(1+l):u+l-u*l),o=[0,0,0];for(var c=0;c<3;c++)(n=i+1/3*-(c-1))<0&&n++,n>1&&n--,a=6*n<1?t+6*(r-t)*n:2*n<1?r:3*n<2?t+(r-t)*(2/3-n)*6:t,o[c]=255*a;return o},i.hsl.hsv=function(e){var t=e[0],r=e[1]/100,n=e[2]/100,o=r,a=Math.max(n,.01);return r*=(n*=2)<=1?n:2-n,o*=a<=1?a:2-a,[t,100*(0===n?2*o/(a+o):2*r/(n+r)),100*((n+r)/2)]},i.hsv.rgb=function(e){var t=e[0]/60,r=e[1]/100,n=e[2]/100,o=Math.floor(t)%6,a=t-Math.floor(t),i=255*n*(1-r),l=255*n*(1-r*a),u=255*n*(1-r*(1-a));switch(n*=255,o){case 0:return[n,u,i];case 1:return[l,n,i];case 2:return[i,n,u];case 3:return[i,l,n];case 4:return[u,i,n];case 5:return[n,i,l]}},i.hsv.hsl=function(e){var t,r,n,o=e[0],a=e[1]/100,i=e[2]/100,l=Math.max(i,.01);return n=(2-a)*i,r=a*l,[o,100*(r=(r/=(t=(2-a)*l)<=1?t:2-t)||0),100*(n/=2)]},i.hwb.rgb=function(e){var t,r,n,o,a,i,l,u=e[0]/360,c=e[1]/100,s=e[2]/100,f=c+s;switch(f>1&&(c/=f,s/=f),n=6*u-(t=Math.floor(6*u)),0!==(1&t)&&(n=1-n),o=c+n*((r=1-s)-c),t){default:case 6:case 0:a=r,i=o,l=c;break;case 1:a=o,i=r,l=c;break;case 2:a=c,i=r,l=o;break;case 3:a=c,i=o,l=r;break;case 4:a=o,i=c,l=r;break;case 5:a=r,i=c,l=o}return[255*a,255*i,255*l]},i.cmyk.rgb=function(e){var t=e[0]/100,r=e[1]/100,n=e[2]/100,o=e[3]/100;return[255*(1-Math.min(1,t*(1-o)+o)),255*(1-Math.min(1,r*(1-o)+o)),255*(1-Math.min(1,n*(1-o)+o))]},i.xyz.rgb=function(e){var t,r,n,o=e[0]/100,a=e[1]/100,i=e[2]/100;return r=-.9689*o+1.8758*a+.0415*i,n=.0557*o+-.204*a+1.057*i,t=(t=3.2406*o+-1.5372*a+-.4986*i)>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,r=r>.0031308?1.055*Math.pow(r,1/2.4)-.055:12.92*r,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,[255*(t=Math.min(Math.max(0,t),1)),255*(r=Math.min(Math.max(0,r),1)),255*(n=Math.min(Math.max(0,n),1))]},i.xyz.lab=function(e){var t=e[0],r=e[1],n=e[2];return r/=100,n/=108.883,t=(t/=95.047)>.008856?Math.pow(t,1/3):7.787*t+16/116,[116*(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116)-16,500*(t-r),200*(r-(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116))]},i.lab.xyz=function(e){var t,r,n,o=e[0];t=e[1]/500+(r=(o+16)/116),n=r-e[2]/200;var a=Math.pow(r,3),i=Math.pow(t,3),l=Math.pow(n,3);return r=a>.008856?a:(r-16/116)/7.787,t=i>.008856?i:(t-16/116)/7.787,n=l>.008856?l:(n-16/116)/7.787,[t*=95.047,r*=100,n*=108.883]},i.lab.lch=function(e){var t,r=e[0],n=e[1],o=e[2];return(t=360*Math.atan2(o,n)/2/Math.PI)<0&&(t+=360),[r,Math.sqrt(n*n+o*o),t]},i.lch.lab=function(e){var t,r=e[0],n=e[1];return t=e[2]/360*2*Math.PI,[r,n*Math.cos(t),n*Math.sin(t)]},i.rgb.ansi16=function(e){var t=e[0],r=e[1],n=e[2],o=1 in arguments?arguments[1]:i.rgb.hsv(e)[2];if(0===(o=Math.round(o/50)))return 30;var a=30+(Math.round(n/255)<<2|Math.round(r/255)<<1|Math.round(t/255));return 2===o&&(a+=60),a},i.hsv.ansi16=function(e){return i.rgb.ansi16(i.hsv.rgb(e),e[2])},i.rgb.ansi256=function(e){var t=e[0],r=e[1],n=e[2];return t===r&&r===n?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(r/255*5)+Math.round(n/255*5)},i.ansi16.rgb=function(e){var t=e%10;if(0===t||7===t)return e>50&&(t+=3.5),[t=t/10.5*255,t,t];var r=.5*(1+~~(e>50));return[(1&t)*r*255,(t>>1&1)*r*255,(t>>2&1)*r*255]},i.ansi256.rgb=function(e){if(e>=232){var t=10*(e-232)+8;return[t,t,t]}var r;return e-=16,[Math.floor(e/36)/5*255,Math.floor((r=e%36)/6)/5*255,r%6/5*255]},i.rgb.hex=function(e){var t=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(t.length)+t},i.hex.rgb=function(e){var t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];var r=t[0];3===t[0].length&&(r=r.split("").map((function(e){return e+e})).join(""));var n=parseInt(r,16);return[n>>16&255,n>>8&255,255&n]},i.rgb.hcg=function(e){var t,r=e[0]/255,n=e[1]/255,o=e[2]/255,a=Math.max(Math.max(r,n),o),i=Math.min(Math.min(r,n),o),l=a-i;return t=l<=0?0:a===r?(n-o)/l%6:a===n?2+(o-r)/l:4+(r-n)/l+4,t/=6,[360*(t%=1),100*l,100*(l<1?i/(1-l):0)]},i.hsl.hcg=function(e){var t=e[1]/100,r=e[2]/100,n=1,o=0;return(n=r<.5?2*t*r:2*t*(1-r))<1&&(o=(r-.5*n)/(1-n)),[e[0],100*n,100*o]},i.hsv.hcg=function(e){var t=e[1]/100,r=e[2]/100,n=t*r,o=0;return n<1&&(o=(r-n)/(1-n)),[e[0],100*n,100*o]},i.hcg.rgb=function(e){var t=e[0]/360,r=e[1]/100,n=e[2]/100;if(0===r)return[255*n,255*n,255*n];var o,a=[0,0,0],i=t%1*6,l=i%1,u=1-l;switch(Math.floor(i)){case 0:a[0]=1,a[1]=l,a[2]=0;break;case 1:a[0]=u,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=l;break;case 3:a[0]=0,a[1]=u,a[2]=1;break;case 4:a[0]=l,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=u}return o=(1-r)*n,[255*(r*a[0]+o),255*(r*a[1]+o),255*(r*a[2]+o)]},i.hcg.hsv=function(e){var t=e[1]/100,r=t+e[2]/100*(1-t),n=0;return r>0&&(n=t/r),[e[0],100*n,100*r]},i.hcg.hsl=function(e){var t=e[1]/100,r=e[2]/100*(1-t)+.5*t,n=0;return r>0&&r<.5?n=t/(2*r):r>=.5&&r<1&&(n=t/(2*(1-r))),[e[0],100*n,100*r]},i.hcg.hwb=function(e){var t=e[1]/100,r=t+e[2]/100*(1-t);return[e[0],100*(r-t),100*(1-r)]},i.hwb.hcg=function(e){var t=e[1]/100,r=1-e[2]/100,n=r-t,o=0;return n<1&&(o=(r-n)/(1-n)),[e[0],100*n,100*o]},i.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},i.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},i.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},i.gray.hsl=i.gray.hsv=function(e){return[0,0,e[0]]},i.gray.hwb=function(e){return[0,100,e[0]]},i.gray.cmyk=function(e){return[0,0,0,e[0]]},i.gray.lab=function(e){return[e[0],0,0]},i.gray.hex=function(e){var t=255&Math.round(e[0]/100*255),r=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(r.length)+r},i.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(187);t.XmlEntities=n.XmlEntities;var o=r(188);t.Html4Entities=o.Html4Entities;var a=r(189);t.Html5Entities=a.Html5Entities,t.AllHtmlEntities=a.Html5Entities},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.codeFrameColumns=c,t.default=function(t,r,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(!a){a=!0;var i="Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";if(e.emitWarning)e.emitWarning(i,"DeprecationWarning");else{var l=new Error(i);l.name="DeprecationWarning",console.warn(new Error(i))}}var u={start:{column:n=Math.max(n,0),line:r}};return c(t,u,o)};var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=n?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(190));function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}var a=!1;function i(e){return{gutter:e.grey,marker:e.red.bold,message:e.red.bold}}var l=/\\r\\n|[\\n\\r\\u2028\\u2029]/;function u(e,t,r){var n=Object.assign({column:0,line:-1},e.start),o=Object.assign({},n,e.end),a=r||{},i=a.linesAbove,l=void 0===i?2:i,u=a.linesBelow,c=void 0===u?3:u,s=n.line,f=n.column,d=o.line,p=o.column,h=Math.max(s-(l+1),0),g=Math.min(t.length,d+c);-1===s&&(h=0),-1===d&&(g=t.length);var v=d-s,m={};if(v)for(var y=0;y<=v;y++){var b=y+s;if(f)if(0===y){var w=t[b-1].length;m[b]=[f,w-f+1]}else if(y===v)m[b]=[0,p];else{var k=t[b-y].length;m[b]=[0,k]}else m[b]=!0}else m[s]=f===p?!f||[f,0]:[f,p-f];return{start:h,end:g,markerLines:m}}function c(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=(r.highlightCode||r.forceColor)&&(0,n.shouldHighlight)(r),a=(0,n.getChalk)(r),c=i(a),s=function(e,t){return o?e(t):t},f=e.split(l),d=u(t,f,r),p=d.start,h=d.end,g=d.markerLines,v=t.start&&"number"===typeof t.start.column,m=String(h).length,y=o?(0,n.default)(e,r):e,b=y.split(l).slice(p,h).map((function(e,t){var n=p+1+t,o=" ".concat(n).slice(-m),a=" ".concat(o," | "),i=g[n],l=!g[n+1];if(i){var u="";if(Array.isArray(i)){var f=e.slice(0,Math.max(i[0]-1,0)).replace(/[^\\t]/g," "),d=i[1]||1;u=["\\n ",s(c.gutter,a.replace(/\\d/g," ")),f,s(c.marker,"^").repeat(d)].join(""),l&&r.message&&(u+=" "+s(c.message,r.message))}return[s(c.marker,">"),s(c.gutter,a),e,u].join("")}return" ".concat(s(c.gutter,a)).concat(e)})).join("\\n");return r.message&&!v&&(b="".concat(" ".repeat(m+1)).concat(r.message,"\\n").concat(b)),o?a.reset(b):b}}).call(this,r(51))},function(e,t,r){"use strict";r(91),r(77),r(106),r(78),r(108),r(109),r(110),r(111),r(112),r(113),r(114),r(115),r(117),r(118),r(119),r(120),r(121),r(122),r(123),r(124),r(125),r(126),r(128),r(129),r(130),r(131),r(132),r(133),r(134),r(135),r(136),r(137),r(138),r(139),r(140),r(141),r(142),r(143),r(144),r(145),r(149),r(181).polyfill()},function(e,t,r){"use strict";var n=r(54),o=r(73);e.exports=n("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),o)},function(e,t,r){var n=r(8),o=r(59),a=n.WeakMap;e.exports="function"===typeof a&&/native code/.test(o(a))},function(e,t,r){var n=r(10),o=r(41),a=r(63),i=r(2);e.exports=n("Reflect","ownKeys")||function(e){var t=o.f(i(e)),r=a.f;return r?t.concat(r(e)):t}},function(e,t,r){var n=r(20),o=r(26),a=r(95),i=function(e){return function(t,r,i){var l,u=n(t),c=o(u.length),s=a(i,c);if(e&&r!=r){for(;c>s;)if((l=u[s++])!=l)return!0}else for(;c>s;s++)if((e||s in u)&&u[s]===r)return e||s||0;return!e&&-1}};e.exports={includes:i(!0),indexOf:i(!1)}},function(e,t,r){var n=r(42),o=Math.max,a=Math.min;e.exports=function(e,t){var r=n(e);return r<0?o(r+t,0):a(r,t)}},function(e,t,r){var n=r(12);e.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},function(e,t,r){var n=r(13),o=r(72);e.exports=function(e,t,r){var a,i;return o&&"function"==typeof(a=t.constructor)&&a!==r&&n(i=a.prototype)&&i!==r.prototype&&o(e,i),e}},function(e,t,r){var n=r(13);e.exports=function(e){if(!n(e)&&null!==e)throw TypeError("Can\'t set "+String(e)+" as a prototype");return e}},function(e,t,r){var n=r(16),o=r(14),a=r(2),i=r(74);e.exports=n?Object.defineProperties:function(e,t){a(e);for(var r,n=i(t),l=n.length,u=0;l>u;)o.f(e,r=n[u++],t[r]);return e}},function(e,t,r){var n=r(10);e.exports=n("document","documentElement")},function(e,t,r){var n=r(21);e.exports=function(e,t,r){for(var o in t)n(e,o,t[o],r);return e}},function(e,t,r){"use strict";var n=r(75).IteratorPrototype,o=r(32),a=r(23),i=r(22),l=r(27),u=function(){return this};e.exports=function(e,t,r){var c=t+" Iterator";return e.prototype=o(n,{next:a(1,r)}),i(e,c,!1,!0),l[c]=u,e}},function(e,t,r){var n=r(12);e.exports=!n((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},function(e,t,r){"use strict";var n=r(10),o=r(14),a=r(6),i=r(16),l=a("species");e.exports=function(e){var t=n(e),r=o.f;i&&t&&!t[l]&&r(t,l,{configurable:!0,get:function(){return this}})}},function(e,t,r){"use strict";var n=r(46),o=r(68);e.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},function(e,t,r){"use strict";var n=r(54),o=r(73);e.exports=n("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),o)},function(e,t,r){var n=r(42),o=r(37),a=function(e){return function(t,r){var a,i,l=String(o(t)),u=n(r),c=l.length;return u<0||u>=c?e?"":void 0:(a=l.charCodeAt(u))<55296||a>56319||u+1===c||(i=l.charCodeAt(u+1))<56320||i>57343?e?l.charAt(u):a:e?l.slice(u,u+2):i-56320+(a-55296<<10)+65536}};e.exports={codeAt:a(!1),charAt:a(!0)}},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(79);n({target:"Map",proto:!0,real:!0,forced:o},{deleteAll:function(){return a.apply(this,arguments)}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(7),l=r(15),u=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{every:function(e){var t=a(this),r=l(t),n=i(e,arguments.length>1?arguments[1]:void 0,3);return!u(r,(function(e,r,o){if(!n(r,e,t))return o()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(10),i=r(2),l=r(5),u=r(7),c=r(17),s=r(15),f=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{filter:function(e){var t=i(this),r=s(t),n=u(e,arguments.length>1?arguments[1]:void 0,3),o=new(c(t,a("Map"))),d=l(o.set);return f(r,(function(e,r){n(r,e,t)&&d.call(o,e,r)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),o}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(7),l=r(15),u=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{find:function(e){var t=a(this),r=l(t),n=i(e,arguments.length>1?arguments[1]:void 0,3);return u(r,(function(e,r,o){if(n(r,e,t))return o(r)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(7),l=r(15),u=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{findKey:function(e){var t=a(this),r=l(t),n=i(e,arguments.length>1?arguments[1]:void 0,3);return u(r,(function(e,r,o){if(n(r,e,t))return o(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},function(e,t,r){r(1)({target:"Map",stat:!0},{from:r(80)})},function(e,t,r){"use strict";var n=r(1),o=r(4),a=r(5);n({target:"Map",stat:!0},{groupBy:function(e,t){var r=new this;a(t);var n=a(r.has),i=a(r.get),l=a(r.set);return o(e,(function(e){var o=t(e);n.call(r,o)?i.call(r,o).push(e):l.call(r,o,[e])})),r}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(15),l=r(116),u=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{includes:function(e){return u(i(a(this)),(function(t,r,n){if(l(r,e))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},function(e,t,r){"use strict";var n=r(1),o=r(4),a=r(5);n({target:"Map",stat:!0},{keyBy:function(e,t){var r=new this;a(t);var n=a(r.set);return o(e,(function(e){n.call(r,t(e),e)})),r}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(15),l=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{keyOf:function(e){return l(i(a(this)),(function(t,r,n){if(r===e)return n(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(10),i=r(2),l=r(5),u=r(7),c=r(17),s=r(15),f=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{mapKeys:function(e){var t=i(this),r=s(t),n=u(e,arguments.length>1?arguments[1]:void 0,3),o=new(c(t,a("Map"))),d=l(o.set);return f(r,(function(e,r){d.call(o,n(r,e,t),r)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),o}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(10),i=r(2),l=r(5),u=r(7),c=r(17),s=r(15),f=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{mapValues:function(e){var t=i(this),r=s(t),n=u(e,arguments.length>1?arguments[1]:void 0,3),o=new(c(t,a("Map"))),d=l(o.set);return f(r,(function(e,r){d.call(o,e,n(r,e,t))}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),o}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(5),l=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{merge:function(e){for(var t=a(this),r=i(t.set),n=0;n<arguments.length;)l(arguments[n++],r,{that:t,AS_ENTRIES:!0});return t}})},function(e,t,r){r(1)({target:"Map",stat:!0},{of:r(81)})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(5),l=r(15),u=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{reduce:function(e){var t=a(this),r=l(t),n=arguments.length<2,o=n?void 0:arguments[1];if(i(e),u(r,(function(r,a){n?(n=!1,o=a):o=e(o,a,r,t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n)throw TypeError("Reduce of empty map with no initial value");return o}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(7),l=r(15),u=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{some:function(e){var t=a(this),r=l(t),n=i(e,arguments.length>1?arguments[1]:void 0,3);return u(r,(function(e,r,o){if(n(r,e,t))return o()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(5);n({target:"Map",proto:!0,real:!0,forced:o},{update:function(e,t){var r=a(this),n=arguments.length;i(t);var o=r.has(e);if(!o&&n<3)throw TypeError("Updating absent value");var l=o?r.get(e):i(n>2?arguments[2]:void 0)(e,r);return r.set(e,t(l,e,r)),r}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(127);n({target:"Set",proto:!0,real:!0,forced:o},{addAll:function(){return a.apply(this,arguments)}})},function(e,t,r){"use strict";var n=r(2),o=r(5);e.exports=function(){for(var e=n(this),t=o(e.add),r=0,a=arguments.length;r<a;r++)t.call(e,arguments[r]);return e}},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(79);n({target:"Set",proto:!0,real:!0,forced:o},{deleteAll:function(){return a.apply(this,arguments)}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(10),i=r(2),l=r(5),u=r(17),c=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{difference:function(e){var t=i(this),r=new(u(t,a("Set")))(t),n=l(r.delete);return c(e,(function(e){n.call(r,e)})),r}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(7),l=r(19),u=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{every:function(e){var t=a(this),r=l(t),n=i(e,arguments.length>1?arguments[1]:void 0,3);return!u(r,(function(e,r){if(!n(e,e,t))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(10),i=r(2),l=r(5),u=r(7),c=r(17),s=r(19),f=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{filter:function(e){var t=i(this),r=s(t),n=u(e,arguments.length>1?arguments[1]:void 0,3),o=new(c(t,a("Set"))),d=l(o.add);return f(r,(function(e){n(e,e,t)&&d.call(o,e)}),{IS_ITERATOR:!0}),o}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(7),l=r(19),u=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{find:function(e){var t=a(this),r=l(t),n=i(e,arguments.length>1?arguments[1]:void 0,3);return u(r,(function(e,r){if(n(e,e,t))return r(e)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},function(e,t,r){r(1)({target:"Set",stat:!0},{from:r(80)})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(10),i=r(2),l=r(5),u=r(17),c=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{intersection:function(e){var t=i(this),r=new(u(t,a("Set"))),n=l(t.has),o=l(r.add);return c(e,(function(e){n.call(t,e)&&o.call(r,e)})),r}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(5),l=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{isDisjointFrom:function(e){var t=a(this),r=i(t.has);return!l(e,(function(e,n){if(!0===r.call(t,e))return n()}),{INTERRUPTED:!0}).stopped}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(10),i=r(2),l=r(5),u=r(48),c=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{isSubsetOf:function(e){var t=u(this),r=i(e),n=r.has;return"function"!=typeof n&&(r=new(a("Set"))(e),n=l(r.has)),!c(t,(function(e,t){if(!1===n.call(r,e))return t()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(5),l=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{isSupersetOf:function(e){var t=a(this),r=i(t.has);return!l(e,(function(e,n){if(!1===r.call(t,e))return n()}),{INTERRUPTED:!0}).stopped}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(19),l=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{join:function(e){var t=a(this),r=i(t),n=void 0===e?",":String(e),o=[];return l(r,o.push,{that:o,IS_ITERATOR:!0}),o.join(n)}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(10),i=r(2),l=r(5),u=r(7),c=r(17),s=r(19),f=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{map:function(e){var t=i(this),r=s(t),n=u(e,arguments.length>1?arguments[1]:void 0,3),o=new(c(t,a("Set"))),d=l(o.add);return f(r,(function(e){d.call(o,n(e,e,t))}),{IS_ITERATOR:!0}),o}})},function(e,t,r){r(1)({target:"Set",stat:!0},{of:r(81)})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(5),l=r(19),u=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{reduce:function(e){var t=a(this),r=l(t),n=arguments.length<2,o=n?void 0:arguments[1];if(i(e),u(r,(function(r){n?(n=!1,o=r):o=e(o,r,r,t)}),{IS_ITERATOR:!0}),n)throw TypeError("Reduce of empty set with no initial value");return o}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(7),l=r(19),u=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{some:function(e){var t=a(this),r=l(t),n=i(e,arguments.length>1?arguments[1]:void 0,3);return u(r,(function(e,r){if(n(e,e,t))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(10),i=r(2),l=r(5),u=r(17),c=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{symmetricDifference:function(e){var t=i(this),r=new(u(t,a("Set")))(t),n=l(r.delete),o=l(r.add);return c(e,(function(e){n.call(r,e)||o.call(r,e)})),r}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(10),i=r(2),l=r(5),u=r(17),c=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{union:function(e){var t=i(this),r=new(u(t,a("Set")))(t);return c(e,l(r.add),{that:r}),r}})},function(e,t,r){var n=r(8),o=r(146),a=r(147),i=r(18),l=r(6),u=l("iterator"),c=l("toStringTag"),s=a.values;for(var f in o){var d=n[f],p=d&&d.prototype;if(p){if(p[u]!==s)try{i(p,u,s)}catch(e){p[u]=s}if(p[c]||i(p,c,f),o[f])for(var h in a)if(p[h]!==a[h])try{i(p,h,a[h])}catch(e){p[h]=a[h]}}}},function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(e,t,r){"use strict";var n=r(20),o=r(148),a=r(27),i=r(24),l=r(47),u="Array Iterator",c=i.set,s=i.getterFor(u);e.exports=l(Array,"Array",(function(e,t){c(this,{type:u,target:n(e),index:0,kind:t})}),(function(){var e=s(this),t=e.target,r=e.kind,n=e.index++;return!t||n>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:t[n],done:!1}:{value:[n,t[n]],done:!1}}),"values"),a.Arguments=a.Array,o("keys"),o("values"),o("entries")},function(e,t,r){var n=r(6),o=r(32),a=r(14),i=n("unscopables"),l=Array.prototype;void 0==l[i]&&a.f(l,i,{configurable:!0,value:o(null)}),e.exports=function(e){l[i][e]=!0}},function(e,t,r){"use strict";r(150),r(153),r(154),r(155),r(156),r(157),r(158),r(159),r(160),r(161),r(162),r(163),r(164),r(165),r(166),r(169),r(172),r(173),r(77),r(78),r(174),r(175),r(176),"undefined"===typeof Promise&&(r(177).enable(),self.Promise=r(179)),"undefined"!==typeof window&&r(180),Object.assign=r(50)},function(e,t,r){"use strict";var n=r(1),o=r(8),a=r(10),i=r(3),l=r(16),u=r(44),c=r(67),s=r(12),f=r(11),d=r(49),p=r(13),h=r(2),g=r(28),v=r(20),m=r(29),y=r(23),b=r(32),w=r(74),k=r(41),E=r(151),x=r(63),S=r(35),_=r(14),T=r(55),C=r(18),O=r(21),P=r(40),R=r(30),N=r(25),L=r(31),A=r(6),I=r(82),j=r(9),M=r(22),D=r(24),q=r(152).forEach,z=R("hidden"),U="Symbol",F=A("toPrimitive"),B=D.set,V=D.getterFor(U),H=Object.prototype,W=o.Symbol,$=a("JSON","stringify"),G=S.f,Q=_.f,Y=E.f,K=T.f,X=P("symbols"),J=P("op-symbols"),Z=P("string-to-symbol-registry"),ee=P("symbol-to-string-registry"),te=P("wks"),re=o.QObject,ne=!re||!re.prototype||!re.prototype.findChild,oe=l&&s((function(){return 7!=b(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=G(H,t);n&&delete H[t],Q(e,t,r),n&&e!==H&&Q(H,t,n)}:Q,ae=function(e,t){var r=X[e]=b(W.prototype);return B(r,{type:U,tag:e,description:t}),l||(r.description=t),r},ie=c?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof W},le=function(e,t,r){e===H&&le(J,t,r),h(e);var n=m(t,!0);return h(r),f(X,n)?(r.enumerable?(f(e,z)&&e[z][n]&&(e[z][n]=!1),r=b(r,{enumerable:y(0,!1)})):(f(e,z)||Q(e,z,y(1,{})),e[z][n]=!0),oe(e,n,r)):Q(e,n,r)},ue=function(e,t){h(e);var r=v(t),n=w(r).concat(de(r));return q(n,(function(t){l&&!ce.call(r,t)||le(e,t,r[t])})),e},ce=function(e){var t=m(e,!0),r=K.call(this,t);return!(this===H&&f(X,t)&&!f(J,t))&&(!(r||!f(this,t)||!f(X,t)||f(this,z)&&this[z][t])||r)},se=function(e,t){var r=v(e),n=m(t,!0);if(r!==H||!f(X,n)||f(J,n)){var o=G(r,n);return!o||!f(X,n)||f(r,z)&&r[z][n]||(o.enumerable=!0),o}},fe=function(e){var t=Y(v(e)),r=[];return q(t,(function(e){f(X,e)||f(N,e)||r.push(e)})),r},de=function(e){var t=e===H,r=Y(t?J:v(e)),n=[];return q(r,(function(e){!f(X,e)||t&&!f(H,e)||n.push(X[e])})),n};(u||(O((W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=L(e),r=function e(r){this===H&&e.call(J,r),f(this,z)&&f(this[z],t)&&(this[z][t]=!1),oe(this,t,y(1,r))};return l&&ne&&oe(H,t,{configurable:!0,set:r}),ae(t,e)}).prototype,"toString",(function(){return V(this).tag})),O(W,"withoutSetter",(function(e){return ae(L(e),e)})),T.f=ce,_.f=le,S.f=se,k.f=E.f=fe,x.f=de,I.f=function(e){return ae(A(e),e)},l&&(Q(W.prototype,"description",{configurable:!0,get:function(){return V(this).description}}),i||O(H,"propertyIsEnumerable",ce,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:W}),q(w(te),(function(e){j(e)})),n({target:U,stat:!0,forced:!u},{for:function(e){var t=String(e);if(f(Z,t))return Z[t];var r=W(t);return Z[t]=r,ee[r]=t,r},keyFor:function(e){if(!ie(e))throw TypeError(e+" is not a symbol");if(f(ee,e))return ee[e]},useSetter:function(){ne=!0},useSimple:function(){ne=!1}}),n({target:"Object",stat:!0,forced:!u,sham:!l},{create:function(e,t){return void 0===t?b(e):ue(b(e),t)},defineProperty:le,defineProperties:ue,getOwnPropertyDescriptor:se}),n({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:fe,getOwnPropertySymbols:de}),n({target:"Object",stat:!0,forced:s((function(){x.f(1)}))},{getOwnPropertySymbols:function(e){return x.f(g(e))}}),$)&&n({target:"JSON",stat:!0,forced:!u||s((function(){var e=W();return"[null]"!=$([e])||"{}"!=$({a:e})||"{}"!=$(Object(e))}))},{stringify:function(e,t,r){for(var n,o=[e],a=1;arguments.length>a;)o.push(arguments[a++]);if(n=t,(p(t)||void 0!==e)&&!ie(e))return d(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!ie(t))return t}),o[1]=t,$.apply(null,o)}});W.prototype[F]||C(W.prototype,F,W.prototype.valueOf),M(W,U),N[z]=!0},function(e,t,r){var n=r(20),o=r(41).f,a={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return i&&"[object Window]"==a.call(e)?function(e){try{return o(e)}catch(e){return i.slice()}}(e):o(n(e))}},function(e,t,r){var n=r(7),o=r(56),a=r(28),i=r(26),l=r(83),u=[].push,c=function(e){var t=1==e,r=2==e,c=3==e,s=4==e,f=6==e,d=7==e,p=5==e||f;return function(h,g,v,m){for(var y,b,w=a(h),k=o(w),E=n(g,v,3),x=i(k.length),S=0,_=m||l,T=t?_(h,x):r||d?_(h,0):void 0;x>S;S++)if((p||S in k)&&(b=E(y=k[S],S,w),e))if(t)T[S]=b;else if(b)switch(e){case 3:return!0;case 5:return y;case 6:return S;case 2:u.call(T,y)}else switch(e){case 4:return!1;case 7:u.call(T,y)}return f?-1:c||s?s:T}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterOut:c(7)}},function(e,t,r){"use strict";var n=r(1),o=r(16),a=r(8),i=r(11),l=r(13),u=r(14).f,c=r(60),s=a.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var f={},d=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof d?new s(e):void 0===e?s():s(e);return""===e&&(f[t]=!0),t};c(d,s);var p=d.prototype=s.prototype;p.constructor=d;var h=p.toString,g="Symbol(test)"==String(s("test")),v=/^Symbol\\((.*)\\)[^)]+$/;u(p,"description",{configurable:!0,get:function(){var e=l(this)?this.valueOf():this,t=h.call(e);if(i(f,e))return"";var r=g?t.slice(7,-1):t.replace(v,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},function(e,t,r){r(9)("asyncIterator")},function(e,t,r){r(9)("hasInstance")},function(e,t,r){r(9)("isConcatSpreadable")},function(e,t,r){r(9)("iterator")},function(e,t,r){r(9)("match")},function(e,t,r){r(9)("replace")},function(e,t,r){r(9)("search")},function(e,t,r){r(9)("species")},function(e,t,r){r(9)("split")},function(e,t,r){r(9)("toPrimitive")},function(e,t,r){r(9)("toStringTag")},function(e,t,r){r(9)("unscopables")},function(e,t,r){"use strict";var n=r(1),o=r(12),a=r(49),i=r(13),l=r(28),u=r(26),c=r(84),s=r(83),f=r(167),d=r(6),p=r(85),h=d("isConcatSpreadable"),g=9007199254740991,v="Maximum allowed index exceeded",m=p>=51||!o((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),y=f("concat"),b=function(e){if(!i(e))return!1;var t=e[h];return void 0!==t?!!t:a(e)};n({target:"Array",proto:!0,forced:!m||!y},{concat:function(e){var t,r,n,o,a,i=l(this),f=s(i,0),d=0;for(t=-1,n=arguments.length;t<n;t++)if(b(a=-1===t?i:arguments[t])){if(d+(o=u(a.length))>g)throw TypeError(v);for(r=0;r<o;r++,d++)r in a&&c(f,d,a[r])}else{if(d>=g)throw TypeError(v);c(f,d++,a)}return f.length=d,f}})},function(e,t,r){var n=r(12),o=r(6),a=r(85),i=o("species");e.exports=function(e){return a>=51||!n((function(){var t=[];return(t.constructor={})[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},function(e,t,r){var n=r(10);e.exports=n("navigator","userAgent")||""},function(e,t,r){var n=r(1),o=r(170);n({target:"Array",stat:!0,forced:!r(71)((function(e){Array.from(e)}))},{from:o})},function(e,t,r){"use strict";var n=r(7),o=r(28),a=r(171),i=r(66),l=r(26),u=r(84),c=r(45);e.exports=function(e){var t,r,s,f,d,p,h=o(e),g="function"==typeof this?this:Array,v=arguments.length,m=v>1?arguments[1]:void 0,y=void 0!==m,b=c(h),w=0;if(y&&(m=n(m,v>2?arguments[2]:void 0,2)),void 0==b||g==Array&&i(b))for(r=new g(t=l(h.length));t>w;w++)p=y?m(h[w],w):h[w],u(r,w,p);else for(d=(f=b.call(h)).next,r=new g;!(s=d.call(f)).done;w++)p=y?a(f,m,[s.value,w],!0):s.value,u(r,w,p);return r.length=w,r}},function(e,t,r){var n=r(2),o=r(69);e.exports=function(e,t,r,a){try{return a?t(n(r)[0],r[1]):t(r)}catch(t){throw o(e),t}}},function(e,t,r){var n=r(8);r(22)(n.JSON,"JSON",!0)},function(e,t,r){r(22)(Math,"Math",!0)},function(e,t,r){r(9)("dispose")},function(e,t,r){r(9)("observable")},function(e,t,r){r(9)("patternMatch")},function(e,t,r){"use strict";var n=r(86),o=[ReferenceError,TypeError,RangeError],a=!1;function i(){a=!1,n._Y=null,n._Z=null}function l(e,t){return t.some((function(t){return e instanceof t}))}t.disable=i,t.enable=function(e){e=e||{},a&&i();a=!0;var t=0,r=0,u={};function c(t){(e.allRejections||l(u[t].error,e.whitelist||o))&&(u[t].displayId=r++,e.onUnhandled?(u[t].logged=!0,e.onUnhandled(u[t].displayId,u[t].error)):(u[t].logged=!0,function(e,t){console.warn("Possible Unhandled Promise Rejection (id: "+e+"):"),((t&&(t.stack||t))+"").split("\\n").forEach((function(e){console.warn("  "+e)}))}(u[t].displayId,u[t].error)))}n._Y=function(t){2===t._V&&u[t._1]&&(u[t._1].logged?function(t){u[t].logged&&(e.onHandled?e.onHandled(u[t].displayId,u[t].error):u[t].onUnhandled||(console.warn("Promise Rejection Handled (id: "+u[t].displayId+"):"),console.warn(\'  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id \'+u[t].displayId+".")))}(t._1):clearTimeout(u[t._1].timeout),delete u[t._1])},n._Z=function(e,r){0===e._U&&(e._1=t++,u[e._1]={displayId:null,error:r,timeout:setTimeout(c.bind(null,e._1),l(r,o)?100:2e3),logged:!1})}}},function(e,t,r){"use strict";(function(t){function r(e){o.length||(n(),!0),o[o.length]=e}e.exports=r;var n,o=[],a=0;function i(){for(;a<o.length;){var e=a;if(a+=1,o[e].call(),a>1024){for(var t=0,r=o.length-a;t<r;t++)o[t]=o[t+a];o.length-=a,a=0}}o.length=0,a=0,!1}var l,u,c,s="undefined"!==typeof t?t:self,f=s.MutationObserver||s.WebKitMutationObserver;function d(e){return function(){var t=setTimeout(n,0),r=setInterval(n,50);function n(){clearTimeout(t),clearInterval(r),e()}}}"function"===typeof f?(l=1,u=new f(i),c=document.createTextNode(""),u.observe(c,{characterData:!0}),n=function(){l=-l,c.data=l}):n=d(i),r.requestFlush=n,r.makeRequestCallFromTimer=d}).call(this,r(34))},function(e,t,r){"use strict";var n=r(86);e.exports=n;var o=s(!0),a=s(!1),i=s(null),l=s(void 0),u=s(0),c=s("");function s(e){var t=new n(n._0);return t._V=1,t._W=e,t}n.resolve=function(e){if(e instanceof n)return e;if(null===e)return i;if(void 0===e)return l;if(!0===e)return o;if(!1===e)return a;if(0===e)return u;if(""===e)return c;if("object"===typeof e||"function"===typeof e)try{var t=e.then;if("function"===typeof t)return new n(t.bind(e))}catch(e){return new n((function(t,r){r(e)}))}return s(e)};var f=function(e){return"function"===typeof Array.from?(f=Array.from,Array.from(e)):(f=function(e){return Array.prototype.slice.call(e)},Array.prototype.slice.call(e))};n.all=function(e){var t=f(e);return new n((function(e,r){if(0===t.length)return e([]);var o=t.length;function a(i,l){if(l&&("object"===typeof l||"function"===typeof l)){if(l instanceof n&&l.then===n.prototype.then){for(;3===l._V;)l=l._W;return 1===l._V?a(i,l._W):(2===l._V&&r(l._W),void l.then((function(e){a(i,e)}),r))}var u=l.then;if("function"===typeof u)return void new n(u.bind(l)).then((function(e){a(i,e)}),r)}t[i]=l,0===--o&&e(t)}for(var i=0;i<t.length;i++)a(i,t[i])}))},n.reject=function(e){return new n((function(t,r){r(e)}))},n.race=function(e){return new n((function(t,r){f(e).forEach((function(e){n.resolve(e).then(t,r)}))}))},n.prototype.catch=function(e){return this.then(null,e)}},function(e,t,r){"use strict";r.r(t),r.d(t,"Headers",(function(){return h})),r.d(t,"Request",(function(){return k})),r.d(t,"Response",(function(){return x})),r.d(t,"DOMException",(function(){return _})),r.d(t,"fetch",(function(){return T}));var n="undefined"!==typeof globalThis&&globalThis||"undefined"!==typeof self&&self||"undefined"!==typeof n&&n,o="URLSearchParams"in n,a="Symbol"in n&&"iterator"in Symbol,i="FileReader"in n&&"Blob"in n&&function(){try{return new Blob,!0}catch(e){return!1}}(),l="FormData"in n,u="ArrayBuffer"in n;if(u)var c=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],s=ArrayBuffer.isView||function(e){return e&&c.indexOf(Object.prototype.toString.call(e))>-1};function f(e){if("string"!==typeof e&&(e=String(e)),/[^a-z0-9\\-#$%&\'*+.^_`|~!]/i.test(e)||""===e)throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function d(e){return"string"!==typeof e&&(e=String(e)),e}function p(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return a&&(t[Symbol.iterator]=function(){return t}),t}function h(e){this.map={},e instanceof h?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function g(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function v(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function m(e){var t=new FileReader,r=v(t);return t.readAsArrayBuffer(e),r}function y(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(e){var t;this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?"string"===typeof e?this._bodyText=e:i&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:l&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:o&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():u&&i&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=y(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):u&&(ArrayBuffer.prototype.isPrototypeOf(e)||s(e))?this._bodyArrayBuffer=y(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"===typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var e=g(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=g(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}return this.blob().then(m)}),this.text=function(){var e,t,r,n=g(this);if(n)return n;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,r=v(t),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},l&&(this.formData=function(){return this.text().then(E)}),this.json=function(){return this.text().then(JSON.parse)},this}h.prototype.append=function(e,t){e=f(e),t=d(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},h.prototype.delete=function(e){delete this.map[f(e)]},h.prototype.get=function(e){return e=f(e),this.has(e)?this.map[e]:null},h.prototype.has=function(e){return this.map.hasOwnProperty(f(e))},h.prototype.set=function(e,t){this.map[f(e)]=d(t)},h.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},h.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),p(e)},h.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),p(e)},h.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),p(e)},a&&(h.prototype[Symbol.iterator]=h.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function k(e,t){if(!(this instanceof k))throw new TypeError(\'Please use the "new" operator, this DOM object constructor cannot be called as a function.\');var r,n,o=(t=t||{}).body;if(e instanceof k){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new h(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new h(t.headers)),this.method=(r=t.method||this.method||"GET",n=r.toUpperCase(),w.indexOf(n)>-1?n:r),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(o),("GET"===this.method||"HEAD"===this.method)&&("no-store"===t.cache||"no-cache"===t.cache)){var a=/([?&])_=[^&]*/;if(a.test(this.url))this.url=this.url.replace(a,"$1_="+(new Date).getTime());else{this.url+=(/\\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function E(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),n=r.shift().replace(/\\+/g," "),o=r.join("=").replace(/\\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}})),t}function x(e,t){if(!(this instanceof x))throw new TypeError(\'Please use the "new" operator, this DOM object constructor cannot be called as a function.\');t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"",this.headers=new h(t.headers),this.url=t.url||"",this._initBody(e)}k.prototype.clone=function(){return new k(this,{body:this._bodyInit})},b.call(k.prototype),b.call(x.prototype),x.prototype.clone=function(){return new x(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},x.error=function(){var e=new x(null,{status:0,statusText:""});return e.type="error",e};var S=[301,302,303,307,308];x.redirect=function(e,t){if(-1===S.indexOf(t))throw new RangeError("Invalid status code");return new x(null,{status:t,headers:{location:e}})};var _=n.DOMException;try{new _}catch(e){(_=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack}).prototype=Object.create(Error.prototype),_.prototype.constructor=_}function T(e,t){return new Promise((function(r,o){var a=new k(e,t);if(a.signal&&a.signal.aborted)return o(new _("Aborted","AbortError"));var l=new XMLHttpRequest;function c(){l.abort()}l.onload=function(){var e,t,n={status:l.status,statusText:l.statusText,headers:(e=l.getAllResponseHeaders()||"",t=new h,e.replace(/\\r?\\n[\\t ]+/g," ").split("\\r").map((function(e){return 0===e.indexOf("\\n")?e.substr(1,e.length):e})).forEach((function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}})),t)};n.url="responseURL"in l?l.responseURL:n.headers.get("X-Request-URL");var o="response"in l?l.response:l.responseText;setTimeout((function(){r(new x(o,n))}),0)},l.onerror=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},l.ontimeout=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},l.onabort=function(){setTimeout((function(){o(new _("Aborted","AbortError"))}),0)},l.open(a.method,function(e){try{return""===e&&n.location.href?n.location.href:e}catch(t){return e}}(a.url),!0),"include"===a.credentials?l.withCredentials=!0:"omit"===a.credentials&&(l.withCredentials=!1),"responseType"in l&&(i?l.responseType="blob":u&&a.headers.get("Content-Type")&&-1!==a.headers.get("Content-Type").indexOf("application/octet-stream")&&(l.responseType="arraybuffer")),!t||"object"!==typeof t.headers||t.headers instanceof h?a.headers.forEach((function(e,t){l.setRequestHeader(t,e)})):Object.getOwnPropertyNames(t.headers).forEach((function(e){l.setRequestHeader(e,d(t.headers[e]))})),a.signal&&(a.signal.addEventListener("abort",c),l.onreadystatechange=function(){4===l.readyState&&a.signal.removeEventListener("abort",c)}),l.send("undefined"===typeof a._bodyInit?null:a._bodyInit)}))}T.polyfill=!0,n.fetch||(n.fetch=T,n.Headers=h,n.Request=k,n.Response=x)},function(e,t,r){(function(t){for(var n=r(182),o="undefined"===typeof window?t:window,a=["moz","webkit"],i="AnimationFrame",l=o["request"+i],u=o["cancel"+i]||o["cancelRequest"+i],c=0;!l&&c<a.length;c++)l=o[a[c]+"Request"+i],u=o[a[c]+"Cancel"+i]||o[a[c]+"CancelRequest"+i];if(!l||!u){var s=0,f=0,d=[];l=function(e){if(0===d.length){var t=n(),r=Math.max(0,16.666666666666668-(t-s));s=r+t,setTimeout((function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(s)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(r))}return d.push({handle:++f,callback:e,cancelled:!1}),f},u=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return l.call(o,e)},e.exports.cancel=function(){u.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=l,e.cancelAnimationFrame=u}}).call(this,r(34))},function(e,t,r){(function(t){(function(){var r,n,o,a,i,l;"undefined"!==typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!==typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(r()-i)/1e6},n=t.hrtime,a=(r=function(){var e;return 1e9*(e=n())[0]+e[1]})(),l=1e9*t.uptime(),i=a-l):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,r(51))},function(e,t,r){"use strict";var n=r(50),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,l=60110,u=60112;t.Suspense=60113;var c=60115,s=60116;if("function"===typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),a=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),i=f("react.provider"),l=f("react.context"),u=f("react.forward_ref"),t.Suspense=f("react.suspense"),c=f("react.memo"),s=f("react.lazy")}var d="function"===typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function v(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}function m(){}function y(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=v.prototype;var b=y.prototype=new m;b.constructor=y,n(b,v.prototype),b.isPureReactComponent=!0;var w={current:null},k=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,a={},i=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,n)&&!E.hasOwnProperty(n)&&(a[n]=t[n]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var c=Array(u),s=0;s<u;s++)c[s]=arguments[s+2];a.children=c}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:w.current}}function S(e){return"object"===typeof e&&null!==e&&e.$$typeof===o}var _=/\\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,n,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var u=!1;if(null===e)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case a:u=!0}}if(u)return i=i(u=e),e=""===n?"."+T(u,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(_,"$&/")+"/"),C(i,t,r,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(_,"$&/")+"/")+e)),t.push(i)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var s=n+T(l=e[c],c);u+=C(l,t,r,s,i)}else if("function"===typeof(s=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=s.call(e),c=0;!(l=e.next()).done;)u+=C(l=l.value,t,r,s=n+T(l,c++),i);else if("object"===l)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function O(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function N(){var e=R.current;if(null===e)throw Error(p(321));return e}var L={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:O,forEach:function(e,t,r){O(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(p(143));return e}},t.Component=v,t.PureComponent=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error(p(267,e));var a=n({},e.props),i=e.key,l=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,u=w.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)k.call(t,s)&&!E.hasOwnProperty(s)&&(a[s]=void 0===t[s]&&void 0!==c?c[s]:t[s])}var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){c=Array(s);for(var f=0;f<s;f++)c[f]=arguments[f+2];a.children=c}return{$$typeof:o,type:e.type,key:i,ref:l,props:a,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:l,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return N().useCallback(e,t)},t.useContext=function(e,t){return N().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return N().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return N().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return N().useLayoutEffect(e,t)},t.useMemo=function(e,t){return N().useMemo(e,t)},t.useReducer=function(e,t,r){return N().useReducer(e,t,r)},t.useRef=function(e){return N().useRef(e)},t.useState=function(e){return N().useState(e)},t.version="17.0.1"},function(e,t,r){"use strict";var n=r(0),o=r(50),a=r(185);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!n)throw Error(i(227));var l=new Set,u={};function c(e,t){s(e,t),s(e+"Capture",t)}function s(e,t){for(u[e]=t,e=0;e<t.length;e++)l.add(t[e])}var f=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=/^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$/,p=Object.prototype.hasOwnProperty,h={},g={};function v(e,t,r,n,o,a,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var m={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){m[e]=new v(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];m[t]=new v(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){m[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){m[e]=new v(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){m[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){m[e]=new v(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){m[e]=new v(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){m[e]=new v(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){m[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)}));var y=/[\\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}function w(e,t,r,n){var o=m.hasOwnProperty(t)?m[t]:null;(null!==o?0===o.type:!n&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(function(e,t,r,n){if(null===t||"undefined"===typeof t||function(e,t,r,n){if(null!==r&&0===r.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!n&&(null!==r?!r.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,r,n))return!0;if(n)return!1;if(null!==r)switch(r.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,r,o,n)&&(r=null),n||null===o?function(e){return!!p.call(g,e)||!p.call(h,e)&&(d.test(e)?g[e]=!0:(h[e]=!0,!1))}(t)&&(null===r?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=null===r?3!==o.type&&"":r:(t=o.attributeName,n=o.attributeNamespace,null===r?e.removeAttribute(t):(r=3===(o=o.type)||4===o&&!0===r?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(y,b);m[t]=new v(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(y,b);m[t]=new v(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(y,b);m[t]=new v(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){m[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)})),m.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){m[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)}));var k=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,E=60103,x=60106,S=60107,_=60108,T=60114,C=60109,O=60110,P=60112,R=60113,N=60120,L=60115,A=60116,I=60121,j=60128,M=60129,D=60130,q=60131;if("function"===typeof Symbol&&Symbol.for){var z=Symbol.for;E=z("react.element"),x=z("react.portal"),S=z("react.fragment"),_=z("react.strict_mode"),T=z("react.profiler"),C=z("react.provider"),O=z("react.context"),P=z("react.forward_ref"),R=z("react.suspense"),N=z("react.suspense_list"),L=z("react.memo"),A=z("react.lazy"),I=z("react.block"),z("react.scope"),j=z("react.opaque.id"),M=z("react.debug_trace_mode"),D=z("react.offscreen"),q=z("react.legacy_hidden")}var U,F="function"===typeof Symbol&&Symbol.iterator;function B(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=F&&e[F]||e["@@iterator"])?e:null}function V(e){if(void 0===U)try{throw Error()}catch(e){var t=e.stack.trim().match(/\\n( *(at )?)/);U=t&&t[1]||""}return"\\n"+U+e}var H=!1;function W(e,t){if(!e||H)return"";H=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var n=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){n=e}e.call(t.prototype)}else{try{throw Error()}catch(e){n=e}e()}}catch(e){if(e&&n&&"string"===typeof e.stack){for(var o=e.stack.split("\\n"),a=n.stack.split("\\n"),i=o.length-1,l=a.length-1;1<=i&&0<=l&&o[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==a[l]){if(1!==i||1!==l)do{if(i--,0>--l||o[i]!==a[l])return"\\n"+o[i].replace(" at new "," at ")}while(1<=i&&0<=l);break}}}finally{H=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?V(e):""}function $(e){switch(e.tag){case 5:return V(e.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return e=W(e.type,!1);case 11:return e=W(e.type.render,!1);case 22:return e=W(e.type._render,!1);case 1:return e=W(e.type,!0);default:return""}}function G(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case x:return"Portal";case T:return"Profiler";case _:return"StrictMode";case R:return"Suspense";case N:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case O:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case P:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case L:return G(e.type);case I:return G(e._render);case A:t=e._payload,e=e._init;try{return G(e(t))}catch(e){}}return null}function Q(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function Y(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function K(e){e._valueTracker||(e._valueTracker=function(e){var t=Y(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var o=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){n=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function X(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Y(e)?e.checked?"true":"false":e.value),(e=n)!==r&&(t.setValue(e),!0)}function J(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Z(e,t){var r=t.checked;return o({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=r?r:e._wrapperState.initialChecked})}function ee(e,t){var r=null==t.defaultValue?"":t.defaultValue,n=null!=t.checked?t.checked:t.defaultChecked;r=Q(null!=t.value?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function te(e,t){null!=(t=t.checked)&&w(e,"checked",t,!1)}function re(e,t){te(e,t);var r=Q(t.value),n=t.type;if(null!=r)"number"===n?(0===r&&""===e.value||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if("submit"===n||"reset"===n)return void e.removeAttribute("value");t.hasOwnProperty("value")?oe(e,t.type,r):t.hasOwnProperty("defaultValue")&&oe(e,t.type,Q(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function ne(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!("submit"!==n&&"reset"!==n||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}""!==(r=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==r&&(e.name=r)}function oe(e,t,r){"number"===t&&J(e.ownerDocument)===e||(null==r?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}function ae(e,t){return e=o({children:void 0},t),(t=function(e){var t="";return n.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(t.children))&&(e.children=t),e}function ie(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Q(r),t=null,o=0;o<e.length;o++){if(e[o].value===r)return e[o].selected=!0,void(n&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function le(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return o({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ue(e,t){var r=t.value;if(null==r){if(r=t.children,t=t.defaultValue,null!=r){if(null!=t)throw Error(i(92));if(Array.isArray(r)){if(!(1>=r.length))throw Error(i(93));r=r[0]}t=r}null==t&&(t=""),r=t}e._wrapperState={initialValue:Q(r)}}function ce(e,t){var r=Q(t.value),n=Q(t.defaultValue);null!=r&&((r=""+r)!==e.value&&(e.value=r),null==t.defaultValue&&e.defaultValue!==r&&(e.defaultValue=r)),null!=n&&(e.defaultValue=""+n)}function se(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}var fe="http://www.w3.org/1999/xhtml",de="http://www.w3.org/2000/svg";function pe(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function he(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?pe(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ge,ve,me=(ve=function(e,t){if(e.namespaceURI!==de||"innerHTML"in e)e.innerHTML=t;else{for((ge=ge||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ge.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,r,n){MSApp.execUnsafeLocalFunction((function(){return ve(e,t)}))}:ve);function ye(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&3===r.nodeType)return void(r.nodeValue=t)}e.textContent=t}var be={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},we=["Webkit","ms","Moz","O"];function ke(e,t,r){return null==t||"boolean"===typeof t||""===t?"":r||"number"!==typeof t||0===t||be.hasOwnProperty(e)&&be[e]?(""+t).trim():t+"px"}function Ee(e,t){for(var r in e=e.style,t)if(t.hasOwnProperty(r)){var n=0===r.indexOf("--"),o=ke(r,t[r],n);"float"===r&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}Object.keys(be).forEach((function(e){we.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),be[t]=be[e]}))}));var xe=o({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Se(e,t){if(t){if(xe[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(i(62))}}function _e(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Te(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Ce=null,Oe=null,Pe=null;function Re(e){if(e=eo(e)){if("function"!==typeof Ce)throw Error(i(280));var t=e.stateNode;t&&(t=ro(t),Ce(e.stateNode,e.type,t))}}function Ne(e){Oe?Pe?Pe.push(e):Pe=[e]:Oe=e}function Le(){if(Oe){var e=Oe,t=Pe;if(Pe=Oe=null,Re(e),t)for(e=0;e<t.length;e++)Re(t[e])}}function Ae(e,t){return e(t)}function Ie(e,t,r,n,o){return e(t,r,n,o)}function je(){}var Me=Ae,De=!1,qe=!1;function ze(){null===Oe&&null===Pe||(je(),Le())}function Ue(e,t){var r=e.stateNode;if(null===r)return null;var n=ro(r);if(null===n)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(n=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!n;break e;default:e=!1}if(e)return null;if(r&&"function"!==typeof r)throw Error(i(231,t,typeof r));return r}var Fe=!1;if(f)try{var Be={};Object.defineProperty(Be,"passive",{get:function(){Fe=!0}}),window.addEventListener("test",Be,Be),window.removeEventListener("test",Be,Be)}catch(ve){Fe=!1}function Ve(e,t,r,n,o,a,i,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(e){this.onError(e)}}var He=!1,We=null,$e=!1,Ge=null,Qe={onError:function(e){He=!0,We=e}};function Ye(e,t,r,n,o,a,i,l,u){He=!1,We=null,Ve.apply(Qe,arguments)}function Ke(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(1026&(t=e).flags)&&(r=t.return),e=t.return}while(e)}return 3===t.tag?r:null}function Xe(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Je(e){if(Ke(e)!==e)throw Error(i(188))}function Ze(e){if(!(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ke(e)))throw Error(i(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(null===o)break;var a=o.alternate;if(null===a){if(null!==(n=o.return)){r=n;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===r)return Je(o),e;if(a===n)return Je(o),t;a=a.sibling}throw Error(i(188))}if(r.return!==n.return)r=o,n=a;else{for(var l=!1,u=o.child;u;){if(u===r){l=!0,r=o,n=a;break}if(u===n){l=!0,n=o,r=a;break}u=u.sibling}if(!l){for(u=a.child;u;){if(u===r){l=!0,r=a,n=o;break}if(u===n){l=!0,n=a,r=o;break}u=u.sibling}if(!l)throw Error(i(189))}}if(r.alternate!==n)throw Error(i(190))}if(3!==r.tag)throw Error(i(188));return r.stateNode.current===r?e:t}(e)))return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function et(e,t){for(var r=e.alternate;null!==t;){if(t===e||t===r)return!0;t=t.return}return!1}var tt,rt,nt,ot,at=!1,it=[],lt=null,ut=null,ct=null,st=new Map,ft=new Map,dt=[],pt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ht(e,t,r,n,o){return{blockedOn:e,domEventName:t,eventSystemFlags:16|r,nativeEvent:o,targetContainers:[n]}}function gt(e,t){switch(e){case"focusin":case"focusout":lt=null;break;case"dragenter":case"dragleave":ut=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":st.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ft.delete(t.pointerId)}}function vt(e,t,r,n,o,a){return null===e||e.nativeEvent!==a?(e=ht(t,r,n,o,a),null!==t&&(null!==(t=eo(t))&&rt(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function mt(e){var t=Zn(e.target);if(null!==t){var r=Ke(t);if(null!==r)if(13===(t=r.tag)){if(null!==(t=Xe(r)))return e.blockedOn=t,void ot(e.lanePriority,(function(){a.unstable_runWithPriority(e.priority,(function(){nt(r)}))}))}else if(3===t&&r.stateNode.hydrate)return void(e.blockedOn=3===r.tag?r.stateNode.containerInfo:null)}e.blockedOn=null}function yt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var r=Zt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==r)return null!==(t=eo(r))&&rt(t),e.blockedOn=r,!1;t.shift()}return!0}function bt(e,t,r){yt(e)&&r.delete(t)}function wt(){for(at=!1;0<it.length;){var e=it[0];if(null!==e.blockedOn){null!==(e=eo(e.blockedOn))&&tt(e);break}for(var t=e.targetContainers;0<t.length;){var r=Zt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==r){e.blockedOn=r;break}t.shift()}null===e.blockedOn&&it.shift()}null!==lt&&yt(lt)&&(lt=null),null!==ut&&yt(ut)&&(ut=null),null!==ct&&yt(ct)&&(ct=null),st.forEach(bt),ft.forEach(bt)}function kt(e,t){e.blockedOn===t&&(e.blockedOn=null,at||(at=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,wt)))}function Et(e){function t(t){return kt(t,e)}if(0<it.length){kt(it[0],e);for(var r=1;r<it.length;r++){var n=it[r];n.blockedOn===e&&(n.blockedOn=null)}}for(null!==lt&&kt(lt,e),null!==ut&&kt(ut,e),null!==ct&&kt(ct,e),st.forEach(t),ft.forEach(t),r=0;r<dt.length;r++)(n=dt[r]).blockedOn===e&&(n.blockedOn=null);for(;0<dt.length&&null===(r=dt[0]).blockedOn;)mt(r),null===r.blockedOn&&dt.shift()}function xt(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var St={animationend:xt("Animation","AnimationEnd"),animationiteration:xt("Animation","AnimationIteration"),animationstart:xt("Animation","AnimationStart"),transitionend:xt("Transition","TransitionEnd")},_t={},Tt={};function Ct(e){if(_t[e])return _t[e];if(!St[e])return e;var t,r=St[e];for(t in r)if(r.hasOwnProperty(t)&&t in Tt)return _t[e]=r[t];return e}f&&(Tt=document.createElement("div").style,"AnimationEvent"in window||(delete St.animationend.animation,delete St.animationiteration.animation,delete St.animationstart.animation),"TransitionEvent"in window||delete St.transitionend.transition);var Ot=Ct("animationend"),Pt=Ct("animationiteration"),Rt=Ct("animationstart"),Nt=Ct("transitionend"),Lt=new Map,At=new Map,It=["abort","abort",Ot,"animationEnd",Pt,"animationIteration",Rt,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Nt,"transitionEnd","waiting","waiting"];function jt(e,t){for(var r=0;r<e.length;r+=2){var n=e[r],o=e[r+1];o="on"+(o[0].toUpperCase()+o.slice(1)),At.set(n,t),Lt.set(n,o),c(o,[n])}}(0,a.unstable_now)();var Mt=8;function Dt(e){if(0!==(1&e))return Mt=15,1;if(0!==(2&e))return Mt=14,2;if(0!==(4&e))return Mt=13,4;var t=24&e;return 0!==t?(Mt=12,t):0!==(32&e)?(Mt=11,32):0!==(t=192&e)?(Mt=10,t):0!==(256&e)?(Mt=9,256):0!==(t=3584&e)?(Mt=8,t):0!==(4096&e)?(Mt=7,4096):0!==(t=4186112&e)?(Mt=6,t):0!==(t=62914560&e)?(Mt=5,t):67108864&e?(Mt=4,67108864):0!==(134217728&e)?(Mt=3,134217728):0!==(t=805306368&e)?(Mt=2,t):0!==(1073741824&e)?(Mt=1,1073741824):(Mt=8,e)}function qt(e,t){var r=e.pendingLanes;if(0===r)return Mt=0;var n=0,o=0,a=e.expiredLanes,i=e.suspendedLanes,l=e.pingedLanes;if(0!==a)n=a,o=Mt=15;else if(0!==(a=134217727&r)){var u=a&~i;0!==u?(n=Dt(u),o=Mt):0!==(l&=a)&&(n=Dt(l),o=Mt)}else 0!==(a=r&~i)?(n=Dt(a),o=Mt):0!==l&&(n=Dt(l),o=Mt);if(0===n)return 0;if(n=r&((0>(n=31-Ht(n))?0:1<<n)<<1)-1,0!==t&&t!==n&&0===(t&i)){if(Dt(t),o<=Mt)return t;Mt=o}if(0!==(t=e.entangledLanes))for(e=e.entanglements,t&=n;0<t;)o=1<<(r=31-Ht(t)),n|=e[r],t&=~o;return n}function zt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function Ut(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return 0===(e=Ft(24&~t))?Ut(10,t):e;case 10:return 0===(e=Ft(192&~t))?Ut(8,t):e;case 8:return 0===(e=Ft(3584&~t))&&(0===(e=Ft(4186112&~t))&&(e=512)),e;case 2:return 0===(t=Ft(805306368&~t))&&(t=268435456),t}throw Error(i(358,e))}function Ft(e){return e&-e}function Bt(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Vt(e,t,r){e.pendingLanes|=t;var n=t-1;e.suspendedLanes&=n,e.pingedLanes&=n,(e=e.eventTimes)[t=31-Ht(t)]=r}var Ht=Math.clz32?Math.clz32:function(e){return 0===e?32:31-(Wt(e)/$t|0)|0},Wt=Math.log,$t=Math.LN2;var Gt=a.unstable_UserBlockingPriority,Qt=a.unstable_runWithPriority,Yt=!0;function Kt(e,t,r,n){De||je();var o=Jt,a=De;De=!0;try{Ie(o,e,t,r,n)}finally{(De=a)||ze()}}function Xt(e,t,r,n){Qt(Gt,Jt.bind(null,e,t,r,n))}function Jt(e,t,r,n){var o;if(Yt)if((o=0===(4&t))&&0<it.length&&-1<pt.indexOf(e))e=ht(null,e,t,r,n),it.push(e);else{var a=Zt(e,t,r,n);if(null===a)o&&gt(e,n);else{if(o){if(-1<pt.indexOf(e))return e=ht(a,e,t,r,n),void it.push(e);if(function(e,t,r,n,o){switch(t){case"focusin":return lt=vt(lt,e,t,r,n,o),!0;case"dragenter":return ut=vt(ut,e,t,r,n,o),!0;case"mouseover":return ct=vt(ct,e,t,r,n,o),!0;case"pointerover":var a=o.pointerId;return st.set(a,vt(st.get(a)||null,e,t,r,n,o)),!0;case"gotpointercapture":return a=o.pointerId,ft.set(a,vt(ft.get(a)||null,e,t,r,n,o)),!0}return!1}(a,e,t,r,n))return;gt(e,n)}Ln(e,t,n,null,r)}}}function Zt(e,t,r,n){var o=Te(n);if(null!==(o=Zn(o))){var a=Ke(o);if(null===a)o=null;else{var i=a.tag;if(13===i){if(null!==(o=Xe(a)))return o;o=null}else if(3===i){if(a.stateNode.hydrate)return 3===a.tag?a.stateNode.containerInfo:null;o=null}else a!==o&&(o=null)}}return Ln(e,t,n,o,r),null}var er=null,tr=null,rr=null;function nr(){if(rr)return rr;var e,t,r=tr,n=r.length,o="value"in er?er.value:er.textContent,a=o.length;for(e=0;e<n&&r[e]===o[e];e++);var i=n-e;for(t=1;t<=i&&r[n-t]===o[a-t];t++);return rr=o.slice(e,1<t?1-t:void 0)}function or(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function ar(){return!0}function ir(){return!1}function lr(e){function t(t,r,n,o,a){for(var i in this._reactName=t,this._targetInst=n,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(o):o[i]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?ar:ir,this.isPropagationStopped=ir,this}return o(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),t}var ur,cr,sr,fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dr=lr(fr),pr=o({},fr,{view:0,detail:0}),hr=lr(pr),gr=o({},pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sr&&(sr&&"mousemove"===e.type?(ur=e.screenX-sr.screenX,cr=e.screenY-sr.screenY):cr=ur=0,sr=e),ur)},movementY:function(e){return"movementY"in e?e.movementY:cr}}),vr=lr(gr),mr=lr(o({},gr,{dataTransfer:0})),yr=lr(o({},pr,{relatedTarget:0})),br=lr(o({},fr,{animationName:0,elapsedTime:0,pseudoElement:0})),wr=lr(o({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),kr=lr(o({},fr,{data:0})),Er={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _r(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sr[e])&&!!t[e]}function Tr(){return _r}var Cr=lr(o({},pr,{key:function(e){if(e.key){var t=Er[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=or(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?xr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tr,charCode:function(e){return"keypress"===e.type?or(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?or(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),Or=lr(o({},gr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Pr=lr(o({},pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tr})),Rr=lr(o({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0})),Nr=lr(o({},gr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Lr=[9,13,27,32],Ar=f&&"CompositionEvent"in window,Ir=null;f&&"documentMode"in document&&(Ir=document.documentMode);var jr=f&&"TextEvent"in window&&!Ir,Mr=f&&(!Ar||Ir&&8<Ir&&11>=Ir),Dr=String.fromCharCode(32),qr=!1;function zr(e,t){switch(e){case"keyup":return-1!==Lr.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ur(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Fr=!1;var Br={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Br[e.type]:"textarea"===t}function Hr(e,t,r,n){Ne(n),0<(t=In(t,"onChange")).length&&(r=new dr("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Wr=null,$r=null;function Gr(e){Tn(e,0)}function Qr(e){if(X(to(e)))return e}function Yr(e,t){if("change"===e)return t}var Kr=!1;if(f){var Xr;if(f){var Jr="oninput"in document;if(!Jr){var Zr=document.createElement("div");Zr.setAttribute("oninput","return;"),Jr="function"===typeof Zr.oninput}Xr=Jr}else Xr=!1;Kr=Xr&&(!document.documentMode||9<document.documentMode)}function en(){Wr&&(Wr.detachEvent("onpropertychange",tn),$r=Wr=null)}function tn(e){if("value"===e.propertyName&&Qr($r)){var t=[];if(Hr(t,$r,e,Te(e)),e=Gr,De)e(t);else{De=!0;try{Ae(e,t)}finally{De=!1,ze()}}}}function rn(e,t,r){"focusin"===e?(en(),$r=r,(Wr=t).attachEvent("onpropertychange",tn)):"focusout"===e&&en()}function nn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Qr($r)}function on(e,t){if("click"===e)return Qr(t)}function an(e,t){if("input"===e||"change"===e)return Qr(t)}var ln="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},un=Object.prototype.hasOwnProperty;function cn(e,t){if(ln(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++)if(!un.call(t,r[n])||!ln(e[r[n]],t[r[n]]))return!1;return!0}function sn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fn(e,t){var r,n=sn(e);for(e=0;n;){if(3===n.nodeType){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sn(n)}}function dn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pn(){for(var e=window,t=J();t instanceof e.HTMLIFrameElement;){try{var r="string"===typeof t.contentWindow.location.href}catch(e){r=!1}if(!r)break;t=J((e=t.contentWindow).document)}return t}function hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var gn=f&&"documentMode"in document&&11>=document.documentMode,vn=null,mn=null,yn=null,bn=!1;function wn(e,t,r){var n=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;bn||null==vn||vn!==J(n)||("selectionStart"in(n=vn)&&hn(n)?n={start:n.selectionStart,end:n.selectionEnd}:n={anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},yn&&cn(yn,n)||(yn=n,0<(n=In(mn,"onSelect")).length&&(t=new dr("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=vn)))}jt("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),jt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),jt(It,2);for(var kn="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),En=0;En<kn.length;En++)At.set(kn[En],0);s("onMouseEnter",["mouseout","mouseover"]),s("onMouseLeave",["mouseout","mouseover"]),s("onPointerEnter",["pointerout","pointerover"]),s("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sn=new Set("cancel close invalid load scroll toggle".split(" ").concat(xn));function _n(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,function(e,t,r,n,o,a,l,u,c){if(Ye.apply(this,arguments),He){if(!He)throw Error(i(198));var s=We;He=!1,We=null,$e||($e=!0,Ge=s)}}(n,t,void 0,e),e.currentTarget=null}function Tn(e,t){t=0!==(4&t);for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var i=n.length-1;0<=i;i--){var l=n[i],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==a&&o.isPropagationStopped())break e;_n(o,l,c),a=u}else for(i=0;i<n.length;i++){if(u=(l=n[i]).instance,c=l.currentTarget,l=l.listener,u!==a&&o.isPropagationStopped())break e;_n(o,l,c),a=u}}}if($e)throw e=Ge,$e=!1,Ge=null,e}function Cn(e,t){var r=no(t),n=e+"__bubble";r.has(n)||(Nn(t,e,2,!1),r.add(n))}var On="_reactListening"+Math.random().toString(36).slice(2);function Pn(e){e[On]||(e[On]=!0,l.forEach((function(t){Sn.has(t)||Rn(t,!1,e,null),Rn(t,!0,e,null)})))}function Rn(e,t,r,n){var o=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,a=r;if("selectionchange"===e&&9!==r.nodeType&&(a=r.ownerDocument),null!==n&&!t&&Sn.has(e)){if("scroll"!==e)return;o|=2,a=n}var i=no(a),l=e+"__"+(t?"capture":"bubble");i.has(l)||(t&&(o|=4),Nn(a,e,o,t),i.add(l))}function Nn(e,t,r,n){var o=At.get(t);switch(void 0===o?2:o){case 0:o=Kt;break;case 1:o=Xt;break;default:o=Jt}r=o.bind(null,t,r,e),o=void 0,!Fe||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),n?void 0!==o?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):void 0!==o?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function Ln(e,t,r,n,o){var a=n;if(0===(1&t)&&0===(2&t)&&null!==n)e:for(;;){if(null===n)return;var i=n.tag;if(3===i||4===i){var l=n.stateNode.containerInfo;if(l===o||8===l.nodeType&&l.parentNode===o)break;if(4===i)for(i=n.return;null!==i;){var u=i.tag;if((3===u||4===u)&&((u=i.stateNode.containerInfo)===o||8===u.nodeType&&u.parentNode===o))return;i=i.return}for(;null!==l;){if(null===(i=Zn(l)))return;if(5===(u=i.tag)||6===u){n=a=i;continue e}l=l.parentNode}}n=n.return}!function(e,t,r){if(qe)return e(t,r);qe=!0;try{Me(e,t,r)}finally{qe=!1,ze()}}((function(){var n=a,o=Te(r),i=[];e:{var l=Lt.get(e);if(void 0!==l){var u=dr,c=e;switch(e){case"keypress":if(0===or(r))break e;case"keydown":case"keyup":u=Cr;break;case"focusin":c="focus",u=yr;break;case"focusout":c="blur",u=yr;break;case"beforeblur":case"afterblur":u=yr;break;case"click":if(2===r.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":u=vr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":u=mr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":u=Pr;break;case Ot:case Pt:case Rt:u=br;break;case Nt:u=Rr;break;case"scroll":u=hr;break;case"wheel":u=Nr;break;case"copy":case"cut":case"paste":u=wr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":u=Or}var s=0!==(4&t),f=!s&&"scroll"===e,d=s?null!==l?l+"Capture":null:l;s=[];for(var p,h=n;null!==h;){var g=(p=h).stateNode;if(5===p.tag&&null!==g&&(p=g,null!==d&&(null!=(g=Ue(h,d))&&s.push(An(h,g,p)))),f)break;h=h.return}0<s.length&&(l=new u(l,c,null,r,o),i.push({event:l,listeners:s}))}}if(0===(7&t)){if(u="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||0!==(16&t)||!(c=r.relatedTarget||r.fromElement)||!Zn(c)&&!c[Xn])&&(u||l)&&(l=o.window===o?o:(l=o.ownerDocument)?l.defaultView||l.parentWindow:window,u?(u=n,null!==(c=(c=r.relatedTarget||r.toElement)?Zn(c):null)&&(c!==(f=Ke(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(u=null,c=n),u!==c)){if(s=vr,g="onMouseLeave",d="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(s=Or,g="onPointerLeave",d="onPointerEnter",h="pointer"),f=null==u?l:to(u),p=null==c?l:to(c),(l=new s(g,h+"leave",u,r,o)).target=f,l.relatedTarget=p,g=null,Zn(o)===n&&((s=new s(d,h+"enter",c,r,o)).target=p,s.relatedTarget=f,g=s),f=g,u&&c)e:{for(d=c,h=0,p=s=u;p;p=jn(p))h++;for(p=0,g=d;g;g=jn(g))p++;for(;0<h-p;)s=jn(s),h--;for(;0<p-h;)d=jn(d),p--;for(;h--;){if(s===d||null!==d&&s===d.alternate)break e;s=jn(s),d=jn(d)}s=null}else s=null;null!==u&&Mn(i,l,u,s,!1),null!==c&&null!==f&&Mn(i,f,c,s,!0)}if("select"===(u=(l=n?to(n):window).nodeName&&l.nodeName.toLowerCase())||"input"===u&&"file"===l.type)var v=Yr;else if(Vr(l))if(Kr)v=an;else{v=nn;var m=rn}else(u=l.nodeName)&&"input"===u.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(v=on);switch(v&&(v=v(e,n))?Hr(i,v,r,o):(m&&m(e,l,n),"focusout"===e&&(m=l._wrapperState)&&m.controlled&&"number"===l.type&&oe(l,"number",l.value)),m=n?to(n):window,e){case"focusin":(Vr(m)||"true"===m.contentEditable)&&(vn=m,mn=n,yn=null);break;case"focusout":yn=mn=vn=null;break;case"mousedown":bn=!0;break;case"contextmenu":case"mouseup":case"dragend":bn=!1,wn(i,r,o);break;case"selectionchange":if(gn)break;case"keydown":case"keyup":wn(i,r,o)}var y;if(Ar)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Fr?zr(e,r)&&(b="onCompositionEnd"):"keydown"===e&&229===r.keyCode&&(b="onCompositionStart");b&&(Mr&&"ko"!==r.locale&&(Fr||"onCompositionStart"!==b?"onCompositionEnd"===b&&Fr&&(y=nr()):(tr="value"in(er=o)?er.value:er.textContent,Fr=!0)),0<(m=In(n,b)).length&&(b=new kr(b,e,null,r,o),i.push({event:b,listeners:m}),y?b.data=y:null!==(y=Ur(r))&&(b.data=y))),(y=jr?function(e,t){switch(e){case"compositionend":return Ur(t);case"keypress":return 32!==t.which?null:(qr=!0,Dr);case"textInput":return(e=t.data)===Dr&&qr?null:e;default:return null}}(e,r):function(e,t){if(Fr)return"compositionend"===e||!Ar&&zr(e,t)?(e=nr(),rr=tr=er=null,Fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mr&&"ko"!==t.locale?null:t.data;default:return null}}(e,r))&&(0<(n=In(n,"onBeforeInput")).length&&(o=new kr("onBeforeInput","beforeinput",null,r,o),i.push({event:o,listeners:n}),o.data=y))}Tn(i,t)}))}function An(e,t,r){return{instance:e,listener:t,currentTarget:r}}function In(e,t){for(var r=t+"Capture",n=[];null!==e;){var o=e,a=o.stateNode;5===o.tag&&null!==a&&(o=a,null!=(a=Ue(e,r))&&n.unshift(An(e,a,o)),null!=(a=Ue(e,t))&&n.push(An(e,a,o))),e=e.return}return n}function jn(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Mn(e,t,r,n,o){for(var a=t._reactName,i=[];null!==r&&r!==n;){var l=r,u=l.alternate,c=l.stateNode;if(null!==u&&u===n)break;5===l.tag&&null!==c&&(l=c,o?null!=(u=Ue(r,a))&&i.unshift(An(r,u,l)):o||null!=(u=Ue(r,a))&&i.push(An(r,u,l))),r=r.return}0!==i.length&&e.push({event:t,listeners:i})}function Dn(){}var qn=null,zn=null;function Un(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Fn(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Bn="function"===typeof setTimeout?setTimeout:void 0,Vn="function"===typeof clearTimeout?clearTimeout:void 0;function Hn(e){1===e.nodeType?e.textContent="":9===e.nodeType&&(null!=(e=e.body)&&(e.textContent=""))}function Wn(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break}return e}function $n(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var r=e.data;if("$"===r||"$!"===r||"$?"===r){if(0===t)return e;t--}else"/$"===r&&t++}e=e.previousSibling}return null}var Gn=0;var Qn=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Qn,Kn="__reactProps$"+Qn,Xn="__reactContainer$"+Qn,Jn="__reactEvents$"+Qn;function Zn(e){var t=e[Yn];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Xn]||r[Yn]){if(r=t.alternate,null!==t.child||null!==r&&null!==r.child)for(e=$n(e);null!==e;){if(r=e[Yn])return r;e=$n(e)}return t}r=(e=r).parentNode}return null}function eo(e){return!(e=e[Yn]||e[Xn])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function to(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function ro(e){return e[Kn]||null}function no(e){var t=e[Jn];return void 0===t&&(t=e[Jn]=new Set),t}var oo=[],ao=-1;function io(e){return{current:e}}function lo(e){0>ao||(e.current=oo[ao],oo[ao]=null,ao--)}function uo(e,t){ao++,oo[ao]=e.current,e.current=t}var co={},so=io(co),fo=io(!1),po=co;function ho(e,t){var r=e.type.contextTypes;if(!r)return co;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o,a={};for(o in r)a[o]=t[o];return n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function go(e){return null!==(e=e.childContextTypes)&&void 0!==e}function vo(){lo(fo),lo(so)}function mo(e,t,r){if(so.current!==co)throw Error(i(168));uo(so,t),uo(fo,r)}function yo(e,t,r){var n=e.stateNode;if(e=t.childContextTypes,"function"!==typeof n.getChildContext)return r;for(var a in n=n.getChildContext())if(!(a in e))throw Error(i(108,G(t)||"Unknown",a));return o({},r,n)}function bo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||co,po=so.current,uo(so,e),uo(fo,fo.current),!0}function wo(e,t,r){var n=e.stateNode;if(!n)throw Error(i(169));r?(e=yo(e,t,po),n.__reactInternalMemoizedMergedChildContext=e,lo(fo),lo(so),uo(so,e)):lo(fo),uo(fo,r)}var ko=null,Eo=null,xo=a.unstable_runWithPriority,So=a.unstable_scheduleCallback,_o=a.unstable_cancelCallback,To=a.unstable_shouldYield,Co=a.unstable_requestPaint,Oo=a.unstable_now,Po=a.unstable_getCurrentPriorityLevel,Ro=a.unstable_ImmediatePriority,No=a.unstable_UserBlockingPriority,Lo=a.unstable_NormalPriority,Ao=a.unstable_LowPriority,Io=a.unstable_IdlePriority,jo={},Mo=void 0!==Co?Co:function(){},Do=null,qo=null,zo=!1,Uo=Oo(),Fo=1e4>Uo?Oo:function(){return Oo()-Uo};function Bo(){switch(Po()){case Ro:return 99;case No:return 98;case Lo:return 97;case Ao:return 96;case Io:return 95;default:throw Error(i(332))}}function Vo(e){switch(e){case 99:return Ro;case 98:return No;case 97:return Lo;case 96:return Ao;case 95:return Io;default:throw Error(i(332))}}function Ho(e,t){return e=Vo(e),xo(e,t)}function Wo(e,t,r){return e=Vo(e),So(e,t,r)}function $o(){if(null!==qo){var e=qo;qo=null,_o(e)}Go()}function Go(){if(!zo&&null!==Do){zo=!0;var e=0;try{var t=Do;Ho(99,(function(){for(;e<t.length;e++){var r=t[e];do{r=r(!0)}while(null!==r)}})),Do=null}catch(t){throw null!==Do&&(Do=Do.slice(e+1)),So(Ro,$o),t}finally{zo=!1}}}var Qo=k.ReactCurrentBatchConfig;function Yo(e,t){if(e&&e.defaultProps){for(var r in t=o({},t),e=e.defaultProps)void 0===t[r]&&(t[r]=e[r]);return t}return t}var Ko=io(null),Xo=null,Jo=null,Zo=null;function ea(){Zo=Jo=Xo=null}function ta(e){var t=Ko.current;lo(Ko),e.type._context._currentValue=t}function ra(e,t){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)===t){if(null===r||(r.childLanes&t)===t)break;r.childLanes|=t}else e.childLanes|=t,null!==r&&(r.childLanes|=t);e=e.return}}function na(e,t){Xo=e,Zo=Jo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(Ii=!0),e.firstContext=null)}function oa(e,t){if(Zo!==e&&!1!==t&&0!==t)if("number"===typeof t&&1073741823!==t||(Zo=e,t=1073741823),t={context:e,observedBits:t,next:null},null===Jo){if(null===Xo)throw Error(i(308));Jo=t,Xo.dependencies={lanes:0,firstContext:t,responders:null}}else Jo=Jo.next=t;return e._currentValue}var aa=!1;function ia(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function la(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ua(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ca(e,t){if(null!==(e=e.updateQueue)){var r=(e=e.shared).pending;null===r?t.next=t:(t.next=r.next,r.next=t),e.pending=t}}function sa(e,t){var r=e.updateQueue,n=e.alternate;if(null!==n&&r===(n=n.updateQueue)){var o=null,a=null;if(null!==(r=r.firstBaseUpdate)){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};null===a?o=a=i:a=a.next=i,r=r.next}while(null!==r);null===a?o=a=t:a=a.next=t}else o=a=t;return r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:n.shared,effects:n.effects},void(e.updateQueue=r)}null===(e=r.lastBaseUpdate)?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function fa(e,t,r,n){var a=e.updateQueue;aa=!1;var i=a.firstBaseUpdate,l=a.lastBaseUpdate,u=a.shared.pending;if(null!==u){a.shared.pending=null;var c=u,s=c.next;c.next=null,null===l?i=s:l.next=s,l=c;var f=e.alternate;if(null!==f){var d=(f=f.updateQueue).lastBaseUpdate;d!==l&&(null===d?f.firstBaseUpdate=s:d.next=s,f.lastBaseUpdate=c)}}if(null!==i){for(d=a.baseState,l=0,f=s=c=null;;){u=i.lane;var p=i.eventTime;if((n&u)===u){null!==f&&(f=f.next={eventTime:p,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var h=e,g=i;switch(u=t,p=r,g.tag){case 1:if("function"===typeof(h=g.payload)){d=h.call(p,d,u);break e}d=h;break e;case 3:h.flags=-4097&h.flags|64;case 0:if(null===(u="function"===typeof(h=g.payload)?h.call(p,d,u):h)||void 0===u)break e;d=o({},d,u);break e;case 2:aa=!0}}null!==i.callback&&(e.flags|=32,null===(u=a.effects)?a.effects=[i]:u.push(i))}else p={eventTime:p,lane:u,tag:i.tag,payload:i.payload,callback:i.callback,next:null},null===f?(s=f=p,c=d):f=f.next=p,l|=u;if(null===(i=i.next)){if(null===(u=a.shared.pending))break;i=u.next,u.next=null,a.lastBaseUpdate=u,a.shared.pending=null}}null===f&&(c=d),a.baseState=c,a.firstBaseUpdate=s,a.lastBaseUpdate=f,ql|=l,e.lanes=l,e.memoizedState=d}}function da(e,t,r){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(null!==o){if(n.callback=null,n=r,"function"!==typeof o)throw Error(i(191,o));o.call(n)}}}var pa=(new n.Component).refs;function ha(e,t,r,n){r=null===(r=r(n,t=e.memoizedState))||void 0===r?t:o({},t,r),e.memoizedState=r,0===e.lanes&&(e.updateQueue.baseState=r)}var ga={isMounted:function(e){return!!(e=e._reactInternals)&&Ke(e)===e},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=cu(),o=su(e),a=ua(n,o);a.payload=t,void 0!==r&&null!==r&&(a.callback=r),ca(e,a),fu(e,o,n)},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=cu(),o=su(e),a=ua(n,o);a.tag=1,a.payload=t,void 0!==r&&null!==r&&(a.callback=r),ca(e,a),fu(e,o,n)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=cu(),n=su(e),o=ua(r,n);o.tag=2,void 0!==t&&null!==t&&(o.callback=t),ca(e,o),fu(e,n,r)}};function va(e,t,r,n,o,a,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(n,a,i):!t.prototype||!t.prototype.isPureReactComponent||(!cn(r,n)||!cn(o,a))}function ma(e,t,r){var n=!1,o=co,a=t.contextType;return"object"===typeof a&&null!==a?a=oa(a):(o=go(t)?po:so.current,a=(n=null!==(n=t.contextTypes)&&void 0!==n)?ho(e,o):co),t=new t(r,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ga,e.stateNode=t,t._reactInternals=e,n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function ya(e,t,r,n){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(r,n),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&ga.enqueueReplaceState(t,t.state,null)}function ba(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs=pa,ia(e);var a=t.contextType;"object"===typeof a&&null!==a?o.context=oa(a):(a=go(t)?po:so.current,o.context=ho(e,a)),fa(e,r,o,n),o.state=e.memoizedState,"function"===typeof(a=t.getDerivedStateFromProps)&&(ha(e,t,a,r),o.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(t=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&ga.enqueueReplaceState(o,o.state,null),fa(e,r,o,n),o.state=e.memoizedState),"function"===typeof o.componentDidMount&&(e.flags|=4)}var wa=Array.isArray;function ka(e,t,r){if(null!==(e=r.ref)&&"function"!==typeof e&&"object"!==typeof e){if(r._owner){if(r=r._owner){if(1!==r.tag)throw Error(i(309));var n=r.stateNode}if(!n)throw Error(i(147,e));var o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:((t=function(e){var t=n.refs;t===pa&&(t=n.refs={}),null===e?delete t[o]:t[o]=e})._stringRef=o,t)}if("string"!==typeof e)throw Error(i(284));if(!r._owner)throw Error(i(290,e))}return e}function Ea(e,t){if("textarea"!==e.type)throw Error(i(31,"[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function xa(e){function t(t,r){if(e){var n=t.lastEffect;null!==n?(n.nextEffect=r,t.lastEffect=r):t.firstEffect=t.lastEffect=r,r.nextEffect=null,r.flags=8}}function r(r,n){if(!e)return null;for(;null!==n;)t(r,n),n=n.sibling;return null}function n(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=Vu(e,t)).index=0,e.sibling=null,e}function a(t,r,n){return t.index=n,e?null!==(n=t.alternate)?(n=n.index)<r?(t.flags=2,r):n:(t.flags=2,r):r}function l(t){return e&&null===t.alternate&&(t.flags=2),t}function u(e,t,r,n){return null===t||6!==t.tag?((t=Gu(r,e.mode,n)).return=e,t):((t=o(t,r)).return=e,t)}function c(e,t,r,n){return null!==t&&t.elementType===r.type?((n=o(t,r.props)).ref=ka(e,t,r),n.return=e,n):((n=Hu(r.type,r.key,r.props,null,e.mode,n)).ref=ka(e,t,r),n.return=e,n)}function s(e,t,r,n){return null===t||4!==t.tag||t.stateNode.containerInfo!==r.containerInfo||t.stateNode.implementation!==r.implementation?((t=Qu(r,e.mode,n)).return=e,t):((t=o(t,r.children||[])).return=e,t)}function f(e,t,r,n,a){return null===t||7!==t.tag?((t=Wu(r,e.mode,n,a)).return=e,t):((t=o(t,r)).return=e,t)}function d(e,t,r){if("string"===typeof t||"number"===typeof t)return(t=Gu(""+t,e.mode,r)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case E:return(r=Hu(t.type,t.key,t.props,null,e.mode,r)).ref=ka(e,null,t),r.return=e,r;case x:return(t=Qu(t,e.mode,r)).return=e,t}if(wa(t)||B(t))return(t=Wu(t,e.mode,r,null)).return=e,t;Ea(e,t)}return null}function p(e,t,r,n){var o=null!==t?t.key:null;if("string"===typeof r||"number"===typeof r)return null!==o?null:u(e,t,""+r,n);if("object"===typeof r&&null!==r){switch(r.$$typeof){case E:return r.key===o?r.type===S?f(e,t,r.props.children,n,o):c(e,t,r,n):null;case x:return r.key===o?s(e,t,r,n):null}if(wa(r)||B(r))return null!==o?null:f(e,t,r,n,null);Ea(e,r)}return null}function h(e,t,r,n,o){if("string"===typeof n||"number"===typeof n)return u(t,e=e.get(r)||null,""+n,o);if("object"===typeof n&&null!==n){switch(n.$$typeof){case E:return e=e.get(null===n.key?r:n.key)||null,n.type===S?f(t,e,n.props.children,o,n.key):c(t,e,n,o);case x:return s(t,e=e.get(null===n.key?r:n.key)||null,n,o)}if(wa(n)||B(n))return f(t,e=e.get(r)||null,n,o,null);Ea(t,n)}return null}function g(o,i,l,u){for(var c=null,s=null,f=i,g=i=0,v=null;null!==f&&g<l.length;g++){f.index>g?(v=f,f=null):v=f.sibling;var m=p(o,f,l[g],u);if(null===m){null===f&&(f=v);break}e&&f&&null===m.alternate&&t(o,f),i=a(m,i,g),null===s?c=m:s.sibling=m,s=m,f=v}if(g===l.length)return r(o,f),c;if(null===f){for(;g<l.length;g++)null!==(f=d(o,l[g],u))&&(i=a(f,i,g),null===s?c=f:s.sibling=f,s=f);return c}for(f=n(o,f);g<l.length;g++)null!==(v=h(f,o,g,l[g],u))&&(e&&null!==v.alternate&&f.delete(null===v.key?g:v.key),i=a(v,i,g),null===s?c=v:s.sibling=v,s=v);return e&&f.forEach((function(e){return t(o,e)})),c}function v(o,l,u,c){var s=B(u);if("function"!==typeof s)throw Error(i(150));if(null==(u=s.call(u)))throw Error(i(151));for(var f=s=null,g=l,v=l=0,m=null,y=u.next();null!==g&&!y.done;v++,y=u.next()){g.index>v?(m=g,g=null):m=g.sibling;var b=p(o,g,y.value,c);if(null===b){null===g&&(g=m);break}e&&g&&null===b.alternate&&t(o,g),l=a(b,l,v),null===f?s=b:f.sibling=b,f=b,g=m}if(y.done)return r(o,g),s;if(null===g){for(;!y.done;v++,y=u.next())null!==(y=d(o,y.value,c))&&(l=a(y,l,v),null===f?s=y:f.sibling=y,f=y);return s}for(g=n(o,g);!y.done;v++,y=u.next())null!==(y=h(g,o,v,y.value,c))&&(e&&null!==y.alternate&&g.delete(null===y.key?v:y.key),l=a(y,l,v),null===f?s=y:f.sibling=y,f=y);return e&&g.forEach((function(e){return t(o,e)})),s}return function(e,n,a,u){var c="object"===typeof a&&null!==a&&a.type===S&&null===a.key;c&&(a=a.props.children);var s="object"===typeof a&&null!==a;if(s)switch(a.$$typeof){case E:e:{for(s=a.key,c=n;null!==c;){if(c.key===s){switch(c.tag){case 7:if(a.type===S){r(e,c.sibling),(n=o(c,a.props.children)).return=e,e=n;break e}break;default:if(c.elementType===a.type){r(e,c.sibling),(n=o(c,a.props)).ref=ka(e,c,a),n.return=e,e=n;break e}}r(e,c);break}t(e,c),c=c.sibling}a.type===S?((n=Wu(a.props.children,e.mode,u,a.key)).return=e,e=n):((u=Hu(a.type,a.key,a.props,null,e.mode,u)).ref=ka(e,n,a),u.return=e,e=u)}return l(e);case x:e:{for(c=a.key;null!==n;){if(n.key===c){if(4===n.tag&&n.stateNode.containerInfo===a.containerInfo&&n.stateNode.implementation===a.implementation){r(e,n.sibling),(n=o(n,a.children||[])).return=e,e=n;break e}r(e,n);break}t(e,n),n=n.sibling}(n=Qu(a,e.mode,u)).return=e,e=n}return l(e)}if("string"===typeof a||"number"===typeof a)return a=""+a,null!==n&&6===n.tag?(r(e,n.sibling),(n=o(n,a)).return=e,e=n):(r(e,n),(n=Gu(a,e.mode,u)).return=e,e=n),l(e);if(wa(a))return g(e,n,a,u);if(B(a))return v(e,n,a,u);if(s&&Ea(e,a),"undefined"===typeof a&&!c)switch(e.tag){case 1:case 22:case 0:case 11:case 15:throw Error(i(152,G(e.type)||"Component"))}return r(e,n)}}var Sa=xa(!0),_a=xa(!1),Ta={},Ca=io(Ta),Oa=io(Ta),Pa=io(Ta);function Ra(e){if(e===Ta)throw Error(i(174));return e}function Na(e,t){switch(uo(Pa,t),uo(Oa,e),uo(Ca,Ta),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:he(null,"");break;default:t=he(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}lo(Ca),uo(Ca,t)}function La(){lo(Ca),lo(Oa),lo(Pa)}function Aa(e){Ra(Pa.current);var t=Ra(Ca.current),r=he(t,e.type);t!==r&&(uo(Oa,e),uo(Ca,r))}function Ia(e){Oa.current===e&&(lo(Ca),lo(Oa))}var ja=io(0);function Ma(e){for(var t=e;null!==t;){if(13===t.tag){var r=t.memoizedState;if(null!==r&&(null===(r=r.dehydrated)||"$?"===r.data||"$!"===r.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(64&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Da=null,qa=null,za=!1;function Ua(e,t){var r=Fu(5,null,null,0);r.elementType="DELETED",r.type="DELETED",r.stateNode=t,r.return=e,r.flags=8,null!==e.lastEffect?(e.lastEffect.nextEffect=r,e.lastEffect=r):e.firstEffect=e.lastEffect=r}function Fa(e,t){switch(e.tag){case 5:var r=e.type;return null!==(t=1!==t.nodeType||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);case 13:default:return!1}}function Ba(e){if(za){var t=qa;if(t){var r=t;if(!Fa(e,t)){if(!(t=Wn(r.nextSibling))||!Fa(e,t))return e.flags=-1025&e.flags|2,za=!1,void(Da=e);Ua(Da,r)}Da=e,qa=Wn(t.firstChild)}else e.flags=-1025&e.flags|2,za=!1,Da=e}}function Va(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;Da=e}function Ha(e){if(e!==Da)return!1;if(!za)return Va(e),za=!0,!1;var t=e.type;if(5!==e.tag||"head"!==t&&"body"!==t&&!Fn(t,e.memoizedProps))for(t=qa;t;)Ua(e,t),t=Wn(t.nextSibling);if(Va(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var r=e.data;if("/$"===r){if(0===t){qa=Wn(e.nextSibling);break e}t--}else"$"!==r&&"$!"!==r&&"$?"!==r||t++}e=e.nextSibling}qa=null}}else qa=Da?Wn(e.stateNode.nextSibling):null;return!0}function Wa(){qa=Da=null,za=!1}var $a=[];function Ga(){for(var e=0;e<$a.length;e++)$a[e]._workInProgressVersionPrimary=null;$a.length=0}var Qa=k.ReactCurrentDispatcher,Ya=k.ReactCurrentBatchConfig,Ka=0,Xa=null,Ja=null,Za=null,ei=!1,ti=!1;function ri(){throw Error(i(321))}function ni(e,t){if(null===t)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!ln(e[r],t[r]))return!1;return!0}function oi(e,t,r,n,o,a){if(Ka=a,Xa=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qa.current=null===e||null===e.memoizedState?Ri:Ni,e=r(n,o),ti){a=0;do{if(ti=!1,!(25>a))throw Error(i(301));a+=1,Za=Ja=null,t.updateQueue=null,Qa.current=Li,e=r(n,o)}while(ti)}if(Qa.current=Pi,t=null!==Ja&&null!==Ja.next,Ka=0,Za=Ja=Xa=null,ei=!1,t)throw Error(i(300));return e}function ai(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Za?Xa.memoizedState=Za=e:Za=Za.next=e,Za}function ii(){if(null===Ja){var e=Xa.alternate;e=null!==e?e.memoizedState:null}else e=Ja.next;var t=null===Za?Xa.memoizedState:Za.next;if(null!==t)Za=t,Ja=e;else{if(null===e)throw Error(i(310));e={memoizedState:(Ja=e).memoizedState,baseState:Ja.baseState,baseQueue:Ja.baseQueue,queue:Ja.queue,next:null},null===Za?Xa.memoizedState=Za=e:Za=Za.next=e}return Za}function li(e,t){return"function"===typeof t?t(e):t}function ui(e){var t=ii(),r=t.queue;if(null===r)throw Error(i(311));r.lastRenderedReducer=e;var n=Ja,o=n.baseQueue,a=r.pending;if(null!==a){if(null!==o){var l=o.next;o.next=a.next,a.next=l}n.baseQueue=o=a,r.pending=null}if(null!==o){o=o.next,n=n.baseState;var u=l=a=null,c=o;do{var s=c.lane;if((Ka&s)===s)null!==u&&(u=u.next={lane:0,action:c.action,eagerReducer:c.eagerReducer,eagerState:c.eagerState,next:null}),n=c.eagerReducer===e?c.eagerState:e(n,c.action);else{var f={lane:s,action:c.action,eagerReducer:c.eagerReducer,eagerState:c.eagerState,next:null};null===u?(l=u=f,a=n):u=u.next=f,Xa.lanes|=s,ql|=s}c=c.next}while(null!==c&&c!==o);null===u?a=n:u.next=l,ln(n,t.memoizedState)||(Ii=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=u,r.lastRenderedState=n}return[t.memoizedState,r.dispatch]}function ci(e){var t=ii(),r=t.queue;if(null===r)throw Error(i(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,a=t.memoizedState;if(null!==o){r.pending=null;var l=o=o.next;do{a=e(a,l.action),l=l.next}while(l!==o);ln(a,t.memoizedState)||(Ii=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function si(e,t,r){var n=t._getVersion;n=n(t._source);var o=t._workInProgressVersionPrimary;if(null!==o?e=o===n:(e=e.mutableReadLanes,(e=(Ka&e)===e)&&(t._workInProgressVersionPrimary=n,$a.push(t))),e)return r(t._source);throw $a.push(t),Error(i(350))}function fi(e,t,r,n){var o=Rl;if(null===o)throw Error(i(349));var a=t._getVersion,l=a(t._source),u=Qa.current,c=u.useState((function(){return si(o,t,r)})),s=c[1],f=c[0];c=Za;var d=e.memoizedState,p=d.refs,h=p.getSnapshot,g=d.source;d=d.subscribe;var v=Xa;return e.memoizedState={refs:p,source:t,subscribe:n},u.useEffect((function(){p.getSnapshot=r,p.setSnapshot=s;var e=a(t._source);if(!ln(l,e)){e=r(t._source),ln(f,e)||(s(e),e=su(v),o.mutableReadLanes|=e&o.pendingLanes),e=o.mutableReadLanes,o.entangledLanes|=e;for(var n=o.entanglements,i=e;0<i;){var u=31-Ht(i),c=1<<u;n[u]|=e,i&=~c}}}),[r,t,n]),u.useEffect((function(){return n(t._source,(function(){var e=p.getSnapshot,r=p.setSnapshot;try{r(e(t._source));var n=su(v);o.mutableReadLanes|=n&o.pendingLanes}catch(e){r((function(){throw e}))}}))}),[t,n]),ln(h,r)&&ln(g,t)&&ln(d,n)||((e={pending:null,dispatch:null,lastRenderedReducer:li,lastRenderedState:f}).dispatch=s=Oi.bind(null,Xa,e),c.queue=e,c.baseQueue=null,f=si(o,t,r),c.memoizedState=c.baseState=f),f}function di(e,t,r){return fi(ii(),e,t,r)}function pi(e){var t=ai();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=(e=t.queue={pending:null,dispatch:null,lastRenderedReducer:li,lastRenderedState:e}).dispatch=Oi.bind(null,Xa,e),[t.memoizedState,e]}function hi(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},null===(t=Xa.updateQueue)?(t={lastEffect:null},Xa.updateQueue=t,t.lastEffect=e.next=e):null===(r=t.lastEffect)?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e),e}function gi(e){return e={current:e},ai().memoizedState=e}function vi(){return ii().memoizedState}function mi(e,t,r,n){var o=ai();Xa.flags|=e,o.memoizedState=hi(1|t,r,void 0,void 0===n?null:n)}function yi(e,t,r,n){var o=ii();n=void 0===n?null:n;var a=void 0;if(null!==Ja){var i=Ja.memoizedState;if(a=i.destroy,null!==n&&ni(n,i.deps))return void hi(t,r,a,n)}Xa.flags|=e,o.memoizedState=hi(1|t,r,a,n)}function bi(e,t){return mi(516,4,e,t)}function wi(e,t){return yi(516,4,e,t)}function ki(e,t){return yi(4,2,e,t)}function Ei(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function xi(e,t,r){return r=null!==r&&void 0!==r?r.concat([e]):null,yi(4,2,Ei.bind(null,t,e),r)}function Si(){}function _i(e,t){var r=ii();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&ni(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Ti(e,t){var r=ii();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&ni(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Ci(e,t){var r=Bo();Ho(98>r?98:r,(function(){e(!0)})),Ho(97<r?97:r,(function(){var r=Ya.transition;Ya.transition=1;try{e(!1),t()}finally{Ya.transition=r}}))}function Oi(e,t,r){var n=cu(),o=su(e),a={lane:o,action:r,eagerReducer:null,eagerState:null,next:null},i=t.pending;if(null===i?a.next=a:(a.next=i.next,i.next=a),t.pending=a,i=e.alternate,e===Xa||null!==i&&i===Xa)ti=ei=!0;else{if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var l=t.lastRenderedState,u=i(l,r);if(a.eagerReducer=i,a.eagerState=u,ln(u,l))return}catch(e){}fu(e,o,n)}}var Pi={readContext:oa,useCallback:ri,useContext:ri,useEffect:ri,useImperativeHandle:ri,useLayoutEffect:ri,useMemo:ri,useReducer:ri,useRef:ri,useState:ri,useDebugValue:ri,useDeferredValue:ri,useTransition:ri,useMutableSource:ri,useOpaqueIdentifier:ri,unstable_isNewReconciler:!1},Ri={readContext:oa,useCallback:function(e,t){return ai().memoizedState=[e,void 0===t?null:t],e},useContext:oa,useEffect:bi,useImperativeHandle:function(e,t,r){return r=null!==r&&void 0!==r?r.concat([e]):null,mi(4,2,Ei.bind(null,t,e),r)},useLayoutEffect:function(e,t){return mi(4,2,e,t)},useMemo:function(e,t){var r=ai();return t=void 0===t?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=ai();return t=void 0!==r?r(t):t,n.memoizedState=n.baseState=t,e=(e=n.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t}).dispatch=Oi.bind(null,Xa,e),[n.memoizedState,e]},useRef:gi,useState:pi,useDebugValue:Si,useDeferredValue:function(e){var t=pi(e),r=t[0],n=t[1];return bi((function(){var t=Ya.transition;Ya.transition=1;try{n(e)}finally{Ya.transition=t}}),[e]),r},useTransition:function(){var e=pi(!1),t=e[0];return gi(e=Ci.bind(null,e[1])),[e,t]},useMutableSource:function(e,t,r){var n=ai();return n.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:r},fi(n,e,t,r)},useOpaqueIdentifier:function(){if(za){var e=!1,t=function(e){return{$$typeof:j,toString:e,valueOf:e}}((function(){throw e||(e=!0,r("r:"+(Gn++).toString(36))),Error(i(355))})),r=pi(t)[1];return 0===(2&Xa.mode)&&(Xa.flags|=516,hi(5,(function(){r("r:"+(Gn++).toString(36))}),void 0,null)),t}return pi(t="r:"+(Gn++).toString(36)),t},unstable_isNewReconciler:!1},Ni={readContext:oa,useCallback:_i,useContext:oa,useEffect:wi,useImperativeHandle:xi,useLayoutEffect:ki,useMemo:Ti,useReducer:ui,useRef:vi,useState:function(){return ui(li)},useDebugValue:Si,useDeferredValue:function(e){var t=ui(li),r=t[0],n=t[1];return wi((function(){var t=Ya.transition;Ya.transition=1;try{n(e)}finally{Ya.transition=t}}),[e]),r},useTransition:function(){var e=ui(li)[0];return[vi().current,e]},useMutableSource:di,useOpaqueIdentifier:function(){return ui(li)[0]},unstable_isNewReconciler:!1},Li={readContext:oa,useCallback:_i,useContext:oa,useEffect:wi,useImperativeHandle:xi,useLayoutEffect:ki,useMemo:Ti,useReducer:ci,useRef:vi,useState:function(){return ci(li)},useDebugValue:Si,useDeferredValue:function(e){var t=ci(li),r=t[0],n=t[1];return wi((function(){var t=Ya.transition;Ya.transition=1;try{n(e)}finally{Ya.transition=t}}),[e]),r},useTransition:function(){var e=ci(li)[0];return[vi().current,e]},useMutableSource:di,useOpaqueIdentifier:function(){return ci(li)[0]},unstable_isNewReconciler:!1},Ai=k.ReactCurrentOwner,Ii=!1;function ji(e,t,r,n){t.child=null===e?_a(t,null,r,n):Sa(t,e.child,r,n)}function Mi(e,t,r,n,o){r=r.render;var a=t.ref;return na(t,o),n=oi(e,t,r,n,a,o),null===e||Ii?(t.flags|=1,ji(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~o,rl(e,t,o))}function Di(e,t,r,n,o,a){if(null===e){var i=r.type;return"function"!==typeof i||Bu(i)||void 0!==i.defaultProps||null!==r.compare||void 0!==r.defaultProps?((e=Hu(r.type,null,n,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,qi(e,t,i,n,o,a))}return i=e.child,0===(o&a)&&(o=i.memoizedProps,(r=null!==(r=r.compare)?r:cn)(o,n)&&e.ref===t.ref)?rl(e,t,a):(t.flags|=1,(e=Vu(i,n)).ref=t.ref,e.return=t,t.child=e)}function qi(e,t,r,n,o,a){if(null!==e&&cn(e.memoizedProps,n)&&e.ref===t.ref){if(Ii=!1,0===(a&o))return t.lanes=e.lanes,rl(e,t,a);0!==(16384&e.flags)&&(Ii=!0)}return Fi(e,t,r,n,a)}function zi(e,t,r){var n=t.pendingProps,o=n.children,a=null!==e?e.memoizedState:null;if("hidden"===n.mode||"unstable-defer-without-hiding"===n.mode)if(0===(4&t.mode))t.memoizedState={baseLanes:0},bu(t,r);else{if(0===(1073741824&r))return e=null!==a?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},bu(t,e),null;t.memoizedState={baseLanes:0},bu(t,null!==a?a.baseLanes:r)}else null!==a?(n=a.baseLanes|r,t.memoizedState=null):n=r,bu(t,n);return ji(e,t,o,r),t.child}function Ui(e,t){var r=t.ref;(null===e&&null!==r||null!==e&&e.ref!==r)&&(t.flags|=128)}function Fi(e,t,r,n,o){var a=go(r)?po:so.current;return a=ho(t,a),na(t,o),r=oi(e,t,r,n,a,o),null===e||Ii?(t.flags|=1,ji(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~o,rl(e,t,o))}function Bi(e,t,r,n,o){if(go(r)){var a=!0;bo(t)}else a=!1;if(na(t,o),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),ma(t,r,n),ba(t,r,n,o),n=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var u=i.context,c=r.contextType;"object"===typeof c&&null!==c?c=oa(c):c=ho(t,c=go(r)?po:so.current);var s=r.getDerivedStateFromProps,f="function"===typeof s||"function"===typeof i.getSnapshotBeforeUpdate;f||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==n||u!==c)&&ya(t,i,n,c),aa=!1;var d=t.memoizedState;i.state=d,fa(t,n,i,o),u=t.memoizedState,l!==n||d!==u||fo.current||aa?("function"===typeof s&&(ha(t,r,s,n),u=t.memoizedState),(l=aa||va(t,r,l,n,d,u,c))?(f||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4)):("function"===typeof i.componentDidMount&&(t.flags|=4),t.memoizedProps=n,t.memoizedState=u),i.props=n,i.state=u,i.context=c,n=l):("function"===typeof i.componentDidMount&&(t.flags|=4),n=!1)}else{i=t.stateNode,la(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Yo(t.type,l),i.props=c,f=t.pendingProps,d=i.context,"object"===typeof(u=r.contextType)&&null!==u?u=oa(u):u=ho(t,u=go(r)?po:so.current);var p=r.getDerivedStateFromProps;(s="function"===typeof p||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==f||d!==u)&&ya(t,i,n,u),aa=!1,d=t.memoizedState,i.state=d,fa(t,n,i,o);var h=t.memoizedState;l!==f||d!==h||fo.current||aa?("function"===typeof p&&(ha(t,r,p,n),h=t.memoizedState),(c=aa||va(t,r,c,n,d,h,u))?(s||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(n,h,u),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(n,h,u)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=256)):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=256),t.memoizedProps=n,t.memoizedState=h),i.props=n,i.state=h,i.context=u,n=c):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=256),n=!1)}return Vi(e,t,r,n,a,o)}function Vi(e,t,r,n,o,a){Ui(e,t);var i=0!==(64&t.flags);if(!n&&!i)return o&&wo(t,r,!1),rl(e,t,a);n=t.stateNode,Ai.current=t;var l=i&&"function"!==typeof r.getDerivedStateFromError?null:n.render();return t.flags|=1,null!==e&&i?(t.child=Sa(t,e.child,null,a),t.child=Sa(t,null,l,a)):ji(e,t,l,a),t.memoizedState=n.state,o&&wo(t,r,!0),t.child}function Hi(e){var t=e.stateNode;t.pendingContext?mo(0,t.pendingContext,t.pendingContext!==t.context):t.context&&mo(0,t.context,!1),Na(e,t.containerInfo)}var Wi,$i,Gi,Qi={dehydrated:null,retryLane:0};function Yi(e,t,r){var n,o=t.pendingProps,a=ja.current,i=!1;return(n=0!==(64&t.flags))||(n=(null===e||null!==e.memoizedState)&&0!==(2&a)),n?(i=!0,t.flags&=-65):null!==e&&null===e.memoizedState||void 0===o.fallback||!0===o.unstable_avoidThisFallback||(a|=1),uo(ja,1&a),null===e?(void 0!==o.fallback&&Ba(t),e=o.children,a=o.fallback,i?(e=Ki(t,e,a,r),t.child.memoizedState={baseLanes:r},t.memoizedState=Qi,e):"number"===typeof o.unstable_expectedLoadTime?(e=Ki(t,e,a,r),t.child.memoizedState={baseLanes:r},t.memoizedState=Qi,t.lanes=33554432,e):((r=$u({mode:"visible",children:e},t.mode,r,null)).return=t,t.child=r)):(e.memoizedState,i?(o=Ji(e,t,o.children,o.fallback,r),i=t.child,a=e.child.memoizedState,i.memoizedState=null===a?{baseLanes:r}:{baseLanes:a.baseLanes|r},i.childLanes=e.childLanes&~r,t.memoizedState=Qi,o):(r=Xi(e,t,o.children,r),t.memoizedState=null,r))}function Ki(e,t,r,n){var o=e.mode,a=e.child;return t={mode:"hidden",children:t},0===(2&o)&&null!==a?(a.childLanes=0,a.pendingProps=t):a=$u(t,o,0,null),r=Wu(r,o,n,null),a.return=e,r.return=e,a.sibling=r,e.child=a,r}function Xi(e,t,r,n){var o=e.child;return e=o.sibling,r=Vu(o,{mode:"visible",children:r}),0===(2&t.mode)&&(r.lanes=n),r.return=t,r.sibling=null,null!==e&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=r}function Ji(e,t,r,n,o){var a=t.mode,i=e.child;e=i.sibling;var l={mode:"hidden",children:r};return 0===(2&a)&&t.child!==i?((r=t.child).childLanes=0,r.pendingProps=l,null!==(i=r.lastEffect)?(t.firstEffect=r.firstEffect,t.lastEffect=i,i.nextEffect=null):t.firstEffect=t.lastEffect=null):r=Vu(i,l),null!==e?n=Vu(e,n):(n=Wu(n,a,o,null)).flags|=2,n.return=t,r.return=t,r.sibling=n,t.child=r,n}function Zi(e,t){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),ra(e.return,t)}function el(e,t,r,n,o,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o,lastEffect:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o,i.lastEffect=a)}function tl(e,t,r){var n=t.pendingProps,o=n.revealOrder,a=n.tail;if(ji(e,t,n.children,r),0!==(2&(n=ja.current)))n=1&n|2,t.flags|=64;else{if(null!==e&&0!==(64&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Zi(e,r);else if(19===e.tag)Zi(e,r);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(uo(ja,n),0===(2&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;null!==r;)null!==(e=r.alternate)&&null===Ma(e)&&(o=r),r=r.sibling;null===(r=o)?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),el(t,!1,o,r,a,t.lastEffect);break;case"backwards":for(r=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===Ma(e)){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}el(t,!0,r,null,a,t.lastEffect);break;case"together":el(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function rl(e,t,r){if(null!==e&&(t.dependencies=e.dependencies),ql|=t.lanes,0!==(r&t.childLanes)){if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(r=Vu(e=t.child,e.pendingProps),t.child=r,r.return=t;null!==e.sibling;)e=e.sibling,(r=r.sibling=Vu(e,e.pendingProps)).return=t;r.sibling=null}return t.child}return null}function nl(e,t){if(!za)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;null!==t;)null!==t.alternate&&(r=t),t=t.sibling;null===r?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;null!==r;)null!==r.alternate&&(n=r),r=r.sibling;null===n?t||null===e.tail?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ol(e,t,r){var n=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return go(t.type)&&vo(),null;case 3:return La(),lo(fo),lo(so),Ga(),(n=t.stateNode).pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(Ha(t)?t.flags|=4:n.hydrate||(t.flags|=256)),null;case 5:Ia(t);var a=Ra(Pa.current);if(r=t.type,null!==e&&null!=t.stateNode)$i(e,t,r,n),e.ref!==t.ref&&(t.flags|=128);else{if(!n){if(null===t.stateNode)throw Error(i(166));return null}if(e=Ra(Ca.current),Ha(t)){n=t.stateNode,r=t.type;var l=t.memoizedProps;switch(n[Yn]=t,n[Kn]=l,r){case"dialog":Cn("cancel",n),Cn("close",n);break;case"iframe":case"object":case"embed":Cn("load",n);break;case"video":case"audio":for(e=0;e<xn.length;e++)Cn(xn[e],n);break;case"source":Cn("error",n);break;case"img":case"image":case"link":Cn("error",n),Cn("load",n);break;case"details":Cn("toggle",n);break;case"input":ee(n,l),Cn("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!l.multiple},Cn("invalid",n);break;case"textarea":ue(n,l),Cn("invalid",n)}for(var c in Se(r,l),e=null,l)l.hasOwnProperty(c)&&(a=l[c],"children"===c?"string"===typeof a?n.textContent!==a&&(e=["children",a]):"number"===typeof a&&n.textContent!==""+a&&(e=["children",""+a]):u.hasOwnProperty(c)&&null!=a&&"onScroll"===c&&Cn("scroll",n));switch(r){case"input":K(n),ne(n,l,!0);break;case"textarea":K(n),se(n);break;case"select":case"option":break;default:"function"===typeof l.onClick&&(n.onclick=Dn)}n=e,t.updateQueue=n,null!==n&&(t.flags|=4)}else{switch(c=9===a.nodeType?a:a.ownerDocument,e===fe&&(e=pe(r)),e===fe?"script"===r?((e=c.createElement("div")).innerHTML="<script><\\/script>",e=e.removeChild(e.firstChild)):"string"===typeof n.is?e=c.createElement(r,{is:n.is}):(e=c.createElement(r),"select"===r&&(c=e,n.multiple?c.multiple=!0:n.size&&(c.size=n.size))):e=c.createElementNS(e,r),e[Yn]=t,e[Kn]=n,Wi(e,t),t.stateNode=e,c=_e(r,n),r){case"dialog":Cn("cancel",e),Cn("close",e),a=n;break;case"iframe":case"object":case"embed":Cn("load",e),a=n;break;case"video":case"audio":for(a=0;a<xn.length;a++)Cn(xn[a],e);a=n;break;case"source":Cn("error",e),a=n;break;case"img":case"image":case"link":Cn("error",e),Cn("load",e),a=n;break;case"details":Cn("toggle",e),a=n;break;case"input":ee(e,n),a=Z(e,n),Cn("invalid",e);break;case"option":a=ae(e,n);break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=o({},n,{value:void 0}),Cn("invalid",e);break;case"textarea":ue(e,n),a=le(e,n),Cn("invalid",e);break;default:a=n}Se(r,a);var s=a;for(l in s)if(s.hasOwnProperty(l)){var f=s[l];"style"===l?Ee(e,f):"dangerouslySetInnerHTML"===l?null!=(f=f?f.__html:void 0)&&me(e,f):"children"===l?"string"===typeof f?("textarea"!==r||""!==f)&&ye(e,f):"number"===typeof f&&ye(e,""+f):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(u.hasOwnProperty(l)?null!=f&&"onScroll"===l&&Cn("scroll",e):null!=f&&w(e,l,f,c))}switch(r){case"input":K(e),ne(e,n,!1);break;case"textarea":K(e),se(e);break;case"option":null!=n.value&&e.setAttribute("value",""+Q(n.value));break;case"select":e.multiple=!!n.multiple,null!=(l=n.value)?ie(e,!!n.multiple,l,!1):null!=n.defaultValue&&ie(e,!!n.multiple,n.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=Dn)}Un(r,n)&&(t.flags|=4)}null!==t.ref&&(t.flags|=128)}return null;case 6:if(e&&null!=t.stateNode)Gi(0,t,e.memoizedProps,n);else{if("string"!==typeof n&&null===t.stateNode)throw Error(i(166));r=Ra(Pa.current),Ra(Ca.current),Ha(t)?(n=t.stateNode,r=t.memoizedProps,n[Yn]=t,n.nodeValue!==r&&(t.flags|=4)):((n=(9===r.nodeType?r:r.ownerDocument).createTextNode(n))[Yn]=t,t.stateNode=n)}return null;case 13:return lo(ja),n=t.memoizedState,0!==(64&t.flags)?(t.lanes=r,t):(n=null!==n,r=!1,null===e?void 0!==t.memoizedProps.fallback&&Ha(t):r=null!==e.memoizedState,n&&!r&&0!==(2&t.mode)&&(null===e&&!0!==t.memoizedProps.unstable_avoidThisFallback||0!==(1&ja.current)?0===jl&&(jl=3):(0!==jl&&3!==jl||(jl=4),null===Rl||0===(134217727&ql)&&0===(134217727&zl)||gu(Rl,Ll))),(n||r)&&(t.flags|=4),null);case 4:return La(),null===e&&Pn(t.stateNode.containerInfo),null;case 10:return ta(t),null;case 17:return go(t.type)&&vo(),null;case 19:if(lo(ja),null===(n=t.memoizedState))return null;if(l=0!==(64&t.flags),null===(c=n.rendering))if(l)nl(n,!1);else{if(0!==jl||null!==e&&0!==(64&e.flags))for(e=t.child;null!==e;){if(null!==(c=Ma(e))){for(t.flags|=64,nl(n,!1),null!==(l=c.updateQueue)&&(t.updateQueue=l,t.flags|=4),null===n.lastEffect&&(t.firstEffect=null),t.lastEffect=n.lastEffect,n=r,r=t.child;null!==r;)e=n,(l=r).flags&=2,l.nextEffect=null,l.firstEffect=null,l.lastEffect=null,null===(c=l.alternate)?(l.childLanes=0,l.lanes=e,l.child=null,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=c.childLanes,l.lanes=c.lanes,l.child=c.child,l.memoizedProps=c.memoizedProps,l.memoizedState=c.memoizedState,l.updateQueue=c.updateQueue,l.type=c.type,e=c.dependencies,l.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return uo(ja,1&ja.current|2),t.child}e=e.sibling}null!==n.tail&&Fo()>Vl&&(t.flags|=64,l=!0,nl(n,!1),t.lanes=33554432)}else{if(!l)if(null!==(e=Ma(c))){if(t.flags|=64,l=!0,null!==(r=e.updateQueue)&&(t.updateQueue=r,t.flags|=4),nl(n,!0),null===n.tail&&"hidden"===n.tailMode&&!c.alternate&&!za)return null!==(t=t.lastEffect=n.lastEffect)&&(t.nextEffect=null),null}else 2*Fo()-n.renderingStartTime>Vl&&1073741824!==r&&(t.flags|=64,l=!0,nl(n,!1),t.lanes=33554432);n.isBackwards?(c.sibling=t.child,t.child=c):(null!==(r=n.last)?r.sibling=c:t.child=c,n.last=c)}return null!==n.tail?(r=n.tail,n.rendering=r,n.tail=r.sibling,n.lastEffect=t.lastEffect,n.renderingStartTime=Fo(),r.sibling=null,t=ja.current,uo(ja,l?1&t|2:1&t),r):null;case 23:case 24:return wu(),null!==e&&null!==e.memoizedState!==(null!==t.memoizedState)&&"unstable-defer-without-hiding"!==n.mode&&(t.flags|=4),null}throw Error(i(156,t.tag))}function al(e){switch(e.tag){case 1:go(e.type)&&vo();var t=e.flags;return 4096&t?(e.flags=-4097&t|64,e):null;case 3:if(La(),lo(fo),lo(so),Ga(),0!==(64&(t=e.flags)))throw Error(i(285));return e.flags=-4097&t|64,e;case 5:return Ia(e),null;case 13:return lo(ja),4096&(t=e.flags)?(e.flags=-4097&t|64,e):null;case 19:return lo(ja),null;case 4:return La(),null;case 10:return ta(e),null;case 23:case 24:return wu(),null;default:return null}}function il(e,t){try{var r="",n=t;do{r+=$(n),n=n.return}while(n);var o=r}catch(e){o="\\nError generating stack: "+e.message+"\\n"+e.stack}return{value:e,source:t,stack:o}}function ll(e,t){try{console.error(t.value)}catch(e){setTimeout((function(){throw e}))}}Wi=function(e,t){for(var r=t.child;null!==r;){if(5===r.tag||6===r.tag)e.appendChild(r.stateNode);else if(4!==r.tag&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===t)break;for(;null===r.sibling;){if(null===r.return||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},$i=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,Ra(Ca.current);var i,l=null;switch(r){case"input":a=Z(e,a),n=Z(e,n),l=[];break;case"option":a=ae(e,a),n=ae(e,n),l=[];break;case"select":a=o({},a,{value:void 0}),n=o({},n,{value:void 0}),l=[];break;case"textarea":a=le(e,a),n=le(e,n),l=[];break;default:"function"!==typeof a.onClick&&"function"===typeof n.onClick&&(e.onclick=Dn)}for(f in Se(r,n),r=null,a)if(!n.hasOwnProperty(f)&&a.hasOwnProperty(f)&&null!=a[f])if("style"===f){var c=a[f];for(i in c)c.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else"dangerouslySetInnerHTML"!==f&&"children"!==f&&"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(u.hasOwnProperty(f)?l||(l=[]):(l=l||[]).push(f,null));for(f in n){var s=n[f];if(c=null!=a?a[f]:void 0,n.hasOwnProperty(f)&&s!==c&&(null!=s||null!=c))if("style"===f)if(c){for(i in c)!c.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in s)s.hasOwnProperty(i)&&c[i]!==s[i]&&(r||(r={}),r[i]=s[i])}else r||(l||(l=[]),l.push(f,r)),r=s;else"dangerouslySetInnerHTML"===f?(s=s?s.__html:void 0,c=c?c.__html:void 0,null!=s&&c!==s&&(l=l||[]).push(f,s)):"children"===f?"string"!==typeof s&&"number"!==typeof s||(l=l||[]).push(f,""+s):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&(u.hasOwnProperty(f)?(null!=s&&"onScroll"===f&&Cn("scroll",e),l||c===s||(l=[])):"object"===typeof s&&null!==s&&s.$$typeof===j?s.toString():(l=l||[]).push(f,s))}r&&(l=l||[]).push("style",r);var f=l;(t.updateQueue=f)&&(t.flags|=4)}},Gi=function(e,t,r,n){r!==n&&(t.flags|=4)};var ul="function"===typeof WeakMap?WeakMap:Map;function cl(e,t,r){(r=ua(-1,r)).tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Gl||(Gl=!0,Ql=n),ll(0,t)},r}function sl(e,t,r){(r=ua(-1,r)).tag=3;var n=e.type.getDerivedStateFromError;if("function"===typeof n){var o=t.value;r.payload=function(){return ll(0,t),n(o)}}var a=e.stateNode;return null!==a&&"function"===typeof a.componentDidCatch&&(r.callback=function(){"function"!==typeof n&&(null===Yl?Yl=new Set([this]):Yl.add(this),ll(0,t));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),r}var fl="function"===typeof WeakSet?WeakSet:Set;function dl(e){var t=e.ref;if(null!==t)if("function"===typeof t)try{t(null)}catch(t){Du(e,t)}else t.current=null}function pl(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(256&t.flags&&null!==e){var r=e.memoizedProps,n=e.memoizedState;t=(e=t.stateNode).getSnapshotBeforeUpdate(t.elementType===t.type?r:Yo(t.type,r),n),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:return void(256&t.flags&&Hn(t.stateNode.containerInfo));case 5:case 6:case 4:case 17:return}throw Error(i(163))}function hl(e,t,r){switch(r.tag){case 0:case 11:case 15:case 22:if(null!==(t=null!==(t=r.updateQueue)?t.lastEffect:null)){e=t=t.next;do{if(3===(3&e.tag)){var n=e.create;e.destroy=n()}e=e.next}while(e!==t)}if(null!==(t=null!==(t=r.updateQueue)?t.lastEffect:null)){e=t=t.next;do{var o=e;n=o.next,0!==(4&(o=o.tag))&&0!==(1&o)&&(Iu(r,e),Au(r,e)),e=n}while(e!==t)}return;case 1:return e=r.stateNode,4&r.flags&&(null===t?e.componentDidMount():(n=r.elementType===r.type?t.memoizedProps:Yo(r.type,t.memoizedProps),e.componentDidUpdate(n,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),void(null!==(t=r.updateQueue)&&da(r,t,e));case 3:if(null!==(t=r.updateQueue)){if(e=null,null!==r.child)switch(r.child.tag){case 5:e=r.child.stateNode;break;case 1:e=r.child.stateNode}da(r,t,e)}return;case 5:return e=r.stateNode,void(null===t&&4&r.flags&&Un(r.type,r.memoizedProps)&&e.focus());case 6:case 4:case 12:return;case 13:return void(null===r.memoizedState&&(r=r.alternate,null!==r&&(r=r.memoizedState,null!==r&&(r=r.dehydrated,null!==r&&Et(r)))));case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(i(163))}function gl(e,t){for(var r=e;;){if(5===r.tag){var n=r.stateNode;if(t)"function"===typeof(n=n.style).setProperty?n.setProperty("display","none","important"):n.display="none";else{n=r.stateNode;var o=r.memoizedProps.style;o=void 0!==o&&null!==o&&o.hasOwnProperty("display")?o.display:null,n.style.display=ke("display",o)}}else if(6===r.tag)r.stateNode.nodeValue=t?"":r.memoizedProps;else if((23!==r.tag&&24!==r.tag||null===r.memoizedState||r===e)&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===e)break;for(;null===r.sibling;){if(null===r.return||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}}function vl(e,t){if(Eo&&"function"===typeof Eo.onCommitFiberUnmount)try{Eo.onCommitFiberUnmount(ko,t)}catch(e){}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(null!==(e=t.updateQueue)&&null!==(e=e.lastEffect)){var r=e=e.next;do{var n=r,o=n.destroy;if(n=n.tag,void 0!==o)if(0!==(4&n))Iu(t,r);else{n=t;try{o()}catch(e){Du(n,e)}}r=r.next}while(r!==e)}break;case 1:if(dl(t),"function"===typeof(e=t.stateNode).componentWillUnmount)try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(e){Du(t,e)}break;case 5:dl(t);break;case 4:El(e,t)}}function ml(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function yl(e){return 5===e.tag||3===e.tag||4===e.tag}function bl(e){e:{for(var t=e.return;null!==t;){if(yl(t))break e;t=t.return}throw Error(i(160))}var r=t;switch(t=r.stateNode,r.tag){case 5:var n=!1;break;case 3:case 4:t=t.containerInfo,n=!0;break;default:throw Error(i(161))}16&r.flags&&(ye(t,""),r.flags&=-17);e:t:for(r=e;;){for(;null===r.sibling;){if(null===r.return||yl(r.return)){r=null;break e}r=r.return}for(r.sibling.return=r.return,r=r.sibling;5!==r.tag&&6!==r.tag&&18!==r.tag;){if(2&r.flags)continue t;if(null===r.child||4===r.tag)continue t;r.child.return=r,r=r.child}if(!(2&r.flags)){r=r.stateNode;break e}}n?wl(e,r,t):kl(e,r,t)}function wl(e,t,r){var n=e.tag,o=5===n||6===n;if(o)e=o?e.stateNode:e.stateNode.instance,t?8===r.nodeType?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(8===r.nodeType?(t=r.parentNode).insertBefore(e,r):(t=r).appendChild(e),null!==(r=r._reactRootContainer)&&void 0!==r||null!==t.onclick||(t.onclick=Dn));else if(4!==n&&null!==(e=e.child))for(wl(e,t,r),e=e.sibling;null!==e;)wl(e,t,r),e=e.sibling}function kl(e,t,r){var n=e.tag,o=5===n||6===n;if(o)e=o?e.stateNode:e.stateNode.instance,t?r.insertBefore(e,t):r.appendChild(e);else if(4!==n&&null!==(e=e.child))for(kl(e,t,r),e=e.sibling;null!==e;)kl(e,t,r),e=e.sibling}function El(e,t){for(var r,n,o=t,a=!1;;){if(!a){a=o.return;e:for(;;){if(null===a)throw Error(i(160));switch(r=a.stateNode,a.tag){case 5:n=!1;break e;case 3:case 4:r=r.containerInfo,n=!0;break e}a=a.return}a=!0}if(5===o.tag||6===o.tag){e:for(var l=e,u=o,c=u;;)if(vl(l,c),null!==c.child&&4!==c.tag)c.child.return=c,c=c.child;else{if(c===u)break e;for(;null===c.sibling;){if(null===c.return||c.return===u)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n?(l=r,u=o.stateNode,8===l.nodeType?l.parentNode.removeChild(u):l.removeChild(u)):r.removeChild(o.stateNode)}else if(4===o.tag){if(null!==o.child){r=o.stateNode.containerInfo,n=!0,o.child.return=o,o=o.child;continue}}else if(vl(e,o),null!==o.child){o.child.return=o,o=o.child;continue}if(o===t)break;for(;null===o.sibling;){if(null===o.return||o.return===t)return;4===(o=o.return).tag&&(a=!1)}o.sibling.return=o.return,o=o.sibling}}function xl(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var n=r=r.next;do{3===(3&n.tag)&&(e=n.destroy,n.destroy=void 0,void 0!==e&&e()),n=n.next}while(n!==r)}return;case 1:return;case 5:if(null!=(r=t.stateNode)){n=t.memoizedProps;var o=null!==e?e.memoizedProps:n;e=t.type;var a=t.updateQueue;if(t.updateQueue=null,null!==a){for(r[Kn]=n,"input"===e&&"radio"===n.type&&null!=n.name&&te(r,n),_e(e,o),t=_e(e,n),o=0;o<a.length;o+=2){var l=a[o],u=a[o+1];"style"===l?Ee(r,u):"dangerouslySetInnerHTML"===l?me(r,u):"children"===l?ye(r,u):w(r,l,u,t)}switch(e){case"input":re(r,n);break;case"textarea":ce(r,n);break;case"select":e=r._wrapperState.wasMultiple,r._wrapperState.wasMultiple=!!n.multiple,null!=(a=n.value)?ie(r,!!n.multiple,a,!1):e!==!!n.multiple&&(null!=n.defaultValue?ie(r,!!n.multiple,n.defaultValue,!0):ie(r,!!n.multiple,n.multiple?[]:"",!1))}}}return;case 6:if(null===t.stateNode)throw Error(i(162));return void(t.stateNode.nodeValue=t.memoizedProps);case 3:return void((r=t.stateNode).hydrate&&(r.hydrate=!1,Et(r.containerInfo)));case 12:return;case 13:return null!==t.memoizedState&&(Bl=Fo(),gl(t.child,!0)),void Sl(t);case 19:return void Sl(t);case 17:return;case 23:case 24:return void gl(t,null!==t.memoizedState)}throw Error(i(163))}function Sl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var r=e.stateNode;null===r&&(r=e.stateNode=new fl),t.forEach((function(t){var n=zu.bind(null,e,t);r.has(t)||(r.add(t),t.then(n,n))}))}}function _l(e,t){return null!==e&&(null===(e=e.memoizedState)||null!==e.dehydrated)&&(null!==(t=t.memoizedState)&&null===t.dehydrated)}var Tl=Math.ceil,Cl=k.ReactCurrentDispatcher,Ol=k.ReactCurrentOwner,Pl=0,Rl=null,Nl=null,Ll=0,Al=0,Il=io(0),jl=0,Ml=null,Dl=0,ql=0,zl=0,Ul=0,Fl=null,Bl=0,Vl=1/0;function Hl(){Vl=Fo()+500}var Wl,$l=null,Gl=!1,Ql=null,Yl=null,Kl=!1,Xl=null,Jl=90,Zl=[],eu=[],tu=null,ru=0,nu=null,ou=-1,au=0,iu=0,lu=null,uu=!1;function cu(){return 0!==(48&Pl)?Fo():-1!==ou?ou:ou=Fo()}function su(e){if(0===(2&(e=e.mode)))return 1;if(0===(4&e))return 99===Bo()?1:2;if(0===au&&(au=Dl),0!==Qo.transition){0!==iu&&(iu=null!==Fl?Fl.pendingLanes:0),e=au;var t=4186112&~iu;return 0===(t&=-t)&&(0===(t=(e=4186112&~e)&-e)&&(t=8192)),t}return e=Bo(),0!==(4&Pl)&&98===e?e=Ut(12,au):e=Ut(e=function(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}(e),au),e}function fu(e,t,r){if(50<ru)throw ru=0,nu=null,Error(i(185));if(null===(e=du(e,t)))return null;Vt(e,t,r),e===Rl&&(zl|=t,4===jl&&gu(e,Ll));var n=Bo();1===t?0!==(8&Pl)&&0===(48&Pl)?vu(e):(pu(e,r),0===Pl&&(Hl(),$o())):(0===(4&Pl)||98!==n&&99!==n||(null===tu?tu=new Set([e]):tu.add(e)),pu(e,r)),Fl=e}function du(e,t){e.lanes|=t;var r=e.alternate;for(null!==r&&(r.lanes|=t),r=e,e=e.return;null!==e;)e.childLanes|=t,null!==(r=e.alternate)&&(r.childLanes|=t),r=e,e=e.return;return 3===r.tag?r.stateNode:null}function pu(e,t){for(var r=e.callbackNode,n=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var u=31-Ht(l),c=1<<u,s=a[u];if(-1===s){if(0===(c&n)||0!==(c&o)){s=t,Dt(c);var f=Mt;a[u]=10<=f?s+250:6<=f?s+5e3:-1}}else s<=t&&(e.expiredLanes|=c);l&=~c}if(n=qt(e,e===Rl?Ll:0),t=Mt,0===n)null!==r&&(r!==jo&&_o(r),e.callbackNode=null,e.callbackPriority=0);else{if(null!==r){if(e.callbackPriority===t)return;r!==jo&&_o(r)}15===t?(r=vu.bind(null,e),null===Do?(Do=[r],qo=So(Ro,Go)):Do.push(r),r=jo):14===t?r=Wo(99,vu.bind(null,e)):r=Wo(r=function(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(i(358,e))}}(t),hu.bind(null,e)),e.callbackPriority=t,e.callbackNode=r}}function hu(e){if(ou=-1,iu=au=0,0!==(48&Pl))throw Error(i(327));var t=e.callbackNode;if(Lu()&&e.callbackNode!==t)return null;var r=qt(e,e===Rl?Ll:0);if(0===r)return null;var n=r,o=Pl;Pl|=16;var a=xu();for(Rl===e&&Ll===n||(Hl(),ku(e,n));;)try{Tu();break}catch(t){Eu(e,t)}if(ea(),Cl.current=a,Pl=o,null!==Nl?n=0:(Rl=null,Ll=0,n=jl),0!==(Dl&zl))ku(e,0);else if(0!==n){if(2===n&&(Pl|=64,e.hydrate&&(e.hydrate=!1,Hn(e.containerInfo)),0!==(r=zt(e))&&(n=Su(e,r))),1===n)throw t=Ml,ku(e,0),gu(e,r),pu(e,Fo()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=r,n){case 0:case 1:throw Error(i(345));case 2:Pu(e);break;case 3:if(gu(e,r),(62914560&r)===r&&10<(n=Bl+500-Fo())){if(0!==qt(e,0))break;if(((o=e.suspendedLanes)&r)!==r){cu(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Bn(Pu.bind(null,e),n);break}Pu(e);break;case 4:if(gu(e,r),(4186112&r)===r)break;for(n=e.eventTimes,o=-1;0<r;){var l=31-Ht(r);a=1<<l,(l=n[l])>o&&(o=l),r&=~a}if(r=o,10<(r=(120>(r=Fo()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Tl(r/1960))-r)){e.timeoutHandle=Bn(Pu.bind(null,e),r);break}Pu(e);break;case 5:Pu(e);break;default:throw Error(i(329))}}return pu(e,Fo()),e.callbackNode===t?hu.bind(null,e):null}function gu(e,t){for(t&=~Ul,t&=~zl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ht(t),n=1<<r;e[r]=-1,t&=~n}}function vu(e){if(0!==(48&Pl))throw Error(i(327));if(Lu(),e===Rl&&0!==(e.expiredLanes&Ll)){var t=Ll,r=Su(e,t);0!==(Dl&zl)&&(r=Su(e,t=qt(e,t)))}else r=Su(e,t=qt(e,0));if(0!==e.tag&&2===r&&(Pl|=64,e.hydrate&&(e.hydrate=!1,Hn(e.containerInfo)),0!==(t=zt(e))&&(r=Su(e,t))),1===r)throw r=Ml,ku(e,0),gu(e,t),pu(e,Fo()),r;return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pu(e),pu(e,Fo()),null}function mu(e,t){var r=Pl;Pl|=1;try{return e(t)}finally{0===(Pl=r)&&(Hl(),$o())}}function yu(e,t){var r=Pl;Pl&=-2,Pl|=8;try{return e(t)}finally{0===(Pl=r)&&(Hl(),$o())}}function bu(e,t){uo(Il,Al),Al|=t,Dl|=t}function wu(){Al=Il.current,lo(Il)}function ku(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(-1!==r&&(e.timeoutHandle=-1,Vn(r)),null!==Nl)for(r=Nl.return;null!==r;){var n=r;switch(n.tag){case 1:null!==(n=n.type.childContextTypes)&&void 0!==n&&vo();break;case 3:La(),lo(fo),lo(so),Ga();break;case 5:Ia(n);break;case 4:La();break;case 13:case 19:lo(ja);break;case 10:ta(n);break;case 23:case 24:wu()}r=r.return}Rl=e,Nl=Vu(e.current,null),Ll=Al=Dl=t,jl=0,Ml=null,Ul=zl=ql=0}function Eu(e,t){for(;;){var r=Nl;try{if(ea(),Qa.current=Pi,ei){for(var n=Xa.memoizedState;null!==n;){var o=n.queue;null!==o&&(o.pending=null),n=n.next}ei=!1}if(Ka=0,Za=Ja=Xa=null,ti=!1,Ol.current=null,null===r||null===r.return){jl=1,Ml=t,Nl=null;break}e:{var a=e,i=r.return,l=r,u=t;if(t=Ll,l.flags|=2048,l.firstEffect=l.lastEffect=null,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u;if(0===(2&l.mode)){var s=l.alternate;s?(l.updateQueue=s.updateQueue,l.memoizedState=s.memoizedState,l.lanes=s.lanes):(l.updateQueue=null,l.memoizedState=null)}var f=0!==(1&ja.current),d=i;do{var p;if(p=13===d.tag){var h=d.memoizedState;if(null!==h)p=null!==h.dehydrated;else{var g=d.memoizedProps;p=void 0!==g.fallback&&(!0!==g.unstable_avoidThisFallback||!f)}}if(p){var v=d.updateQueue;if(null===v){var m=new Set;m.add(c),d.updateQueue=m}else v.add(c);if(0===(2&d.mode)){if(d.flags|=64,l.flags|=16384,l.flags&=-2981,1===l.tag)if(null===l.alternate)l.tag=17;else{var y=ua(-1,1);y.tag=2,ca(l,y)}l.lanes|=1;break e}u=void 0,l=t;var b=a.pingCache;if(null===b?(b=a.pingCache=new ul,u=new Set,b.set(c,u)):void 0===(u=b.get(c))&&(u=new Set,b.set(c,u)),!u.has(l)){u.add(l);var w=qu.bind(null,a,c,l);c.then(w,w)}d.flags|=4096,d.lanes=t;break e}d=d.return}while(null!==d);u=Error((G(l.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\\n\\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==jl&&(jl=2),u=il(u,l),d=i;do{switch(d.tag){case 3:a=u,d.flags|=4096,t&=-t,d.lanes|=t,sa(d,cl(0,a,t));break e;case 1:a=u;var k=d.type,E=d.stateNode;if(0===(64&d.flags)&&("function"===typeof k.getDerivedStateFromError||null!==E&&"function"===typeof E.componentDidCatch&&(null===Yl||!Yl.has(E)))){d.flags|=4096,t&=-t,d.lanes|=t,sa(d,sl(d,a,t));break e}}d=d.return}while(null!==d)}Ou(r)}catch(e){t=e,Nl===r&&null!==r&&(Nl=r=r.return);continue}break}}function xu(){var e=Cl.current;return Cl.current=Pi,null===e?Pi:e}function Su(e,t){var r=Pl;Pl|=16;var n=xu();for(Rl===e&&Ll===t||ku(e,t);;)try{_u();break}catch(t){Eu(e,t)}if(ea(),Pl=r,Cl.current=n,null!==Nl)throw Error(i(261));return Rl=null,Ll=0,jl}function _u(){for(;null!==Nl;)Cu(Nl)}function Tu(){for(;null!==Nl&&!To();)Cu(Nl)}function Cu(e){var t=Wl(e.alternate,e,Al);e.memoizedProps=e.pendingProps,null===t?Ou(e):Nl=t,Ol.current=null}function Ou(e){var t=e;do{var r=t.alternate;if(e=t.return,0===(2048&t.flags)){if(null!==(r=ol(r,t,Al)))return void(Nl=r);if(24!==(r=t).tag&&23!==r.tag||null===r.memoizedState||0!==(1073741824&Al)||0===(4&r.mode)){for(var n=0,o=r.child;null!==o;)n|=o.lanes|o.childLanes,o=o.sibling;r.childLanes=n}null!==e&&0===(2048&e.flags)&&(null===e.firstEffect&&(e.firstEffect=t.firstEffect),null!==t.lastEffect&&(null!==e.lastEffect&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(null!==e.lastEffect?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(null!==(r=al(t)))return r.flags&=2047,void(Nl=r);null!==e&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(null!==(t=t.sibling))return void(Nl=t);Nl=t=e}while(null!==t);0===jl&&(jl=5)}function Pu(e){var t=Bo();return Ho(99,Ru.bind(null,e,t)),null}function Ru(e,t){do{Lu()}while(null!==Xl);if(0!==(48&Pl))throw Error(i(327));var r=e.finishedWork;if(null===r)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(i(177));e.callbackNode=null;var n=r.lanes|r.childLanes,o=n,a=e.pendingLanes&~o;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=o,e.mutableReadLanes&=o,e.entangledLanes&=o,o=e.entanglements;for(var l=e.eventTimes,u=e.expirationTimes;0<a;){var c=31-Ht(a),s=1<<c;o[c]=0,l[c]=-1,u[c]=-1,a&=~s}if(null!==tu&&0===(24&n)&&tu.has(e)&&tu.delete(e),e===Rl&&(Nl=Rl=null,Ll=0),1<r.flags?null!==r.lastEffect?(r.lastEffect.nextEffect=r,n=r.firstEffect):n=r:n=r.firstEffect,null!==n){if(o=Pl,Pl|=32,Ol.current=null,qn=Yt,hn(l=pn())){if("selectionStart"in l)u={start:l.selectionStart,end:l.selectionEnd};else e:if(u=(u=l.ownerDocument)&&u.defaultView||window,(s=u.getSelection&&u.getSelection())&&0!==s.rangeCount){u=s.anchorNode,a=s.anchorOffset,c=s.focusNode,s=s.focusOffset;try{u.nodeType,c.nodeType}catch(e){u=null;break e}var f=0,d=-1,p=-1,h=0,g=0,v=l,m=null;t:for(;;){for(var y;v!==u||0!==a&&3!==v.nodeType||(d=f+a),v!==c||0!==s&&3!==v.nodeType||(p=f+s),3===v.nodeType&&(f+=v.nodeValue.length),null!==(y=v.firstChild);)m=v,v=y;for(;;){if(v===l)break t;if(m===u&&++h===a&&(d=f),m===c&&++g===s&&(p=f),null!==(y=v.nextSibling))break;m=(v=m).parentNode}v=y}u=-1===d||-1===p?null:{start:d,end:p}}else u=null;u=u||{start:0,end:0}}else u=null;zn={focusedElem:l,selectionRange:u},Yt=!1,lu=null,uu=!1,$l=n;do{try{Nu()}catch(e){if(null===$l)throw Error(i(330));Du($l,e),$l=$l.nextEffect}}while(null!==$l);lu=null,$l=n;do{try{for(l=e;null!==$l;){var b=$l.flags;if(16&b&&ye($l.stateNode,""),128&b){var w=$l.alternate;if(null!==w){var k=w.ref;null!==k&&("function"===typeof k?k(null):k.current=null)}}switch(1038&b){case 2:bl($l),$l.flags&=-3;break;case 6:bl($l),$l.flags&=-3,xl($l.alternate,$l);break;case 1024:$l.flags&=-1025;break;case 1028:$l.flags&=-1025,xl($l.alternate,$l);break;case 4:xl($l.alternate,$l);break;case 8:El(l,u=$l);var E=u.alternate;ml(u),null!==E&&ml(E)}$l=$l.nextEffect}}catch(e){if(null===$l)throw Error(i(330));Du($l,e),$l=$l.nextEffect}}while(null!==$l);if(k=zn,w=pn(),b=k.focusedElem,l=k.selectionRange,w!==b&&b&&b.ownerDocument&&dn(b.ownerDocument.documentElement,b)){null!==l&&hn(b)&&(w=l.start,void 0===(k=l.end)&&(k=w),"selectionStart"in b?(b.selectionStart=w,b.selectionEnd=Math.min(k,b.value.length)):(k=(w=b.ownerDocument||document)&&w.defaultView||window).getSelection&&(k=k.getSelection(),u=b.textContent.length,E=Math.min(l.start,u),l=void 0===l.end?E:Math.min(l.end,u),!k.extend&&E>l&&(u=l,l=E,E=u),u=fn(b,E),a=fn(b,l),u&&a&&(1!==k.rangeCount||k.anchorNode!==u.node||k.anchorOffset!==u.offset||k.focusNode!==a.node||k.focusOffset!==a.offset)&&((w=w.createRange()).setStart(u.node,u.offset),k.removeAllRanges(),E>l?(k.addRange(w),k.extend(a.node,a.offset)):(w.setEnd(a.node,a.offset),k.addRange(w))))),w=[];for(k=b;k=k.parentNode;)1===k.nodeType&&w.push({element:k,left:k.scrollLeft,top:k.scrollTop});for("function"===typeof b.focus&&b.focus(),b=0;b<w.length;b++)(k=w[b]).element.scrollLeft=k.left,k.element.scrollTop=k.top}Yt=!!qn,zn=qn=null,e.current=r,$l=n;do{try{for(b=e;null!==$l;){var x=$l.flags;if(36&x&&hl(b,$l.alternate,$l),128&x){w=void 0;var S=$l.ref;if(null!==S){var _=$l.stateNode;switch($l.tag){case 5:w=_;break;default:w=_}"function"===typeof S?S(w):S.current=w}}$l=$l.nextEffect}}catch(e){if(null===$l)throw Error(i(330));Du($l,e),$l=$l.nextEffect}}while(null!==$l);$l=null,Mo(),Pl=o}else e.current=r;if(Kl)Kl=!1,Xl=e,Jl=t;else for($l=n;null!==$l;)t=$l.nextEffect,$l.nextEffect=null,8&$l.flags&&((x=$l).sibling=null,x.stateNode=null),$l=t;if(0===(n=e.pendingLanes)&&(Yl=null),1===n?e===nu?ru++:(ru=0,nu=e):ru=0,r=r.stateNode,Eo&&"function"===typeof Eo.onCommitFiberRoot)try{Eo.onCommitFiberRoot(ko,r,void 0,64===(64&r.current.flags))}catch(e){}if(pu(e,Fo()),Gl)throw Gl=!1,e=Ql,Ql=null,e;return 0!==(8&Pl)||$o(),null}function Nu(){for(;null!==$l;){var e=$l.alternate;uu||null===lu||(0!==(8&$l.flags)?et($l,lu)&&(uu=!0):13===$l.tag&&_l(e,$l)&&et($l,lu)&&(uu=!0));var t=$l.flags;0!==(256&t)&&pl(e,$l),0===(512&t)||Kl||(Kl=!0,Wo(97,(function(){return Lu(),null}))),$l=$l.nextEffect}}function Lu(){if(90!==Jl){var e=97<Jl?97:Jl;return Jl=90,Ho(e,ju)}return!1}function Au(e,t){Zl.push(t,e),Kl||(Kl=!0,Wo(97,(function(){return Lu(),null})))}function Iu(e,t){eu.push(t,e),Kl||(Kl=!0,Wo(97,(function(){return Lu(),null})))}function ju(){if(null===Xl)return!1;var e=Xl;if(Xl=null,0!==(48&Pl))throw Error(i(331));var t=Pl;Pl|=32;var r=eu;eu=[];for(var n=0;n<r.length;n+=2){var o=r[n],a=r[n+1],l=o.destroy;if(o.destroy=void 0,"function"===typeof l)try{l()}catch(e){if(null===a)throw Error(i(330));Du(a,e)}}for(r=Zl,Zl=[],n=0;n<r.length;n+=2){o=r[n],a=r[n+1];try{var u=o.create;o.destroy=u()}catch(e){if(null===a)throw Error(i(330));Du(a,e)}}for(u=e.current.firstEffect;null!==u;)e=u.nextEffect,u.nextEffect=null,8&u.flags&&(u.sibling=null,u.stateNode=null),u=e;return Pl=t,$o(),!0}function Mu(e,t,r){ca(e,t=cl(0,t=il(r,t),1)),t=cu(),null!==(e=du(e,1))&&(Vt(e,1,t),pu(e,t))}function Du(e,t){if(3===e.tag)Mu(e,e,t);else for(var r=e.return;null!==r;){if(3===r.tag){Mu(r,e,t);break}if(1===r.tag){var n=r.stateNode;if("function"===typeof r.type.getDerivedStateFromError||"function"===typeof n.componentDidCatch&&(null===Yl||!Yl.has(n))){var o=sl(r,e=il(t,e),1);if(ca(r,o),o=cu(),null!==(r=du(r,1)))Vt(r,1,o),pu(r,o);else if("function"===typeof n.componentDidCatch&&(null===Yl||!Yl.has(n)))try{n.componentDidCatch(t,e)}catch(e){}break}}r=r.return}}function qu(e,t,r){var n=e.pingCache;null!==n&&n.delete(t),t=cu(),e.pingedLanes|=e.suspendedLanes&r,Rl===e&&(Ll&r)===r&&(4===jl||3===jl&&(62914560&Ll)===Ll&&500>Fo()-Bl?ku(e,0):Ul|=r),pu(e,t)}function zu(e,t){var r=e.stateNode;null!==r&&r.delete(t),0===(t=0)&&(0===(2&(t=e.mode))?t=1:0===(4&t)?t=99===Bo()?1:2:(0===au&&(au=Dl),0===(t=Ft(62914560&~au))&&(t=4194304))),r=cu(),null!==(e=du(e,t))&&(Vt(e,t,r),pu(e,r))}function Uu(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Fu(e,t,r,n){return new Uu(e,t,r,n)}function Bu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Vu(e,t){var r=e.alternate;return null===r?((r=Fu(e.tag,t,e.key,e.mode)).elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.nextEffect=null,r.firstEffect=null,r.lastEffect=null),r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Hu(e,t,r,n,o,a){var l=2;if(n=e,"function"===typeof e)Bu(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case S:return Wu(r.children,o,a,t);case M:l=8,o|=16;break;case _:l=8,o|=1;break;case T:return(e=Fu(12,r,t,8|o)).elementType=T,e.type=T,e.lanes=a,e;case R:return(e=Fu(13,r,t,o)).type=R,e.elementType=R,e.lanes=a,e;case N:return(e=Fu(19,r,t,o)).elementType=N,e.lanes=a,e;case D:return $u(r,o,a,t);case q:return(e=Fu(24,r,t,o)).elementType=q,e.lanes=a,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:l=10;break e;case O:l=9;break e;case P:l=11;break e;case L:l=14;break e;case A:l=16,n=null;break e;case I:l=22;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=Fu(l,r,t,o)).elementType=e,t.type=n,t.lanes=a,t}function Wu(e,t,r,n){return(e=Fu(7,e,n,t)).lanes=r,e}function $u(e,t,r,n){return(e=Fu(23,e,n,t)).elementType=D,e.lanes=r,e}function Gu(e,t,r){return(e=Fu(6,e,null,t)).lanes=r,e}function Qu(e,t,r){return(t=Fu(4,null!==e.children?e.children:[],e.key,t)).lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Yu(e,t,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=r,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Bt(0),this.expirationTimes=Bt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bt(0),this.mutableSourceEagerHydrationData=null}function Ku(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:x,key:null==n?null:""+n,children:e,containerInfo:t,implementation:r}}function Xu(e,t,r,n){var o=t.current,a=cu(),l=su(o);e:if(r){t:{if(Ke(r=r._reactInternals)!==r||1!==r.tag)throw Error(i(170));var u=r;do{switch(u.tag){case 3:u=u.stateNode.context;break t;case 1:if(go(u.type)){u=u.stateNode.__reactInternalMemoizedMergedChildContext;break t}}u=u.return}while(null!==u);throw Error(i(171))}if(1===r.tag){var c=r.type;if(go(c)){r=yo(r,c,u);break e}}r=u}else r=co;return null===t.context?t.context=r:t.pendingContext=r,(t=ua(a,l)).payload={element:e},null!==(n=void 0===n?null:n)&&(t.callback=n),ca(o,t),fu(o,l,a),l}function Ju(e){if(!(e=e.current).child)return null;switch(e.child.tag){case 5:default:return e.child.stateNode}}function Zu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var r=e.retryLane;e.retryLane=0!==r&&r<t?r:t}}function ec(e,t){Zu(e,t),(e=e.alternate)&&Zu(e,t)}function tc(e,t,r){var n=null!=r&&null!=r.hydrationOptions&&r.hydrationOptions.mutableSources||null;if(r=new Yu(e,t,null!=r&&!0===r.hydrate),t=Fu(3,null,null,2===t?7:1===t?3:0),r.current=t,t.stateNode=r,ia(t),e[Xn]=r.current,Pn(8===e.nodeType?e.parentNode:e),n)for(e=0;e<n.length;e++){var o=(t=n[e])._getVersion;o=o(t._source),null==r.mutableSourceEagerHydrationData?r.mutableSourceEagerHydrationData=[t,o]:r.mutableSourceEagerHydrationData.push(t,o)}this._internalRoot=r}function rc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function nc(e,t,r,n,o){var a=r._reactRootContainer;if(a){var i=a._internalRoot;if("function"===typeof o){var l=o;o=function(){var e=Ju(i);l.call(e)}}Xu(t,i,e,o)}else{if(a=r._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var r;r=e.lastChild;)e.removeChild(r);return new tc(e,0,t?{hydrate:!0}:void 0)}(r,n),i=a._internalRoot,"function"===typeof o){var u=o;o=function(){var e=Ju(i);u.call(e)}}yu((function(){Xu(t,i,e,o)}))}return Ju(i)}function oc(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rc(t))throw Error(i(200));return Ku(e,t,null,r)}Wl=function(e,t,r){var n=t.lanes;if(null!==e)if(e.memoizedProps!==t.pendingProps||fo.current)Ii=!0;else{if(0===(r&n)){switch(Ii=!1,t.tag){case 3:Hi(t),Wa();break;case 5:Aa(t);break;case 1:go(t.type)&&bo(t);break;case 4:Na(t,t.stateNode.containerInfo);break;case 10:n=t.memoizedProps.value;var o=t.type._context;uo(Ko,o._currentValue),o._currentValue=n;break;case 13:if(null!==t.memoizedState)return 0!==(r&t.child.childLanes)?Yi(e,t,r):(uo(ja,1&ja.current),null!==(t=rl(e,t,r))?t.sibling:null);uo(ja,1&ja.current);break;case 19:if(n=0!==(r&t.childLanes),0!==(64&e.flags)){if(n)return tl(e,t,r);t.flags|=64}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),uo(ja,ja.current),n)break;return null;case 23:case 24:return t.lanes=0,zi(e,t,r)}return rl(e,t,r)}Ii=0!==(16384&e.flags)}else Ii=!1;switch(t.lanes=0,t.tag){case 2:if(n=t.type,null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=ho(t,so.current),na(t,r),o=oi(null,t,n,e,o,r),t.flags|=1,"object"===typeof o&&null!==o&&"function"===typeof o.render&&void 0===o.$$typeof){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,go(n)){var a=!0;bo(t)}else a=!1;t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,ia(t);var l=n.getDerivedStateFromProps;"function"===typeof l&&ha(t,n,l,e),o.updater=ga,t.stateNode=o,o._reactInternals=t,ba(t,n,e,r),t=Vi(null,t,n,!0,a,r)}else t.tag=0,ji(null,t,o,r),t=t.child;return t;case 16:o=t.elementType;e:{switch(null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=(a=o._init)(o._payload),t.type=o,a=t.tag=function(e){if("function"===typeof e)return Bu(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===P)return 11;if(e===L)return 14}return 2}(o),e=Yo(o,e),a){case 0:t=Fi(null,t,o,e,r);break e;case 1:t=Bi(null,t,o,e,r);break e;case 11:t=Mi(null,t,o,e,r);break e;case 14:t=Di(null,t,o,Yo(o.type,e),n,r);break e}throw Error(i(306,o,""))}return t;case 0:return n=t.type,o=t.pendingProps,Fi(e,t,n,o=t.elementType===n?o:Yo(n,o),r);case 1:return n=t.type,o=t.pendingProps,Bi(e,t,n,o=t.elementType===n?o:Yo(n,o),r);case 3:if(Hi(t),n=t.updateQueue,null===e||null===n)throw Error(i(282));if(n=t.pendingProps,o=null!==(o=t.memoizedState)?o.element:null,la(e,t),fa(t,n,null,r),(n=t.memoizedState.element)===o)Wa(),t=rl(e,t,r);else{if((a=(o=t.stateNode).hydrate)&&(qa=Wn(t.stateNode.containerInfo.firstChild),Da=t,a=za=!0),a){if(null!=(e=o.mutableSourceEagerHydrationData))for(o=0;o<e.length;o+=2)(a=e[o])._workInProgressVersionPrimary=e[o+1],$a.push(a);for(r=_a(t,null,n,r),t.child=r;r;)r.flags=-3&r.flags|1024,r=r.sibling}else ji(e,t,n,r),Wa();t=t.child}return t;case 5:return Aa(t),null===e&&Ba(t),n=t.type,o=t.pendingProps,a=null!==e?e.memoizedProps:null,l=o.children,Fn(n,o)?l=null:null!==a&&Fn(n,a)&&(t.flags|=16),Ui(e,t),ji(e,t,l,r),t.child;case 6:return null===e&&Ba(t),null;case 13:return Yi(e,t,r);case 4:return Na(t,t.stateNode.containerInfo),n=t.pendingProps,null===e?t.child=Sa(t,null,n,r):ji(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,Mi(e,t,n,o=t.elementType===n?o:Yo(n,o),r);case 7:return ji(e,t,t.pendingProps,r),t.child;case 8:case 12:return ji(e,t,t.pendingProps.children,r),t.child;case 10:e:{n=t.type._context,o=t.pendingProps,l=t.memoizedProps,a=o.value;var u=t.type._context;if(uo(Ko,u._currentValue),u._currentValue=a,null!==l)if(u=l.value,0===(a=ln(u,a)?0:0|("function"===typeof n._calculateChangedBits?n._calculateChangedBits(u,a):1073741823))){if(l.children===o.children&&!fo.current){t=rl(e,t,r);break e}}else for(null!==(u=t.child)&&(u.return=t);null!==u;){var c=u.dependencies;if(null!==c){l=u.child;for(var s=c.firstContext;null!==s;){if(s.context===n&&0!==(s.observedBits&a)){1===u.tag&&((s=ua(-1,r&-r)).tag=2,ca(u,s)),u.lanes|=r,null!==(s=u.alternate)&&(s.lanes|=r),ra(u.return,r),c.lanes|=r;break}s=s.next}}else l=10===u.tag&&u.type===t.type?null:u.child;if(null!==l)l.return=u;else for(l=u;null!==l;){if(l===t){l=null;break}if(null!==(u=l.sibling)){u.return=l.return,l=u;break}l=l.return}u=l}ji(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=(a=t.pendingProps).children,na(t,r),n=n(o=oa(o,a.unstable_observedBits)),t.flags|=1,ji(e,t,n,r),t.child;case 14:return a=Yo(o=t.type,t.pendingProps),Di(e,t,o,a=Yo(o.type,a),n,r);case 15:return qi(e,t,t.type,t.pendingProps,n,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Yo(n,o),null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,go(n)?(e=!0,bo(t)):e=!1,na(t,r),ma(t,n,o),ba(t,n,o,r),Vi(null,t,n,!0,e,r);case 19:return tl(e,t,r);case 23:case 24:return zi(e,t,r)}throw Error(i(156,t.tag))},tc.prototype.render=function(e){Xu(e,this._internalRoot,null,null)},tc.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Xu(null,e,null,(function(){t[Xn]=null}))},tt=function(e){13===e.tag&&(fu(e,4,cu()),ec(e,4))},rt=function(e){13===e.tag&&(fu(e,67108864,cu()),ec(e,67108864))},nt=function(e){if(13===e.tag){var t=cu(),r=su(e);fu(e,r,t),ec(e,r)}},ot=function(e,t){return t()},Ce=function(e,t,r){switch(t){case"input":if(re(e,r),t=r.name,"radio"===r.type&&null!=t){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+\'][type="radio"]\'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=ro(n);if(!o)throw Error(i(90));X(n),re(n,o)}}}break;case"textarea":ce(e,r);break;case"select":null!=(t=r.value)&&ie(e,!!r.multiple,t,!1)}},Ae=mu,Ie=function(e,t,r,n,o){var a=Pl;Pl|=4;try{return Ho(98,e.bind(null,t,r,n,o))}finally{0===(Pl=a)&&(Hl(),$o())}},je=function(){0===(49&Pl)&&(function(){if(null!==tu){var e=tu;tu=null,e.forEach((function(e){e.expiredLanes|=24&e.pendingLanes,pu(e,Fo())}))}$o()}(),Lu())},Me=function(e,t){var r=Pl;Pl|=2;try{return e(t)}finally{0===(Pl=r)&&(Hl(),$o())}};var ac={Events:[eo,to,ro,Ne,Le,Lu,{current:!1}]},ic={findFiberByHostInstance:Zn,bundleType:0,version:"17.0.1",rendererPackageName:"react-dom"},lc={bundleType:ic.bundleType,version:ic.version,rendererPackageName:ic.rendererPackageName,rendererConfig:ic.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:k.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ze(e))?null:e.stateNode},findFiberByHostInstance:ic.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof{}){var uc={};if(!uc.isDisabled&&uc.supportsFiber)try{ko=uc.inject(lc),Eo=uc}catch(ve){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ac,t.createPortal=oc,t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw Error(i(268,Object.keys(e)))}return e=null===(e=Ze(t))?null:e.stateNode},t.flushSync=function(e,t){var r=Pl;if(0!==(48&r))return e(t);Pl|=1;try{if(e)return Ho(99,e.bind(null,t))}finally{Pl=r,$o()}},t.hydrate=function(e,t,r){if(!rc(t))throw Error(i(200));return nc(null,e,t,!0,r)},t.render=function(e,t,r){if(!rc(t))throw Error(i(200));return nc(null,e,t,!1,r)},t.unmountComponentAtNode=function(e){if(!rc(e))throw Error(i(40));return!!e._reactRootContainer&&(yu((function(){nc(null,null,e,!1,(function(){e._reactRootContainer=null,e[Xn]=null}))})),!0)},t.unstable_batchedUpdates=mu,t.unstable_createPortal=function(e,t){return oc(e,t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)},t.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!rc(r))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return nc(e,t,r,!1,n)},t.version="17.0.1"},function(e,t,r){"use strict";e.exports=r(186)},function(e,t,r){"use strict";var n,o,a,i;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;t.unstable_now=function(){return l.now()}}else{var u=Date,c=u.now();t.unstable_now=function(){return u.now()-c}}if("undefined"===typeof window||"function"!==typeof MessageChannel){var s=null,f=null,d=function e(){if(null!==s)try{var r=t.unstable_now();s(!0,r),s=null}catch(t){throw setTimeout(e,0),t}};n=function(e){null!==s?setTimeout(n,0,e):(s=e,setTimeout(d,0))},o=function(e,t){f=setTimeout(e,t)},a=function(){clearTimeout(f)},t.unstable_shouldYield=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var p=window.setTimeout,h=window.clearTimeout;if("undefined"!==typeof console){var g=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn\'t support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!==typeof g&&console.error("This browser doesn\'t support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var v=!1,m=null,y=-1,b=5,w=0;t.unstable_shouldYield=function(){return t.unstable_now()>=w},i=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<e?Math.floor(1e3/e):5};var k=new MessageChannel,E=k.port2;k.port1.onmessage=function(){if(null!==m){var e=t.unstable_now();w=e+b;try{m(!0,e)?E.postMessage(null):(v=!1,m=null)}catch(e){throw E.postMessage(null),e}}else v=!1},n=function(e){m=e,v||(v=!0,E.postMessage(null))},o=function(e,r){y=p((function(){e(t.unstable_now())}),r)},a=function(){h(y),y=-1}}function x(e,t){var r=e.length;e.push(t);e:for(;;){var n=r-1>>>1,o=e[n];if(!(void 0!==o&&0<T(o,t)))break e;e[n]=t,e[r]=o,r=n}}function S(e){return void 0===(e=e[0])?null:e}function _(e){var t=e[0];if(void 0!==t){var r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,o=e.length;n<o;){var a=2*(n+1)-1,i=e[a],l=a+1,u=e[l];if(void 0!==i&&0>T(i,r))void 0!==u&&0>T(u,i)?(e[n]=u,e[l]=r,n=l):(e[n]=i,e[a]=r,n=a);else{if(!(void 0!==u&&0>T(u,r)))break e;e[n]=u,e[l]=r,n=l}}}return t}return null}function T(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}var C=[],O=[],P=1,R=null,N=3,L=!1,A=!1,I=!1;function j(e){for(var t=S(O);null!==t;){if(null===t.callback)_(O);else{if(!(t.startTime<=e))break;_(O),t.sortIndex=t.expirationTime,x(C,t)}t=S(O)}}function M(e){if(I=!1,j(e),!A)if(null!==S(C))A=!0,n(D);else{var t=S(O);null!==t&&o(M,t.startTime-e)}}function D(e,r){A=!1,I&&(I=!1,a()),L=!0;var n=N;try{for(j(r),R=S(C);null!==R&&(!(R.expirationTime>r)||e&&!t.unstable_shouldYield());){var i=R.callback;if("function"===typeof i){R.callback=null,N=R.priorityLevel;var l=i(R.expirationTime<=r);r=t.unstable_now(),"function"===typeof l?R.callback=l:R===S(C)&&_(C),j(r)}else _(C);R=S(C)}if(null!==R)var u=!0;else{var c=S(O);null!==c&&o(M,c.startTime-r),u=!1}return u}finally{R=null,N=n,L=!1}}var q=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){A||L||(A=!0,n(D))},t.unstable_getCurrentPriorityLevel=function(){return N},t.unstable_getFirstCallbackNode=function(){return S(C)},t.unstable_next=function(e){switch(N){case 1:case 2:case 3:var t=3;break;default:t=N}var r=N;N=t;try{return e()}finally{N=r}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=q,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=N;N=e;try{return t()}finally{N=r}},t.unstable_scheduleCallback=function(e,r,i){var l=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?l+i:l:i=l,e){case 1:var u=-1;break;case 2:u=250;break;case 5:u=1073741823;break;case 4:u=1e4;break;default:u=5e3}return e={id:P++,callback:r,priorityLevel:e,startTime:i,expirationTime:u=i+u,sortIndex:-1},i>l?(e.sortIndex=i,x(O,e),null===S(C)&&e===S(O)&&(I?a():I=!0,o(M,i-l))):(e.sortIndex=u,x(C,e),A||L||(A=!0,n(D))),e},t.unstable_wrapCallback=function(e){var t=N;return function(){var r=N;N=t;try{return e.apply(this,arguments)}finally{N=r}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={"&lt":"<","&gt":">","&quot":\'"\',"&apos":"\'","&amp":"&","&lt;":"<","&gt;":">","&quot;":\'"\',"&apos;":"\'","&amp;":"&"},o={60:"lt",62:"gt",34:"quot",39:"apos",38:"amp"},a={"<":"&lt;",">":"&gt;",\'"\':"&quot;","\'":"&apos;","&":"&amp;"},i=function(){function e(){}return e.prototype.encode=function(e){return e&&e.length?e.replace(/[<>"\'&]/g,(function(e){return a[e]})):""},e.encode=function(t){return(new e).encode(t)},e.prototype.decode=function(e){return e&&e.length?e.replace(/&#?[0-9a-zA-Z]+;?/g,(function(e){if("#"===e.charAt(1)){var t="x"===e.charAt(2).toLowerCase()?parseInt(e.substr(3),16):parseInt(e.substr(2));return isNaN(t)||t<-32768||t>65535?"":String.fromCharCode(t)}return n[e]||e})):""},e.decode=function(t){return(new e).decode(t)},e.prototype.encodeNonUTF=function(e){if(!e||!e.length)return"";for(var t=e.length,r="",n=0;n<t;){var a=e.charCodeAt(n),i=o[a];i?(r+="&"+i+";",n++):(r+=a<32||a>126?"&#"+a+";":e.charAt(n),n++)}return r},e.encodeNonUTF=function(t){return(new e).encodeNonUTF(t)},e.prototype.encodeNonASCII=function(e){if(!e||!e.length)return"";for(var t=e.length,r="",n=0;n<t;){var o=e.charCodeAt(n);o<=255?r+=e[n++]:(r+="&#"+o+";",n++)}return r},e.encodeNonASCII=function(t){return(new e).encodeNonASCII(t)},e}();t.XmlEntities=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=["apos","nbsp","iexcl","cent","pound","curren","yen","brvbar","sect","uml","copy","ordf","laquo","not","shy","reg","macr","deg","plusmn","sup2","sup3","acute","micro","para","middot","cedil","sup1","ordm","raquo","frac14","frac12","frac34","iquest","Agrave","Aacute","Acirc","Atilde","Auml","Aring","Aelig","Ccedil","Egrave","Eacute","Ecirc","Euml","Igrave","Iacute","Icirc","Iuml","ETH","Ntilde","Ograve","Oacute","Ocirc","Otilde","Ouml","times","Oslash","Ugrave","Uacute","Ucirc","Uuml","Yacute","THORN","szlig","agrave","aacute","acirc","atilde","auml","aring","aelig","ccedil","egrave","eacute","ecirc","euml","igrave","iacute","icirc","iuml","eth","ntilde","ograve","oacute","ocirc","otilde","ouml","divide","oslash","ugrave","uacute","ucirc","uuml","yacute","thorn","yuml","quot","amp","lt","gt","OElig","oelig","Scaron","scaron","Yuml","circ","tilde","ensp","emsp","thinsp","zwnj","zwj","lrm","rlm","ndash","mdash","lsquo","rsquo","sbquo","ldquo","rdquo","bdquo","dagger","Dagger","permil","lsaquo","rsaquo","euro","fnof","Alpha","Beta","Gamma","Delta","Epsilon","Zeta","Eta","Theta","Iota","Kappa","Lambda","Mu","Nu","Xi","Omicron","Pi","Rho","Sigma","Tau","Upsilon","Phi","Chi","Psi","Omega","alpha","beta","gamma","delta","epsilon","zeta","eta","theta","iota","kappa","lambda","mu","nu","xi","omicron","pi","rho","sigmaf","sigma","tau","upsilon","phi","chi","psi","omega","thetasym","upsih","piv","bull","hellip","prime","Prime","oline","frasl","weierp","image","real","trade","alefsym","larr","uarr","rarr","darr","harr","crarr","lArr","uArr","rArr","dArr","hArr","forall","part","exist","empty","nabla","isin","notin","ni","prod","sum","minus","lowast","radic","prop","infin","ang","and","or","cap","cup","int","there4","sim","cong","asymp","ne","equiv","le","ge","sub","sup","nsub","sube","supe","oplus","otimes","perp","sdot","lceil","rceil","lfloor","rfloor","lang","rang","loz","spades","clubs","hearts","diams"],o=[39,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,34,38,60,62,338,339,352,353,376,710,732,8194,8195,8201,8204,8205,8206,8207,8211,8212,8216,8217,8218,8220,8221,8222,8224,8225,8240,8249,8250,8364,402,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,931,932,933,934,935,936,937,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,977,978,982,8226,8230,8242,8243,8254,8260,8472,8465,8476,8482,8501,8592,8593,8594,8595,8596,8629,8656,8657,8658,8659,8660,8704,8706,8707,8709,8711,8712,8713,8715,8719,8721,8722,8727,8730,8733,8734,8736,8743,8744,8745,8746,8747,8756,8764,8773,8776,8800,8801,8804,8805,8834,8835,8836,8838,8839,8853,8855,8869,8901,8968,8969,8970,8971,9001,9002,9674,9824,9827,9829,9830],a={},i={};!function(){for(var e=0,t=n.length;e<t;){var r=n[e],l=o[e];a[r]=String.fromCharCode(l),i[l]=r,e++}}();var l=function(){function e(){}return e.prototype.decode=function(e){return e&&e.length?e.replace(/&(#?[\\w\\d]+);?/g,(function(e,t){var r;if("#"===t.charAt(0)){var n="x"===t.charAt(1).toLowerCase()?parseInt(t.substr(2),16):parseInt(t.substr(1));isNaN(n)||n<-32768||n>65535||(r=String.fromCharCode(n))}else r=a[t];return r||e})):""},e.decode=function(t){return(new e).decode(t)},e.prototype.encode=function(e){if(!e||!e.length)return"";for(var t=e.length,r="",n=0;n<t;){var o=i[e.charCodeAt(n)];r+=o?"&"+o+";":e.charAt(n),n++}return r},e.encode=function(t){return(new e).encode(t)},e.prototype.encodeNonUTF=function(e){if(!e||!e.length)return"";for(var t=e.length,r="",n=0;n<t;){var o=e.charCodeAt(n),a=i[o];r+=a?"&"+a+";":o<32||o>126?"&#"+o+";":e.charAt(n),n++}return r},e.encodeNonUTF=function(t){return(new e).encodeNonUTF(t)},e.prototype.encodeNonASCII=function(e){if(!e||!e.length)return"";for(var t=e.length,r="",n=0;n<t;){var o=e.charCodeAt(n);o<=255?r+=e[n++]:(r+="&#"+o+";",n++)}return r},e.encodeNonASCII=function(t){return(new e).encodeNonASCII(t)},e}();t.Html4Entities=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=[["Aacute",[193]],["aacute",[225]],["Abreve",[258]],["abreve",[259]],["ac",[8766]],["acd",[8767]],["acE",[8766,819]],["Acirc",[194]],["acirc",[226]],["acute",[180]],["Acy",[1040]],["acy",[1072]],["AElig",[198]],["aelig",[230]],["af",[8289]],["Afr",[120068]],["afr",[120094]],["Agrave",[192]],["agrave",[224]],["alefsym",[8501]],["aleph",[8501]],["Alpha",[913]],["alpha",[945]],["Amacr",[256]],["amacr",[257]],["amalg",[10815]],["amp",[38]],["AMP",[38]],["andand",[10837]],["And",[10835]],["and",[8743]],["andd",[10844]],["andslope",[10840]],["andv",[10842]],["ang",[8736]],["ange",[10660]],["angle",[8736]],["angmsdaa",[10664]],["angmsdab",[10665]],["angmsdac",[10666]],["angmsdad",[10667]],["angmsdae",[10668]],["angmsdaf",[10669]],["angmsdag",[10670]],["angmsdah",[10671]],["angmsd",[8737]],["angrt",[8735]],["angrtvb",[8894]],["angrtvbd",[10653]],["angsph",[8738]],["angst",[197]],["angzarr",[9084]],["Aogon",[260]],["aogon",[261]],["Aopf",[120120]],["aopf",[120146]],["apacir",[10863]],["ap",[8776]],["apE",[10864]],["ape",[8778]],["apid",[8779]],["apos",[39]],["ApplyFunction",[8289]],["approx",[8776]],["approxeq",[8778]],["Aring",[197]],["aring",[229]],["Ascr",[119964]],["ascr",[119990]],["Assign",[8788]],["ast",[42]],["asymp",[8776]],["asympeq",[8781]],["Atilde",[195]],["atilde",[227]],["Auml",[196]],["auml",[228]],["awconint",[8755]],["awint",[10769]],["backcong",[8780]],["backepsilon",[1014]],["backprime",[8245]],["backsim",[8765]],["backsimeq",[8909]],["Backslash",[8726]],["Barv",[10983]],["barvee",[8893]],["barwed",[8965]],["Barwed",[8966]],["barwedge",[8965]],["bbrk",[9141]],["bbrktbrk",[9142]],["bcong",[8780]],["Bcy",[1041]],["bcy",[1073]],["bdquo",[8222]],["becaus",[8757]],["because",[8757]],["Because",[8757]],["bemptyv",[10672]],["bepsi",[1014]],["bernou",[8492]],["Bernoullis",[8492]],["Beta",[914]],["beta",[946]],["beth",[8502]],["between",[8812]],["Bfr",[120069]],["bfr",[120095]],["bigcap",[8898]],["bigcirc",[9711]],["bigcup",[8899]],["bigodot",[10752]],["bigoplus",[10753]],["bigotimes",[10754]],["bigsqcup",[10758]],["bigstar",[9733]],["bigtriangledown",[9661]],["bigtriangleup",[9651]],["biguplus",[10756]],["bigvee",[8897]],["bigwedge",[8896]],["bkarow",[10509]],["blacklozenge",[10731]],["blacksquare",[9642]],["blacktriangle",[9652]],["blacktriangledown",[9662]],["blacktriangleleft",[9666]],["blacktriangleright",[9656]],["blank",[9251]],["blk12",[9618]],["blk14",[9617]],["blk34",[9619]],["block",[9608]],["bne",[61,8421]],["bnequiv",[8801,8421]],["bNot",[10989]],["bnot",[8976]],["Bopf",[120121]],["bopf",[120147]],["bot",[8869]],["bottom",[8869]],["bowtie",[8904]],["boxbox",[10697]],["boxdl",[9488]],["boxdL",[9557]],["boxDl",[9558]],["boxDL",[9559]],["boxdr",[9484]],["boxdR",[9554]],["boxDr",[9555]],["boxDR",[9556]],["boxh",[9472]],["boxH",[9552]],["boxhd",[9516]],["boxHd",[9572]],["boxhD",[9573]],["boxHD",[9574]],["boxhu",[9524]],["boxHu",[9575]],["boxhU",[9576]],["boxHU",[9577]],["boxminus",[8863]],["boxplus",[8862]],["boxtimes",[8864]],["boxul",[9496]],["boxuL",[9563]],["boxUl",[9564]],["boxUL",[9565]],["boxur",[9492]],["boxuR",[9560]],["boxUr",[9561]],["boxUR",[9562]],["boxv",[9474]],["boxV",[9553]],["boxvh",[9532]],["boxvH",[9578]],["boxVh",[9579]],["boxVH",[9580]],["boxvl",[9508]],["boxvL",[9569]],["boxVl",[9570]],["boxVL",[9571]],["boxvr",[9500]],["boxvR",[9566]],["boxVr",[9567]],["boxVR",[9568]],["bprime",[8245]],["breve",[728]],["Breve",[728]],["brvbar",[166]],["bscr",[119991]],["Bscr",[8492]],["bsemi",[8271]],["bsim",[8765]],["bsime",[8909]],["bsolb",[10693]],["bsol",[92]],["bsolhsub",[10184]],["bull",[8226]],["bullet",[8226]],["bump",[8782]],["bumpE",[10926]],["bumpe",[8783]],["Bumpeq",[8782]],["bumpeq",[8783]],["Cacute",[262]],["cacute",[263]],["capand",[10820]],["capbrcup",[10825]],["capcap",[10827]],["cap",[8745]],["Cap",[8914]],["capcup",[10823]],["capdot",[10816]],["CapitalDifferentialD",[8517]],["caps",[8745,65024]],["caret",[8257]],["caron",[711]],["Cayleys",[8493]],["ccaps",[10829]],["Ccaron",[268]],["ccaron",[269]],["Ccedil",[199]],["ccedil",[231]],["Ccirc",[264]],["ccirc",[265]],["Cconint",[8752]],["ccups",[10828]],["ccupssm",[10832]],["Cdot",[266]],["cdot",[267]],["cedil",[184]],["Cedilla",[184]],["cemptyv",[10674]],["cent",[162]],["centerdot",[183]],["CenterDot",[183]],["cfr",[120096]],["Cfr",[8493]],["CHcy",[1063]],["chcy",[1095]],["check",[10003]],["checkmark",[10003]],["Chi",[935]],["chi",[967]],["circ",[710]],["circeq",[8791]],["circlearrowleft",[8634]],["circlearrowright",[8635]],["circledast",[8859]],["circledcirc",[8858]],["circleddash",[8861]],["CircleDot",[8857]],["circledR",[174]],["circledS",[9416]],["CircleMinus",[8854]],["CirclePlus",[8853]],["CircleTimes",[8855]],["cir",[9675]],["cirE",[10691]],["cire",[8791]],["cirfnint",[10768]],["cirmid",[10991]],["cirscir",[10690]],["ClockwiseContourIntegral",[8754]],["clubs",[9827]],["clubsuit",[9827]],["colon",[58]],["Colon",[8759]],["Colone",[10868]],["colone",[8788]],["coloneq",[8788]],["comma",[44]],["commat",[64]],["comp",[8705]],["compfn",[8728]],["complement",[8705]],["complexes",[8450]],["cong",[8773]],["congdot",[10861]],["Congruent",[8801]],["conint",[8750]],["Conint",[8751]],["ContourIntegral",[8750]],["copf",[120148]],["Copf",[8450]],["coprod",[8720]],["Coproduct",[8720]],["copy",[169]],["COPY",[169]],["copysr",[8471]],["CounterClockwiseContourIntegral",[8755]],["crarr",[8629]],["cross",[10007]],["Cross",[10799]],["Cscr",[119966]],["cscr",[119992]],["csub",[10959]],["csube",[10961]],["csup",[10960]],["csupe",[10962]],["ctdot",[8943]],["cudarrl",[10552]],["cudarrr",[10549]],["cuepr",[8926]],["cuesc",[8927]],["cularr",[8630]],["cularrp",[10557]],["cupbrcap",[10824]],["cupcap",[10822]],["CupCap",[8781]],["cup",[8746]],["Cup",[8915]],["cupcup",[10826]],["cupdot",[8845]],["cupor",[10821]],["cups",[8746,65024]],["curarr",[8631]],["curarrm",[10556]],["curlyeqprec",[8926]],["curlyeqsucc",[8927]],["curlyvee",[8910]],["curlywedge",[8911]],["curren",[164]],["curvearrowleft",[8630]],["curvearrowright",[8631]],["cuvee",[8910]],["cuwed",[8911]],["cwconint",[8754]],["cwint",[8753]],["cylcty",[9005]],["dagger",[8224]],["Dagger",[8225]],["daleth",[8504]],["darr",[8595]],["Darr",[8609]],["dArr",[8659]],["dash",[8208]],["Dashv",[10980]],["dashv",[8867]],["dbkarow",[10511]],["dblac",[733]],["Dcaron",[270]],["dcaron",[271]],["Dcy",[1044]],["dcy",[1076]],["ddagger",[8225]],["ddarr",[8650]],["DD",[8517]],["dd",[8518]],["DDotrahd",[10513]],["ddotseq",[10871]],["deg",[176]],["Del",[8711]],["Delta",[916]],["delta",[948]],["demptyv",[10673]],["dfisht",[10623]],["Dfr",[120071]],["dfr",[120097]],["dHar",[10597]],["dharl",[8643]],["dharr",[8642]],["DiacriticalAcute",[180]],["DiacriticalDot",[729]],["DiacriticalDoubleAcute",[733]],["DiacriticalGrave",[96]],["DiacriticalTilde",[732]],["diam",[8900]],["diamond",[8900]],["Diamond",[8900]],["diamondsuit",[9830]],["diams",[9830]],["die",[168]],["DifferentialD",[8518]],["digamma",[989]],["disin",[8946]],["div",[247]],["divide",[247]],["divideontimes",[8903]],["divonx",[8903]],["DJcy",[1026]],["djcy",[1106]],["dlcorn",[8990]],["dlcrop",[8973]],["dollar",[36]],["Dopf",[120123]],["dopf",[120149]],["Dot",[168]],["dot",[729]],["DotDot",[8412]],["doteq",[8784]],["doteqdot",[8785]],["DotEqual",[8784]],["dotminus",[8760]],["dotplus",[8724]],["dotsquare",[8865]],["doublebarwedge",[8966]],["DoubleContourIntegral",[8751]],["DoubleDot",[168]],["DoubleDownArrow",[8659]],["DoubleLeftArrow",[8656]],["DoubleLeftRightArrow",[8660]],["DoubleLeftTee",[10980]],["DoubleLongLeftArrow",[10232]],["DoubleLongLeftRightArrow",[10234]],["DoubleLongRightArrow",[10233]],["DoubleRightArrow",[8658]],["DoubleRightTee",[8872]],["DoubleUpArrow",[8657]],["DoubleUpDownArrow",[8661]],["DoubleVerticalBar",[8741]],["DownArrowBar",[10515]],["downarrow",[8595]],["DownArrow",[8595]],["Downarrow",[8659]],["DownArrowUpArrow",[8693]],["DownBreve",[785]],["downdownarrows",[8650]],["downharpoonleft",[8643]],["downharpoonright",[8642]],["DownLeftRightVector",[10576]],["DownLeftTeeVector",[10590]],["DownLeftVectorBar",[10582]],["DownLeftVector",[8637]],["DownRightTeeVector",[10591]],["DownRightVectorBar",[10583]],["DownRightVector",[8641]],["DownTeeArrow",[8615]],["DownTee",[8868]],["drbkarow",[10512]],["drcorn",[8991]],["drcrop",[8972]],["Dscr",[119967]],["dscr",[119993]],["DScy",[1029]],["dscy",[1109]],["dsol",[10742]],["Dstrok",[272]],["dstrok",[273]],["dtdot",[8945]],["dtri",[9663]],["dtrif",[9662]],["duarr",[8693]],["duhar",[10607]],["dwangle",[10662]],["DZcy",[1039]],["dzcy",[1119]],["dzigrarr",[10239]],["Eacute",[201]],["eacute",[233]],["easter",[10862]],["Ecaron",[282]],["ecaron",[283]],["Ecirc",[202]],["ecirc",[234]],["ecir",[8790]],["ecolon",[8789]],["Ecy",[1069]],["ecy",[1101]],["eDDot",[10871]],["Edot",[278]],["edot",[279]],["eDot",[8785]],["ee",[8519]],["efDot",[8786]],["Efr",[120072]],["efr",[120098]],["eg",[10906]],["Egrave",[200]],["egrave",[232]],["egs",[10902]],["egsdot",[10904]],["el",[10905]],["Element",[8712]],["elinters",[9191]],["ell",[8467]],["els",[10901]],["elsdot",[10903]],["Emacr",[274]],["emacr",[275]],["empty",[8709]],["emptyset",[8709]],["EmptySmallSquare",[9723]],["emptyv",[8709]],["EmptyVerySmallSquare",[9643]],["emsp13",[8196]],["emsp14",[8197]],["emsp",[8195]],["ENG",[330]],["eng",[331]],["ensp",[8194]],["Eogon",[280]],["eogon",[281]],["Eopf",[120124]],["eopf",[120150]],["epar",[8917]],["eparsl",[10723]],["eplus",[10865]],["epsi",[949]],["Epsilon",[917]],["epsilon",[949]],["epsiv",[1013]],["eqcirc",[8790]],["eqcolon",[8789]],["eqsim",[8770]],["eqslantgtr",[10902]],["eqslantless",[10901]],["Equal",[10869]],["equals",[61]],["EqualTilde",[8770]],["equest",[8799]],["Equilibrium",[8652]],["equiv",[8801]],["equivDD",[10872]],["eqvparsl",[10725]],["erarr",[10609]],["erDot",[8787]],["escr",[8495]],["Escr",[8496]],["esdot",[8784]],["Esim",[10867]],["esim",[8770]],["Eta",[919]],["eta",[951]],["ETH",[208]],["eth",[240]],["Euml",[203]],["euml",[235]],["euro",[8364]],["excl",[33]],["exist",[8707]],["Exists",[8707]],["expectation",[8496]],["exponentiale",[8519]],["ExponentialE",[8519]],["fallingdotseq",[8786]],["Fcy",[1060]],["fcy",[1092]],["female",[9792]],["ffilig",[64259]],["fflig",[64256]],["ffllig",[64260]],["Ffr",[120073]],["ffr",[120099]],["filig",[64257]],["FilledSmallSquare",[9724]],["FilledVerySmallSquare",[9642]],["fjlig",[102,106]],["flat",[9837]],["fllig",[64258]],["fltns",[9649]],["fnof",[402]],["Fopf",[120125]],["fopf",[120151]],["forall",[8704]],["ForAll",[8704]],["fork",[8916]],["forkv",[10969]],["Fouriertrf",[8497]],["fpartint",[10765]],["frac12",[189]],["frac13",[8531]],["frac14",[188]],["frac15",[8533]],["frac16",[8537]],["frac18",[8539]],["frac23",[8532]],["frac25",[8534]],["frac34",[190]],["frac35",[8535]],["frac38",[8540]],["frac45",[8536]],["frac56",[8538]],["frac58",[8541]],["frac78",[8542]],["frasl",[8260]],["frown",[8994]],["fscr",[119995]],["Fscr",[8497]],["gacute",[501]],["Gamma",[915]],["gamma",[947]],["Gammad",[988]],["gammad",[989]],["gap",[10886]],["Gbreve",[286]],["gbreve",[287]],["Gcedil",[290]],["Gcirc",[284]],["gcirc",[285]],["Gcy",[1043]],["gcy",[1075]],["Gdot",[288]],["gdot",[289]],["ge",[8805]],["gE",[8807]],["gEl",[10892]],["gel",[8923]],["geq",[8805]],["geqq",[8807]],["geqslant",[10878]],["gescc",[10921]],["ges",[10878]],["gesdot",[10880]],["gesdoto",[10882]],["gesdotol",[10884]],["gesl",[8923,65024]],["gesles",[10900]],["Gfr",[120074]],["gfr",[120100]],["gg",[8811]],["Gg",[8921]],["ggg",[8921]],["gimel",[8503]],["GJcy",[1027]],["gjcy",[1107]],["gla",[10917]],["gl",[8823]],["glE",[10898]],["glj",[10916]],["gnap",[10890]],["gnapprox",[10890]],["gne",[10888]],["gnE",[8809]],["gneq",[10888]],["gneqq",[8809]],["gnsim",[8935]],["Gopf",[120126]],["gopf",[120152]],["grave",[96]],["GreaterEqual",[8805]],["GreaterEqualLess",[8923]],["GreaterFullEqual",[8807]],["GreaterGreater",[10914]],["GreaterLess",[8823]],["GreaterSlantEqual",[10878]],["GreaterTilde",[8819]],["Gscr",[119970]],["gscr",[8458]],["gsim",[8819]],["gsime",[10894]],["gsiml",[10896]],["gtcc",[10919]],["gtcir",[10874]],["gt",[62]],["GT",[62]],["Gt",[8811]],["gtdot",[8919]],["gtlPar",[10645]],["gtquest",[10876]],["gtrapprox",[10886]],["gtrarr",[10616]],["gtrdot",[8919]],["gtreqless",[8923]],["gtreqqless",[10892]],["gtrless",[8823]],["gtrsim",[8819]],["gvertneqq",[8809,65024]],["gvnE",[8809,65024]],["Hacek",[711]],["hairsp",[8202]],["half",[189]],["hamilt",[8459]],["HARDcy",[1066]],["hardcy",[1098]],["harrcir",[10568]],["harr",[8596]],["hArr",[8660]],["harrw",[8621]],["Hat",[94]],["hbar",[8463]],["Hcirc",[292]],["hcirc",[293]],["hearts",[9829]],["heartsuit",[9829]],["hellip",[8230]],["hercon",[8889]],["hfr",[120101]],["Hfr",[8460]],["HilbertSpace",[8459]],["hksearow",[10533]],["hkswarow",[10534]],["hoarr",[8703]],["homtht",[8763]],["hookleftarrow",[8617]],["hookrightarrow",[8618]],["hopf",[120153]],["Hopf",[8461]],["horbar",[8213]],["HorizontalLine",[9472]],["hscr",[119997]],["Hscr",[8459]],["hslash",[8463]],["Hstrok",[294]],["hstrok",[295]],["HumpDownHump",[8782]],["HumpEqual",[8783]],["hybull",[8259]],["hyphen",[8208]],["Iacute",[205]],["iacute",[237]],["ic",[8291]],["Icirc",[206]],["icirc",[238]],["Icy",[1048]],["icy",[1080]],["Idot",[304]],["IEcy",[1045]],["iecy",[1077]],["iexcl",[161]],["iff",[8660]],["ifr",[120102]],["Ifr",[8465]],["Igrave",[204]],["igrave",[236]],["ii",[8520]],["iiiint",[10764]],["iiint",[8749]],["iinfin",[10716]],["iiota",[8489]],["IJlig",[306]],["ijlig",[307]],["Imacr",[298]],["imacr",[299]],["image",[8465]],["ImaginaryI",[8520]],["imagline",[8464]],["imagpart",[8465]],["imath",[305]],["Im",[8465]],["imof",[8887]],["imped",[437]],["Implies",[8658]],["incare",[8453]],["in",[8712]],["infin",[8734]],["infintie",[10717]],["inodot",[305]],["intcal",[8890]],["int",[8747]],["Int",[8748]],["integers",[8484]],["Integral",[8747]],["intercal",[8890]],["Intersection",[8898]],["intlarhk",[10775]],["intprod",[10812]],["InvisibleComma",[8291]],["InvisibleTimes",[8290]],["IOcy",[1025]],["iocy",[1105]],["Iogon",[302]],["iogon",[303]],["Iopf",[120128]],["iopf",[120154]],["Iota",[921]],["iota",[953]],["iprod",[10812]],["iquest",[191]],["iscr",[119998]],["Iscr",[8464]],["isin",[8712]],["isindot",[8949]],["isinE",[8953]],["isins",[8948]],["isinsv",[8947]],["isinv",[8712]],["it",[8290]],["Itilde",[296]],["itilde",[297]],["Iukcy",[1030]],["iukcy",[1110]],["Iuml",[207]],["iuml",[239]],["Jcirc",[308]],["jcirc",[309]],["Jcy",[1049]],["jcy",[1081]],["Jfr",[120077]],["jfr",[120103]],["jmath",[567]],["Jopf",[120129]],["jopf",[120155]],["Jscr",[119973]],["jscr",[119999]],["Jsercy",[1032]],["jsercy",[1112]],["Jukcy",[1028]],["jukcy",[1108]],["Kappa",[922]],["kappa",[954]],["kappav",[1008]],["Kcedil",[310]],["kcedil",[311]],["Kcy",[1050]],["kcy",[1082]],["Kfr",[120078]],["kfr",[120104]],["kgreen",[312]],["KHcy",[1061]],["khcy",[1093]],["KJcy",[1036]],["kjcy",[1116]],["Kopf",[120130]],["kopf",[120156]],["Kscr",[119974]],["kscr",[12e4]],["lAarr",[8666]],["Lacute",[313]],["lacute",[314]],["laemptyv",[10676]],["lagran",[8466]],["Lambda",[923]],["lambda",[955]],["lang",[10216]],["Lang",[10218]],["langd",[10641]],["langle",[10216]],["lap",[10885]],["Laplacetrf",[8466]],["laquo",[171]],["larrb",[8676]],["larrbfs",[10527]],["larr",[8592]],["Larr",[8606]],["lArr",[8656]],["larrfs",[10525]],["larrhk",[8617]],["larrlp",[8619]],["larrpl",[10553]],["larrsim",[10611]],["larrtl",[8610]],["latail",[10521]],["lAtail",[10523]],["lat",[10923]],["late",[10925]],["lates",[10925,65024]],["lbarr",[10508]],["lBarr",[10510]],["lbbrk",[10098]],["lbrace",[123]],["lbrack",[91]],["lbrke",[10635]],["lbrksld",[10639]],["lbrkslu",[10637]],["Lcaron",[317]],["lcaron",[318]],["Lcedil",[315]],["lcedil",[316]],["lceil",[8968]],["lcub",[123]],["Lcy",[1051]],["lcy",[1083]],["ldca",[10550]],["ldquo",[8220]],["ldquor",[8222]],["ldrdhar",[10599]],["ldrushar",[10571]],["ldsh",[8626]],["le",[8804]],["lE",[8806]],["LeftAngleBracket",[10216]],["LeftArrowBar",[8676]],["leftarrow",[8592]],["LeftArrow",[8592]],["Leftarrow",[8656]],["LeftArrowRightArrow",[8646]],["leftarrowtail",[8610]],["LeftCeiling",[8968]],["LeftDoubleBracket",[10214]],["LeftDownTeeVector",[10593]],["LeftDownVectorBar",[10585]],["LeftDownVector",[8643]],["LeftFloor",[8970]],["leftharpoondown",[8637]],["leftharpoonup",[8636]],["leftleftarrows",[8647]],["leftrightarrow",[8596]],["LeftRightArrow",[8596]],["Leftrightarrow",[8660]],["leftrightarrows",[8646]],["leftrightharpoons",[8651]],["leftrightsquigarrow",[8621]],["LeftRightVector",[10574]],["LeftTeeArrow",[8612]],["LeftTee",[8867]],["LeftTeeVector",[10586]],["leftthreetimes",[8907]],["LeftTriangleBar",[10703]],["LeftTriangle",[8882]],["LeftTriangleEqual",[8884]],["LeftUpDownVector",[10577]],["LeftUpTeeVector",[10592]],["LeftUpVectorBar",[10584]],["LeftUpVector",[8639]],["LeftVectorBar",[10578]],["LeftVector",[8636]],["lEg",[10891]],["leg",[8922]],["leq",[8804]],["leqq",[8806]],["leqslant",[10877]],["lescc",[10920]],["les",[10877]],["lesdot",[10879]],["lesdoto",[10881]],["lesdotor",[10883]],["lesg",[8922,65024]],["lesges",[10899]],["lessapprox",[10885]],["lessdot",[8918]],["lesseqgtr",[8922]],["lesseqqgtr",[10891]],["LessEqualGreater",[8922]],["LessFullEqual",[8806]],["LessGreater",[8822]],["lessgtr",[8822]],["LessLess",[10913]],["lesssim",[8818]],["LessSlantEqual",[10877]],["LessTilde",[8818]],["lfisht",[10620]],["lfloor",[8970]],["Lfr",[120079]],["lfr",[120105]],["lg",[8822]],["lgE",[10897]],["lHar",[10594]],["lhard",[8637]],["lharu",[8636]],["lharul",[10602]],["lhblk",[9604]],["LJcy",[1033]],["ljcy",[1113]],["llarr",[8647]],["ll",[8810]],["Ll",[8920]],["llcorner",[8990]],["Lleftarrow",[8666]],["llhard",[10603]],["lltri",[9722]],["Lmidot",[319]],["lmidot",[320]],["lmoustache",[9136]],["lmoust",[9136]],["lnap",[10889]],["lnapprox",[10889]],["lne",[10887]],["lnE",[8808]],["lneq",[10887]],["lneqq",[8808]],["lnsim",[8934]],["loang",[10220]],["loarr",[8701]],["lobrk",[10214]],["longleftarrow",[10229]],["LongLeftArrow",[10229]],["Longleftarrow",[10232]],["longleftrightarrow",[10231]],["LongLeftRightArrow",[10231]],["Longleftrightarrow",[10234]],["longmapsto",[10236]],["longrightarrow",[10230]],["LongRightArrow",[10230]],["Longrightarrow",[10233]],["looparrowleft",[8619]],["looparrowright",[8620]],["lopar",[10629]],["Lopf",[120131]],["lopf",[120157]],["loplus",[10797]],["lotimes",[10804]],["lowast",[8727]],["lowbar",[95]],["LowerLeftArrow",[8601]],["LowerRightArrow",[8600]],["loz",[9674]],["lozenge",[9674]],["lozf",[10731]],["lpar",[40]],["lparlt",[10643]],["lrarr",[8646]],["lrcorner",[8991]],["lrhar",[8651]],["lrhard",[10605]],["lrm",[8206]],["lrtri",[8895]],["lsaquo",[8249]],["lscr",[120001]],["Lscr",[8466]],["lsh",[8624]],["Lsh",[8624]],["lsim",[8818]],["lsime",[10893]],["lsimg",[10895]],["lsqb",[91]],["lsquo",[8216]],["lsquor",[8218]],["Lstrok",[321]],["lstrok",[322]],["ltcc",[10918]],["ltcir",[10873]],["lt",[60]],["LT",[60]],["Lt",[8810]],["ltdot",[8918]],["lthree",[8907]],["ltimes",[8905]],["ltlarr",[10614]],["ltquest",[10875]],["ltri",[9667]],["ltrie",[8884]],["ltrif",[9666]],["ltrPar",[10646]],["lurdshar",[10570]],["luruhar",[10598]],["lvertneqq",[8808,65024]],["lvnE",[8808,65024]],["macr",[175]],["male",[9794]],["malt",[10016]],["maltese",[10016]],["Map",[10501]],["map",[8614]],["mapsto",[8614]],["mapstodown",[8615]],["mapstoleft",[8612]],["mapstoup",[8613]],["marker",[9646]],["mcomma",[10793]],["Mcy",[1052]],["mcy",[1084]],["mdash",[8212]],["mDDot",[8762]],["measuredangle",[8737]],["MediumSpace",[8287]],["Mellintrf",[8499]],["Mfr",[120080]],["mfr",[120106]],["mho",[8487]],["micro",[181]],["midast",[42]],["midcir",[10992]],["mid",[8739]],["middot",[183]],["minusb",[8863]],["minus",[8722]],["minusd",[8760]],["minusdu",[10794]],["MinusPlus",[8723]],["mlcp",[10971]],["mldr",[8230]],["mnplus",[8723]],["models",[8871]],["Mopf",[120132]],["mopf",[120158]],["mp",[8723]],["mscr",[120002]],["Mscr",[8499]],["mstpos",[8766]],["Mu",[924]],["mu",[956]],["multimap",[8888]],["mumap",[8888]],["nabla",[8711]],["Nacute",[323]],["nacute",[324]],["nang",[8736,8402]],["nap",[8777]],["napE",[10864,824]],["napid",[8779,824]],["napos",[329]],["napprox",[8777]],["natural",[9838]],["naturals",[8469]],["natur",[9838]],["nbsp",[160]],["nbump",[8782,824]],["nbumpe",[8783,824]],["ncap",[10819]],["Ncaron",[327]],["ncaron",[328]],["Ncedil",[325]],["ncedil",[326]],["ncong",[8775]],["ncongdot",[10861,824]],["ncup",[10818]],["Ncy",[1053]],["ncy",[1085]],["ndash",[8211]],["nearhk",[10532]],["nearr",[8599]],["neArr",[8663]],["nearrow",[8599]],["ne",[8800]],["nedot",[8784,824]],["NegativeMediumSpace",[8203]],["NegativeThickSpace",[8203]],["NegativeThinSpace",[8203]],["NegativeVeryThinSpace",[8203]],["nequiv",[8802]],["nesear",[10536]],["nesim",[8770,824]],["NestedGreaterGreater",[8811]],["NestedLessLess",[8810]],["nexist",[8708]],["nexists",[8708]],["Nfr",[120081]],["nfr",[120107]],["ngE",[8807,824]],["nge",[8817]],["ngeq",[8817]],["ngeqq",[8807,824]],["ngeqslant",[10878,824]],["nges",[10878,824]],["nGg",[8921,824]],["ngsim",[8821]],["nGt",[8811,8402]],["ngt",[8815]],["ngtr",[8815]],["nGtv",[8811,824]],["nharr",[8622]],["nhArr",[8654]],["nhpar",[10994]],["ni",[8715]],["nis",[8956]],["nisd",[8954]],["niv",[8715]],["NJcy",[1034]],["njcy",[1114]],["nlarr",[8602]],["nlArr",[8653]],["nldr",[8229]],["nlE",[8806,824]],["nle",[8816]],["nleftarrow",[8602]],["nLeftarrow",[8653]],["nleftrightarrow",[8622]],["nLeftrightarrow",[8654]],["nleq",[8816]],["nleqq",[8806,824]],["nleqslant",[10877,824]],["nles",[10877,824]],["nless",[8814]],["nLl",[8920,824]],["nlsim",[8820]],["nLt",[8810,8402]],["nlt",[8814]],["nltri",[8938]],["nltrie",[8940]],["nLtv",[8810,824]],["nmid",[8740]],["NoBreak",[8288]],["NonBreakingSpace",[160]],["nopf",[120159]],["Nopf",[8469]],["Not",[10988]],["not",[172]],["NotCongruent",[8802]],["NotCupCap",[8813]],["NotDoubleVerticalBar",[8742]],["NotElement",[8713]],["NotEqual",[8800]],["NotEqualTilde",[8770,824]],["NotExists",[8708]],["NotGreater",[8815]],["NotGreaterEqual",[8817]],["NotGreaterFullEqual",[8807,824]],["NotGreaterGreater",[8811,824]],["NotGreaterLess",[8825]],["NotGreaterSlantEqual",[10878,824]],["NotGreaterTilde",[8821]],["NotHumpDownHump",[8782,824]],["NotHumpEqual",[8783,824]],["notin",[8713]],["notindot",[8949,824]],["notinE",[8953,824]],["notinva",[8713]],["notinvb",[8951]],["notinvc",[8950]],["NotLeftTriangleBar",[10703,824]],["NotLeftTriangle",[8938]],["NotLeftTriangleEqual",[8940]],["NotLess",[8814]],["NotLessEqual",[8816]],["NotLessGreater",[8824]],["NotLessLess",[8810,824]],["NotLessSlantEqual",[10877,824]],["NotLessTilde",[8820]],["NotNestedGreaterGreater",[10914,824]],["NotNestedLessLess",[10913,824]],["notni",[8716]],["notniva",[8716]],["notnivb",[8958]],["notnivc",[8957]],["NotPrecedes",[8832]],["NotPrecedesEqual",[10927,824]],["NotPrecedesSlantEqual",[8928]],["NotReverseElement",[8716]],["NotRightTriangleBar",[10704,824]],["NotRightTriangle",[8939]],["NotRightTriangleEqual",[8941]],["NotSquareSubset",[8847,824]],["NotSquareSubsetEqual",[8930]],["NotSquareSuperset",[8848,824]],["NotSquareSupersetEqual",[8931]],["NotSubset",[8834,8402]],["NotSubsetEqual",[8840]],["NotSucceeds",[8833]],["NotSucceedsEqual",[10928,824]],["NotSucceedsSlantEqual",[8929]],["NotSucceedsTilde",[8831,824]],["NotSuperset",[8835,8402]],["NotSupersetEqual",[8841]],["NotTilde",[8769]],["NotTildeEqual",[8772]],["NotTildeFullEqual",[8775]],["NotTildeTilde",[8777]],["NotVerticalBar",[8740]],["nparallel",[8742]],["npar",[8742]],["nparsl",[11005,8421]],["npart",[8706,824]],["npolint",[10772]],["npr",[8832]],["nprcue",[8928]],["nprec",[8832]],["npreceq",[10927,824]],["npre",[10927,824]],["nrarrc",[10547,824]],["nrarr",[8603]],["nrArr",[8655]],["nrarrw",[8605,824]],["nrightarrow",[8603]],["nRightarrow",[8655]],["nrtri",[8939]],["nrtrie",[8941]],["nsc",[8833]],["nsccue",[8929]],["nsce",[10928,824]],["Nscr",[119977]],["nscr",[120003]],["nshortmid",[8740]],["nshortparallel",[8742]],["nsim",[8769]],["nsime",[8772]],["nsimeq",[8772]],["nsmid",[8740]],["nspar",[8742]],["nsqsube",[8930]],["nsqsupe",[8931]],["nsub",[8836]],["nsubE",[10949,824]],["nsube",[8840]],["nsubset",[8834,8402]],["nsubseteq",[8840]],["nsubseteqq",[10949,824]],["nsucc",[8833]],["nsucceq",[10928,824]],["nsup",[8837]],["nsupE",[10950,824]],["nsupe",[8841]],["nsupset",[8835,8402]],["nsupseteq",[8841]],["nsupseteqq",[10950,824]],["ntgl",[8825]],["Ntilde",[209]],["ntilde",[241]],["ntlg",[8824]],["ntriangleleft",[8938]],["ntrianglelefteq",[8940]],["ntriangleright",[8939]],["ntrianglerighteq",[8941]],["Nu",[925]],["nu",[957]],["num",[35]],["numero",[8470]],["numsp",[8199]],["nvap",[8781,8402]],["nvdash",[8876]],["nvDash",[8877]],["nVdash",[8878]],["nVDash",[8879]],["nvge",[8805,8402]],["nvgt",[62,8402]],["nvHarr",[10500]],["nvinfin",[10718]],["nvlArr",[10498]],["nvle",[8804,8402]],["nvlt",[60,8402]],["nvltrie",[8884,8402]],["nvrArr",[10499]],["nvrtrie",[8885,8402]],["nvsim",[8764,8402]],["nwarhk",[10531]],["nwarr",[8598]],["nwArr",[8662]],["nwarrow",[8598]],["nwnear",[10535]],["Oacute",[211]],["oacute",[243]],["oast",[8859]],["Ocirc",[212]],["ocirc",[244]],["ocir",[8858]],["Ocy",[1054]],["ocy",[1086]],["odash",[8861]],["Odblac",[336]],["odblac",[337]],["odiv",[10808]],["odot",[8857]],["odsold",[10684]],["OElig",[338]],["oelig",[339]],["ofcir",[10687]],["Ofr",[120082]],["ofr",[120108]],["ogon",[731]],["Ograve",[210]],["ograve",[242]],["ogt",[10689]],["ohbar",[10677]],["ohm",[937]],["oint",[8750]],["olarr",[8634]],["olcir",[10686]],["olcross",[10683]],["oline",[8254]],["olt",[10688]],["Omacr",[332]],["omacr",[333]],["Omega",[937]],["omega",[969]],["Omicron",[927]],["omicron",[959]],["omid",[10678]],["ominus",[8854]],["Oopf",[120134]],["oopf",[120160]],["opar",[10679]],["OpenCurlyDoubleQuote",[8220]],["OpenCurlyQuote",[8216]],["operp",[10681]],["oplus",[8853]],["orarr",[8635]],["Or",[10836]],["or",[8744]],["ord",[10845]],["order",[8500]],["orderof",[8500]],["ordf",[170]],["ordm",[186]],["origof",[8886]],["oror",[10838]],["orslope",[10839]],["orv",[10843]],["oS",[9416]],["Oscr",[119978]],["oscr",[8500]],["Oslash",[216]],["oslash",[248]],["osol",[8856]],["Otilde",[213]],["otilde",[245]],["otimesas",[10806]],["Otimes",[10807]],["otimes",[8855]],["Ouml",[214]],["ouml",[246]],["ovbar",[9021]],["OverBar",[8254]],["OverBrace",[9182]],["OverBracket",[9140]],["OverParenthesis",[9180]],["para",[182]],["parallel",[8741]],["par",[8741]],["parsim",[10995]],["parsl",[11005]],["part",[8706]],["PartialD",[8706]],["Pcy",[1055]],["pcy",[1087]],["percnt",[37]],["period",[46]],["permil",[8240]],["perp",[8869]],["pertenk",[8241]],["Pfr",[120083]],["pfr",[120109]],["Phi",[934]],["phi",[966]],["phiv",[981]],["phmmat",[8499]],["phone",[9742]],["Pi",[928]],["pi",[960]],["pitchfork",[8916]],["piv",[982]],["planck",[8463]],["planckh",[8462]],["plankv",[8463]],["plusacir",[10787]],["plusb",[8862]],["pluscir",[10786]],["plus",[43]],["plusdo",[8724]],["plusdu",[10789]],["pluse",[10866]],["PlusMinus",[177]],["plusmn",[177]],["plussim",[10790]],["plustwo",[10791]],["pm",[177]],["Poincareplane",[8460]],["pointint",[10773]],["popf",[120161]],["Popf",[8473]],["pound",[163]],["prap",[10935]],["Pr",[10939]],["pr",[8826]],["prcue",[8828]],["precapprox",[10935]],["prec",[8826]],["preccurlyeq",[8828]],["Precedes",[8826]],["PrecedesEqual",[10927]],["PrecedesSlantEqual",[8828]],["PrecedesTilde",[8830]],["preceq",[10927]],["precnapprox",[10937]],["precneqq",[10933]],["precnsim",[8936]],["pre",[10927]],["prE",[10931]],["precsim",[8830]],["prime",[8242]],["Prime",[8243]],["primes",[8473]],["prnap",[10937]],["prnE",[10933]],["prnsim",[8936]],["prod",[8719]],["Product",[8719]],["profalar",[9006]],["profline",[8978]],["profsurf",[8979]],["prop",[8733]],["Proportional",[8733]],["Proportion",[8759]],["propto",[8733]],["prsim",[8830]],["prurel",[8880]],["Pscr",[119979]],["pscr",[120005]],["Psi",[936]],["psi",[968]],["puncsp",[8200]],["Qfr",[120084]],["qfr",[120110]],["qint",[10764]],["qopf",[120162]],["Qopf",[8474]],["qprime",[8279]],["Qscr",[119980]],["qscr",[120006]],["quaternions",[8461]],["quatint",[10774]],["quest",[63]],["questeq",[8799]],["quot",[34]],["QUOT",[34]],["rAarr",[8667]],["race",[8765,817]],["Racute",[340]],["racute",[341]],["radic",[8730]],["raemptyv",[10675]],["rang",[10217]],["Rang",[10219]],["rangd",[10642]],["range",[10661]],["rangle",[10217]],["raquo",[187]],["rarrap",[10613]],["rarrb",[8677]],["rarrbfs",[10528]],["rarrc",[10547]],["rarr",[8594]],["Rarr",[8608]],["rArr",[8658]],["rarrfs",[10526]],["rarrhk",[8618]],["rarrlp",[8620]],["rarrpl",[10565]],["rarrsim",[10612]],["Rarrtl",[10518]],["rarrtl",[8611]],["rarrw",[8605]],["ratail",[10522]],["rAtail",[10524]],["ratio",[8758]],["rationals",[8474]],["rbarr",[10509]],["rBarr",[10511]],["RBarr",[10512]],["rbbrk",[10099]],["rbrace",[125]],["rbrack",[93]],["rbrke",[10636]],["rbrksld",[10638]],["rbrkslu",[10640]],["Rcaron",[344]],["rcaron",[345]],["Rcedil",[342]],["rcedil",[343]],["rceil",[8969]],["rcub",[125]],["Rcy",[1056]],["rcy",[1088]],["rdca",[10551]],["rdldhar",[10601]],["rdquo",[8221]],["rdquor",[8221]],["CloseCurlyDoubleQuote",[8221]],["rdsh",[8627]],["real",[8476]],["realine",[8475]],["realpart",[8476]],["reals",[8477]],["Re",[8476]],["rect",[9645]],["reg",[174]],["REG",[174]],["ReverseElement",[8715]],["ReverseEquilibrium",[8651]],["ReverseUpEquilibrium",[10607]],["rfisht",[10621]],["rfloor",[8971]],["rfr",[120111]],["Rfr",[8476]],["rHar",[10596]],["rhard",[8641]],["rharu",[8640]],["rharul",[10604]],["Rho",[929]],["rho",[961]],["rhov",[1009]],["RightAngleBracket",[10217]],["RightArrowBar",[8677]],["rightarrow",[8594]],["RightArrow",[8594]],["Rightarrow",[8658]],["RightArrowLeftArrow",[8644]],["rightarrowtail",[8611]],["RightCeiling",[8969]],["RightDoubleBracket",[10215]],["RightDownTeeVector",[10589]],["RightDownVectorBar",[10581]],["RightDownVector",[8642]],["RightFloor",[8971]],["rightharpoondown",[8641]],["rightharpoonup",[8640]],["rightleftarrows",[8644]],["rightleftharpoons",[8652]],["rightrightarrows",[8649]],["rightsquigarrow",[8605]],["RightTeeArrow",[8614]],["RightTee",[8866]],["RightTeeVector",[10587]],["rightthreetimes",[8908]],["RightTriangleBar",[10704]],["RightTriangle",[8883]],["RightTriangleEqual",[8885]],["RightUpDownVector",[10575]],["RightUpTeeVector",[10588]],["RightUpVectorBar",[10580]],["RightUpVector",[8638]],["RightVectorBar",[10579]],["RightVector",[8640]],["ring",[730]],["risingdotseq",[8787]],["rlarr",[8644]],["rlhar",[8652]],["rlm",[8207]],["rmoustache",[9137]],["rmoust",[9137]],["rnmid",[10990]],["roang",[10221]],["roarr",[8702]],["robrk",[10215]],["ropar",[10630]],["ropf",[120163]],["Ropf",[8477]],["roplus",[10798]],["rotimes",[10805]],["RoundImplies",[10608]],["rpar",[41]],["rpargt",[10644]],["rppolint",[10770]],["rrarr",[8649]],["Rrightarrow",[8667]],["rsaquo",[8250]],["rscr",[120007]],["Rscr",[8475]],["rsh",[8625]],["Rsh",[8625]],["rsqb",[93]],["rsquo",[8217]],["rsquor",[8217]],["CloseCurlyQuote",[8217]],["rthree",[8908]],["rtimes",[8906]],["rtri",[9657]],["rtrie",[8885]],["rtrif",[9656]],["rtriltri",[10702]],["RuleDelayed",[10740]],["ruluhar",[10600]],["rx",[8478]],["Sacute",[346]],["sacute",[347]],["sbquo",[8218]],["scap",[10936]],["Scaron",[352]],["scaron",[353]],["Sc",[10940]],["sc",[8827]],["sccue",[8829]],["sce",[10928]],["scE",[10932]],["Scedil",[350]],["scedil",[351]],["Scirc",[348]],["scirc",[349]],["scnap",[10938]],["scnE",[10934]],["scnsim",[8937]],["scpolint",[10771]],["scsim",[8831]],["Scy",[1057]],["scy",[1089]],["sdotb",[8865]],["sdot",[8901]],["sdote",[10854]],["searhk",[10533]],["searr",[8600]],["seArr",[8664]],["searrow",[8600]],["sect",[167]],["semi",[59]],["seswar",[10537]],["setminus",[8726]],["setmn",[8726]],["sext",[10038]],["Sfr",[120086]],["sfr",[120112]],["sfrown",[8994]],["sharp",[9839]],["SHCHcy",[1065]],["shchcy",[1097]],["SHcy",[1064]],["shcy",[1096]],["ShortDownArrow",[8595]],["ShortLeftArrow",[8592]],["shortmid",[8739]],["shortparallel",[8741]],["ShortRightArrow",[8594]],["ShortUpArrow",[8593]],["shy",[173]],["Sigma",[931]],["sigma",[963]],["sigmaf",[962]],["sigmav",[962]],["sim",[8764]],["simdot",[10858]],["sime",[8771]],["simeq",[8771]],["simg",[10910]],["simgE",[10912]],["siml",[10909]],["simlE",[10911]],["simne",[8774]],["simplus",[10788]],["simrarr",[10610]],["slarr",[8592]],["SmallCircle",[8728]],["smallsetminus",[8726]],["smashp",[10803]],["smeparsl",[10724]],["smid",[8739]],["smile",[8995]],["smt",[10922]],["smte",[10924]],["smtes",[10924,65024]],["SOFTcy",[1068]],["softcy",[1100]],["solbar",[9023]],["solb",[10692]],["sol",[47]],["Sopf",[120138]],["sopf",[120164]],["spades",[9824]],["spadesuit",[9824]],["spar",[8741]],["sqcap",[8851]],["sqcaps",[8851,65024]],["sqcup",[8852]],["sqcups",[8852,65024]],["Sqrt",[8730]],["sqsub",[8847]],["sqsube",[8849]],["sqsubset",[8847]],["sqsubseteq",[8849]],["sqsup",[8848]],["sqsupe",[8850]],["sqsupset",[8848]],["sqsupseteq",[8850]],["square",[9633]],["Square",[9633]],["SquareIntersection",[8851]],["SquareSubset",[8847]],["SquareSubsetEqual",[8849]],["SquareSuperset",[8848]],["SquareSupersetEqual",[8850]],["SquareUnion",[8852]],["squarf",[9642]],["squ",[9633]],["squf",[9642]],["srarr",[8594]],["Sscr",[119982]],["sscr",[120008]],["ssetmn",[8726]],["ssmile",[8995]],["sstarf",[8902]],["Star",[8902]],["star",[9734]],["starf",[9733]],["straightepsilon",[1013]],["straightphi",[981]],["strns",[175]],["sub",[8834]],["Sub",[8912]],["subdot",[10941]],["subE",[10949]],["sube",[8838]],["subedot",[10947]],["submult",[10945]],["subnE",[10955]],["subne",[8842]],["subplus",[10943]],["subrarr",[10617]],["subset",[8834]],["Subset",[8912]],["subseteq",[8838]],["subseteqq",[10949]],["SubsetEqual",[8838]],["subsetneq",[8842]],["subsetneqq",[10955]],["subsim",[10951]],["subsub",[10965]],["subsup",[10963]],["succapprox",[10936]],["succ",[8827]],["succcurlyeq",[8829]],["Succeeds",[8827]],["SucceedsEqual",[10928]],["SucceedsSlantEqual",[8829]],["SucceedsTilde",[8831]],["succeq",[10928]],["succnapprox",[10938]],["succneqq",[10934]],["succnsim",[8937]],["succsim",[8831]],["SuchThat",[8715]],["sum",[8721]],["Sum",[8721]],["sung",[9834]],["sup1",[185]],["sup2",[178]],["sup3",[179]],["sup",[8835]],["Sup",[8913]],["supdot",[10942]],["supdsub",[10968]],["supE",[10950]],["supe",[8839]],["supedot",[10948]],["Superset",[8835]],["SupersetEqual",[8839]],["suphsol",[10185]],["suphsub",[10967]],["suplarr",[10619]],["supmult",[10946]],["supnE",[10956]],["supne",[8843]],["supplus",[10944]],["supset",[8835]],["Supset",[8913]],["supseteq",[8839]],["supseteqq",[10950]],["supsetneq",[8843]],["supsetneqq",[10956]],["supsim",[10952]],["supsub",[10964]],["supsup",[10966]],["swarhk",[10534]],["swarr",[8601]],["swArr",[8665]],["swarrow",[8601]],["swnwar",[10538]],["szlig",[223]],["Tab",[9]],["target",[8982]],["Tau",[932]],["tau",[964]],["tbrk",[9140]],["Tcaron",[356]],["tcaron",[357]],["Tcedil",[354]],["tcedil",[355]],["Tcy",[1058]],["tcy",[1090]],["tdot",[8411]],["telrec",[8981]],["Tfr",[120087]],["tfr",[120113]],["there4",[8756]],["therefore",[8756]],["Therefore",[8756]],["Theta",[920]],["theta",[952]],["thetasym",[977]],["thetav",[977]],["thickapprox",[8776]],["thicksim",[8764]],["ThickSpace",[8287,8202]],["ThinSpace",[8201]],["thinsp",[8201]],["thkap",[8776]],["thksim",[8764]],["THORN",[222]],["thorn",[254]],["tilde",[732]],["Tilde",[8764]],["TildeEqual",[8771]],["TildeFullEqual",[8773]],["TildeTilde",[8776]],["timesbar",[10801]],["timesb",[8864]],["times",[215]],["timesd",[10800]],["tint",[8749]],["toea",[10536]],["topbot",[9014]],["topcir",[10993]],["top",[8868]],["Topf",[120139]],["topf",[120165]],["topfork",[10970]],["tosa",[10537]],["tprime",[8244]],["trade",[8482]],["TRADE",[8482]],["triangle",[9653]],["triangledown",[9663]],["triangleleft",[9667]],["trianglelefteq",[8884]],["triangleq",[8796]],["triangleright",[9657]],["trianglerighteq",[8885]],["tridot",[9708]],["trie",[8796]],["triminus",[10810]],["TripleDot",[8411]],["triplus",[10809]],["trisb",[10701]],["tritime",[10811]],["trpezium",[9186]],["Tscr",[119983]],["tscr",[120009]],["TScy",[1062]],["tscy",[1094]],["TSHcy",[1035]],["tshcy",[1115]],["Tstrok",[358]],["tstrok",[359]],["twixt",[8812]],["twoheadleftarrow",[8606]],["twoheadrightarrow",[8608]],["Uacute",[218]],["uacute",[250]],["uarr",[8593]],["Uarr",[8607]],["uArr",[8657]],["Uarrocir",[10569]],["Ubrcy",[1038]],["ubrcy",[1118]],["Ubreve",[364]],["ubreve",[365]],["Ucirc",[219]],["ucirc",[251]],["Ucy",[1059]],["ucy",[1091]],["udarr",[8645]],["Udblac",[368]],["udblac",[369]],["udhar",[10606]],["ufisht",[10622]],["Ufr",[120088]],["ufr",[120114]],["Ugrave",[217]],["ugrave",[249]],["uHar",[10595]],["uharl",[8639]],["uharr",[8638]],["uhblk",[9600]],["ulcorn",[8988]],["ulcorner",[8988]],["ulcrop",[8975]],["ultri",[9720]],["Umacr",[362]],["umacr",[363]],["uml",[168]],["UnderBar",[95]],["UnderBrace",[9183]],["UnderBracket",[9141]],["UnderParenthesis",[9181]],["Union",[8899]],["UnionPlus",[8846]],["Uogon",[370]],["uogon",[371]],["Uopf",[120140]],["uopf",[120166]],["UpArrowBar",[10514]],["uparrow",[8593]],["UpArrow",[8593]],["Uparrow",[8657]],["UpArrowDownArrow",[8645]],["updownarrow",[8597]],["UpDownArrow",[8597]],["Updownarrow",[8661]],["UpEquilibrium",[10606]],["upharpoonleft",[8639]],["upharpoonright",[8638]],["uplus",[8846]],["UpperLeftArrow",[8598]],["UpperRightArrow",[8599]],["upsi",[965]],["Upsi",[978]],["upsih",[978]],["Upsilon",[933]],["upsilon",[965]],["UpTeeArrow",[8613]],["UpTee",[8869]],["upuparrows",[8648]],["urcorn",[8989]],["urcorner",[8989]],["urcrop",[8974]],["Uring",[366]],["uring",[367]],["urtri",[9721]],["Uscr",[119984]],["uscr",[120010]],["utdot",[8944]],["Utilde",[360]],["utilde",[361]],["utri",[9653]],["utrif",[9652]],["uuarr",[8648]],["Uuml",[220]],["uuml",[252]],["uwangle",[10663]],["vangrt",[10652]],["varepsilon",[1013]],["varkappa",[1008]],["varnothing",[8709]],["varphi",[981]],["varpi",[982]],["varpropto",[8733]],["varr",[8597]],["vArr",[8661]],["varrho",[1009]],["varsigma",[962]],["varsubsetneq",[8842,65024]],["varsubsetneqq",[10955,65024]],["varsupsetneq",[8843,65024]],["varsupsetneqq",[10956,65024]],["vartheta",[977]],["vartriangleleft",[8882]],["vartriangleright",[8883]],["vBar",[10984]],["Vbar",[10987]],["vBarv",[10985]],["Vcy",[1042]],["vcy",[1074]],["vdash",[8866]],["vDash",[8872]],["Vdash",[8873]],["VDash",[8875]],["Vdashl",[10982]],["veebar",[8891]],["vee",[8744]],["Vee",[8897]],["veeeq",[8794]],["vellip",[8942]],["verbar",[124]],["Verbar",[8214]],["vert",[124]],["Vert",[8214]],["VerticalBar",[8739]],["VerticalLine",[124]],["VerticalSeparator",[10072]],["VerticalTilde",[8768]],["VeryThinSpace",[8202]],["Vfr",[120089]],["vfr",[120115]],["vltri",[8882]],["vnsub",[8834,8402]],["vnsup",[8835,8402]],["Vopf",[120141]],["vopf",[120167]],["vprop",[8733]],["vrtri",[8883]],["Vscr",[119985]],["vscr",[120011]],["vsubnE",[10955,65024]],["vsubne",[8842,65024]],["vsupnE",[10956,65024]],["vsupne",[8843,65024]],["Vvdash",[8874]],["vzigzag",[10650]],["Wcirc",[372]],["wcirc",[373]],["wedbar",[10847]],["wedge",[8743]],["Wedge",[8896]],["wedgeq",[8793]],["weierp",[8472]],["Wfr",[120090]],["wfr",[120116]],["Wopf",[120142]],["wopf",[120168]],["wp",[8472]],["wr",[8768]],["wreath",[8768]],["Wscr",[119986]],["wscr",[120012]],["xcap",[8898]],["xcirc",[9711]],["xcup",[8899]],["xdtri",[9661]],["Xfr",[120091]],["xfr",[120117]],["xharr",[10231]],["xhArr",[10234]],["Xi",[926]],["xi",[958]],["xlarr",[10229]],["xlArr",[10232]],["xmap",[10236]],["xnis",[8955]],["xodot",[10752]],["Xopf",[120143]],["xopf",[120169]],["xoplus",[10753]],["xotime",[10754]],["xrarr",[10230]],["xrArr",[10233]],["Xscr",[119987]],["xscr",[120013]],["xsqcup",[10758]],["xuplus",[10756]],["xutri",[9651]],["xvee",[8897]],["xwedge",[8896]],["Yacute",[221]],["yacute",[253]],["YAcy",[1071]],["yacy",[1103]],["Ycirc",[374]],["ycirc",[375]],["Ycy",[1067]],["ycy",[1099]],["yen",[165]],["Yfr",[120092]],["yfr",[120118]],["YIcy",[1031]],["yicy",[1111]],["Yopf",[120144]],["yopf",[120170]],["Yscr",[119988]],["yscr",[120014]],["YUcy",[1070]],["yucy",[1102]],["yuml",[255]],["Yuml",[376]],["Zacute",[377]],["zacute",[378]],["Zcaron",[381]],["zcaron",[382]],["Zcy",[1047]],["zcy",[1079]],["Zdot",[379]],["zdot",[380]],["zeetrf",[8488]],["ZeroWidthSpace",[8203]],["Zeta",[918]],["zeta",[950]],["zfr",[120119]],["Zfr",[8488]],["ZHcy",[1046]],["zhcy",[1078]],["zigrarr",[8669]],["zopf",[120171]],["Zopf",[8484]],["Zscr",[119989]],["zscr",[120015]],["zwj",[8205]],["zwnj",[8204]]],o={},a={};!function(e,t){var r=n.length;for(;r--;){var o=n[r],a=o[0],i=o[1],l=i[0],u=l<32||l>126||62===l||60===l||38===l||34===l||39===l,c=void 0;if(u&&(c=t[l]=t[l]||{}),i[1]){var s=i[1];e[a]=String.fromCharCode(l)+String.fromCharCode(s),u&&(c[s]=a)}else e[a]=String.fromCharCode(l),u&&(c[""]=a)}}(o,a);var i=function(){function e(){}return e.prototype.decode=function(e){return e&&e.length?e.replace(/&(#?[\\w\\d]+);?/g,(function(e,t){var r;if("#"===t.charAt(0)){var n="x"===t.charAt(1)?parseInt(t.substr(2).toLowerCase(),16):parseInt(t.substr(1));isNaN(n)||n<-32768||n>65535||(r=String.fromCharCode(n))}else r=o[t];return r||e})):""},e.decode=function(t){return(new e).decode(t)},e.prototype.encode=function(e){if(!e||!e.length)return"";for(var t=e.length,r="",n=0;n<t;){var o=a[e.charCodeAt(n)];if(o){var i=o[e.charCodeAt(n+1)];if(i?n++:i=o[""],i){r+="&"+i+";",n++;continue}}r+=e.charAt(n),n++}return r},e.encode=function(t){return(new e).encode(t)},e.prototype.encodeNonUTF=function(e){if(!e||!e.length)return"";for(var t=e.length,r="",n=0;n<t;){var o=e.charCodeAt(n),i=a[o];if(i){var l=i[e.charCodeAt(n+1)];if(l?n++:l=i[""],l){r+="&"+l+";",n++;continue}}r+=o<32||o>126?"&#"+o+";":e.charAt(n),n++}return r},e.encodeNonUTF=function(t){return(new e).encodeNonUTF(t)},e.prototype.encodeNonASCII=function(e){if(!e||!e.length)return"";for(var t=e.length,r="",n=0;n<t;){var o=e.charCodeAt(n);o<=255?r+=e[n++]:(r+="&#"+o+";",n++)}return r},e.encodeNonASCII=function(t){return(new e).encodeNonASCII(t)},e}();t.Html5Entities=i},function(e,t,r){"use strict";var n=r(52),o=r(193);Object.defineProperty(t,"__esModule",{value:!0}),t.shouldHighlight=b,t.getChalk=w,t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(b(t)){var r=w(t),n=f(r);return y(n,e)}return e};var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(195)),l=r(196),u=(a=r(199))&&a.__esModule?a:{default:a};function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}var s=new Set(["as","async","from","get","of","set"]);function f(e){return{keyword:e.cyan,capitalized:e.yellow,jsxIdentifier:e.yellow,punctuator:e.yellow,number:e.magenta,string:e.green,regex:e.magenta,comment:e.grey,invalid:e.white.bgRed.bold}}var d,p=/\\r\\n|[\\n\\r\\u2028\\u2029]/,h=/^[()[\\]{}]$/,g=i.matchToToken,v=/^[a-z][\\w-]*$/i,m=function(e,t,r){if("name"===e.type){if((0,l.isKeyword)(e.value)||(0,l.isStrictReservedWord)(e.value,!0)||s.has(e.value))return"keyword";if(v.test(e.value)&&("<"===r[t-1]||"</"==r.substr(t-2,2)))return"jsxIdentifier";if(e.value[0]!==e.value[0].toLowerCase())return"capitalized"}return"punctuator"===e.type&&h.test(e.value)?"bracket":"invalid"!==e.type||"@"!==e.value&&"#"!==e.value?e.type:"punctuator"};function y(e,t){var r,o="",a=n(d(t));try{var i=function(){var t=r.value,n=t.type,a=t.value,i=e[n];o+=i?a.split(p).map((function(e){return i(e)})).join("\\n"):a};for(a.s();!(r=a.n()).done;)i()}catch(e){a.e(e)}finally{a.f()}return o}function b(e){return u.default.supportsColor||e.forceColor}function w(e){var t=u.default;return e.forceColor&&(t=new u.default.constructor({enabled:!0,level:1})),t}d=o.mark((function e(t){var r,n;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=i.default.exec(t))){e.next=6;break}return n=g(r),e.next=4,{type:m(n,r.index,t),value:n.value};case 4:e.next=0;break;case 6:case"end":return e.stop()}}),e)}))},function(e,t,r){var n=r(192);e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},function(e,t,r){e.exports=r(194)},function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(e,t,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw a;return R()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=_(i,r);if(l){if(l===g)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=s(e,t,r);if("normal"===u.type){if(n=r.done?h:d,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=h,r.method="throw",r.arg=u.arg)}}}(e,r,i),a}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",g={};function v(){}function m(){}function y(){}var b={};b[a]=function(){return this};var w=Object.getPrototypeOf,k=w&&w(w(P([])));k&&k!==r&&n.call(k,a)&&(b=k);var E=y.prototype=v.prototype=Object.create(b);function x(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function r(o,a,i,l){var u=s(e[o],e,a);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"===typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(f).then((function(e){c.value=e,i(c)}),(function(e){return r("throw",e,i,l)}))}l(u.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function _(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a \'throw\' method")}return g}var o=s(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function P(e){if(e){var r=e[a];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:R}}function R(){return{value:t,done:!0}}return m.prototype=E.constructor=y,y.constructor=m,m.displayName=u(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,l,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},x(S.prototype),S.prototype[i]=function(){return this},e.AsyncIterator=S,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new S(c(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},x(E),u(E,l,"Generator"),E[a]=function(){return this},E.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=P,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return l.type="throw",l.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),C(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}(e.exports);try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=/(([\'"])(?:(?!\\2|\\\\).|\\\\(?:\\r\\n|[\\s\\S]))*(\\2)?|`(?:[^`\\\\$]|\\\\[\\s\\S]|\\$(?!\\{)|\\$\\{(?:[^{}]|\\{[^}]*\\}?)*\\}?)*(`)?)|(\\/\\/.*)|(\\/\\*(?:[^*]|\\*(?!\\/))*(\\*\\/)?)|(\\/(?!\\*)(?:\\[(?:(?![\\]\\\\]).|\\\\.)*\\]|(?![\\/\\]\\\\]).|\\\\.)+\\/(?:(?!\\s*(?:\\b|[\\u0080-\\uFFFF$\\\\\'"~({]|[+\\-!](?!=)|\\.?\\d))|[gmiyus]{1,6}\\b(?![\\u0080-\\uFFFF$\\\\]|\\s*(?:[+\\-*%&|^<>!=?({]|\\/(?![\\/*])))))|(0[xX][\\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][+-]?\\d+)?)|((?!\\d)(?:(?!\\s)[$\\w\\u0080-\\uFFFF]|\\\\u[\\da-fA-F]{4}|\\\\u\\{[\\da-fA-F]+\\})+)|(--|\\+\\+|&&|\\|\\||=>|\\.{3}|(?:[+\\-\\/%&|^]|\\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\\](){}])|(\\s+)|(^$|[\\s\\S])/g,t.matchToToken=function(e){var t={type:"invalid",value:e[0],closed:void 0};return e[1]?(t.type="string",t.closed=!(!e[3]&&!e[4])):e[5]?t.type="comment":e[6]?(t.type="comment",t.closed=!!e[7]):e[8]?t.type="regex":e[9]?t.type="number":e[10]?t.type="name":e[11]?t.type="punctuator":e[12]&&(t.type="whitespace"),t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isIdentifierName",{enumerable:!0,get:function(){return n.isIdentifierName}}),Object.defineProperty(t,"isIdentifierChar",{enumerable:!0,get:function(){return n.isIdentifierChar}}),Object.defineProperty(t,"isIdentifierStart",{enumerable:!0,get:function(){return n.isIdentifierStart}}),Object.defineProperty(t,"isReservedWord",{enumerable:!0,get:function(){return o.isReservedWord}}),Object.defineProperty(t,"isStrictBindOnlyReservedWord",{enumerable:!0,get:function(){return o.isStrictBindOnlyReservedWord}}),Object.defineProperty(t,"isStrictBindReservedWord",{enumerable:!0,get:function(){return o.isStrictBindReservedWord}}),Object.defineProperty(t,"isStrictReservedWord",{enumerable:!0,get:function(){return o.isStrictReservedWord}}),Object.defineProperty(t,"isKeyword",{enumerable:!0,get:function(){return o.isKeyword}});var n=r(197),o=r(198)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isIdentifierStart=s,t.isIdentifierChar=f,t.isIdentifierName=function(e){for(var t=!0,r=0,n=Array.from(e);r<n.length;r++){var o=n[r].codePointAt(0);if(t){if(!s(o))return!1;t=!1}else if(!f(o))return!1}return!t};var n="\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",o="‌‍\xb7̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",a=new RegExp("["+n+"]"),i=new RegExp("["+n+o+"]");n=o=null;var l=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,349,41,7,1,79,28,11,0,9,21,107,20,28,22,13,52,76,44,33,24,27,35,30,0,3,0,9,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,2,31,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,230,43,117,63,32,7,3,0,3,7,2,1,2,23,16,0,2,0,95,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,35,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,190,0,80,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,1237,43,8,8952,286,50,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,2357,44,11,6,17,0,370,43,1301,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42717,35,4148,12,221,3,5761,15,7472,3104,541,1507,4938],u=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,370,1,154,10,176,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,2,11,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,71,5,2,1,3,3,2,0,2,1,13,9,120,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,135,4,60,6,26,9,1014,0,2,54,8,3,82,0,12,1,19628,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,419,13,1495,6,110,6,6,9,4759,9,787719,239];function c(e,t){for(var r=65536,n=0,o=t.length;n<o;n+=2){if((r+=t[n])>e)return!1;if((r+=t[n+1])>=e)return!0}return!1}function s(e){return e<65?36===e:e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&a.test(String.fromCharCode(e)):c(e,l)))}function f(e){return e<48?36===e:e<58||!(e<65)&&(e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&i.test(String.fromCharCode(e)):c(e,l)||c(e,u))))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isReservedWord=u,t.isStrictReservedWord=c,t.isStrictBindOnlyReservedWord=s,t.isStrictBindReservedWord=function(e,t){return c(e,t)||s(e)},t.isKeyword=function(e){return a.has(e)};var n=["implements","interface","let","package","private","protected","public","static","yield"],o=["eval","arguments"],a=new Set(["break","case","catch","continue","debugger","default","do","else","finally","for","function","if","return","switch","throw","try","var","const","while","with","new","this","super","class","extends","export","import","null","true","false","in","instanceof","typeof","void","delete"]),i=new Set(n),l=new Set(o);function u(e,t){return t&&"await"===e||"enum"===e}function c(e,t){return u(e,t)||i.has(e)}function s(e){return l.has(e)}},function(e,t,r){"use strict";(function(t){var n=r(52),o=r(200),a=r(201),i=r(206).stdout,l=r(207),u="win32"===t.platform&&!(Object({NODE_ENV:"production"}).TERM||"").toLowerCase().startsWith("xterm"),c=["ansi","ansi","ansi256","ansi16m"],s=new Set(["gray"]),f=Object.create(null);function d(e,t){t=t||{};var r=i?i.level:0;e.level=void 0===t.level?r:t.level,e.enabled="enabled"in t?t.enabled:e.level>0}function p(e){if(!this||!(this instanceof p)||this.template){var t={};return d(t,e),t.template=function(){var e=[].slice.call(arguments);return T.apply(null,[t.template].concat(e))},Object.setPrototypeOf(t,p.prototype),Object.setPrototypeOf(t.template,t),t.template.constructor=p,t.template}d(this,e)}u&&(a.blue.open="\x1b[94m");for(var h=function(){var e=v[g];a[e].closeRe=new RegExp(o(a[e].close),"g"),f[e]={get:function(){var t=a[e];return S.call(this,this._styles?this._styles.concat(t):[t],this._empty,e)}}},g=0,v=Object.keys(a);g<v.length;g++)h();f.visible={get:function(){return S.call(this,this._styles||[],!0,"visible")}},a.color.closeRe=new RegExp(o(a.color.close),"g");for(var m=function(){var e=b[y];if(s.has(e))return"continue";f[e]={get:function(){var t=this.level;return function(){var r=a.color[c[t]][e].apply(null,arguments),n={open:r,close:a.color.close,closeRe:a.color.closeRe};return S.call(this,this._styles?this._styles.concat(n):[n],this._empty,e)}}}},y=0,b=Object.keys(a.color.ansi);y<b.length;y++)m();a.bgColor.closeRe=new RegExp(o(a.bgColor.close),"g");for(var w=function(){var e=E[k];if(s.has(e))return"continue";var t="bg"+e[0].toUpperCase()+e.slice(1);f[t]={get:function(){var t=this.level;return function(){var r=a.bgColor[c[t]][e].apply(null,arguments),n={open:r,close:a.bgColor.close,closeRe:a.bgColor.closeRe};return S.call(this,this._styles?this._styles.concat(n):[n],this._empty,e)}}}},k=0,E=Object.keys(a.bgColor.ansi);k<E.length;k++)w();var x=Object.defineProperties((function(){}),f);function S(e,t,r){var n=function e(){return _.apply(e,arguments)};n._styles=e,n._empty=t;var o=this;return Object.defineProperty(n,"level",{enumerable:!0,get:function(){return o.level},set:function(e){o.level=e}}),Object.defineProperty(n,"enabled",{enumerable:!0,get:function(){return o.enabled},set:function(e){o.enabled=e}}),n.hasGrey=this.hasGrey||"gray"===r||"grey"===r,n.__proto__=x,n}function _(){var e=arguments,t=e.length,r=String(arguments[0]);if(0===t)return"";if(t>1)for(var o=1;o<t;o++)r+=" "+e[o];if(!this.enabled||this.level<=0||!r)return this._empty?"":r;var i=a.dim.open;u&&this.hasGrey&&(a.dim.open="");var l,c=n(this._styles.slice().reverse());try{for(c.s();!(l=c.n()).done;){var s=l.value;r=(r=s.open+r.replace(s.closeRe,s.open)+s.close).replace(/\\r?\\n/g,"".concat(s.close,"$&").concat(s.open))}}catch(e){c.e(e)}finally{c.f()}return a.dim.open=i,r}function T(e,t){if(!Array.isArray(t))return[].slice.call(arguments,1).join(" ");for(var r=[].slice.call(arguments,2),n=[t.raw[0]],o=1;o<t.length;o++)n.push(String(r[o-1]).replace(/[{}\\\\]/g,"\\\\$&")),n.push(String(t.raw[o]));return l(e,n.join(""))}Object.defineProperties(p.prototype,f),e.exports=p(),e.exports.supportsColor=i,e.exports.default=e.exports}).call(this,r(51))},function(e,t,r){"use strict";var n=/[|\\\\{}()[\\]^$+*?.]/g;e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected a string");return e.replace(n,"\\\\$&")}},function(e,t,r){"use strict";(function(e){var t=r(203),n=function(e,r){return function(){var n=e.apply(t,arguments);return"\x1b[".concat(n+r,"m")}},o=function(e,r){return function(){var n=e.apply(t,arguments);return"\x1b[".concat(38+r,";5;").concat(n,"m")}},a=function(e,r){return function(){var n=e.apply(t,arguments);return"\x1b[".concat(38+r,";2;").concat(n[0],";").concat(n[1],";").concat(n[2],"m")}};Object.defineProperty(e,"exports",{enumerable:!0,get:function(){var e=new Map,r={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],gray:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};r.color.grey=r.color.gray;for(var i=0,l=Object.keys(r);i<l.length;i++){for(var u=l[i],c=r[u],s=0,f=Object.keys(c);s<f.length;s++){var d=f[s],p=c[d];r[d]={open:"\x1b[".concat(p[0],"m"),close:"\x1b[".concat(p[1],"m")},c[d]=r[d],e.set(p[0],p[1])}Object.defineProperty(r,u,{value:c,enumerable:!1}),Object.defineProperty(r,"codes",{value:e,enumerable:!1})}var h=function(e){return e},g=function(e,t,r){return[e,t,r]};r.color.close="\x1b[39m",r.bgColor.close="\x1b[49m",r.color.ansi={ansi:n(h,0)},r.color.ansi256={ansi256:o(h,0)},r.color.ansi16m={rgb:a(g,0)},r.bgColor.ansi={ansi:n(h,10)},r.bgColor.ansi256={ansi256:o(h,10)},r.bgColor.ansi16m={rgb:a(g,10)};for(var v=0,m=Object.keys(t);v<m.length;v++){var y=m[v];if("object"===typeof t[y]){var b=t[y];"ansi16"===y&&(y="ansi"),"ansi16"in b&&(r.color.ansi[y]=n(b.ansi16,0),r.bgColor.ansi[y]=n(b.ansi16,10)),"ansi256"in b&&(r.color.ansi256[y]=o(b.ansi256,0),r.bgColor.ansi256[y]=o(b.ansi256,10)),"rgb"in b&&(r.color.ansi16m[y]=a(b.rgb,0),r.bgColor.ansi16m[y]=a(b.rgb,10))}}return r}})}).call(this,r(202)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,r){var n=r(87),o=r(205),a={};Object.keys(n).forEach((function(e){a[e]={},Object.defineProperty(a[e],"channels",{value:n[e].channels}),Object.defineProperty(a[e],"labels",{value:n[e].labels});var t=o(e);Object.keys(t).forEach((function(r){var n=t[r];a[e][r]=function(e){var t=function(t){if(void 0===t||null===t)return t;arguments.length>1&&(t=Array.prototype.slice.call(arguments));var r=e(t);if("object"===typeof r)for(var n=r.length,o=0;o<n;o++)r[o]=Math.round(r[o]);return r};return"conversion"in e&&(t.conversion=e.conversion),t}(n),a[e][r].raw=function(e){var t=function(t){return void 0===t||null===t?t:(arguments.length>1&&(t=Array.prototype.slice.call(arguments)),e(t))};return"conversion"in e&&(t.conversion=e.conversion),t}(n)}))})),e.exports=a},function(e,t,r){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},function(e,t,r){var n=r(87);function o(e){var t=function(){for(var e={},t=Object.keys(n),r=t.length,o=0;o<r;o++)e[t[o]]={distance:-1,parent:null};return e}(),r=[e];for(t[e].distance=0;r.length;)for(var o=r.pop(),a=Object.keys(n[o]),i=a.length,l=0;l<i;l++){var u=a[l],c=t[u];-1===c.distance&&(c.distance=t[o].distance+1,c.parent=o,r.unshift(u))}return t}function a(e,t){return function(r){return t(e(r))}}function i(e,t){for(var r=[t[e].parent,e],o=n[t[e].parent][e],i=t[e].parent;t[i].parent;)r.unshift(t[i].parent),o=a(n[t[i].parent][i],o),i=t[i].parent;return o.conversion=r,o}e.exports=function(e){for(var t=o(e),r={},n=Object.keys(t),a=n.length,l=0;l<a;l++){var u=n[l];null!==t[u].parent&&(r[u]=i(u,t))}return r}},function(e,t,r){"use strict";e.exports={stdout:!1,stderr:!1}},function(e,t,r){"use strict";var n=r(52),o=/(?:\\\\(u[a-f\\d]{4}|x[a-f\\d]{2}|.))|(?:\\{(~)?(\\w+(?:\\([^)]*\\))?(?:\\.\\w+(?:\\([^)]*\\))?)*)(?:[ \\t]|(?=\\r?\\n)))|(\\})|((?:.|[\\r\\n\\f])+?)/gi,a=/(?:^|\\.)(\\w+)(?:\\(([^)]*)\\))?/g,i=/^([\'"])((?:\\\\.|(?!\\1)[^\\\\])*)\\1$/,l=/\\\\(u[a-f\\d]{4}|x[a-f\\d]{2}|.)|([^\\\\])/gi,u=new Map([["n","\\n"],["r","\\r"],["t","\\t"],["b","\\b"],["f","\\f"],["v","\\v"],["0","\\0"],["\\\\","\\\\"],["e","\x1b"],["a","\x07"]]);function c(e){return"u"===e[0]&&5===e.length||"x"===e[0]&&3===e.length?String.fromCharCode(parseInt(e.slice(1),16)):u.get(e)||e}function s(e,t){var r,o,a=[],u=t.trim().split(/\\s*,\\s*/g),s=n(u);try{for(s.s();!(o=s.n()).done;){var f=o.value;if(isNaN(f)){if(!(r=f.match(i)))throw new Error("Invalid Chalk template style argument: ".concat(f," (in style \'").concat(e,"\')"));a.push(r[2].replace(l,(function(e,t,r){return t?c(t):r})))}else a.push(Number(f))}}catch(e){s.e(e)}finally{s.f()}return a}function f(e){a.lastIndex=0;for(var t,r=[];null!==(t=a.exec(e));){var n=t[1];if(t[2]){var o=s(n,t[2]);r.push([n].concat(o))}else r.push([n])}return r}function d(e,t){var r,o={},a=n(t);try{for(a.s();!(r=a.n()).done;){var i,l=r.value,u=n(l.styles);try{for(u.s();!(i=u.n()).done;){var c=i.value;o[c[0]]=l.inverse?null:c.slice(1)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){a.e(e)}finally{a.f()}for(var s=e,f=0,d=Object.keys(o);f<d.length;f++){var p=d[f];if(Array.isArray(o[p])){if(!(p in s))throw new Error("Unknown Chalk style: ".concat(p));s=o[p].length>0?s[p].apply(s,o[p]):s[p]}}return s}e.exports=function(e,t){var r=[],n=[],a=[];if(t.replace(o,(function(t,o,i,l,u,s){if(o)a.push(c(o));else if(l){var p=a.join("");a=[],n.push(0===r.length?p:d(e,r)(p)),r.push({inverse:i,styles:f(l)})}else if(u){if(0===r.length)throw new Error("Found extraneous } in Chalk template literal");n.push(d(e,r)(a.join(""))),a=[],r.pop()}else a.push(s)})),n.push(a.join("")),r.length>0){var i="Chalk template literal is missing ".concat(r.length," closing bracket").concat(1===r.length?"":"s"," (`}`)");throw new Error(i)}return n.join("")}},function(e,t,r){"use strict";r.r(t),r.d(t,"ThemeContext",(function(){return me}));r(90);var n=r(0),o=r.n(n),a=r(53),i=r.n(a),l=function(e){return{position:"relative",display:"inline-flex",flexDirection:"column",height:"100%",width:"1024px",maxWidth:"100%",overflowX:"hidden",overflowY:"auto",padding:"0.5rem",boxSizing:"border-box",textAlign:"left",fontFamily:"Consolas, Menlo, monospace",fontSize:"11px",whiteSpace:"pre-wrap",wordBreak:"break-word",lineHeight:1.5,color:e.color}},u=null;var c=function(e){var t=Object(n.useContext)(me),r=e.shortcutHandler;return Object(n.useEffect)((function(){var e=function(e){r&&r(e.key)};return window.addEventListener("keydown",e),u&&u.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e),u&&u.removeEventListener("keydown",e)}}),[r]),o.a.createElement("div",{style:l(t),ref:function(e){if(e){var t=e.ownerDocument;u=t.defaultView}}},e.children)},s=function(e){return{fontFamily:"sans-serif",color:e.footer,marginTop:"0.5rem",flex:"0 0 auto"}};var f=function(e){var t=Object(n.useContext)(me);return o.a.createElement("div",{style:s(t)},e.line1,o.a.createElement("br",null),e.line2)},d=function(e){return{fontSize:"2em",fontFamily:"sans-serif",color:e.headerColor,whiteSpace:"pre-wrap",margin:"0 2rem 0.75rem 0",flex:"0 0 auto",maxHeight:"50%",overflow:"auto"}};var p=function(e){var t=Object(n.useContext)(me);return o.a.createElement("div",{style:d(t)},e.headerText)};function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={position:"relative",display:"block",padding:"0.5em",marginTop:"0.5em",marginBottom:"0.5em",overflowX:"auto",whiteSpace:"pre-wrap",borderRadius:"0.25rem"},y={fontFamily:"Consolas, Menlo, monospace"};var b=function(e){var t=e.main,r=e.codeHTML,a=Object(n.useContext)(me),i=v(v({},m),{},{backgroundColor:a.primaryPreBackground,color:a.primaryPreColor}),l=v(v({},m),{},{backgroundColor:a.secondaryPreBackground,color:a.secondaryPreColor}),u=t?i:l,c={__html:r};return o.a.createElement("pre",{style:u},o.a.createElement("code",{style:y,dangerouslySetInnerHTML:c}))},w=r(33),k=r.n(w),E=new(r(88).AllHtmlEntities),x=function(e){return{reset:[e.base05,"transparent"],black:e.base05,red:e.base08,green:e.base0B,yellow:e.base08,blue:e.base0C,magenta:e.base0C,cyan:e.base0E,gray:e.base03,lightgrey:e.base01,darkgrey:e.base03}},S={"ansi-bright-black":"black","ansi-bright-yellow":"yellow","ansi-yellow":"yellow","ansi-bright-green":"green","ansi-green":"green","ansi-bright-cyan":"cyan","ansi-cyan":"cyan","ansi-bright-red":"red","ansi-red":"red","ansi-bright-magenta":"magenta","ansi-magenta":"magenta","ansi-white":"darkgrey"};var _=function(e,t){for(var r=(new k.a).ansiToJson(E.encode(e),{use_classes:!0}),n="",o=!1,a=0;a<r.length;++a)for(var i=r[a],l=i.content,u=i.fg,c=l.split("\\n"),s=0;s<c.length;++s){o||(n+=\'<span data-ansi-line="true">\',o=!0);var f=c[s].replace("\\r",""),d=x(t)[S[u]];null!=d?n+=\'<span style="color: \'+d+\';">\'+f+"</span>":(null!=u&&console.log("Missing color mapping: ",u),n+="<span>"+f+"</span>"),s<c.length-1&&(n+="</span>",o=!1,n+="<br/>")}return o&&(n+="</span>",o=!1),n},T=/^\\.(\\/[^/\\n ]+)+\\.[^/\\n ]+$/,C=[/^.*\\((\\d+):(\\d+)\\)$/,/^Line (\\d+):.+$/];var O=function(e){for(var t=e.split("\\n"),r="",n=0,o=0,a=0;a<t.length;a++){var i=k.a.ansiToText(t[a]).trim();if(i){!r&&i.match(T)&&(r=i);for(var l=0;l<C.length;){var u=i.match(C[l]);if(u){n=parseInt(u[1],10),o=parseInt(u[2],10)+1||1;break}l++}if(r&&n)break}}return r&&n?{fileName:r,lineNumber:n,colNumber:o}:null},P={cursor:"pointer"};var R=function(e){var t=Object(n.useContext)(me),r=e.error,a=e.editorHandler,i=O(r),l=null!==i&&null!==a;return o.a.createElement(c,null,o.a.createElement(p,{headerText:"Failed to compile"}),o.a.createElement("div",{onClick:l&&i?function(){return a(i)}:null,style:l?P:null},o.a.createElement(b,{main:!0,codeHTML:_(r,t)})),o.a.createElement(f,{line1:"This error occurred during the build time and cannot be dismissed."}))};function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function A(e,t,r){return t&&L(e.prototype,t),r&&L(e,r),e}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e){return(D="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){return!t||"object"!==D(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called");return e}(e):t}function z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=M(e);if(t){var o=M(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return q(this,r)}}var U=function(e){return{color:e.closeColor,lineHeight:"1rem",fontSize:"1.5rem",padding:"1rem",cursor:"pointer",position:"absolute",right:0,top:0}};var F=function(e){var t=e.close,r=Object(n.useContext)(me);return o.a.createElement("span",{title:"Click or press Escape to dismiss.",onClick:t,style:U(r)},"\xd7")},B={marginBottom:"0.5rem"},V={marginRight:"1em"},H={border:"none",borderRadius:"4px",padding:"3px 6px",cursor:"pointer"},W=function(e){return v(v({},H),{},{backgroundColor:e.navBackground,color:e.navArrow,borderTopRightRadius:"0px",borderBottomRightRadius:"0px",marginRight:"1px"})},$=function(e){return v(v({},H),{},{backgroundColor:e.navBackground,color:e.navArrow,borderTopLeftRadius:"0px",borderBottomLeftRadius:"0px"})};var G=function(e){var t=Object(n.useContext)(me),r=e.currentError,a=e.totalErrors,i=e.previous,l=e.next;return o.a.createElement("div",{style:B},o.a.createElement("span",{style:V},o.a.createElement("button",{onClick:i,style:W(t)},"←"),o.a.createElement("button",{onClick:l,style:$(t)},"→")),"".concat(r," of ").concat(a," errors on the page"))};function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return Q(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Q(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){for(;null!=t&&"br"!==t.tagName.toLowerCase();)t=t.nextElementSibling;null!=t&&e.removeChild(t)}var X=r(89);var J=function(e){var t=Object(n.useContext)(me),r=e.lines,a=e.lineNum,i=e.columnNum,l=e.contextSize,u=e.main,c=[],s=1/0;r.forEach((function(e){var t=e.content,r=t.match(/^\\s*/);""!==t&&(s=r&&r[0]?Math.min(s,r[0].length):0)})),r.forEach((function(e){var t=e.content,r=e.lineNumber;isFinite(s)&&(t=t.substring(s)),c[r-1]=t}));var f=Object(X.codeFrameColumns)(c.join("\\n"),{start:{line:a,column:null==i?0:i-(isFinite(s)?s:0)}},{forceColor:!0,linesAbove:l,linesBelow:l}),d=_(f,t),p=document.createElement("code");p.innerHTML=d,function(e){for(var t=e.childNodes,r=0;r<t.length;++r){var n=t[r];if("span"===n.tagName.toLowerCase()){var o=n.innerText;null!=o&&"|^"===o.replace(/\\s/g,"")&&(n.style.position="absolute",K(e,n))}}}(p);var h=p.childNodes;e:for(var g=0;g<h.length;++g)for(var v=h[g].childNodes,m=0;m<v.length;++m){var y=v[m].innerText;if(null!=y&&-1!==y.indexOf(" "+a+" |"))break e}return o.a.createElement(b,{main:u,codeHTML:p.innerHTML})};function Z(e,t,r,n,o,a,i){var l;if(!i&&e&&"number"===typeof t){var u=/^[/|\\\\].*?[/|\\\\]((src|node_modules)[/|\\\\].*)/.exec(e);l=u&&u[1]?u[1]:e,l+=":"+t,r&&(l+=":"+r)}else n&&"number"===typeof o?(l=n+":"+o,a&&(l+=":"+a)):l="unknown";return l.replace("webpack://",".")}var ee=function(e){return{textDecoration:"none",color:e.anchorColor,cursor:"pointer"}},te=function(e){return{marginBottom:"1.5em",color:e.toggleColor,cursor:"pointer",border:"none",display:"block",width:"100%",textAlign:"left",background:e.toggleBackground,fontFamily:"Consolas, Menlo, monospace",fontSize:"1em",padding:"0px",lineHeight:"1.5"}};var re=function(e){var t=Object(n.useContext)(me),r=Y(Object(n.useState)(!1),2),a=r[0],i=r[1],l=function(){var t=e.frame,r=t._originalFileName,n=t._originalLineNumber;return r?-1!==r.trim().indexOf(" ")?null:{fileName:r,lineNumber:n||1}:null},u=function(){var t=l();t&&e.editorHandler(t)},c=e.frame,s=e.contextSize,f=e.critical,d=e.showCode,p=c.fileName,h=c.lineNumber,g=c.columnNumber,v=c._scriptCode,m=c._originalFileName,y=c._originalLineNumber,b=c._originalColumnNumber,w=c._originalScriptCode,k=c.getFunctionName(),E=Z(m,y,b,p,h,g,a),x=null;d&&(a&&v&&0!==v.length&&null!=h?x={lines:v,lineNum:h,columnNum:g,contextSize:s,main:f}:!a&&w&&0!==w.length&&null!=y&&(x={lines:w,lineNum:y,columnNum:b,contextSize:s,main:f}));var S=null!==l()&&null!==e.editorHandler;return o.a.createElement("div",null,o.a.createElement("div",null,k),o.a.createElement("div",{style:{fontSize:"0.9em",marginBottom:"0.9em"}},o.a.createElement("span",{style:S?ee(t):null,onClick:S?u:null,onKeyDown:S?function(e){"Enter"===e.key&&u()}:null,tabIndex:S?"0":null},E)),x&&o.a.createElement("span",null,o.a.createElement("span",{onClick:S?u:null,style:S?{cursor:"pointer"}:null},o.a.createElement(J,x)),o.a.createElement("button",{style:te(t),onClick:function(){i(!a)}},"View "+(a?"source":"compiled"))))},ne={cursor:"pointer",border:"none",display:"block",width:"100%",textAlign:"left",fontFamily:"Consolas, Menlo, monospace",fontSize:"1em",padding:"0px",lineHeight:"1.5"},oe=function(e){return v(v({},ne),{},{color:e.color,background:e.background,marginBottom:"1.5em"})},ae=function(e){return v(v({},ne),{},{color:e.color,background:e.background,marginBottom:"0.6em"})};var ie=function(e){var t=Object(n.useContext)(me),r=Y(Object(n.useState)(!0),2),a=r[0],i=r[1],l=function(){i(!a)},u=e.children.length;return o.a.createElement("div",null,o.a.createElement("button",{onClick:l,style:a?oe(t):ae(t)},(a?"▶":"▼")+" ".concat(u," stack frames were ")+(a?"collapsed.":"expanded.")),o.a.createElement("div",{style:{display:a?"none":"block"}},e.children,o.a.createElement("button",{onClick:l,style:ae(t)},"▲ ".concat(u," stack frames were expanded."))))};function le(e){switch(e){case"EvalError":case"InternalError":case"RangeError":case"ReferenceError":case"SyntaxError":case"TypeError":case"URIError":return!0;default:return!1}}var ue={fontSize:"1em",flex:"0 1 auto",minHeight:"0px",overflow:"auto"},ce=function(e){j(r,e);var t=z(r);function r(){return N(this,r),t.apply(this,arguments)}return A(r,[{key:"renderFrames",value:function(){var e=this.props,t=e.stackFrames,r=e.errorName,n=e.contextSize,a=e.editorHandler,i=[],l=!1,u=[],c=0;return t.forEach((function(e,s){var f=e.fileName,d=function(e,t){return null==e||""===e||-1!==e.indexOf("/~/")||-1!==e.indexOf("/node_modules/")||-1!==e.trim().indexOf(" ")||null==t||""===t}(e._originalFileName,f),p=!le(r),h=d&&(p||l);d||(l=!0);var g=o.a.createElement(re,{key:"frame-"+s,frame:e,contextSize:n,critical:0===s,showCode:!h,editorHandler:a}),v=s===t.length-1;h&&u.push(g),h&&!v||(1===u.length?i.push(u[0]):u.length>1&&(c++,i.push(o.a.createElement(ie,{key:"bundle-"+c},u))),u=[]),h||i.push(g)})),i}},{key:"render",value:function(){return o.a.createElement("div",{style:ue},this.renderFrames())}}]),r}(n.Component),se={display:"flex",flexDirection:"column"};var fe=function(e){var t=e.errorRecord,r=e.editorHandler,n=t.error,a=t.unhandledRejection,i=t.contextSize,l=t.stackFrames,u=a?"Unhandled Rejection ("+n.name+")":n.name,c=n.message,s=c.match(/^\\w*:/)||!u?c:u+": "+c;return s=s.replace(/^Invariant Violation:\\s*/,"").replace(/^Warning:\\s*/,"").replace(" Check the render method","\\n\\nCheck the render method").replace(" Check your code at","\\n\\nCheck your code at"),o.a.createElement("div",{style:se},o.a.createElement(p,{headerText:s}),o.a.createElement(ce,{stackFrames:l,errorName:u,contextSize:i,editorHandler:r}))},de=function(e){j(r,e);var t=z(r);function r(){var e;N(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={currentIndex:0},e.previous=function(){e.setState((function(e,t){return{currentIndex:e.currentIndex>0?e.currentIndex-1:t.errorRecords.length-1}}))},e.next=function(){e.setState((function(e,t){return{currentIndex:e.currentIndex<t.errorRecords.length-1?e.currentIndex+1:0}}))},e.shortcutHandler=function(t){"Escape"===t?e.props.close():"ArrowLeft"===t?e.previous():"ArrowRight"===t&&e.next()},e}return A(r,[{key:"render",value:function(){var e=this.props,t=e.errorRecords,r=e.close,n=t.length;return o.a.createElement(c,{shortcutHandler:this.shortcutHandler},o.a.createElement(F,{close:r}),n>1&&o.a.createElement(G,{currentError:this.state.currentIndex+1,totalErrors:n,previous:this.previous,next:this.next}),o.a.createElement(fe,{errorRecord:t[this.state.currentIndex],editorHandler:this.props.editorHandler}),o.a.createElement(f,{line1:"This screen is visible only in development. It will not appear if the app crashes in production.",line2:"Open your browser’s developer console to further inspect this error.  Click the \'X\' or hit ESC to dismiss this message."}))}}]),r}(n.PureComponent),pe={background:"white",color:"black",headerColor:"#ce1126",primaryPreBackground:"rgba(206, 17, 38, 0.05)",primaryPreColor:"inherit",secondaryPreBackground:"rgba(251, 245, 180, 0.3)",secondaryPreColor:"inherit",footer:"#878e91",anchorColor:"#878e91",toggleBackground:"transparent",toggleColor:"#878e91",closeColor:"#293238",navBackground:"rgba(206, 17, 38, 0.05)",navArrow:"#ce1126",base01:"#f5f5f5",base03:"#6e6e6e",base05:"#333333",base08:"#881280",base0B:"#1155cc",base0C:"#994500",base0E:"#c80000"},he={background:"#353535",color:"white",headerColor:"#e83b46",primaryPreBackground:"rgba(206, 17, 38, 0.1)",primaryPreColor:"#fccfcf",secondaryPreBackground:"rgba(251, 245, 180, 0.1)",secondaryPreColor:"#fbf5b4",footer:"#878e91",anchorColor:"#878e91",toggleBackground:"transparent",toggleColor:"#878e91",closeColor:"#ffffff",navBackground:"rgba(206, 17, 38, 0.2)",navArrow:"#ce1126",base01:"#282a2e",base03:"#969896",base05:"#c5c8c6",base08:"#cc6666",base0B:"#b5bd68",base0C:"#8abeb7",base0E:"#b294bb"};var ge=null,ve=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?he:pe,me=Object(n.createContext)();window.updateContent=function(e){var t,r,n,a,l,u=(r=(t=e).currentBuildError,n=t.currentRuntimeErrorRecords,a=t.dismissRuntimeErrors,l=t.editorHandler,r?o.a.createElement(me.Provider,{value:ve},o.a.createElement(R,{error:r,editorHandler:l})):n.length>0?o.a.createElement(me.Provider,{value:ve},o.a.createElement(de,{errorRecords:n,close:a,editorHandler:l})):null);return null===u?(i.a.unmountComponentAtNode(ge),!1):(i.a.render(u,ge),!0)},document.body.style.margin="0",document.body.style["max-width"]="100vw",function(e,t){for(var r in e.setAttribute("style",""),t)t.hasOwnProperty(r)&&(e.style[r]=t[r])}(ge=document.createElement("div"),{width:"100%",height:"100%","box-sizing":"border-box","text-align":"center","background-color":ve.background}),document.body.appendChild(ge),window.parent.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__.iframeReady()}]);', ee = null, te = !1, re = !1, ne = null, oe = null, ae = [], ie = null, le = null;
            function ue(e) {
                ne = e, ee && me();
            }
            function ce(e) {
                oe = e, me();
            }
            function se(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ie = t, X(pe(t))(e);
            }
            function fe() {
                oe = null, me();
            }
            function de(e) {
                if (null !== le) throw new Error("Already listening");
                e.launchEditorEndpoint && console.warn("Warning: `startReportingRuntimeErrors` doesn’t accept `launchEditorEndpoint` argument anymore. Use `listenToOpenInEditor` instead with your own implementation to open errors in editor "), ie = e, le = K(pe(e), e.filename);
            }
            var pe = function(e) {
                return function(t) {
                    try {
                        "function" == typeof e.onError && e.onError.call(null);
                    } finally{
                        if (ae.some(function(e) {
                            return e.error === t.error;
                        })) return;
                        ae = ae.concat([
                            t
                        ]), me();
                    }
                };
            };
            function he() {
                ae = [], me();
            }
            function ge() {
                if (null === le) throw new Error("Not currently listening");
                ie = null;
                try {
                    le();
                } finally{
                    le = null;
                }
            }
            function me() {
                if (!te) {
                    if (re) ve();
                    else {
                        te = !0;
                        var e = window.document.createElement("iframe");
                        !function(e, t) {
                            for(var r in e.setAttribute("style", ""), t)t.hasOwnProperty(r) && (e.style[r] = t[r]);
                        }(e, J), e.onload = function() {
                            var t = e.contentDocument;
                            if (null != t && null != t.body) {
                                ee = e;
                                var r = e.contentWindow.document.createElement("script");
                                r.type = "text/javascript", r.innerHTML = Z, t.body.appendChild(r);
                            }
                        }, window.document.body.appendChild(e);
                    }
                }
            }
            function ve() {
                if (!ie) throw new Error("Expected options to be injected.");
                if (!ee) throw new Error("Iframe has not been created yet.");
                ee.contentWindow.updateContent({
                    currentBuildError: oe,
                    currentRuntimeErrorRecords: ae,
                    dismissRuntimeErrors: he,
                    editorHandler: ne
                }) || (window.document.body.removeChild(ee), ee = null, re = !1);
            }
            window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__ = window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__ || {}, window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__.iframeReady = function() {
                re = !0, te = !1, ve();
            };
        }
    ]);
});

},{"process":"d5jf4"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e1) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e1) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"dNKx6":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"ebWYT":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$6ce0 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$6ce0.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _client = require("react-dom/client");
var _photoLibrary = require("./PhotoLibrary");
var _photoLibraryDefault = parcelHelpers.interopDefault(_photoLibrary);
var _myDropZone = require("./MyDropZone");
var _myDropZoneDefault = parcelHelpers.interopDefault(_myDropZone);
//this mounts our react app to our index.html 
window.addEventListener("load", ()=>{
    //we anchor the react app to the container alocated for it in our html structure
    const root = _client.createRoot(document.querySelector("#react-root"));
    //then we call render to load our PhotoLibrary app.
    root.render(/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _photoLibraryDefault.default), {}, void 0, false, {
        fileName: "src/js/index.js",
        lineNumber: 16,
        columnNumber: 16
    }, undefined)) //we must call this as a component 
    ;
///Other scripts go down here///
}) ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
;

  $parcel$ReactRefreshHelpers$6ce0.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react-dom/client":"lOjBx","./PhotoLibrary":"iEufY","./MyDropZone":"6LKyu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"iEufY":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$5bfb = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$5bfb.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
//experimental photoswipe imports ***
var _photoswipeCss = require("photoswipe/dist/photoswipe.css");
var _reactPhotoswipeGallery = require("react-photoswipe-gallery");
var _s = $RefreshSig$();
function PhotoLibrary() {
    _s();
    //state that will store all our imgs 
    const [imgs, setImgs] = (0, _react.useState)([]);
    //state for keeping track of how to sort imgs 
    const [typeOfImg, setTypeOfImg] = (0, _react.useState)("all"); //starts as both so all imgs are loaded / rendered initially
    //axios logic
    //this function gets the imgs in our backend then formats them into a new object with the type of the img 
    //and the img itself 
    async function getImgs() {
        //get the imgs from the backend
        const res = await (0, _axiosDefault.default).get("/photos");
        //grab just the values from the array the backend returns
        const arrOfImgs = Object.values(res.data.data);
        //formats the entries into new objects containing a file path and the type of img in two separate keys
        const sortedArrOfImgs = arrOfImgs.map((img)=>{
            const imgType = img.substring(0, img.indexOf("__"));
            return {
                type: imgType,
                img: `uploads/${img}`
            };
        });
        //then once our array of objects is ready we set it to state 
        setImgs(sortedArrOfImgs);
    }
    //getImgs(); //this runs forever so we need to call it just once 
    //useEffect here with an empty dependency array because we want our get request to only run once 
    (0, _react.useEffect)(()=>{
        getImgs() //makes a request to our back end api to grab all imgs stored on our backend 
        ;
    }, []);
    //handle radio button state change for the sake of sorting 
    function handleChange(e) {
        let type = e.target.value;
        //console.log(type)
        setTypeOfImg(type);
    }
    //console.log(typeOfImg)
    //Things to do. 
    //sorting between both  makeup and hair 
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactPhotoswipeGallery.Gallery), {
                classname: "wowow",
                children: imgs.map((img)=>{
                    if (typeOfImg == img.type || typeOfImg === "all") return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactPhotoswipeGallery.Item), {
                        original: img.img,
                        thumbnail: img.img,
                        width: "1024",
                        height: "768",
                        children: ({ ref , open  })=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                ref: ref,
                                onClick: open,
                                src: img.img
                            }, void 0, false, {
                                fileName: "src/js/PhotoLibrary.jsx",
                                lineNumber: 94,
                                columnNumber: 34
                            }, this)
                    }, void 0, false, {
                        fileName: "src/js/PhotoLibrary.jsx",
                        lineNumber: 87,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "src/js/PhotoLibrary.jsx",
                lineNumber: 80,
                columnNumber: 8
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "img-sorting-radio",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                        className: "img-sorting-radio__button",
                        id: "both",
                        type: "radio",
                        name: "imgType",
                        value: "both",
                        onChange: handleChange
                    }, void 0, false, {
                        fileName: "src/js/PhotoLibrary.jsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                        className: "img-sorting-radio__button-label",
                        htmlFor: "both",
                        children: "Both"
                    }, void 0, false, {
                        fileName: "src/js/PhotoLibrary.jsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                        className: "img-sorting-radio__button",
                        id: "makeup",
                        type: "radio",
                        name: "imgType",
                        value: "makeup",
                        onChange: handleChange
                    }, void 0, false, {
                        fileName: "src/js/PhotoLibrary.jsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                        className: "img-sorting-radio__button-label",
                        htmlFor: "makeup",
                        children: "Makeup"
                    }, void 0, false, {
                        fileName: "src/js/PhotoLibrary.jsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                        className: "img-sorting-radio__button",
                        id: "hair",
                        type: "radio",
                        name: "imgType",
                        value: "hair",
                        onChange: handleChange
                    }, void 0, false, {
                        fileName: "src/js/PhotoLibrary.jsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                        className: "img-sorting-radio__button-label",
                        htmlFor: "hair",
                        children: "Hairstyles"
                    }, void 0, false, {
                        fileName: "src/js/PhotoLibrary.jsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                        className: "img-sorting-radio__button",
                        id: "all",
                        type: "radio",
                        name: "imgType",
                        value: "all",
                        onChange: handleChange
                    }, void 0, false, {
                        fileName: "src/js/PhotoLibrary.jsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                        className: "img-sorting-radio__button-label",
                        htmlFor: "all",
                        children: "All"
                    }, void 0, false, {
                        fileName: "src/js/PhotoLibrary.jsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/js/PhotoLibrary.jsx",
                lineNumber: 105,
                columnNumber: 8
            }, this)
        ]
    }, void 0, true);
}
_s(PhotoLibrary, "D5WIE94yibEMn67I/0caiW7VvMU=");
_c = PhotoLibrary;
exports.default = PhotoLibrary;
var _c;
$RefreshReg$(_c, "PhotoLibrary");

  $parcel$ReactRefreshHelpers$5bfb.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","axios":"jo6P5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru","photoswipe/dist/photoswipe.css":"855Ic","react-photoswipe-gallery":"40KaQ"}],"855Ic":[function() {},{}],"40KaQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _galleryJs = require("./gallery.js");
parcelHelpers.exportAll(_galleryJs, exports);
var _itemJs = require("./item.js");
parcelHelpers.exportAll(_itemJs, exports);
var _typesJs = require("./types.js");
parcelHelpers.exportAll(_typesJs, exports);
var _hooksJs = require("./hooks.js");
parcelHelpers.exportAll(_hooksJs, exports);

},{"./gallery.js":"gis0q","./item.js":"69dhq","./types.js":"doEU6","./hooks.js":"x3T6r","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gis0q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Gallery", ()=>Gallery);
var _photoswipe = require("photoswipe");
var _photoswipeDefault = parcelHelpers.interopDefault(_photoswipe);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactDom = require("react-dom");
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _sortNodesJs = require("./helpers/sort-nodes.js");
var _sortNodesJsDefault = parcelHelpers.interopDefault(_sortNodesJs);
var _objectToHashJs = require("./helpers/object-to-hash.js");
var _objectToHashJsDefault = parcelHelpers.interopDefault(_objectToHashJs);
var _hashToObjectJs = require("./helpers/hash-to-object.js");
var _hashToObjectJsDefault = parcelHelpers.interopDefault(_hashToObjectJs);
var _getHashWithoutGidAndPidJs = require("./helpers/get-hash-without-gid-and-pid.js");
var _getHashWithoutGidAndPidJsDefault = parcelHelpers.interopDefault(_getHashWithoutGidAndPidJs);
var _getHashValueJs = require("./helpers/get-hash-value.js");
var _getHashValueJsDefault = parcelHelpers.interopDefault(_getHashValueJs);
var _getBaseUrlJs = require("./helpers/get-base-url.js");
var _getBaseUrlJsDefault = parcelHelpers.interopDefault(_getBaseUrlJs);
var _contextJs = require("./context.js");
var _lightboxStubJs = require("./lightbox-stub.js");
var _lightboxStubJsDefault = parcelHelpers.interopDefault(_lightboxStubJs);
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
/**
 * This variable stores the PhotoSwipe instance object
 * It aims to check whether does the PhotoSwipe opened at the moment
 * (analog of window.pswp in 'photoswipe/lightbox')
 */ let pswp = null;
const Gallery = ({ children , options , plugins , uiElements , id: galleryUID , onBeforeOpen , onOpen , withCaption , withDownloadButton  })=>{
    const [contentPortal, setContentPortal] = (0, _react.useState)(null);
    const items = (0, _react.useRef)(new Map());
    /**
   * Store PID from hash if there are no items yet,
   * but we need to open photoswipe if items appear in the next render
   */ const openWhenReadyPid = (0, _react.useRef)(null);
    const open = (0, _react.useCallback)((targetRef, targetId, itemIndex, e)=>{
        // only one photoswipe instance could be opened at once
        // so if photoswipe is already open, function should do nothing
        if (pswp) return;
        let index = itemIndex || null;
        const normalized = [];
        const entries = Array.from(items.current);
        const prepare = (entry, i)=>{
            const [ref, _a] = entry, { width , height , original , originalSrcset , thumbnail , cropped , content , id: pid  } = _a, rest = __rest(_a, [
                "width",
                "height",
                "original",
                "originalSrcset",
                "thumbnail",
                "cropped",
                "content",
                "id"
            ]);
            if (targetRef === ref || pid !== undefined && String(pid) === targetId) index = i;
            normalized.push(Object.assign(Object.assign(Object.assign({
                w: Number(width),
                h: Number(height),
                src: original,
                srcset: originalSrcset,
                msrc: thumbnail,
                element: ref.current,
                thumbCropped: cropped,
                content
            }, content !== undefined ? {
                type: "html"
            } : {}), pid !== undefined ? {
                pid
            } : {}), rest));
        };
        if (items.current.size > 1) entries.sort(([{ current: a  }], [{ current: b  }])=>(0, _sortNodesJsDefault.default)(a, b)).forEach(prepare);
        else entries.forEach(prepare);
        const initialPoint = e && e.clientX !== undefined && e.clientY !== undefined ? {
            x: e.clientX,
            y: e.clientY
        } : null;
        const instance = new (0, _photoswipeDefault.default)(Object.assign({
            dataSource: normalized,
            index: index === null ? parseInt(targetId, 10) - 1 : index,
            initialPointerPos: initialPoint
        }, options || {}));
        pswp = instance;
        instance.on("contentActivate", ({ content: slideContent  })=>{
            if (slideContent.data.content) setContentPortal((0, _reactDom.createPortal)(slideContent.data.content, slideContent.element));
            else setContentPortal(null);
        });
        instance.on("close", ()=>{
            setContentPortal(null);
        });
        if (withDownloadButton) instance.on("uiRegister", ()=>{
            instance.ui.registerElement({
                name: "download-button",
                ariaLabel: "Download",
                order: 8,
                isButton: true,
                tagName: "a",
                appendTo: "bar",
                html: {
                    isCustomSVG: true,
                    inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" id="pswp__icn-download"/>',
                    outlineID: "pswp__icn-download"
                },
                // can't test onInit callback correctly
                onInit: /* istanbul ignore next */ (el, pswpInstance)=>{
                    el.setAttribute("download", "");
                    el.setAttribute("target", "_blank");
                    el.setAttribute("rel", "noopener");
                    instance.on("change", ()=>{
                        const downloadButton = el;
                        downloadButton.href = pswpInstance.currSlide.data.src;
                    });
                }
            });
        });
        if (withCaption) instance.on("uiRegister", ()=>{
            instance.ui.registerElement({
                name: "default-caption",
                order: 9,
                isButton: false,
                appendTo: "root",
                // can't test onInit callback correctly
                onInit: /* istanbul ignore next */ (el, pswpInstance)=>{
                    /* eslint-disable no-param-reassign */ el.style.position = "absolute";
                    el.style.bottom = "15px";
                    el.style.left = "0";
                    el.style.right = "0";
                    el.style.padding = "0 20px";
                    el.style.color = "var(--pswp-icon-color)";
                    el.style.textAlign = "center";
                    el.style.fontSize = "14px";
                    el.style.lineHeight = "1.5";
                    el.style.textShadow = "1px 1px 3px var(--pswp-icon-color-secondary)";
                    /* eslint-enable no-param-reassign */ instance.on("change", ()=>{
                        const { caption , alt  } = pswpInstance.currSlide.data; // eslint-disable-next-line no-param-reassign
                        el.innerHTML = caption || alt || "";
                    });
                }
            });
        });
        if (Array.isArray(uiElements)) uiElements.forEach((uiElement)=>{
            instance.on("uiRegister", ()=>{
                instance.ui.registerElement(uiElement);
            });
        });
        if (typeof plugins === "function") plugins(new (0, _lightboxStubJsDefault.default)(instance));
        if (typeof onBeforeOpen === "function") onBeforeOpen(instance);
        instance.on("change", ()=>{
            if (galleryUID === undefined) return;
            const pid = instance.currSlide.data.pid || instance.currIndex + 1;
            const baseUrl = (0, _getBaseUrlJsDefault.default)();
            const baseHash = (0, _getHashWithoutGidAndPidJsDefault.default)((0, _getHashValueJsDefault.default)());
            const gidAndPidHash = (0, _objectToHashJsDefault.default)({
                gid: galleryUID,
                pid
            });
            const urlWithOpenedSlide = `${baseUrl}#${baseHash}&${gidAndPidHash}`;
            window.history.pushState({}, document.title, urlWithOpenedSlide);
        });
        instance.on("destroy", ()=>{
            if (galleryUID !== undefined) {
                const baseUrl = (0, _getBaseUrlJsDefault.default)();
                const hash = (0, _getHashWithoutGidAndPidJsDefault.default)((0, _getHashValueJsDefault.default)());
                const urlWithoutOpenedSlide = `${baseUrl}${hash ? `#${hash}` : ""}`;
                window.history.pushState({}, document.title, urlWithoutOpenedSlide);
            }
            pswp = null;
        });
        instance.init();
        if (typeof onOpen === "function") onOpen(instance);
    }, [
        options,
        plugins,
        uiElements,
        galleryUID,
        onBeforeOpen,
        onOpen,
        withCaption,
        withDownloadButton
    ]);
    (0, _react.useEffect)(()=>{
        return ()=>{
            if (pswp) pswp.close();
        };
    }, []);
    (0, _react.useEffect)(()=>{
        if (galleryUID === undefined) return;
        const hash = (0, _getHashValueJsDefault.default)();
        if (hash.length < 5) return;
        const params = (0, _hashToObjectJsDefault.default)(hash);
        const { pid , gid  } = params;
        if (!pid || !gid) return;
        if (items.current.size === 0) {
            // no items currently, save PID from hash for future use
            openWhenReadyPid.current = pid;
            return;
        }
        if (pid && gid === String(galleryUID)) open(null, pid);
    }, [
        open,
        galleryUID
    ]);
    const remove = (0, _react.useCallback)((ref)=>{
        items.current.delete(ref);
    }, []);
    const set = (0, _react.useCallback)((ref, data)=>{
        const { id  } = data;
        items.current.set(ref, data);
        if (openWhenReadyPid.current === null) return;
        if (id === openWhenReadyPid.current) {
            // user provided `id` prop of Item component
            open(ref);
            openWhenReadyPid.current = null;
            return;
        }
        if (!id) {
            // in this case we using index of item as PID
            const index = parseInt(openWhenReadyPid.current, 10) - 1;
            const refToOpen = Array.from(items.current.keys())[index];
            if (refToOpen) {
                open(refToOpen);
                openWhenReadyPid.current = null;
            }
        }
    }, [
        open
    ]);
    const openAt = (0, _react.useCallback)((index)=>{
        open(null, null, index);
    }, [
        open
    ]);
    const contextValue = (0, _react.useMemo)(()=>({
            remove,
            set,
            handleClick: open,
            open: openAt
        }), [
        remove,
        set,
        open,
        openAt
    ]);
    return (0, _reactDefault.default).createElement((0, _contextJs.Context).Provider, {
        value: contextValue
    }, children, contentPortal);
};
Gallery.propTypes = {
    children: (0, _propTypesDefault.default).any,
    options: (0, _propTypesDefault.default).object,
    plugins: (0, _propTypesDefault.default).func,
    uiElements: (0, _propTypesDefault.default).array,
    id: (0, _propTypesDefault.default).oneOfType([
        (0, _propTypesDefault.default).string,
        (0, _propTypesDefault.default).number
    ]),
    onBeforeOpen: (0, _propTypesDefault.default).func,
    onOpen: (0, _propTypesDefault.default).func,
    withCaption: (0, _propTypesDefault.default).bool,
    withDownloadButton: (0, _propTypesDefault.default).bool
};

},{"photoswipe":"eEaUx","react":"21dqq","react-dom":"j6uA9","prop-types":"7wKI2","./helpers/sort-nodes.js":"2iTSM","./helpers/object-to-hash.js":"4uzhx","./helpers/hash-to-object.js":"jBDnX","./helpers/get-hash-without-gid-and-pid.js":"72hqt","./helpers/get-hash-value.js":"gB13d","./helpers/get-base-url.js":"bryhX","./context.js":"iJqLU","./lightbox-stub.js":"gllLN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eEaUx":[function(require,module,exports) {
/*!
  * PhotoSwipe 5.3.4 - https://photoswipe.com
  * (c) 2022 Dmytro Semenov
  */ /** @typedef {import('../photoswipe.js').Point} Point */ /** @typedef {undefined | null | false | '' | 0} Falsy */ /** @typedef {keyof HTMLElementTagNameMap} HTMLElementTagName */ /**
 * @template {HTMLElementTagName | Falsy} [T="div"]
 * @template {Node | undefined} [NodeToAppendElementTo=undefined]
 * @param {string=} className
 * @param {T=} [tagName]
 * @param {NodeToAppendElementTo=} appendToEl
 * @returns {T extends HTMLElementTagName ? HTMLElementTagNameMap[T] : HTMLElementTagNameMap['div']}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>PhotoSwipe);
function createElement(className, tagName, appendToEl) {
    const el = document.createElement(tagName || "div");
    if (className) el.className = className;
    if (appendToEl) appendToEl.appendChild(el);
    // @ts-expect-error
    return el;
}
/**
 * @param {Point} p1
 * @param {Point} p2
 */ function equalizePoints(p1, p2) {
    p1.x = p2.x;
    p1.y = p2.y;
    if (p2.id !== undefined) p1.id = p2.id;
    return p1;
}
/**
 * @param {Point} p
 */ function roundPoint(p) {
    p.x = Math.round(p.x);
    p.y = Math.round(p.y);
}
/**
 * Returns distance between two points.
 *
 * @param {Point} p1
 * @param {Point} p2
 */ function getDistanceBetween(p1, p2) {
    const x = Math.abs(p1.x - p2.x);
    const y = Math.abs(p1.y - p2.y);
    return Math.sqrt(x * x + y * y);
}
/**
 * Whether X and Y positions of points are qual
 *
 * @param {Point} p1
 * @param {Point} p2
 */ function pointsEqual(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}
/**
 * The float result between the min and max values.
 *
 * @param {number} val
 * @param {number} min
 * @param {number} max
 */ function clamp(val, min, max) {
    return Math.min(Math.max(val, min), max);
}
/**
 * Get transform string
 *
 * @param {number} x
 * @param {number=} y
 * @param {number=} scale
 */ function toTransformString(x, y, scale) {
    let propValue = "translate3d(" + x + "px," + (y || 0) + "px" + ",0)";
    if (scale !== undefined) propValue += " scale3d(" + scale + "," + scale + ",1)";
    return propValue;
}
/**
 * Apply transform:translate(x, y) scale(scale) to element
 *
 * @param {HTMLElement} el
 * @param {number} x
 * @param {number=} y
 * @param {number=} scale
 */ function setTransform(el, x, y, scale) {
    el.style.transform = toTransformString(x, y, scale);
}
const defaultCSSEasing = "cubic-bezier(.4,0,.22,1)";
/**
 * Apply CSS transition to element
 *
 * @param {HTMLElement} el
 * @param {string=} prop CSS property to animate
 * @param {number=} duration in ms
 * @param {string=} ease CSS easing function
 */ function setTransitionStyle(el, prop, duration, ease) {
    // inOut: 'cubic-bezier(.4, 0, .22, 1)', // for "toggle state" transitions
    // out: 'cubic-bezier(0, 0, .22, 1)', // for "show" transitions
    // in: 'cubic-bezier(.4, 0, 1, 1)'// for "hide" transitions
    el.style.transition = prop ? prop + " " + duration + "ms " + (ease || defaultCSSEasing) : "none";
}
/**
 * Apply width and height CSS properties to element
 *
 * @param {HTMLElement} el
 * @param {string | number} w
 * @param {string | number} h
 */ function setWidthHeight(el, w, h) {
    el.style.width = typeof w === "number" ? w + "px" : w;
    el.style.height = typeof h === "number" ? h + "px" : h;
}
/**
 * @param {HTMLElement} el
 */ function removeTransitionStyle(el) {
    setTransitionStyle(el);
}
/**
 * @param {HTMLImageElement} img
 * @returns {Promise<HTMLImageElement | void>}
 */ function decodeImage(img) {
    if ("decode" in img) return img.decode().catch(()=>{});
    if (img.complete) return Promise.resolve(img);
    return new Promise((resolve, reject)=>{
        img.onload = ()=>resolve(img);
        img.onerror = reject;
    });
}
/** @typedef {LOAD_STATE[keyof LOAD_STATE]} LoadState */ /** @type {{ IDLE: 'idle'; LOADING: 'loading'; LOADED: 'loaded'; ERROR: 'error' }} */ const LOAD_STATE = {
    IDLE: "idle",
    LOADING: "loading",
    LOADED: "loaded",
    ERROR: "error"
};
/**
 * Check if click or keydown event was dispatched
 * with a special key or via mouse wheel.
 *
 * @param {MouseEvent | KeyboardEvent} e
 */ function specialKeyUsed(e) {
    if (e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) return true;
}
/**
 * Parse `gallery` or `children` options.
 *
 * @param {import('../photoswipe.js').ElementProvider} option
 * @param {string=} legacySelector
 * @param {HTMLElement | Document} [parent]
 * @returns HTMLElement[]
 */ function getElementsFromOption(option, legacySelector, parent = document) {
    /** @type {HTMLElement[]} */ let elements = [];
    if (option instanceof Element) elements = [
        option
    ];
    else if (option instanceof NodeList || Array.isArray(option)) elements = Array.from(option);
    else {
        const selector = typeof option === "string" ? option : legacySelector;
        if (selector) elements = Array.from(parent.querySelectorAll(selector));
    }
    return elements;
}
/**
 * Check if browser is Safari
 *
 * @returns {boolean}
 */ function isSafari() {
    return !!(navigator.vendor && navigator.vendor.match(/apple/i));
}
// Detect passive event listener support
let supportsPassive = false;
/* eslint-disable */ try {
    window.addEventListener("test", null, Object.defineProperty({}, "passive", {
        get: ()=>{
            supportsPassive = true;
        }
    }));
} catch (e) {}
/* eslint-enable */ /**
 * @typedef {Object} PoolItem
 * @prop {HTMLElement | Window | Document} target
 * @prop {string} type
 * @prop {(e: any) => void} listener
 * @prop {boolean} passive
 */ class DOMEvents {
    constructor(){
        /**
     * @type {PoolItem[]}
     * @private
     */ this._pool = [];
    }
    /**
   * Adds event listeners
   *
   * @param {HTMLElement | Window | Document} target
   * @param {string} type Can be multiple, separated by space.
   * @param {(e: any) => void} listener
   * @param {boolean=} passive
   */ add(target, type, listener, passive) {
        this._toggleListener(target, type, listener, passive);
    }
    /**
   * Removes event listeners
   *
   * @param {HTMLElement | Window | Document} target
   * @param {string} type
   * @param {(e: any) => void} listener
   * @param {boolean=} passive
   */ remove(target, type, listener, passive) {
        this._toggleListener(target, type, listener, passive, true);
    }
    /**
   * Removes all bound events
   */ removeAll() {
        this._pool.forEach((poolItem)=>{
            this._toggleListener(poolItem.target, poolItem.type, poolItem.listener, poolItem.passive, true, true);
        });
        this._pool = [];
    }
    /**
   * Adds or removes event
   *
   * @param {HTMLElement | Window | Document} target
   * @param {string} type
   * @param {(e: any) => void} listener
   * @param {boolean} passive
   * @param {boolean=} unbind Whether the event should be added or removed
   * @param {boolean=} skipPool Whether events pool should be skipped
   */ _toggleListener(target, type, listener, passive, unbind, skipPool) {
        if (!target) return;
        const methodName = unbind ? "removeEventListener" : "addEventListener";
        const types = type.split(" ");
        types.forEach((eType)=>{
            if (eType) {
                // Events pool is used to easily unbind all events when PhotoSwipe is closed,
                // so developer doesn't need to do this manually
                if (!skipPool) {
                    if (unbind) // Remove from the events pool
                    this._pool = this._pool.filter((poolItem)=>{
                        return poolItem.type !== eType || poolItem.listener !== listener || poolItem.target !== target;
                    });
                    else // Add to the events pool
                    this._pool.push({
                        target,
                        type: eType,
                        listener,
                        passive
                    });
                }
                // most PhotoSwipe events call preventDefault,
                // and we do not need browser to scroll the page
                const eventOptions = supportsPassive ? {
                    passive: passive || false
                } : false;
                target[methodName](eType, listener, eventOptions);
            }
        });
    }
}
/** @typedef {import('../photoswipe.js').PhotoSwipeOptions} PhotoSwipeOptions */ /** @typedef {import('../photoswipe.js').default} PhotoSwipe */ /** @typedef {import('../slide/slide.js').SlideData} SlideData */ /**
 * @param {PhotoSwipeOptions} options
 * @param {PhotoSwipe} pswp
 */ function getViewportSize(options, pswp) {
    if (options.getViewportSizeFn) {
        const newViewportSize = options.getViewportSizeFn(options, pswp);
        if (newViewportSize) return newViewportSize;
    }
    return {
        x: document.documentElement.clientWidth,
        // TODO: height on mobile is very incosistent due to toolbar
        // find a way to improve this
        //
        // document.documentElement.clientHeight - doesn't seem to work well
        y: window.innerHeight
    };
}
/**
 * Parses padding option.
 * Supported formats:
 *
 * // Object
 * padding: {
 *  top: 0,
 *  bottom: 0,
 *  left: 0,
 *  right: 0
 * }
 *
 * // A function that returns the object
 * paddingFn: (viewportSize, itemData, index) => {
 *  return {
 *    top: 0,
 *    bottom: 0,
 *    left: 0,
 *    right: 0
 *  };
 * }
 *
 * // Legacy variant
 * paddingLeft: 0,
 * paddingRight: 0,
 * paddingTop: 0,
 * paddingBottom: 0,
 *
 * @param {'left' | 'top' | 'bottom' | 'right'} prop
 * @param {PhotoSwipeOptions} options PhotoSwipe options
 * @param {{ x?: number; y?: number }} viewportSize PhotoSwipe viewport size, for example: { x:800, y:600 }
 * @param {SlideData} itemData Data about the slide
 * @param {number} index Slide index
 * @returns {number}
 */ function parsePaddingOption(prop, options, viewportSize, itemData, index) {
    /** @type {number} */ let paddingValue;
    if (options.paddingFn) paddingValue = options.paddingFn(viewportSize, itemData, index)[prop];
    else if (options.padding) paddingValue = options.padding[prop];
    else {
        const legacyPropName = "padding" + prop[0].toUpperCase() + prop.slice(1);
        // @ts-expect-error
        if (options[legacyPropName]) // @ts-expect-error
        paddingValue = options[legacyPropName];
    }
    return paddingValue || 0;
}
/**
 * @param {PhotoSwipeOptions} options
 * @param {{ x?: number; y?: number }} viewportSize
 * @param {SlideData} itemData
 * @param {number} index
 */ function getPanAreaSize(options, viewportSize, itemData, index) {
    return {
        x: viewportSize.x - parsePaddingOption("left", options, viewportSize, itemData, index) - parsePaddingOption("right", options, viewportSize, itemData, index),
        y: viewportSize.y - parsePaddingOption("top", options, viewportSize, itemData, index) - parsePaddingOption("bottom", options, viewportSize, itemData, index)
    };
}
/** @typedef {import('./slide.js').default} Slide */ /** @typedef {{ x?: number; y?: number }} Point */ /** @typedef {'x' | 'y'} Axis */ /**
 * Calculates minimum, maximum and initial (center) bounds of a slide
 */ class PanBounds {
    /**
   * @param {Slide} slide
   */ constructor(slide){
        this.slide = slide;
        this.currZoomLevel = 1;
        /** @type {Point} */ this.center = {};
        /** @type {Point} */ this.max = {};
        /** @type {Point} */ this.min = {};
        this.reset();
    }
    /**
   * _getItemBounds
   *
   * @param {number} currZoomLevel
   */ update(currZoomLevel) {
        this.currZoomLevel = currZoomLevel;
        if (!this.slide.width) this.reset();
        else {
            this._updateAxis("x");
            this._updateAxis("y");
            this.slide.pswp.dispatch("calcBounds", {
                slide: this.slide
            });
        }
    }
    /**
   * _calculateItemBoundsForAxis
   *
   * @param {Axis} axis
   */ _updateAxis(axis) {
        const { pswp  } = this.slide;
        const elSize = this.slide[axis === "x" ? "width" : "height"] * this.currZoomLevel;
        const paddingProp = axis === "x" ? "left" : "top";
        const padding = parsePaddingOption(paddingProp, pswp.options, pswp.viewportSize, this.slide.data, this.slide.index);
        const panAreaSize = this.slide.panAreaSize[axis];
        // Default position of element.
        // By defaul it is center of viewport:
        this.center[axis] = Math.round((panAreaSize - elSize) / 2) + padding;
        // maximum pan position
        this.max[axis] = elSize > panAreaSize ? Math.round(panAreaSize - elSize) + padding : this.center[axis];
        // minimum pan position
        this.min[axis] = elSize > panAreaSize ? padding : this.center[axis];
    }
    // _getZeroBounds
    reset() {
        this.center.x = 0;
        this.center.y = 0;
        this.max.x = 0;
        this.max.y = 0;
        this.min.x = 0;
        this.min.y = 0;
    }
    /**
   * Correct pan position if it's beyond the bounds
   *
   * @param {Axis} axis x or y
   * @param {number} panOffset
   */ correctPan(axis, panOffset) {
        return clamp(panOffset, this.max[axis], this.min[axis]);
    }
}
const MAX_IMAGE_WIDTH = 4000;
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */ /** @typedef {import('../photoswipe.js').PhotoSwipeOptions} PhotoSwipeOptions */ /** @typedef {import('../slide/slide.js').SlideData} SlideData */ /** @typedef {'fit' | 'fill' | number | ((zoomLevelObject: ZoomLevel) => number)} ZoomLevelOption */ /**
 * Calculates zoom levels for specific slide.
 * Depends on viewport size and image size.
 */ class ZoomLevel {
    /**
   * @param {PhotoSwipeOptions} options PhotoSwipe options
   * @param {SlideData} itemData Slide data
   * @param {number} index Slide index
   * @param {PhotoSwipe=} pswp PhotoSwipe instance, can be undefined if not initialized yet
   */ constructor(options, itemData, index, pswp){
        this.pswp = pswp;
        this.options = options;
        this.itemData = itemData;
        this.index = index;
    }
    /**
   * Calculate initial, secondary and maximum zoom level for the specified slide.
   *
   * It should be called when either image or viewport size changes.
   *
   * @param {number} maxWidth
   * @param {number} maxHeight
   * @param {{ x?: number; y?: number }} panAreaSize
   */ update(maxWidth, maxHeight, panAreaSize) {
        this.elementSize = {
            x: maxWidth,
            y: maxHeight
        };
        this.panAreaSize = panAreaSize;
        const hRatio = this.panAreaSize.x / this.elementSize.x;
        const vRatio = this.panAreaSize.y / this.elementSize.y;
        this.fit = Math.min(1, hRatio < vRatio ? hRatio : vRatio);
        this.fill = Math.min(1, hRatio > vRatio ? hRatio : vRatio);
        // zoom.vFill defines zoom level of the image
        // when it has 100% of viewport vertical space (height)
        this.vFill = Math.min(1, vRatio);
        this.initial = this._getInitial();
        this.secondary = this._getSecondary();
        this.max = Math.max(this.initial, this.secondary, this._getMax());
        this.min = Math.min(this.fit, this.initial, this.secondary);
        if (this.pswp) this.pswp.dispatch("zoomLevelsUpdate", {
            zoomLevels: this,
            slideData: this.itemData
        });
    }
    /**
   * Parses user-defined zoom option.
   *
   * @private
   * @param {'initial' | 'secondary' | 'max'} optionPrefix Zoom level option prefix (initial, secondary, max)
   */ _parseZoomLevelOption(optionPrefix) {
        // eslint-disable-next-line max-len
        const optionName = /** @type {'initialZoomLevel' | 'secondaryZoomLevel' | 'maxZoomLevel'} */ optionPrefix + "ZoomLevel";
        const optionValue = this.options[optionName];
        if (!optionValue) return;
        if (typeof optionValue === "function") return optionValue(this);
        if (optionValue === "fill") return this.fill;
        if (optionValue === "fit") return this.fit;
        return Number(optionValue);
    }
    /**
   * Get zoom level to which image will be zoomed after double-tap gesture,
   * or when user clicks on zoom icon,
   * or mouse-click on image itself.
   * If you return 1 image will be zoomed to its original size.
   *
   * @private
   * @return {number}
   */ _getSecondary() {
        let currZoomLevel = this._parseZoomLevelOption("secondary");
        if (currZoomLevel) return currZoomLevel;
        // 3x of "fit" state, but not larger than original
        currZoomLevel = Math.min(1, this.fit * 3);
        if (currZoomLevel * this.elementSize.x > MAX_IMAGE_WIDTH) currZoomLevel = MAX_IMAGE_WIDTH / this.elementSize.x;
        return currZoomLevel;
    }
    /**
   * Get initial image zoom level.
   *
   * @private
   * @return {number}
   */ _getInitial() {
        return this._parseZoomLevelOption("initial") || this.fit;
    }
    /**
   * Maximum zoom level when user zooms
   * via zoom/pinch gesture,
   * via cmd/ctrl-wheel or via trackpad.
   *
   * @private
   * @return {number}
   */ _getMax() {
        const currZoomLevel = this._parseZoomLevelOption("max");
        if (currZoomLevel) return currZoomLevel;
        // max zoom level is x4 from "fit state",
        // used for zoom gesture and ctrl/trackpad zoom
        return Math.max(1, this.fit * 4);
    }
}
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */ /**
 * Renders and allows to control a single slide
 */ class Slide {
    /**
   * @param {SlideData} data
   * @param {number} index
   * @param {PhotoSwipe} pswp
   */ constructor(data, index, pswp){
        this.data = data;
        this.index = index;
        this.pswp = pswp;
        this.isActive = index === pswp.currIndex;
        this.currentResolution = 0;
        /** @type {Point} */ this.panAreaSize = {};
        this.isFirstSlide = this.isActive && !pswp.opener.isOpen;
        this.zoomLevels = new ZoomLevel(pswp.options, data, index, pswp);
        this.pswp.dispatch("gettingData", {
            slide: this,
            data: this.data,
            index
        });
        this.pan = {
            x: 0,
            y: 0
        };
        this.content = this.pswp.contentLoader.getContentBySlide(this);
        this.container = createElement("pswp__zoom-wrap");
        this.currZoomLevel = 1;
        /** @type {number} */ this.width = this.content.width;
        /** @type {number} */ this.height = this.content.height;
        this.bounds = new PanBounds(this);
        this.prevDisplayedWidth = -1;
        this.prevDisplayedHeight = -1;
        this.pswp.dispatch("slideInit", {
            slide: this
        });
    }
    /**
   * If this slide is active/current/visible
   *
   * @param {boolean} isActive
   */ setIsActive(isActive) {
        if (isActive && !this.isActive) // slide just became active
        this.activate();
        else if (!isActive && this.isActive) // slide just became non-active
        this.deactivate();
    }
    /**
   * Appends slide content to DOM
   *
   * @param {HTMLElement} holderElement
   */ append(holderElement) {
        this.holderElement = holderElement;
        this.container.style.transformOrigin = "0 0";
        // Slide appended to DOM
        if (!this.data) return;
        this.calculateSize();
        this.load();
        this.updateContentSize();
        this.appendHeavy();
        this.holderElement.appendChild(this.container);
        this.zoomAndPanToInitial();
        this.pswp.dispatch("firstZoomPan", {
            slide: this
        });
        this.applyCurrentZoomPan();
        this.pswp.dispatch("afterSetContent", {
            slide: this
        });
        if (this.isActive) this.activate();
    }
    load() {
        this.content.load();
        this.pswp.dispatch("slideLoad", {
            slide: this
        });
    }
    /**
   * Append "heavy" DOM elements
   *
   * This may depend on a type of slide,
   * but generally these are large images.
   */ appendHeavy() {
        const { pswp  } = this;
        const appendHeavyNearby = true; // todo
        // Avoid appending heavy elements during animations
        if (this.heavyAppended || !pswp.opener.isOpen || pswp.mainScroll.isShifted() || !this.isActive && !appendHeavyNearby) return;
        if (this.pswp.dispatch("appendHeavy", {
            slide: this
        }).defaultPrevented) return;
        this.heavyAppended = true;
        this.content.append();
        this.pswp.dispatch("appendHeavyContent", {
            slide: this
        });
    }
    /**
   * Triggered when this slide is active (selected).
   *
   * If it's part of opening/closing transition -
   * activate() will trigger after the transition is ended.
   */ activate() {
        this.isActive = true;
        this.appendHeavy();
        this.content.activate();
        this.pswp.dispatch("slideActivate", {
            slide: this
        });
    }
    /**
   * Triggered when this slide becomes inactive.
   *
   * Slide can become inactive only after it was active.
   */ deactivate() {
        this.isActive = false;
        this.content.deactivate();
        if (this.currZoomLevel !== this.zoomLevels.initial) // allow filtering
        this.calculateSize();
        // reset zoom level
        this.currentResolution = 0;
        this.zoomAndPanToInitial();
        this.applyCurrentZoomPan();
        this.updateContentSize();
        this.pswp.dispatch("slideDeactivate", {
            slide: this
        });
    }
    /**
   * The slide should destroy itself, it will never be used again.
   * (unbind all events and destroy internal components)
   */ destroy() {
        this.content.hasSlide = false;
        this.content.remove();
        this.container.remove();
        this.pswp.dispatch("slideDestroy", {
            slide: this
        });
    }
    resize() {
        if (this.currZoomLevel === this.zoomLevels.initial || !this.isActive) {
            // Keep initial zoom level if it was before the resize,
            // as well as when this slide is not active
            // Reset position and scale to original state
            this.calculateSize();
            this.currentResolution = 0;
            this.zoomAndPanToInitial();
            this.applyCurrentZoomPan();
            this.updateContentSize();
        } else {
            // readjust pan position if it's beyond the bounds
            this.calculateSize();
            this.bounds.update(this.currZoomLevel);
            this.panTo(this.pan.x, this.pan.y);
        }
    }
    /**
   * Apply size to current slide content,
   * based on the current resolution and scale.
   *
   * @param {boolean=} force if size should be updated even if dimensions weren't changed
   */ updateContentSize(force) {
        // Use initial zoom level
        // if resolution is not defined (user didn't zoom yet)
        const scaleMultiplier = this.currentResolution || this.zoomLevels.initial;
        if (!scaleMultiplier) return;
        const width = Math.round(this.width * scaleMultiplier) || this.pswp.viewportSize.x;
        const height = Math.round(this.height * scaleMultiplier) || this.pswp.viewportSize.y;
        if (!this.sizeChanged(width, height) && !force) return;
        this.content.setDisplayedSize(width, height);
    }
    /**
   * @param {number} width
   * @param {number} height
   */ sizeChanged(width, height) {
        if (width !== this.prevDisplayedWidth || height !== this.prevDisplayedHeight) {
            this.prevDisplayedWidth = width;
            this.prevDisplayedHeight = height;
            return true;
        }
        return false;
    }
    getPlaceholderElement() {
        if (this.content.placeholder) return this.content.placeholder.element;
    }
    /**
   * Zoom current slide image to...
   *
   * @param {number} destZoomLevel Destination zoom level.
   * @param {{ x?: number; y?: number }} centerPoint
   * Transform origin center point, or false if viewport center should be used.
   * @param {number | false} [transitionDuration] Transition duration, may be set to 0.
   * @param {boolean=} ignoreBounds Minimum and maximum zoom levels will be ignored.
   * @return {boolean=} Returns true if animated.
   */ zoomTo(destZoomLevel, centerPoint, transitionDuration, ignoreBounds) {
        const { pswp  } = this;
        if (!this.isZoomable() || pswp.mainScroll.isShifted()) return;
        pswp.dispatch("beforeZoomTo", {
            destZoomLevel,
            centerPoint,
            transitionDuration
        });
        // stop all pan and zoom transitions
        pswp.animations.stopAllPan();
        // if (!centerPoint) {
        //   centerPoint = pswp.getViewportCenterPoint();
        // }
        const prevZoomLevel = this.currZoomLevel;
        if (!ignoreBounds) destZoomLevel = clamp(destZoomLevel, this.zoomLevels.min, this.zoomLevels.max);
        // if (transitionDuration === undefined) {
        //   transitionDuration = this.pswp.options.zoomAnimationDuration;
        // }
        this.setZoomLevel(destZoomLevel);
        this.pan.x = this.calculateZoomToPanOffset("x", centerPoint, prevZoomLevel);
        this.pan.y = this.calculateZoomToPanOffset("y", centerPoint, prevZoomLevel);
        roundPoint(this.pan);
        const finishTransition = ()=>{
            this._setResolution(destZoomLevel);
            this.applyCurrentZoomPan();
        };
        if (!transitionDuration) finishTransition();
        else pswp.animations.startTransition({
            isPan: true,
            name: "zoomTo",
            target: this.container,
            transform: this.getCurrentTransform(),
            onComplete: finishTransition,
            duration: transitionDuration,
            easing: pswp.options.easing
        });
    }
    /**
   * @param {{ x?: number, y?: number }} [centerPoint]
   */ toggleZoom(centerPoint) {
        this.zoomTo(this.currZoomLevel === this.zoomLevels.initial ? this.zoomLevels.secondary : this.zoomLevels.initial, centerPoint, this.pswp.options.zoomAnimationDuration);
    }
    /**
   * Updates zoom level property and recalculates new pan bounds,
   * unlike zoomTo it does not apply transform (use applyCurrentZoomPan)
   *
   * @param {number} currZoomLevel
   */ setZoomLevel(currZoomLevel) {
        this.currZoomLevel = currZoomLevel;
        this.bounds.update(this.currZoomLevel);
    }
    /**
   * Get pan position after zoom at a given `point`.
   *
   * Always call setZoomLevel(newZoomLevel) beforehand to recalculate
   * pan bounds according to the new zoom level.
   *
   * @param {'x' | 'y'} axis
   * @param {{ x?: number; y?: number }} [point]
   * point based on which zoom is performed, usually refers to the current mouse position,
   * if false - viewport center will be used.
   * @param {number=} prevZoomLevel Zoom level before new zoom was applied.
   */ calculateZoomToPanOffset(axis, point, prevZoomLevel) {
        const totalPanDistance = this.bounds.max[axis] - this.bounds.min[axis];
        if (totalPanDistance === 0) return this.bounds.center[axis];
        if (!point) point = this.pswp.getViewportCenterPoint();
        const zoomFactor = this.currZoomLevel / prevZoomLevel;
        return this.bounds.correctPan(axis, (this.pan[axis] - point[axis]) * zoomFactor + point[axis]);
    }
    /**
   * Apply pan and keep it within bounds.
   *
   * @param {number} panX
   * @param {number} panY
   */ panTo(panX, panY) {
        this.pan.x = this.bounds.correctPan("x", panX);
        this.pan.y = this.bounds.correctPan("y", panY);
        this.applyCurrentZoomPan();
    }
    /**
   * If the slide in the current state can be panned by the user
   */ isPannable() {
        return this.width && this.currZoomLevel > this.zoomLevels.fit;
    }
    /**
   * If the slide can be zoomed
   */ isZoomable() {
        return this.width && this.content.isZoomable();
    }
    /**
   * Apply transform and scale based on
   * the current pan position (this.pan) and zoom level (this.currZoomLevel)
   */ applyCurrentZoomPan() {
        this._applyZoomTransform(this.pan.x, this.pan.y, this.currZoomLevel);
        if (this === this.pswp.currSlide) this.pswp.dispatch("zoomPanUpdate", {
            slide: this
        });
    }
    zoomAndPanToInitial() {
        this.currZoomLevel = this.zoomLevels.initial;
        // pan according to the zoom level
        this.bounds.update(this.currZoomLevel);
        equalizePoints(this.pan, this.bounds.center);
        this.pswp.dispatch("initialZoomPan", {
            slide: this
        });
    }
    /**
   * Set translate and scale based on current resolution
   *
   * @param {number} x
   * @param {number} y
   * @param {number} zoom
   */ _applyZoomTransform(x, y, zoom) {
        zoom /= this.currentResolution || this.zoomLevels.initial;
        setTransform(this.container, x, y, zoom);
    }
    calculateSize() {
        const { pswp  } = this;
        equalizePoints(this.panAreaSize, getPanAreaSize(pswp.options, pswp.viewportSize, this.data, this.index));
        this.zoomLevels.update(this.width, this.height, this.panAreaSize);
        pswp.dispatch("calcSlideSize", {
            slide: this
        });
    }
    getCurrentTransform() {
        const scale = this.currZoomLevel / (this.currentResolution || this.zoomLevels.initial);
        return toTransformString(this.pan.x, this.pan.y, scale);
    }
    /**
   * Set resolution and re-render the image.
   *
   * For example, if the real image size is 2000x1500,
   * and resolution is 0.5 - it will be rendered as 1000x750.
   *
   * Image with zoom level 2 and resolution 0.5 is
   * the same as image with zoom level 1 and resolution 1.
   *
   * Used to optimize animations and make
   * sure that browser renders image in highest quality.
   * Also used by responsive images to load the correct one.
   *
   * @param {number} newResolution
   */ _setResolution(newResolution) {
        if (newResolution === this.currentResolution) return;
        this.currentResolution = newResolution;
        this.updateContentSize();
        this.pswp.dispatch("resolutionChanged");
    }
}
/** @typedef {import('../photoswipe.js').Point} Point */ /** @typedef {import('./gestures.js').default} Gestures */ const PAN_END_FRICTION = 0.35;
const VERTICAL_DRAG_FRICTION = 0.6;
// 1 corresponds to the third of viewport height
const MIN_RATIO_TO_CLOSE = 0.4;
// Minimum speed required to navigate
// to next or previous slide
const MIN_NEXT_SLIDE_SPEED = 0.5;
/**
 * @param {number} initialVelocity
 * @param {number} decelerationRate
 */ function project(initialVelocity, decelerationRate) {
    return initialVelocity * decelerationRate / (1 - decelerationRate);
}
/**
 * Handles single pointer dragging
 */ class DragHandler {
    /**
   * @param {Gestures} gestures
   */ constructor(gestures){
        this.gestures = gestures;
        this.pswp = gestures.pswp;
        /** @type {Point} */ this.startPan = {};
    }
    start() {
        equalizePoints(this.startPan, this.pswp.currSlide.pan);
        this.pswp.animations.stopAll();
    }
    change() {
        const { p1 , prevP1 , dragAxis , pswp  } = this.gestures;
        const { currSlide  } = pswp;
        if (dragAxis === "y" && pswp.options.closeOnVerticalDrag && currSlide.currZoomLevel <= currSlide.zoomLevels.fit && !this.gestures.isMultitouch) {
            // Handle vertical drag to close
            const panY = currSlide.pan.y + (p1.y - prevP1.y);
            if (!pswp.dispatch("verticalDrag", {
                panY
            }).defaultPrevented) {
                this._setPanWithFriction("y", panY, VERTICAL_DRAG_FRICTION);
                const bgOpacity = 1 - Math.abs(this._getVerticalDragRatio(currSlide.pan.y));
                pswp.applyBgOpacity(bgOpacity);
                currSlide.applyCurrentZoomPan();
            }
        } else {
            const mainScrollChanged = this._panOrMoveMainScroll("x");
            if (!mainScrollChanged) {
                this._panOrMoveMainScroll("y");
                roundPoint(currSlide.pan);
                currSlide.applyCurrentZoomPan();
            }
        }
    }
    end() {
        const { pswp , velocity  } = this.gestures;
        const { mainScroll  } = pswp;
        let indexDiff = 0;
        pswp.animations.stopAll();
        // Handle main scroll if it's shifted
        if (mainScroll.isShifted()) {
            // Position of the main scroll relative to the viewport
            const mainScrollShiftDiff = mainScroll.x - mainScroll.getCurrSlideX();
            // Ratio between 0 and 1:
            // 0 - slide is not visible at all,
            // 0.5 - half of the slide is vicible
            // 1 - slide is fully visible
            const currentSlideVisibilityRatio = mainScrollShiftDiff / pswp.viewportSize.x;
            // Go next slide.
            //
            // - if velocity and its direction is matched
            //   and we see at least tiny part of the next slide
            //
            // - or if we see less than 50% of the current slide
            //   and velocity is close to 0
            //
            if (velocity.x < -MIN_NEXT_SLIDE_SPEED && currentSlideVisibilityRatio < 0 || velocity.x < 0.1 && currentSlideVisibilityRatio < -0.5) {
                // Go to next slide
                indexDiff = 1;
                velocity.x = Math.min(velocity.x, 0);
            } else if (velocity.x > MIN_NEXT_SLIDE_SPEED && currentSlideVisibilityRatio > 0 || velocity.x > -0.1 && currentSlideVisibilityRatio > 0.5) {
                // Go to prev slide
                indexDiff = -1;
                velocity.x = Math.max(velocity.x, 0);
            }
            mainScroll.moveIndexBy(indexDiff, true, velocity.x);
        }
        // Restore zoom level
        if (pswp.currSlide.currZoomLevel > pswp.currSlide.zoomLevels.max || this.gestures.isMultitouch) this.gestures.zoomLevels.correctZoomPan(true);
        else {
            // we run two animations instead of one,
            // as each axis has own pan boundaries and thus different spring function
            // (correctZoomPan does not have this functionality,
            //  it animates all properties with single timing function)
            this._finishPanGestureForAxis("x");
            this._finishPanGestureForAxis("y");
        }
    }
    /**
   * @private
   * @param {'x' | 'y'} axis
   */ _finishPanGestureForAxis(axis) {
        const { pswp  } = this;
        const { currSlide  } = pswp;
        const { velocity  } = this.gestures;
        const { pan , bounds  } = currSlide;
        const panPos = pan[axis];
        const restoreBgOpacity = pswp.bgOpacity < 1 && axis === "y";
        // 0.995 means - scroll view loses 0.5% of its velocity per millisecond
        // Inceasing this number will reduce travel distance
        const decelerationRate = 0.995; // 0.99
        // Pan position if there is no bounds
        const projectedPosition = panPos + project(velocity[axis], decelerationRate);
        if (restoreBgOpacity) {
            const vDragRatio = this._getVerticalDragRatio(panPos);
            const projectedVDragRatio = this._getVerticalDragRatio(projectedPosition);
            // If we are above and moving upwards,
            // or if we are below and moving downwards
            if (vDragRatio < 0 && projectedVDragRatio < -MIN_RATIO_TO_CLOSE || vDragRatio > 0 && projectedVDragRatio > MIN_RATIO_TO_CLOSE) {
                pswp.close();
                return;
            }
        }
        // Pan position with corrected bounds
        const correctedPanPosition = bounds.correctPan(axis, projectedPosition);
        // Exit if pan position should not be changed
        // or if speed it too low
        if (panPos === correctedPanPosition) return;
        // Overshoot if the final position is out of pan bounds
        const dampingRatio = correctedPanPosition === projectedPosition ? 1 : 0.82;
        const initialBgOpacity = pswp.bgOpacity;
        const totalPanDist = correctedPanPosition - panPos;
        pswp.animations.startSpring({
            name: "panGesture" + axis,
            isPan: true,
            start: panPos,
            end: correctedPanPosition,
            velocity: velocity[axis],
            dampingRatio,
            onUpdate: (pos)=>{
                // Animate opacity of background relative to Y pan position of an image
                if (restoreBgOpacity && pswp.bgOpacity < 1) {
                    // 0 - start of animation, 1 - end of animation
                    const animationProgressRatio = 1 - (correctedPanPosition - pos) / totalPanDist;
                    // We clamp opacity to keep it between 0 and 1.
                    // As progress ratio can be larger than 1 due to overshoot,
                    // and we do not want to bounce opacity.
                    pswp.applyBgOpacity(clamp(initialBgOpacity + (1 - initialBgOpacity) * animationProgressRatio, 0, 1));
                }
                pan[axis] = Math.floor(pos);
                currSlide.applyCurrentZoomPan();
            }
        });
    }
    /**
   * Update position of the main scroll,
   * or/and update pan position of the current slide.
   *
   * Should return true if it changes (or can change) main scroll.
   *
   * @private
   * @param {'x' | 'y'} axis
   */ _panOrMoveMainScroll(axis) {
        const { p1 , pswp , dragAxis , prevP1 , isMultitouch  } = this.gestures;
        const { currSlide , mainScroll  } = pswp;
        const delta = p1[axis] - prevP1[axis];
        const newMainScrollX = mainScroll.x + delta;
        if (!delta) return;
        // Always move main scroll if image can not be panned
        if (axis === "x" && !currSlide.isPannable() && !isMultitouch) {
            mainScroll.moveTo(newMainScrollX, true);
            return true; // changed main scroll
        }
        const { bounds  } = currSlide;
        const newPan = currSlide.pan[axis] + delta;
        if (pswp.options.allowPanToNext && dragAxis === "x" && axis === "x" && !isMultitouch) {
            const currSlideMainScrollX = mainScroll.getCurrSlideX();
            // Position of the main scroll relative to the viewport
            const mainScrollShiftDiff = mainScroll.x - currSlideMainScrollX;
            const isLeftToRight = delta > 0;
            const isRightToLeft = !isLeftToRight;
            if (newPan > bounds.min[axis] && isLeftToRight) {
                // Panning from left to right, beyond the left edge
                // Wether the image was at minimum pan position (or less)
                // when this drag gesture started.
                // Minimum pan position refers to the left edge of the image.
                const wasAtMinPanPosition = bounds.min[axis] <= this.startPan[axis];
                if (wasAtMinPanPosition) {
                    mainScroll.moveTo(newMainScrollX, true);
                    return true;
                } else this._setPanWithFriction(axis, newPan);
            } else if (newPan < bounds.max[axis] && isRightToLeft) {
                // Paning from right to left, beyond the right edge
                // Maximum pan position refers to the right edge of the image.
                const wasAtMaxPanPosition = this.startPan[axis] <= bounds.max[axis];
                if (wasAtMaxPanPosition) {
                    mainScroll.moveTo(newMainScrollX, true);
                    return true;
                } else this._setPanWithFriction(axis, newPan);
            } else // If main scroll is shifted
            if (mainScrollShiftDiff !== 0) {
                // If main scroll is shifted right
                if (mainScrollShiftDiff > 0 /*&& isRightToLeft*/ ) {
                    mainScroll.moveTo(Math.max(newMainScrollX, currSlideMainScrollX), true);
                    return true;
                } else if (mainScrollShiftDiff < 0 /*&& isLeftToRight*/ ) {
                    // Main scroll is shifted left (Position is less than 0 comparing to the viewport 0)
                    mainScroll.moveTo(Math.min(newMainScrollX, currSlideMainScrollX), true);
                    return true;
                }
            } else // We are within pan bounds, so just pan
            this._setPanWithFriction(axis, newPan);
        } else {
            if (axis === "y") // Do not pan vertically if main scroll is shifted o
            {
                if (!mainScroll.isShifted() && bounds.min.y !== bounds.max.y) this._setPanWithFriction(axis, newPan);
            } else this._setPanWithFriction(axis, newPan);
        }
    }
    //
    // If we move above - the ratio is negative
    // If we move below the ratio is positive
    /**
   * Relation between pan Y position and third of viewport height.
   *
   * When we are at initial position (center bounds) - the ratio is 0,
   * if position is shifted upwards - the ratio is negative,
   * if position is shifted downwards - the ratio is positive.
   *
   * @private
   * @param {number} panY The current pan Y position.
   */ _getVerticalDragRatio(panY) {
        return (panY - this.pswp.currSlide.bounds.center.y) / (this.pswp.viewportSize.y / 3);
    }
    /**
   * Set pan position of the current slide.
   * Apply friction if the position is beyond the pan bounds,
   * or if custom friction is defined.
   *
   * @private
   * @param {'x' | 'y'} axis
   * @param {number} potentialPan
   * @param {number=} customFriction (0.1 - 1)
   */ _setPanWithFriction(axis, potentialPan, customFriction) {
        const { pan , bounds  } = this.pswp.currSlide;
        const correctedPan = bounds.correctPan(axis, potentialPan);
        // If we are out of pan bounds
        if (correctedPan !== potentialPan || customFriction) {
            const delta = Math.round(potentialPan - pan[axis]);
            pan[axis] += delta * (customFriction || PAN_END_FRICTION);
        } else pan[axis] = potentialPan;
    }
}
/** @typedef {import('../photoswipe.js').Point} Point */ /** @typedef {import('./gestures.js').default} Gestures */ const UPPER_ZOOM_FRICTION = 0.05;
const LOWER_ZOOM_FRICTION = 0.15;
/**
 * Get center point between two points
 *
 * @param {Point} p
 * @param {Point} p1
 * @param {Point} p2
 */ function getZoomPointsCenter(p, p1, p2) {
    p.x = (p1.x + p2.x) / 2;
    p.y = (p1.y + p2.y) / 2;
    return p;
}
class ZoomHandler {
    /**
   * @param {Gestures} gestures
   */ constructor(gestures){
        this.gestures = gestures;
        this.pswp = this.gestures.pswp;
        /** @type {Point} */ this._startPan = {};
        /** @type {Point} */ this._startZoomPoint = {};
        /** @type {Point} */ this._zoomPoint = {};
    }
    start() {
        this._startZoomLevel = this.pswp.currSlide.currZoomLevel;
        equalizePoints(this._startPan, this.pswp.currSlide.pan);
        this.pswp.animations.stopAllPan();
        this._wasOverFitZoomLevel = false;
    }
    change() {
        const { p1 , startP1 , p2 , startP2 , pswp  } = this.gestures;
        const { currSlide  } = pswp;
        const minZoomLevel = currSlide.zoomLevels.min;
        const maxZoomLevel = currSlide.zoomLevels.max;
        if (!currSlide.isZoomable() || pswp.mainScroll.isShifted()) return;
        getZoomPointsCenter(this._startZoomPoint, startP1, startP2);
        getZoomPointsCenter(this._zoomPoint, p1, p2);
        let currZoomLevel = 1 / getDistanceBetween(startP1, startP2) * getDistanceBetween(p1, p2) * this._startZoomLevel;
        // slightly over the zoom.fit
        if (currZoomLevel > currSlide.zoomLevels.initial + currSlide.zoomLevels.initial / 15) this._wasOverFitZoomLevel = true;
        if (currZoomLevel < minZoomLevel) {
            if (pswp.options.pinchToClose && !this._wasOverFitZoomLevel && this._startZoomLevel <= currSlide.zoomLevels.initial) {
                // fade out background if zooming out
                const bgOpacity = 1 - (minZoomLevel - currZoomLevel) / (minZoomLevel / 1.2);
                if (!pswp.dispatch("pinchClose", {
                    bgOpacity
                }).defaultPrevented) pswp.applyBgOpacity(bgOpacity);
            } else // Apply the friction if zoom level is below the min
            currZoomLevel = minZoomLevel - (minZoomLevel - currZoomLevel) * LOWER_ZOOM_FRICTION;
        } else if (currZoomLevel > maxZoomLevel) // Apply the friction if zoom level is above the max
        currZoomLevel = maxZoomLevel + (currZoomLevel - maxZoomLevel) * UPPER_ZOOM_FRICTION;
        currSlide.pan.x = this._calculatePanForZoomLevel("x", currZoomLevel);
        currSlide.pan.y = this._calculatePanForZoomLevel("y", currZoomLevel);
        currSlide.setZoomLevel(currZoomLevel);
        currSlide.applyCurrentZoomPan();
    }
    end() {
        const { pswp  } = this;
        const { currSlide  } = pswp;
        if (currSlide.currZoomLevel < currSlide.zoomLevels.initial && !this._wasOverFitZoomLevel && pswp.options.pinchToClose) pswp.close();
        else this.correctZoomPan();
    }
    /**
   * @private
   * @param {'x' | 'y'} axis
   * @param {number} currZoomLevel
   */ _calculatePanForZoomLevel(axis, currZoomLevel) {
        const zoomFactor = currZoomLevel / this._startZoomLevel;
        return this._zoomPoint[axis] - (this._startZoomPoint[axis] - this._startPan[axis]) * zoomFactor;
    }
    /**
   * Correct currZoomLevel and pan if they are
   * beyond minimum or maximum values.
   * With animation.
   *
   * @param {boolean=} ignoreGesture
   * Wether gesture coordinates should be ignored when calculating destination pan position.
   */ correctZoomPan(ignoreGesture) {
        const { pswp  } = this;
        const { currSlide  } = pswp;
        if (!currSlide.isZoomable()) return;
        if (this._zoomPoint.x === undefined) ignoreGesture = true;
        const prevZoomLevel = currSlide.currZoomLevel;
        /** @type {number} */ let destinationZoomLevel;
        let currZoomLevelNeedsChange = true;
        if (prevZoomLevel < currSlide.zoomLevels.initial) destinationZoomLevel = currSlide.zoomLevels.initial;
        else if (prevZoomLevel > currSlide.zoomLevels.max) destinationZoomLevel = currSlide.zoomLevels.max;
        else {
            currZoomLevelNeedsChange = false;
            destinationZoomLevel = prevZoomLevel;
        }
        const initialBgOpacity = pswp.bgOpacity;
        const restoreBgOpacity = pswp.bgOpacity < 1;
        const initialPan = equalizePoints({}, currSlide.pan);
        let destinationPan = equalizePoints({}, initialPan);
        if (ignoreGesture) {
            this._zoomPoint.x = 0;
            this._zoomPoint.y = 0;
            this._startZoomPoint.x = 0;
            this._startZoomPoint.y = 0;
            this._startZoomLevel = prevZoomLevel;
            equalizePoints(this._startPan, initialPan);
        }
        if (currZoomLevelNeedsChange) destinationPan = {
            x: this._calculatePanForZoomLevel("x", destinationZoomLevel),
            y: this._calculatePanForZoomLevel("y", destinationZoomLevel)
        };
        // set zoom level, so pan bounds are updated according to it
        currSlide.setZoomLevel(destinationZoomLevel);
        destinationPan = {
            x: currSlide.bounds.correctPan("x", destinationPan.x),
            y: currSlide.bounds.correctPan("y", destinationPan.y)
        };
        // return zoom level and its bounds to initial
        currSlide.setZoomLevel(prevZoomLevel);
        let panNeedsChange = true;
        if (pointsEqual(destinationPan, initialPan)) panNeedsChange = false;
        if (!panNeedsChange && !currZoomLevelNeedsChange && !restoreBgOpacity) {
            // update resolution after gesture
            currSlide._setResolution(destinationZoomLevel);
            currSlide.applyCurrentZoomPan();
            // nothing to animate
            return;
        }
        pswp.animations.stopAllPan();
        pswp.animations.startSpring({
            isPan: true,
            start: 0,
            end: 1000,
            velocity: 0,
            dampingRatio: 1,
            naturalFrequency: 40,
            onUpdate: (now)=>{
                now /= 1000; // 0 - start, 1 - end
                if (panNeedsChange || currZoomLevelNeedsChange) {
                    if (panNeedsChange) {
                        currSlide.pan.x = initialPan.x + (destinationPan.x - initialPan.x) * now;
                        currSlide.pan.y = initialPan.y + (destinationPan.y - initialPan.y) * now;
                    }
                    if (currZoomLevelNeedsChange) {
                        const newZoomLevel = prevZoomLevel + (destinationZoomLevel - prevZoomLevel) * now;
                        currSlide.setZoomLevel(newZoomLevel);
                    }
                    currSlide.applyCurrentZoomPan();
                }
                // Restore background opacity
                if (restoreBgOpacity && pswp.bgOpacity < 1) // We clamp opacity to keep it between 0 and 1.
                // As progress ratio can be larger than 1 due to overshoot,
                // and we do not want to bounce opacity.
                pswp.applyBgOpacity(clamp(initialBgOpacity + (1 - initialBgOpacity) * now, 0, 1));
            },
            onComplete: ()=>{
                // update resolution after transition ends
                currSlide._setResolution(destinationZoomLevel);
                currSlide.applyCurrentZoomPan();
            }
        });
    }
}
/**
 * @template T
 * @template P
 * @typedef {import('../types.js').AddPostfix<T, P>} AddPostfix<T, P>
 */ /** @typedef {import('./gestures.js').default} Gestures */ /** @typedef {'imageClick' | 'bgClick' | 'tap' | 'doubleTap'} Actions */ /** @typedef {{ x?: number; y?: number }} Point */ /**
 * Whether the tap was performed on the main slide
 * (rather than controls or caption).
 *
 * @param {PointerEvent} event
 */ function didTapOnMainContent(event) {
    return !!/** @type {HTMLElement} */ event.target.closest(".pswp__container");
}
/**
 * Tap, double-tap handler.
 */ class TapHandler {
    /**
   * @param {Gestures} gestures
   */ constructor(gestures){
        this.gestures = gestures;
    }
    /**
   * @param {Point} point
   * @param {PointerEvent} originalEvent
   */ click(point, originalEvent) {
        const targetClassList = /** @type {HTMLElement} */ originalEvent.target.classList;
        const isImageClick = targetClassList.contains("pswp__img");
        const isBackgroundClick = targetClassList.contains("pswp__item") || targetClassList.contains("pswp__zoom-wrap");
        if (isImageClick) this._doClickOrTapAction("imageClick", point, originalEvent);
        else if (isBackgroundClick) this._doClickOrTapAction("bgClick", point, originalEvent);
    }
    /**
   * @param {Point} point
   * @param {PointerEvent} originalEvent
   */ tap(point, originalEvent) {
        if (didTapOnMainContent(originalEvent)) this._doClickOrTapAction("tap", point, originalEvent);
    }
    /**
   * @param {Point} point
   * @param {PointerEvent} originalEvent
   */ doubleTap(point, originalEvent) {
        if (didTapOnMainContent(originalEvent)) this._doClickOrTapAction("doubleTap", point, originalEvent);
    }
    /**
   * @param {Actions} actionName
   * @param {Point} point
   * @param {PointerEvent} originalEvent
   */ _doClickOrTapAction(actionName, point, originalEvent) {
        const { pswp  } = this.gestures;
        const { currSlide  } = pswp;
        const actionFullName = /** @type {AddPostfix<Actions, 'Action'>} */ actionName + "Action";
        const optionValue = pswp.options[actionFullName];
        if (pswp.dispatch(actionFullName, {
            point,
            originalEvent
        }).defaultPrevented) return;
        if (typeof optionValue === "function") {
            optionValue.call(pswp, point, originalEvent);
            return;
        }
        switch(optionValue){
            case "close":
            case "next":
                pswp[optionValue]();
                break;
            case "zoom":
                currSlide.toggleZoom(point);
                break;
            case "zoom-or-close":
                // by default click zooms current image,
                // if it can not be zoomed - gallery will be closed
                if (currSlide.isZoomable() && currSlide.zoomLevels.secondary !== currSlide.zoomLevels.initial) currSlide.toggleZoom(point);
                else if (pswp.options.clickToCloseNonZoomable) pswp.close();
                break;
            case "toggle-controls":
                this.gestures.pswp.element.classList.toggle("pswp--ui-visible");
                break;
        }
    }
}
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */ /** @typedef {import('../photoswipe.js').Point} Point */ // How far should user should drag
// until we can determine that the gesture is swipe and its direction
const AXIS_SWIPE_HYSTERISIS = 10;
//const PAN_END_FRICTION = 0.35;
const DOUBLE_TAP_DELAY = 300; // ms
const MIN_TAP_DISTANCE = 25; // px
/**
 * Gestures class bind touch, pointer or mouse events
 * and emits drag to drag-handler and zoom events zoom-handler.
 *
 * Drag and zoom events are emited in requestAnimationFrame,
 * and only when one of pointers was actually changed.
 */ class Gestures {
    /**
   * @param {PhotoSwipe} pswp
   */ constructor(pswp){
        this.pswp = pswp;
        /** @type {'x' | 'y'} */ this.dragAxis = undefined;
        // point objects are defined once and reused
        // PhotoSwipe keeps track only of two pointers, others are ignored
        /** @type {Point} */ this.p1 = {}; // the first pressed pointer
        /** @type {Point} */ this.p2 = {}; // the second pressed pointer
        /** @type {Point} */ this.prevP1 = {};
        /** @type {Point} */ this.prevP2 = {};
        /** @type {Point} */ this.startP1 = {};
        /** @type {Point} */ this.startP2 = {};
        /** @type {Point} */ this.velocity = {};
        /** @type {Point} */ this._lastStartP1 = {};
        /** @type {Point} */ this._intervalP1 = {};
        this._numActivePoints = 0;
        /** @type {Point[]} */ this._ongoingPointers = [];
        this._touchEventEnabled = "ontouchstart" in window;
        this._pointerEventEnabled = !!window.PointerEvent;
        this.supportsTouch = this._touchEventEnabled || this._pointerEventEnabled && navigator.maxTouchPoints > 1;
        if (!this.supportsTouch) // disable pan to next slide for non-touch devices
        pswp.options.allowPanToNext = false;
        this.drag = new DragHandler(this);
        this.zoomLevels = new ZoomHandler(this);
        this.tapHandler = new TapHandler(this);
        pswp.on("bindEvents", ()=>{
            pswp.events.add(pswp.scrollWrap, "click", (e)=>this._onClick(e));
            if (this._pointerEventEnabled) this._bindEvents("pointer", "down", "up", "cancel");
            else if (this._touchEventEnabled) {
                this._bindEvents("touch", "start", "end", "cancel");
                // In previous versions we also bound mouse event here,
                // in case device supports both touch and mouse events,
                // but newer versions of browsers now support PointerEvent.
                // on iOS10 if you bind touchmove/end after touchstart,
                // and you don't preventDefault touchstart (which PhotoSwipe does),
                // preventDefault will have no effect on touchmove and touchend.
                // Unless you bind it previously.
                pswp.scrollWrap.ontouchmove = ()=>{}; // eslint-disable-line
                pswp.scrollWrap.ontouchend = ()=>{}; // eslint-disable-line
            } else this._bindEvents("mouse", "down", "up");
        });
    }
    /**
   *
   * @param {'mouse' | 'touch' | 'pointer'} pref
   * @param {'down' | 'start'} down
   * @param {'up' | 'end'} up
   * @param {'cancel'} [cancel]
   */ _bindEvents(pref, down, up, cancel) {
        const { pswp  } = this;
        const { events  } = pswp;
        const cancelEvent = cancel ? pref + cancel : "";
        events.add(pswp.scrollWrap, pref + down, this.onPointerDown.bind(this));
        events.add(window, pref + "move", this.onPointerMove.bind(this));
        events.add(window, pref + up, this.onPointerUp.bind(this));
        if (cancelEvent) events.add(pswp.scrollWrap, cancelEvent, this.onPointerUp.bind(this));
    }
    /**
   * @param {PointerEvent} e
   */ onPointerDown(e) {
        // We do not call preventDefault for touch events
        // to allow browser to show native dialog on longpress
        // (the one that allows to save image or open it in new tab).
        //
        // Desktop Safari allows to drag images when preventDefault isn't called on mousedown,
        // even though preventDefault IS called on mousemove. That's why we preventDefault mousedown.
        let isMousePointer;
        if (e.type === "mousedown" || e.pointerType === "mouse") isMousePointer = true;
        // Allow dragging only via left mouse button.
        // http://www.quirksmode.org/js/events_properties.html
        // https://developer.mozilla.org/en-US/docs/Web/API/event.button
        if (isMousePointer && e.button > 0) return;
        const { pswp  } = this;
        // if PhotoSwipe is opening or closing
        if (!pswp.opener.isOpen) {
            e.preventDefault();
            return;
        }
        if (pswp.dispatch("pointerDown", {
            originalEvent: e
        }).defaultPrevented) return;
        if (isMousePointer) {
            pswp.mouseDetected();
            // preventDefault mouse event to prevent
            // browser image drag feature
            this._preventPointerEventBehaviour(e);
        }
        pswp.animations.stopAll();
        this._updatePoints(e, "down");
        this.pointerDown = true;
        if (this._numActivePoints === 1) {
            this.dragAxis = null;
            // we need to store initial point to determine the main axis,
            // drag is activated only after the axis is determined
            equalizePoints(this.startP1, this.p1);
        }
        if (this._numActivePoints > 1) {
            // Tap or double tap should not trigger if more than one pointer
            this._clearTapTimer();
            this.isMultitouch = true;
        } else this.isMultitouch = false;
    }
    /**
   * @param {PointerEvent} e
   */ onPointerMove(e) {
        e.preventDefault(); // always preventDefault move event
        if (!this._numActivePoints) return;
        this._updatePoints(e, "move");
        if (this.pswp.dispatch("pointerMove", {
            originalEvent: e
        }).defaultPrevented) return;
        if (this._numActivePoints === 1 && !this.isDragging) {
            if (!this.dragAxis) this._calculateDragDirection();
            // Drag axis was detected, emit drag.start
            if (this.dragAxis && !this.isDragging) {
                if (this.isZooming) {
                    this.isZooming = false;
                    this.zoomLevels.end();
                }
                this.isDragging = true;
                this._clearTapTimer(); // Tap can not trigger after drag
                // Adjust starting point
                this._updateStartPoints();
                this._intervalTime = Date.now();
                //this._startTime = this._intervalTime;
                this._velocityCalculated = false;
                equalizePoints(this._intervalP1, this.p1);
                this.velocity.x = 0;
                this.velocity.y = 0;
                this.drag.start();
                this._rafStopLoop();
                this._rafRenderLoop();
            }
        } else if (this._numActivePoints > 1 && !this.isZooming) {
            this._finishDrag();
            this.isZooming = true;
            // Adjust starting points
            this._updateStartPoints();
            this.zoomLevels.start();
            this._rafStopLoop();
            this._rafRenderLoop();
        }
    }
    /**
   * @private
   */ _finishDrag() {
        if (this.isDragging) {
            this.isDragging = false;
            // Try to calculate velocity,
            // if it wasn't calculated yet in drag.change
            if (!this._velocityCalculated) this._updateVelocity(true);
            this.drag.end();
            this.dragAxis = null;
        }
    }
    /**
   * @param {PointerEvent} e
   */ onPointerUp(e) {
        if (!this._numActivePoints) return;
        this._updatePoints(e, "up");
        if (this.pswp.dispatch("pointerUp", {
            originalEvent: e
        }).defaultPrevented) return;
        if (this._numActivePoints === 0) {
            this.pointerDown = false;
            this._rafStopLoop();
            if (this.isDragging) this._finishDrag();
            else if (!this.isZooming && !this.isMultitouch) //this.zoomLevels.correctZoomPan();
            this._finishTap(e);
        }
        if (this._numActivePoints < 2 && this.isZooming) {
            this.isZooming = false;
            this.zoomLevels.end();
            if (this._numActivePoints === 1) {
                // Since we have 1 point left, we need to reinitiate drag
                this.dragAxis = null;
                this._updateStartPoints();
            }
        }
    }
    /**
   * @private
   */ _rafRenderLoop() {
        if (this.isDragging || this.isZooming) {
            this._updateVelocity();
            if (this.isDragging) // make sure that pointer moved since the last update
            {
                if (!pointsEqual(this.p1, this.prevP1)) this.drag.change();
            } else if (!pointsEqual(this.p1, this.prevP1) || !pointsEqual(this.p2, this.prevP2)) this.zoomLevels.change();
            this._updatePrevPoints();
            this.raf = requestAnimationFrame(this._rafRenderLoop.bind(this));
        }
    }
    /**
   * Update velocity at 50ms interval
   *
   * @param {boolean=} force
   */ _updateVelocity(force) {
        const time = Date.now();
        const duration = time - this._intervalTime;
        if (duration < 50 && !force) return;
        this.velocity.x = this._getVelocity("x", duration);
        this.velocity.y = this._getVelocity("y", duration);
        this._intervalTime = time;
        equalizePoints(this._intervalP1, this.p1);
        this._velocityCalculated = true;
    }
    /**
   * @private
   * @param {PointerEvent} e
   */ _finishTap(e) {
        const { mainScroll  } = this.pswp;
        // Do not trigger tap events if main scroll is shifted
        if (mainScroll.isShifted()) {
            // restore main scroll position
            // (usually happens if stopped in the middle of animation)
            mainScroll.moveIndexBy(0, true);
            return;
        }
        // Do not trigger tap for touchcancel or pointercancel
        if (e.type.indexOf("cancel") > 0) return;
        // Trigger click instead of tap for mouse events
        if (e.type === "mouseup" || e.pointerType === "mouse") {
            this.tapHandler.click(this.startP1, e);
            return;
        }
        // Disable delay if there is no doubleTapAction
        const tapDelay = this.pswp.options.doubleTapAction ? DOUBLE_TAP_DELAY : 0;
        // If tapTimer is defined - we tapped recently,
        // check if the current tap is close to the previous one,
        // if yes - trigger double tap
        if (this._tapTimer) {
            this._clearTapTimer();
            // Check if two taps were more or less on the same place
            if (getDistanceBetween(this._lastStartP1, this.startP1) < MIN_TAP_DISTANCE) this.tapHandler.doubleTap(this.startP1, e);
        } else {
            equalizePoints(this._lastStartP1, this.startP1);
            this._tapTimer = setTimeout(()=>{
                this.tapHandler.tap(this.startP1, e);
                this._clearTapTimer();
            }, tapDelay);
        }
    }
    /**
   * @private
   */ _clearTapTimer() {
        if (this._tapTimer) {
            clearTimeout(this._tapTimer);
            this._tapTimer = null;
        }
    }
    /**
   * Get velocity for axis
   *
   * @private
   * @param {'x' | 'y'} axis
   * @param {number} duration
   */ _getVelocity(axis, duration) {
        // displacement is like distance, but can be negative.
        const displacement = this.p1[axis] - this._intervalP1[axis];
        if (Math.abs(displacement) > 1 && duration > 5) return displacement / duration;
        return 0;
    }
    /**
   * @private
   */ _rafStopLoop() {
        if (this.raf) {
            cancelAnimationFrame(this.raf);
            this.raf = null;
        }
    }
    /**
   * @private
   * @param {PointerEvent} e
   */ _preventPointerEventBehaviour(e) {
        // TODO find a way to disable e.preventDefault on some elements
        //      via event or some class or something
        e.preventDefault();
        return true;
    }
    /**
   * Parses and normalizes points from the touch, mouse or pointer event.
   * Updates p1 and p2.
   *
   * @private
   * @param {PointerEvent | TouchEvent} e
   * @param {'up' | 'down' | 'move'} pointerType Normalized pointer type
   */ _updatePoints(e, pointerType) {
        if (this._pointerEventEnabled) {
            const pointerEvent = /** @type {PointerEvent} */ e;
            // Try to find the current pointer in ongoing pointers by its ID
            const pointerIndex = this._ongoingPointers.findIndex((ongoingPoiner)=>{
                return ongoingPoiner.id === pointerEvent.pointerId;
            });
            if (pointerType === "up" && pointerIndex > -1) // release the pointer - remove it from ongoing
            this._ongoingPointers.splice(pointerIndex, 1);
            else if (pointerType === "down" && pointerIndex === -1) // add new pointer
            this._ongoingPointers.push(this._convertEventPosToPoint(pointerEvent, {}));
            else if (pointerIndex > -1) // update existing pointer
            this._convertEventPosToPoint(pointerEvent, this._ongoingPointers[pointerIndex]);
            this._numActivePoints = this._ongoingPointers.length;
            // update points that PhotoSwipe uses
            // to calculate position and scale
            if (this._numActivePoints > 0) equalizePoints(this.p1, this._ongoingPointers[0]);
            if (this._numActivePoints > 1) equalizePoints(this.p2, this._ongoingPointers[1]);
        } else {
            const touchEvent = /** @type {TouchEvent} */ e;
            this._numActivePoints = 0;
            if (touchEvent.type.indexOf("touch") > -1) // Touch Event
            // https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent
            {
                if (touchEvent.touches && touchEvent.touches.length > 0) {
                    this._convertEventPosToPoint(touchEvent.touches[0], this.p1);
                    this._numActivePoints++;
                    if (touchEvent.touches.length > 1) {
                        this._convertEventPosToPoint(touchEvent.touches[1], this.p2);
                        this._numActivePoints++;
                    }
                }
            } else {
                // Mouse Event
                this._convertEventPosToPoint(/** @type {PointerEvent} */ e, this.p1);
                if (pointerType === "up") // clear all points on mouseup
                this._numActivePoints = 0;
                else this._numActivePoints++;
            }
        }
    }
    // update points that were used during previous rAF tick
    _updatePrevPoints() {
        equalizePoints(this.prevP1, this.p1);
        equalizePoints(this.prevP2, this.p2);
    }
    // update points at the start of gesture
    _updateStartPoints() {
        equalizePoints(this.startP1, this.p1);
        equalizePoints(this.startP2, this.p2);
        this._updatePrevPoints();
    }
    _calculateDragDirection() {
        if (this.pswp.mainScroll.isShifted()) // if main scroll position is shifted – direction is always horizontal
        this.dragAxis = "x";
        else {
            // calculate delta of the last touchmove tick
            const diff = Math.abs(this.p1.x - this.startP1.x) - Math.abs(this.p1.y - this.startP1.y);
            if (diff !== 0) {
                // check if pointer was shifted horizontally or vertically
                const axisToCheck = diff > 0 ? "x" : "y";
                if (Math.abs(this.p1[axisToCheck] - this.startP1[axisToCheck]) >= AXIS_SWIPE_HYSTERISIS) this.dragAxis = axisToCheck;
            }
        }
    }
    /**
   * Converts touch, pointer or mouse event
   * to PhotoSwipe point.
   *
   * @private
   * @param {Touch | PointerEvent} e
   * @param {Point} p
   */ _convertEventPosToPoint(e, p) {
        p.x = e.pageX - this.pswp.offset.x;
        p.y = e.pageY - this.pswp.offset.y;
        if ("pointerId" in e) p.id = e.pointerId;
        else if (e.identifier !== undefined) p.id = e.identifier;
        return p;
    }
    /**
   * @private
   * @param {PointerEvent} e
   */ _onClick(e) {
        // Do not allow click event to pass through after drag
        if (this.pswp.mainScroll.isShifted()) {
            e.preventDefault();
            e.stopPropagation();
        }
    }
}
/** @typedef {import('./photoswipe.js').default} PhotoSwipe */ /** @typedef {import('./slide/slide.js').default} Slide */ /** @typedef {{ el: HTMLDivElement; slide?: Slide }} ItemHolder */ const MAIN_SCROLL_END_FRICTION = 0.35;
// const MIN_SWIPE_TRANSITION_DURATION = 250;
// const MAX_SWIPE_TRABSITION_DURATION = 500;
// const DEFAULT_SWIPE_TRANSITION_DURATION = 333;
/**
 * Handles movement of the main scrolling container
 * (for example, it repositions when user swipes left or right).
 *
 * Also stores its state.
 */ class MainScroll {
    /**
   * @param {PhotoSwipe} pswp
   */ constructor(pswp){
        this.pswp = pswp;
        this.x = 0;
        /** @type {number} */ this.slideWidth = undefined;
        /** @type {ItemHolder[]} */ this.itemHolders = undefined;
        this.resetPosition();
    }
    /**
   * Position the scroller and slide containers
   * according to viewport size.
   *
   * @param {boolean=} resizeSlides Whether slides content should resized
   */ resize(resizeSlides) {
        const { pswp  } = this;
        const newSlideWidth = Math.round(pswp.viewportSize.x + pswp.viewportSize.x * pswp.options.spacing);
        // Mobile browsers might trigger a resize event during a gesture.
        // (due to toolbar appearing or hiding).
        // Avoid re-adjusting main scroll position if width wasn't changed
        const slideWidthChanged = newSlideWidth !== this.slideWidth;
        if (slideWidthChanged) {
            this.slideWidth = newSlideWidth;
            this.moveTo(this.getCurrSlideX());
        }
        this.itemHolders.forEach((itemHolder, index)=>{
            if (slideWidthChanged) setTransform(itemHolder.el, (index + this._containerShiftIndex) * this.slideWidth);
            if (resizeSlides && itemHolder.slide) itemHolder.slide.resize();
        });
    }
    /**
   * Reset X position of the main scroller to zero
   */ resetPosition() {
        // Position on the main scroller (offset)
        // it is independent from slide index
        this._currPositionIndex = 0;
        this._prevPositionIndex = 0;
        // This will force recalculation of size on next resize()
        this.slideWidth = 0;
        // _containerShiftIndex*viewportSize will give you amount of transform of the current slide
        this._containerShiftIndex = -1;
    }
    /**
   * Create and append array of three items
   * that hold data about slides in DOM
   */ appendHolders() {
        this.itemHolders = [];
        // append our three slide holders -
        // previous, current, and next
        for(let i = 0; i < 3; i++){
            const el = createElement("pswp__item", false, this.pswp.container);
            el.setAttribute("role", "group");
            el.setAttribute("aria-roledescription", "slide");
            el.setAttribute("aria-hidden", "true");
            // hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)
            el.style.display = i === 1 ? "block" : "none";
            this.itemHolders.push({
                el
            });
        }
    }
    /**
   * Whether the main scroll can be horizontally swiped to the next or previous slide.
   */ canBeSwiped() {
        return this.pswp.getNumItems() > 1;
    }
    /**
   * Move main scroll by X amount of slides.
   * For example:
   *   `-1` will move to the previous slide,
   *    `0` will reset the scroll position of the current slide,
   *    `3` will move three slides forward
   *
   * If loop option is enabled - index will be automatically looped too,
   * (for example `-1` will move to the last slide of the gallery).
   *
   * @param {number} diff
   * @param {boolean=} animate
   * @param {number=} velocityX
   * @returns {boolean} whether index was changed or not
   */ moveIndexBy(diff, animate, velocityX) {
        const { pswp  } = this;
        let newIndex = pswp.potentialIndex + diff;
        const numSlides = pswp.getNumItems();
        if (pswp.canLoop()) {
            newIndex = pswp.getLoopedIndex(newIndex);
            const distance = (diff + numSlides) % numSlides;
            if (distance <= numSlides / 2) // go forward
            diff = distance;
            else // go backwards
            diff = distance - numSlides;
        } else {
            if (newIndex < 0) newIndex = 0;
            else if (newIndex >= numSlides) newIndex = numSlides - 1;
            diff = newIndex - pswp.potentialIndex;
        }
        pswp.potentialIndex = newIndex;
        this._currPositionIndex -= diff;
        pswp.animations.stopMainScroll();
        const destinationX = this.getCurrSlideX();
        if (!animate) {
            this.moveTo(destinationX);
            this.updateCurrItem();
        } else {
            pswp.animations.startSpring({
                isMainScroll: true,
                start: this.x,
                end: destinationX,
                velocity: velocityX || 0,
                naturalFrequency: 30,
                dampingRatio: 1,
                onUpdate: (x)=>{
                    this.moveTo(x);
                },
                onComplete: ()=>{
                    this.updateCurrItem();
                    pswp.appendHeavy();
                }
            });
            let currDiff = pswp.potentialIndex - pswp.currIndex;
            if (pswp.canLoop()) {
                const currDistance = (currDiff + numSlides) % numSlides;
                if (currDistance <= numSlides / 2) // go forward
                currDiff = currDistance;
                else // go backwards
                currDiff = currDistance - numSlides;
            }
            // Force-append new slides during transition
            // if difference between slides is more than 1
            if (Math.abs(currDiff) > 1) this.updateCurrItem();
        }
        if (diff) return true;
    }
    /**
   * X position of the main scroll for the current slide
   * (ignores position during dragging)
   */ getCurrSlideX() {
        return this.slideWidth * this._currPositionIndex;
    }
    /**
   * Whether scroll position is shifted.
   * For example, it will return true if the scroll is being dragged or animated.
   */ isShifted() {
        return this.x !== this.getCurrSlideX();
    }
    /**
   * Update slides X positions and set their content
   */ updateCurrItem() {
        const { pswp  } = this;
        const positionDifference = this._prevPositionIndex - this._currPositionIndex;
        if (!positionDifference) return;
        this._prevPositionIndex = this._currPositionIndex;
        pswp.currIndex = pswp.potentialIndex;
        let diffAbs = Math.abs(positionDifference);
        let tempHolder;
        if (diffAbs >= 3) {
            this._containerShiftIndex += positionDifference + (positionDifference > 0 ? -3 : 3);
            diffAbs = 3;
        }
        for(let i = 0; i < diffAbs; i++)if (positionDifference > 0) {
            tempHolder = this.itemHolders.shift();
            this.itemHolders[2] = tempHolder; // move first to last
            this._containerShiftIndex++;
            setTransform(tempHolder.el, (this._containerShiftIndex + 2) * this.slideWidth);
            pswp.setContent(tempHolder, pswp.currIndex - diffAbs + i + 2);
        } else {
            tempHolder = this.itemHolders.pop();
            this.itemHolders.unshift(tempHolder); // move last to first
            this._containerShiftIndex--;
            setTransform(tempHolder.el, this._containerShiftIndex * this.slideWidth);
            pswp.setContent(tempHolder, pswp.currIndex + diffAbs - i - 2);
        }
        // Reset transfrom every 50ish navigations in one direction.
        //
        // Otherwise transform will keep growing indefinitely,
        // which might cause issues as browsers have a maximum transform limit.
        // I wasn't able to reach it, but just to be safe.
        // This should not cause noticable lag.
        if (Math.abs(this._containerShiftIndex) > 50 && !this.isShifted()) {
            this.resetPosition();
            this.resize();
        }
        // Pan transition might be running (and consntantly updating pan position)
        pswp.animations.stopAllPan();
        this.itemHolders.forEach((itemHolder, i)=>{
            if (itemHolder.slide) // Slide in the 2nd holder is always active
            itemHolder.slide.setIsActive(i === 1);
        });
        pswp.currSlide = this.itemHolders[1].slide;
        pswp.contentLoader.updateLazy(positionDifference);
        if (pswp.currSlide) pswp.currSlide.applyCurrentZoomPan();
        pswp.dispatch("change");
    }
    /**
   * Move the X position of the main scroll container
   *
   * @param {number} x
   * @param {boolean=} dragging
   */ moveTo(x, dragging) {
        /** @type {number} */ let newSlideIndexOffset;
        /** @type {number} */ let delta;
        if (!this.pswp.canLoop() && dragging) {
            // Apply friction
            newSlideIndexOffset = (this.slideWidth * this._currPositionIndex - x) / this.slideWidth;
            newSlideIndexOffset += this.pswp.currIndex;
            delta = Math.round(x - this.x);
            if (newSlideIndexOffset < 0 && delta > 0 || newSlideIndexOffset >= this.pswp.getNumItems() - 1 && delta < 0) x = this.x + delta * MAIN_SCROLL_END_FRICTION;
        }
        this.x = x;
        setTransform(this.pswp.container, x);
        this.pswp.dispatch("moveMainScroll", {
            x,
            dragging
        });
    }
}
/** @typedef {import('./photoswipe.js').default} PhotoSwipe */ /**
 * @template T
 * @typedef {import('./types.js').Methods<T>} Methods<T>
 */ /**
 * - Manages keyboard shortcuts.
 * - Heps trap focus within photoswipe.
 */ class Keyboard {
    /**
   * @param {PhotoSwipe} pswp
   */ constructor(pswp){
        this.pswp = pswp;
        pswp.on("bindEvents", ()=>{
            // Dialog was likely opened by keyboard if initial point is not defined
            if (!pswp.options.initialPointerPos) // focus causes layout,
            // which causes lag during the animation,
            // that's why we delay it until the opener transition ends
            this._focusRoot();
            pswp.events.add(document, "focusin", this._onFocusIn.bind(this));
            pswp.events.add(document, "keydown", this._onKeyDown.bind(this));
        });
        const lastActiveElement = /** @type {HTMLElement} */ document.activeElement;
        pswp.on("destroy", ()=>{
            if (pswp.options.returnFocus && lastActiveElement && this._wasFocused) lastActiveElement.focus();
        });
    }
    _focusRoot() {
        if (!this._wasFocused) {
            this.pswp.element.focus();
            this._wasFocused = true;
        }
    }
    /**
   * @param {KeyboardEvent} e
   */ _onKeyDown(e) {
        const { pswp  } = this;
        if (pswp.dispatch("keydown", {
            originalEvent: e
        }).defaultPrevented) return;
        if (specialKeyUsed(e)) // don't do anything if special key pressed
        // to prevent from overriding default browser actions
        // for example, in Chrome on Mac cmd+arrow-left returns to previous page
        return;
        /** @type {Methods<PhotoSwipe>} */ let keydownAction;
        /** @type {'x' | 'y'} */ let axis;
        let isForward;
        switch(e.keyCode){
            case 27:
                if (pswp.options.escKey) keydownAction = "close";
                break;
            case 90:
                keydownAction = "toggleZoom";
                break;
            case 37:
                axis = "x";
                break;
            case 38:
                axis = "y";
                break;
            case 39:
                axis = "x";
                isForward = true;
                break;
            case 40:
                isForward = true;
                axis = "y";
                break;
            case 9:
                this._focusRoot();
                break;
        }
        // if left/right/top/bottom key
        if (axis) {
            // prevent page scroll
            e.preventDefault();
            const { currSlide  } = pswp;
            if (pswp.options.arrowKeys && axis === "x" && pswp.getNumItems() > 1) keydownAction = isForward ? "next" : "prev";
            else if (currSlide && currSlide.currZoomLevel > currSlide.zoomLevels.fit) {
                // up/down arrow keys pan the image vertically
                // left/right arrow keys pan horizontally.
                // Unless there is only one image,
                // or arrowKeys option is disabled
                currSlide.pan[axis] += isForward ? -80 : 80;
                currSlide.panTo(currSlide.pan.x, currSlide.pan.y);
            }
        }
        if (keydownAction) {
            e.preventDefault();
            pswp[keydownAction]();
        }
    }
    /**
   * Trap focus inside photoswipe
   *
   * @param {FocusEvent} e
   */ _onFocusIn(e) {
        const { template  } = this.pswp;
        if (document !== e.target && template !== e.target && !template.contains(/** @type {Node} */ e.target)) // focus root element
        template.focus();
    }
}
const DEFAULT_EASING = "cubic-bezier(.4,0,.22,1)";
/** @typedef {import('./animations.js').AnimationProps} AnimationProps */ /**
 * Runs CSS transition.
 */ class CSSAnimation {
    /**
   * onComplete can be unpredictable, be careful about current state
   *
   * @param {AnimationProps} props
   */ constructor(props){
        this.props = props;
        const { target , onComplete , transform , onFinish  } = props;
        let { duration , easing  } = props;
        /** @type {() => void} */ this.onFinish = onFinish;
        // support only transform and opacity
        const prop = transform ? "transform" : "opacity";
        const propValue = props[prop];
        /** @private */ this._target = target;
        /** @private */ this._onComplete = onComplete;
        duration = duration || 333;
        easing = easing || DEFAULT_EASING;
        /** @private */ this._onTransitionEnd = this._onTransitionEnd.bind(this);
        // Using timeout hack to make sure that animation
        // starts even if the animated property was changed recently,
        // otherwise transitionend might not fire or transiton won't start.
        // https://drafts.csswg.org/css-transitions/#starting
        //
        // ¯\_(ツ)_/¯
        /** @private */ this._helperTimeout = setTimeout(()=>{
            setTransitionStyle(target, prop, duration, easing);
            this._helperTimeout = setTimeout(()=>{
                target.addEventListener("transitionend", this._onTransitionEnd, false);
                target.addEventListener("transitioncancel", this._onTransitionEnd, false);
                // Safari occasionally does not emit transitionend event
                // if element propery was modified during the transition,
                // which may be caused by resize or third party component,
                // using timeout as a safety fallback
                this._helperTimeout = setTimeout(()=>{
                    this._finalizeAnimation();
                }, duration + 500);
                target.style[prop] = propValue;
            }, 30); // Do not reduce this number
        }, 0);
    }
    /**
   * @private
   * @param {TransitionEvent} e
   */ _onTransitionEnd(e) {
        if (e.target === this._target) this._finalizeAnimation();
    }
    /**
   * @private
   */ _finalizeAnimation() {
        if (!this._finished) {
            this._finished = true;
            this.onFinish();
            if (this._onComplete) this._onComplete();
        }
    }
    // Destroy is called automatically onFinish
    destroy() {
        if (this._helperTimeout) clearTimeout(this._helperTimeout);
        removeTransitionStyle(this._target);
        this._target.removeEventListener("transitionend", this._onTransitionEnd, false);
        this._target.removeEventListener("transitioncancel", this._onTransitionEnd, false);
        if (!this._finished) this._finalizeAnimation();
    }
}
const DEFAULT_NATURAL_FREQUENCY = 12;
const DEFAULT_DAMPING_RATIO = 0.75;
/**
 * Spring easing helper
 */ class SpringEaser {
    /**
   * @param {number} initialVelocity Initial velocity, px per ms.
   *
   * @param {number} dampingRatio
   * Determines how bouncy animation will be.
   * From 0 to 1, 0 - always overshoot, 1 - do not overshoot.
   * "overshoot" refers to part of animation that
   * goes beyond the final value.
   *
   * @param {number} naturalFrequency
   * Determines how fast animation will slow down.
   * The higher value - the stiffer the transition will be,
   * and the faster it will slow down.
   * Recommended value from 10 to 50
   */ constructor(initialVelocity, dampingRatio, naturalFrequency){
        this.velocity = initialVelocity * 1000; // convert to "pixels per second"
        // https://en.wikipedia.org/wiki/Damping_ratio
        this._dampingRatio = dampingRatio || DEFAULT_DAMPING_RATIO;
        // https://en.wikipedia.org/wiki/Natural_frequency
        this._naturalFrequency = naturalFrequency || DEFAULT_NATURAL_FREQUENCY;
        if (this._dampingRatio < 1) this._dampedFrequency = this._naturalFrequency * Math.sqrt(1 - this._dampingRatio * this._dampingRatio);
    }
    /**
   * @param {number} deltaPosition Difference between current and end position of the animation
   * @param {number} deltaTime Frame duration in milliseconds
   *
   * @returns {number} Displacement, relative to the end position.
   */ easeFrame(deltaPosition, deltaTime) {
        // Inspired by Apple Webkit and Android spring function implementation
        // https://en.wikipedia.org/wiki/Oscillation
        // https://en.wikipedia.org/wiki/Damping_ratio
        // we ignore mass (assume that it's 1kg)
        let displacement = 0;
        let coeff;
        deltaTime /= 1000;
        const naturalDumpingPow = Math.E ** (-this._dampingRatio * this._naturalFrequency * deltaTime);
        if (this._dampingRatio === 1) {
            coeff = this.velocity + this._naturalFrequency * deltaPosition;
            displacement = (deltaPosition + coeff * deltaTime) * naturalDumpingPow;
            this.velocity = displacement * -this._naturalFrequency + coeff * naturalDumpingPow;
        } else if (this._dampingRatio < 1) {
            coeff = 1 / this._dampedFrequency * (this._dampingRatio * this._naturalFrequency * deltaPosition + this.velocity);
            const dumpedFCos = Math.cos(this._dampedFrequency * deltaTime);
            const dumpedFSin = Math.sin(this._dampedFrequency * deltaTime);
            displacement = naturalDumpingPow * (deltaPosition * dumpedFCos + coeff * dumpedFSin);
            this.velocity = displacement * -this._naturalFrequency * this._dampingRatio + naturalDumpingPow * (-this._dampedFrequency * deltaPosition * dumpedFSin + this._dampedFrequency * coeff * dumpedFCos);
        }
        // Overdamped (>1) damping ratio is not supported
        return displacement;
    }
}
/** @typedef {import('./animations.js').AnimationProps} AnimationProps */ class SpringAnimation {
    /**
   * @param {AnimationProps} props
   */ constructor(props){
        this.props = props;
        const { start , end , velocity , onUpdate , onComplete , onFinish , dampingRatio , naturalFrequency  } = props;
        /** @type {() => void} */ this.onFinish = onFinish;
        const easer = new SpringEaser(velocity, dampingRatio, naturalFrequency);
        let prevTime = Date.now();
        let deltaPosition = start - end;
        const animationLoop = ()=>{
            if (this._raf) {
                deltaPosition = easer.easeFrame(deltaPosition, Date.now() - prevTime);
                // Stop the animation if velocity is low and position is close to end
                if (Math.abs(deltaPosition) < 1 && Math.abs(easer.velocity) < 50) {
                    // Finalize the animation
                    onUpdate(end);
                    if (onComplete) onComplete();
                    this.onFinish();
                } else {
                    prevTime = Date.now();
                    onUpdate(deltaPosition + end);
                    this._raf = requestAnimationFrame(animationLoop);
                }
            }
        };
        this._raf = requestAnimationFrame(animationLoop);
    }
    // Destroy is called automatically onFinish
    destroy() {
        if (this._raf >= 0) cancelAnimationFrame(this._raf);
        this._raf = null;
    }
}
/** @typedef {SpringAnimation | CSSAnimation} Animation */ /**
 * @typedef {Object} AnimationProps
 *
 * @prop {HTMLElement=} target
 *
 * @prop {string=} name
 *
 * @prop {number=} start
 * @prop {number=} end
 * @prop {number=} duration
 * @prop {number=} velocity
 * @prop {number=} dampingRatio
 * @prop {number=} naturalFrequency
 *
 * @prop {(end: number) => void} [onUpdate]
 * @prop {() => void} [onComplete]
 * @prop {() => void} [onFinish]
 *
 * @prop {string=} transform
 * @prop {string=} opacity
 * @prop {string=} easing
 *
 * @prop {boolean=} isPan
 * @prop {boolean=} isMainScroll
 */ /**
 * Manages animations
 */ class Animations {
    constructor(){
        /** @type {Animation[]} */ this.activeAnimations = [];
    }
    /**
   * @param {AnimationProps} props
   */ startSpring(props) {
        this._start(props, true);
    }
    /**
   * @param {AnimationProps} props
   */ startTransition(props) {
        this._start(props);
    }
    /**
   * @param {AnimationProps} props
   * @param {boolean=} isSpring
   */ _start(props, isSpring) {
        /** @type {Animation} */ let animation;
        if (isSpring) animation = new SpringAnimation(props);
        else animation = new CSSAnimation(props);
        this.activeAnimations.push(animation);
        animation.onFinish = ()=>this.stop(animation);
        return animation;
    }
    /**
   * @param {Animation} animation
   */ stop(animation) {
        animation.destroy();
        const index = this.activeAnimations.indexOf(animation);
        if (index > -1) this.activeAnimations.splice(index, 1);
    }
    stopAll() {
        this.activeAnimations.forEach((animation)=>{
            animation.destroy();
        });
        this.activeAnimations = [];
    }
    /**
   * Stop all pan or zoom transitions
   */ stopAllPan() {
        this.activeAnimations = this.activeAnimations.filter((animation)=>{
            if (animation.props.isPan) {
                animation.destroy();
                return false;
            }
            return true;
        });
    }
    stopMainScroll() {
        this.activeAnimations = this.activeAnimations.filter((animation)=>{
            if (animation.props.isMainScroll) {
                animation.destroy();
                return false;
            }
            return true;
        });
    }
    /**
   * Returns true if main scroll transition is running
   */ // isMainScrollRunning() {
    //   return this.activeAnimations.some((animation) => {
    //     return animation.props.isMainScroll;
    //   });
    // }
    /**
   * Returns true if any pan or zoom transition is running
   */ isPanRunning() {
        return this.activeAnimations.some((animation)=>{
            return animation.props.isPan;
        });
    }
}
/** @typedef {import('./photoswipe.js').default} PhotoSwipe */ /**
 * Handles scroll wheel.
 * Can pan and zoom current slide image.
 */ class ScrollWheel {
    /**
   * @param {PhotoSwipe} pswp
   */ constructor(pswp){
        this.pswp = pswp;
        pswp.events.add(pswp.element, "wheel", this._onWheel.bind(this));
    }
    /**
   * @private
   * @param {WheelEvent} e
   */ _onWheel(e) {
        e.preventDefault();
        const { currSlide  } = this.pswp;
        let { deltaX , deltaY  } = e;
        if (!currSlide) return;
        if (this.pswp.dispatch("wheel", {
            originalEvent: e
        }).defaultPrevented) return;
        if (e.ctrlKey || this.pswp.options.wheelToZoom) // zoom
        {
            if (currSlide.isZoomable()) {
                let zoomFactor = -deltaY;
                if (e.deltaMode === 1 /* DOM_DELTA_LINE */ ) zoomFactor *= 0.05;
                else zoomFactor *= e.deltaMode ? 1 : 0.002;
                zoomFactor = 2 ** zoomFactor;
                const destZoomLevel = currSlide.currZoomLevel * zoomFactor;
                currSlide.zoomTo(destZoomLevel, {
                    x: e.clientX,
                    y: e.clientY
                });
            }
        } else // pan
        if (currSlide.isPannable()) {
            if (e.deltaMode === 1 /* DOM_DELTA_LINE */ ) {
                // 18 - average line height
                deltaX *= 18;
                deltaY *= 18;
            }
            currSlide.panTo(currSlide.pan.x - deltaX, currSlide.pan.y - deltaY);
        }
    }
}
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */ /**
 * @template T
 * @typedef {import('../types.js').Methods<T>} Methods<T>
 */ /**
 * @typedef {Object} UIElementMarkupProps
 * @prop {boolean=} isCustomSVG
 * @prop {string} inner
 * @prop {string=} outlineID
 * @prop {number | string} [size]
 */ /**
 * @typedef {Object} UIElementData
 * @prop {DefaultUIElements | string} [name]
 * @prop {string=} className
 * @prop {UIElementMarkup=} html
 * @prop {boolean=} isButton
 * @prop {keyof HTMLElementTagNameMap} [tagName]
 * @prop {string=} title
 * @prop {string=} ariaLabel
 * @prop {(element: HTMLElement, pswp: PhotoSwipe) => void} [onInit]
 * @prop {Methods<PhotoSwipe> | ((e: MouseEvent, element: HTMLElement, pswp: PhotoSwipe) => void)} [onClick]
 * @prop {'bar' | 'wrapper' | 'root'} [appendTo]
 * @prop {number=} order
 */ /** @typedef {'arrowPrev' | 'arrowNext' | 'close' | 'zoom' | 'counter'} DefaultUIElements */ /** @typedef {string | UIElementMarkupProps} UIElementMarkup */ /**
 * @param {UIElementMarkup} [htmlData]
 */ function addElementHTML(htmlData) {
    if (typeof htmlData === "string") // Allow developers to provide full svg,
    // For example:
    // <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true" class="pswp__icn">
    //   <path d="..." />
    //   <circle ... />
    // </svg>
    // Can also be any HTML string.
    return htmlData;
    if (!htmlData || !htmlData.isCustomSVG) return "";
    const svgData = htmlData;
    let out = '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 %d %d" width="%d" height="%d">';
    // replace all %d with size
    out = out.split("%d").join(/** @type {string} */ svgData.size || 32);
    // Icons may contain outline/shadow,
    // to make it we "clone" base icon shape and add border to it.
    // Icon itself and border are styled via CSS.
    //
    // Property shadowID defines ID of element that should be cloned.
    if (svgData.outlineID) out += '<use class="pswp__icn-shadow" xlink:href="#' + svgData.outlineID + '"/>';
    out += svgData.inner;
    out += "</svg>";
    return out;
}
class UIElement {
    /**
   * @param {PhotoSwipe} pswp
   * @param {UIElementData} data
   */ constructor(pswp, data){
        const name = data.name || data.className;
        let elementHTML = data.html;
        // @ts-expect-error lookup only by `data.name` maybe?
        if (pswp.options[name] === false) // exit if element is disabled from options
        return;
        // Allow to override SVG icons from options
        // @ts-expect-error lookup only by `data.name` maybe?
        if (typeof pswp.options[name + "SVG"] === "string") // arrowPrevSVG
        // arrowNextSVG
        // closeSVG
        // zoomSVG
        // @ts-expect-error lookup only by `data.name` maybe?
        elementHTML = pswp.options[name + "SVG"];
        pswp.dispatch("uiElementCreate", {
            data
        });
        let className = "";
        if (data.isButton) {
            className += "pswp__button ";
            className += data.className || `pswp__button--${data.name}`;
        } else className += data.className || `pswp__${data.name}`;
        /** @type {HTMLElement} */ let element;
        let tagName = data.isButton ? data.tagName || "button" : data.tagName || "div";
        tagName = /** @type {keyof HTMLElementTagNameMap} */ tagName.toLowerCase();
        element = createElement(className, tagName);
        if (data.isButton) {
            // create button element
            element = createElement(className, tagName);
            if (tagName === "button") /** @type {HTMLButtonElement} */ element.type = "button";
            let { title  } = data;
            const { ariaLabel  } = data;
            // @ts-expect-error lookup only by `data.name` maybe?
            if (typeof pswp.options[name + "Title"] === "string") // @ts-expect-error lookup only by `data.name` maybe?
            title = pswp.options[name + "Title"];
            if (title) element.title = title;
            if (ariaLabel || title) /** @type {HTMLElement} */ element.setAttribute("aria-label", ariaLabel || title);
        }
        element.innerHTML = addElementHTML(elementHTML);
        if (data.onInit) data.onInit(element, pswp);
        if (data.onClick) element.onclick = (e)=>{
            if (typeof data.onClick === "string") pswp[data.onClick]();
            else data.onClick(e, element, pswp);
        };
        // Top bar is default position
        const appendTo = data.appendTo || "bar";
        let container;
        if (appendTo === "bar") {
            if (!pswp.topBar) pswp.topBar = createElement("pswp__top-bar pswp__hide-on-close", "div", pswp.scrollWrap);
            container = pswp.topBar;
        } else {
            // element outside of top bar gets a secondary class
            // that makes element fade out on close
            element.classList.add("pswp__hide-on-close");
            if (appendTo === "wrapper") container = pswp.scrollWrap;
            else // root element
            container = pswp.element;
        }
        container.appendChild(pswp.applyFilters("uiElement", element, data));
    }
}
/*
  Backward and forward arrow buttons
 */ /** @typedef {import('./ui-element.js').UIElementData} UIElementData */ /** @typedef {import('../photoswipe.js').default} PhotoSwipe */ /**
 *
 * @param {HTMLElement} element
 * @param {PhotoSwipe} pswp
 * @param {boolean=} isNextButton
 */ function initArrowButton(element, pswp, isNextButton) {
    element.classList.add("pswp__button--arrow");
    // TODO: this should point to a unique id for this instance
    element.setAttribute("aria-controls", "pswp__items");
    pswp.on("change", ()=>{
        if (!pswp.options.loop) {
            if (isNextButton) /** @type {HTMLButtonElement} */ element.disabled = !(pswp.currIndex < pswp.getNumItems() - 1);
            else /** @type {HTMLButtonElement} */ element.disabled = !(pswp.currIndex > 0);
        }
    });
}
/** @type {UIElementData} */ const arrowPrev = {
    name: "arrowPrev",
    className: "pswp__button--arrow--prev",
    title: "Previous",
    order: 10,
    isButton: true,
    appendTo: "wrapper",
    html: {
        isCustomSVG: true,
        size: 60,
        inner: '<path d="M29 43l-3 3-16-16 16-16 3 3-13 13 13 13z" id="pswp__icn-arrow"/>',
        outlineID: "pswp__icn-arrow"
    },
    onClick: "prev",
    onInit: initArrowButton
};
/** @type {UIElementData} */ const arrowNext = {
    name: "arrowNext",
    className: "pswp__button--arrow--next",
    title: "Next",
    order: 11,
    isButton: true,
    appendTo: "wrapper",
    html: {
        isCustomSVG: true,
        size: 60,
        inner: '<use xlink:href="#pswp__icn-arrow"/>',
        outlineID: "pswp__icn-arrow"
    },
    onClick: "next",
    onInit: (el, pswp)=>{
        initArrowButton(el, pswp, true);
    }
};
/** @type {import('./ui-element.js').UIElementData} UIElementData */ const closeButton = {
    name: "close",
    title: "Close",
    order: 20,
    isButton: true,
    html: {
        isCustomSVG: true,
        inner: '<path d="M24 10l-2-2-6 6-6-6-2 2 6 6-6 6 2 2 6-6 6 6 2-2-6-6z" id="pswp__icn-close"/>',
        outlineID: "pswp__icn-close"
    },
    onClick: "close"
};
/** @type {import('./ui-element.js').UIElementData} UIElementData */ const zoomButton = {
    name: "zoom",
    title: "Zoom",
    order: 10,
    isButton: true,
    html: {
        isCustomSVG: true,
        // eslint-disable-next-line max-len
        inner: '<path d="M17.426 19.926a6 6 0 1 1 1.5-1.5L23 22.5 21.5 24l-4.074-4.074z" id="pswp__icn-zoom"/><path fill="currentColor" class="pswp__zoom-icn-bar-h" d="M11 16v-2h6v2z"/><path fill="currentColor" class="pswp__zoom-icn-bar-v" d="M13 12h2v6h-2z"/>',
        outlineID: "pswp__icn-zoom"
    },
    onClick: "toggleZoom"
};
/** @type {import('./ui-element.js').UIElementData} UIElementData */ const loadingIndicator = {
    name: "preloader",
    appendTo: "bar",
    order: 7,
    html: {
        isCustomSVG: true,
        // eslint-disable-next-line max-len
        inner: '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.2 16a5.2 5.2 0 1 1-5.2-5.2V8a8 8 0 1 0 8 8h-2.8Z" id="pswp__icn-loading"/>',
        outlineID: "pswp__icn-loading"
    },
    onInit: (indicatorElement, pswp)=>{
        /** @type {boolean} */ let isVisible;
        /** @type {NodeJS.Timeout} */ let delayTimeout;
        /**
     * @param {string} className
     * @param {boolean} add
     */ const toggleIndicatorClass = (className, add)=>{
            indicatorElement.classList[add ? "add" : "remove"]("pswp__preloader--" + className);
        };
        /**
     * @param {boolean} visible
     */ const setIndicatorVisibility = (visible)=>{
            if (isVisible !== visible) {
                isVisible = visible;
                toggleIndicatorClass("active", visible);
            }
        };
        const updatePreloaderVisibility = ()=>{
            if (!pswp.currSlide.content.isLoading()) {
                setIndicatorVisibility(false);
                if (delayTimeout) {
                    clearTimeout(delayTimeout);
                    delayTimeout = null;
                }
                return;
            }
            if (!delayTimeout) // display loading indicator with delay
            delayTimeout = setTimeout(()=>{
                setIndicatorVisibility(pswp.currSlide.content.isLoading());
                delayTimeout = null;
            }, pswp.options.preloaderDelay);
        };
        pswp.on("change", updatePreloaderVisibility);
        pswp.on("loadComplete", (e)=>{
            if (pswp.currSlide === e.slide) updatePreloaderVisibility();
        });
        // expose the method
        pswp.ui.updatePreloaderVisibility = updatePreloaderVisibility;
    }
};
/** @type {import('./ui-element.js').UIElementData} UIElementData */ const counterIndicator = {
    name: "counter",
    order: 5,
    onInit: (counterElement, pswp)=>{
        pswp.on("change", ()=>{
            counterElement.innerText = pswp.currIndex + 1 + pswp.options.indexIndicatorSep + pswp.getNumItems();
        });
    }
};
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */ /** @typedef {import('./ui-element.js').UIElementData} UIElementData */ /**
 * Set special class on element when image is zoomed.
 *
 * By default it is used to adjust
 * zoom icon and zoom cursor via CSS.
 *
 * @param {HTMLElement} el
 * @param {boolean} isZoomedIn
 */ function setZoomedIn(el, isZoomedIn) {
    el.classList[isZoomedIn ? "add" : "remove"]("pswp--zoomed-in");
}
class UI {
    /**
   * @param {PhotoSwipe} pswp
   */ constructor(pswp){
        this.pswp = pswp;
        /** @type {() => void} */ this.updatePreloaderVisibility = undefined;
        /** @type {number} */ this._lastUpdatedZoomLevel = undefined;
    }
    init() {
        const { pswp  } = this;
        this.isRegistered = false;
        /** @type {UIElementData[]} */ this.uiElementsData = [
            closeButton,
            arrowPrev,
            arrowNext,
            zoomButton,
            loadingIndicator,
            counterIndicator
        ];
        pswp.dispatch("uiRegister");
        // sort by order
        this.uiElementsData.sort((a, b)=>{
            // default order is 0
            return (a.order || 0) - (b.order || 0);
        });
        /** @type {(UIElement | UIElementData)[]} */ this.items = [];
        this.isRegistered = true;
        this.uiElementsData.forEach((uiElementData)=>{
            this.registerElement(uiElementData);
        });
        pswp.on("change", ()=>{
            pswp.element.classList[pswp.getNumItems() === 1 ? "add" : "remove"]("pswp--one-slide");
        });
        pswp.on("zoomPanUpdate", ()=>this._onZoomPanUpdate());
    }
    /**
   * @param {UIElementData} elementData
   */ registerElement(elementData) {
        if (this.isRegistered) this.items.push(new UIElement(this.pswp, elementData));
        else this.uiElementsData.push(elementData);
    }
    /**
   * Fired each time zoom or pan position is changed.
   * Update classes that control visibility of zoom button and cursor icon.
   */ _onZoomPanUpdate() {
        const { template , currSlide , options  } = this.pswp;
        let { currZoomLevel  } = currSlide;
        if (this.pswp.opener.isClosing) return;
        // if not open yet - check against initial zoom level
        if (!this.pswp.opener.isOpen) currZoomLevel = currSlide.zoomLevels.initial;
        if (currZoomLevel === this._lastUpdatedZoomLevel) return;
        this._lastUpdatedZoomLevel = currZoomLevel;
        const currZoomLevelDiff = currSlide.zoomLevels.initial - currSlide.zoomLevels.secondary;
        // Initial and secondary zoom levels are almost equal
        if (Math.abs(currZoomLevelDiff) < 0.01 || !currSlide.isZoomable()) {
            // disable zoom
            setZoomedIn(template, false);
            template.classList.remove("pswp--zoom-allowed");
            return;
        }
        template.classList.add("pswp--zoom-allowed");
        const potentialZoomLevel = currZoomLevel === currSlide.zoomLevels.initial ? currSlide.zoomLevels.secondary : currSlide.zoomLevels.initial;
        setZoomedIn(template, potentialZoomLevel <= currZoomLevel);
        if (options.imageClickAction === "zoom" || options.imageClickAction === "zoom-or-close") template.classList.add("pswp--click-to-zoom");
    }
}
/** @typedef {import('./slide.js').SlideData} SlideData */ /** @typedef {import('../photoswipe.js').default} PhotoSwipe */ /** @typedef {{ x: number; y: number; w: number; innerRect?: { w: number; h: number; x: number; y: number } }} Bounds */ /**
 * @param {HTMLElement} el
 */ function getBoundsByElement(el) {
    const thumbAreaRect = el.getBoundingClientRect();
    return {
        x: thumbAreaRect.left,
        y: thumbAreaRect.top,
        w: thumbAreaRect.width
    };
}
/**
 * @param {HTMLElement} el
 * @param {number} imageWidth
 * @param {number} imageHeight
 */ function getCroppedBoundsByElement(el, imageWidth, imageHeight) {
    const thumbAreaRect = el.getBoundingClientRect();
    // fill image into the area
    // (do they same as object-fit:cover does to retrieve coordinates)
    const hRatio = thumbAreaRect.width / imageWidth;
    const vRatio = thumbAreaRect.height / imageHeight;
    const fillZoomLevel = hRatio > vRatio ? hRatio : vRatio;
    const offsetX = (thumbAreaRect.width - imageWidth * fillZoomLevel) / 2;
    const offsetY = (thumbAreaRect.height - imageHeight * fillZoomLevel) / 2;
    /**
   * Coordinates of the image,
   * as if it was not cropped,
   * height is calculated automatically
   *
   * @type {Bounds}
   */ const bounds = {
        x: thumbAreaRect.left + offsetX,
        y: thumbAreaRect.top + offsetY,
        w: imageWidth * fillZoomLevel
    };
    // Coordinates of inner crop area
    // relative to the image
    bounds.innerRect = {
        w: thumbAreaRect.width,
        h: thumbAreaRect.height,
        x: offsetX,
        y: offsetY
    };
    return bounds;
}
/**
 * Get dimensions of thumbnail image
 * (click on which opens photoswipe or closes photoswipe to)
 *
 * @param {number} index
 * @param {SlideData} itemData
 * @param {PhotoSwipe} instance PhotoSwipe instance
 * @returns {Bounds | undefined}
 */ function getThumbBounds(index, itemData, instance) {
    // legacy event, before filters were introduced
    const event = instance.dispatch("thumbBounds", {
        index,
        itemData,
        instance
    });
    // @ts-expect-error
    if (event.thumbBounds) // @ts-expect-error
    return event.thumbBounds;
    const { element  } = itemData;
    let thumbBounds;
    /** @type {HTMLElement} */ let thumbnail;
    if (element && instance.options.thumbSelector !== false) {
        const thumbSelector = instance.options.thumbSelector || "img";
        thumbnail = element.matches(thumbSelector) ? element : element.querySelector(thumbSelector);
    }
    thumbnail = instance.applyFilters("thumbEl", thumbnail, itemData, index);
    if (thumbnail) {
        if (!itemData.thumbCropped) thumbBounds = getBoundsByElement(thumbnail);
        else thumbBounds = getCroppedBoundsByElement(thumbnail, itemData.width || itemData.w, itemData.height || itemData.h);
    }
    return instance.applyFilters("thumbBounds", thumbBounds, itemData, index);
}
/** @typedef {import('../lightbox/lightbox.js').default} PhotoSwipeLightbox */ /** @typedef {import('../photoswipe.js').default} PhotoSwipe */ /** @typedef {import('../photoswipe.js').PhotoSwipeOptions} PhotoSwipeOptions */ /** @typedef {import('../photoswipe.js').DataSource} DataSource */ /** @typedef {import('../ui/ui-element.js').UIElementData} UIElementData */ /** @typedef {import('../slide/content.js').default} ContentDefault */ /** @typedef {import('../slide/slide.js').default} Slide */ /** @typedef {import('../slide/slide.js').SlideData} SlideData */ /** @typedef {import('../slide/zoom-level.js').default} ZoomLevel */ /** @typedef {import('../slide/get-thumb-bounds.js').Bounds} Bounds */ /**
 * Allow adding an arbitrary props to the Content
 * https://photoswipe.com/custom-content/#using-webp-image-format
 * @typedef {ContentDefault & Record<string, any>} Content
 */ /** @typedef {{ x?: number; y?: number }} Point */ /**
 * @typedef {Object} PhotoSwipeEventsMap https://photoswipe.com/events/
 *
 *
 * https://photoswipe.com/adding-ui-elements/
 *
 * @prop {undefined} uiRegister
 * @prop {{ data: UIElementData }} uiElementCreate
 *
 *
 * https://photoswipe.com/events/#initialization-events
 *
 * @prop {undefined} beforeOpen
 * @prop {undefined} firstUpdate
 * @prop {undefined} initialLayout
 * @prop {undefined} change
 * @prop {undefined} afterInit
 * @prop {undefined} bindEvents
 *
 *
 * https://photoswipe.com/events/#opening-or-closing-transition-events
 *
 * @prop {undefined} openingAnimationStart
 * @prop {undefined} openingAnimationEnd
 * @prop {undefined} closingAnimationStart
 * @prop {undefined} closingAnimationEnd
 *
 *
 * https://photoswipe.com/events/#closing-events
 *
 * @prop {undefined} close
 * @prop {undefined} destroy
 *
 *
 * https://photoswipe.com/events/#pointer-and-gesture-events
 *
 * @prop {{ originalEvent: PointerEvent }} pointerDown
 * @prop {{ originalEvent: PointerEvent }} pointerMove
 * @prop {{ originalEvent: PointerEvent }} pointerUp
 * @prop {{ bgOpacity: number }} pinchClose can be default prevented
 * @prop {{ panY: number }} verticalDrag can be default prevented
 *
 *
 * https://photoswipe.com/events/#slide-content-events
 *
 * @prop {{ content: Content }} contentInit
 * @prop {{ content: Content; isLazy: boolean }} contentLoad can be default prevented
 * @prop {{ content: Content; isLazy: boolean }} contentLoadImage can be default prevented
 * @prop {{ content: Content; slide: Slide; isError?: boolean }} loadComplete
 * @prop {{ content: Content; slide: Slide }} loadError
 * @prop {{ content: Content; width: number; height: number }} contentResize can be default prevented
 * @prop {{ content: Content; width: number; height: number; slide: Slide }} imageSizeChange
 * @prop {{ content: Content }} contentLazyLoad can be default prevented
 * @prop {{ content: Content }} contentAppend can be default prevented
 * @prop {{ content: Content }} contentActivate can be default prevented
 * @prop {{ content: Content }} contentDeactivate can be default prevented
 * @prop {{ content: Content }} contentRemove can be default prevented
 * @prop {{ content: Content }} contentDestroy can be default prevented
 *
 *
 * undocumented
 *
 * @prop {{ point: Point; originalEvent: PointerEvent }} imageClickAction can be default prevented
 * @prop {{ point: Point; originalEvent: PointerEvent }} bgClickAction can be default prevented
 * @prop {{ point: Point; originalEvent: PointerEvent }} tapAction can be default prevented
 * @prop {{ point: Point; originalEvent: PointerEvent }} doubleTapAction can be default prevented
 *
 * @prop {{ originalEvent: KeyboardEvent }} keydown can be default prevented
 * @prop {{ x: number; dragging: boolean }} moveMainScroll
 * @prop {{ slide: Slide }} firstZoomPan
 * @prop {{ slide: Slide, data: SlideData, index: number }} gettingData
 * @prop {undefined} beforeResize
 * @prop {undefined} resize
 * @prop {undefined} viewportSize
 * @prop {undefined} updateScrollOffset
 * @prop {{ slide: Slide }} slideInit
 * @prop {{ slide: Slide }} afterSetContent
 * @prop {{ slide: Slide }} slideLoad
 * @prop {{ slide: Slide }} appendHeavy can be default prevented
 * @prop {{ slide: Slide }} appendHeavyContent
 * @prop {{ slide: Slide }} slideActivate
 * @prop {{ slide: Slide }} slideDeactivate
 * @prop {{ slide: Slide }} slideDestroy
 * @prop {{ destZoomLevel: number, centerPoint: Point, transitionDuration: number | false }} beforeZoomTo
 * @prop {{ slide: Slide }} zoomPanUpdate
 * @prop {{ slide: Slide }} initialZoomPan
 * @prop {{ slide: Slide }} calcSlideSize
 * @prop {undefined} resolutionChanged
 * @prop {{ originalEvent: WheelEvent }} wheel can be default prevented
 * @prop {{ content: Content }} contentAppendImage can be default prevented
 * @prop {{ index: number; itemData: SlideData }} lazyLoadSlide can be default prevented
 * @prop {undefined} lazyLoad
 * @prop {{ slide: Slide }} calcBounds
 * @prop {{ zoomLevels: ZoomLevel, slideData: SlideData }} zoomLevelsUpdate
 *
 *
 * legacy
 *
 * @prop {undefined} init
 * @prop {undefined} initialZoomIn
 * @prop {undefined} initialZoomOut
 * @prop {undefined} initialZoomInEnd
 * @prop {undefined} initialZoomOutEnd
 * @prop {{ dataSource: DataSource, numItems: number }} numItems
 * @prop {{ itemData: SlideData; index: number }} itemData
 * @prop {{ index: number, itemData: SlideData, instance: PhotoSwipe }} thumbBounds
 */ /**
 * @typedef {Object} PhotoSwipeFiltersMap https://photoswipe.com/filters/
 *
 * @prop {(numItems: number, dataSource: DataSource) => number} numItems
 * Modify the total amount of slides. Example on Data sources page.
 * https://photoswipe.com/filters/#numitems
 *
 * @prop {(itemData: SlideData, index: number) => SlideData} itemData
 * Modify slide item data. Example on Data sources page.
 * https://photoswipe.com/filters/#itemdata
 *
 * @prop {(itemData: SlideData, element: HTMLElement, linkEl: HTMLAnchorElement) => SlideData} domItemData
 * Modify item data when it's parsed from DOM element. Example on Data sources page.
 * https://photoswipe.com/filters/#domitemdata
 *
 * @prop {(clickedIndex: number, e: MouseEvent, instance: PhotoSwipeLightbox) => number} clickedIndex
 * Modify clicked gallery item index.
 * https://photoswipe.com/filters/#clickedindex
 *
 * @prop {(placeholderSrc: string | false, content: Content) => string | false} placeholderSrc
 * Modify placeholder image source.
 * https://photoswipe.com/filters/#placeholdersrc
 *
 * @prop {(isContentLoading: boolean, content: Content) => boolean} isContentLoading
 * Modify if the content is currently loading.
 * https://photoswipe.com/filters/#iscontentloading
 *
 * @prop {(isContentZoomable: boolean, content: Content) => boolean} isContentZoomable
 * Modify if the content can be zoomed.
 * https://photoswipe.com/filters/#iscontentzoomable
 *
 * @prop {(useContentPlaceholder: boolean, content: Content) => boolean} useContentPlaceholder
 * Modify if the placeholder should be used for the content.
 * https://photoswipe.com/filters/#usecontentplaceholder
 *
 * @prop {(isKeepingPlaceholder: boolean, content: Content) => boolean} isKeepingPlaceholder
 * Modify if the placeholder should be kept after the content is loaded.
 * https://photoswipe.com/filters/#iskeepingplaceholder
 *
 *
 * @prop {(contentErrorElement: HTMLElement, content: Content) => HTMLElement} contentErrorElement
 * Modify an element when the content has error state (for example, if image cannot be loaded).
 * https://photoswipe.com/filters/#contenterrorelement
 *
 * @prop {(element: HTMLElement, data: UIElementData) => HTMLElement} uiElement
 * Modify a UI element that's being created.
 * https://photoswipe.com/filters/#uielement
 *
 * @prop {(thumbnail: HTMLElement, itemData: SlideData, index: number) => HTMLElement} thumbEl
 * Modify the thubmnail element from which opening zoom animation starts or ends.
 * https://photoswipe.com/filters/#thumbel
 *
 * @prop {(thumbBounds: Bounds, itemData: SlideData, index: number) => Bounds} thumbBounds
 * Modify the thubmnail bounds from which opening zoom animation starts or ends.
 * https://photoswipe.com/filters/#thumbbounds
 *
 * @prop {(srcsetSizesWidth: number, content: Content) => number} srcsetSizesWidth
 *
 */ /**
 * @template {keyof PhotoSwipeFiltersMap} T
 * @typedef {{ fn: PhotoSwipeFiltersMap[T], priority: number }} Filter<T>
 */ /**
 * @template {keyof PhotoSwipeEventsMap} T
 * @typedef {PhotoSwipeEventsMap[T] extends undefined ? PhotoSwipeEvent<T> : PhotoSwipeEvent<T> & PhotoSwipeEventsMap[T]} AugmentedEvent
 */ /**
 * @template {keyof PhotoSwipeEventsMap} T
 * @typedef {(event: AugmentedEvent<T>) => void} EventCallback<T>
 */ /**
 * Base PhotoSwipe event object
 *
 * @template {keyof PhotoSwipeEventsMap} T
 */ class PhotoSwipeEvent {
    /**
   * @param {T} type
   * @param {PhotoSwipeEventsMap[T]} [details]
   */ constructor(type, details){
        this.type = type;
        if (details) Object.assign(this, details);
    }
    preventDefault() {
        this.defaultPrevented = true;
    }
}
/**
 * PhotoSwipe base class that can listen and dispatch for events.
 * Shared by PhotoSwipe Core and PhotoSwipe Lightbox, extended by base.js
 */ class Eventable {
    constructor(){
        /**
     * @type {{ [T in keyof PhotoSwipeEventsMap]?: ((event: AugmentedEvent<T>) => void)[] }}
     */ this._listeners = {};
        /**
     * @type {{ [T in keyof PhotoSwipeFiltersMap]?: Filter<T>[] }}
     */ this._filters = {};
        /** @type {PhotoSwipe=} */ this.pswp = undefined;
        /** @type {PhotoSwipeOptions} */ this.options = undefined;
    }
    /**
   * @template {keyof PhotoSwipeFiltersMap} T
   * @param {T} name
   * @param {PhotoSwipeFiltersMap[T]} fn
   * @param {number} priority
   */ addFilter(name, fn, priority = 100) {
        if (!this._filters[name]) this._filters[name] = [];
        this._filters[name].push({
            fn,
            priority
        });
        this._filters[name].sort((f1, f2)=>f1.priority - f2.priority);
        if (this.pswp) this.pswp.addFilter(name, fn, priority);
    }
    /**
   * @template {keyof PhotoSwipeFiltersMap} T
   * @param {T} name
   * @param {PhotoSwipeFiltersMap[T]} fn
   */ removeFilter(name, fn) {
        if (this._filters[name]) // @ts-expect-error
        this._filters[name] = this._filters[name].filter((filter)=>filter.fn !== fn);
        if (this.pswp) this.pswp.removeFilter(name, fn);
    }
    /**
   * @template {keyof PhotoSwipeFiltersMap} T
   * @param {T} name
   * @param {Parameters<PhotoSwipeFiltersMap[T]>} args
   * @returns {Parameters<PhotoSwipeFiltersMap[T]>[0]}
   */ applyFilters(name, ...args) {
        if (this._filters[name]) this._filters[name].forEach((filter)=>{
            // @ts-expect-error
            args[0] = filter.fn.apply(this, args);
        });
        return args[0];
    }
    /**
   * @template {keyof PhotoSwipeEventsMap} T
   * @param {T} name
   * @param {EventCallback<T>} fn
   */ on(name, fn) {
        if (!this._listeners[name]) this._listeners[name] = [];
        this._listeners[name].push(fn);
        // When binding events to lightbox,
        // also bind events to PhotoSwipe Core,
        // if it's open.
        if (this.pswp) this.pswp.on(name, fn);
    }
    /**
   * @template {keyof PhotoSwipeEventsMap} T
   * @param {T} name
   * @param {EventCallback<T>} fn
   */ off(name, fn) {
        if (this._listeners[name]) // @ts-expect-error
        this._listeners[name] = this._listeners[name].filter((listener)=>fn !== listener);
        if (this.pswp) this.pswp.off(name, fn);
    }
    /**
   * @template {keyof PhotoSwipeEventsMap} T
   * @param {T} name
   * @param {PhotoSwipeEventsMap[T]} [details]
   * @returns {AugmentedEvent<T>}
   */ dispatch(name, details) {
        if (this.pswp) return this.pswp.dispatch(name, details);
        const event = /** @type {AugmentedEvent<T>} */ new PhotoSwipeEvent(name, details);
        if (!this._listeners) return event;
        if (this._listeners[name]) this._listeners[name].forEach((listener)=>{
            listener.call(this, event);
        });
        return event;
    }
}
class Placeholder {
    /**
   * @param {string | false} imageSrc
   * @param {HTMLElement} container
   */ constructor(imageSrc, container){
        // Create placeholder
        // (stretched thumbnail or simple div behind the main image)
        this.element = createElement("pswp__img pswp__img--placeholder", imageSrc ? "img" : "", container);
        if (imageSrc) {
            /** @type {HTMLImageElement} */ this.element.decoding = "async";
            /** @type {HTMLImageElement} */ this.element.alt = "";
            /** @type {HTMLImageElement} */ this.element.src = imageSrc;
            this.element.setAttribute("role", "presentation");
        }
        this.element.setAttribute("aria-hidden", "true");
    }
    /**
   * @param {number} width
   * @param {number} height
   */ setDisplayedSize(width, height) {
        if (!this.element) return;
        if (this.element.tagName === "IMG") {
            // Use transform scale() to modify img placeholder size
            // (instead of changing width/height directly).
            // This helps with performance, specifically in iOS15 Safari.
            setWidthHeight(this.element, 250, "auto");
            this.element.style.transformOrigin = "0 0";
            this.element.style.transform = toTransformString(0, 0, width / 250);
        } else setWidthHeight(this.element, width, height);
    }
    destroy() {
        if (this.element.parentNode) this.element.remove();
        this.element = null;
    }
}
/** @typedef {import('./slide.js').default} Slide */ /** @typedef {import('./slide.js').SlideData} SlideData */ /** @typedef {import('../photoswipe.js').default} PhotoSwipe */ /** @typedef {import('../util/util.js').LoadState} LoadState */ class Content {
    /**
   * @param {SlideData} itemData Slide data
   * @param {PhotoSwipe} instance PhotoSwipe or PhotoSwipeLightbox instance
   * @param {number} index
   */ constructor(itemData, instance, index){
        this.instance = instance;
        this.data = itemData;
        this.index = index;
        /** @type {HTMLImageElement | HTMLDivElement} */ this.element = undefined;
        this.displayedImageWidth = 0;
        this.displayedImageHeight = 0;
        this.width = Number(this.data.w) || Number(this.data.width) || 0;
        this.height = Number(this.data.h) || Number(this.data.height) || 0;
        this.isAttached = false;
        this.hasSlide = false;
        /** @type {LoadState} */ this.state = LOAD_STATE.IDLE;
        if (this.data.type) this.type = this.data.type;
        else if (this.data.src) this.type = "image";
        else this.type = "html";
        this.instance.dispatch("contentInit", {
            content: this
        });
    }
    removePlaceholder() {
        if (this.placeholder && !this.keepPlaceholder()) // With delay, as image might be loaded, but not rendered
        setTimeout(()=>{
            if (this.placeholder) {
                this.placeholder.destroy();
                this.placeholder = null;
            }
        }, 1000);
    }
    /**
   * Preload content
   *
   * @param {boolean=} isLazy
   * @param {boolean=} reload
   */ load(isLazy, reload) {
        if (this.slide && this.usePlaceholder()) {
            if (!this.placeholder) {
                const placeholderSrc = this.instance.applyFilters("placeholderSrc", // use  image-based placeholder only for the first slide,
                // as rendering (even small stretched thumbnail) is an expensive operation
                this.data.msrc && this.slide.isFirstSlide ? this.data.msrc : false, this);
                this.placeholder = new Placeholder(placeholderSrc, this.slide.container);
            } else {
                const placeholderEl = this.placeholder.element;
                // Add placeholder to DOM if it was already created
                if (placeholderEl && !placeholderEl.parentElement) this.slide.container.prepend(placeholderEl);
            }
        }
        if (this.element && !reload) return;
        if (this.instance.dispatch("contentLoad", {
            content: this,
            isLazy
        }).defaultPrevented) return;
        if (this.isImageContent()) {
            this.element = createElement("pswp__img", "img");
            // Start loading only after width is defined, as sizes might depend on it.
            // Due to Safari feature, we must define sizes before srcset.
            if (this.displayedImageWidth) this.loadImage(isLazy);
        } else {
            this.element = createElement("pswp__content");
            this.element.innerHTML = this.data.html || "";
        }
        if (reload && this.slide) this.slide.updateContentSize(true);
    }
    /**
   * Preload image
   *
   * @param {boolean} isLazy
   */ loadImage(isLazy) {
        const imageElement = /** @type HTMLImageElement */ this.element;
        if (this.instance.dispatch("contentLoadImage", {
            content: this,
            isLazy
        }).defaultPrevented) return;
        this.updateSrcsetSizes();
        if (this.data.srcset) imageElement.srcset = this.data.srcset;
        imageElement.src = this.data.src;
        imageElement.alt = this.data.alt || "";
        this.state = LOAD_STATE.LOADING;
        if (imageElement.complete) this.onLoaded();
        else {
            imageElement.onload = ()=>{
                this.onLoaded();
            };
            imageElement.onerror = ()=>{
                this.onError();
            };
        }
    }
    /**
   * Assign slide to content
   *
   * @param {Slide} slide
   */ setSlide(slide) {
        this.slide = slide;
        this.hasSlide = true;
        this.instance = slide.pswp;
    // todo: do we need to unset slide?
    }
    /**
   * Content load success handler
   */ onLoaded() {
        this.state = LOAD_STATE.LOADED;
        if (this.slide) {
            this.instance.dispatch("loadComplete", {
                slide: this.slide,
                content: this
            });
            // if content is reloaded
            if (this.slide.isActive && this.slide.heavyAppended && !this.element.parentNode) {
                this.append();
                this.slide.updateContentSize(true);
            }
            if (this.state === LOAD_STATE.LOADED || this.state === LOAD_STATE.ERROR) this.removePlaceholder();
        }
    }
    /**
   * Content load error handler
   */ onError() {
        this.state = LOAD_STATE.ERROR;
        if (this.slide) {
            this.displayError();
            this.instance.dispatch("loadComplete", {
                slide: this.slide,
                isError: true,
                content: this
            });
            this.instance.dispatch("loadError", {
                slide: this.slide,
                content: this
            });
        }
    }
    /**
   * @returns {Boolean} If the content is currently loading
   */ isLoading() {
        return this.instance.applyFilters("isContentLoading", this.state === LOAD_STATE.LOADING, this);
    }
    isError() {
        return this.state === LOAD_STATE.ERROR;
    }
    /**
   * @returns {boolean} If the content is image
   */ isImageContent() {
        return this.type === "image";
    }
    /**
   * Update content size
   *
   * @param {Number} width
   * @param {Number} height
   */ setDisplayedSize(width, height) {
        if (!this.element) return;
        if (this.placeholder) this.placeholder.setDisplayedSize(width, height);
        // eslint-disable-next-line max-len
        if (this.instance.dispatch("contentResize", {
            content: this,
            width,
            height
        }).defaultPrevented) return;
        setWidthHeight(this.element, width, height);
        if (this.isImageContent() && !this.isError()) {
            const isInitialSizeUpdate = !this.displayedImageWidth && width;
            this.displayedImageWidth = width;
            this.displayedImageHeight = height;
            if (isInitialSizeUpdate) this.loadImage(false);
            else this.updateSrcsetSizes();
            if (this.slide) // eslint-disable-next-line max-len
            this.instance.dispatch("imageSizeChange", {
                slide: this.slide,
                width,
                height,
                content: this
            });
        }
    }
    /**
   * @returns {boolean} If the content can be zoomed
   */ isZoomable() {
        return this.instance.applyFilters("isContentZoomable", this.isImageContent() && this.state !== LOAD_STATE.ERROR, this);
    }
    /**
   * Update image srcset sizes attribute based on width and height
   */ updateSrcsetSizes() {
        // Handle srcset sizes attribute.
        //
        // Never lower quality, if it was increased previously.
        // Chrome does this automatically, Firefox and Safari do not,
        // so we store largest used size in dataset.
        // Handle srcset sizes attribute.
        //
        // Never lower quality, if it was increased previously.
        // Chrome does this automatically, Firefox and Safari do not,
        // so we store largest used size in dataset.
        if (this.data.srcset) {
            const image = /** @type HTMLImageElement */ this.element;
            const sizesWidth = this.instance.applyFilters("srcsetSizesWidth", this.displayedImageWidth, this);
            if (!image.dataset.largestUsedSize || sizesWidth > parseInt(image.dataset.largestUsedSize, 10)) {
                image.sizes = sizesWidth + "px";
                image.dataset.largestUsedSize = String(sizesWidth);
            }
        }
    }
    /**
   * @returns {boolean} If content should use a placeholder (from msrc by default)
   */ usePlaceholder() {
        return this.instance.applyFilters("useContentPlaceholder", this.isImageContent(), this);
    }
    /**
   * Preload content with lazy-loading param
   */ lazyLoad() {
        if (this.instance.dispatch("contentLazyLoad", {
            content: this
        }).defaultPrevented) return;
        this.load(true);
    }
    /**
   * @returns {boolean} If placeholder should be kept after content is loaded
   */ keepPlaceholder() {
        return this.instance.applyFilters("isKeepingPlaceholder", this.isLoading(), this);
    }
    /**
   * Destroy the content
   */ destroy() {
        this.hasSlide = false;
        this.slide = null;
        if (this.instance.dispatch("contentDestroy", {
            content: this
        }).defaultPrevented) return;
        this.remove();
        if (this.placeholder) {
            this.placeholder.destroy();
            this.placeholder = null;
        }
        if (this.isImageContent() && this.element) {
            this.element.onload = null;
            this.element.onerror = null;
            this.element = null;
        }
    }
    /**
   * Display error message
   */ displayError() {
        if (this.slide) {
            /** @type {HTMLElement} */ let errorMsgEl = createElement("pswp__error-msg");
            errorMsgEl.innerText = this.instance.options.errorMsg;
            errorMsgEl = this.instance.applyFilters("contentErrorElement", errorMsgEl, this);
            this.element = createElement("pswp__content pswp__error-msg-container");
            this.element.appendChild(errorMsgEl);
            this.slide.container.innerText = "";
            this.slide.container.appendChild(this.element);
            this.slide.updateContentSize(true);
            this.removePlaceholder();
        }
    }
    /**
   * Append the content
   */ append() {
        if (this.isAttached) return;
        this.isAttached = true;
        if (this.state === LOAD_STATE.ERROR) {
            this.displayError();
            return;
        }
        if (this.instance.dispatch("contentAppend", {
            content: this
        }).defaultPrevented) return;
        const supportsDecode = "decode" in this.element;
        if (this.isImageContent()) {
            // Use decode() on nearby slides
            //
            // Nearby slide images are in DOM and not hidden via display:none.
            // However, they are placed offscreen (to the left and right side).
            //
            // Some browsers do not composite the image until it's actually visible,
            // using decode() helps.
            //
            // You might ask "why dont you just decode() and then append all images",
            // that's because I want to show image before it's fully loaded,
            // as browser can render parts of image while it is loading.
            // We do not do this in Safari due to partial loading bug.
            if (supportsDecode && this.slide && (!this.slide.isActive || isSafari())) {
                this.isDecoding = true;
                // purposefully using finally instead of then,
                // as if srcset sizes changes dynamically - it may cause decode error
                /** @type {HTMLImageElement} */ this.element.decode().catch(()=>{}).finally(()=>{
                    this.isDecoding = false;
                    this.appendImage();
                });
            } else this.appendImage();
        } else if (this.element && !this.element.parentNode) this.slide.container.appendChild(this.element);
    }
    /**
   * Activate the slide,
   * active slide is generally the current one,
   * meaning the user can see it.
   */ activate() {
        if (this.instance.dispatch("contentActivate", {
            content: this
        }).defaultPrevented) return;
        if (this.slide) {
            if (this.isImageContent() && this.isDecoding && !isSafari()) // add image to slide when it becomes active,
            // even if it's not finished decoding
            this.appendImage();
            else if (this.isError()) this.load(false, true); // try to reload
            if (this.slide.holderElement) this.slide.holderElement.setAttribute("aria-hidden", "false");
        }
    }
    /**
   * Deactivate the content
   */ deactivate() {
        this.instance.dispatch("contentDeactivate", {
            content: this
        });
        if (this.slide && this.slide.holderElement) this.slide.holderElement.setAttribute("aria-hidden", "true");
    }
    /**
   * Remove the content from DOM
   */ remove() {
        this.isAttached = false;
        if (this.instance.dispatch("contentRemove", {
            content: this
        }).defaultPrevented) return;
        if (this.element && this.element.parentNode) this.element.remove();
        if (this.placeholder && this.placeholder.element) this.placeholder.element.remove();
    }
    /**
   * Append the image content to slide container
   */ appendImage() {
        if (!this.isAttached) return;
        if (this.instance.dispatch("contentAppendImage", {
            content: this
        }).defaultPrevented) return;
        // ensure that element exists and is not already appended
        if (this.slide && this.element && !this.element.parentNode) this.slide.container.appendChild(this.element);
        if (this.state === LOAD_STATE.LOADED || this.state === LOAD_STATE.ERROR) this.removePlaceholder();
    }
}
/** @typedef {import('./content.js').default} Content */ /** @typedef {import('./slide.js').default} Slide */ /** @typedef {import('./slide.js').SlideData} SlideData */ /** @typedef {import('../core/base.js').default} PhotoSwipeBase */ /** @typedef {import('../photoswipe.js').default} PhotoSwipe */ /** @typedef {import('../lightbox/lightbox.js').default} PhotoSwipeLightbox */ const MIN_SLIDES_TO_CACHE = 5;
/**
 * Lazy-load an image
 * This function is used both by Lightbox and PhotoSwipe core,
 * thus it can be called before dialog is opened.
 *
 * @param {SlideData} itemData Data about the slide
 * @param {PhotoSwipe | PhotoSwipeLightbox | PhotoSwipeBase} instance PhotoSwipe instance
 * @param {number} index
 * @returns Image that is being decoded or false.
 */ function lazyLoadData(itemData, instance, index) {
    // src/slide/content/content.js
    const content = instance.createContentFromData(itemData, index);
    if (!content || !content.lazyLoad) return;
    const { options  } = instance;
    // We need to know dimensions of the image to preload it,
    // as it might use srcset and we need to define sizes
    // @ts-expect-error should provide pswp instance?
    const viewportSize = instance.viewportSize || getViewportSize(options, instance);
    const panAreaSize = getPanAreaSize(options, viewportSize, itemData, index);
    const zoomLevel = new ZoomLevel(options, itemData, -1);
    zoomLevel.update(content.width, content.height, panAreaSize);
    content.lazyLoad();
    content.setDisplayedSize(Math.ceil(content.width * zoomLevel.initial), Math.ceil(content.height * zoomLevel.initial));
    return content;
}
/**
 * Lazy-loads specific slide.
 * This function is used both by Lightbox and PhotoSwipe core,
 * thus it can be called before dialog is opened.
 *
 * By default it loads image based on viewport size and initial zoom level.
 *
 * @param {number} index Slide index
 * @param {PhotoSwipe | PhotoSwipeLightbox} instance PhotoSwipe or PhotoSwipeLightbox eventable instance
 */ function lazyLoadSlide(index, instance) {
    const itemData = instance.getItemData(index);
    if (instance.dispatch("lazyLoadSlide", {
        index,
        itemData
    }).defaultPrevented) return;
    return lazyLoadData(itemData, instance, index);
}
class ContentLoader {
    /**
   * @param {PhotoSwipe} pswp
   */ constructor(pswp){
        this.pswp = pswp;
        // Total amount of cached images
        this.limit = Math.max(pswp.options.preload[0] + pswp.options.preload[1] + 1, MIN_SLIDES_TO_CACHE);
        /** @type {Content[]} */ this._cachedItems = [];
    }
    /**
   * Lazy load nearby slides based on `preload` option.
   *
   * @param {number=} diff Difference between slide indexes that was changed recently, or 0.
   */ updateLazy(diff) {
        const { pswp  } = this;
        if (pswp.dispatch("lazyLoad").defaultPrevented) return;
        const { preload  } = pswp.options;
        const isForward = diff === undefined ? true : diff >= 0;
        let i;
        // preload[1] - num items to preload in forward direction
        for(i = 0; i <= preload[1]; i++)this.loadSlideByIndex(pswp.currIndex + (isForward ? i : -i));
        // preload[0] - num items to preload in backward direction
        for(i = 1; i <= preload[0]; i++)this.loadSlideByIndex(pswp.currIndex + (isForward ? -i : i));
    }
    /**
   * @param {number} index
   */ loadSlideByIndex(index) {
        index = this.pswp.getLoopedIndex(index);
        // try to get cached content
        let content = this.getContentByIndex(index);
        if (!content) {
            // no cached content, so try to load from scratch:
            content = lazyLoadSlide(index, this.pswp);
            // if content can be loaded, add it to cache:
            if (content) this.addToCache(content);
        }
    }
    /**
   * @param {Slide} slide
   */ getContentBySlide(slide) {
        let content = this.getContentByIndex(slide.index);
        if (!content) {
            // create content if not found in cache
            content = this.pswp.createContentFromData(slide.data, slide.index);
            if (content) this.addToCache(content);
        }
        if (content) // assign slide to content
        content.setSlide(slide);
        return content;
    }
    /**
   * @param {Content} content
   */ addToCache(content) {
        // move to the end of array
        this.removeByIndex(content.index);
        this._cachedItems.push(content);
        if (this._cachedItems.length > this.limit) {
            // Destroy the first content that's not attached
            const indexToRemove = this._cachedItems.findIndex((item)=>{
                return !item.isAttached && !item.hasSlide;
            });
            if (indexToRemove !== -1) {
                const removedItem = this._cachedItems.splice(indexToRemove, 1)[0];
                removedItem.destroy();
            }
        }
    }
    /**
   * Removes an image from cache, does not destroy() it, just removes.
   *
   * @param {number} index
   */ removeByIndex(index) {
        const indexToRemove = this._cachedItems.findIndex((item)=>item.index === index);
        if (indexToRemove !== -1) this._cachedItems.splice(indexToRemove, 1);
    }
    /**
   * @param {number} index
   */ getContentByIndex(index) {
        return this._cachedItems.find((content)=>content.index === index);
    }
    destroy() {
        this._cachedItems.forEach((content)=>content.destroy());
        this._cachedItems = null;
    }
}
/** @typedef {import("../photoswipe.js").default} PhotoSwipe */ /** @typedef {import("../photoswipe.js").PhotoSwipeOptions} PhotoSwipeOptions */ /** @typedef {import("../slide/slide.js").SlideData} SlideData */ /**
 * PhotoSwipe base class that can retrieve data about every slide.
 * Shared by PhotoSwipe Core and PhotoSwipe Lightbox
 */ class PhotoSwipeBase extends Eventable {
    /**
   * Get total number of slides
   *
   * @returns {number}
   */ getNumItems() {
        let numItems;
        const { dataSource  } = this.options;
        if (!dataSource) numItems = 0;
        else if ("length" in dataSource) // may be an array or just object with length property
        numItems = dataSource.length;
        else if ("gallery" in dataSource) {
            // query DOM elements
            if (!dataSource.items) dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
            if (dataSource.items) numItems = dataSource.items.length;
        }
        // legacy event, before filters were introduced
        const event = this.dispatch("numItems", {
            dataSource,
            numItems
        });
        return this.applyFilters("numItems", event.numItems, dataSource);
    }
    /**
   * @param {SlideData} slideData
   * @param {number} index
   */ createContentFromData(slideData, index) {
        // @ts-expect-error
        return new Content(slideData, this, index);
    }
    /**
   * Get item data by index.
   *
   * "item data" should contain normalized information that PhotoSwipe needs to generate a slide.
   * For example, it may contain properties like
   * `src`, `srcset`, `w`, `h`, which will be used to generate a slide with image.
   *
   * @param {number} index
   */ getItemData(index) {
        const { dataSource  } = this.options;
        let dataSourceItem;
        if (Array.isArray(dataSource)) // Datasource is an array of elements
        dataSourceItem = dataSource[index];
        else if (dataSource && dataSource.gallery) {
            // dataSource has gallery property,
            // thus it was created by Lightbox, based on
            // gallery and children options
            // query DOM elements
            if (!dataSource.items) dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
            dataSourceItem = dataSource.items[index];
        }
        let itemData = dataSourceItem;
        if (itemData instanceof Element) itemData = this._domElementToItemData(itemData);
        // Dispatching the itemData event,
        // it's a legacy verion before filters were introduced
        const event = this.dispatch("itemData", {
            itemData: itemData || {},
            index
        });
        return this.applyFilters("itemData", event.itemData, index);
    }
    /**
   * Get array of gallery DOM elements,
   * based on childSelector and gallery element.
   *
   * @param {HTMLElement} galleryElement
   */ _getGalleryDOMElements(galleryElement) {
        if (this.options.children || this.options.childSelector) return getElementsFromOption(this.options.children, this.options.childSelector, galleryElement) || [];
        return [
            galleryElement
        ];
    }
    /**
   * Converts DOM element to item data object.
   *
   * @param {HTMLElement} element DOM element
   */ // eslint-disable-next-line class-methods-use-this
    _domElementToItemData(element) {
        /** @type {SlideData} */ const itemData = {
            element
        };
        // eslint-disable-next-line max-len
        const linkEl = /** @type {HTMLAnchorElement} */ element.tagName === "A" ? element : element.querySelector("a");
        if (linkEl) {
            // src comes from data-pswp-src attribute,
            // if it's empty link href is used
            itemData.src = linkEl.dataset.pswpSrc || linkEl.href;
            if (linkEl.dataset.pswpSrcset) itemData.srcset = linkEl.dataset.pswpSrcset;
            itemData.width = parseInt(linkEl.dataset.pswpWidth, 10);
            itemData.height = parseInt(linkEl.dataset.pswpHeight, 10);
            // support legacy w & h properties
            itemData.w = itemData.width;
            itemData.h = itemData.height;
            if (linkEl.dataset.pswpType) itemData.type = linkEl.dataset.pswpType;
            const thumbnailEl = element.querySelector("img");
            if (thumbnailEl) {
                // msrc is URL to placeholder image that's displayed before large image is loaded
                // by default it's displayed only for the first slide
                itemData.msrc = thumbnailEl.currentSrc || thumbnailEl.src;
                itemData.alt = thumbnailEl.getAttribute("alt");
            }
            if (linkEl.dataset.pswpCropped || linkEl.dataset.cropped) itemData.thumbCropped = true;
        }
        return this.applyFilters("domItemData", itemData, element, linkEl);
    }
    /**
   * Lazy-load by slide data
   *
   * @param {SlideData} itemData Data about the slide
   * @param {number} index
   * @returns Image that is being decoded or false.
   */ lazyLoadData(itemData, index) {
        return lazyLoadData(itemData, this, index);
    }
}
/** @typedef {import('./photoswipe.js').default} PhotoSwipe */ /** @typedef {import('./slide/get-thumb-bounds.js').Bounds} Bounds */ /** @typedef {import('./util/animations.js').AnimationProps} AnimationProps */ // some browsers do not paint
// elements which opacity is set to 0,
// since we need to pre-render elements for the animation -
// we set it to the minimum amount
const MIN_OPACITY = 0.003;
/**
 * Manages opening and closing transitions of the PhotoSwipe.
 *
 * It can perform zoom, fade or no transition.
 */ class Opener {
    /**
   * @param {PhotoSwipe} pswp
   */ constructor(pswp){
        this.pswp = pswp;
        this.isClosed = true;
        this._prepareOpen = this._prepareOpen.bind(this);
        /** @type {false | Bounds} */ this._thumbBounds = undefined;
        // Override initial zoom and pan position
        pswp.on("firstZoomPan", this._prepareOpen);
    }
    open() {
        this._prepareOpen();
        this._start();
    }
    close() {
        if (this.isClosed || this.isClosing || this.isOpening) // if we close during opening animation
        // for now do nothing,
        // browsers aren't good at changing the direction of the CSS transition
        return false;
        const slide = this.pswp.currSlide;
        this.isOpen = false;
        this.isOpening = false;
        this.isClosing = true;
        this._duration = this.pswp.options.hideAnimationDuration;
        if (slide && slide.currZoomLevel * slide.width >= this.pswp.options.maxWidthToAnimate) this._duration = 0;
        this._applyStartProps();
        setTimeout(()=>{
            this._start();
        }, this._croppedZoom ? 30 : 0);
        return true;
    }
    _prepareOpen() {
        this.pswp.off("firstZoomPan", this._prepareOpen);
        if (!this.isOpening) {
            const slide = this.pswp.currSlide;
            this.isOpening = true;
            this.isClosing = false;
            this._duration = this.pswp.options.showAnimationDuration;
            if (slide && slide.zoomLevels.initial * slide.width >= this.pswp.options.maxWidthToAnimate) this._duration = 0;
            this._applyStartProps();
        }
    }
    _applyStartProps() {
        const { pswp  } = this;
        const slide = this.pswp.currSlide;
        const { options  } = pswp;
        if (options.showHideAnimationType === "fade") {
            options.showHideOpacity = true;
            this._thumbBounds = false;
        } else if (options.showHideAnimationType === "none") {
            options.showHideOpacity = false;
            this._duration = 0;
            this._thumbBounds = false;
        } else if (this.isOpening && pswp._initialThumbBounds) // Use initial bounds if defined
        this._thumbBounds = pswp._initialThumbBounds;
        else this._thumbBounds = this.pswp.getThumbBounds();
        this._placeholder = slide.getPlaceholderElement();
        pswp.animations.stopAll();
        // Discard animations when duration is less than 50ms
        this._useAnimation = this._duration > 50;
        this._animateZoom = Boolean(this._thumbBounds) && slide.content && slide.content.usePlaceholder() && (!this.isClosing || !pswp.mainScroll.isShifted());
        if (!this._animateZoom) {
            this._animateRootOpacity = true;
            if (this.isOpening) {
                slide.zoomAndPanToInitial();
                slide.applyCurrentZoomPan();
            }
        } else this._animateRootOpacity = options.showHideOpacity;
        this._animateBgOpacity = !this._animateRootOpacity && this.pswp.options.bgOpacity > MIN_OPACITY;
        this._opacityElement = this._animateRootOpacity ? pswp.element : pswp.bg;
        if (!this._useAnimation) {
            this._duration = 0;
            this._animateZoom = false;
            this._animateBgOpacity = false;
            this._animateRootOpacity = true;
            if (this.isOpening) {
                pswp.element.style.opacity = String(MIN_OPACITY);
                pswp.applyBgOpacity(1);
            }
            return;
        }
        if (this._animateZoom && this._thumbBounds && this._thumbBounds.innerRect) {
            // Properties are used when animation from cropped thumbnail
            this._croppedZoom = true;
            this._cropContainer1 = this.pswp.container;
            this._cropContainer2 = this.pswp.currSlide.holderElement;
            pswp.container.style.overflow = "hidden";
            pswp.container.style.width = pswp.viewportSize.x + "px";
        } else this._croppedZoom = false;
        if (this.isOpening) {
            // Apply styles before opening transition
            if (this._animateRootOpacity) {
                pswp.element.style.opacity = String(MIN_OPACITY);
                pswp.applyBgOpacity(1);
            } else {
                if (this._animateBgOpacity) pswp.bg.style.opacity = String(MIN_OPACITY);
                pswp.element.style.opacity = "1";
            }
            if (this._animateZoom) {
                this._setClosedStateZoomPan();
                if (this._placeholder) {
                    // tell browser that we plan to animate the placeholder
                    this._placeholder.style.willChange = "transform";
                    // hide placeholder to allow hiding of
                    // elements that overlap it (such as icons over the thumbnail)
                    this._placeholder.style.opacity = String(MIN_OPACITY);
                }
            }
        } else if (this.isClosing) {
            // hide nearby slides to make sure that
            // they are not painted during the transition
            pswp.mainScroll.itemHolders[0].el.style.display = "none";
            pswp.mainScroll.itemHolders[2].el.style.display = "none";
            if (this._croppedZoom) {
                if (pswp.mainScroll.x !== 0) {
                    // shift the main scroller to zero position
                    pswp.mainScroll.resetPosition();
                    pswp.mainScroll.resize();
                }
            }
        }
    }
    _start() {
        if (this.isOpening && this._useAnimation && this._placeholder && this._placeholder.tagName === "IMG") // To ensure smooth animation
        // we wait till the current slide image placeholder is decoded,
        // but no longer than 250ms,
        // and no shorter than 50ms
        // (just using requestanimationframe is not enough in Firefox,
        // for some reason)
        new Promise((resolve)=>{
            let decoded = false;
            let isDelaying = true;
            decodeImage(/** @type {HTMLImageElement} */ this._placeholder).finally(()=>{
                decoded = true;
                if (!isDelaying) resolve();
            });
            setTimeout(()=>{
                isDelaying = false;
                if (decoded) resolve();
            }, 50);
            setTimeout(resolve, 250);
        }).finally(()=>this._initiate());
        else this._initiate();
    }
    _initiate() {
        this.pswp.element.style.setProperty("--pswp-transition-duration", this._duration + "ms");
        this.pswp.dispatch(this.isOpening ? "openingAnimationStart" : "closingAnimationStart");
        // legacy event
        this.pswp.dispatch(/** @type {'initialZoomIn' | 'initialZoomOut'} */ "initialZoom" + (this.isOpening ? "In" : "Out"));
        this.pswp.element.classList[this.isOpening ? "add" : "remove"]("pswp--ui-visible");
        if (this.isOpening) {
            if (this._placeholder) // unhide the placeholder
            this._placeholder.style.opacity = "1";
            this._animateToOpenState();
        } else if (this.isClosing) this._animateToClosedState();
        if (!this._useAnimation) this._onAnimationComplete();
    }
    _onAnimationComplete() {
        const { pswp  } = this;
        this.isOpen = this.isOpening;
        this.isClosed = this.isClosing;
        this.isOpening = false;
        this.isClosing = false;
        pswp.dispatch(this.isOpen ? "openingAnimationEnd" : "closingAnimationEnd");
        // legacy event
        pswp.dispatch(/** @type {'initialZoomInEnd' | 'initialZoomOutEnd'} */ "initialZoom" + (this.isOpen ? "InEnd" : "OutEnd"));
        if (this.isClosed) pswp.destroy();
        else if (this.isOpen) {
            if (this._animateZoom) {
                pswp.container.style.overflow = "visible";
                pswp.container.style.width = "100%";
            }
            pswp.currSlide.applyCurrentZoomPan();
        }
    }
    _animateToOpenState() {
        const { pswp  } = this;
        if (this._animateZoom) {
            if (this._croppedZoom) {
                this._animateTo(this._cropContainer1, "transform", "translate3d(0,0,0)");
                this._animateTo(this._cropContainer2, "transform", "none");
            }
            pswp.currSlide.zoomAndPanToInitial();
            this._animateTo(pswp.currSlide.container, "transform", pswp.currSlide.getCurrentTransform());
        }
        if (this._animateBgOpacity) this._animateTo(pswp.bg, "opacity", String(pswp.options.bgOpacity));
        if (this._animateRootOpacity) this._animateTo(pswp.element, "opacity", "1");
    }
    _animateToClosedState() {
        const { pswp  } = this;
        if (this._animateZoom) this._setClosedStateZoomPan(true);
        if (this._animateBgOpacity && pswp.bgOpacity > 0.01) this._animateTo(pswp.bg, "opacity", "0");
        if (this._animateRootOpacity) this._animateTo(pswp.element, "opacity", "0");
    }
    /**
   * @param {boolean=} animate
   */ _setClosedStateZoomPan(animate) {
        if (!this._thumbBounds) return;
        const { pswp  } = this;
        const { innerRect  } = this._thumbBounds;
        const { currSlide , viewportSize  } = pswp;
        if (this._croppedZoom) {
            const containerOnePanX = -viewportSize.x + (this._thumbBounds.x - innerRect.x) + innerRect.w;
            const containerOnePanY = -viewportSize.y + (this._thumbBounds.y - innerRect.y) + innerRect.h;
            const containerTwoPanX = viewportSize.x - innerRect.w;
            const containerTwoPanY = viewportSize.y - innerRect.h;
            if (animate) {
                this._animateTo(this._cropContainer1, "transform", toTransformString(containerOnePanX, containerOnePanY));
                this._animateTo(this._cropContainer2, "transform", toTransformString(containerTwoPanX, containerTwoPanY));
            } else {
                setTransform(this._cropContainer1, containerOnePanX, containerOnePanY);
                setTransform(this._cropContainer2, containerTwoPanX, containerTwoPanY);
            }
        }
        equalizePoints(currSlide.pan, innerRect || this._thumbBounds);
        currSlide.currZoomLevel = this._thumbBounds.w / currSlide.width;
        if (animate) this._animateTo(currSlide.container, "transform", currSlide.getCurrentTransform());
        else currSlide.applyCurrentZoomPan();
    }
    /**
   * @param {HTMLElement} target
   * @param {'transform' | 'opacity'} prop
   * @param {string} propValue
   */ _animateTo(target, prop, propValue) {
        if (!this._duration) {
            target.style[prop] = propValue;
            return;
        }
        const { animations  } = this.pswp;
        /** @type {AnimationProps} */ const animProps = {
            duration: this._duration,
            easing: this.pswp.options.easing,
            onComplete: ()=>{
                if (!animations.activeAnimations.length) this._onAnimationComplete();
            },
            target
        };
        animProps[prop] = propValue;
        animations.startTransition(animProps);
    }
}
/**
 * @template T
 * @typedef {import('./types.js').Type<T>} Type<T>
 */ /** @typedef {import('./slide/slide.js').SlideData} SlideData */ /** @typedef {import('./slide/zoom-level.js').ZoomLevelOption} ZoomLevelOption */ /** @typedef {import('./ui/ui-element.js').UIElementData} UIElementData */ /** @typedef {import('./main-scroll.js').ItemHolder} ItemHolder */ /** @typedef {import('./core/eventable.js').PhotoSwipeEventsMap} PhotoSwipeEventsMap */ /** @typedef {import('./core/eventable.js').PhotoSwipeFiltersMap} PhotoSwipeFiltersMap */ /**
 * @template T
 * @typedef {import('./core/eventable.js').EventCallback<T>} EventCallback<T>
 */ /**
 * @template T
 * @typedef {import('./core/eventable.js').AugmentedEvent<T>} AugmentedEvent<T>
 */ /** @typedef {{ x?: number; y?: number; id?: string | number }} Point */ /** @typedef {{ x?: number; y?: number }} Size */ /** @typedef {{ top: number; bottom: number; left: number; right: number }} Padding */ /** @typedef {SlideData[]} DataSourceArray */ /** @typedef {{ gallery: HTMLElement; items?: HTMLElement[] }} DataSourceObject */ /** @typedef {DataSourceArray | DataSourceObject} DataSource */ /** @typedef {(point: Point, originalEvent: PointerEvent) => void} ActionFn */ /** @typedef {'close' | 'next' | 'zoom' | 'zoom-or-close' | 'toggle-controls'} ActionType */ /** @typedef {Type<PhotoSwipe> | { default: Type<PhotoSwipe> }} PhotoSwipeModule */ /** @typedef {PhotoSwipeModule | Promise<PhotoSwipeModule> | (() => Promise<PhotoSwipeModule>)} PhotoSwipeModuleOption */ /**
 * @typedef {string | NodeListOf<HTMLElement> | HTMLElement[] | HTMLElement} ElementProvider
 */ /**
 * @typedef {Object} PhotoSwipeOptions https://photoswipe.com/options/
 *
 * @prop {DataSource=} dataSource
 * Pass an array of any items via dataSource option. Its length will determine amount of slides
 * (which may be modified further from numItems event).
 *
 * Each item should contain data that you need to generate slide
 * (for image slide it would be src (image URL), width (image width), height, srcset, alt).
 *
 * If these properties are not present in your initial array, you may "pre-parse" each item from itemData filter.
 *
 * @prop {number=} bgOpacity
 * Background backdrop opacity, always define it via this option and not via CSS rgba color.
 *
 * @prop {number=} spacing
 * Spacing between slides. Defined as ratio relative to the viewport width (0.1 = 10% of viewport).
 *
 * @prop {boolean=} allowPanToNext
 * Allow swipe navigation to the next slide when the current slide is zoomed. Does not apply to mouse events.
 *
 * @prop {boolean=} loop
 * If set to true you'll be able to swipe from the last to the first image.
 * Option is always false when there are less than 3 slides.
 *
 * @prop {boolean=} wheelToZoom
 * By default PhotoSwipe zooms image with ctrl-wheel, if you enable this option - image will zoom just via wheel.
 *
 * @prop {boolean=} pinchToClose
 * Pinch touch gesture to close the gallery.
 *
 * @prop {boolean=} closeOnVerticalDrag
 * Vertical drag gesture to close the PhotoSwipe.
 *
 * @prop {Padding=} padding
 * Slide area padding (in pixels).
 *
 * @prop {(viewportSize: Size, itemData: SlideData, index: number) => Padding} [paddingFn]
 * The option is checked frequently, so make sure it's performant. Overrides padding option if defined. For example:
 *
 * @prop {number | false} [hideAnimationDuration]
 * Transition duration in milliseconds, can be 0.
 *
 * @prop {number | false} [showAnimationDuration]
 * Transition duration in milliseconds, can be 0.
 *
 * @prop {number | false} [zoomAnimationDuration]
 * Transition duration in milliseconds, can be 0.
 *
 * @prop {string=} easing
 * String, 'cubic-bezier(.4,0,.22,1)'. CSS easing function for open/close/zoom transitions.
 *
 * @prop {boolean=} escKey
 * Esc key to close.
 *
 * @prop {boolean=} arrowKeys
 * Left/right arrow keys for navigation.
 *
 * @prop {boolean=} returnFocus
 * Restore focus the last active element after PhotoSwipe is closed.
 *
 * @prop {boolean=} clickToCloseNonZoomable
 * If image is not zoomable (for example, smaller than viewport) it can be closed by clicking on it.
 *
 * @prop {ActionType | ActionFn | false} [imageClickAction]
 * Refer to click and tap actions page.
 *
 * @prop {ActionType | ActionFn | false} [bgClickAction]
 * Refer to click and tap actions page.
 *
 * @prop {ActionType | ActionFn | false} [tapAction]
 * Refer to click and tap actions page.
 *
 * @prop {ActionType | ActionFn | false} [doubleTapAction]
 * Refer to click and tap actions page.
 *
 * @prop {number=} preloaderDelay
 * Delay before the loading indicator will be displayed,
 * if image is loaded during it - the indicator will not be displayed at all. Can be zero.
 *
 * @prop {string=} indexIndicatorSep
 * Used for slide count indicator ("1 of 10 ").
 *
 * @prop {(options: PhotoSwipeOptions, pswp: PhotoSwipe) => { x: number; y: number }} [getViewportSizeFn]
 * A function that should return slide viewport width and height, in format {x: 100, y: 100}.
 *
 * @prop {string=} errorMsg
 * Message to display when the image wasn't able to load. If you need to display HTML - use contentErrorElement filter.
 *
 * @prop {[number, number]=} preload
 * Lazy loading of nearby slides based on direction of movement. Should be an array with two integers,
 * first one - number of items to preload before the current image, second one - after the current image.
 * Two nearby images are always loaded.
 *
 * @prop {string=} mainClass
 * Class that will be added to the root element of PhotoSwipe, may contain multiple separated by space.
 * Example on Styling page.
 *
 * @prop {HTMLElement=} appendToEl
 * Element to which PhotoSwipe dialog will be appended when it opens.
 *
 * @prop {number=} maxWidthToAnimate
 * Maximum width of image to animate, if initial rendered image width
 * is larger than this value - the opening/closing transition will be automatically disabled.
 *
 * @prop {string=} closeTitle
 * Translating
 *
 * @prop {string=} zoomTitle
 * Translating
 *
 * @prop {string=} arrowPrevTitle
 * Translating
 *
 * @prop {string=} arrowNextTitle
 * Translating
 *
 * @prop {'zoom' | 'fade' | 'none'} [showHideAnimationType]
 * To adjust opening or closing transition type use lightbox option `showHideAnimationType` (`String`).
 * It supports three values - `zoom` (default), `fade` (default if there is no thumbnail) and `none`.
 *
 * Animations are automatically disabled if user `(prefers-reduced-motion: reduce)`.
 *
 * @prop {number=} index
 * Defines start slide index.
 *
 * @prop {(e: MouseEvent) => number} [getClickedIndexFn]
 *
 * @prop {boolean=} arrowPrev
 * @prop {boolean=} arrowNext
 * @prop {boolean=} zoom
 * @prop {boolean=} close
 * @prop {boolean=} counter
 *
 * @prop {string=} arrowPrevSVG
 * @prop {string=} arrowNextSVG
 * @prop {string=} zoomSVG
 * @prop {string=} closeSVG
 * @prop {string=} counterSVG
 *
 * @prop {string=} arrowPrevTitle
 * @prop {string=} arrowNextTitle
 * @prop {string=} zoomTitle
 * @prop {string=} closeTitle
 * @prop {string=} counterTitle
 *
 * @prop {ZoomLevelOption=} initialZoomLevel
 * @prop {ZoomLevelOption=} secondaryZoomLevel
 * @prop {ZoomLevelOption=} maxZoomLevel
 *
 * @prop {boolean=} mouseMovePan
 * @prop {Point | null} [initialPointerPos]
 * @prop {boolean=} showHideOpacity
 *
 * @prop {PhotoSwipeModuleOption} [pswpModule]
 * @prop {() => Promise<any>} [openPromise]
 * @prop {boolean=} preloadFirstSlide
 * @prop {ElementProvider=} gallery
 * @prop {string=} gallerySelector
 * @prop {ElementProvider=} children
 * @prop {string=} childSelector
 * @prop {string | false} [thumbSelector]
 */ /** @type {PhotoSwipeOptions} */ const defaultOptions = {
    allowPanToNext: true,
    spacing: 0.1,
    loop: true,
    pinchToClose: true,
    closeOnVerticalDrag: true,
    hideAnimationDuration: 333,
    showAnimationDuration: 333,
    zoomAnimationDuration: 333,
    escKey: true,
    arrowKeys: true,
    returnFocus: true,
    maxWidthToAnimate: 4000,
    clickToCloseNonZoomable: true,
    imageClickAction: "zoom-or-close",
    bgClickAction: "close",
    tapAction: "toggle-controls",
    doubleTapAction: "zoom",
    indexIndicatorSep: " / ",
    preloaderDelay: 2000,
    bgOpacity: 0.8,
    index: 0,
    errorMsg: "The image cannot be loaded",
    preload: [
        1,
        2
    ],
    easing: "cubic-bezier(.4,0,.22,1)"
};
/**
 * PhotoSwipe Core
 */ class PhotoSwipe extends PhotoSwipeBase {
    /**
   * @param {PhotoSwipeOptions} options
   */ constructor(options){
        super();
        this._prepareOptions(options);
        /**
     * offset of viewport relative to document
     *
     * @type {{ x?: number; y?: number }}
     */ this.offset = {};
        /**
     * @type {{ x?: number; y?: number }}
     * @private
     */ this._prevViewportSize = {};
        /**
     * Size of scrollable PhotoSwipe viewport
     *
     * @type {{ x?: number; y?: number }}
     */ this.viewportSize = {};
        /**
     * background (backdrop) opacity
     *
     * @type {number}
     */ this.bgOpacity = 1;
        /** @type {HTMLDivElement} */ this.topBar = undefined;
        this.events = new DOMEvents();
        /** @type {Animations} */ this.animations = new Animations();
        this.mainScroll = new MainScroll(this);
        this.gestures = new Gestures(this);
        this.opener = new Opener(this);
        this.keyboard = new Keyboard(this);
        this.contentLoader = new ContentLoader(this);
    }
    init() {
        if (this.isOpen || this.isDestroying) return;
        this.isOpen = true;
        this.dispatch("init"); // legacy
        this.dispatch("beforeOpen");
        this._createMainStructure();
        // add classes to the root element of PhotoSwipe
        let rootClasses = "pswp--open";
        if (this.gestures.supportsTouch) rootClasses += " pswp--touch";
        if (this.options.mainClass) rootClasses += " " + this.options.mainClass;
        this.element.className += " " + rootClasses;
        this.currIndex = this.options.index || 0;
        this.potentialIndex = this.currIndex;
        this.dispatch("firstUpdate"); // starting index can be modified here
        // initialize scroll wheel handler to block the scroll
        this.scrollWheel = new ScrollWheel(this);
        // sanitize index
        if (Number.isNaN(this.currIndex) || this.currIndex < 0 || this.currIndex >= this.getNumItems()) this.currIndex = 0;
        if (!this.gestures.supportsTouch) // enable mouse features if no touch support detected
        this.mouseDetected();
        // causes forced synchronous layout
        this.updateSize();
        this.offset.y = window.pageYOffset;
        this._initialItemData = this.getItemData(this.currIndex);
        this.dispatch("gettingData", {
            index: this.currIndex,
            data: this._initialItemData,
            slide: undefined
        });
        // *Layout* - calculate size and position of elements here
        this._initialThumbBounds = this.getThumbBounds();
        this.dispatch("initialLayout");
        this.on("openingAnimationEnd", ()=>{
            this.mainScroll.itemHolders[0].el.style.display = "block";
            this.mainScroll.itemHolders[2].el.style.display = "block";
            // Add content to the previous and next slide
            this.setContent(this.mainScroll.itemHolders[0], this.currIndex - 1);
            this.setContent(this.mainScroll.itemHolders[2], this.currIndex + 1);
            this.appendHeavy();
            this.contentLoader.updateLazy();
            this.events.add(window, "resize", this._handlePageResize.bind(this));
            this.events.add(window, "scroll", this._updatePageScrollOffset.bind(this));
            this.dispatch("bindEvents");
        });
        // set content for center slide (first time)
        this.setContent(this.mainScroll.itemHolders[1], this.currIndex);
        this.dispatch("change");
        this.opener.open();
        this.dispatch("afterInit");
        return true;
    }
    /**
   * Get looped slide index
   * (for example, -1 will return the last slide)
   *
   * @param {number} index
   */ getLoopedIndex(index) {
        const numSlides = this.getNumItems();
        if (this.options.loop) {
            if (index > numSlides - 1) index -= numSlides;
            if (index < 0) index += numSlides;
        }
        index = clamp(index, 0, numSlides - 1);
        return index;
    }
    appendHeavy() {
        this.mainScroll.itemHolders.forEach((itemHolder)=>{
            if (itemHolder.slide) itemHolder.slide.appendHeavy();
        });
    }
    /**
   * Change the slide
   * @param {number} index New index
   */ goTo(index) {
        this.mainScroll.moveIndexBy(this.getLoopedIndex(index) - this.potentialIndex);
    }
    /**
   * Go to the next slide.
   */ next() {
        this.goTo(this.potentialIndex + 1);
    }
    /**
   * Go to the previous slide.
   */ prev() {
        this.goTo(this.potentialIndex - 1);
    }
    /**
   * @see slide/slide.js zoomTo
   *
   * @param {Parameters<Slide['zoomTo']>} args
   */ zoomTo(...args) {
        this.currSlide.zoomTo(...args);
    }
    /**
   * @see slide/slide.js toggleZoom
   */ toggleZoom() {
        this.currSlide.toggleZoom();
    }
    /**
   * Close the gallery.
   * After closing transition ends - destroy it
   */ close() {
        if (!this.opener.isOpen || this.isDestroying) return;
        this.isDestroying = true;
        this.dispatch("close");
        this.events.removeAll();
        this.opener.close();
    }
    /**
   * Destroys the gallery:
   * - instantly closes the gallery
   * - unbinds events,
   * - cleans intervals and timeouts
   * - removes elements from DOM
   */ destroy() {
        if (!this.isDestroying) {
            this.options.showHideAnimationType = "none";
            this.close();
            return;
        }
        this.dispatch("destroy");
        this.listeners = null;
        this.scrollWrap.ontouchmove = null;
        this.scrollWrap.ontouchend = null;
        this.element.remove();
        this.mainScroll.itemHolders.forEach((itemHolder)=>{
            if (itemHolder.slide) itemHolder.slide.destroy();
        });
        this.contentLoader.destroy();
        this.events.removeAll();
    }
    /**
   * Refresh/reload content of a slide by its index
   *
   * @param {number} slideIndex
   */ refreshSlideContent(slideIndex) {
        this.contentLoader.removeByIndex(slideIndex);
        this.mainScroll.itemHolders.forEach((itemHolder, i)=>{
            let potentialHolderIndex = this.currSlide.index - 1 + i;
            if (this.canLoop()) potentialHolderIndex = this.getLoopedIndex(potentialHolderIndex);
            if (potentialHolderIndex === slideIndex) {
                // set the new slide content
                this.setContent(itemHolder, slideIndex, true);
                // activate the new slide if it's current
                if (i === 1) {
                    /** @type {Slide} */ this.currSlide = itemHolder.slide;
                    itemHolder.slide.setIsActive(true);
                }
            }
        });
        this.dispatch("change");
    }
    /**
   * Set slide content
   *
   * @param {ItemHolder} holder mainScroll.itemHolders array item
   * @param {number} index Slide index
   * @param {boolean=} force If content should be set even if index wasn't changed
   */ setContent(holder, index, force) {
        if (this.canLoop()) index = this.getLoopedIndex(index);
        if (holder.slide) {
            if (holder.slide.index === index && !force) // exit if holder already contains this slide
            // this could be common when just three slides are used
            return;
            // destroy previous slide
            holder.slide.destroy();
            holder.slide = null;
        }
        // exit if no loop and index is out of bounds
        if (!this.canLoop() && (index < 0 || index >= this.getNumItems())) return;
        const itemData = this.getItemData(index);
        holder.slide = new Slide(itemData, index, this);
        // set current slide
        if (index === this.currIndex) this.currSlide = holder.slide;
        holder.slide.append(holder.el);
    }
    getViewportCenterPoint() {
        return {
            x: this.viewportSize.x / 2,
            y: this.viewportSize.y / 2
        };
    }
    /**
   * Update size of all elements.
   * Executed on init and on page resize.
   *
   * @param {boolean=} force Update size even if size of viewport was not changed.
   */ updateSize(force) {
        // let item;
        // let itemIndex;
        if (this.isDestroying) // exit if PhotoSwipe is closed or closing
        // (to avoid errors, as resize event might be delayed)
        return;
        //const newWidth = this.scrollWrap.clientWidth;
        //const newHeight = this.scrollWrap.clientHeight;
        const newViewportSize = getViewportSize(this.options, this);
        if (!force && pointsEqual(newViewportSize, this._prevViewportSize)) // Exit if dimensions were not changed
        return;
        //this._prevViewportSize.x = newWidth;
        //this._prevViewportSize.y = newHeight;
        equalizePoints(this._prevViewportSize, newViewportSize);
        this.dispatch("beforeResize");
        equalizePoints(this.viewportSize, this._prevViewportSize);
        this._updatePageScrollOffset();
        this.dispatch("viewportSize");
        // Resize slides only after opener animation is finished
        // and don't re-calculate size on inital size update
        this.mainScroll.resize(this.opener.isOpen);
        if (!this.hasMouse && window.matchMedia("(any-hover: hover)").matches) this.mouseDetected();
        this.dispatch("resize");
    }
    /**
   * @param {number} opacity
   */ applyBgOpacity(opacity) {
        this.bgOpacity = Math.max(opacity, 0);
        this.bg.style.opacity = String(this.bgOpacity * this.options.bgOpacity);
    }
    /**
   * Whether mouse is detected
   */ mouseDetected() {
        if (!this.hasMouse) {
            this.hasMouse = true;
            this.element.classList.add("pswp--has_mouse");
        }
    }
    /**
   * Page resize event handler
   *
   * @private
   */ _handlePageResize() {
        this.updateSize();
        // In iOS webview, if element size depends on document size,
        // it'll be measured incorrectly in resize event
        //
        // https://bugs.webkit.org/show_bug.cgi?id=170595
        // https://hackernoon.com/onresize-event-broken-in-mobile-safari-d8469027bf4d
        if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) setTimeout(()=>{
            this.updateSize();
        }, 500);
    }
    /**
   * Page scroll offset is used
   * to get correct coordinates
   * relative to PhotoSwipe viewport.
   *
   * @private
   */ _updatePageScrollOffset() {
        this.setScrollOffset(0, window.pageYOffset);
    }
    /**
   * @param {number} x
   * @param {number} y
   */ setScrollOffset(x, y) {
        this.offset.x = x;
        this.offset.y = y;
        this.dispatch("updateScrollOffset");
    }
    /**
   * Create main HTML structure of PhotoSwipe,
   * and add it to DOM
   *
   * @private
   */ _createMainStructure() {
        // root DOM element of PhotoSwipe (.pswp)
        this.element = createElement("pswp");
        this.element.setAttribute("tabindex", "-1");
        this.element.setAttribute("role", "dialog");
        // template is legacy prop
        this.template = this.element;
        // Background is added as a separate element,
        // as animating opacity is faster than animating rgba()
        this.bg = createElement("pswp__bg", false, this.element);
        this.scrollWrap = createElement("pswp__scroll-wrap", "section", this.element);
        this.container = createElement("pswp__container", false, this.scrollWrap);
        // aria pattern: carousel
        this.scrollWrap.setAttribute("aria-roledescription", "carousel");
        this.container.setAttribute("aria-live", "off");
        this.container.setAttribute("id", "pswp__items");
        this.mainScroll.appendHolders();
        this.ui = new UI(this);
        this.ui.init();
        // append to DOM
        (this.options.appendToEl || document.body).appendChild(this.element);
    }
    /**
   * Get position and dimensions of small thumbnail
   *   {x:,y:,w:}
   *
   * Height is optional (calculated based on the large image)
   */ getThumbBounds() {
        return getThumbBounds(this.currIndex, this.currSlide ? this.currSlide.data : this._initialItemData, this);
    }
    /**
   * If the PhotoSwipe can have continious loop
   * @returns Boolean
   */ canLoop() {
        return this.options.loop && this.getNumItems() > 2;
    }
    /**
   * @param {PhotoSwipeOptions} options
   * @private
   */ _prepareOptions(options) {
        if (window.matchMedia("(prefers-reduced-motion), (update: slow)").matches) {
            options.showHideAnimationType = "none";
            options.zoomAnimationDuration = 0;
        }
        /** @type {PhotoSwipeOptions}*/ this.options = {
            ...defaultOptions,
            ...options
        };
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2iTSM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _noRefErrorJs = require("../no-ref-error.js");
function sortNodes(a, b) {
    if (!(a instanceof Element)) throw new (0, _noRefErrorJs.NoRefError)();
    if (a === b) return 0; // eslint-disable-next-line no-bitwise
    if (a.compareDocumentPosition(b) & 2) return 1;
    return -1;
}
exports.default = sortNodes;

},{"../no-ref-error.js":"cqPYA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cqPYA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NoRefError", ()=>NoRefError);
class NoRefError extends Error {
    constructor(){
        super(...arguments);
        /* istanbul ignore next */ this.message = `No valid \`ref\` provided.
You should use \`ref\` from render prop of Item component.
Example:
<Item>{({ ref }) => <div ref={ref}></div>}</Item>\n`;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4uzhx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function objectToHash(obj) {
    return Object.entries(obj).map(([key, value])=>value ? `${key}=${value}` : key).join("&");
}
exports.default = objectToHash;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jBDnX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function hashToObject(hash) {
    return hash.split("&").reduce((acc, keyValue)=>{
        const [key, value] = keyValue.split("=");
        if (key) acc[key] = value;
        return acc;
    }, {});
}
exports.default = hashToObject;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"72hqt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hashToObjectJs = require("./hash-to-object.js");
var _hashToObjectJsDefault = parcelHelpers.interopDefault(_hashToObjectJs);
var _objectToHashJs = require("./object-to-hash.js");
var _objectToHashJsDefault = parcelHelpers.interopDefault(_objectToHashJs);
function getHashWithoutGidAndPid(hash) {
    const obj = (0, _hashToObjectJsDefault.default)(hash);
    delete obj.gid;
    delete obj.pid;
    return (0, _objectToHashJsDefault.default)(obj);
}
exports.default = getHashWithoutGidAndPid;

},{"./hash-to-object.js":"jBDnX","./object-to-hash.js":"4uzhx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gB13d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getHashValue() {
    return window.location.hash.substring(1);
}
exports.default = getHashValue;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bryhX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getBaseUrl() {
    return `${window.location.pathname}${window.location.search}`;
}
exports.default = getBaseUrl;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iJqLU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Context", ()=>Context);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const Context = (0, _reactDefault.default).createContext({
    remove: ()=>{},
    set: ()=>{},
    handleClick: ()=>{},
    open: ()=>{}
});

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gllLN":[function(require,module,exports) {
/**
 * The purpose of this class is to emulate the behavior of the PhotoSwipeLightbox
 * to provide the ability to use plugins
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class PhotoSwipeLightboxStub {
    constructor(pswp){
        this.pswp = pswp;
        this.on = pswp.on.bind(pswp);
        this.off = pswp.off.bind(pswp);
        this.dispatch = pswp.dispatch.bind(pswp);
    }
}
exports.default = PhotoSwipeLightboxStub;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"69dhq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Item", ()=>Item);
var _react = require("react");
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _contextJs = require("./context.js");
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
const Item = (_a)=>{
    var { children  } = _a, restProps = __rest(_a, [
        "children"
    ]);
    const ref = (0, _react.useRef)();
    const { remove , set , handleClick  } = (0, _react.useContext)((0, _contextJs.Context));
    const open = (0, _react.useCallback)((e)=>handleClick(ref, null, null, e), []);
    (0, _react.useEffect)(()=>{
        set(ref, restProps);
        return ()=>remove(ref);
    }, Object.values(restProps));
    return children({
        ref,
        open
    });
};
Item.propTypes = {
    children: (0, _propTypesDefault.default).func.isRequired,
    original: (0, _propTypesDefault.default).string,
    originalSrcset: (0, _propTypesDefault.default).string,
    thumbnail: (0, _propTypesDefault.default).string,
    width: (0, _propTypesDefault.default).oneOfType([
        (0, _propTypesDefault.default).number,
        (0, _propTypesDefault.default).string
    ]),
    height: (0, _propTypesDefault.default).oneOfType([
        (0, _propTypesDefault.default).number,
        (0, _propTypesDefault.default).string
    ]),
    alt: (0, _propTypesDefault.default).string,
    caption: (0, _propTypesDefault.default).string,
    content: (0, _propTypesDefault.default).element,
    html: (0, _propTypesDefault.default).string,
    id: (0, _propTypesDefault.default).oneOfType([
        (0, _propTypesDefault.default).number,
        (0, _propTypesDefault.default).string
    ]),
    cropped: (0, _propTypesDefault.default).bool
};

},{"react":"21dqq","prop-types":"7wKI2","./context.js":"iJqLU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"doEU6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"x3T6r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useGallery", ()=>useGallery);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _contextJs = require("./context.js");
const useGallery = ()=>{
    const { open  } = (0, _reactDefault.default).useContext((0, _contextJs.Context));
    return {
        /**
     * Function that opens the gallery at the provided index
     */ open
    };
};

},{"react":"21dqq","./context.js":"iJqLU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["1xC6H","dNKx6","ebWYT"], "ebWYT", "parcelRequire0188")

//# sourceMappingURL=index.739bf03c.js.map
