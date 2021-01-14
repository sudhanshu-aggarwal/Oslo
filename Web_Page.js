

// $("#sec-1b").css("display","none").hide();
// $("#sec-1c").css("display","none").hide();



// $(document).ready(function(){

//     $(".slideshow").animate({

//         if($(this).find("#sec-1a").css("display") == "none")
//         {
//         console.log("yes1");

//             $("#sec-1b").css("display","block").show();
//             $("#sec-1a").css("display","none").hide();
//         }

//     }, 1000);

// });




$(document).ready(function () {

    let width = 1355;
    let animateSpeed = 1000;
    let pause = 3000;
    let currentSlide = 1;

    // let slideShow = $("#slideshow");
    let slider = $("#slider");
    let slide = $(slider).find(".section-1");

    let interval;

    function startSlider() {
        // dotColor();
        interval = setInterval(function () {

            slider.animate({ 'margin-left': '-=' + width }, animateSpeed, function () {

                currentSlide++;
                if (currentSlide >= slide.length) {
                    currentSlide = 1;
                    slider.css('margin-left', 0);

                }

                dotColor();

            });
        }, pause);
    }

    function dotColor() {
        if (currentSlide == 1 || currentSlide == 4) {
            $('#dotx1').css("background-color", "white");
            $('#dotx2').css("background-color", "#666666");
            $('#dotx3').css("background-color", "#666666");
        }
        else if (currentSlide == 2) {
            $('#dotx1').css("background-color", "#666666");
            $('#dotx2').css("background-color", "white");
            $('#dotx3').css("background-color", "#666666");
        }
        else if (currentSlide == 3) {
            $('#dotx1').css("background-color", "#666666");
            $('#dotx2').css("background-color", "#666666");
            $('#dotx3').css("background-color", "white");
        }
    }

    $("#next").on("click", function () {

        if (currentSlide == 3 || currentSlide == 4) {
            currentSlide = 1;
            dotColor();
            clearInterval(interval);

            slider.animate({ "margin-left": 0 }, 500);
            startSlider();

        }
        else if (currentSlide == 1) {
            currentSlide = 2;
            dotColor();
            clearInterval(interval);

            slider.animate({ "margin-left": -1355 }, 500);
            startSlider();
        }
        else if (currentSlide == 2) {
            currentSlide = 3;
            clearInterval(interval);
            dotColor();

            slider.animate({ "margin-left": -2710 }, 500);
            startSlider();
        }

    });


    $("#prev").on("click", function () {

        if (currentSlide == 1 || currentSlide == 4) {
            currentSlide = 3;
            clearInterval(interval);
            dotColor();

            slider.animate({ "margin-left": -2710 }, 500);
            startSlider();
        }
        else if (currentSlide == 3) {
            currentSlide = 2;
            clearInterval(interval);
            dotColor();
            slider.animate({ "margin-left": -1355 }, 500);
            startSlider();

        }
        else if (currentSlide == 2) {
            currentSlide = 1;
            clearInterval(interval);
            dotColor();
            slider.animate({ "margin-left": 0 }, 500);
            startSlider();
        }

    });

    $("#dotx1").click(function () {
        currentSlide = 1;
        clearInterval(interval);
        dotColor();
        slider.animate({ "margin-left": 0 }, 500);
        startSlider();
    });


    $("#dotx2").click(function () {
        currentSlide = 2;
        clearInterval(interval);
        dotColor();
        slider.animate({ "margin-left": -1355 }, 500);
        startSlider();
    });

    $("#dotx3").click(function () {
        currentSlide = 3;
        clearInterval(interval);
        dotColor();
        slider.animate({ "margin-left": -2710 }, 500);
        startSlider();
    });
    // $("#dot1").click(dot1());
    // $("#dot10").click(dot1());


    // function dot1(){
    //     console.log("yes");
    //     container = 3;
    // }
    startSlider();

});