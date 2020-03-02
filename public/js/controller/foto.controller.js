angular.module('album').controller('FotoController', function ($scope, $http) {
    // POJO do AngularJS para tornar o escopo global do objeto 'foto'.
    $scope.fotos = [];

    // declara uma promise(promessa) de retorno dos dados, pois a requisição é assíncrona.
    $http.get('v1/fotos').then(function (retorno) {
        $scope.fotos = retorno.data;
        console.log(retorno);
    }, function (error) {
        console.log(error);
    });
});
