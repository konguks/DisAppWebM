/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* listitem  Listitem */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage");
        //navigator.geolocation;
        
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
