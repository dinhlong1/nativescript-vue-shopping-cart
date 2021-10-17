import Vue from 'nativescript-vue'
import Login from './components/Login'
import store from './store'
import RadListView from 'nativescript-ui-listview/vue';
import CardViewPlugin from 'nativescript-material-cardview/vue';
import { TNSFontIcon, fonticon } from 'nativescript-fonticon';
import {ChatView} from 'nativescript-chatview'



// const backendService = ChatView();
// Vue.prototype.$ChatView = backendService;

TNSFontIcon.debug = true;

TNSFontIcon.paths = { fa: './assets/css/fontawesome.min.css', far: './assets/css/regular.min.css', fas: './assets/css/solid.min.css', fab: './assets/css/brand.min.css' }

TNSFontIcon.loadCss()

Vue.filter('fonticon', fonticon)

// Vue.use(RadListView);
Vue.use(CardViewPlugin);


Vue.registerElement(
    "CardView",
    () => require("@nstudio/nativescript-cardview").CardView
);
Vue.registerElement(
    'CheckBox',
    () => require('@nstudio/nativescript-checkbox').CheckBox, {
        model: {
            prop: 'checked',
            event: 'checkedChange'
        }
    }
);


// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')
var firebase = require("nativescript-plugin-firebase");
firebase
  .init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
  })
  .then(
    function(instance) {
      console.log("firebase.init done");
    },
    function(error) {
      console.log("firebase.init error: " + error);
    }
  );

new Vue({
    store,
    render: h => h('frame', [h(Login)])
}).$start()