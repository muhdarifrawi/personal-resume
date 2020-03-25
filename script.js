$("#langCollapse").collapse('show');

function toggleFunction(name){
    // $("#langCollapse").collapse('toggle');
    $(".collapse").collapse("hide");
    setTimeout(function(){openSelected(name)},360);
}

function openSelected(name){
    selection = "#" + name;
    console.log(selection);
    $(selection).collapse("toggle");
}