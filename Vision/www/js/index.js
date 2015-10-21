
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
                            /*var combo = document.getElementById("cboFastBikes");
                            var option = document.createElement("option");
                            option.text = theItem.toString();
                            option.value = theItem.toString();
                            try {
                                //alert('success add combo');
                                combo.add(option, null); // Other browsers
                            }
                            catch (error) {
                                alert('error found');
                                combo.add(option); // really old browser
                            }*/
                        	 document.getElementById("inpFirstName").value= theItem.login;

                        });
                    },
                    error: function (msg, url, line) {
                        //console.log('error trapped in error: function('+msg+ url+ line+')');
                        console.log('msg = ' + msg + ', url = ' + url + ', line = ' + line);
                       // console.log("Error");
                    }
                    
                });
        
        $("#target" ).submit(function( event ) {
      	  alert( "Handler for .submit() called." );
      	  var firstName = document.getElementById("inpFirstName").value;
      	  var lastName = document.getElementById("inpLastName").value;
      	   $.ajax(
                 {
                     type: "POST",
                     url: 'http://vcslx160.samgpunb.symantec.com:8000/api/login/?login=deepali2&password=symc',
                     dataType: "json",
                     success: function (data) {
                    	 	alert('success');
                     },
                     error: function (msg, url, line) {
                         //console.log('error trapped in error: function('+msg+ url+ line+')');
                         console.log('msg = ' + msg + ', url = ' + url + ', line = ' + line);
                        // console.log("Error");
                     }
                     
                 });
      	  event.preventDefault();
      	  
      	});
    }
   
};

app.initialize();
