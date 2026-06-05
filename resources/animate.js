$(document).ready(function(){
    $("#animateBtn").click(function(){
        $("#aang").animate({
            width:"800",
            height:"500"
        },
        'swing',
        function(){
            $(this).animate({
                width:"400",
                height:"250"
            })
        }
    );
    });

    $("#fishing_sibs").fadeIn(1000, function(){
        $(this).animate({
            marginTop:"-=175px"
        },
        function(){
            $("#iceberg").hide(function(){
                $("#aang").delay(1000).fadeIn(500, function(){
                    $("#zuko").delay(500).fadeIn(500, function(){
                        $("#animateBtn").show();
                    });
                });
            });
        });
    });

});    



