import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as VueGoogleMaps from "vue2-google-maps"

Vue.config.productionTip = false

Vue.use(VueGoogleMaps,{
  load:{
    key: "AIzaSyCRGNB_8XHsNrrscB5uv1iMWvTeNd6sXn0",
    libraries:"places",
    region:"KR"
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
