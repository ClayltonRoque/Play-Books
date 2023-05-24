const dynamicChunks = {
 ['components/fb-book-card.js']: () => import('../app/components/fb-book-card.mjs').then(function (n) { return n.f; }),
 ['components/fb-books-pagination.js']: () => import('../app/components/fb-books-pagination.mjs').then(function (n) { return n.f; }),
 ['components/fb-button-save-book.js']: () => import('../app/components/fb-button-save-book.mjs').then(function (n) { return n.f; }),
 ['components/fb-deitails-card.js']: () => import('../app/components/fb-deitails-card.mjs').then(function (n) { return n.f; }),
 ['components/fb-list-of-books.js']: () => import('../app/components/fb-list-of-books.mjs').then(function (n) { return n.f; }),
 ['components/fb-no-page-content.js']: () => import('../app/components/fb-no-page-content.mjs').then(function (n) { return n.f; }),
 ['pages/favorites.js']: () => import('../app/pages/favorites.mjs').then(function (n) { return n.f; }),
 ['pages/index.js']: () => import('../app/pages/index.mjs').then(function (n) { return n.i; }),
 ['pages/test.js']: () => import('../app/pages/test.mjs').then(function (n) { return n.t; }),
 ['pages/books/_id.js']: () => import('../app/pages/books/_id.mjs').then(function (n) { return n._; })
};

function dynamicRequire(id) {
  return dynamicChunks[id]();
}

export { dynamicRequire as default };
//# sourceMappingURL=_dynamic-require.mjs.map
