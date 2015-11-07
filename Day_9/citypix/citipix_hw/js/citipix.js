$(document).ready(function(){
//establish input variable
var city;

//set function to occur when submit
$("#entry").submit(function(event){
    event.preventDefault();
    changeBackground();
});

//set if else statement

//if input = city, set body class to city name
function changeBackground(){
    city = $("#city-type").val();
    city = city.toLowerCase();
    city = city.trim();

    if (city === "new york" || city === "new york city" || city === "nyc"){
        $("body").removeClass().addClass("nyc");
    }
    else if (city === "san francisco" || city === "sf" || city === "bay area"){
        $("body").removeClass().addClass("sf");
    }
    else if (city === "los angeles" || city === "la" || city === "lax"){
        $("body").removeClass().addClass("la");
    }
    else if (city === "austin" || city === "atx"){
        $("body").removeClass().addClass("austin");
    }
    else if (city === "sydney" || city === "syd"){
        $("body").removeClass().addClass("sydney");
    }
    
    else if (city === "boston" || city === "beantown"){
        $("body").removeClass().addClass("boston");
    }
    else {
        $("body").removeClass().addClass("else");
    };
    $("#entry")[0].reset();
};

});