'use strict';
var productApp = angular.module('productApp', []);
productApp.controller('ProductCtrl', function ($scope, $http) {
  $http.get('product/products.json').success(function(data) {
    $scope.products = data;
  });

  $scope.orderProp = 'index';
  });
