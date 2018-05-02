let contact = {
  bindings: {
  	'user_data' : "=userdata"
  },
  templateUrl: require('./contact.html'),
  controller: contactCtrl,
  controllerAs: 'contCtrl'
}

function contactCtrl(appService) {
	let contCtrl = this;

 function constructor() {
   
  }


  constructor();
};

contact.$inject = ['appService'];
export default contact;