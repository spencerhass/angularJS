angular.module('myApp', [])
    .controller('MultiplicationCtrl', function($scope, $attrs) {
        $scope.numberLimit = $attrs.initialNumberLimit || 10;
console.log("test");
        $scope.numbers = function() {
            var numbers = [];
            for(var i=0; i<$scope.numberLimit; i++) {
                numbers[i] = i + 1;
            };
            return numbers;
        };console.log($scope.numbers());
    });