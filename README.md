# vision
Repository of the Vision App.

I) Infrastructure Used for the Project Development:

For creating Client and Server-Side Development setup we need to follow the steps mentioned below:
  1.Install Nodejs (For Hosting Server)
  2.Eclipse Luna as an IDE for Development
  3.Install Eclipse Plugins (in Eclipse go to Help -> Eclipse Marketplace) and search for the following keyword and install          the plug in
      a.Jboss (Cross Platform Mobile App Development Tools)
      b.Hybrid Mobile Development (Installs Cordova internally)
      c.Jsdt (jQuery for Mobile)
      d. Angularjs 
      e. Python
  4. Download and install Mongodb


II) Things required to be done for generating APK
	1. On any desktop machine , Import  the project uploaded on Github
  2. Install the required plugins mentioned in Step 1.3
	3. Change the server name in the JS(.js)  file to your respective server names.
	4. Now export the project as “ Export Native Platform Project “ to generate the apk file
	 

III) Things required to do on Server Side
	1. On any linux machine untar the “Vision_app.tar.gz” file.
	2. In “server_antardrishti.js” file  change Database details in following line , as required.
			mongoose.connect('mongodb://localhost/Vision',function(err))  // connect to our database
	     	
