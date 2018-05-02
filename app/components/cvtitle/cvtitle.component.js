let cvtitle = {
  bindings: {
  	'user_data' : "=userdata"
  },
  templateUrl: require('./cvtitle.html'),
  controller: cvCtrl,
  controllerAs: 'cvCtrl'
}

function cvCtrl(appService) {
	let cvCtrl = this;
	//this.loadData = loadData;
  function constructor() {
    console.log(appService);
  }



};

cvtitle.$inject = ['appService'];
export default cvtitle;