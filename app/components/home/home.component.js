let home = {
  bindings: {},
  templateUrl: require('./home.html'),
  controller: homeCtrl,
  controllerAs: 'homeCtrl'
}

function homeCtrl($scope, $state, appService) {

	let homeCtrl=this;
	homeCtrl.user_data = [];
	homeCtrl.loadData = loadData;
  function constructor() {
    loadData();
   // homeCtrl.homeVar = "This text is from home controller";
    
  }

  function loadData() {

  	console.log(appService.getData().then(data => homeCtrl.user_data=data));

  }

  constructor();
};

home.$inject = ['$scope', '$state', 'appService'];
export default home;