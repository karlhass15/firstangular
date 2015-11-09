var myApp = angular.module('myApp', []);
//$(document).ready(function(){

myApp.controller("ZetaMessages",['$scope', '$http', function($scope, $http){
    $scope.note = {};
    $scope.messageArray = [];


    $scope.clickButton = function(kittyFooFoo) {
        $http.post('/people', kittyFooFoo).then(function (response) {
            $scope.getPeople();
        });
        console.log(kittyFooFoo)
    };

    $scope.getPeople = function(){
        $http.get('/people').then(function(response){
            $scope.messageArray = response.data;
        });
    };
    $scope.getPeople();
}]);
    //  $("#search").submit(function(event) {
    //    event.preventDefault();
        //var values = {};

    //    $.each($(this).serializeArray(), function (i, field) {
     //       values[field.name] = field.value;
       // });

 //   });
   //$('#personMessage').submit(addPersonMessage);

   // getData();
//});


//function getData() {
//    $.ajax({
//        type: "GET",
//        url: "/data",
//        success: function (data) {
//            updateDOM(data)
//        }
//    });
//}

//angularPOST

//function addPersonMessage() {
//    event.preventDefault();
//    var values = {};
//
//    $.each($(this).serializeArray(), function (i, field) {
//        values[field.name] = field.value;
//    });

    //is value in field.value supposted to match values..?
//    $.ajax({
//        type: "POST",
//        url: "/data",
//        data: values,
//        success: function (data) {
//            getData();
//        }
//    });
//}

    //angularGET


//function updateDOM(data){
//    $('#messageContainer').empty();
//
//    for(var i = 0; i < data.length; i++) {
//        var el = "<div class='col-md-3'>" +
//                "<p>" + data[i].name + "</p>" +
//                "<p>" + data[i].message + "</p>" +
//                    "</div>";
//
//        $('#messageContainer').append(el);






