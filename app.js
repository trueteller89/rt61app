var app = angular.module("app", []);
app.factory('facebookService', function($q) {
	     var fbAsyncInit = function() {
            FB.init({
                appId: 438189453051781,
                status: true,
                cookie: true,
                xfbml: true,
                version: 'v2.5'
            });
             //FB.login(function(){}, {scope: 'publish_actions'});

        };
        fbAsyncInit();
    return {
        getMyLastName: function() {
				console.log("pressed!");
            var deferred = $q.defer();
        FB.api(
    "/me/feed",
    function (response) {
      if (response && !response.error) {
      console.log(response);
      }
    }
);
            return deferred.promise;
        }
    }
});
app.controller("myCntrl", ['$scope', '$log', 'facebookService', function ($scope, $log, facebookService) {
	

$scope.getMyLastName = function() {
	FB.login(function(response) {
    facebookService.getMyLastName() 
     .then(function(response) {
		 	//console.log(response);
       //$scope.last_name = response.last_name;
     }
   );
}, {scope: 'email,user_likes,user_friends,user_posts,user_managed_groups'});

 
};

}
]);
