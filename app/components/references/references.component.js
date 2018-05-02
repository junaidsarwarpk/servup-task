let references = {
  bindings: {
  	'user_data' : "=userdata"
  },
  templateUrl: require('./references.html'),
  controller: referencesCtrl,
  controllerAs: 'referenceCtrl'
}

function referencesCtrl(appService) {
	let referenceCtrl = this;

	
 // constructor();
};

references.$inject = ['appService'];
export default references;