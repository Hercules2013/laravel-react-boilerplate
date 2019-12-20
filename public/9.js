(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./resources/js/modules/auth/pages/login/Page.js":
/*!*******************************************************!*\
  !*** ./resources/js/modules/auth/pages/login/Page.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service */ \"./resources/js/modules/auth/service.js\");\n/* harmony import */ var ree_validate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ree-validate */ \"./node_modules/ree-validate/dist/ree-validate.esm.js\");\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Form */ \"./resources/js/modules/auth/pages/login/components/Form.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// import libs\n\n\n\n\n\n\n // import components\n\n // initialize component\n\nvar Page =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Page, _Component);\n\n  // set name of the component\n  // validate props\n  function Page(props) {\n    var _this;\n\n    _classCallCheck(this, Page);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, props));\n    _this.validator = new ree_validate__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n      email: 'required|email',\n      password: 'required|min:6'\n    }); // set the state of the app\n\n    _this.state = {\n      credentials: {\n        email: '',\n        password: '',\n        remember: false\n      },\n      errors: _this.validator.errors\n    }; // bind component with event handlers\n\n    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));\n    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));\n    return _this;\n  } // after mounting the component add a style to the body\n\n\n  _createClass(Page, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      jquery__WEBPACK_IMPORTED_MODULE_2___default()('body').attr('style', 'background-color: #eee');\n    } // remove body style before component leaves dom\n\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      jquery__WEBPACK_IMPORTED_MODULE_2___default()('body').removeAttr('style');\n    } // event to handle input change\n\n  }, {\n    key: \"handleChange\",\n    value: function handleChange(name, value) {\n      var _this2 = this;\n\n      var errors = this.validator.errors;\n      this.setState({\n        credentials: _objectSpread({}, this.state.credentials, _defineProperty({}, name, value))\n      });\n      errors.remove(name);\n      this.validator.validate(name, value).then(function () {\n        _this2.setState({\n          errors: errors\n        });\n      });\n    } // event to handle form submit\n\n  }, {\n    key: \"handleSubmit\",\n    value: function handleSubmit(e) {\n      var _this3 = this;\n\n      e.preventDefault();\n      var credentials = this.state.credentials;\n      var errors = this.validator.errors;\n      this.validator.validateAll(credentials).then(function (success) {\n        if (success) {\n          _this3.submit(credentials);\n        } else {\n          _this3.setState({\n            errors: errors\n          });\n        }\n      });\n    }\n  }, {\n    key: \"submit\",\n    value: function submit(credentials) {\n      var _this4 = this;\n\n      this.props.dispatch(Object(_service__WEBPACK_IMPORTED_MODULE_5__[\"login\"])(credentials)).catch(function (_ref) {\n        var error = _ref.error,\n            statusCode = _ref.statusCode;\n        var errors = _this4.validator.errors;\n\n        if (statusCode === 422) {\n          lodash__WEBPACK_IMPORTED_MODULE_3___default.a.forOwn(error, function (message, field) {\n            errors.add(field, message);\n          });\n        } else if (statusCode === 401) {\n          errors.add('password', error);\n        }\n\n        _this4.setState({\n          errors: errors\n        });\n      });\n    } // render component\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      // check if user is authenticated then redirect him to home page\n      if (this.props.isAuthenticated) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Redirect\"], {\n          to: \"/\"\n        });\n      }\n\n      var props = {\n        email: this.state.credentials.email,\n        password: this.state.credentials.password,\n        remember: this.state.credentials.remember,\n        errors: this.state.errors,\n        handleChange: this.handleChange,\n        handleSubmit: this.handleSubmit\n      };\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"container py-5\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-md-12\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"mx-auto\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"anchor\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"card has-shadow\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"card-body\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"], props))))))));\n    }\n  }]);\n\n  return Page;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n_defineProperty(Page, \"displayName\", 'LoginPage');\n\n_defineProperty(Page, \"propTypes\", {\n  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,\n  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbW9kdWxlcy9hdXRoL3BhZ2VzL2xvZ2luL1BhZ2UuanM/YjlkZiJdLCJuYW1lcyI6WyJQYWdlIiwicHJvcHMiLCJ2YWxpZGF0b3IiLCJSZWVWYWxpZGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJzdGF0ZSIsImNyZWRlbnRpYWxzIiwicmVtZW1iZXIiLCJlcnJvcnMiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwiJCIsImF0dHIiLCJyZW1vdmVBdHRyIiwibmFtZSIsInZhbHVlIiwic2V0U3RhdGUiLCJyZW1vdmUiLCJ2YWxpZGF0ZSIsInRoZW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGF0ZUFsbCIsInN1Y2Nlc3MiLCJzdWJtaXQiLCJkaXNwYXRjaCIsImxvZ2luIiwiY2F0Y2giLCJlcnJvciIsInN0YXR1c0NvZGUiLCJfIiwiZm9yT3duIiwibWVzc2FnZSIsImZpZWxkIiwiYWRkIiwiaXNBdXRoZW50aWNhdGVkIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FHQTs7SUFDTUEsSTs7Ozs7QUFDSjtBQUdBO0FBTUEsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEVBQU1BLEtBQU47QUFFQSxVQUFLQyxTQUFMLEdBQWlCLElBQUlDLG9EQUFKLENBQWdCO0FBQy9CQyxXQUFLLEVBQUUsZ0JBRHdCO0FBRS9CQyxjQUFRLEVBQUU7QUFGcUIsS0FBaEIsQ0FBakIsQ0FIaUIsQ0FRakI7O0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGlCQUFXLEVBQUU7QUFDWEgsYUFBSyxFQUFFLEVBREk7QUFFWEMsZ0JBQVEsRUFBRSxFQUZDO0FBR1hHLGdCQUFR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QUF1QkgsS0FEbEI7QUFFWkMsZ0JBQVEsRUFBRSxLQUFLQyxLQUFMLENBQVdDLFdBQVgsQ0FBdUJGLFFBRnJCO0FBR1pHLGdCQUFRLEVBQUUsS0FBS0YsS0FBTCxDQUFXQyxXQUFYLENBQXVCQyxRQUhyQjtBQUlaQyxjQUFNLEVBQUUsS0FBS0gsS0FBTCxDQUFXRyxNQUpQO0FBS1pDLG9CQUFZLEVBQUUsS0FBS0EsWUFMUDtBQU1aRSxvQkFBWSxFQUFFLEtBQUtBO0FBTlAsT0FBZDtBQVNBLGFBQVE7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDTjtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQU0saUJBQVMsRUFBQztBQUFoQixRQURGLEVBRUU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLDJEQUFDLHdEQUFELEVBQVVYLEtBQVYsQ0FERixDQURGLENBRkYsQ0FERixDQURGLENBREYsQ0FETSxDQUFSO0FBZ0JEOzs7O0VBMUhnQnFDLCtDOztnQkFBYnRDLEksaUJBRWlCLFc7O2dCQUZqQkEsSSxlQUtlO0FBQ2pCcUMsaUJBQWUsRUFBRUUsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQyxVQURmO0FBRWpCZCxVQUFRLEVBQUVZLGlEQUFTLENBQUNHLElBQVYsQ0FBZUQ7QUFGUixDOztBQXdITnpDLG1FQUFmIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL21vZHVsZXMvYXV0aC9wYWdlcy9sb2dpbi9QYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGxpYnNcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSAnLi4vLi4vc2VydmljZSdcbmltcG9ydCBSZWVWYWxpZGF0ZSBmcm9tICdyZWUtdmFsaWRhdGUnXG5cbi8vIGltcG9ydCBjb21wb25lbnRzXG5pbXBvcnQgRm9ybSBmcm9tICcuL2NvbXBvbmVudHMvRm9ybSdcblxuLy8gaW5pdGlhbGl6ZSBjb21wb25lbnRcbmNsYXNzIFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvLyBzZXQgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdMb2dpblBhZ2UnXG5cbiAgLy8gdmFsaWRhdGUgcHJvcHNcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBSZWVWYWxpZGF0ZSh7XG4gICAgICBlbWFpbDogJ3JlcXVpcmVkfGVtYWlsJyxcbiAgICAgIHBhc3N3b3JkOiAncmVxdWlyZWR8bWluOjYnXG4gICAgfSlcblxuICAgIC8vIHNldCB0aGUgc3RhdGUgb2YgdGhlIGFwcFxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgcmVtZW1iZXI6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGVycm9yczogdGhpcy52YWxpZGF0b3IuZXJyb3JzXG4gICAgfVxuXG4gICAgLy8gYmluZCBjb21wb25lbnQgd2l0aCBldmVudCBoYW5kbGVyc1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxuICB9XG5cbiAgLy8gYWZ0ZXIgbW91bnRpbmcgdGhlIGNvbXBvbmVudCBhZGQgYSBzdHlsZSB0byB0aGUgYm9keVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAkKCdib2R5JykuYXR0cignc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogI2VlZScpXG4gIH1cblxuICAvLyByZW1vdmUgYm9keSBzdHlsZSBiZWZvcmUgY29tcG9uZW50IGxlYXZlcyBkb21cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgJCgnYm9keScpLnJlbW92ZUF0dHIoJ3N0eWxlJylcbiAgfVxuXG4gIC8vIGV2ZW50IHRvIGhhbmRsZSBpbnB1dCBjaGFuZ2VcbiAgaGFuZGxlQ2hhbmdlKG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc3QgeyBlcnJvcnMgfSA9IHRoaXMudmFsaWRhdG9yXG5cbiAgICB0aGlzLnNldFN0YXRlKHsgY3JlZGVudGlhbHM6IHsgLi4udGhpcy5zdGF0ZS5jcmVkZW50aWFscywgW25hbWVdOiB2YWx1ZSB9IH0pXG5cbiAgICBlcnJvcnMucmVtb3ZlKG5hbWUpXG5cbiAgICB0aGlzLnZhbGlkYXRvci52YWxpZGF0ZShuYW1lLCB2YWx1ZSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ycyB9KVxuICAgICAgfSlcbiAgfVxuXG4gIC8vIGV2ZW50IHRvIGhhbmRsZSBmb3JtIHN1Ym1pdFxuICBoYW5kbGVTdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHsgY3JlZGVudGlhbHMgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IGVycm9ycyB9ID0gdGhpcy52YWxpZGF0b3JcblxuICAgIHRoaXMudmFsaWRhdG9yLnZhbGlkYXRlQWxsKGNyZWRlbnRpYWxzKVxuICAgICAgLnRoZW4oKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICB0aGlzLnN1Ym1pdChjcmVkZW50aWFscylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JzIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cblxuICBzdWJtaXQoY3JlZGVudGlhbHMpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGxvZ2luKGNyZWRlbnRpYWxzKSlcbiAgICAgIC5jYXRjaCgoeyBlcnJvciwgc3RhdHVzQ29kZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgZXJyb3JzIH0gPSB0aGlzLnZhbGlkYXRvclxuXG4gICAgICAgIGlmIChzdGF0dXNDb2RlID09PSA0MjIpIHtcbiAgICAgICAgICBfLmZvck93bihlcnJvciwgKG1lc3NhZ2UsIGZpZWxkKSA9PiB7XG4gICAgICAgICAgICBlcnJvcnMuYWRkKGZpZWxkLCBtZXNzYWdlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0dXNDb2RlID09PSA0MDEpIHtcbiAgICAgICAgICBlcnJvcnMuYWRkKCdwYXNzd29yZCcsIGVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcnMgfSlcbiAgICAgIH0pXG4gIH1cblxuICAvLyByZW5kZXIgY29tcG9uZW50XG4gIHJlbmRlcigpIHtcblxuICAgIC8vIGNoZWNrIGlmIHVzZXIgaXMgYXV0aGVudGljYXRlZCB0aGVuIHJlZGlyZWN0IGhpbSB0byBob21lIHBhZ2VcbiAgICBpZiAodGhpcy5wcm9wcy5pc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvXCIgLz5cbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICBlbWFpbDogdGhpcy5zdGF0ZS5jcmVkZW50aWFscy5lbWFpbCxcbiAgICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLmNyZWRlbnRpYWxzLnBhc3N3b3JkLFxuICAgICAgcmVtZW1iZXI6IHRoaXMuc3RhdGUuY3JlZGVudGlhbHMucmVtZW1iZXIsXG4gICAgICBlcnJvcnM6IHRoaXMuc3RhdGUuZXJyb3JzLFxuICAgICAgaGFuZGxlQ2hhbmdlOiB0aGlzLmhhbmRsZUNoYW5nZSxcbiAgICAgIGhhbmRsZVN1Ym1pdDogdGhpcy5oYW5kbGVTdWJtaXQsXG4gICAgfVxuXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweS01XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYW5jaG9yXCIvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgaGFzLXNoYWRvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICA8Rm9ybSB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/modules/auth/pages/login/Page.js\n");

/***/ }),

/***/ "./resources/js/modules/auth/pages/login/components/Form.js":
/*!******************************************************************!*\
  !*** ./resources/js/modules/auth/pages/login/components/Form.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\nvar displayName = 'LoginForm';\nvar propTypes = {\n  email: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  password: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  remember: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,\n  handleSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n  handleChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n\nvar Form = function Form(_ref) {\n  var email = _ref.email,\n      password = _ref.password,\n      remember = _ref.remember,\n      errors = _ref.errors,\n      handleChange = _ref.handleChange,\n      handleSubmit = _ref.handleSubmit;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: \"form\",\n    role: \"form\",\n    onSubmit: handleSubmit,\n    noValidate: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"card-title\"\n  }, \"Please sign in\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"email\",\n    className: \"sr-only\"\n  }, \"Email\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    className: \"form-control form-control-lg rounded-0 \".concat(errors.has('email') && 'is-invalid'),\n    name: \"email\",\n    id: \"email\",\n    placeholder: \"Email address\",\n    value: email || '',\n    onChange: function onChange(e) {\n      return handleChange(e.target.name, e.target.value);\n    },\n    required: true,\n    autoFocus: true\n  }), errors.has('email') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"invalid-feedback\"\n  }, errors.first('email'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"password\",\n    className: \"sr-only\"\n  }, \"Password\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"password\",\n    className: \"form-control form-control-lg rounded-0 \".concat(errors.has('password') && 'is-invalid'),\n    id: \"password\",\n    name: \"password\",\n    placeholder: \"Password\",\n    value: password || '',\n    onChange: function onChange(e) {\n      return handleChange(e.target.name, e.target.value);\n    },\n    required: true\n  }), errors.has('password') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"invalid-feedback\"\n  }, errors.first('password'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"custom-control custom-checkbox\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"checkbox\",\n    name: \"remember\",\n    className: \"custom-control-input\",\n    onChange: function onChange(e) {\n      return handleChange(e.target.name, !remember);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"custom-control-indicator\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"custom-control-description small\"\n  }, \"Remember me on this computer\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"btn btn-lg btn-primary btn-block\",\n    type: \"submit\",\n    disabled: errors.any()\n  }, \"Sign In\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Not a member? \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: \"/register\"\n  }, \"Signup here\")));\n};\n\nForm.displayName = displayName;\nForm.propTypes = propTypes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbW9kdWxlcy9hdXRoL3BhZ2VzL2xvZ2luL2NvbXBvbmVudHMvRm9ybS5qcz9kOGQxIl0sIm5hbWVzIjpbImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiZW1haWwiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJwYXNzd29yZCIsInJlbWVtYmVyIiwiYm9vbCIsImVycm9ycyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJoYW5kbGVTdWJtaXQiLCJmdW5jIiwiaGFuZGxlQ2hhbmdlIiwiRm9ybSIsImhhcyIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJmaXJzdCIsImFueSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLFdBQXBCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHO0FBQ2hCQyxPQUFLLEVBQUVDLGlEQUFTLENBQUNDLE1BREQ7QUFFaEJDLFVBQVEsRUFBRUYsaURBQVMsQ0FBQ0MsTUFGSjtBQUdoQkUsVUFBUSxFQUFFSCxpREFBUyxDQUFDSSxJQUhKO0FBSWhCQyxRQUFNLEVBQUVMLGlEQUFTLENBQUNNLE1BQVYsQ0FBaUJDLFVBSlQ7QUFLaEJDLGNBQVksRUFBRVIsaURBQVMsQ0FBQ1MsSUFBVixDQUFlRixVQUxiO0FBTWhCRyxjQUFZLEVBQUVWLGlEQUFTLENBQUNTLElBQVYsQ0FBZUY7QUFOYixDQUFsQjs7QUFTQSxJQUFNSSxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLE1BQUdaLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVHLFFBQVYsUUFBVUEsUUFBVjtBQUFBLE1BQW9CQyxRQUFwQixRQUFvQkEsUUFBcEI7QUFBQSxNQUE4QkUsTUFBOUIsUUFBOEJBLE1BQTlCO0FBQUEsTUFBc0NLLFlBQXRDLFFBQXNDQSxZQUF0QztBQUFBLE1BQW9ERixZQUFwRCxRQUFvREEsWUFBcEQ7QUFBQSxTQUNYO0FBQU0sYUFBUyxFQUFDLE1BQWhCO0FBQXVCLFFBQUksRUFBQyxNQUE1QjtBQUFtQyxZQUFRLEVBQUVBLFlBQTdDO0FBQTJELGNBQVU7QUFBckUsS0FDRTtBQUFJLGFBQVMsRUFBQztBQUFkLHNCQURGLEVBRUU7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQU8sV0FBTyxFQUFDLE9BQWY7QUFBdUIsYUFBUyxFQUFDO0FBQWpDLGFBREYsRUFFRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQ08sYUFBUyxtREFBNENILE1BQU0sQ0FBQ08sR0FBUCxDQUFXLE9BQVgsS0FBdUIsWUFBbkUsQ0FEaEI7QUFFTyxRQUFJLEVBQUMsT0FGWjtBQUdPLE1BQUUsRUFBQyxPQUhWO0FBSU8sZUFBVyxFQUFDLGVBSm5CO0FBS08sU0FBSyxFQUFFYixLQUFLLElBQUksRUFMdkI7QUFNTyxZQUFRLEVBQUUsa0JBQUFjLENBQUM7QUFBQSxhQUFJSCxZQUFZLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxJQUFWLEVBQWdCRixDQUFDLENBQUNDLE1BQUYsQ0FBU0UsS0FBekIsQ0FBaEI7QUFBQSxLQU5sQjtBQU9PLFlBQVEsTUFQZjtBQVFPLGFBQVM7QUFSaEIsSUFGRixFQVdHWCxNQUFNLENBQUNPLEdBQVAsQ0FBVyxPQUFYLEtBQXVCO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBbUNQLE1BQU0sQ0FBQ1ksS0FBUCxDQUFhLE9BQWIsQ0FBbkMsQ0FYMUIsQ0FGRixFQWVFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFPLFdBQU8sRUFBQyxVQUFmO0FBQTBCLGFBQVMsRUFBQztBQUFwQyxnQkFERixFQUVFO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFDTyxhQUFTLG1EQUE0Q1osTUFBTSxDQUFDTyxHQUFQLENBQVcsVUFBWCxLQUEwQixZQUF0RSxDQURoQjtBQUVPLE1BQUUsRUFBQyxVQUZWO0FBR08sUUFBSSxFQUFDLFVBSFo7QUFJTyxlQUFXLEVBQUMsVUFKbkI7QUFLTyxTQUFLLEVBQUVWLFFBQVEsSUFBSSxFQUwxQjtBQU1PLFlBQVEsRUFBRSxrQkFBQVcsQ0FBQztBQUFBLGFBQUlILFlBQVksQ0FBQ0csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLElBQVYsRUFBZ0JGLENBQUMsQ0FBQ0MsTUFBRixDQUFTRSxLQUF6QixDQUFoQjtBQUFBLEtBTmxCO0FBT08sWUFBUTtBQVBmLElBRkYsRUFVR1gsTUFBTSxDQUFDTyxHQUFQLENBQVcsVUFBWCxLQUEwQjtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQW1DUCxNQUFNLENBQUNZLEtBQVAsQ0FBYSxVQUFiLENBQW5DLENBVjdCLENBZkYsRUEyQkUsd0VBQ0U7QUFBTyxhQUFTLEVBQUM7QUFBakIsS0FDRTtBQUFPLFFBQUksRUFBQyxVQUFaO0FBQ08sUUFBSSxFQUFDLFVBRFo7QUFFTyxhQUFTLEVBQUMsc0JBRmpCO0FBR08sWUFBUSxFQUFFLGtCQUFBSixDQUFDO0FBQUEsYUFBSUgsWUFBWSxDQUFDRyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsSUFBVixFQUFnQixDQUFDWixRQUFqQixDQUFoQjtBQUFBO0FBSGxCLElBREYsRUFLRTtBQUFNLGFBQVMsRUFBQztBQUFoQixJQUxGLEVBTUU7QUFBTSxhQUFTLEVBQUM7QUFBaEIsb0NBTkYsQ0FERixDQTNCRixFQXFDRTtBQUFRLGFBQVMsRUFBQyxrQ0FBbEI7QUFDUSxRQUFJLEVBQUMsUUFEYjtBQUVRLFlBQVEsRUFBRUUsTUFBTSxDQUFDYSxHQUFQO0FBRmxCLGVBckNGLEVBd0NFLHdGQUFpQiwyREFBQyxxREFBRDtBQUFNLE1BQUUsRUFBQztBQUFULG1CQUFqQixDQXhDRixDQURXO0FBQUEsQ0FBYjs7QUE2Q0FQLElBQUksQ0FBQ2QsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQWMsSUFBSSxDQUFDYixTQUFMLEdBQWlCQSxTQUFqQjtBQUVlYSxtRUFBZiIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9tb2R1bGVzL2F1dGgvcGFnZXMvbG9naW4vY29tcG9uZW50cy9Gb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmNvbnN0IGRpc3BsYXlOYW1lID0gJ0xvZ2luRm9ybSdcbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgZW1haWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBhc3N3b3JkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZW1lbWJlcjogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBoYW5kbGVTdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGhhbmRsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cblxuY29uc3QgRm9ybSA9ICh7IGVtYWlsLCBwYXNzd29yZCwgcmVtZW1iZXIsIGVycm9ycywgaGFuZGxlQ2hhbmdlLCBoYW5kbGVTdWJtaXQgfSkgPT4gKFxuICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtXCIgcm9sZT1cImZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBub1ZhbGlkYXRlPlxuICAgIDxoMiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+UGxlYXNlIHNpZ24gaW48L2gyPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5FbWFpbDwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtbGcgcm91bmRlZC0wICR7ZXJyb3JzLmhhcygnZW1haWwnKSAmJiAnaXMtaW52YWxpZCd9YH1cbiAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgYWRkcmVzc1wiXG4gICAgICAgICAgICAgdmFsdWU9e2VtYWlsIHx8ICcnfVxuICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGhhbmRsZUNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICBhdXRvRm9jdXMvPlxuICAgICAge2Vycm9ycy5oYXMoJ2VtYWlsJykgJiYgPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+e2Vycm9ycy5maXJzdCgnZW1haWwnKX08L2Rpdj59XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtbGcgcm91bmRlZC0wICR7ZXJyb3JzLmhhcygncGFzc3dvcmQnKSAmJiAnaXMtaW52YWxpZCd9YH1cbiAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZCB8fCAnJ31cbiAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVDaGFuZ2UoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgIHJlcXVpcmVkLz5cbiAgICAgIHtlcnJvcnMuaGFzKCdwYXNzd29yZCcpICYmIDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPntlcnJvcnMuZmlyc3QoJ3Bhc3N3b3JkJyl9PC9kaXY+fVxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgbmFtZT1cInJlbWVtYmVyXCJcbiAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sLWlucHV0XCJcbiAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGhhbmRsZUNoYW5nZShlLnRhcmdldC5uYW1lLCAhcmVtZW1iZXIpfS8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sLWluZGljYXRvclwiIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sLWRlc2NyaXB0aW9uIHNtYWxsXCI+UmVtZW1iZXIgbWUgb24gdGhpcyBjb21wdXRlcjwvc3Bhbj5cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGRpc2FibGVkPXtlcnJvcnMuYW55KCl9PlNpZ24gSW48L2J1dHRvbj5cbiAgICA8cD5Ob3QgYSBtZW1iZXI/IDxMaW5rIHRvPScvcmVnaXN0ZXInPlNpZ251cCBoZXJlPC9MaW5rPjwvcD5cbiAgPC9mb3JtPlxuKVxuXG5Gb3JtLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWVcbkZvcm0ucHJvcFR5cGVzID0gcHJvcFR5cGVzXG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/modules/auth/pages/login/components/Form.js\n");

/***/ }),

/***/ "./resources/js/modules/auth/pages/login/index.js":
/*!********************************************************!*\
  !*** ./resources/js/modules/auth/pages/login/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page */ \"./resources/js/modules/auth/pages/login/Page.js\");\n// import libs\n // import components\n\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    isAuthenticated: state.auth.isAuthenticated\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps)(_Page__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbW9kdWxlcy9hdXRoL3BhZ2VzL2xvZ2luL2luZGV4LmpzPzI5NzAiXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJpc0F1dGhlbnRpY2F0ZWQiLCJhdXRoIiwiY29ubmVjdCIsIlBhZ2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0NBR0E7O0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxLQUFLLEVBQUk7QUFDL0IsU0FBTztBQUNMQyxtQkFBZSxFQUFFRCxLQUFLLENBQUNFLElBQU4sQ0FBV0Q7QUFEdkIsR0FBUDtBQUdELENBSkQ7O0FBTWVFLDBIQUFPLENBQUNKLGVBQUQsQ0FBUCxDQUF5QkssNkNBQXpCLENBQWYiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvbW9kdWxlcy9hdXRoL3BhZ2VzL2xvZ2luL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGxpYnNcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuLy8gaW1wb3J0IGNvbXBvbmVudHNcbmltcG9ydCBQYWdlIGZyb20gJy4vUGFnZSdcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIGlzQXV0aGVudGljYXRlZDogc3RhdGUuYXV0aC5pc0F1dGhlbnRpY2F0ZWQsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFBhZ2UpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/modules/auth/pages/login/index.js\n");

/***/ })

}]);