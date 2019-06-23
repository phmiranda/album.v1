/* comentários */
angular.module('alurapic').controller('FotosController', function ($scope, $http) {
   //
   $scope.fotos = [];
   $http.get('v1/fotos').success(function(msg){
      $scope.fotos = msg;
      console.log(msg);
   }).error(function (msg) {
      console.log(msg);
   });

   /* busca a API usando promisses */
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



