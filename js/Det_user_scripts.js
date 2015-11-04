/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
      activate_page("#mainpage"); 
   /* window.alert(intel.xdk.device.uuid);
   
  
     
     var cid = "123456";
     var did = "1234";
     var pwd="abc123";
     
     intel.xdk.services.ValidateLogin({"cid":cid,"pwd":pwd}).then(function (response) {
            //var res =JSON.stringify(response);
            
            if(response.Response.resp === 'Success'){
             alert(response.Response.resp);
                //return false;
            }
            else{
                alert(response.Response.resp);
            }
         
        });  
     intel.xdk.services.GetTroubleTkt({"cid":cid,"did":pwd}).then(function (response) {              
            
             alert(response.Response.resp);
               }); 
     
     intel.xdk.services.GetTroubleTkt({"cid":cid,"did":did}).then(function(response) {
            //var res =JSON.stringify(response);
            window.alert("working..");
            if(response.Response.Count === 0){
             $("fd").html("<div class=\"ui-radio widget uib_w_7\" data-uib=\"jquery_mobile/radio_button\" data-ver=\"0\"><abel>"+"No Tickets Found"+"<input type=\"text\" name=\"jqm-radio-group-0\"></label></div>");
            }
         else if(response.Response.Count === 1){
             $("fd").html("<div class=\"ui-radio widget uib_w_7\" data-uib=\"jquery_mobile/radio_button\" data-ver=\"0\"><label>"+response.Response.Ticket1+"<input type=\"radio\" name=\"jqm-radio-group-0\"></label></div>");
         }
         else if(response.Response.Count === 2){
             $("fd").html("<div class=\"ui-radio widget uib_w_7\" data-uib=\"jquery_mobile/radio_button\" data-ver=\"0\"><label>"+response.Response.Ticket1+"<input type=\"radio\" name=\"jqm-radio-group-0\"></label></div><div class=\"ui-radio widget uib_w_8\" data-uib=\"jquery_mobile/radio_button\" data-ver=\"0\"><label>"+response.Response.Ticket2+"<input type=\"radio\" name=\"jqm-radio-group-0\"></label></div>");
         }
         else if(response.Response.Count === 3){
             $("fd").html("<div class=\"ui-radio widget uib_w_7\" data-uib=\"jquery_mobile/radio_button\" data-ver=\"0\"><label>"+response.Response.Ticket1+"<input type=\"radio\" name=\"jqm-radio-group-0\"></label></div><div class=\"ui-radio widget uib_w_8\" data-uib=\"jquery_mobile/radio_button\" data-ver=\"0\"><label>"+response.Response.Ticket2+"<input type=\"radio\" name=\"jqm-radio-group-0\"></label></div><div class=\"ui-radio widget uib_w_9\" data-uib=\"jquery_mobile/radio_button\" data-ver=\"0\"><label>"+response.Response.Ticket2+"<input type=\"radio\" name=\"jqm-radio-group-0\"></label></div>");
         }
            else{
                window.alert(response.Response.resp);
            }
         
        });  
     window.alert("working..");*/
     /* listitem  Listitem */
    $(document).on("click", ".uib_w_3", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
    });
    
        /* button  #btncreatetkt */
    $(document).on("click", "#btncreatetkt", function(evt)
    {
         /*global activate_page */         
        window.location.href='Map.html';
    });
    
        /* button  #btnext */
    $(document).on("click", "#btnext", function(evt)
    {
         /*global activate_page */
         //activate_page("#mainpage"); 
        navigator.app.exitApp();
    });
    
        /* button  #btncrttkt */
    $(document).on("click", "#btncrttkt", function(evt)
    {
         /*global activate_page */
          window.location.href='Map.html';
    });
    
        /* button  #btnpcd */
    $(document).on("click", "#btnpcd", function(evt)
    {
         /*global activate_page */
         //activate_page("#mainpage"); 
        window.location.href='Map.html';
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
