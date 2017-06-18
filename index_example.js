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