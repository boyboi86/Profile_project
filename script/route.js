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