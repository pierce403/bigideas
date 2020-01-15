(function () {
  'use strict';

  var app = angular.module('examples', ['chart.js', 'ui.bootstrap','rzSlider']);

  app.config(function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
      colors: ['#97BBCD', '#DCDCDC', '#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']
    });
    // Configure all doughnut charts
    ChartJsProvider.setOptions('doughnut', {
      cutoutPercentage: 60
    });
    ChartJsProvider.setOptions('bubble', {
      tooltips: { enabled: false }
    });
  });

  app.controller('StackedBarCtrl', ['$scope', function ($scope) {
    $scope.labels = ['Sanders', 'Warren', 'Biden','Buttigieg'];
    $scope.type = 'StackedBar';
    $scope.series = ['2015', '2016','potato'];

    function recalculate()
    {
      $scope.data=[
        [$scope.healthcareSlider.value*70,$scope.healthcareSlider.value*30, $scope.healthcareSlider.value*50, $scope.healthcareSlider.value*20],
        [$scope.educationSlider.value*20, $scope.educationSlider.value*60, $scope.educationSlider.value*20, $scope.educationSlider.value*10],
        [$scope.militarySlider.value*10, $scope.militarySlider.value*10, $scope.militarySlider.value*30, $scope.militarySlider.value*70]]
    };

    $scope.healthcareSlider = {value: 1,
      options: {
      floor: 0,
      ceil: 100,
      onChange: recalculate
    }};

    $scope.educationSlider = {value: 1,
      options: {
      floor: 0,
      ceil: 100,
      onChange: recalculate
    }};

    $scope.militarySlider = {value: 1,
      options: {
      floor: 0,
      ceil: 100,
      onChange: recalculate
    }};
    
    $scope.options = {
      scales: {
        xAxes: [{
          stacked: true,
        }],
        yAxes: [{
          stacked: true
        }]
      }
    };

    $scope.data = [
      [65, 59, 90, 81, 56, 55, 40],
      [28, 48, 40, 19, 96, 27, 100],
      [66, 21, 33, 15, 6, 12, 8]
    ];

  }]);

})();
