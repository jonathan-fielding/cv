/*global $, jQuery, define, alert, require, window, Backbone */
/*jslint browser:true, devel:true, unused:false */

define([
	'backbone',
  'app'
	],
function(Backbone, App) {
	'use strict';

  var Input = {};

	Input.View = Backbone.View.extend({
		manage: true,
		template: 'input',
    events: {
      'keydown #inputfield' : 'action',
      'blur #inputfield'    : 'setFocus'
    },

    initialize: function() {
      this.prompt = '[gaurav$bash]';
    },

    serialize: function() {
      return {prompt: this.prompt};
    },

    action: function(event) {
      var command;
      if (event.which === 13) {
        command = this.$input.val();
        this.$input.val('');
        App.trigger('command', {p: this.prompt, 'c': command});
      }
    },
    afterRender: function() {
      this.$input = this.$('input#inputfield');
      this.$input.focus();
    },
    setFocus: function() {
      this.$input.focus();
    }

	});

	return Input;
});