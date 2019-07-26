
var app = angular.module("searchApp", []);
app.filter('searchFor', function(){
return function(dataArr, searchString){
if(!searchString){
return dataArr;
}
var result = [];
searchString = searchString.toLowerCase();

angular.forEach(dataArr, function(item){
if(item.name.toLowerCase().indexOf(searchString) !== -1){
result.push(item);
}
});
return result;
};
});
function searchController($scope){
$scope.questions = [
{name:"How to get elelment given class",date:"2012"},
{name:"How to get elelment given id",date:"2010"},
{name:"How to get elelment given name",date:"2017"},
{name:"How to get elelment given value",date:"2016"}
];}