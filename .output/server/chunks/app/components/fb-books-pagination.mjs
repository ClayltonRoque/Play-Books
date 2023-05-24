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

var fbBooksPagination$1 = {};

var ids = fbBooksPagination$1.ids = [2];
var modules = fbBooksPagination$1.modules = {
  /***/
  88: (
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var render = function render2() {
        var _vm = this, _c = _vm._self._c, _setup = _vm._self._setupProxy;
        return _c("section", [_c("b-pagination", {
          staticClass: "pb-5",
          attrs: {
            "total": _setup.state.total,
            "range-before": _setup.state.rangeBefore,
            "range-after": _setup.state.rangeAfter,
            "order": _setup.state.order,
            "per-page": _setup.state.perPage,
            "rounded": "true",
            "size": "is-medium",
            "aria-next-label": "Next page",
            "aria-previous-label": "Previous page",
            "aria-page-label": "Page",
            "aria-current-label": "Current page"
          },
          model: {
            value: _setup.state.page,
            callback: function($$v) {
              _vm.$set(_setup.state, "page", $$v);
            },
            expression: "state.page"
          }
        })], 1);
      };
      var staticRenderFns = [];
      var vue_runtime = __webpack_require__(0);
      var runtime = __webpack_require__(1);
      var bookData = __webpack_require__(13);
      var FbBooksPaginationvue_type_script_setup_true_lang_ts_ = /* @__PURE__ */ Object(vue_runtime[
        "c"
        /* defineComponent */
      ])({
        __name: "FbBooksPagination",
        setup(__props) {
          const {
            totalBooks,
            getDataBooks,
            querySearch
          } = Object(bookData[
            "a"
            /* useBookData */
          ])();
          const state = Object(runtime[
            "d"
            /* reactive */
          ])({
            page: 1,
            total: totalBooks,
            perPage: 20,
            rangeBefore: 3,
            rangeAfter: 3,
            order: "is-centered"
          });
          Object(runtime[
            "j"
            /* watch */
          ])(() => state.page, (nextCurrentPage) => {
            let startIndex = 0;
            const query = querySearch.value.toString();
            if (nextCurrentPage > 1) {
              startIndex = (nextCurrentPage - 1) * state.page;
            }
            getDataBooks(query, startIndex);
          });
          return {
            __sfc: true,
            totalBooks,
            getDataBooks,
            querySearch,
            state
          };
        }
      });
      var components_FbBooksPaginationvue_type_script_setup_true_lang_ts_ = FbBooksPaginationvue_type_script_setup_true_lang_ts_;
      var componentNormalizer = __webpack_require__(4);
      var component = Object(componentNormalizer[
        "a"
        /* default */
      ])(
        components_FbBooksPaginationvue_type_script_setup_true_lang_ts_,
        render,
        staticRenderFns,
        false,
        null,
        null,
        "25d8ec6a"
      );
      __webpack_exports__["default"] = component.exports;
    }
  )
};

const fbBooksPagination = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: fbBooksPagination$1,
  ids: ids,
  modules: modules
}, [fbBooksPagination$1]);

export { fbBooksPagination as f };
//# sourceMappingURL=fb-books-pagination.mjs.map
