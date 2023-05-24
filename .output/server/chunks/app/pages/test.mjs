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

var test$1 = {};

var ids = test$1.ids = [10];
var modules = test$1.modules = {
  /***/
  104: (
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var render = function render2() {
        var _vm = this, _c = _vm._self._c; _vm._self._setupProxy;
        return _c("div", []);
      };
      var staticRenderFns = [];
      var vue_runtime = __webpack_require__(0);
      var runtime = __webpack_require__(1);
      function request(url, method, options) {
        const {
          data,
          pending
        } = Object(runtime[
          "g"
          /* useLazyFetch */
        ])(url, {
          method,
          ...options
        });
        return {
          data,
          pending
        };
      }
      class Requests {
        constructor(baseUrl, headers) {
          this.baseUrl = baseUrl;
          this.headers = headers;
        }
        get(url, options = {}) {
          const test2 = request(url, "get", {
            baseURL: this.baseUrl,
            headers: this.headers,
            ...options
          });
          return test2;
        }
        post(url, options = {}) {
          return request(url, "post", {
            baseURL: this.baseUrl,
            headers: this.headers,
            ...options
          });
        }
      }
      function useGoogleBooksAPI() {
        const api = new Requests("https://www.googleapis.com/books/v1", {
          Accept: "application/json"
        });
        function fetchBooks(term, maxResults, startIndex) {
          return api.get("volumes", {
            params: {
              q: term,
              maxResults,
              startIndex
            }
          });
        }
        return {
          fetchBooks
        };
      }
      var testvue_type_script_setup_true_lang_ts_ = /* @__PURE__ */ Object(vue_runtime[
        "c"
        /* defineComponent */
      ])({
        __name: "test",
        setup(__props) {
          const {
            fetchBooks
          } = useGoogleBooksAPI();
          const query = "re zero";
          const maxResults = 20;
          const startIndex = 0;
          const response = fetchBooks(query, maxResults, startIndex);
          console.log(response);
          return {
            __sfc: true,
            fetchBooks,
            query,
            maxResults,
            startIndex,
            response
          };
        }
      });
      var pages_testvue_type_script_setup_true_lang_ts_ = testvue_type_script_setup_true_lang_ts_;
      var componentNormalizer = __webpack_require__(4);
      function injectStyles(context) {
      }
      var component = Object(componentNormalizer[
        "a"
        /* default */
      ])(
        pages_testvue_type_script_setup_true_lang_ts_,
        render,
        staticRenderFns,
        false,
        injectStyles,
        null,
        "caf74dce"
      );
      __webpack_exports__["default"] = component.exports;
    }
  )
};

const test = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: test$1,
  ids: ids,
  modules: modules
}, [test$1]);

export { test as t };
//# sourceMappingURL=test.mjs.map
