var c = angular.module("carousel", ['ui.bootstrap']);
c.controller("CarouselDemoCtrl",
function CarouselDemoCtrl($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'images/futuretech.jpg'
    },
    {
      image: 'images/ttk.png'
    },
    {
      image: 'images/homepage.jpg'
    }
  ];
});