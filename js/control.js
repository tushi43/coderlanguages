var cl = angular.module("cl", ["ngRoute","ngAnimate"]);

/*cl.controller('ScrollController', ['$scope', '$location', '$anchorScroll',
  function($scope, $location, $anchorScroll) {
    $scope.gotoBottom = function() {
      $anchorScroll();
    };
  }]);*/

cl.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "content/main.html"
    })
	.when("/main", {
        templateUrl : "content/main_images.html"
    })
	.when("/android", {
        templateUrl : "essentials/android_and_apple.html"
    })
    .when("/language", {
        templateUrl : "languages/languages.html"
    })
	.when("/java", {
        templateUrl : "languages/java.html"
    })
	.when("/cpp", {
        templateUrl : "languages/cpp.html"
    })
	.when("/csharp", {
        templateUrl : "languages/chash.html"
    })
	.when("/c", {
        templateUrl : "languages/c.html"
    })
	.when("/html", {
        templateUrl : "languages/html.html"
    })
	.when("/css", {
        templateUrl : "languages/css.html"
    })
	.when("/javascript", {
        templateUrl : "languages/javascript.html"
    })
	.when("/php", {
        templateUrl : "languages/php.html"
    })
	.when("/python", {
        templateUrl : "languages/python.html"
    })
	.when("/r", {
        templateUrl : "languages/r.html"
    })
	.when("/ruby", {
        templateUrl : "languages/ruby.html"
    })
	.when("/sql", {
        templateUrl : "languages/sql.html"
    })
	
	
    .when("/framework", {
        templateUrl : "frameworks/framework.html"
    })
	.when("/struts", {
        templateUrl : "frameworks/struts.html"
    })
	.when("/hibernate", {
        templateUrl : "frameworks/hibernate.html"
    })
	.when("/spring", {
        templateUrl : "frameworks/spring.html"
    })
	.when("/xml", {
        templateUrl : "frameworks/xml.html"
    })
	.when("/phpframeworks", {
        templateUrl : "frameworks/phpframeworks.html"
    })
	.when("/bootstrap", {
        templateUrl : "frameworks/bootstrap.html"
    })
	.when("/laravel", {
        templateUrl : "frameworks/laravel.html"
    })
	.when("/ajax", {
        templateUrl : "frameworks/ajax.html"
    })
	.when("/json", {
        templateUrl : "frameworks/json.html"
    })
	.when("/angularjs", {
        templateUrl : "frameworks/Angularjs.html"
    })
	.when("/vuejs", {
        templateUrl : "frameworks/vuejs.html"
    })
	.when("/reactjs", {
        templateUrl : "frameworks/reactjs.html"
    })
	.when("/electronjs", {
        templateUrl : "frameworks/electronjs.html"
    })
	.when("/nodejs", {
        templateUrl : "frameworks/nodejs.html"
    })
	.when("/hadoop", {
        templateUrl : "frameworks/hadoop.html"
    })
	.when("/bigtable", {
        templateUrl : "frameworks/bigtable.html"
    })
	.when("/practise", {
        templateUrl : "essentials/practise_sites.html"
    })
	.when("/learning", {
        templateUrl : "essentials/learning_sites.html"
    })
	.when("/editors", {
        templateUrl : "essentials/editors.html"
    })
	
	
	.when("/frameworkvslibrary", {
        templateUrl : "essentials/frameworks,libraryvsplugin.html"
    })
	.when("/youtube", {
        templateUrl : "essentials/youtubelinks.html"
    })
	.when("/firstlanguage", {
        templateUrl : "essentials/firstlan.html"
    })
	.when("/futuretech", {
        templateUrl : "essentials/futuretech.html"
    })
	.when("/survey", {
        templateUrl : "essentials/surveyreport.html"
    })
	.when("/api", {
        templateUrl : "essentials/api.html"
    })
	.when("/keywords", {
        templateUrl : "essentials/webkeywords.html"
    })
	.when("/cvi", {
        templateUrl : "essentials/compilers_interpreters.html"
    })
	.when("/software", {
        templateUrl : "essentials/software.html"
    })
	.when("/style_of_coding", {
        templateUrl : "essentials/style_of_coding.html"
    })
	.when("/deep_web", {
        templateUrl : "essentials/deep_web.html"
    })
	.when("/web", {
        templateUrl : "essentials/web_development.html"
    })
	
	
	.when("/about", {
        templateUrl : "content/about.html"
    })
	.when("/contact", {
        templateUrl : "content/contact1.php"
    })
	.when("/contact2", {
        templateUrl : "content/contact2.php"
    });
});

/*
cl.run(["$rootScope", "$anchorScroll" , function ($rootScope, $anchorScroll) {
    $rootScope.$on("$locationChangeSuccess", function() {
                $anchorScroll();
    });
}]);*/
      

cl.controller('mycontroller', ['$scope', function($scope) {
  $scope.goback = function() { 
    window.history.back();
  };
}]);


 cl.controller('dbcontroller',function($scope,$http,$location){    
 $scope.sendEmail = function(){      
 $http.post("content/contact_file.php", {
    'email':$scope.email,
    'subject':$scope.subject,
    'message':$scope.message}).then(function(response){
                   alert("Message sent Successfully");
				   $location.hash("#/");
                },function(error){
                    alert("Sorry! Query Couldn't be sent,<br> Please try again later!");
                    console.error(error);

                });
    }
     });
	 
	 
cl.controller('clickable',function($scope,$anchorScroll,$location,$window,$rootScope){
	$scope.$on('$locationChangeSuccess', function($location,event){
    document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
		document.getElementById('myNavbar').className += "navbar-collapse collapse";
});
});		





