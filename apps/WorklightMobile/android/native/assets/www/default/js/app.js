
/* JavaScript content from js/app.js in folder common */
// Filename: app.js
define([
  'jquery', 
  'underscore', 
  'backbone',
  'router', // Request router.js
  'bootstrap',
  'initOptions',
  'wlCommonInit',
  'messages',
], function($, _, Backbone, Router, Bootstrap,InitOptions, WlCommonInit, Messages){
  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  };

  return { 
    initialize: initialize
  };
});
