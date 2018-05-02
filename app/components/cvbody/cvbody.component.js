let cvbody = {
  bindings: {
  	'user_data' : "=userdata"
  },
  templateUrl: require('./cvbody.html'),
  controller: cvbodyCtrl,
  controllerAs: 'cvbCtrl'
}

function cvbodyCtrl(appService) {
	let cvbCtrl = this;

 function constructor() {
   
  }


  constructor();
};

cvbody.$inject = ['appService'];
export default cvbody;