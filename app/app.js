'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'famous.angular', 
  //'ui.router',
  //'ngAnimate',  
  'ngRoute',
  'ngResource', 
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}])
.factory('categories',['$resource', function($resource) {  
  
    return {
            listcategories : function () {
               return $resource('https://api.scalablepress.com/v2/categories').query(); 
            },
            showcategory : function () {
               return $resource('https://api.scalablepress.com/v2/categories/:categoryId'); 
            },
            showproduct : function () {
               return $resource('https://api.scalablepress.com/v2/products/:productId');  
            }
        }
    
}]);
