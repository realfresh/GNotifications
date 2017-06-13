var GN = require('../dist/index');


document.addEventListener('DOMContentLoaded', function() {
  console.log("loaded");
  console.log(GN);
  var button = document.getElementById('success-button');
  button.addEventListener('click', function(evt) {
    console.log("success-button");
    GN.add({type:'success', message: '<h1>Store Updated</h1>', duration: 30000, center:true});
    GN.add({type:'warning', message: 'Careful nigga', duration: 30000, center:true});
    GN.add({type:'success', message: 'A very very long centered text sentence to see how it behaves in multiple lines. A very very long centered text sentence to see how it behaves in multiple lines', duration: 60000, center:true});
    GN.add({type:'error', message: 'In-correct email or password', duration: 60000, center:true});
    GN.add({type:'error', message: 'Too many attempts, please wait a while before trying again', duration: 10000})
  })
});