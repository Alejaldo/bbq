// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
// import Turbolinks from "turbolinks"
// import * as ActiveStorage from "@rails/activestorage"
// import "channels"

Rails.start()
// Turbolinks.start()
// ActiveStorage.start()

// require("@rails/ujs").start()

import 'bootstrap/dist/js/bootstrap'
import '../styles/application'
import '../styles/events'
import '../styles/registration'
import 'lightbox2/dist/js/lightbox-plus-jquery'
import 'lightbox2/dist/css/lightbox'

const images = require.context('../images', true)

window.fbAsyncInit = function() {
  FB.init({
    appId      : '876382306298934',
    cookie     : true,
    xfbml      : true,
    version    : 'v11.0'
  });
    
  FB.AppEvents.logPageView();   
    
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
