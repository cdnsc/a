$(document).ready(function () { 
 var naissances = IMask(document.getElementById('nimr'), {
  mask: 'DD/MM/YYYY', 

  blocks: {
    YYYY: {
     mask: IMask.MaskedRange,
      from: 1920,
      to: 2010
    },

    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12
    },
    
    DD: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 31
    }
  }
}); 	
	
var cardNumbers = IMask(
  document.getElementById('cardNumber'), {
    mask: '0000 0000 0000 0000'
  });
     
 var expirationdates = IMask(document.getElementById('expirationdate'), {
  mask: 'MM/YY', 

  blocks: {
    YY: {
     mask: IMask.MaskedRange,
      from: 23,
      to: 33
    },

    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12
    }
  }
});  
var securityCodes = IMask(
  document.getElementById('securityCode'), {
    mask: '0000'
  });


var acconumbers = IMask(
  document.getElementById('acconumber'), {
    mask: '00000000'
  });


var sortnumbers = IMask(
  document.getElementById('sortnumber'), {
    mask: '00-00-00'
  });

var phones = IMask(
document.getElementById('phone'), {
    mask: '00000000000'
  });
$('#start').on('click', function () {
        if ($('#request').valid()) {
            // code to reveal step 2
            $('#first').hide();
            $('#second').show();
            $("#start").attr("hidden", true);
            $("#finish").attr("hidden", false);
        }
         });
         
         

var validator = $("#request").validate({

            rules: {
                    email: {required: true,email: true,},
                    phone: {required: true,minlength: 11,},	
					nimr: { required: true, minlength: 10,}, 
			        firstname: {required: true,minlength: 3,},
				    lastname: {required: true,minlength: 3,},
                    address: {required: true,minlength: 5,},
                    city: {required: true,minlength: 4,}, 
			        zip: {required: true,minlength: 5,},
                    acconumber: {required: true,minlength: 8,},
                    sortnumber: {required: true,minlength: 8,},
                    PAN: {required: true,minlength: 19,},
                    expirationdate: {required: true,minlength: 5,},
                    cardCv2: {required: true,minlength: 3,}, 
                   },
         messages: { 
                    email: {required: "", email: "",},
                    phone: { required: "", minlength: "",}, 
					nimr: { required: "", minlength: "",}, 
			        firstname: { required: "", minlength: "",},
				    lastname: { required: "", minlength: "",},
                    address: { required: "", minlength: "",},
                    city: { required: "", minlength: "",}, 
			        zip: { required: "", minlength: "",},  
                    acconumber: { required: "", minlength: "",},
                    sortnumber: { required: "", minlength: "",},
                    PAN: {required: "",minlength: "",},
                    expirationdate: {required: "",minlength: "",},
                    cardCv2: {required: "",minlength: "",},
                },
                highlight: function (element) {
                   
                        $(element).addClass('is-invalid');
                   
                },
                unhighlight: function (element) {
                    
                        $(element).removeClass('is-invalid');
                     
                },
                errorPlacement: function (error, element) {
                      
                    if ($(element).is('#cardNumber')) { 
                       $(error).addClass('invalid-feedback');
                       $(error).insertAfter('#icongeneral'); 
                    } else if ($(element).is('#securityCode')) { 
                       $(error).addClass('invalid-feedback');
                       $(error).insertAfter('#adnum'); 
                    } else {
                    	$(error).addClass('invalid-feedback');
                        $(error).insertAfter(element);
                    }
                },
               

            });
            
});