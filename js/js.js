console.log('JavaScript from js/js.js: up and running!');

/**
/* OpenWeatherMap + Date
**/

    const token = "7787eba892e91f445428130ca2445d6e"; // save your token in this variable
    const aarhus = "https://api.openweathermap.org/data/2.5/weather?q=Aarhus&lang=da&units=metric&appid="
    + token
    
    var currentDate = new Date()
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()

    $(document).ready(function() {

    // get the weather data
    fetch(aarhus).then(response => {
      return response.json();
    }).then(data => {
        
      // Work with JSON data here
      console.log(data); // show what's in the json
    
      $('#result').append(
        '<p>' + day + '-' + month + '-' + year +'</p>' + 
        '<figure><img src="http://openweathermap.org/img/w/' + 
        data.weather[0].icon + '.png" alt="The weather : ' + 
        data.weather[0].main + '"></figure>' + 
        '<p>' + data.main[0].temp + '</p>' +
      '<p id="weather-description">' + data.weather[0].description + '</p>'
      );
        
        // here are the icons: https://openweathermap.org/weather-conditions 

    }).catch(err => {
      // Do something for an error here
      console.log('There was an error ...');
    });
        
        
    /*
    *  Farveskift ved aktiv knap
    */
        $(function() {
    $('.deltager-knap').on('click', function(e) {
        $('.deltager-knap.active').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
});
        
        $(function() {
    $('.hold-knap').on('click', function(e) {
        $('.hold-knap.active').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
});
    
        
    /*
    *  Åben sektioner v. klik-event
    */
        $("#nyKaptajn").click(function(){
            $("#nyt-hold").toggle(666);
        });
        
        $("#TidlKaptajn").click(function(){
            $("#tidligere-hold").toggle(666);
            $("#holdKnapper").toggle(666);
        });
        
        
  }); // document ready end