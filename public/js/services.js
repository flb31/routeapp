angular.module('routeapp.services', ['routeapp.values'])
.factory('Databases', ['Users', function(Users){
  return{
    DataUser: {
      add : function(user){
        Users.push(user);
      },

      list : function(){
        return Users;
      },
      
      update : function(index, user){
        return Users[index] = user;
      },

      get : function(index){
        return Users[index];
      },
      
      destroy : function(index){
        return Users.splice(index, 1);
      }
    }
  };
}]) 
  
.factory('Util', [function(){
  return {
    clone: function (obj) {
        if (null == obj || "object" != typeof obj) return obj;
        var copy = obj.constructor();
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
        }
        return copy;
    }
  } 
}])
;
