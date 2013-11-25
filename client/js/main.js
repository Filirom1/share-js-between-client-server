require.config({
  shim: {
    underscore: {
      exports: '_'
    },
  },
  paths: {
    'underscore': 'lib/underscore',
    'jquery': 'lib/jquery'
  }
});

require(['jquery', './common/lib'], function($, lib){
  $(function(){
    document.querySelector('#client').innerText = lib.hello();

    $.get('/hello', function(data){
      document.querySelector('#server').innerText = data;
    })
  });
});
