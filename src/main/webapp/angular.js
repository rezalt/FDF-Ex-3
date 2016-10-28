/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('myApp', []);

app.controller('RandomController', function ($scope, RandomFactory)
{
    
    $scope.randomNumber = RandomFactory.getCarsgetRandomNumber(10);
    $scope.randomString = RandomFactory.getRandomString(10);
});

app.factory('RandomFactory', function () {
   
    var getCarsgetRandomNumber = function (n) {
        return Math.floor((Math.random() * n) + 1);
    };
    var getRandomString = function (n) {
        return new Array(n + 1).join((Math.random().toString(36) + '00000000000000000').slice(2, 18)).slice(0, n);
    };

    return {
        getCarsgetRandomNumber: getCarsgetRandomNumber,
        getRandomString: getRandomString
    };
});