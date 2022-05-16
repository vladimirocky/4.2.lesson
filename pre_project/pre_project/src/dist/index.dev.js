"use strict";

var _data_module = _interopRequireDefault(require("./data_module"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var totalPrice = 0;
var cart = {};
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = _data_module["default"][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var product = _step.value;
    cart[product.name] = _objectSpread({}, product, {
      count: 0
    });
  } // после цикла cart будет содержать:
  // {
  //   "Котлета": {
  //     name: "Котлета",
  //     price: 1290,
  //     count: 0
  //   },
  //   ...
  // }
  // при чем оригинальный объект продукта останется прежним

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

function renderItem(_ref) {
  var name = _ref.name,
      price = _ref.price,
      count = _ref.count;
  // добавляет на страницу верстку для одного продукта
  (0, _utils.addHtml)("\n    <div class=\"p-3 mb-2 bg-secondary text-white\">\n\n    <p class=\"text-center fw-bold\">\n\n    [ ".concat(price, " \u0440\u0443\u0431 <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-cash\" viewBox=\"0 0 16 16\">\n    <path d=\"M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\"/>\n    <path d=\"M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z\"/>\n    </svg> ] - ").concat(count, " \u0448\u0442\n\n    <button class=\"addTocart btn btn-warning\" id=\"saasTest\" data-name=\"").concat(name, "\" data-price=\"").concat(price, "\">\n    \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\n    </button>\n\n    <button class=\"removeTocart btn btn-danger\" data-name=\"").concat(name, "\" data-price=\"").concat(price, "\">\n    \u0423\u0434\u0430\u043B\u0438\u0442\u044C\n    </button>\n\n    </p>\n\n    </div>\n  "));
}

function renderPage() {
  // создает верстку страницы
  // очищаем все
  (0, _utils.clearHtml)();
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = _data_module["default"][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var product = _step2.value;
      // добавляем по одному продукты из списка
      renderItem(cart[product.name]);
    } // добавляем в конце итог

  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  (0, _utils.addHtml)("<div class=\"p-3 mb-2 bg-success text-white\">\n\n    <p class=\"text-center fw-bold\">\n\n      \u0418\u0442\u043E\u0433 : ".concat(totalPrice, " </img>\n    </p>\n\n    </div>\n    ")); // выбирает все кнопки по классу addTocart

  document.querySelectorAll(".addTocart").forEach(function (el) {
    // навешиваем им событие на "клик"
    el.addEventListener("click", function (event) {
      // ЭТА ФУНКЦИЯ ВЫЗЫВАЕТСЯ ТОЛЬКО ПРИ КЛИКЕ
      // достаем из атрибутов значение свойств
      var name = event.target.getAttribute("data-name");
      var price = +event.target.getAttribute("data-price"); // увеличиваем итог

      totalPrice += price; // увеличиваем количество в тележке

      cart[name].count += 1; // перерисовываем страницу

      renderPage();
    });
  });
  document.querySelectorAll(".removeTocart").forEach(function (el) {
    el.addEventListener("click", function (event) {
      var name = event.target.getAttribute("data-name");
      var price = event.target.getAttribute("data-price");
      totalPrice -= price;

      if (totalPrice < 0) {
        totalPrice = 0;
      }

      cart[name].count -= 1;

      if (cart[name].count < 0) {
        cart[name].count = 0;
      }

      renderPage();
    });
  });
}

renderPage();
//# sourceMappingURL=index.dev.js.map
