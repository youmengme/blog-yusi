export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  loading: {
    color: '#3B8070'
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      lang: 'zh-CN',
      style: 'font-size:37.5px'
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '//at.alicdn.com/t/font_647946_jcbvon53akg.css'
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/base.css',
    'element-ui/lib/theme-chalk/carousel.css',
    'element-ui/lib/theme-chalk/carousel-item.css',
    'element-ui/lib/theme-chalk/display.css',
    {
      src: '~assets/css/index.less',
      lang: 'less'
    }
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/element-ui',
    '~/plugins/prototype',
    {
      src: '~plugins/lazyload.js',
      ssr: false
    }
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: false,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],

  env: {
    NODE_NEV: process.env.NODE_NEV
  },

  /**
   * Router configuration
   * See https://zh.nuxtjs.org/api/configuration-router
   */
  router: {
    middleware: 'device',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'index',
        path: '/',
        component: resolve(__dirname, 'pages/index/index.vue')
      })
    }
  },
  /**
   * babel
   */
  babel: {
    presets: [['es2015', { modules: false }]],
    plugins: [
      [
        'component',
        {
          libraryName: 'element-ui',
          styleLibraryName: 'theme-chalk'
        }
      ]
    ]
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    maxChunkSize: 360000,
    extractCSS: process.env.NODE_NEV === 'production',
    publicPath:
      process.env.NODE_NEV === 'production'
        ? 'https://cdn.youmeng.me/static'
        : '/_nuxt/',
    transpile: [/^element-ui/],
    styleResources: {
      less: './assets/css/mixins.less'
    },
    postcss: {
      plugins: {
        'postcss-px2rem': {
          remUnit: 37.5
        }
      }
    }
  }
}
