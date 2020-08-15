angular.module('album').controller('AlbumController', function ($scope, $http) {
    // POJO do AngularJS para tornar o escopo global do objeto 'Album'.
    $scope.albuns = [];

    // declara uma promise(promessa) de retorno dos dados, pois a requisição é assíncrona.
    $http.get('v1/albuns').success(function (retorno) {
        $scope.albuns = retorno;
        console.log(retorno);
    }).error(function (error) {
        console.log(error);
    });
});
