console.log("JavaScript from js/js.js: up and running!");

/**
/* OpenWeatherMap + Date
**/

const token = "7787eba892e91f445428130ca2445d6e"; // save your token in this variable
const aarhus =
    "https://api.openweathermap.org/data/2.5/weather?q=Aarhus&lang=da&units=metric&appid=" +
    token;

var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();

$(document).ready(function() {
    // get the weather data
    fetch(aarhus)
        .then(response => {
            return response.json();
        })
        .then(data => {
            // Work with JSON data here
            console.log(data); // show what's in the json

            $("#weatherBox").append(
                "<p>" + day + "-" + month + "-" + year + "</p>" +
                '<figure><img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png" alt="The weather : ' + data.weather[0].main + '"></figure>' +
                "<p>" + data.main.temp + " grader</p>" +
                '<p id="weather-description">' + data.weather[0].description + "</p>"
            );

            // here are the icons: https://openweathermap.org/weather-conditions
        })
        .catch(err => {
            // Do something for an error here
            console.log("There was an error ...");
        });

    /*
     *  Farveskift ved aktiv knap
     */
    
    var tidlHold = $("#tidligere-hold");
    var nyHold = $("#nyt-hold");
    var holdKnapper = $("#holdKnapper");
    var deltagKnap = $("#deltag-knap");
    var actionText = $("#actionText");
    
    tidlHold.hide();
    nyHold.hide();
    holdKnapper.hide();
    deltagKnap.hide();
    actionText.hide();
    
    $(function() {
        $(".deltager-knap").on("click", function(e) {
            // Now we want to show the text prompting the user to select an action
            actionText.show();
            
            $(".deltager-knap.active").removeClass("active");
            $(this).addClass("active");
            holdKnapper.toggle(666);
            holdKnapper.show();
            e.preventDefault();
        });
    });

    $(function() {
        $(".hold-knap").on("click", function(e) {
            $(".hold-knap.active").removeClass("active");
            $(this).addClass("active");
            e.preventDefault();
        });
    });
    
    $("#lavNytHold").click(function() {
        nyHold.toggle(666);
        nyHold.show();
        deltagKnap.show();
    })
    
    $("#genopretGammeltHold").click(function() {
        tidlHold.toggle(666);
        tidlHold.show();
        deltagKnap.show();
    })

    
    /*
     *  Åben sektioner v. klik-event
     */
    /*$("#nyKaptajn").click(function() {
        $("#nyt-hold").toggle(666);
    });

    $("#TidlKaptajn").click(function() {
        $("#tidligere-hold").toggle(666);
        $("#holdKnapper").toggle(666);
    });*/
}); // document ready end
