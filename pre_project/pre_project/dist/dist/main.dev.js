"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  "use strict";

  var t = [{
    name: "Котлета",
    price: 1290
  }, {
    name: "Курица",
    price: 3500
  }, {
    name: "Помидоры",
    price: 3990
  }];

  function n(t) {
    document.getElementById("app").innerHTML += t;
  }

  var e = 0;
  var a = {};

  for (var _i = 0, _t = t; _i < _t.length; _i++) {
    var _n2 = _t[_i];
    a[_n2.name] = _objectSpread({}, _n2, {
      count: 0
    });
  }

  function c(_ref) {
    var t = _ref.name,
        e = _ref.price,
        a = _ref.count;
    n("\n    <div class=\"p-3 mb-2 bg-secondary text-white\">\n\n    <p class=\"text-center fw-bold\">\n\n    <img src=\"image1.png\">".concat(t, "</img>[ ").concat(e, " \u0440\u0443\u0431 <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-cash\" viewBox=\"0 0 16 16\">\n    <path d=\"M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\"/>\n    <path d=\"M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z\"/>\n    </svg> ] - ").concat(a, " \u0448\u0442\n\n    <button class=\"addTocart btn btn-warning\" data-name=\"").concat(t, "\" data-price=\"").concat(e, "\">\n    \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\n    </button>\n\n    <button class=\"removeTocart btn btn-danger\" data-name=\"").concat(t, "\" data-price=\"").concat(e, "\">\n    \u0423\u0434\u0430\u043B\u0438\u0442\u044C\n    </button>\n\n    </p>\n\n    </div>\n  "));
  }

  !function r() {
    document.getElementById("app").innerHTML = "";
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = t[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _n = _step.value;
        c(a[_n.name]);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    n("<div class=\"p-3 mb-2 bg-success text-white\">\n\n    <p class=\"text-center fw-bold\">\n\n      \u0418\u0442\u043E\u0433 : ".concat(e, " <img src=\"rubl.png\"></img>\n    </p>\n\n    </div>\n    ")), document.querySelectorAll(".addTocart").forEach(function (t) {
      t.addEventListener("click", function (t) {
        var n = t.target.getAttribute("data-name"),
            c = +t.target.getAttribute("data-price");
        e += c, a[n].count += 1, r();
      });
    }), document.querySelectorAll(".removeTocart").forEach(function (t) {
      t.addEventListener("click", function (t) {
        var n = t.target.getAttribute("data-name"),
            c = t.target.getAttribute("data-price");
        e -= c, e < 0 && (e = 0), a[n].count -= 1, a[n].count < 0 && (a[n].count = 0), r();
      });
    });
  }();
})();
//# sourceMappingURL=main.dev.js.map
