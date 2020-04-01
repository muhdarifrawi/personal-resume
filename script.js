$("#langCollapse").collapse('show');
changeBtnColor();
$("button[name='langCollapse']").addClass("btn btn-dark m-1");


function changeBtnColor(){
    $(".infoCollapse").removeClass("btn btn-dark m-1");
    $(".infoCollapse").addClass("btn btn-light m-1");
}



function toggleFunction(name){
    // $("#langCollapse").collapse('toggle');
    $(".collapse").collapse("hide");
    changeBtnColor();
    setTimeout(function(){openSelected(name)},360);
}

function openSelected(name){
    btnSelection = "button" + "[name=" + name + "]";
    $(btnSelection).addClass("btn btn-dark m-1");
    selection = "#" + name;
    $(selection).collapse("toggle");
}
