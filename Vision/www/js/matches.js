
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
                    url: 'http://vcslx160.samgpunb.symantec.com:8000/api/match/',
                    dataType: "json",
                    success: function (data) {

                        alert('success');
                        console.log(JSON.stringify(data));
                        $.each(data, function (i, theItem) {
                        	
                        	//For Volunteer
                        	var ranking = "<h3>"+theItem.ReqID+"</h3><p><span>Name:"+theItem.ReqID+"</span><br><span>Status:"+theItem.Status+"</span><br><span>Matched Since:"+theItem.TimeOpened+"</span><br><img alt='Accept' src='img/check.svg' style='width: 25px; height: 25px;' align='left'><img alt='Reject' src='img/cross.svg' style='width: 25px; height:25px;' align='right'>	<br></p>";
                        	$('#rankingVol').replaceWith('<div id="ranking1" data-role="collapsible" data-collapsed="false">' + ranking + '</div>');
                        	$('#collapsibleSetVol').find('div[data-role=collapsible]').collapsible({refresh:true});
                        	
                        	//For Seeker
                        	/*
                        	var ranking = "<h3>"+theItem.ReqID+"</h3><p><span>Name:"+theItem.ReqID+"</span><br><span>Status:"+theItem.Status+"</span><br><span>Matched Since:"+theItem.TimeOpened+"</span><img alt='Accept' src='img/check.svg' style='width: 25px; height: 25px;' align='left'><img alt='Reject' src='img/cross.svg' style='width: 25px; height:25px;' align='right'>	<br></p>";
                        	$('#ranking1').replaceWith('<div id="ranking1" data-role="collapsible" data-collapsed="false">' + ranking + '</div>');
                        	$('#collapsibleSet').find('div[data-role=collapsible]').collapsible({refresh:true});*/
                        });
                    },
                    error: function (msg, url, line) {
                        console.log('msg = ' + msg + ', url = ' + url + ', line = ' + line);
                    }
                    
                });
         }

    
};

app.initialize();
