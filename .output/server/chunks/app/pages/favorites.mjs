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

var favorites$1 = {};

var ids = favorites$1.ids = [8, 1, 3, 6];
var modules = favorites$1.modules = {
  /***/
  105: (
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var render = function render2() {
        var _vm = this, _c = _vm._self._c, _setup = _vm._self._setupProxy;
        return _c("section", {
          staticClass: "play-books-home container",
          staticStyle: {
            "top": "86px"
          }
        }, [_setup.favoriteBooks.length ? _vm._ssrNode('<div class="columns is-multiline align-items-full py-5">', "</div>", _vm._l(_setup.favoriteBooks, function(book, index) {
          return _c("FbBookCard", {
            key: index,
            staticClass: "play-book-card column is-4-desktop is-12-tablet is-justify-content-center is-3",
            attrs: {
              "book": book
            }
          });
        }), 1) : _vm._ssrNode("<div>", "</div>", [_c("FbNoPageContent", {
          attrs: {
            "title": "Voc\xEA ainda n\xE3o adicionou favoritos",
            "notfound": "false"
          }
        })], 1)]);
      };
      var staticRenderFns = [];
      var vue_runtime = __webpack_require__(0);
      var bookData = __webpack_require__(13);
      var favoritesvue_type_script_setup_true_lang_ts_ = /* @__PURE__ */ Object(vue_runtime[
        "c"
        /* defineComponent */
      ])({
        __name: "favorites",
        setup(__props) {
          const {
            favoriteBooks
          } = Object(bookData[
            "a"
            /* useBookData */
          ])();
          return {
            __sfc: true,
            favoriteBooks
          };
        }
      });
      var pages_favoritesvue_type_script_setup_true_lang_ts_ = favoritesvue_type_script_setup_true_lang_ts_;
      var componentNormalizer = __webpack_require__(4);
      function injectStyles(context) {
        var style0 = __webpack_require__(98);
        if (style0.__inject__)
          style0.__inject__(context);
      }
      var component = Object(componentNormalizer[
        "a"
        /* default */
      ])(
        pages_favoritesvue_type_script_setup_true_lang_ts_,
        render,
        staticRenderFns,
        false,
        injectStyles,
        null,
        "1e859be0"
      );
      __webpack_exports__["default"] = component.exports;
      installComponents(component, { FbBookCard: __webpack_require__(84).default, FbNoPageContent: __webpack_require__(85).default });
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
  77: (
    /***/
    function(module, exports2, __webpack_require__) {
      var content = __webpack_require__(80);
      if (content.__esModule)
        content = content.default;
      if (typeof content === "string")
        content = [[module.i, content, ""]];
      if (content.locals)
        module.exports = content.locals;
      var add = __webpack_require__(8).default;
      module.exports.__inject__ = function(context) {
        add("30c18e1e", content, true, context);
      };
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
  79: (
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FbBookCard_vue_vue_type_style_index_0_id_6b8e681c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
      for (var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FbBookCard_vue_vue_type_style_index_0_id_6b8e681c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__)
        if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
          (function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
              return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FbBookCard_vue_vue_type_style_index_0_id_6b8e681c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
            });
          })(__WEBPACK_IMPORT_KEY__);
    }
  ),
  /***/
  80: (
    /***/
    function(module, exports2, __webpack_require__) {
      var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
      var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
        return i[1];
      });
      ___CSS_LOADER_EXPORT___.push([module.i, ".play-book-bookcard img{background-position:50%;background-repeat:no-repeat;background-size:cover;border:1px solid #112131;border-radius:10px;height:200px;max-width:150px;transition:all .2s;width:100%}.play-book-bookcard img:disabled{opacity:0;transform:scale(0)}.play-book-bookcard img:hover{opacity:1;transform:scale(1.1)}.play-book-bookcard .content p{margin-bottom:0}.play-book-bookcard .title-card{-webkit-line-clamp:2;overflow:hidden}.play-book-bookcard .subtitle-card,.play-book-bookcard .title-card{-webkit-box-orient:vertical;display:-webkit-box;text-overflow:ellipsis}.play-book-bookcard .subtitle-card{margin-bottom:auto}.play-book-bookcard .description-card{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;height:-moz-fit-content;height:fit-content;overflow:hidden;text-overflow:ellipsis}.play-book-bookcard .card{border:1px solid #112131;max-width:392px}.play-book-bookcard .card:hover{border-color:#00acee}.play-book-bookcard .card .media .media-left{max-width:183px}.play-book-bookcard .card .media .media-content{overflow:hidden}.play-book-bookcard .card .media .media-content .content{margin-bottom:2.5rem}@media(max-width:768px){.play-book-bookcard .card{max-width:350px}}.play-book-bookcard .read-less-leave-active{transition:all 1s ease}.play-book-bookcard .read-less-leave-to{opacity:0;transform:translateY(50%)}.play-book-bookcard .read-less-enter-active{opacity:0;transform:translateY(50%);transition:all 1s ease}.play-book-bookcard .read-less-enter-to{opacity:1;transform:translateY(0)}", ""]);
      ___CSS_LOADER_EXPORT___.locals = {};
      module.exports = ___CSS_LOADER_EXPORT___;
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
  84: (
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var render = function render2() {
        var _vm = this, _c = _vm._self._c, _setup = _vm._self._setupProxy;
        return _c("div", {
          staticClass: "play-book-bookcard"
        }, [_vm._ssrNode('<div class="card is-desktop">', "</div>", [_vm._ssrNode('<div class="card-content">', "</div>", [_vm._ssrNode('<div class="media">', "</div>", [_vm._ssrNode('<div class="media-left">', "</div>", [_c("Nuxt-link", {
          attrs: {
            "to": {
              name: "books-id",
              params: {
                id: _setup.props.book.id
              }
            }
          }
        }, [_setup.imageThumbnail && _setup.imageThumbnail.length ? _c("figure", {
          staticClass: "media",
          staticStyle: {
            "border-top": "0",
            "padding-top": "0"
          }
        }, [_c("img", {
          attrs: {
            "src": _setup.imageThumbnail
          }
        })]) : _c("figure", [_c("img", {
          attrs: {
            "src": __webpack_require__(75)
          }
        })])])], 1), _vm._ssrNode(' <div class="media-content"><div class="content"><p class="title title-card is-size-4 has-text-base-title">' + _vm._ssrEscape("\n              " + _vm._s(_setup.props.book.volumeInfo.title) + "\n            ") + "</p> " + (_setup.props.book.volumeInfo.authors && _setup.props.book.volumeInfo.authors.length ? '<div><p class="subtitle subtitle-card has-text-base-subtitle">' + _vm._ssrEscape("\n                " + _vm._s(_setup.props.book.volumeInfo.authors[0]) + "\n              ") + "</p></div>" : '<p class="subtitle subtitle-card has-text-base-subtitle">\n              Author\n            </p>') + " " + (_vm.$props.book.volumeInfo.description ? '<p class="description description-card has-text-base-text is-size-6">' + _vm._ssrEscape("\n              " + _vm._s(_setup.props.book.volumeInfo.description) + "\n            ") + "</p>" : "<!---->") + "</div></div>")], 2)]), _vm._ssrNode(" "), _c("FbButtonSaveBook", {
          attrs: {
            "book": _setup.props.book
          }
        })], 2)]);
      };
      var staticRenderFns = [];
      var vue_runtime = __webpack_require__(0);
      var runtime = __webpack_require__(1);
      var volume = __webpack_require__(76);
      var FbBookCardvue_type_script_setup_true_lang_ts_ = /* @__PURE__ */ Object(vue_runtime[
        "c"
        /* defineComponent */
      ])({
        __name: "FbBookCard",
        props: {
          book: {
            type: Object,
            required: true
          }
        },
        setup(__props) {
          const props = __props;
          const {
            imageThumbnail
          } = Object(volume[
            "a"
            /* useVolume */
          ])(props.book);
          const description = Object(runtime[
            "e"
            /* ref */
          ])();
          return {
            __sfc: true,
            props,
            imageThumbnail,
            description
          };
        }
      });
      var components_FbBookCardvue_type_script_setup_true_lang_ts_ = FbBookCardvue_type_script_setup_true_lang_ts_;
      var componentNormalizer = __webpack_require__(4);
      function injectStyles(context) {
        var style0 = __webpack_require__(79);
        if (style0.__inject__)
          style0.__inject__(context);
      }
      var component = Object(componentNormalizer[
        "a"
        /* default */
      ])(
        components_FbBookCardvue_type_script_setup_true_lang_ts_,
        render,
        staticRenderFns,
        false,
        injectStyles,
        null,
        "5434d742"
      );
      __webpack_exports__["default"] = component.exports;
      installComponents(component, { FbButtonSaveBook: __webpack_require__(74).default });
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
  93: (
    /***/
    function(module, exports2, __webpack_require__) {
      var content = __webpack_require__(99);
      if (content.__esModule)
        content = content.default;
      if (typeof content === "string")
        content = [[module.i, content, ""]];
      if (content.locals)
        module.exports = content.locals;
      var add = __webpack_require__(8).default;
      module.exports.__inject__ = function(context) {
        add("37adf1b6", content, true, context);
      };
    }
  ),
  /***/
  98: (
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_favorites_vue_vue_type_style_index_0_id_4f9e2f96_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
      for (var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_favorites_vue_vue_type_style_index_0_id_4f9e2f96_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__)
        if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
          (function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
              return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_favorites_vue_vue_type_style_index_0_id_4f9e2f96_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
            });
          })(__WEBPACK_IMPORT_KEY__);
    }
  ),
  /***/
  99: (
    /***/
    function(module, exports2, __webpack_require__) {
      var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
      var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
        return i[1];
      });
      ___CSS_LOADER_EXPORT___.push([module.i, ".play-books-favorites{top:86px}", ""]);
      ___CSS_LOADER_EXPORT___.locals = {};
      module.exports = ___CSS_LOADER_EXPORT___;
    }
  )
};

const favorites = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: favorites$1,
  ids: ids,
  modules: modules
}, [favorites$1]);

export { favorites as f };
//# sourceMappingURL=favorites.mjs.map