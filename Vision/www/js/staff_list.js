

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
                    url: 'http://vcslx160.samgpunb.symantec.com:8000/api/staff_list/',
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
                        	$("#staff_list > tbody").append(html);
                        	$("#staff_list").table("refresh");
                        	
                        });
                    },
                    error: function (msg, url, line) {
                        console.log('msg = ' + msg + ', url = ' + url + ', line = ' + line);
                    }
                    
                });
        
         }

    
};

app.initialize();
