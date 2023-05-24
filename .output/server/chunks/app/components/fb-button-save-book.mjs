function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
      if (k !== 'default' && !(k in n)) {
        const d = Object.getOwnPropertyDescriptor(e, k);
        if (d) {
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      }
    } }
  }
  return Object.freeze(n);
}

var fbButtonSaveBook$1 = {};

var ids = fbButtonSaveBook$1.ids = [3];
var modules = fbButtonSaveBook$1.modules = {
  /***/
  71: (
    /***/
    function(module, exports2, __webpack_require__) {
      var content = __webpack_require__(73);
      if (content.__esModule)
        content = content.default;
      if (typeof content === "string")
        content = [[module.i, content, ""]];
      if (content.locals)
        module.exports = content.locals;
      var add = __webpack_require__(8).default;
      module.exports.__inject__ = function(context) {
        add("2d57ce54", content, true, context);
      };
    }
  ),
  /***/
  72: (
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FbButtonSaveBook_vue_vue_type_style_index_0_id_04c958f9_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
      for (var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FbButtonSaveBook_vue_vue_type_style_index_0_id_04c958f9_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__)
        if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
          (function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
              return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FbButtonSaveBook_vue_vue_type_style_index_0_id_04c958f9_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
            });
          })(__WEBPACK_IMPORT_KEY__);
    }
  ),
  /***/
  73: (
    /***/
    function(module, exports2, __webpack_require__) {
      var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
      var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
        return i[1];
      });
      ___CSS_LOADER_EXPORT___.push([module.i, ".play-book-button-save{bottom:1rem;position:absolute;right:.5rem}", ""]);
      ___CSS_LOADER_EXPORT___.locals = {};
      module.exports = ___CSS_LOADER_EXPORT___;
    }
  ),
  /***/
  74: (
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var render = function render2() {
        var _vm = this, _c = _vm._self._c, _setup = _vm._self._setupProxy;
        return _c("div", {
          staticClass: "play-book-button-save mt-2"
        }, [!_setup.alreadyfavorite(_setup.props.book) ? _vm._ssrNode('<button class="button is-align-content-center is-size-6">', "</button>", [_vm._ssrNode("\n    Favoritar\n    "), _c("font-awesome-icon", {
          staticClass: "pl-1",
          attrs: {
            "icon": "fa-solid fa-heart-circle-plus"
          }
        })], 2) : _vm._ssrNode('<button class="button is-brand-red is-align-content-center is-size-6">', "</button>", [_vm._ssrNode("\n    Remover\n    "), _c("font-awesome-icon", {
          staticClass: "pl-1",
          attrs: {
            "icon": "fa-solid fa-heart-circle-xmark"
          }
        })], 2)]);
      };
      var staticRenderFns = [];
      var vue_runtime = __webpack_require__(0);
      var bookData = __webpack_require__(13);
      var FbButtonSaveBookvue_type_script_setup_true_lang_ts_ = /* @__PURE__ */ Object(vue_runtime[
        "c"
        /* defineComponent */
      ])({
        __name: "FbButtonSaveBook",
        props: {
          book: {
            type: Object,
            required: true
          }
        },
        setup(__props) {
          const props = __props;
          const {
            saveBooks,
            alreadyfavorite,
            removeBook
          } = Object(bookData[
            "a"
            /* useBookData */
          ])();
          return {
            __sfc: true,
            saveBooks,
            alreadyfavorite,
            removeBook,
            props
          };
        }
      });
      var components_FbButtonSaveBookvue_type_script_setup_true_lang_ts_ = FbButtonSaveBookvue_type_script_setup_true_lang_ts_;
      var componentNormalizer = __webpack_require__(4);
      function injectStyles(context) {
        var style0 = __webpack_require__(72);
        if (style0.__inject__)
          style0.__inject__(context);
      }
      var component = Object(componentNormalizer[
        "a"
        /* default */
      ])(
        components_FbButtonSaveBookvue_type_script_setup_true_lang_ts_,
        render,
        staticRenderFns,
        false,
        injectStyles,
        null,
        "111644c1"
      );
      __webpack_exports__["default"] = component.exports;
    }
  )
};

const fbButtonSaveBook = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: fbButtonSaveBook$1,
  ids: ids,
  modules: modules
}, [fbButtonSaveBook$1]);

export { fbButtonSaveBook as f };
//# sourceMappingURL=fb-button-save-book.mjs.map
