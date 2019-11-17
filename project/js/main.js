$(document).ready(function(e){
    $(".viewBtn").click(function(e) {
        let target = $(this).parent().parent().parent().find("tr");
        let btnTargetEn = $(this).parent().find("[lang='en']");
        let btnTargetSv = $(this).parent().find("[lang='sv']");
        if(target.attr("class") == "d-none"){
            target.removeClass("d-none");
            $(btnTargetEn).text("hide");           
            $(btnTargetSv).text("dölj");           
            
        }else{
            target.addClass("d-none")
            $(btnTargetEn).text("view");           
            $(btnTargetSv).text("visa"); 
        }           
    });

    $("#svenska").click(function(e){
        $("body").find("[lang='en']").addClass("d-none");
        $("body").find("[lang='sv']").removeClass("d-none");
    })
    $("#english").click(function(e){
        $("body").find("[lang='sv']").addClass("d-none");
        $("body").find("[lang='en']").removeClass("d-none");
    })    

    $(".projectsNav").click(function(e){
        let content = document.getElementById("projects");
        content.scrollIntoView({behavior: "smooth"});
    })
    
    $("#viewAll").click(function(e) {
        let target = $("#personSkillset").find("tr");
        let btnTargetEn = $(".headerBtn").find("[lang='en']");
        let btnTargetSv = $(".headerBtn").find("[lang='sv']");
            target.removeClass("d-none");       
            
            if(target.attr("class") != "d-none"){
                target.removeClass("d-none");
                $(btnTargetEn).text("hide");           
                $(btnTargetSv).text("dölj");           
                
            }
    });

    $("#hideAll").click(function(e) {
        let target = $("#personSkillset").find("tr");
        let btnTargetEn = $(".headerBtn").find("[lang='en']");
        let btnTargetSv = $(".headerBtn").find("[lang='sv']");
        target.addClass("d-none")
        
        if(target.attr("class") == "d-none"){
            target.addClass("d-none");
            $(btnTargetEn).text("view");           
            $(btnTargetSv).text("visa");           
            
        }
    });
})

