// JavaScript Document
var getNames = function(){
	 $.ajax(
    {
    type: "get",
    url: "http://www.sfarts.org/data/sfartsMobileAPI.cfc?method=getPodSubjects2",
    data: {
    method: "getPodSubjects2",
    },
    dataType: "json",
     

    // Define request handlers.
    success: function( objResponse ){
    // Check to see if request was successful.
    if (objResponse){
     

        // The request was successful. 
		
       console.log("here we are");
	   console.log(objResponse);
     	 for (i=0;i < objResponse.DATA.length;i++){
		 var html = "<p>" + objResponse.DATA[i][2] + "</p>";
		 console.log(html);
		 $("#testArea").append(html);
	 }

    } else {
     

    // The response was not successful. Show
    // an errors to the user.
    console.log( objResponse );
	//objSelf.ShowErrors( objResponse.ERRORS );
    

    }
    },
     

    error: function( objRequest, strError ){
   // objSelf.ShowErrors( [ "An unknown connection error occurred." ] );
   console.log(objRequest);
   console.log('error');
    }
    }
   );
}