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

var fbNoPageContent$1 = {};

var ids = fbNoPageContent$1.ids = [6];
var modules = fbNoPageContent$1.modules = {
  /***/
  78: (
    /***/
    function(module, exports2, __webpack_require__) {
      var content = __webpack_require__(83);
      if (content.__esModule)
        content = content.default;
      if (typeof content === "string")
        content = [[module.i, content, ""]];
      if (content.locals)
        module.exports = content.locals;
      var add = __webpack_require__(8).default;
      module.exports.__inject__ = function(context) {
        add("330cbc84", content, true, context);
      };
    }
  ),
  /***/
  81: (
    /***/
    function(module, exports2, __webpack_require__) {
      module.exports = __webpack_require__.p + "img/no-search.3552b23.png";
    }
  ),
  /***/
  82: (
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FbNoPageContent_vue_vue_type_style_index_0_id_356ad35e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
      for (var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FbNoPageContent_vue_vue_type_style_index_0_id_356ad35e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__)
        if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
          (function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
              return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FbNoPageContent_vue_vue_type_style_index_0_id_356ad35e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
            });
          })(__WEBPACK_IMPORT_KEY__);
    }
  ),
  /***/
  83: (
    /***/
    function(module, exports2, __webpack_require__) {
      var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
      var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
        return i[1];
      });
      ___CSS_LOADER_EXPORT___.push([module.i, ".play-books-no-page .no-page-content{padding-top:10rem}@media screen and (max-width:768px){.play-books-no-page .no-page-content .no-page{margin:.5rem;text-align:center}}.play-books-no-page .no-page-content .no-page{align-items:center;display:flex;flex-direction:column;justify-content:center}.play-books-no-page .no-page-content .no-page img{opacity:.3}.play-books-no-page .no-page-content .no-page .title{font-weight:700;opacity:.5}.play-books-no-page .no-page-content .no-page .subtitle{opacity:.5}", ""]);
      ___CSS_LOADER_EXPORT___.locals = {};
      module.exports = ___CSS_LOADER_EXPORT___;
    }
  ),
  /***/
  85: (
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var render = function render2() {
        var _vm = this, _c = _vm._self._c, _setup = _vm._self._setupProxy;
        return _c("div", {
          staticClass: "play-books-no-page"
        }, [_vm._ssrNode('<div class="no-page-content"><div class="no-page"><figure><img' + _vm._ssrAttr("src", __webpack_require__(81)) + "></figure> " + (_setup.props.notfound === "true" ? '<p class="title is-size-5 has-text-base-title pb-2"><button class="button is-ghost has-text-brand-blue button-details is-size-6 is-uppercase">\n          P\xE1gina n\xE3o encontrada, voltar para home!\n        </button></p>' : '<p class="title is-size-5 has-text-base-title pb-2">' + _vm._ssrEscape("\n        " + _vm._s(_setup.props.title) + "\n      ") + "</p>") + ' <p class="subtitle has-text-base-subtitle">\n        Pesquise e navegue pela lista de livros do Google Play Books\n      </p></div></div>')]);
      };
      var staticRenderFns = [];
      var vue_runtime = __webpack_require__(0);
      var runtime = __webpack_require__(1);
      var FbNoPageContentvue_type_script_setup_true_lang_ts_ = /* @__PURE__ */ Object(vue_runtime[
        "c"
        /* defineComponent */
      ])({
        __name: "FbNoPageContent",
        props: {
          title: {
            type: String,
            required: true
          },
          notfound: {
            type: String,
            required: true
          }
        },
        setup(__props) {
          const props = __props;
          const nuxtContext = Object(runtime[
            "h"
            /* useNuxtApp */
          ])();
          function goToHome() {
            nuxtContext.redirect("/");
          }
          return {
            __sfc: true,
            nuxtContext,
            props,
            goToHome
          };
        }
      });
      var components_FbNoPageContentvue_type_script_setup_true_lang_ts_ = FbNoPageContentvue_type_script_setup_true_lang_ts_;
      var componentNormalizer = __webpack_require__(4);
      function injectStyles(context) {
        var style0 = __webpack_require__(82);
        if (style0.__inject__)
          style0.__inject__(context);
      }
      var component = Object(componentNormalizer[
        "a"
        /* default */
      ])(
        components_FbNoPageContentvue_type_script_setup_true_lang_ts_,
        render,
        staticRenderFns,
        false,
        injectStyles,
        null,
        "6dbd3f90"
      );
      __webpack_exports__["default"] = component.exports;
    }
  )
};

const fbNoPageContent = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: fbNoPageContent$1,
  ids: ids,
  modules: modules
}, [fbNoPageContent$1]);

export { fbNoPageContent as f };
//# sourceMappingURL=fb-no-page-content.mjs.map
