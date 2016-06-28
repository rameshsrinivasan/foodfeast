$(document).ready(function($) {
    // hide messages 
    $(".error").hide();
    $(".success").hide();
    $('#contactForm input').click(function(e) {
        $(".error").fadeOut();
    });
    // on submit...
    $("#contactForm #submit").click(function() {
        $(".error").hide();
        //required:
        //name
        var name = $("input#name").val();
        if (name == "") {
            $('#fname').fadeIn('slow');
            $("input#name").focus();
            return false;
        }
        var email = $("input#email").val();
        if (email == "") {
            $('#fmail').fadeIn('slow');
            $("input#email").focus();
            return false;
        }
        if (email !== "") {  // If something was entered
            if (!isValidEmailAddress(email)) {
                $('#fmail').fadeIn('slow'); //error message
                $("input#email").focus();   //focus on email field
                return false;
            }
        }
        function isValidEmailAddress(emailAddress) {
            var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
            return pattern.test(emailAddress);
        }
        ;
        // comments
        var comments = $("#msg").val();
        if (comments == "") {
            $('#fmsg').fadeIn('slow');
            $("input#msg").focus();
            return false;
        }
        $('#contact-message').attr("style", "display:block");
        $('#fname').attr("style", "display:none");
        $('#name').val('');
        $('#email').val('');
        $('#msg').val('');
    });
    // on success...
    function success() {
        $("#success").fadeIn();
        $("#contactForm").fadeOut();
    }
    return false;
});
