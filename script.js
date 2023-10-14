$(document).ready(function(){
    $(resume).click(function(){
        $(resume).animate({
            width: "700px",
            height: "+=200px"
        }, "fast");
        
        $(".before").show().animate({
            opacity: "0"
        }, 10)

        $(".after").show().animate({
            opacity: "1"
        },2000)
        $(".final-section").show().animate({
            opacity: "1"
        }, 4000);
    });
});