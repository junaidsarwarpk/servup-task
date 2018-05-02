let education = {
  bindings: {
  	'user_data' : "=userdata"
  },
  templateUrl: require('./education.html'),
  controller: educationsCtrl,
  controllerAs: 'educationCtrl'
}

function educationsCtrl(appService) {
	let educationCtrl = this;

};

education.$inject = ['appService'];
export default education;