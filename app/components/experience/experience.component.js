let experience = {
  bindings: {
  	'user_data' : "=userdata"
  },
  templateUrl: require('./experience.html'),
  controller: experiencesCtrl,
  controllerAs: 'experienceCtrl'
}

function experiencesCtrl(appService) {
	let experienceCtrl = this;

};

experience.$inject = ['appService'];
export default experience;