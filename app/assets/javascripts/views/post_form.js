JournalApp.Views.PostForm = Backbone.View.extend({
  template: JST["post_form"],

  events: {
    "submit form.edit-post": "updatePost"
  },

  render: function() {
    var postForm = this.template({ post: this.model });
    this.$el.html(postForm);

    return this;
  },

  updatePost: function (event) {
    event.preventDefault();

    var formData = $(event.currentTarget).serializeJSON();

    this.model.set(formData.post);

    var backNav = function () {
      Backbone.history.navigate("", {trigger: true})
    };

    if (this.model.isNew()) {
      console.log("collection create")
      this.collection.create(formData.post, {
        success: backNav
      });
    } else {
      console.log("model save")
      this.model.save({}, {
        success: backNav
      });
    }
  }

});