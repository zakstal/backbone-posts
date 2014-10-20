JournalApp.Views.PostShow = Backbone.View.extend({
  template: JST["post_show"],

  textInputTemplate: JST["change"],

  events: {
    "dblclick .title": "switchTitle",
    "blur .change-title": "updateTitle",
    "dblclick .body": "switchBody",
    "blur .change-body": "updateBody"
  },

  render: function () {
    var postShow = this.template({ post: this.model });
    this.$el.html(postShow);

    return this;
  },

  switchTitle: function (event) {
    event.preventDefault();

    var textInput = '<input class="change-title" type="text" value="' +
          this.model.get("title") + '">';

    $(event.currentTarget).html(textInput);

    return this;
  },

  switchBody: function (event) {
    event.preventDefault();

    var textInput = '<textarea class="change-body">' +
          this.model.get("body") + '</textarea>';

    $(event.currentTarget).html(textInput);

    return this;
  },

  updateTitle: function (event) {
    event.preventDefault();

    var value = $(event.currentTarget).val();

    var that = this;

    this.model.save({ title: value }, {
      success: function () {
        that.$el.empty();
        that.render();
      }
    });
  },

  updateBody: function (event) {
    event.preventDefault();

    var value = $(event.currentTarget).val();

    var that = this;

    this.model.save({ body: value }, {
      success: function () {
        that.$el.empty();
        that.render();
      }
    });

  }
});