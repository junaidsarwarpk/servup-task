let mainApp = {
  bindings: {},
  templateUrl: require('./app.html'),
  controller: appCtrl 
}

class appCtrl {
  constructor($scope, $state, appService, $timeout) {
    this.$state = $state;
    this.appService = appService;
  }
};

mainApp.$inject = ['$scope', '$state' ,'appService'];
export default mainApp;