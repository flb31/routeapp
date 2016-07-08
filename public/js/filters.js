angular.module('routeapp.filters', [])
.filter('prefixController', function(){
  return function(text){
    
    if(typeof text === 'undefined' ){
      return '';
    }
    var p_string = new RegExp('[a-z]+[0-9]*');
    var p_int = new RegExp("[0-9]+");
    
    if(p_int.test(text)){
      return '';
    }else if(p_string.test(text) ){
      return text.charAt(0).toUpperCase() + ( (text.length > 1)? text.slice(1) : '' );
    }else{
      return '';
    }
  };
})
;