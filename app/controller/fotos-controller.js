angular.module('album').controller('FotosController', function ($scope, $http) {
   /* comentários */
   $scope.fotos = [];
   $http.get('v1/fotos').success(function(msg){
      $scope.fotos = msg;
      console.log(msg);
   }).error(function (msg) {
      console.log(msg);
   });

   /* utilizando promisses no controller */
   /**
   $scope.fotos = [];
   var promise = $scope.fotos = $http.get('v1/fotos');
   promise.then(function (retorno) {
      $scope.fotos = retorno.data;
   }).catch(function (error) {
      console.log(error);
   });
   */
});



