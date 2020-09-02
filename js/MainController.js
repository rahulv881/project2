( function(){
var app = angular.module("apiViewer",[]);

var MainController = function($scope, $http ){

      var onGetComplete = function(response){

        $scope.employees = response.data.data;
        $scope.url       = response.data.ad.url;
        $scope.text      = response.data.ad.text;

      };

      $scope.message="BootStrap 4 User Cards";
      $http.get("https://reqres.in/api/users?page=2")
            .then(onGetComplete);
};

app.controller("MainController", ["$scope", "$http", MainController]);
}());
