JournalApp.Views.PostShow = Backbone.View.extend({
  template: JST["post_show"],

  render: function () {
    var postShow = this.template({ post: this.model });
    this.$el.html(postShow);

    return this;
  }

});