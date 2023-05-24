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

var _id$1 = {};

var ids = _id$1.ids = [7, 3, 4, 6];
var modules = _id$1.modules = {
  /***/
  100: (
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_6c2b69d3_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);
      for (var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_6c2b69d3_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__)
        if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
          (function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
              return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_6c2b69d3_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
            });
          })(__WEBPACK_IMPORT_KEY__);
    }
  ),
  /***/
  101: (
    /***/
    function(module, exports2, __webpack_require__) {
      var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
      var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
        return i[1];
      });
      ___CSS_LOADER_EXPORT___.push([module.i, ".play-books-details{margin-bottom:8rem;top:86px}.play-books-details .books-details-container{border:0;margin:0 auto;max-width:52rem;width:100%}.play-books-details .books-details-container .details-content{display:flex;flex-direction:column;gap:1rem;padding:2.5rem 2rem}.play-books-details .books-details-container .details-content p{line-height:160%!important}.play-books-details .books-details-container .no-page-content{padding-top:10rem}.play-books-details .books-details-container .no-page-content .no-page{align-items:center;display:flex;flex-direction:column;justify-content:center}.play-books-details .books-details-container .no-page-content .no-page img{opacity:.3}.play-books-details .books-details-container .no-page-content .no-page .title{font-weight:700;opacity:.5}.play-books-details .books-details-container .no-page-content .no-page .subtitle{opacity:.5}", ""]);
      ___CSS_LOADER_EXPORT___.locals = {};
      module.exports = ___CSS_LOADER_EXPORT___;
    }
  ),
  /***/
  106: (
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var render = function render2() {
        var _setup$details, _setup$details2;
        var _vm = this, _c = _vm._self._c, _setup = _vm._self._setupProxy;
        return _c("section", {
          staticClass: "play-books-details container"
        }, [_setup.details ? _vm._ssrNode('<div class="books-details-container px-5">', "</div>", [_setup.details ? _vm._ssrNode("<div>", "</div>", [_c("FbDeitailsCard", {
          attrs: {
            "details": _setup.details
          }
        })], 1) : _vm._e(), _vm._ssrNode(' <div class="details-content"><p class="title is-size-5 has-text-base-title pb-2">' + _vm._s((_setup$details = _setup.details) === null || _setup$details === void 0 ? void 0 : _setup$details.volumeInfo.title) + '</p> <div class="subtitle has-text-base-subtitle">' + _vm._s((_setup$details2 = _setup.details) === null || _setup$details2 === void 0 ? void 0 : _setup$details2.volumeInfo.description) + "</div></div>")], 2) : _vm._ssrNode("<div>", "</div>", [_c("FbNoPageContent", {
          attrs: {
            "title": "P\xE1gina n\xE3o encontrada, voltar para home!",
            "notfound": "true"
          }
        })], 1)]);
      };
      var staticRenderFns = [];
      var vue_runtime = __webpack_require__(0);
      var runtime = __webpack_require__(1);
      var _idvue_type_script_setup_true_lang_ts_ = /* @__PURE__ */ Object(vue_runtime[
        "c"
        /* defineComponent */
      ])({
        __name: "_id",
        setup(__props) {
          const route = Object(runtime[
            "i"
            /* useRoute */
          ])();
          const {
            $store
          } = Object(runtime[
            "h"
            /* useNuxtApp */
          ])();
          const params = route.params;
          const details = Object(runtime[
            "e"
            /* ref */
          ])();
          const {
            data,
            pending
          } = Object(runtime[
            "g"
            /* useLazyFetch */
          ])(`https://www.googleapis.com/books/v1/volumes/${params.id}`);
          if (pending) {
            $store.dispatch("siteData/block");
            details.value = data;
            $store.dispatch("siteData/unBlock");
          }
          return {
            __sfc: true,
            route,
            $store,
            params,
            details,
            data,
            pending
          };
        }
      });
      var books_idvue_type_script_setup_true_lang_ts_ = _idvue_type_script_setup_true_lang_ts_;
      var componentNormalizer = __webpack_require__(4);
      function injectStyles(context) {
        var style0 = __webpack_require__(100);
        if (style0.__inject__)
          style0.__inject__(context);
      }
      var component = Object(componentNormalizer[
        "a"
        /* default */
      ])(
        books_idvue_type_script_setup_true_lang_ts_,
        render,
        staticRenderFns,
        false,
        injectStyles,
        null,
        "b1b16144"
      );
      __webpack_exports__["default"] = component.exports;
      installComponents(component, { FbDeitailsCard: __webpack_require__(96).default, FbNoPageContent: __webpack_require__(85).default });
    }
  ),
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
  ),
  /***/
  75: (
    /***/
    function(module, exports2, __webpack_require__) {
      module.exports = __webpack_require__.p + "img/no-image.2703cfb.png";
    }
  ),
  /***/
  76: (
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return useVolume;
      });
      var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
      function useVolume(volume) {
        const imageThumbnail = Object(_app__WEBPACK_IMPORTED_MODULE_0__[
          /* computed */
          "b"
        ])(() => {
          var _volume$volumeInfo, _volume$volumeInfo$im, _volume$volumeInfo2, _volume$volumeInfo2$i;
          return ((_volume$volumeInfo = volume.volumeInfo) === null || _volume$volumeInfo === void 0 ? void 0 : (_volume$volumeInfo$im = _volume$volumeInfo.imageLinks) === null || _volume$volumeInfo$im === void 0 ? void 0 : _volume$volumeInfo$im.thumbnail) && ((_volume$volumeInfo2 = volume.volumeInfo) === null || _volume$volumeInfo2 === void 0 ? void 0 : (_volume$volumeInfo2$i = _volume$volumeInfo2.imageLinks) === null || _volume$volumeInfo2$i === void 0 ? void 0 : _volume$volumeInfo2$i.smallThumbnail);
        });
        return {
          imageThumbnail
        };
      }
    }
  ),
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
  ),
  /***/
  86: (
    /***/
    function(module, exports2, __webpack_require__) {
      var content = __webpack_require__(90);
      if (content.__esModule)
        content = content.default;
      if (typeof content === "string")
        content = [[module.i, content, ""]];
      if (content.locals)
        module.exports = content.locals;
      var add = __webpack_require__(8).default;
      module.exports.__inject__ = function(context) {
        add("921f87e0", content, true, context);
      };
    }
  ),
  /***/
  89: (
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FbDeitailsCard_vue_vue_type_style_index_0_id_d2f45d12_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86);
      for (var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FbDeitailsCard_vue_vue_type_style_index_0_id_d2f45d12_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__)
        if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
          (function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
              return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FbDeitailsCard_vue_vue_type_style_index_0_id_d2f45d12_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
            });
          })(__WEBPACK_IMPORT_KEY__);
    }
  ),
  /***/
  90: (
    /***/
    function(module, exports2, __webpack_require__) {
      var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
      var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
        return i[1];
      });
      ___CSS_LOADER_EXPORT___.push([module.i, ".play-books-details-card{border:1px solid #112131}.play-books-details-card:hover{border-color:#00acee}.play-books-details-card .card-header{justify-content:space-between}.play-books-details-card .card-header-title{border-bottom:2px solid #00acee}.play-books-details-card .button-icon{align-items:center;display:flex;height:18px;width:18px}.play-books-details-card .button-details{align-items:center;display:flex}.play-books-details-card .preview{padding:7px 16px}.play-books-details-card .preview:hover{color:#00acee!important;-webkit-text-decoration:underline;text-decoration:underline}.play-books-details-card img{background-position:50%;background-repeat:no-repeat;background-size:cover;border:1px solid #112131;border-radius:10px;height:200px;max-width:150px;transition:all .2s;width:100%}.play-books-details-card img:hover{border-color:#00acee}.play-books-details-card img:disabled{opacity:0;transform:scale(0)}.play-books-details-card img:hover{opacity:1;transform:scale(1.1)}.play-books-details-card .media .media-content{overflow:hidden}@media(max-width:380px){.play-books-details-card .media{flex-wrap:wrap;gap:1rem}}", ""]);
      ___CSS_LOADER_EXPORT___.locals = {};
      module.exports = ___CSS_LOADER_EXPORT___;
    }
  ),
  /***/
  94: (
    /***/
    function(module, exports2, __webpack_require__) {
      var content = __webpack_require__(101);
      if (content.__esModule)
        content = content.default;
      if (typeof content === "string")
        content = [[module.i, content, ""]];
      if (content.locals)
        module.exports = content.locals;
      var add = __webpack_require__(8).default;
      module.exports.__inject__ = function(context) {
        add("6ad83a70", content, true, context);
      };
    }
  ),
  /***/
  96: (
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var render = function render2() {
        var _vm = this, _c = _vm._self._c, _setup = _vm._self._setupProxy;
        return _c("div", {
          staticClass: "play-books-details-card card is-desktop has-base-profile"
        }, [_vm._ssrNode('<div class="card-content">', "</div>", [_vm._ssrNode('<header class="card-header pb-2"><button class="button is-ghost has-text-brand-blue button-details is-size-6 is-uppercase">\n        voltar\n      </button> <a' + _vm._ssrAttr("href", _setup.props.details.volumeInfo.previewLink) + ' target="_blank" class="preview has-text-brand-blue button-details preview is-size-6 is-uppercase">\n        preview\n      </a></header> <header class="card-header mb-4"><p class="title is-size-3 has-text-base-title card-header-title px-0">' + _vm._ssrEscape("\n        " + _vm._s(_setup.props.details.volumeInfo.title) + "\n      ") + '</p></header> <div class="media mt-5"><div class="media-left mr-5">' + (_setup.imageThumbnail ? "<figure><img" + _vm._ssrAttr("src", _setup.imageThumbnail) + "></figure>" : "<figure><img" + _vm._ssrAttr("src", __webpack_require__(75)) + "></figure>") + '</div> <div class="media-content"><div class="columns"><div class="column"><div class="content"><p class="title is-size-5 has-text-base-title pb-2">Autor</p> ' + (_setup.props.details.volumeInfo.authors && _setup.props.details.volumeInfo.authors.length ? '<div class="subtitle has-text-base-subtitle"><p>' + _vm._ssrEscape(_vm._s(_setup.props.details.volumeInfo.authors[0])) + "</p></div>" : '<p class="subtitle has-text-base-subtitle">authors</p>') + '</div></div> <div class="column"><div class="content"><p class="title is-size-5 has-text-base-title pb-2">Editora</p> ' + (_setup.props.details.volumeInfo.publisher && _setup.props.details.volumeInfo.publisher.length ? '<div class="subtitle has-text-base-subtitle"><p>' + _vm._ssrEscape("\n                  " + _vm._s(_setup.props.details.volumeInfo.publisher) + "\n                ") + "</p></div>" : '<p class="subtitle has-text-base-subtitle">publisher</p>') + '</div></div> <div class="column"><div class="content"><p class="title is-size-5 has-text-base-title pb-2">\n                Categorias\n              </p> ' + (_setup.props.details.volumeInfo.categories && _setup.props.details.volumeInfo.categories.length ? '<div class="subtitle has-text-base-subtitle"><p>' + _vm._ssrEscape(_vm._s(_setup.props.details.volumeInfo.categories[0])) + "</p></div>" : '<p class="subtitle has-text-base-subtitle">categories</p>') + '</div></div></div> <div class="columns"><div class="column"><div class="content"><p class="title is-size-5 has-text-base-title pb-2">Idioma</p> ' + (_setup.props.details.volumeInfo.language && _setup.props.details.volumeInfo.language.length ? '<div class="subtitle has-text-base-subtitle"><p>' + _vm._ssrEscape(_vm._s(_setup.props.details.volumeInfo.language)) + "</p></div>" : '<p class="subtitle has-text-base-subtitle">language</p>') + '</div></div> <div class="column"><div class="content"><p class="title is-size-5 has-text-base-title pb-2">\n                Publicado em\n              </p> ' + (_setup.props.details.volumeInfo.publishedDate && _setup.props.details.volumeInfo.publishedDate.length ? '<div class="subtitle has-text-base-subtitle"><p>' + _vm._ssrEscape(_vm._s(_setup.props.details.volumeInfo.publishedDate)) + "</p></div>" : '<p class="subtitle has-text-base-subtitle">\n                publisherDate\n              </p>') + '</div></div> <div class="column"><div class="content"><p class="title is-size-5 has-text-base-title pb-2">P\xE1ginas</p> ' + (_setup.props.details.volumeInfo.pageCount ? '<div class="subtitle has-text-base-subtitle"><p>' + _vm._ssrEscape(_vm._s(_setup.props.details.volumeInfo.pageCount)) + "</p></div>" : '<p class="subtitle has-text-base-subtitle">pageCount</p>') + "</div></div></div></div></div> "), _vm._ssrNode("<div>", "</div>", [_c("FbButtonSaveBook", {
          staticClass: "is-align-content-center is-size-6",
          attrs: {
            "book": _setup.props.details
          }
        })], 1)], 2)]);
      };
      var staticRenderFns = [];
      var vue_runtime = __webpack_require__(0);
      var runtime = __webpack_require__(1);
      var volume = __webpack_require__(76);
      var FbDeitailsCardvue_type_script_setup_true_lang_ts_ = /* @__PURE__ */ Object(vue_runtime[
        "c"
        /* defineComponent */
      ])({
        __name: "FbDeitailsCard",
        props: {
          details: {
            type: Object,
            required: true
          }
        },
        setup(__props) {
          const props = __props;
          const {
            nuxt2Context
          } = Object(runtime[
            "h"
            /* useNuxtApp */
          ])();
          const {
            imageThumbnail
          } = Object(volume[
            "a"
            /* useVolume */
          ])(props.details);
          function goToPrev() {
            var _nuxt2Context$from;
            const fromPath = (_nuxt2Context$from = nuxt2Context.from) === null || _nuxt2Context$from === void 0 ? void 0 : _nuxt2Context$from.fullPath;
            nuxt2Context.redirect(fromPath || "/");
          }
          return {
            __sfc: true,
            nuxt2Context,
            props,
            imageThumbnail,
            goToPrev
          };
        }
      });
      var components_FbDeitailsCardvue_type_script_setup_true_lang_ts_ = FbDeitailsCardvue_type_script_setup_true_lang_ts_;
      var componentNormalizer = __webpack_require__(4);
      function injectStyles(context) {
        var style0 = __webpack_require__(89);
        if (style0.__inject__)
          style0.__inject__(context);
      }
      var component = Object(componentNormalizer[
        "a"
        /* default */
      ])(
        components_FbDeitailsCardvue_type_script_setup_true_lang_ts_,
        render,
        staticRenderFns,
        false,
        injectStyles,
        null,
        "0d639e18"
      );
      __webpack_exports__["default"] = component.exports;
      installComponents(component, { FbButtonSaveBook: __webpack_require__(74).default });
    }
  )
};

const _id = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: _id$1,
  ids: ids,
  modules: modules
}, [_id$1]);

export { _id as _ };
//# sourceMappingURL=_id.mjs.map
