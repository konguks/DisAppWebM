/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
    var desc;
    var cid;
    var tkt1;
    var tkt2;
    var tkt3;
    var chkd;
    var lat1;
    var lang1;
    var lat2;
    var lat3;
    var lang2;
    var lang3;
 function register_event_handlers()
 {
    //intel.xdk.device.addVirtualPage();
     //activate_page("#mainpage");
  
    
    
        /* button  Proceed */
    $(document).on("click", "#btnproceed", function(evt)
    {
         /*global activate_page */
         cid = document.getElementById("txtcid").value;
        var pwd = document.getElementById("txtpwd").value;
        if(cid === '' || cid === null){
            window.alert("Please Enter Customer ID.");
            return false;
        }
        if(pwd === '' || pwd === null){
            window.alert("Please Enter Password.");
            return false;
        }
        
        //var uri = 'http://localhost:5104/api/Login/Validate?'+'cid='+cid+'&pwd='+pwd;
        
        /*$.getJSON(uri).done(function(data){
            window.alert(data);
        });*/
        
          /* $.ajax({
        type: "GET",
        url: uri,        
        async:true,
        dataType : 'jsonp',   //you may use jsonp for cross origin request
        crossDomain:true,
        success: function(data) {
            window.alert(data);
        }
    });*/
        //$.getScript("intelxdk.js",function(){});
        /*intel.xdk.services.ValidateLogin({"cid":cid,"pwd":pwd}).then(function (response) {
            //var res =JSON.stringify(response);
            
            if(response.Response.resp === 'Success'){
             window.location.href='Det.html'; 
                return false;
            }
            else{
                alert(response.Response.resp);
            }
         
        });     */
        
        if(cid ==='123456' && pwd === 'abc123'){
            window.location.href='index.html#Ticket';
            activate_page("#Ticket");
            $("#lbltkt1").html("T584623<input type=\"radio\" name=\"jqm-radio-group-0\" value=\"t1\" id=\"t1\">");
            $("#lbltkt2").html("T965478<input type=\"radio\" name=\"jqm-radio-group-0\" value=\"t2\" id=\"t2\">");
            $("#lbltkt3").html("T325698<input type=\"radio\" name=\"jqm-radio-group-0\" value=\"t3\" id=\"t3\">");
            tkt1 = "T584623";
            tkt2 = "T965478";
            tkt3 = "T325698";
           // window.location.href='Det.html'; 
        }else if(cid === '987654' && pwd === 'vdsi@123'){
            window.location.href='index.html#Ticket';
            activate_page("#Ticket");
            $("#lbltkt1").html("T589742<input type=\"radio\" name=\"jqm-radio-group-0\" value=\"t1\" id=\"t1\">");
            $("#lbltkt2").html("T652398<input type=\"radio\" name=\"jqm-radio-group-0\" value=\"t2\" id=\"t2\">");
           $("#divtkt3").hide();
            tkt1 = "T589742";
            tkt2 = "T652398";
        } else {
            window.alert("Please enter valid Credentials..");
        }
        
        
        //window.location.href=uri;
        //activate_page("#Details");
        //document.getElementById("txtcid").value='clicked';      
    });
    
        /* button  Exit */
    $(document).on("click", "#btnexit", function(evt)
    {
         /*global activate_page */
         /**/ 
         navigator.app.exitApp();
        /*window.close();*/
    });
     
     $(document).on("click", "#btnddexit", function(evt)
    {
         /*global activate_page */
         /**/ 
         navigator.app.exitApp();
        /*window.close();*/
    });
     
     $(document).on("click", "#btnddback", function(evt)
    {
         /*global activate_page */
         /**/ 
         window.location.href='index.html#Maps';
         activate_page("#Maps"); 
         
        /*window.close();*/
    });
     
         /* button  #btnmapback */
    $(document).on("click", "#btnmapback", function(evt)
    {
        window.location.href='index.html#Ticket';
         activate_page("#Ticket"); 
    });
    
        /* button  Exit */
    /*$(document).on("click", ".uib_w_4", function(evt)
    {
         /*global activate_page */
         /*activate_page("#Details"); 
    });*/
    
        /* button  #btnpcd */
    $(document).on("click", "#btnpcd", function(evt)
    {
         /*global activate_page */
        //window.alert($("#jqm-radio-group-0 :checked").val());
        if($('#t1').is(':checked')){
            chkd = tkt1;
        }else if($('#t2').is(':checked')){
            chkd = tkt2;
        }else if($('#t3').is(':checked')){
            chkd = tkt3;
        }
        window.location.href='index.html#Maps';
         activate_page("#Maps"); 
        
        if(chkd === "T584623"){
	$("#crd1hdr").html("arriving in 23 mins");
	$("#crd1bdy").html("Chris Jordan");
	$("#crd1ftr").html("Review Rating : 4.5");
	$("#crd2hdr").html("arriving in 45 mins");
	$("#crd2bdy").html("Juan Vega");
	$("#crd2ftr").html("Review Rating : 4.75");
	$("#crd3hdr").html("arriving in 120 mins");
	$("#crd3bdy").html("Kone Tenon");
	$("#crd3ftr").html("Review Rating : 3.5");
            lat1 = 17.436583;
            lang1 = 78.390012;
            lat2 = 17.433659;
            lang2 = 78.370408;
            lat3 = 17.433170;
            lang3 = 78.367908;
        }
else if(chkd === "T965478"){
	$("#crd1hdr").html("arriving in 43 mins");
	$("#crd1bdy").html("George Brown");
	$("#crd1ftr").html("Review Rating : 4.0");
	$("#crd2hdr").html("arriving in 69 mins");
	$("#crd2bdy").html("Shaun Merch");
	$("#crd2ftr").html("Review Rating : 4.25");
	$("#crd3hdr").html("arriving in 137 mins");
	$("#crd3bdy").html("Mike Tien");
	$("#crd3ftr").html("Review Rating : 3.5");
    lat1 = 17.440522;
            lang1 = 78.366432;
            lat2 = 17.451092;
            lang2 = 78.370767;
            lat3 = 17.445410;
            lang3 = 78.389528;
        }
		else if(chkd === "T325698"){
	$("#crd1hdr").html("arriving in 69 mins");
	$("#crd1bdy").html("Shaun Merch");
	$("#crd1ftr").html("Review Rating : 4.25");
	$("#crd2hdr").html("arriving in 72 mins");
	$("#crd2bdy").html("Mike Hussey");
	$("#crd2ftr").html("Review Rating : 3.75");
	$("#crd3hdr").html("arriving in 109 mins");
	$("#crd3bdy").html("Gregor Bottom");
	$("#crd3ftr").html("Review Rating : 3.5");
            lat1 = 17.458569;
            lang1 = 78.398873;
            lat2 = 17.472063;
            lang2 = 78.386799;
            lat3 = 17.463324;
            lang3 = 78.373478;
        }
		else if(chkd === "T589742"){
	$("#crd1hdr").html("arriving in 31 mins");
	$("#crd1bdy").html("Ibrahim Welse");
	$("#crd1ftr").html("Review Rating : 4.75");
	$("#crd2hdr").html("arriving in 56 mins");
	$("#crd2bdy").html("G S Stokes");
	$("#crd2ftr").html("Review Rating : 4.5");
	$("#crd3hdr").html("arriving in 96 mins");
	$("#crd3bdy").html("Abdul Khalif");
	$("#crd3ftr").html("Review Rating : 3.5");
            lat1 = 17.436583;
            lang1 = 78.390012;
            lat2 = 17.433659;
            lang2 = 78.370408;
            lat3 = 17.433170;
            lang3 = 78.367908;
        }
		else if(chkd === "T652398"){
	$("#crd1hdr").html("arriving in 27 mins");
	$("#crd1bdy").html("Phan Charles");
	$("#crd1ftr").html("Review Rating : 4.5");
	$("#crd2hdr").html("arriving in 61 mins");
	$("#crd2bdy").html("Daniel Martin");
	$("#crd2ftr").html("Review Rating : 4.0");
	$("#crd3hdr").html("arriving in 116 mins");
	$("#crd3bdy").html("James Faulkner");
	$("#crd3ftr").html("Review Rating : 3.75");
            lat1 = 17.454965;
            lang1 = 78.369717;
            lat2 = 17.448565;
            lang2 = 78.370136;
            lat3 = 17.447895;
            lang3 = 78.363276;
        }
    });
    
        /* button  #btncrttkt */
    
    
        /* button  #btncrttkt */
    $(document).on("click", "#btncrttkt", function(evt)
    {
        desc = document.getElementById("txtdesc").value;
        if(desc === '' || desc === null){
            window.alert("Please describe the issue.");
            return false;
        }
         /*global activate_page */
        window.location.href='index.html#Maps';
         activate_page("#Maps"); 
    });
    
        /* button  #btnrqdd */
    $(document).on("click", "#btnrqdd", function(evt)
    {
         /*global activate_page */
        window.location.href='index.html#Duedate';
         activate_page("#Duedate"); 
    });
     
     $(document).on("click","#crd1",function(evt)
    {
         window.location.href='index.html#distance';
         activate_page("#distance"); 
         distmap();
    });
     $(document).on("click","#crd2",function(evt)
    {
         window.location.href='index.html#distance';
         activate_page("#distance"); 
         distmap();
    });
     $(document).on("click","#crd3",function(evt)
    {
         window.location.href='index.html#distance';
         activate_page("#distance"); 
         distmap();
    });
     
     
     function distmap(){         
                    navigator.geolocation.getCurrentPosition(function(position){                        
                        var directionsService = new google.maps.DirectionsService;
      					var directionsDisplay = new google.maps.DirectionsRenderer;  
                         var image = new google.maps.MarkerImage("house.png");
                        var tech = new google.maps.MarkerImage("tech.png");
						
                    var mapProp = {center:new google.maps.LatLng(position.coords.latitude,position.coords.longitude), zoom:15, mapTypeId:google.maps.MapTypeId.ROADMAP,icon:image};
                         
                    var map=new google.maps.Map(document.getElementById("googleMapDist"), mapProp);
                       //window.alert('working..');                        
                    //var marker=new google.maps.Marker({position:new google.maps.LatLng(position.coords.latitude,position.coords.longitude),icon:image});
                    //marker.setMap(map);
					directionsDisplay.setMap(map);
                       
					directionsService.route({
          origin: new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
          destination: new google.maps.LatLng(17.443276,78.354400),
          travelMode: google.maps.TravelMode.DRIVING
        }, function(response, status) {
                        
          if (status === google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });       
                    }, function(error){
                        if(error.code == PositionError.PERMISSION_DENIED)
                        {
                            alert("App doesn't have permission to use GPS");
                        }
                        else if(error.code == PositionError.POSITION_UNAVAILABLE)
                        {
                            alert("No GPS device found");
                        }
                        else if(error.code == PositionError.TIMEOUT)
                        {
                            alert("Its taking too long find user location");
                        }
                        else
                        {
                            alert("An unknown error occured");
                        }
                    }, { maximumAge: 3000, timeout: 50000, enableHighAccuracy: true });
                };
    
    
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
  document.addEventListener("intel.xdk.device.hardware.back",function() {
//continue to grab the back button
   //intel.xdk.device.addVirtualPage();
}, false);   
})();

