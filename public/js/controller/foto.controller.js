angular.module('album').controller('FotoController', function ($scope, $http) {
    // POJO do AngularJS para tornar o escopo global do objeto 'foto'.
    $scope.fotos = [];

    // declara uma promise(promessa) de retorno dos dados, pois a requisição é assíncrona.
    $http.get('v1/fotos').success(function (retorno) {
        $scope.fotos = retorno;
        console.log(retorno);
    }).error(function (error) {
        console.log(error);
    });
});
