
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
    	
    	$( "a" ).on( "click", function( event ) {

    		// Prevent the usual navigation behavior
    		event.preventDefault();

    		// Alter the url according to the anchor's href attribute, and
    		// store the data-foo attribute information with the url
    		$.mobile.navigate( $(this).attr( "href" ), {
    			foo: $(this).attr("data-foo")
    		});

    		// Hypothetical content alteration based on the url. E.g, make
    		// an Ajax request for JSON data and render a template into the page.
    		alterContent( $(this).attr("href") );
    	});
    	
      /*  var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);*/
    	
    	var username = document.getElementById('user_name').value;
    	var passwd = document.getElementById('passwd').value;
       $.ajax(
                {
                    type: "GET",
                    url: 'http://vcslx160.samgpunb.symantec.com:8000/api/login/',
                    dataType: "json",
                    success: function (data) {

                        alert('success');
                        console.log(JSON.stringify(data));
                        $.each(data, function (i, theItem) {
                        			console.log(theItem);
                        });
                    },
                    error: function (msg, url, line) {
                        //console.log('error trapped in error: function('+msg+ url+ line+')');
                        console.log('msg = ' + msg + ', url = ' + url + ', line = ' + line);
                       // console.log("Error");
                    }
                    
                });
                
    }
};

app.initialize();
