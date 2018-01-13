var script = document.createElement('script');
 
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

$(document).ready(function(){

    /*! Fades in page on load */
    $('body').css('display', 'none');
    $('body').fadeIn(1500);
    
    });