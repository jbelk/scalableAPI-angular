'use strict';

angular.module('myApp.view1', ['ngRoute',])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['categories','$scope',function(categories,$scope) {
  
    var $container = $('#container');

    $container.isotope({
    // options
    itemSelector: '.containeritem',
    layoutMode: 'masonry'
        });
    
  $scope.Categories = categories.listcategories();  
    
   // $scope.$watch('mycategory', function() {
     //  $scope.category = 
   //}); 
  
  $scope.getcategory = function(){
    categories.showcategory().get({ categoryId: $scope.mycategory.categoryId }, function(data) {
        $scope.items= data
        //console.log($scope.items)
    }); 
  }
  
  $scope.getproduct = function() {
     categories.showproduct().get({ productId : $scope.myitem.id }, function(data) {
         $scope.product = data
         //console.log($scope.product)
     }) 
  }
  
  $scope.getimage = function(color) {
      angular.forEach(color, function(value, key) {
        if(value.label == "Front"){
            $scope.productimg = value;
        } 
      });
    //console.log($scope.productimg)  
  }
      
     
    //console.log($scope.Categories);
}]);