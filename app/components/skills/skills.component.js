let skills = {
  bindings: {
  	'user_data' : "=userdata"
  },
  templateUrl: require('./skills.html'),
  controller: skillsCtrl,
  controllerAs: 'skillCtrl'
}

function skillsCtrl(appService) {
	let skillCtrl = this;

	skillCtrl.getCount = getCount;
	skillCtrl.getRemaining = getRemaining;

 function constructor() {
   
  }


  function getCount (arg) {
   		
   		if(!arg) return;
   		return new Array(arg);

   } 

  function getRemaining (arg) {
   		
   		if(!arg) return;
   		return new Array(5-arg);

   } 
  constructor();
};

skills.$inject = ['appService'];
export default skills;