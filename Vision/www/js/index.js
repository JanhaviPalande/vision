
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    
    // Update DOM on a Received Event
    receivedEvent: function(id) {
      /*  var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
*/
        console.log('Received Event: ' + id);
        $.ajax(
                {
                    type: "GET",
                    url: 'http://vcslx160.samgpunb.symantec.com:8000/api/login/',
                    dataType: "json",
                    success: function (data) {

                        alert('success');
                        console.log(JSON.stringify(data));
                        $.each(data, function (i, theItem) {
                        	 document.getElementById("inpFirstName").value= theItem.login;
                        });
                    },
                    error: function (msg, url, line) {
                        console.log('msg = ' + msg + ', url = ' + url + ', line = ' + line);
                    }
                    
                });
        
        $("#target" ).submit(function( event ) {
      	  alert( "Handler for .submit() called." );
      	  var firstName = document.getElementById("inpFirstName").value;
      	  var lastName = document.getElementById("inpLastName").value;
       	  
      	 $.ajax({
             type: "POST",
             url: "http://vcslx160.samgpunb.symantec.com:8000/api/login",
             async: false,
             data: JSON.stringify({ "login":"sup", "password":"symc" }),
             contentType: "application/json",
             complete: function (data) {
             console.log(data);
             wait = false;
         }});
      	  event.preventDefault();
      	  
      	});
        
        $("#register_form" ).submit(function( event ) {
            alert( "Handler for .submit() called." );
            
            var firstName		= document.getElementById("first_name").value;
            var lastName 		= document.getElementById("last_name").value;
            var password 		= document.getElementById("password").value;
            var reenterPassword = document.getElementById("reenter_password").value;
            var gender			= document.getElementById("gender").value;
            var dateOfBirth 	= document.getElementById("dob").value;
            var mobile 			= document.getElementById("mobile").value;
            var email 			= document.getElementById("email").value;
            var occupation 		= document.getElementById("occupation").value;
            var state 			= document.getElementById("state").value;
            var city 			= document.getElementById("city").value;
            var pincode 		= document.getElementById("pincode").value;
            var address 		= document.getElementById("address").value;
            
            var payload = {
                    "address": address,
                    "pincode": pincode,
                    "city": city,
                    "state": state,
                    "email": email,
                    "mobile": mobile,
                    "dob": dateOfBirth,
                    "gender": gender,
                    "lastname": lastName,
                    "firstname": firstName
            }
            console.log("registration payload");
            console.log(JSON.stringify(payload));
            
            $.ajax({
                type: "POST",
                url: "http://vcslx160.samgpunb.symantec.com:8000/api/register/",
                async: false,
                data: JSON.stringify({"address":"3","pincode":"2","city":"mum","state":"mah","email":"d","mobile":"34","dob":"03/09/1990","gender":"on","lastname":"Futane","firstname":"Deepali"}),
                //data:JSON.stringify(payload),
                contentType: "application/json",
                complete: function (data) {
                    console.log(JSON.stringify(data));
                    wait = false;
            }});
            event.preventDefault();
            
           });


    }
   
};

app.initialize();
