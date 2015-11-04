/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btnback */
    $(document).on("click", "#btnback", function(evt)
    {
         /*global activate_page */
         //activate_page("#mainpage");
        window.location.href='Map.html';
    });
    
        /* button  #btnexit */
    $(document).on("click", "#btnexit", function(evt)
    {
         /*global activate_page */
         //activate_page("#mainpage"); 
        navigator.app.exitApp();
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
