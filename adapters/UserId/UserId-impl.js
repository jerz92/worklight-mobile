
function getUserId(email,password) {
		
	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : 'api/izify-api/login.php',
	    parameters: {email:email,password:password}
	};
	
	
	return WL.Server.invokeHttp(input);
}
