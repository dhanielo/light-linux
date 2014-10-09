$("#create-app").click(function() {
  
	$http.post('http://'+$location.host()+':'+$location.port()+'/addApp', $(this)).success(function(){
		
		$location.path("/apps");
	}).error(function(){
		
		flash.setMessage("Error");
	});
});