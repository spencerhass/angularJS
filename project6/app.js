angular.module('app', [])
.controller('MainCtrl',function($scope, $http){
$scope.landing = true
$scope.count= false
$scope.searchPhoto = function (){
	$scope.landing = false
	$scope.allPhotos = []
$http({
  method: 'GET',
  url: 'https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=c16f85f5b58c8d93037e5139c19e7c90&tags='+$scope.tag+'&format=json&nojsoncallback=1&per_page=10'
  //data : $scope.params


}).then(function successCallback(response) {
	$scope.count = true
   $scope.allPhotos = response.data.photos.photo
   console.log($scope.allPhotos)
  }, function errorCallback(response) {
   //
  });
}
})



/*var params = {
    method: 'flickr.photos.search',
    api_key: api_key,
    tags: search_tag,
    format: 'json',
    nojsoncallback: 1
}

'https://farm{farmId}.staticflickr.com/{serverId}/{id}_{secret}.jpg'

https://api.flickr.com/services/rest

//c16f85f5b58c8d93037e5139c19e7c90 key
//0c34786fd2a936cc secret 
*/