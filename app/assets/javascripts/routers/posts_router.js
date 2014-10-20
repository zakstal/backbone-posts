JournalApp.Routers.PostsRouter = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
    "posts/new": "postNew",
    "posts/edit/:id": "postEdit",
    "posts/:id": "postsShow"
  },

  initialize: function(options) {
    this.el = options.el;
  },

  postsIndex: function () {
    JournalApp.posts.fetch();

    var indexView = new JournalApp.Views.PostsIndex({
      collection: JournalApp.posts
    });

    this.addSidebar(indexView);
  },

  postsShow: function (id) {
    var postShow = new JournalApp.Views.PostShow({
      model: JournalApp.posts.getOrFetch(id)
    });

    this.addContent(postShow);

    // is there a better way to do this?
    // could add this to addContent/addSidebar
    // Backbone.history.navigate("", {trigger: true})
  },

  postEdit: function (id) {
    var post = new JournalApp.Views.PostForm({
      model: JournalApp.posts.getOrFetch(id)
    });

    this.addContent(post);
  },

  postNew: function () {
    var newPost = new JournalApp.Models.Post();
    var newForm = new JournalApp.Views.PostForm({
      model: newPost,
      collection: JournalApp.posts
    });

    this.addContent(newForm);
  },

  addSidebar: function (content) {
    this.el.find(".sidebar").html(content.render().$el);
  },

  addContent: function (content) {
    this.el.find(".content").html(content.render().$el);
  }

});