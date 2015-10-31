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
           
            var firstName        		= document.getElementById("first_name").value;
            var lastName        		= document.getElementById("last_name").value;
            var password         		= document.getElementById("password").value;
            var reenterPassword 		= document.getElementById("reenter_password").value;
            var gender                  = document.getElementById("gender").value;
            var dateOfBirth      		= document.getElementById("dob").value;
            var mobile                  = document.getElementById("mobile").value;
            var email                   = document.getElementById("email").value;
            var occupation              = document.getElementById("occupation").value;
            var state                   = document.getElementById("state").value;
            var city                    = document.getElementById("city").value;
            var pincode         		= document.getElementById("pincode").value;
            var address         		= document.getElementById("address").value;
            var secQue1                 = document.getElementById("sec_ques1").value;
            var secQue2                 = document.getElementById("sec_ques2").value;
            var ans1                    = document.getElementById("sec_ans1").value;
            var ans2                    = document.getElementById("sec_ans2").value;
            var registerType         	= document.getElementById("register_type").value;
            var offerings				= document.getElementById("offerings").value;
          
            var payload = {
                    "address": address,
                    "pincode": pincode,
                    "password": password,
                    "city": city,
                    "state": state,
                    "email": email,
                    "mobile": mobile,
                    "dob": dateOfBirth,
                    "gender": gender,
                    "lastname": lastName,
                    "firstname": firstName,
                    "secQue1": secQue1,
                    "secQue2": secQue2,
                    "secAns1": ans1,
                    "secAns2": ans2,
                    "registerType": registerType,
                    "offerings": offerings
            };
          
            console.log("registration payload");
           
            console.log(JSON.stringify(payload));
          
            $.ajax({
                type: "POST",
                url: "http://vcslx160.samgpunb.symantec.com:3000/api/register/",
                async: false,
                data: JSON.stringify(payload),
                //data:JSON.stringify(payload),
                contentType: "application/json",
                complete: function (data) {
                    console.log(JSON.stringify(data));
                    wait = false;
            }});
            event.preventDefault();
          
           });
      
        $("#create_request_form" ).submit(function( event ) {
            alert( "Handler for .submit() called." );
          
            /*
             * From API side please accept mobile number instead of accepting firstname and lastname itself
             * from UI side please send mobile number in every request as it is primary key for us
             */
        
            /*var details        = document.getElementById("details").value;
            var extra_info              = document.getElementById("extra_info").value;
           // var mobile                = document.getElementById("mobile").value; // it should be stored in COOKIES
            var reqDate    = document.getElementById("req_date").value;
            var reqType                 = document.getElementById("req_type").value;
            var city                    = document.getElementById("city").value;
          
            var payload = {
                    "city": city,
                    "details": details,
                    "reqType": reqTtype,
                    "reqDate": reqDate,
                    "mobile": mobile,
                    "reqDate":reqDate
            }
            console.log(JSON.stringify(payload));
            */
            $.ajax({
                type: "POST",
                url: "http://vcslx160.samgpunb.symantec.com:8000/api/Req/",
                async: false,
                data: JSON.stringify({"req_subject":"paper writing","req_type":"Education","req_status":"Open","req_info":"City diff Pune","firstname":"ABC","lastname":"XYZ"}),
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