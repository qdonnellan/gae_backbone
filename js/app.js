var app = angular.module('app', ['ngResource']);
app.config(["$httpProvider", function(provider)
{
      provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
}]);