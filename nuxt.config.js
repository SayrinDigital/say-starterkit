
export default {
  mode: 'universal',
  pageTransition: 'slide-fade',
  layoutTransition: 'slide-fade',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/uikit.min.css' }
  ],
  script: [
      { src: '/js/uikit.min.js' },
      { src: '/js/uikit-icons.js' },
      { src: '/js/uikit-core.min.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['@/assets/css/style.scss'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/auth',
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
      baseURL: 'http://localhost/api'
  },
  auth: {
      strategies: {
        local: {
          endpoints: {
            login: { url: 'auth/login', method: 'post', propertyName: 'access_token' },
            user: { url: 'auth/me', method: 'post', propertyName: false },
            logout: { url: '/auth/logout', method: 'post' },
          }
        }
    },
        redirect: {
          login: '/login',
          logout: '/login',
          home: '/dashboard'
        },
    },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
