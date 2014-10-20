JournalApp.Views.PostsIndex = Backbone.View.extend({
  template: JST["posts_index"],

  events: {
    "click button.delete-button": "deletePost"
  },

  render: function () {
    var postsIndex = this.template({ posts: this.collection });

    this.$el.html(postsIndex);

    return this;
  },

  initialize: function () {
    this.listenTo(
      this.collection,
      "add remove reset",
      this.render);

    // this.listenTo(
    //   this.collection,
    //   "change:title",   //where does this model come from?
    //   this.render);
  },

  deletePost: function (event) {
    event.preventDefault();
    var id = $(event.currentTarget).data("id");
    var post = this.collection.get(id)

    post.destroy();
  }
});