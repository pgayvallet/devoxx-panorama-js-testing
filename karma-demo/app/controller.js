function languageController($scope,$http) {

  $http.get('languages.json').success(function(data) {
    $scope.languages = data;
  });

}