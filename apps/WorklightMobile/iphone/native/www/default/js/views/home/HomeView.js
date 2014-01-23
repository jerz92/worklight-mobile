
/* JavaScript content from js/views/home/HomeView.js in folder common */
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home/homeTemplate.html'
], function($, _, Backbone, homeTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#page"),
	
    render: function(){
      this.$el.html(homeTemplate);
    }

  });

  return HomeView;
  
});
