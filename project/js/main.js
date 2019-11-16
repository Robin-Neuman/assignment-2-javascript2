$(document).ready(function(e){
    $(".viewBtn").click(function(e) {
        let target = $(this).parent().parent().find("tr");
            if(target.attr("class") == "d-none"){
                target.removeClass("d-none");
            }else{
                target.addClass("d-none")
            }
    });

    $("#svenska").click(function(e){
        $("body").find("[lang='en']").addClass("d-none");
        $("body").find("[lang='sv']").removeClass("d-none");
    })
    $("#english").click("english", function(e){
        $("body").find("[lang='sv']").addClass("d-none");
        $("body").find("[lang='en']").removeClass("d-none");
    })    
})

