/* comentários */
angular.module('alurapic').controller('FotosController', function ($scope, $http) {
    /* comentários */
    $scope.fotos = [];
    $http.get('v1/fotos')
        .success(function(msg) {
            console.log(msg);
            $scope.fotos = msg;
        }).error(function (msg) {
        console.log(msg);
    });
});



/*
$scope.fotos = []
var promise = $scope.fotos = $http.get('v1/fotos');
promise.then(function (retorno) {
   $scope.fotos = retorno.data;
}).catch(function (error) {
   console.log(error);
});
*/
