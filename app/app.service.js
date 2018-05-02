//Service created by: Junaid Sarwar at May 2nd, 2018 at 4:00 AM
export default class appService{

	constructor($http, $q){

		this.http=$http;
		this.$q=$q;
		this.data = {};
	}

    getData(){
    	let deffered = this.$q.defer();
    	if(this.data.config){ // in order to avoid 2nd request to server
    		deffered.resolve(this.data.data);
    	}else{
    	this.http.get("https://demo9992627.mockable.io/user").then( (data) => { this.data=data;deffered.resolve(data.data); }, (err) => {deffered.reject(err)} );	
    	}

    	return deffered.promise;
    	
    }

}

appService.$inject = ['$http','$q'];