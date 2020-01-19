const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/emmanuellaaninye/gatsby-site/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/emmanuellaaninye/gatsby-site/src/pages/404.js"))),
  "component---src-pages-hours-and-location-page-js": hot(preferDefault(require("/Users/emmanuellaaninye/gatsby-site/src/pages/hours-and-location-page.js"))),
  "component---src-pages-menu-page-js": hot(preferDefault(require("/Users/emmanuellaaninye/gatsby-site/src/pages/menu-page.js"))),
  "component---src-pages-theme-page-js": hot(preferDefault(require("/Users/emmanuellaaninye/gatsby-site/src/pages/theme-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/emmanuellaaninye/gatsby-site/src/pages/index.js")))
}

