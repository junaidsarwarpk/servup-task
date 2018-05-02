let second = {
  bindings: {},
  templateUrl: require('./second.html'),
  controller: secondCtrl,
  controllerAs: 'homeCtrl'
}

class secondCtrl {
  constructor($scope, $state, appService) {
    this.secondVar = "This text is from second controller";
    console.log(appService);
  }
};

second.$inject = ['$scope', '$state', 'appService'];
export default second;