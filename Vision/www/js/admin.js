

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
                    url: 'http://vcslx160.samgpunb.symantec.com:8000/api/register/',
                    dataType: "json",
                    success: function (data) {

                        alert('success');
                        console.log(JSON.stringify(data));
                        $.each(data, function (i, theItem) {
                        /*	
                        	//For Manage Seeker
                        	var html = "<tr><td>"+theItem.firstname+" "+theItem.lastname+"</td>	<td>"+theItem.mobile+"</td><td>"+theItem.state+"</td><td>"+theItem.city+"</td></tr>"; 
                        	$("#seeker_list > tbody").append(html);
                        	$("#seeker_list").table("refresh");                        	
                       */
                        	//For Manage volunteer
                        	/*var html = "<tr><td>"+theItem.firstname+" "+theItem.lastname+"</td>	<td>"+theItem.mobile+"</td><td>"+theItem.state+"</td><td>"+theItem.city+"</td><td>"+theItem.city+"</td></tr>"; 
                        	$("#volunteer_list > tbody").append(html);
                        	$("#volunteer_list").table("refresh");                        	
                       */
                        	
                        	//For Manage Requests
                        	var html = "<tr><td>"+theItem.firstname+" "+theItem.lastname+"</td>	<td>"+theItem.mobile+"</td><td>"+theItem.state+"</td><td>"+theItem.city+"</td><td>"+theItem.city+"</td></tr>"; 
                        	$("#request_list > tbody").append(html);
                        	$("#request_list").table("refresh");
                        	
                        });
                    },
                    error: function (msg, url, line) {
                        console.log('msg = ' + msg + ', url = ' + url + ', line = ' + line);
                    }
                    
                });
        
        
        $("#add_volunteer_admin_form" ).submit(function( event ) {
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
            var pref 		= document.getElementById("pref").value;
            
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
                    "firstname": firstName,
                    "pref":	pref
            }
            console.log("Add Volunteer payload");
            console.log(JSON.stringify(payload));
            
            $.ajax({
                type: "POST",
                url: "http://vcslx160.samgpunb.symantec.com:8000/api/add_volunteer_admin/",
                async: false,
                data: JSON.stringify({"address":"3","pincode":"2","city":"mum","state":"mah","email":"d","mobile":"34","dob":"03/09/1990","gender":"on","lastname":"Futane","firstname":"Deepali" ,"pref":"Banking"}),
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
