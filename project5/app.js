angular.module('waitstaffApp', [])
.run(function($rootScope){
//$rootScope.init()
$rootScope.init = function (){
$rootScope.subTotal = 0
$rootScope.Tip = 0
$rootScope.Total = $rootScope.subTotal + $rootScope.Tip
$rootScope.allTips = []
$rootScope.$broadcast('clearAllTips')
}
$rootScope.init()
})
    .controller('mealDetailsCtrl', function($scope,$rootScope){
$scope.submitOrder = function (){
$rootScope.subTotal =parseInt($scope.basePrice) + parseInt($scope.basePrice*($scope.taxRate/100))
$rootScope.Tip = parseInt($scope.basePrice*($scope.tipPercentage/100))
$rootScope.Total = $rootScope.subTotal + $rootScope.Tip
$rootScope.allTips.push($rootScope.Tip)
console.log($rootScope.allTips)
$rootScope.$broadcast('handleAllTips')

$scope.$on('clearAllTips', function(event)
{$scope.basePrice = 0
$scope.taxRate = 0
$scope.tipPercentage = 0})
}

$scope.resetDetails = function (){
	console.log("cancel")
}
    })
    .controller('customerChargesCtrl', function($scope){

    })
    .controller('myEarningsInfoCtrl', function($scope,$rootScope){
 
 $scope.$on('handleAllTips', function(event)
 {$scope.allMyTips = 0 
 for (var i = 0; i < $rootScope.allTips.length; i++)
 {$scope.allMyTips += $rootScope.allTips[i]}

});   	

$scope.$on('clearAllTips', function(event) {
$scope.allMyTips = 0 
})


    });

