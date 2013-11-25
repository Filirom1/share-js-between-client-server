// this code is shared by the server and the client
if(typeof exports !== 'undefined'){
  // Server part, define your dependencies with nodejs format
  exports = module.exports = main(
    require('underscore')
  );
}else{
  // client part, declare your dependencies with requirejs format
  define([
    'underscore'
  ], main);
}

function main(_){
  return {
   
    hello: function(){
      return _.sample(['OK', 'Good', 'It works']);
    }

  }
}
