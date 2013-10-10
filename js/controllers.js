app.controller('projectController', ['$scope', 'Folders', function($scope, Folders)
{
    $scope.phones = Folders.list();
}]);

$http({method: 'POST', url: '/someUrl', data: my_data}).
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });