$(document).ready(function () {

    //NAVIGATION LINK
    $('body').on('click', '#work', function (event) {
        event.preventDefault();

        $.get("/Home/Work", function (data) {
            $('#change-content').html(data);
        });
    });

    $('body').on('click', '#about', function (event) {
        event.preventDefault();

        $.get("/Home/About", function (data) {
            $('#change-content').html(data);
        });
    });

    $('body').on('click', '#careers', function (event) {
        event.preventDefault();

        $.get("/Home/Careers", function (data) {
            $('#change-content').html(data);
        });
    });

    $('body').on('click', '#contact', function (event) {
        event.preventDefault();

        $.get("/Home/Contact", function (data) {
            $('#change-content').html(data);
        });
    });

    //CONTACT FORM (HTML REQUIRED ATTRIBUTE DOES'T WORK USING JAVASCRIPT)
    $('body').on('click', '#button', function (event) {
        event.preventDefault();
        var fields = { firstName: $('#firstName').val(), lastName: $('#lastName').val(), email: $('#email').val(), phoneNumber: $('#phoneNumber').val(), companyName: $('#companyName').val(), projectDescription: $('#projectDescription').val(), comment: $('#comment').val() }

        //check all fields required
        if ($('#firstName').val().length == 0 || $('#lastName').val().length == 0 || $('#email').val().length == 0 || $('#phoneNumber').val().length == 0 || $('#companyName').val().length == 0 || $('#projectDescription').val().length == 0 || $('#comment').val().length==0) {
            alert("All fields are required");
        }
            //if email is valid
        else if (ValidateEmail($('#email').val())) {
            var posting = $.post("/Home/Contact", fields);
            posting.done(function (data) {
                $('#change-content').html(data);
            });

        }
        else {
            alert("You have entered an invalid email address!");
            $('#email').focus();          
        }
    });

    //validate email 
    function ValidateEmail(inputText) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return (inputText.match(mailformat));      
    }

    //ABOUT TABS
    $('body').on('click', '#who', function (event) {
        event.preventDefault();

        $(".active").removeClass("active");
        $("#who").addClass("active");
        $.post("/Home/Who", function (data) {
            $('#change-tab').html(data);
        });
    });

    $('body').on('click', '#what', function (event) {
        event.preventDefault();

        $(".active").removeClass("active");
        $("#what").addClass("active");
        $.post("/Home/What", function (data) {
            $('#change-tab').html(data);
        });
    });
    $('body').on('click', '#why', function (event) {
        event.preventDefault();

        $(".active").removeClass("active");
        $("#why").addClass("active");
        $.post("/Home/Why", function (data) {
            $('#change-tab').html(data);
        });
    });

    $('body').on('click', '#how', function (event) {
        event.preventDefault();

        $(".active").removeClass("active");
        $("#how").addClass("active");
        $.post("/Home/How", function (data) {
            $('#change-tab').html(data);
        });
    });
    $('body').on('click', '#where', function (event) {
        event.preventDefault();

        $(".active").removeClass("active");
        $("#where").addClass("active");
        $.post("/Home/Where", function (data) {
            $('#change-tab').html(data);
        });
    });
});

