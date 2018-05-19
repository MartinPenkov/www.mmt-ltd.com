import Vue from 'vue'
import App from './App'
import router from './router'

import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery
// eslint-disable-next-line
let bootstrap = require('bootstrap')
// eslint-disable-next-line
let owl = require('owl.carousel')
// eslint-disable-next-line
let jqueryAppear = require('jquery.appear')
// eslint-disable-next-line
let jqueryCountTo = require('jquery-countto')

require('./assets/js/jquery.fancybox.pack.js')
require('./assets/js/jquery.fancybox-media.js')
require('./assets/js/validate.js')
require('./assets/js/gmap.js')
require('./assets/js/map-helper.js')

require('./assets/css/font-awesome.css')
require('./assets/css/flaticon.css')
// require('./assets/css/factoryplus-icons.css')
require('./assets/css/animate.css')
require('./assets/css/owl.css')
require('./assets/css/jquery.fancybox.css')
require('./assets/css/hover.css')
require('./assets/css/frontend.css')
require('./assets/css/style.css')
require('./assets/css/revolution/settings.css')
require('./assets/css/revolution/layers.css')
require('./assets/css/revolution/navigation.css')
require('./assets/css/responsive.css')

Vue.config.productionTip = false

// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
