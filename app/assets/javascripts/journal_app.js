window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    JournalApp.posts = new JournalApp.Collections.Posts();

    new JournalApp.Routers.PostsRouter({
      el: $("main")
    });

    Backbone.history.start();
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
