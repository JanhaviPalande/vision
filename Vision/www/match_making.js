 /*var requests =  db.request.find()
 
for(var i=0; i < requests.count(); i++){
	var reqType= requests[i].ReqType;
	//print("Matching for "+ reqType);
	db.volunteerOffering.find({"Skill": {$regex: /^reqType/})	
}



	 var request = db.request.find()
	 for(var i =0; i< request.count(); i++){
	 print("Processing");
	 print(request[i].ReqType)
	 var reqType = request[i].ReqType;
	 var ReqCity = request[i].reqCity;
	 //db.volunteerOffering.find({"Skill":new RegExp('.*' + reqType+'*.'),"IsAvail":"Yes","City":new RegExp('.*' + reqCity+'*.')})
	 db.volunteerOffering.find({"Skills":new RegExp('.*' + reqType+'*.'),"City":new RegExp('.*' + ReqCity+'*.')})
	 }*/

	 
	 
	 
	 var request = db.request.find()
	 for(var i =0; i< 1; i++){
	 print("Processing");
	 print(request[i].ReqType)
	 var reqType = request[i].ReqType;
	 var ReqCity = request[i].reqCity;
	 var reqId = request[i].mobile;
	 //db.volunteerOffering.find({"Skill":new RegExp('.*' + reqType+'*.'),"IsAvail":"Yes","City":new RegExp('.*' + reqCity+'*.')})
	 var matches = db.volunteerOffering.find({"Skills":new RegExp('.*' + reqType+'*.'),"City":new RegExp('.*' + ReqCity+'*.')})
	 for(var j=0;j< matches.count();j++){
		 print(matches[j].Skills);
		 var volunteerId = matches[j].mobile;
		 db.matches.save({"ReqID":reqId,"MatchID":volunteerId,"Status":"Open","TimeOpened":"Time"});
	 }
	 }
	 
	/* db.request.save({"ReqType":"Medical","Details":"good doctor","ExtraInfo":"None","reqDate":"01/01/2016","mobile":"4","reqCity":"Pune"})
	  db.request.save({"ReqType":"Banking","Details":"FD","ExtraInfo":"None","reqDate":"01/01/2016","mobile":"3","reqCity":"Mumbai"})
	  dv.request.save({ "ReqType" : "Blood", "ReqDate" : "1 Dec 2015", "ReqName" : "Need O+ blood","ExtraInfo":"None","reqDate":"02/10/2016","mobile":"3","reqCity":"Pune" }
	 db.volunteerOffering.save({"City":"Pune","Skills":"Education,Medical","mobile":"1233"})
	 db.volunteerOffering.save({"City":"Mumbai","Skills":"Banking,Education,Medical","mobile":"133"})
	 db.volunteerOffering.save({"City":"Pune","Skills":"Counselling,Education,Medical","mobile":"123"})
	 
	 */