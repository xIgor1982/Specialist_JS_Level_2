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
})({"l4AUa":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
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
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
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
    bundle.hotData = {
    };
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
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _appJs = require("./App.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
let app = new _appJsDefault.default();
app.render('#app');

},{"./App.js":"7bftq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7bftq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _customersJs = require("./components/Customers.js");
var _customersJsDefault = parcelHelpers.interopDefault(_customersJs);
var _dashboardJs = require("./components/Dashboard.js");
var _dashboardJsDefault = parcelHelpers.interopDefault(_dashboardJs);
var _goodsJs = require("./components/Goods.js");
var _goodsJsDefault = parcelHelpers.interopDefault(_goodsJs);
var _headerJs = require("./components/Header.js");
var _headerJsDefault = parcelHelpers.interopDefault(_headerJs);
var _integrationsJs = require("./components/Integrations.js");
var _integrationsJsDefault = parcelHelpers.interopDefault(_integrationsJs);
var _navJs = require("./components/Nav.js");
var _navJsDefault = parcelHelpers.interopDefault(_navJs);
var _notFoundJs = require("./components/NotFound.js");
var _notFoundJsDefault = parcelHelpers.interopDefault(_notFoundJs);
var _ordersJs = require("./components/Orders.js");
var _ordersJsDefault = parcelHelpers.interopDefault(_ordersJs);
var _reportsJs = require("./components/Reports.js");
var _reportsJsDefault = parcelHelpers.interopDefault(_reportsJs);
class App {
    constructor(selector){
        this.root = document.querySelector(selector);
        this.pageUrl = "#dashboard";
        history.pushState(this.pageUrl, "", this.pageUrl);
    }
    clickPage(url) {
        this.pageUrl = url;
        history.pushState(this.pageUrl, "", this.pageUrl);
        this.render();
    }
    render(selector) {
        if (selector) this.root = document.querySelector(selector);
        this.root.innerHTML = "";
        const header = new _headerJsDefault.default();
        this.root.appendChild(header.render());
        const options = {
            menuItems: [
                {
                    title: "Дашборд",
                    path: "dashboard",
                    feather: "home"
                },
                {
                    title: "Заказы",
                    path: "orders",
                    feather: "file"
                },
                {
                    title: "Товары",
                    path: "goods",
                    feather: "shopping-cart"
                },
                {
                    title: "Покупатели",
                    path: "customers",
                    feather: "users"
                },
                {
                    title: "Отчёты",
                    path: "reports",
                    feather: "bar-chart-2"
                },
                {
                    title: "Интеграции",
                    path: "integrations",
                    feather: "layers"
                }, 
            ]
        };
        const nav = new _navJsDefault.default(this, options);
        this.root.appendChild(nav.render());
        let component = new _notFoundJsDefault.default();
        switch(this.pageUrl.slice(1)){
            case "dashboard":
                component = new _dashboardJsDefault.default();
                break;
            case "orders":
                component = new _ordersJsDefault.default();
                break;
            case "goods":
                component = new _goodsJsDefault.default();
                break;
            case "customers":
                component = new _customersJsDefault.default();
                break;
            case "reports":
                component = new _reportsJsDefault.default();
                break;
            case "integrations":
                component = new _integrationsJsDefault.default();
                break;
        }
        this.root.appendChild(component.render());
        feather.replace({
            "aria-hidden": "true"
        });
    }
}
exports.default = App;

},{"./components/Header.js":"a3BrM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./components/Customers.js":"b6ZvS","./components/Dashboard.js":"lJKS2","./components/Goods.js":"k0E6h","./components/Integrations.js":"hPz4d","./components/Nav.js":"76cpD","./components/NotFound.js":"2DehO","./components/Orders.js":"jbu0M","./components/Reports.js":"lJ7pT"}],"a3BrM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Header {
    constructor(){
        console.log("отрисовка Header");
        this.content = document.createElement("div");
        this.content.innerHTML = ` 
            <header class="navbar navbar-dark sticky-top bg-secondary flex-md-nowrap p-0 shadow">
                <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Админчасть</a>
                <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <input class="form-control form-control-dark w-100" type="text" placeholder="Поиск" aria-label="Search">
                <div class="navbar-nav">
                    <div class="nav-item text-nowrap">
                        <a class="nav-link px-3" href="#">Выйти</a>
                    </div>
                </div>
            </header>`;
    }
    render() {
        console.log("отрисовка Header");
        return this.content;
    }
}
exports.default = Header;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"b6ZvS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Customers {
    constructor(){
        this.content = document.createElement("div");
        this.content.innerHTML = ` <div class="container-fluid">
        <div class="row">
    
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <h2 id="customers">Покупатели</h2>
        <div class="table-responsive">
        <table class="table table-striped table-sm">
            <thead>
            <tr>
                <th scope="col">Номер</th>
                <th scope="col">Покупатель</th>
                <th scope="col">Дата</th>
                <th scope="col">Сумма заказа</th>
                <th scope="col">Статус</th>
            </tr>
            </thead>
            <tbody>
                                    
            </tbody>
        </table>
        </div>
          </main>  
        </div>
        </div>`;
        const targetElement = this.content.querySelector("table");
        fetch("http://localhost:1234/mock-api/customers.json").then((res)=>res.json()
        ).then((res)=>{
            console.log(res);
            let items = "";
            //   <th scope="col">Номер</th>
            //   <th scope="col">Покупатель</th>
            //   <th scope="col">Дата</th>
            //   <th scope="col">Сумма заказа</th>
            //   <th scope="col">Статус</th>
            res.forEach(({ id , name , data , amount , status  })=>{
                items += `
                    <tr>
                        <td>${id}</td>
                        <td>${name}</td>
                        <td>${data}</td>
                        <td>${amount}</td>
                        <td>${status}</td>
                    </tr>  
                    `;
            });
            targetElement.innerHTML += items;
        });
    }
    render() {
        console.log("отрисовка Customers");
        return this.content;
    }
}
exports.default = Customers;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lJKS2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Dashboard {
    constructor(){
        this.content = document.createElement("div");
        this.content.innerHTML = `<div class="container-fluid">
        <div class="row">
    
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1  id="dashboard" class="h2" >Панель управления</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group me-2">
                <button type="button" class="btn btn-sm btn-outline-secondary">Поделиться</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Экспорт"</button>
                </div>
                <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                Текущая неделя
                </button>
            </div>
            </div>
    
            <canvas class="my-4 w-100" id="myChart" width="900" height="200"></canvas>
          </main>  
        </div>
        </div>`;
        // Graphs
        const ctx1 = this.content.querySelector("#myChart");
        // eslint-disable-next-line no-unused-vars
        const myChart = new Chart(ctx1, {
            type: "line",
            data: {
                labels: [
                    "понедельник",
                    "вторник",
                    "среда",
                    "четверг",
                    "пятница",
                    "суббота",
                    "воскресенье", 
                ],
                datasets: [
                    {
                        data: [
                            15339,
                            21345,
                            18483,
                            24003,
                            23489,
                            24092,
                            12034
                        ],
                        lineTension: 0,
                        backgroundColor: "transparent",
                        borderColor: "#007bff",
                        borderWidth: 4,
                        pointBackgroundColor: "#007bff"
                    }, 
                ]
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: false
                            }
                        }, 
                    ]
                },
                legend: {
                    display: false
                }
            }
        });
        fetch("http://localhost:1234/mock-api/dashboard.json").then((res)=>res.json()
        ).then((res)=>{
            console.log("Dashboard =>", res);
            // Graphs
            const ctx = this.content.querySelector("#myChart");
            // eslint-disable-next-line no-unused-vars
            const myChart = new Chart(ctx, {
                type: "line",
                data: {
                    labels: [
                        "понедельник",
                        "вторник",
                        "среда",
                        "четверг",
                        "пятница",
                        "суббота",
                        "воскресенье", 
                    ],
                    datasets: [
                        {
                            data: res,
                            lineTension: 0,
                            backgroundColor: "transparent",
                            borderColor: "#007bff",
                            borderWidth: 4,
                            pointBackgroundColor: "#007bff"
                        }, 
                    ]
                },
                options: {
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: false
                                }
                            }, 
                        ]
                    },
                    legend: {
                        display: false
                    }
                }
            });
        });
    }
    render() {
        console.log("отрисовка Dashboard");
        return this.content;
    }
}
exports.default = Dashboard;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k0E6h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Goods {
    constructor(){
        this.content = document.createElement("div");
        this.content.innerHTML = ` <div class="container-fluid">
        <div class="row">
    
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <h2 id="goods">Товары</h2>
        <div class="table-responsive">
        <table class="table table-striped table-sm">
            <thead>
            <tr>
                <th scope="col">Артикул товара</th>
                <th scope="col">Изображение</th>
                <th scope="col">Название</th>
                <th scope="col">Цена</th>
                <th scope="col">Количество</th>
            </tr>
            </thead>
            <tbody>
                                            
            </tbody>
        </table>
        </div>
          </main>  
        </div>
        </div>`;
        const targetElement = this.content.querySelector("table");
        fetch("http://localhost:1234/mock-api/goods.json").then((res)=>res.json()
        ).then((res)=>{
            console.log(res);
            let items = "";
            res.forEach(({ id , title , image , price  })=>{
                items += `<tr>
              <td>${id}</td>
              <td><img src=${image} width="100" /></td>
              <td>${title}</td>
              <td>${price}</td>
              <td>5</td>
          </tr>  `;
            });
            targetElement.innerHTML += items;
        }).catch((err)=>{
            console.log("Goods fetch", err);
        });
    }
    render() {
        console.log("отрисовка Goods");
        return this.content;
    }
}
exports.default = Goods;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hPz4d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Integrations {
    constructor(){
        console.log('отрисовка Header');
        this.content = document.createElement('div');
        this.content.innerHTML = ` <div class="container-fluid">
        <div class="row">
    
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <h2 id="integrations">Интеграции</h2>
            <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group me-2">
                   <button type="button" class="btn btn-sm btn-outline-secondary">Добавить интеграцию</button>
               </div>
          </div>
          </main>  
        </div>
        </div>`;
    }
    render() {
        console.log('отрисовка Integrations');
        return this.content;
    }
}
exports.default = Integrations;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"76cpD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Nav {
    constructor(app, options){
        this.content = document.createElement("div");
        this.app = app;
        const liCollection = options.menuItems.map((item)=>{
            const li = document.createElement("li");
            li.classList.add("nav-item");
            const a = document.createElement("a");
            const span = document.createElement("span");
            span.setAttribute("data-feather", item.feather);
            a.appendChild(span);
            const text = document.createTextNode(item.title);
            a.appendChild(text);
            a.classList.add("nav-link");
            a.href = `#${item.path}`;
            a.setAttribute("data-path", item.path);
            a.addEventListener("click", (ev)=>{
                ev.preventDefault();
                // console.log("a.href =>", a.href);
                this.app.clickPage("#" + ev.target.getAttribute("data-path"));
            });
            li.appendChild(a);
            return li;
        });
        // console.log(liCollection)
        this.content.innerHTML = `
        <div class="container-fluid">
            <div class="row">
                <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div class="position-sticky pt-3">
                        <ul class="nav flex-column">

                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        `;
        const ul = this.content.querySelector("ul");
        liCollection.forEach((li)=>ul.appendChild(li)
        );
    }
    render() {
        console.log("отрисовка Nav");
        return this.content;
    }
}
exports.default = Nav;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2DehO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class NotFound {
    constructor(){
        console.log("отрисовка NotFound");
        this.content = document.createElement('div');
        this.content.innerHTML = `
        <div class="container-fluid">
            <div class="row">
                <h1>404</h1>
                <h1>Страница не найдена...</h1>
            </div>
        </div>`;
    }
    render() {
        console.log('отрисовка NotFound');
        return this.content;
    }
}
exports.default = NotFound;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jbu0M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Orders {
    constructor(){
        console.log("отрисовка Header");
        this.content = document.createElement("div");
        this.content.innerHTML = ` <div class="container-fluid">
        <div class="row">
    
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <h2 id="orders">Заказы</h2>
        <div class="table-responsive">
        <table class="table table-striped table-sm">
            <thead>
            <tr>
                <th scope="col">Номер заказа</th>
                <th scope="col">ФИО покупателя</th>
                <th scope="col">Общая цена</th>
                <th scope="col">Статус</th>
            </tr>
            </thead>
            <tbody>
                             
            </tbody>
        </table>
        </div>
          </main>  
        </div>
        </div>`;
        const targetElement = this.content.querySelector("table");
        fetch("http://localhost:1234/mock-api/orders.json").then((res)=>res.json()
        ).then((res)=>{
            console.log(res);
            let items = "";
            res.forEach(({ id , name , amount , status  })=>{
                items += `<tr>
              <td>${id}</td>
              <td>${name}</td>
              <td>${amount}</td>
              <td>${status}</td>
          </tr>  `;
            });
            targetElement.innerHTML += items;
        });
    }
    render() {
        console.log("отрисовка Orders");
        return this.content;
    }
}
exports.default = Orders;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lJ7pT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Reports {
    constructor(){
        console.log('отрисовка Header');
        this.content = document.createElement('div');
        this.content.innerHTML = ` <div class="container-fluid">
        <div class="row">
    
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <h2 id="reports">Отчёты</h2>
            <div class="table-responsive">
            <table class="table table-striped table-sm">
                <thead>
                <tr>
                    <th scope="col">Номер</th>
                    <th scope="col">Название</th>
                    <th scope="col">Дата</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1001</td>
                    <td>random</td>
                    <td>data</td>
                </tr>
                <tr>
                    <td>1002</td>
                    <td>placeholder</td>
                    <td>irrelevant</td>         
                </tr>                                     
                </tbody>
            </table>
            </div>
          </main>  
        </div>
        </div>`;
    }
    render() {
        console.log('отрисовка Reports');
        return this.content;
    }
}
exports.default = Reports;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["l4AUa","ebWYT"], "ebWYT", "parcelRequirede2b")

//# sourceMappingURL=index.739bf03c.js.map
