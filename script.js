$(document).ready(function() {
	
	$( "#action" ).on( "click", function() {
  		//alert( $( this ).text() );
  		 
  		$('.ui.modal').modal('show');
	});
	
	$('.ui.sticky').sticky({
	    context: '#example1'
	  });

});