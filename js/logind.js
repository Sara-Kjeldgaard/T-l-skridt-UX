$(document).ready(function() {
    //we make the var popUp so we reuse it easily
    var popUp = $("#popUpBackground");

    //When we enter the page we hide popUp
    popUp.hide();

    //We fetch the button though jQuery and make a click event to show the payment pop-up when the button is clicked. 
    $("#paymentDummy").click(function() {
        popUp.show();
    })
    
    
    $("#popUpActions").click(function() {
        popUp.hide();
    })
});