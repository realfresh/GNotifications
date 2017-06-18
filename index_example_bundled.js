(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

module.exports = {

  options: {
    position: 'top'
  },

  ready: false,

  init: function init() {
    this.container = document.createElement("div");
    this.container.id = "gn-container";
    this.container.className = "gn-container " + (this.options.position || 'top');
    document.getElementsByTagName('body')[0].appendChild(this.container);
    this.ready = true;
  },
  add: function add(_ref) {
    var _this = this;

    var _ref$type = _ref.type,
        type = _ref$type === undefined ? "" : _ref$type,
        message = _ref.message,
        _ref$duration = _ref.duration,
        duration = _ref$duration === undefined ? 3000 : _ref$duration,
        _ref$center = _ref.center,
        center = _ref$center === undefined ? true : _ref$center;

    if (!this.ready) this.init();

    var div = this.messageElement(type, message, center);
    this.container.appendChild(div);
    setTimeout(function () {
      div.classList.add('visible');
      setTimeout(function () {
        _this.removeMessage(div, type);
      }, duration);
    }, 100);
  },


  // HELPERS
  clear: function clear() {
    this.container.innerHTML = "";
  },
  messageElement: function messageElement() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

    var _this2 = this;

    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var center = arguments[2];

    var div = document.createElement("div");
    var close = document.createElement("div");
    close.className = 'close';
    close.addEventListener('click', function (evt) {
      _this2.removeMessage(div, type);
    });
    div.className = "gn-notification " + type + " " + (center ? 'text-center' : '') + " shadow-1";
    div.innerHTML = message;
    div.appendChild(close);
    return div;
  },
  removeMessage: function removeMessage(div, type) {
    if (div) {
      div.classList.remove('visible');
      setTimeout(function () {
        if (div.parentNode) {
          div.parentNode.removeChild(div);
        }
      }, 350);
    }
  }
};
},{}],2:[function(require,module,exports){
var GN = require('./dist/index');


document.addEventListener('DOMContentLoaded', function() {

  var success = document.getElementById('success-button');
  success.addEventListener('click', function(evt) {
    console.log("success-button");
    GN.add({type:'success', message: 'Dead simple zero-dep JS notifications!', duration: 5000, center:true});
  })

  var error = document.getElementById('error-button');
  error.addEventListener('click', function(evt) {
    GN.add({type:'error', message: '<h2>Use custom HTML for the message</h2>', duration: 10000})
  });

  var warning = document.getElementById('warning-button');
  warning.addEventListener('click', function(evt) {
    console.log("success-button");
    GN.add({type:'warning', message: 'Careful bro you might break something', duration: 6000, center:true});
  })

});
},{"./dist/index":1}]},{},[2]);
