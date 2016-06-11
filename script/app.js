var myApp = angular.module('myApp', ['ngRoute']);

//controllers

myApp.controller('homeCtrl',['$scope', function($scope){
    
    
    
}]);

myApp.controller('proCtrl',['$scope', function($scope){
    
    
    
}]);

myApp.controller('contactCtrl',['$scope', function($scope){
    
    
    
}]);

myApp.config(function($routeProvider){
    
    $routeProvider
    
    .when('/', {
        templateUrl:'pages/home.htm',
        controller:'homeCtrl'
    })
    
    .when('/project', {
        templateUrl:'pages/projects.htm',
        controller:'proCtrl'
    })
    
    .when('/contact', {
        templateUrl:'pages/contact.htm',
        controller:'contactCtrl'
    })
    
})